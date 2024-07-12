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
exports.State = exports.LatestOnly = void 0;
exports.isLatestOnly = isLatestOnly;
exports.isState = isState;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x2/object/structs");
var structs_2 = require("../../0x2/package/structs");
var structs_3 = require("../../0x2/table/structs");
var structs_4 = require("../consumed-vaas/structs");
var structs_5 = require("../external-address/structs");
var structs_6 = require("../fee-collector/structs");
var structs_7 = require("../guardian-set/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== LatestOnly =============================== */
function isLatestOnly(type) { type = (0, util_1.compressSuiType)(type); return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::state::LatestOnly"; }
var LatestOnly = /** @class */ (function () {
    function LatestOnly(typeArgs, fields) {
        this.$typeName = LatestOnly.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([LatestOnly.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    LatestOnly.reified = function () {
        var _this = this;
        return { typeName: LatestOnly.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([LatestOnly.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return LatestOnly.fromFields(fields); }, fromFieldsWithTypes: function (item) { return LatestOnly.fromFieldsWithTypes(item); }, fromBcs: function (data) { return LatestOnly.fromBcs(data); }, bcs: LatestOnly.bcs, fromJSONField: function (field) { return LatestOnly.fromJSONField(field); }, fromJSON: function (json) { return LatestOnly.fromJSON(json); }, fromSuiParsedData: function (content) { return LatestOnly.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, LatestOnly.fetch(client, id)];
            }); }); }, new: function (fields) { return new LatestOnly([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(LatestOnly, "r", {
        get: function () { return LatestOnly.reified(); },
        enumerable: false,
        configurable: true
    });
    LatestOnly.phantom = function () { return (0, reified_1.phantom)(LatestOnly.reified()); };
    Object.defineProperty(LatestOnly, "p", {
        get: function () { return LatestOnly.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LatestOnly, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("LatestOnly", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    LatestOnly.fromFields = function (fields) { return LatestOnly.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    LatestOnly.fromFieldsWithTypes = function (item) {
        if (!isLatestOnly(item.type)) {
            throw new Error("not a LatestOnly type");
        }
        return LatestOnly.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    LatestOnly.fromBcs = function (data) { return LatestOnly.fromFields(LatestOnly.bcs.parse(data)); };
    LatestOnly.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    LatestOnly.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    LatestOnly.fromJSONField = function (field) { return LatestOnly.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    LatestOnly.fromJSON = function (json) {
        if (json.$typeName !== LatestOnly.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return LatestOnly.fromJSONField(json);
    };
    LatestOnly.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLatestOnly(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a LatestOnly object"));
    } return LatestOnly.fromFieldsWithTypes(content); };
    LatestOnly.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching LatestOnly object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLatestOnly(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a LatestOnly object"));
                        }
                        return [2 /*return*/, LatestOnly.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    LatestOnly.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::state::LatestOnly";
    LatestOnly.$numTypeParams = 0;
    return LatestOnly;
}());
exports.LatestOnly = LatestOnly;
/* ============================== State =============================== */
function isState(type) { type = (0, util_1.compressSuiType)(type); return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::state::State"; }
var State = /** @class */ (function () {
    function State(typeArgs, fields) {
        this.$typeName = State.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([State.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.governanceChain = fields.governanceChain;
        ;
        this.governanceContract = fields.governanceContract;
        ;
        this.guardianSetIndex = fields.guardianSetIndex;
        ;
        this.guardianSets = fields.guardianSets;
        ;
        this.guardianSetSecondsToLive = fields.guardianSetSecondsToLive;
        ;
        this.consumedVaas = fields.consumedVaas;
        ;
        this.feeCollector = fields.feeCollector;
        ;
        this.upgradeCap = fields.upgradeCap;
    }
    State.reified = function () {
        var _this = this;
        return { typeName: State.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([State.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return State.fromFields(fields); }, fromFieldsWithTypes: function (item) { return State.fromFieldsWithTypes(item); }, fromBcs: function (data) { return State.fromBcs(data); }, bcs: State.bcs, fromJSONField: function (field) { return State.fromJSONField(field); }, fromJSON: function (json) { return State.fromJSON(json); }, fromSuiParsedData: function (content) { return State.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, State.fetch(client, id)];
            }); }); }, new: function (fields) { return new State([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(State, "r", {
        get: function () { return State.reified(); },
        enumerable: false,
        configurable: true
    });
    State.phantom = function () { return (0, reified_1.phantom)(State.reified()); };
    Object.defineProperty(State, "p", {
        get: function () { return State.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(State, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("State", {
                id: structs_1.UID.bcs, governance_chain: bcs_1.bcs.u16(), governance_contract: structs_5.ExternalAddress.bcs, guardian_set_index: bcs_1.bcs.u32(), guardian_sets: structs_3.Table.bcs, guardian_set_seconds_to_live: bcs_1.bcs.u32(), consumed_vaas: structs_4.ConsumedVAAs.bcs, fee_collector: structs_6.FeeCollector.bcs, upgrade_cap: structs_2.UpgradeCap.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    State.fromFields = function (fields) { return State.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), governanceChain: (0, reified_1.decodeFromFields)("u16", fields.governance_chain), governanceContract: (0, reified_1.decodeFromFields)(structs_5.ExternalAddress.reified(), fields.governance_contract), guardianSetIndex: (0, reified_1.decodeFromFields)("u32", fields.guardian_set_index), guardianSets: (0, reified_1.decodeFromFields)(structs_3.Table.reified(reified.phantom("u32"), reified.phantom(structs_7.GuardianSet.reified())), fields.guardian_sets), guardianSetSecondsToLive: (0, reified_1.decodeFromFields)("u32", fields.guardian_set_seconds_to_live), consumedVaas: (0, reified_1.decodeFromFields)(structs_4.ConsumedVAAs.reified(), fields.consumed_vaas), feeCollector: (0, reified_1.decodeFromFields)(structs_6.FeeCollector.reified(), fields.fee_collector), upgradeCap: (0, reified_1.decodeFromFields)(structs_2.UpgradeCap.reified(), fields.upgrade_cap) }); };
    State.fromFieldsWithTypes = function (item) {
        if (!isState(item.type)) {
            throw new Error("not a State type");
        }
        return State.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), governanceChain: (0, reified_1.decodeFromFieldsWithTypes)("u16", item.fields.governance_chain), governanceContract: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ExternalAddress.reified(), item.fields.governance_contract), guardianSetIndex: (0, reified_1.decodeFromFieldsWithTypes)("u32", item.fields.guardian_set_index), guardianSets: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Table.reified(reified.phantom("u32"), reified.phantom(structs_7.GuardianSet.reified())), item.fields.guardian_sets), guardianSetSecondsToLive: (0, reified_1.decodeFromFieldsWithTypes)("u32", item.fields.guardian_set_seconds_to_live), consumedVaas: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.ConsumedVAAs.reified(), item.fields.consumed_vaas), feeCollector: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.FeeCollector.reified(), item.fields.fee_collector), upgradeCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UpgradeCap.reified(), item.fields.upgrade_cap) });
    };
    State.fromBcs = function (data) { return State.fromFields(State.bcs.parse(data)); };
    State.prototype.toJSONField = function () {
        return {
            id: this.id, governanceChain: this.governanceChain, governanceContract: this.governanceContract.toJSONField(), guardianSetIndex: this.guardianSetIndex, guardianSets: this.guardianSets.toJSONField(), guardianSetSecondsToLive: this.guardianSetSecondsToLive, consumedVaas: this.consumedVaas.toJSONField(), feeCollector: this.feeCollector.toJSONField(), upgradeCap: this.upgradeCap.toJSONField(),
        };
    };
    State.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    State.fromJSONField = function (field) { return State.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), governanceChain: (0, reified_1.decodeFromJSONField)("u16", field.governanceChain), governanceContract: (0, reified_1.decodeFromJSONField)(structs_5.ExternalAddress.reified(), field.governanceContract), guardianSetIndex: (0, reified_1.decodeFromJSONField)("u32", field.guardianSetIndex), guardianSets: (0, reified_1.decodeFromJSONField)(structs_3.Table.reified(reified.phantom("u32"), reified.phantom(structs_7.GuardianSet.reified())), field.guardianSets), guardianSetSecondsToLive: (0, reified_1.decodeFromJSONField)("u32", field.guardianSetSecondsToLive), consumedVaas: (0, reified_1.decodeFromJSONField)(structs_4.ConsumedVAAs.reified(), field.consumedVaas), feeCollector: (0, reified_1.decodeFromJSONField)(structs_6.FeeCollector.reified(), field.feeCollector), upgradeCap: (0, reified_1.decodeFromJSONField)(structs_2.UpgradeCap.reified(), field.upgradeCap) }); };
    State.fromJSON = function (json) {
        if (json.$typeName !== State.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return State.fromJSONField(json);
    };
    State.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isState(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a State object"));
    } return State.fromFieldsWithTypes(content); };
    State.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
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
    State.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::state::State";
    State.$numTypeParams = 0;
    return State;
}());
exports.State = State;
