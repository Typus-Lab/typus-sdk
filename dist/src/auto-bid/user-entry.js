"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewStrategyTx = getNewStrategyTx;
exports.getCloseStrategyTx = getCloseStrategyTx;
exports.getWithdrawProfitStrategyTx = getWithdrawProfitStrategyTx;
exports.getUpdateStrategyTx = getUpdateStrategyTx;
var transactions_1 = require("@mysten/sui.js/transactions");
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
function getNewStrategyTx(gasBudget, packageId, typeArguments, // D_TOKEN, B_TOKEN
registry, strategy_pool, vault_index, signal_index, coins, amount, size, price_percentage, max_times, target_rounds) {
    var tx = new transactions_1.TransactionBlock();
    if (
    // B_TOKEN
    typeArguments[1] == "0x2::sui::SUI" ||
        typeArguments[1] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI") {
        var _a = __read(tx.splitCoins(tx.gas, [tx.pure(amount)]), 1), input_coin = _a[0];
        tx.moveCall({
            target: "".concat(packageId, "::auto_bid::new_strategy"),
            typeArguments: typeArguments,
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
    else {
        var coin = coins.pop();
        if (coins.length > 0) {
            tx.mergeCoins(tx.object(coin), coins.map(function (coin) { return tx.object(coin); }));
        }
        var _b = __read(tx.splitCoins(tx.object(coin), [tx.pure(amount)]), 1), input_coin = _b[0];
        tx.moveCall({
            target: "".concat(packageId, "::auto_bid::new_strategy"),
            typeArguments: typeArguments,
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
function getCloseStrategyTx(gasBudget, packageId, typeArguments, // D_TOKEN, B_TOKEN
registry, strategy_pool, vault_index, signal_index, strategy_index, sender, txBlock) {
    var tx = txBlock ? txBlock : new transactions_1.TransactionBlock();
    var _a = __read(tx.moveCall({
        target: "".concat(packageId, "::auto_bid::close_strategy"),
        typeArguments: typeArguments,
        arguments: [tx.object(registry), tx.object(strategy_pool), tx.pure(vault_index), tx.pure(signal_index), tx.pure(strategy_index)],
    }), 2), d_token = _a[0], b_token = _a[1];
    tx.transferObjects([d_token, b_token], sender);
    tx.setGasBudget(gasBudget);
    return tx;
}
function getWithdrawProfitStrategyTx(gasBudget, packageId, typeArguments, // D_TOKEN, B_TOKEN
registry, strategy_pool, vault_index, signal_index, strategy_index, sender, txBlock) {
    var tx = txBlock ? txBlock : new transactions_1.TransactionBlock();
    var d_token = tx.moveCall({
        target: "".concat(packageId, "::auto_bid::withdraw_profit"),
        typeArguments: typeArguments,
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
function getUpdateStrategyTx(gasBudget, packageId, typeArguments, // D_TOKEN, B_TOKEN
registry, strategy_pool, vault_index, signal_index, strategy_index, coins, amount, size, price_percentage, max_times, target_rounds) {
    var tx = new transactions_1.TransactionBlock();
    if (
    // B_TOKEN
    typeArguments[1] == "0x2::sui::SUI" ||
        typeArguments[1] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI") {
        if (amount) {
            var _a = __read(tx.splitCoins(tx.gas, [tx.pure(amount)]), 1), input_coin = _a[0];
            tx.moveCall({
                target: "".concat(packageId, "::auto_bid::update_strategy"),
                typeArguments: typeArguments,
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
        else {
            tx.moveCall({
                target: "".concat(packageId, "::auto_bid::update_strategy"),
                typeArguments: typeArguments,
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
    }
    else {
        var coin = coins.pop();
        if (coins.length > 0) {
            tx.mergeCoins(tx.object(coin), coins.map(function (coin) { return tx.object(coin); }));
        }
        var _b = __read(tx.splitCoins(tx.object(coin), [tx.pure(amount)]), 1), input_coin = _b[0];
        tx.moveCall({
            target: "".concat(packageId, "::auto_bid::update_strategy"),
            typeArguments: typeArguments,
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
