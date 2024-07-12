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
exports.Empty = exports.Set = void 0;
exports.isSet = isSet;
exports.isEmpty = isEmpty;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x2/table/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== Set =============================== */
function isSet(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set::Set<"); }
var Set = /** @class */ (function () {
    function Set(typeArgs, fields) {
        this.$typeName = Set.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Set.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.items = fields.items;
    }
    Set.reified = function (T) {
        var _this = this;
        return { typeName: Set.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Set.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return Set.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return Set.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return Set.fromBcs(T, data); }, bcs: Set.bcs, fromJSONField: function (field) { return Set.fromJSONField(T, field); }, fromJSON: function (json) { return Set.fromJSON(T, json); }, fromSuiParsedData: function (content) { return Set.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Set.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new Set([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Set, "r", {
        get: function () { return Set.reified; },
        enumerable: false,
        configurable: true
    });
    Set.phantom = function (T) { return (0, reified_1.phantom)(Set.reified(T)); };
    Object.defineProperty(Set, "p", {
        get: function () { return Set.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Set, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Set", {
                items: structs_1.Table.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Set.fromFields = function (typeArg, fields) { return Set.reified(typeArg).new({ items: (0, reified_1.decodeFromFields)(structs_1.Table.reified(typeArg, reified.phantom(Empty.reified())), fields.items) }); };
    Set.fromFieldsWithTypes = function (typeArg, item) {
        if (!isSet(item.type)) {
            throw new Error("not a Set type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Set.reified(typeArg).new({ items: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Table.reified(typeArg, reified.phantom(Empty.reified())), item.fields.items) });
    };
    Set.fromBcs = function (typeArg, data) { return Set.fromFields(typeArg, Set.bcs.parse(data)); };
    Set.prototype.toJSONField = function () {
        return {
            items: this.items.toJSONField(),
        };
    };
    Set.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Set.fromJSONField = function (typeArg, field) { return Set.reified(typeArg).new({ items: (0, reified_1.decodeFromJSONField)(structs_1.Table.reified(typeArg, reified.phantom(Empty.reified())), field.items) }); };
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
    Set.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set::Set";
    Set.$numTypeParams = 1;
    return Set;
}());
exports.Set = Set;
/* ============================== Empty =============================== */
function isEmpty(type) { type = (0, util_1.compressSuiType)(type); return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set::Empty"; }
var Empty = /** @class */ (function () {
    function Empty(typeArgs, fields) {
        this.$typeName = Empty.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Empty.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    Empty.reified = function () {
        var _this = this;
        return { typeName: Empty.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Empty.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Empty.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Empty.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Empty.fromBcs(data); }, bcs: Empty.bcs, fromJSONField: function (field) { return Empty.fromJSONField(field); }, fromJSON: function (json) { return Empty.fromJSON(json); }, fromSuiParsedData: function (content) { return Empty.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Empty.fetch(client, id)];
            }); }); }, new: function (fields) { return new Empty([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Empty, "r", {
        get: function () { return Empty.reified(); },
        enumerable: false,
        configurable: true
    });
    Empty.phantom = function () { return (0, reified_1.phantom)(Empty.reified()); };
    Object.defineProperty(Empty, "p", {
        get: function () { return Empty.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empty, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Empty", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Empty.fromFields = function (fields) { return Empty.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    Empty.fromFieldsWithTypes = function (item) {
        if (!isEmpty(item.type)) {
            throw new Error("not a Empty type");
        }
        return Empty.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    Empty.fromBcs = function (data) { return Empty.fromFields(Empty.bcs.parse(data)); };
    Empty.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    Empty.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Empty.fromJSONField = function (field) { return Empty.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    Empty.fromJSON = function (json) {
        if (json.$typeName !== Empty.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Empty.fromJSONField(json);
    };
    Empty.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isEmpty(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Empty object"));
    } return Empty.fromFieldsWithTypes(content); };
    Empty.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Empty object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isEmpty(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Empty object"));
                        }
                        return [2 /*return*/, Empty.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Empty.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::set::Empty";
    Empty.$numTypeParams = 0;
    return Empty;
}());
exports.Empty = Empty;
