import { SuiPriceServiceConnection, SuiPythClient } from "@pythnetwork/pyth-sui-js";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TOKEN } from "src/constants/token";
import { ObjectId } from "@pythnetwork/pyth-sui-js/lib/client";
export declare class PythClient {
    network: "MAINNET" | "TESTNET";
    client: SuiPythClient;
    connection: SuiPriceServiceConnection;
}
export declare function createPythClient(provider: any, network: "MAINNET" | "TESTNET"): PythClient;
export declare function updatePyth(pythClient: PythClient, tx: TransactionBlock, tokens: string[]): Promise<ObjectId[]>;
export declare function updateOracleWithPyth(pythClient: PythClient, tx: TransactionBlock, oraclePackage: string, typusOracle: string, baseToken: TOKEN, quoteToken: TOKEN): void;
