"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUploadIdsTx = getUploadIdsTx;
exports.getRemoveIdsTx = getRemoveIdsTx;
exports.getUploadLevelsTx = getUploadLevelsTx;
exports.getRemoveLevelsTx = getRemoveLevelsTx;
exports.getUploadIpfsUrlsTx = getUploadIpfsUrlsTx;
exports.getRemoveIpfsUrlsTx = getRemoveIpfsUrlsTx;
exports.getUploadWebpBytesTx = getUploadWebpBytesTx;
exports.getRemoveWebpBytesTx = getRemoveWebpBytesTx;
exports.getUpdateTailsStakingRegistryConfigTx = getUpdateTailsStakingRegistryConfigTx;
exports.getSetProfitSharingTx = getSetProfitSharingTx;
exports.getRemoveProfitSharingTx = getRemoveProfitSharingTx;
/**
    entry fun upload_ids(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        mut ids: vector<address>, // reverse
        ctx: &TxContext,
    ) {
*/
function getUploadIdsTx(input) {
    var result = input.tx.moveCall({
        target: "".concat(input.typusPackageId, "::tails_staking::upload_ids"),
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
function getRemoveIdsTx(input) {
    var result = input.tx.moveCall({
        target: "".concat(input.typusPackageId, "::tails_staking::remove_ids"),
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
function getUploadLevelsTx(input) {
    var result = input.tx.moveCall({
        target: "".concat(input.typusPackageId, "::tails_staking::upload_levels"),
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
function getRemoveLevelsTx(input) {
    var result = input.tx.moveCall({
        target: "".concat(input.typusPackageId, "::tails_staking::remove_levels"),
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
function getUploadIpfsUrlsTx(input) {
    var result = input.tx.moveCall({
        target: "".concat(input.typusPackageId, "::tails_staking::upload_ipfs_urls"),
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
function getRemoveIpfsUrlsTx(input) {
    var result = input.tx.moveCall({
        target: "".concat(input.typusPackageId, "::tails_staking::remove_ipfs_urls"),
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
function getUploadWebpBytesTx(input) {
    var result = input.tx.moveCall({
        target: "".concat(input.typusPackageId, "::tails_staking::upload_webp_bytes"),
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
function getRemoveWebpBytesTx(input) {
    var result = input.tx.moveCall({
        target: "".concat(input.typusPackageId, "::tails_staking::remove_webp_bytes"),
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
function getUpdateTailsStakingRegistryConfigTx(input) {
    input.tx.moveCall({
        target: "".concat(input.typusPackageId, "::tails_staking::update_tails_staking_registry_config"),
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
function getSetProfitSharingTx(input) {
    var result = input.tx.moveCall({
        target: "".concat(input.typusPackageId, "::tails_staking::set_profit_sharing"),
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.pure(input.levelProfits),
            input.tx.object(input.coin),
            input.tx.pure(input.amount),
            input.tx.pure(input.tsMs),
        ],
    });
    return input.tx;
}
/**
    entry fun remove_profit_sharing<TOKEN>(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        recipient: address,
        ctx: &mut TxContext,
    ) {
*/
function getRemoveProfitSharingTx(input) {
    var result = input.tx.moveCall({
        target: "".concat(input.typusPackageId, "::tails_staking::remove_profit_sharing"),
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.pure(input.recipient),
        ],
    });
    return input.tx;
}
