import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

/**
    entry fun new_strategy<B_TOKEN>(
        strategy_pool: &mut StrategyPool,
        vault_index: u64,
        signal_index: u64,
        size: u64,
        price_percentage: u64,
        max_times: u64,
        target_rounds: vector<u64>,
        coin: Coin<B_TOKEN>,
        ctx: &mut TxContext
    )
*/

export function getNewStrategyTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[]; // D_TOKEN, B_TOKEN
        strategy_pool: string;
        vault_index: string;
        signal_index: string;
        coins: string[];
        amount: string;
        size: string;
        price_percentage: string;
        max_times: string;
        target_rounds: string[];
    }
) {
    if (
        // B_TOKEN
        input.typeArguments[1] == "0x2::sui::SUI" ||
        input.typeArguments[1] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"
    ) {
        let [input_coin] = tx.splitCoins(tx.gas, [tx.pure(input.amount)]);
        tx.moveCall({
            target: `${config.package.dovSingle}::auto_bid::new_strategy`,
            typeArguments: input.typeArguments,
            arguments: [
                tx.object(config.registry.dov.dovSingle),
                tx.object(input.strategy_pool),
                tx.pure(input.vault_index),
                tx.pure(input.signal_index),
                tx.pure(input.size),
                tx.pure(input.price_percentage),
                tx.pure(input.max_times),
                tx.pure(input.target_rounds),
                input_coin,
            ],
        });
    } else {
        const coin = input.coins.pop()!;

        if (input.coins.length > 0) {
            tx.mergeCoins(
                tx.object(coin),
                input.coins.map((coin) => tx.object(coin))
            );
        }

        let [input_coin] = tx.splitCoins(tx.object(coin), [tx.pure(input.amount)]);

        tx.moveCall({
            target: `${config.package.dovSingle}::auto_bid::new_strategy`,
            typeArguments: input.typeArguments,
            arguments: [
                tx.object(config.registry.dov.dovSingle),
                tx.object(input.strategy_pool),
                tx.pure(input.vault_index),
                tx.pure(input.signal_index),
                tx.pure(input.size),
                tx.pure(input.price_percentage),
                tx.pure(input.max_times),
                tx.pure(input.target_rounds),
                input_coin,
            ],
        });
    }

    return tx;
}

/**
    entry fun close_strategy<D_TOKEN, B_TOKEN>(
        strategy_pool: &mut StrategyPoolV2,
        vault_index: u64,
        signal_index: u64,
        strategy_index: u64,
        ctx: &mut TxContext
    )
*/

export function getCloseStrategyTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[]; // D_TOKEN, B_TOKEN
        strategy_pool: string;
        vault_index: string;
        signal_index: string;
        strategy_index: string;
        user: string;
    }
) {
    let [d_token, b_token] = tx.moveCall({
        target: `${config.package.dovSingle}::auto_bid::close_strategy`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.object(input.strategy_pool),
            tx.pure(input.vault_index),
            tx.pure(input.signal_index),
            tx.pure(input.strategy_index),
        ],
    });

    tx.transferObjects([d_token, b_token], input.user);

    return tx;
}

export function getWithdrawProfitStrategyTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[]; // D_TOKEN, B_TOKEN
        strategy_pool: string;
        vault_index: string;
        signal_index: string;
        strategy_index: string;
        user: string;
    }
) {
    let d_token = tx.moveCall({
        target: `${config.package.dovSingle}::auto_bid::withdraw_profit`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.object(input.strategy_pool),
            tx.pure(input.vault_index),
            tx.pure(input.signal_index),
            tx.pure(input.strategy_index),
        ],
    });

    tx.transferObjects([d_token], input.user);

    return tx;
}

/**
    entry fun update_strategy<D_TOKEN, B_TOKEN>(
        strategy_pool: &mut StrategyPoolV2,
        vault_index: u64,
        signal_index: u64,
        strategy_index: u64,
        size: Option<u64>,
        price_percentage: Option<u64>,
        max_times: Option<u64>,
        target_rounds: vector<u64>,
        coins: vector<Coin<B_TOKEN>>,
        ctx: & TxContext
    )
*/

export function getUpdateStrategyTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[]; // D_TOKEN, B_TOKEN
        strategy_pool: string;
        vault_index: string;
        signal_index: string;
        strategy_index: string;
        coins: string[];
        amount: string;
        size: string | null;
        price_percentage: string | null;
        max_times: string | null;
        target_rounds: string[];
    }
) {
    if (
        // B_TOKEN
        input.typeArguments[1] == "0x2::sui::SUI" ||
        input.typeArguments[1] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"
    ) {
        if (input.amount) {
            const [input_coin] = tx.splitCoins(tx.gas, [tx.pure(input.amount)]);

            tx.moveCall({
                target: `${config.package.dovSingle}::auto_bid::update_strategy`,
                typeArguments: input.typeArguments,
                arguments: [
                    tx.object(config.registry.dov.dovSingle),
                    tx.object(input.strategy_pool),
                    tx.pure(input.vault_index),
                    tx.pure(input.signal_index),
                    tx.pure(input.strategy_index),
                    tx.pure(input.size ? [input.size] : []),
                    tx.pure(input.price_percentage ? [input.price_percentage] : []),
                    tx.pure(input.max_times ? [input.max_times] : []),
                    tx.pure(input.target_rounds),
                    tx.makeMoveVec({ objects: [input_coin] }),
                ],
            });
        } else {
            tx.moveCall({
                target: `${config.package.dovSingle}::auto_bid::update_strategy`,
                typeArguments: input.typeArguments,
                arguments: [
                    tx.object(config.registry.dov.dovSingle),
                    tx.object(input.strategy_pool),
                    tx.pure(input.vault_index),
                    tx.pure(input.signal_index),
                    tx.pure(input.strategy_index),
                    tx.pure(input.size ? [input.size] : []),
                    tx.pure(input.price_percentage ? [input.price_percentage] : []),
                    tx.pure(input.max_times ? [input.max_times] : []),
                    tx.pure(input.target_rounds),
                    tx.makeMoveVec({ objects: [] }),
                ],
            });
        }
    } else {
        const coin = input.coins.pop()!;

        if (input.coins.length > 0) {
            tx.mergeCoins(
                tx.object(coin),
                input.coins.map((coin) => tx.object(coin))
            );
        }

        const [input_coin] = tx.splitCoins(tx.object(coin), [tx.pure(input.amount)]);

        tx.moveCall({
            target: `${config.package.dovSingle}::auto_bid::update_strategy`,
            typeArguments: input.typeArguments,
            arguments: [
                tx.object(config.registry.dov.dovSingle),
                tx.object(input.strategy_pool),
                tx.pure(input.vault_index),
                tx.pure(input.signal_index),
                tx.pure(input.strategy_index),
                tx.pure(input.size ? [input.size] : []),
                tx.pure(input.price_percentage ? [input.price_percentage] : []),
                tx.pure(input.max_times ? [input.max_times] : []),
                tx.pure(input.target_rounds),
                tx.makeMoveVec({ objects: [input_coin] }),
            ],
        });
    }

    return tx;
}
