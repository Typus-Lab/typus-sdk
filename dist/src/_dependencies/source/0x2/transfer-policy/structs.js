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
exports.TransferRequest = exports.TransferPolicyDestroyed = exports.TransferPolicyCreated = exports.TransferPolicyCap = exports.TransferPolicy = exports.RuleKey = void 0;
exports.isRuleKey = isRuleKey;
exports.isTransferPolicy = isTransferPolicy;
exports.isTransferPolicyCap = isTransferPolicyCap;
exports.isTransferPolicyCreated = isTransferPolicyCreated;
exports.isTransferPolicyDestroyed = isTransferPolicyDestroyed;
exports.isTransferRequest = isTransferRequest;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/type-name/structs");
var structs_2 = require("../balance/structs");
var structs_3 = require("../object/structs");
var structs_4 = require("../sui/structs");
var structs_5 = require("../vec-set/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== RuleKey =============================== */
function isRuleKey(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::transfer_policy::RuleKey<"); }
var RuleKey = /** @class */ (function () {
    function RuleKey(typeArgs, fields) {
        this.$typeName = RuleKey.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RuleKey.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    RuleKey.reified = function (T) {
        var _this = this;
        return { typeName: RuleKey.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RuleKey.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return RuleKey.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return RuleKey.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return RuleKey.fromBcs(T, data); }, bcs: RuleKey.bcs, fromJSONField: function (field) { return RuleKey.fromJSONField(T, field); }, fromJSON: function (json) { return RuleKey.fromJSON(T, json); }, fromSuiParsedData: function (content) { return RuleKey.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RuleKey.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new RuleKey([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RuleKey, "r", {
        get: function () { return RuleKey.reified; },
        enumerable: false,
        configurable: true
    });
    RuleKey.phantom = function (T) { return (0, reified_1.phantom)(RuleKey.reified(T)); };
    Object.defineProperty(RuleKey, "p", {
        get: function () { return RuleKey.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleKey, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RuleKey", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RuleKey.fromFields = function (typeArg, fields) { return RuleKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    RuleKey.fromFieldsWithTypes = function (typeArg, item) {
        if (!isRuleKey(item.type)) {
            throw new Error("not a RuleKey type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return RuleKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    RuleKey.fromBcs = function (typeArg, data) { return RuleKey.fromFields(typeArg, RuleKey.bcs.parse(data)); };
    RuleKey.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    RuleKey.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RuleKey.fromJSONField = function (typeArg, field) { return RuleKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    RuleKey.fromJSON = function (typeArg, json) {
        if (json.$typeName !== RuleKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(RuleKey.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return RuleKey.fromJSONField(typeArg, json);
    };
    RuleKey.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRuleKey(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RuleKey object"));
    } return RuleKey.fromFieldsWithTypes(typeArg, content); };
    RuleKey.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RuleKey object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRuleKey(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RuleKey object"));
                        }
                        return [2 /*return*/, RuleKey.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RuleKey.$typeName = "0x2::transfer_policy::RuleKey";
    RuleKey.$numTypeParams = 1;
    return RuleKey;
}());
exports.RuleKey = RuleKey;
/* ============================== TransferPolicy =============================== */
function isTransferPolicy(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::transfer_policy::TransferPolicy<"); }
var TransferPolicy = /** @class */ (function () {
    function TransferPolicy(typeArgs, fields) {
        this.$typeName = TransferPolicy.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TransferPolicy.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.balance = fields.balance;
        ;
        this.rules = fields.rules;
    }
    TransferPolicy.reified = function (T) {
        var _this = this;
        return { typeName: TransferPolicy.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TransferPolicy.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return TransferPolicy.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return TransferPolicy.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return TransferPolicy.fromBcs(T, data); }, bcs: TransferPolicy.bcs, fromJSONField: function (field) { return TransferPolicy.fromJSONField(T, field); }, fromJSON: function (json) { return TransferPolicy.fromJSON(T, json); }, fromSuiParsedData: function (content) { return TransferPolicy.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TransferPolicy.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new TransferPolicy([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TransferPolicy, "r", {
        get: function () { return TransferPolicy.reified; },
        enumerable: false,
        configurable: true
    });
    TransferPolicy.phantom = function (T) { return (0, reified_1.phantom)(TransferPolicy.reified(T)); };
    Object.defineProperty(TransferPolicy, "p", {
        get: function () { return TransferPolicy.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferPolicy, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TransferPolicy", {
                id: structs_3.UID.bcs, balance: structs_2.Balance.bcs, rules: structs_5.VecSet.bcs(structs_1.TypeName.bcs)
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TransferPolicy.fromFields = function (typeArg, fields) { return TransferPolicy.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_3.UID.reified(), fields.id), balance: (0, reified_1.decodeFromFields)(structs_2.Balance.reified(reified.phantom(structs_4.SUI.reified())), fields.balance), rules: (0, reified_1.decodeFromFields)(structs_5.VecSet.reified(structs_1.TypeName.reified()), fields.rules) }); };
    TransferPolicy.fromFieldsWithTypes = function (typeArg, item) {
        if (!isTransferPolicy(item.type)) {
            throw new Error("not a TransferPolicy type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TransferPolicy.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.UID.reified(), item.fields.id), balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Balance.reified(reified.phantom(structs_4.SUI.reified())), item.fields.balance), rules: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.VecSet.reified(structs_1.TypeName.reified()), item.fields.rules) });
    };
    TransferPolicy.fromBcs = function (typeArg, data) { return TransferPolicy.fromFields(typeArg, TransferPolicy.bcs.parse(data)); };
    TransferPolicy.prototype.toJSONField = function () {
        return {
            id: this.id, balance: this.balance.toJSONField(), rules: this.rules.toJSONField(),
        };
    };
    TransferPolicy.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TransferPolicy.fromJSONField = function (typeArg, field) { return TransferPolicy.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_3.UID.reified(), field.id), balance: (0, reified_1.decodeFromJSONField)(structs_2.Balance.reified(reified.phantom(structs_4.SUI.reified())), field.balance), rules: (0, reified_1.decodeFromJSONField)(structs_5.VecSet.reified(structs_1.TypeName.reified()), field.rules) }); };
    TransferPolicy.fromJSON = function (typeArg, json) {
        if (json.$typeName !== TransferPolicy.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TransferPolicy.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TransferPolicy.fromJSONField(typeArg, json);
    };
    TransferPolicy.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTransferPolicy(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TransferPolicy object"));
    } return TransferPolicy.fromFieldsWithTypes(typeArg, content); };
    TransferPolicy.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TransferPolicy object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTransferPolicy(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TransferPolicy object"));
                        }
                        return [2 /*return*/, TransferPolicy.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TransferPolicy.$typeName = "0x2::transfer_policy::TransferPolicy";
    TransferPolicy.$numTypeParams = 1;
    return TransferPolicy;
}());
exports.TransferPolicy = TransferPolicy;
/* ============================== TransferPolicyCap =============================== */
function isTransferPolicyCap(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::transfer_policy::TransferPolicyCap<"); }
var TransferPolicyCap = /** @class */ (function () {
    function TransferPolicyCap(typeArgs, fields) {
        this.$typeName = TransferPolicyCap.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TransferPolicyCap.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.policyId = fields.policyId;
    }
    TransferPolicyCap.reified = function (T) {
        var _this = this;
        return { typeName: TransferPolicyCap.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TransferPolicyCap.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return TransferPolicyCap.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return TransferPolicyCap.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return TransferPolicyCap.fromBcs(T, data); }, bcs: TransferPolicyCap.bcs, fromJSONField: function (field) { return TransferPolicyCap.fromJSONField(T, field); }, fromJSON: function (json) { return TransferPolicyCap.fromJSON(T, json); }, fromSuiParsedData: function (content) { return TransferPolicyCap.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TransferPolicyCap.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new TransferPolicyCap([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TransferPolicyCap, "r", {
        get: function () { return TransferPolicyCap.reified; },
        enumerable: false,
        configurable: true
    });
    TransferPolicyCap.phantom = function (T) { return (0, reified_1.phantom)(TransferPolicyCap.reified(T)); };
    Object.defineProperty(TransferPolicyCap, "p", {
        get: function () { return TransferPolicyCap.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferPolicyCap, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TransferPolicyCap", {
                id: structs_3.UID.bcs, policy_id: structs_3.ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TransferPolicyCap.fromFields = function (typeArg, fields) { return TransferPolicyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_3.UID.reified(), fields.id), policyId: (0, reified_1.decodeFromFields)(structs_3.ID.reified(), fields.policy_id) }); };
    TransferPolicyCap.fromFieldsWithTypes = function (typeArg, item) {
        if (!isTransferPolicyCap(item.type)) {
            throw new Error("not a TransferPolicyCap type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TransferPolicyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.UID.reified(), item.fields.id), policyId: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.ID.reified(), item.fields.policy_id) });
    };
    TransferPolicyCap.fromBcs = function (typeArg, data) { return TransferPolicyCap.fromFields(typeArg, TransferPolicyCap.bcs.parse(data)); };
    TransferPolicyCap.prototype.toJSONField = function () {
        return {
            id: this.id, policyId: this.policyId,
        };
    };
    TransferPolicyCap.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TransferPolicyCap.fromJSONField = function (typeArg, field) { return TransferPolicyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_3.UID.reified(), field.id), policyId: (0, reified_1.decodeFromJSONField)(structs_3.ID.reified(), field.policyId) }); };
    TransferPolicyCap.fromJSON = function (typeArg, json) {
        if (json.$typeName !== TransferPolicyCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TransferPolicyCap.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TransferPolicyCap.fromJSONField(typeArg, json);
    };
    TransferPolicyCap.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTransferPolicyCap(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TransferPolicyCap object"));
    } return TransferPolicyCap.fromFieldsWithTypes(typeArg, content); };
    TransferPolicyCap.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TransferPolicyCap object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTransferPolicyCap(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TransferPolicyCap object"));
                        }
                        return [2 /*return*/, TransferPolicyCap.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TransferPolicyCap.$typeName = "0x2::transfer_policy::TransferPolicyCap";
    TransferPolicyCap.$numTypeParams = 1;
    return TransferPolicyCap;
}());
exports.TransferPolicyCap = TransferPolicyCap;
/* ============================== TransferPolicyCreated =============================== */
function isTransferPolicyCreated(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::transfer_policy::TransferPolicyCreated<"); }
var TransferPolicyCreated = /** @class */ (function () {
    function TransferPolicyCreated(typeArgs, fields) {
        this.$typeName = TransferPolicyCreated.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TransferPolicyCreated.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    TransferPolicyCreated.reified = function (T) {
        var _this = this;
        return { typeName: TransferPolicyCreated.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TransferPolicyCreated.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return TransferPolicyCreated.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return TransferPolicyCreated.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return TransferPolicyCreated.fromBcs(T, data); }, bcs: TransferPolicyCreated.bcs, fromJSONField: function (field) { return TransferPolicyCreated.fromJSONField(T, field); }, fromJSON: function (json) { return TransferPolicyCreated.fromJSON(T, json); }, fromSuiParsedData: function (content) { return TransferPolicyCreated.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TransferPolicyCreated.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new TransferPolicyCreated([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TransferPolicyCreated, "r", {
        get: function () { return TransferPolicyCreated.reified; },
        enumerable: false,
        configurable: true
    });
    TransferPolicyCreated.phantom = function (T) { return (0, reified_1.phantom)(TransferPolicyCreated.reified(T)); };
    Object.defineProperty(TransferPolicyCreated, "p", {
        get: function () { return TransferPolicyCreated.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferPolicyCreated, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TransferPolicyCreated", {
                id: structs_3.ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TransferPolicyCreated.fromFields = function (typeArg, fields) { return TransferPolicyCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_3.ID.reified(), fields.id) }); };
    TransferPolicyCreated.fromFieldsWithTypes = function (typeArg, item) {
        if (!isTransferPolicyCreated(item.type)) {
            throw new Error("not a TransferPolicyCreated type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TransferPolicyCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.ID.reified(), item.fields.id) });
    };
    TransferPolicyCreated.fromBcs = function (typeArg, data) { return TransferPolicyCreated.fromFields(typeArg, TransferPolicyCreated.bcs.parse(data)); };
    TransferPolicyCreated.prototype.toJSONField = function () {
        return {
            id: this.id,
        };
    };
    TransferPolicyCreated.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TransferPolicyCreated.fromJSONField = function (typeArg, field) { return TransferPolicyCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_3.ID.reified(), field.id) }); };
    TransferPolicyCreated.fromJSON = function (typeArg, json) {
        if (json.$typeName !== TransferPolicyCreated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TransferPolicyCreated.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TransferPolicyCreated.fromJSONField(typeArg, json);
    };
    TransferPolicyCreated.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTransferPolicyCreated(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TransferPolicyCreated object"));
    } return TransferPolicyCreated.fromFieldsWithTypes(typeArg, content); };
    TransferPolicyCreated.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TransferPolicyCreated object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTransferPolicyCreated(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TransferPolicyCreated object"));
                        }
                        return [2 /*return*/, TransferPolicyCreated.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TransferPolicyCreated.$typeName = "0x2::transfer_policy::TransferPolicyCreated";
    TransferPolicyCreated.$numTypeParams = 1;
    return TransferPolicyCreated;
}());
exports.TransferPolicyCreated = TransferPolicyCreated;
/* ============================== TransferPolicyDestroyed =============================== */
function isTransferPolicyDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::transfer_policy::TransferPolicyDestroyed<"); }
var TransferPolicyDestroyed = /** @class */ (function () {
    function TransferPolicyDestroyed(typeArgs, fields) {
        this.$typeName = TransferPolicyDestroyed.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TransferPolicyDestroyed.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    TransferPolicyDestroyed.reified = function (T) {
        var _this = this;
        return { typeName: TransferPolicyDestroyed.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TransferPolicyDestroyed.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return TransferPolicyDestroyed.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return TransferPolicyDestroyed.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return TransferPolicyDestroyed.fromBcs(T, data); }, bcs: TransferPolicyDestroyed.bcs, fromJSONField: function (field) { return TransferPolicyDestroyed.fromJSONField(T, field); }, fromJSON: function (json) { return TransferPolicyDestroyed.fromJSON(T, json); }, fromSuiParsedData: function (content) { return TransferPolicyDestroyed.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TransferPolicyDestroyed.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new TransferPolicyDestroyed([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TransferPolicyDestroyed, "r", {
        get: function () { return TransferPolicyDestroyed.reified; },
        enumerable: false,
        configurable: true
    });
    TransferPolicyDestroyed.phantom = function (T) { return (0, reified_1.phantom)(TransferPolicyDestroyed.reified(T)); };
    Object.defineProperty(TransferPolicyDestroyed, "p", {
        get: function () { return TransferPolicyDestroyed.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferPolicyDestroyed, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TransferPolicyDestroyed", {
                id: structs_3.ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TransferPolicyDestroyed.fromFields = function (typeArg, fields) { return TransferPolicyDestroyed.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_3.ID.reified(), fields.id) }); };
    TransferPolicyDestroyed.fromFieldsWithTypes = function (typeArg, item) {
        if (!isTransferPolicyDestroyed(item.type)) {
            throw new Error("not a TransferPolicyDestroyed type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TransferPolicyDestroyed.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.ID.reified(), item.fields.id) });
    };
    TransferPolicyDestroyed.fromBcs = function (typeArg, data) { return TransferPolicyDestroyed.fromFields(typeArg, TransferPolicyDestroyed.bcs.parse(data)); };
    TransferPolicyDestroyed.prototype.toJSONField = function () {
        return {
            id: this.id,
        };
    };
    TransferPolicyDestroyed.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TransferPolicyDestroyed.fromJSONField = function (typeArg, field) { return TransferPolicyDestroyed.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_3.ID.reified(), field.id) }); };
    TransferPolicyDestroyed.fromJSON = function (typeArg, json) {
        if (json.$typeName !== TransferPolicyDestroyed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TransferPolicyDestroyed.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TransferPolicyDestroyed.fromJSONField(typeArg, json);
    };
    TransferPolicyDestroyed.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTransferPolicyDestroyed(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TransferPolicyDestroyed object"));
    } return TransferPolicyDestroyed.fromFieldsWithTypes(typeArg, content); };
    TransferPolicyDestroyed.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TransferPolicyDestroyed object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTransferPolicyDestroyed(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TransferPolicyDestroyed object"));
                        }
                        return [2 /*return*/, TransferPolicyDestroyed.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TransferPolicyDestroyed.$typeName = "0x2::transfer_policy::TransferPolicyDestroyed";
    TransferPolicyDestroyed.$numTypeParams = 1;
    return TransferPolicyDestroyed;
}());
exports.TransferPolicyDestroyed = TransferPolicyDestroyed;
/* ============================== TransferRequest =============================== */
function isTransferRequest(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::transfer_policy::TransferRequest<"); }
var TransferRequest = /** @class */ (function () {
    function TransferRequest(typeArgs, fields) {
        this.$typeName = TransferRequest.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TransferRequest.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.item = fields.item;
        ;
        this.paid = fields.paid;
        ;
        this.from = fields.from;
        ;
        this.receipts = fields.receipts;
    }
    TransferRequest.reified = function (T) {
        var _this = this;
        return { typeName: TransferRequest.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TransferRequest.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return TransferRequest.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return TransferRequest.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return TransferRequest.fromBcs(T, data); }, bcs: TransferRequest.bcs, fromJSONField: function (field) { return TransferRequest.fromJSONField(T, field); }, fromJSON: function (json) { return TransferRequest.fromJSON(T, json); }, fromSuiParsedData: function (content) { return TransferRequest.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TransferRequest.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new TransferRequest([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TransferRequest, "r", {
        get: function () { return TransferRequest.reified; },
        enumerable: false,
        configurable: true
    });
    TransferRequest.phantom = function (T) { return (0, reified_1.phantom)(TransferRequest.reified(T)); };
    Object.defineProperty(TransferRequest, "p", {
        get: function () { return TransferRequest.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferRequest, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TransferRequest", {
                item: structs_3.ID.bcs, paid: bcs_1.bcs.u64(), from: structs_3.ID.bcs, receipts: structs_5.VecSet.bcs(structs_1.TypeName.bcs)
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TransferRequest.fromFields = function (typeArg, fields) { return TransferRequest.reified(typeArg).new({ item: (0, reified_1.decodeFromFields)(structs_3.ID.reified(), fields.item), paid: (0, reified_1.decodeFromFields)("u64", fields.paid), from: (0, reified_1.decodeFromFields)(structs_3.ID.reified(), fields.from), receipts: (0, reified_1.decodeFromFields)(structs_5.VecSet.reified(structs_1.TypeName.reified()), fields.receipts) }); };
    TransferRequest.fromFieldsWithTypes = function (typeArg, item) {
        if (!isTransferRequest(item.type)) {
            throw new Error("not a TransferRequest type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TransferRequest.reified(typeArg).new({ item: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.ID.reified(), item.fields.item), paid: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.paid), from: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.ID.reified(), item.fields.from), receipts: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.VecSet.reified(structs_1.TypeName.reified()), item.fields.receipts) });
    };
    TransferRequest.fromBcs = function (typeArg, data) { return TransferRequest.fromFields(typeArg, TransferRequest.bcs.parse(data)); };
    TransferRequest.prototype.toJSONField = function () {
        return {
            item: this.item, paid: this.paid.toString(), from: this.from, receipts: this.receipts.toJSONField(),
        };
    };
    TransferRequest.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TransferRequest.fromJSONField = function (typeArg, field) { return TransferRequest.reified(typeArg).new({ item: (0, reified_1.decodeFromJSONField)(structs_3.ID.reified(), field.item), paid: (0, reified_1.decodeFromJSONField)("u64", field.paid), from: (0, reified_1.decodeFromJSONField)(structs_3.ID.reified(), field.from), receipts: (0, reified_1.decodeFromJSONField)(structs_5.VecSet.reified(structs_1.TypeName.reified()), field.receipts) }); };
    TransferRequest.fromJSON = function (typeArg, json) {
        if (json.$typeName !== TransferRequest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TransferRequest.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TransferRequest.fromJSONField(typeArg, json);
    };
    TransferRequest.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTransferRequest(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TransferRequest object"));
    } return TransferRequest.fromFieldsWithTypes(typeArg, content); };
    TransferRequest.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TransferRequest object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTransferRequest(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TransferRequest object"));
                        }
                        return [2 /*return*/, TransferRequest.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TransferRequest.$typeName = "0x2::transfer_policy::TransferRequest";
    TransferRequest.$numTypeParams = 1;
    return TransferRequest;
}());
exports.TransferRequest = TransferRequest;
