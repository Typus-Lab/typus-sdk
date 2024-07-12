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
exports.Supply = exports.Balance = void 0;
exports.isBalance = isBalance;
exports.isSupply = isSupply;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var bcs_1 = require("@mysten/bcs");
/* ============================== Balance =============================== */
function isBalance(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::balance::Balance<"); }
var Balance = /** @class */ (function () {
    function Balance(typeArgs, fields) {
        this.$typeName = Balance.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Balance.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.value = fields.value;
    }
    Balance.reified = function (T) {
        var _this = this;
        return { typeName: Balance.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Balance.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return Balance.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return Balance.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return Balance.fromBcs(T, data); }, bcs: Balance.bcs, fromJSONField: function (field) { return Balance.fromJSONField(T, field); }, fromJSON: function (json) { return Balance.fromJSON(T, json); }, fromSuiParsedData: function (content) { return Balance.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Balance.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new Balance([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Balance, "r", {
        get: function () { return Balance.reified; },
        enumerable: false,
        configurable: true
    });
    Balance.phantom = function (T) { return (0, reified_1.phantom)(Balance.reified(T)); };
    Object.defineProperty(Balance, "p", {
        get: function () { return Balance.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Balance, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Balance", {
                value: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Balance.fromFields = function (typeArg, fields) { return Balance.reified(typeArg).new({ value: (0, reified_1.decodeFromFields)("u64", fields.value) }); };
    Balance.fromFieldsWithTypes = function (typeArg, item) {
        if (!isBalance(item.type)) {
            throw new Error("not a Balance type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Balance.reified(typeArg).new({ value: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.value) });
    };
    Balance.fromBcs = function (typeArg, data) { return Balance.fromFields(typeArg, Balance.bcs.parse(data)); };
    Balance.prototype.toJSONField = function () {
        return {
            value: this.value.toString(),
        };
    };
    Balance.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Balance.fromJSONField = function (typeArg, field) { return Balance.reified(typeArg).new({ value: (0, reified_1.decodeFromJSONField)("u64", field.value) }); };
    Balance.fromJSON = function (typeArg, json) {
        if (json.$typeName !== Balance.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Balance.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Balance.fromJSONField(typeArg, json);
    };
    Balance.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBalance(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Balance object"));
    } return Balance.fromFieldsWithTypes(typeArg, content); };
    Balance.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Balance object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBalance(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Balance object"));
                        }
                        return [2 /*return*/, Balance.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Balance.$typeName = "0x2::balance::Balance";
    Balance.$numTypeParams = 1;
    return Balance;
}());
exports.Balance = Balance;
/* ============================== Supply =============================== */
function isSupply(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::balance::Supply<"); }
var Supply = /** @class */ (function () {
    function Supply(typeArgs, fields) {
        this.$typeName = Supply.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Supply.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.value = fields.value;
    }
    Supply.reified = function (T) {
        var _this = this;
        return { typeName: Supply.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Supply.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return Supply.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return Supply.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return Supply.fromBcs(T, data); }, bcs: Supply.bcs, fromJSONField: function (field) { return Supply.fromJSONField(T, field); }, fromJSON: function (json) { return Supply.fromJSON(T, json); }, fromSuiParsedData: function (content) { return Supply.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Supply.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new Supply([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Supply, "r", {
        get: function () { return Supply.reified; },
        enumerable: false,
        configurable: true
    });
    Supply.phantom = function (T) { return (0, reified_1.phantom)(Supply.reified(T)); };
    Object.defineProperty(Supply, "p", {
        get: function () { return Supply.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Supply, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Supply", {
                value: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Supply.fromFields = function (typeArg, fields) { return Supply.reified(typeArg).new({ value: (0, reified_1.decodeFromFields)("u64", fields.value) }); };
    Supply.fromFieldsWithTypes = function (typeArg, item) {
        if (!isSupply(item.type)) {
            throw new Error("not a Supply type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Supply.reified(typeArg).new({ value: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.value) });
    };
    Supply.fromBcs = function (typeArg, data) { return Supply.fromFields(typeArg, Supply.bcs.parse(data)); };
    Supply.prototype.toJSONField = function () {
        return {
            value: this.value.toString(),
        };
    };
    Supply.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Supply.fromJSONField = function (typeArg, field) { return Supply.reified(typeArg).new({ value: (0, reified_1.decodeFromJSONField)("u64", field.value) }); };
    Supply.fromJSON = function (typeArg, json) {
        if (json.$typeName !== Supply.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Supply.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Supply.fromJSONField(typeArg, json);
    };
    Supply.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSupply(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Supply object"));
    } return Supply.fromFieldsWithTypes(typeArg, content); };
    Supply.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Supply object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSupply(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Supply object"));
                        }
                        return [2 /*return*/, Supply.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Supply.$typeName = "0x2::balance::Supply";
    Supply.$numTypeParams = 1;
    return Supply;
}());
exports.Supply = Supply;
