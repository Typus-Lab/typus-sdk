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
exports.getPairPrices = getPairPrices;
exports.getLatestPrice = getLatestPrice;
exports.getPythLatestPrice = getPythLatestPrice;
exports.getLatestPriceUSD = getLatestPriceUSD;
var apiUrl = "https://us-central1-aqueous-freedom-378103.cloudfunctions.net/db-price";
function getPairPrices(pair, startTs, endTs) {
    return __awaiter(this, void 0, void 0, function () {
        var queryParams, apiUrlWithParams, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queryParams = new URLSearchParams({
                        pair: pair,
                        startTs: startTs,
                        endTs: endTs,
                    });
                    apiUrlWithParams = "".concat(apiUrl, "?").concat(queryParams.toString());
                    return [4 /*yield*/, fetch(apiUrlWithParams, {
                            method: "GET",
                            headers: { "Content-Type": "application/json" },
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getLatestPrice(pair) {
    return __awaiter(this, void 0, void 0, function () {
        var currentTimestampInSeconds, minuteAgo, res, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    currentTimestampInSeconds = Math.floor(new Date().getTime() / 1000);
                    minuteAgo = currentTimestampInSeconds - 60;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, getPairPrices(pair, minuteAgo.toString(), currentTimestampInSeconds.toString())];
                case 2:
                    res = _a.sent();
                    if (res.at(-1)) {
                        return [2 /*return*/, res.at(-1).price];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [2 /*return*/, "0"];
                case 4: return [2 /*return*/, "0"];
            }
        });
    });
}
function getPythLatestPrice() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrlWithParams, response, map, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrlWithParams = "https://hermes.pyth.network/api/latest_price_feeds?ids[]=0x23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744&ids[]=0xe5b274b2611143df055d6e7cd8d93fe1961716bcd4dca1cad87a83bc1e78c1ef&ids[]=0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a&ids[]=0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43&ids[]=0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace&ids[]=0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d&ids[]=0xf9c2e890443dd995d0baafc08eea3358be1ffb874f93f99c30b3816c460bbac3&ids[]=0x03ae4db29ed4ae33d323568895aa00337e658e348b37509f5372ae51f0af00d5&ids[]=0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b&ids[]=0xdcef50dd0a4cd2dcc17e45df1676dcb336a11a61c69df7a0299b0150c672d25c&ids[]=0x7a5bc1d2b56ad029048cd63964b3ad2776eadf812edc1a43a31406cb54bff592&ids[]=0x53614f1cb0c031d4af66c04cb9c756234adad0e1cee85303795091499a4084eb&ids[]=0x88250f854c019ef4f88a5c073d52a18bb1c6ac437033f5932cd017d24917ab46&ids[]=0xe393449f6aff8a4b6d3e1165a7c9ebec103685f3b41e60db4277b5b6d10e7326";
                    return [4 /*yield*/, fetch(apiUrlWithParams, {
                            method: "GET",
                            headers: { "Content-Type": "application/json" },
                        })];
                case 1:
                    response = _a.sent();
                    map = new Map();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    data.forEach(function (p) {
                        var token = pythId[p.id];
                        var price = p.price.price / Math.pow(10, -p.price.expo);
                        map.set(token, price);
                    });
                    return [2 /*return*/, map];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getLatestPriceUSD() {
    return __awaiter(this, void 0, void 0, function () {
        var prices, _a, _b, pair, currentTimestampInSeconds, minuteAgo, res, price, result, e_2_1;
        var e_2, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, getPythLatestPrice()];
                case 1:
                    prices = (_d.sent());
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 7, 8, 9]);
                    _a = __values(["SUIFUD", "SUIBUCK", "SUIAFSUI", "SCASUI", "USDYUSDC"]), _b = _a.next();
                    _d.label = 3;
                case 3:
                    if (!!_b.done) return [3 /*break*/, 6];
                    pair = _b.value;
                    currentTimestampInSeconds = Math.floor(new Date().getTime() / 1000);
                    minuteAgo = currentTimestampInSeconds - 300;
                    return [4 /*yield*/, getPairPrices(pair, minuteAgo.toString(), currentTimestampInSeconds.toString())];
                case 4:
                    res = _d.sent();
                    price = res.at(-1).price;
                    result = void 0;
                    if (pair.startsWith("SUI")) {
                        result = prices.get("SUI") / Number(price);
                    }
                    else if (pair.endsWith("SUI")) {
                        result = prices.get("SUI") * Number(price);
                    }
                    else {
                        result = Number(price);
                    }
                    prices.set(pair.replace("SUI", ""), result);
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
                case 9: return [2 /*return*/, prices];
            }
        });
    });
}
var pythId = {
    "23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744": "SUI",
    e5b274b2611143df055d6e7cd8d93fe1961716bcd4dca1cad87a83bc1e78c1ef: "CETUS",
    eaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a: "USDC",
    e62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43: "BTC",
    ff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace: "ETH",
    ef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d: "SOL",
    f9c2e890443dd995d0baafc08eea3358be1ffb874f93f99c30b3816c460bbac3: "TURBOS",
    "03ae4db29ed4ae33d323568895aa00337e658e348b37509f5372ae51f0af00d5": "APT",
    "2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b": "USDT",
    dcef50dd0a4cd2dcc17e45df1676dcb336a11a61c69df7a0299b0150c672d25c: "DOGE",
    "7a5bc1d2b56ad029048cd63964b3ad2776eadf812edc1a43a31406cb54bff592": "INJ",
    "53614f1cb0c031d4af66c04cb9c756234adad0e1cee85303795091499a4084eb": "SEI",
    "88250f854c019ef4f88a5c073d52a18bb1c6ac437033f5932cd017d24917ab46": "NAVX",
    e393449f6aff8a4b6d3e1165a7c9ebec103685f3b41e60db4277b5b6d10e7326: "USDY",
};
