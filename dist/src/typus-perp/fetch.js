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
exports.getLpPools = getLpPools;
exports.getStakePools = getStakePools;
exports.getMarkets = getMarkets;
exports.getSymbolMarkets = getSymbolMarkets;
exports.getUserOrders = getUserOrders;
exports.getUserPositions = getUserPositions;
exports.getUserStake = getUserStake;
exports.getLiquidationPrice = getLiquidationPrice;
var structs_1 = require("./lp-pool/structs");
var structs_2 = require("./trading/structs");
var functions_1 = require("./trading/functions");
var transactions_1 = require("@mysten/sui.js/transactions");
var readVec_1 = require("./readVec");
var functions_2 = require("./stake-pool/functions");
var structs_3 = require("./stake-pool/structs");
var constants_1 = require("src/constants");
var token_1 = require("src/constants/token");
var constant_1 = require("src/utils/pyth/constant");
var _1 = require(".");
var pythClient_1 = require("src/utils/pyth/pythClient");
var bcs_1 = require("@mysten/bcs");
function getLpPools(provider, config) {
    return __awaiter(this, void 0, void 0, function () {
        var dynamicFields, lpPools, _a, _b, field, lpPool, e_1_1;
        var e_1, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, provider.getDynamicFields({
                        parentId: config.REGISTRY.LIQUIDITY_POOL_REGISTRY,
                    })];
                case 1:
                    dynamicFields = _d.sent();
                    lpPools = [];
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 7, 8, 9]);
                    _a = __values(dynamicFields.data), _b = _a.next();
                    _d.label = 3;
                case 3:
                    if (!!_b.done) return [3 /*break*/, 6];
                    field = _b.value;
                    return [4 /*yield*/, structs_1.LiquidityPool.fetch(provider, field.objectId)];
                case 4:
                    lpPool = _d.sent();
                    // console.log(lpPool);
                    lpPools.push(lpPool);
                    _d.label = 5;
                case 5:
                    _b = _a.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/, lpPools];
            }
        });
    });
}
function getStakePools(provider, config) {
    return __awaiter(this, void 0, void 0, function () {
        var dynamicFields, stakePools, _a, _b, field, stakePool, e_2_1;
        var e_2, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, provider.getDynamicFields({
                        parentId: config.REGISTRY.STAKE_POOL_REGISTRY,
                    })];
                case 1:
                    dynamicFields = _d.sent();
                    stakePools = [];
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 7, 8, 9]);
                    _a = __values(dynamicFields.data), _b = _a.next();
                    _d.label = 3;
                case 3:
                    if (!!_b.done) return [3 /*break*/, 6];
                    field = _b.value;
                    return [4 /*yield*/, structs_3.StakePool.fetch(provider, field.objectId)];
                case 4:
                    stakePool = _d.sent();
                    // console.log(stakePool);
                    stakePools.push(stakePool);
                    _d.label = 5;
                case 5:
                    _b = _a.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/, stakePools];
            }
        });
    });
}
function getMarkets(provider, config) {
    return __awaiter(this, void 0, void 0, function () {
        var dynamicFields, markets, _a, _b, field, market, e_3_1;
        var e_3, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, provider.getDynamicFields({
                        parentId: config.REGISTRY.MARKET_REGISTRY,
                    })];
                case 1:
                    dynamicFields = _d.sent();
                    markets = [];
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 7, 8, 9]);
                    _a = __values(dynamicFields.data), _b = _a.next();
                    _d.label = 3;
                case 3:
                    if (!!_b.done) return [3 /*break*/, 6];
                    field = _b.value;
                    return [4 /*yield*/, structs_2.Markets.fetch(provider, field.objectId)];
                case 4:
                    market = _d.sent();
                    // console.log(market);
                    markets.push(market);
                    _d.label = 5;
                case 5:
                    _b = _a.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_3_1 = _d.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/, markets];
            }
        });
    });
}
function getSymbolMarkets(provider, market) {
    return __awaiter(this, void 0, void 0, function () {
        var symbolMarkets, dynamicFields, _a, _b, field, symbolMarket, key, e_4_1;
        var e_4, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    symbolMarkets = new Map();
                    return [4 /*yield*/, provider.getDynamicFields({
                            parentId: market.symbolMarkets.id,
                        })];
                case 1:
                    dynamicFields = _d.sent();
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 7, 8, 9]);
                    _a = __values(dynamicFields.data), _b = _a.next();
                    _d.label = 3;
                case 3:
                    if (!!_b.done) return [3 /*break*/, 6];
                    field = _b.value;
                    return [4 /*yield*/, structs_2.SymbolMarket.fetch(provider, field.objectId)];
                case 4:
                    symbolMarket = _d.sent();
                    key = field.name.value.name;
                    // console.log(key);
                    // console.log(symbolMarket);
                    symbolMarkets.set(key, symbolMarket);
                    _d.label = 5;
                case 5:
                    _b = _a.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_4_1 = _d.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/, symbolMarkets];
            }
        });
    });
}
function getUserOrders(provider, config, user) {
    return __awaiter(this, void 0, void 0, function () {
        var tx, res, returnValues, orders;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tx = new transactions_1.TransactionBlock();
                    (0, functions_1.getUserOrders)(tx, {
                        version: config.OBJECT.TYPUS_PERP_VERSION,
                        registry: config.REGISTRY.MARKET_REGISTRY,
                        marketIndex: BigInt(0),
                        user: user,
                    });
                    return [4 /*yield*/, provider.devInspectTransactionBlock({ sender: user, transactionBlock: tx })];
                case 1:
                    res = _a.sent();
                    returnValues = res.results[0].returnValues[0][0];
                    orders = (0, readVec_1.readVecOrder)(Uint8Array.from(returnValues));
                    // console.log(orders);
                    return [2 /*return*/, orders];
            }
        });
    });
}
function getUserPositions(provider, config, user) {
    return __awaiter(this, void 0, void 0, function () {
        var tx, res, returnValues, positions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tx = new transactions_1.TransactionBlock();
                    (0, functions_1.getUserPositions)(tx, {
                        version: config.OBJECT.TYPUS_PERP_VERSION,
                        registry: config.REGISTRY.MARKET_REGISTRY,
                        marketIndex: BigInt(0),
                        user: user,
                    });
                    return [4 /*yield*/, provider.devInspectTransactionBlock({ sender: user, transactionBlock: tx })];
                case 1:
                    res = _a.sent();
                    returnValues = res.results[0].returnValues[0][0];
                    positions = (0, readVec_1.readVecPosition)(Uint8Array.from(returnValues));
                    // console.log(positions);
                    return [2 /*return*/, positions];
            }
        });
    });
}
function getUserStake(provider, config, user) {
    return __awaiter(this, void 0, void 0, function () {
        var tx, res, returnValues, stake;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tx = new transactions_1.TransactionBlock();
                    (0, functions_2.getUserShares)(tx, {
                        registry: config.REGISTRY.STAKE_POOL_REGISTRY,
                        index: BigInt(0),
                        user: user,
                    });
                    return [4 /*yield*/, provider.devInspectTransactionBlock({ sender: user, transactionBlock: tx })];
                case 1:
                    res = _a.sent();
                    // console.log(res);
                    if (res.results) {
                        returnValues = res.results[0].returnValues[0][0];
                        stake = (0, readVec_1.readVecShares)(Uint8Array.from(returnValues));
                        // console.log(stake);
                        // console.log(stake[0].deactivatingShares);
                        // console.log(stake[0].lastIncentivePriceIndex);
                        return [2 /*return*/, stake];
                    }
                    else {
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getLiquidationPrice(provider, config, input) {
    return __awaiter(this, void 0, void 0, function () {
        var tx, pythTokens, _a, _b, position, TOKEN, BASE_TOKEN, _c, _d, position, TOKEN, BASE_TOKEN, cToken, baseToken, res, prices;
        var e_5, _e, e_6, _f;
        var _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    tx = new transactions_1.TransactionBlock();
                    pythTokens = [];
                    try {
                        for (_a = __values(input.positions), _b = _a.next(); !_b.done; _b = _a.next()) {
                            position = _b.value;
                            TOKEN = (0, token_1.typeArgToToken)(position.collateralToken.name);
                            BASE_TOKEN = (0, token_1.typeArgToToken)(position.symbol.baseToken.name);
                            pythTokens.push(TOKEN);
                            pythTokens.push(BASE_TOKEN);
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                    return [4 /*yield*/, (0, pythClient_1.updatePyth)(input.pythClient, tx, Array.from(new Set(pythTokens)))];
                case 1:
                    _h.sent();
                    try {
                        for (_c = __values(input.positions), _d = _c.next(); !_d.done; _d = _c.next()) {
                            position = _d.value;
                            TOKEN = (0, token_1.typeArgToToken)(position.collateralToken.name);
                            BASE_TOKEN = (0, token_1.typeArgToToken)(position.symbol.baseToken.name);
                            cToken = token_1.tokenType[_1.NETWORK][TOKEN];
                            baseToken = token_1.tokenType[_1.NETWORK][BASE_TOKEN];
                            (0, functions_1.getEstimatedLiquidationPrice)(tx, [cToken, baseToken], {
                                version: config.OBJECT.TYPUS_PERP_VERSION,
                                registry: config.REGISTRY.MARKET_REGISTRY,
                                poolRegistry: config.REGISTRY.LP_POOL_REGISTRY,
                                marketIndex: BigInt(0),
                                poolIndex: BigInt(0),
                                pythState: constant_1.pythStateId[_1.NETWORK],
                                oracleCToken: constant_1.priceInfoObjectIds[_1.NETWORK][TOKEN],
                                oracleTradingSymbol: constant_1.priceInfoObjectIds[_1.NETWORK][BASE_TOKEN],
                                clock: constants_1.CLOCK,
                                positionId: position.positionId,
                            });
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                    return [4 /*yield*/, provider.devInspectTransactionBlock({ sender: input.user, transactionBlock: tx })];
                case 2:
                    res = _h.sent();
                    prices = (_g = res.results) === null || _g === void 0 ? void 0 : _g.slice(-input.positions.length).map(function (x) { return bcs_1.bcs.u64().parse(Uint8Array.from(x.returnValues[0][0])); });
                    // console.log(prices);
                    return [2 /*return*/, prices];
            }
        });
    });
}
