import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "src/constants";
import { TypusConfig } from "src/utils";

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
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        config: string[];
    }
) {
    tx.moveCall({
        target: `${config.package.launch.fundingVault}::funding_vault::new_vault`,
        typeArguments: input.typeArguments,
        arguments: [tx.object(config.version.launch.fundingVault), tx.object(config.registry.launch.fundingVault), tx.pure(input.config)],
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
    tx: TransactionBlock,
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
            tx.pure(input.settingIndex),
            tx.pure(input.value),
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
    tx: TransactionBlock,
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
            tx.pure(input.index),
            tx.pure(input.infoIndex),
            tx.pure(input.value),
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
    tx: TransactionBlock,
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
            tx.pure(input.index),
            tx.pure(input.configIndex),
            tx.pure(input.value),
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
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        index: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.fundingVault}::funding_vault::deposit_fund_to_deepbook_balance_manager`,
        typeArguments: input.typeArguments,
        arguments: [tx.object(config.version.launch.fundingVault), tx.object(config.registry.launch.fundingVault), tx.pure(input.index)],
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
    tx: TransactionBlock,
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
            tx.pure(input.index),
            tx.pure(input.amount ? [input.amount] : []),
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
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        index: string;
        coins: string[];
        amount: string;
    }
) {
    let [coin] =
        input.typeArguments[0] == "0x2::sui::SUI" ||
        input.typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"
            ? tx.splitCoins(tx.gas, [tx.pure(input.amount)])
            : (() => {
                  let coin = input.coins.pop()!;
                  if (input.coins.length > 0) {
                      tx.mergeCoins(
                          tx.object(coin),
                          input.coins.map((coin) => tx.object(coin))
                      );
                  }
                  return tx.splitCoins(tx.object(coin), [tx.pure(input.amount)]);
              })();
    tx.moveCall({
        target: `${config.package.launch.fundingVault}::funding_vault::increase_fund`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.launch.fundingVault),
            tx.object(config.registry.launch.fundingVault),
            tx.pure(input.index),
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
    tx: TransactionBlock,
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
            tx.pure(input.index),
            tx.pure(input.amount),
            tx.pure(input.recipient),
        ],
    });
}
