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
exports.Whitelist = exports.Tails = exports.TYPUS_NFT = exports.RoyaltyUpdateEvent = exports.Royalty = exports.Pool = exports.NewManagerCapEvent = exports.LevelUpEvent = exports.FirstDepositEvent = exports.FirstBidEvent = exports.ExpUpEvent = exports.MintEvent = exports.ManagerCap = void 0;
exports.isManagerCap = isManagerCap;
exports.isMintEvent = isMintEvent;
exports.isExpUpEvent = isExpUpEvent;
exports.isFirstBidEvent = isFirstBidEvent;
exports.isFirstDepositEvent = isFirstDepositEvent;
exports.isLevelUpEvent = isLevelUpEvent;
exports.isNewManagerCapEvent = isNewManagerCapEvent;
exports.isPool = isPool;
exports.isRoyalty = isRoyalty;
exports.isRoyaltyUpdateEvent = isRoyaltyUpdateEvent;
exports.isTYPUS_NFT = isTYPUS_NFT;
exports.isTails = isTails;
exports.isWhitelist = isWhitelist;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/string/structs");
var structs_2 = require("../../0x2/object/structs");
var structs_3 = require("../../0x2/transfer-policy/structs");
var structs_4 = require("../../0x2/url/structs");
var structs_5 = require("../../0x2/vec-map/structs");
var structs_6 = require("../table-vec/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== ManagerCap =============================== */
function isManagerCap(type) { type = (0, util_1.compressSuiType)(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::ManagerCap"; }
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
                id: structs_2.UID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ManagerCap.fromFields = function (fields) { return ManagerCap.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id) }); };
    ManagerCap.fromFieldsWithTypes = function (item) {
        if (!isManagerCap(item.type)) {
            throw new Error("not a ManagerCap type");
        }
        return ManagerCap.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id) });
    };
    ManagerCap.fromBcs = function (data) { return ManagerCap.fromFields(ManagerCap.bcs.parse(data)); };
    ManagerCap.prototype.toJSONField = function () {
        return {
            id: this.id,
        };
    };
    ManagerCap.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ManagerCap.fromJSONField = function (field) { return ManagerCap.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id) }); };
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
    ManagerCap.$typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::ManagerCap";
    ManagerCap.$numTypeParams = 0;
    return ManagerCap;
}());
exports.ManagerCap = ManagerCap;
/* ============================== MintEvent =============================== */
function isMintEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::MintEvent"; }
var MintEvent = /** @class */ (function () {
    function MintEvent(typeArgs, fields) {
        this.$typeName = MintEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([MintEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.name = fields.name;
        ;
        this.description = fields.description;
        ;
        this.number = fields.number;
        ;
        this.url = fields.url;
        ;
        this.attributes = fields.attributes;
        ;
        this.sender = fields.sender;
    }
    MintEvent.reified = function () {
        var _this = this;
        return { typeName: MintEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([MintEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return MintEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return MintEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return MintEvent.fromBcs(data); }, bcs: MintEvent.bcs, fromJSONField: function (field) { return MintEvent.fromJSONField(field); }, fromJSON: function (json) { return MintEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return MintEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, MintEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new MintEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(MintEvent, "r", {
        get: function () { return MintEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    MintEvent.phantom = function () { return (0, reified_1.phantom)(MintEvent.reified()); };
    Object.defineProperty(MintEvent, "p", {
        get: function () { return MintEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MintEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("MintEvent", {
                id: structs_2.ID.bcs, name: structs_1.String.bcs, description: structs_1.String.bcs, number: bcs_1.bcs.u64(), url: structs_4.Url.bcs, attributes: structs_5.VecMap.bcs(structs_1.String.bcs, structs_1.String.bcs), sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, })
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    MintEvent.fromFields = function (fields) { return MintEvent.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id), name: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.name), description: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.description), number: (0, reified_1.decodeFromFields)("u64", fields.number), url: (0, reified_1.decodeFromFields)(structs_4.Url.reified(), fields.url), attributes: (0, reified_1.decodeFromFields)(structs_5.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), fields.attributes), sender: (0, reified_1.decodeFromFields)("address", fields.sender) }); };
    MintEvent.fromFieldsWithTypes = function (item) {
        if (!isMintEvent(item.type)) {
            throw new Error("not a MintEvent type");
        }
        return MintEvent.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id), name: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.name), description: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.description), number: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.number), url: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Url.reified(), item.fields.url), attributes: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), item.fields.attributes), sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender) });
    };
    MintEvent.fromBcs = function (data) { return MintEvent.fromFields(MintEvent.bcs.parse(data)); };
    MintEvent.prototype.toJSONField = function () {
        return {
            id: this.id, name: this.name, description: this.description, number: this.number.toString(), url: this.url, attributes: this.attributes.toJSONField(), sender: this.sender,
        };
    };
    MintEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    MintEvent.fromJSONField = function (field) { return MintEvent.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id), name: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.name), description: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.description), number: (0, reified_1.decodeFromJSONField)("u64", field.number), url: (0, reified_1.decodeFromJSONField)(structs_4.Url.reified(), field.url), attributes: (0, reified_1.decodeFromJSONField)(structs_5.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), field.attributes), sender: (0, reified_1.decodeFromJSONField)("address", field.sender) }); };
    MintEvent.fromJSON = function (json) {
        if (json.$typeName !== MintEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MintEvent.fromJSONField(json);
    };
    MintEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMintEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a MintEvent object"));
    } return MintEvent.fromFieldsWithTypes(content); };
    MintEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching MintEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMintEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a MintEvent object"));
                        }
                        return [2 /*return*/, MintEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    MintEvent.$typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::MintEvent";
    MintEvent.$numTypeParams = 0;
    return MintEvent;
}());
exports.MintEvent = MintEvent;
/* ============================== ExpUpEvent =============================== */
function isExpUpEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x45d61e41640f8dc1c2e333789b5842adf508ceb9c98d7c1808092f9e2e45b615::typus_nft::ExpUpEvent"; }
var ExpUpEvent = /** @class */ (function () {
    function ExpUpEvent(typeArgs, fields) {
        this.$typeName = ExpUpEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ExpUpEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.nftId = fields.nftId;
        ;
        this.number = fields.number;
        ;
        this.expEarn = fields.expEarn;
    }
    ExpUpEvent.reified = function () {
        var _this = this;
        return { typeName: ExpUpEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ExpUpEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ExpUpEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ExpUpEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ExpUpEvent.fromBcs(data); }, bcs: ExpUpEvent.bcs, fromJSONField: function (field) { return ExpUpEvent.fromJSONField(field); }, fromJSON: function (json) { return ExpUpEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return ExpUpEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ExpUpEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new ExpUpEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ExpUpEvent, "r", {
        get: function () { return ExpUpEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    ExpUpEvent.phantom = function () { return (0, reified_1.phantom)(ExpUpEvent.reified()); };
    Object.defineProperty(ExpUpEvent, "p", {
        get: function () { return ExpUpEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExpUpEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ExpUpEvent", {
                nft_id: structs_2.ID.bcs, number: bcs_1.bcs.u64(), exp_earn: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ExpUpEvent.fromFields = function (fields) { return ExpUpEvent.reified().new({ nftId: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.nft_id), number: (0, reified_1.decodeFromFields)("u64", fields.number), expEarn: (0, reified_1.decodeFromFields)("u64", fields.exp_earn) }); };
    ExpUpEvent.fromFieldsWithTypes = function (item) {
        if (!isExpUpEvent(item.type)) {
            throw new Error("not a ExpUpEvent type");
        }
        return ExpUpEvent.reified().new({ nftId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.nft_id), number: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.number), expEarn: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.exp_earn) });
    };
    ExpUpEvent.fromBcs = function (data) { return ExpUpEvent.fromFields(ExpUpEvent.bcs.parse(data)); };
    ExpUpEvent.prototype.toJSONField = function () {
        return {
            nftId: this.nftId, number: this.number.toString(), expEarn: this.expEarn.toString(),
        };
    };
    ExpUpEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ExpUpEvent.fromJSONField = function (field) { return ExpUpEvent.reified().new({ nftId: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.nftId), number: (0, reified_1.decodeFromJSONField)("u64", field.number), expEarn: (0, reified_1.decodeFromJSONField)("u64", field.expEarn) }); };
    ExpUpEvent.fromJSON = function (json) {
        if (json.$typeName !== ExpUpEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ExpUpEvent.fromJSONField(json);
    };
    ExpUpEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isExpUpEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ExpUpEvent object"));
    } return ExpUpEvent.fromFieldsWithTypes(content); };
    ExpUpEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ExpUpEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isExpUpEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ExpUpEvent object"));
                        }
                        return [2 /*return*/, ExpUpEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ExpUpEvent.$typeName = "0x45d61e41640f8dc1c2e333789b5842adf508ceb9c98d7c1808092f9e2e45b615::typus_nft::ExpUpEvent";
    ExpUpEvent.$numTypeParams = 0;
    return ExpUpEvent;
}());
exports.ExpUpEvent = ExpUpEvent;
/* ============================== FirstBidEvent =============================== */
function isFirstBidEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::FirstBidEvent"; }
var FirstBidEvent = /** @class */ (function () {
    function FirstBidEvent(typeArgs, fields) {
        this.$typeName = FirstBidEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([FirstBidEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.nftId = fields.nftId;
        ;
        this.number = fields.number;
        ;
        this.expEarn = fields.expEarn;
    }
    FirstBidEvent.reified = function () {
        var _this = this;
        return { typeName: FirstBidEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([FirstBidEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return FirstBidEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return FirstBidEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return FirstBidEvent.fromBcs(data); }, bcs: FirstBidEvent.bcs, fromJSONField: function (field) { return FirstBidEvent.fromJSONField(field); }, fromJSON: function (json) { return FirstBidEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return FirstBidEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, FirstBidEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new FirstBidEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(FirstBidEvent, "r", {
        get: function () { return FirstBidEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    FirstBidEvent.phantom = function () { return (0, reified_1.phantom)(FirstBidEvent.reified()); };
    Object.defineProperty(FirstBidEvent, "p", {
        get: function () { return FirstBidEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirstBidEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("FirstBidEvent", {
                nft_id: structs_2.ID.bcs, number: bcs_1.bcs.u64(), exp_earn: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    FirstBidEvent.fromFields = function (fields) { return FirstBidEvent.reified().new({ nftId: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.nft_id), number: (0, reified_1.decodeFromFields)("u64", fields.number), expEarn: (0, reified_1.decodeFromFields)("u64", fields.exp_earn) }); };
    FirstBidEvent.fromFieldsWithTypes = function (item) {
        if (!isFirstBidEvent(item.type)) {
            throw new Error("not a FirstBidEvent type");
        }
        return FirstBidEvent.reified().new({ nftId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.nft_id), number: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.number), expEarn: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.exp_earn) });
    };
    FirstBidEvent.fromBcs = function (data) { return FirstBidEvent.fromFields(FirstBidEvent.bcs.parse(data)); };
    FirstBidEvent.prototype.toJSONField = function () {
        return {
            nftId: this.nftId, number: this.number.toString(), expEarn: this.expEarn.toString(),
        };
    };
    FirstBidEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    FirstBidEvent.fromJSONField = function (field) { return FirstBidEvent.reified().new({ nftId: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.nftId), number: (0, reified_1.decodeFromJSONField)("u64", field.number), expEarn: (0, reified_1.decodeFromJSONField)("u64", field.expEarn) }); };
    FirstBidEvent.fromJSON = function (json) {
        if (json.$typeName !== FirstBidEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FirstBidEvent.fromJSONField(json);
    };
    FirstBidEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFirstBidEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a FirstBidEvent object"));
    } return FirstBidEvent.fromFieldsWithTypes(content); };
    FirstBidEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching FirstBidEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFirstBidEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a FirstBidEvent object"));
                        }
                        return [2 /*return*/, FirstBidEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    FirstBidEvent.$typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::FirstBidEvent";
    FirstBidEvent.$numTypeParams = 0;
    return FirstBidEvent;
}());
exports.FirstBidEvent = FirstBidEvent;
/* ============================== FirstDepositEvent =============================== */
function isFirstDepositEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::FirstDepositEvent"; }
var FirstDepositEvent = /** @class */ (function () {
    function FirstDepositEvent(typeArgs, fields) {
        this.$typeName = FirstDepositEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([FirstDepositEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.nftId = fields.nftId;
        ;
        this.number = fields.number;
        ;
        this.expEarn = fields.expEarn;
    }
    FirstDepositEvent.reified = function () {
        var _this = this;
        return { typeName: FirstDepositEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([FirstDepositEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return FirstDepositEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return FirstDepositEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return FirstDepositEvent.fromBcs(data); }, bcs: FirstDepositEvent.bcs, fromJSONField: function (field) { return FirstDepositEvent.fromJSONField(field); }, fromJSON: function (json) { return FirstDepositEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return FirstDepositEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, FirstDepositEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new FirstDepositEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(FirstDepositEvent, "r", {
        get: function () { return FirstDepositEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    FirstDepositEvent.phantom = function () { return (0, reified_1.phantom)(FirstDepositEvent.reified()); };
    Object.defineProperty(FirstDepositEvent, "p", {
        get: function () { return FirstDepositEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirstDepositEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("FirstDepositEvent", {
                nft_id: structs_2.ID.bcs, number: bcs_1.bcs.u64(), exp_earn: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    FirstDepositEvent.fromFields = function (fields) { return FirstDepositEvent.reified().new({ nftId: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.nft_id), number: (0, reified_1.decodeFromFields)("u64", fields.number), expEarn: (0, reified_1.decodeFromFields)("u64", fields.exp_earn) }); };
    FirstDepositEvent.fromFieldsWithTypes = function (item) {
        if (!isFirstDepositEvent(item.type)) {
            throw new Error("not a FirstDepositEvent type");
        }
        return FirstDepositEvent.reified().new({ nftId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.nft_id), number: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.number), expEarn: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.exp_earn) });
    };
    FirstDepositEvent.fromBcs = function (data) { return FirstDepositEvent.fromFields(FirstDepositEvent.bcs.parse(data)); };
    FirstDepositEvent.prototype.toJSONField = function () {
        return {
            nftId: this.nftId, number: this.number.toString(), expEarn: this.expEarn.toString(),
        };
    };
    FirstDepositEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    FirstDepositEvent.fromJSONField = function (field) { return FirstDepositEvent.reified().new({ nftId: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.nftId), number: (0, reified_1.decodeFromJSONField)("u64", field.number), expEarn: (0, reified_1.decodeFromJSONField)("u64", field.expEarn) }); };
    FirstDepositEvent.fromJSON = function (json) {
        if (json.$typeName !== FirstDepositEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FirstDepositEvent.fromJSONField(json);
    };
    FirstDepositEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFirstDepositEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a FirstDepositEvent object"));
    } return FirstDepositEvent.fromFieldsWithTypes(content); };
    FirstDepositEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching FirstDepositEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFirstDepositEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a FirstDepositEvent object"));
                        }
                        return [2 /*return*/, FirstDepositEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    FirstDepositEvent.$typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::FirstDepositEvent";
    FirstDepositEvent.$numTypeParams = 0;
    return FirstDepositEvent;
}());
exports.FirstDepositEvent = FirstDepositEvent;
/* ============================== LevelUpEvent =============================== */
function isLevelUpEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::LevelUpEvent"; }
var LevelUpEvent = /** @class */ (function () {
    function LevelUpEvent(typeArgs, fields) {
        this.$typeName = LevelUpEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([LevelUpEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.nftId = fields.nftId;
        ;
        this.level = fields.level;
    }
    LevelUpEvent.reified = function () {
        var _this = this;
        return { typeName: LevelUpEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([LevelUpEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return LevelUpEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return LevelUpEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return LevelUpEvent.fromBcs(data); }, bcs: LevelUpEvent.bcs, fromJSONField: function (field) { return LevelUpEvent.fromJSONField(field); }, fromJSON: function (json) { return LevelUpEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return LevelUpEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, LevelUpEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new LevelUpEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(LevelUpEvent, "r", {
        get: function () { return LevelUpEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    LevelUpEvent.phantom = function () { return (0, reified_1.phantom)(LevelUpEvent.reified()); };
    Object.defineProperty(LevelUpEvent, "p", {
        get: function () { return LevelUpEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelUpEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("LevelUpEvent", {
                nft_id: structs_2.ID.bcs, level: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    LevelUpEvent.fromFields = function (fields) { return LevelUpEvent.reified().new({ nftId: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.nft_id), level: (0, reified_1.decodeFromFields)("u64", fields.level) }); };
    LevelUpEvent.fromFieldsWithTypes = function (item) {
        if (!isLevelUpEvent(item.type)) {
            throw new Error("not a LevelUpEvent type");
        }
        return LevelUpEvent.reified().new({ nftId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.nft_id), level: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.level) });
    };
    LevelUpEvent.fromBcs = function (data) { return LevelUpEvent.fromFields(LevelUpEvent.bcs.parse(data)); };
    LevelUpEvent.prototype.toJSONField = function () {
        return {
            nftId: this.nftId, level: this.level.toString(),
        };
    };
    LevelUpEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    LevelUpEvent.fromJSONField = function (field) { return LevelUpEvent.reified().new({ nftId: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.nftId), level: (0, reified_1.decodeFromJSONField)("u64", field.level) }); };
    LevelUpEvent.fromJSON = function (json) {
        if (json.$typeName !== LevelUpEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return LevelUpEvent.fromJSONField(json);
    };
    LevelUpEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLevelUpEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a LevelUpEvent object"));
    } return LevelUpEvent.fromFieldsWithTypes(content); };
    LevelUpEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching LevelUpEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLevelUpEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a LevelUpEvent object"));
                        }
                        return [2 /*return*/, LevelUpEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    LevelUpEvent.$typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::LevelUpEvent";
    LevelUpEvent.$numTypeParams = 0;
    return LevelUpEvent;
}());
exports.LevelUpEvent = LevelUpEvent;
/* ============================== NewManagerCapEvent =============================== */
function isNewManagerCapEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::NewManagerCapEvent"; }
var NewManagerCapEvent = /** @class */ (function () {
    function NewManagerCapEvent(typeArgs, fields) {
        this.$typeName = NewManagerCapEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NewManagerCapEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.sender = fields.sender;
    }
    NewManagerCapEvent.reified = function () {
        var _this = this;
        return { typeName: NewManagerCapEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([NewManagerCapEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return NewManagerCapEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return NewManagerCapEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return NewManagerCapEvent.fromBcs(data); }, bcs: NewManagerCapEvent.bcs, fromJSONField: function (field) { return NewManagerCapEvent.fromJSONField(field); }, fromJSON: function (json) { return NewManagerCapEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return NewManagerCapEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, NewManagerCapEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new NewManagerCapEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(NewManagerCapEvent, "r", {
        get: function () { return NewManagerCapEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    NewManagerCapEvent.phantom = function () { return (0, reified_1.phantom)(NewManagerCapEvent.reified()); };
    Object.defineProperty(NewManagerCapEvent, "p", {
        get: function () { return NewManagerCapEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewManagerCapEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("NewManagerCapEvent", {
                id: structs_2.ID.bcs, sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, })
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    NewManagerCapEvent.fromFields = function (fields) { return NewManagerCapEvent.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id), sender: (0, reified_1.decodeFromFields)("address", fields.sender) }); };
    NewManagerCapEvent.fromFieldsWithTypes = function (item) {
        if (!isNewManagerCapEvent(item.type)) {
            throw new Error("not a NewManagerCapEvent type");
        }
        return NewManagerCapEvent.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id), sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender) });
    };
    NewManagerCapEvent.fromBcs = function (data) { return NewManagerCapEvent.fromFields(NewManagerCapEvent.bcs.parse(data)); };
    NewManagerCapEvent.prototype.toJSONField = function () {
        return {
            id: this.id, sender: this.sender,
        };
    };
    NewManagerCapEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    NewManagerCapEvent.fromJSONField = function (field) { return NewManagerCapEvent.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id), sender: (0, reified_1.decodeFromJSONField)("address", field.sender) }); };
    NewManagerCapEvent.fromJSON = function (json) {
        if (json.$typeName !== NewManagerCapEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewManagerCapEvent.fromJSONField(json);
    };
    NewManagerCapEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewManagerCapEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a NewManagerCapEvent object"));
    } return NewManagerCapEvent.fromFieldsWithTypes(content); };
    NewManagerCapEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching NewManagerCapEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewManagerCapEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a NewManagerCapEvent object"));
                        }
                        return [2 /*return*/, NewManagerCapEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    NewManagerCapEvent.$typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::NewManagerCapEvent";
    NewManagerCapEvent.$numTypeParams = 0;
    return NewManagerCapEvent;
}());
exports.NewManagerCapEvent = NewManagerCapEvent;
/* ============================== Pool =============================== */
function isPool(type) { type = (0, util_1.compressSuiType)(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Pool"; }
var Pool = /** @class */ (function () {
    function Pool(typeArgs, fields) {
        this.$typeName = Pool.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Pool.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.tails = fields.tails;
        ;
        this.num = fields.num;
        ;
        this.isLive = fields.isLive;
        ;
        this.startMs = fields.startMs;
    }
    Pool.reified = function () {
        var _this = this;
        return { typeName: Pool.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Pool.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Pool.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Pool.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Pool.fromBcs(data); }, bcs: Pool.bcs, fromJSONField: function (field) { return Pool.fromJSONField(field); }, fromJSON: function (json) { return Pool.fromJSON(json); }, fromSuiParsedData: function (content) { return Pool.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Pool.fetch(client, id)];
            }); }); }, new: function (fields) { return new Pool([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Pool, "r", {
        get: function () { return Pool.reified(); },
        enumerable: false,
        configurable: true
    });
    Pool.phantom = function () { return (0, reified_1.phantom)(Pool.reified()); };
    Object.defineProperty(Pool, "p", {
        get: function () { return Pool.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pool, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Pool", {
                id: structs_2.UID.bcs, tails: structs_6.TableVec.bcs, num: bcs_1.bcs.u64(), is_live: bcs_1.bcs.bool(), start_ms: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Pool.fromFields = function (fields) { return Pool.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), tails: (0, reified_1.decodeFromFields)(structs_6.TableVec.reified(reified.phantom(Tails.reified())), fields.tails), num: (0, reified_1.decodeFromFields)("u64", fields.num), isLive: (0, reified_1.decodeFromFields)("bool", fields.is_live), startMs: (0, reified_1.decodeFromFields)("u64", fields.start_ms) }); };
    Pool.fromFieldsWithTypes = function (item) {
        if (!isPool(item.type)) {
            throw new Error("not a Pool type");
        }
        return Pool.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), tails: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.TableVec.reified(reified.phantom(Tails.reified())), item.fields.tails), num: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.num), isLive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_live), startMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_ms) });
    };
    Pool.fromBcs = function (data) { return Pool.fromFields(Pool.bcs.parse(data)); };
    Pool.prototype.toJSONField = function () {
        return {
            id: this.id, tails: this.tails.toJSONField(), num: this.num.toString(), isLive: this.isLive, startMs: this.startMs.toString(),
        };
    };
    Pool.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Pool.fromJSONField = function (field) { return Pool.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), tails: (0, reified_1.decodeFromJSONField)(structs_6.TableVec.reified(reified.phantom(Tails.reified())), field.tails), num: (0, reified_1.decodeFromJSONField)("u64", field.num), isLive: (0, reified_1.decodeFromJSONField)("bool", field.isLive), startMs: (0, reified_1.decodeFromJSONField)("u64", field.startMs) }); };
    Pool.fromJSON = function (json) {
        if (json.$typeName !== Pool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Pool.fromJSONField(json);
    };
    Pool.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPool(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Pool object"));
    } return Pool.fromFieldsWithTypes(content); };
    Pool.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Pool object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPool(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Pool object"));
                        }
                        return [2 /*return*/, Pool.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Pool.$typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Pool";
    Pool.$numTypeParams = 0;
    return Pool;
}());
exports.Pool = Pool;
/* ============================== Royalty =============================== */
function isRoyalty(type) { type = (0, util_1.compressSuiType)(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Royalty"; }
var Royalty = /** @class */ (function () {
    function Royalty(typeArgs, fields) {
        this.$typeName = Royalty.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Royalty.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.recipients = fields.recipients;
        ;
        this.policyCap = fields.policyCap;
    }
    Royalty.reified = function () {
        var _this = this;
        return { typeName: Royalty.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Royalty.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Royalty.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Royalty.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Royalty.fromBcs(data); }, bcs: Royalty.bcs, fromJSONField: function (field) { return Royalty.fromJSONField(field); }, fromJSON: function (json) { return Royalty.fromJSON(json); }, fromSuiParsedData: function (content) { return Royalty.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Royalty.fetch(client, id)];
            }); }); }, new: function (fields) { return new Royalty([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Royalty, "r", {
        get: function () { return Royalty.reified(); },
        enumerable: false,
        configurable: true
    });
    Royalty.phantom = function () { return (0, reified_1.phantom)(Royalty.reified()); };
    Object.defineProperty(Royalty, "p", {
        get: function () { return Royalty.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Royalty, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Royalty", {
                id: structs_2.UID.bcs, recipients: structs_5.VecMap.bcs(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), bcs_1.bcs.u64()), policy_cap: structs_3.TransferPolicyCap.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Royalty.fromFields = function (fields) { return Royalty.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), recipients: (0, reified_1.decodeFromFields)(structs_5.VecMap.reified("address", "u64"), fields.recipients), policyCap: (0, reified_1.decodeFromFields)(structs_3.TransferPolicyCap.reified(reified.phantom(Tails.reified())), fields.policy_cap) }); };
    Royalty.fromFieldsWithTypes = function (item) {
        if (!isRoyalty(item.type)) {
            throw new Error("not a Royalty type");
        }
        return Royalty.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), recipients: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.VecMap.reified("address", "u64"), item.fields.recipients), policyCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TransferPolicyCap.reified(reified.phantom(Tails.reified())), item.fields.policy_cap) });
    };
    Royalty.fromBcs = function (data) { return Royalty.fromFields(Royalty.bcs.parse(data)); };
    Royalty.prototype.toJSONField = function () {
        return {
            id: this.id, recipients: this.recipients.toJSONField(), policyCap: this.policyCap.toJSONField(),
        };
    };
    Royalty.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Royalty.fromJSONField = function (field) { return Royalty.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), recipients: (0, reified_1.decodeFromJSONField)(structs_5.VecMap.reified("address", "u64"), field.recipients), policyCap: (0, reified_1.decodeFromJSONField)(structs_3.TransferPolicyCap.reified(reified.phantom(Tails.reified())), field.policyCap) }); };
    Royalty.fromJSON = function (json) {
        if (json.$typeName !== Royalty.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Royalty.fromJSONField(json);
    };
    Royalty.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRoyalty(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Royalty object"));
    } return Royalty.fromFieldsWithTypes(content); };
    Royalty.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Royalty object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRoyalty(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Royalty object"));
                        }
                        return [2 /*return*/, Royalty.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Royalty.$typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Royalty";
    Royalty.$numTypeParams = 0;
    return Royalty;
}());
exports.Royalty = Royalty;
/* ============================== RoyaltyUpdateEvent =============================== */
function isRoyaltyUpdateEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::RoyaltyUpdateEvent"; }
var RoyaltyUpdateEvent = /** @class */ (function () {
    function RoyaltyUpdateEvent(typeArgs, fields) {
        this.$typeName = RoyaltyUpdateEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RoyaltyUpdateEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        ;
        this.recipients = fields.recipients;
    }
    RoyaltyUpdateEvent.reified = function () {
        var _this = this;
        return { typeName: RoyaltyUpdateEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RoyaltyUpdateEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RoyaltyUpdateEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RoyaltyUpdateEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RoyaltyUpdateEvent.fromBcs(data); }, bcs: RoyaltyUpdateEvent.bcs, fromJSONField: function (field) { return RoyaltyUpdateEvent.fromJSONField(field); }, fromJSON: function (json) { return RoyaltyUpdateEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return RoyaltyUpdateEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RoyaltyUpdateEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new RoyaltyUpdateEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RoyaltyUpdateEvent, "r", {
        get: function () { return RoyaltyUpdateEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    RoyaltyUpdateEvent.phantom = function () { return (0, reified_1.phantom)(RoyaltyUpdateEvent.reified()); };
    Object.defineProperty(RoyaltyUpdateEvent, "p", {
        get: function () { return RoyaltyUpdateEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RoyaltyUpdateEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RoyaltyUpdateEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), recipients: structs_5.VecMap.bcs(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RoyaltyUpdateEvent.fromFields = function (fields) { return RoyaltyUpdateEvent.reified().new({ sender: (0, reified_1.decodeFromFields)("address", fields.sender), recipients: (0, reified_1.decodeFromFields)(structs_5.VecMap.reified("address", "u64"), fields.recipients) }); };
    RoyaltyUpdateEvent.fromFieldsWithTypes = function (item) {
        if (!isRoyaltyUpdateEvent(item.type)) {
            throw new Error("not a RoyaltyUpdateEvent type");
        }
        return RoyaltyUpdateEvent.reified().new({ sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender), recipients: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.VecMap.reified("address", "u64"), item.fields.recipients) });
    };
    RoyaltyUpdateEvent.fromBcs = function (data) { return RoyaltyUpdateEvent.fromFields(RoyaltyUpdateEvent.bcs.parse(data)); };
    RoyaltyUpdateEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender, recipients: this.recipients.toJSONField(),
        };
    };
    RoyaltyUpdateEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RoyaltyUpdateEvent.fromJSONField = function (field) { return RoyaltyUpdateEvent.reified().new({ sender: (0, reified_1.decodeFromJSONField)("address", field.sender), recipients: (0, reified_1.decodeFromJSONField)(structs_5.VecMap.reified("address", "u64"), field.recipients) }); };
    RoyaltyUpdateEvent.fromJSON = function (json) {
        if (json.$typeName !== RoyaltyUpdateEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RoyaltyUpdateEvent.fromJSONField(json);
    };
    RoyaltyUpdateEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRoyaltyUpdateEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RoyaltyUpdateEvent object"));
    } return RoyaltyUpdateEvent.fromFieldsWithTypes(content); };
    RoyaltyUpdateEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RoyaltyUpdateEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRoyaltyUpdateEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RoyaltyUpdateEvent object"));
                        }
                        return [2 /*return*/, RoyaltyUpdateEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RoyaltyUpdateEvent.$typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::RoyaltyUpdateEvent";
    RoyaltyUpdateEvent.$numTypeParams = 0;
    return RoyaltyUpdateEvent;
}());
exports.RoyaltyUpdateEvent = RoyaltyUpdateEvent;
/* ============================== TYPUS_NFT =============================== */
function isTYPUS_NFT(type) { type = (0, util_1.compressSuiType)(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::TYPUS_NFT"; }
var TYPUS_NFT = /** @class */ (function () {
    function TYPUS_NFT(typeArgs, fields) {
        this.$typeName = TYPUS_NFT.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TYPUS_NFT.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    TYPUS_NFT.reified = function () {
        var _this = this;
        return { typeName: TYPUS_NFT.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TYPUS_NFT.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return TYPUS_NFT.fromFields(fields); }, fromFieldsWithTypes: function (item) { return TYPUS_NFT.fromFieldsWithTypes(item); }, fromBcs: function (data) { return TYPUS_NFT.fromBcs(data); }, bcs: TYPUS_NFT.bcs, fromJSONField: function (field) { return TYPUS_NFT.fromJSONField(field); }, fromJSON: function (json) { return TYPUS_NFT.fromJSON(json); }, fromSuiParsedData: function (content) { return TYPUS_NFT.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TYPUS_NFT.fetch(client, id)];
            }); }); }, new: function (fields) { return new TYPUS_NFT([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TYPUS_NFT, "r", {
        get: function () { return TYPUS_NFT.reified(); },
        enumerable: false,
        configurable: true
    });
    TYPUS_NFT.phantom = function () { return (0, reified_1.phantom)(TYPUS_NFT.reified()); };
    Object.defineProperty(TYPUS_NFT, "p", {
        get: function () { return TYPUS_NFT.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TYPUS_NFT, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TYPUS_NFT", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TYPUS_NFT.fromFields = function (fields) { return TYPUS_NFT.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    TYPUS_NFT.fromFieldsWithTypes = function (item) {
        if (!isTYPUS_NFT(item.type)) {
            throw new Error("not a TYPUS_NFT type");
        }
        return TYPUS_NFT.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    TYPUS_NFT.fromBcs = function (data) { return TYPUS_NFT.fromFields(TYPUS_NFT.bcs.parse(data)); };
    TYPUS_NFT.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    TYPUS_NFT.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TYPUS_NFT.fromJSONField = function (field) { return TYPUS_NFT.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    TYPUS_NFT.fromJSON = function (json) {
        if (json.$typeName !== TYPUS_NFT.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TYPUS_NFT.fromJSONField(json);
    };
    TYPUS_NFT.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTYPUS_NFT(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TYPUS_NFT object"));
    } return TYPUS_NFT.fromFieldsWithTypes(content); };
    TYPUS_NFT.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TYPUS_NFT object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTYPUS_NFT(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TYPUS_NFT object"));
                        }
                        return [2 /*return*/, TYPUS_NFT.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TYPUS_NFT.$typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::TYPUS_NFT";
    TYPUS_NFT.$numTypeParams = 0;
    return TYPUS_NFT;
}());
exports.TYPUS_NFT = TYPUS_NFT;
/* ============================== Tails =============================== */
function isTails(type) { type = (0, util_1.compressSuiType)(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Tails"; }
var Tails = /** @class */ (function () {
    function Tails(typeArgs, fields) {
        this.$typeName = Tails.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Tails.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.name = fields.name;
        ;
        this.description = fields.description;
        ;
        this.number = fields.number;
        ;
        this.url = fields.url;
        ;
        this.attributes = fields.attributes;
        ;
        this.level = fields.level;
        ;
        this.exp = fields.exp;
        ;
        this.firstBid = fields.firstBid;
        ;
        this.firstDeposit = fields.firstDeposit;
        ;
        this.firstDepositNft = fields.firstDepositNft;
        ;
        this.u64Padding = fields.u64Padding;
    }
    Tails.reified = function () {
        var _this = this;
        return { typeName: Tails.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Tails.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Tails.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Tails.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Tails.fromBcs(data); }, bcs: Tails.bcs, fromJSONField: function (field) { return Tails.fromJSONField(field); }, fromJSON: function (json) { return Tails.fromJSON(json); }, fromSuiParsedData: function (content) { return Tails.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Tails.fetch(client, id)];
            }); }); }, new: function (fields) { return new Tails([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Tails, "r", {
        get: function () { return Tails.reified(); },
        enumerable: false,
        configurable: true
    });
    Tails.phantom = function () { return (0, reified_1.phantom)(Tails.reified()); };
    Object.defineProperty(Tails, "p", {
        get: function () { return Tails.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tails, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Tails", {
                id: structs_2.UID.bcs, name: structs_1.String.bcs, description: structs_1.String.bcs, number: bcs_1.bcs.u64(), url: structs_4.Url.bcs, attributes: structs_5.VecMap.bcs(structs_1.String.bcs, structs_1.String.bcs), level: bcs_1.bcs.u64(), exp: bcs_1.bcs.u64(), first_bid: bcs_1.bcs.bool(), first_deposit: bcs_1.bcs.bool(), first_deposit_nft: bcs_1.bcs.bool(), u64_padding: structs_5.VecMap.bcs(structs_1.String.bcs, bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Tails.fromFields = function (fields) { return Tails.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), name: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.name), description: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.description), number: (0, reified_1.decodeFromFields)("u64", fields.number), url: (0, reified_1.decodeFromFields)(structs_4.Url.reified(), fields.url), attributes: (0, reified_1.decodeFromFields)(structs_5.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), fields.attributes), level: (0, reified_1.decodeFromFields)("u64", fields.level), exp: (0, reified_1.decodeFromFields)("u64", fields.exp), firstBid: (0, reified_1.decodeFromFields)("bool", fields.first_bid), firstDeposit: (0, reified_1.decodeFromFields)("bool", fields.first_deposit), firstDepositNft: (0, reified_1.decodeFromFields)("bool", fields.first_deposit_nft), u64Padding: (0, reified_1.decodeFromFields)(structs_5.VecMap.reified(structs_1.String.reified(), "u64"), fields.u64_padding) }); };
    Tails.fromFieldsWithTypes = function (item) {
        if (!isTails(item.type)) {
            throw new Error("not a Tails type");
        }
        return Tails.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), name: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.name), description: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.description), number: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.number), url: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Url.reified(), item.fields.url), attributes: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), item.fields.attributes), level: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.level), exp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.exp), firstBid: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.first_bid), firstDeposit: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.first_deposit), firstDepositNft: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.first_deposit_nft), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.VecMap.reified(structs_1.String.reified(), "u64"), item.fields.u64_padding) });
    };
    Tails.fromBcs = function (data) { return Tails.fromFields(Tails.bcs.parse(data)); };
    Tails.prototype.toJSONField = function () {
        return {
            id: this.id, name: this.name, description: this.description, number: this.number.toString(), url: this.url, attributes: this.attributes.toJSONField(), level: this.level.toString(), exp: this.exp.toString(), firstBid: this.firstBid, firstDeposit: this.firstDeposit, firstDepositNft: this.firstDepositNft, u64Padding: this.u64Padding.toJSONField(),
        };
    };
    Tails.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Tails.fromJSONField = function (field) { return Tails.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), name: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.name), description: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.description), number: (0, reified_1.decodeFromJSONField)("u64", field.number), url: (0, reified_1.decodeFromJSONField)(structs_4.Url.reified(), field.url), attributes: (0, reified_1.decodeFromJSONField)(structs_5.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), field.attributes), level: (0, reified_1.decodeFromJSONField)("u64", field.level), exp: (0, reified_1.decodeFromJSONField)("u64", field.exp), firstBid: (0, reified_1.decodeFromJSONField)("bool", field.firstBid), firstDeposit: (0, reified_1.decodeFromJSONField)("bool", field.firstDeposit), firstDepositNft: (0, reified_1.decodeFromJSONField)("bool", field.firstDepositNft), u64Padding: (0, reified_1.decodeFromJSONField)(structs_5.VecMap.reified(structs_1.String.reified(), "u64"), field.u64Padding) }); };
    Tails.fromJSON = function (json) {
        if (json.$typeName !== Tails.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Tails.fromJSONField(json);
    };
    Tails.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTails(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Tails object"));
    } return Tails.fromFieldsWithTypes(content); };
    Tails.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Tails object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTails(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Tails object"));
                        }
                        return [2 /*return*/, Tails.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Tails.$typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Tails";
    Tails.$numTypeParams = 0;
    return Tails;
}());
exports.Tails = Tails;
/* ============================== Whitelist =============================== */
function isWhitelist(type) { type = (0, util_1.compressSuiType)(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Whitelist"; }
var Whitelist = /** @class */ (function () {
    function Whitelist(typeArgs, fields) {
        this.$typeName = Whitelist.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Whitelist.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.for = fields.for;
    }
    Whitelist.reified = function () {
        var _this = this;
        return { typeName: Whitelist.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Whitelist.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Whitelist.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Whitelist.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Whitelist.fromBcs(data); }, bcs: Whitelist.bcs, fromJSONField: function (field) { return Whitelist.fromJSONField(field); }, fromJSON: function (json) { return Whitelist.fromJSON(json); }, fromSuiParsedData: function (content) { return Whitelist.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Whitelist.fetch(client, id)];
            }); }); }, new: function (fields) { return new Whitelist([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Whitelist, "r", {
        get: function () { return Whitelist.reified(); },
        enumerable: false,
        configurable: true
    });
    Whitelist.phantom = function () { return (0, reified_1.phantom)(Whitelist.reified()); };
    Object.defineProperty(Whitelist, "p", {
        get: function () { return Whitelist.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Whitelist, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Whitelist", {
                id: structs_2.UID.bcs, for: structs_2.ID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Whitelist.fromFields = function (fields) { return Whitelist.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), for: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.for) }); };
    Whitelist.fromFieldsWithTypes = function (item) {
        if (!isWhitelist(item.type)) {
            throw new Error("not a Whitelist type");
        }
        return Whitelist.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), for: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.for) });
    };
    Whitelist.fromBcs = function (data) { return Whitelist.fromFields(Whitelist.bcs.parse(data)); };
    Whitelist.prototype.toJSONField = function () {
        return {
            id: this.id, for: this.for,
        };
    };
    Whitelist.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Whitelist.fromJSONField = function (field) { return Whitelist.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), for: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.for) }); };
    Whitelist.fromJSON = function (json) {
        if (json.$typeName !== Whitelist.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Whitelist.fromJSONField(json);
    };
    Whitelist.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isWhitelist(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Whitelist object"));
    } return Whitelist.fromFieldsWithTypes(content); };
    Whitelist.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Whitelist object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isWhitelist(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Whitelist object"));
                        }
                        return [2 /*return*/, Whitelist.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Whitelist.$typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Whitelist";
    Whitelist.$numTypeParams = 0;
    return Whitelist;
}());
exports.Whitelist = Whitelist;
