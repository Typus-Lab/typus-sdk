import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "src/constants";
import { TypusConfig } from "src/utils";

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
        target: `${config.package.launch.veTypus}::ve_typus::update_registry_setting`,
        arguments: [
            tx.object(config.version.launch.veTypus),
            tx.object(config.registry.launch.veTypus),
            tx.pure(input.settingIndex),
            tx.pure(input.value),
        ],
    });
}

/**
    entry fun delegate_mint(
        version: &Version,
        registry: &mut Registry,
        user: address,
        coin: Coin<TYPUS>,
        lock_up_period: u64,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
*/
export function delegateMint(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        user: string;
        coins: string[];
        amount: string;
        lockUpPeriod: string;
    }
) {
    let [coin] = (() => {
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
        target: `${config.package.launch.veTypus}::ve_typus::delegate_mint`,
        arguments: [
            tx.object(config.version.launch.veTypus),
            tx.object(config.registry.launch.veTypus),
            tx.pure(input.user),
            coin,
            tx.pure(input.lockUpPeriod),
            tx.object(CLOCK),
        ],
    });
}

/**
    entry fun delegate_burn(
        version: &Version,
        registry: &mut Registry,
        user: address,
        ve_typus: address,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
*/
export function delegateBurn(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        user: string;
        veTypus: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.veTypus}::ve_typus::delegate_burn`,
        arguments: [
            tx.object(config.version.launch.veTypus),
            tx.object(config.registry.launch.veTypus),
            tx.pure(input.user),
            tx.pure(input.veTypus),
            tx.object(CLOCK),
        ],
    });
}
