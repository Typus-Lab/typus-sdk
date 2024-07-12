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
exports.UpdateSpotConfigEvent = exports.UpdateMarginConfigEvent = exports.UpdateLiquidityValueEvent = exports.UpdateBorrowInfoEvent = exports.TokenPool = exports.SwapEvent = exports.SuspendTokenPoolEvent = exports.SuspendPoolEvent = exports.SpotConfig = exports.ResumeTokenPoolEvent = exports.ResumePoolEvent = exports.Registry = exports.NewLiquidityPoolEvent = exports.MintLpEvent = exports.MarginConfig = exports.LiquidityPoolInfo = exports.LiquidityPool = exports.BurnLpEvent = exports.AddLiquidityTokenEvent = exports.State = exports.Config = void 0;
exports.isConfig = isConfig;
exports.isState = isState;
exports.isAddLiquidityTokenEvent = isAddLiquidityTokenEvent;
exports.isBurnLpEvent = isBurnLpEvent;
exports.isLiquidityPool = isLiquidityPool;
exports.isLiquidityPoolInfo = isLiquidityPoolInfo;
exports.isMarginConfig = isMarginConfig;
exports.isMintLpEvent = isMintLpEvent;
exports.isNewLiquidityPoolEvent = isNewLiquidityPoolEvent;
exports.isRegistry = isRegistry;
exports.isResumePoolEvent = isResumePoolEvent;
exports.isResumeTokenPoolEvent = isResumeTokenPoolEvent;
exports.isSpotConfig = isSpotConfig;
exports.isSuspendPoolEvent = isSuspendPoolEvent;
exports.isSuspendTokenPoolEvent = isSuspendTokenPoolEvent;
exports.isSwapEvent = isSwapEvent;
exports.isTokenPool = isTokenPool;
exports.isUpdateBorrowInfoEvent = isUpdateBorrowInfoEvent;
exports.isUpdateLiquidityValueEvent = isUpdateLiquidityValueEvent;
exports.isUpdateMarginConfigEvent = isUpdateMarginConfigEvent;
exports.isUpdateSpotConfigEvent = isUpdateSpotConfigEvent;
var reified = __importStar(require("../../_framework/reified"));
var structs_1 = require("../../_dependencies/source/0x1/type-name/structs");
var structs_2 = require("../../_dependencies/source/0x2/object/structs");
var reified_1 = require("../../_framework/reified");
var util_1 = require("../../_framework/util");
var bcs_1 = require("@mysten/bcs");
/* ============================== Config =============================== */
function isConfig(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Config";
}
var Config = /** @class */ (function () {
    function Config(typeArgs, fields) {
        this.$typeName = Config.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Config.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.oracleId = fields.oracleId;
        this.liquidityTokenDecimal = fields.liquidityTokenDecimal;
        this.spotConfig = fields.spotConfig;
        this.marginConfig = fields.marginConfig;
        this.u64Padding = fields.u64Padding;
    }
    Config.reified = function () {
        var _this = this;
        return {
            typeName: Config.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Config.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return Config.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return Config.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return Config.fromBcs(data); },
            bcs: Config.bcs,
            fromJSONField: function (field) { return Config.fromJSONField(field); },
            fromJSON: function (json) { return Config.fromJSON(json); },
            fromSuiParsedData: function (content) { return Config.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Config.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new Config([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(Config, "r", {
        get: function () {
            return Config.reified();
        },
        enumerable: false,
        configurable: true
    });
    Config.phantom = function () {
        return (0, reified_1.phantom)(Config.reified());
    };
    Object.defineProperty(Config, "p", {
        get: function () {
            return Config.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Config, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Config", {
                oracle_id: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                liquidity_token_decimal: bcs_1.bcs.u64(),
                spot_config: SpotConfig.bcs,
                margin_config: MarginConfig.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    Config.fromFields = function (fields) {
        return Config.reified().new({
            oracleId: (0, reified_1.decodeFromFields)("address", fields.oracle_id),
            liquidityTokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.liquidity_token_decimal),
            spotConfig: (0, reified_1.decodeFromFields)(SpotConfig.reified(), fields.spot_config),
            marginConfig: (0, reified_1.decodeFromFields)(MarginConfig.reified(), fields.margin_config),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    Config.fromFieldsWithTypes = function (item) {
        if (!isConfig(item.type)) {
            throw new Error("not a Config type");
        }
        return Config.reified().new({
            oracleId: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.oracle_id),
            liquidityTokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.liquidity_token_decimal),
            spotConfig: (0, reified_1.decodeFromFieldsWithTypes)(SpotConfig.reified(), item.fields.spot_config),
            marginConfig: (0, reified_1.decodeFromFieldsWithTypes)(MarginConfig.reified(), item.fields.margin_config),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    Config.fromBcs = function (data) {
        return Config.fromFields(Config.bcs.parse(data));
    };
    Config.prototype.toJSONField = function () {
        return {
            oracleId: this.oracleId,
            liquidityTokenDecimal: this.liquidityTokenDecimal.toString(),
            spotConfig: this.spotConfig.toJSONField(),
            marginConfig: this.marginConfig.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    Config.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    Config.fromJSONField = function (field) {
        return Config.reified().new({
            oracleId: (0, reified_1.decodeFromJSONField)("address", field.oracleId),
            liquidityTokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.liquidityTokenDecimal),
            spotConfig: (0, reified_1.decodeFromJSONField)(SpotConfig.reified(), field.spotConfig),
            marginConfig: (0, reified_1.decodeFromJSONField)(MarginConfig.reified(), field.marginConfig),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    Config.fromJSON = function (json) {
        if (json.$typeName !== Config.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return Config.fromJSONField(json);
    };
    Config.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isConfig(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a Config object"));
        }
        return Config.fromFieldsWithTypes(content);
    };
    Config.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Config object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isConfig(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Config object"));
                        }
                        return [2 /*return*/, Config.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Config.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Config";
    Config.$numTypeParams = 0;
    return Config;
}());
exports.Config = Config;
/* ============================== State =============================== */
function isState(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::State";
}
var State = /** @class */ (function () {
    function State(typeArgs, fields) {
        this.$typeName = State.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([State.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.liquidityAmount = fields.liquidityAmount;
        this.valueInUsd = fields.valueInUsd;
        this.reservedAmount = fields.reservedAmount;
        this.updateTsMs = fields.updateTsMs;
        this.isActive = fields.isActive;
        this.lastBorrowRateTsMs = fields.lastBorrowRateTsMs;
        this.cumulativeBorrowRate = fields.cumulativeBorrowRate;
        this.previousLastBorrowRateTsMs = fields.previousLastBorrowRateTsMs;
        this.previousCumulativeBorrowRate = fields.previousCumulativeBorrowRate;
        this.u64Padding = fields.u64Padding;
    }
    State.reified = function () {
        var _this = this;
        return {
            typeName: State.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([State.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return State.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return State.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return State.fromBcs(data); },
            bcs: State.bcs,
            fromJSONField: function (field) { return State.fromJSONField(field); },
            fromJSON: function (json) { return State.fromJSON(json); },
            fromSuiParsedData: function (content) { return State.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, State.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new State([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(State, "r", {
        get: function () {
            return State.reified();
        },
        enumerable: false,
        configurable: true
    });
    State.phantom = function () {
        return (0, reified_1.phantom)(State.reified());
    };
    Object.defineProperty(State, "p", {
        get: function () {
            return State.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(State, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("State", {
                liquidity_amount: bcs_1.bcs.u64(),
                value_in_usd: bcs_1.bcs.u64(),
                reserved_amount: bcs_1.bcs.u64(),
                update_ts_ms: bcs_1.bcs.u64(),
                is_active: bcs_1.bcs.bool(),
                last_borrow_rate_ts_ms: bcs_1.bcs.u64(),
                cumulative_borrow_rate: bcs_1.bcs.u64(),
                previous_last_borrow_rate_ts_ms: bcs_1.bcs.u64(),
                previous_cumulative_borrow_rate: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    State.fromFields = function (fields) {
        return State.reified().new({
            liquidityAmount: (0, reified_1.decodeFromFields)("u64", fields.liquidity_amount),
            valueInUsd: (0, reified_1.decodeFromFields)("u64", fields.value_in_usd),
            reservedAmount: (0, reified_1.decodeFromFields)("u64", fields.reserved_amount),
            updateTsMs: (0, reified_1.decodeFromFields)("u64", fields.update_ts_ms),
            isActive: (0, reified_1.decodeFromFields)("bool", fields.is_active),
            lastBorrowRateTsMs: (0, reified_1.decodeFromFields)("u64", fields.last_borrow_rate_ts_ms),
            cumulativeBorrowRate: (0, reified_1.decodeFromFields)("u64", fields.cumulative_borrow_rate),
            previousLastBorrowRateTsMs: (0, reified_1.decodeFromFields)("u64", fields.previous_last_borrow_rate_ts_ms),
            previousCumulativeBorrowRate: (0, reified_1.decodeFromFields)("u64", fields.previous_cumulative_borrow_rate),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    State.fromFieldsWithTypes = function (item) {
        if (!isState(item.type)) {
            throw new Error("not a State type");
        }
        return State.reified().new({
            liquidityAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.liquidity_amount),
            valueInUsd: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.value_in_usd),
            reservedAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.reserved_amount),
            updateTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.update_ts_ms),
            isActive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_active),
            lastBorrowRateTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_borrow_rate_ts_ms),
            cumulativeBorrowRate: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cumulative_borrow_rate),
            previousLastBorrowRateTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.previous_last_borrow_rate_ts_ms),
            previousCumulativeBorrowRate: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.previous_cumulative_borrow_rate),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    State.fromBcs = function (data) {
        return State.fromFields(State.bcs.parse(data));
    };
    State.prototype.toJSONField = function () {
        return {
            liquidityAmount: this.liquidityAmount.toString(),
            valueInUsd: this.valueInUsd.toString(),
            reservedAmount: this.reservedAmount.toString(),
            updateTsMs: this.updateTsMs.toString(),
            isActive: this.isActive,
            lastBorrowRateTsMs: this.lastBorrowRateTsMs.toString(),
            cumulativeBorrowRate: this.cumulativeBorrowRate.toString(),
            previousLastBorrowRateTsMs: this.previousLastBorrowRateTsMs.toString(),
            previousCumulativeBorrowRate: this.previousCumulativeBorrowRate.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    State.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    State.fromJSONField = function (field) {
        return State.reified().new({
            liquidityAmount: (0, reified_1.decodeFromJSONField)("u64", field.liquidityAmount),
            valueInUsd: (0, reified_1.decodeFromJSONField)("u64", field.valueInUsd),
            reservedAmount: (0, reified_1.decodeFromJSONField)("u64", field.reservedAmount),
            updateTsMs: (0, reified_1.decodeFromJSONField)("u64", field.updateTsMs),
            isActive: (0, reified_1.decodeFromJSONField)("bool", field.isActive),
            lastBorrowRateTsMs: (0, reified_1.decodeFromJSONField)("u64", field.lastBorrowRateTsMs),
            cumulativeBorrowRate: (0, reified_1.decodeFromJSONField)("u64", field.cumulativeBorrowRate),
            previousLastBorrowRateTsMs: (0, reified_1.decodeFromJSONField)("u64", field.previousLastBorrowRateTsMs),
            previousCumulativeBorrowRate: (0, reified_1.decodeFromJSONField)("u64", field.previousCumulativeBorrowRate),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    State.fromJSON = function (json) {
        if (json.$typeName !== State.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return State.fromJSONField(json);
    };
    State.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isState(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a State object"));
        }
        return State.fromFieldsWithTypes(content);
    };
    State.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching State object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isState(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a State object"));
                        }
                        return [2 /*return*/, State.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    State.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::State";
    State.$numTypeParams = 0;
    return State;
}());
exports.State = State;
/* ============================== AddLiquidityTokenEvent =============================== */
function isAddLiquidityTokenEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::AddLiquidityTokenEvent";
}
var AddLiquidityTokenEvent = /** @class */ (function () {
    function AddLiquidityTokenEvent(typeArgs, fields) {
        this.$typeName = AddLiquidityTokenEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AddLiquidityTokenEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.tokenType = fields.tokenType;
        this.config = fields.config;
        this.state = fields.state;
        this.u64Padding = fields.u64Padding;
    }
    AddLiquidityTokenEvent.reified = function () {
        var _this = this;
        return {
            typeName: AddLiquidityTokenEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AddLiquidityTokenEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return AddLiquidityTokenEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return AddLiquidityTokenEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return AddLiquidityTokenEvent.fromBcs(data); },
            bcs: AddLiquidityTokenEvent.bcs,
            fromJSONField: function (field) { return AddLiquidityTokenEvent.fromJSONField(field); },
            fromJSON: function (json) { return AddLiquidityTokenEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return AddLiquidityTokenEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AddLiquidityTokenEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new AddLiquidityTokenEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(AddLiquidityTokenEvent, "r", {
        get: function () {
            return AddLiquidityTokenEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    AddLiquidityTokenEvent.phantom = function () {
        return (0, reified_1.phantom)(AddLiquidityTokenEvent.reified());
    };
    Object.defineProperty(AddLiquidityTokenEvent, "p", {
        get: function () {
            return AddLiquidityTokenEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddLiquidityTokenEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AddLiquidityTokenEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                token_type: structs_1.TypeName.bcs,
                config: Config.bcs,
                state: State.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    AddLiquidityTokenEvent.fromFields = function (fields) {
        return AddLiquidityTokenEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            tokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token_type),
            config: (0, reified_1.decodeFromFields)(Config.reified(), fields.config),
            state: (0, reified_1.decodeFromFields)(State.reified(), fields.state),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    AddLiquidityTokenEvent.fromFieldsWithTypes = function (item) {
        if (!isAddLiquidityTokenEvent(item.type)) {
            throw new Error("not a AddLiquidityTokenEvent type");
        }
        return AddLiquidityTokenEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            tokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token_type),
            config: (0, reified_1.decodeFromFieldsWithTypes)(Config.reified(), item.fields.config),
            state: (0, reified_1.decodeFromFieldsWithTypes)(State.reified(), item.fields.state),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    AddLiquidityTokenEvent.fromBcs = function (data) {
        return AddLiquidityTokenEvent.fromFields(AddLiquidityTokenEvent.bcs.parse(data));
    };
    AddLiquidityTokenEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            tokenType: this.tokenType.toJSONField(),
            config: this.config.toJSONField(),
            state: this.state.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    AddLiquidityTokenEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    AddLiquidityTokenEvent.fromJSONField = function (field) {
        return AddLiquidityTokenEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            tokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.tokenType),
            config: (0, reified_1.decodeFromJSONField)(Config.reified(), field.config),
            state: (0, reified_1.decodeFromJSONField)(State.reified(), field.state),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    AddLiquidityTokenEvent.fromJSON = function (json) {
        if (json.$typeName !== AddLiquidityTokenEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return AddLiquidityTokenEvent.fromJSONField(json);
    };
    AddLiquidityTokenEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddLiquidityTokenEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a AddLiquidityTokenEvent object"));
        }
        return AddLiquidityTokenEvent.fromFieldsWithTypes(content);
    };
    AddLiquidityTokenEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AddLiquidityTokenEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAddLiquidityTokenEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AddLiquidityTokenEvent object"));
                        }
                        return [2 /*return*/, AddLiquidityTokenEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AddLiquidityTokenEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::AddLiquidityTokenEvent";
    AddLiquidityTokenEvent.$numTypeParams = 0;
    return AddLiquidityTokenEvent;
}());
exports.AddLiquidityTokenEvent = AddLiquidityTokenEvent;
/* ============================== BurnLpEvent =============================== */
function isBurnLpEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::BurnLpEvent";
}
var BurnLpEvent = /** @class */ (function () {
    function BurnLpEvent(typeArgs, fields) {
        this.$typeName = BurnLpEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([BurnLpEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.burnLpAmount = fields.burnLpAmount;
        this.burnAmountUsd = fields.burnAmountUsd;
        this.burnFeeUsd = fields.burnFeeUsd;
        this.liquidityTokenType = fields.liquidityTokenType;
        this.withdrawTokenAmount = fields.withdrawTokenAmount;
        this.u64Padding = fields.u64Padding;
    }
    BurnLpEvent.reified = function () {
        var _this = this;
        return {
            typeName: BurnLpEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([BurnLpEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return BurnLpEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return BurnLpEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return BurnLpEvent.fromBcs(data); },
            bcs: BurnLpEvent.bcs,
            fromJSONField: function (field) { return BurnLpEvent.fromJSONField(field); },
            fromJSON: function (json) { return BurnLpEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return BurnLpEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, BurnLpEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new BurnLpEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(BurnLpEvent, "r", {
        get: function () {
            return BurnLpEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    BurnLpEvent.phantom = function () {
        return (0, reified_1.phantom)(BurnLpEvent.reified());
    };
    Object.defineProperty(BurnLpEvent, "p", {
        get: function () {
            return BurnLpEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BurnLpEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("BurnLpEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                lp_token_type: structs_1.TypeName.bcs,
                burn_lp_amount: bcs_1.bcs.u64(),
                burn_amount_usd: bcs_1.bcs.u64(),
                burn_fee_usd: bcs_1.bcs.u64(),
                liquidity_token_type: structs_1.TypeName.bcs,
                withdraw_token_amount: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    BurnLpEvent.fromFields = function (fields) {
        return BurnLpEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            lpTokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.lp_token_type),
            burnLpAmount: (0, reified_1.decodeFromFields)("u64", fields.burn_lp_amount),
            burnAmountUsd: (0, reified_1.decodeFromFields)("u64", fields.burn_amount_usd),
            burnFeeUsd: (0, reified_1.decodeFromFields)("u64", fields.burn_fee_usd),
            liquidityTokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.liquidity_token_type),
            withdrawTokenAmount: (0, reified_1.decodeFromFields)("u64", fields.withdraw_token_amount),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    BurnLpEvent.fromFieldsWithTypes = function (item) {
        if (!isBurnLpEvent(item.type)) {
            throw new Error("not a BurnLpEvent type");
        }
        return BurnLpEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            lpTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.lp_token_type),
            burnLpAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.burn_lp_amount),
            burnAmountUsd: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.burn_amount_usd),
            burnFeeUsd: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.burn_fee_usd),
            liquidityTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.liquidity_token_type),
            withdrawTokenAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.withdraw_token_amount),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    BurnLpEvent.fromBcs = function (data) {
        return BurnLpEvent.fromFields(BurnLpEvent.bcs.parse(data));
    };
    BurnLpEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            burnLpAmount: this.burnLpAmount.toString(),
            burnAmountUsd: this.burnAmountUsd.toString(),
            burnFeeUsd: this.burnFeeUsd.toString(),
            liquidityTokenType: this.liquidityTokenType.toJSONField(),
            withdrawTokenAmount: this.withdrawTokenAmount.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    BurnLpEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    BurnLpEvent.fromJSONField = function (field) {
        return BurnLpEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            lpTokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.lpTokenType),
            burnLpAmount: (0, reified_1.decodeFromJSONField)("u64", field.burnLpAmount),
            burnAmountUsd: (0, reified_1.decodeFromJSONField)("u64", field.burnAmountUsd),
            burnFeeUsd: (0, reified_1.decodeFromJSONField)("u64", field.burnFeeUsd),
            liquidityTokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.liquidityTokenType),
            withdrawTokenAmount: (0, reified_1.decodeFromJSONField)("u64", field.withdrawTokenAmount),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    BurnLpEvent.fromJSON = function (json) {
        if (json.$typeName !== BurnLpEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return BurnLpEvent.fromJSONField(json);
    };
    BurnLpEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBurnLpEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a BurnLpEvent object"));
        }
        return BurnLpEvent.fromFieldsWithTypes(content);
    };
    BurnLpEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching BurnLpEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBurnLpEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a BurnLpEvent object"));
                        }
                        return [2 /*return*/, BurnLpEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    BurnLpEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::BurnLpEvent";
    BurnLpEvent.$numTypeParams = 0;
    return BurnLpEvent;
}());
exports.BurnLpEvent = BurnLpEvent;
/* ============================== LiquidityPool =============================== */
function isLiquidityPool(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPool";
}
var LiquidityPool = /** @class */ (function () {
    function LiquidityPool(typeArgs, fields) {
        this.$typeName = LiquidityPool.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([LiquidityPool.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.liquidityTokens = fields.liquidityTokens;
        this.tokenPools = fields.tokenPools;
        this.poolInfo = fields.poolInfo;
        this.u64Padding = fields.u64Padding;
        this.bcsPadding = fields.bcsPadding;
    }
    LiquidityPool.reified = function () {
        var _this = this;
        return {
            typeName: LiquidityPool.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([LiquidityPool.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return LiquidityPool.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return LiquidityPool.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return LiquidityPool.fromBcs(data); },
            bcs: LiquidityPool.bcs,
            fromJSONField: function (field) { return LiquidityPool.fromJSONField(field); },
            fromJSON: function (json) { return LiquidityPool.fromJSON(json); },
            fromSuiParsedData: function (content) { return LiquidityPool.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, LiquidityPool.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new LiquidityPool([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(LiquidityPool, "r", {
        get: function () {
            return LiquidityPool.reified();
        },
        enumerable: false,
        configurable: true
    });
    LiquidityPool.phantom = function () {
        return (0, reified_1.phantom)(LiquidityPool.reified());
    };
    Object.defineProperty(LiquidityPool, "p", {
        get: function () {
            return LiquidityPool.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LiquidityPool, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("LiquidityPool", {
                id: structs_2.UID.bcs,
                index: bcs_1.bcs.u64(),
                lp_token_type: structs_1.TypeName.bcs,
                liquidity_tokens: bcs_1.bcs.vector(structs_1.TypeName.bcs),
                token_pools: bcs_1.bcs.vector(TokenPool.bcs),
                pool_info: LiquidityPoolInfo.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
                bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.u8()),
            });
        },
        enumerable: false,
        configurable: true
    });
    LiquidityPool.fromFields = function (fields) {
        return LiquidityPool.reified().new({
            id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            lpTokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.lp_token_type),
            liquidityTokens: (0, reified_1.decodeFromFields)(reified.vector(structs_1.TypeName.reified()), fields.liquidity_tokens),
            tokenPools: (0, reified_1.decodeFromFields)(reified.vector(TokenPool.reified()), fields.token_pools),
            poolInfo: (0, reified_1.decodeFromFields)(LiquidityPoolInfo.reified(), fields.pool_info),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
            bcsPadding: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.bcs_padding),
        });
    };
    LiquidityPool.fromFieldsWithTypes = function (item) {
        if (!isLiquidityPool(item.type)) {
            throw new Error("not a LiquidityPool type");
        }
        return LiquidityPool.reified().new({
            id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            lpTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.lp_token_type),
            liquidityTokens: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_1.TypeName.reified()), item.fields.liquidity_tokens),
            tokenPools: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(TokenPool.reified()), item.fields.token_pools),
            poolInfo: (0, reified_1.decodeFromFieldsWithTypes)(LiquidityPoolInfo.reified(), item.fields.pool_info),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
            bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.bcs_padding),
        });
    };
    LiquidityPool.fromBcs = function (data) {
        return LiquidityPool.fromFields(LiquidityPool.bcs.parse(data));
    };
    LiquidityPool.prototype.toJSONField = function () {
        return {
            id: this.id,
            index: this.index.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            liquidityTokens: (0, reified_1.fieldToJSON)("vector<0x1::type_name::TypeName>", this.liquidityTokens),
            tokenPools: (0, reified_1.fieldToJSON)("vector<0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::TokenPool>", this.tokenPools),
            poolInfo: this.poolInfo.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
            bcsPadding: (0, reified_1.fieldToJSON)("vector<u8>", this.bcsPadding),
        };
    };
    LiquidityPool.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    LiquidityPool.fromJSONField = function (field) {
        return LiquidityPool.reified().new({
            id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            lpTokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.lpTokenType),
            liquidityTokens: (0, reified_1.decodeFromJSONField)(reified.vector(structs_1.TypeName.reified()), field.liquidityTokens),
            tokenPools: (0, reified_1.decodeFromJSONField)(reified.vector(TokenPool.reified()), field.tokenPools),
            poolInfo: (0, reified_1.decodeFromJSONField)(LiquidityPoolInfo.reified(), field.poolInfo),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
            bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.bcsPadding),
        });
    };
    LiquidityPool.fromJSON = function (json) {
        if (json.$typeName !== LiquidityPool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return LiquidityPool.fromJSONField(json);
    };
    LiquidityPool.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLiquidityPool(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a LiquidityPool object"));
        }
        return LiquidityPool.fromFieldsWithTypes(content);
    };
    LiquidityPool.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching LiquidityPool object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLiquidityPool(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a LiquidityPool object"));
                        }
                        return [2 /*return*/, LiquidityPool.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    LiquidityPool.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPool";
    LiquidityPool.$numTypeParams = 0;
    return LiquidityPool;
}());
exports.LiquidityPool = LiquidityPool;
/* ============================== LiquidityPoolInfo =============================== */
function isLiquidityPoolInfo(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPoolInfo";
}
var LiquidityPoolInfo = /** @class */ (function () {
    function LiquidityPoolInfo(typeArgs, fields) {
        this.$typeName = LiquidityPoolInfo.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([LiquidityPoolInfo.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.lpTokenDecimal = fields.lpTokenDecimal;
        this.totalShareSupply = fields.totalShareSupply;
        this.tvlUsd = fields.tvlUsd;
        this.isActive = fields.isActive;
    }
    LiquidityPoolInfo.reified = function () {
        var _this = this;
        return {
            typeName: LiquidityPoolInfo.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([LiquidityPoolInfo.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return LiquidityPoolInfo.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return LiquidityPoolInfo.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return LiquidityPoolInfo.fromBcs(data); },
            bcs: LiquidityPoolInfo.bcs,
            fromJSONField: function (field) { return LiquidityPoolInfo.fromJSONField(field); },
            fromJSON: function (json) { return LiquidityPoolInfo.fromJSON(json); },
            fromSuiParsedData: function (content) { return LiquidityPoolInfo.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, LiquidityPoolInfo.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new LiquidityPoolInfo([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(LiquidityPoolInfo, "r", {
        get: function () {
            return LiquidityPoolInfo.reified();
        },
        enumerable: false,
        configurable: true
    });
    LiquidityPoolInfo.phantom = function () {
        return (0, reified_1.phantom)(LiquidityPoolInfo.reified());
    };
    Object.defineProperty(LiquidityPoolInfo, "p", {
        get: function () {
            return LiquidityPoolInfo.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LiquidityPoolInfo, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("LiquidityPoolInfo", {
                lp_token_decimal: bcs_1.bcs.u64(),
                total_share_supply: bcs_1.bcs.u64(),
                tvl_usd: bcs_1.bcs.u64(),
                is_active: bcs_1.bcs.bool(),
            });
        },
        enumerable: false,
        configurable: true
    });
    LiquidityPoolInfo.fromFields = function (fields) {
        return LiquidityPoolInfo.reified().new({
            lpTokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.lp_token_decimal),
            totalShareSupply: (0, reified_1.decodeFromFields)("u64", fields.total_share_supply),
            tvlUsd: (0, reified_1.decodeFromFields)("u64", fields.tvl_usd),
            isActive: (0, reified_1.decodeFromFields)("bool", fields.is_active),
        });
    };
    LiquidityPoolInfo.fromFieldsWithTypes = function (item) {
        if (!isLiquidityPoolInfo(item.type)) {
            throw new Error("not a LiquidityPoolInfo type");
        }
        return LiquidityPoolInfo.reified().new({
            lpTokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.lp_token_decimal),
            totalShareSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_share_supply),
            tvlUsd: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.tvl_usd),
            isActive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_active),
        });
    };
    LiquidityPoolInfo.fromBcs = function (data) {
        return LiquidityPoolInfo.fromFields(LiquidityPoolInfo.bcs.parse(data));
    };
    LiquidityPoolInfo.prototype.toJSONField = function () {
        return {
            lpTokenDecimal: this.lpTokenDecimal.toString(),
            totalShareSupply: this.totalShareSupply.toString(),
            tvlUsd: this.tvlUsd.toString(),
            isActive: this.isActive,
        };
    };
    LiquidityPoolInfo.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    LiquidityPoolInfo.fromJSONField = function (field) {
        return LiquidityPoolInfo.reified().new({
            lpTokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.lpTokenDecimal),
            totalShareSupply: (0, reified_1.decodeFromJSONField)("u64", field.totalShareSupply),
            tvlUsd: (0, reified_1.decodeFromJSONField)("u64", field.tvlUsd),
            isActive: (0, reified_1.decodeFromJSONField)("bool", field.isActive),
        });
    };
    LiquidityPoolInfo.fromJSON = function (json) {
        if (json.$typeName !== LiquidityPoolInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return LiquidityPoolInfo.fromJSONField(json);
    };
    LiquidityPoolInfo.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLiquidityPoolInfo(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a LiquidityPoolInfo object"));
        }
        return LiquidityPoolInfo.fromFieldsWithTypes(content);
    };
    LiquidityPoolInfo.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching LiquidityPoolInfo object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLiquidityPoolInfo(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a LiquidityPoolInfo object"));
                        }
                        return [2 /*return*/, LiquidityPoolInfo.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    LiquidityPoolInfo.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::LiquidityPoolInfo";
    LiquidityPoolInfo.$numTypeParams = 0;
    return LiquidityPoolInfo;
}());
exports.LiquidityPoolInfo = LiquidityPoolInfo;
/* ============================== MarginConfig =============================== */
function isMarginConfig(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MarginConfig";
}
var MarginConfig = /** @class */ (function () {
    function MarginConfig(typeArgs, fields) {
        this.$typeName = MarginConfig.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([MarginConfig.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.basicBorrowRate0 = fields.basicBorrowRate0;
        this.basicBorrowRate1 = fields.basicBorrowRate1;
        this.basicBorrowRate2 = fields.basicBorrowRate2;
        this.utilizationThresholdBp0 = fields.utilizationThresholdBp0;
        this.utilizationThresholdBp1 = fields.utilizationThresholdBp1;
        this.borrowIntervalTsMs = fields.borrowIntervalTsMs;
        this.maxOrderReserveRatioBp = fields.maxOrderReserveRatioBp;
        this.u64Padding = fields.u64Padding;
    }
    MarginConfig.reified = function () {
        var _this = this;
        return {
            typeName: MarginConfig.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([MarginConfig.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return MarginConfig.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return MarginConfig.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return MarginConfig.fromBcs(data); },
            bcs: MarginConfig.bcs,
            fromJSONField: function (field) { return MarginConfig.fromJSONField(field); },
            fromJSON: function (json) { return MarginConfig.fromJSON(json); },
            fromSuiParsedData: function (content) { return MarginConfig.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, MarginConfig.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new MarginConfig([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(MarginConfig, "r", {
        get: function () {
            return MarginConfig.reified();
        },
        enumerable: false,
        configurable: true
    });
    MarginConfig.phantom = function () {
        return (0, reified_1.phantom)(MarginConfig.reified());
    };
    Object.defineProperty(MarginConfig, "p", {
        get: function () {
            return MarginConfig.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarginConfig, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("MarginConfig", {
                basic_borrow_rate_0: bcs_1.bcs.u64(),
                basic_borrow_rate_1: bcs_1.bcs.u64(),
                basic_borrow_rate_2: bcs_1.bcs.u64(),
                utilization_threshold_bp_0: bcs_1.bcs.u64(),
                utilization_threshold_bp_1: bcs_1.bcs.u64(),
                borrow_interval_ts_ms: bcs_1.bcs.u64(),
                max_order_reserve_ratio_bp: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    MarginConfig.fromFields = function (fields) {
        return MarginConfig.reified().new({
            basicBorrowRate0: (0, reified_1.decodeFromFields)("u64", fields.basic_borrow_rate_0),
            basicBorrowRate1: (0, reified_1.decodeFromFields)("u64", fields.basic_borrow_rate_1),
            basicBorrowRate2: (0, reified_1.decodeFromFields)("u64", fields.basic_borrow_rate_2),
            utilizationThresholdBp0: (0, reified_1.decodeFromFields)("u64", fields.utilization_threshold_bp_0),
            utilizationThresholdBp1: (0, reified_1.decodeFromFields)("u64", fields.utilization_threshold_bp_1),
            borrowIntervalTsMs: (0, reified_1.decodeFromFields)("u64", fields.borrow_interval_ts_ms),
            maxOrderReserveRatioBp: (0, reified_1.decodeFromFields)("u64", fields.max_order_reserve_ratio_bp),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    MarginConfig.fromFieldsWithTypes = function (item) {
        if (!isMarginConfig(item.type)) {
            throw new Error("not a MarginConfig type");
        }
        return MarginConfig.reified().new({
            basicBorrowRate0: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.basic_borrow_rate_0),
            basicBorrowRate1: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.basic_borrow_rate_1),
            basicBorrowRate2: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.basic_borrow_rate_2),
            utilizationThresholdBp0: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.utilization_threshold_bp_0),
            utilizationThresholdBp1: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.utilization_threshold_bp_1),
            borrowIntervalTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.borrow_interval_ts_ms),
            maxOrderReserveRatioBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_order_reserve_ratio_bp),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    MarginConfig.fromBcs = function (data) {
        return MarginConfig.fromFields(MarginConfig.bcs.parse(data));
    };
    MarginConfig.prototype.toJSONField = function () {
        return {
            basicBorrowRate0: this.basicBorrowRate0.toString(),
            basicBorrowRate1: this.basicBorrowRate1.toString(),
            basicBorrowRate2: this.basicBorrowRate2.toString(),
            utilizationThresholdBp0: this.utilizationThresholdBp0.toString(),
            utilizationThresholdBp1: this.utilizationThresholdBp1.toString(),
            borrowIntervalTsMs: this.borrowIntervalTsMs.toString(),
            maxOrderReserveRatioBp: this.maxOrderReserveRatioBp.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    MarginConfig.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    MarginConfig.fromJSONField = function (field) {
        return MarginConfig.reified().new({
            basicBorrowRate0: (0, reified_1.decodeFromJSONField)("u64", field.basicBorrowRate0),
            basicBorrowRate1: (0, reified_1.decodeFromJSONField)("u64", field.basicBorrowRate1),
            basicBorrowRate2: (0, reified_1.decodeFromJSONField)("u64", field.basicBorrowRate2),
            utilizationThresholdBp0: (0, reified_1.decodeFromJSONField)("u64", field.utilizationThresholdBp0),
            utilizationThresholdBp1: (0, reified_1.decodeFromJSONField)("u64", field.utilizationThresholdBp1),
            borrowIntervalTsMs: (0, reified_1.decodeFromJSONField)("u64", field.borrowIntervalTsMs),
            maxOrderReserveRatioBp: (0, reified_1.decodeFromJSONField)("u64", field.maxOrderReserveRatioBp),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    MarginConfig.fromJSON = function (json) {
        if (json.$typeName !== MarginConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return MarginConfig.fromJSONField(json);
    };
    MarginConfig.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMarginConfig(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a MarginConfig object"));
        }
        return MarginConfig.fromFieldsWithTypes(content);
    };
    MarginConfig.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching MarginConfig object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMarginConfig(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a MarginConfig object"));
                        }
                        return [2 /*return*/, MarginConfig.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    MarginConfig.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MarginConfig";
    MarginConfig.$numTypeParams = 0;
    return MarginConfig;
}());
exports.MarginConfig = MarginConfig;
/* ============================== MintLpEvent =============================== */
function isMintLpEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MintLpEvent";
}
var MintLpEvent = /** @class */ (function () {
    function MintLpEvent(typeArgs, fields) {
        this.$typeName = MintLpEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([MintLpEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.liquidityTokenType = fields.liquidityTokenType;
        this.depositAmount = fields.depositAmount;
        this.depositAmountUsd = fields.depositAmountUsd;
        this.mintFeeUsd = fields.mintFeeUsd;
        this.lpTokenType = fields.lpTokenType;
        this.mintedLpAmount = fields.mintedLpAmount;
        this.u64Padding = fields.u64Padding;
    }
    MintLpEvent.reified = function () {
        var _this = this;
        return {
            typeName: MintLpEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([MintLpEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return MintLpEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return MintLpEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return MintLpEvent.fromBcs(data); },
            bcs: MintLpEvent.bcs,
            fromJSONField: function (field) { return MintLpEvent.fromJSONField(field); },
            fromJSON: function (json) { return MintLpEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return MintLpEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, MintLpEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new MintLpEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(MintLpEvent, "r", {
        get: function () {
            return MintLpEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    MintLpEvent.phantom = function () {
        return (0, reified_1.phantom)(MintLpEvent.reified());
    };
    Object.defineProperty(MintLpEvent, "p", {
        get: function () {
            return MintLpEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MintLpEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("MintLpEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                liquidity_token_type: structs_1.TypeName.bcs,
                deposit_amount: bcs_1.bcs.u64(),
                deposit_amount_usd: bcs_1.bcs.u64(),
                mint_fee_usd: bcs_1.bcs.u64(),
                lp_token_type: structs_1.TypeName.bcs,
                minted_lp_amount: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    MintLpEvent.fromFields = function (fields) {
        return MintLpEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            liquidityTokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.liquidity_token_type),
            depositAmount: (0, reified_1.decodeFromFields)("u64", fields.deposit_amount),
            depositAmountUsd: (0, reified_1.decodeFromFields)("u64", fields.deposit_amount_usd),
            mintFeeUsd: (0, reified_1.decodeFromFields)("u64", fields.mint_fee_usd),
            lpTokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.lp_token_type),
            mintedLpAmount: (0, reified_1.decodeFromFields)("u64", fields.minted_lp_amount),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    MintLpEvent.fromFieldsWithTypes = function (item) {
        if (!isMintLpEvent(item.type)) {
            throw new Error("not a MintLpEvent type");
        }
        return MintLpEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            liquidityTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.liquidity_token_type),
            depositAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deposit_amount),
            depositAmountUsd: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deposit_amount_usd),
            mintFeeUsd: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.mint_fee_usd),
            lpTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.lp_token_type),
            mintedLpAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.minted_lp_amount),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    MintLpEvent.fromBcs = function (data) {
        return MintLpEvent.fromFields(MintLpEvent.bcs.parse(data));
    };
    MintLpEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            liquidityTokenType: this.liquidityTokenType.toJSONField(),
            depositAmount: this.depositAmount.toString(),
            depositAmountUsd: this.depositAmountUsd.toString(),
            mintFeeUsd: this.mintFeeUsd.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            mintedLpAmount: this.mintedLpAmount.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    MintLpEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    MintLpEvent.fromJSONField = function (field) {
        return MintLpEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            liquidityTokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.liquidityTokenType),
            depositAmount: (0, reified_1.decodeFromJSONField)("u64", field.depositAmount),
            depositAmountUsd: (0, reified_1.decodeFromJSONField)("u64", field.depositAmountUsd),
            mintFeeUsd: (0, reified_1.decodeFromJSONField)("u64", field.mintFeeUsd),
            lpTokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.lpTokenType),
            mintedLpAmount: (0, reified_1.decodeFromJSONField)("u64", field.mintedLpAmount),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    MintLpEvent.fromJSON = function (json) {
        if (json.$typeName !== MintLpEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return MintLpEvent.fromJSONField(json);
    };
    MintLpEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMintLpEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a MintLpEvent object"));
        }
        return MintLpEvent.fromFieldsWithTypes(content);
    };
    MintLpEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching MintLpEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMintLpEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a MintLpEvent object"));
                        }
                        return [2 /*return*/, MintLpEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    MintLpEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::MintLpEvent";
    MintLpEvent.$numTypeParams = 0;
    return MintLpEvent;
}());
exports.MintLpEvent = MintLpEvent;
/* ============================== NewLiquidityPoolEvent =============================== */
function isNewLiquidityPoolEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::NewLiquidityPoolEvent";
}
var NewLiquidityPoolEvent = /** @class */ (function () {
    function NewLiquidityPoolEvent(typeArgs, fields) {
        this.$typeName = NewLiquidityPoolEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NewLiquidityPoolEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.lpTokenDecimal = fields.lpTokenDecimal;
        this.u64Padding = fields.u64Padding;
    }
    NewLiquidityPoolEvent.reified = function () {
        var _this = this;
        return {
            typeName: NewLiquidityPoolEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([NewLiquidityPoolEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return NewLiquidityPoolEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return NewLiquidityPoolEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return NewLiquidityPoolEvent.fromBcs(data); },
            bcs: NewLiquidityPoolEvent.bcs,
            fromJSONField: function (field) { return NewLiquidityPoolEvent.fromJSONField(field); },
            fromJSON: function (json) { return NewLiquidityPoolEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return NewLiquidityPoolEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, NewLiquidityPoolEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new NewLiquidityPoolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(NewLiquidityPoolEvent, "r", {
        get: function () {
            return NewLiquidityPoolEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    NewLiquidityPoolEvent.phantom = function () {
        return (0, reified_1.phantom)(NewLiquidityPoolEvent.reified());
    };
    Object.defineProperty(NewLiquidityPoolEvent, "p", {
        get: function () {
            return NewLiquidityPoolEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewLiquidityPoolEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("NewLiquidityPoolEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                lp_token_type: structs_1.TypeName.bcs,
                lp_token_decimal: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    NewLiquidityPoolEvent.fromFields = function (fields) {
        return NewLiquidityPoolEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            lpTokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.lp_token_type),
            lpTokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.lp_token_decimal),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    NewLiquidityPoolEvent.fromFieldsWithTypes = function (item) {
        if (!isNewLiquidityPoolEvent(item.type)) {
            throw new Error("not a NewLiquidityPoolEvent type");
        }
        return NewLiquidityPoolEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            lpTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.lp_token_type),
            lpTokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.lp_token_decimal),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    NewLiquidityPoolEvent.fromBcs = function (data) {
        return NewLiquidityPoolEvent.fromFields(NewLiquidityPoolEvent.bcs.parse(data));
    };
    NewLiquidityPoolEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            lpTokenDecimal: this.lpTokenDecimal.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    NewLiquidityPoolEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    NewLiquidityPoolEvent.fromJSONField = function (field) {
        return NewLiquidityPoolEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            lpTokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.lpTokenType),
            lpTokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.lpTokenDecimal),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    NewLiquidityPoolEvent.fromJSON = function (json) {
        if (json.$typeName !== NewLiquidityPoolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return NewLiquidityPoolEvent.fromJSONField(json);
    };
    NewLiquidityPoolEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewLiquidityPoolEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a NewLiquidityPoolEvent object"));
        }
        return NewLiquidityPoolEvent.fromFieldsWithTypes(content);
    };
    NewLiquidityPoolEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching NewLiquidityPoolEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewLiquidityPoolEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a NewLiquidityPoolEvent object"));
                        }
                        return [2 /*return*/, NewLiquidityPoolEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    NewLiquidityPoolEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::NewLiquidityPoolEvent";
    NewLiquidityPoolEvent.$numTypeParams = 0;
    return NewLiquidityPoolEvent;
}());
exports.NewLiquidityPoolEvent = NewLiquidityPoolEvent;
/* ============================== Registry =============================== */
function isRegistry(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Registry";
}
var Registry = /** @class */ (function () {
    function Registry(typeArgs, fields) {
        this.$typeName = Registry.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Registry.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        this.numPool = fields.numPool;
        this.liquidityPoolRegistry = fields.liquidityPoolRegistry;
    }
    Registry.reified = function () {
        var _this = this;
        return {
            typeName: Registry.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Registry.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return Registry.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return Registry.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return Registry.fromBcs(data); },
            bcs: Registry.bcs,
            fromJSONField: function (field) { return Registry.fromJSONField(field); },
            fromJSON: function (json) { return Registry.fromJSON(json); },
            fromSuiParsedData: function (content) { return Registry.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Registry.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new Registry([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(Registry, "r", {
        get: function () {
            return Registry.reified();
        },
        enumerable: false,
        configurable: true
    });
    Registry.phantom = function () {
        return (0, reified_1.phantom)(Registry.reified());
    };
    Object.defineProperty(Registry, "p", {
        get: function () {
            return Registry.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Registry, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Registry", {
                id: structs_2.UID.bcs,
                num_pool: bcs_1.bcs.u64(),
                liquidity_pool_registry: structs_2.UID.bcs,
            });
        },
        enumerable: false,
        configurable: true
    });
    Registry.fromFields = function (fields) {
        return Registry.reified().new({
            id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id),
            numPool: (0, reified_1.decodeFromFields)("u64", fields.num_pool),
            liquidityPoolRegistry: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.liquidity_pool_registry),
        });
    };
    Registry.fromFieldsWithTypes = function (item) {
        if (!isRegistry(item.type)) {
            throw new Error("not a Registry type");
        }
        return Registry.reified().new({
            id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id),
            numPool: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.num_pool),
            liquidityPoolRegistry: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.liquidity_pool_registry),
        });
    };
    Registry.fromBcs = function (data) {
        return Registry.fromFields(Registry.bcs.parse(data));
    };
    Registry.prototype.toJSONField = function () {
        return {
            id: this.id,
            numPool: this.numPool.toString(),
            liquidityPoolRegistry: this.liquidityPoolRegistry,
        };
    };
    Registry.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    Registry.fromJSONField = function (field) {
        return Registry.reified().new({
            id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id),
            numPool: (0, reified_1.decodeFromJSONField)("u64", field.numPool),
            liquidityPoolRegistry: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.liquidityPoolRegistry),
        });
    };
    Registry.fromJSON = function (json) {
        if (json.$typeName !== Registry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return Registry.fromJSONField(json);
    };
    Registry.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRegistry(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a Registry object"));
        }
        return Registry.fromFieldsWithTypes(content);
    };
    Registry.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Registry object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRegistry(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Registry object"));
                        }
                        return [2 /*return*/, Registry.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Registry.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::Registry";
    Registry.$numTypeParams = 0;
    return Registry;
}());
exports.Registry = Registry;
/* ============================== ResumePoolEvent =============================== */
function isResumePoolEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumePoolEvent";
}
var ResumePoolEvent = /** @class */ (function () {
    function ResumePoolEvent(typeArgs, fields) {
        this.$typeName = ResumePoolEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ResumePoolEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.u64Padding = fields.u64Padding;
    }
    ResumePoolEvent.reified = function () {
        var _this = this;
        return {
            typeName: ResumePoolEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ResumePoolEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return ResumePoolEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return ResumePoolEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return ResumePoolEvent.fromBcs(data); },
            bcs: ResumePoolEvent.bcs,
            fromJSONField: function (field) { return ResumePoolEvent.fromJSONField(field); },
            fromJSON: function (json) { return ResumePoolEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return ResumePoolEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ResumePoolEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new ResumePoolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(ResumePoolEvent, "r", {
        get: function () {
            return ResumePoolEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    ResumePoolEvent.phantom = function () {
        return (0, reified_1.phantom)(ResumePoolEvent.reified());
    };
    Object.defineProperty(ResumePoolEvent, "p", {
        get: function () {
            return ResumePoolEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ResumePoolEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ResumePoolEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    ResumePoolEvent.fromFields = function (fields) {
        return ResumePoolEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    ResumePoolEvent.fromFieldsWithTypes = function (item) {
        if (!isResumePoolEvent(item.type)) {
            throw new Error("not a ResumePoolEvent type");
        }
        return ResumePoolEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    ResumePoolEvent.fromBcs = function (data) {
        return ResumePoolEvent.fromFields(ResumePoolEvent.bcs.parse(data));
    };
    ResumePoolEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    ResumePoolEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    ResumePoolEvent.fromJSONField = function (field) {
        return ResumePoolEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    ResumePoolEvent.fromJSON = function (json) {
        if (json.$typeName !== ResumePoolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return ResumePoolEvent.fromJSONField(json);
    };
    ResumePoolEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isResumePoolEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a ResumePoolEvent object"));
        }
        return ResumePoolEvent.fromFieldsWithTypes(content);
    };
    ResumePoolEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ResumePoolEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isResumePoolEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ResumePoolEvent object"));
                        }
                        return [2 /*return*/, ResumePoolEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ResumePoolEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumePoolEvent";
    ResumePoolEvent.$numTypeParams = 0;
    return ResumePoolEvent;
}());
exports.ResumePoolEvent = ResumePoolEvent;
/* ============================== ResumeTokenPoolEvent =============================== */
function isResumeTokenPoolEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumeTokenPoolEvent";
}
var ResumeTokenPoolEvent = /** @class */ (function () {
    function ResumeTokenPoolEvent(typeArgs, fields) {
        this.$typeName = ResumeTokenPoolEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ResumeTokenPoolEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.liquidityToken = fields.liquidityToken;
        this.u64Padding = fields.u64Padding;
    }
    ResumeTokenPoolEvent.reified = function () {
        var _this = this;
        return {
            typeName: ResumeTokenPoolEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ResumeTokenPoolEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return ResumeTokenPoolEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return ResumeTokenPoolEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return ResumeTokenPoolEvent.fromBcs(data); },
            bcs: ResumeTokenPoolEvent.bcs,
            fromJSONField: function (field) { return ResumeTokenPoolEvent.fromJSONField(field); },
            fromJSON: function (json) { return ResumeTokenPoolEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return ResumeTokenPoolEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ResumeTokenPoolEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new ResumeTokenPoolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(ResumeTokenPoolEvent, "r", {
        get: function () {
            return ResumeTokenPoolEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    ResumeTokenPoolEvent.phantom = function () {
        return (0, reified_1.phantom)(ResumeTokenPoolEvent.reified());
    };
    Object.defineProperty(ResumeTokenPoolEvent, "p", {
        get: function () {
            return ResumeTokenPoolEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ResumeTokenPoolEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ResumeTokenPoolEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                liquidity_token: structs_1.TypeName.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    ResumeTokenPoolEvent.fromFields = function (fields) {
        return ResumeTokenPoolEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            liquidityToken: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.liquidity_token),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    ResumeTokenPoolEvent.fromFieldsWithTypes = function (item) {
        if (!isResumeTokenPoolEvent(item.type)) {
            throw new Error("not a ResumeTokenPoolEvent type");
        }
        return ResumeTokenPoolEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            liquidityToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.liquidity_token),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    ResumeTokenPoolEvent.fromBcs = function (data) {
        return ResumeTokenPoolEvent.fromFields(ResumeTokenPoolEvent.bcs.parse(data));
    };
    ResumeTokenPoolEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            liquidityToken: this.liquidityToken.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    ResumeTokenPoolEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    ResumeTokenPoolEvent.fromJSONField = function (field) {
        return ResumeTokenPoolEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            liquidityToken: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.liquidityToken),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    ResumeTokenPoolEvent.fromJSON = function (json) {
        if (json.$typeName !== ResumeTokenPoolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return ResumeTokenPoolEvent.fromJSONField(json);
    };
    ResumeTokenPoolEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isResumeTokenPoolEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a ResumeTokenPoolEvent object"));
        }
        return ResumeTokenPoolEvent.fromFieldsWithTypes(content);
    };
    ResumeTokenPoolEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ResumeTokenPoolEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isResumeTokenPoolEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ResumeTokenPoolEvent object"));
                        }
                        return [2 /*return*/, ResumeTokenPoolEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ResumeTokenPoolEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::ResumeTokenPoolEvent";
    ResumeTokenPoolEvent.$numTypeParams = 0;
    return ResumeTokenPoolEvent;
}());
exports.ResumeTokenPoolEvent = ResumeTokenPoolEvent;
/* ============================== SpotConfig =============================== */
function isSpotConfig(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SpotConfig";
}
var SpotConfig = /** @class */ (function () {
    function SpotConfig(typeArgs, fields) {
        this.$typeName = SpotConfig.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SpotConfig.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.minDeposit = fields.minDeposit;
        this.maxCapacity = fields.maxCapacity;
        this.targetWeightBp = fields.targetWeightBp;
        this.basicMintFeeBp = fields.basicMintFeeBp;
        this.additionalMintFeeBp = fields.additionalMintFeeBp;
        this.basicBurnFeeBp = fields.basicBurnFeeBp;
        this.additionalBurnFeeBp = fields.additionalBurnFeeBp;
        this.swapFeeBp = fields.swapFeeBp;
        this.swapFeeProtocolShareBp = fields.swapFeeProtocolShareBp;
        this.u64Padding = fields.u64Padding;
    }
    SpotConfig.reified = function () {
        var _this = this;
        return {
            typeName: SpotConfig.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([SpotConfig.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return SpotConfig.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return SpotConfig.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return SpotConfig.fromBcs(data); },
            bcs: SpotConfig.bcs,
            fromJSONField: function (field) { return SpotConfig.fromJSONField(field); },
            fromJSON: function (json) { return SpotConfig.fromJSON(json); },
            fromSuiParsedData: function (content) { return SpotConfig.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, SpotConfig.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new SpotConfig([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(SpotConfig, "r", {
        get: function () {
            return SpotConfig.reified();
        },
        enumerable: false,
        configurable: true
    });
    SpotConfig.phantom = function () {
        return (0, reified_1.phantom)(SpotConfig.reified());
    };
    Object.defineProperty(SpotConfig, "p", {
        get: function () {
            return SpotConfig.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotConfig, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("SpotConfig", {
                min_deposit: bcs_1.bcs.u64(),
                max_capacity: bcs_1.bcs.u64(),
                target_weight_bp: bcs_1.bcs.u64(),
                basic_mint_fee_bp: bcs_1.bcs.u64(),
                additional_mint_fee_bp: bcs_1.bcs.u64(),
                basic_burn_fee_bp: bcs_1.bcs.u64(),
                additional_burn_fee_bp: bcs_1.bcs.u64(),
                swap_fee_bp: bcs_1.bcs.u64(),
                swap_fee_protocol_share_bp: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    SpotConfig.fromFields = function (fields) {
        return SpotConfig.reified().new({
            minDeposit: (0, reified_1.decodeFromFields)("u64", fields.min_deposit),
            maxCapacity: (0, reified_1.decodeFromFields)("u64", fields.max_capacity),
            targetWeightBp: (0, reified_1.decodeFromFields)("u64", fields.target_weight_bp),
            basicMintFeeBp: (0, reified_1.decodeFromFields)("u64", fields.basic_mint_fee_bp),
            additionalMintFeeBp: (0, reified_1.decodeFromFields)("u64", fields.additional_mint_fee_bp),
            basicBurnFeeBp: (0, reified_1.decodeFromFields)("u64", fields.basic_burn_fee_bp),
            additionalBurnFeeBp: (0, reified_1.decodeFromFields)("u64", fields.additional_burn_fee_bp),
            swapFeeBp: (0, reified_1.decodeFromFields)("u64", fields.swap_fee_bp),
            swapFeeProtocolShareBp: (0, reified_1.decodeFromFields)("u64", fields.swap_fee_protocol_share_bp),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    SpotConfig.fromFieldsWithTypes = function (item) {
        if (!isSpotConfig(item.type)) {
            throw new Error("not a SpotConfig type");
        }
        return SpotConfig.reified().new({
            minDeposit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_deposit),
            maxCapacity: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_capacity),
            targetWeightBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.target_weight_bp),
            basicMintFeeBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.basic_mint_fee_bp),
            additionalMintFeeBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.additional_mint_fee_bp),
            basicBurnFeeBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.basic_burn_fee_bp),
            additionalBurnFeeBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.additional_burn_fee_bp),
            swapFeeBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.swap_fee_bp),
            swapFeeProtocolShareBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.swap_fee_protocol_share_bp),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    SpotConfig.fromBcs = function (data) {
        return SpotConfig.fromFields(SpotConfig.bcs.parse(data));
    };
    SpotConfig.prototype.toJSONField = function () {
        return {
            minDeposit: this.minDeposit.toString(),
            maxCapacity: this.maxCapacity.toString(),
            targetWeightBp: this.targetWeightBp.toString(),
            basicMintFeeBp: this.basicMintFeeBp.toString(),
            additionalMintFeeBp: this.additionalMintFeeBp.toString(),
            basicBurnFeeBp: this.basicBurnFeeBp.toString(),
            additionalBurnFeeBp: this.additionalBurnFeeBp.toString(),
            swapFeeBp: this.swapFeeBp.toString(),
            swapFeeProtocolShareBp: this.swapFeeProtocolShareBp.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    SpotConfig.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    SpotConfig.fromJSONField = function (field) {
        return SpotConfig.reified().new({
            minDeposit: (0, reified_1.decodeFromJSONField)("u64", field.minDeposit),
            maxCapacity: (0, reified_1.decodeFromJSONField)("u64", field.maxCapacity),
            targetWeightBp: (0, reified_1.decodeFromJSONField)("u64", field.targetWeightBp),
            basicMintFeeBp: (0, reified_1.decodeFromJSONField)("u64", field.basicMintFeeBp),
            additionalMintFeeBp: (0, reified_1.decodeFromJSONField)("u64", field.additionalMintFeeBp),
            basicBurnFeeBp: (0, reified_1.decodeFromJSONField)("u64", field.basicBurnFeeBp),
            additionalBurnFeeBp: (0, reified_1.decodeFromJSONField)("u64", field.additionalBurnFeeBp),
            swapFeeBp: (0, reified_1.decodeFromJSONField)("u64", field.swapFeeBp),
            swapFeeProtocolShareBp: (0, reified_1.decodeFromJSONField)("u64", field.swapFeeProtocolShareBp),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    SpotConfig.fromJSON = function (json) {
        if (json.$typeName !== SpotConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return SpotConfig.fromJSONField(json);
    };
    SpotConfig.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSpotConfig(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a SpotConfig object"));
        }
        return SpotConfig.fromFieldsWithTypes(content);
    };
    SpotConfig.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching SpotConfig object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSpotConfig(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a SpotConfig object"));
                        }
                        return [2 /*return*/, SpotConfig.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    SpotConfig.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SpotConfig";
    SpotConfig.$numTypeParams = 0;
    return SpotConfig;
}());
exports.SpotConfig = SpotConfig;
/* ============================== SuspendPoolEvent =============================== */
function isSuspendPoolEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendPoolEvent";
}
var SuspendPoolEvent = /** @class */ (function () {
    function SuspendPoolEvent(typeArgs, fields) {
        this.$typeName = SuspendPoolEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SuspendPoolEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.u64Padding = fields.u64Padding;
    }
    SuspendPoolEvent.reified = function () {
        var _this = this;
        return {
            typeName: SuspendPoolEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([SuspendPoolEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return SuspendPoolEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return SuspendPoolEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return SuspendPoolEvent.fromBcs(data); },
            bcs: SuspendPoolEvent.bcs,
            fromJSONField: function (field) { return SuspendPoolEvent.fromJSONField(field); },
            fromJSON: function (json) { return SuspendPoolEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return SuspendPoolEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, SuspendPoolEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new SuspendPoolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(SuspendPoolEvent, "r", {
        get: function () {
            return SuspendPoolEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    SuspendPoolEvent.phantom = function () {
        return (0, reified_1.phantom)(SuspendPoolEvent.reified());
    };
    Object.defineProperty(SuspendPoolEvent, "p", {
        get: function () {
            return SuspendPoolEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SuspendPoolEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("SuspendPoolEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    SuspendPoolEvent.fromFields = function (fields) {
        return SuspendPoolEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    SuspendPoolEvent.fromFieldsWithTypes = function (item) {
        if (!isSuspendPoolEvent(item.type)) {
            throw new Error("not a SuspendPoolEvent type");
        }
        return SuspendPoolEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    SuspendPoolEvent.fromBcs = function (data) {
        return SuspendPoolEvent.fromFields(SuspendPoolEvent.bcs.parse(data));
    };
    SuspendPoolEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    SuspendPoolEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    SuspendPoolEvent.fromJSONField = function (field) {
        return SuspendPoolEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    SuspendPoolEvent.fromJSON = function (json) {
        if (json.$typeName !== SuspendPoolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return SuspendPoolEvent.fromJSONField(json);
    };
    SuspendPoolEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSuspendPoolEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a SuspendPoolEvent object"));
        }
        return SuspendPoolEvent.fromFieldsWithTypes(content);
    };
    SuspendPoolEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching SuspendPoolEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSuspendPoolEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a SuspendPoolEvent object"));
                        }
                        return [2 /*return*/, SuspendPoolEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    SuspendPoolEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendPoolEvent";
    SuspendPoolEvent.$numTypeParams = 0;
    return SuspendPoolEvent;
}());
exports.SuspendPoolEvent = SuspendPoolEvent;
/* ============================== SuspendTokenPoolEvent =============================== */
function isSuspendTokenPoolEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendTokenPoolEvent";
}
var SuspendTokenPoolEvent = /** @class */ (function () {
    function SuspendTokenPoolEvent(typeArgs, fields) {
        this.$typeName = SuspendTokenPoolEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SuspendTokenPoolEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.liquidityToken = fields.liquidityToken;
        this.u64Padding = fields.u64Padding;
    }
    SuspendTokenPoolEvent.reified = function () {
        var _this = this;
        return {
            typeName: SuspendTokenPoolEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([SuspendTokenPoolEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return SuspendTokenPoolEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return SuspendTokenPoolEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return SuspendTokenPoolEvent.fromBcs(data); },
            bcs: SuspendTokenPoolEvent.bcs,
            fromJSONField: function (field) { return SuspendTokenPoolEvent.fromJSONField(field); },
            fromJSON: function (json) { return SuspendTokenPoolEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return SuspendTokenPoolEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, SuspendTokenPoolEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new SuspendTokenPoolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(SuspendTokenPoolEvent, "r", {
        get: function () {
            return SuspendTokenPoolEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    SuspendTokenPoolEvent.phantom = function () {
        return (0, reified_1.phantom)(SuspendTokenPoolEvent.reified());
    };
    Object.defineProperty(SuspendTokenPoolEvent, "p", {
        get: function () {
            return SuspendTokenPoolEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SuspendTokenPoolEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("SuspendTokenPoolEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                liquidity_token: structs_1.TypeName.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    SuspendTokenPoolEvent.fromFields = function (fields) {
        return SuspendTokenPoolEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            liquidityToken: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.liquidity_token),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    SuspendTokenPoolEvent.fromFieldsWithTypes = function (item) {
        if (!isSuspendTokenPoolEvent(item.type)) {
            throw new Error("not a SuspendTokenPoolEvent type");
        }
        return SuspendTokenPoolEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            liquidityToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.liquidity_token),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    SuspendTokenPoolEvent.fromBcs = function (data) {
        return SuspendTokenPoolEvent.fromFields(SuspendTokenPoolEvent.bcs.parse(data));
    };
    SuspendTokenPoolEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            liquidityToken: this.liquidityToken.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    SuspendTokenPoolEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    SuspendTokenPoolEvent.fromJSONField = function (field) {
        return SuspendTokenPoolEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            liquidityToken: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.liquidityToken),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    SuspendTokenPoolEvent.fromJSON = function (json) {
        if (json.$typeName !== SuspendTokenPoolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return SuspendTokenPoolEvent.fromJSONField(json);
    };
    SuspendTokenPoolEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSuspendTokenPoolEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a SuspendTokenPoolEvent object"));
        }
        return SuspendTokenPoolEvent.fromFieldsWithTypes(content);
    };
    SuspendTokenPoolEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching SuspendTokenPoolEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSuspendTokenPoolEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a SuspendTokenPoolEvent object"));
                        }
                        return [2 /*return*/, SuspendTokenPoolEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    SuspendTokenPoolEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SuspendTokenPoolEvent";
    SuspendTokenPoolEvent.$numTypeParams = 0;
    return SuspendTokenPoolEvent;
}());
exports.SuspendTokenPoolEvent = SuspendTokenPoolEvent;
/* ============================== SwapEvent =============================== */
function isSwapEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SwapEvent";
}
var SwapEvent = /** @class */ (function () {
    function SwapEvent(typeArgs, fields) {
        this.$typeName = SwapEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SwapEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.fromTokenType = fields.fromTokenType;
        this.fromAmount = fields.fromAmount;
        this.toTokenType = fields.toTokenType;
        this.minToAmount = fields.minToAmount;
        this.actualToAmount = fields.actualToAmount;
        this.feeAmount = fields.feeAmount;
        this.feeAmountUsd = fields.feeAmountUsd;
        this.u64Padding = fields.u64Padding;
    }
    SwapEvent.reified = function () {
        var _this = this;
        return {
            typeName: SwapEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([SwapEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return SwapEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return SwapEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return SwapEvent.fromBcs(data); },
            bcs: SwapEvent.bcs,
            fromJSONField: function (field) { return SwapEvent.fromJSONField(field); },
            fromJSON: function (json) { return SwapEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return SwapEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, SwapEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new SwapEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(SwapEvent, "r", {
        get: function () {
            return SwapEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    SwapEvent.phantom = function () {
        return (0, reified_1.phantom)(SwapEvent.reified());
    };
    Object.defineProperty(SwapEvent, "p", {
        get: function () {
            return SwapEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SwapEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("SwapEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                from_token_type: structs_1.TypeName.bcs,
                from_amount: bcs_1.bcs.u64(),
                to_token_type: structs_1.TypeName.bcs,
                min_to_amount: bcs_1.bcs.u64(),
                actual_to_amount: bcs_1.bcs.u64(),
                fee_amount: bcs_1.bcs.u64(),
                fee_amount_usd: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    SwapEvent.fromFields = function (fields) {
        return SwapEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            fromTokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.from_token_type),
            fromAmount: (0, reified_1.decodeFromFields)("u64", fields.from_amount),
            toTokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.to_token_type),
            minToAmount: (0, reified_1.decodeFromFields)("u64", fields.min_to_amount),
            actualToAmount: (0, reified_1.decodeFromFields)("u64", fields.actual_to_amount),
            feeAmount: (0, reified_1.decodeFromFields)("u64", fields.fee_amount),
            feeAmountUsd: (0, reified_1.decodeFromFields)("u64", fields.fee_amount_usd),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    SwapEvent.fromFieldsWithTypes = function (item) {
        if (!isSwapEvent(item.type)) {
            throw new Error("not a SwapEvent type");
        }
        return SwapEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            fromTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.from_token_type),
            fromAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.from_amount),
            toTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.to_token_type),
            minToAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_to_amount),
            actualToAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.actual_to_amount),
            feeAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee_amount),
            feeAmountUsd: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee_amount_usd),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    SwapEvent.fromBcs = function (data) {
        return SwapEvent.fromFields(SwapEvent.bcs.parse(data));
    };
    SwapEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            fromTokenType: this.fromTokenType.toJSONField(),
            fromAmount: this.fromAmount.toString(),
            toTokenType: this.toTokenType.toJSONField(),
            minToAmount: this.minToAmount.toString(),
            actualToAmount: this.actualToAmount.toString(),
            feeAmount: this.feeAmount.toString(),
            feeAmountUsd: this.feeAmountUsd.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    SwapEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    SwapEvent.fromJSONField = function (field) {
        return SwapEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            fromTokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.fromTokenType),
            fromAmount: (0, reified_1.decodeFromJSONField)("u64", field.fromAmount),
            toTokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.toTokenType),
            minToAmount: (0, reified_1.decodeFromJSONField)("u64", field.minToAmount),
            actualToAmount: (0, reified_1.decodeFromJSONField)("u64", field.actualToAmount),
            feeAmount: (0, reified_1.decodeFromJSONField)("u64", field.feeAmount),
            feeAmountUsd: (0, reified_1.decodeFromJSONField)("u64", field.feeAmountUsd),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    SwapEvent.fromJSON = function (json) {
        if (json.$typeName !== SwapEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return SwapEvent.fromJSONField(json);
    };
    SwapEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSwapEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a SwapEvent object"));
        }
        return SwapEvent.fromFieldsWithTypes(content);
    };
    SwapEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching SwapEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSwapEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a SwapEvent object"));
                        }
                        return [2 /*return*/, SwapEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    SwapEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::SwapEvent";
    SwapEvent.$numTypeParams = 0;
    return SwapEvent;
}());
exports.SwapEvent = SwapEvent;
/* ============================== TokenPool =============================== */
function isTokenPool(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::TokenPool";
}
var TokenPool = /** @class */ (function () {
    function TokenPool(typeArgs, fields) {
        this.$typeName = TokenPool.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TokenPool.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.tokenType = fields.tokenType;
        this.config = fields.config;
        this.state = fields.state;
    }
    TokenPool.reified = function () {
        var _this = this;
        return {
            typeName: TokenPool.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TokenPool.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return TokenPool.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return TokenPool.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return TokenPool.fromBcs(data); },
            bcs: TokenPool.bcs,
            fromJSONField: function (field) { return TokenPool.fromJSONField(field); },
            fromJSON: function (json) { return TokenPool.fromJSON(json); },
            fromSuiParsedData: function (content) { return TokenPool.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TokenPool.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new TokenPool([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(TokenPool, "r", {
        get: function () {
            return TokenPool.reified();
        },
        enumerable: false,
        configurable: true
    });
    TokenPool.phantom = function () {
        return (0, reified_1.phantom)(TokenPool.reified());
    };
    Object.defineProperty(TokenPool, "p", {
        get: function () {
            return TokenPool.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenPool, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TokenPool", {
                token_type: structs_1.TypeName.bcs,
                config: Config.bcs,
                state: State.bcs,
            });
        },
        enumerable: false,
        configurable: true
    });
    TokenPool.fromFields = function (fields) {
        return TokenPool.reified().new({
            tokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token_type),
            config: (0, reified_1.decodeFromFields)(Config.reified(), fields.config),
            state: (0, reified_1.decodeFromFields)(State.reified(), fields.state),
        });
    };
    TokenPool.fromFieldsWithTypes = function (item) {
        if (!isTokenPool(item.type)) {
            throw new Error("not a TokenPool type");
        }
        return TokenPool.reified().new({
            tokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token_type),
            config: (0, reified_1.decodeFromFieldsWithTypes)(Config.reified(), item.fields.config),
            state: (0, reified_1.decodeFromFieldsWithTypes)(State.reified(), item.fields.state),
        });
    };
    TokenPool.fromBcs = function (data) {
        return TokenPool.fromFields(TokenPool.bcs.parse(data));
    };
    TokenPool.prototype.toJSONField = function () {
        return {
            tokenType: this.tokenType.toJSONField(),
            config: this.config.toJSONField(),
            state: this.state.toJSONField(),
        };
    };
    TokenPool.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    TokenPool.fromJSONField = function (field) {
        return TokenPool.reified().new({
            tokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.tokenType),
            config: (0, reified_1.decodeFromJSONField)(Config.reified(), field.config),
            state: (0, reified_1.decodeFromJSONField)(State.reified(), field.state),
        });
    };
    TokenPool.fromJSON = function (json) {
        if (json.$typeName !== TokenPool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return TokenPool.fromJSONField(json);
    };
    TokenPool.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTokenPool(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a TokenPool object"));
        }
        return TokenPool.fromFieldsWithTypes(content);
    };
    TokenPool.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TokenPool object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTokenPool(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TokenPool object"));
                        }
                        return [2 /*return*/, TokenPool.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TokenPool.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::TokenPool";
    TokenPool.$numTypeParams = 0;
    return TokenPool;
}());
exports.TokenPool = TokenPool;
/* ============================== UpdateBorrowInfoEvent =============================== */
function isUpdateBorrowInfoEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateBorrowInfoEvent";
}
var UpdateBorrowInfoEvent = /** @class */ (function () {
    function UpdateBorrowInfoEvent(typeArgs, fields) {
        this.$typeName = UpdateBorrowInfoEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateBorrowInfoEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.index = fields.index;
        this.liquidityTokenType = fields.liquidityTokenType;
        this.previousBorrowTsMs = fields.previousBorrowTsMs;
        this.previousCumulativeBorrowRate = fields.previousCumulativeBorrowRate;
        this.borrowIntervalTsMs = fields.borrowIntervalTsMs;
        this.lastBorrowRateTsMs = fields.lastBorrowRateTsMs;
        this.lastCumulativeBorrowRate = fields.lastCumulativeBorrowRate;
        this.u64Padding = fields.u64Padding;
    }
    UpdateBorrowInfoEvent.reified = function () {
        var _this = this;
        return {
            typeName: UpdateBorrowInfoEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateBorrowInfoEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return UpdateBorrowInfoEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return UpdateBorrowInfoEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return UpdateBorrowInfoEvent.fromBcs(data); },
            bcs: UpdateBorrowInfoEvent.bcs,
            fromJSONField: function (field) { return UpdateBorrowInfoEvent.fromJSONField(field); },
            fromJSON: function (json) { return UpdateBorrowInfoEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return UpdateBorrowInfoEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateBorrowInfoEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new UpdateBorrowInfoEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(UpdateBorrowInfoEvent, "r", {
        get: function () {
            return UpdateBorrowInfoEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    UpdateBorrowInfoEvent.phantom = function () {
        return (0, reified_1.phantom)(UpdateBorrowInfoEvent.reified());
    };
    Object.defineProperty(UpdateBorrowInfoEvent, "p", {
        get: function () {
            return UpdateBorrowInfoEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateBorrowInfoEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateBorrowInfoEvent", {
                index: bcs_1.bcs.u64(),
                liquidity_token_type: structs_1.TypeName.bcs,
                previous_borrow_ts_ms: bcs_1.bcs.u64(),
                previous_cumulative_borrow_rate: bcs_1.bcs.u64(),
                borrow_interval_ts_ms: bcs_1.bcs.u64(),
                last_borrow_rate_ts_ms: bcs_1.bcs.u64(),
                last_cumulative_borrow_rate: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    UpdateBorrowInfoEvent.fromFields = function (fields) {
        return UpdateBorrowInfoEvent.reified().new({
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            liquidityTokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.liquidity_token_type),
            previousBorrowTsMs: (0, reified_1.decodeFromFields)("u64", fields.previous_borrow_ts_ms),
            previousCumulativeBorrowRate: (0, reified_1.decodeFromFields)("u64", fields.previous_cumulative_borrow_rate),
            borrowIntervalTsMs: (0, reified_1.decodeFromFields)("u64", fields.borrow_interval_ts_ms),
            lastBorrowRateTsMs: (0, reified_1.decodeFromFields)("u64", fields.last_borrow_rate_ts_ms),
            lastCumulativeBorrowRate: (0, reified_1.decodeFromFields)("u64", fields.last_cumulative_borrow_rate),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    UpdateBorrowInfoEvent.fromFieldsWithTypes = function (item) {
        if (!isUpdateBorrowInfoEvent(item.type)) {
            throw new Error("not a UpdateBorrowInfoEvent type");
        }
        return UpdateBorrowInfoEvent.reified().new({
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            liquidityTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.liquidity_token_type),
            previousBorrowTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.previous_borrow_ts_ms),
            previousCumulativeBorrowRate: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.previous_cumulative_borrow_rate),
            borrowIntervalTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.borrow_interval_ts_ms),
            lastBorrowRateTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_borrow_rate_ts_ms),
            lastCumulativeBorrowRate: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_cumulative_borrow_rate),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    UpdateBorrowInfoEvent.fromBcs = function (data) {
        return UpdateBorrowInfoEvent.fromFields(UpdateBorrowInfoEvent.bcs.parse(data));
    };
    UpdateBorrowInfoEvent.prototype.toJSONField = function () {
        return {
            index: this.index.toString(),
            liquidityTokenType: this.liquidityTokenType.toJSONField(),
            previousBorrowTsMs: this.previousBorrowTsMs.toString(),
            previousCumulativeBorrowRate: this.previousCumulativeBorrowRate.toString(),
            borrowIntervalTsMs: this.borrowIntervalTsMs.toString(),
            lastBorrowRateTsMs: this.lastBorrowRateTsMs.toString(),
            lastCumulativeBorrowRate: this.lastCumulativeBorrowRate.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    UpdateBorrowInfoEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    UpdateBorrowInfoEvent.fromJSONField = function (field) {
        return UpdateBorrowInfoEvent.reified().new({
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            liquidityTokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.liquidityTokenType),
            previousBorrowTsMs: (0, reified_1.decodeFromJSONField)("u64", field.previousBorrowTsMs),
            previousCumulativeBorrowRate: (0, reified_1.decodeFromJSONField)("u64", field.previousCumulativeBorrowRate),
            borrowIntervalTsMs: (0, reified_1.decodeFromJSONField)("u64", field.borrowIntervalTsMs),
            lastBorrowRateTsMs: (0, reified_1.decodeFromJSONField)("u64", field.lastBorrowRateTsMs),
            lastCumulativeBorrowRate: (0, reified_1.decodeFromJSONField)("u64", field.lastCumulativeBorrowRate),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    UpdateBorrowInfoEvent.fromJSON = function (json) {
        if (json.$typeName !== UpdateBorrowInfoEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return UpdateBorrowInfoEvent.fromJSONField(json);
    };
    UpdateBorrowInfoEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateBorrowInfoEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a UpdateBorrowInfoEvent object"));
        }
        return UpdateBorrowInfoEvent.fromFieldsWithTypes(content);
    };
    UpdateBorrowInfoEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateBorrowInfoEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateBorrowInfoEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateBorrowInfoEvent object"));
                        }
                        return [2 /*return*/, UpdateBorrowInfoEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateBorrowInfoEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateBorrowInfoEvent";
    UpdateBorrowInfoEvent.$numTypeParams = 0;
    return UpdateBorrowInfoEvent;
}());
exports.UpdateBorrowInfoEvent = UpdateBorrowInfoEvent;
/* ============================== UpdateLiquidityValueEvent =============================== */
function isUpdateLiquidityValueEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateLiquidityValueEvent";
}
var UpdateLiquidityValueEvent = /** @class */ (function () {
    function UpdateLiquidityValueEvent(typeArgs, fields) {
        this.$typeName = UpdateLiquidityValueEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateLiquidityValueEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.liquidityToken = fields.liquidityToken;
        this.price = fields.price;
        this.valueInUsd = fields.valueInUsd;
        this.lpPoolTvlUsd = fields.lpPoolTvlUsd;
        this.u64Padding = fields.u64Padding;
    }
    UpdateLiquidityValueEvent.reified = function () {
        var _this = this;
        return {
            typeName: UpdateLiquidityValueEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateLiquidityValueEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return UpdateLiquidityValueEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return UpdateLiquidityValueEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return UpdateLiquidityValueEvent.fromBcs(data); },
            bcs: UpdateLiquidityValueEvent.bcs,
            fromJSONField: function (field) { return UpdateLiquidityValueEvent.fromJSONField(field); },
            fromJSON: function (json) { return UpdateLiquidityValueEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return UpdateLiquidityValueEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateLiquidityValueEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new UpdateLiquidityValueEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(UpdateLiquidityValueEvent, "r", {
        get: function () {
            return UpdateLiquidityValueEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    UpdateLiquidityValueEvent.phantom = function () {
        return (0, reified_1.phantom)(UpdateLiquidityValueEvent.reified());
    };
    Object.defineProperty(UpdateLiquidityValueEvent, "p", {
        get: function () {
            return UpdateLiquidityValueEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateLiquidityValueEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateLiquidityValueEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                liquidity_token: structs_1.TypeName.bcs,
                price: bcs_1.bcs.u64(),
                value_in_usd: bcs_1.bcs.u64(),
                lp_pool_tvl_usd: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    UpdateLiquidityValueEvent.fromFields = function (fields) {
        return UpdateLiquidityValueEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            liquidityToken: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.liquidity_token),
            price: (0, reified_1.decodeFromFields)("u64", fields.price),
            valueInUsd: (0, reified_1.decodeFromFields)("u64", fields.value_in_usd),
            lpPoolTvlUsd: (0, reified_1.decodeFromFields)("u64", fields.lp_pool_tvl_usd),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    UpdateLiquidityValueEvent.fromFieldsWithTypes = function (item) {
        if (!isUpdateLiquidityValueEvent(item.type)) {
            throw new Error("not a UpdateLiquidityValueEvent type");
        }
        return UpdateLiquidityValueEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            liquidityToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.liquidity_token),
            price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price),
            valueInUsd: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.value_in_usd),
            lpPoolTvlUsd: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.lp_pool_tvl_usd),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    UpdateLiquidityValueEvent.fromBcs = function (data) {
        return UpdateLiquidityValueEvent.fromFields(UpdateLiquidityValueEvent.bcs.parse(data));
    };
    UpdateLiquidityValueEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            liquidityToken: this.liquidityToken.toJSONField(),
            price: this.price.toString(),
            valueInUsd: this.valueInUsd.toString(),
            lpPoolTvlUsd: this.lpPoolTvlUsd.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    UpdateLiquidityValueEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    UpdateLiquidityValueEvent.fromJSONField = function (field) {
        return UpdateLiquidityValueEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            liquidityToken: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.liquidityToken),
            price: (0, reified_1.decodeFromJSONField)("u64", field.price),
            valueInUsd: (0, reified_1.decodeFromJSONField)("u64", field.valueInUsd),
            lpPoolTvlUsd: (0, reified_1.decodeFromJSONField)("u64", field.lpPoolTvlUsd),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    UpdateLiquidityValueEvent.fromJSON = function (json) {
        if (json.$typeName !== UpdateLiquidityValueEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return UpdateLiquidityValueEvent.fromJSONField(json);
    };
    UpdateLiquidityValueEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateLiquidityValueEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a UpdateLiquidityValueEvent object"));
        }
        return UpdateLiquidityValueEvent.fromFieldsWithTypes(content);
    };
    UpdateLiquidityValueEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateLiquidityValueEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateLiquidityValueEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateLiquidityValueEvent object"));
                        }
                        return [2 /*return*/, UpdateLiquidityValueEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateLiquidityValueEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateLiquidityValueEvent";
    UpdateLiquidityValueEvent.$numTypeParams = 0;
    return UpdateLiquidityValueEvent;
}());
exports.UpdateLiquidityValueEvent = UpdateLiquidityValueEvent;
/* ============================== UpdateMarginConfigEvent =============================== */
function isUpdateMarginConfigEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateMarginConfigEvent";
}
var UpdateMarginConfigEvent = /** @class */ (function () {
    function UpdateMarginConfigEvent(typeArgs, fields) {
        this.$typeName = UpdateMarginConfigEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateMarginConfigEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.liquidityTokenType = fields.liquidityTokenType;
        this.previousMarginConfig = fields.previousMarginConfig;
        this.newMarginConfig = fields.newMarginConfig;
        this.u64Padding = fields.u64Padding;
    }
    UpdateMarginConfigEvent.reified = function () {
        var _this = this;
        return {
            typeName: UpdateMarginConfigEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateMarginConfigEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return UpdateMarginConfigEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return UpdateMarginConfigEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return UpdateMarginConfigEvent.fromBcs(data); },
            bcs: UpdateMarginConfigEvent.bcs,
            fromJSONField: function (field) { return UpdateMarginConfigEvent.fromJSONField(field); },
            fromJSON: function (json) { return UpdateMarginConfigEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return UpdateMarginConfigEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateMarginConfigEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new UpdateMarginConfigEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(UpdateMarginConfigEvent, "r", {
        get: function () {
            return UpdateMarginConfigEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    UpdateMarginConfigEvent.phantom = function () {
        return (0, reified_1.phantom)(UpdateMarginConfigEvent.reified());
    };
    Object.defineProperty(UpdateMarginConfigEvent, "p", {
        get: function () {
            return UpdateMarginConfigEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateMarginConfigEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateMarginConfigEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                liquidity_token_type: structs_1.TypeName.bcs,
                previous_margin_config: MarginConfig.bcs,
                new_margin_config: MarginConfig.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    UpdateMarginConfigEvent.fromFields = function (fields) {
        return UpdateMarginConfigEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            liquidityTokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.liquidity_token_type),
            previousMarginConfig: (0, reified_1.decodeFromFields)(MarginConfig.reified(), fields.previous_margin_config),
            newMarginConfig: (0, reified_1.decodeFromFields)(MarginConfig.reified(), fields.new_margin_config),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    UpdateMarginConfigEvent.fromFieldsWithTypes = function (item) {
        if (!isUpdateMarginConfigEvent(item.type)) {
            throw new Error("not a UpdateMarginConfigEvent type");
        }
        return UpdateMarginConfigEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            liquidityTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.liquidity_token_type),
            previousMarginConfig: (0, reified_1.decodeFromFieldsWithTypes)(MarginConfig.reified(), item.fields.previous_margin_config),
            newMarginConfig: (0, reified_1.decodeFromFieldsWithTypes)(MarginConfig.reified(), item.fields.new_margin_config),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    UpdateMarginConfigEvent.fromBcs = function (data) {
        return UpdateMarginConfigEvent.fromFields(UpdateMarginConfigEvent.bcs.parse(data));
    };
    UpdateMarginConfigEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            liquidityTokenType: this.liquidityTokenType.toJSONField(),
            previousMarginConfig: this.previousMarginConfig.toJSONField(),
            newMarginConfig: this.newMarginConfig.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    UpdateMarginConfigEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    UpdateMarginConfigEvent.fromJSONField = function (field) {
        return UpdateMarginConfigEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            liquidityTokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.liquidityTokenType),
            previousMarginConfig: (0, reified_1.decodeFromJSONField)(MarginConfig.reified(), field.previousMarginConfig),
            newMarginConfig: (0, reified_1.decodeFromJSONField)(MarginConfig.reified(), field.newMarginConfig),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    UpdateMarginConfigEvent.fromJSON = function (json) {
        if (json.$typeName !== UpdateMarginConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return UpdateMarginConfigEvent.fromJSONField(json);
    };
    UpdateMarginConfigEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateMarginConfigEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a UpdateMarginConfigEvent object"));
        }
        return UpdateMarginConfigEvent.fromFieldsWithTypes(content);
    };
    UpdateMarginConfigEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateMarginConfigEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateMarginConfigEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateMarginConfigEvent object"));
                        }
                        return [2 /*return*/, UpdateMarginConfigEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateMarginConfigEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateMarginConfigEvent";
    UpdateMarginConfigEvent.$numTypeParams = 0;
    return UpdateMarginConfigEvent;
}());
exports.UpdateMarginConfigEvent = UpdateMarginConfigEvent;
/* ============================== UpdateSpotConfigEvent =============================== */
function isUpdateSpotConfigEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateSpotConfigEvent";
}
var UpdateSpotConfigEvent = /** @class */ (function () {
    function UpdateSpotConfigEvent(typeArgs, fields) {
        this.$typeName = UpdateSpotConfigEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateSpotConfigEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.liquidityTokenType = fields.liquidityTokenType;
        this.previousSpotConfig = fields.previousSpotConfig;
        this.newSpotConfig = fields.newSpotConfig;
        this.u64Padding = fields.u64Padding;
    }
    UpdateSpotConfigEvent.reified = function () {
        var _this = this;
        return {
            typeName: UpdateSpotConfigEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateSpotConfigEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return UpdateSpotConfigEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return UpdateSpotConfigEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return UpdateSpotConfigEvent.fromBcs(data); },
            bcs: UpdateSpotConfigEvent.bcs,
            fromJSONField: function (field) { return UpdateSpotConfigEvent.fromJSONField(field); },
            fromJSON: function (json) { return UpdateSpotConfigEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return UpdateSpotConfigEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateSpotConfigEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new UpdateSpotConfigEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(UpdateSpotConfigEvent, "r", {
        get: function () {
            return UpdateSpotConfigEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    UpdateSpotConfigEvent.phantom = function () {
        return (0, reified_1.phantom)(UpdateSpotConfigEvent.reified());
    };
    Object.defineProperty(UpdateSpotConfigEvent, "p", {
        get: function () {
            return UpdateSpotConfigEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateSpotConfigEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateSpotConfigEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                liquidity_token_type: structs_1.TypeName.bcs,
                previous_spot_config: SpotConfig.bcs,
                new_spot_config: SpotConfig.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    UpdateSpotConfigEvent.fromFields = function (fields) {
        return UpdateSpotConfigEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            liquidityTokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.liquidity_token_type),
            previousSpotConfig: (0, reified_1.decodeFromFields)(SpotConfig.reified(), fields.previous_spot_config),
            newSpotConfig: (0, reified_1.decodeFromFields)(SpotConfig.reified(), fields.new_spot_config),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    UpdateSpotConfigEvent.fromFieldsWithTypes = function (item) {
        if (!isUpdateSpotConfigEvent(item.type)) {
            throw new Error("not a UpdateSpotConfigEvent type");
        }
        return UpdateSpotConfigEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            liquidityTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.liquidity_token_type),
            previousSpotConfig: (0, reified_1.decodeFromFieldsWithTypes)(SpotConfig.reified(), item.fields.previous_spot_config),
            newSpotConfig: (0, reified_1.decodeFromFieldsWithTypes)(SpotConfig.reified(), item.fields.new_spot_config),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    UpdateSpotConfigEvent.fromBcs = function (data) {
        return UpdateSpotConfigEvent.fromFields(UpdateSpotConfigEvent.bcs.parse(data));
    };
    UpdateSpotConfigEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            liquidityTokenType: this.liquidityTokenType.toJSONField(),
            previousSpotConfig: this.previousSpotConfig.toJSONField(),
            newSpotConfig: this.newSpotConfig.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    UpdateSpotConfigEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    UpdateSpotConfigEvent.fromJSONField = function (field) {
        return UpdateSpotConfigEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            liquidityTokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.liquidityTokenType),
            previousSpotConfig: (0, reified_1.decodeFromJSONField)(SpotConfig.reified(), field.previousSpotConfig),
            newSpotConfig: (0, reified_1.decodeFromJSONField)(SpotConfig.reified(), field.newSpotConfig),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    UpdateSpotConfigEvent.fromJSON = function (json) {
        if (json.$typeName !== UpdateSpotConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return UpdateSpotConfigEvent.fromJSONField(json);
    };
    UpdateSpotConfigEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateSpotConfigEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a UpdateSpotConfigEvent object"));
        }
        return UpdateSpotConfigEvent.fromFieldsWithTypes(content);
    };
    UpdateSpotConfigEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateSpotConfigEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateSpotConfigEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateSpotConfigEvent object"));
                        }
                        return [2 /*return*/, UpdateSpotConfigEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateSpotConfigEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::lp_pool::UpdateSpotConfigEvent";
    UpdateSpotConfigEvent.$numTypeParams = 0;
    return UpdateSpotConfigEvent;
}());
exports.UpdateSpotConfigEvent = UpdateSpotConfigEvent;
