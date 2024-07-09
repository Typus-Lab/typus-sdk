import { CLOCK } from "../../../constants";
import { ObjectArg, obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock, TransactionObjectArgument } from "@mysten/sui.js/transactions";

export function init(lockedVaultPackage: string, txb: TransactionBlock) {
    return txb.moveCall({ target: `${lockedVaultPackage}::locked_period_vault::init`, arguments: [] });
}

export interface AddIncentiveArgs {
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
    coin: ObjectArg;
}

export function addIncentive(lockedVaultPackage: string, txb: TransactionBlock, typeArg: string, args: AddIncentiveArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::add_incentive`,
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

export function crankLeave(lockedVaultPackage: string, txb: TransactionBlock, typeArgs: [string, string], args: CrankLeaveArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::crank_leave`,
        typeArguments: typeArgs,
        arguments: [obj(txb, args.registry), obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`), obj(txb, args.clock)],
    });
}

export interface FindLockedReceiptArgs {
    lockedVault: ObjectArg;
    user: string | TransactionArgument;
}

export function findLockedReceipt(lockedVaultPackage: string, txb: TransactionBlock, args: FindLockedReceiptArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::find_locked_receipt`,
        arguments: [obj(txb, args.lockedVault), pure(txb, args.user, `address`)],
    });
}

export interface IncentiviseArgs {
    registry: ObjectArg;
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function incentivise(lockedVaultPackage: string, txb: TransactionBlock, args: IncentiviseArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::incentivise`,
        arguments: [obj(txb, args.registry), obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`), obj(txb, args.clock)],
    });
}

export interface LeaveArgs {
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function leave(lockedVaultPackage: string, txb: TransactionBlock, args: LeaveArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::leave`,
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

export function lockReceipt(lockedVaultPackage: string, txb: TransactionBlock, args: LockReceiptArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::lock_receipt`,
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

export function depositAndLockReceipt(input: {
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    coins: string[];
    amount: string;
    receipts: string[] | TransactionObjectArgument[];
    user: string;
    lockedVaultPackage: string;
    lockedVaultRegistry: string;
    lockActiveShare: string;
    lockWarmupShare: string;
}) {
    if (Number(input.amount) == 0) {
        lockReceipt(input.lockedVaultPackage, input.tx, {
            registry: input.typusDovSingleRegistry,
            lockedVaultRegistry: input.lockedVaultRegistry,
            index: input.tx.pure(input.index),
            receipt: input.tx.object(input.receipts[0]), // WARN: assumes only one receipt
            splitActiveShare: input.tx.pure(input.lockActiveShare),
            splitWarmupShare: input.tx.pure(input.lockWarmupShare),
            clock: input.tx.object(CLOCK),
        });
    } else {
        if (
            input.typeArguments[0] == "0x2::sui::SUI" ||
            input.typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"
        ) {
            const [coin] = input.tx.splitCoins(input.tx.gas, [input.tx.pure(input.amount)]);
            const result = input.tx.moveCall({
                target: `${input.typusDovSinglePackageId}::tails_staking::deposit`,
                typeArguments: input.typeArguments,
                arguments: [
                    input.tx.object(input.typusDovSingleRegistry),
                    input.tx.pure(input.index),
                    input.tx.makeMoveVec({ objects: [coin] }),
                    input.tx.pure(input.amount),
                    input.tx.makeMoveVec({
                        type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                        objects: input.receipts.map((receipt) => input.tx.object(receipt)),
                    }),
                    input.tx.object(CLOCK),
                ],
            });
            input.tx.moveCall({
                target: `${input.typusFrameworkPackageId}::utils::transfer_coins`,
                typeArguments: [input.typeArguments[0]],
                arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
            });
            lockReceipt(input.lockedVaultPackage, input.tx, {
                registry: input.typusDovSingleRegistry,
                lockedVaultRegistry: input.lockedVaultRegistry,
                index: input.tx.pure(input.index),
                receipt: input.tx.object(result[1]),
                splitActiveShare: input.tx.pure(input.lockActiveShare),
                splitWarmupShare: input.tx.pure(input.lockWarmupShare),
                clock: input.tx.object(CLOCK),
            });
        } else {
            const result = input.tx.moveCall({
                target: `${input.typusDovSinglePackageId}::tails_staking::deposit`,
                typeArguments: input.typeArguments,
                arguments: [
                    input.tx.object(input.typusDovSingleRegistry),
                    input.tx.pure(input.index),
                    input.tx.makeMoveVec({ objects: input.coins.map((coin) => input.tx.object(coin)) }),
                    input.tx.pure(input.amount),
                    input.tx.makeMoveVec({
                        type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                        objects: input.receipts.map((receipt) => input.tx.object(receipt)),
                    }),
                    input.tx.object(CLOCK),
                ],
            });
            input.tx.moveCall({
                target: `${input.typusFrameworkPackageId}::utils::transfer_coins`,
                typeArguments: [input.typeArguments[0]],
                arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
            });
            lockReceipt(input.lockedVaultPackage, input.tx, {
                registry: input.typusDovSingleRegistry,
                lockedVaultRegistry: input.lockedVaultRegistry,
                index: input.tx.pure(input.index),
                receipt: input.tx.object(result[1]),
                splitActiveShare: input.tx.pure(input.lockActiveShare),
                splitWarmupShare: input.tx.pure(input.lockWarmupShare),
                clock: CLOCK,
            });
        }
    }

    return input.tx;
}

export interface NewLockedVaultArgs {
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
    unlockTsMs: bigint | TransactionArgument;
    lockPeriodMs: bigint | TransactionArgument;
    incentivePpm: bigint | TransactionArgument;
    incentivePeriodMs: bigint | TransactionArgument;
    capacity: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function newLockedVault(lockedVaultPackage: string, txb: TransactionBlock, typeArg: string, args: NewLockedVaultArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::new_locked_vault`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.lockedVaultRegistry),
            pure(txb, args.index, `u64`),
            pure(txb, args.unlockTsMs, `u64`),
            pure(txb, args.lockPeriodMs, `u64`),
            pure(txb, args.incentivePpm, `u64`),
            pure(txb, args.incentivePeriodMs, `u64`),
            pure(txb, args.capacity, `u64`),
            obj(txb, args.clock),
        ],
    });
}

export interface RemoveIncentiveArgs {
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function removeIncentive(lockedVaultPackage: string, txb: TransactionBlock, typeArg: string, args: RemoveIncentiveArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::remove_incentive`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`)],
    });
}

export interface ReturnReceiptArgs {
    lockedReceipt: ObjectArg;
    receipt: ObjectArg;
    hotPotato: ObjectArg;
}

export function returnReceipt(lockedVaultPackage: string, txb: TransactionBlock, args: ReturnReceiptArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::return_receipt`,
        arguments: [obj(txb, args.lockedReceipt), obj(txb, args.receipt), obj(txb, args.hotPotato)],
    });
}

export function takeReceipt(lockedVaultPackage: string, txb: TransactionBlock, lockedReceipt: ObjectArg) {
    return txb.moveCall({ target: `${lockedVaultPackage}::locked_period_vault::take_receipt`, arguments: [obj(txb, lockedReceipt)] });
}

export interface UnlockReceiptArgs {
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function unlockReceipt(lockedVaultPackage: string, txb: TransactionBlock, args: UnlockReceiptArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::unlock_receipt`,
        arguments: [obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`)],
    });
}

