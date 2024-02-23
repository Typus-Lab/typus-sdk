import { TransactionBlock } from "@mysten/sui.js/transactions";

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
    gasBudget: number,
    packageId: string,
    typeArguments: string[], // D_TOKEN, B_TOKEN
    registry: string,
    strategy_pool: string,
    vault_index: string,
    signal_index: string,
    coins: string[],
    amount: string,
    size: string,
    price_percentage: string,
    max_times: string,
    target_rounds: string[]
) {
    let tx = new TransactionBlock();

    if (
        // B_TOKEN
        typeArguments[1] == "0x2::sui::SUI" ||
        typeArguments[1] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"
    ) {
        let [input_coin] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
        tx.moveCall({
            target: `${packageId}::auto_bid::new_strategy`,
            typeArguments,
            arguments: [
                tx.object(registry),
                tx.object(strategy_pool),
                tx.pure(vault_index),
                tx.pure(signal_index),
                tx.pure(size),
                tx.pure(price_percentage),
                tx.pure(max_times),
                tx.pure(target_rounds),
                input_coin,
            ],
        });
    } else {
        const coin = coins.pop()!;

        if (coins.length > 0) {
            tx.mergeCoins(
                tx.object(coin),
                coins.map((coin) => tx.object(coin))
            );
        }

        let [input_coin] = tx.splitCoins(tx.object(coin), [tx.pure(amount)]);

        tx.moveCall({
            target: `${packageId}::auto_bid::new_strategy`,
            typeArguments,
            arguments: [
                tx.object(registry),
                tx.object(strategy_pool),
                tx.pure(vault_index),
                tx.pure(signal_index),
                tx.pure(size),
                tx.pure(price_percentage),
                tx.pure(max_times),
                tx.pure(target_rounds),
                input_coin,
            ],
        });
    }
    tx.setGasBudget(gasBudget);

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
    gasBudget: number,
    packageId: string,
    typeArguments: string[], // D_TOKEN, B_TOKEN
    registry: string,
    strategy_pool: string,
    vault_index: string,
    signal_index: string,
    strategy_index: string,
    sender: string
) {
    let tx = new TransactionBlock();
    let [d_token, b_token] = tx.moveCall({
        target: `${packageId}::auto_bid::close_strategy`,
        typeArguments,
        arguments: [tx.object(registry), tx.object(strategy_pool), tx.pure(vault_index), tx.pure(signal_index), tx.pure(strategy_index)],
    });

    tx.transferObjects([d_token, b_token], sender);
    tx.setGasBudget(gasBudget);

    return tx;
}

export function getWithdrawProfitStrategyTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[], // D_TOKEN, B_TOKEN
    registry: string,
    strategy_pool: string,
    vault_index: string,
    signal_index: string,
    strategy_index: string,
    sender: string
) {
    let tx = new TransactionBlock();
    let d_token = tx.moveCall({
        target: `${packageId}::auto_bid::withdraw_profit`,
        typeArguments,
        arguments: [tx.object(registry), tx.object(strategy_pool), tx.pure(vault_index), tx.pure(signal_index), tx.pure(strategy_index)],
    });

    tx.transferObjects([d_token], sender);
    tx.setGasBudget(gasBudget);

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
    gasBudget: number,
    packageId: string,
    typeArguments: string[], // D_TOKEN, B_TOKEN
    registry: string,
    strategy_pool: string,
    vault_index: string,
    signal_index: string,
    strategy_index: string,
    coins: string[],
    amount: string,
    size: string | null,
    price_percentage: string | null,
    max_times: string | null,
    target_rounds: string[]
) {
    let tx = new TransactionBlock();

    if (
        // B_TOKEN
        typeArguments[1] == "0x2::sui::SUI" ||
        typeArguments[1] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"
    ) {
        if (amount) {
            const [input_coin] = tx.splitCoins(tx.gas, [tx.pure(amount)]);

            tx.moveCall({
                target: `${packageId}::auto_bid::update_strategy`,
                typeArguments,
                arguments: [
                    tx.object(registry),
                    tx.object(strategy_pool),
                    tx.pure(vault_index),
                    tx.pure(signal_index),
                    tx.pure(strategy_index),
                    tx.pure(size ? [size] : []),
                    tx.pure(price_percentage ? [price_percentage] : []),
                    tx.pure(max_times ? [max_times] : []),
                    tx.pure(target_rounds),
                    tx.makeMoveVec({ objects: [input_coin] }),
                ],
            });
        } else {
            tx.moveCall({
                target: `${packageId}::auto_bid::update_strategy`,
                typeArguments,
                arguments: [
                    tx.object(registry),
                    tx.object(strategy_pool),
                    tx.pure(vault_index),
                    tx.pure(signal_index),
                    tx.pure(strategy_index),
                    tx.pure(size ? [size] : []),
                    tx.pure(price_percentage ? [price_percentage] : []),
                    tx.pure(max_times ? [max_times] : []),
                    tx.pure(target_rounds),
                    tx.makeMoveVec({ objects: [] }),
                ],
            });
        }
    } else {
        const coin = coins.pop()!;

        if (coins.length > 0) {
            tx.mergeCoins(
                tx.object(coin),
                coins.map((coin) => tx.object(coin))
            );
        }

        const [input_coin] = tx.splitCoins(tx.object(coin), [tx.pure(amount)]);

        tx.moveCall({
            target: `${packageId}::auto_bid::update_strategy`,
            typeArguments,
            arguments: [
                tx.object(registry),
                tx.object(strategy_pool),
                tx.pure(vault_index),
                tx.pure(signal_index),
                tx.pure(strategy_index),
                tx.pure(size ? [size] : []),
                tx.pure(price_percentage ? [price_percentage] : []),
                tx.pure(max_times ? [max_times] : []),
                tx.pure(target_rounds),
                tx.makeMoveVec({ objects: [input_coin] }),
            ],
        });
    }
    tx.setGasBudget(gasBudget);

    return tx;
}
