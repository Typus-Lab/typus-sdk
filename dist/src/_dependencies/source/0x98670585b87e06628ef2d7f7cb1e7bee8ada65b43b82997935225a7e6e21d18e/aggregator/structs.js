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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlidingWindowElement = exports.SlidingWindow = exports.AggregatorJobData = exports.AggregatorHistoryRow = exports.AggregatorHistoryData = exports.Aggregator = void 0;
exports.isAggregator = isAggregator;
exports.isAggregatorHistoryData = isAggregatorHistoryData;
exports.isAggregatorHistoryRow = isAggregatorHistoryRow;
exports.isAggregatorJobData = isAggregatorJobData;
exports.isSlidingWindow = isSlidingWindow;
exports.isSlidingWindowElement = isSlidingWindowElement;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x2/bag/structs");
var structs_2 = require("../../0x2/object/structs");
var structs_3 = require("../math/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== Aggregator =============================== */
function isAggregator(type) { type = (0, util_1.compressSuiType)(type); return type === "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::Aggregator"; }
var Aggregator = /** @class */ (function () {
    function Aggregator(typeArgs, fields) {
        this.$typeName = Aggregator.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Aggregator.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.authority = fields.authority;
        ;
        this.queueAddr = fields.queueAddr;
        ;
        this.tokenAddr = fields.tokenAddr;
        ;
        this.batchSize = fields.batchSize;
        ;
        this.minOracleResults = fields.minOracleResults;
        ;
        this.minUpdateDelaySeconds = fields.minUpdateDelaySeconds;
        ;
        this.name = fields.name;
        ;
        this.historyLimit = fields.historyLimit;
        ;
        this.varianceThreshold = fields.varianceThreshold;
        ;
        this.forceReportPeriod = fields.forceReportPeriod;
        ;
        this.minJobResults = fields.minJobResults;
        ;
        this.crankDisabled = fields.crankDisabled;
        ;
        this.crankRowCount = fields.crankRowCount;
        ;
        this.nextAllowedUpdateTime = fields.nextAllowedUpdateTime;
        ;
        this.createdAt = fields.createdAt;
        ;
        this.readCharge = fields.readCharge;
        ;
        this.rewardEscrow = fields.rewardEscrow;
        ;
        this.readWhitelist = fields.readWhitelist;
        ;
        this.limitReadsToWhitelist = fields.limitReadsToWhitelist;
        ;
        this.updateData = fields.updateData;
        ;
        this.intervalId = fields.intervalId;
        ;
        this.currIntervalPayouts = fields.currIntervalPayouts;
        ;
        this.nextIntervalRefreshTime = fields.nextIntervalRefreshTime;
        ;
        this.escrows = fields.escrows;
        ;
        this.friendKey = fields.friendKey;
        ;
        this.version = fields.version;
    }
    Aggregator.reified = function () {
        var _this = this;
        return { typeName: Aggregator.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Aggregator.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Aggregator.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Aggregator.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Aggregator.fromBcs(data); }, bcs: Aggregator.bcs, fromJSONField: function (field) { return Aggregator.fromJSONField(field); }, fromJSON: function (json) { return Aggregator.fromJSON(json); }, fromSuiParsedData: function (content) { return Aggregator.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Aggregator.fetch(client, id)];
            }); }); }, new: function (fields) { return new Aggregator([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Aggregator, "r", {
        get: function () { return Aggregator.reified(); },
        enumerable: false,
        configurable: true
    });
    Aggregator.phantom = function () { return (0, reified_1.phantom)(Aggregator.reified()); };
    Object.defineProperty(Aggregator, "p", {
        get: function () { return Aggregator.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aggregator, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Aggregator", {
                id: structs_2.UID.bcs, authority: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), queue_addr: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), token_addr: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), batch_size: bcs_1.bcs.u64(), min_oracle_results: bcs_1.bcs.u64(), min_update_delay_seconds: bcs_1.bcs.u64(), name: bcs_1.bcs.vector(bcs_1.bcs.u8()), history_limit: bcs_1.bcs.u64(), variance_threshold: structs_3.SwitchboardDecimal.bcs, force_report_period: bcs_1.bcs.u64(), min_job_results: bcs_1.bcs.u64(), crank_disabled: bcs_1.bcs.bool(), crank_row_count: bcs_1.bcs.u8(), next_allowed_update_time: bcs_1.bcs.u64(), created_at: bcs_1.bcs.u64(), read_charge: bcs_1.bcs.u64(), reward_escrow: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), read_whitelist: structs_1.Bag.bcs, limit_reads_to_whitelist: bcs_1.bcs.bool(), update_data: SlidingWindow.bcs, interval_id: bcs_1.bcs.u64(), curr_interval_payouts: bcs_1.bcs.u64(), next_interval_refresh_time: bcs_1.bcs.u64(), escrows: structs_1.Bag.bcs, friend_key: bcs_1.bcs.vector(bcs_1.bcs.u8()), version: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Aggregator.fromFields = function (fields) { return Aggregator.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), authority: (0, reified_1.decodeFromFields)("address", fields.authority), queueAddr: (0, reified_1.decodeFromFields)("address", fields.queue_addr), tokenAddr: (0, reified_1.decodeFromFields)("address", fields.token_addr), batchSize: (0, reified_1.decodeFromFields)("u64", fields.batch_size), minOracleResults: (0, reified_1.decodeFromFields)("u64", fields.min_oracle_results), minUpdateDelaySeconds: (0, reified_1.decodeFromFields)("u64", fields.min_update_delay_seconds), name: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.name), historyLimit: (0, reified_1.decodeFromFields)("u64", fields.history_limit), varianceThreshold: (0, reified_1.decodeFromFields)(structs_3.SwitchboardDecimal.reified(), fields.variance_threshold), forceReportPeriod: (0, reified_1.decodeFromFields)("u64", fields.force_report_period), minJobResults: (0, reified_1.decodeFromFields)("u64", fields.min_job_results), crankDisabled: (0, reified_1.decodeFromFields)("bool", fields.crank_disabled), crankRowCount: (0, reified_1.decodeFromFields)("u8", fields.crank_row_count), nextAllowedUpdateTime: (0, reified_1.decodeFromFields)("u64", fields.next_allowed_update_time), createdAt: (0, reified_1.decodeFromFields)("u64", fields.created_at), readCharge: (0, reified_1.decodeFromFields)("u64", fields.read_charge), rewardEscrow: (0, reified_1.decodeFromFields)("address", fields.reward_escrow), readWhitelist: (0, reified_1.decodeFromFields)(structs_1.Bag.reified(), fields.read_whitelist), limitReadsToWhitelist: (0, reified_1.decodeFromFields)("bool", fields.limit_reads_to_whitelist), updateData: (0, reified_1.decodeFromFields)(SlidingWindow.reified(), fields.update_data), intervalId: (0, reified_1.decodeFromFields)("u64", fields.interval_id), currIntervalPayouts: (0, reified_1.decodeFromFields)("u64", fields.curr_interval_payouts), nextIntervalRefreshTime: (0, reified_1.decodeFromFields)("u64", fields.next_interval_refresh_time), escrows: (0, reified_1.decodeFromFields)(structs_1.Bag.reified(), fields.escrows), friendKey: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.friend_key), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); };
    Aggregator.fromFieldsWithTypes = function (item) {
        if (!isAggregator(item.type)) {
            throw new Error("not a Aggregator type");
        }
        return Aggregator.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), authority: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.authority), queueAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.queue_addr), tokenAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.token_addr), batchSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.batch_size), minOracleResults: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_oracle_results), minUpdateDelaySeconds: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_update_delay_seconds), name: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.name), historyLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.history_limit), varianceThreshold: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.SwitchboardDecimal.reified(), item.fields.variance_threshold), forceReportPeriod: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.force_report_period), minJobResults: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_job_results), crankDisabled: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.crank_disabled), crankRowCount: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.crank_row_count), nextAllowedUpdateTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_allowed_update_time), createdAt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.created_at), readCharge: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.read_charge), rewardEscrow: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.reward_escrow), readWhitelist: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Bag.reified(), item.fields.read_whitelist), limitReadsToWhitelist: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.limit_reads_to_whitelist), updateData: (0, reified_1.decodeFromFieldsWithTypes)(SlidingWindow.reified(), item.fields.update_data), intervalId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.interval_id), currIntervalPayouts: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.curr_interval_payouts), nextIntervalRefreshTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_interval_refresh_time), escrows: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Bag.reified(), item.fields.escrows), friendKey: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.friend_key), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    };
    Aggregator.fromBcs = function (data) { return Aggregator.fromFields(Aggregator.bcs.parse(data)); };
    Aggregator.prototype.toJSONField = function () {
        return {
            id: this.id, authority: this.authority, queueAddr: this.queueAddr, tokenAddr: this.tokenAddr, batchSize: this.batchSize.toString(), minOracleResults: this.minOracleResults.toString(), minUpdateDelaySeconds: this.minUpdateDelaySeconds.toString(), name: (0, reified_1.fieldToJSON)("vector<u8>", this.name), historyLimit: this.historyLimit.toString(), varianceThreshold: this.varianceThreshold.toJSONField(), forceReportPeriod: this.forceReportPeriod.toString(), minJobResults: this.minJobResults.toString(), crankDisabled: this.crankDisabled, crankRowCount: this.crankRowCount, nextAllowedUpdateTime: this.nextAllowedUpdateTime.toString(), createdAt: this.createdAt.toString(), readCharge: this.readCharge.toString(), rewardEscrow: this.rewardEscrow, readWhitelist: this.readWhitelist.toJSONField(), limitReadsToWhitelist: this.limitReadsToWhitelist, updateData: this.updateData.toJSONField(), intervalId: this.intervalId.toString(), currIntervalPayouts: this.currIntervalPayouts.toString(), nextIntervalRefreshTime: this.nextIntervalRefreshTime.toString(), escrows: this.escrows.toJSONField(), friendKey: (0, reified_1.fieldToJSON)("vector<u8>", this.friendKey), version: this.version.toString(),
        };
    };
    Aggregator.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Aggregator.fromJSONField = function (field) { return Aggregator.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), authority: (0, reified_1.decodeFromJSONField)("address", field.authority), queueAddr: (0, reified_1.decodeFromJSONField)("address", field.queueAddr), tokenAddr: (0, reified_1.decodeFromJSONField)("address", field.tokenAddr), batchSize: (0, reified_1.decodeFromJSONField)("u64", field.batchSize), minOracleResults: (0, reified_1.decodeFromJSONField)("u64", field.minOracleResults), minUpdateDelaySeconds: (0, reified_1.decodeFromJSONField)("u64", field.minUpdateDelaySeconds), name: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.name), historyLimit: (0, reified_1.decodeFromJSONField)("u64", field.historyLimit), varianceThreshold: (0, reified_1.decodeFromJSONField)(structs_3.SwitchboardDecimal.reified(), field.varianceThreshold), forceReportPeriod: (0, reified_1.decodeFromJSONField)("u64", field.forceReportPeriod), minJobResults: (0, reified_1.decodeFromJSONField)("u64", field.minJobResults), crankDisabled: (0, reified_1.decodeFromJSONField)("bool", field.crankDisabled), crankRowCount: (0, reified_1.decodeFromJSONField)("u8", field.crankRowCount), nextAllowedUpdateTime: (0, reified_1.decodeFromJSONField)("u64", field.nextAllowedUpdateTime), createdAt: (0, reified_1.decodeFromJSONField)("u64", field.createdAt), readCharge: (0, reified_1.decodeFromJSONField)("u64", field.readCharge), rewardEscrow: (0, reified_1.decodeFromJSONField)("address", field.rewardEscrow), readWhitelist: (0, reified_1.decodeFromJSONField)(structs_1.Bag.reified(), field.readWhitelist), limitReadsToWhitelist: (0, reified_1.decodeFromJSONField)("bool", field.limitReadsToWhitelist), updateData: (0, reified_1.decodeFromJSONField)(SlidingWindow.reified(), field.updateData), intervalId: (0, reified_1.decodeFromJSONField)("u64", field.intervalId), currIntervalPayouts: (0, reified_1.decodeFromJSONField)("u64", field.currIntervalPayouts), nextIntervalRefreshTime: (0, reified_1.decodeFromJSONField)("u64", field.nextIntervalRefreshTime), escrows: (0, reified_1.decodeFromJSONField)(structs_1.Bag.reified(), field.escrows), friendKey: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.friendKey), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); };
    Aggregator.fromJSON = function (json) {
        if (json.$typeName !== Aggregator.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Aggregator.fromJSONField(json);
    };
    Aggregator.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAggregator(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Aggregator object"));
    } return Aggregator.fromFieldsWithTypes(content); };
    Aggregator.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Aggregator object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAggregator(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Aggregator object"));
                        }
                        return [2 /*return*/, Aggregator.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Aggregator.$typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::Aggregator";
    Aggregator.$numTypeParams = 0;
    return Aggregator;
}());
exports.Aggregator = Aggregator;
/* ============================== AggregatorHistoryData =============================== */
function isAggregatorHistoryData(type) { type = (0, util_1.compressSuiType)(type); return type === "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorHistoryData"; }
var AggregatorHistoryData = /** @class */ (function () {
    function AggregatorHistoryData(typeArgs, fields) {
        this.$typeName = AggregatorHistoryData.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AggregatorHistoryData.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.data = fields.data;
        ;
        this.historyWriteIdx = fields.historyWriteIdx;
    }
    AggregatorHistoryData.reified = function () {
        var _this = this;
        return { typeName: AggregatorHistoryData.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AggregatorHistoryData.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return AggregatorHistoryData.fromFields(fields); }, fromFieldsWithTypes: function (item) { return AggregatorHistoryData.fromFieldsWithTypes(item); }, fromBcs: function (data) { return AggregatorHistoryData.fromBcs(data); }, bcs: AggregatorHistoryData.bcs, fromJSONField: function (field) { return AggregatorHistoryData.fromJSONField(field); }, fromJSON: function (json) { return AggregatorHistoryData.fromJSON(json); }, fromSuiParsedData: function (content) { return AggregatorHistoryData.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AggregatorHistoryData.fetch(client, id)];
            }); }); }, new: function (fields) { return new AggregatorHistoryData([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(AggregatorHistoryData, "r", {
        get: function () { return AggregatorHistoryData.reified(); },
        enumerable: false,
        configurable: true
    });
    AggregatorHistoryData.phantom = function () { return (0, reified_1.phantom)(AggregatorHistoryData.reified()); };
    Object.defineProperty(AggregatorHistoryData, "p", {
        get: function () { return AggregatorHistoryData.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AggregatorHistoryData, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AggregatorHistoryData", {
                id: structs_2.UID.bcs, data: bcs_1.bcs.vector(AggregatorHistoryRow.bcs), history_write_idx: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    AggregatorHistoryData.fromFields = function (fields) { return AggregatorHistoryData.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), data: (0, reified_1.decodeFromFields)(reified.vector(AggregatorHistoryRow.reified()), fields.data), historyWriteIdx: (0, reified_1.decodeFromFields)("u64", fields.history_write_idx) }); };
    AggregatorHistoryData.fromFieldsWithTypes = function (item) {
        if (!isAggregatorHistoryData(item.type)) {
            throw new Error("not a AggregatorHistoryData type");
        }
        return AggregatorHistoryData.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), data: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(AggregatorHistoryRow.reified()), item.fields.data), historyWriteIdx: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.history_write_idx) });
    };
    AggregatorHistoryData.fromBcs = function (data) { return AggregatorHistoryData.fromFields(AggregatorHistoryData.bcs.parse(data)); };
    AggregatorHistoryData.prototype.toJSONField = function () {
        return {
            id: this.id, data: (0, reified_1.fieldToJSON)("vector<0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorHistoryRow>", this.data), historyWriteIdx: this.historyWriteIdx.toString(),
        };
    };
    AggregatorHistoryData.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    AggregatorHistoryData.fromJSONField = function (field) { return AggregatorHistoryData.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), data: (0, reified_1.decodeFromJSONField)(reified.vector(AggregatorHistoryRow.reified()), field.data), historyWriteIdx: (0, reified_1.decodeFromJSONField)("u64", field.historyWriteIdx) }); };
    AggregatorHistoryData.fromJSON = function (json) {
        if (json.$typeName !== AggregatorHistoryData.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AggregatorHistoryData.fromJSONField(json);
    };
    AggregatorHistoryData.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAggregatorHistoryData(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a AggregatorHistoryData object"));
    } return AggregatorHistoryData.fromFieldsWithTypes(content); };
    AggregatorHistoryData.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AggregatorHistoryData object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAggregatorHistoryData(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AggregatorHistoryData object"));
                        }
                        return [2 /*return*/, AggregatorHistoryData.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AggregatorHistoryData.$typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorHistoryData";
    AggregatorHistoryData.$numTypeParams = 0;
    return AggregatorHistoryData;
}());
exports.AggregatorHistoryData = AggregatorHistoryData;
/* ============================== AggregatorHistoryRow =============================== */
function isAggregatorHistoryRow(type) { type = (0, util_1.compressSuiType)(type); return type === "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorHistoryRow"; }
var AggregatorHistoryRow = /** @class */ (function () {
    function AggregatorHistoryRow(typeArgs, fields) {
        this.$typeName = AggregatorHistoryRow.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AggregatorHistoryRow.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.value = fields.value;
        ;
        this.timestamp = fields.timestamp;
    }
    AggregatorHistoryRow.reified = function () {
        var _this = this;
        return { typeName: AggregatorHistoryRow.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AggregatorHistoryRow.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return AggregatorHistoryRow.fromFields(fields); }, fromFieldsWithTypes: function (item) { return AggregatorHistoryRow.fromFieldsWithTypes(item); }, fromBcs: function (data) { return AggregatorHistoryRow.fromBcs(data); }, bcs: AggregatorHistoryRow.bcs, fromJSONField: function (field) { return AggregatorHistoryRow.fromJSONField(field); }, fromJSON: function (json) { return AggregatorHistoryRow.fromJSON(json); }, fromSuiParsedData: function (content) { return AggregatorHistoryRow.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AggregatorHistoryRow.fetch(client, id)];
            }); }); }, new: function (fields) { return new AggregatorHistoryRow([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(AggregatorHistoryRow, "r", {
        get: function () { return AggregatorHistoryRow.reified(); },
        enumerable: false,
        configurable: true
    });
    AggregatorHistoryRow.phantom = function () { return (0, reified_1.phantom)(AggregatorHistoryRow.reified()); };
    Object.defineProperty(AggregatorHistoryRow, "p", {
        get: function () { return AggregatorHistoryRow.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AggregatorHistoryRow, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AggregatorHistoryRow", {
                value: structs_3.SwitchboardDecimal.bcs, timestamp: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    AggregatorHistoryRow.fromFields = function (fields) { return AggregatorHistoryRow.reified().new({ value: (0, reified_1.decodeFromFields)(structs_3.SwitchboardDecimal.reified(), fields.value), timestamp: (0, reified_1.decodeFromFields)("u64", fields.timestamp) }); };
    AggregatorHistoryRow.fromFieldsWithTypes = function (item) {
        if (!isAggregatorHistoryRow(item.type)) {
            throw new Error("not a AggregatorHistoryRow type");
        }
        return AggregatorHistoryRow.reified().new({ value: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.SwitchboardDecimal.reified(), item.fields.value), timestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.timestamp) });
    };
    AggregatorHistoryRow.fromBcs = function (data) { return AggregatorHistoryRow.fromFields(AggregatorHistoryRow.bcs.parse(data)); };
    AggregatorHistoryRow.prototype.toJSONField = function () {
        return {
            value: this.value.toJSONField(), timestamp: this.timestamp.toString(),
        };
    };
    AggregatorHistoryRow.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    AggregatorHistoryRow.fromJSONField = function (field) { return AggregatorHistoryRow.reified().new({ value: (0, reified_1.decodeFromJSONField)(structs_3.SwitchboardDecimal.reified(), field.value), timestamp: (0, reified_1.decodeFromJSONField)("u64", field.timestamp) }); };
    AggregatorHistoryRow.fromJSON = function (json) {
        if (json.$typeName !== AggregatorHistoryRow.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AggregatorHistoryRow.fromJSONField(json);
    };
    AggregatorHistoryRow.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAggregatorHistoryRow(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a AggregatorHistoryRow object"));
    } return AggregatorHistoryRow.fromFieldsWithTypes(content); };
    AggregatorHistoryRow.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AggregatorHistoryRow object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAggregatorHistoryRow(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AggregatorHistoryRow object"));
                        }
                        return [2 /*return*/, AggregatorHistoryRow.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AggregatorHistoryRow.$typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorHistoryRow";
    AggregatorHistoryRow.$numTypeParams = 0;
    return AggregatorHistoryRow;
}());
exports.AggregatorHistoryRow = AggregatorHistoryRow;
/* ============================== AggregatorJobData =============================== */
function isAggregatorJobData(type) { type = (0, util_1.compressSuiType)(type); return type === "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorJobData"; }
var AggregatorJobData = /** @class */ (function () {
    function AggregatorJobData(typeArgs, fields) {
        this.$typeName = AggregatorJobData.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AggregatorJobData.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.jobKeys = fields.jobKeys;
        ;
        this.jobWeights = fields.jobWeights;
        ;
        this.jobsChecksum = fields.jobsChecksum;
    }
    AggregatorJobData.reified = function () {
        var _this = this;
        return { typeName: AggregatorJobData.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AggregatorJobData.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return AggregatorJobData.fromFields(fields); }, fromFieldsWithTypes: function (item) { return AggregatorJobData.fromFieldsWithTypes(item); }, fromBcs: function (data) { return AggregatorJobData.fromBcs(data); }, bcs: AggregatorJobData.bcs, fromJSONField: function (field) { return AggregatorJobData.fromJSONField(field); }, fromJSON: function (json) { return AggregatorJobData.fromJSON(json); }, fromSuiParsedData: function (content) { return AggregatorJobData.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AggregatorJobData.fetch(client, id)];
            }); }); }, new: function (fields) { return new AggregatorJobData([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(AggregatorJobData, "r", {
        get: function () { return AggregatorJobData.reified(); },
        enumerable: false,
        configurable: true
    });
    AggregatorJobData.phantom = function () { return (0, reified_1.phantom)(AggregatorJobData.reified()); };
    Object.defineProperty(AggregatorJobData, "p", {
        get: function () { return AggregatorJobData.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AggregatorJobData, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AggregatorJobData", {
                id: structs_2.UID.bcs, job_keys: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, })), job_weights: bcs_1.bcs.vector(bcs_1.bcs.u8()), jobs_checksum: bcs_1.bcs.vector(bcs_1.bcs.u8())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    AggregatorJobData.fromFields = function (fields) { return AggregatorJobData.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), jobKeys: (0, reified_1.decodeFromFields)(reified.vector("address"), fields.job_keys), jobWeights: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.job_weights), jobsChecksum: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.jobs_checksum) }); };
    AggregatorJobData.fromFieldsWithTypes = function (item) {
        if (!isAggregatorJobData(item.type)) {
            throw new Error("not a AggregatorJobData type");
        }
        return AggregatorJobData.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), jobKeys: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("address"), item.fields.job_keys), jobWeights: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.job_weights), jobsChecksum: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.jobs_checksum) });
    };
    AggregatorJobData.fromBcs = function (data) { return AggregatorJobData.fromFields(AggregatorJobData.bcs.parse(data)); };
    AggregatorJobData.prototype.toJSONField = function () {
        return {
            id: this.id, jobKeys: (0, reified_1.fieldToJSON)("vector<address>", this.jobKeys), jobWeights: (0, reified_1.fieldToJSON)("vector<u8>", this.jobWeights), jobsChecksum: (0, reified_1.fieldToJSON)("vector<u8>", this.jobsChecksum),
        };
    };
    AggregatorJobData.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    AggregatorJobData.fromJSONField = function (field) { return AggregatorJobData.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), jobKeys: (0, reified_1.decodeFromJSONField)(reified.vector("address"), field.jobKeys), jobWeights: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.jobWeights), jobsChecksum: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.jobsChecksum) }); };
    AggregatorJobData.fromJSON = function (json) {
        if (json.$typeName !== AggregatorJobData.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AggregatorJobData.fromJSONField(json);
    };
    AggregatorJobData.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAggregatorJobData(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a AggregatorJobData object"));
    } return AggregatorJobData.fromFieldsWithTypes(content); };
    AggregatorJobData.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AggregatorJobData object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAggregatorJobData(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AggregatorJobData object"));
                        }
                        return [2 /*return*/, AggregatorJobData.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AggregatorJobData.$typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorJobData";
    AggregatorJobData.$numTypeParams = 0;
    return AggregatorJobData;
}());
exports.AggregatorJobData = AggregatorJobData;
/* ============================== SlidingWindow =============================== */
function isSlidingWindow(type) { type = (0, util_1.compressSuiType)(type); return type === "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::SlidingWindow"; }
var SlidingWindow = /** @class */ (function () {
    function SlidingWindow(typeArgs, fields) {
        this.$typeName = SlidingWindow.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SlidingWindow.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.data = fields.data;
        ;
        this.latestResult = fields.latestResult;
        ;
        this.latestTimestamp = fields.latestTimestamp;
    }
    SlidingWindow.reified = function () {
        var _this = this;
        return { typeName: SlidingWindow.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([SlidingWindow.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return SlidingWindow.fromFields(fields); }, fromFieldsWithTypes: function (item) { return SlidingWindow.fromFieldsWithTypes(item); }, fromBcs: function (data) { return SlidingWindow.fromBcs(data); }, bcs: SlidingWindow.bcs, fromJSONField: function (field) { return SlidingWindow.fromJSONField(field); }, fromJSON: function (json) { return SlidingWindow.fromJSON(json); }, fromSuiParsedData: function (content) { return SlidingWindow.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, SlidingWindow.fetch(client, id)];
            }); }); }, new: function (fields) { return new SlidingWindow([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(SlidingWindow, "r", {
        get: function () { return SlidingWindow.reified(); },
        enumerable: false,
        configurable: true
    });
    SlidingWindow.phantom = function () { return (0, reified_1.phantom)(SlidingWindow.reified()); };
    Object.defineProperty(SlidingWindow, "p", {
        get: function () { return SlidingWindow.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlidingWindow, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("SlidingWindow", {
                data: bcs_1.bcs.vector(SlidingWindowElement.bcs), latest_result: structs_3.SwitchboardDecimal.bcs, latest_timestamp: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    SlidingWindow.fromFields = function (fields) { return SlidingWindow.reified().new({ data: (0, reified_1.decodeFromFields)(reified.vector(SlidingWindowElement.reified()), fields.data), latestResult: (0, reified_1.decodeFromFields)(structs_3.SwitchboardDecimal.reified(), fields.latest_result), latestTimestamp: (0, reified_1.decodeFromFields)("u64", fields.latest_timestamp) }); };
    SlidingWindow.fromFieldsWithTypes = function (item) {
        if (!isSlidingWindow(item.type)) {
            throw new Error("not a SlidingWindow type");
        }
        return SlidingWindow.reified().new({ data: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(SlidingWindowElement.reified()), item.fields.data), latestResult: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.SwitchboardDecimal.reified(), item.fields.latest_result), latestTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.latest_timestamp) });
    };
    SlidingWindow.fromBcs = function (data) { return SlidingWindow.fromFields(SlidingWindow.bcs.parse(data)); };
    SlidingWindow.prototype.toJSONField = function () {
        return {
            data: (0, reified_1.fieldToJSON)("vector<0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::SlidingWindowElement>", this.data), latestResult: this.latestResult.toJSONField(), latestTimestamp: this.latestTimestamp.toString(),
        };
    };
    SlidingWindow.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    SlidingWindow.fromJSONField = function (field) { return SlidingWindow.reified().new({ data: (0, reified_1.decodeFromJSONField)(reified.vector(SlidingWindowElement.reified()), field.data), latestResult: (0, reified_1.decodeFromJSONField)(structs_3.SwitchboardDecimal.reified(), field.latestResult), latestTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.latestTimestamp) }); };
    SlidingWindow.fromJSON = function (json) {
        if (json.$typeName !== SlidingWindow.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SlidingWindow.fromJSONField(json);
    };
    SlidingWindow.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSlidingWindow(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a SlidingWindow object"));
    } return SlidingWindow.fromFieldsWithTypes(content); };
    SlidingWindow.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching SlidingWindow object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSlidingWindow(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a SlidingWindow object"));
                        }
                        return [2 /*return*/, SlidingWindow.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    SlidingWindow.$typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::SlidingWindow";
    SlidingWindow.$numTypeParams = 0;
    return SlidingWindow;
}());
exports.SlidingWindow = SlidingWindow;
/* ============================== SlidingWindowElement =============================== */
function isSlidingWindowElement(type) { type = (0, util_1.compressSuiType)(type); return type === "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::SlidingWindowElement"; }
var SlidingWindowElement = /** @class */ (function () {
    function SlidingWindowElement(typeArgs, fields) {
        this.$typeName = SlidingWindowElement.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SlidingWindowElement.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.oracleAddr = fields.oracleAddr;
        ;
        this.value = fields.value;
        ;
        this.timestamp = fields.timestamp;
    }
    SlidingWindowElement.reified = function () {
        var _this = this;
        return { typeName: SlidingWindowElement.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([SlidingWindowElement.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return SlidingWindowElement.fromFields(fields); }, fromFieldsWithTypes: function (item) { return SlidingWindowElement.fromFieldsWithTypes(item); }, fromBcs: function (data) { return SlidingWindowElement.fromBcs(data); }, bcs: SlidingWindowElement.bcs, fromJSONField: function (field) { return SlidingWindowElement.fromJSONField(field); }, fromJSON: function (json) { return SlidingWindowElement.fromJSON(json); }, fromSuiParsedData: function (content) { return SlidingWindowElement.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, SlidingWindowElement.fetch(client, id)];
            }); }); }, new: function (fields) { return new SlidingWindowElement([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(SlidingWindowElement, "r", {
        get: function () { return SlidingWindowElement.reified(); },
        enumerable: false,
        configurable: true
    });
    SlidingWindowElement.phantom = function () { return (0, reified_1.phantom)(SlidingWindowElement.reified()); };
    Object.defineProperty(SlidingWindowElement, "p", {
        get: function () { return SlidingWindowElement.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlidingWindowElement, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("SlidingWindowElement", {
                oracle_addr: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), value: structs_3.SwitchboardDecimal.bcs, timestamp: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    SlidingWindowElement.fromFields = function (fields) { return SlidingWindowElement.reified().new({ oracleAddr: (0, reified_1.decodeFromFields)("address", fields.oracle_addr), value: (0, reified_1.decodeFromFields)(structs_3.SwitchboardDecimal.reified(), fields.value), timestamp: (0, reified_1.decodeFromFields)("u64", fields.timestamp) }); };
    SlidingWindowElement.fromFieldsWithTypes = function (item) {
        if (!isSlidingWindowElement(item.type)) {
            throw new Error("not a SlidingWindowElement type");
        }
        return SlidingWindowElement.reified().new({ oracleAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.oracle_addr), value: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.SwitchboardDecimal.reified(), item.fields.value), timestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.timestamp) });
    };
    SlidingWindowElement.fromBcs = function (data) { return SlidingWindowElement.fromFields(SlidingWindowElement.bcs.parse(data)); };
    SlidingWindowElement.prototype.toJSONField = function () {
        return {
            oracleAddr: this.oracleAddr, value: this.value.toJSONField(), timestamp: this.timestamp.toString(),
        };
    };
    SlidingWindowElement.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    SlidingWindowElement.fromJSONField = function (field) { return SlidingWindowElement.reified().new({ oracleAddr: (0, reified_1.decodeFromJSONField)("address", field.oracleAddr), value: (0, reified_1.decodeFromJSONField)(structs_3.SwitchboardDecimal.reified(), field.value), timestamp: (0, reified_1.decodeFromJSONField)("u64", field.timestamp) }); };
    SlidingWindowElement.fromJSON = function (json) {
        if (json.$typeName !== SlidingWindowElement.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SlidingWindowElement.fromJSONField(json);
    };
    SlidingWindowElement.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSlidingWindowElement(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a SlidingWindowElement object"));
    } return SlidingWindowElement.fromFieldsWithTypes(content); };
    SlidingWindowElement.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching SlidingWindowElement object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSlidingWindowElement(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a SlidingWindowElement object"));
                        }
                        return [2 /*return*/, SlidingWindowElement.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    SlidingWindowElement.$typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::SlidingWindowElement";
    SlidingWindowElement.$numTypeParams = 0;
    return SlidingWindowElement;
}());
exports.SlidingWindowElement = SlidingWindowElement;
