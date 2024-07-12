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
exports.WithdrawProfitEvent = exports.UpdateStrategyEvent = exports.StrategyV2 = exports.StrategyPoolV2 = exports.StrategyPool = exports.Strategy = exports.RemoveStrategyVaultEvent = exports.NewStrategyVaultEvent = exports.NewStrategySignalEvent = exports.NewStrategyPoolEvent = exports.NewStrategyEventV2 = exports.NewStrategyEvent = exports.CloseStrategyEventV2 = exports.CloseStrategyEvent = exports.AutoBidEvent = exports.AddAuthorutyEvent = void 0;
exports.isAddAuthorutyEvent = isAddAuthorutyEvent;
exports.isAutoBidEvent = isAutoBidEvent;
exports.isCloseStrategyEvent = isCloseStrategyEvent;
exports.isCloseStrategyEventV2 = isCloseStrategyEventV2;
exports.isNewStrategyEvent = isNewStrategyEvent;
exports.isNewStrategyEventV2 = isNewStrategyEventV2;
exports.isNewStrategyPoolEvent = isNewStrategyPoolEvent;
exports.isNewStrategySignalEvent = isNewStrategySignalEvent;
exports.isNewStrategyVaultEvent = isNewStrategyVaultEvent;
exports.isRemoveStrategyVaultEvent = isRemoveStrategyVaultEvent;
exports.isStrategy = isStrategy;
exports.isStrategyPool = isStrategyPool;
exports.isStrategyPoolV2 = isStrategyPoolV2;
exports.isStrategyV2 = isStrategyV2;
exports.isUpdateStrategyEvent = isUpdateStrategyEvent;
exports.isWithdrawProfitEvent = isWithdrawProfitEvent;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x2/object/structs");
var structs_2 = require("../../0x2/table-vec/structs");
var structs_3 = require("../../0x2/vec-map/structs");
var structs_4 = require("../../0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded/vault/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== AddAuthorutyEvent =============================== */
function isAddAuthorutyEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::AddAuthorutyEvent"; }
var AddAuthorutyEvent = /** @class */ (function () {
    function AddAuthorutyEvent(typeArgs, fields) {
        this.$typeName = AddAuthorutyEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AddAuthorutyEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.newAuthority = fields.newAuthority;
        ;
        this.signer = fields.signer;
    }
    AddAuthorutyEvent.reified = function () {
        var _this = this;
        return { typeName: AddAuthorutyEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AddAuthorutyEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return AddAuthorutyEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return AddAuthorutyEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return AddAuthorutyEvent.fromBcs(data); }, bcs: AddAuthorutyEvent.bcs, fromJSONField: function (field) { return AddAuthorutyEvent.fromJSONField(field); }, fromJSON: function (json) { return AddAuthorutyEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return AddAuthorutyEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AddAuthorutyEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new AddAuthorutyEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(AddAuthorutyEvent, "r", {
        get: function () { return AddAuthorutyEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    AddAuthorutyEvent.phantom = function () { return (0, reified_1.phantom)(AddAuthorutyEvent.reified()); };
    Object.defineProperty(AddAuthorutyEvent, "p", {
        get: function () { return AddAuthorutyEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddAuthorutyEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AddAuthorutyEvent", {
                new_authority: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, })
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    AddAuthorutyEvent.fromFields = function (fields) { return AddAuthorutyEvent.reified().new({ newAuthority: (0, reified_1.decodeFromFields)("address", fields.new_authority), signer: (0, reified_1.decodeFromFields)("address", fields.signer) }); };
    AddAuthorutyEvent.fromFieldsWithTypes = function (item) {
        if (!isAddAuthorutyEvent(item.type)) {
            throw new Error("not a AddAuthorutyEvent type");
        }
        return AddAuthorutyEvent.reified().new({ newAuthority: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.new_authority), signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer) });
    };
    AddAuthorutyEvent.fromBcs = function (data) { return AddAuthorutyEvent.fromFields(AddAuthorutyEvent.bcs.parse(data)); };
    AddAuthorutyEvent.prototype.toJSONField = function () {
        return {
            newAuthority: this.newAuthority, signer: this.signer,
        };
    };
    AddAuthorutyEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    AddAuthorutyEvent.fromJSONField = function (field) { return AddAuthorutyEvent.reified().new({ newAuthority: (0, reified_1.decodeFromJSONField)("address", field.newAuthority), signer: (0, reified_1.decodeFromJSONField)("address", field.signer) }); };
    AddAuthorutyEvent.fromJSON = function (json) {
        if (json.$typeName !== AddAuthorutyEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AddAuthorutyEvent.fromJSONField(json);
    };
    AddAuthorutyEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAddAuthorutyEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a AddAuthorutyEvent object"));
    } return AddAuthorutyEvent.fromFieldsWithTypes(content); };
    AddAuthorutyEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AddAuthorutyEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAddAuthorutyEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AddAuthorutyEvent object"));
                        }
                        return [2 /*return*/, AddAuthorutyEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AddAuthorutyEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::AddAuthorutyEvent";
    AddAuthorutyEvent.$numTypeParams = 0;
    return AddAuthorutyEvent;
}());
exports.AddAuthorutyEvent = AddAuthorutyEvent;
/* ============================== AutoBidEvent =============================== */
function isAutoBidEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::AutoBidEvent"; }
var AutoBidEvent = /** @class */ (function () {
    function AutoBidEvent(typeArgs, fields) {
        this.$typeName = AutoBidEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AutoBidEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    AutoBidEvent.reified = function () {
        var _this = this;
        return { typeName: AutoBidEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AutoBidEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return AutoBidEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return AutoBidEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return AutoBidEvent.fromBcs(data); }, bcs: AutoBidEvent.bcs, fromJSONField: function (field) { return AutoBidEvent.fromJSONField(field); }, fromJSON: function (json) { return AutoBidEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return AutoBidEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AutoBidEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new AutoBidEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(AutoBidEvent, "r", {
        get: function () { return AutoBidEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    AutoBidEvent.phantom = function () { return (0, reified_1.phantom)(AutoBidEvent.reified()); };
    Object.defineProperty(AutoBidEvent, "p", {
        get: function () { return AutoBidEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoBidEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AutoBidEvent", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    AutoBidEvent.fromFields = function (fields) { return AutoBidEvent.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    AutoBidEvent.fromFieldsWithTypes = function (item) {
        if (!isAutoBidEvent(item.type)) {
            throw new Error("not a AutoBidEvent type");
        }
        return AutoBidEvent.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    AutoBidEvent.fromBcs = function (data) { return AutoBidEvent.fromFields(AutoBidEvent.bcs.parse(data)); };
    AutoBidEvent.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    AutoBidEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    AutoBidEvent.fromJSONField = function (field) { return AutoBidEvent.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    AutoBidEvent.fromJSON = function (json) {
        if (json.$typeName !== AutoBidEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AutoBidEvent.fromJSONField(json);
    };
    AutoBidEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAutoBidEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a AutoBidEvent object"));
    } return AutoBidEvent.fromFieldsWithTypes(content); };
    AutoBidEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AutoBidEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAutoBidEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AutoBidEvent object"));
                        }
                        return [2 /*return*/, AutoBidEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AutoBidEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::AutoBidEvent";
    AutoBidEvent.$numTypeParams = 0;
    return AutoBidEvent;
}());
exports.AutoBidEvent = AutoBidEvent;
/* ============================== CloseStrategyEvent =============================== */
function isCloseStrategyEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::CloseStrategyEvent"; }
var CloseStrategyEvent = /** @class */ (function () {
    function CloseStrategyEvent(typeArgs, fields) {
        this.$typeName = CloseStrategyEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([CloseStrategyEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.vaultIndex = fields.vaultIndex;
        ;
        this.signalIndex = fields.signalIndex;
        ;
        this.user = fields.user;
        ;
        this.pricePercentage = fields.pricePercentage;
        ;
        this.size = fields.size;
        ;
        this.maxTimes = fields.maxTimes;
        ;
        this.targetRounds = fields.targetRounds;
        ;
        this.u64Padding = fields.u64Padding;
        ;
        this.bidTimes = fields.bidTimes;
        ;
        this.bidRound = fields.bidRound;
        ;
        this.bidTsMs = fields.bidTsMs;
    }
    CloseStrategyEvent.reified = function () {
        var _this = this;
        return { typeName: CloseStrategyEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([CloseStrategyEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return CloseStrategyEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return CloseStrategyEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return CloseStrategyEvent.fromBcs(data); }, bcs: CloseStrategyEvent.bcs, fromJSONField: function (field) { return CloseStrategyEvent.fromJSONField(field); }, fromJSON: function (json) { return CloseStrategyEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return CloseStrategyEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, CloseStrategyEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new CloseStrategyEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(CloseStrategyEvent, "r", {
        get: function () { return CloseStrategyEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    CloseStrategyEvent.phantom = function () { return (0, reified_1.phantom)(CloseStrategyEvent.reified()); };
    Object.defineProperty(CloseStrategyEvent, "p", {
        get: function () { return CloseStrategyEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloseStrategyEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("CloseStrategyEvent", {
                vault_index: bcs_1.bcs.u64(), signal_index: bcs_1.bcs.u64(), user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), price_percentage: bcs_1.bcs.u64(), size: bcs_1.bcs.u64(), max_times: bcs_1.bcs.u64(), target_rounds: bcs_1.bcs.vector(bcs_1.bcs.u64()), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()), bid_times: bcs_1.bcs.u64(), bid_round: bcs_1.bcs.u64(), bid_ts_ms: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    CloseStrategyEvent.fromFields = function (fields) { return CloseStrategyEvent.reified().new({ vaultIndex: (0, reified_1.decodeFromFields)("u64", fields.vault_index), signalIndex: (0, reified_1.decodeFromFields)("u64", fields.signal_index), user: (0, reified_1.decodeFromFields)("address", fields.user), pricePercentage: (0, reified_1.decodeFromFields)("u64", fields.price_percentage), size: (0, reified_1.decodeFromFields)("u64", fields.size), maxTimes: (0, reified_1.decodeFromFields)("u64", fields.max_times), targetRounds: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.target_rounds), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding), bidTimes: (0, reified_1.decodeFromFields)("u64", fields.bid_times), bidRound: (0, reified_1.decodeFromFields)("u64", fields.bid_round), bidTsMs: (0, reified_1.decodeFromFields)("u64", fields.bid_ts_ms) }); };
    CloseStrategyEvent.fromFieldsWithTypes = function (item) {
        if (!isCloseStrategyEvent(item.type)) {
            throw new Error("not a CloseStrategyEvent type");
        }
        return CloseStrategyEvent.reified().new({ vaultIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.vault_index), signalIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.signal_index), user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), pricePercentage: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price_percentage), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size), maxTimes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_times), targetRounds: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.target_rounds), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding), bidTimes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_times), bidRound: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_round), bidTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_ts_ms) });
    };
    CloseStrategyEvent.fromBcs = function (data) { return CloseStrategyEvent.fromFields(CloseStrategyEvent.bcs.parse(data)); };
    CloseStrategyEvent.prototype.toJSONField = function () {
        return {
            vaultIndex: this.vaultIndex.toString(), signalIndex: this.signalIndex.toString(), user: this.user, pricePercentage: this.pricePercentage.toString(), size: this.size.toString(), maxTimes: this.maxTimes.toString(), targetRounds: (0, reified_1.fieldToJSON)("vector<u64>", this.targetRounds), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding), bidTimes: this.bidTimes.toString(), bidRound: this.bidRound.toString(), bidTsMs: this.bidTsMs.toString(),
        };
    };
    CloseStrategyEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    CloseStrategyEvent.fromJSONField = function (field) { return CloseStrategyEvent.reified().new({ vaultIndex: (0, reified_1.decodeFromJSONField)("u64", field.vaultIndex), signalIndex: (0, reified_1.decodeFromJSONField)("u64", field.signalIndex), user: (0, reified_1.decodeFromJSONField)("address", field.user), pricePercentage: (0, reified_1.decodeFromJSONField)("u64", field.pricePercentage), size: (0, reified_1.decodeFromJSONField)("u64", field.size), maxTimes: (0, reified_1.decodeFromJSONField)("u64", field.maxTimes), targetRounds: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.targetRounds), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding), bidTimes: (0, reified_1.decodeFromJSONField)("u64", field.bidTimes), bidRound: (0, reified_1.decodeFromJSONField)("u64", field.bidRound), bidTsMs: (0, reified_1.decodeFromJSONField)("u64", field.bidTsMs) }); };
    CloseStrategyEvent.fromJSON = function (json) {
        if (json.$typeName !== CloseStrategyEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return CloseStrategyEvent.fromJSONField(json);
    };
    CloseStrategyEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCloseStrategyEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a CloseStrategyEvent object"));
    } return CloseStrategyEvent.fromFieldsWithTypes(content); };
    CloseStrategyEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching CloseStrategyEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCloseStrategyEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a CloseStrategyEvent object"));
                        }
                        return [2 /*return*/, CloseStrategyEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    CloseStrategyEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::CloseStrategyEvent";
    CloseStrategyEvent.$numTypeParams = 0;
    return CloseStrategyEvent;
}());
exports.CloseStrategyEvent = CloseStrategyEvent;
/* ============================== CloseStrategyEventV2 =============================== */
function isCloseStrategyEventV2(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::CloseStrategyEventV2"; }
var CloseStrategyEventV2 = /** @class */ (function () {
    function CloseStrategyEventV2(typeArgs, fields) {
        this.$typeName = CloseStrategyEventV2.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([CloseStrategyEventV2.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.vaultIndex = fields.vaultIndex;
        ;
        this.signalIndex = fields.signalIndex;
        ;
        this.user = fields.user;
        ;
        this.pricePercentage = fields.pricePercentage;
        ;
        this.size = fields.size;
        ;
        this.maxTimes = fields.maxTimes;
        ;
        this.targetRounds = fields.targetRounds;
        ;
        this.u64Padding = fields.u64Padding;
        ;
        this.bidTimes = fields.bidTimes;
        ;
        this.bidRound = fields.bidRound;
        ;
        this.bidTsMs = fields.bidTsMs;
        ;
        this.bidRounds = fields.bidRounds;
        ;
        this.accumulatedProfit = fields.accumulatedProfit;
    }
    CloseStrategyEventV2.reified = function () {
        var _this = this;
        return { typeName: CloseStrategyEventV2.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([CloseStrategyEventV2.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return CloseStrategyEventV2.fromFields(fields); }, fromFieldsWithTypes: function (item) { return CloseStrategyEventV2.fromFieldsWithTypes(item); }, fromBcs: function (data) { return CloseStrategyEventV2.fromBcs(data); }, bcs: CloseStrategyEventV2.bcs, fromJSONField: function (field) { return CloseStrategyEventV2.fromJSONField(field); }, fromJSON: function (json) { return CloseStrategyEventV2.fromJSON(json); }, fromSuiParsedData: function (content) { return CloseStrategyEventV2.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, CloseStrategyEventV2.fetch(client, id)];
            }); }); }, new: function (fields) { return new CloseStrategyEventV2([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(CloseStrategyEventV2, "r", {
        get: function () { return CloseStrategyEventV2.reified(); },
        enumerable: false,
        configurable: true
    });
    CloseStrategyEventV2.phantom = function () { return (0, reified_1.phantom)(CloseStrategyEventV2.reified()); };
    Object.defineProperty(CloseStrategyEventV2, "p", {
        get: function () { return CloseStrategyEventV2.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloseStrategyEventV2, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("CloseStrategyEventV2", {
                vault_index: bcs_1.bcs.u64(), signal_index: bcs_1.bcs.u64(), user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), price_percentage: bcs_1.bcs.u64(), size: bcs_1.bcs.u64(), max_times: bcs_1.bcs.u64(), target_rounds: bcs_1.bcs.vector(bcs_1.bcs.u64()), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()), bid_times: bcs_1.bcs.u64(), bid_round: bcs_1.bcs.u64(), bid_ts_ms: bcs_1.bcs.u64(), bid_rounds: bcs_1.bcs.vector(bcs_1.bcs.u64()), accumulated_profit: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    CloseStrategyEventV2.fromFields = function (fields) { return CloseStrategyEventV2.reified().new({ vaultIndex: (0, reified_1.decodeFromFields)("u64", fields.vault_index), signalIndex: (0, reified_1.decodeFromFields)("u64", fields.signal_index), user: (0, reified_1.decodeFromFields)("address", fields.user), pricePercentage: (0, reified_1.decodeFromFields)("u64", fields.price_percentage), size: (0, reified_1.decodeFromFields)("u64", fields.size), maxTimes: (0, reified_1.decodeFromFields)("u64", fields.max_times), targetRounds: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.target_rounds), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding), bidTimes: (0, reified_1.decodeFromFields)("u64", fields.bid_times), bidRound: (0, reified_1.decodeFromFields)("u64", fields.bid_round), bidTsMs: (0, reified_1.decodeFromFields)("u64", fields.bid_ts_ms), bidRounds: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.bid_rounds), accumulatedProfit: (0, reified_1.decodeFromFields)("u64", fields.accumulated_profit) }); };
    CloseStrategyEventV2.fromFieldsWithTypes = function (item) {
        if (!isCloseStrategyEventV2(item.type)) {
            throw new Error("not a CloseStrategyEventV2 type");
        }
        return CloseStrategyEventV2.reified().new({ vaultIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.vault_index), signalIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.signal_index), user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), pricePercentage: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price_percentage), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size), maxTimes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_times), targetRounds: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.target_rounds), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding), bidTimes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_times), bidRound: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_round), bidTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_ts_ms), bidRounds: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.bid_rounds), accumulatedProfit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.accumulated_profit) });
    };
    CloseStrategyEventV2.fromBcs = function (data) { return CloseStrategyEventV2.fromFields(CloseStrategyEventV2.bcs.parse(data)); };
    CloseStrategyEventV2.prototype.toJSONField = function () {
        return {
            vaultIndex: this.vaultIndex.toString(), signalIndex: this.signalIndex.toString(), user: this.user, pricePercentage: this.pricePercentage.toString(), size: this.size.toString(), maxTimes: this.maxTimes.toString(), targetRounds: (0, reified_1.fieldToJSON)("vector<u64>", this.targetRounds), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding), bidTimes: this.bidTimes.toString(), bidRound: this.bidRound.toString(), bidTsMs: this.bidTsMs.toString(), bidRounds: (0, reified_1.fieldToJSON)("vector<u64>", this.bidRounds), accumulatedProfit: this.accumulatedProfit.toString(),
        };
    };
    CloseStrategyEventV2.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    CloseStrategyEventV2.fromJSONField = function (field) { return CloseStrategyEventV2.reified().new({ vaultIndex: (0, reified_1.decodeFromJSONField)("u64", field.vaultIndex), signalIndex: (0, reified_1.decodeFromJSONField)("u64", field.signalIndex), user: (0, reified_1.decodeFromJSONField)("address", field.user), pricePercentage: (0, reified_1.decodeFromJSONField)("u64", field.pricePercentage), size: (0, reified_1.decodeFromJSONField)("u64", field.size), maxTimes: (0, reified_1.decodeFromJSONField)("u64", field.maxTimes), targetRounds: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.targetRounds), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding), bidTimes: (0, reified_1.decodeFromJSONField)("u64", field.bidTimes), bidRound: (0, reified_1.decodeFromJSONField)("u64", field.bidRound), bidTsMs: (0, reified_1.decodeFromJSONField)("u64", field.bidTsMs), bidRounds: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.bidRounds), accumulatedProfit: (0, reified_1.decodeFromJSONField)("u64", field.accumulatedProfit) }); };
    CloseStrategyEventV2.fromJSON = function (json) {
        if (json.$typeName !== CloseStrategyEventV2.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return CloseStrategyEventV2.fromJSONField(json);
    };
    CloseStrategyEventV2.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCloseStrategyEventV2(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a CloseStrategyEventV2 object"));
    } return CloseStrategyEventV2.fromFieldsWithTypes(content); };
    CloseStrategyEventV2.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching CloseStrategyEventV2 object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCloseStrategyEventV2(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a CloseStrategyEventV2 object"));
                        }
                        return [2 /*return*/, CloseStrategyEventV2.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    CloseStrategyEventV2.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::CloseStrategyEventV2";
    CloseStrategyEventV2.$numTypeParams = 0;
    return CloseStrategyEventV2;
}());
exports.CloseStrategyEventV2 = CloseStrategyEventV2;
/* ============================== NewStrategyEvent =============================== */
function isNewStrategyEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyEvent"; }
var NewStrategyEvent = /** @class */ (function () {
    function NewStrategyEvent(typeArgs, fields) {
        this.$typeName = NewStrategyEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NewStrategyEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.vaultIndex = fields.vaultIndex;
        ;
        this.signalIndex = fields.signalIndex;
        ;
        this.user = fields.user;
        ;
        this.pricePercentage = fields.pricePercentage;
        ;
        this.size = fields.size;
        ;
        this.maxTimes = fields.maxTimes;
        ;
        this.targetRounds = fields.targetRounds;
    }
    NewStrategyEvent.reified = function () {
        var _this = this;
        return { typeName: NewStrategyEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([NewStrategyEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return NewStrategyEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return NewStrategyEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return NewStrategyEvent.fromBcs(data); }, bcs: NewStrategyEvent.bcs, fromJSONField: function (field) { return NewStrategyEvent.fromJSONField(field); }, fromJSON: function (json) { return NewStrategyEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return NewStrategyEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, NewStrategyEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new NewStrategyEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(NewStrategyEvent, "r", {
        get: function () { return NewStrategyEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    NewStrategyEvent.phantom = function () { return (0, reified_1.phantom)(NewStrategyEvent.reified()); };
    Object.defineProperty(NewStrategyEvent, "p", {
        get: function () { return NewStrategyEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewStrategyEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("NewStrategyEvent", {
                vault_index: bcs_1.bcs.u64(), signal_index: bcs_1.bcs.u64(), user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), price_percentage: bcs_1.bcs.u64(), size: bcs_1.bcs.u64(), max_times: bcs_1.bcs.u64(), target_rounds: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    NewStrategyEvent.fromFields = function (fields) { return NewStrategyEvent.reified().new({ vaultIndex: (0, reified_1.decodeFromFields)("u64", fields.vault_index), signalIndex: (0, reified_1.decodeFromFields)("u64", fields.signal_index), user: (0, reified_1.decodeFromFields)("address", fields.user), pricePercentage: (0, reified_1.decodeFromFields)("u64", fields.price_percentage), size: (0, reified_1.decodeFromFields)("u64", fields.size), maxTimes: (0, reified_1.decodeFromFields)("u64", fields.max_times), targetRounds: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.target_rounds) }); };
    NewStrategyEvent.fromFieldsWithTypes = function (item) {
        if (!isNewStrategyEvent(item.type)) {
            throw new Error("not a NewStrategyEvent type");
        }
        return NewStrategyEvent.reified().new({ vaultIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.vault_index), signalIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.signal_index), user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), pricePercentage: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price_percentage), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size), maxTimes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_times), targetRounds: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.target_rounds) });
    };
    NewStrategyEvent.fromBcs = function (data) { return NewStrategyEvent.fromFields(NewStrategyEvent.bcs.parse(data)); };
    NewStrategyEvent.prototype.toJSONField = function () {
        return {
            vaultIndex: this.vaultIndex.toString(), signalIndex: this.signalIndex.toString(), user: this.user, pricePercentage: this.pricePercentage.toString(), size: this.size.toString(), maxTimes: this.maxTimes.toString(), targetRounds: (0, reified_1.fieldToJSON)("vector<u64>", this.targetRounds),
        };
    };
    NewStrategyEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    NewStrategyEvent.fromJSONField = function (field) { return NewStrategyEvent.reified().new({ vaultIndex: (0, reified_1.decodeFromJSONField)("u64", field.vaultIndex), signalIndex: (0, reified_1.decodeFromJSONField)("u64", field.signalIndex), user: (0, reified_1.decodeFromJSONField)("address", field.user), pricePercentage: (0, reified_1.decodeFromJSONField)("u64", field.pricePercentage), size: (0, reified_1.decodeFromJSONField)("u64", field.size), maxTimes: (0, reified_1.decodeFromJSONField)("u64", field.maxTimes), targetRounds: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.targetRounds) }); };
    NewStrategyEvent.fromJSON = function (json) {
        if (json.$typeName !== NewStrategyEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewStrategyEvent.fromJSONField(json);
    };
    NewStrategyEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewStrategyEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a NewStrategyEvent object"));
    } return NewStrategyEvent.fromFieldsWithTypes(content); };
    NewStrategyEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching NewStrategyEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewStrategyEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a NewStrategyEvent object"));
                        }
                        return [2 /*return*/, NewStrategyEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    NewStrategyEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyEvent";
    NewStrategyEvent.$numTypeParams = 0;
    return NewStrategyEvent;
}());
exports.NewStrategyEvent = NewStrategyEvent;
/* ============================== NewStrategyEventV2 =============================== */
function isNewStrategyEventV2(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyEventV2"; }
var NewStrategyEventV2 = /** @class */ (function () {
    function NewStrategyEventV2(typeArgs, fields) {
        this.$typeName = NewStrategyEventV2.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NewStrategyEventV2.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.vaultIndex = fields.vaultIndex;
        ;
        this.signalIndex = fields.signalIndex;
        ;
        this.user = fields.user;
        ;
        this.pricePercentage = fields.pricePercentage;
        ;
        this.size = fields.size;
        ;
        this.maxTimes = fields.maxTimes;
        ;
        this.targetRounds = fields.targetRounds;
        ;
        this.depositAmount = fields.depositAmount;
    }
    NewStrategyEventV2.reified = function () {
        var _this = this;
        return { typeName: NewStrategyEventV2.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([NewStrategyEventV2.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return NewStrategyEventV2.fromFields(fields); }, fromFieldsWithTypes: function (item) { return NewStrategyEventV2.fromFieldsWithTypes(item); }, fromBcs: function (data) { return NewStrategyEventV2.fromBcs(data); }, bcs: NewStrategyEventV2.bcs, fromJSONField: function (field) { return NewStrategyEventV2.fromJSONField(field); }, fromJSON: function (json) { return NewStrategyEventV2.fromJSON(json); }, fromSuiParsedData: function (content) { return NewStrategyEventV2.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, NewStrategyEventV2.fetch(client, id)];
            }); }); }, new: function (fields) { return new NewStrategyEventV2([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(NewStrategyEventV2, "r", {
        get: function () { return NewStrategyEventV2.reified(); },
        enumerable: false,
        configurable: true
    });
    NewStrategyEventV2.phantom = function () { return (0, reified_1.phantom)(NewStrategyEventV2.reified()); };
    Object.defineProperty(NewStrategyEventV2, "p", {
        get: function () { return NewStrategyEventV2.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewStrategyEventV2, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("NewStrategyEventV2", {
                vault_index: bcs_1.bcs.u64(), signal_index: bcs_1.bcs.u64(), user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), price_percentage: bcs_1.bcs.u64(), size: bcs_1.bcs.u64(), max_times: bcs_1.bcs.u64(), target_rounds: bcs_1.bcs.vector(bcs_1.bcs.u64()), deposit_amount: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    NewStrategyEventV2.fromFields = function (fields) { return NewStrategyEventV2.reified().new({ vaultIndex: (0, reified_1.decodeFromFields)("u64", fields.vault_index), signalIndex: (0, reified_1.decodeFromFields)("u64", fields.signal_index), user: (0, reified_1.decodeFromFields)("address", fields.user), pricePercentage: (0, reified_1.decodeFromFields)("u64", fields.price_percentage), size: (0, reified_1.decodeFromFields)("u64", fields.size), maxTimes: (0, reified_1.decodeFromFields)("u64", fields.max_times), targetRounds: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.target_rounds), depositAmount: (0, reified_1.decodeFromFields)("u64", fields.deposit_amount) }); };
    NewStrategyEventV2.fromFieldsWithTypes = function (item) {
        if (!isNewStrategyEventV2(item.type)) {
            throw new Error("not a NewStrategyEventV2 type");
        }
        return NewStrategyEventV2.reified().new({ vaultIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.vault_index), signalIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.signal_index), user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), pricePercentage: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price_percentage), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size), maxTimes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_times), targetRounds: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.target_rounds), depositAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deposit_amount) });
    };
    NewStrategyEventV2.fromBcs = function (data) { return NewStrategyEventV2.fromFields(NewStrategyEventV2.bcs.parse(data)); };
    NewStrategyEventV2.prototype.toJSONField = function () {
        return {
            vaultIndex: this.vaultIndex.toString(), signalIndex: this.signalIndex.toString(), user: this.user, pricePercentage: this.pricePercentage.toString(), size: this.size.toString(), maxTimes: this.maxTimes.toString(), targetRounds: (0, reified_1.fieldToJSON)("vector<u64>", this.targetRounds), depositAmount: this.depositAmount.toString(),
        };
    };
    NewStrategyEventV2.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    NewStrategyEventV2.fromJSONField = function (field) { return NewStrategyEventV2.reified().new({ vaultIndex: (0, reified_1.decodeFromJSONField)("u64", field.vaultIndex), signalIndex: (0, reified_1.decodeFromJSONField)("u64", field.signalIndex), user: (0, reified_1.decodeFromJSONField)("address", field.user), pricePercentage: (0, reified_1.decodeFromJSONField)("u64", field.pricePercentage), size: (0, reified_1.decodeFromJSONField)("u64", field.size), maxTimes: (0, reified_1.decodeFromJSONField)("u64", field.maxTimes), targetRounds: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.targetRounds), depositAmount: (0, reified_1.decodeFromJSONField)("u64", field.depositAmount) }); };
    NewStrategyEventV2.fromJSON = function (json) {
        if (json.$typeName !== NewStrategyEventV2.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewStrategyEventV2.fromJSONField(json);
    };
    NewStrategyEventV2.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewStrategyEventV2(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a NewStrategyEventV2 object"));
    } return NewStrategyEventV2.fromFieldsWithTypes(content); };
    NewStrategyEventV2.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching NewStrategyEventV2 object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewStrategyEventV2(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a NewStrategyEventV2 object"));
                        }
                        return [2 /*return*/, NewStrategyEventV2.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    NewStrategyEventV2.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyEventV2";
    NewStrategyEventV2.$numTypeParams = 0;
    return NewStrategyEventV2;
}());
exports.NewStrategyEventV2 = NewStrategyEventV2;
/* ============================== NewStrategyPoolEvent =============================== */
function isNewStrategyPoolEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyPoolEvent"; }
var NewStrategyPoolEvent = /** @class */ (function () {
    function NewStrategyPoolEvent(typeArgs, fields) {
        this.$typeName = NewStrategyPoolEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NewStrategyPoolEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.signer = fields.signer;
    }
    NewStrategyPoolEvent.reified = function () {
        var _this = this;
        return { typeName: NewStrategyPoolEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([NewStrategyPoolEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return NewStrategyPoolEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return NewStrategyPoolEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return NewStrategyPoolEvent.fromBcs(data); }, bcs: NewStrategyPoolEvent.bcs, fromJSONField: function (field) { return NewStrategyPoolEvent.fromJSONField(field); }, fromJSON: function (json) { return NewStrategyPoolEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return NewStrategyPoolEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, NewStrategyPoolEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new NewStrategyPoolEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(NewStrategyPoolEvent, "r", {
        get: function () { return NewStrategyPoolEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    NewStrategyPoolEvent.phantom = function () { return (0, reified_1.phantom)(NewStrategyPoolEvent.reified()); };
    Object.defineProperty(NewStrategyPoolEvent, "p", {
        get: function () { return NewStrategyPoolEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewStrategyPoolEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("NewStrategyPoolEvent", {
                id: structs_1.ID.bcs, signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, })
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    NewStrategyPoolEvent.fromFields = function (fields) { return NewStrategyPoolEvent.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.ID.reified(), fields.id), signer: (0, reified_1.decodeFromFields)("address", fields.signer) }); };
    NewStrategyPoolEvent.fromFieldsWithTypes = function (item) {
        if (!isNewStrategyPoolEvent(item.type)) {
            throw new Error("not a NewStrategyPoolEvent type");
        }
        return NewStrategyPoolEvent.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.ID.reified(), item.fields.id), signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer) });
    };
    NewStrategyPoolEvent.fromBcs = function (data) { return NewStrategyPoolEvent.fromFields(NewStrategyPoolEvent.bcs.parse(data)); };
    NewStrategyPoolEvent.prototype.toJSONField = function () {
        return {
            id: this.id, signer: this.signer,
        };
    };
    NewStrategyPoolEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    NewStrategyPoolEvent.fromJSONField = function (field) { return NewStrategyPoolEvent.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.ID.reified(), field.id), signer: (0, reified_1.decodeFromJSONField)("address", field.signer) }); };
    NewStrategyPoolEvent.fromJSON = function (json) {
        if (json.$typeName !== NewStrategyPoolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewStrategyPoolEvent.fromJSONField(json);
    };
    NewStrategyPoolEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewStrategyPoolEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a NewStrategyPoolEvent object"));
    } return NewStrategyPoolEvent.fromFieldsWithTypes(content); };
    NewStrategyPoolEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching NewStrategyPoolEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewStrategyPoolEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a NewStrategyPoolEvent object"));
                        }
                        return [2 /*return*/, NewStrategyPoolEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    NewStrategyPoolEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyPoolEvent";
    NewStrategyPoolEvent.$numTypeParams = 0;
    return NewStrategyPoolEvent;
}());
exports.NewStrategyPoolEvent = NewStrategyPoolEvent;
/* ============================== NewStrategySignalEvent =============================== */
function isNewStrategySignalEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategySignalEvent"; }
var NewStrategySignalEvent = /** @class */ (function () {
    function NewStrategySignalEvent(typeArgs, fields) {
        this.$typeName = NewStrategySignalEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NewStrategySignalEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.vaultIndex = fields.vaultIndex;
        ;
        this.signalIndex = fields.signalIndex;
        ;
        this.signer = fields.signer;
    }
    NewStrategySignalEvent.reified = function () {
        var _this = this;
        return { typeName: NewStrategySignalEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([NewStrategySignalEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return NewStrategySignalEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return NewStrategySignalEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return NewStrategySignalEvent.fromBcs(data); }, bcs: NewStrategySignalEvent.bcs, fromJSONField: function (field) { return NewStrategySignalEvent.fromJSONField(field); }, fromJSON: function (json) { return NewStrategySignalEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return NewStrategySignalEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, NewStrategySignalEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new NewStrategySignalEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(NewStrategySignalEvent, "r", {
        get: function () { return NewStrategySignalEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    NewStrategySignalEvent.phantom = function () { return (0, reified_1.phantom)(NewStrategySignalEvent.reified()); };
    Object.defineProperty(NewStrategySignalEvent, "p", {
        get: function () { return NewStrategySignalEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewStrategySignalEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("NewStrategySignalEvent", {
                id: structs_1.ID.bcs, vault_index: bcs_1.bcs.u64(), signal_index: bcs_1.bcs.u64(), signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, })
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    NewStrategySignalEvent.fromFields = function (fields) { return NewStrategySignalEvent.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.ID.reified(), fields.id), vaultIndex: (0, reified_1.decodeFromFields)("u64", fields.vault_index), signalIndex: (0, reified_1.decodeFromFields)("u64", fields.signal_index), signer: (0, reified_1.decodeFromFields)("address", fields.signer) }); };
    NewStrategySignalEvent.fromFieldsWithTypes = function (item) {
        if (!isNewStrategySignalEvent(item.type)) {
            throw new Error("not a NewStrategySignalEvent type");
        }
        return NewStrategySignalEvent.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.ID.reified(), item.fields.id), vaultIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.vault_index), signalIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.signal_index), signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer) });
    };
    NewStrategySignalEvent.fromBcs = function (data) { return NewStrategySignalEvent.fromFields(NewStrategySignalEvent.bcs.parse(data)); };
    NewStrategySignalEvent.prototype.toJSONField = function () {
        return {
            id: this.id, vaultIndex: this.vaultIndex.toString(), signalIndex: this.signalIndex.toString(), signer: this.signer,
        };
    };
    NewStrategySignalEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    NewStrategySignalEvent.fromJSONField = function (field) { return NewStrategySignalEvent.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.ID.reified(), field.id), vaultIndex: (0, reified_1.decodeFromJSONField)("u64", field.vaultIndex), signalIndex: (0, reified_1.decodeFromJSONField)("u64", field.signalIndex), signer: (0, reified_1.decodeFromJSONField)("address", field.signer) }); };
    NewStrategySignalEvent.fromJSON = function (json) {
        if (json.$typeName !== NewStrategySignalEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewStrategySignalEvent.fromJSONField(json);
    };
    NewStrategySignalEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewStrategySignalEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a NewStrategySignalEvent object"));
    } return NewStrategySignalEvent.fromFieldsWithTypes(content); };
    NewStrategySignalEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching NewStrategySignalEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewStrategySignalEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a NewStrategySignalEvent object"));
                        }
                        return [2 /*return*/, NewStrategySignalEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    NewStrategySignalEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategySignalEvent";
    NewStrategySignalEvent.$numTypeParams = 0;
    return NewStrategySignalEvent;
}());
exports.NewStrategySignalEvent = NewStrategySignalEvent;
/* ============================== NewStrategyVaultEvent =============================== */
function isNewStrategyVaultEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyVaultEvent"; }
var NewStrategyVaultEvent = /** @class */ (function () {
    function NewStrategyVaultEvent(typeArgs, fields) {
        this.$typeName = NewStrategyVaultEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NewStrategyVaultEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.vaultIndex = fields.vaultIndex;
        ;
        this.signer = fields.signer;
    }
    NewStrategyVaultEvent.reified = function () {
        var _this = this;
        return { typeName: NewStrategyVaultEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([NewStrategyVaultEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return NewStrategyVaultEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return NewStrategyVaultEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return NewStrategyVaultEvent.fromBcs(data); }, bcs: NewStrategyVaultEvent.bcs, fromJSONField: function (field) { return NewStrategyVaultEvent.fromJSONField(field); }, fromJSON: function (json) { return NewStrategyVaultEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return NewStrategyVaultEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, NewStrategyVaultEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new NewStrategyVaultEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(NewStrategyVaultEvent, "r", {
        get: function () { return NewStrategyVaultEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    NewStrategyVaultEvent.phantom = function () { return (0, reified_1.phantom)(NewStrategyVaultEvent.reified()); };
    Object.defineProperty(NewStrategyVaultEvent, "p", {
        get: function () { return NewStrategyVaultEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewStrategyVaultEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("NewStrategyVaultEvent", {
                id: structs_1.ID.bcs, vault_index: bcs_1.bcs.u64(), signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, })
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    NewStrategyVaultEvent.fromFields = function (fields) { return NewStrategyVaultEvent.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.ID.reified(), fields.id), vaultIndex: (0, reified_1.decodeFromFields)("u64", fields.vault_index), signer: (0, reified_1.decodeFromFields)("address", fields.signer) }); };
    NewStrategyVaultEvent.fromFieldsWithTypes = function (item) {
        if (!isNewStrategyVaultEvent(item.type)) {
            throw new Error("not a NewStrategyVaultEvent type");
        }
        return NewStrategyVaultEvent.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.ID.reified(), item.fields.id), vaultIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.vault_index), signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer) });
    };
    NewStrategyVaultEvent.fromBcs = function (data) { return NewStrategyVaultEvent.fromFields(NewStrategyVaultEvent.bcs.parse(data)); };
    NewStrategyVaultEvent.prototype.toJSONField = function () {
        return {
            id: this.id, vaultIndex: this.vaultIndex.toString(), signer: this.signer,
        };
    };
    NewStrategyVaultEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    NewStrategyVaultEvent.fromJSONField = function (field) { return NewStrategyVaultEvent.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.ID.reified(), field.id), vaultIndex: (0, reified_1.decodeFromJSONField)("u64", field.vaultIndex), signer: (0, reified_1.decodeFromJSONField)("address", field.signer) }); };
    NewStrategyVaultEvent.fromJSON = function (json) {
        if (json.$typeName !== NewStrategyVaultEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewStrategyVaultEvent.fromJSONField(json);
    };
    NewStrategyVaultEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewStrategyVaultEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a NewStrategyVaultEvent object"));
    } return NewStrategyVaultEvent.fromFieldsWithTypes(content); };
    NewStrategyVaultEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching NewStrategyVaultEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewStrategyVaultEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a NewStrategyVaultEvent object"));
                        }
                        return [2 /*return*/, NewStrategyVaultEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    NewStrategyVaultEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::NewStrategyVaultEvent";
    NewStrategyVaultEvent.$numTypeParams = 0;
    return NewStrategyVaultEvent;
}());
exports.NewStrategyVaultEvent = NewStrategyVaultEvent;
/* ============================== RemoveStrategyVaultEvent =============================== */
function isRemoveStrategyVaultEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x197e13a257d67211cd3bc9ff5b93ffd298afedb43f4c7cbdd9438f5e4e823f4f::auto_bid::RemoveStrategyVaultEvent"; }
var RemoveStrategyVaultEvent = /** @class */ (function () {
    function RemoveStrategyVaultEvent(typeArgs, fields) {
        this.$typeName = RemoveStrategyVaultEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RemoveStrategyVaultEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.vaultIndex = fields.vaultIndex;
        ;
        this.signer = fields.signer;
    }
    RemoveStrategyVaultEvent.reified = function () {
        var _this = this;
        return { typeName: RemoveStrategyVaultEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RemoveStrategyVaultEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RemoveStrategyVaultEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RemoveStrategyVaultEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RemoveStrategyVaultEvent.fromBcs(data); }, bcs: RemoveStrategyVaultEvent.bcs, fromJSONField: function (field) { return RemoveStrategyVaultEvent.fromJSONField(field); }, fromJSON: function (json) { return RemoveStrategyVaultEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return RemoveStrategyVaultEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RemoveStrategyVaultEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new RemoveStrategyVaultEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RemoveStrategyVaultEvent, "r", {
        get: function () { return RemoveStrategyVaultEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    RemoveStrategyVaultEvent.phantom = function () { return (0, reified_1.phantom)(RemoveStrategyVaultEvent.reified()); };
    Object.defineProperty(RemoveStrategyVaultEvent, "p", {
        get: function () { return RemoveStrategyVaultEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoveStrategyVaultEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RemoveStrategyVaultEvent", {
                id: structs_1.ID.bcs, vault_index: bcs_1.bcs.u64(), signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, })
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RemoveStrategyVaultEvent.fromFields = function (fields) { return RemoveStrategyVaultEvent.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.ID.reified(), fields.id), vaultIndex: (0, reified_1.decodeFromFields)("u64", fields.vault_index), signer: (0, reified_1.decodeFromFields)("address", fields.signer) }); };
    RemoveStrategyVaultEvent.fromFieldsWithTypes = function (item) {
        if (!isRemoveStrategyVaultEvent(item.type)) {
            throw new Error("not a RemoveStrategyVaultEvent type");
        }
        return RemoveStrategyVaultEvent.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.ID.reified(), item.fields.id), vaultIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.vault_index), signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer) });
    };
    RemoveStrategyVaultEvent.fromBcs = function (data) { return RemoveStrategyVaultEvent.fromFields(RemoveStrategyVaultEvent.bcs.parse(data)); };
    RemoveStrategyVaultEvent.prototype.toJSONField = function () {
        return {
            id: this.id, vaultIndex: this.vaultIndex.toString(), signer: this.signer,
        };
    };
    RemoveStrategyVaultEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RemoveStrategyVaultEvent.fromJSONField = function (field) { return RemoveStrategyVaultEvent.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.ID.reified(), field.id), vaultIndex: (0, reified_1.decodeFromJSONField)("u64", field.vaultIndex), signer: (0, reified_1.decodeFromJSONField)("address", field.signer) }); };
    RemoveStrategyVaultEvent.fromJSON = function (json) {
        if (json.$typeName !== RemoveStrategyVaultEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RemoveStrategyVaultEvent.fromJSONField(json);
    };
    RemoveStrategyVaultEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRemoveStrategyVaultEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RemoveStrategyVaultEvent object"));
    } return RemoveStrategyVaultEvent.fromFieldsWithTypes(content); };
    RemoveStrategyVaultEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RemoveStrategyVaultEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRemoveStrategyVaultEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RemoveStrategyVaultEvent object"));
                        }
                        return [2 /*return*/, RemoveStrategyVaultEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RemoveStrategyVaultEvent.$typeName = "0x197e13a257d67211cd3bc9ff5b93ffd298afedb43f4c7cbdd9438f5e4e823f4f::auto_bid::RemoveStrategyVaultEvent";
    RemoveStrategyVaultEvent.$numTypeParams = 0;
    return RemoveStrategyVaultEvent;
}());
exports.RemoveStrategyVaultEvent = RemoveStrategyVaultEvent;
/* ============================== Strategy =============================== */
function isStrategy(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::Strategy"; }
var Strategy = /** @class */ (function () {
    function Strategy(typeArgs, fields) {
        this.$typeName = Strategy.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Strategy.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.vaultIndex = fields.vaultIndex;
        ;
        this.signalIndex = fields.signalIndex;
        ;
        this.user = fields.user;
        ;
        this.pricePercentage = fields.pricePercentage;
        ;
        this.size = fields.size;
        ;
        this.maxTimes = fields.maxTimes;
        ;
        this.targetRounds = fields.targetRounds;
        ;
        this.receipts = fields.receipts;
        ;
        this.active = fields.active;
        ;
        this.u64Padding = fields.u64Padding;
        ;
        this.bidTimes = fields.bidTimes;
        ;
        this.bidRound = fields.bidRound;
        ;
        this.bidTsMs = fields.bidTsMs;
    }
    Strategy.reified = function () {
        var _this = this;
        return { typeName: Strategy.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Strategy.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Strategy.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Strategy.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Strategy.fromBcs(data); }, bcs: Strategy.bcs, fromJSONField: function (field) { return Strategy.fromJSONField(field); }, fromJSON: function (json) { return Strategy.fromJSON(json); }, fromSuiParsedData: function (content) { return Strategy.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Strategy.fetch(client, id)];
            }); }); }, new: function (fields) { return new Strategy([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Strategy, "r", {
        get: function () { return Strategy.reified(); },
        enumerable: false,
        configurable: true
    });
    Strategy.phantom = function () { return (0, reified_1.phantom)(Strategy.reified()); };
    Object.defineProperty(Strategy, "p", {
        get: function () { return Strategy.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Strategy, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Strategy", {
                id: structs_1.UID.bcs, vault_index: bcs_1.bcs.u64(), signal_index: bcs_1.bcs.u64(), user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), price_percentage: bcs_1.bcs.u64(), size: bcs_1.bcs.u64(), max_times: bcs_1.bcs.u64(), target_rounds: bcs_1.bcs.vector(bcs_1.bcs.u64()), receipts: bcs_1.bcs.vector(structs_4.TypusBidReceipt.bcs), active: bcs_1.bcs.bool(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()), bid_times: bcs_1.bcs.u64(), bid_round: bcs_1.bcs.u64(), bid_ts_ms: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Strategy.fromFields = function (fields) { return Strategy.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), vaultIndex: (0, reified_1.decodeFromFields)("u64", fields.vault_index), signalIndex: (0, reified_1.decodeFromFields)("u64", fields.signal_index), user: (0, reified_1.decodeFromFields)("address", fields.user), pricePercentage: (0, reified_1.decodeFromFields)("u64", fields.price_percentage), size: (0, reified_1.decodeFromFields)("u64", fields.size), maxTimes: (0, reified_1.decodeFromFields)("u64", fields.max_times), targetRounds: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.target_rounds), receipts: (0, reified_1.decodeFromFields)(reified.vector(structs_4.TypusBidReceipt.reified()), fields.receipts), active: (0, reified_1.decodeFromFields)("bool", fields.active), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding), bidTimes: (0, reified_1.decodeFromFields)("u64", fields.bid_times), bidRound: (0, reified_1.decodeFromFields)("u64", fields.bid_round), bidTsMs: (0, reified_1.decodeFromFields)("u64", fields.bid_ts_ms) }); };
    Strategy.fromFieldsWithTypes = function (item) {
        if (!isStrategy(item.type)) {
            throw new Error("not a Strategy type");
        }
        return Strategy.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), vaultIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.vault_index), signalIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.signal_index), user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), pricePercentage: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price_percentage), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size), maxTimes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_times), targetRounds: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.target_rounds), receipts: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_4.TypusBidReceipt.reified()), item.fields.receipts), active: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.active), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding), bidTimes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_times), bidRound: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_round), bidTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_ts_ms) });
    };
    Strategy.fromBcs = function (data) { return Strategy.fromFields(Strategy.bcs.parse(data)); };
    Strategy.prototype.toJSONField = function () {
        return {
            id: this.id, vaultIndex: this.vaultIndex.toString(), signalIndex: this.signalIndex.toString(), user: this.user, pricePercentage: this.pricePercentage.toString(), size: this.size.toString(), maxTimes: this.maxTimes.toString(), targetRounds: (0, reified_1.fieldToJSON)("vector<u64>", this.targetRounds), receipts: (0, reified_1.fieldToJSON)("vector<0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::TypusBidReceipt>", this.receipts), active: this.active, u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding), bidTimes: this.bidTimes.toString(), bidRound: this.bidRound.toString(), bidTsMs: this.bidTsMs.toString(),
        };
    };
    Strategy.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Strategy.fromJSONField = function (field) { return Strategy.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), vaultIndex: (0, reified_1.decodeFromJSONField)("u64", field.vaultIndex), signalIndex: (0, reified_1.decodeFromJSONField)("u64", field.signalIndex), user: (0, reified_1.decodeFromJSONField)("address", field.user), pricePercentage: (0, reified_1.decodeFromJSONField)("u64", field.pricePercentage), size: (0, reified_1.decodeFromJSONField)("u64", field.size), maxTimes: (0, reified_1.decodeFromJSONField)("u64", field.maxTimes), targetRounds: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.targetRounds), receipts: (0, reified_1.decodeFromJSONField)(reified.vector(structs_4.TypusBidReceipt.reified()), field.receipts), active: (0, reified_1.decodeFromJSONField)("bool", field.active), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding), bidTimes: (0, reified_1.decodeFromJSONField)("u64", field.bidTimes), bidRound: (0, reified_1.decodeFromJSONField)("u64", field.bidRound), bidTsMs: (0, reified_1.decodeFromJSONField)("u64", field.bidTsMs) }); };
    Strategy.fromJSON = function (json) {
        if (json.$typeName !== Strategy.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Strategy.fromJSONField(json);
    };
    Strategy.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStrategy(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Strategy object"));
    } return Strategy.fromFieldsWithTypes(content); };
    Strategy.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Strategy object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStrategy(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Strategy object"));
                        }
                        return [2 /*return*/, Strategy.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Strategy.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::Strategy";
    Strategy.$numTypeParams = 0;
    return Strategy;
}());
exports.Strategy = Strategy;
/* ============================== StrategyPool =============================== */
function isStrategyPool(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyPool"; }
var StrategyPool = /** @class */ (function () {
    function StrategyPool(typeArgs, fields) {
        this.$typeName = StrategyPool.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([StrategyPool.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.strategies = fields.strategies;
        ;
        this.authority = fields.authority;
    }
    StrategyPool.reified = function () {
        var _this = this;
        return { typeName: StrategyPool.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([StrategyPool.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return StrategyPool.fromFields(fields); }, fromFieldsWithTypes: function (item) { return StrategyPool.fromFieldsWithTypes(item); }, fromBcs: function (data) { return StrategyPool.fromBcs(data); }, bcs: StrategyPool.bcs, fromJSONField: function (field) { return StrategyPool.fromJSONField(field); }, fromJSON: function (json) { return StrategyPool.fromJSON(json); }, fromSuiParsedData: function (content) { return StrategyPool.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, StrategyPool.fetch(client, id)];
            }); }); }, new: function (fields) { return new StrategyPool([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(StrategyPool, "r", {
        get: function () { return StrategyPool.reified(); },
        enumerable: false,
        configurable: true
    });
    StrategyPool.phantom = function () { return (0, reified_1.phantom)(StrategyPool.reified()); };
    Object.defineProperty(StrategyPool, "p", {
        get: function () { return StrategyPool.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StrategyPool, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("StrategyPool", {
                id: structs_1.UID.bcs, strategies: structs_3.VecMap.bcs(bcs_1.bcs.u64(), structs_3.VecMap.bcs(bcs_1.bcs.u64(), structs_2.TableVec.bcs)), authority: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    StrategyPool.fromFields = function (fields) { return StrategyPool.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), strategies: (0, reified_1.decodeFromFields)(structs_3.VecMap.reified("u64", structs_3.VecMap.reified("u64", structs_2.TableVec.reified(reified.phantom(Strategy.reified())))), fields.strategies), authority: (0, reified_1.decodeFromFields)(reified.vector("address"), fields.authority) }); };
    StrategyPool.fromFieldsWithTypes = function (item) {
        if (!isStrategyPool(item.type)) {
            throw new Error("not a StrategyPool type");
        }
        return StrategyPool.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), strategies: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.VecMap.reified("u64", structs_3.VecMap.reified("u64", structs_2.TableVec.reified(reified.phantom(Strategy.reified())))), item.fields.strategies), authority: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("address"), item.fields.authority) });
    };
    StrategyPool.fromBcs = function (data) { return StrategyPool.fromFields(StrategyPool.bcs.parse(data)); };
    StrategyPool.prototype.toJSONField = function () {
        return {
            id: this.id, strategies: this.strategies.toJSONField(), authority: (0, reified_1.fieldToJSON)("vector<address>", this.authority),
        };
    };
    StrategyPool.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    StrategyPool.fromJSONField = function (field) { return StrategyPool.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), strategies: (0, reified_1.decodeFromJSONField)(structs_3.VecMap.reified("u64", structs_3.VecMap.reified("u64", structs_2.TableVec.reified(reified.phantom(Strategy.reified())))), field.strategies), authority: (0, reified_1.decodeFromJSONField)(reified.vector("address"), field.authority) }); };
    StrategyPool.fromJSON = function (json) {
        if (json.$typeName !== StrategyPool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StrategyPool.fromJSONField(json);
    };
    StrategyPool.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStrategyPool(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a StrategyPool object"));
    } return StrategyPool.fromFieldsWithTypes(content); };
    StrategyPool.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching StrategyPool object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStrategyPool(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a StrategyPool object"));
                        }
                        return [2 /*return*/, StrategyPool.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    StrategyPool.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyPool";
    StrategyPool.$numTypeParams = 0;
    return StrategyPool;
}());
exports.StrategyPool = StrategyPool;
/* ============================== StrategyPoolV2 =============================== */
function isStrategyPoolV2(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyPoolV2"; }
var StrategyPoolV2 = /** @class */ (function () {
    function StrategyPoolV2(typeArgs, fields) {
        this.$typeName = StrategyPoolV2.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([StrategyPoolV2.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.strategies = fields.strategies;
        ;
        this.authority = fields.authority;
    }
    StrategyPoolV2.reified = function () {
        var _this = this;
        return { typeName: StrategyPoolV2.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([StrategyPoolV2.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return StrategyPoolV2.fromFields(fields); }, fromFieldsWithTypes: function (item) { return StrategyPoolV2.fromFieldsWithTypes(item); }, fromBcs: function (data) { return StrategyPoolV2.fromBcs(data); }, bcs: StrategyPoolV2.bcs, fromJSONField: function (field) { return StrategyPoolV2.fromJSONField(field); }, fromJSON: function (json) { return StrategyPoolV2.fromJSON(json); }, fromSuiParsedData: function (content) { return StrategyPoolV2.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, StrategyPoolV2.fetch(client, id)];
            }); }); }, new: function (fields) { return new StrategyPoolV2([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(StrategyPoolV2, "r", {
        get: function () { return StrategyPoolV2.reified(); },
        enumerable: false,
        configurable: true
    });
    StrategyPoolV2.phantom = function () { return (0, reified_1.phantom)(StrategyPoolV2.reified()); };
    Object.defineProperty(StrategyPoolV2, "p", {
        get: function () { return StrategyPoolV2.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StrategyPoolV2, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("StrategyPoolV2", {
                id: structs_1.UID.bcs, strategies: structs_3.VecMap.bcs(bcs_1.bcs.u64(), structs_3.VecMap.bcs(bcs_1.bcs.u64(), structs_2.TableVec.bcs)), authority: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    StrategyPoolV2.fromFields = function (fields) { return StrategyPoolV2.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), strategies: (0, reified_1.decodeFromFields)(structs_3.VecMap.reified("u64", structs_3.VecMap.reified("u64", structs_2.TableVec.reified(reified.phantom(StrategyV2.reified())))), fields.strategies), authority: (0, reified_1.decodeFromFields)(reified.vector("address"), fields.authority) }); };
    StrategyPoolV2.fromFieldsWithTypes = function (item) {
        if (!isStrategyPoolV2(item.type)) {
            throw new Error("not a StrategyPoolV2 type");
        }
        return StrategyPoolV2.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), strategies: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.VecMap.reified("u64", structs_3.VecMap.reified("u64", structs_2.TableVec.reified(reified.phantom(StrategyV2.reified())))), item.fields.strategies), authority: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("address"), item.fields.authority) });
    };
    StrategyPoolV2.fromBcs = function (data) { return StrategyPoolV2.fromFields(StrategyPoolV2.bcs.parse(data)); };
    StrategyPoolV2.prototype.toJSONField = function () {
        return {
            id: this.id, strategies: this.strategies.toJSONField(), authority: (0, reified_1.fieldToJSON)("vector<address>", this.authority),
        };
    };
    StrategyPoolV2.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    StrategyPoolV2.fromJSONField = function (field) { return StrategyPoolV2.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), strategies: (0, reified_1.decodeFromJSONField)(structs_3.VecMap.reified("u64", structs_3.VecMap.reified("u64", structs_2.TableVec.reified(reified.phantom(StrategyV2.reified())))), field.strategies), authority: (0, reified_1.decodeFromJSONField)(reified.vector("address"), field.authority) }); };
    StrategyPoolV2.fromJSON = function (json) {
        if (json.$typeName !== StrategyPoolV2.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StrategyPoolV2.fromJSONField(json);
    };
    StrategyPoolV2.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStrategyPoolV2(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a StrategyPoolV2 object"));
    } return StrategyPoolV2.fromFieldsWithTypes(content); };
    StrategyPoolV2.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching StrategyPoolV2 object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStrategyPoolV2(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a StrategyPoolV2 object"));
                        }
                        return [2 /*return*/, StrategyPoolV2.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    StrategyPoolV2.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyPoolV2";
    StrategyPoolV2.$numTypeParams = 0;
    return StrategyPoolV2;
}());
exports.StrategyPoolV2 = StrategyPoolV2;
/* ============================== StrategyV2 =============================== */
function isStrategyV2(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyV2"; }
var StrategyV2 = /** @class */ (function () {
    function StrategyV2(typeArgs, fields) {
        this.$typeName = StrategyV2.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([StrategyV2.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.vaultIndex = fields.vaultIndex;
        ;
        this.signalIndex = fields.signalIndex;
        ;
        this.user = fields.user;
        ;
        this.pricePercentage = fields.pricePercentage;
        ;
        this.size = fields.size;
        ;
        this.maxTimes = fields.maxTimes;
        ;
        this.targetRounds = fields.targetRounds;
        ;
        this.receipts = fields.receipts;
        ;
        this.active = fields.active;
        ;
        this.u64Padding = fields.u64Padding;
        ;
        this.bidTimes = fields.bidTimes;
        ;
        this.bidRound = fields.bidRound;
        ;
        this.bidTsMs = fields.bidTsMs;
        ;
        this.bidRounds = fields.bidRounds;
        ;
        this.accumulatedProfit = fields.accumulatedProfit;
    }
    StrategyV2.reified = function () {
        var _this = this;
        return { typeName: StrategyV2.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([StrategyV2.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return StrategyV2.fromFields(fields); }, fromFieldsWithTypes: function (item) { return StrategyV2.fromFieldsWithTypes(item); }, fromBcs: function (data) { return StrategyV2.fromBcs(data); }, bcs: StrategyV2.bcs, fromJSONField: function (field) { return StrategyV2.fromJSONField(field); }, fromJSON: function (json) { return StrategyV2.fromJSON(json); }, fromSuiParsedData: function (content) { return StrategyV2.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, StrategyV2.fetch(client, id)];
            }); }); }, new: function (fields) { return new StrategyV2([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(StrategyV2, "r", {
        get: function () { return StrategyV2.reified(); },
        enumerable: false,
        configurable: true
    });
    StrategyV2.phantom = function () { return (0, reified_1.phantom)(StrategyV2.reified()); };
    Object.defineProperty(StrategyV2, "p", {
        get: function () { return StrategyV2.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StrategyV2, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("StrategyV2", {
                id: structs_1.UID.bcs, vault_index: bcs_1.bcs.u64(), signal_index: bcs_1.bcs.u64(), user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), price_percentage: bcs_1.bcs.u64(), size: bcs_1.bcs.u64(), max_times: bcs_1.bcs.u64(), target_rounds: bcs_1.bcs.vector(bcs_1.bcs.u64()), receipts: bcs_1.bcs.vector(structs_4.TypusBidReceipt.bcs), active: bcs_1.bcs.bool(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()), bid_times: bcs_1.bcs.u64(), bid_round: bcs_1.bcs.u64(), bid_ts_ms: bcs_1.bcs.u64(), bid_rounds: bcs_1.bcs.vector(bcs_1.bcs.u64()), accumulated_profit: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    StrategyV2.fromFields = function (fields) { return StrategyV2.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), vaultIndex: (0, reified_1.decodeFromFields)("u64", fields.vault_index), signalIndex: (0, reified_1.decodeFromFields)("u64", fields.signal_index), user: (0, reified_1.decodeFromFields)("address", fields.user), pricePercentage: (0, reified_1.decodeFromFields)("u64", fields.price_percentage), size: (0, reified_1.decodeFromFields)("u64", fields.size), maxTimes: (0, reified_1.decodeFromFields)("u64", fields.max_times), targetRounds: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.target_rounds), receipts: (0, reified_1.decodeFromFields)(reified.vector(structs_4.TypusBidReceipt.reified()), fields.receipts), active: (0, reified_1.decodeFromFields)("bool", fields.active), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding), bidTimes: (0, reified_1.decodeFromFields)("u64", fields.bid_times), bidRound: (0, reified_1.decodeFromFields)("u64", fields.bid_round), bidTsMs: (0, reified_1.decodeFromFields)("u64", fields.bid_ts_ms), bidRounds: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.bid_rounds), accumulatedProfit: (0, reified_1.decodeFromFields)("u64", fields.accumulated_profit) }); };
    StrategyV2.fromFieldsWithTypes = function (item) {
        if (!isStrategyV2(item.type)) {
            throw new Error("not a StrategyV2 type");
        }
        return StrategyV2.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), vaultIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.vault_index), signalIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.signal_index), user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), pricePercentage: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price_percentage), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size), maxTimes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_times), targetRounds: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.target_rounds), receipts: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_4.TypusBidReceipt.reified()), item.fields.receipts), active: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.active), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding), bidTimes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_times), bidRound: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_round), bidTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_ts_ms), bidRounds: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.bid_rounds), accumulatedProfit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.accumulated_profit) });
    };
    StrategyV2.fromBcs = function (data) { return StrategyV2.fromFields(StrategyV2.bcs.parse(data)); };
    StrategyV2.prototype.toJSONField = function () {
        return {
            id: this.id, vaultIndex: this.vaultIndex.toString(), signalIndex: this.signalIndex.toString(), user: this.user, pricePercentage: this.pricePercentage.toString(), size: this.size.toString(), maxTimes: this.maxTimes.toString(), targetRounds: (0, reified_1.fieldToJSON)("vector<u64>", this.targetRounds), receipts: (0, reified_1.fieldToJSON)("vector<0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::TypusBidReceipt>", this.receipts), active: this.active, u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding), bidTimes: this.bidTimes.toString(), bidRound: this.bidRound.toString(), bidTsMs: this.bidTsMs.toString(), bidRounds: (0, reified_1.fieldToJSON)("vector<u64>", this.bidRounds), accumulatedProfit: this.accumulatedProfit.toString(),
        };
    };
    StrategyV2.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    StrategyV2.fromJSONField = function (field) { return StrategyV2.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), vaultIndex: (0, reified_1.decodeFromJSONField)("u64", field.vaultIndex), signalIndex: (0, reified_1.decodeFromJSONField)("u64", field.signalIndex), user: (0, reified_1.decodeFromJSONField)("address", field.user), pricePercentage: (0, reified_1.decodeFromJSONField)("u64", field.pricePercentage), size: (0, reified_1.decodeFromJSONField)("u64", field.size), maxTimes: (0, reified_1.decodeFromJSONField)("u64", field.maxTimes), targetRounds: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.targetRounds), receipts: (0, reified_1.decodeFromJSONField)(reified.vector(structs_4.TypusBidReceipt.reified()), field.receipts), active: (0, reified_1.decodeFromJSONField)("bool", field.active), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding), bidTimes: (0, reified_1.decodeFromJSONField)("u64", field.bidTimes), bidRound: (0, reified_1.decodeFromJSONField)("u64", field.bidRound), bidTsMs: (0, reified_1.decodeFromJSONField)("u64", field.bidTsMs), bidRounds: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.bidRounds), accumulatedProfit: (0, reified_1.decodeFromJSONField)("u64", field.accumulatedProfit) }); };
    StrategyV2.fromJSON = function (json) {
        if (json.$typeName !== StrategyV2.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StrategyV2.fromJSONField(json);
    };
    StrategyV2.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStrategyV2(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a StrategyV2 object"));
    } return StrategyV2.fromFieldsWithTypes(content); };
    StrategyV2.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching StrategyV2 object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStrategyV2(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a StrategyV2 object"));
                        }
                        return [2 /*return*/, StrategyV2.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    StrategyV2.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::StrategyV2";
    StrategyV2.$numTypeParams = 0;
    return StrategyV2;
}());
exports.StrategyV2 = StrategyV2;
/* ============================== UpdateStrategyEvent =============================== */
function isUpdateStrategyEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::UpdateStrategyEvent"; }
var UpdateStrategyEvent = /** @class */ (function () {
    function UpdateStrategyEvent(typeArgs, fields) {
        this.$typeName = UpdateStrategyEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateStrategyEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.vaultIndex = fields.vaultIndex;
        ;
        this.signalIndex = fields.signalIndex;
        ;
        this.strategyIndex = fields.strategyIndex;
        ;
        this.user = fields.user;
        ;
        this.pricePercentage = fields.pricePercentage;
        ;
        this.size = fields.size;
        ;
        this.maxTimes = fields.maxTimes;
        ;
        this.targetRounds = fields.targetRounds;
        ;
        this.depositAmount = fields.depositAmount;
    }
    UpdateStrategyEvent.reified = function () {
        var _this = this;
        return { typeName: UpdateStrategyEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateStrategyEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UpdateStrategyEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UpdateStrategyEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UpdateStrategyEvent.fromBcs(data); }, bcs: UpdateStrategyEvent.bcs, fromJSONField: function (field) { return UpdateStrategyEvent.fromJSONField(field); }, fromJSON: function (json) { return UpdateStrategyEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return UpdateStrategyEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateStrategyEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new UpdateStrategyEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UpdateStrategyEvent, "r", {
        get: function () { return UpdateStrategyEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    UpdateStrategyEvent.phantom = function () { return (0, reified_1.phantom)(UpdateStrategyEvent.reified()); };
    Object.defineProperty(UpdateStrategyEvent, "p", {
        get: function () { return UpdateStrategyEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateStrategyEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateStrategyEvent", {
                vault_index: bcs_1.bcs.u64(), signal_index: bcs_1.bcs.u64(), strategy_index: bcs_1.bcs.u64(), user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), price_percentage: bcs_1.bcs.u64(), size: bcs_1.bcs.u64(), max_times: bcs_1.bcs.u64(), target_rounds: bcs_1.bcs.vector(bcs_1.bcs.u64()), deposit_amount: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UpdateStrategyEvent.fromFields = function (fields) { return UpdateStrategyEvent.reified().new({ vaultIndex: (0, reified_1.decodeFromFields)("u64", fields.vault_index), signalIndex: (0, reified_1.decodeFromFields)("u64", fields.signal_index), strategyIndex: (0, reified_1.decodeFromFields)("u64", fields.strategy_index), user: (0, reified_1.decodeFromFields)("address", fields.user), pricePercentage: (0, reified_1.decodeFromFields)("u64", fields.price_percentage), size: (0, reified_1.decodeFromFields)("u64", fields.size), maxTimes: (0, reified_1.decodeFromFields)("u64", fields.max_times), targetRounds: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.target_rounds), depositAmount: (0, reified_1.decodeFromFields)("u64", fields.deposit_amount) }); };
    UpdateStrategyEvent.fromFieldsWithTypes = function (item) {
        if (!isUpdateStrategyEvent(item.type)) {
            throw new Error("not a UpdateStrategyEvent type");
        }
        return UpdateStrategyEvent.reified().new({ vaultIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.vault_index), signalIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.signal_index), strategyIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.strategy_index), user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), pricePercentage: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price_percentage), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size), maxTimes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_times), targetRounds: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.target_rounds), depositAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deposit_amount) });
    };
    UpdateStrategyEvent.fromBcs = function (data) { return UpdateStrategyEvent.fromFields(UpdateStrategyEvent.bcs.parse(data)); };
    UpdateStrategyEvent.prototype.toJSONField = function () {
        return {
            vaultIndex: this.vaultIndex.toString(), signalIndex: this.signalIndex.toString(), strategyIndex: this.strategyIndex.toString(), user: this.user, pricePercentage: this.pricePercentage.toString(), size: this.size.toString(), maxTimes: this.maxTimes.toString(), targetRounds: (0, reified_1.fieldToJSON)("vector<u64>", this.targetRounds), depositAmount: this.depositAmount.toString(),
        };
    };
    UpdateStrategyEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UpdateStrategyEvent.fromJSONField = function (field) { return UpdateStrategyEvent.reified().new({ vaultIndex: (0, reified_1.decodeFromJSONField)("u64", field.vaultIndex), signalIndex: (0, reified_1.decodeFromJSONField)("u64", field.signalIndex), strategyIndex: (0, reified_1.decodeFromJSONField)("u64", field.strategyIndex), user: (0, reified_1.decodeFromJSONField)("address", field.user), pricePercentage: (0, reified_1.decodeFromJSONField)("u64", field.pricePercentage), size: (0, reified_1.decodeFromJSONField)("u64", field.size), maxTimes: (0, reified_1.decodeFromJSONField)("u64", field.maxTimes), targetRounds: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.targetRounds), depositAmount: (0, reified_1.decodeFromJSONField)("u64", field.depositAmount) }); };
    UpdateStrategyEvent.fromJSON = function (json) {
        if (json.$typeName !== UpdateStrategyEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpdateStrategyEvent.fromJSONField(json);
    };
    UpdateStrategyEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpdateStrategyEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UpdateStrategyEvent object"));
    } return UpdateStrategyEvent.fromFieldsWithTypes(content); };
    UpdateStrategyEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateStrategyEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateStrategyEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateStrategyEvent object"));
                        }
                        return [2 /*return*/, UpdateStrategyEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateStrategyEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::UpdateStrategyEvent";
    UpdateStrategyEvent.$numTypeParams = 0;
    return UpdateStrategyEvent;
}());
exports.UpdateStrategyEvent = UpdateStrategyEvent;
/* ============================== WithdrawProfitEvent =============================== */
function isWithdrawProfitEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::WithdrawProfitEvent"; }
var WithdrawProfitEvent = /** @class */ (function () {
    function WithdrawProfitEvent(typeArgs, fields) {
        this.$typeName = WithdrawProfitEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([WithdrawProfitEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.vaultIndex = fields.vaultIndex;
        ;
        this.signalIndex = fields.signalIndex;
        ;
        this.strategyIndex = fields.strategyIndex;
        ;
        this.user = fields.user;
        ;
        this.profit = fields.profit;
    }
    WithdrawProfitEvent.reified = function () {
        var _this = this;
        return { typeName: WithdrawProfitEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([WithdrawProfitEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return WithdrawProfitEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return WithdrawProfitEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return WithdrawProfitEvent.fromBcs(data); }, bcs: WithdrawProfitEvent.bcs, fromJSONField: function (field) { return WithdrawProfitEvent.fromJSONField(field); }, fromJSON: function (json) { return WithdrawProfitEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return WithdrawProfitEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, WithdrawProfitEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new WithdrawProfitEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(WithdrawProfitEvent, "r", {
        get: function () { return WithdrawProfitEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    WithdrawProfitEvent.phantom = function () { return (0, reified_1.phantom)(WithdrawProfitEvent.reified()); };
    Object.defineProperty(WithdrawProfitEvent, "p", {
        get: function () { return WithdrawProfitEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WithdrawProfitEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("WithdrawProfitEvent", {
                vault_index: bcs_1.bcs.u64(), signal_index: bcs_1.bcs.u64(), strategy_index: bcs_1.bcs.u64(), user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), profit: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    WithdrawProfitEvent.fromFields = function (fields) { return WithdrawProfitEvent.reified().new({ vaultIndex: (0, reified_1.decodeFromFields)("u64", fields.vault_index), signalIndex: (0, reified_1.decodeFromFields)("u64", fields.signal_index), strategyIndex: (0, reified_1.decodeFromFields)("u64", fields.strategy_index), user: (0, reified_1.decodeFromFields)("address", fields.user), profit: (0, reified_1.decodeFromFields)("u64", fields.profit) }); };
    WithdrawProfitEvent.fromFieldsWithTypes = function (item) {
        if (!isWithdrawProfitEvent(item.type)) {
            throw new Error("not a WithdrawProfitEvent type");
        }
        return WithdrawProfitEvent.reified().new({ vaultIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.vault_index), signalIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.signal_index), strategyIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.strategy_index), user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), profit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.profit) });
    };
    WithdrawProfitEvent.fromBcs = function (data) { return WithdrawProfitEvent.fromFields(WithdrawProfitEvent.bcs.parse(data)); };
    WithdrawProfitEvent.prototype.toJSONField = function () {
        return {
            vaultIndex: this.vaultIndex.toString(), signalIndex: this.signalIndex.toString(), strategyIndex: this.strategyIndex.toString(), user: this.user, profit: this.profit.toString(),
        };
    };
    WithdrawProfitEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    WithdrawProfitEvent.fromJSONField = function (field) { return WithdrawProfitEvent.reified().new({ vaultIndex: (0, reified_1.decodeFromJSONField)("u64", field.vaultIndex), signalIndex: (0, reified_1.decodeFromJSONField)("u64", field.signalIndex), strategyIndex: (0, reified_1.decodeFromJSONField)("u64", field.strategyIndex), user: (0, reified_1.decodeFromJSONField)("address", field.user), profit: (0, reified_1.decodeFromJSONField)("u64", field.profit) }); };
    WithdrawProfitEvent.fromJSON = function (json) {
        if (json.$typeName !== WithdrawProfitEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return WithdrawProfitEvent.fromJSONField(json);
    };
    WithdrawProfitEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isWithdrawProfitEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a WithdrawProfitEvent object"));
    } return WithdrawProfitEvent.fromFieldsWithTypes(content); };
    WithdrawProfitEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching WithdrawProfitEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isWithdrawProfitEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a WithdrawProfitEvent object"));
                        }
                        return [2 /*return*/, WithdrawProfitEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    WithdrawProfitEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::auto_bid::WithdrawProfitEvent";
    WithdrawProfitEvent.$numTypeParams = 0;
    return WithdrawProfitEvent;
}());
exports.WithdrawProfitEvent = WithdrawProfitEvent;
