import { Transaction } from "@mysten/sui/transactions";
import { splitCoins, TypusConfig } from "src/utils";

/**
    entry fun new_vault<TOKEN>(
        version: &Version,
        registry: &mut Registry,
        config: vector<u64>,
        ctx: &mut TxContext,
    ) {
*/
export function newVault(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        config: string[];
    }
) {
    tx.moveCall({
        target: `${config.package.launch.fundingVault}::funding_vault::new_vault`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.launch.fundingVault),
            tx.object(config.registry.launch.fundingVault),
            tx.pure.vector("u64", input.config),
        ],
    });
}

/**
    entry fun update_registry_setting(
        version: &Version,
        registry: &mut Registry,
        setting_index: u64,
        value: u64,
        ctx: &TxContext,
    ) {
*/
export function updateRegistrySetting(
    config: TypusConfig,
    tx: Transaction,
    input: {
        settingIndex: string;
        value: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.fundingVault}::funding_vault::update_registry_setting`,
        arguments: [
            tx.object(config.version.launch.fundingVault),
            tx.object(config.registry.launch.fundingVault),
            tx.pure.u64(input.settingIndex),
            tx.pure.u64(input.value),
        ],
    });
}

/**
    entry fun update_info(
        version: &Version,
        registry: &mut Registry,
        index: u64,
        info_index: u64,
        value: u64,
        ctx: &TxContext,
    ) {
*/
export function updateInfo(
    config: TypusConfig,
    tx: Transaction,
    input: {
        index: string;
        infoIndex: string;
        value: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.fundingVault}::funding_vault::update_info`,
        arguments: [
            tx.object(config.version.launch.fundingVault),
            tx.object(config.registry.launch.fundingVault),
            tx.pure.u64(input.index),
            tx.pure.u64(input.infoIndex),
            tx.pure.u64(input.value),
        ],
    });
}

/**
    entry fun update_config(
        version: &Version,
        registry: &mut Registry,
        index: u64,
        config_index: u64,
        value: u64,
        ctx: &TxContext,
    ) {
*/
export function updateConfig(
    config: TypusConfig,
    tx: Transaction,
    input: {
        index: string;
        configIndex: string;
        value: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.fundingVault}::funding_vault::update_config`,
        arguments: [
            tx.object(config.version.launch.fundingVault),
            tx.object(config.registry.launch.fundingVault),
            tx.pure.u64(input.index),
            tx.pure.u64(input.configIndex),
            tx.pure.u64(input.value),
        ],
    });
}

/**
    entry fun deposit_fund_to_deepbook_balance_manager<TOKEN>(
        version: &Version,
        registry: &mut Registry,
        index: u64,
        ctx: &mut TxContext,
    ) {
*/
export function depositFundToDeepbookBalanceManager(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.fundingVault}::funding_vault::deposit_fund_to_deepbook_balance_manager`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.launch.fundingVault),
            tx.object(config.registry.launch.fundingVault),
            tx.pure.u64(input.index),
        ],
    });
}

/**
    entry fun withdraw_fund_from_deepbook_balance_manager<TOKEN>(
        version: &Version,
        registry: &mut Registry,
        index: u64,
        amount: Option<u64>,
        ctx: &mut TxContext,
    ) {
*/
export function withdrawFundFromDeepbookBalanceManager(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        amount: string | null;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.fundingVault}::funding_vault::withdraw_fund_from_deepbook_balance_manager`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.launch.fundingVault),
            tx.object(config.registry.launch.fundingVault),
            tx.pure.u64(input.index),
            tx.pure.option("u64", input.amount),
        ],
    });
}

/**
    entry fun deposit_to_deepbook_balance_manager<TOKEN>(
        version: &Version,
        registry: &mut Registry,
        index: u64,
        coin: Coin<TOKEN>,
        ctx: &mut TxContext,
    ) {
*/
export function depositToDeepbookBalanceManager(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        coins: string[];
        amount: string;
    }
) {
    let coin = splitCoins(tx, input.typeArguments[0], input.coins, input.amount);
    tx.moveCall({
        target: `${config.package.launch.fundingVault}::funding_vault::deposit_to_deepbook_balance_manager`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.launch.fundingVault),
            tx.object(config.registry.launch.fundingVault),
            tx.pure.u64(input.index),
            coin,
        ],
    });
}

/**
    entry fun withdraw_from_deepbook_balance_manager<TOKEN>(
        version: &Version,
        registry: &mut Registry,
        index: u64,
        amount: Option<u64>,
        recipient: address,
        ctx: &mut TxContext,
    ) {
*/
export function withdrawFromDeepbookBalanceManager(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        amount: string | null;
        recipient: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.fundingVault}::funding_vault::withdraw_from_deepbook_balance_manager`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.launch.fundingVault),
            tx.object(config.registry.launch.fundingVault),
            tx.pure.u64(input.index),
            tx.pure.option("u64", input.amount),
            tx.pure.address(input.recipient),
        ],
    });
}

/**
    entry fun increase_fund<TOKEN>(
        version: &Version,
        registry: &mut Registry,
        index: u64,
        coin: Coin<TOKEN>,
        ctx: &TxContext,
    ) {
*/
export function increaseFund(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        coins: string[];
        amount: string;
    }
) {
    let coin = splitCoins(tx, input.typeArguments[0], input.coins, input.amount);
    tx.moveCall({
        target: `${config.package.launch.fundingVault}::funding_vault::increase_fund`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.launch.fundingVault),
            tx.object(config.registry.launch.fundingVault),
            tx.pure.u64(input.index),
            coin,
        ],
    });
}

/**
    entry fun decrease_fund<TOKEN>(
        version: &Version,
        registry: &mut Registry,
        index: u64,
        amount: u64,
        recipient: address,
        ctx: &mut TxContext,
    ) {
*/
export function decreaseFund(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        amount: string;
        recipient: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.fundingVault}::funding_vault::decrease_fund`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.launch.fundingVault),
            tx.object(config.registry.launch.fundingVault),
            tx.pure.u64(input.index),
            tx.pure.u64(input.amount),
            tx.pure.address(input.recipient),
        ],
    });
}
