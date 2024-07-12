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
exports.VecMap = exports.Entry = void 0;
exports.isEntry = isEntry;
exports.isVecMap = isVecMap;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var bcs_1 = require("@mysten/bcs");
/* ============================== Entry =============================== */
function isEntry(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::vec_map::Entry<"); }
var Entry = /** @class */ (function () {
    function Entry(typeArgs, fields) {
        this.$typeName = Entry.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Entry.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.key = fields.key;
        ;
        this.value = fields.value;
    }
    Entry.reified = function (K, V) {
        var _this = this;
        return { typeName: Entry.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Entry.$typeName], [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], false)), typeArgs: [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], reifiedTypeArgs: [K, V], fromFields: function (fields) { return Entry.fromFields([K, V], fields); }, fromFieldsWithTypes: function (item) { return Entry.fromFieldsWithTypes([K, V], item); }, fromBcs: function (data) { return Entry.fromBcs([K, V], data); }, bcs: Entry.bcs((0, reified_1.toBcs)(K), (0, reified_1.toBcs)(V)), fromJSONField: function (field) { return Entry.fromJSONField([K, V], field); }, fromJSON: function (json) { return Entry.fromJSON([K, V], json); }, fromSuiParsedData: function (content) { return Entry.fromSuiParsedData([K, V], content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Entry.fetch(client, [K, V], id)];
            }); }); }, new: function (fields) { return new Entry([(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Entry, "r", {
        get: function () { return Entry.reified; },
        enumerable: false,
        configurable: true
    });
    Entry.phantom = function (K, V) { return (0, reified_1.phantom)(Entry.reified(K, V)); };
    Object.defineProperty(Entry, "p", {
        get: function () { return Entry.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entry, "bcs", {
        get: function () {
            return function (K, V) { return bcs_1.bcs.struct("Entry<".concat(K.name, ", ").concat(V.name, ">"), {
                key: K, value: V
            }); };
        },
        enumerable: false,
        configurable: true
    });
    ;
    Entry.fromFields = function (typeArgs, fields) { return Entry.reified(typeArgs[0], typeArgs[1]).new({ key: (0, reified_1.decodeFromFields)(typeArgs[0], fields.key), value: (0, reified_1.decodeFromFields)(typeArgs[1], fields.value) }); };
    Entry.fromFieldsWithTypes = function (typeArgs, item) {
        if (!isEntry(item.type)) {
            throw new Error("not a Entry type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return Entry.reified(typeArgs[0], typeArgs[1]).new({ key: (0, reified_1.decodeFromFieldsWithTypes)(typeArgs[0], item.fields.key), value: (0, reified_1.decodeFromFieldsWithTypes)(typeArgs[1], item.fields.value) });
    };
    Entry.fromBcs = function (typeArgs, data) { return Entry.fromFields(typeArgs, Entry.bcs((0, reified_1.toBcs)(typeArgs[0]), (0, reified_1.toBcs)(typeArgs[1])).parse(data)); };
    Entry.prototype.toJSONField = function () {
        return {
            key: (0, reified_1.fieldToJSON)(this.$typeArgs[0], this.key), value: (0, reified_1.fieldToJSON)(this.$typeArgs[1], this.value),
        };
    };
    Entry.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Entry.fromJSONField = function (typeArgs, field) { return Entry.reified(typeArgs[0], typeArgs[1]).new({ key: (0, reified_1.decodeFromJSONField)(typeArgs[0], field.key), value: (0, reified_1.decodeFromJSONField)(typeArgs[1], field.value) }); };
    Entry.fromJSON = function (typeArgs, json) {
        if (json.$typeName !== Entry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)(util_1.composeSuiType.apply(void 0, __spreadArray([Entry.$typeName], __read(typeArgs.map(reified_1.extractType)), false)), json.$typeArgs, typeArgs);
        return Entry.fromJSONField(typeArgs, json);
    };
    Entry.fromSuiParsedData = function (typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isEntry(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Entry object"));
    } return Entry.fromFieldsWithTypes(typeArgs, content); };
    Entry.fetch = function (client, typeArgs, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Entry object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isEntry(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Entry object"));
                        }
                        return [2 /*return*/, Entry.fromBcs(typeArgs, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Entry.$typeName = "0x2::vec_map::Entry";
    Entry.$numTypeParams = 2;
    return Entry;
}());
exports.Entry = Entry;
/* ============================== VecMap =============================== */
function isVecMap(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::vec_map::VecMap<"); }
var VecMap = /** @class */ (function () {
    function VecMap(typeArgs, fields) {
        this.$typeName = VecMap.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([VecMap.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.contents = fields.contents;
    }
    VecMap.reified = function (K, V) {
        var _this = this;
        return { typeName: VecMap.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([VecMap.$typeName], [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], false)), typeArgs: [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], reifiedTypeArgs: [K, V], fromFields: function (fields) { return VecMap.fromFields([K, V], fields); }, fromFieldsWithTypes: function (item) { return VecMap.fromFieldsWithTypes([K, V], item); }, fromBcs: function (data) { return VecMap.fromBcs([K, V], data); }, bcs: VecMap.bcs((0, reified_1.toBcs)(K), (0, reified_1.toBcs)(V)), fromJSONField: function (field) { return VecMap.fromJSONField([K, V], field); }, fromJSON: function (json) { return VecMap.fromJSON([K, V], json); }, fromSuiParsedData: function (content) { return VecMap.fromSuiParsedData([K, V], content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, VecMap.fetch(client, [K, V], id)];
            }); }); }, new: function (fields) { return new VecMap([(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(VecMap, "r", {
        get: function () { return VecMap.reified; },
        enumerable: false,
        configurable: true
    });
    VecMap.phantom = function (K, V) { return (0, reified_1.phantom)(VecMap.reified(K, V)); };
    Object.defineProperty(VecMap, "p", {
        get: function () { return VecMap.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VecMap, "bcs", {
        get: function () {
            return function (K, V) { return bcs_1.bcs.struct("VecMap<".concat(K.name, ", ").concat(V.name, ">"), {
                contents: bcs_1.bcs.vector(Entry.bcs(K, V))
            }); };
        },
        enumerable: false,
        configurable: true
    });
    ;
    VecMap.fromFields = function (typeArgs, fields) { return VecMap.reified(typeArgs[0], typeArgs[1]).new({ contents: (0, reified_1.decodeFromFields)(reified.vector(Entry.reified(typeArgs[0], typeArgs[1])), fields.contents) }); };
    VecMap.fromFieldsWithTypes = function (typeArgs, item) {
        if (!isVecMap(item.type)) {
            throw new Error("not a VecMap type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return VecMap.reified(typeArgs[0], typeArgs[1]).new({ contents: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(Entry.reified(typeArgs[0], typeArgs[1])), item.fields.contents) });
    };
    VecMap.fromBcs = function (typeArgs, data) { return VecMap.fromFields(typeArgs, VecMap.bcs((0, reified_1.toBcs)(typeArgs[0]), (0, reified_1.toBcs)(typeArgs[1])).parse(data)); };
    VecMap.prototype.toJSONField = function () {
        return {
            contents: (0, reified_1.fieldToJSON)("vector<0x2::vec_map::Entry<".concat(this.$typeArgs[0], ", ").concat(this.$typeArgs[1], ">>"), this.contents),
        };
    };
    VecMap.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    VecMap.fromJSONField = function (typeArgs, field) { return VecMap.reified(typeArgs[0], typeArgs[1]).new({ contents: (0, reified_1.decodeFromJSONField)(reified.vector(Entry.reified(typeArgs[0], typeArgs[1])), field.contents) }); };
    VecMap.fromJSON = function (typeArgs, json) {
        if (json.$typeName !== VecMap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)(util_1.composeSuiType.apply(void 0, __spreadArray([VecMap.$typeName], __read(typeArgs.map(reified_1.extractType)), false)), json.$typeArgs, typeArgs);
        return VecMap.fromJSONField(typeArgs, json);
    };
    VecMap.fromSuiParsedData = function (typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVecMap(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a VecMap object"));
    } return VecMap.fromFieldsWithTypes(typeArgs, content); };
    VecMap.fetch = function (client, typeArgs, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching VecMap object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVecMap(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a VecMap object"));
                        }
                        return [2 /*return*/, VecMap.fromBcs(typeArgs, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    VecMap.$typeName = "0x2::vec_map::VecMap";
    VecMap.$numTypeParams = 2;
    return VecMap;
}());
exports.VecMap = VecMap;
