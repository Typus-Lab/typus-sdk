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
exports.Referent = exports.Borrow = void 0;
exports.isBorrow = isBorrow;
exports.isReferent = isReferent;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/option/structs");
var structs_2 = require("../object/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== Borrow =============================== */
function isBorrow(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::borrow::Borrow"; }
var Borrow = /** @class */ (function () {
    function Borrow(typeArgs, fields) {
        this.$typeName = Borrow.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Borrow.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.ref = fields.ref;
        ;
        this.obj = fields.obj;
    }
    Borrow.reified = function () {
        var _this = this;
        return { typeName: Borrow.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Borrow.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Borrow.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Borrow.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Borrow.fromBcs(data); }, bcs: Borrow.bcs, fromJSONField: function (field) { return Borrow.fromJSONField(field); }, fromJSON: function (json) { return Borrow.fromJSON(json); }, fromSuiParsedData: function (content) { return Borrow.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Borrow.fetch(client, id)];
            }); }); }, new: function (fields) { return new Borrow([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Borrow, "r", {
        get: function () { return Borrow.reified(); },
        enumerable: false,
        configurable: true
    });
    Borrow.phantom = function () { return (0, reified_1.phantom)(Borrow.reified()); };
    Object.defineProperty(Borrow, "p", {
        get: function () { return Borrow.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Borrow, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Borrow", {
                ref: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), obj: structs_2.ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Borrow.fromFields = function (fields) { return Borrow.reified().new({ ref: (0, reified_1.decodeFromFields)("address", fields.ref), obj: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.obj) }); };
    Borrow.fromFieldsWithTypes = function (item) {
        if (!isBorrow(item.type)) {
            throw new Error("not a Borrow type");
        }
        return Borrow.reified().new({ ref: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.ref), obj: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.obj) });
    };
    Borrow.fromBcs = function (data) { return Borrow.fromFields(Borrow.bcs.parse(data)); };
    Borrow.prototype.toJSONField = function () {
        return {
            ref: this.ref, obj: this.obj,
        };
    };
    Borrow.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Borrow.fromJSONField = function (field) { return Borrow.reified().new({ ref: (0, reified_1.decodeFromJSONField)("address", field.ref), obj: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.obj) }); };
    Borrow.fromJSON = function (json) {
        if (json.$typeName !== Borrow.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Borrow.fromJSONField(json);
    };
    Borrow.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBorrow(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Borrow object"));
    } return Borrow.fromFieldsWithTypes(content); };
    Borrow.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Borrow object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBorrow(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Borrow object"));
                        }
                        return [2 /*return*/, Borrow.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Borrow.$typeName = "0x2::borrow::Borrow";
    Borrow.$numTypeParams = 0;
    return Borrow;
}());
exports.Borrow = Borrow;
/* ============================== Referent =============================== */
function isReferent(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::borrow::Referent<"); }
var Referent = /** @class */ (function () {
    function Referent(typeArgs, fields) {
        this.$typeName = Referent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Referent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.value = fields.value;
    }
    Referent.reified = function (T) {
        var _this = this;
        return { typeName: Referent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Referent.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return Referent.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return Referent.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return Referent.fromBcs(T, data); }, bcs: Referent.bcs((0, reified_1.toBcs)(T)), fromJSONField: function (field) { return Referent.fromJSONField(T, field); }, fromJSON: function (json) { return Referent.fromJSON(T, json); }, fromSuiParsedData: function (content) { return Referent.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Referent.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new Referent([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Referent, "r", {
        get: function () { return Referent.reified; },
        enumerable: false,
        configurable: true
    });
    Referent.phantom = function (T) { return (0, reified_1.phantom)(Referent.reified(T)); };
    Object.defineProperty(Referent, "p", {
        get: function () { return Referent.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Referent, "bcs", {
        get: function () {
            return function (T) { return bcs_1.bcs.struct("Referent<".concat(T.name, ">"), {
                id: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), value: structs_1.Option.bcs(T)
            }); };
        },
        enumerable: false,
        configurable: true
    });
    ;
    Referent.fromFields = function (typeArg, fields) { return Referent.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)("address", fields.id), value: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArg), fields.value) }); };
    Referent.fromFieldsWithTypes = function (typeArg, item) {
        if (!isReferent(item.type)) {
            throw new Error("not a Referent type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Referent.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.id), value: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArg), item.fields.value) });
    };
    Referent.fromBcs = function (typeArg, data) {
        var typeArgs = [typeArg];
        return Referent.fromFields(typeArg, Referent.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data));
    };
    Referent.prototype.toJSONField = function () {
        return {
            id: this.id, value: (0, reified_1.fieldToJSON)("0x1::option::Option<".concat(this.$typeArgs[0], ">"), this.value),
        };
    };
    Referent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Referent.fromJSONField = function (typeArg, field) { return Referent.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)("address", field.id), value: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArg), field.value) }); };
    Referent.fromJSON = function (typeArg, json) {
        if (json.$typeName !== Referent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Referent.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Referent.fromJSONField(typeArg, json);
    };
    Referent.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isReferent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Referent object"));
    } return Referent.fromFieldsWithTypes(typeArg, content); };
    Referent.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Referent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isReferent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Referent object"));
                        }
                        return [2 /*return*/, Referent.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Referent.$typeName = "0x2::borrow::Referent";
    Referent.$numTypeParams = 1;
    return Referent;
}());
exports.Referent = Referent;
