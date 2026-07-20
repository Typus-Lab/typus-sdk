import { JsonUpdate, PythLazerClient, type PriceFeedProperty } from "@pythnetwork/pyth-lazer-sdk";
import {} from "@pythnetwork/pyth-lazer-sui-js";
import { SuiJsonRpcClient } from "@mysten/sui/jsonRpc";
import { Transaction, type TransactionResult } from "@mysten/sui/transactions";
import { TOKEN, tokenType } from "src/constants";
import { feedIds, lazerStateId } from "./constant";

const DEFAULT_PROPERTIES: PriceFeedProperty[] = ["price", "emaPrice", "exponent", "feedUpdateTimestamp"];

export interface PythLazerSuiClientOpts {
    lazer: PythLazerClient;
    sui: SuiJsonRpcClient;
    network: "MAINNET" | "TESTNET";
    lazerPackage: string;
    oraclePackage: string;
    oracleV2Id: string;
    stateObjectId?: string;
}

export class PythLazerSuiClient {
    readonly lazer: PythLazerClient;
    readonly sui: SuiJsonRpcClient;
    readonly network: "MAINNET" | "TESTNET";
    readonly stateObjectId: string;
    readonly lazerPackage: string;
    readonly oraclePackage: string;
    readonly oracleV2Id: string;

    constructor(opts: PythLazerSuiClientOpts) {
        this.lazer = opts.lazer;
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
        if (timestamp) {
            update = await this.lazer.getPrice({
                priceFeedIds,
                properties: DEFAULT_PROPERTIES,
                formats: ["leEcdsa"],
                jsonBinaryEncoding: "hex",
                channel: "fixed_rate@200ms",
                timestamp: timestamp * 1000000, // seconds -> nanoseconds
            });
        } else {
            update = await this.lazer.getLatestPrice({
                priceFeedIds,
                properties: DEFAULT_PROPERTIES,
                formats: ["leEcdsa"],
                jsonBinaryEncoding: "hex",
                channel: "fixed_rate@200ms",
            });
        }
        console.log(update);

        const hex = update.leEcdsa?.data;
        if (!hex) {
            throw new Error("Pyth Lazer getLatestPrice returned no leEcdsa payload");
        }
        const u8array = Uint8Array.from(Buffer.from(hex, "hex"));

        // pyth-lazer-sui-js@0.3.0 was built against @mysten/sui@^1.x and types its
        // client parameter as the (now-renamed) v1 SuiClient. The runtime contract is
        // `getObject({ id, options: { showContent } }) -> { data, error }`, which the
        // v2.x SuiJsonRpcClient satisfies — so cast at the boundary.
        return tx.moveCall({
            target: `${this.lazerPackage}::pyth_lazer::parse_and_verify_le_ecdsa_update`,
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
            target: `${this.oraclePackage}::oracle_v2::update_latest_price`,
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
            target: `${this.oraclePackage}::oracle_v2::update_settle_price`,
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
            target: `${this.oraclePackage}::oracle_v2::add_latest_price_new_token`,
            typeArguments: [typeArg],
            arguments: [tx.object(this.oracleV2Id), tx.pure.u32(feedId), verifiedUpdate, tx.object("0x6")],
        });
    }

    /**
     * Calls `oracle_v2::add_settle_price_new_token<TOKEN>(oracle_v2, feed_id, update, clock)`.
     * `timestamp` (seconds) is forwarded to the Lazer fetch when supplied.
     */
    async addSettlePriceNewToken(tx: Transaction, token: TOKEN, timestamp?: number, tokenTypeArgument?: string): Promise<void> {
        const feedId = this.resolveFeedIds([token])[0];
        const typeArg = this.resolveTypeArgument(token, tokenTypeArgument);
        const verifiedUpdate = await this.updatePythLazer(tx, [token], timestamp);
        tx.moveCall({
            target: `${this.oraclePackage}::oracle_v2::add_settle_price_new_token`,
            typeArguments: [typeArg],
            arguments: [tx.object(this.oracleV2Id), tx.pure.u32(feedId), verifiedUpdate, tx.object("0x6")],
        });
    }
}
