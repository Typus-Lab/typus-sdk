// Type-only: the WS client is node-only, and importing it for real would drag
// the whole Lazer SDK into browser bundles that never construct one.
import type { JsonUpdate, PythLazerClient, Channel, PriceFeedProperty } from "@pythnetwork/pyth-lazer-sdk";
import {} from "@pythnetwork/pyth-lazer-sui-js";
import { SuiJsonRpcClient } from "@mysten/sui/jsonRpc";
import { Transaction, type TransactionResult } from "@mysten/sui/transactions";
import { TOKEN, tokenType } from "src/constants";
import { feedIds, lazerStateId } from "./constant";

const DEFAULT_PROPERTIES: PriceFeedProperty[] = ["price", "emaPrice", "exponent", "feedUpdateTimestamp"];

// The mainnet oracle reads `fixed_rate@1000ms`, and that channel is only served
// by the Lazer *v2* Move API (`..._v2` entries) — the v1 entries are pinned to
// the 200ms channel. Changing one without the other aborts on-chain.
const DEFAULT_CHANNEL: Channel = "fixed_rate@1000ms";
const DEFAULT_MOVE_API: MoveApiVersion = "v2";

// Signed (`leEcdsa`) payloads come from the legacy Lazer host, not the Pro `/v1`
// API — the Pro OpenAPI exposes no signed-payload route at all.
const DEFAULT_REST_ENDPOINT = "https://pyth-lazer-0.dourolabs.app";

export type MoveApiVersion = "v1" | "v2";

/** Browser-safe: hex -> bytes without Node's Buffer. */
const hexToBytes = (hex: string): Uint8Array => {
    const clean = hex.startsWith("0x") ? hex.slice(2) : hex;
    if (clean.length % 2 !== 0) {
        throw new Error("Pyth Lazer leEcdsa payload is not valid hex (odd length)");
    }
    const out = new Uint8Array(clean.length / 2);
    for (let i = 0; i < out.length; i++) {
        out[i] = parseInt(clean.slice(i * 2, i * 2 + 2), 16);
    }
    return out;
};

export interface PythLazerSuiClientOpts {
    /**
     * Long-lived-key source (WebSocket). Node-side crankers and scripts pass
     * this. Do NOT use it in a browser — the key would ship in the bundle.
     */
    lazer?: PythLazerClient;
    /**
     * Client-safe alternative: returns a short-lived Pyth JWT per call, and
     * price fetches go over REST instead of the WS. The JWT is accepted on
     * `POST /v1/latest_price` and `/v1/price` (verified against mainnet), and
     * that host sends `access-control-allow-origin: *`, so the browser can call
     * it directly. Takes precedence over `lazer` when both are supplied.
     */
    getAccessToken?: () => string | Promise<string>;
    restEndpoint?: string;
    channel?: Channel;
    /** Which Lazer Move API to call. See DEFAULT_MOVE_API. */
    moveApiVersion?: MoveApiVersion;
    sui: SuiJsonRpcClient;
    network: "MAINNET" | "TESTNET";
    lazerPackage: string;
    oraclePackage: string;
    oracleV2Id: string;
    stateObjectId?: string;
}

export class PythLazerSuiClient {
    readonly lazer?: PythLazerClient;
    readonly getAccessToken?: () => string | Promise<string>;
    readonly restEndpoint: string;
    readonly channel: Channel;
    readonly moveApiVersion: MoveApiVersion;
    readonly sui: SuiJsonRpcClient;
    readonly network: "MAINNET" | "TESTNET";
    readonly stateObjectId: string;
    readonly lazerPackage: string;
    readonly oraclePackage: string;
    readonly oracleV2Id: string;

    constructor(opts: PythLazerSuiClientOpts) {
        this.lazer = opts.lazer;
        this.getAccessToken = opts.getAccessToken;
        // A missing price source is only fatal when a price is actually fetched
        // — plenty of callers construct a client purely for read-only views.
        this.restEndpoint = (opts.restEndpoint ?? DEFAULT_REST_ENDPOINT).replace(/\/+$/, "");
        this.channel = opts.channel ?? DEFAULT_CHANNEL;
        this.moveApiVersion = opts.moveApiVersion ?? DEFAULT_MOVE_API;
        this.sui = opts.sui;
        this.network = opts.network;
        this.lazerPackage = opts.lazerPackage;
        this.oraclePackage = opts.oraclePackage;
        this.oracleV2Id = opts.oracleV2Id;
        this.stateObjectId = opts.stateObjectId ?? lazerStateId[opts.network];
        if (!this.stateObjectId) {
            throw new Error(`No Pyth Lazer state object id mapped for ${opts.network}`);
        }
    }

    /** `_v2` suffix on the Lazer/oracle entries when on the v2 Move API. */
    private get v(): string {
        return this.moveApiVersion === "v2" ? "_v2" : "";
    }

    /**
     * Fetches a signed `leEcdsa` update over REST using a short-lived token.
     * Mirrors typus-rust `lazer_ingestion::rest_client`.
     */
    private async fetchUpdateOverRest(priceFeedIds: number[], timestamp?: number): Promise<JsonUpdate> {
        const token = await this.getAccessToken!();
        const path = timestamp ? "v1/price" : "v1/latest_price";
        const res = await fetch(`${this.restEndpoint}/${path}`, {
            method: "POST",
            headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
            body: JSON.stringify({
                priceFeedIds,
                properties: DEFAULT_PROPERTIES,
                formats: ["leEcdsa"],
                jsonBinaryEncoding: "hex",
                channel: this.channel,
                ...(timestamp ? { timestamp: timestamp * 1000000 } : {}),
            }),
        });
        if (!res.ok) {
            throw new Error(`Pyth Lazer ${path} ${res.status}: ${await res.text()}`);
        }
        return (await res.json()) as JsonUpdate;
    }

