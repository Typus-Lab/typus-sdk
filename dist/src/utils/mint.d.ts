import { TransactionBlock } from "@mysten/sui.js/transactions";
export declare function getMintTokenTx(gasBudget: number, packageId: string, registry: string, moduleName: string, amount: number): Promise<TransactionBlock>;
