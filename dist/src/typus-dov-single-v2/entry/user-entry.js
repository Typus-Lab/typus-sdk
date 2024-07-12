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
exports.getRaiseFundTx = getRaiseFundTx;
exports.getReduceFundTx = getReduceFundTx;
exports.getRefreshDepositSnapshotTx = getRefreshDepositSnapshotTx;
exports.getNewBidTx = getNewBidTx;
exports.getExerciseTx = getExerciseTx;
exports.getTransferBidReceiptTx = getTransferBidReceiptTx;
exports.getSplitBidReceiptTx = getSplitBidReceiptTx;
exports.getMultiTransferBidReceiptTx = getMultiTransferBidReceiptTx;
exports.getRebateTx = getRebateTx;
exports.getCompoundWithRedeemTx = getCompoundWithRedeemTx;
var transactions_1 = require("@mysten/sui.js/transactions");
var constants_1 = require("src/constants");
/**
    public fun public_raise_fund<D_TOKEN, B_TOKEN>(
        typus_ecosystem_version: &TypusEcosystemVersion,
        typus_user_registry: &mut TypusUserRegistry,
        typus_leaderboard_registry: &mut TypusLeaderboardRegistry,
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        raise_balance: Balance<D_TOKEN>,
        raise_from_premium: bool,
        raise_from_inactive: bool,
        clock: &Clock,
        ctx: &mut TxContext,
    ): (TypusDepositReceipt, vector<u64>) {
 */
function getRaiseFundTx(input) {
    var raiseBalance = input.typeArguments[0] == "0x2::sui::SUI" ||
        input.typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"
        ? input.tx.moveCall({
            target: "".concat(input.typusFrameworkPackageId, "::utils::delegate_extract_balance"),
            typeArguments: [input.typeArguments[0]],
            arguments: [
                input.tx.pure(input.user),
                input.tx.makeMoveVec({
                    type: "0x2::coin::Coin<".concat(input.typeArguments[0], ">"),
                    objects: [input.tx.splitCoins(input.tx.gas, [input.tx.pure(input.raiseAmount)])],
                }),
                input.tx.pure(input.raiseAmount),
            ],
        })
        : input.tx.moveCall({
            target: "".concat(input.typusFrameworkPackageId, "::utils::delegate_extract_balance"),
            typeArguments: [input.typeArguments[0]],
            arguments: [
                input.tx.pure(input.user),
                input.tx.makeMoveVec({
                    type: "0x2::coin::Coin<".concat(input.typeArguments[0], ">"),
                    objects: input.raiseCoins.map(function (coin) { return input.tx.object(coin); }),
                }),
                input.tx.pure(input.raiseAmount),
            ],
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
            input.tx.object(raiseBalance),
            input.tx.pure(input.raiseFromPremium),
            input.tx.pure(input.raiseFromInactive),
            input.tx.object(constants_1.CLOCK),
        ],
    });
    input.tx.transferObjects([input.tx.object(result[0])], input.user);
    return input.tx;
}
/**
    public fun public_reduce_fund<D_TOKEN, B_TOKEN, I_TOKEN>(
        typus_ecosystem_version: &TypusEcosystemVersion,
        typus_user_registry: &mut TypusUserRegistry,
        typus_leaderboard_registry: &mut TypusLeaderboardRegistry,
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        reduce_from_warmup: u64,
        reduce_from_active: u64,
        reduce_from_premium: bool,
        reduce_from_inactive: bool,
        reduce_from_incentive: bool,
        clock: &Clock,
        ctx: &mut TxContext,
    ): (Option<TypusDepositReceipt>, Balance<D_TOKEN>, Balance<B_TOKEN>, Balance<I_TOKEN>, vector<u64>) {
 */
