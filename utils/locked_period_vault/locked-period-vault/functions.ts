import { PUBLISHED_AT } from "..";
import { ObjectArg, obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";

export function init(txb: TransactionBlock) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::locked_period_vault::init`, arguments: [] });
}

export interface AddIncentiveArgs {
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
    coin: ObjectArg;
}

export function addIncentive(txb: TransactionBlock, typeArg: string, args: AddIncentiveArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::locked_period_vault::add_incentive`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`), obj(txb, args.coin)],
    });
}

export interface CrankLeaveArgs {
    registry: ObjectArg;
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function crankLeave(txb: TransactionBlock, typeArgs: [string, string], args: CrankLeaveArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::locked_period_vault::crank_leave`,
        typeArguments: typeArgs,
        arguments: [obj(txb, args.registry), obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`), obj(txb, args.clock)],
    });
}

export interface FindLockedReceiptArgs {
    lockedVault: ObjectArg;
    user: string | TransactionArgument;
}

export function findLockedReceipt(txb: TransactionBlock, args: FindLockedReceiptArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::locked_period_vault::find_locked_receipt`,
        arguments: [obj(txb, args.lockedVault), pure(txb, args.user, `address`)],
    });
}

export interface IncentiviseArgs {
    registry: ObjectArg;
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function incentivise(txb: TransactionBlock, args: IncentiviseArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::locked_period_vault::incentivise`,
        arguments: [obj(txb, args.registry), obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`), obj(txb, args.clock)],
    });
}

export interface LeaveArgs {
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function leave(txb: TransactionBlock, args: LeaveArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::locked_period_vault::leave`,
        arguments: [obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`), obj(txb, args.clock)],
    });
}

export interface LockReceiptArgs {
    registry: ObjectArg;
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
    receipt: ObjectArg;
    splitActiveShare: bigint | TransactionArgument;
    splitWarmupShare: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function lockReceipt(txb: TransactionBlock, args: LockReceiptArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::locked_period_vault::lock_receipt`,
        arguments: [
            obj(txb, args.registry),
            obj(txb, args.lockedVaultRegistry),
            pure(txb, args.index, `u64`),
            obj(txb, args.receipt),
            pure(txb, args.splitActiveShare, `u64`),
            pure(txb, args.splitWarmupShare, `u64`),
            obj(txb, args.clock),
        ],
    });
}

export interface NewLockedVaultArgs {
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
    unlockTsMs: bigint | TransactionArgument;
    lockPeriodMs: bigint | TransactionArgument;
    incentivePpm: bigint | TransactionArgument;
    incentivePeriodMs: bigint | TransactionArgument;
}

export function newLockedVault(txb: TransactionBlock, typeArg: string, args: NewLockedVaultArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::locked_period_vault::new_locked_vault`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.lockedVaultRegistry),
            pure(txb, args.index, `u64`),
            pure(txb, args.unlockTsMs, `u64`),
            pure(txb, args.lockPeriodMs, `u64`),
            pure(txb, args.incentivePpm, `u64`),
            pure(txb, args.incentivePeriodMs, `u64`),
        ],
    });
}

export interface RemoveIncentiveArgs {
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function removeIncentive(txb: TransactionBlock, typeArg: string, args: RemoveIncentiveArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::locked_period_vault::remove_incentive`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`)],
    });
}

export interface ReturnReceiptArgs {
    lockedReceipt: ObjectArg;
    receipt: ObjectArg;
    hotPotato: ObjectArg;
}

export function returnReceipt(txb: TransactionBlock, args: ReturnReceiptArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::locked_period_vault::return_receipt`,
        arguments: [obj(txb, args.lockedReceipt), obj(txb, args.receipt), obj(txb, args.hotPotato)],
    });
}

export function takeReceipt(txb: TransactionBlock, lockedReceipt: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::locked_period_vault::take_receipt`, arguments: [obj(txb, lockedReceipt)] });
}

export interface UnlockReceiptArgs {
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function unlockReceipt(txb: TransactionBlock, args: UnlockReceiptArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::locked_period_vault::unlock_receipt`,
        arguments: [obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`)],
    });
}

export interface WithdrawIncentiveArgs {
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function withdrawIncentive(txb: TransactionBlock, typeArg: string, args: WithdrawIncentiveArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::locked_period_vault::withdraw_incentive`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`)],
    });
}

export interface WithdrawPremiumArgs {
    registry: ObjectArg;
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function withdrawPremium(txb: TransactionBlock, typeArgs: [string, string], args: WithdrawPremiumArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::locked_period_vault::withdraw_premium`,
        typeArguments: typeArgs,
        arguments: [obj(txb, args.registry), obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`)],
    });
}
