import { SuiPriceServiceConnection, SuiPythClient } from "@pythnetwork/pyth-sui-js";
import { pythStateId, wormholeStateId, priceIDs, priceInfoObjectIds } from "./constant";
import { Transaction } from "@mysten/sui/transactions";
import { TOKEN } from "src/constants";
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

export async function updatePyth(pythClient: PythClient, tx: Transaction, tokens: string[]): Promise<ObjectId[]> {
    let _priceIDs = tokens.map((token) => priceIDs[pythClient.network][token]);
    // console.log(_priceIDs);

    let priceFeedUpdateData = await pythClient.connection.getPriceFeedsUpdateData(_priceIDs);

    // @ts-ignore
    let priceInfoObjectIds = await pythClient.client.updatePriceFeeds(tx, priceFeedUpdateData, _priceIDs);

    return priceInfoObjectIds;
}

export function updateOracleWithPyth(
    pythClient: PythClient,
    tx: Transaction,
    oraclePackage: string,
    typusOracle: string,
    baseToken: TOKEN,
    quoteToken: TOKEN
) {
    tx.moveCall({
        target: `${oraclePackage}::oracle::update_with_pyth`,
        typeArguments: [],
        arguments: [
            tx.object(typusOracle),
            tx.object(pythStateId[pythClient.network]),
            tx.object(priceInfoObjectIds[pythClient.network][baseToken]),
            tx.object(priceInfoObjectIds[pythClient.network][quoteToken]),
            tx.object("0x6"),
        ],
    });
}
