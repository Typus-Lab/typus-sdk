import { ObjectArg } from "../../_framework/util";
import { TransactionBlock } from "@mysten/sui.js/transactions";
export declare function new_(txb: TransactionBlock, typeArgs: [string, string]): import("@mysten/sui.js/transactions").TransactionResult;
export interface CreateArgs {
    baseToken: ObjectArg;
    quoteToken: ObjectArg;
}
export declare function create(txb: TransactionBlock, args: CreateArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function baseToken(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function quoteToken(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
