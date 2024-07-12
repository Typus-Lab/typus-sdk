import { ObjectArg } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export declare function upgrade(txb: TransactionBlock, version: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function init(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function verify(txb: TransactionBlock, version: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddAuthorizedUserArgs {
    version: ObjectArg;
    userAddress: string | TransactionArgument;
}
export declare function addAuthorizedUser(txb: TransactionBlock, args: AddAuthorizedUserArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ChargeFeeArgs {
    version: ObjectArg;
    balance: ObjectArg;
}
export declare function chargeFee(txb: TransactionBlock, typeArg: string, args: ChargeFeeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function issueManagerCap(txb: TransactionBlock, version: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveAuthorizedUserArgs {
    version: ObjectArg;
    userAddress: string | TransactionArgument;
}
export declare function removeAuthorizedUser(txb: TransactionBlock, args: RemoveAuthorizedUserArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function sendFee(txb: TransactionBlock, typeArg: string, version: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function versionCheck(txb: TransactionBlock, version: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddTailsExpAmountArgs {
    version: ObjectArg;
    typusEcosystemVersion: ObjectArg;
    typusUserRegistry: ObjectArg;
    user: string | TransactionArgument;
    amount: bigint | TransactionArgument;
}
export declare function addTailsExpAmount(txb: TransactionBlock, args: AddTailsExpAmountArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddExpLeaderboardArgs {
    version: ObjectArg;
    typusEcosystemVersion: ObjectArg;
    typusLeaderboardRegistry: ObjectArg;
    user: string | TransactionArgument;
    score: bigint | TransactionArgument;
    clock: ObjectArg;
}
export declare function addExpLeaderboard(txb: TransactionBlock, args: AddExpLeaderboardArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ChargeLiquidatorFeeArgs {
    version: ObjectArg;
    balance: ObjectArg;
}
export declare function chargeLiquidatorFee(txb: TransactionBlock, typeArg: string, args: ChargeLiquidatorFeeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface InstallEcosystemManagerCapEntryArgs {
    version: ObjectArg;
    typusEcosystemVersion: ObjectArg;
}
export declare function installEcosystemManagerCapEntry(txb: TransactionBlock, args: InstallEcosystemManagerCapEntryArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function sendLiquidatorFee(txb: TransactionBlock, typeArg: string, version: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
