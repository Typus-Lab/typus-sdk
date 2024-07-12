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
