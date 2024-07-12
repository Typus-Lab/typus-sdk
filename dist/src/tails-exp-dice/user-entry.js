"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
exports.newGameTx = newGameTx;
exports.playGuessTx = playGuessTx;
exports.newGamePlayGuessTx = newGamePlayGuessTx;
exports.getConsumeExpCoinStakedTx = getConsumeExpCoinStakedTx;
exports.getConsumeExpCoinUnstakedTx = getConsumeExpCoinUnstakedTx;
var transactions_1 = require("@mysten/sui.js/transactions");
/**
    public(friend) entry fun new_game<TOKEN>(
        registry: &mut Registry,
        index: u64,
        coins: vector<Coin<TOKEN>>,
        stake_amount: u64,
        ctx: &mut TxContext
    )
*/
function newGameTx(gasBudget, packageId, typeArguments, // [TOKEN]
registry, index, coins, amount) {
    return __awaiter(this, void 0, void 0, function () {
        var tx;
        return __generator(this, function (_a) {
            tx = new transactions_1.TransactionBlock();
            tx.moveCall({
                target: "".concat(packageId, "::tails_exp::new_game"),
                typeArguments: typeArguments,
                arguments: [tx.object(registry), tx.pure(index), tx.makeMoveVec({ objects: coins.map(function (id) { return tx.object(id); }) }), tx.pure(amount)],
            });
            tx.setGasBudget(gasBudget);
            return [2 /*return*/, tx];
        });
    });
}
/**
    public(friend) entry fun play_guess(
        registry: &mut Registry,
        index: u64,
        game_id: u64,
        guess_1: u64,
        larger_than_1: bool,
        guess_2: u64,
        larger_than_2: bool,
        ctx: &mut TxContext
    )
*/
function playGuessTx(gasBudget, packageId, registry, index, guess_1, larger_than_1, guess_2, larger_than_2) {
    return __awaiter(this, void 0, void 0, function () {
        var tx;
        return __generator(this, function (_a) {
            tx = new transactions_1.TransactionBlock();
            tx.moveCall({
                target: "".concat(packageId, "::tails_exp::play_guess"),
                typeArguments: [],
                arguments: [
                    tx.object(registry),
                    tx.pure(index),
                    tx.pure(guess_1),
                    tx.pure(larger_than_1),
                    tx.pure(guess_2),
                    tx.pure(larger_than_2),
                ],
            });
            tx.setGasBudget(gasBudget);
            return [2 /*return*/, tx];
        });
    });
}
function newGamePlayGuessTx(gasBudget, packageId, typeArguments, // [TOKEN]
registry, index, coins, amount, guess_1, larger_than_1, guess_2, larger_than_2) {
    return __awaiter(this, void 0, void 0, function () {
        var tx, _a, coin;
        return __generator(this, function (_b) {
            tx = new transactions_1.TransactionBlock();
            if (typeArguments[0] == "0x2::sui::SUI" ||
                typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI") {
                _a = __read(tx.splitCoins(tx.gas, [tx.pure(amount)]), 1), coin = _a[0];
                tx.moveCall({
                    target: "".concat(packageId, "::tails_exp::new_game"),
                    typeArguments: typeArguments,
                    arguments: [tx.object(registry), tx.pure(index), tx.makeMoveVec({ objects: [coin] }), tx.pure(amount)],
                });
            }
            else {
                tx.moveCall({
                    target: "".concat(packageId, "::tails_exp::new_game"),
                    typeArguments: typeArguments,
                    arguments: [
                        tx.object(registry),
                        tx.pure(index),
                        tx.makeMoveVec({ objects: coins.map(function (id) { return tx.object(id); }) }),
                        tx.pure(amount),
                    ],
                });
            }
            tx.moveCall({
                target: "".concat(packageId, "::tails_exp::play_guess"),
                typeArguments: [],
                arguments: [
                    tx.object(registry),
                    tx.pure(index),
                    tx.pure(guess_1),
                    tx.pure(larger_than_1),
                    tx.pure(guess_2),
                    tx.pure(larger_than_2),
                    // tx.object("0x8"),        // TODO: waiting for upgrade
                ],
            });
            tx.setGasBudget(gasBudget);
            return [2 /*return*/, tx];
        });
    });
}
/**
    public fun consume_exp_coin_staked(
        registry: &mut Registry,
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        tails: address,
        coin: Coin<TAILS_EXP>,
    ) {
 */
function getConsumeExpCoinStakedTx(input) {
    var coin = input.coins.pop();
    if (input.coins.length > 0) {
        input.tx.mergeCoins(input.tx.object(coin), input.coins.map(function (id) { return input.tx.object(id); }));
    }
    var _a = __read(input.tx.splitCoins(input.tx.object(coin), [input.tx.pure(input.amount)]), 1), input_coin = _a[0];
    input.tx.moveCall({
        target: "".concat(input.packageId, "::tails_exp::consume_exp_coin_staked"),
        typeArguments: [],
        arguments: [
            input.tx.object(input.tailsExpRegistry),
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.tailsStakingRegistry),
            input.tx.pure(input.tails),
            input.tx.object(input_coin),
        ],
    });
    return input.tx;
}
/**
    public fun consume_exp_coin_unstaked(
        registry: &mut Registry,
        version: &Version,
        tails_staking_registry: &TailsStakingRegistry,
        kiosk: &mut Kiosk,
        kiosk_owner_cap: &KioskOwnerCap,
        tails: address,
        coin: Coin<TAILS_EXP>,
    ) {
 */
function getConsumeExpCoinUnstakedTx(input) {
    var coin = input.coins.pop();
    if (input.coins.length > 0) {
        input.tx.mergeCoins(input.tx.object(coin), input.coins.map(function (id) { return input.tx.object(id); }));
    }
    var _a = __read(input.tx.splitCoins(input.tx.object(coin), [input.tx.pure(input.amount)]), 1), input_coin = _a[0];
    if (input.personalKioskPackageId) {
        var _b = __read(input.tx.moveCall({
            target: "".concat(input.personalKioskPackageId, "::personal_kiosk::borrow_val"),
            arguments: [input.tx.object(input.kioskCap)],
        }), 2), personalKioskCap = _b[0], borrow = _b[1];
        input.tx.moveCall({
            target: "".concat(input.packageId, "::tails_exp::consume_exp_coin_unstaked"),
            typeArguments: [],
            arguments: [
                input.tx.object(input.tailsExpRegistry),
                input.tx.object(input.typusEcosystemVersion),
                input.tx.object(input.tailsStakingRegistry),
                input.tx.object(input.kiosk),
                personalKioskCap,
                input.tx.pure(input.tails),
                input.tx.object(input_coin),
            ],
        });
        input.tx.moveCall({
            target: "".concat(input.personalKioskPackageId, "::personal_kiosk::return_val"),
            arguments: [input.tx.object(input.kioskCap), personalKioskCap, borrow],
        });
    }
    else {
        input.tx.moveCall({
            target: "".concat(input.packageId, "::tails_exp::consume_exp_coin_unstaked"),
            typeArguments: [],
            arguments: [
                input.tx.object(input.tailsExpRegistry),
                input.tx.object(input.typusEcosystemVersion),
                input.tx.object(input.tailsStakingRegistry),
                input.tx.object(input.kiosk),
                input.tx.object(input.kioskCap),
                input.tx.pure(input.tails),
                input.tx.object(input_coin),
            ],
        });
    }
    return input.tx;
}
