import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../constants";

/**
    entry fun upload_ids(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        mut ids: vector<address>, // reverse
        ctx: &TxContext,
    ) {
*/
export async function getUploadIdsTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    ids: string[];
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::upload_ids`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.pure(input.ids),
        ],
    });

    return input.tx;
}

/**
    entry fun remove_ids(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        mut count: u64,
        ctx: &TxContext,
    ) {
*/
export async function getRemoveIdsTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    count: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::remove_ids`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.pure(input.count),
        ],
    });

    return input.tx;
}

/**
    entry fun upload_levels(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        mut count: u64,
        ctx: &TxContext,
    ) {
*/
export async function getUploadLevelsTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    count: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::upload_levels`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.pure(input.count),
        ],
    });

    return input.tx;
}

/**
    entry fun remove_levels(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        mut count: u64,
        ctx: &TxContext,
    ) {
*/
export async function getRemoveLevelsTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    count: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::remove_levels`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.pure(input.count),
        ],
    });

    return input.tx;
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
export async function getUploadIpfsUrlsTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    level: string;
    urls: string[][];
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::upload_ipfs_urls`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.pure(input.level),
            input.tx.pure(input.urls),
        ],
    });

    return input.tx;
}

/**
    entry fun remove_ipfs_urls(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        level: u64,
        ctx: &mut TxContext,
    ) {
*/
export async function getRemoveIpfsUrlsTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    level: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::remove_ipfs_urls`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.pure(input.level),
        ],
    });

    return input.tx;
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
export async function getUploadWebpBytesTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    number: string;
    level: string;
    bytes: string[];
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::upload_webp_bytes`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.pure(input.number),
            input.tx.pure(input.level),
            input.tx.pure(input.bytes),
        ],
    });

    return input.tx;
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
export async function getRemoveWebpBytesTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    number: string;
    level: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::remove_webp_bytes`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.pure(input.number),
            input.tx.pure(input.level),
        ],
    });

    return input.tx;
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
export async function getUpdateTailsStakingRegistryConfigTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    index: string;
    value: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::update_tails_staking_registry_config`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.pure(input.index),
            input.tx.pure(input.value),
        ],
    });

    return input.tx;
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
export async function getSetProfitSharingTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    typeArguments: string[];
    level_profits: string;
    coins: string[];
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::set_profit_sharing`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.pure(input.level_profits),
            input.tx.makeMoveVec({ objects: input.coins.map((coin) => input.tx.object(coin)) }),
        ],
    });

    return input.tx;
}
