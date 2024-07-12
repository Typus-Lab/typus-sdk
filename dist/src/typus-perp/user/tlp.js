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
exports.mintStakeLp = mintStakeLp;
exports.unstakeBurn = unstakeBurn;
exports.swap = swap;
exports.unsubscribe = unsubscribe;
exports.harvest = harvest;
var functions_1 = require("../lp-pool/functions");
var constants_1 = require("src/constants");
var pythClient_1 = require("src/utils/pyth/pythClient");
var token_1 = require("src/constants/token");
var functions_2 = require("../stake-pool/functions");
var functions_3 = require("../lp-pool/functions");
var functions_4 = require("../stake-pool/functions");
var constant_1 = require("src/utils/pyth/constant");
var __1 = require("..");
function mintStakeLp(config, input) {
    return __awaiter(this, void 0, void 0, function () {
        var tokens, cToken, tokens_1, tokens_1_1, token, coin, destination, lpCoin;
        var e_1, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    tokens = input.lpPool.tokenPools.map(function (p) { return (0, token_1.typeArgToAsset)("0x" + p.tokenType.name); });
                    return [4 /*yield*/, (0, pythClient_1.updatePyth)(input.pythClient, input.tx, tokens)];
                case 1:
                    _d.sent();
                    cToken = token_1.tokenType[__1.NETWORK][input.cTOKEN];
                    try {
                        for (tokens_1 = __values(tokens), tokens_1_1 = tokens_1.next(); !tokens_1_1.done; tokens_1_1 = tokens_1.next()) {
                            token = tokens_1_1.value;
                            (0, functions_1.updateLiquidityValue)(input.tx, token_1.tokenType[__1.NETWORK][token], {
                                version: config.OBJECT.TYPUS_PERP_VERSION,
                                registry: config.REGISTRY.LP_POOL_REGISTRY,
                                index: BigInt(0),
                                pythState: constant_1.pythStateId[__1.NETWORK],
                                oracle: constant_1.priceInfoObjectIds[__1.NETWORK][token],
                                clock: constants_1.CLOCK,
                            });
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (tokens_1_1 && !tokens_1_1.done && (_a = tokens_1.return)) _a.call(tokens_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    if (input.cTOKEN == "SUI") {
                        _b = __read(input.tx.splitCoins(input.tx.gas, [input.amount]), 1), coin = _b[0];
                    }
                    else {
                        destination = input.coins.pop();
                        if (input.coins.length > 0) {
                            input.tx.mergeCoins(destination, input.coins);
                        }
                        _c = __read(input.tx.splitCoins(destination, [input.amount]), 1), coin = _c[0];
                    }
                    lpCoin = (0, functions_1.mintLp)(input.tx, [cToken, config.TOKEN.TLP], {
                        version: config.OBJECT.TYPUS_PERP_VERSION,
                        registry: config.REGISTRY.LP_POOL_REGISTRY,
                        treasuryCaps: config.REGISTRY.TREASURY_CAPS,
                        index: BigInt(0),
                        pythState: constant_1.pythStateId[__1.NETWORK],
                        oracle: constant_1.priceInfoObjectIds[__1.NETWORK][input.cTOKEN],
                        coin: coin,
                        clock: constants_1.CLOCK,
                    });
                    (0, functions_2.stake)(input.tx, config.TOKEN.TLP, {
                        version: config.OBJECT.TYPUS_PERP_VERSION,
                        registry: config.REGISTRY.STAKE_POOL_REGISTRY,
                        index: BigInt(0),
                        lpToken: lpCoin,
                        clock: constants_1.CLOCK,
                        userShareId: input.userShareId ? BigInt(input.userShareId) : null,
                    });
                    return [2 /*return*/, input.tx];
            }
        });
    });
}
function unstakeBurn(config, input) {
    return __awaiter(this, void 0, void 0, function () {
        var tokens, cToken, oracle, tokens_2, tokens_2_1, token, lpCoin, coin;
        var e_2, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    tokens = input.lpPool.tokenPools.map(function (p) { return (0, token_1.typeArgToAsset)("0x" + p.tokenType.name); });
                    return [4 /*yield*/, (0, pythClient_1.updatePyth)(input.pythClient, input.tx, tokens)];
                case 1:
                    _b.sent();
                    cToken = token_1.tokenType[__1.NETWORK][input.cTOKEN];
                    oracle = constant_1.priceInfoObjectIds[__1.NETWORK][input.cTOKEN];
                    try {
                        for (tokens_2 = __values(tokens), tokens_2_1 = tokens_2.next(); !tokens_2_1.done; tokens_2_1 = tokens_2.next()) {
                            token = tokens_2_1.value;
                            (0, functions_1.updateLiquidityValue)(input.tx, token_1.tokenType[__1.NETWORK][token], {
                                version: config.OBJECT.TYPUS_PERP_VERSION,
                                registry: config.REGISTRY.LP_POOL_REGISTRY,
                                index: BigInt(0),
                                pythState: constant_1.pythStateId[__1.NETWORK],
                                oracle: constant_1.priceInfoObjectIds[__1.NETWORK][token],
                                clock: constants_1.CLOCK,
                            });
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (tokens_2_1 && !tokens_2_1.done && (_a = tokens_2.return)) _a.call(tokens_2);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    lpCoin = (0, functions_2.unstake)(input.tx, config.TOKEN.TLP, {
                        version: config.OBJECT.TYPUS_PERP_VERSION,
                        registry: config.REGISTRY.STAKE_POOL_REGISTRY,
                        index: BigInt(0),
                        userShareId: BigInt(input.userShareId),
                        clock: constants_1.CLOCK,
                        unstakedShares: input.share ? BigInt(input.share) : null,
                    });
                    coin = (0, functions_1.burnLp)(input.tx, [cToken, config.TOKEN.TLP], {
                        version: config.OBJECT.TYPUS_PERP_VERSION,
                        registry: config.REGISTRY.LP_POOL_REGISTRY,
                        treasuryCaps: config.REGISTRY.TREASURY_CAPS,
                        index: BigInt(0),
                        pythState: constant_1.pythStateId[__1.NETWORK],
                        oracle: oracle,
                        coin: lpCoin,
                        clock: constants_1.CLOCK,
                    });
                    input.tx.transferObjects([coin], input.user);
                    return [2 /*return*/, input.tx];
            }
        });
    });
}
function swap(config, input) {
    return __awaiter(this, void 0, void 0, function () {
        var fromToken, toToken, coin, destination, token;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, pythClient_1.updatePyth)(input.pythClient, input.tx, [input.FROM_TOKEN, input.TO_TOKEN])];
                case 1:
                    _c.sent();
                    fromToken = token_1.tokenType[__1.NETWORK][input.FROM_TOKEN];
                    toToken = token_1.tokenType[__1.NETWORK][input.TO_TOKEN];
                    if (input.FROM_TOKEN == "SUI") {
                        _a = __read(input.tx.splitCoins(input.tx.gas, [input.amount]), 1), coin = _a[0];
                    }
                    else {
                        destination = input.coins.pop();
                        if (input.coins.length > 0) {
                            input.tx.mergeCoins(destination, input.coins);
                        }
                        _b = __read(input.tx.splitCoins(destination, [input.amount]), 1), coin = _b[0];
                    }
                    token = (0, functions_3.swap)(input.tx, [fromToken, toToken], {
                        version: config.OBJECT.TYPUS_PERP_VERSION,
                        registry: config.REGISTRY.LP_POOL_REGISTRY,
                        pythState: constant_1.pythStateId[__1.NETWORK],
                        clock: constants_1.CLOCK,
                        index: BigInt(0),
                        oracleFromToken: constant_1.priceInfoObjectIds[__1.NETWORK][input.FROM_TOKEN],
                        oracleToToken: constant_1.priceInfoObjectIds[__1.NETWORK][input.TO_TOKEN],
                        fromCoin: coin,
                        minToAmount: BigInt(0),
                    });
                    input.tx.transferObjects([token], input.user);
                    return [2 /*return*/, input.tx];
            }
        });
    });
}
function unsubscribe(config, input) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            (0, functions_4.unsubscribe)(input.tx, config.TOKEN.TLP, {
                version: config.OBJECT.TYPUS_PERP_VERSION,
                registry: config.REGISTRY.STAKE_POOL_REGISTRY,
                index: BigInt(0),
                userShareId: BigInt(input.userShareId),
                clock: constants_1.CLOCK,
                unsubscribedShares: input.share ? BigInt(input.share) : null,
            });
            return [2 /*return*/, input.tx];
        });
    });
}
function harvest(config, input) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            (0, functions_2.harvestPerUserShare)(input.tx, "0x2::sui::SUI", {
                version: config.OBJECT.TYPUS_PERP_VERSION,
                registry: config.REGISTRY.STAKE_POOL_REGISTRY,
                index: BigInt(0),
                userShareId: BigInt(input.userShareId),
                clock: constants_1.CLOCK,
            });
            return [2 /*return*/, input.tx];
        });
    });
}
