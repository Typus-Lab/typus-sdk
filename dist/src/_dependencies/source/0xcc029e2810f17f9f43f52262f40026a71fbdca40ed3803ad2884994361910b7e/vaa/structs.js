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
exports.VAA = void 0;
exports.isVAA = isVAA;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../bytes32/structs");
var structs_2 = require("../external-address/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== VAA =============================== */
function isVAA(type) { type = (0, util_1.compressSuiType)(type); return type === "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::vaa::VAA"; }
var VAA = /** @class */ (function () {
    function VAA(typeArgs, fields) {
        this.$typeName = VAA.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([VAA.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.guardianSetIndex = fields.guardianSetIndex;
        ;
        this.timestamp = fields.timestamp;
        ;
        this.nonce = fields.nonce;
        ;
        this.emitterChain = fields.emitterChain;
        ;
        this.emitterAddress = fields.emitterAddress;
        ;
        this.sequence = fields.sequence;
        ;
        this.consistencyLevel = fields.consistencyLevel;
        ;
        this.payload = fields.payload;
        ;
        this.digest = fields.digest;
    }
    VAA.reified = function () {
        var _this = this;
        return { typeName: VAA.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([VAA.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return VAA.fromFields(fields); }, fromFieldsWithTypes: function (item) { return VAA.fromFieldsWithTypes(item); }, fromBcs: function (data) { return VAA.fromBcs(data); }, bcs: VAA.bcs, fromJSONField: function (field) { return VAA.fromJSONField(field); }, fromJSON: function (json) { return VAA.fromJSON(json); }, fromSuiParsedData: function (content) { return VAA.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, VAA.fetch(client, id)];
            }); }); }, new: function (fields) { return new VAA([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(VAA, "r", {
        get: function () { return VAA.reified(); },
        enumerable: false,
        configurable: true
    });
    VAA.phantom = function () { return (0, reified_1.phantom)(VAA.reified()); };
    Object.defineProperty(VAA, "p", {
        get: function () { return VAA.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VAA, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("VAA", {
                guardian_set_index: bcs_1.bcs.u32(), timestamp: bcs_1.bcs.u32(), nonce: bcs_1.bcs.u32(), emitter_chain: bcs_1.bcs.u16(), emitter_address: structs_2.ExternalAddress.bcs, sequence: bcs_1.bcs.u64(), consistency_level: bcs_1.bcs.u8(), payload: bcs_1.bcs.vector(bcs_1.bcs.u8()), digest: structs_1.Bytes32.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    VAA.fromFields = function (fields) { return VAA.reified().new({ guardianSetIndex: (0, reified_1.decodeFromFields)("u32", fields.guardian_set_index), timestamp: (0, reified_1.decodeFromFields)("u32", fields.timestamp), nonce: (0, reified_1.decodeFromFields)("u32", fields.nonce), emitterChain: (0, reified_1.decodeFromFields)("u16", fields.emitter_chain), emitterAddress: (0, reified_1.decodeFromFields)(structs_2.ExternalAddress.reified(), fields.emitter_address), sequence: (0, reified_1.decodeFromFields)("u64", fields.sequence), consistencyLevel: (0, reified_1.decodeFromFields)("u8", fields.consistency_level), payload: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.payload), digest: (0, reified_1.decodeFromFields)(structs_1.Bytes32.reified(), fields.digest) }); };
    VAA.fromFieldsWithTypes = function (item) {
        if (!isVAA(item.type)) {
            throw new Error("not a VAA type");
        }
        return VAA.reified().new({ guardianSetIndex: (0, reified_1.decodeFromFieldsWithTypes)("u32", item.fields.guardian_set_index), timestamp: (0, reified_1.decodeFromFieldsWithTypes)("u32", item.fields.timestamp), nonce: (0, reified_1.decodeFromFieldsWithTypes)("u32", item.fields.nonce), emitterChain: (0, reified_1.decodeFromFieldsWithTypes)("u16", item.fields.emitter_chain), emitterAddress: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ExternalAddress.reified(), item.fields.emitter_address), sequence: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sequence), consistencyLevel: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.consistency_level), payload: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.payload), digest: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Bytes32.reified(), item.fields.digest) });
    };
    VAA.fromBcs = function (data) { return VAA.fromFields(VAA.bcs.parse(data)); };
    VAA.prototype.toJSONField = function () {
        return {
            guardianSetIndex: this.guardianSetIndex, timestamp: this.timestamp, nonce: this.nonce, emitterChain: this.emitterChain, emitterAddress: this.emitterAddress.toJSONField(), sequence: this.sequence.toString(), consistencyLevel: this.consistencyLevel, payload: (0, reified_1.fieldToJSON)("vector<u8>", this.payload), digest: this.digest.toJSONField(),
        };
    };
    VAA.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    VAA.fromJSONField = function (field) { return VAA.reified().new({ guardianSetIndex: (0, reified_1.decodeFromJSONField)("u32", field.guardianSetIndex), timestamp: (0, reified_1.decodeFromJSONField)("u32", field.timestamp), nonce: (0, reified_1.decodeFromJSONField)("u32", field.nonce), emitterChain: (0, reified_1.decodeFromJSONField)("u16", field.emitterChain), emitterAddress: (0, reified_1.decodeFromJSONField)(structs_2.ExternalAddress.reified(), field.emitterAddress), sequence: (0, reified_1.decodeFromJSONField)("u64", field.sequence), consistencyLevel: (0, reified_1.decodeFromJSONField)("u8", field.consistencyLevel), payload: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.payload), digest: (0, reified_1.decodeFromJSONField)(structs_1.Bytes32.reified(), field.digest) }); };
    VAA.fromJSON = function (json) {
        if (json.$typeName !== VAA.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return VAA.fromJSONField(json);
    };
    VAA.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVAA(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a VAA object"));
    } return VAA.fromFieldsWithTypes(content); };
    VAA.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching VAA object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVAA(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a VAA object"));
                        }
                        return [2 /*return*/, VAA.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    VAA.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::vaa::VAA";
    VAA.$numTypeParams = 0;
    return VAA;
}());
exports.VAA = VAA;
