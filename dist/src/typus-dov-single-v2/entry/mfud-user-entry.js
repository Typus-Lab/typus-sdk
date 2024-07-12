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
exports.getMfudRaiseFundTx = getMfudRaiseFundTx;
exports.getMfudReduceFundTx = getMfudReduceFundTx;
exports.getMfudDepositTx = getMfudDepositTx;
exports.getMfudNewBidTx = getMfudNewBidTx;
exports.getMfudExerciseTx = getMfudExerciseTx;
exports.getMfudRebateTx = getMfudRebateTx;
exports.getMfudNewStrategyTx = getMfudNewStrategyTx;
exports.getMfudUpdateStrategyTx = getMfudUpdateStrategyTx;
exports.getMfudCloseStrategyTx = getMfudCloseStrategyTx;
exports.getMfudWithdrawProfitStrategyTx = getMfudWithdrawProfitStrategyTx;
exports.getMfudCompoundWithRedeemTx = getMfudCompoundWithRedeemTx;
var transactions_1 = require("@mysten/sui.js/transactions");
var constants_1 = require("src/constants");
function getMfudRaiseFundTx(input) {
    var typusTokenBalance = input.raiseCoins.length > 0
        ? input.tx.moveCall({
            target: "0x2::coin::into_balance",
            typeArguments: [input.typusTokenType],
            arguments: [
                input.tx.object(input.tx.moveCall({
                    target: "".concat(input.typusTokenPackageId, "::").concat(input.typusTokenType.split("::")[1], "::mint"),
                    arguments: [
                        input.tx.object(input.typusTokenRegistry),
                        input.tx.makeMoveVec({ objects: input.raiseCoins }),
                        input.tx.pure(input.raiseAmount),
                    ],
                })),
            ],
        })
        : input.tx.moveCall({
            target: "0x2::balance::zero",
            typeArguments: [input.typusTokenType],
            arguments: [],
        });
    var result = input.tx.moveCall({
        target: "".concat(input.typusDovSinglePackageId, "::tds_user_entry::public_raise_fund"),
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusUserRegistry),
            input.tx.object(input.typusLeaderboardRegistry),
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: "".concat(input.typusFrameworkOriginPackageId, "::vault::TypusDepositReceipt"),
                objects: input.receipts.map(function (receipt) { return input.tx.object(receipt); }),
            }),
            input.tx.object(typusTokenBalance),
            input.tx.pure(input.raiseFromPremium),
            input.tx.pure(input.raiseFromInactive),
            input.tx.object(constants_1.CLOCK),
        ],
    });
    input.tx.transferObjects([input.tx.object(result[0])], input.user);
    return input.tx;
}
function getMfudReduceFundTx(input) {
    var result = input.tx.moveCall({
        target: "".concat(input.typusDovSinglePackageId, "::tds_user_entry::public_reduce_fund"),
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusUserRegistry),
            input.tx.object(input.typusLeaderboardRegistry),
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: "".concat(input.typusFrameworkOriginPackageId, "::vault::TypusDepositReceipt"),
                objects: input.receipts.map(function (receipt) { return input.tx.object(receipt); }),
            }),
            input.tx.pure(input.reduceFromWarmup),
            input.tx.pure(input.reduceFromActive),
            input.tx.pure(input.reduceFromPremium),
            input.tx.pure(input.reduceFromInactive),
            input.tx.pure(input.reduceFromIncentive),
            input.tx.object(constants_1.CLOCK),
        ],
    });
    input.tx.moveCall({
        target: "".concat(input.typusFrameworkPackageId, "::vault::transfer_deposit_receipt"),
        arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
    });
    if (input.typeArguments[0] == input.typusTokenType) {
        var typusToken = input.tx.moveCall({
            target: "0x2::coin::from_balance",
            typeArguments: [input.typeArguments[0]],
            arguments: [input.tx.object(result[1])],
        });
        var token = input.tx.moveCall({
            target: "".concat(input.typusTokenPackageId, "::").concat(input.typusTokenType.split("::")[1], "::burn"),
            arguments: [input.tx.object(input.typusTokenRegistry), input.tx.object(typusToken)],
        });
        input.tx.transferObjects([input.tx.object(token)], input.user);
    }
    else {
        input.tx.moveCall({
            target: "".concat(input.typusFrameworkPackageId, "::utils::transfer_balance"),
            typeArguments: [input.typeArguments[0]],
            arguments: [input.tx.object(result[1]), input.tx.pure(input.user)],
        });
    }
    if (input.typeArguments[1] == input.typusTokenType) {
        var typusToken = input.tx.moveCall({
            target: "0x2::coin::from_balance",
            typeArguments: [input.typeArguments[1]],
            arguments: [input.tx.object(result[2])],
        });
        var token = input.tx.moveCall({
            target: "".concat(input.typusTokenPackageId, "::").concat(input.typusTokenType.split("::")[1], "::burn"),
            arguments: [input.tx.object(input.typusTokenRegistry), input.tx.object(typusToken)],
        });
        input.tx.transferObjects([input.tx.object(token)], input.user);
    }
    else {
        input.tx.moveCall({
            target: "".concat(input.typusFrameworkPackageId, "::utils::transfer_balance"),
            typeArguments: [input.typeArguments[1]],
            arguments: [input.tx.object(result[2]), input.tx.pure(input.user)],
        });
    }
    if (input.typeArguments[2] == input.typusTokenType) {
        var typusToken = input.tx.moveCall({
            target: "0x2::coin::from_balance",
            typeArguments: [input.typeArguments[2]],
            arguments: [input.tx.object(result[3])],
        });
        var token = input.tx.moveCall({
            target: "".concat(input.typusTokenPackageId, "::").concat(input.typusTokenType.split("::")[1], "::burn"),
            arguments: [input.tx.object(input.typusTokenRegistry), input.tx.object(typusToken)],
        });
        input.tx.transferObjects([input.tx.object(token)], input.user);
    }
    else {
        input.tx.moveCall({
            target: "".concat(input.typusFrameworkPackageId, "::utils::transfer_balance"),
            typeArguments: [input.typeArguments[2]],
            arguments: [input.tx.object(result[3]), input.tx.pure(input.user)],
        });
    }
    return input.tx;
}
function getMfudDepositTx(input) {
    var mfud = input.tx.moveCall({
        target: "".concat(input.mfudPackageId, "::mfud::mint"),
        arguments: [
            input.tx.object(input.mfudRegistry),
            input.tx.makeMoveVec({ objects: input.coins.map(function (id) { return input.tx.object(id); }) }),
            input.tx.pure(input.mfudAmount),
        ],
    });
    var result = input.tx.moveCall({
        target: "".concat(input.typusDovSinglePackageId, "::tds_user_entry::public_deposit"),
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusUserRegistry),
            input.tx.object(input.typusLeaderboardRegistry),
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({ objects: [mfud] }),
            input.tx.pure(input.mfudAmount),
            input.tx.makeMoveVec({
                type: "".concat(input.typusFrameworkOriginPackageId, "::vault::TypusDepositReceipt"),
                objects: input.receipts.map(function (id) { return input.tx.object(id); }),
            }),
            input.tx.object(constants_1.CLOCK),
        ],
    });
    input.tx.moveCall({
        target: "0x1::vector::destroy_empty",
        typeArguments: ["0x2::coin::Coin<" + input.typeArguments[0] + ">"],
        arguments: [input.tx.object(result[0])],
    });
    input.tx.transferObjects([input.tx.object(result[1])], input.user);
    return input.tx;
}
function getMfudNewBidTx(input) {
    var mfud = input.tx.moveCall({
        target: "".concat(input.mfudPackageId, "::mfud::mint"),
        arguments: [
            input.tx.object(input.mfudRegistry),
            input.tx.makeMoveVec({ objects: input.coins.map(function (id) { return input.tx.object(id); }) }),
            input.tx.pure(input.premium_required),
        ],
    });
    var result = input.tx.moveCall({
        target: "".concat(input.typusDovSinglePackageId, "::tds_user_entry::public_bid"),
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusUserRegistry),
            input.tx.object(input.tgldRegistry),
            input.tx.object(input.typusLeaderboardRegistry),
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({ objects: [mfud] }),
            input.tx.pure(input.size),
            input.tx.pure("0x6"),
        ],
    });
    input.tx.transferObjects([input.tx.object(result[0])], input.user);
    var fud_coin = input.tx.moveCall({
        target: "".concat(input.mfudPackageId, "::mfud::burn"),
        arguments: [input.tx.object(input.mfudRegistry), input.tx.object(result[1])],
    });
    input.tx.transferObjects([input.tx.object(fud_coin)], input.user);
    return input.tx;
}
function getMfudExerciseTx(input) {
    var result = input.tx.moveCall({
        target: "".concat(input.typusDovSinglePackageId, "::tds_user_entry::exercise"),
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: "".concat(input.typusFrameworkOriginPackageId, "::vault::TypusBidReceipt"),
                objects: input.receipts.map(function (receipt) { return input.tx.object(receipt); }),
            }),
        ],
    });
    var mfud_coin = input.tx.moveCall({
        target: "0x2::coin::from_balance",
        typeArguments: [input.typeArguments[0]],
        arguments: [input.tx.object(result[0])],
    });
    var fud_coin = input.tx.moveCall({
        target: "".concat(input.mfudPackageId, "::mfud::burn"),
        arguments: [input.tx.object(input.mfudRegistry), input.tx.object(mfud_coin)],
    });
    input.tx.transferObjects([input.tx.object(fud_coin)], input.user);
    return input.tx;
}
function getMfudRebateTx(input) {
    var result = input.tx.moveCall({
        target: "".concat(input.typusDovSinglePackageId, "::tds_user_entry::rebate"),
        typeArguments: [input.typeArgument],
        arguments: [input.tx.object(input.typusDovSingleRegistry)],
    });
    var balance = input.tx.moveCall({
        target: "0x1::option::destroy_some",
        typeArguments: ["0x2::balance::Balance<".concat(input.typeArgument, ">")],
        arguments: [input.tx.object(result[0])],
    });
    var mfud_coin = input.tx.moveCall({
        target: "0x2::coin::from_balance",
        typeArguments: [input.typeArgument],
        arguments: [input.tx.object(balance)],
    });
    var fud_coin = input.tx.moveCall({
        target: "".concat(input.mfudPackageId, "::mfud::burn"),
        arguments: [input.tx.object(input.mfudRegistry), input.tx.object(mfud_coin)],
    });
    input.tx.transferObjects([input.tx.object(fud_coin)], input.user);
    return input.tx;
}
function getMfudNewStrategyTx(gasBudget, packageId, typeArguments, // D_TOKEN, B_TOKEN
registry, strategy_pool, vault_index, signal_index, coins, mfudPackageId, mfudRegistry, mfudAmount, size, price_percentage, max_times, target_rounds) {
    var tx = new transactions_1.TransactionBlock();
    var input_coin = tx.moveCall({
        target: "".concat(mfudPackageId, "::mfud::mint"),
        arguments: [tx.object(mfudRegistry), tx.makeMoveVec({ objects: coins.map(function (id) { return tx.object(id); }) }), tx.pure(mfudAmount)],
    });
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
    tx.setGasBudget(gasBudget);
    return tx;
}
function getMfudUpdateStrategyTx(gasBudget, packageId, typeArguments, // D_TOKEN, B_TOKEN
registry, strategy_pool, vault_index, signal_index, strategy_index, coins, mfudPackageId, mfudRegistry, mfudAmount, size, price_percentage, max_times, target_rounds) {
    var tx = new transactions_1.TransactionBlock();
    var _a = __read(tx.moveCall({
        target: "".concat(mfudPackageId, "::mfud::mint"),
        arguments: [tx.object(mfudRegistry), tx.makeMoveVec({ objects: coins.map(function (id) { return tx.object(id); }) }), tx.pure(mfudAmount)],
    }), 1), input_coin = _a[0];
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
    tx.setGasBudget(gasBudget);
    return tx;
}
function getMfudCloseStrategyTx(gasBudget, packageId, typeArguments, // D_TOKEN, B_TOKEN
registry, strategy_pool, vault_index, signal_index, strategy_index, mfudPackageId, mfudRegistry, sender) {
    var tx = new transactions_1.TransactionBlock();
    var _a = __read(tx.moveCall({
        target: "".concat(packageId, "::auto_bid::close_strategy"),
        typeArguments: typeArguments,
        arguments: [tx.object(registry), tx.object(strategy_pool), tx.pure(vault_index), tx.pure(signal_index), tx.pure(strategy_index)],
    }), 2), d_token = _a[0], b_token = _a[1];
    if (typeArguments[0].endsWith("MFUD")) {
        var fud_coin = tx.moveCall({
            target: "".concat(mfudPackageId, "::mfud::burn"),
            arguments: [tx.object(mfudRegistry), d_token],
        });
        tx.transferObjects([tx.object(fud_coin)], sender);
    }
    else {
        tx.transferObjects([d_token], sender);
    }
    if (typeArguments[1].endsWith("MFUD")) {
        var fud_coin = tx.moveCall({
            target: "".concat(mfudPackageId, "::mfud::burn"),
            arguments: [tx.object(mfudRegistry), b_token],
        });
        tx.transferObjects([tx.object(fud_coin)], sender);
    }
    else {
        tx.transferObjects([b_token], sender);
    }
    tx.setGasBudget(gasBudget);
    return tx;
}
function getMfudWithdrawProfitStrategyTx(gasBudget, packageId, typeArguments, // D_TOKEN, B_TOKEN
registry, strategy_pool, vault_index, signal_index, strategy_index, mfudPackageId, mfudRegistry, sender, txBlock) {
    var tx = txBlock ? txBlock : new transactions_1.TransactionBlock();
    var d_token = tx.moveCall({
        target: "".concat(packageId, "::auto_bid::withdraw_profit"),
        typeArguments: typeArguments,
        arguments: [tx.object(registry), tx.object(strategy_pool), tx.pure(vault_index), tx.pure(signal_index), tx.pure(strategy_index)],
    });
    if (typeArguments[0].endsWith("MFUD")) {
        var fud_coin = tx.moveCall({
            target: "".concat(mfudPackageId, "::mfud::burn"),
            arguments: [tx.object(mfudRegistry), d_token],
        });
        tx.transferObjects([tx.object(fud_coin)], sender);
    }
    else {
        tx.transferObjects([d_token], sender);
    }
    tx.setGasBudget(gasBudget);
    return tx;
}
function getMfudCompoundWithRedeemTx(input) {
    var raiseBalance = input.tx.moveCall({
        target: "0x2::balance::zero",
        typeArguments: [input.typeArguments[0]],
        arguments: [],
    });
    var result = input.tx.moveCall({
        target: "".concat(input.typusDovSinglePackageId, "::tds_user_entry::public_raise_fund"),
        typeArguments: [input.typeArguments[0], input.typeArguments[1]],
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusUserRegistry),
            input.tx.object(input.typusLeaderboardRegistry),
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: "".concat(input.typusFrameworkOriginPackageId, "::vault::TypusDepositReceipt"),
                objects: input.receipts.map(function (receipt) { return input.tx.object(receipt); }),
            }),
            input.tx.object(raiseBalance),
            input.tx.pure(true),
            input.tx.pure(false),
            input.tx.object(constants_1.CLOCK),
        ],
    });
    return getMfudReduceFundTx({
        tx: input.tx,
        typusEcosystemVersion: input.typusEcosystemVersion,
        typusUserRegistry: input.typusUserRegistry,
        typusLeaderboardRegistry: input.typusLeaderboardRegistry,
        typusFrameworkOriginPackageId: input.typusFrameworkOriginPackageId,
        typusFrameworkPackageId: input.typusFrameworkPackageId,
        typusDovSinglePackageId: input.typusDovSinglePackageId,
        typusDovSingleRegistry: input.typusDovSingleRegistry,
        typeArguments: input.typeArguments,
        typusTokenPackageId: input.typusTokenPackageId,
        typusTokenRegistry: input.typusTokenRegistry,
        typusTokenType: input.typusTokenType,
        index: input.index,
        receipts: [result[0]],
        reduceFromWarmup: "0",
        reduceFromActive: "0",
        reduceFromPremium: false,
        reduceFromInactive: false,
        reduceFromIncentive: true,
        user: input.user,
    });
}
