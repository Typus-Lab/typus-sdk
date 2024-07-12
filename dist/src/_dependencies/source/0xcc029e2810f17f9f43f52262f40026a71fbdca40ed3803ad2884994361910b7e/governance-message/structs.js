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
exports.DecreeTicket = exports.DecreeReceipt = void 0;
exports.isDecreeReceipt = isDecreeReceipt;
exports.isDecreeTicket = isDecreeTicket;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../bytes32/structs");
var structs_2 = require("../external-address/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== DecreeReceipt =============================== */
function isDecreeReceipt(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::governance_message::DecreeReceipt<"); }
var DecreeReceipt = /** @class */ (function () {
    function DecreeReceipt(typeArgs, fields) {
        this.$typeName = DecreeReceipt.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DecreeReceipt.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.payload = fields.payload;
        ;
        this.digest = fields.digest;
        ;
        this.sequence = fields.sequence;
    }
    DecreeReceipt.reified = function (T) {
        var _this = this;
        return { typeName: DecreeReceipt.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DecreeReceipt.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return DecreeReceipt.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return DecreeReceipt.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return DecreeReceipt.fromBcs(T, data); }, bcs: DecreeReceipt.bcs, fromJSONField: function (field) { return DecreeReceipt.fromJSONField(T, field); }, fromJSON: function (json) { return DecreeReceipt.fromJSON(T, json); }, fromSuiParsedData: function (content) { return DecreeReceipt.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DecreeReceipt.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new DecreeReceipt([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DecreeReceipt, "r", {
        get: function () { return DecreeReceipt.reified; },
        enumerable: false,
        configurable: true
    });
    DecreeReceipt.phantom = function (T) { return (0, reified_1.phantom)(DecreeReceipt.reified(T)); };
    Object.defineProperty(DecreeReceipt, "p", {
        get: function () { return DecreeReceipt.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DecreeReceipt, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DecreeReceipt", {
                payload: bcs_1.bcs.vector(bcs_1.bcs.u8()), digest: structs_1.Bytes32.bcs, sequence: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DecreeReceipt.fromFields = function (typeArg, fields) { return DecreeReceipt.reified(typeArg).new({ payload: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.payload), digest: (0, reified_1.decodeFromFields)(structs_1.Bytes32.reified(), fields.digest), sequence: (0, reified_1.decodeFromFields)("u64", fields.sequence) }); };
    DecreeReceipt.fromFieldsWithTypes = function (typeArg, item) {
        if (!isDecreeReceipt(item.type)) {
            throw new Error("not a DecreeReceipt type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return DecreeReceipt.reified(typeArg).new({ payload: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.payload), digest: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Bytes32.reified(), item.fields.digest), sequence: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sequence) });
    };
    DecreeReceipt.fromBcs = function (typeArg, data) { return DecreeReceipt.fromFields(typeArg, DecreeReceipt.bcs.parse(data)); };
    DecreeReceipt.prototype.toJSONField = function () {
        return {
            payload: (0, reified_1.fieldToJSON)("vector<u8>", this.payload), digest: this.digest.toJSONField(), sequence: this.sequence.toString(),
        };
    };
    DecreeReceipt.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DecreeReceipt.fromJSONField = function (typeArg, field) { return DecreeReceipt.reified(typeArg).new({ payload: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.payload), digest: (0, reified_1.decodeFromJSONField)(structs_1.Bytes32.reified(), field.digest), sequence: (0, reified_1.decodeFromJSONField)("u64", field.sequence) }); };
    DecreeReceipt.fromJSON = function (typeArg, json) {
        if (json.$typeName !== DecreeReceipt.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(DecreeReceipt.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return DecreeReceipt.fromJSONField(typeArg, json);
    };
    DecreeReceipt.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDecreeReceipt(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DecreeReceipt object"));
    } return DecreeReceipt.fromFieldsWithTypes(typeArg, content); };
    DecreeReceipt.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DecreeReceipt object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDecreeReceipt(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DecreeReceipt object"));
                        }
                        return [2 /*return*/, DecreeReceipt.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DecreeReceipt.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::governance_message::DecreeReceipt";
    DecreeReceipt.$numTypeParams = 1;
    return DecreeReceipt;
}());
exports.DecreeReceipt = DecreeReceipt;
/* ============================== DecreeTicket =============================== */
function isDecreeTicket(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::governance_message::DecreeTicket<"); }
var DecreeTicket = /** @class */ (function () {
    function DecreeTicket(typeArgs, fields) {
        this.$typeName = DecreeTicket.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DecreeTicket.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.governanceChain = fields.governanceChain;
        ;
        this.governanceContract = fields.governanceContract;
        ;
        this.moduleName = fields.moduleName;
        ;
        this.action = fields.action;
        ;
        this.global = fields.global;
    }
    DecreeTicket.reified = function (T) {
        var _this = this;
        return { typeName: DecreeTicket.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DecreeTicket.$typeName], [(0, reified_1.extractType)(T)], false)), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: function (fields) { return DecreeTicket.fromFields(T, fields); }, fromFieldsWithTypes: function (item) { return DecreeTicket.fromFieldsWithTypes(T, item); }, fromBcs: function (data) { return DecreeTicket.fromBcs(T, data); }, bcs: DecreeTicket.bcs, fromJSONField: function (field) { return DecreeTicket.fromJSONField(T, field); }, fromJSON: function (json) { return DecreeTicket.fromJSON(T, json); }, fromSuiParsedData: function (content) { return DecreeTicket.fromSuiParsedData(T, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DecreeTicket.fetch(client, T, id)];
            }); }); }, new: function (fields) { return new DecreeTicket([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DecreeTicket, "r", {
        get: function () { return DecreeTicket.reified; },
        enumerable: false,
        configurable: true
    });
    DecreeTicket.phantom = function (T) { return (0, reified_1.phantom)(DecreeTicket.reified(T)); };
    Object.defineProperty(DecreeTicket, "p", {
        get: function () { return DecreeTicket.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DecreeTicket, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DecreeTicket", {
                governance_chain: bcs_1.bcs.u16(), governance_contract: structs_2.ExternalAddress.bcs, module_name: structs_1.Bytes32.bcs, action: bcs_1.bcs.u8(), global: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DecreeTicket.fromFields = function (typeArg, fields) { return DecreeTicket.reified(typeArg).new({ governanceChain: (0, reified_1.decodeFromFields)("u16", fields.governance_chain), governanceContract: (0, reified_1.decodeFromFields)(structs_2.ExternalAddress.reified(), fields.governance_contract), moduleName: (0, reified_1.decodeFromFields)(structs_1.Bytes32.reified(), fields.module_name), action: (0, reified_1.decodeFromFields)("u8", fields.action), global: (0, reified_1.decodeFromFields)("bool", fields.global) }); };
    DecreeTicket.fromFieldsWithTypes = function (typeArg, item) {
        if (!isDecreeTicket(item.type)) {
            throw new Error("not a DecreeTicket type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return DecreeTicket.reified(typeArg).new({ governanceChain: (0, reified_1.decodeFromFieldsWithTypes)("u16", item.fields.governance_chain), governanceContract: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ExternalAddress.reified(), item.fields.governance_contract), moduleName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Bytes32.reified(), item.fields.module_name), action: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.action), global: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.global) });
    };
    DecreeTicket.fromBcs = function (typeArg, data) { return DecreeTicket.fromFields(typeArg, DecreeTicket.bcs.parse(data)); };
    DecreeTicket.prototype.toJSONField = function () {
        return {
            governanceChain: this.governanceChain, governanceContract: this.governanceContract.toJSONField(), moduleName: this.moduleName.toJSONField(), action: this.action, global: this.global,
        };
    };
    DecreeTicket.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DecreeTicket.fromJSONField = function (typeArg, field) { return DecreeTicket.reified(typeArg).new({ governanceChain: (0, reified_1.decodeFromJSONField)("u16", field.governanceChain), governanceContract: (0, reified_1.decodeFromJSONField)(structs_2.ExternalAddress.reified(), field.governanceContract), moduleName: (0, reified_1.decodeFromJSONField)(structs_1.Bytes32.reified(), field.moduleName), action: (0, reified_1.decodeFromJSONField)("u8", field.action), global: (0, reified_1.decodeFromJSONField)("bool", field.global) }); };
    DecreeTicket.fromJSON = function (typeArg, json) {
        if (json.$typeName !== DecreeTicket.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(DecreeTicket.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return DecreeTicket.fromJSONField(typeArg, json);
    };
    DecreeTicket.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDecreeTicket(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DecreeTicket object"));
    } return DecreeTicket.fromFieldsWithTypes(typeArg, content); };
    DecreeTicket.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DecreeTicket object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDecreeTicket(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DecreeTicket object"));
                        }
                        return [2 /*return*/, DecreeTicket.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DecreeTicket.$typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::governance_message::DecreeTicket";
    DecreeTicket.$numTypeParams = 1;
    return DecreeTicket;
}());
exports.DecreeTicket = DecreeTicket;
