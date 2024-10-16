import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "src/constants";
import { TypusConfig } from "src/utils";

/**
    entry fun bid(
        typus_auction: &mut TypusAuction,
        size: u64,
        coin: Coin<SUI>,
        clock: &Clock,
        ctx: &mut TxContext
    )
*/
export async function bidTx(
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
        arguments: [tx.object(config.object.launchAuction), tx.pure(input.size), input_coin, tx.object(CLOCK)],
    });

    return tx;
}
