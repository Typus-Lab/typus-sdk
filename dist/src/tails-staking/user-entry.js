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
exports.getStakeTailsTx = getStakeTailsTx;
exports.getUnstakeTailsTx = getUnstakeTailsTx;
exports.getTransferTailsTx = getTransferTailsTx;
exports.getDailySignUpTx = getDailySignUpTx;
exports.getClaimProfitSharingTx = getClaimProfitSharingTx;
exports.getLevelUpTx = getLevelUpTx;
exports.getExpUpTx = getExpUpTx;
exports.getExpUpWithoutStakingTx = getExpUpWithoutStakingTx;
exports.getCreateKioskAndLockNftTx = getCreateKioskAndLockNftTx;
var transactions_1 = require("@mysten/sui.js/transactions");
var constants_1 = require("../constants");
var kiosk_1 = require("@mysten/kiosk");
/**
    public fun stake_tails(
        version: &mut Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        kiosk: &mut Kiosk,
        kiosk_owner_cap: &KioskOwnerCap,
        tails: address,
        coin: Coin<SUI>,
        ctx: &mut TxContext,
    ) {
*/
function getStakeTailsTx(input) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, coin, _b, personalKioskCap, borrow;
        return __generator(this, function (_c) {
            _a = __read(input.tx.splitCoins(input.tx.gas, [input.tx.pure(input.fee)]), 1), coin = _a[0];
            if (input.personalKioskPackageId) {
                _b = __read(input.tx.moveCall({
                    target: "".concat(input.personalKioskPackageId, "::personal_kiosk::borrow_val"),
                    arguments: [input.tx.object(input.kioskCap)],
                }), 2), personalKioskCap = _b[0], borrow = _b[1];
                input.tx.moveCall({
                    target: "".concat(input.typusPackageId, "::tails_staking::stake_tails"),
                    typeArguments: [],
                    arguments: [
                        input.tx.object(input.typusEcosystemVersion),
                        input.tx.object(input.typusTailsStakingRegistry),
                        input.tx.object(input.kiosk),
                        personalKioskCap,
                        input.tx.pure(input.tails),
                        coin,
                    ],
                });
                input.tx.moveCall({
                    target: "".concat(input.personalKioskPackageId, "::personal_kiosk::return_val"),
                    arguments: [input.tx.object(input.kioskCap), personalKioskCap, borrow],
                });
            }
            else {
                input.tx.moveCall({
                    target: "".concat(input.typusPackageId, "::tails_staking::stake_tails"),
                    typeArguments: [],
                    arguments: [
                        input.tx.object(input.typusEcosystemVersion),
                        input.tx.object(input.typusTailsStakingRegistry),
                        input.tx.object(input.kiosk),
                        input.tx.object(input.kioskCap),
                        input.tx.pure(input.tails),
                        coin,
                    ],
                });
            }
            return [2 /*return*/, input.tx];
        });
    });
}
/**
    public fun unstake_tails(
        version: &mut Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        kiosk: &mut Kiosk,
        kiosk_owner_cap: &KioskOwnerCap,
        tails: address,
        ctx: &TxContext,
    ) {
*/
function getUnstakeTailsTx(input) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, personalKioskCap, borrow;
        return __generator(this, function (_b) {
            if (input.personalKioskPackageId) {
                _a = __read(input.tx.moveCall({
                    target: "".concat(input.personalKioskPackageId, "::personal_kiosk::borrow_val"),
                    arguments: [input.tx.object(input.kioskCap)],
                }), 2), personalKioskCap = _a[0], borrow = _a[1];
                input.tx.moveCall({
                    target: "".concat(input.typusPackageId, "::tails_staking::unstake_tails"),
                    typeArguments: [],
                    arguments: [
                        input.tx.object(input.typusEcosystemVersion),
                        input.tx.object(input.typusTailsStakingRegistry),
                        input.tx.object(input.kiosk),
                        personalKioskCap,
                        input.tx.pure(input.tails),
                    ],
                });
                input.tx.moveCall({
                    target: "".concat(input.personalKioskPackageId, "::personal_kiosk::return_val"),
                    arguments: [input.tx.object(input.kioskCap), personalKioskCap, borrow],
                });
            }
            else {
                input.tx.moveCall({
                    target: "".concat(input.typusPackageId, "::tails_staking::unstake_tails"),
                    typeArguments: [],
                    arguments: [
                        input.tx.object(input.typusEcosystemVersion),
                        input.tx.object(input.typusTailsStakingRegistry),
                        input.tx.object(input.kiosk),
                        input.tx.object(input.kioskCap),
                        input.tx.pure(input.tails),
                    ],
                });
            }
            return [2 /*return*/, input.tx];
        });
    });
}
/**
    public fun transfer_tails(
        version: &mut Version,
        tails_staking_registry: &TailsStakingRegistry,
        kiosk: &mut Kiosk,
        kiosk_owner_cap: &KioskOwnerCap,
        tails: address,
        coin: Coin<SUI>,
        recipient: address,
        ctx: &mut TxContext,
    ) {
*/
function getTransferTailsTx(input) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, coin, _b, personalKioskCap, borrow;
        return __generator(this, function (_c) {
            _a = __read(input.tx.splitCoins(input.tx.gas, [input.tx.pure(input.fee)]), 1), coin = _a[0];
            if (input.personalKioskPackageId) {
                _b = __read(input.tx.moveCall({
                    target: "".concat(input.personalKioskPackageId, "::personal_kiosk::borrow_val"),
                    arguments: [input.tx.object(input.kioskCap)],
                }), 2), personalKioskCap = _b[0], borrow = _b[1];
                input.tx.moveCall({
                    target: "".concat(input.typusPackageId, "::tails_staking::transfer_tails"),
                    typeArguments: [],
                    arguments: [
                        input.tx.object(input.typusEcosystemVersion),
                        input.tx.object(input.typusTailsStakingRegistry),
                        input.tx.object(input.kiosk),
                        personalKioskCap,
                        input.tx.pure(input.tails),
                        coin,
                        input.tx.pure(input.recipient),
                    ],
                });
                input.tx.moveCall({
                    target: "".concat(input.personalKioskPackageId, "::personal_kiosk::return_val"),
                    arguments: [input.tx.object(input.kioskCap), personalKioskCap, borrow],
                });
            }
            else {
                input.tx.moveCall({
                    target: "".concat(input.typusPackageId, "::tails_staking::transfer_tails"),
                    typeArguments: [],
                    arguments: [
                        input.tx.object(input.typusEcosystemVersion),
                        input.tx.object(input.typusTailsStakingRegistry),
                        input.tx.object(input.kiosk),
                        input.tx.object(input.kioskCap),
                        input.tx.pure(input.tails),
                        coin,
                        input.tx.pure(input.recipient),
                    ],
                });
            }
            return [2 /*return*/, input.tx];
        });
    });
}
/**
    entry fun daily_sign_up(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        clock: &Clock,
        ctx: &TxContext,
    ) {
*/
function getDailySignUpTx(input) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            result = input.tx.moveCall({
                target: "".concat(input.typusPackageId, "::tails_staking::daily_sign_up"),
                typeArguments: [],
                arguments: [input.tx.object(input.typusEcosystemVersion), input.tx.object(input.typusTailsStakingRegistry), input.tx.pure(constants_1.CLOCK)],
            });
            return [2 /*return*/, input.tx];
        });
    });
}
/**
    public fun claim_profit_sharing<TOKEN>(
        version: &mut Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        ctx: &mut TxContext,
    ): Balance<TOKEN>
*/
function getClaimProfitSharingTx(input) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            result = input.tx.moveCall({
                target: "".concat(input.typusPackageId, "::tails_staking::claim_profit_sharing"),
                typeArguments: input.typeArguments,
                arguments: [input.tx.object(input.typusEcosystemVersion), input.tx.object(input.typusTailsStakingRegistry)],
            });
            input.tx.moveCall({
                target: "".concat(input.typusPackageId, "::utility::transfer_balance"),
                typeArguments: input.typeArguments,
                arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
            });
            return [2 /*return*/, input.tx];
        });
    });
}
/**
    entry fun level_up(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        tails: address,
        raw: bool,
    ) {
*/
function getLevelUpTx(input) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            input.tx.moveCall({
                target: "".concat(input.typusPackageId, "::tails_staking::level_up"),
                typeArguments: [],
                arguments: [
                    input.tx.object(input.typusEcosystemVersion),
                    input.tx.object(input.typusTailsStakingRegistry),
                    input.tx.pure(input.tails),
                    input.tx.pure(input.raw),
                ],
            });
            return [2 /*return*/, input.tx];
        });
    });
}
/**
    entry fun exp_up(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        typus_user_registry: &mut TypusUserRegistry,
        tails: address,
        amount: u64,
        ctx: &TxContext,
    ) {
*/
function getExpUpTx(input) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            input.tx.moveCall({
                target: "".concat(input.typusPackageId, "::tails_staking::exp_up"),
                typeArguments: [],
                arguments: [
                    input.tx.object(input.typusEcosystemVersion),
                    input.tx.object(input.typusTailsStakingRegistry),
                    input.tx.object(input.typusUserRegistry),
                    input.tx.pure(input.tails),
                    input.tx.pure(input.amount),
                ],
            });
            return [2 /*return*/, input.tx];
        });
    });
}
/**
    entry fun exp_up_without_staking(
        version: &Version,
        tails_staking_registry: &TailsStakingRegistry,
        typus_user_registry: &mut TypusUserRegistry,
        kiosk: &mut Kiosk,
        kiosk_owner_cap: &KioskOwnerCap,
        tails: address,
        amount: u64,
        ctx: &TxContext,
    ) {
*/
function getExpUpWithoutStakingTx(input) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, personalKioskCap, borrow;
        return __generator(this, function (_b) {
            if (input.personalKioskPackageId) {
                _a = __read(input.tx.moveCall({
                    target: "".concat(input.personalKioskPackageId, "::personal_kiosk::borrow_val"),
                    arguments: [input.tx.object(input.kioskCap)],
                }), 2), personalKioskCap = _a[0], borrow = _a[1];
                input.tx.moveCall({
                    target: "".concat(input.typusPackageId, "::tails_staking::exp_up_without_staking"),
                    typeArguments: [],
                    arguments: [
                        input.tx.object(input.typusEcosystemVersion),
                        input.tx.object(input.typusTailsStakingRegistry),
                        input.tx.object(input.typusUserRegistry),
                        input.tx.object(input.kiosk),
                        personalKioskCap,
                        input.tx.pure(input.tails),
                        input.tx.pure(input.amount),
                    ],
                });
                input.tx.moveCall({
                    target: "".concat(input.personalKioskPackageId, "::personal_kiosk::return_val"),
                    arguments: [input.tx.object(input.kioskCap), personalKioskCap, borrow],
                });
            }
            else {
                input.tx.moveCall({
                    target: "".concat(input.typusPackageId, "::tails_staking::exp_up_without_staking"),
                    typeArguments: [],
                    arguments: [
                        input.tx.object(input.typusEcosystemVersion),
                        input.tx.object(input.typusTailsStakingRegistry),
                        input.tx.object(input.typusUserRegistry),
                        input.tx.object(input.kiosk),
                        input.tx.object(input.kioskCap),
                        input.tx.pure(input.tails),
                        input.tx.pure(input.amount),
                    ],
                });
            }
            return [2 /*return*/, input.tx];
        });
    });
}
function getCreateKioskAndLockNftTx(kioskClient, gasBudget, nftPackageId, policy, nft_id, singer) {
    return __awaiter(this, void 0, void 0, function () {
        var tx, kioskTx, kiosk, kioskCap;
        return __generator(this, function (_a) {
            tx = new transactions_1.TransactionBlock();
            kioskTx = new kiosk_1.KioskTransaction({ transactionBlock: tx, kioskClient: kioskClient });
            kioskTx.create();
            // @ts-ignore
            kioskTx.lock({ itemType: "".concat(nftPackageId, "::typus_nft::Tails"), itemId: nft_id, policy: policy, item: nft_id });
            kiosk = kioskTx.kiosk, kioskCap = kioskTx.kioskCap;
            if (kiosk && kioskCap) {
                tx.moveCall({
                    target: "0x2::transfer::public_share_object",
                    typeArguments: [kiosk_1.KIOSK_TYPE],
                    arguments: [kiosk],
                });
                tx.transferObjects([kioskCap], tx.pure(singer));
                tx.setGasBudget(gasBudget);
            }
            else {
                console.error("Fail to Create Kiosk Tx!!");
            }
            return [2 /*return*/, tx];
        });
    });
}
