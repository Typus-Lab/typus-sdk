import { SuiPriceServiceConnection, SuiPythClient } from "@pythnetwork/pyth-sui-js";
import { pythStateId, wormholeStateId, priceIDs } from "./constant";
import { SuiClient } from "@mysten/sui.js/client";
import { ObjectId } from "../_framework/util";
import { TransactionBlock } from "@mysten/sui.js/transactions";

export declare class PythClient {
    network: "MAINNET" | "TESTNET";
    client: SuiPythClient;
    connection: SuiPriceServiceConnection;
}

export function createPythClient(provider: any, network: "MAINNET" | "TESTNET"): PythClient {
    const client = new SuiPythClient(provider, pythStateId[network], wormholeStateId[network]);
    const connection = new SuiPriceServiceConnection("https://hermes-beta.pyth.network");
    const pythClient = { network, client, connection };
    return pythClient;
}

export async function updatePyth(pythClient: PythClient, tx: TransactionBlock, assets: string[]): Promise<ObjectId[]> {
    const _priceIDs = assets.map((asset) => priceIDs[pythClient.network][asset]);

    console.log(_priceIDs);

    const priceFeedUpdateData = await pythClient.connection.getPriceFeedsUpdateData(_priceIDs);

    // @ts-ignore
    const priceInfoObjectIds = await pythClient.client.updatePriceFeeds(tx, priceFeedUpdateData, _priceIDs);

    return priceInfoObjectIds;
}
