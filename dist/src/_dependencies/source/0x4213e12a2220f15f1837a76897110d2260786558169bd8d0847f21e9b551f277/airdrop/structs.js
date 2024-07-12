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
exports.TypusAirdropRegistry = exports.SetAirdropEvent = exports.RemoveAirdropEvent = exports.ClaimAirdropEvent = exports.AirdropInfo = exports.Airdrop = void 0;
exports.isAirdrop = isAirdrop;
exports.isAirdropInfo = isAirdropInfo;
exports.isClaimAirdropEvent = isClaimAirdropEvent;
exports.isRemoveAirdropEvent = isRemoveAirdropEvent;
exports.isSetAirdropEvent = isSetAirdropEvent;
exports.isTypusAirdropRegistry = isTypusAirdropRegistry;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/ascii/structs");
var structs_2 = require("../../0x1/type-name/structs");
var structs_3 = require("../../0x2/balance/structs");
var structs_4 = require("../../0x2/object/structs");
var structs_5 = require("../big-vector/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== Airdrop =============================== */
function isAirdrop(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::Airdrop"; }
var Airdrop = /** @class */ (function () {
    function Airdrop(typeArgs, fields) {
        this.$typeName = Airdrop.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Airdrop.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        ;
        this.value = fields.value;
    }
    Airdrop.reified = function () {
        var _this = this;
        return { typeName: Airdrop.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Airdrop.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Airdrop.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Airdrop.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Airdrop.fromBcs(data); }, bcs: Airdrop.bcs, fromJSONField: function (field) { return Airdrop.fromJSONField(field); }, fromJSON: function (json) { return Airdrop.fromJSON(json); }, fromSuiParsedData: function (content) { return Airdrop.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Airdrop.fetch(client, id)];
            }); }); }, new: function (fields) { return new Airdrop([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Airdrop, "r", {
        get: function () { return Airdrop.reified(); },
        enumerable: false,
        configurable: true
    });
    Airdrop.phantom = function () { return (0, reified_1.phantom)(Airdrop.reified()); };
    Object.defineProperty(Airdrop, "p", {
        get: function () { return Airdrop.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Airdrop, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Airdrop", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), value: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Airdrop.fromFields = function (fields) { return Airdrop.reified().new({ user: (0, reified_1.decodeFromFields)("address", fields.user), value: (0, reified_1.decodeFromFields)("u64", fields.value) }); };
    Airdrop.fromFieldsWithTypes = function (item) {
        if (!isAirdrop(item.type)) {
            throw new Error("not a Airdrop type");
        }
        return Airdrop.reified().new({ user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), value: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.value) });
    };
    Airdrop.fromBcs = function (data) { return Airdrop.fromFields(Airdrop.bcs.parse(data)); };
    Airdrop.prototype.toJSONField = function () {
        return {
            user: this.user, value: this.value.toString(),
        };
    };
    Airdrop.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Airdrop.fromJSONField = function (field) { return Airdrop.reified().new({ user: (0, reified_1.decodeFromJSONField)("address", field.user), value: (0, reified_1.decodeFromJSONField)("u64", field.value) }); };
    Airdrop.fromJSON = function (json) {
        if (json.$typeName !== Airdrop.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Airdrop.fromJSONField(json);
    };
    Airdrop.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAirdrop(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Airdrop object"));
    } return Airdrop.fromFieldsWithTypes(content); };
    Airdrop.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Airdrop object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAirdrop(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Airdrop object"));
                        }
                        return [2 /*return*/, Airdrop.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Airdrop.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::Airdrop";
    Airdrop.$numTypeParams = 0;
    return Airdrop;
}());
exports.Airdrop = Airdrop;
/* ============================== AirdropInfo =============================== */
function isAirdropInfo(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::AirdropInfo<"); }
var AirdropInfo = /** @class */ (function () {
    function AirdropInfo(typeArgs, fields) {
        this.$typeName = AirdropInfo.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AirdropInfo.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.balance = fields.balance;
        ;
        this.airdrops = fields.airdrops;
    }
    AirdropInfo.reified = function (TOKEN) {
        var _this = this;
        return { typeName: AirdropInfo.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AirdropInfo.$typeName], [(0, reified_1.extractType)(TOKEN)], false)), typeArgs: [(0, reified_1.extractType)(TOKEN)], reifiedTypeArgs: [TOKEN], fromFields: function (fields) { return AirdropInfo.fromFields(TOKEN, fields); }, fromFieldsWithTypes: function (item) { return AirdropInfo.fromFieldsWithTypes(TOKEN, item); }, fromBcs: function (data) { return AirdropInfo.fromBcs(TOKEN, data); }, bcs: AirdropInfo.bcs, fromJSONField: function (field) { return AirdropInfo.fromJSONField(TOKEN, field); }, fromJSON: function (json) { return AirdropInfo.fromJSON(TOKEN, json); }, fromSuiParsedData: function (content) { return AirdropInfo.fromSuiParsedData(TOKEN, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AirdropInfo.fetch(client, TOKEN, id)];
            }); }); }, new: function (fields) { return new AirdropInfo([(0, reified_1.extractType)(TOKEN)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(AirdropInfo, "r", {
        get: function () { return AirdropInfo.reified; },
        enumerable: false,
        configurable: true
    });
    AirdropInfo.phantom = function (TOKEN) { return (0, reified_1.phantom)(AirdropInfo.reified(TOKEN)); };
    Object.defineProperty(AirdropInfo, "p", {
        get: function () { return AirdropInfo.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AirdropInfo, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AirdropInfo", {
                id: structs_4.UID.bcs, balance: structs_3.Balance.bcs, airdrops: structs_5.BigVector.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    AirdropInfo.fromFields = function (typeArg, fields) { return AirdropInfo.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id), balance: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(typeArg), fields.balance), airdrops: (0, reified_1.decodeFromFields)(structs_5.BigVector.reified(), fields.airdrops) }); };
    AirdropInfo.fromFieldsWithTypes = function (typeArg, item) {
        if (!isAirdropInfo(item.type)) {
            throw new Error("not a AirdropInfo type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return AirdropInfo.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id), balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(typeArg), item.fields.balance), airdrops: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.BigVector.reified(), item.fields.airdrops) });
    };
    AirdropInfo.fromBcs = function (typeArg, data) { return AirdropInfo.fromFields(typeArg, AirdropInfo.bcs.parse(data)); };
    AirdropInfo.prototype.toJSONField = function () {
        return {
            id: this.id, balance: this.balance.toJSONField(), airdrops: this.airdrops.toJSONField(),
        };
    };
    AirdropInfo.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    AirdropInfo.fromJSONField = function (typeArg, field) { return AirdropInfo.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id), balance: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(typeArg), field.balance), airdrops: (0, reified_1.decodeFromJSONField)(structs_5.BigVector.reified(), field.airdrops) }); };
    AirdropInfo.fromJSON = function (typeArg, json) {
        if (json.$typeName !== AirdropInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(AirdropInfo.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return AirdropInfo.fromJSONField(typeArg, json);
    };
    AirdropInfo.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAirdropInfo(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a AirdropInfo object"));
    } return AirdropInfo.fromFieldsWithTypes(typeArg, content); };
    AirdropInfo.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AirdropInfo object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAirdropInfo(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AirdropInfo object"));
                        }
                        return [2 /*return*/, AirdropInfo.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AirdropInfo.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::AirdropInfo";
    AirdropInfo.$numTypeParams = 1;
    return AirdropInfo;
}());
exports.AirdropInfo = AirdropInfo;
/* ============================== ClaimAirdropEvent =============================== */
function isClaimAirdropEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::ClaimAirdropEvent"; }
var ClaimAirdropEvent = /** @class */ (function () {
    function ClaimAirdropEvent(typeArgs, fields) {
        this.$typeName = ClaimAirdropEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ClaimAirdropEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.token = fields.token;
        ;
        this.key = fields.key;
        ;
        this.user = fields.user;
        ;
        this.log = fields.log;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    ClaimAirdropEvent.reified = function () {
        var _this = this;
        return { typeName: ClaimAirdropEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ClaimAirdropEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ClaimAirdropEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ClaimAirdropEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ClaimAirdropEvent.fromBcs(data); }, bcs: ClaimAirdropEvent.bcs, fromJSONField: function (field) { return ClaimAirdropEvent.fromJSONField(field); }, fromJSON: function (json) { return ClaimAirdropEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return ClaimAirdropEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ClaimAirdropEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new ClaimAirdropEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ClaimAirdropEvent, "r", {
        get: function () { return ClaimAirdropEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    ClaimAirdropEvent.phantom = function () { return (0, reified_1.phantom)(ClaimAirdropEvent.reified()); };
    Object.defineProperty(ClaimAirdropEvent, "p", {
        get: function () { return ClaimAirdropEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClaimAirdropEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ClaimAirdropEvent", {
                token: structs_2.TypeName.bcs, key: structs_1.String.bcs, user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), log: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.vector(bcs_1.bcs.u8()))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ClaimAirdropEvent.fromFields = function (fields) { return ClaimAirdropEvent.reified().new({ token: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.token), key: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.key), user: (0, reified_1.decodeFromFields)("address", fields.user), log: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.log), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector(reified.vector("u8")), fields.bcs_padding) }); };
    ClaimAirdropEvent.fromFieldsWithTypes = function (item) {
        if (!isClaimAirdropEvent(item.type)) {
            throw new Error("not a ClaimAirdropEvent type");
        }
        return ClaimAirdropEvent.reified().new({ token: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.token), key: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.key), user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), log: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.log), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector("u8")), item.fields.bcs_padding) });
    };
    ClaimAirdropEvent.fromBcs = function (data) { return ClaimAirdropEvent.fromFields(ClaimAirdropEvent.bcs.parse(data)); };
    ClaimAirdropEvent.prototype.toJSONField = function () {
        return {
            token: this.token.toJSONField(), key: this.key, user: this.user, log: (0, reified_1.fieldToJSON)("vector<u64>", this.log), bcsPadding: (0, reified_1.fieldToJSON)("vector<vector<u8>>", this.bcsPadding),
        };
    };
    ClaimAirdropEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ClaimAirdropEvent.fromJSONField = function (field) { return ClaimAirdropEvent.reified().new({ token: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.token), key: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.key), user: (0, reified_1.decodeFromJSONField)("address", field.user), log: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.log), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector("u8")), field.bcsPadding) }); };
    ClaimAirdropEvent.fromJSON = function (json) {
        if (json.$typeName !== ClaimAirdropEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ClaimAirdropEvent.fromJSONField(json);
    };
    ClaimAirdropEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isClaimAirdropEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ClaimAirdropEvent object"));
    } return ClaimAirdropEvent.fromFieldsWithTypes(content); };
    ClaimAirdropEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ClaimAirdropEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isClaimAirdropEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ClaimAirdropEvent object"));
                        }
                        return [2 /*return*/, ClaimAirdropEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ClaimAirdropEvent.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::ClaimAirdropEvent";
    ClaimAirdropEvent.$numTypeParams = 0;
    return ClaimAirdropEvent;
}());
exports.ClaimAirdropEvent = ClaimAirdropEvent;
/* ============================== RemoveAirdropEvent =============================== */
function isRemoveAirdropEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::RemoveAirdropEvent"; }
var RemoveAirdropEvent = /** @class */ (function () {
    function RemoveAirdropEvent(typeArgs, fields) {
        this.$typeName = RemoveAirdropEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RemoveAirdropEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.token = fields.token;
        ;
        this.key = fields.key;
        ;
        this.log = fields.log;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    RemoveAirdropEvent.reified = function () {
        var _this = this;
        return { typeName: RemoveAirdropEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RemoveAirdropEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RemoveAirdropEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RemoveAirdropEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RemoveAirdropEvent.fromBcs(data); }, bcs: RemoveAirdropEvent.bcs, fromJSONField: function (field) { return RemoveAirdropEvent.fromJSONField(field); }, fromJSON: function (json) { return RemoveAirdropEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return RemoveAirdropEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RemoveAirdropEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new RemoveAirdropEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RemoveAirdropEvent, "r", {
        get: function () { return RemoveAirdropEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    RemoveAirdropEvent.phantom = function () { return (0, reified_1.phantom)(RemoveAirdropEvent.reified()); };
    Object.defineProperty(RemoveAirdropEvent, "p", {
        get: function () { return RemoveAirdropEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoveAirdropEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RemoveAirdropEvent", {
                token: structs_2.TypeName.bcs, key: structs_1.String.bcs, log: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.vector(bcs_1.bcs.u8()))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RemoveAirdropEvent.fromFields = function (fields) { return RemoveAirdropEvent.reified().new({ token: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.token), key: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.key), log: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.log), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector(reified.vector("u8")), fields.bcs_padding) }); };
    RemoveAirdropEvent.fromFieldsWithTypes = function (item) {
        if (!isRemoveAirdropEvent(item.type)) {
            throw new Error("not a RemoveAirdropEvent type");
        }
        return RemoveAirdropEvent.reified().new({ token: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.token), key: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.key), log: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.log), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector("u8")), item.fields.bcs_padding) });
    };
    RemoveAirdropEvent.fromBcs = function (data) { return RemoveAirdropEvent.fromFields(RemoveAirdropEvent.bcs.parse(data)); };
    RemoveAirdropEvent.prototype.toJSONField = function () {
        return {
            token: this.token.toJSONField(), key: this.key, log: (0, reified_1.fieldToJSON)("vector<u64>", this.log), bcsPadding: (0, reified_1.fieldToJSON)("vector<vector<u8>>", this.bcsPadding),
        };
    };
    RemoveAirdropEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RemoveAirdropEvent.fromJSONField = function (field) { return RemoveAirdropEvent.reified().new({ token: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.token), key: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.key), log: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.log), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector("u8")), field.bcsPadding) }); };
    RemoveAirdropEvent.fromJSON = function (json) {
        if (json.$typeName !== RemoveAirdropEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RemoveAirdropEvent.fromJSONField(json);
    };
    RemoveAirdropEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRemoveAirdropEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RemoveAirdropEvent object"));
    } return RemoveAirdropEvent.fromFieldsWithTypes(content); };
    RemoveAirdropEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RemoveAirdropEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRemoveAirdropEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RemoveAirdropEvent object"));
                        }
                        return [2 /*return*/, RemoveAirdropEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RemoveAirdropEvent.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::RemoveAirdropEvent";
    RemoveAirdropEvent.$numTypeParams = 0;
    return RemoveAirdropEvent;
}());
exports.RemoveAirdropEvent = RemoveAirdropEvent;
/* ============================== SetAirdropEvent =============================== */
function isSetAirdropEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::SetAirdropEvent"; }
var SetAirdropEvent = /** @class */ (function () {
    function SetAirdropEvent(typeArgs, fields) {
        this.$typeName = SetAirdropEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SetAirdropEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.token = fields.token;
        ;
        this.key = fields.key;
        ;
        this.log = fields.log;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    SetAirdropEvent.reified = function () {
        var _this = this;
        return { typeName: SetAirdropEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([SetAirdropEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return SetAirdropEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return SetAirdropEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return SetAirdropEvent.fromBcs(data); }, bcs: SetAirdropEvent.bcs, fromJSONField: function (field) { return SetAirdropEvent.fromJSONField(field); }, fromJSON: function (json) { return SetAirdropEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return SetAirdropEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, SetAirdropEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new SetAirdropEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(SetAirdropEvent, "r", {
        get: function () { return SetAirdropEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    SetAirdropEvent.phantom = function () { return (0, reified_1.phantom)(SetAirdropEvent.reified()); };
    Object.defineProperty(SetAirdropEvent, "p", {
        get: function () { return SetAirdropEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SetAirdropEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("SetAirdropEvent", {
                token: structs_2.TypeName.bcs, key: structs_1.String.bcs, log: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.vector(bcs_1.bcs.u8()))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    SetAirdropEvent.fromFields = function (fields) { return SetAirdropEvent.reified().new({ token: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.token), key: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.key), log: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.log), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector(reified.vector("u8")), fields.bcs_padding) }); };
    SetAirdropEvent.fromFieldsWithTypes = function (item) {
        if (!isSetAirdropEvent(item.type)) {
            throw new Error("not a SetAirdropEvent type");
        }
        return SetAirdropEvent.reified().new({ token: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.token), key: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.key), log: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.log), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector("u8")), item.fields.bcs_padding) });
    };
    SetAirdropEvent.fromBcs = function (data) { return SetAirdropEvent.fromFields(SetAirdropEvent.bcs.parse(data)); };
    SetAirdropEvent.prototype.toJSONField = function () {
        return {
            token: this.token.toJSONField(), key: this.key, log: (0, reified_1.fieldToJSON)("vector<u64>", this.log), bcsPadding: (0, reified_1.fieldToJSON)("vector<vector<u8>>", this.bcsPadding),
        };
    };
    SetAirdropEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    SetAirdropEvent.fromJSONField = function (field) { return SetAirdropEvent.reified().new({ token: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.token), key: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.key), log: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.log), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector("u8")), field.bcsPadding) }); };
    SetAirdropEvent.fromJSON = function (json) {
        if (json.$typeName !== SetAirdropEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SetAirdropEvent.fromJSONField(json);
    };
    SetAirdropEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSetAirdropEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a SetAirdropEvent object"));
    } return SetAirdropEvent.fromFieldsWithTypes(content); };
    SetAirdropEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching SetAirdropEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSetAirdropEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a SetAirdropEvent object"));
                        }
                        return [2 /*return*/, SetAirdropEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    SetAirdropEvent.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::SetAirdropEvent";
    SetAirdropEvent.$numTypeParams = 0;
    return SetAirdropEvent;
}());
exports.SetAirdropEvent = SetAirdropEvent;
/* ============================== TypusAirdropRegistry =============================== */
function isTypusAirdropRegistry(type) { type = (0, util_1.compressSuiType)(type); return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::TypusAirdropRegistry"; }
var TypusAirdropRegistry = /** @class */ (function () {
    function TypusAirdropRegistry(typeArgs, fields) {
        this.$typeName = TypusAirdropRegistry.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TypusAirdropRegistry.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    TypusAirdropRegistry.reified = function () {
        var _this = this;
        return { typeName: TypusAirdropRegistry.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TypusAirdropRegistry.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return TypusAirdropRegistry.fromFields(fields); }, fromFieldsWithTypes: function (item) { return TypusAirdropRegistry.fromFieldsWithTypes(item); }, fromBcs: function (data) { return TypusAirdropRegistry.fromBcs(data); }, bcs: TypusAirdropRegistry.bcs, fromJSONField: function (field) { return TypusAirdropRegistry.fromJSONField(field); }, fromJSON: function (json) { return TypusAirdropRegistry.fromJSON(json); }, fromSuiParsedData: function (content) { return TypusAirdropRegistry.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TypusAirdropRegistry.fetch(client, id)];
            }); }); }, new: function (fields) { return new TypusAirdropRegistry([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TypusAirdropRegistry, "r", {
        get: function () { return TypusAirdropRegistry.reified(); },
        enumerable: false,
        configurable: true
    });
    TypusAirdropRegistry.phantom = function () { return (0, reified_1.phantom)(TypusAirdropRegistry.reified()); };
    Object.defineProperty(TypusAirdropRegistry, "p", {
        get: function () { return TypusAirdropRegistry.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TypusAirdropRegistry, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TypusAirdropRegistry", {
                id: structs_4.UID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TypusAirdropRegistry.fromFields = function (fields) { return TypusAirdropRegistry.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id) }); };
    TypusAirdropRegistry.fromFieldsWithTypes = function (item) {
        if (!isTypusAirdropRegistry(item.type)) {
            throw new Error("not a TypusAirdropRegistry type");
        }
        return TypusAirdropRegistry.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id) });
    };
    TypusAirdropRegistry.fromBcs = function (data) { return TypusAirdropRegistry.fromFields(TypusAirdropRegistry.bcs.parse(data)); };
    TypusAirdropRegistry.prototype.toJSONField = function () {
        return {
            id: this.id,
        };
    };
    TypusAirdropRegistry.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TypusAirdropRegistry.fromJSONField = function (field) { return TypusAirdropRegistry.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id) }); };
    TypusAirdropRegistry.fromJSON = function (json) {
        if (json.$typeName !== TypusAirdropRegistry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TypusAirdropRegistry.fromJSONField(json);
    };
    TypusAirdropRegistry.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTypusAirdropRegistry(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TypusAirdropRegistry object"));
    } return TypusAirdropRegistry.fromFieldsWithTypes(content); };
    TypusAirdropRegistry.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TypusAirdropRegistry object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTypusAirdropRegistry(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TypusAirdropRegistry object"));
                        }
                        return [2 /*return*/, TypusAirdropRegistry.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TypusAirdropRegistry.$typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::TypusAirdropRegistry";
    TypusAirdropRegistry.$numTypeParams = 0;
    return TypusAirdropRegistry;
}());
exports.TypusAirdropRegistry = TypusAirdropRegistry;
