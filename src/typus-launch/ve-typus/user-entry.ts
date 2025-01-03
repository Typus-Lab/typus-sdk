import { Transaction } from "@mysten/sui/transactions";
import { CLOCK } from "src/constants";
import { TypusConfig } from "src/utils";
import { updateVotes } from "../improvement-proposal";

/**
    public fun mint(
        version: &Version,
        registry: &mut Registry,
        coin: Coin<TYPUS>,
        lock_up_period: u64,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
*/
export function mint(
    config: TypusConfig,
    tx: Transaction,
    input: {
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
        return tx.splitCoins(tx.object(coin), [tx.pure.u64(input.amount)]);
    })();
    tx.moveCall({
        target: `${config.package.launch.veTypus}::ve_typus::mint`,
        arguments: [
            tx.object(config.version.launch.veTypus),
            tx.object(config.registry.launch.veTypus),
            coin,
            tx.pure.u64(input.lockUpPeriod),
            tx.object(CLOCK),
        ],
    });
    updateVotes(config, tx);
}

/**
    public fun burn(
        version: &Version,
        registry: &mut Registry,
        ve_typus: address,
        clock: &Clock,
        ctx: &mut TxContext,
    ): Coin<TYPUS> {
*/
export function burn(
    config: TypusConfig,
    tx: Transaction,
    input: {
        user: string;
        veTypus: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.launch.veTypus}::ve_typus::burn`,
        arguments: [
            tx.object(config.version.launch.veTypus),
            tx.object(config.registry.launch.veTypus),
            tx.pure.address(input.veTypus),
            tx.object(CLOCK),
        ],
    });
    tx.transferObjects([result[0]], input.user);
}

/**
    public fun renew(
        version: &Version,
        registry: &mut Registry,
        ve_typus: address,
        lock_up_period: u64,
        clock: &Clock,
        ctx: &TxContext,
    ) {
*/
export function renew(
    config: TypusConfig,
    tx: Transaction,
    input: {
        veTypus: string;
        lockUpPeriod: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.veTypus}::ve_typus::renew`,
        arguments: [
            tx.object(config.version.launch.veTypus),
            tx.object(config.registry.launch.veTypus),
            tx.pure.address(input.veTypus),
            tx.pure.u64(input.lockUpPeriod),
            tx.object(CLOCK),
        ],
    });
    updateVotes(config, tx);
}
