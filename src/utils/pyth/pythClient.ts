import { JsonUpdate, PythLazerClient, type PriceFeedProperty } from "@pythnetwork/pyth-lazer-sdk";
import {} from "@pythnetwork/pyth-lazer-sui-js";
import { SuiJsonRpcClient } from "@mysten/sui/jsonRpc";
import { Transaction, type TransactionResult } from "@mysten/sui/transactions";
import { TOKEN } from "src/constants";
import { feedIds } from "./constant";

const DEFAULT_PROPERTIES: PriceFeedProperty[] = ["price", "emaPrice", "exponent", "feedUpdateTimestamp"];

export interface PythLazerSuiClient {
    lazer: PythLazerClient;
    sui: SuiJsonRpcClient;
    stateObjectId: string;
    lazerPackage: string;
}

export function resolveLazerFeedIds(tokens: TOKEN[]): number[] {
    return tokens.map((token) => {
        const id = feedIds[token];
        if (id == null) {
            throw new Error(`No Pyth Lazer feed id mapped for token ${token}`);
        }
        return id;
    });
}

/**
 * Fetches a Pyth Lazer `leEcdsa` update covering every requested token, adds
 * `pyth_lazer::contract::parse_and_verify_le_ecdsa_update` to the PTB, and returns the
 * verified `Update` argument for use in subsequent move calls.
 */
export async function updatePythLazer(
    client: PythLazerSuiClient,
    tx: Transaction,
    tokens: TOKEN[],
    timestamp?: number
): Promise<TransactionResult> {
    const priceFeedIds = resolveLazerFeedIds(tokens);

    let update: JsonUpdate;
    if (timestamp) {
        update = await client.lazer.getPrice({
            priceFeedIds,
            properties: DEFAULT_PROPERTIES,
            formats: ["leEcdsa"],
            jsonBinaryEncoding: "hex",
            channel: "fixed_rate@200ms",
            timestamp: timestamp * 1000000, // convert seconds to nanoseconds
        });
    } else {
        update = await client.lazer.getLatestPrice({
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

    return await addParseAndVerifyLeEcdsaUpdateCall({
        // pyth-lazer-sui-js@0.3.0 was built against @mysten/sui@^1.x and types its
        // client parameter as the (now-renamed) v1 SuiClient. The runtime contract is
        // `getObject({ id, options: { showContent } }) -> { data, error }`, which the
        // v2.x SuiJsonRpcClient satisfies — so cast at the boundary.
        client: client.sui as any,
        stateObjectId: client.stateObjectId,
        tx,
        update: u8array,
        lazerPackage: client.lazerPackage,
    });
}

async function addParseAndVerifyLeEcdsaUpdateCall(opts) {
    const { client, tx, stateObjectId, update, lazerPackage } = opts;
    return tx.moveCall({
        target: `${lazerPackage}::pyth_lazer_v2::parse_and_verify_le_ecdsa_update`,
        arguments: [tx.object(stateObjectId), tx.object.clock(), tx.pure.vector("u8", update)],
    });
}

/**
 * Calls `oracle_v2::update_latest_price(oracle_v2, update, clock)`. A single call
 * updates every feed contained in `verifiedUpdate`.
 */
export function updateOracleV2WithPythLazer(tx: Transaction, oraclePackage: string, oracleV2Id: string, verifiedUpdate: TransactionResult) {
    tx.moveCall({
        target: `${oraclePackage}::oracle_v2::update_latest_price_v2`,
        typeArguments: [],
        arguments: [tx.object(oracleV2Id), verifiedUpdate, tx.object("0x6")],
    });
}

/**
 * Calls `oracle_v2::update_settle_price(oracle_v2, update, timestamp, clock)`.
 * Authority-gated on-chain.
 */
export function updateOracleV2SettlePriceWithPythLazer(
    tx: Transaction,
    oraclePackage: string,
    oracleV2Id: string,
    verifiedUpdate: TransactionResult,
    timestamp: bigint | number | string
) {
    tx.moveCall({
        target: `${oraclePackage}::oracle_v2::update_settle_price_v2`,
        typeArguments: [],
        arguments: [tx.object(oracleV2Id), verifiedUpdate, tx.pure.u64(timestamp), tx.object("0x6")],
    });
}

/**
 * Calls `oracle_v2::add_latest_price_new_token<TOKEN>(oracle_v2, feed_id, update, clock)`.
 * One-shot initializer for a brand-new token in the oracle's `feed_id_map`.
 */
export function addLatestPriceNewToken(
    tx: Transaction,
    oraclePackage: string,
    oracleV2Id: string,
    tokenTypeArgument: string,
    feedId: number,
    verifiedUpdate: TransactionResult
) {
    tx.moveCall({
        target: `${oraclePackage}::oracle_v2::add_latest_price_new_token_v2`,
        typeArguments: [tokenTypeArgument],
        arguments: [tx.object(oracleV2Id), tx.pure.u32(feedId), verifiedUpdate, tx.object("0x6")],
    });
}

/**
 * Calls `oracle_v2::add_settle_price_new_token<TOKEN>(oracle_v2, feed_id, update, clock)`.
 */
export function addSettlePriceNewToken(
    tx: Transaction,
    oraclePackage: string,
    oracleV2Id: string,
    tokenTypeArgument: string,
    feedId: number,
    verifiedUpdate: TransactionResult
) {
    tx.moveCall({
        target: `${oraclePackage}::oracle_v2::add_settle_price_new_token_v2`,
        typeArguments: [tokenTypeArgument],
        arguments: [tx.object(oracleV2Id), tx.pure.u32(feedId), verifiedUpdate, tx.object("0x6")],
    });
}
