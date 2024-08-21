import { TransactionBlock } from "@mysten/sui.js/transactions";

export function getMfudNewStrategyTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[], // D_TOKEN, B_TOKEN
    registry: string,
    strategy_pool: string,
    vault_index: string,
    signal_index: string,
    coins: string[],
    mfudPackageId: string,
    mfudRegistry: string,
    mfudAmount: string,
    size: string,
    price_percentage: string,
    max_times: string,
    target_rounds: string[]
) {
    let tx = new TransactionBlock();

    let input_coin = tx.moveCall({
        target: `${mfudPackageId}::mfud::mint`,
        arguments: [tx.object(mfudRegistry), tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }), tx.pure(mfudAmount)],
    });

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

    tx.setGasBudget(gasBudget);

    return tx;
}

export function getMfudUpdateStrategyTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[], // D_TOKEN, B_TOKEN
    registry: string,
    strategy_pool: string,
    vault_index: string,
    signal_index: string,
    strategy_index: string,
    coins: string[],
    mfudPackageId: string,
    mfudRegistry: string,
    mfudAmount: string,
    size: string | null,
    price_percentage: string | null,
    max_times: string | null,
    target_rounds: string[]
) {
    let tx = new TransactionBlock();

    let [input_coin] = tx.moveCall({
        target: `${mfudPackageId}::mfud::mint`,
        arguments: [tx.object(mfudRegistry), tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }), tx.pure(mfudAmount)],
    });

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

    tx.setGasBudget(gasBudget);

    return tx;
}

export function getMfudCloseStrategyTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[], // D_TOKEN, B_TOKEN
    registry: string,
    strategy_pool: string,
    vault_index: string,
    signal_index: string,
    strategy_index: string,
    mfudPackageId: string,
    mfudRegistry: string,
    sender: string
) {
    let tx = new TransactionBlock();

    let [d_token, b_token] = tx.moveCall({
        target: `${packageId}::auto_bid::close_strategy`,
        typeArguments,
        arguments: [tx.object(registry), tx.object(strategy_pool), tx.pure(vault_index), tx.pure(signal_index), tx.pure(strategy_index)],
    });

    if (typeArguments[0].endsWith("MFUD")) {
        let fud_coin = tx.moveCall({
            target: `${mfudPackageId}::mfud::burn`,
            arguments: [tx.object(mfudRegistry), d_token],
        });
        tx.transferObjects([tx.object(fud_coin)], sender);
    } else {
        tx.transferObjects([d_token], sender);
    }

    if (typeArguments[1].endsWith("MFUD")) {
        let fud_coin = tx.moveCall({
            target: `${mfudPackageId}::mfud::burn`,
            arguments: [tx.object(mfudRegistry), b_token],
        });
        tx.transferObjects([tx.object(fud_coin)], sender);
    } else {
        tx.transferObjects([b_token], sender);
    }

    tx.setGasBudget(gasBudget);

    return tx;
}

export function getMfudWithdrawProfitStrategyTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[], // D_TOKEN, B_TOKEN
    registry: string,
    strategy_pool: string,
    vault_index: string,
    signal_index: string,
    strategy_index: string,
    mfudPackageId: string,
    mfudRegistry: string,
    sender: string,
    txBlock?: TransactionBlock
) {
    let tx = txBlock ? txBlock : new TransactionBlock();

    let d_token = tx.moveCall({
        target: `${packageId}::auto_bid::withdraw_profit`,
        typeArguments,
        arguments: [tx.object(registry), tx.object(strategy_pool), tx.pure(vault_index), tx.pure(signal_index), tx.pure(strategy_index)],
    });

    if (typeArguments[0].endsWith("MFUD")) {
        let fud_coin = tx.moveCall({
            target: `${mfudPackageId}::mfud::burn`,
            arguments: [tx.object(mfudRegistry), d_token],
        });
        tx.transferObjects([tx.object(fud_coin)], sender);
    } else {
        tx.transferObjects([d_token], sender);
    }

    tx.setGasBudget(gasBudget);

    return tx;
}
