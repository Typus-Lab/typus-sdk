import { ObjectArg } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export declare function init(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export interface UnsubscribeArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    userShareId: bigint | TransactionArgument;
    unsubscribedShares: bigint | TransactionArgument | TransactionArgument | null;
    clock: ObjectArg;
}
export declare function unsubscribe(txb: TransactionBlock, typeArg: string, args: UnsubscribeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ActivateIncentiveTokenArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}
export declare function activateIncentiveToken(txb: TransactionBlock, typeArg: string, args: ActivateIncentiveTokenArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddIncentiveTokenArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    periodIncentiveAmount: bigint | TransactionArgument;
    incentiveIntervalTsMs: bigint | TransactionArgument;
    clock: ObjectArg;
}
export declare function addIncentiveToken(txb: TransactionBlock, typeArg: string, args: AddIncentiveTokenArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AllocateIncentiveArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    clock: ObjectArg;
}
export declare function allocateIncentive(txb: TransactionBlock, args: AllocateIncentiveArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CalculateIncentiveArgs {
    stakePool: ObjectArg;
    incentiveToken: ObjectArg;
    lpUserShare: ObjectArg;
}
export declare function calculateIncentive(txb: TransactionBlock, args: CalculateIncentiveArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CreateUserLastIncentiveTsMsArgs {
    stakePool: ObjectArg;
    currentTsMs: bigint | TransactionArgument;
}
export declare function createUserLastIncentiveTsMs(txb: TransactionBlock, args: CreateUserLastIncentiveTsMsArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface DeactivateIncentiveTokenArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}
export declare function deactivateIncentiveToken(txb: TransactionBlock, typeArg: string, args: DeactivateIncentiveTokenArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface DepositIncentiveArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    coin: ObjectArg;
}
export declare function depositIncentive(txb: TransactionBlock, typeArg: string, args: DepositIncentiveArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetIncentiveArgs {
    stakePool: ObjectArg;
    tokenType: ObjectArg;
}
export declare function getIncentive(txb: TransactionBlock, args: GetIncentiveArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getIncentiveTokens(txb: TransactionBlock, stakePool: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getLastIncentivePriceIndex(txb: TransactionBlock, stakePool: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetMutIncentiveArgs {
    stakePool: ObjectArg;
    tokenType: ObjectArg;
}
export declare function getMutIncentive(txb: TransactionBlock, args: GetMutIncentiveArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetMutStakePoolArgs {
    id: ObjectArg;
    index: bigint | TransactionArgument;
}
export declare function getMutStakePool(txb: TransactionBlock, args: GetMutStakePoolArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetStakePoolArgs {
    id: ObjectArg;
    index: bigint | TransactionArgument;
}
export declare function getStakePool(txb: TransactionBlock, args: GetStakePoolArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetUserShareIdsArgs {
    stakePool: ObjectArg;
    user: string | TransactionArgument;
}
export declare function getUserShareIds(txb: TransactionBlock, args: GetUserShareIdsArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetUserSharesArgs {
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    user: string | TransactionArgument;
}
export declare function getUserShares(txb: TransactionBlock, args: GetUserSharesArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface HarvestPerUserShareArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    userShareId: bigint | TransactionArgument;
    clock: ObjectArg;
}
export declare function harvestPerUserShare(txb: TransactionBlock, typeArg: string, args: HarvestPerUserShareArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface NewStakePoolArgs {
    version: ObjectArg;
    registry: ObjectArg;
    unlockCountdownTsMs: bigint | TransactionArgument;
}
export declare function newStakePool(txb: TransactionBlock, typeArg: string, args: NewStakePoolArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveIncentiveArgs {
    stakePool: ObjectArg;
    tokenType: ObjectArg;
}
export declare function removeIncentive(txb: TransactionBlock, args: RemoveIncentiveArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveIncentiveTokenArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
}
export declare function removeIncentiveToken(txb: TransactionBlock, typeArg: string, args: RemoveIncentiveTokenArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveUserShareByIdArgs {
    id: ObjectArg;
    user: string | TransactionArgument;
    userShareId: bigint | TransactionArgument;
}
export declare function removeUserShareById(txb: TransactionBlock, args: RemoveUserShareByIdArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface StakeArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    lpToken: ObjectArg;
    userShareId: bigint | TransactionArgument | TransactionArgument | null;
    clock: ObjectArg;
}
export declare function stake(txb: TransactionBlock, typeArg: string, args: StakeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface StoreUserSharesArgs {
    id: ObjectArg;
    user: string | TransactionArgument;
    userShares: Array<ObjectArg> | TransactionArgument;
}
export declare function storeUserShares(txb: TransactionBlock, args: StoreUserSharesArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UnstakeArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    userShareId: bigint | TransactionArgument;
    unstakedShares: bigint | TransactionArgument | TransactionArgument | null;
    clock: ObjectArg;
}
export declare function unstake(txb: TransactionBlock, typeArg: string, args: UnstakeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateIncentiveConfigArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    periodIncentiveAmount: bigint | TransactionArgument | TransactionArgument | null;
    incentiveIntervalTsMs: bigint | TransactionArgument | TransactionArgument | null;
    u64Padding: Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null;
}
export declare function updateIncentiveConfig(txb: TransactionBlock, typeArg: string, args: UpdateIncentiveConfigArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateUnlockCountdownTsMsArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    unlockCountdownTsMs: bigint | TransactionArgument;
}
export declare function updateUnlockCountdownTsMs(txb: TransactionBlock, args: UpdateUnlockCountdownTsMsArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface WithdrawIncentiveArgs {
    version: ObjectArg;
    registry: ObjectArg;
    index: bigint | TransactionArgument;
    amount: bigint | TransactionArgument | TransactionArgument | null;
}
export declare function withdrawIncentive(txb: TransactionBlock, typeArg: string, args: WithdrawIncentiveArgs): import("@mysten/sui.js/transactions").TransactionResult;
