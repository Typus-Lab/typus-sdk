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
exports.Unit = exports.Set = void 0;
exports.isSet = isSet;
exports.isUnit = isUnit;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x2/table/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== Set =============================== */
function isSet(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set::Set<"); }
var Set = /** @class */ (function () {
    function Set(typeArgs, fields) {
        this.$typeName = Set.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Set.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.keys = fields.keys;
        ;
        this.elems = fields.elems;
    }
    Set.reified = function (A) {
        var _this = this;
        return { typeName: Set.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Set.$typeName], [(0, reified_1.extractType)(A)], false)), typeArgs: [(0, reified_1.extractType)(A)], reifiedTypeArgs: [A], fromFields: function (fields) { return Set.fromFields(A, fields); }, fromFieldsWithTypes: function (item) { return Set.fromFieldsWithTypes(A, item); }, fromBcs: function (data) { return Set.fromBcs(A, data); }, bcs: Set.bcs((0, reified_1.toBcs)(A)), fromJSONField: function (field) { return Set.fromJSONField(A, field); }, fromJSON: function (json) { return Set.fromJSON(A, json); }, fromSuiParsedData: function (content) { return Set.fromSuiParsedData(A, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Set.fetch(client, A, id)];
            }); }); }, new: function (fields) { return new Set([(0, reified_1.extractType)(A)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Set, "r", {
        get: function () { return Set.reified; },
        enumerable: false,
        configurable: true
    });
    Set.phantom = function (A) { return (0, reified_1.phantom)(Set.reified(A)); };
    Object.defineProperty(Set, "p", {
        get: function () { return Set.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Set, "bcs", {
        get: function () {
            return function (A) { return bcs_1.bcs.struct("Set<".concat(A.name, ">"), {
                keys: bcs_1.bcs.vector(A), elems: structs_1.Table.bcs
            }); };
        },
        enumerable: false,
        configurable: true
    });
    ;
    Set.fromFields = function (typeArg, fields) { return Set.reified(typeArg).new({ keys: (0, reified_1.decodeFromFields)(reified.vector(typeArg), fields.keys), elems: (0, reified_1.decodeFromFields)(structs_1.Table.reified(reified.phantom(typeArg), reified.phantom(Unit.reified())), fields.elems) }); };
    Set.fromFieldsWithTypes = function (typeArg, item) {
        if (!isSet(item.type)) {
            throw new Error("not a Set type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Set.reified(typeArg).new({ keys: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(typeArg), item.fields.keys), elems: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Table.reified(reified.phantom(typeArg), reified.phantom(Unit.reified())), item.fields.elems) });
    };
    Set.fromBcs = function (typeArg, data) {
        var typeArgs = [typeArg];
        return Set.fromFields(typeArg, Set.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data));
    };
    Set.prototype.toJSONField = function () {
        return {
            keys: (0, reified_1.fieldToJSON)("vector<".concat(this.$typeArgs[0], ">"), this.keys), elems: this.elems.toJSONField(),
        };
    };
    Set.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Set.fromJSONField = function (typeArg, field) { return Set.reified(typeArg).new({ keys: (0, reified_1.decodeFromJSONField)(reified.vector(typeArg), field.keys), elems: (0, reified_1.decodeFromJSONField)(structs_1.Table.reified(reified.phantom(typeArg), reified.phantom(Unit.reified())), field.elems) }); };
    Set.fromJSON = function (typeArg, json) {
        if (json.$typeName !== Set.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Set.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Set.fromJSONField(typeArg, json);
    };
    Set.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSet(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Set object"));
    } return Set.fromFieldsWithTypes(typeArg, content); };
    Set.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Set object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSet(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Set object"));
                        }
                        return [2 /*return*/, Set.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Set.$typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set::Set";
    Set.$numTypeParams = 1;
    return Set;
}());
exports.Set = Set;
/* ============================== Unit =============================== */
function isUnit(type) { type = (0, util_1.compressSuiType)(type); return type === "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set::Unit"; }
var Unit = /** @class */ (function () {
    function Unit(typeArgs, fields) {
        this.$typeName = Unit.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Unit.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    Unit.reified = function () {
        var _this = this;
        return { typeName: Unit.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Unit.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Unit.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Unit.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Unit.fromBcs(data); }, bcs: Unit.bcs, fromJSONField: function (field) { return Unit.fromJSONField(field); }, fromJSON: function (json) { return Unit.fromJSON(json); }, fromSuiParsedData: function (content) { return Unit.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Unit.fetch(client, id)];
            }); }); }, new: function (fields) { return new Unit([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Unit, "r", {
        get: function () { return Unit.reified(); },
        enumerable: false,
        configurable: true
    });
    Unit.phantom = function () { return (0, reified_1.phantom)(Unit.reified()); };
    Object.defineProperty(Unit, "p", {
        get: function () { return Unit.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Unit, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Unit", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Unit.fromFields = function (fields) { return Unit.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    Unit.fromFieldsWithTypes = function (item) {
        if (!isUnit(item.type)) {
            throw new Error("not a Unit type");
        }
        return Unit.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    Unit.fromBcs = function (data) { return Unit.fromFields(Unit.bcs.parse(data)); };
    Unit.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    Unit.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Unit.fromJSONField = function (field) { return Unit.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    Unit.fromJSON = function (json) {
        if (json.$typeName !== Unit.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Unit.fromJSONField(json);
    };
    Unit.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUnit(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Unit object"));
    } return Unit.fromFieldsWithTypes(content); };
    Unit.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Unit object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUnit(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Unit object"));
                        }
                        return [2 /*return*/, Unit.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Unit.$typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set::Unit";
    Unit.$numTypeParams = 0;
    return Unit;
}());
exports.Unit = Unit;
