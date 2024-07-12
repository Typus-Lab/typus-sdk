import { ObjectArg } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export interface BurnArgs {
    treasuryCap: ObjectArg;
    coin: ObjectArg;
}
export declare function burn(txb: TransactionBlock, typeArg: string, args: BurnArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface MintArgs {
    treasuryCap: ObjectArg;
    value: bigint | TransactionArgument;
}
export declare function mint(txb: TransactionBlock, typeArg: string, args: MintArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function totalSupply(txb: TransactionBlock, treasuryCap: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function init(txb: TransactionBlock, witness: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface TransferTreasuryCapArgs {
    version: ObjectArg;
    lpRegistry: ObjectArg;
    treasuryCaps: ObjectArg;
}
export declare function transferTreasuryCap(txb: TransactionBlock, args: TransferTreasuryCapArgs): import("@mysten/sui.js/transactions").TransactionResult;
