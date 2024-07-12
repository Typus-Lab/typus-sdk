import { ObjectArg } from "../../_framework/util";
import { TransactionBlock } from "@mysten/sui.js/transactions";
export declare function init(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getMutTreasuryCap(txb: TransactionBlock, typeArg: string, treasuryCaps: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function removeTreasuryCap(txb: TransactionBlock, typeArg: string, treasuryCaps: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface StoreTreasuryCapArgs {
    treasuryCaps: ObjectArg;
    treasuryCap: ObjectArg;
}
export declare function storeTreasuryCap(txb: TransactionBlock, typeArg: string, args: StoreTreasuryCapArgs): import("@mysten/sui.js/transactions").TransactionResult;