function getReduceFundTx(input) {
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
    input.tx.moveCall({
        target: "".concat(input.typusFrameworkPackageId, "::utils::transfer_balance"),
        typeArguments: [input.typeArguments[0]],
        arguments: [input.tx.object(result[1]), input.tx.pure(input.user)],
    });
    input.tx.moveCall({
        target: "".concat(input.typusFrameworkPackageId, "::utils::transfer_balance"),
        typeArguments: [input.typeArguments[1]],
        arguments: [input.tx.object(result[2]), input.tx.pure(input.user)],
    });
    input.tx.moveCall({
        target: "".concat(input.typusFrameworkPackageId, "::utils::transfer_balance"),
        typeArguments: [input.typeArguments[2]],
        arguments: [input.tx.object(result[3]), input.tx.pure(input.user)],
    });
    return input.tx;
}
/**
    public fun public_refresh_deposit_snapshot<D_TOKEN, B_TOKEN>(
        typus_ecosystem_version: &TypusEcosystemVersion,
        typus_user_registry: &mut TypusUserRegistry,
        typus_leaderboard_registry: &mut TypusLeaderboardRegistry,
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        clock: &Clock,
        ctx: &mut TxContext,
    ): (TypusDepositReceipt, vector<u64>) {
 */
function getRefreshDepositSnapshotTx(input) {
    var result = input.tx.moveCall({
        target: "".concat(input.typusDovSinglePackageId, "::tds_user_entry::public_refresh_deposit_snapshot"),
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
            input.tx.object(constants_1.CLOCK),
        ],
    });
    input.tx.transferObjects([input.tx.object(result[0])], input.user);
    return input.tx;
}
/**
    public(friend) entry fun new_bid<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        coins: vector<Coin<B_TOKEN>>,
        size: u64,
        clock: &Clock,
        ctx: &mut TxContext,
    )
*/
function getNewBidTx(input) {
    if (!input.usingSponsoredGasCoin &&
        (input.typeArguments[1] == "0x2::sui::SUI" ||
            input.typeArguments[1] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI")) {
        var _a = __read(input.tx.splitCoins(input.tx.gas, [input.tx.pure(input.premium_required)]), 1), coin = _a[0];
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
                input.tx.makeMoveVec({ objects: [coin] }),
                input.tx.pure(input.size),
                input.tx.object(constants_1.CLOCK),
            ],
        });
        input.tx.transferObjects([input.tx.object(result[0])], input.user);
        input.tx.moveCall({
            target: "".concat(input.typusFrameworkPackageId, "::utils::transfer_coins"),
            typeArguments: [input.typeArguments[1]],
            arguments: [input.tx.makeMoveVec({ objects: [input.tx.object(result[1])] }), input.tx.pure(input.user)],
        });
    }
    else {
        var balance = input.tx.moveCall({
            target: "".concat(input.typusFrameworkPackageId, "::utils::extract_balance"),
            typeArguments: [input.typeArguments[1]],
            arguments: [
                input.tx.makeMoveVec({ objects: input.coins.map(function (coin) { return input.tx.object(coin); }) }),
                input.tx.pure(input.premium_required),
            ],
        });
        var coin = input.tx.moveCall({
            target: "0x2::coin::from_balance",
            typeArguments: [input.typeArguments[1]],
            arguments: [input.tx.object(balance)],
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
                input.tx.makeMoveVec({ objects: [coin] }),
                input.tx.pure(input.size),
                input.tx.pure("0x6"),
            ],
        });
        input.tx.transferObjects([input.tx.object(result[0])], input.user);
        input.tx.moveCall({
            target: "".concat(input.typusFrameworkPackageId, "::utils::transfer_coins"),
            typeArguments: [input.typeArguments[1]],
            arguments: [input.tx.makeMoveVec({ objects: [input.tx.object(result[1])] }), input.tx.pure(input.user)],
        });
    }
    return input.tx;
}
/**
    public(friend) entry fun exercise<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusBidReceipt>,
        ctx: &mut TxContext,
    )
*/
function getExerciseTx(input) {
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
    input.tx.moveCall({
        target: "".concat(input.typusFrameworkPackageId, "::utils::transfer_balance"),
        typeArguments: [input.typeArguments[0]],
        arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
    });
    return input.tx;
}
/**
    public(friend) entry fun transfer_bid_receipt<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusBidReceipt>,
        share: Option<u64>,
        recipient: address,
        ctx: &mut TxContext,
    ) {
*/
function getTransferBidReceiptTx(input) {
    input.tx.moveCall({
        target: "".concat(input.typusDovSinglePackageId, "::tds_user_entry::transfer_bid_receipt"),
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: "".concat(input.typusFrameworkOriginPackageId, "::vault::TypusBidReceipt"),
                objects: input.receipts.map(function (receipt) { return input.tx.object(receipt); }),
            }),
            input.tx.pure(input.share ? [input.share] : []),
            input.tx.pure(input.recipient),
        ],
    });
    return input.tx;
}
function getSplitBidReceiptTx(input) {
    var result = input.tx.moveCall({
        target: "".concat(input.typusDovSinglePackageId, "::tds_user_entry::simple_split_bid_receipt"),
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: "".concat(input.typusFrameworkOriginPackageId, "::vault::TypusBidReceipt"),
                objects: input.receipts.map(function (receipt) { return input.tx.object(receipt); }),
            }),
            input.tx.pure([input.share]),
        ],
    });
    var unwrap0 = input.tx.moveCall({
        target: "0x1::option::destroy_some",
        typeArguments: ["".concat(input.typusFrameworkOriginPackageId, "::vault::TypusBidReceipt")],
        arguments: [input.tx.object(result[0])],
    });
    var unwrap1 = input.tx.moveCall({
        target: "0x1::option::destroy_some",
        typeArguments: ["".concat(input.typusFrameworkOriginPackageId, "::vault::TypusBidReceipt")],
        arguments: [input.tx.object(result[1])],
    });
    input.tx.transferObjects([unwrap1], input.recipient);
    return unwrap0;
}
function getMultiTransferBidReceiptTx(input) {
    var tx = new transactions_1.TransactionBlock();
    console.assert(input.shares.length == input.recipients.length, "shares.length != recipients.length");
    var receipts = {
        // type: `${input.typusFrameworkOriginPackageId}::vault::TypusBidReceipt`,
        objects: input.receipts.map(function (receipt) { return tx.object(receipt); }),
    };
    var i = 0;
    while (i < input.shares.length) {
        var share = input.shares[i];
        var recipient = input.recipients[i];
        var result = tx.moveCall({
            target: "".concat(input.typusDovSinglePackageId, "::tds_user_entry::public_transfer_bid_receipt"),
            typeArguments: input.typeArguments,
            arguments: [
                tx.object(input.typusDovSingleRegistry),
                tx.pure(input.index),
                tx.makeMoveVec(receipts),
                tx.pure([share]),
                tx.pure(recipient),
            ],
        });
        var unwrap = tx.moveCall({
            target: "0x1::option::destroy_some",
            typeArguments: ["".concat(input.typusFrameworkOriginPackageId, "::vault::TypusBidReceipt")],
            arguments: [tx.object(result[0])],
        });
        receipts = { objects: [unwrap] };
        i += 1;
        if (i == input.shares.length) {
            tx.transferObjects([tx.object(unwrap)], input.sender);
        }
    }
    tx.setGasBudget(100000000);
    return tx;
}
/**
    public(friend) entry fun refund<TOKEN>(
        registry: &mut Registry,
        ctx: &mut TxContext,
    )
*/
function getRebateTx(input) {
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
    input.tx.moveCall({
        target: "".concat(input.typusFrameworkPackageId, "::utils::transfer_balance"),
        typeArguments: [input.typeArgument],
        arguments: [input.tx.object(balance), input.tx.pure(input.user)],
    });
    return input.tx;
}
function getCompoundWithRedeemTx(input) {
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
    return getReduceFundTx({
        tx: input.tx,
        typusEcosystemVersion: input.typusEcosystemVersion,
        typusUserRegistry: input.typusUserRegistry,
        typusLeaderboardRegistry: input.typusLeaderboardRegistry,
        typusFrameworkOriginPackageId: input.typusFrameworkOriginPackageId,
        typusFrameworkPackageId: input.typusFrameworkPackageId,
        typusDovSinglePackageId: input.typusDovSinglePackageId,
        typusDovSingleRegistry: input.typusDovSingleRegistry,
        typeArguments: input.typeArguments,
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
