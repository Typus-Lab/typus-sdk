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
exports.getMintTx = getMintTx;
exports.getMintToKioskTx = getMintToKioskTx;
exports.getPayRoyaltyTx = getPayRoyaltyTx;
exports.getRequestMintTx = getRequestMintTx;
exports.getIsWhitelistTx = getIsWhitelistTx;
var transactions_1 = require("@mysten/sui.js/transactions");
var constants_1 = require("../constants");
/**
    entry fun free_mint(
        pool: &mut Pool,
        whitelist_token: Whitelist,
        ctx: &mut TxContext,
    )
*/
function getMintTx(gasBudget, nftPackageId, policy, pool, whitelist_token) {
    return __awaiter(this, void 0, void 0, function () {
        var tx;
        return __generator(this, function (_a) {
            tx = new transactions_1.TransactionBlock();
            tx.moveCall({
                target: "".concat(nftPackageId, "::typus_nft::free_mint"),
                typeArguments: [],
                arguments: [tx.object(pool), tx.object(policy), tx.object(whitelist_token), tx.object(constants_1.CLOCK)],
            });
            tx.setGasBudget(gasBudget);
            return [2 /*return*/, tx];
        });
    });
}
/**
    entry fun free_mint_into_kiosk(
        pool: &mut Pool,
        whitelist_token: Whitelist,
        kiosk: &mut Kiosk,
        kiosk_cap: &KioskOwnerCap,
        ctx: &mut TxContext,
    )
*/
function getMintToKioskTx(gasBudget, nftPackageId, pool, policy, whitelist_token, kiosk, kiosk_cap) {
    return __awaiter(this, void 0, void 0, function () {
        var tx;
        return __generator(this, function (_a) {
            tx = new transactions_1.TransactionBlock();
            tx.moveCall({
                target: "".concat(nftPackageId, "::typus_nft::free_mint_into_kiosk"),
                typeArguments: [],
                arguments: [
                    tx.object(pool),
                    tx.object(policy),
                    tx.object(whitelist_token),
                    tx.object(kiosk),
                    tx.object(kiosk_cap),
                    tx.object(constants_1.CLOCK),
                ],
            });
            tx.setGasBudget(gasBudget);
            return [2 /*return*/, tx];
        });
    });
}
/**
    public fun pay<T>(
        policy: &mut TransferPolicy<T>,
        request: &mut TransferRequest<T>,
        payment: Coin<SUI>
    )
*/
function getPayRoyaltyTx(tx, nftPackageId, policy, request, coin) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            tx.moveCall({
                target: "".concat(nftPackageId, "::royalty_rule::pay"),
                typeArguments: ["".concat(nftPackageId, "::typus_nft::Tails")],
                arguments: [tx.object(policy), request, coin],
            });
            return [2 /*return*/, tx];
        });
    });
}
/**
    entry fun request_mint(
        pool: &mut Pool,
        seed: u64, // 0, 1, 2
        coin: Coin<SUI>,
        clock: &Clock,
        ctx: & TxContext
    )
*/
function getRequestMintTx(gasBudget, nftPackageId, pool, seed, price) {
    return __awaiter(this, void 0, void 0, function () {
        var tx, _a, coin;
        return __generator(this, function (_b) {
            tx = new transactions_1.TransactionBlock();
            _a = __read(tx.splitCoins(tx.gas, [tx.pure(price)]), 1), coin = _a[0];
            tx.moveCall({
                target: "".concat(nftPackageId, "::discount_mint::request_mint"),
                typeArguments: [],
                arguments: [tx.object(pool), tx.pure(seed), coin, tx.object(constants_1.CLOCK)],
            });
            tx.setGasBudget(gasBudget);
            return [2 /*return*/, tx];
        });
    });
}
function getIsWhitelistTx(gasBudget, nftPackageId, pool, user) {
    return __awaiter(this, void 0, void 0, function () {
        var tx;
        return __generator(this, function (_a) {
            tx = new transactions_1.TransactionBlock();
            tx.moveCall({
                target: "".concat(nftPackageId, "::discount_mint::is_whitelist"),
                typeArguments: [],
                arguments: [tx.object(pool), tx.pure(user)],
            });
            tx.setGasBudget(gasBudget);
            return [2 /*return*/, tx];
        });
    });
}
