import { TransactionBlock, TransactionObjectInput } from "@mysten/sui.js/transactions";
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
    tx: TransactionBlock,
    input: {
        ids: string[];
    }
) {
    let result = tx.moveCall({
        target: `${config.package.typus}::tails_staking::upload_ids`,
        typeArguments: [],
        arguments: [tx.object(config.version.typus), tx.object(config.registry.typus.tailsStaking), tx.pure(input.ids)],
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
    tx: TransactionBlock,
    input: {
        count: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.typus}::tails_staking::remove_ids`,
        typeArguments: [],
        arguments: [tx.object(config.version.typus), tx.object(config.registry.typus.tailsStaking), tx.pure(input.count)],
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
    tx: TransactionBlock,
    input: {
        count: string;
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::upload_levels`,
        typeArguments: [],
        arguments: [tx.object(config.version.typus), tx.object(config.registry.typus.tailsStaking), tx.pure(input.count)],
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
    tx: TransactionBlock,
    input: {
        count: string;
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::remove_levels`,
        typeArguments: [],
        arguments: [tx.object(config.version.typus), tx.object(config.registry.typus.tailsStaking), tx.pure(input.count)],
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
    tx: TransactionBlock,
    input: {
        level: string;
        urls: string[][];
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::upload_ipfs_urls`,
        typeArguments: [],
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.tailsStaking),
            tx.pure(input.level),
            tx.pure(input.urls),
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
    tx: TransactionBlock,
    input: {
        level: string;
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::remove_ipfs_urls`,
        typeArguments: [],
        arguments: [tx.object(config.version.typus), tx.object(config.registry.typus.tailsStaking), tx.pure(input.level)],
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
    tx: TransactionBlock,
    input: {
        number: string;
        level: string;
        bytes: string[];
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::upload_webp_bytes`,
        typeArguments: [],
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.tailsStaking),
            tx.pure(input.number),
            tx.pure(input.level),
            tx.pure(input.bytes),
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
    tx: TransactionBlock,
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
            tx.pure(input.number),
            tx.pure(input.level),
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
    tx: TransactionBlock,
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
            tx.pure(input.index),
            tx.pure(input.value),
        ],
    });

    return tx;
}

/**
    entry fun set_profit_sharing<TOKEN>(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        level_profits: vector<u64>,
        mut profit: vector<Coin<TOKEN>>,
        ctx: &TxContext,
    ) {
*/
export function getSetProfitSharingTx(
    config: TypusConfig,
    tx: TransactionBlock,
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
            tx.pure(input.levelProfits),
            tx.object(input.coin),
            tx.pure(input.amount),
            tx.pure(input.tsMs),
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
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        recipient: string;
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::tails_staking::remove_profit_sharing`,
        typeArguments: input.typeArguments,
        arguments: [tx.object(config.version.typus), tx.object(config.registry.typus.tailsStaking), tx.pure(input.recipient)],
    });

    return tx;
}