export interface UpdateCapacityArgs {
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
    capacity: bigint | TransactionArgument;
}

export function updateCapacity(lockedVaultPackage: string, txb: TransactionBlock, args: UpdateCapacityArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::update_capacity`,
        arguments: [obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`), pure(txb, args.capacity, `u64`)],
    });
}

export interface UpdateIncentivePpmArgs {
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
    incentivePpm: bigint | TransactionArgument;
}

export function updateIncentivePpm(lockedVaultPackage: string, txb: TransactionBlock, args: UpdateIncentivePpmArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::update_incentive_ppm`,
        arguments: [obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`), pure(txb, args.incentivePpm, `u64`)],
    });
}

export interface UpdateTsMsArgs {
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
    tsMs: bigint | TransactionArgument;
}

export function updateTsMs(lockedVaultPackage: string, txb: TransactionBlock, args: UpdateTsMsArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::update_ts_ms`,
        arguments: [obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`), pure(txb, args.tsMs, `u64`)],
    });
}

export interface UpdateUnlockTsMsArgs {
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
    unlockTsMs: bigint | TransactionArgument;
}

export function updateUnlockTsMs(lockedVaultPackage: string, txb: TransactionBlock, args: UpdateUnlockTsMsArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::update_unlock_ts_ms`,
        arguments: [obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`), pure(txb, args.unlockTsMs, `u64`)],
    });
}
export interface ViewUserArgs {
    registry: ObjectArg;
    lockedVaultRegistry: ObjectArg;
    user: string | TransactionArgument;
}

export function viewUser(lockedVaultPackage: string, txb: TransactionBlock, args: ViewUserArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::view_user`,
        arguments: [obj(txb, args.registry), obj(txb, args.lockedVaultRegistry), pure(txb, args.user, `address`)],
    });
}

export interface ViewUserReceiptArgs {
    registry: ObjectArg;
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
    user: string | TransactionArgument;
}

export function viewUserReceipt(lockedVaultPackage: string, txb: TransactionBlock, args: ViewUserReceiptArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::view_user_receipt`,
        arguments: [
            obj(txb, args.registry),
            obj(txb, args.lockedVaultRegistry),
            pure(txb, args.index, `u64`),
            pure(txb, args.user, `address`),
        ],
    });
}

export interface WithdrawIncentiveArgs {
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function withdrawIncentive(lockedVaultPackage: string, txb: TransactionBlock, typeArg: string, args: WithdrawIncentiveArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::withdraw_incentive`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`)],
    });
}

export interface WithdrawPremiumArgs {
    registry: ObjectArg;
    lockedVaultRegistry: ObjectArg;
    index: bigint | TransactionArgument;
}

export function withdrawPremium(lockedVaultPackage: string, txb: TransactionBlock, typeArgs: [string, string], args: WithdrawPremiumArgs) {
    return txb.moveCall({
        target: `${lockedVaultPackage}::locked_period_vault::withdraw_premium`,
        typeArguments: typeArgs,
        arguments: [obj(txb, args.registry), obj(txb, args.lockedVaultRegistry), pure(txb, args.index, `u64`)],
    });
}
