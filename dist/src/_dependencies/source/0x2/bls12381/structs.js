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
exports.Scalar = exports.GT = exports.G2 = exports.G1 = void 0;
exports.isG1 = isG1;
exports.isG2 = isG2;
exports.isGT = isGT;
exports.isScalar = isScalar;
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var bcs_1 = require("@mysten/bcs");
/* ============================== G1 =============================== */
function isG1(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::bls12381::G1"; }
var G1 = /** @class */ (function () {
    function G1(typeArgs, fields) {
        this.$typeName = G1.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([G1.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    G1.reified = function () {
        var _this = this;
        return { typeName: G1.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([G1.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return G1.fromFields(fields); }, fromFieldsWithTypes: function (item) { return G1.fromFieldsWithTypes(item); }, fromBcs: function (data) { return G1.fromBcs(data); }, bcs: G1.bcs, fromJSONField: function (field) { return G1.fromJSONField(field); }, fromJSON: function (json) { return G1.fromJSON(json); }, fromSuiParsedData: function (content) { return G1.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, G1.fetch(client, id)];
            }); }); }, new: function (fields) { return new G1([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(G1, "r", {
        get: function () { return G1.reified(); },
        enumerable: false,
        configurable: true
    });
    G1.phantom = function () { return (0, reified_1.phantom)(G1.reified()); };
    Object.defineProperty(G1, "p", {
        get: function () { return G1.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(G1, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("G1", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    G1.fromFields = function (fields) { return G1.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    G1.fromFieldsWithTypes = function (item) {
        if (!isG1(item.type)) {
            throw new Error("not a G1 type");
        }
        return G1.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    G1.fromBcs = function (data) { return G1.fromFields(G1.bcs.parse(data)); };
    G1.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    G1.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    G1.fromJSONField = function (field) { return G1.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    G1.fromJSON = function (json) {
        if (json.$typeName !== G1.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return G1.fromJSONField(json);
    };
    G1.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isG1(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a G1 object"));
    } return G1.fromFieldsWithTypes(content); };
    G1.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching G1 object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isG1(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a G1 object"));
                        }
                        return [2 /*return*/, G1.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    G1.$typeName = "0x2::bls12381::G1";
    G1.$numTypeParams = 0;
    return G1;
}());
exports.G1 = G1;
/* ============================== G2 =============================== */
function isG2(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::bls12381::G2"; }
var G2 = /** @class */ (function () {
    function G2(typeArgs, fields) {
        this.$typeName = G2.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([G2.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    G2.reified = function () {
        var _this = this;
        return { typeName: G2.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([G2.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return G2.fromFields(fields); }, fromFieldsWithTypes: function (item) { return G2.fromFieldsWithTypes(item); }, fromBcs: function (data) { return G2.fromBcs(data); }, bcs: G2.bcs, fromJSONField: function (field) { return G2.fromJSONField(field); }, fromJSON: function (json) { return G2.fromJSON(json); }, fromSuiParsedData: function (content) { return G2.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, G2.fetch(client, id)];
            }); }); }, new: function (fields) { return new G2([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(G2, "r", {
        get: function () { return G2.reified(); },
        enumerable: false,
        configurable: true
    });
    G2.phantom = function () { return (0, reified_1.phantom)(G2.reified()); };
    Object.defineProperty(G2, "p", {
        get: function () { return G2.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(G2, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("G2", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    G2.fromFields = function (fields) { return G2.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    G2.fromFieldsWithTypes = function (item) {
        if (!isG2(item.type)) {
            throw new Error("not a G2 type");
        }
        return G2.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    G2.fromBcs = function (data) { return G2.fromFields(G2.bcs.parse(data)); };
    G2.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    G2.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    G2.fromJSONField = function (field) { return G2.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    G2.fromJSON = function (json) {
        if (json.$typeName !== G2.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return G2.fromJSONField(json);
    };
    G2.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isG2(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a G2 object"));
    } return G2.fromFieldsWithTypes(content); };
    G2.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching G2 object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isG2(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a G2 object"));
                        }
                        return [2 /*return*/, G2.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    G2.$typeName = "0x2::bls12381::G2";
    G2.$numTypeParams = 0;
    return G2;
}());
exports.G2 = G2;
/* ============================== GT =============================== */
function isGT(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::bls12381::GT"; }
var GT = /** @class */ (function () {
    function GT(typeArgs, fields) {
        this.$typeName = GT.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([GT.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    GT.reified = function () {
        var _this = this;
        return { typeName: GT.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([GT.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return GT.fromFields(fields); }, fromFieldsWithTypes: function (item) { return GT.fromFieldsWithTypes(item); }, fromBcs: function (data) { return GT.fromBcs(data); }, bcs: GT.bcs, fromJSONField: function (field) { return GT.fromJSONField(field); }, fromJSON: function (json) { return GT.fromJSON(json); }, fromSuiParsedData: function (content) { return GT.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, GT.fetch(client, id)];
            }); }); }, new: function (fields) { return new GT([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(GT, "r", {
        get: function () { return GT.reified(); },
        enumerable: false,
        configurable: true
    });
    GT.phantom = function () { return (0, reified_1.phantom)(GT.reified()); };
    Object.defineProperty(GT, "p", {
        get: function () { return GT.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GT, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("GT", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    GT.fromFields = function (fields) { return GT.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    GT.fromFieldsWithTypes = function (item) {
        if (!isGT(item.type)) {
            throw new Error("not a GT type");
        }
        return GT.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    GT.fromBcs = function (data) { return GT.fromFields(GT.bcs.parse(data)); };
    GT.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    GT.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    GT.fromJSONField = function (field) { return GT.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    GT.fromJSON = function (json) {
        if (json.$typeName !== GT.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return GT.fromJSONField(json);
    };
    GT.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isGT(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a GT object"));
    } return GT.fromFieldsWithTypes(content); };
    GT.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching GT object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isGT(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a GT object"));
                        }
                        return [2 /*return*/, GT.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    GT.$typeName = "0x2::bls12381::GT";
    GT.$numTypeParams = 0;
    return GT;
}());
exports.GT = GT;
/* ============================== Scalar =============================== */
function isScalar(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::bls12381::Scalar"; }
var Scalar = /** @class */ (function () {
    function Scalar(typeArgs, fields) {
        this.$typeName = Scalar.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Scalar.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    Scalar.reified = function () {
        var _this = this;
        return { typeName: Scalar.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Scalar.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Scalar.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Scalar.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Scalar.fromBcs(data); }, bcs: Scalar.bcs, fromJSONField: function (field) { return Scalar.fromJSONField(field); }, fromJSON: function (json) { return Scalar.fromJSON(json); }, fromSuiParsedData: function (content) { return Scalar.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Scalar.fetch(client, id)];
            }); }); }, new: function (fields) { return new Scalar([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Scalar, "r", {
        get: function () { return Scalar.reified(); },
        enumerable: false,
        configurable: true
    });
    Scalar.phantom = function () { return (0, reified_1.phantom)(Scalar.reified()); };
    Object.defineProperty(Scalar, "p", {
        get: function () { return Scalar.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scalar, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Scalar", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Scalar.fromFields = function (fields) { return Scalar.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    Scalar.fromFieldsWithTypes = function (item) {
        if (!isScalar(item.type)) {
            throw new Error("not a Scalar type");
        }
        return Scalar.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    Scalar.fromBcs = function (data) { return Scalar.fromFields(Scalar.bcs.parse(data)); };
    Scalar.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    Scalar.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Scalar.fromJSONField = function (field) { return Scalar.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    Scalar.fromJSON = function (json) {
        if (json.$typeName !== Scalar.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Scalar.fromJSONField(json);
    };
    Scalar.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isScalar(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Scalar object"));
    } return Scalar.fromFieldsWithTypes(content); };
    Scalar.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Scalar object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isScalar(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Scalar object"));
                        }
                        return [2 /*return*/, Scalar.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Scalar.$typeName = "0x2::bls12381::Scalar";
    Scalar.$numTypeParams = 0;
    return Scalar;
}());
exports.Scalar = Scalar;
