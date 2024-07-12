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
exports.PublicProofInputs = exports.ProofPoints = exports.PreparedVerifyingKey = exports.Curve = void 0;
exports.isCurve = isCurve;
exports.isPreparedVerifyingKey = isPreparedVerifyingKey;
exports.isProofPoints = isProofPoints;
exports.isPublicProofInputs = isPublicProofInputs;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var bcs_1 = require("@mysten/bcs");
/* ============================== Curve =============================== */
function isCurve(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::groth16::Curve"; }
var Curve = /** @class */ (function () {
    function Curve(typeArgs, fields) {
        this.$typeName = Curve.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Curve.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    Curve.reified = function () {
        var _this = this;
        return { typeName: Curve.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Curve.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Curve.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Curve.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Curve.fromBcs(data); }, bcs: Curve.bcs, fromJSONField: function (field) { return Curve.fromJSONField(field); }, fromJSON: function (json) { return Curve.fromJSON(json); }, fromSuiParsedData: function (content) { return Curve.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Curve.fetch(client, id)];
            }); }); }, new: function (fields) { return new Curve([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Curve, "r", {
        get: function () { return Curve.reified(); },
        enumerable: false,
        configurable: true
    });
    Curve.phantom = function () { return (0, reified_1.phantom)(Curve.reified()); };
    Object.defineProperty(Curve, "p", {
        get: function () { return Curve.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curve, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Curve", {
                id: bcs_1.bcs.u8()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Curve.fromFields = function (fields) { return Curve.reified().new({ id: (0, reified_1.decodeFromFields)("u8", fields.id) }); };
    Curve.fromFieldsWithTypes = function (item) {
        if (!isCurve(item.type)) {
            throw new Error("not a Curve type");
        }
        return Curve.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.id) });
    };
    Curve.fromBcs = function (data) { return Curve.fromFields(Curve.bcs.parse(data)); };
    Curve.prototype.toJSONField = function () {
        return {
            id: this.id,
        };
    };
    Curve.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Curve.fromJSONField = function (field) { return Curve.reified().new({ id: (0, reified_1.decodeFromJSONField)("u8", field.id) }); };
    Curve.fromJSON = function (json) {
        if (json.$typeName !== Curve.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Curve.fromJSONField(json);
    };
    Curve.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCurve(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Curve object"));
    } return Curve.fromFieldsWithTypes(content); };
    Curve.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Curve object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCurve(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Curve object"));
                        }
                        return [2 /*return*/, Curve.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Curve.$typeName = "0x2::groth16::Curve";
    Curve.$numTypeParams = 0;
    return Curve;
}());
exports.Curve = Curve;
/* ============================== PreparedVerifyingKey =============================== */
function isPreparedVerifyingKey(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::groth16::PreparedVerifyingKey"; }
var PreparedVerifyingKey = /** @class */ (function () {
    function PreparedVerifyingKey(typeArgs, fields) {
        this.$typeName = PreparedVerifyingKey.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([PreparedVerifyingKey.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.vkGammaAbcG1Bytes = fields.vkGammaAbcG1Bytes;
        ;
        this.alphaG1BetaG2Bytes = fields.alphaG1BetaG2Bytes;
        ;
        this.gammaG2NegPcBytes = fields.gammaG2NegPcBytes;
        ;
        this.deltaG2NegPcBytes = fields.deltaG2NegPcBytes;
    }
    PreparedVerifyingKey.reified = function () {
        var _this = this;
        return { typeName: PreparedVerifyingKey.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([PreparedVerifyingKey.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return PreparedVerifyingKey.fromFields(fields); }, fromFieldsWithTypes: function (item) { return PreparedVerifyingKey.fromFieldsWithTypes(item); }, fromBcs: function (data) { return PreparedVerifyingKey.fromBcs(data); }, bcs: PreparedVerifyingKey.bcs, fromJSONField: function (field) { return PreparedVerifyingKey.fromJSONField(field); }, fromJSON: function (json) { return PreparedVerifyingKey.fromJSON(json); }, fromSuiParsedData: function (content) { return PreparedVerifyingKey.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, PreparedVerifyingKey.fetch(client, id)];
            }); }); }, new: function (fields) { return new PreparedVerifyingKey([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(PreparedVerifyingKey, "r", {
        get: function () { return PreparedVerifyingKey.reified(); },
        enumerable: false,
        configurable: true
    });
    PreparedVerifyingKey.phantom = function () { return (0, reified_1.phantom)(PreparedVerifyingKey.reified()); };
    Object.defineProperty(PreparedVerifyingKey, "p", {
        get: function () { return PreparedVerifyingKey.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreparedVerifyingKey, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("PreparedVerifyingKey", {
                vk_gamma_abc_g1_bytes: bcs_1.bcs.vector(bcs_1.bcs.u8()), alpha_g1_beta_g2_bytes: bcs_1.bcs.vector(bcs_1.bcs.u8()), gamma_g2_neg_pc_bytes: bcs_1.bcs.vector(bcs_1.bcs.u8()), delta_g2_neg_pc_bytes: bcs_1.bcs.vector(bcs_1.bcs.u8())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    PreparedVerifyingKey.fromFields = function (fields) { return PreparedVerifyingKey.reified().new({ vkGammaAbcG1Bytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.vk_gamma_abc_g1_bytes), alphaG1BetaG2Bytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.alpha_g1_beta_g2_bytes), gammaG2NegPcBytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.gamma_g2_neg_pc_bytes), deltaG2NegPcBytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.delta_g2_neg_pc_bytes) }); };
    PreparedVerifyingKey.fromFieldsWithTypes = function (item) {
        if (!isPreparedVerifyingKey(item.type)) {
            throw new Error("not a PreparedVerifyingKey type");
        }
        return PreparedVerifyingKey.reified().new({ vkGammaAbcG1Bytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.vk_gamma_abc_g1_bytes), alphaG1BetaG2Bytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.alpha_g1_beta_g2_bytes), gammaG2NegPcBytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.gamma_g2_neg_pc_bytes), deltaG2NegPcBytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.delta_g2_neg_pc_bytes) });
    };
    PreparedVerifyingKey.fromBcs = function (data) { return PreparedVerifyingKey.fromFields(PreparedVerifyingKey.bcs.parse(data)); };
    PreparedVerifyingKey.prototype.toJSONField = function () {
        return {
            vkGammaAbcG1Bytes: (0, reified_1.fieldToJSON)("vector<u8>", this.vkGammaAbcG1Bytes), alphaG1BetaG2Bytes: (0, reified_1.fieldToJSON)("vector<u8>", this.alphaG1BetaG2Bytes), gammaG2NegPcBytes: (0, reified_1.fieldToJSON)("vector<u8>", this.gammaG2NegPcBytes), deltaG2NegPcBytes: (0, reified_1.fieldToJSON)("vector<u8>", this.deltaG2NegPcBytes),
        };
    };
    PreparedVerifyingKey.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    PreparedVerifyingKey.fromJSONField = function (field) { return PreparedVerifyingKey.reified().new({ vkGammaAbcG1Bytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.vkGammaAbcG1Bytes), alphaG1BetaG2Bytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.alphaG1BetaG2Bytes), gammaG2NegPcBytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.gammaG2NegPcBytes), deltaG2NegPcBytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.deltaG2NegPcBytes) }); };
    PreparedVerifyingKey.fromJSON = function (json) {
        if (json.$typeName !== PreparedVerifyingKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PreparedVerifyingKey.fromJSONField(json);
    };
    PreparedVerifyingKey.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPreparedVerifyingKey(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a PreparedVerifyingKey object"));
    } return PreparedVerifyingKey.fromFieldsWithTypes(content); };
    PreparedVerifyingKey.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching PreparedVerifyingKey object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPreparedVerifyingKey(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a PreparedVerifyingKey object"));
                        }
                        return [2 /*return*/, PreparedVerifyingKey.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    PreparedVerifyingKey.$typeName = "0x2::groth16::PreparedVerifyingKey";
    PreparedVerifyingKey.$numTypeParams = 0;
    return PreparedVerifyingKey;
}());
exports.PreparedVerifyingKey = PreparedVerifyingKey;
/* ============================== ProofPoints =============================== */
function isProofPoints(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::groth16::ProofPoints"; }
var ProofPoints = /** @class */ (function () {
    function ProofPoints(typeArgs, fields) {
        this.$typeName = ProofPoints.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ProofPoints.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.bytes = fields.bytes;
    }
    ProofPoints.reified = function () {
        var _this = this;
        return { typeName: ProofPoints.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ProofPoints.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ProofPoints.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ProofPoints.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ProofPoints.fromBcs(data); }, bcs: ProofPoints.bcs, fromJSONField: function (field) { return ProofPoints.fromJSONField(field); }, fromJSON: function (json) { return ProofPoints.fromJSON(json); }, fromSuiParsedData: function (content) { return ProofPoints.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ProofPoints.fetch(client, id)];
            }); }); }, new: function (fields) { return new ProofPoints([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ProofPoints, "r", {
        get: function () { return ProofPoints.reified(); },
        enumerable: false,
        configurable: true
    });
    ProofPoints.phantom = function () { return (0, reified_1.phantom)(ProofPoints.reified()); };
    Object.defineProperty(ProofPoints, "p", {
        get: function () { return ProofPoints.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProofPoints, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ProofPoints", {
                bytes: bcs_1.bcs.vector(bcs_1.bcs.u8())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ProofPoints.fromFields = function (fields) { return ProofPoints.reified().new({ bytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.bytes) }); };
    ProofPoints.fromFieldsWithTypes = function (item) {
        if (!isProofPoints(item.type)) {
            throw new Error("not a ProofPoints type");
        }
        return ProofPoints.reified().new({ bytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.bytes) });
    };
    ProofPoints.fromBcs = function (data) { return ProofPoints.fromFields(ProofPoints.bcs.parse(data)); };
    ProofPoints.prototype.toJSONField = function () {
        return {
            bytes: (0, reified_1.fieldToJSON)("vector<u8>", this.bytes),
        };
    };
    ProofPoints.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ProofPoints.fromJSONField = function (field) { return ProofPoints.reified().new({ bytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.bytes) }); };
    ProofPoints.fromJSON = function (json) {
        if (json.$typeName !== ProofPoints.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ProofPoints.fromJSONField(json);
    };
    ProofPoints.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isProofPoints(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ProofPoints object"));
    } return ProofPoints.fromFieldsWithTypes(content); };
    ProofPoints.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ProofPoints object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isProofPoints(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ProofPoints object"));
                        }
                        return [2 /*return*/, ProofPoints.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ProofPoints.$typeName = "0x2::groth16::ProofPoints";
    ProofPoints.$numTypeParams = 0;
    return ProofPoints;
}());
exports.ProofPoints = ProofPoints;
/* ============================== PublicProofInputs =============================== */
function isPublicProofInputs(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::groth16::PublicProofInputs"; }
var PublicProofInputs = /** @class */ (function () {
    function PublicProofInputs(typeArgs, fields) {
        this.$typeName = PublicProofInputs.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([PublicProofInputs.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.bytes = fields.bytes;
    }
    PublicProofInputs.reified = function () {
        var _this = this;
        return { typeName: PublicProofInputs.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([PublicProofInputs.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return PublicProofInputs.fromFields(fields); }, fromFieldsWithTypes: function (item) { return PublicProofInputs.fromFieldsWithTypes(item); }, fromBcs: function (data) { return PublicProofInputs.fromBcs(data); }, bcs: PublicProofInputs.bcs, fromJSONField: function (field) { return PublicProofInputs.fromJSONField(field); }, fromJSON: function (json) { return PublicProofInputs.fromJSON(json); }, fromSuiParsedData: function (content) { return PublicProofInputs.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, PublicProofInputs.fetch(client, id)];
            }); }); }, new: function (fields) { return new PublicProofInputs([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(PublicProofInputs, "r", {
        get: function () { return PublicProofInputs.reified(); },
        enumerable: false,
        configurable: true
    });
    PublicProofInputs.phantom = function () { return (0, reified_1.phantom)(PublicProofInputs.reified()); };
    Object.defineProperty(PublicProofInputs, "p", {
        get: function () { return PublicProofInputs.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PublicProofInputs, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("PublicProofInputs", {
                bytes: bcs_1.bcs.vector(bcs_1.bcs.u8())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    PublicProofInputs.fromFields = function (fields) { return PublicProofInputs.reified().new({ bytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.bytes) }); };
    PublicProofInputs.fromFieldsWithTypes = function (item) {
        if (!isPublicProofInputs(item.type)) {
            throw new Error("not a PublicProofInputs type");
        }
        return PublicProofInputs.reified().new({ bytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.bytes) });
    };
    PublicProofInputs.fromBcs = function (data) { return PublicProofInputs.fromFields(PublicProofInputs.bcs.parse(data)); };
    PublicProofInputs.prototype.toJSONField = function () {
        return {
            bytes: (0, reified_1.fieldToJSON)("vector<u8>", this.bytes),
        };
    };
    PublicProofInputs.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    PublicProofInputs.fromJSONField = function (field) { return PublicProofInputs.reified().new({ bytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.bytes) }); };
    PublicProofInputs.fromJSON = function (json) {
        if (json.$typeName !== PublicProofInputs.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PublicProofInputs.fromJSONField(json);
    };
    PublicProofInputs.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPublicProofInputs(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a PublicProofInputs object"));
    } return PublicProofInputs.fromFieldsWithTypes(content); };
    PublicProofInputs.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching PublicProofInputs object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPublicProofInputs(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a PublicProofInputs object"));
                        }
                        return [2 /*return*/, PublicProofInputs.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    PublicProofInputs.$typeName = "0x2::groth16::PublicProofInputs";
    PublicProofInputs.$numTypeParams = 0;
    return PublicProofInputs;
}());
exports.PublicProofInputs = PublicProofInputs;
