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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVaultHistoryEvents = getVaultHistoryEvents;
exports.parseGroupEvents = parseGroupEvents;
exports.parseVaultHistory = parseVaultHistory;
exports.getVaultHistoryFromDB = getVaultHistoryFromDB;
exports.convertGroupEventToVaultHistory = convertGroupEventToVaultHistory;
exports.parseBidEvents = parseBidEvents;
var token_1 = require("src/constants/token");
function getVaultHistoryEvents(provider, originPackage, startTimeMs) {
    return __awaiter(this, void 0, void 0, function () {
        var senderFilter, result, datas, hasNextPage, cursor, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    senderFilter = {
                        MoveEventModule: {
                            package: originPackage,
                            module: "typus_dov_single",
                        },
                    };
                    return [4 /*yield*/, provider.queryEvents({ query: senderFilter, order: "descending" })];
                case 1:
                    result = _a.sent();
                    datas = result.data;
                    hasNextPage = result.hasNextPage;
                    cursor = result.nextCursor;
                    _a.label = 2;
                case 2:
                    if (!hasNextPage) return [3 /*break*/, 4];
                    return [4 /*yield*/, provider.queryEvents({ query: senderFilter, order: "descending", cursor: cursor })];
                case 3:
                    result = _a.sent();
                    // console.log(result);
                    datas = datas.concat(result.data);
                    if (result.hasNextPage && Number(result.data.at(-1).timestampMs) < startTimeMs) {
                        return [3 /*break*/, 4];
                    }
                    hasNextPage = result.hasNextPage;
                    cursor = result.nextCursor;
                    return [3 /*break*/, 2];
                case 4: return [2 /*return*/, datas];
            }
        });
    });
}
function parseGroupEvents(datas) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, datas.reduce(function (promise, event) { return __awaiter(_this, void 0, void 0, function () {
                        var map, functionType, action, parsedJson, index, round, round_event, round_events, round_events, round_events;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, promise];
                                case 1:
                                    map = _a.sent();
                                    functionType = new RegExp("^([^::]+)::([^::]+)::([^<]+)").exec(event.type);
                                    action = functionType[3];
                                    // console.log(action);
                                    if (!["ActivateEvent", "NewAuctionEvent", "DeliveryEvent", "RecoupEvent", "SettleEvent"].includes(action)) {
                                        return [2 /*return*/, map];
                                    }
                                    parsedJson = event.parsedJson;
                                    // console.log(parsedJson);
                                    parsedJson.timestampMs = event.timestampMs;
                                    parsedJson.txDigest = event.id.txDigest;
                                    index = parsedJson.index.toString();
                                    round = parsedJson.round.toString();
                                    round_event = {
                                        activateEvent: undefined,
                                        newAuctionEvent: undefined,
                                        deliveryEvent: undefined,
                                        recoupEvent: undefined,
                                        settleEvent: undefined,
                                    };
                                    if (map.has(index)) {
                                        round_events = map.get(index);
                                        if (round_events.has(round)) {
                                            round_event = round_events.get(round);
                                        }
                                    }
                                    switch (action) {
                                        case "ActivateEvent":
                                            round_event.activateEvent = parsedJson;
                                            break;
                                        case "NewAuctionEvent":
                                            round_event.newAuctionEvent = parsedJson;
                                            round_event.newAuctionEvent.vault_config = {
                                                payoffConfigs: parsedJson.vault_config.payoff_configs.map(function (x) {
                                                    return ({
                                                        weight: x.weight,
                                                        isBuyer: x.is_buyer,
                                                        strike: x.strike,
                                                        strikeBp: x.strike_bp,
                                                        u64Padding: x.u64_padding,
                                                    });
                                                }),
                                                strikeIncrement: parsedJson.vault_config.strike_increment,
                                                decaySpeed: parsedJson.vault_config.decay_speed,
                                                initialPrice: parsedJson.vault_config.initial_price,
                                                finalPrice: parsedJson.vault_config.final_price,
                                                auctionDurationInMs: parsedJson.vault_config.auction_duration_in_ms,
                                                u64Padding: parsedJson.vault_config.u64_padding,
                                            };
                                            break;
                                        case "DeliveryEvent":
                                            round_event.deliveryEvent = parsedJson;
                                            // console.log(parsedJson);
                                            break;
                                        case "RecoupEvent":
                                            round_event.recoupEvent = parsedJson;
                                            break;
                                        case "SettleEvent":
                                            round_event.settleEvent = parsedJson;
                                            break;
                                    }
                                    // console.log(round_event);
                                    if (map.has(index)) {
                                        round_events = map.get(index);
                                        round_events.set(round, round_event);
                                        map.set(index, round_events);
                                    }
                                    else {
                                        round_events = new Map();
                                        round_events.set(round, round_event);
                                        map.set(index, round_events);
                                    }
                                    return [2 /*return*/, map];
                            }
                        });
                    }); }, Promise.resolve(new Map()))];
                case 1:
                    results = _a.sent();
                    // console.log(results);
                    return [2 /*return*/, results];
            }
        });
    });
}
function parseVaultHistory(inputMap) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        var _this = this;
        return __generator(this, function (_a) {
            result = new Map();
            inputMap.forEach(function (innerMap, outerKey) {
                var newInnerMap = new Map();
                innerMap.forEach(function (groupEvent, innerKey) { return __awaiter(_this, void 0, void 0, function () {
                    var vaultHistory;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, convertGroupEventToVaultHistory(groupEvent)];
                            case 1:
                                vaultHistory = _a.sent();
                                newInnerMap.set(innerKey, vaultHistory);
                                return [2 /*return*/];
                        }
                    });
                }); });
                result.set(outerKey, newInnerMap);
            });
            return [2 /*return*/, result];
        });
    });
}
function getVaultHistoryFromDB(index, startTs, endTs, rounds) {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, queryParams, apiUrlWithParams, _rounds, response, map, datas, datas_1, datas_1_1, data, index_1, round, vaultHistory, round_events, round_events;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    apiUrl = "https://us-central1-aqueous-freedom-378103.cloudfunctions.net/vault-history";
                    queryParams = new URLSearchParams();
                    if (index) {
                        queryParams.append("index", index);
                    }
                    if (startTs) {
                        queryParams.append("startTs", startTs);
                    }
                    if (endTs) {
                        queryParams.append("endTs", endTs);
                    }
                    apiUrlWithParams = "".concat(apiUrl, "?").concat(queryParams.toString());
                    if (rounds) {
                        _rounds = JSON.stringify(rounds);
                        apiUrlWithParams += "&rounds=".concat(_rounds);
                    }
                    console.log(apiUrlWithParams);
                    return [4 /*yield*/, fetch(apiUrlWithParams, {
                            method: "GET",
                            headers: { "Content-Type": "application/json" },
                        })];
                case 1:
                    response = _b.sent();
                    map = new Map();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    datas = _b.sent();
                    try {
                        for (datas_1 = __values(datas), datas_1_1 = datas_1.next(); !datas_1_1.done; datas_1_1 = datas_1.next()) {
                            data = datas_1_1.value;
                            index_1 = data.index;
                            round = data.round;
                            vaultHistory = {
                                vaultIndex: index_1,
                                round: round,
                                ActivationDate: new Date(Number(data.activation_date)),
                                MaxSize: data.max_size,
                                SettlementTime: new Date(Number(data.settle_date)),
                                StrikePrice: data.strikes || undefined,
                                SettlePrice: data.settle_price,
                                Return: data.return,
                                Filled: Number(data.delivery_size) == 0 ? 0 : Number(data.delivery_size) / Number(data.max_size),
                                DeliverySize: data.delivery_size,
                                DeliveryPrice: data.delivery_price,
                                PaidToDepositors: data.paid_to_depositors,
                                PaidToBidders: data.paid_to_bidders,
                                EarnedByDepositors: data.paid_to_depositors - data.paid_to_bidders,
                                ActivateTx: data.activation_tx,
                                NewAuctionTx: data.new_auction_tx,
                                DeliveryTx: data.delivery_tx,
                                RecoupTx: data.recoup_tx,
                                SettleTx: data.settle_tx,
                            };
                            if (map.has(index_1)) {
                                round_events = map.get(index_1);
                                round_events.set(round, vaultHistory);
                                map.set(index_1, round_events);
                            }
                            else {
                                round_events = new Map();
                                round_events.set(round, vaultHistory);
                                map.set(index_1, round_events);
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (datas_1_1 && !datas_1_1.done && (_a = datas_1.return)) _a.call(datas_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return [2 /*return*/, map];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function convertGroupEventToVaultHistory(groupEvent) {
    return __awaiter(this, void 0, void 0, function () {
        var ActivationMs, SettlementTsMs, b_token, o_token, bidder_bid_value, bidder_fee, delivery_price, delivery_size, incentive_bid_value, incentive_fee, PaidToDepositors, PaidToBidders, result;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        return __generator(this, function (_t) {
            ActivationMs = Number((_a = groupEvent.activateEvent) === null || _a === void 0 ? void 0 : _a.timestampMs);
            SettlementTsMs = Number((_b = groupEvent.settleEvent) === null || _b === void 0 ? void 0 : _b.timestampMs);
            if (groupEvent.deliveryEvent) {
                b_token = (0, token_1.typeArgToAsset)(groupEvent.deliveryEvent.b_token.name);
                o_token = (0, token_1.typeArgToAsset)(groupEvent.deliveryEvent.o_token.name);
                bidder_bid_value = Number(groupEvent.deliveryEvent.bidder_bid_value) / Math.pow(10, (0, token_1.assetToDecimal)(b_token));
                bidder_fee = Number(groupEvent.deliveryEvent.bidder_fee) / Math.pow(10, (0, token_1.assetToDecimal)(b_token));
                delivery_price = Number(groupEvent.deliveryEvent.delivery_price) / Math.pow(10, (0, token_1.assetToDecimal)(b_token));
                delivery_size = Number(groupEvent.deliveryEvent.delivery_size) / Math.pow(10, (0, token_1.assetToDecimal)(o_token));
                incentive_bid_value = Number(groupEvent.deliveryEvent.incentive_bid_value) / Math.pow(10, (0, token_1.assetToDecimal)(b_token));
                incentive_fee = Number(groupEvent.deliveryEvent.incentive_fee) / Math.pow(10, (0, token_1.assetToDecimal)(b_token));
                PaidToDepositors = bidder_bid_value + bidder_fee + incentive_bid_value + incentive_fee;
                PaidToBidders = (Number((_c = groupEvent.settleEvent) === null || _c === void 0 ? void 0 : _c.settle_balance) - Number((_d = groupEvent.settleEvent) === null || _d === void 0 ? void 0 : _d.settled_balance)) /
                    Math.pow(10, Number((_e = groupEvent.settleEvent) === null || _e === void 0 ? void 0 : _e.d_token_decimal));
                result = {
                    vaultIndex: (_f = groupEvent.activateEvent) === null || _f === void 0 ? void 0 : _f.index,
                    round: (_g = groupEvent.activateEvent) === null || _g === void 0 ? void 0 : _g.round,
                    // activateEvent
                    ActivateTx: (_h = groupEvent.activateEvent) === null || _h === void 0 ? void 0 : _h.txDigest,
                    ActivationDate: new Date(ActivationMs - (ActivationMs % 3600000)),
                    MaxSize: Number((_j = groupEvent.activateEvent) === null || _j === void 0 ? void 0 : _j.contract_size) / Math.pow(10, Number((_k = groupEvent.activateEvent) === null || _k === void 0 ? void 0 : _k.o_token_decimal)),
                    // newAuctionEvent
                    NewAuctionTx: (_l = groupEvent.newAuctionEvent) === null || _l === void 0 ? void 0 : _l.txDigest,
                    StrikePrice: (_m = groupEvent.newAuctionEvent) === null || _m === void 0 ? void 0 : _m.vault_config.payoffConfigs.map(function (payoffConfig) { return Number(payoffConfig.strike) / Math.pow(10, 8); }),
                    // deliveryEvent
                    DeliveryTx: groupEvent.deliveryEvent.txDigest,
                    DeliverySize: delivery_size,
                    DeliveryPrice: delivery_price,
                    Filled: delivery_size == 0 ? 0 : Number(groupEvent.deliveryEvent.delivery_size) / Number((_o = groupEvent.newAuctionEvent) === null || _o === void 0 ? void 0 : _o.size),
                    PaidToDepositors: PaidToDepositors,
                    // recoupEvent
                    RecoupTx: (_p = groupEvent.recoupEvent) === null || _p === void 0 ? void 0 : _p.txDigest,
                    // settleEvent
                    SettleTx: (_q = groupEvent.settleEvent) === null || _q === void 0 ? void 0 : _q.txDigest,
                    SettlementTime: new Date(SettlementTsMs - (SettlementTsMs % 3600000)),
                    SettlePrice: Number((_r = groupEvent.settleEvent) === null || _r === void 0 ? void 0 : _r.oracle_price) / Math.pow(10, 8),
                    Return: Number((_s = groupEvent.settleEvent) === null || _s === void 0 ? void 0 : _s.share_price) / Math.pow(10, 8) - 1,
                    PaidToBidders: PaidToBidders,
                    EarnedByDepositors: PaidToDepositors - PaidToBidders,
                };
                return [2 /*return*/, result];
            }
            return [2 /*return*/];
        });
    });
}
function parseBidEvents(datas, end_ts_ms) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, datas.reduce(function (promise, event) { return __awaiter(_this, void 0, void 0, function () {
                        var map, functionType, action, parsedJson, index, bid_event, o_token, size, bid_events;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, promise];
                                case 1:
                                    map = _a.sent();
                                    functionType = new RegExp("^([^::]+)::([^::]+)::([^<]+)").exec(event.type);
                                    action = functionType[3];
                                    // console.log(action);
                                    if (action != "NewBidEvent") {
                                        return [2 /*return*/, map];
                                    }
                                    parsedJson = event.parsedJson;
                                    // console.log(parsedJson);
                                    parsedJson.timestampMs = event.timestampMs;
                                    parsedJson.txDigest = event.id.txDigest;
                                    index = parsedJson.index.toString();
                                    bid_event = parsedJson;
                                    o_token = (0, token_1.typeArgToAsset)("0x" + parsedJson.o_token.name);
                                    size = Number(parsedJson.size) / Math.pow(10, (0, token_1.assetToDecimal)(o_token));
                                    bid_event.size = size.toString();
                                    if (Number(bid_event.ts_ms) > end_ts_ms) {
                                        return [2 /*return*/, map];
                                    }
                                    if (map.has(index)) {
                                        bid_events = map.get(index);
                                        bid_events.push(bid_event);
                                    }
                                    else {
                                        bid_events = [bid_event];
                                    }
                                    map.set(index, bid_events);
                                    return [2 /*return*/, map];
                            }
                        });
                    }); }, Promise.resolve(new Map()))];
                case 1:
                    results = _a.sent();
                    // console.log(results);
                    return [2 /*return*/, results];
            }
        });
    });
}
