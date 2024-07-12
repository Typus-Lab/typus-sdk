"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserBids = exports.getUserBidReceipts = exports.parseBid = exports.parseBidReceipt = exports.parseStrikes = exports.calcEstPnl = exports.calcBreakEvenPrice = exports.calcDeliveryPrice = exports.calcIncentiveRate = exports.fetchPrices = exports.parsePythOracleData = exports.IncentiveRateBp = exports.periodOrder = exports.optionTypeOrder = exports.tokenOrder = exports.ASSET_INFO = void 0;
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var web3_js_1 = require("@solana/web3.js");
var client_1 = require("@pythnetwork/client");
var lodash_1 = require("lodash");
var moment_1 = __importDefault(require("moment"));
var view_function_1 = require("../view-function");
var vault_1 = require("./vault");
var token_1 = require("./token");
var tools_1 = require("src/utils/tools");
var view_function_2 = require("src/auto-bid/view-function");
var token_2 = require("src/constants/token");
var token_3 = require("./token");
var price_1 = require("src/utils/api/price");
var config_json_1 = __importDefault(require("../../../config.json"));
var PriceDecimal = (0, bignumber_js_1.default)(10).pow(8);
exports.ASSET_INFO = {
    BTC: {
        product: new web3_js_1.PublicKey("4aDoSXJ5o3AuvL7QFeR6h44jALQfTmUUCTVGDD6aoJTM"),
        price: new web3_js_1.PublicKey("GVXRSBjFk6e6J3NbVPXohDJetcTjaeeuykUpbQF8UoMU"),
    },
    ETH: {
        product: new web3_js_1.PublicKey("EMkxjGC1CQ7JLiutDbfYb7UKb3zm9SJcUmr1YicBsdpZ"),
        price: new web3_js_1.PublicKey("JBu1AL4obBcCMqKBBxhpWCNUt136ijcuMZLFvTP7iWdB"),
    },
    SUI: {
        product: new web3_js_1.PublicKey("2F8rfBf4z4SzNpeQstFTpLXTQQ7RNKsLFqPdbpybooCc"),
        price: new web3_js_1.PublicKey("3Qub3HaAJaa2xNY7SUqPKd3vVwTqDfDDkEUMPjXD2c1q"),
    },
    CETUS: {
        product: new web3_js_1.PublicKey("JDHPsM1zxsZ6TfDwpCVzo41DAZdRi6ZmhkzWU1iXvSQ"),
        price: new web3_js_1.PublicKey("GTeC2JfBFrHuYkBivDQcNdLY74X5FRDLEJntnxPKRQbY"),
    },
    SEI: {
        product: new web3_js_1.PublicKey("24bB1mRGsrrDVawJTCVYXrxbEz6ozztukPUKvcZCDcPz"),
        price: new web3_js_1.PublicKey("6cUuAyAX3eXoiWkjFF77RQBEUF15AAMQ7d1hm4EPd3tv"),
    },
    USDC: {
        product: new web3_js_1.PublicKey("8GWTTbNiXdmyZREXbjsZBmCRuzdPrW55dnZGDkTRjWvb"),
        price: new web3_js_1.PublicKey("Gnt27xtC473ZT2Mw5u8wZ68Z3gULkSTb5DuxJy7eJotD"),
    },
    USDT: {
        product: new web3_js_1.PublicKey("Av6XyAMJnyi68FdsKSPYgzfXGjYrrt6jcAMwtvzLCqaM"),
        price: new web3_js_1.PublicKey("3vxLXJqLqF3JG5TCbYycbKWRBbCJQLxQmBGCkyqEEefL"),
    },
    TURBOS: {
        product: new web3_js_1.PublicKey("8DZUgXNQo5Um1pqo4gzv9oWPUZpyKV9nXm51gysZFMef"),
        price: new web3_js_1.PublicKey("HoxttzPFzcPvpZhUY8LCLkFNn9keDnBrctno4wXEhpFk"),
    },
    APT: {
        product: new web3_js_1.PublicKey("6bQMDtuAmRgjvymdWk9w4tTc9YyuXcjMxF8MyPHXejsx"),
        price: new web3_js_1.PublicKey("FNNvb1AFDnDVPkocEri8mWbJ1952HQZtFLuwPiUjSJQ"),
    },
    SOL: {
        product: new web3_js_1.PublicKey("ALP8SdU9oARYVLgLR7LrqMNCYBnhtnQz1cj6bwgwQmgj"),
        price: new web3_js_1.PublicKey("H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG"),
    },
    INJ: {
        product: new web3_js_1.PublicKey("5Q5kyCVzssrGMd2BniSdVeRwjNWrGGrFhMrgGt4zURyA"),
        price: new web3_js_1.PublicKey("9EdtbaivHQYA4Nh3XzGR6DwRaoorqXYnmpfsnFhvwuVj"),
    },
    JUP: {
        product: new web3_js_1.PublicKey("AykbyeHZbUbEtEAPVpBLoPAMHBrUrDMtXJkPWZw4TRDX"),
        price: new web3_js_1.PublicKey("g6eRCbboSwK4tSWngn773RCMexr1APQr4uA9bGZBYfo"),
    },
    HASUI: {
        product: new web3_js_1.PublicKey("FGJutsZ3Hr9BaamiNUq369AamUEMArCxFeMnjZZ1u4oG"),
        price: new web3_js_1.PublicKey("7Y9jRRHvqig2wdSkjnACwt1SV1qocjY81C9nKKVJ6zJs"),
    },
    VSUI: {
        product: new web3_js_1.PublicKey("9L4zWUnRWEqHT9fvH5WkmQgXf7qrr97SGV4pofTSdK5k"),
        price: new web3_js_1.PublicKey("6vWPEigSDaAi6m6HuX24aK4fJGJxvQZ8TLQKADC65S2S"),
    },
};
exports.tokenOrder = {
    // Basically it's a to z but put SUI at first
    SUI: 0,
    AFSUI: 1,
    APT: 2,
    WBTC: 3,
    BTC: 3,
    BUCK: 4,
    CETUS: 5,
    WETH: 6,
    ETH: 6,
    FUD: 7,
    INJ: 8,
    JUP: 9,
    NAVX: 10,
    SCA: 11,
    SEI: 12,
    WSOL: 13,
    SOL: 14,
    TURBOS: 15,
    USDC: 16,
    USDT: 17,
    USDY: 18,
    VSUI: 20,
};
exports.optionTypeOrder = {
    0: 0,
    1: 2,
    2: 3,
    4: 4,
    6: 5,
    5: 6,
};
exports.periodOrder = {
    0: 1,
    1: 2,
    2: 3,
    3: 0,
};
exports.IncentiveRateBp = 4;
var DefaultOracleDecimal = {
    ETH: "8",
    SUI: "8",
    AFSUI: "8",
    BTC: "8",
    DOGE: "8",
    APT: "8",
    SOL: "8",
    USDC: "8",
    USDT: "8",
    CETUS: "8",
    TURBOS: "8",
    NAVX: "8",
    JUP: "8",
    BUCK: "8",
    USDY: "8",
    SEI: "8",
    FUD: "8",
    MFUD: "8",
    INJ: "8",
    SCA: "8",
    VSUI: "8",
    HASUI: "8",
};
var parsePythOracleData = function (data, decimals) {
    var prices = {};
    Object.entries(exports.ASSET_INFO).forEach(function (p) {
        var _a, _b;
        var asset = p[0].toUpperCase();
        var coinData = data.find(function (s) {
            return s.productAccountKey.equals(p[1].product);
        });
        var decimal = decimals[asset];
        if (decimal && coinData) {
            prices[asset.toLowerCase()] = {
                price: (0, bignumber_js_1.default)((_a = coinData.price) !== null && _a !== void 0 ? _a : 0)
                    .multipliedBy((0, bignumber_js_1.default)(10).pow(decimal))
                    .toString(),
                decimal: decimal,
                quote: "usd",
            };
            if (token_3.WrappedToken[asset]) {
                prices[token_3.WrappedToken[asset].toLowerCase()] = {
                    price: (0, bignumber_js_1.default)((_b = coinData.price) !== null && _b !== void 0 ? _b : 0)
                        .multipliedBy((0, bignumber_js_1.default)(10).pow(decimal))
                        .toString(),
                    decimal: decimal,
                    quote: "usd",
                };
            }
        }
    });
    return prices;
};
exports.parsePythOracleData = parsePythOracleData;
var fetchPrices = function (provider, network) { return __awaiter(void 0, void 0, void 0, function () {
    var coinObjects, oracleDecimal, PYTHNET_CLUSTER_NAME, connection, pythPublicKey, pythClient, priceData, prices, suiusd, suifud, fudusd, suiafsui, afsuiusd, suinavx, navxusd, suibuck, buckusd, usdyusdc, usdyusdcWithDecimal, scasui, scausd;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, provider.multiGetObjects({
                    ids: Object.values(config_json_1.default[network.toUpperCase()].ORACLE),
                    options: { showContent: true },
                })];
            case 1:
                coinObjects = _c.sent();
                oracleDecimal = __assign({}, DefaultOracleDecimal);
                coinObjects.forEach(function (c) {
                    var _a, _b;
                    // @ts-ignore
                    oracleDecimal[(_a = c.data) === null || _a === void 0 ? void 0 : _a.content.fields.base_token] =
                        // @ts-ignore
                        (_b = c.data) === null || _b === void 0 ? void 0 : _b.content.fields.decimal;
                });
                PYTHNET_CLUSTER_NAME = "pythnet";
                connection = new web3_js_1.Connection((0, client_1.getPythClusterApiUrl)(PYTHNET_CLUSTER_NAME));
                pythPublicKey = (0, client_1.getPythProgramKeyForCluster)(PYTHNET_CLUSTER_NAME);
                pythClient = new client_1.PythHttpClient(connection, pythPublicKey);
                return [4 /*yield*/, pythClient.getAssetPricesFromAccounts(Object.values(exports.ASSET_INFO).map(function (a) { return a.price; }))];
            case 2:
                priceData = _c.sent();
                prices = (0, exports.parsePythOracleData)(priceData, oracleDecimal);
                suiusd = (0, bignumber_js_1.default)((_b = (_a = prices["sui"]) === null || _a === void 0 ? void 0 : _a.price) !== null && _b !== void 0 ? _b : 0);
                return [4 /*yield*/, (0, price_1.getLatestPrice)("SUIFUD")];
            case 3:
                suifud = _c.sent();
                fudusd = suifud == "0" ? (0, bignumber_js_1.default)(0) : suiusd.div(suifud);
                return [4 /*yield*/, (0, price_1.getLatestPrice)("SUIAFSUI")];
            case 4:
                suiafsui = _c.sent();
                afsuiusd = suiafsui == "0" ? (0, bignumber_js_1.default)(0) : suiusd.div(suiafsui);
                return [4 /*yield*/, (0, price_1.getLatestPrice)("SUINAVX")];
            case 5:
                suinavx = _c.sent();
                navxusd = suiusd.div(suinavx);
                return [4 /*yield*/, (0, price_1.getLatestPrice)("SUIBUCK")];
            case 6:
                suibuck = _c.sent();
                buckusd = (0, bignumber_js_1.default)(suibuck).lte(0) ? "0" : suiusd.div(suibuck);
                return [4 /*yield*/, (0, price_1.getLatestPrice)("USDYUSDC")];
            case 7:
                usdyusdc = _c.sent();
                usdyusdcWithDecimal = (0, bignumber_js_1.default)(usdyusdc).multipliedBy((0, bignumber_js_1.default)(10).pow(8));
                return [4 /*yield*/, (0, price_1.getLatestPrice)("SCASUI")];
            case 8:
                scasui = _c.sent();
                scausd = suiusd.eq(0) ? (0, bignumber_js_1.default)(0) : (0, bignumber_js_1.default)(scasui).multipliedBy(suiusd);
                return [2 /*return*/, __assign({ fud: { price: fudusd.toString(), decimal: "8", quote: "usd" }, mfud: { price: fudusd.multipliedBy(1000000).toString(), decimal: "8", quote: "usd" }, afsui: { price: afsuiusd.toString(), decimal: "8", quote: "usd" }, navx: { price: navxusd.toString(), decimal: "8", quote: "usd" }, buck: { price: buckusd.toString(), decimal: "8", quote: "usd" }, usdy: { price: usdyusdcWithDecimal.toString(), decimal: "8", quote: "usd" }, sca: { price: scausd.toString(), decimal: "8", quote: "usd" } }, prices)];
        }
    });
}); };
exports.fetchPrices = fetchPrices;
var calcIncentiveRate = function (incentiveBp) {
    var incentiveRateBp = (0, bignumber_js_1.default)(incentiveBp).div((0, bignumber_js_1.default)(10).pow(exports.IncentiveRateBp));
    var incentiveRate = 1;
    if (incentiveRateBp.gt(0)) {
        incentiveRate = 1 - Number(incentiveRateBp);
    }
    return incentiveRate;
};
exports.calcIncentiveRate = calcIncentiveRate;
var calcDeliveryPrice = function (bidShare, vaultInfo) {
    var bTokenDecimal = vaultInfo.info.bTokenDecimal;
    var deliveryPrice = (0, bignumber_js_1.default)("0");
    // check if bid has settled already
    if (bidShare.bidVault.u64Padding[1]) {
        deliveryPrice = (0, bignumber_js_1.default)(bidShare.bidVault.u64Padding[1]);
    }
    else {
        var deliveryInfos = vaultInfo.info.deliveryInfos.deliveryInfo;
        var deliveryInfo = deliveryInfos[deliveryInfos.length - 1];
        deliveryPrice = deliveryInfo ? (0, bignumber_js_1.default)(deliveryInfo.deliveryPrice) : (0, bignumber_js_1.default)("0");
    }
    deliveryPrice = (0, bignumber_js_1.default)(deliveryPrice).div((0, bignumber_js_1.default)(10).pow((0, bignumber_js_1.default)(bTokenDecimal)));
    return deliveryPrice;
};
exports.calcDeliveryPrice = calcDeliveryPrice;
var calcBreakEvenPrice = function (optionType, period, strikes, bToken, price, incentive) {
    var breakEvenPrice = 0;
    switch (optionType) {
        case "0":
            if (token_1.StableCoin.includes(bToken)) {
                breakEvenPrice = Number(strikes[0]) + Number(price) * 1.1 * incentive;
            }
            else {
                breakEvenPrice = Number(strikes[0]) / (1 - Number(price) * 1.1 * incentive);
            }
            break;
        case "1":
            if (token_1.StableCoin.includes(bToken)) {
                breakEvenPrice = Number(strikes[0]) - Number(price) * 1.1 * incentive;
            }
            else {
                breakEvenPrice = Number(strikes[0]) / (1 + Number(price) * 1.1 * incentive);
            }
            break;
        case "2":
            // Calculate with the lower one
            if (token_1.StableCoin.includes(bToken)) {
                breakEvenPrice = Number(strikes[0]) + Number(price) * 1.1 * incentive;
            }
            else {
                breakEvenPrice = Number(strikes[0]) / (1 - Number(price) * 1.1 * incentive);
            }
            break;
        case "4":
            // Calculate with the lower one
            if (token_1.StableCoin.includes(bToken)) {
                breakEvenPrice = Number(strikes[0]) + Number(price) * 1.1 * incentive;
            }
            else {
                breakEvenPrice = Number(strikes[0]) / (1 - Number(price) * 1.1 * incentive);
            }
            break;
        case "5":
            if (token_1.StableCoin.includes(bToken)) {
                breakEvenPrice = Number(strikes[1]) - Number(price) * 1.1 * incentive;
            }
            else {
                breakEvenPrice = Number(strikes[1]) / (1 + Number(price) * 1.1 * incentive);
            }
            break;
        case "6":
            // Calculate with the lower one
            if (token_1.StableCoin.includes(bToken)) {
                breakEvenPrice = Number(strikes[0]) + Number(price) * 1.1 * incentive;
            }
            else {
                breakEvenPrice = Number(strikes[0]) / (1 + Number(price) * 1.1 * incentive);
            }
            break;
    }
    return breakEvenPrice;
};
exports.calcBreakEvenPrice = calcBreakEvenPrice;
var calcEstPnl = function (live, incentive, bidSize, optionType, assets, strikes, bidShare, deliveryPrice, oTokenPrice) {
    var profit = "0";
    var cost = "0";
    var _a = __read((0, token_2.typeArgsToAssets)(assets), 3), dToken = _a[0], bToken = _a[1], oToken = _a[2];
    var dTokenWrappedName = (0, token_1.getTokenName)({ token: dToken, wrapped: true });
    var bTokenWrappedName = (0, token_1.getTokenName)({ token: bToken, wrapped: true });
    var estPnls = [];
    var referencePrice = bidShare.bidVault.u64Padding.length > 0 ? (0, bignumber_js_1.default)(bidShare.bidVault.u64Padding[0]).div(PriceDecimal) : (0, bignumber_js_1.default)(oTokenPrice);
    if (optionType === "0") {
        profit = bignumber_js_1.default.max(0, (0, bignumber_js_1.default)(referencePrice.minus((0, bignumber_js_1.default)(strikes[0])))
            .div(referencePrice)
            .multipliedBy(bidSize)).toString();
    }
    else if (optionType === "1") {
        profit = bignumber_js_1.default.max(0, (0, bignumber_js_1.default)(strikes[0]).minus(referencePrice).multipliedBy(bidSize)).toString();
    }
    else if (optionType === "2" || optionType === "4") {
        profit = bignumber_js_1.default.max(0, (0, bignumber_js_1.default)(referencePrice.minus((0, bignumber_js_1.default)(strikes[0])))
            .div(referencePrice)
            .multipliedBy(bidSize))
            .minus(bignumber_js_1.default.max(0, (0, bignumber_js_1.default)(referencePrice.minus((0, bignumber_js_1.default)(strikes[1])))
            .div(referencePrice)
            .multipliedBy(bidSize)))
            .toString();
    }
    else if (optionType === "5") {
        profit = bignumber_js_1.default.max(0, (0, bignumber_js_1.default)((0, bignumber_js_1.default)(strikes[1]).minus(referencePrice)).multipliedBy(bidSize))
            .minus(bignumber_js_1.default.max(0, (0, bignumber_js_1.default)((0, bignumber_js_1.default)(strikes[0]).minus((0, bignumber_js_1.default)(referencePrice))).multipliedBy(bidSize)))
            .toString();
    }
    else if (optionType === "6") {
        profit = bignumber_js_1.default.max(0, (0, bignumber_js_1.default)(referencePrice.minus(strikes[0])).multipliedBy(bidSize))
            .minus(bignumber_js_1.default.max(0, (0, bignumber_js_1.default)(referencePrice.minus(strikes[1])).multipliedBy(bidSize)))
            .toString();
    }
    cost = (0, bignumber_js_1.default)(deliveryPrice).multipliedBy(bidSize).multipliedBy(1.1).multipliedBy(incentive).toString();
    if (dToken === bToken) {
        profit = (0, bignumber_js_1.default)(profit).minus(cost).toString();
    }
    if (!live) {
        estPnls.push({
            value: profit,
            token: assets[0],
        });
        if (dToken !== bToken) {
            estPnls.push({ value: "-" + cost, token: assets[1] });
        }
    }
    return estPnls;
};
exports.calcEstPnl = calcEstPnl;
var parseStrikes = function (period, optionType, metadata) {
    var strikes = [period === "3" ? metadata.split("-")[3] : metadata.split("-")[2]];
    switch (optionType) {
        case "0":
            break;
        case "1":
            break;
        case "2":
            strikes = [metadata.split("-")[2], metadata.split("-")[3]];
            break;
        case "4":
            strikes = [metadata.split("-")[2], metadata.split("-")[3]];
            if (period == "3") {
                strikes = [metadata.split("-")[3], metadata.split("-")[4]];
            }
            strikes = strikes.sort(function (a, b) { return Number(a) - Number(b); });
            break;
        case "5":
            strikes = [metadata.split("-")[2], metadata.split("-")[3]];
            if (period == "3") {
                strikes = [metadata.split("-")[3], metadata.split("-")[4]];
            }
            strikes = strikes.sort(function (a, b) { return Number(a) - Number(b); });
            break;
        case "6":
            strikes = [metadata.split("-")[2], metadata.split("-")[3]];
            if (period == "3") {
                strikes = [metadata.split("-")[3], metadata.split("-")[4]];
            }
            strikes = strikes.sort(function (a, b) { return Number(a) - Number(b); });
            break;
    }
    strikes = (0, tools_1.checkNumber)(strikes[0]) ? strikes : [];
    strikes = strikes.sort(function (a, b) { return Number(a) - Number(b); });
    return strikes;
};
exports.parseStrikes = parseStrikes;
var parseBidReceipt = function (vaults, bidReceipts) {
    var sortedBidReceipts = [];
    var bidVaultsInfo = [];
    var vidMap = new Map();
    vaults.forEach(function (v) {
        var curReceipts = bidReceipts[v.info.index];
        if (curReceipts) {
            curReceipts.map(function (receipt) {
                // ######  NOTE:  #####
                // Bid receipts need to be sorted and put together
                // BY vid for SDK getMyBids to fetch the correct data.
                // ###########
                // Filer out autoBidReceiptsData receipts cuz it's wrapped in strategy and
                // SDK getMyBids can't retrieve it!
                var data = vidMap.get(receipt.vid);
                if (!data) {
                    vidMap.set(receipt.vid, [receipt.id]);
                }
                else {
                    data.push(receipt.id);
                    vidMap.set(receipt.vid, data);
                }
                bidVaultsInfo.push({ vaultInfo: v, receipt: receipt });
            });
            var values = Array.from(vidMap.values());
            sortedBidReceipts = values.reduce(function (previousValue, currentValue, currentIndex, array) {
                return previousValue.concat(currentValue);
            }, []);
        }
    });
    return { sortedBidReceipts: sortedBidReceipts, bidVaultsInfo: bidVaultsInfo };
};
exports.parseBidReceipt = parseBidReceipt;
var parseBid = function (bidVaultInfo, bidShare, auction, oTokenPrice, isAutoBid) {
    var _a, _b;
    var vaultInfo = bidVaultInfo.vaultInfo, _c = bidVaultInfo.vaultInfo, info = _c.info, _d = _c.info, index = _d.index, bTokenDecimal = _d.bTokenDecimal, oTokenDecimal = _d.oTokenDecimal, optionType = _d.optionType, period = _d.period, depositToken = _d.depositToken, bidToken = _d.bidToken, settlementBase = _d.settlementBase, _e = _c.config, lotSize = _e.bidLotSize, bidIncentiveBp = _e.bidIncentiveBp, u64Padding = _e.u64Padding, receipt = bidVaultInfo.receipt;
    var incentiveRate = (0, exports.calcIncentiveRate)(bidIncentiveBp);
    var _f = __read((0, vault_1.parseAssets)(info), 3), dToken = _f[0], bToken = _f[1], oToken = _f[2];
    var oTokenName = (0, token_1.getTokenName)({ token: oToken });
    var dTokenWrappedName = (0, token_1.getTokenName)({ token: dToken, wrapped: true });
    var bTokenWrappedName = (0, token_1.getTokenName)({ token: bToken, wrapped: true });
    var metadata = bidShare.bidVault.metadata;
    var tokenLabel = metadata.split("-")[0];
    var periodLabel = vault_1.Period[Number(period)].charAt(0).toUpperCase() + vault_1.Period[Number(period)].slice(1);
    var optionTypeLabel = vault_1.AbbrStrategyName[optionType];
    var bidsSize = Number(bidShare.share) / Math.pow(10, Number(oTokenDecimal));
    var expirationDate = (0, moment_1.default)(metadata.split("-")[1], "DDMMMYY").format("yyyy-MM-DD");
    expirationDate = moment_1.default
        .utc(period === "3" ? "".concat(expirationDate, " ").concat((0, tools_1.insertAt)(metadata.split("-")[2], ":", 2)) : "".concat(expirationDate, " 08:00"))
        .local()
        .format("DD MMM YY, HH:mm");
    var live = !auction
        ? false
        : moment_1.default.unix(Number(auction.endTsMs) / 1000).isAfter((0, moment_1.default)()) &&
            moment_1.default.unix(Number(auction.startTsMs) / 1000).isBefore((0, moment_1.default)()) &&
            (0, moment_1.default)(expirationDate, "DD MMM YY, HH:mm").isAfter(moment_1.default.unix(Number(auction.endTsMs) / 1000));
    var deliveryPrice = (0, exports.calcDeliveryPrice)(bidShare, vaultInfo);
    var initialPrice = (_a = auction === null || auction === void 0 ? void 0 : auction.initialPrice) !== null && _a !== void 0 ? _a : 0;
    initialPrice = (0, bignumber_js_1.default)(initialPrice).div((0, bignumber_js_1.default)(10).pow((0, bignumber_js_1.default)(bTokenDecimal)));
    var strikes = (0, exports.parseStrikes)(period, optionType, metadata);
    var breakEvenPriceReference = live ? initialPrice : deliveryPrice;
    var breakEvenPrice = (0, exports.calcBreakEvenPrice)(optionType, period, strikes, bToken, breakEvenPriceReference, incentiveRate);
    var defaultMinBidSize = (0, bignumber_js_1.default)(lotSize).div((0, bignumber_js_1.default)(10).pow(oTokenDecimal));
    var bidSize = bidsSize.toFixed((0, tools_1.countFloating)(defaultMinBidSize.toNumber()));
    var settlePrice = (0, bignumber_js_1.default)((_b = bidShare.bidVault.u64Padding[0]) !== null && _b !== void 0 ? _b : "0").div(PriceDecimal);
    var estPnls = (0, exports.calcEstPnl)(live, incentiveRate, bidSize, optionType, [depositToken, bidToken, settlementBase], strikes, bidShare, deliveryPrice.toString(), oTokenPrice);
    return {
        vaultIndex: index,
        auctionName: "".concat(tokenLabel, " ").concat(periodLabel, " ").concat(optionTypeLabel),
        expiry: expirationDate,
        strikes: strikes.map(function (s) {
            if (tokenLabel === "MFUD") {
                return (0, bignumber_js_1.default)(s).div(1000000).toString();
            }
            return s;
        }),
        bidSize: {
            value: (0, bignumber_js_1.default)(bidSize)
                .div((0, bignumber_js_1.default)(10).pow(oToken === "MFUD" ? 6 : 0))
                .toString(),
            token: settlementBase,
        },
        breakEvenPrice: (0, bignumber_js_1.default)(breakEvenPrice)
            .div((0, bignumber_js_1.default)(10).pow(oToken === "MFUD" ? 6 : 0))
            .toString(),
        settlePrice: (0, bignumber_js_1.default)(settlePrice)
            .div((0, bignumber_js_1.default)(10).pow(oToken === "MFUD" ? 6 : 0))
            .toString(),
        estPnls: estPnls,
        isAutoBid: isAutoBid,
        receiptsId: [receipt.id],
        receiptsVid: [receipt.vid],
        optionTypeOrder: exports.optionTypeOrder[optionType],
        periodOrder: exports.periodOrder[period],
        tokenOrder: exports.tokenOrder[oToken.toUpperCase()],
    };
};
exports.parseBid = parseBid;
var getUserBidReceipts = function (provider, network, originFramworkAddress, userAddress) { return __awaiter(void 0, void 0, void 0, function () {
    var bidReceipts, result, hasNextPage, data, nextCursor, data_1, data_1_1, object, content, typeStringComponents, subtype, typeComponents, type, typePackage, vaultIndex, receipt;
    var e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                bidReceipts = {};
                return [4 /*yield*/, provider.getOwnedObjects({ owner: userAddress, options: { showType: true, showContent: true } })];
            case 1:
                result = _b.sent();
                hasNextPage = result.hasNextPage;
                data = result.data;
                nextCursor = result.nextCursor;
                _b.label = 2;
            case 2:
                if (!hasNextPage) return [3 /*break*/, 4];
                return [4 /*yield*/, provider.getOwnedObjects({ owner: userAddress, cursor: nextCursor, options: { showType: true, showContent: true } })];
            case 3:
                result = _b.sent();
                data = __spreadArray(__spreadArray([], __read(data), false), __read(result.data), false);
                hasNextPage = result.hasNextPage;
                nextCursor = result.nextCursor;
                return [3 /*break*/, 2];
            case 4:
                if (data.length === 0) {
                    return [2 /*return*/, bidReceipts];
                }
                try {
                    for (data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                        object = data_1_1.value;
                        try {
                            content = (object.data || {}).content;
                            if (!content)
                                continue;
                            typeStringComponents = (content.type || "").split("<");
                            subtype = (typeStringComponents[1] || "").replace(/>/, "");
                            typeComponents = typeStringComponents[0].split("::");
                            type = typeComponents[typeComponents.length - 1];
                            typePackage = typeComponents[0];
                            if (type === "TypusBidReceipt" && originFramworkAddress == typePackage) {
                                vaultIndex = content.fields.index;
                                receipt = {
                                    // @ts-ignore
                                    id: content.fields.id.id,
                                    // @ts-ignore
                                    index: vaultIndex,
                                    // @ts-ignore
                                    name: content.fields.name,
                                    // @ts-ignore
                                    description: content.fields.description,
                                    // @ts-ignore
                                    vid: content.fields.vid,
                                    // @ts-ignore
                                    metadata: content.fields.metadata,
                                };
                                bidReceipts[vaultIndex] || (bidReceipts[vaultIndex] = []);
                                bidReceipts[vaultIndex].push(receipt);
                            }
                        }
                        catch (e) {
                            console.log("Error retrieving object", object, e);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return [2 /*return*/, bidReceipts];
        }
    });
}); };
exports.getUserBidReceipts = getUserBidReceipts;
/**
 * Fetch user's bids info
 *
 * @param provider - Sui Client instance.
 * @param network - network type in lowercase.
 * @param packageAddress - Typus main package address.
 * @param framworkAddress - Typus framwork package address.
 * @param originFramworkAddress - Typus intial framwork package address.
 * @param registryAddress - Typus registry package address.
 * @param strategyPoolAddress - strategy pool package address.
 * @param userAddress - user's wallet address.
 * @param prices - tokens prices (usd pair on Pyth)
 * @return User Bids.
 */
