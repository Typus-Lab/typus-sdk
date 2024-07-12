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
exports.getTotalDepositorIncentive = getTotalDepositorIncentive;
exports.getTotalPremium = getTotalPremium;
exports.getAccumulatedRewardGeneratedUSD = getAccumulatedRewardGeneratedUSD;
exports.getTotalProfitSharingClaimed = getTotalProfitSharingClaimed;
exports.getTotalProfitSharing = getTotalProfitSharing;
exports.getAccumulatedUser = getAccumulatedUser;
exports.getAccumulatedNotionalVolumeUSD = getAccumulatedNotionalVolumeUSD;
var headers = {
    "api-key": "tz3JJ6stG7Fux6ueRSRA5mdpC9U0lozI3",
    "Content-Type": "application/json",
};
function getTotalDepositorIncentive() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, requestData, jsonData, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";
                    requestData = {
                        sqlQuery: {
                            sql: "\n                SELECT SUM(E.depositor_incentive_value) as incentive\n                FROM Delivery E\n            ",
                            size: 2000000,
                        },
                    };
                    jsonData = JSON.stringify(requestData);
                    return [4 /*yield*/, fetch(apiUrl, {
                            method: "POST",
                            headers: headers,
                            body: jsonData,
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, { token: "SUI", total_amount: data.result.rows[0].incentive }];
            }
        });
    });
}
function getTotalPremium() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, requestData, jsonData, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "https://app.sentio.xyz/api/v1/insights/typus/typus_v2/query";
                    requestData = {
                        timeRange: {
                            start: "now",
                            end: "now",
                            step: 3600,
                            timezone: "Europe/Paris",
                        },
                        limit: 1,
                        queries: [
                            {
                                metricsQuery: {
                                    query: "AccumulatedPremiumUSD",
                                    alias: "",
                                    id: "a",
                                    labelSelector: {},
                                    aggregate: {
                                        op: "SUM",
                                        grouping: ["chain"],
                                    },
                                    functions: [],
                                    disabled: false,
                                },
                                dataSource: "METRICS",
                                sourceName: "",
                            },
                        ],
                        formulas: [],
                    };
                    jsonData = JSON.stringify(requestData);
                    return [4 /*yield*/, fetch(apiUrl, {
                            method: "POST",
                            headers: headers,
                            body: jsonData,
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data.results[0].matrix.samples[0].values[0].value];
            }
        });
    });
}
/** Returns Accumulated Rewards im USD [v1, v2] */
function getAccumulatedRewardGeneratedUSD() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrlV1, requestDataV1, jsonDataV1, responseV1, dataV1, apiUrl, requestData, jsonData, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrlV1 = "https://app.sentio.xyz/api/v1/insights/typus/typus_v1/query";
                    requestDataV1 = {
                        timeRange: {
                            start: "now",
                            end: "now",
                            step: 3600,
                            timezone: "Asia/Taipei",
                        },
                        limit: 1,
                        queries: [
                            {
                                metricsQuery: {
                                    query: "AccumulatedPremiumUSD",
                                    alias: "",
                                    id: "a",
                                    labelSelector: {},
                                    aggregate: {
                                        op: "SUM",
                                        grouping: [],
                                    },
                                    functions: [],
                                    disabled: false,
                                },
                                dataSource: "METRICS",
                                sourceName: "",
                            },
                        ],
                        formulas: [],
                    };
                    jsonDataV1 = JSON.stringify(requestDataV1);
                    return [4 /*yield*/, fetch(apiUrlV1, {
                            method: "POST",
                            headers: headers,
                            body: jsonDataV1,
                        })];
                case 1:
                    responseV1 = _a.sent();
                    return [4 /*yield*/, responseV1.json()];
                case 2:
                    dataV1 = _a.sent();
                    apiUrl = "https://app.sentio.xyz/api/v1/insights/typus/typus_v2/query";
                    requestData = {
                        timeRange: {
                            start: "now",
                            end: "now",
                            step: 3600,
                            timezone: "Asia/Taipei",
                        },
                        limit: 1,
                        queries: [
                            {
                                metricsQuery: {
                                    query: "AccumulatedRewardGeneratedUSD",
                                    alias: "",
                                    id: "a",
                                    labelSelector: {},
                                    aggregate: {
                                        op: "SUM",
                                        grouping: [],
                                    },
                                    functions: [],
                                    disabled: false,
                                },
                                dataSource: "METRICS",
                                sourceName: "",
                            },
                        ],
                        formulas: [],
                    };
                    jsonData = JSON.stringify(requestData);
                    return [4 /*yield*/, fetch(apiUrl, {
                            method: "POST",
                            headers: headers,
                            body: jsonData,
                        })];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    data = _a.sent();
                    // console.log(data);
                    return [2 /*return*/, [dataV1.results[0].matrix.samples[0].values[0].value, data.results[0].matrix.samples[0].values[0].value]];
            }
        });
    });
}
function getTotalProfitSharingClaimed() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, requestData, jsonData, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";
                    requestData = {
                        sqlQuery: {
                            sql: "\n                SELECT token, SUM(amount) AS total_amount\n                FROM ClaimProfitSharing\n                GROUP BY token;\n            ",
                            size: 2000000,
                        },
                    };
                    jsonData = JSON.stringify(requestData);
                    return [4 /*yield*/, fetch(apiUrl, {
                            method: "POST",
                            headers: headers,
                            body: jsonData,
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data.result.rows];
            }
        });
    });
}
function getTotalProfitSharing(provider) {
    return __awaiter(this, void 0, void 0, function () {
        var hasNextPage, cursor, datas, result, tokenAmountMap, datas_1, datas_1_1, data, token, value, amount, sum, tokenAmount, _a, _b, x;
        var e_1, _c, e_2, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    hasNextPage = true;
                    cursor = undefined;
                    datas = [];
                    _e.label = 1;
                case 1:
                    if (!hasNextPage) return [3 /*break*/, 3];
                    return [4 /*yield*/, provider.queryEvents({
                            query: {
                                MoveEventType: "0x80ff0830313b36bb65ab927af811037f8b175d6e83c43f906b8f55d9263eea99::tails_staking::ProfitSharingEvent",
                            },
                            order: "descending",
                            cursor: cursor,
                        })];
                case 2:
                    result = _e.sent();
                    hasNextPage = result.hasNextPage;
                    cursor = result.nextCursor;
                    // @ts-ignore
                    datas = datas.concat(result.data);
                    return [3 /*break*/, 1];
                case 3:
                    tokenAmountMap = new Map();
                    try {
                        for (datas_1 = __values(datas), datas_1_1 = datas_1.next(); !datas_1_1.done; datas_1_1 = datas_1.next()) {
                            data = datas_1_1.value;
                            token = (0, token_1.typeArgToAsset)(data.parsedJson.token.name);
                            value = data.parsedJson.value;
                            amount = value / Math.pow(10, (0, token_1.assetToDecimal)(token));
                            // const week = Math.round(Number(data.timestampMs) / 24 / 3600 / 1000);
                            if (tokenAmountMap.has(token)) {
                                sum = tokenAmountMap.get(token);
                                tokenAmountMap.set(token, sum + Number(amount));
                            }
                            else {
                                tokenAmountMap.set(token, Number(amount));
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (datas_1_1 && !datas_1_1.done && (_c = datas_1.return)) _c.call(datas_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    tokenAmount = [];
                    try {
                        for (_a = __values(tokenAmountMap.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            x = _b.value;
                            tokenAmount.push({ token: x[0], total_amount: x[1].toString() });
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return [2 /*return*/, tokenAmount];
            }
        });
    });
}
/** Returns Accumulated Users [v1, v2] */
function getAccumulatedUser() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrls, result, apiUrls_1, apiUrls_1_1, apiUrl, requestData, jsonData, response, data, e_3_1;
        var e_3, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    apiUrls = [
                        "https://app.sentio.xyz/api/v1/insights/typus/typus_v1/query",
                        "https://app.sentio.xyz/api/v1/insights/typus/typus_v2/query",
                    ];
                    result = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, 8, 9]);
                    apiUrls_1 = __values(apiUrls), apiUrls_1_1 = apiUrls_1.next();
                    _b.label = 2;
                case 2:
                    if (!!apiUrls_1_1.done) return [3 /*break*/, 6];
                    apiUrl = apiUrls_1_1.value;
                    requestData = {
                        timeRange: {
                            start: "now-1h",
                            end: "now",
                            step: 3600,
                            timezone: "Asia/Taipei",
                        },
                        limit: 1,
                        queries: [
                            {
                                eventsQuery: {
                                    resource: {
                                        name: "",
                                        type: "EVENTS",
                                    },
                                    alias: "",
                                    id: "a",
                                    aggregation: {
                                        countUnique: {
                                            duration: {
                                                value: 0,
                                                unit: "day",
                                            },
                                        },
                                    },
                                    groupBy: [],
                                    limit: 1,
                                    functions: [],
                                    disabled: false,
                                },
                                dataSource: "EVENTS",
                                sourceName: "",
                            },
                        ],
                        formulas: [],
                    };
                    jsonData = JSON.stringify(requestData);
                    return [4 /*yield*/, fetch(apiUrl, {
                            method: "POST",
                            headers: headers,
                            body: jsonData,
                        })];
                case 3:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    data = _b.sent();
                    // console.log(data.results[0].matrix.samples[0].values[0].value);
                    result.push(data.results[0].matrix.samples[0].values[0].value);
                    _b.label = 5;
                case 5:
                    apiUrls_1_1 = apiUrls_1.next();
                    return [3 /*break*/, 2];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_3_1 = _b.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (apiUrls_1_1 && !apiUrls_1_1.done && (_a = apiUrls_1.return)) _a.call(apiUrls_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/, result];
            }
        });
    });
}
/** Returns Accumulated Notional Volume in USD [v1, v2] */
function getAccumulatedNotionalVolumeUSD() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrls, result, apiUrls_2, apiUrls_2_1, apiUrl, requestData, jsonData, response, data, e_4_1;
        var e_4, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    apiUrls = [
                        "https://app.sentio.xyz/api/v1/insights/typus/typus_v1/query",
                        "https://app.sentio.xyz/api/v1/insights/typus/typus_v2/query",
                    ];
                    result = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, 8, 9]);
                    apiUrls_2 = __values(apiUrls), apiUrls_2_1 = apiUrls_2.next();
                    _b.label = 2;
                case 2:
                    if (!!apiUrls_2_1.done) return [3 /*break*/, 6];
                    apiUrl = apiUrls_2_1.value;
                    requestData = {
                        timeRange: {
                            start: "now",
                            end: "now",
                            step: 3600,
                            timezone: "Asia/Taipei",
                        },
                        limit: 1,
                        queries: [
                            {
                                metricsQuery: {
                                    query: "AccumulatedNotionalVolumeUSD",
                                    alias: "",
                                    id: "a",
                                    labelSelector: {},
                                    aggregate: {
                                        op: "SUM",
                                        grouping: [],
                                    },
                                    functions: [],
                                    disabled: false,
                                },
                                dataSource: "METRICS",
                                sourceName: "",
                            },
                        ],
                        formulas: [],
                    };
                    jsonData = JSON.stringify(requestData);
                    return [4 /*yield*/, fetch(apiUrl, {
                            method: "POST",
                            headers: headers,
                            body: jsonData,
                        })];
                case 3:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    data = _b.sent();
                    console.log(data.results[0]);
                    result.push(data.results[0].matrix.samples[0].values[0].value);
                    _b.label = 5;
                case 5:
                    apiUrls_2_1 = apiUrls_2.next();
                    return [3 /*break*/, 2];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_4_1 = _b.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (apiUrls_2_1 && !apiUrls_2_1.done && (_a = apiUrls_2.return)) _a.call(apiUrls_2);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/, result];
            }
        });
    });
}
var token_1 = require("src/constants/token");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); })();
