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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenPolicyCreated = exports.TokenPolicyCap = exports.TokenPolicy = exports.Token = exports.ActionRequest = exports.RuleKey = void 0;
exports.isRuleKey = isRuleKey;
exports.isActionRequest = isActionRequest;
exports.isToken = isToken;
exports.isTokenPolicy = isTokenPolicy;
exports.isTokenPolicyCap = isTokenPolicyCap;
exports.isTokenPolicyCreated = isTokenPolicyCreated;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/option/structs");
var structs_2 = require("../../0x1/string/structs");
var structs_3 = require("../../0x1/type-name/structs");
var structs_4 = require("../balance/structs");
var structs_5 = require("../object/structs");
var structs_6 = require("../vec-map/structs");
var structs_7 = require("../vec-set/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== RuleKey =============================== */
function isRuleKey(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::token::RuleKey<"); }
var RuleKey = /** @class */ (function () {
    function RuleKey(typeArgs, fields) {
        this.$typeName = RuleKey.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RuleKey.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.isProtected = fields.isProtected;
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
                is_protected: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RuleKey.fromFields = function (typeArg, fields) { return RuleKey.reified(typeArg).new({ isProtected: (0, reified_1.decodeFromFields)("bool", fields.is_protected) }); };
    RuleKey.fromFieldsWithTypes = function (typeArg, item) {
        if (!isRuleKey(item.type)) {
            throw new Error("not a RuleKey type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return RuleKey.reified(typeArg).new({ isProtected: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_protected) });
    };
    RuleKey.fromBcs = function (typeArg, data) { return RuleKey.fromFields(typeArg, RuleKey.bcs.parse(data)); };
    RuleKey.prototype.toJSONField = function () {
        return {
            isProtected: this.isProtected,
        };
    };
    RuleKey.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RuleKey.fromJSONField = function (typeArg, field) { return RuleKey.reified(typeArg).new({ isProtected: (0, reified_1.decodeFromJSONField)("bool", field.isProtected) }); };
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
    RuleKey.$typeName = "0x2::token::RuleKey";
    RuleKey.$numTypeParams = 1;
    return RuleKey;
}());
exports.RuleKey = RuleKey;
/* ============================== ActionRequest =============================== */
function isActionRequest(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::token::ActionRequest<"); }
var ActionRequest = /** @class */ (function () {
    function ActionRequest(typeArgs, fields) {
        this.$typeName = ActionRequest.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ActionRequest.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.name = fields.name;
        ;
        this.amount = fields.amount;
        ;
        this.sender = fields.sender;
        ;
        this.recipient = fields.recipient;
        ;
        this.spentBalance = fields.spentBalance;
        ;
        this.approvals = fields.approvals;
    }
    ActionRequest.reified = function (T) {
        var _this = this;
        return { typeName: ActionRequest.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ActionRequest.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return ActionRequest.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return ActionRequest.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return ActionRequest.fromBcs(T, data); }, bcs: ActionRequest.bcs, fromJSONField: function (field) { return ActionRequest.fromJSONField(T, field); }, fromJSON: function (json) { return ActionRequest.fromJSON(T, json); }, fromSuiParsedData: function (content) { return ActionRequest.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ActionRequest.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new ActionRequest([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ActionRequest, "r", {
        get: function () { return ActionRequest.reified; },
        enumerable: false,
        configurable: true
    });
    ActionRequest.phantom = function (T) { return (0, reified_1.phantom)(ActionRequest.reified(T)); };
    Object.defineProperty(ActionRequest, "p", {
        get: function () { return ActionRequest.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionRequest, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ActionRequest", {
                name: structs_2.String.bcs, amount: bcs_1.bcs.u64(), sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), recipient: structs_1.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, })), spent_balance: structs_1.Option.bcs(structs_4.Balance.bcs), approvals: structs_7.VecSet.bcs(structs_3.TypeName.bcs)
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ActionRequest.fromFields = function (typeArg, fields) { return ActionRequest.reified(typeArg).new({ name: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.name), amount: (0, reified_1.decodeFromFields)("u64", fields.amount), sender: (0, reified_1.decodeFromFields)("address", fields.sender), recipient: (0, reified_1.decodeFromFields)(structs_1.Option.reified("address"), fields.recipient), spentBalance: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_4.Balance.reified(typeArg)), fields.spent_balance), approvals: (0, reified_1.decodeFromFields)(structs_7.VecSet.reified(structs_3.TypeName.reified()), fields.approvals) }); };
    ActionRequest.fromFieldsWithTypes = function (typeArg, item) {
        if (!isActionRequest(item.type)) {
            throw new Error("not a ActionRequest type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return ActionRequest.reified(typeArg).new({ name: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.name), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender), recipient: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("address"), item.fields.recipient), spentBalance: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_4.Balance.reified(typeArg)), item.fields.spent_balance), approvals: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.VecSet.reified(structs_3.TypeName.reified()), item.fields.approvals) });
    };
    ActionRequest.fromBcs = function (typeArg, data) { return ActionRequest.fromFields(typeArg, ActionRequest.bcs.parse(data)); };
    ActionRequest.prototype.toJSONField = function () {
        return {
            name: this.name, amount: this.amount.toString(), sender: this.sender, recipient: (0, reified_1.fieldToJSON)("0x1::option::Option<address>", this.recipient), spentBalance: (0, reified_1.fieldToJSON)("0x1::option::Option<0x2::balance::Balance<".concat(this.$typeArgs[0], ">>"), this.spentBalance), approvals: this.approvals.toJSONField(),
        };
    };
    ActionRequest.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ActionRequest.fromJSONField = function (typeArg, field) { return ActionRequest.reified(typeArg).new({ name: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.name), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), sender: (0, reified_1.decodeFromJSONField)("address", field.sender), recipient: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("address"), field.recipient), spentBalance: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_4.Balance.reified(typeArg)), field.spentBalance), approvals: (0, reified_1.decodeFromJSONField)(structs_7.VecSet.reified(structs_3.TypeName.reified()), field.approvals) }); };
    ActionRequest.fromJSON = function (typeArg, json) {
        if (json.$typeName !== ActionRequest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(ActionRequest.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return ActionRequest.fromJSONField(typeArg, json);
    };
    ActionRequest.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isActionRequest(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ActionRequest object"));
    } return ActionRequest.fromFieldsWithTypes(typeArg, content); };
    ActionRequest.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ActionRequest object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isActionRequest(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ActionRequest object"));
                        }
                        return [2 /*return*/, ActionRequest.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ActionRequest.$typeName = "0x2::token::ActionRequest";
    ActionRequest.$numTypeParams = 1;
    return ActionRequest;
}());
exports.ActionRequest = ActionRequest;
/* ============================== Token =============================== */
function isToken(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::token::Token<"); }
var Token = /** @class */ (function () {
    function Token(typeArgs, fields) {
        this.$typeName = Token.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Token.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.balance = fields.balance;
    }
    Token.reified = function (T) {
        var _this = this;
        return { typeName: Token.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Token.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return Token.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return Token.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return Token.fromBcs(T, data); }, bcs: Token.bcs, fromJSONField: function (field) { return Token.fromJSONField(T, field); }, fromJSON: function (json) { return Token.fromJSON(T, json); }, fromSuiParsedData: function (content) { return Token.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Token.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new Token([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Token, "r", {
        get: function () { return Token.reified; },
        enumerable: false,
        configurable: true
    });
    Token.phantom = function (T) { return (0, reified_1.phantom)(Token.reified(T)); };
    Object.defineProperty(Token, "p", {
        get: function () { return Token.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Token", {
                id: structs_5.UID.bcs, balance: structs_4.Balance.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Token.fromFields = function (typeArg, fields) { return Token.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), balance: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(typeArg), fields.balance) }); };
    Token.fromFieldsWithTypes = function (typeArg, item) {
        if (!isToken(item.type)) {
            throw new Error("not a Token type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Token.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(typeArg), item.fields.balance) });
    };
    Token.fromBcs = function (typeArg, data) { return Token.fromFields(typeArg, Token.bcs.parse(data)); };
    Token.prototype.toJSONField = function () {
        return {
            id: this.id, balance: this.balance.toJSONField(),
        };
    };
    Token.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Token.fromJSONField = function (typeArg, field) { return Token.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), balance: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(typeArg), field.balance) }); };
    Token.fromJSON = function (typeArg, json) {
        if (json.$typeName !== Token.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Token.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Token.fromJSONField(typeArg, json);
    };
    Token.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isToken(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Token object"));
    } return Token.fromFieldsWithTypes(typeArg, content); };
    Token.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Token object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isToken(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Token object"));
                        }
                        return [2 /*return*/, Token.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Token.$typeName = "0x2::token::Token";
    Token.$numTypeParams = 1;
    return Token;
}());
exports.Token = Token;
/* ============================== TokenPolicy =============================== */
function isTokenPolicy(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::token::TokenPolicy<"); }
var TokenPolicy = /** @class */ (function () {
    function TokenPolicy(typeArgs, fields) {
        this.$typeName = TokenPolicy.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TokenPolicy.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.spentBalance = fields.spentBalance;
        ;
        this.rules = fields.rules;
    }
    TokenPolicy.reified = function (T) {
        var _this = this;
        return { typeName: TokenPolicy.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TokenPolicy.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return TokenPolicy.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return TokenPolicy.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return TokenPolicy.fromBcs(T, data); }, bcs: TokenPolicy.bcs, fromJSONField: function (field) { return TokenPolicy.fromJSONField(T, field); }, fromJSON: function (json) { return TokenPolicy.fromJSON(T, json); }, fromSuiParsedData: function (content) { return TokenPolicy.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TokenPolicy.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new TokenPolicy([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TokenPolicy, "r", {
        get: function () { return TokenPolicy.reified; },
        enumerable: false,
        configurable: true
    });
    TokenPolicy.phantom = function (T) { return (0, reified_1.phantom)(TokenPolicy.reified(T)); };
    Object.defineProperty(TokenPolicy, "p", {
        get: function () { return TokenPolicy.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenPolicy, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TokenPolicy", {
                id: structs_5.UID.bcs, spent_balance: structs_4.Balance.bcs, rules: structs_6.VecMap.bcs(structs_2.String.bcs, structs_7.VecSet.bcs(structs_3.TypeName.bcs))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TokenPolicy.fromFields = function (typeArg, fields) { return TokenPolicy.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), spentBalance: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(typeArg), fields.spent_balance), rules: (0, reified_1.decodeFromFields)(structs_6.VecMap.reified(structs_2.String.reified(), structs_7.VecSet.reified(structs_3.TypeName.reified())), fields.rules) }); };
    TokenPolicy.fromFieldsWithTypes = function (typeArg, item) {
        if (!isTokenPolicy(item.type)) {
            throw new Error("not a TokenPolicy type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TokenPolicy.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), spentBalance: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(typeArg), item.fields.spent_balance), rules: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.VecMap.reified(structs_2.String.reified(), structs_7.VecSet.reified(structs_3.TypeName.reified())), item.fields.rules) });
    };
    TokenPolicy.fromBcs = function (typeArg, data) { return TokenPolicy.fromFields(typeArg, TokenPolicy.bcs.parse(data)); };
    TokenPolicy.prototype.toJSONField = function () {
        return {
            id: this.id, spentBalance: this.spentBalance.toJSONField(), rules: this.rules.toJSONField(),
        };
    };
    TokenPolicy.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TokenPolicy.fromJSONField = function (typeArg, field) { return TokenPolicy.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), spentBalance: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(typeArg), field.spentBalance), rules: (0, reified_1.decodeFromJSONField)(structs_6.VecMap.reified(structs_2.String.reified(), structs_7.VecSet.reified(structs_3.TypeName.reified())), field.rules) }); };
    TokenPolicy.fromJSON = function (typeArg, json) {
        if (json.$typeName !== TokenPolicy.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TokenPolicy.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TokenPolicy.fromJSONField(typeArg, json);
    };
    TokenPolicy.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTokenPolicy(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TokenPolicy object"));
    } return TokenPolicy.fromFieldsWithTypes(typeArg, content); };
    TokenPolicy.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TokenPolicy object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTokenPolicy(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TokenPolicy object"));
                        }
                        return [2 /*return*/, TokenPolicy.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TokenPolicy.$typeName = "0x2::token::TokenPolicy";
    TokenPolicy.$numTypeParams = 1;
    return TokenPolicy;
}());
exports.TokenPolicy = TokenPolicy;
/* ============================== TokenPolicyCap =============================== */
function isTokenPolicyCap(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::token::TokenPolicyCap<"); }
var TokenPolicyCap = /** @class */ (function () {
    function TokenPolicyCap(typeArgs, fields) {
        this.$typeName = TokenPolicyCap.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TokenPolicyCap.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.for = fields.for;
    }
    TokenPolicyCap.reified = function (T) {
        var _this = this;
        return { typeName: TokenPolicyCap.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TokenPolicyCap.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return TokenPolicyCap.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return TokenPolicyCap.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return TokenPolicyCap.fromBcs(T, data); }, bcs: TokenPolicyCap.bcs, fromJSONField: function (field) { return TokenPolicyCap.fromJSONField(T, field); }, fromJSON: function (json) { return TokenPolicyCap.fromJSON(T, json); }, fromSuiParsedData: function (content) { return TokenPolicyCap.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TokenPolicyCap.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new TokenPolicyCap([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TokenPolicyCap, "r", {
        get: function () { return TokenPolicyCap.reified; },
        enumerable: false,
        configurable: true
    });
    TokenPolicyCap.phantom = function (T) { return (0, reified_1.phantom)(TokenPolicyCap.reified(T)); };
    Object.defineProperty(TokenPolicyCap, "p", {
        get: function () { return TokenPolicyCap.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenPolicyCap, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TokenPolicyCap", {
                id: structs_5.UID.bcs, for: structs_5.ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TokenPolicyCap.fromFields = function (typeArg, fields) { return TokenPolicyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), for: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.for) }); };
    TokenPolicyCap.fromFieldsWithTypes = function (typeArg, item) {
        if (!isTokenPolicyCap(item.type)) {
            throw new Error("not a TokenPolicyCap type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TokenPolicyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), for: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.for) });
    };
    TokenPolicyCap.fromBcs = function (typeArg, data) { return TokenPolicyCap.fromFields(typeArg, TokenPolicyCap.bcs.parse(data)); };
    TokenPolicyCap.prototype.toJSONField = function () {
        return {
            id: this.id, for: this.for,
        };
    };
    TokenPolicyCap.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TokenPolicyCap.fromJSONField = function (typeArg, field) { return TokenPolicyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), for: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.for) }); };
    TokenPolicyCap.fromJSON = function (typeArg, json) {
        if (json.$typeName !== TokenPolicyCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TokenPolicyCap.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TokenPolicyCap.fromJSONField(typeArg, json);
    };
    TokenPolicyCap.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTokenPolicyCap(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TokenPolicyCap object"));
    } return TokenPolicyCap.fromFieldsWithTypes(typeArg, content); };
    TokenPolicyCap.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TokenPolicyCap object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTokenPolicyCap(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TokenPolicyCap object"));
                        }
                        return [2 /*return*/, TokenPolicyCap.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TokenPolicyCap.$typeName = "0x2::token::TokenPolicyCap";
    TokenPolicyCap.$numTypeParams = 1;
    return TokenPolicyCap;
}());
exports.TokenPolicyCap = TokenPolicyCap;
/* ============================== TokenPolicyCreated =============================== */
function isTokenPolicyCreated(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::token::TokenPolicyCreated<"); }
var TokenPolicyCreated = /** @class */ (function () {
    function TokenPolicyCreated(typeArgs, fields) {
        this.$typeName = TokenPolicyCreated.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TokenPolicyCreated.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.isMutable = fields.isMutable;
    }
    TokenPolicyCreated.reified = function (T) {
        var _this = this;
        return { typeName: TokenPolicyCreated.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TokenPolicyCreated.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return TokenPolicyCreated.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return TokenPolicyCreated.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return TokenPolicyCreated.fromBcs(T, data); }, bcs: TokenPolicyCreated.bcs, fromJSONField: function (field) { return TokenPolicyCreated.fromJSONField(T, field); }, fromJSON: function (json) { return TokenPolicyCreated.fromJSON(T, json); }, fromSuiParsedData: function (content) { return TokenPolicyCreated.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TokenPolicyCreated.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new TokenPolicyCreated([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TokenPolicyCreated, "r", {
        get: function () { return TokenPolicyCreated.reified; },
        enumerable: false,
        configurable: true
    });
    TokenPolicyCreated.phantom = function (T) { return (0, reified_1.phantom)(TokenPolicyCreated.reified(T)); };
    Object.defineProperty(TokenPolicyCreated, "p", {
        get: function () { return TokenPolicyCreated.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenPolicyCreated, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TokenPolicyCreated", {
                id: structs_5.ID.bcs, is_mutable: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TokenPolicyCreated.fromFields = function (typeArg, fields) { return TokenPolicyCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.id), isMutable: (0, reified_1.decodeFromFields)("bool", fields.is_mutable) }); };
    TokenPolicyCreated.fromFieldsWithTypes = function (typeArg, item) {
        if (!isTokenPolicyCreated(item.type)) {
            throw new Error("not a TokenPolicyCreated type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TokenPolicyCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.id), isMutable: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_mutable) });
    };
    TokenPolicyCreated.fromBcs = function (typeArg, data) { return TokenPolicyCreated.fromFields(typeArg, TokenPolicyCreated.bcs.parse(data)); };
    TokenPolicyCreated.prototype.toJSONField = function () {
        return {
            id: this.id, isMutable: this.isMutable,
        };
    };
    TokenPolicyCreated.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TokenPolicyCreated.fromJSONField = function (typeArg, field) { return TokenPolicyCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.id), isMutable: (0, reified_1.decodeFromJSONField)("bool", field.isMutable) }); };
    TokenPolicyCreated.fromJSON = function (typeArg, json) {
        if (json.$typeName !== TokenPolicyCreated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TokenPolicyCreated.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TokenPolicyCreated.fromJSONField(typeArg, json);
    };
    TokenPolicyCreated.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTokenPolicyCreated(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TokenPolicyCreated object"));
    } return TokenPolicyCreated.fromFieldsWithTypes(typeArg, content); };
    TokenPolicyCreated.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TokenPolicyCreated object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTokenPolicyCreated(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TokenPolicyCreated object"));
                        }
                        return [2 /*return*/, TokenPolicyCreated.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TokenPolicyCreated.$typeName = "0x2::token::TokenPolicyCreated";
    TokenPolicyCreated.$numTypeParams = 1;
    return TokenPolicyCreated;
}());
exports.TokenPolicyCreated = TokenPolicyCreated;
