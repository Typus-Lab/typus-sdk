import { Transaction } from "@mysten/sui/transactions";
import { CLOCK } from "src/constants";
import { TypusConfig } from "src/utils";

/**
    entry fun bid(
        version: &Version,
        auction: &mut Auction,
        size: u64,
        mut coin: Coin<SUI>,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
*/
export function bidTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        size: string;
        amount: string;
    }
) {
    let [input_coin] = tx.splitCoins(tx.gas, [tx.pure.u64(input.amount)]);

    tx.moveCall({
        target: `${config.package.launch.auction}::auction::bid`,
        arguments: [
            tx.object(config.version.launch.auction),
            tx.object(config.object.launchAuction),
            tx.pure(input.size),
            input_coin,
            tx.object(CLOCK),
        ],
    });

    return tx;
}

/**
    entry fun claim(
        version: &Version,
        auction: &mut Auction,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
*/
export function claimTx(config: TypusConfig, tx: Transaction) {
    tx.moveCall({
        target: `${config.package.launch.auction}::auction::claim`,
        arguments: [tx.object(config.version.launch.auction), tx.object(config.object.launchAuction), tx.object(CLOCK)],
    });

    return tx;
}

/**
    entry fun whitelist(
        version: &Version,
        auction: &mut Auction,
        mut users: vector<address>,
        mut sizes: vector<u64>,
        clock: &Clock,
        ctx: &TxContext,
    ) {
*/
export function whitelistTx(config: TypusConfig, tx: Transaction, users: string[], sizes: string[]) {
    tx.moveCall({
        target: `${config.package.launch.auction}::auction::whitelist`,
        arguments: [
            tx.object(config.version.launch.auction),
            tx.object(config.object.launchAuction),
            tx.pure(users),
            tx.pure(sizes),
            tx.object(CLOCK),
        ],
    });

    return tx;
}
