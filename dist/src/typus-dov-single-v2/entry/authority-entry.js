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
exports.getOtcTx = getOtcTx;
exports.getUpdateConfigTx = getUpdateConfigTx;
var transactions_1 = require("@mysten/sui.js/transactions");
var constants_1 = require("src/constants");
/**
    public(friend) entry fun otc<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        coins: vector<Coin<B_TOKEN>>,
        delivery_price: u64,
        delivery_size: u64,
        bidder_bid_value: u64,
        bidder_fee_balance_value: u64,
        incentive_bid_value: u64,
        incentive_fee_balance_value: u64,
        depositor_incentive_value: u64,
        clock: &Clock,
        ctx: &mut TxContext,
    )
*/
function getOtcTx(gasBudget_1, packageId_1, typeArguments_1, registry_1, index_1, coins_1, deliveryPrice_1, deliverySize_1, bidderBidValue_1, bidderFeeBalanceValue_1, incentiveBidValue_1, incentiveFeeBalanceValue_1, depositorIncentiveValue_1) {
    return __awaiter(this, arguments, void 0, function (gasBudget, packageId, typeArguments, registry, index, coins, deliveryPrice, deliverySize, bidderBidValue, bidderFeeBalanceValue, incentiveBidValue, incentiveFeeBalanceValue, depositorIncentiveValue, usingSponsoredGasCoin) {
        var tx, amount, _a, coin;
        if (usingSponsoredGasCoin === void 0) { usingSponsoredGasCoin = false; }
        return __generator(this, function (_b) {
            tx = new transactions_1.TransactionBlock();
            if (!usingSponsoredGasCoin &&
                (typeArguments[0] == "0x2::sui::SUI" ||
                    typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI")) {
                amount = BigInt(bidderBidValue) + BigInt(bidderFeeBalanceValue);
                _a = __read(tx.splitCoins(tx.gas, [tx.pure(amount.toString())]), 1), coin = _a[0];
                tx.moveCall({
                    target: "".concat(packageId, "::tds_authorized_entry::otc"),
                    typeArguments: typeArguments,
                    arguments: [
                        tx.object(registry),
                        tx.pure(index),
                        tx.makeMoveVec({ objects: [coin] }),
                        tx.pure(deliveryPrice),
                        tx.pure(deliverySize),
                        tx.pure(bidderBidValue),
                        tx.pure(bidderFeeBalanceValue),
                        tx.pure(incentiveBidValue),
                        tx.pure(incentiveFeeBalanceValue),
                        tx.pure(depositorIncentiveValue),
                        tx.object(constants_1.CLOCK),
                    ],
                });
            }
            else {
                tx.moveCall({
                    target: "".concat(packageId, "::tds_authorized_entry::otc"),
                    typeArguments: typeArguments,
                    arguments: [
                        tx.object(registry),
                        tx.pure(index),
                        tx.makeMoveVec({ objects: coins.map(function (id) { return tx.object(id); }) }),
                        tx.pure(deliveryPrice),
                        tx.pure(deliverySize),
                        tx.pure(bidderBidValue),
                        tx.pure(bidderFeeBalanceValue),
                        tx.pure(incentiveBidValue),
                        tx.pure(incentiveFeeBalanceValue),
                        tx.pure(depositorIncentiveValue),
                        tx.object(constants_1.CLOCK),
                    ],
                });
            }
            tx.setGasBudget(gasBudget);
            return [2 /*return*/, tx];
        });
    });
}
function getUpdateConfigTx(gasBudget, packageId, registry, requests) {
    return __awaiter(this, void 0, void 0, function () {
        var tx;
        return __generator(this, function (_a) {
            tx = new transactions_1.TransactionBlock();
            requests.forEach(function (request) {
                tx.moveCall({
                    target: "".concat(packageId, "::tds_authorized_entry::update_config"),
                    typeArguments: [],
                    arguments: [
                        tx.object(registry),
                        tx.pure(request.index),
                        tx.pure(request.config.oracleId ? [request.config.oracleId] : []),
                        tx.pure(request.config.depositLotSize ? [request.config.depositLotSize] : []),
                        tx.pure(request.config.bidLotSize ? [request.config.bidLotSize] : []),
                        tx.pure(request.config.minDepositSize ? [request.config.minDepositSize] : []),
                        tx.pure(request.config.minBidSize ? [request.config.minBidSize] : []),
                        tx.pure(request.config.maxDepositEntry ? [request.config.maxDepositEntry] : []),
                        tx.pure(request.config.maxBidEntry ? [request.config.maxBidEntry] : []),
                        tx.pure(request.config.depositFeeBp ? [request.config.depositFeeBp] : []),
                        tx.pure(request.config.depositFeeShareBp ? [request.config.depositFeeShareBp] : []),
                        tx.pure(request.config.depositSharedFeePool ? [request.config.depositSharedFeePool] : []),
                        tx.pure(request.config.bidFeeBp ? [request.config.bidFeeBp] : []),
                        tx.pure(request.config.depositIncentiveBp ? [request.config.depositIncentiveBp] : []),
                        tx.pure(request.config.bidIncentiveBp ? [request.config.bidIncentiveBp] : []),
                        tx.pure(request.config.auctionDelayTsMs ? [request.config.auctionDelayTsMs] : []),
                        tx.pure(request.config.auctionDurationTsMs ? [request.config.auctionDurationTsMs] : []),
                        tx.pure(request.config.recoupDelayTsMs ? [request.config.recoupDelayTsMs] : []),
                        tx.pure(request.config.capacity ? [request.config.capacity] : []),
                        tx.pure(request.config.leverage ? [request.config.leverage] : []),
                        tx.pure(request.config.riskLevel ? [request.config.riskLevel] : []),
                        tx.pure(request.config.depositIncentiveBpDivisorDecimal ? [request.config.depositIncentiveBpDivisorDecimal] : []),
                    ],
                });
            });
            tx.setGasBudget(gasBudget);
            return [2 /*return*/, tx];
        });
    });
}
