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
exports.PriceInfoObject = exports.PriceInfo = void 0;
exports.isPriceInfo = isPriceInfo;
exports.isPriceInfoObject = isPriceInfoObject;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x2/object/structs");
var structs_2 = require("../price-feed/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== PriceInfo =============================== */
function isPriceInfo(type) { type = (0, util_1.compressSuiType)(type); return type === "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_info::PriceInfo"; }
var PriceInfo = /** @class */ (function () {
    function PriceInfo(typeArgs, fields) {
        this.$typeName = PriceInfo.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([PriceInfo.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.attestationTime = fields.attestationTime;
        ;
        this.arrivalTime = fields.arrivalTime;
        ;
        this.priceFeed = fields.priceFeed;
    }
    PriceInfo.reified = function () {
        var _this = this;
        return { typeName: PriceInfo.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([PriceInfo.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return PriceInfo.fromFields(fields); }, fromFieldsWithTypes: function (item) { return PriceInfo.fromFieldsWithTypes(item); }, fromBcs: function (data) { return PriceInfo.fromBcs(data); }, bcs: PriceInfo.bcs, fromJSONField: function (field) { return PriceInfo.fromJSONField(field); }, fromJSON: function (json) { return PriceInfo.fromJSON(json); }, fromSuiParsedData: function (content) { return PriceInfo.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, PriceInfo.fetch(client, id)];
            }); }); }, new: function (fields) { return new PriceInfo([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(PriceInfo, "r", {
        get: function () { return PriceInfo.reified(); },
        enumerable: false,
        configurable: true
    });
    PriceInfo.phantom = function () { return (0, reified_1.phantom)(PriceInfo.reified()); };
    Object.defineProperty(PriceInfo, "p", {
        get: function () { return PriceInfo.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PriceInfo, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("PriceInfo", {
                attestation_time: bcs_1.bcs.u64(), arrival_time: bcs_1.bcs.u64(), price_feed: structs_2.PriceFeed.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    PriceInfo.fromFields = function (fields) { return PriceInfo.reified().new({ attestationTime: (0, reified_1.decodeFromFields)("u64", fields.attestation_time), arrivalTime: (0, reified_1.decodeFromFields)("u64", fields.arrival_time), priceFeed: (0, reified_1.decodeFromFields)(structs_2.PriceFeed.reified(), fields.price_feed) }); };
    PriceInfo.fromFieldsWithTypes = function (item) {
        if (!isPriceInfo(item.type)) {
            throw new Error("not a PriceInfo type");
        }
        return PriceInfo.reified().new({ attestationTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.attestation_time), arrivalTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.arrival_time), priceFeed: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.PriceFeed.reified(), item.fields.price_feed) });
    };
    PriceInfo.fromBcs = function (data) { return PriceInfo.fromFields(PriceInfo.bcs.parse(data)); };
    PriceInfo.prototype.toJSONField = function () {
        return {
            attestationTime: this.attestationTime.toString(), arrivalTime: this.arrivalTime.toString(), priceFeed: this.priceFeed.toJSONField(),
        };
    };
    PriceInfo.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    PriceInfo.fromJSONField = function (field) { return PriceInfo.reified().new({ attestationTime: (0, reified_1.decodeFromJSONField)("u64", field.attestationTime), arrivalTime: (0, reified_1.decodeFromJSONField)("u64", field.arrivalTime), priceFeed: (0, reified_1.decodeFromJSONField)(structs_2.PriceFeed.reified(), field.priceFeed) }); };
    PriceInfo.fromJSON = function (json) {
        if (json.$typeName !== PriceInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PriceInfo.fromJSONField(json);
    };
    PriceInfo.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPriceInfo(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a PriceInfo object"));
    } return PriceInfo.fromFieldsWithTypes(content); };
    PriceInfo.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching PriceInfo object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPriceInfo(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a PriceInfo object"));
                        }
                        return [2 /*return*/, PriceInfo.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    PriceInfo.$typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_info::PriceInfo";
    PriceInfo.$numTypeParams = 0;
    return PriceInfo;
}());
exports.PriceInfo = PriceInfo;
/* ============================== PriceInfoObject =============================== */
function isPriceInfoObject(type) { type = (0, util_1.compressSuiType)(type); return type === "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_info::PriceInfoObject"; }
var PriceInfoObject = /** @class */ (function () {
    function PriceInfoObject(typeArgs, fields) {
        this.$typeName = PriceInfoObject.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([PriceInfoObject.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.priceInfo = fields.priceInfo;
    }
    PriceInfoObject.reified = function () {
        var _this = this;
        return { typeName: PriceInfoObject.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([PriceInfoObject.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return PriceInfoObject.fromFields(fields); }, fromFieldsWithTypes: function (item) { return PriceInfoObject.fromFieldsWithTypes(item); }, fromBcs: function (data) { return PriceInfoObject.fromBcs(data); }, bcs: PriceInfoObject.bcs, fromJSONField: function (field) { return PriceInfoObject.fromJSONField(field); }, fromJSON: function (json) { return PriceInfoObject.fromJSON(json); }, fromSuiParsedData: function (content) { return PriceInfoObject.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, PriceInfoObject.fetch(client, id)];
            }); }); }, new: function (fields) { return new PriceInfoObject([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(PriceInfoObject, "r", {
        get: function () { return PriceInfoObject.reified(); },
        enumerable: false,
        configurable: true
    });
    PriceInfoObject.phantom = function () { return (0, reified_1.phantom)(PriceInfoObject.reified()); };
    Object.defineProperty(PriceInfoObject, "p", {
        get: function () { return PriceInfoObject.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PriceInfoObject, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("PriceInfoObject", {
                id: structs_1.UID.bcs, price_info: PriceInfo.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    PriceInfoObject.fromFields = function (fields) { return PriceInfoObject.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), priceInfo: (0, reified_1.decodeFromFields)(PriceInfo.reified(), fields.price_info) }); };
    PriceInfoObject.fromFieldsWithTypes = function (item) {
        if (!isPriceInfoObject(item.type)) {
            throw new Error("not a PriceInfoObject type");
        }
        return PriceInfoObject.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), priceInfo: (0, reified_1.decodeFromFieldsWithTypes)(PriceInfo.reified(), item.fields.price_info) });
    };
    PriceInfoObject.fromBcs = function (data) { return PriceInfoObject.fromFields(PriceInfoObject.bcs.parse(data)); };
    PriceInfoObject.prototype.toJSONField = function () {
        return {
            id: this.id, priceInfo: this.priceInfo.toJSONField(),
        };
    };
    PriceInfoObject.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    PriceInfoObject.fromJSONField = function (field) { return PriceInfoObject.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), priceInfo: (0, reified_1.decodeFromJSONField)(PriceInfo.reified(), field.priceInfo) }); };
    PriceInfoObject.fromJSON = function (json) {
        if (json.$typeName !== PriceInfoObject.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PriceInfoObject.fromJSONField(json);
    };
    PriceInfoObject.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPriceInfoObject(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a PriceInfoObject object"));
    } return PriceInfoObject.fromFieldsWithTypes(content); };
    PriceInfoObject.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching PriceInfoObject object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPriceInfoObject(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a PriceInfoObject object"));
                        }
                        return [2 /*return*/, PriceInfoObject.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    PriceInfoObject.$typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_info::PriceInfoObject";
    PriceInfoObject.$numTypeParams = 0;
    return PriceInfoObject;
}());
exports.PriceInfoObject = PriceInfoObject;