    private resolveFeedIds(tokens: TOKEN[]): number[] {
        return tokens.map((token) => {
            const id = feedIds[token];
            if (id == null) {
                throw new Error(`No Pyth Lazer feed id mapped for token ${token}`);
            }
            return id;
        });
    }

    private resolveTypeArgument(token: TOKEN, override?: string): string {
        const typeArg = override ?? tokenType[this.network][token];
        if (!typeArg) {
            throw new Error(`No coin type mapped for ${token} on ${this.network}`);
        }
        return typeArg;
    }

    /**
     * Fetches a Pyth Lazer `leEcdsa` update covering every requested token, adds
     * `pyth_lazer::parse_and_verify_le_ecdsa_update` to the PTB, and returns the
     * verified `Update` argument for use in subsequent move calls.
     */
    async updatePythLazer(tx: Transaction, tokens: TOKEN[], timestamp?: number): Promise<TransactionResult> {
        const priceFeedIds = this.resolveFeedIds(tokens);

        let update: JsonUpdate;
        if (!this.lazer && !this.getAccessToken) {
            throw new Error("PythLazerSuiClient needs either `lazer` (WS) or `getAccessToken` (REST) to fetch prices");
        }
        if (this.getAccessToken) {
            update = await this.fetchUpdateOverRest(priceFeedIds, timestamp);
        } else if (timestamp) {
            update = await this.lazer!.getPrice({
                priceFeedIds,
                properties: DEFAULT_PROPERTIES,
                formats: ["leEcdsa"],
                jsonBinaryEncoding: "hex",
                channel: this.channel,
                timestamp: timestamp * 1000000, // seconds -> nanoseconds
            });
        } else {
            update = await this.lazer!.getLatestPrice({
                priceFeedIds,
                properties: DEFAULT_PROPERTIES,
                formats: ["leEcdsa"],
                jsonBinaryEncoding: "hex",
                channel: this.channel,
            });
        }

        const hex = update.leEcdsa?.data;
        if (!hex) {
            throw new Error("Pyth Lazer getLatestPrice returned no leEcdsa payload");
        }
        const u8array = hexToBytes(hex);

        return tx.moveCall({
            target: `${this.lazerPackage}::pyth_lazer::parse_and_verify_le_ecdsa_update${this.v}`,
            arguments: [tx.object(this.stateObjectId), tx.object.clock(), tx.pure.vector("u8", u8array)],
        });
    }

    /**
     * Calls `oracle_v2::update_latest_price(oracle_v2, update, clock)`. A single
     * call updates every feed in the verified update.
     */
    async updateOracleV2WithPythLazer(tx: Transaction, tokens: TOKEN[]): Promise<void> {
        const verifiedUpdate = await this.updatePythLazer(tx, tokens);
        tx.moveCall({
            target: `${this.oraclePackage}::oracle_v2::update_latest_price${this.v}`,
            typeArguments: [],
            arguments: [tx.object(this.oracleV2Id), verifiedUpdate, tx.object("0x6")],
        });
    }

    /**
     * Calls `oracle_v2::update_settle_price(oracle_v2, update, timestamp, clock)`.
     * Authority-gated on-chain. `timestamp` is in seconds.
     */
    async updateOracleV2SettlePriceWithPythLazer(tx: Transaction, tokens: TOKEN[], timestamp: number): Promise<void> {
        const verifiedUpdate = await this.updatePythLazer(tx, tokens, timestamp);
        tx.moveCall({
            target: `${this.oraclePackage}::oracle_v2::update_settle_price${this.v}`,
            typeArguments: [],
            arguments: [tx.object(this.oracleV2Id), verifiedUpdate, tx.pure.u64(timestamp), tx.object("0x6")],
        });
    }

    /**
     * Calls `oracle_v2::add_latest_price_new_token<TOKEN>(oracle_v2, feed_id, update, clock)`.
     * One-shot initializer for a brand-new token in the oracle's `feed_id_map`.
     */
    async addLatestPriceNewToken(tx: Transaction, token: TOKEN, tokenTypeArgument?: string): Promise<void> {
        const feedId = this.resolveFeedIds([token])[0];
        const typeArg = this.resolveTypeArgument(token, tokenTypeArgument);
        const verifiedUpdate = await this.updatePythLazer(tx, [token]);
        tx.moveCall({
            target: `${this.oraclePackage}::oracle_v2::add_latest_price_new_token${this.v}`,
            typeArguments: [typeArg],
            arguments: [tx.object(this.oracleV2Id), tx.pure.u32(feedId), verifiedUpdate, tx.object("0x6")],
        });
    }

    /**
     * Calls `oracle_v2::add_settle_price_new_token<TOKEN>(oracle_v2, feed_id, update, timestamp, clock)`.
     * `timestamp` (seconds) is forwarded to the Lazer fetch when supplied and
     * passed on-chain; defaults to now, matching the freshness window.
     */
    async addSettlePriceNewToken(tx: Transaction, token: TOKEN, timestamp?: number, tokenTypeArgument?: string): Promise<void> {
        const feedId = this.resolveFeedIds([token])[0];
        const typeArg = this.resolveTypeArgument(token, tokenTypeArgument);
        const ts = timestamp ?? Math.floor(Date.now() / 1000);
        const verifiedUpdate = await this.updatePythLazer(tx, [token], timestamp);
        tx.moveCall({
            target: `${this.oraclePackage}::oracle_v2::add_settle_price_new_token${this.v}`,
            typeArguments: [typeArg],
            arguments: [tx.object(this.oracleV2Id), tx.pure.u32(feedId), verifiedUpdate, tx.pure.u64(ts), tx.object("0x6")],
        });
    }
}
