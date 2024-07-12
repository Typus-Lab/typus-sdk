import { ObjectArg } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export interface GetPriceArgs {
    state: ObjectArg;
    priceInfoObject: ObjectArg;
    clock: ObjectArg;
}
export declare function getPrice(txb: TransactionBlock, args: GetPriceArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getEmaPrice(txb: TransactionBlock, priceInfoObject: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetPriceInfoObjectIdArgs {
    state: ObjectArg;
    priceIdentifierBytes: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function getPriceInfoObjectId(txb: TransactionBlock, args: GetPriceInfoObjectIdArgs): import("@mysten/sui.js/transactions").TransactionResult;