var fetchUserBids = function (provider, network, packageAddress, framworkAddress, originFramworkAddress, registryAddress, strategyPoolAddress, userAddress, prices) { return __awaiter(void 0, void 0, void 0, function () {
    var vaultsInfo, userReceipts, userStrategies, auctions, _a, sortedBidReceipts, bidVaultsInfo, bidShares, bidsFromBidShares, _loop_1, bidVaultsInfo_1, bidVaultsInfo_1_1, bidVaultInfo, autoBidsShares, vaultAutoBidReceipts, userStrategies_1, userStrategies_1_1, strategy, receipts, receipts_1, receipts_1_1, receiptItem, vaultIndex, receipt, autoBidVaultInfos, bidsFromStrategies, _loop_2, autoBidVaultInfos_1, autoBidVaultInfos_1_1, autoBidVaultInfo, byOrdered;
    var e_2, _b, e_3, _c, e_4, _d, e_5, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0: return [4 /*yield*/, (0, view_function_1.getVaults)(provider, packageAddress, registryAddress, [])];
            case 1:
                vaultsInfo = _f.sent();
                return [4 /*yield*/, (0, exports.getUserBidReceipts)(provider, network, originFramworkAddress, userAddress)];
            case 2:
                userReceipts = _f.sent();
                return [4 /*yield*/, (0, view_function_2.getUserStrategies)(provider, packageAddress, registryAddress, strategyPoolAddress, userAddress)];
            case 3:
                userStrategies = _f.sent();
                return [4 /*yield*/, (0, view_function_1.getAuctions)(provider, packageAddress, registryAddress, [])];
            case 4:
                auctions = _f.sent();
                if (!(typeof prices === "undefined")) return [3 /*break*/, 6];
                return [4 /*yield*/, (0, exports.fetchPrices)(provider, "testnet")];
            case 5:
                prices = _f.sent();
                _f.label = 6;
            case 6:
                _a = (0, exports.parseBidReceipt)(Object.values(vaultsInfo), userReceipts), sortedBidReceipts = _a.sortedBidReceipts, bidVaultsInfo = _a.bidVaultsInfo;
                return [4 /*yield*/, (0, view_function_1.getMyBids)(provider, framworkAddress, packageAddress, registryAddress, sortedBidReceipts)];
            case 7:
                bidShares = _f.sent();
                bidsFromBidShares = [];
                _loop_1 = function (bidVaultInfo) {
                    var bidShare = bidShares["".concat(bidVaultInfo.receipt.index, "-").concat(bidVaultInfo.receipt.vid)];
                    var auction = auctions ? auctions[bidVaultInfo.vaultInfo.info.index] : null;
                    var _g = __read((0, vault_1.parseAssets)(bidVaultInfo.vaultInfo.info), 3), dToken = _g[0], bToken = _g[1], oToken = _g[2];
                    if (bidShare) {
                        var price = (0, bignumber_js_1.default)(prices[oToken.toLowerCase()].price)
                            .div((0, bignumber_js_1.default)(10).pow(prices[oToken.toLowerCase()].decimal))
                            .toString();
                        var data = (0, exports.parseBid)(bidVaultInfo, bidShare, auction, price, false);
                        var checkExistVault = bidsFromBidShares.find(function (p) { return p.vaultIndex === bidVaultInfo.vaultInfo.info.index && p.receiptsVid.includes(bidVaultInfo.receipt.vid); });
                        if (checkExistVault) {
                            // Merge the bid receipts into the same vault
                            checkExistVault.receiptsId = __spreadArray(__spreadArray([], __read(checkExistVault.receiptsId), false), __read(data.receiptsId), false);
                        }
                        else {
                            bidsFromBidShares.push(data);
                        }
                    }
                };
                try {
                    for (bidVaultsInfo_1 = __values(bidVaultsInfo), bidVaultsInfo_1_1 = bidVaultsInfo_1.next(); !bidVaultsInfo_1_1.done; bidVaultsInfo_1_1 = bidVaultsInfo_1.next()) {
                        bidVaultInfo = bidVaultsInfo_1_1.value;
                        _loop_1(bidVaultInfo);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (bidVaultsInfo_1_1 && !bidVaultsInfo_1_1.done && (_b = bidVaultsInfo_1.return)) _b.call(bidVaultsInfo_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                autoBidsShares = {};
                vaultAutoBidReceipts = {};
                try {
                    for (userStrategies_1 = __values(userStrategies), userStrategies_1_1 = userStrategies_1.next(); !userStrategies_1_1.done; userStrategies_1_1 = userStrategies_1.next()) {
                        strategy = userStrategies_1_1.value;
                        receipts = strategy.receipts;
                        try {
                            for (receipts_1 = (e_4 = void 0, __values(receipts)), receipts_1_1 = receipts_1.next(); !receipts_1_1.done; receipts_1_1 = receipts_1.next()) {
                                receiptItem = receipts_1_1.value;
                                vaultIndex = receiptItem.index;
                                receipt = {
                                    id: receiptItem.id,
                                    index: vaultIndex,
                                    name: "",
                                    description: "",
                                    vid: receiptItem.vid,
                                    metadata: receiptItem.metadata,
                                };
                                if (vaultAutoBidReceipts[vaultIndex]) {
                                    vaultAutoBidReceipts[vaultIndex] = __spreadArray(__spreadArray([], __read(vaultAutoBidReceipts[vaultIndex]), false), [receipt], false);
                                }
                                else {
                                    vaultAutoBidReceipts[vaultIndex] = [receipt];
                                }
                                if (autoBidsShares["".concat(vaultIndex, "-").concat(receiptItem.vid)]) {
                                    autoBidsShares["".concat(vaultIndex, "-").concat(receiptItem.vid)].share = (Number(autoBidsShares["".concat(vaultIndex, "-").concat(receiptItem.vid)].share) +
                                        Number(strategy.my_bids["".concat(vaultIndex, "-").concat(receiptItem.vid)].share)).toString();
                                }
                                else {
                                    autoBidsShares["".concat(vaultIndex, "-").concat(receiptItem.vid)] = {
                                        bidVault: strategy.my_bids["".concat(vaultIndex, "-").concat(receiptItem.vid)].bidVault,
                                        share: strategy.my_bids["".concat(vaultIndex, "-").concat(receiptItem.vid)].share,
                                    };
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (receipts_1_1 && !receipts_1_1.done && (_d = receipts_1.return)) _d.call(receipts_1);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (userStrategies_1_1 && !userStrategies_1_1.done && (_c = userStrategies_1.return)) _c.call(userStrategies_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                autoBidVaultInfos = [];
                Object.values(vaultsInfo).forEach(function (v) {
                    var curReceipts = vaultAutoBidReceipts[v.info.index];
                    if (curReceipts) {
                        curReceipts.map(function (item) {
                            autoBidVaultInfos.push({ vaultInfo: v, receipt: item });
                        });
                    }
                });
                bidsFromStrategies = [];
                _loop_2 = function (autoBidVaultInfo) {
                    var bidShare = autoBidsShares["".concat(autoBidVaultInfo.receipt.index, "-").concat(autoBidVaultInfo.receipt.vid)];
                    var auction = auctions ? auctions[autoBidVaultInfo.vaultInfo.info.index] : null;
                    var _h = __read((0, vault_1.parseAssets)(autoBidVaultInfo.vaultInfo.info), 3), dToken = _h[0], bToken = _h[1], oToken = _h[2];
                    if (bidShare) {
                        var price = (0, bignumber_js_1.default)(prices[oToken.toLowerCase()].price)
                            .div((0, bignumber_js_1.default)(10).pow(prices[oToken.toLowerCase()].decimal))
                            .toString();
                        var data = (0, exports.parseBid)(autoBidVaultInfo, bidShare, auction, price, false);
                        var checkExistVault = bidsFromStrategies.find(function (p) { return p.vaultIndex === autoBidVaultInfo.vaultInfo.info.index && p.receiptsVid.includes(autoBidVaultInfo.receipt.vid); });
                        if (checkExistVault) {
                            // Merge the bid receipts into the same vault
                            checkExistVault.receiptsId = __spreadArray(__spreadArray([], __read(checkExistVault.receiptsId), false), __read(data.receiptsId), false);
                        }
                        else {
                            bidsFromStrategies.push(data);
                        }
                    }
                };
                try {
                    for (autoBidVaultInfos_1 = __values(autoBidVaultInfos), autoBidVaultInfos_1_1 = autoBidVaultInfos_1.next(); !autoBidVaultInfos_1_1.done; autoBidVaultInfos_1_1 = autoBidVaultInfos_1.next()) {
                        autoBidVaultInfo = autoBidVaultInfos_1_1.value;
                        _loop_2(autoBidVaultInfo);
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (autoBidVaultInfos_1_1 && !autoBidVaultInfos_1_1.done && (_e = autoBidVaultInfos_1.return)) _e.call(autoBidVaultInfos_1);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
                byOrdered = (0, lodash_1.orderBy)(__spreadArray(__spreadArray([], __read(bidsFromBidShares), false), __read(bidsFromStrategies), false), ["expiry", "tokenOrder", "periodOrder", "optionTypeOrder"], ["asc", "asc", "asc", "asc"]);
                return [2 /*return*/, byOrdered];
        }
    });
}); };
exports.fetchUserBids = fetchUserBids;
