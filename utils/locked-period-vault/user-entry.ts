import { TransactionBlock, TransactionObjectArgument } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../constants";

/**
    public fun lock_receipt(
        registry: &mut Registry,
        locked_vault_registry: &mut LockedVaultRegistry,
        index: u64,
        receipt: TypusDepositReceipt, // from tails_staking::deposit result or owned
        split_active_share: u64,
        split_warmup_share: u64,
        clock: &Clock,
        ctx: &mut TxContext
    ): TypusDepositReceipt
*/
export function getLockReceiptTx(input: {
    tx: TransactionBlock;
    lockedVaultPackageId: string;
    typusDovSingleRegistry: string;
    lockedVaultRegistry: string;
    index: string;
    receipt: TransactionObjectArgument;
    split_active_share: string;
    split_warmup_share: string;
}) {
    input.tx.moveCall({
        target: `${input.lockedVaultPackageId}::locked_period_vault::lock_receipt`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.object(input.lockedVaultRegistry),
            input.tx.pure(input.index),
            input.receipt,
            input.tx.pure(input.split_active_share),
            input.tx.pure(input.split_warmup_share),
            input.tx.pure(CLOCK),
        ],
    });

    return input.tx;
}

/**
    public fun leave(
        locked_vault_registry: &mut LockedVaultRegistry,
        index: u64,
        clock: &Clock,
        ctx: &mut TxContext
    )
*/
export function getLeaveTx(input: { tx: TransactionBlock; lockedVaultPackageId: string; lockedVaultRegistry: string; index: string }) {
    input.tx.moveCall({
        target: `${input.lockedVaultPackageId}::locked_period_vault::leave`,
        typeArguments: [],
        arguments: [input.tx.object(input.lockedVaultRegistry), input.tx.pure(input.index), input.tx.pure(CLOCK)],
    });

    return input.tx;
}

/**
    public fun unlock_receipt(
        locked_vault_registry: &mut LockedVaultRegistry,
        index: u64,
        ctx: &mut TxContext
    )
*/
export function getUnlockReceiptTx(input: {
    tx: TransactionBlock;
    lockedVaultPackageId: string;
    lockedVaultRegistry: string;
    index: string;
}) {
    input.tx.moveCall({
        target: `${input.lockedVaultPackageId}::locked_period_vault::unlock_receipt`,
        typeArguments: [],
        arguments: [input.tx.object(input.lockedVaultRegistry), input.tx.pure(input.index)],
    });

    return input.tx;
}

/**
    public fun withdraw_incentive<T>(
        locked_vault_registry: &mut LockedVaultRegistry,
        index: u64,
        ctx: &mut TxContext
    ): Coin<T>
*/
export function getWithdrawIncentiveTx(input: {
    tx: TransactionBlock;
    lockedVaultPackageId: string;
    lockedVaultRegistry: string;
    index: string;
    sender: string;
}) {
    const coin = input.tx.moveCall({
        target: `${input.lockedVaultPackageId}::locked_period_vault::withdraw_incentive`,
        typeArguments: ["0x2::sui::SUI"],
        arguments: [input.tx.object(input.lockedVaultRegistry), input.tx.pure(input.index)],
    });

    input.tx.transferObjects([coin], input.sender);

    return input.tx;
}

/**
    public fun withdraw_premium<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        locked_vault_registry: &mut LockedVaultRegistry,
        index: u64,
        ctx: &mut TxContext
    ): Coin<B_TOKEN>
*/
export function getWithdrawPremiumTx(input: {
    tx: TransactionBlock;
    lockedVaultPackageId: string;
    typusDovSingleRegistry: string;
    lockedVaultRegistry: string;
    index: string;
    sender: string;
    typeArguments: string[]; // [D_TOKEN, B_TOKEN]
}) {
    const coin = input.tx.moveCall({
        target: `${input.lockedVaultPackageId}::locked_period_vault::withdraw_premium`,
        typeArguments: input.typeArguments,
        arguments: [input.tx.object(input.typusDovSingleRegistry), input.tx.object(input.lockedVaultRegistry), input.tx.pure(input.index)],
    });

    input.tx.transferObjects([coin], input.sender);

    return input.tx;
}
