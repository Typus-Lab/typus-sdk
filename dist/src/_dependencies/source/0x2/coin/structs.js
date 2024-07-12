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
exports.TreasuryCap = exports.RegulatedCoinMetadata = exports.DenyCap = exports.CurrencyCreated = exports.CoinMetadata = exports.Coin = void 0;
exports.isCoin = isCoin;
exports.isCoinMetadata = isCoinMetadata;
exports.isCurrencyCreated = isCurrencyCreated;
exports.isDenyCap = isDenyCap;
exports.isRegulatedCoinMetadata = isRegulatedCoinMetadata;
exports.isTreasuryCap = isTreasuryCap;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/ascii/structs");
var structs_2 = require("../../0x1/option/structs");
var structs_3 = require("../../0x1/string/structs");
var structs_4 = require("../balance/structs");
var structs_5 = require("../object/structs");
var structs_6 = require("../url/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== Coin =============================== */
function isCoin(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::coin::Coin<"); }
var Coin = /** @class */ (function () {
    function Coin(typeArgs, fields) {
        this.$typeName = Coin.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Coin.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.balance = fields.balance;
    }
    Coin.reified = function (T) {
        var _this = this;
        return { typeName: Coin.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Coin.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return Coin.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return Coin.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return Coin.fromBcs(T, data); }, bcs: Coin.bcs, fromJSONField: function (field) { return Coin.fromJSONField(T, field); }, fromJSON: function (json) { return Coin.fromJSON(T, json); }, fromSuiParsedData: function (content) { return Coin.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Coin.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new Coin([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Coin, "r", {
        get: function () { return Coin.reified; },
        enumerable: false,
        configurable: true
    });
    Coin.phantom = function (T) { return (0, reified_1.phantom)(Coin.reified(T)); };
    Object.defineProperty(Coin, "p", {
        get: function () { return Coin.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coin, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Coin", {
                id: structs_5.UID.bcs, balance: structs_4.Balance.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Coin.fromFields = function (typeArg, fields) { return Coin.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), balance: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(typeArg), fields.balance) }); };
    Coin.fromFieldsWithTypes = function (typeArg, item) {
        if (!isCoin(item.type)) {
            throw new Error("not a Coin type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Coin.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(typeArg), item.fields.balance) });
    };
    Coin.fromBcs = function (typeArg, data) { return Coin.fromFields(typeArg, Coin.bcs.parse(data)); };
    Coin.prototype.toJSONField = function () {
        return {
            id: this.id, balance: this.balance.toJSONField(),
        };
    };
    Coin.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Coin.fromJSONField = function (typeArg, field) { return Coin.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), balance: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(typeArg), field.balance) }); };
    Coin.fromJSON = function (typeArg, json) {
        if (json.$typeName !== Coin.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Coin.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Coin.fromJSONField(typeArg, json);
    };
    Coin.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCoin(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Coin object"));
    } return Coin.fromFieldsWithTypes(typeArg, content); };
    Coin.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Coin object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCoin(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Coin object"));
                        }
                        return [2 /*return*/, Coin.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Coin.$typeName = "0x2::coin::Coin";
    Coin.$numTypeParams = 1;
    return Coin;
}());
exports.Coin = Coin;
/* ============================== CoinMetadata =============================== */
function isCoinMetadata(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::coin::CoinMetadata<"); }
var CoinMetadata = /** @class */ (function () {
    function CoinMetadata(typeArgs, fields) {
        this.$typeName = CoinMetadata.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([CoinMetadata.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.decimals = fields.decimals;
        ;
        this.name = fields.name;
        ;
        this.symbol = fields.symbol;
        ;
        this.description = fields.description;
        ;
        this.iconUrl = fields.iconUrl;
    }
    CoinMetadata.reified = function (T) {
        var _this = this;
        return { typeName: CoinMetadata.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([CoinMetadata.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return CoinMetadata.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return CoinMetadata.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return CoinMetadata.fromBcs(T, data); }, bcs: CoinMetadata.bcs, fromJSONField: function (field) { return CoinMetadata.fromJSONField(T, field); }, fromJSON: function (json) { return CoinMetadata.fromJSON(T, json); }, fromSuiParsedData: function (content) { return CoinMetadata.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, CoinMetadata.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new CoinMetadata([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(CoinMetadata, "r", {
        get: function () { return CoinMetadata.reified; },
        enumerable: false,
        configurable: true
    });
    CoinMetadata.phantom = function (T) { return (0, reified_1.phantom)(CoinMetadata.reified(T)); };
    Object.defineProperty(CoinMetadata, "p", {
        get: function () { return CoinMetadata.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CoinMetadata, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("CoinMetadata", {
                id: structs_5.UID.bcs, decimals: bcs_1.bcs.u8(), name: structs_3.String.bcs, symbol: structs_1.String.bcs, description: structs_3.String.bcs, icon_url: structs_2.Option.bcs(structs_6.Url.bcs)
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    CoinMetadata.fromFields = function (typeArg, fields) { return CoinMetadata.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), decimals: (0, reified_1.decodeFromFields)("u8", fields.decimals), name: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.name), symbol: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.symbol), description: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.description), iconUrl: (0, reified_1.decodeFromFields)(structs_2.Option.reified(structs_6.Url.reified()), fields.icon_url) }); };
    CoinMetadata.fromFieldsWithTypes = function (typeArg, item) {
        if (!isCoinMetadata(item.type)) {
            throw new Error("not a CoinMetadata type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return CoinMetadata.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), decimals: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.decimals), name: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.name), symbol: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.symbol), description: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.description), iconUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(structs_6.Url.reified()), item.fields.icon_url) });
    };
    CoinMetadata.fromBcs = function (typeArg, data) { return CoinMetadata.fromFields(typeArg, CoinMetadata.bcs.parse(data)); };
    CoinMetadata.prototype.toJSONField = function () {
        return {
            id: this.id, decimals: this.decimals, name: this.name, symbol: this.symbol, description: this.description, iconUrl: (0, reified_1.fieldToJSON)("0x1::option::Option<0x2::url::Url>", this.iconUrl),
        };
    };
    CoinMetadata.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    CoinMetadata.fromJSONField = function (typeArg, field) { return CoinMetadata.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), decimals: (0, reified_1.decodeFromJSONField)("u8", field.decimals), name: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.name), symbol: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.symbol), description: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.description), iconUrl: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(structs_6.Url.reified()), field.iconUrl) }); };
    CoinMetadata.fromJSON = function (typeArg, json) {
        if (json.$typeName !== CoinMetadata.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(CoinMetadata.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return CoinMetadata.fromJSONField(typeArg, json);
    };
    CoinMetadata.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCoinMetadata(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a CoinMetadata object"));
    } return CoinMetadata.fromFieldsWithTypes(typeArg, content); };
    CoinMetadata.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching CoinMetadata object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCoinMetadata(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a CoinMetadata object"));
                        }
                        return [2 /*return*/, CoinMetadata.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    CoinMetadata.$typeName = "0x2::coin::CoinMetadata";
    CoinMetadata.$numTypeParams = 1;
    return CoinMetadata;
}());
exports.CoinMetadata = CoinMetadata;
/* ============================== CurrencyCreated =============================== */
function isCurrencyCreated(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::coin::CurrencyCreated<"); }
var CurrencyCreated = /** @class */ (function () {
    function CurrencyCreated(typeArgs, fields) {
        this.$typeName = CurrencyCreated.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([CurrencyCreated.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.decimals = fields.decimals;
    }
    CurrencyCreated.reified = function (T) {
        var _this = this;
        return { typeName: CurrencyCreated.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([CurrencyCreated.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return CurrencyCreated.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return CurrencyCreated.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return CurrencyCreated.fromBcs(T, data); }, bcs: CurrencyCreated.bcs, fromJSONField: function (field) { return CurrencyCreated.fromJSONField(T, field); }, fromJSON: function (json) { return CurrencyCreated.fromJSON(T, json); }, fromSuiParsedData: function (content) { return CurrencyCreated.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, CurrencyCreated.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new CurrencyCreated([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(CurrencyCreated, "r", {
        get: function () { return CurrencyCreated.reified; },
        enumerable: false,
        configurable: true
    });
    CurrencyCreated.phantom = function (T) { return (0, reified_1.phantom)(CurrencyCreated.reified(T)); };
    Object.defineProperty(CurrencyCreated, "p", {
        get: function () { return CurrencyCreated.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurrencyCreated, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("CurrencyCreated", {
                decimals: bcs_1.bcs.u8()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    CurrencyCreated.fromFields = function (typeArg, fields) { return CurrencyCreated.reified(typeArg).new({ decimals: (0, reified_1.decodeFromFields)("u8", fields.decimals) }); };
    CurrencyCreated.fromFieldsWithTypes = function (typeArg, item) {
        if (!isCurrencyCreated(item.type)) {
            throw new Error("not a CurrencyCreated type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return CurrencyCreated.reified(typeArg).new({ decimals: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.decimals) });
    };
    CurrencyCreated.fromBcs = function (typeArg, data) { return CurrencyCreated.fromFields(typeArg, CurrencyCreated.bcs.parse(data)); };
    CurrencyCreated.prototype.toJSONField = function () {
        return {
            decimals: this.decimals,
        };
    };
    CurrencyCreated.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    CurrencyCreated.fromJSONField = function (typeArg, field) { return CurrencyCreated.reified(typeArg).new({ decimals: (0, reified_1.decodeFromJSONField)("u8", field.decimals) }); };
    CurrencyCreated.fromJSON = function (typeArg, json) {
        if (json.$typeName !== CurrencyCreated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(CurrencyCreated.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return CurrencyCreated.fromJSONField(typeArg, json);
    };
    CurrencyCreated.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCurrencyCreated(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a CurrencyCreated object"));
    } return CurrencyCreated.fromFieldsWithTypes(typeArg, content); };
    CurrencyCreated.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching CurrencyCreated object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCurrencyCreated(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a CurrencyCreated object"));
                        }
                        return [2 /*return*/, CurrencyCreated.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    CurrencyCreated.$typeName = "0x2::coin::CurrencyCreated";
    CurrencyCreated.$numTypeParams = 1;
    return CurrencyCreated;
}());
exports.CurrencyCreated = CurrencyCreated;
/* ============================== DenyCap =============================== */
function isDenyCap(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::coin::DenyCap<"); }
var DenyCap = /** @class */ (function () {
    function DenyCap(typeArgs, fields) {
        this.$typeName = DenyCap.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DenyCap.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    DenyCap.reified = function (T) {
        var _this = this;
        return { typeName: DenyCap.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DenyCap.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return DenyCap.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return DenyCap.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return DenyCap.fromBcs(T, data); }, bcs: DenyCap.bcs, fromJSONField: function (field) { return DenyCap.fromJSONField(T, field); }, fromJSON: function (json) { return DenyCap.fromJSON(T, json); }, fromSuiParsedData: function (content) { return DenyCap.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DenyCap.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new DenyCap([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DenyCap, "r", {
        get: function () { return DenyCap.reified; },
        enumerable: false,
        configurable: true
    });
    DenyCap.phantom = function (T) { return (0, reified_1.phantom)(DenyCap.reified(T)); };
    Object.defineProperty(DenyCap, "p", {
        get: function () { return DenyCap.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DenyCap, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DenyCap", {
                id: structs_5.UID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DenyCap.fromFields = function (typeArg, fields) { return DenyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id) }); };
    DenyCap.fromFieldsWithTypes = function (typeArg, item) {
        if (!isDenyCap(item.type)) {
            throw new Error("not a DenyCap type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return DenyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id) });
    };
    DenyCap.fromBcs = function (typeArg, data) { return DenyCap.fromFields(typeArg, DenyCap.bcs.parse(data)); };
    DenyCap.prototype.toJSONField = function () {
        return {
            id: this.id,
        };
    };
    DenyCap.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DenyCap.fromJSONField = function (typeArg, field) { return DenyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id) }); };
    DenyCap.fromJSON = function (typeArg, json) {
        if (json.$typeName !== DenyCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(DenyCap.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return DenyCap.fromJSONField(typeArg, json);
    };
    DenyCap.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDenyCap(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DenyCap object"));
    } return DenyCap.fromFieldsWithTypes(typeArg, content); };
    DenyCap.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DenyCap object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDenyCap(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DenyCap object"));
                        }
                        return [2 /*return*/, DenyCap.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DenyCap.$typeName = "0x2::coin::DenyCap";
    DenyCap.$numTypeParams = 1;
    return DenyCap;
}());
exports.DenyCap = DenyCap;
/* ============================== RegulatedCoinMetadata =============================== */
function isRegulatedCoinMetadata(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::coin::RegulatedCoinMetadata<"); }
var RegulatedCoinMetadata = /** @class */ (function () {
    function RegulatedCoinMetadata(typeArgs, fields) {
        this.$typeName = RegulatedCoinMetadata.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RegulatedCoinMetadata.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.coinMetadataObject = fields.coinMetadataObject;
        ;
        this.denyCapObject = fields.denyCapObject;
    }
    RegulatedCoinMetadata.reified = function (T) {
        var _this = this;
        return { typeName: RegulatedCoinMetadata.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RegulatedCoinMetadata.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return RegulatedCoinMetadata.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return RegulatedCoinMetadata.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return RegulatedCoinMetadata.fromBcs(T, data); }, bcs: RegulatedCoinMetadata.bcs, fromJSONField: function (field) { return RegulatedCoinMetadata.fromJSONField(T, field); }, fromJSON: function (json) { return RegulatedCoinMetadata.fromJSON(T, json); }, fromSuiParsedData: function (content) { return RegulatedCoinMetadata.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RegulatedCoinMetadata.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new RegulatedCoinMetadata([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RegulatedCoinMetadata, "r", {
        get: function () { return RegulatedCoinMetadata.reified; },
        enumerable: false,
        configurable: true
    });
    RegulatedCoinMetadata.phantom = function (T) { return (0, reified_1.phantom)(RegulatedCoinMetadata.reified(T)); };
    Object.defineProperty(RegulatedCoinMetadata, "p", {
        get: function () { return RegulatedCoinMetadata.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegulatedCoinMetadata, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RegulatedCoinMetadata", {
                id: structs_5.UID.bcs, coin_metadata_object: structs_5.ID.bcs, deny_cap_object: structs_5.ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RegulatedCoinMetadata.fromFields = function (typeArg, fields) { return RegulatedCoinMetadata.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), coinMetadataObject: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.coin_metadata_object), denyCapObject: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.deny_cap_object) }); };
    RegulatedCoinMetadata.fromFieldsWithTypes = function (typeArg, item) {
        if (!isRegulatedCoinMetadata(item.type)) {
            throw new Error("not a RegulatedCoinMetadata type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return RegulatedCoinMetadata.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), coinMetadataObject: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.coin_metadata_object), denyCapObject: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.deny_cap_object) });
    };
    RegulatedCoinMetadata.fromBcs = function (typeArg, data) { return RegulatedCoinMetadata.fromFields(typeArg, RegulatedCoinMetadata.bcs.parse(data)); };
    RegulatedCoinMetadata.prototype.toJSONField = function () {
        return {
            id: this.id, coinMetadataObject: this.coinMetadataObject, denyCapObject: this.denyCapObject,
        };
    };
    RegulatedCoinMetadata.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RegulatedCoinMetadata.fromJSONField = function (typeArg, field) { return RegulatedCoinMetadata.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), coinMetadataObject: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.coinMetadataObject), denyCapObject: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.denyCapObject) }); };
    RegulatedCoinMetadata.fromJSON = function (typeArg, json) {
        if (json.$typeName !== RegulatedCoinMetadata.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(RegulatedCoinMetadata.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return RegulatedCoinMetadata.fromJSONField(typeArg, json);
    };
    RegulatedCoinMetadata.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRegulatedCoinMetadata(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RegulatedCoinMetadata object"));
    } return RegulatedCoinMetadata.fromFieldsWithTypes(typeArg, content); };
    RegulatedCoinMetadata.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RegulatedCoinMetadata object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRegulatedCoinMetadata(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RegulatedCoinMetadata object"));
                        }
                        return [2 /*return*/, RegulatedCoinMetadata.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RegulatedCoinMetadata.$typeName = "0x2::coin::RegulatedCoinMetadata";
    RegulatedCoinMetadata.$numTypeParams = 1;
    return RegulatedCoinMetadata;
}());
exports.RegulatedCoinMetadata = RegulatedCoinMetadata;
/* ============================== TreasuryCap =============================== */
function isTreasuryCap(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::coin::TreasuryCap<"); }
var TreasuryCap = /** @class */ (function () {
    function TreasuryCap(typeArgs, fields) {
        this.$typeName = TreasuryCap.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TreasuryCap.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.totalSupply = fields.totalSupply;
    }
    TreasuryCap.reified = function (T) {
        var _this = this;
        return { typeName: TreasuryCap.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TreasuryCap.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return TreasuryCap.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return TreasuryCap.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return TreasuryCap.fromBcs(T, data); }, bcs: TreasuryCap.bcs, fromJSONField: function (field) { return TreasuryCap.fromJSONField(T, field); }, fromJSON: function (json) { return TreasuryCap.fromJSON(T, json); }, fromSuiParsedData: function (content) { return TreasuryCap.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TreasuryCap.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new TreasuryCap([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TreasuryCap, "r", {
        get: function () { return TreasuryCap.reified; },
        enumerable: false,
        configurable: true
    });
    TreasuryCap.phantom = function (T) { return (0, reified_1.phantom)(TreasuryCap.reified(T)); };
    Object.defineProperty(TreasuryCap, "p", {
        get: function () { return TreasuryCap.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreasuryCap, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TreasuryCap", {
                id: structs_5.UID.bcs, total_supply: structs_4.Supply.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TreasuryCap.fromFields = function (typeArg, fields) { return TreasuryCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), totalSupply: (0, reified_1.decodeFromFields)(structs_4.Supply.reified(typeArg), fields.total_supply) }); };
    TreasuryCap.fromFieldsWithTypes = function (typeArg, item) {
        if (!isTreasuryCap(item.type)) {
            throw new Error("not a TreasuryCap type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TreasuryCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), totalSupply: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Supply.reified(typeArg), item.fields.total_supply) });
    };
    TreasuryCap.fromBcs = function (typeArg, data) { return TreasuryCap.fromFields(typeArg, TreasuryCap.bcs.parse(data)); };
    TreasuryCap.prototype.toJSONField = function () {
        return {
            id: this.id, totalSupply: this.totalSupply.toJSONField(),
        };
    };
    TreasuryCap.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TreasuryCap.fromJSONField = function (typeArg, field) { return TreasuryCap.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), totalSupply: (0, reified_1.decodeFromJSONField)(structs_4.Supply.reified(typeArg), field.totalSupply) }); };
    TreasuryCap.fromJSON = function (typeArg, json) {
        if (json.$typeName !== TreasuryCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TreasuryCap.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TreasuryCap.fromJSONField(typeArg, json);
    };
    TreasuryCap.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTreasuryCap(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TreasuryCap object"));
    } return TreasuryCap.fromFieldsWithTypes(typeArg, content); };
    TreasuryCap.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TreasuryCap object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTreasuryCap(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TreasuryCap object"));
                        }
                        return [2 /*return*/, TreasuryCap.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TreasuryCap.$typeName = "0x2::coin::TreasuryCap";
    TreasuryCap.$numTypeParams = 1;
    return TreasuryCap;
}());
exports.TreasuryCap = TreasuryCap;
