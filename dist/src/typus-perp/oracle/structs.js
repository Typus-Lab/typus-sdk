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
exports.PythPriceInfoObject = exports.PythPrice = void 0;
exports.isPythPrice = isPythPrice;
exports.isPythPriceInfoObject = isPythPriceInfoObject;
var structs_1 = require("../../_dependencies/source/0x2/object/structs");
var reified_1 = require("../../_framework/reified");
var util_1 = require("../../_framework/util");
var bcs_1 = require("@mysten/bcs");
/* ============================== PythPrice =============================== */
function isPythPrice(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::oracle::PythPrice";
}
var PythPrice = /** @class */ (function () {
    function PythPrice(typeArgs, fields) {
        this.$typeName = PythPrice.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([PythPrice.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.price = fields.price;
        this.conf = fields.conf;
        this.timestamp = fields.timestamp;
        this.decimal = fields.decimal;
    }
    PythPrice.reified = function () {
        var _this = this;
        return {
            typeName: PythPrice.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([PythPrice.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return PythPrice.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return PythPrice.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return PythPrice.fromBcs(data); },
            bcs: PythPrice.bcs,
            fromJSONField: function (field) { return PythPrice.fromJSONField(field); },
            fromJSON: function (json) { return PythPrice.fromJSON(json); },
            fromSuiParsedData: function (content) { return PythPrice.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, PythPrice.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new PythPrice([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(PythPrice, "r", {
        get: function () {
            return PythPrice.reified();
        },
        enumerable: false,
        configurable: true
    });
    PythPrice.phantom = function () {
        return (0, reified_1.phantom)(PythPrice.reified());
    };
    Object.defineProperty(PythPrice, "p", {
        get: function () {
            return PythPrice.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PythPrice, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("PythPrice", {
                price: bcs_1.bcs.u64(),
                conf: bcs_1.bcs.u64(),
                timestamp: bcs_1.bcs.u64(),
                decimal: bcs_1.bcs.u64(),
            });
        },
        enumerable: false,
        configurable: true
    });
    PythPrice.fromFields = function (fields) {
        return PythPrice.reified().new({
            price: (0, reified_1.decodeFromFields)("u64", fields.price),
            conf: (0, reified_1.decodeFromFields)("u64", fields.conf),
            timestamp: (0, reified_1.decodeFromFields)("u64", fields.timestamp),
            decimal: (0, reified_1.decodeFromFields)("u64", fields.decimal),
        });
    };
    PythPrice.fromFieldsWithTypes = function (item) {
        if (!isPythPrice(item.type)) {
            throw new Error("not a PythPrice type");
        }
        return PythPrice.reified().new({
            price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price),
            conf: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.conf),
            timestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.timestamp),
            decimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.decimal),
        });
    };
    PythPrice.fromBcs = function (data) {
        return PythPrice.fromFields(PythPrice.bcs.parse(data));
    };
    PythPrice.prototype.toJSONField = function () {
        return {
            price: this.price.toString(),
            conf: this.conf.toString(),
            timestamp: this.timestamp.toString(),
            decimal: this.decimal.toString(),
        };
    };
    PythPrice.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    PythPrice.fromJSONField = function (field) {
        return PythPrice.reified().new({
            price: (0, reified_1.decodeFromJSONField)("u64", field.price),
            conf: (0, reified_1.decodeFromJSONField)("u64", field.conf),
            timestamp: (0, reified_1.decodeFromJSONField)("u64", field.timestamp),
            decimal: (0, reified_1.decodeFromJSONField)("u64", field.decimal),
        });
    };
    PythPrice.fromJSON = function (json) {
        if (json.$typeName !== PythPrice.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return PythPrice.fromJSONField(json);
    };
    PythPrice.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPythPrice(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a PythPrice object"));
        }
        return PythPrice.fromFieldsWithTypes(content);
    };
    PythPrice.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching PythPrice object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPythPrice(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a PythPrice object"));
                        }
                        return [2 /*return*/, PythPrice.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    PythPrice.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::oracle::PythPrice";
    PythPrice.$numTypeParams = 0;
    return PythPrice;
}());
exports.PythPrice = PythPrice;
/* ============================== PythPriceInfoObject =============================== */
function isPythPriceInfoObject(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::oracle::PythPriceInfoObject";
}
var PythPriceInfoObject = /** @class */ (function () {
    function PythPriceInfoObject(typeArgs, fields) {
        this.$typeName = PythPriceInfoObject.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([PythPriceInfoObject.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    PythPriceInfoObject.reified = function () {
        var _this = this;
        return {
            typeName: PythPriceInfoObject.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([PythPriceInfoObject.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return PythPriceInfoObject.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return PythPriceInfoObject.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return PythPriceInfoObject.fromBcs(data); },
            bcs: PythPriceInfoObject.bcs,
            fromJSONField: function (field) { return PythPriceInfoObject.fromJSONField(field); },
            fromJSON: function (json) { return PythPriceInfoObject.fromJSON(json); },
            fromSuiParsedData: function (content) { return PythPriceInfoObject.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, PythPriceInfoObject.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new PythPriceInfoObject([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(PythPriceInfoObject, "r", {
        get: function () {
            return PythPriceInfoObject.reified();
        },
        enumerable: false,
        configurable: true
    });
    PythPriceInfoObject.phantom = function () {
        return (0, reified_1.phantom)(PythPriceInfoObject.reified());
    };
    Object.defineProperty(PythPriceInfoObject, "p", {
        get: function () {
            return PythPriceInfoObject.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PythPriceInfoObject, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("PythPriceInfoObject", {
                id: structs_1.ID.bcs,
            });
        },
        enumerable: false,
        configurable: true
    });
    PythPriceInfoObject.fromFields = function (fields) {
        return PythPriceInfoObject.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.ID.reified(), fields.id) });
    };
    PythPriceInfoObject.fromFieldsWithTypes = function (item) {
        if (!isPythPriceInfoObject(item.type)) {
            throw new Error("not a PythPriceInfoObject type");
        }
        return PythPriceInfoObject.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.ID.reified(), item.fields.id) });
    };
    PythPriceInfoObject.fromBcs = function (data) {
        return PythPriceInfoObject.fromFields(PythPriceInfoObject.bcs.parse(data));
    };
    PythPriceInfoObject.prototype.toJSONField = function () {
        return {
            id: this.id,
        };
    };
    PythPriceInfoObject.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    PythPriceInfoObject.fromJSONField = function (field) {
        return PythPriceInfoObject.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.ID.reified(), field.id) });
    };
    PythPriceInfoObject.fromJSON = function (json) {
        if (json.$typeName !== PythPriceInfoObject.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return PythPriceInfoObject.fromJSONField(json);
    };
    PythPriceInfoObject.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPythPriceInfoObject(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a PythPriceInfoObject object"));
        }
        return PythPriceInfoObject.fromFieldsWithTypes(content);
    };
    PythPriceInfoObject.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching PythPriceInfoObject object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPythPriceInfoObject(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a PythPriceInfoObject object"));
                        }
                        return [2 /*return*/, PythPriceInfoObject.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    PythPriceInfoObject.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::oracle::PythPriceInfoObject";
    PythPriceInfoObject.$numTypeParams = 0;
    return PythPriceInfoObject;
}());
exports.PythPriceInfoObject = PythPriceInfoObject;
