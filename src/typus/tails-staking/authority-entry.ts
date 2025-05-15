import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

/**
    entry fun upload_ids(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        mut ids: vector<address>, // reverse
        ctx: &TxContext,
    ) {
*/
export function getUploadIdsTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        ids: string[];
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::upload_ids`,
        typeArguments: [],
        arguments: [tx.object(config.version.typus), tx.object(config.registry.typus.tailsStaking), tx.pure.vector("address", input.ids)],
    });

    return tx;
}

/**
    entry fun remove_ids(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        mut count: u64,
        ctx: &TxContext,
    ) {
*/
export function getRemoveIdsTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        count: string;
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::remove_ids`,
        typeArguments: [],
        arguments: [tx.object(config.version.typus), tx.object(config.registry.typus.tailsStaking), tx.pure.u64(input.count)],
    });

    return tx;
}

/**
    entry fun upload_levels(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        mut count: u64,
        ctx: &TxContext,
    ) {
*/
export function getUploadLevelsTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        count: string;
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::upload_levels`,
        typeArguments: [],
        arguments: [tx.object(config.version.typus), tx.object(config.registry.typus.tailsStaking), tx.pure.u64(input.count)],
    });

    return tx;
}

/**
    entry fun remove_levels(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        mut count: u64,
        ctx: &TxContext,
    ) {
*/
export function getRemoveLevelsTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        count: string;
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::remove_levels`,
        typeArguments: [],
        arguments: [tx.object(config.version.typus), tx.object(config.registry.typus.tailsStaking), tx.pure.u64(input.count)],
    });

    return tx;
}

/**
    entry fun upload_ipfs_urls(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        level: u64,
        mut urls: vector<vector<u8>>, // reverse
        ctx: &TxContext,
    ) {
*/
export function getUploadIpfsUrlsTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        level: string;
        urls: number[][];
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::upload_ipfs_urls`,
        typeArguments: [],
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.tailsStaking),
            tx.pure.u64(input.level),
            tx.pure.vector("vector<u8>", input.urls),
        ],
    });

    return tx;
}

/**
    entry fun remove_ipfs_urls(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        level: u64,
        ctx: &mut TxContext,
    ) {
*/
export function getRemoveIpfsUrlsTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        level: string;
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::remove_ipfs_urls`,
        typeArguments: [],
        arguments: [tx.object(config.version.typus), tx.object(config.registry.typus.tailsStaking), tx.pure.u64(input.level)],
    });

    return tx;
}

/**
    entry fun upload_webp_bytes(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        number: u64,
        level: u64,
        mut bytes: vector<u8>, // reverse when extend
        ctx: &TxContext,
    ) {
*/
export function getUploadWebpBytesTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        number: string;
        level: string;
        bytes: number[];
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::upload_webp_bytes`,
        typeArguments: [],
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.tailsStaking),
            tx.pure.u64(input.number),
            tx.pure.u64(input.level),
            tx.pure.vector("u8", input.bytes),
        ],
    });

    return tx;
}

/**
    entry fun remove_webp_bytes(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        number: u64,
        level: u64,
        ctx: &TxContext,
    ) {
*/
export function getRemoveWebpBytesTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        number: string;
        level: string;
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::remove_webp_bytes`,
        typeArguments: [],
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.tailsStaking),
            tx.pure.u64(input.number),
            tx.pure.u64(input.level),
        ],
    });

    return tx;
}

/**
    entry fun update_tails_staking_registry_config(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        index: u64,
        value: u64,
        ctx: &TxContext,
    ) {
*/
export function getUpdateTailsStakingRegistryConfigTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        index: string;
        value: string;
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::update_tails_staking_registry_config`,
        typeArguments: [],
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.tailsStaking),
            tx.pure.u64(input.index),
            tx.pure.u64(input.value),
        ],
    });

    return tx;
}

/**
    entry fun set_profit_sharing<TOKEN, N_TOKEN>(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        level_profits: vector<u64>,
        profit: Coin<TOKEN>,
        amount: u64,
        ts_ms: u64,
        ctx: &TxContext,
    ) {
*/
export function getSetProfitSharingTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        levelProfits: string[];
        coin: TransactionObjectInput;
        amount: string;
        tsMs: string;
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::set_profit_sharing`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.tailsStaking),
            tx.pure.vector("u64", input.levelProfits),
            tx.object(input.coin),
            tx.pure.u64(input.amount),
            tx.pure.u64(input.tsMs),
        ],
    });

    return tx;
}

/**
    entry fun remove_profit_sharing<TOKEN>(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        recipient: address,
        ctx: &mut TxContext,
    ) {
*/
export function getRemoveProfitSharingTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        recipient: string;
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::remove_profit_sharing`,
        typeArguments: input.typeArguments,
        arguments: [tx.object(config.version.typus), tx.object(config.registry.typus.tailsStaking), tx.pure.address(input.recipient)],
    });

    return tx;
}

/**
    public fun public_exp_up(
        _manager_cap: &ManagerCap,
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        tails: address,
        amount: u64,
    ) {
*/
export function getPublicExpUpTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        tails: string;
        amount: string;
    }
) {
    let managerCap = tx.moveCall({
        target: `${config.package.typus}::ecosystem::issue_manager_cap`,
        typeArguments: [],
        arguments: [tx.object(config.version.typus)],
    });

    tx.moveCall({
        target: `${config.package.typus}::tails_staking::public_exp_up`,
        typeArguments: [],
        arguments: [
            managerCap,
            tx.object(config.version.typus),
            tx.object(config.registry.typus.tailsStaking),
            tx.pure.address(input.tails),
            tx.pure.u64(input.amount),
        ],
    });

    tx.moveCall({
        target: `${config.package.typus}::ecosystem::burn_manager_cap`,
        typeArguments: [],
        arguments: [tx.object(config.version.typus), managerCap],
    });

    return tx;
}
