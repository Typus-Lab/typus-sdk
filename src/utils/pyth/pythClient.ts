import { HexString, SuiPriceServiceConnection, SuiPythClient } from "@pythnetwork/pyth-sui-js";
import { pythStateId, wormholeStateId, priceIDs, priceInfoObjectIds } from "./constant";
import { Argument, Transaction } from "@mysten/sui/transactions";
import { oracle, TOKEN, tokenType } from "src/constants";
import { ObjectId } from "@pythnetwork/pyth-sui-js/lib/client";

export declare class PythClient {
    network: "MAINNET" | "TESTNET";
    client: SuiPythClient;
    connection: SuiPriceServiceConnection;
}

export function createPythClient(provider: any, network: "MAINNET" | "TESTNET"): PythClient {
    let client = new SuiPythClient(provider, pythStateId[network], wormholeStateId[network]);
    let connection =
        network == "MAINNET"
            ? new SuiPriceServiceConnection("https://hermes.pyth.network")
            : new SuiPriceServiceConnection("https://hermes-beta.pyth.network");
    let pythClient = { network, client, connection };
    return pythClient;
}

/**
 * @returns priceInfoObjectIds
 */
export async function updatePyth(pythClient: PythClient, tx: Transaction, tokens: TOKEN[], suiCoin?: Argument): Promise<ObjectId[]> {
    let _priceIDs = tokens.map((token) => priceIDs[pythClient.network][token]!);
    // console.log(_priceIDs);

    let priceFeedUpdateData = await pythClient.connection.getPriceFeedsUpdateData(_priceIDs);

    let priceInfoObjectIds = await updatePriceFeeds(pythClient, tx, priceFeedUpdateData, _priceIDs, suiCoin);

    return priceInfoObjectIds;
}

export function updateOracleWithPythUsd(pythClient: PythClient, tx: Transaction, oraclePackage: string, baseToken: TOKEN) {
    tx.moveCall({
        target: `${oraclePackage}::oracle::update_with_pyth_usd`,
        typeArguments: [],
        arguments: [
            tx.object(oracle[pythClient.network][baseToken]!),
            tx.object(pythStateId[pythClient.network]),
            tx.object(priceInfoObjectIds[pythClient.network][baseToken]!),
            tx.object("0x6"),
        ],
    });
}

/**
 * Adds the necessary commands for updating the pyth price feeds to the transaction block.
 * @param tx transaction block to add commands to
 * @param updates array of price feed updates received from the price service
 * @param feedIds array of feed ids to update (in hex format)
 */
export async function updatePriceFeeds(
    pythClient: PythClient,
    tx: Transaction,
    updates: Buffer[],
    feedIds: HexString[],
    suiCoin?: Argument
): Promise<ObjectId[]> {
    const packageId = await pythClient.client.getPythPackageId();
    const priceUpdatesHotPotato = await pythClient.client.verifyVaasAndGetHotPotato(tx, updates, packageId);

    const baseUpdateFee = await pythClient.client.getBaseUpdateFee();
    const coins = tx.splitCoins(
        suiCoin ?? tx.gas,
        feedIds.map(() => tx.pure.u64(baseUpdateFee))
    );
    if (suiCoin) {
        tx.moveCall({ target: `0x2::coin::destroy_zero`, arguments: [suiCoin], typeArguments: [tokenType.MAINNET.SUI] });
    }

    return await pythClient.client.executePriceFeedUpdates(tx, packageId, feedIds, priceUpdatesHotPotato, coins);
}
