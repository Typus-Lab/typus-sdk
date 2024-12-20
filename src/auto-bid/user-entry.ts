import { Transaction } from "@mysten/sui/transactions";
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
    tx: Transaction,
    input: {
        typeArguments: string[]; // D_TOKEN, B_TOKEN
        vaultIndex: string;
        signalIndex: string;
        coins: string[];
        amount: string;
        size: string;
        pricePercentage: string;
        maxTimes: string;
        targetRounds: string[];
    }
) {
    if (
        // B_TOKEN
        input.typeArguments[1] == "0x2::sui::SUI" ||
        input.typeArguments[1] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"
    ) {
        let [input_coin] = tx.splitCoins(tx.gas, [tx.pure.u64(input.amount)]);
        tx.moveCall({
            target: `${config.package.dovSingle}::auto_bid::new_strategy`,
            typeArguments: input.typeArguments,
            arguments: [
                tx.object(config.registry.dov.dovSingle),
                tx.object(config.registry.dov.autoBid),
                tx.pure.u64(input.vaultIndex),
                tx.pure.u64(input.signalIndex),
                tx.pure.u64(input.size),
                tx.pure.u64(input.pricePercentage),
                tx.pure.u64(input.maxTimes),
                tx.pure.vector("u64", input.targetRounds),
                input_coin,
            ],
        });
    } else {
        let coin = input.coins.pop()!;

        if (input.coins.length > 0) {
            tx.mergeCoins(
                tx.object(coin),
                input.coins.map((coin) => tx.object(coin))
            );
        }

        let [input_coin] = tx.splitCoins(tx.object(coin), [tx.pure.u64(input.amount)]);

        tx.moveCall({
            target: `${config.package.dovSingle}::auto_bid::new_strategy`,
            typeArguments: input.typeArguments,
            arguments: [
                tx.object(config.registry.dov.dovSingle),
                tx.object(config.registry.dov.autoBid),
                tx.pure.u64(input.vaultIndex),
                tx.pure.u64(input.signalIndex),
                tx.pure.u64(input.size),
                tx.pure.u64(input.pricePercentage),
                tx.pure.u64(input.maxTimes),
                tx.pure.vector("u64", input.targetRounds),
                input_coin,
            ],
        });
    }

    return tx;
}

/**
    entry fun close_strategy<D_TOKEN, B_TOKEN>(
        strategy_pool: &mut StrategyPoolV2,
        vaultIndex: u64,
        signalIndex: u64,
        strategyIndex: u64,
        ctx: &mut TxContext
    )
*/

export function getCloseStrategyTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[]; // D_TOKEN, B_TOKEN
        vaultIndex: string;
        signalIndex: string;
        strategyIndex: string;
        user: string;
    }
) {
    let [d_token, b_token] = tx.moveCall({
        target: `${config.package.dovSingle}::auto_bid::close_strategy`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.object(config.registry.dov.autoBid),
            tx.pure.u64(input.vaultIndex),
            tx.pure.u64(input.signalIndex),
            tx.pure.u64(input.strategyIndex),
        ],
    });

    tx.transferObjects([d_token, b_token], input.user);

    return tx;
}

export function getWithdrawProfitStrategyTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[]; // D_TOKEN, B_TOKEN
        vaultIndex: string;
        signalIndex: string;
        strategyIndex: string;
        user: string;
    }
) {
    let d_token = tx.moveCall({
        target: `${config.package.dovSingle}::auto_bid::withdraw_profit`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.object(config.registry.dov.autoBid),
            tx.pure.u64(input.vaultIndex),
            tx.pure.u64(input.signalIndex),
            tx.pure.u64(input.strategyIndex),
        ],
    });

    tx.transferObjects([d_token], input.user);

    return tx;
}

/**
    entry fun update_strategy<D_TOKEN, B_TOKEN>(
        strategy_pool: &mut StrategyPoolV2,
        vaultIndex: u64,
        signalIndex: u64,
        strategyIndex: u64,
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
    tx: Transaction,
    input: {
        typeArguments: string[]; // D_TOKEN, B_TOKEN
        vaultIndex: string;
        signalIndex: string;
        strategyIndex: string;
        coins: string[];
        amount: string;
        size: string | null;
        pricePercentage: string | null;
        maxTimes: string | null;
        targetRounds: string[];
    }
) {
    if (
        // B_TOKEN
        input.typeArguments[1] == "0x2::sui::SUI" ||
        input.typeArguments[1] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"
    ) {
        if (input.amount) {
            let [input_coin] = tx.splitCoins(tx.gas, [tx.pure.u64(input.amount)]);

            tx.moveCall({
                target: `${config.package.dovSingle}::auto_bid::update_strategy`,
                typeArguments: input.typeArguments,
                arguments: [
                    tx.object(config.registry.dov.dovSingle),
                    tx.object(config.registry.dov.autoBid),
                    tx.pure.u64(input.vaultIndex),
                    tx.pure.u64(input.signalIndex),
                    tx.pure.u64(input.strategyIndex),
                    tx.pure.option("u64", input.size),
                    tx.pure.option("u64", input.pricePercentage),
                    tx.pure.option("u64", input.maxTimes),
                    tx.pure.vector("u64", input.targetRounds),
                    tx.makeMoveVec({ elements: [input_coin] }),
                ],
            });
        } else {
            tx.moveCall({
                target: `${config.package.dovSingle}::auto_bid::update_strategy`,
                typeArguments: input.typeArguments,
                arguments: [
                    tx.object(config.registry.dov.dovSingle),
                    tx.object(config.registry.dov.autoBid),
                    tx.pure.u64(input.vaultIndex),
                    tx.pure.u64(input.signalIndex),
                    tx.pure.u64(input.strategyIndex),
                    tx.pure.option("u64", input.size),
                    tx.pure.option("u64", input.pricePercentage),
                    tx.pure.option("u64", input.maxTimes),
                    tx.pure.vector("u64", input.targetRounds),
                    tx.makeMoveVec({ elements: [] }),
                ],
            });
        }
    } else {
        let coin = input.coins.pop()!;

        if (input.coins.length > 0) {
            tx.mergeCoins(
                tx.object(coin),
                input.coins.map((coin) => tx.object(coin))
            );
        }

        let [input_coin] = tx.splitCoins(tx.object(coin), [tx.pure.u64(input.amount)]);

        tx.moveCall({
            target: `${config.package.dovSingle}::auto_bid::update_strategy`,
            typeArguments: input.typeArguments,
            arguments: [
                tx.object(config.registry.dov.dovSingle),
                tx.object(config.registry.dov.autoBid),
                tx.pure.u64(input.vaultIndex),
                tx.pure.u64(input.signalIndex),
                tx.pure.u64(input.strategyIndex),
                tx.pure.option("u64", input.size),
                tx.pure.option("u64", input.pricePercentage),
                tx.pure.option("u64", input.maxTimes),
                tx.pure.vector("u64", input.targetRounds),
                tx.makeMoveVec({ elements: [input_coin] }),
            ],
        });
    }

    return tx;
}
