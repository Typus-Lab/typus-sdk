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
exports.PriceEvent = exports.Oracle = exports.ManagerCap = void 0;
exports.isManagerCap = isManagerCap;
exports.isOracle = isOracle;
exports.isPriceEvent = isPriceEvent;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/ascii/structs");
var structs_2 = require("../../0x1/option/structs");
var structs_3 = require("../../0x1/type-name/structs");
var structs_4 = require("../../0x2/object/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== ManagerCap =============================== */
function isManagerCap(type) { type = (0, util_1.compressSuiType)(type); return type === "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::ManagerCap"; }
var ManagerCap = /** @class */ (function () {
    function ManagerCap(typeArgs, fields) {
        this.$typeName = ManagerCap.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ManagerCap.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    ManagerCap.reified = function () {
        var _this = this;
        return { typeName: ManagerCap.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ManagerCap.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ManagerCap.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ManagerCap.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ManagerCap.fromBcs(data); }, bcs: ManagerCap.bcs, fromJSONField: function (field) { return ManagerCap.fromJSONField(field); }, fromJSON: function (json) { return ManagerCap.fromJSON(json); }, fromSuiParsedData: function (content) { return ManagerCap.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ManagerCap.fetch(client, id)];
            }); }); }, new: function (fields) { return new ManagerCap([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ManagerCap, "r", {
        get: function () { return ManagerCap.reified(); },
        enumerable: false,
        configurable: true
    });
    ManagerCap.phantom = function () { return (0, reified_1.phantom)(ManagerCap.reified()); };
    Object.defineProperty(ManagerCap, "p", {
        get: function () { return ManagerCap.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagerCap, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ManagerCap", {
                id: structs_4.UID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ManagerCap.fromFields = function (fields) { return ManagerCap.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id) }); };
    ManagerCap.fromFieldsWithTypes = function (item) {
        if (!isManagerCap(item.type)) {
            throw new Error("not a ManagerCap type");
        }
        return ManagerCap.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id) });
    };
    ManagerCap.fromBcs = function (data) { return ManagerCap.fromFields(ManagerCap.bcs.parse(data)); };
    ManagerCap.prototype.toJSONField = function () {
        return {
            id: this.id,
        };
    };
    ManagerCap.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ManagerCap.fromJSONField = function (field) { return ManagerCap.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id) }); };
    ManagerCap.fromJSON = function (json) {
        if (json.$typeName !== ManagerCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ManagerCap.fromJSONField(json);
    };
    ManagerCap.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isManagerCap(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ManagerCap object"));
    } return ManagerCap.fromFieldsWithTypes(content); };
    ManagerCap.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ManagerCap object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isManagerCap(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ManagerCap object"));
                        }
                        return [2 /*return*/, ManagerCap.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ManagerCap.$typeName = "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::ManagerCap";
    ManagerCap.$numTypeParams = 0;
    return ManagerCap;
}());
exports.ManagerCap = ManagerCap;
/* ============================== Oracle =============================== */
function isOracle(type) { type = (0, util_1.compressSuiType)(type); return type === "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::Oracle"; }
var Oracle = /** @class */ (function () {
    function Oracle(typeArgs, fields) {
        this.$typeName = Oracle.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Oracle.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.baseToken = fields.baseToken;
        ;
        this.quoteToken = fields.quoteToken;
        ;
        this.baseTokenType = fields.baseTokenType;
        ;
        this.quoteTokenType = fields.quoteTokenType;
        ;
        this.decimal = fields.decimal;
        ;
        this.price = fields.price;
        ;
        this.twapPrice = fields.twapPrice;
        ;
        this.tsMs = fields.tsMs;
        ;
        this.epoch = fields.epoch;
        ;
        this.timeInterval = fields.timeInterval;
        ;
        this.switchboard = fields.switchboard;
        ;
        this.pyth = fields.pyth;
    }
    Oracle.reified = function () {
        var _this = this;
        return { typeName: Oracle.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Oracle.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Oracle.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Oracle.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Oracle.fromBcs(data); }, bcs: Oracle.bcs, fromJSONField: function (field) { return Oracle.fromJSONField(field); }, fromJSON: function (json) { return Oracle.fromJSON(json); }, fromSuiParsedData: function (content) { return Oracle.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Oracle.fetch(client, id)];
            }); }); }, new: function (fields) { return new Oracle([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Oracle, "r", {
        get: function () { return Oracle.reified(); },
        enumerable: false,
        configurable: true
    });
    Oracle.phantom = function () { return (0, reified_1.phantom)(Oracle.reified()); };
    Object.defineProperty(Oracle, "p", {
        get: function () { return Oracle.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Oracle, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Oracle", {
                id: structs_4.UID.bcs, base_token: structs_1.String.bcs, quote_token: structs_1.String.bcs, base_token_type: structs_3.TypeName.bcs, quote_token_type: structs_3.TypeName.bcs, decimal: bcs_1.bcs.u64(), price: bcs_1.bcs.u64(), twap_price: bcs_1.bcs.u64(), ts_ms: bcs_1.bcs.u64(), epoch: bcs_1.bcs.u64(), time_interval: bcs_1.bcs.u64(), switchboard: structs_2.Option.bcs(structs_4.ID.bcs), pyth: structs_2.Option.bcs(structs_4.ID.bcs)
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Oracle.fromFields = function (fields) { return Oracle.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id), baseToken: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.base_token), quoteToken: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.quote_token), baseTokenType: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.base_token_type), quoteTokenType: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.quote_token_type), decimal: (0, reified_1.decodeFromFields)("u64", fields.decimal), price: (0, reified_1.decodeFromFields)("u64", fields.price), twapPrice: (0, reified_1.decodeFromFields)("u64", fields.twap_price), tsMs: (0, reified_1.decodeFromFields)("u64", fields.ts_ms), epoch: (0, reified_1.decodeFromFields)("u64", fields.epoch), timeInterval: (0, reified_1.decodeFromFields)("u64", fields.time_interval), switchboard: (0, reified_1.decodeFromFields)(structs_2.Option.reified(structs_4.ID.reified()), fields.switchboard), pyth: (0, reified_1.decodeFromFields)(structs_2.Option.reified(structs_4.ID.reified()), fields.pyth) }); };
    Oracle.fromFieldsWithTypes = function (item) {
        if (!isOracle(item.type)) {
            throw new Error("not a Oracle type");
        }
        return Oracle.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id), baseToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.base_token), quoteToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.quote_token), baseTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.base_token_type), quoteTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.quote_token_type), decimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.decimal), price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price), twapPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.twap_price), tsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.ts_ms), epoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch), timeInterval: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.time_interval), switchboard: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(structs_4.ID.reified()), item.fields.switchboard), pyth: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(structs_4.ID.reified()), item.fields.pyth) });
    };
    Oracle.fromBcs = function (data) { return Oracle.fromFields(Oracle.bcs.parse(data)); };
    Oracle.prototype.toJSONField = function () {
        return {
            id: this.id, baseToken: this.baseToken, quoteToken: this.quoteToken, baseTokenType: this.baseTokenType.toJSONField(), quoteTokenType: this.quoteTokenType.toJSONField(), decimal: this.decimal.toString(), price: this.price.toString(), twapPrice: this.twapPrice.toString(), tsMs: this.tsMs.toString(), epoch: this.epoch.toString(), timeInterval: this.timeInterval.toString(), switchboard: (0, reified_1.fieldToJSON)("0x1::option::Option<0x2::object::ID>", this.switchboard), pyth: (0, reified_1.fieldToJSON)("0x1::option::Option<0x2::object::ID>", this.pyth),
        };
    };
    Oracle.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Oracle.fromJSONField = function (field) { return Oracle.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id), baseToken: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.baseToken), quoteToken: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.quoteToken), baseTokenType: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.baseTokenType), quoteTokenType: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.quoteTokenType), decimal: (0, reified_1.decodeFromJSONField)("u64", field.decimal), price: (0, reified_1.decodeFromJSONField)("u64", field.price), twapPrice: (0, reified_1.decodeFromJSONField)("u64", field.twapPrice), tsMs: (0, reified_1.decodeFromJSONField)("u64", field.tsMs), epoch: (0, reified_1.decodeFromJSONField)("u64", field.epoch), timeInterval: (0, reified_1.decodeFromJSONField)("u64", field.timeInterval), switchboard: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(structs_4.ID.reified()), field.switchboard), pyth: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(structs_4.ID.reified()), field.pyth) }); };
    Oracle.fromJSON = function (json) {
        if (json.$typeName !== Oracle.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Oracle.fromJSONField(json);
    };
    Oracle.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isOracle(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Oracle object"));
    } return Oracle.fromFieldsWithTypes(content); };
    Oracle.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Oracle object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isOracle(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Oracle object"));
                        }
                        return [2 /*return*/, Oracle.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Oracle.$typeName = "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::Oracle";
    Oracle.$numTypeParams = 0;
    return Oracle;
}());
exports.Oracle = Oracle;
/* ============================== PriceEvent =============================== */
function isPriceEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::PriceEvent"; }
var PriceEvent = /** @class */ (function () {
    function PriceEvent(typeArgs, fields) {
        this.$typeName = PriceEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([PriceEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.price = fields.price;
        ;
        this.tsMs = fields.tsMs;
    }
    PriceEvent.reified = function () {
        var _this = this;
        return { typeName: PriceEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([PriceEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return PriceEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return PriceEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return PriceEvent.fromBcs(data); }, bcs: PriceEvent.bcs, fromJSONField: function (field) { return PriceEvent.fromJSONField(field); }, fromJSON: function (json) { return PriceEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return PriceEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, PriceEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new PriceEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(PriceEvent, "r", {
        get: function () { return PriceEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    PriceEvent.phantom = function () { return (0, reified_1.phantom)(PriceEvent.reified()); };
    Object.defineProperty(PriceEvent, "p", {
        get: function () { return PriceEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PriceEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("PriceEvent", {
                id: structs_4.ID.bcs, price: bcs_1.bcs.u64(), ts_ms: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    PriceEvent.fromFields = function (fields) { return PriceEvent.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.ID.reified(), fields.id), price: (0, reified_1.decodeFromFields)("u64", fields.price), tsMs: (0, reified_1.decodeFromFields)("u64", fields.ts_ms) }); };
    PriceEvent.fromFieldsWithTypes = function (item) {
        if (!isPriceEvent(item.type)) {
            throw new Error("not a PriceEvent type");
        }
        return PriceEvent.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.ID.reified(), item.fields.id), price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price), tsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.ts_ms) });
    };
    PriceEvent.fromBcs = function (data) { return PriceEvent.fromFields(PriceEvent.bcs.parse(data)); };
    PriceEvent.prototype.toJSONField = function () {
        return {
            id: this.id, price: this.price.toString(), tsMs: this.tsMs.toString(),
        };
    };
    PriceEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    PriceEvent.fromJSONField = function (field) { return PriceEvent.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.ID.reified(), field.id), price: (0, reified_1.decodeFromJSONField)("u64", field.price), tsMs: (0, reified_1.decodeFromJSONField)("u64", field.tsMs) }); };
    PriceEvent.fromJSON = function (json) {
        if (json.$typeName !== PriceEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PriceEvent.fromJSONField(json);
    };
    PriceEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPriceEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a PriceEvent object"));
    } return PriceEvent.fromFieldsWithTypes(content); };
    PriceEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching PriceEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPriceEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a PriceEvent object"));
                        }
                        return [2 /*return*/, PriceEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    PriceEvent.$typeName = "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::oracle::PriceEvent";
    PriceEvent.$numTypeParams = 0;
    return PriceEvent;
}());
exports.PriceEvent = PriceEvent;
