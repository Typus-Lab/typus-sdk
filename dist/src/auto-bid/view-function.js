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
exports.getUserStrategies = getUserStrategies;
exports.getStrategyPool = getStrategyPool;
exports.getStrategies = getStrategies;
exports.getStrategyIds = getStrategyIds;
var bcs_1 = require("@mysten/bcs");
var transactions_1 = require("@mysten/sui.js/transactions");
var tools_1 = require("src/utils/tools");
var bcs = new bcs_1.BCS((0, bcs_1.getSuiMoveConfig)());
bcs.registerStructType("StrategyV2", {
    id: "address",
    vault_index: "u64",
    signal_index: "u64",
    user: "address",
    price_percentage: "u64",
    size: "u64",
    max_times: "u64",
    target_rounds: "vector<u64>",
    receipts: "vector<TypusBidReceipt>",
    active: "bool",
    u64_padding: "vector<u64>",
    bid_times: "u64",
    bid_round: "u64",
    bid_ts_ms: "u64",
    bid_rounds: "vector<u64>",
    accumulated_profit: "u64",
    strategy_index: "u64",
});
// struct StrategyV2 has key, store {
//     id: UID,
//     vault_index: u64,
//     signal_index: u64,
//     user: address,
//     // balance: Balance<B_TOKEN>,
//     // profit: Balance<D_TOKEN>,
//     price_percentage: u64,
//     size: u64,
//     max_times: u64,
//     target_rounds: vector<u64>,
//     receipts: vector<TypusBidReceipt>,
//     active: bool,
//     u64_padding: vector<u64>,
//     // log
//     bid_times: u64,
//     bid_round: u64,
//     bid_ts_ms: u64,
//     bid_rounds: vector<u64>,
//     accumulated_profit: u64,
// }
bcs.registerStructType("TypusBidReceipt", {
    id: "address",
    vid: "address",
    index: "u64",
    metadata: "String",
    u64_padding: "vector<u64>",
});
function getUserStrategies(provider, packageId, registry, strategyPool, user
// typeArguments: string[] // [D_TOKEN, B_TOKEN]
) {
    return __awaiter(this, void 0, void 0, function () {
        var transactionBlock, target, transactionBlockArguments, results, objBCS, reader, strategies;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    transactionBlock = new transactions_1.TransactionBlock();
                    target = "".concat(packageId, "::auto_bid::view_user_strategies");
                    transactionBlockArguments = [transactionBlock.pure(registry), transactionBlock.pure(strategyPool), transactionBlock.pure(user)];
                    transactionBlock.moveCall({
                        target: target,
                        typeArguments: [],
                        arguments: transactionBlockArguments,
                    });
                    return [4 /*yield*/, provider.devInspectTransactionBlock({ transactionBlock: transactionBlock, sender: user })];
                case 1:
                    results = (_a.sent()).results;
                    objBCS = results[0].returnValues[0][0];
                    reader = new bcs_1.BcsReader(new Uint8Array(objBCS));
                    strategies = [];
                    reader.readVec(function (reader, i) {
                        reader.read16();
                        var strategy = {
                            id: (0, tools_1.AddressFromBytes)(reader.readBytes(32)),
                            vault_index: reader.read64(),
                            signal_index: reader.read64(),
                            user: (0, tools_1.AddressFromBytes)(reader.readBytes(32)),
                            price_percentage: reader.read64(),
                            size: reader.read64(),
                            max_times: reader.read64(),
                            target_rounds: reader.readVec(function (reader) {
                                return reader.read64();
                            }),
                            receipts: reader.readVec(function (reader) {
                                return {
                                    id: (0, tools_1.AddressFromBytes)(reader.readBytes(32)),
                                    vid: (0, tools_1.AddressFromBytes)(reader.readBytes(32)),
                                    index: reader.read64(),
                                    metadata: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                                    u64_padding: reader.readVec(function (reader) {
                                        return reader.read64();
                                    }),
                                };
                            }),
                            active: reader.read8(),
                            u64_padding: reader.readVec(function (reader) {
                                return reader.read64();
                            }),
                            bid_times: reader.read64(),
                            bid_round: reader.read64(),
                            bid_ts_ms: reader.read64(),
                            bid_rounds: reader.readVec(function (reader) {
                                return reader.read64();
                            }),
                            accumulated_profit: reader.read64(),
                            strategy_index: reader.read64(),
                        };
                        var my_bids = Array.from(new Map()).reduce(function (map, _a) {
                            var _b = __read(_a, 2), key = _b[0], value = _b[1];
                            map[key] = value;
                            return map;
                        }, {});
                        reader.readVec(function (reader, i) {
                            reader.read16();
                            var bidVault = {
                                id: (0, tools_1.AddressFromBytes)(reader.readBytes(32)),
                                depositToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                                bidToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                                incentiveToken: reader
                                    .readVec(function (reader) {
                                    return String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8())));
                                })
                                    .at(0),
                                index: reader.read64(),
                                shareSupply: reader.read64(),
                                metadata: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                                u64Padding: reader.readVec(function (reader) {
                                    return reader.read64();
                                }),
                                bcsPadding: reader.readVec(function (reader) {
                                    return reader.read8();
                                }),
                            };
                            my_bids[bidVault.index + "-" + bidVault.id] = {
                                bidVault: bidVault,
                                share: reader.read64(),
                            };
                        });
                        // console.log(my_bids);
                        strategy.my_bids = my_bids;
                        strategy.remaining_balance = strategy.u64_padding.at(0);
                        strategy.gain_to_harvest = strategy.u64_padding.at(1);
                        strategy.accumulated_cost = strategy.u64_padding.at(2);
                        if (Number(strategy.bid_times) >= Number(strategy.max_times)) {
                            strategy.status = "finished";
                        }
                        else if (!strategy.active) {
                            strategy.status = "insufficient balance";
                        }
                        else {
                            strategy.status = "active";
                        }
                        // console.log(strategy);
                        strategies.push(strategy);
                    });
                    return [2 /*return*/, strategies];
            }
        });
    });
}
function getStrategyPool(provider, strategyPool) {
    return __awaiter(this, void 0, void 0, function () {
        var pool, vaults, strategies, vaults_1, vaults_1_1, vault, signals, _a, _b, signal, strategyTable, strategy_pool;
        var e_1, _c, e_2, _d;
        var _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0: return [4 /*yield*/, provider.getObject({ id: strategyPool, options: { showContent: true } })];
                case 1:
                    pool = (_e = (_f.sent()).data) === null || _e === void 0 ? void 0 : _e.content.fields;
                    vaults = pool.strategies.fields.contents;
                    strategies = new Map();
                    try {
                        for (vaults_1 = __values(vaults), vaults_1_1 = vaults_1.next(); !vaults_1_1.done; vaults_1_1 = vaults_1.next()) {
                            vault = vaults_1_1.value;
                            signals = new Map();
                            try {
                                for (_a = (e_2 = void 0, __values(vault.fields.value.fields.contents)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    signal = _b.value;
                                    strategyTable = signal.fields.value.fields.contents;
                                    // console.log(strategyTable);
                                    signals.set(signal.fields.key, strategyTable.fields.id.id);
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                            strategies.set(vault.fields.key, signals);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (vaults_1_1 && !vaults_1_1.done && (_c = vaults_1.return)) _c.call(vaults_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    strategy_pool = {
                        id: pool.id.id,
                        strategies: strategies,
                        authority: pool.authority,
                    };
                    return [2 /*return*/, strategy_pool];
            }
        });
    });
}
function getStrategies(provider, strategyIds) {
    return __awaiter(this, void 0, void 0, function () {
        var strategies, len, results, results_1, results_1_1, result, fields;
        var e_3, _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    strategies = new Map();
                    _c.label = 1;
                case 1:
                    if (!(strategyIds.length > 0)) return [3 /*break*/, 3];
                    len = strategyIds.length > 50 ? 50 : strategyIds.length;
                    return [4 /*yield*/, provider.multiGetObjects({ ids: strategyIds.splice(0, len), options: { showContent: true } })];
                case 2:
                    results = _c.sent();
                    try {
                        for (results_1 = (e_3 = void 0, __values(results)), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                            result = results_1_1.value;
                            fields = (_b = result.data) === null || _b === void 0 ? void 0 : _b.content.fields;
                            // console.log(fields);
                            strategies.set(fields.name, fields.value.fields);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (results_1_1 && !results_1_1.done && (_a = results_1.return)) _a.call(results_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/, strategies];
            }
        });
    });
}
function getStrategyIds(provider, parentId) {
    return __awaiter(this, void 0, void 0, function () {
        var result, datas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, provider.getDynamicFields({
                        parentId: parentId,
                    })];
                case 1:
                    result = _a.sent();
                    datas = result.data;
                    _a.label = 2;
                case 2:
                    if (!result.hasNextPage) return [3 /*break*/, 4];
                    return [4 /*yield*/, provider.getDynamicFields({
                            parentId: parentId,
                            cursor: result.nextCursor,
                        })];
                case 3:
                    result = _a.sent();
                    datas = datas.concat(result.data);
                    return [3 /*break*/, 2];
                case 4: return [2 /*return*/, datas.map(function (data) { return data.objectId; })];
            }
        });
    });
}
