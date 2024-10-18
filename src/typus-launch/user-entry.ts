import { TransactionBlock } from "@mysten/sui.js/transactions";
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
    tx: TransactionBlock,
    input: {
        size: string;
        amount: string;
    }
) {
    let [input_coin] = tx.splitCoins(tx.gas, [tx.pure(input.amount)]);

    tx.moveCall({
        target: `${config.package.launch}::auction::bid`,
        arguments: [
            tx.object(config.version.launch),
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
export function claimTx(config: TypusConfig, tx: TransactionBlock) {
    tx.moveCall({
        target: `${config.package.launch}::auction::claim`,
        arguments: [tx.object(config.version.launch), tx.object(config.object.launchAuction), tx.object(CLOCK)],
    });

    return tx;
}
