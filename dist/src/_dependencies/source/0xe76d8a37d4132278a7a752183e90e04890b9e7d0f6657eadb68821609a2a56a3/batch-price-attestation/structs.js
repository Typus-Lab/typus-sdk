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
exports.Header = exports.BatchPriceAttestation = void 0;
exports.isBatchPriceAttestation = isBatchPriceAttestation;
exports.isHeader = isHeader;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../price-info/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== BatchPriceAttestation =============================== */
function isBatchPriceAttestation(type) { type = (0, util_1.compressSuiType)(type); return type === "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::batch_price_attestation::BatchPriceAttestation"; }
var BatchPriceAttestation = /** @class */ (function () {
    function BatchPriceAttestation(typeArgs, fields) {
        this.$typeName = BatchPriceAttestation.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([BatchPriceAttestation.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.header = fields.header;
        ;
        this.attestationSize = fields.attestationSize;
        ;
        this.attestationCount = fields.attestationCount;
        ;
        this.priceInfos = fields.priceInfos;
    }
    BatchPriceAttestation.reified = function () {
        var _this = this;
        return { typeName: BatchPriceAttestation.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([BatchPriceAttestation.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return BatchPriceAttestation.fromFields(fields); }, fromFieldsWithTypes: function (item) { return BatchPriceAttestation.fromFieldsWithTypes(item); }, fromBcs: function (data) { return BatchPriceAttestation.fromBcs(data); }, bcs: BatchPriceAttestation.bcs, fromJSONField: function (field) { return BatchPriceAttestation.fromJSONField(field); }, fromJSON: function (json) { return BatchPriceAttestation.fromJSON(json); }, fromSuiParsedData: function (content) { return BatchPriceAttestation.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, BatchPriceAttestation.fetch(client, id)];
            }); }); }, new: function (fields) { return new BatchPriceAttestation([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(BatchPriceAttestation, "r", {
        get: function () { return BatchPriceAttestation.reified(); },
        enumerable: false,
        configurable: true
    });
    BatchPriceAttestation.phantom = function () { return (0, reified_1.phantom)(BatchPriceAttestation.reified()); };
    Object.defineProperty(BatchPriceAttestation, "p", {
        get: function () { return BatchPriceAttestation.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchPriceAttestation, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("BatchPriceAttestation", {
                header: Header.bcs, attestation_size: bcs_1.bcs.u64(), attestation_count: bcs_1.bcs.u64(), price_infos: bcs_1.bcs.vector(structs_1.PriceInfo.bcs)
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    BatchPriceAttestation.fromFields = function (fields) { return BatchPriceAttestation.reified().new({ header: (0, reified_1.decodeFromFields)(Header.reified(), fields.header), attestationSize: (0, reified_1.decodeFromFields)("u64", fields.attestation_size), attestationCount: (0, reified_1.decodeFromFields)("u64", fields.attestation_count), priceInfos: (0, reified_1.decodeFromFields)(reified.vector(structs_1.PriceInfo.reified()), fields.price_infos) }); };
    BatchPriceAttestation.fromFieldsWithTypes = function (item) {
        if (!isBatchPriceAttestation(item.type)) {
            throw new Error("not a BatchPriceAttestation type");
        }
        return BatchPriceAttestation.reified().new({ header: (0, reified_1.decodeFromFieldsWithTypes)(Header.reified(), item.fields.header), attestationSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.attestation_size), attestationCount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.attestation_count), priceInfos: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_1.PriceInfo.reified()), item.fields.price_infos) });
    };
    BatchPriceAttestation.fromBcs = function (data) { return BatchPriceAttestation.fromFields(BatchPriceAttestation.bcs.parse(data)); };
    BatchPriceAttestation.prototype.toJSONField = function () {
        return {
            header: this.header.toJSONField(), attestationSize: this.attestationSize.toString(), attestationCount: this.attestationCount.toString(), priceInfos: (0, reified_1.fieldToJSON)("vector<0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_info::PriceInfo>", this.priceInfos),
        };
    };
    BatchPriceAttestation.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    BatchPriceAttestation.fromJSONField = function (field) { return BatchPriceAttestation.reified().new({ header: (0, reified_1.decodeFromJSONField)(Header.reified(), field.header), attestationSize: (0, reified_1.decodeFromJSONField)("u64", field.attestationSize), attestationCount: (0, reified_1.decodeFromJSONField)("u64", field.attestationCount), priceInfos: (0, reified_1.decodeFromJSONField)(reified.vector(structs_1.PriceInfo.reified()), field.priceInfos) }); };
    BatchPriceAttestation.fromJSON = function (json) {
        if (json.$typeName !== BatchPriceAttestation.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BatchPriceAttestation.fromJSONField(json);
    };
    BatchPriceAttestation.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBatchPriceAttestation(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a BatchPriceAttestation object"));
    } return BatchPriceAttestation.fromFieldsWithTypes(content); };
    BatchPriceAttestation.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching BatchPriceAttestation object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBatchPriceAttestation(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a BatchPriceAttestation object"));
                        }
                        return [2 /*return*/, BatchPriceAttestation.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    BatchPriceAttestation.$typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::batch_price_attestation::BatchPriceAttestation";
    BatchPriceAttestation.$numTypeParams = 0;
    return BatchPriceAttestation;
}());
exports.BatchPriceAttestation = BatchPriceAttestation;
/* ============================== Header =============================== */
function isHeader(type) { type = (0, util_1.compressSuiType)(type); return type === "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::batch_price_attestation::Header"; }
var Header = /** @class */ (function () {
    function Header(typeArgs, fields) {
        this.$typeName = Header.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Header.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.magic = fields.magic;
        ;
        this.versionMajor = fields.versionMajor;
        ;
        this.versionMinor = fields.versionMinor;
        ;
        this.headerSize = fields.headerSize;
        ;
        this.payloadId = fields.payloadId;
    }
    Header.reified = function () {
        var _this = this;
        return { typeName: Header.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Header.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Header.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Header.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Header.fromBcs(data); }, bcs: Header.bcs, fromJSONField: function (field) { return Header.fromJSONField(field); }, fromJSON: function (json) { return Header.fromJSON(json); }, fromSuiParsedData: function (content) { return Header.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Header.fetch(client, id)];
            }); }); }, new: function (fields) { return new Header([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Header, "r", {
        get: function () { return Header.reified(); },
        enumerable: false,
        configurable: true
    });
    Header.phantom = function () { return (0, reified_1.phantom)(Header.reified()); };
    Object.defineProperty(Header, "p", {
        get: function () { return Header.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Header, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Header", {
                magic: bcs_1.bcs.u64(), version_major: bcs_1.bcs.u64(), version_minor: bcs_1.bcs.u64(), header_size: bcs_1.bcs.u64(), payload_id: bcs_1.bcs.u8()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Header.fromFields = function (fields) { return Header.reified().new({ magic: (0, reified_1.decodeFromFields)("u64", fields.magic), versionMajor: (0, reified_1.decodeFromFields)("u64", fields.version_major), versionMinor: (0, reified_1.decodeFromFields)("u64", fields.version_minor), headerSize: (0, reified_1.decodeFromFields)("u64", fields.header_size), payloadId: (0, reified_1.decodeFromFields)("u8", fields.payload_id) }); };
    Header.fromFieldsWithTypes = function (item) {
        if (!isHeader(item.type)) {
            throw new Error("not a Header type");
        }
        return Header.reified().new({ magic: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.magic), versionMajor: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version_major), versionMinor: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version_minor), headerSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.header_size), payloadId: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.payload_id) });
    };
    Header.fromBcs = function (data) { return Header.fromFields(Header.bcs.parse(data)); };
    Header.prototype.toJSONField = function () {
        return {
            magic: this.magic.toString(), versionMajor: this.versionMajor.toString(), versionMinor: this.versionMinor.toString(), headerSize: this.headerSize.toString(), payloadId: this.payloadId,
        };
    };
    Header.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Header.fromJSONField = function (field) { return Header.reified().new({ magic: (0, reified_1.decodeFromJSONField)("u64", field.magic), versionMajor: (0, reified_1.decodeFromJSONField)("u64", field.versionMajor), versionMinor: (0, reified_1.decodeFromJSONField)("u64", field.versionMinor), headerSize: (0, reified_1.decodeFromJSONField)("u64", field.headerSize), payloadId: (0, reified_1.decodeFromJSONField)("u8", field.payloadId) }); };
    Header.fromJSON = function (json) {
        if (json.$typeName !== Header.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Header.fromJSONField(json);
    };
    Header.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHeader(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Header object"));
    } return Header.fromFieldsWithTypes(content); };
    Header.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Header object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHeader(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Header object"));
                        }
                        return [2 /*return*/, Header.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Header.$typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::batch_price_attestation::Header";
    Header.$numTypeParams = 0;
    return Header;
}());
exports.Header = Header;
