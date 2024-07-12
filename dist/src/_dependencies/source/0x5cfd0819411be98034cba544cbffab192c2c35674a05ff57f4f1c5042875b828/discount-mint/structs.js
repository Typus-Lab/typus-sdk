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
exports.MintRequestEvent = exports.MintRequest = exports.DiscountEventV3 = exports.DiscountEventV2 = exports.DiscountEvent = exports.Pool = exports.ManagerCap = void 0;
exports.isManagerCap = isManagerCap;
exports.isPool = isPool;
exports.isDiscountEvent = isDiscountEvent;
exports.isDiscountEventV2 = isDiscountEventV2;
exports.isDiscountEventV3 = isDiscountEventV3;
exports.isMintRequest = isMintRequest;
exports.isMintRequestEvent = isMintRequestEvent;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x2/balance/structs");
var structs_2 = require("../../0x2/coin/structs");
var structs_3 = require("../../0x2/object/structs");
var structs_4 = require("../../0x2/sui/structs");
var structs_5 = require("../../0x2/table-vec/structs");
var structs_6 = require("../typus-nft/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== ManagerCap =============================== */
function isManagerCap(type) { type = (0, util_1.compressSuiType)(type); return type === "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::ManagerCap"; }
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
                id: structs_3.UID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ManagerCap.fromFields = function (fields) { return ManagerCap.reified().new({ id: (0, reified_1.decodeFromFields)(structs_3.UID.reified(), fields.id) }); };
    ManagerCap.fromFieldsWithTypes = function (item) {
        if (!isManagerCap(item.type)) {
            throw new Error("not a ManagerCap type");
        }
        return ManagerCap.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.UID.reified(), item.fields.id) });
    };
    ManagerCap.fromBcs = function (data) { return ManagerCap.fromFields(ManagerCap.bcs.parse(data)); };
    ManagerCap.prototype.toJSONField = function () {
        return {
            id: this.id,
        };
    };
    ManagerCap.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ManagerCap.fromJSONField = function (field) { return ManagerCap.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_3.UID.reified(), field.id) }); };
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
    ManagerCap.$typeName = "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::ManagerCap";
    ManagerCap.$numTypeParams = 0;
    return ManagerCap;
}());
exports.ManagerCap = ManagerCap;
/* ============================== Pool =============================== */
function isPool(type) { type = (0, util_1.compressSuiType)(type); return type === "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::Pool"; }
var Pool = /** @class */ (function () {
    function Pool(typeArgs, fields) {
        this.$typeName = Pool.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Pool.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.num = fields.num;
        ;
        this.price = fields.price;
        ;
        this.startMs = fields.startMs;
        ;
        this.endMs = fields.endMs;
        ;
        this.authority = fields.authority;
        ;
        this.publicKey = fields.publicKey;
        ;
        this.discountPcts = fields.discountPcts;
        ;
        this.isLive = fields.isLive;
        ;
        this.balance = fields.balance;
        ;
        this.tails = fields.tails;
        ;
        this.requests = fields.requests;
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
                id: structs_3.UID.bcs, num: bcs_1.bcs.u64(), price: bcs_1.bcs.u64(), start_ms: bcs_1.bcs.u64(), end_ms: bcs_1.bcs.u64(), authority: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), public_key: bcs_1.bcs.vector(bcs_1.bcs.u8()), discount_pcts: bcs_1.bcs.vector(bcs_1.bcs.u64()), is_live: bcs_1.bcs.bool(), balance: structs_1.Balance.bcs, tails: structs_5.TableVec.bcs, requests: bcs_1.bcs.vector(MintRequest.bcs)
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Pool.fromFields = function (fields) { return Pool.reified().new({ id: (0, reified_1.decodeFromFields)(structs_3.UID.reified(), fields.id), num: (0, reified_1.decodeFromFields)("u64", fields.num), price: (0, reified_1.decodeFromFields)("u64", fields.price), startMs: (0, reified_1.decodeFromFields)("u64", fields.start_ms), endMs: (0, reified_1.decodeFromFields)("u64", fields.end_ms), authority: (0, reified_1.decodeFromFields)("address", fields.authority), publicKey: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.public_key), discountPcts: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.discount_pcts), isLive: (0, reified_1.decodeFromFields)("bool", fields.is_live), balance: (0, reified_1.decodeFromFields)(structs_1.Balance.reified(reified.phantom(structs_4.SUI.reified())), fields.balance), tails: (0, reified_1.decodeFromFields)(structs_5.TableVec.reified(reified.phantom(structs_6.Tails.reified())), fields.tails), requests: (0, reified_1.decodeFromFields)(reified.vector(MintRequest.reified()), fields.requests) }); };
    Pool.fromFieldsWithTypes = function (item) {
        if (!isPool(item.type)) {
            throw new Error("not a Pool type");
        }
        return Pool.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.UID.reified(), item.fields.id), num: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.num), price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price), startMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_ms), endMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.end_ms), authority: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.authority), publicKey: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.public_key), discountPcts: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.discount_pcts), isLive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_live), balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Balance.reified(reified.phantom(structs_4.SUI.reified())), item.fields.balance), tails: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.TableVec.reified(reified.phantom(structs_6.Tails.reified())), item.fields.tails), requests: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(MintRequest.reified()), item.fields.requests) });
    };
    Pool.fromBcs = function (data) { return Pool.fromFields(Pool.bcs.parse(data)); };
    Pool.prototype.toJSONField = function () {
        return {
            id: this.id, num: this.num.toString(), price: this.price.toString(), startMs: this.startMs.toString(), endMs: this.endMs.toString(), authority: this.authority, publicKey: (0, reified_1.fieldToJSON)("vector<u8>", this.publicKey), discountPcts: (0, reified_1.fieldToJSON)("vector<u64>", this.discountPcts), isLive: this.isLive, balance: this.balance.toJSONField(), tails: this.tails.toJSONField(), requests: (0, reified_1.fieldToJSON)("vector<0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::MintRequest>", this.requests),
        };
    };
    Pool.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Pool.fromJSONField = function (field) { return Pool.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_3.UID.reified(), field.id), num: (0, reified_1.decodeFromJSONField)("u64", field.num), price: (0, reified_1.decodeFromJSONField)("u64", field.price), startMs: (0, reified_1.decodeFromJSONField)("u64", field.startMs), endMs: (0, reified_1.decodeFromJSONField)("u64", field.endMs), authority: (0, reified_1.decodeFromJSONField)("address", field.authority), publicKey: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.publicKey), discountPcts: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.discountPcts), isLive: (0, reified_1.decodeFromJSONField)("bool", field.isLive), balance: (0, reified_1.decodeFromJSONField)(structs_1.Balance.reified(reified.phantom(structs_4.SUI.reified())), field.balance), tails: (0, reified_1.decodeFromJSONField)(structs_5.TableVec.reified(reified.phantom(structs_6.Tails.reified())), field.tails), requests: (0, reified_1.decodeFromJSONField)(reified.vector(MintRequest.reified()), field.requests) }); };
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
    Pool.$typeName = "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::Pool";
    Pool.$numTypeParams = 0;
    return Pool;
}());
exports.Pool = Pool;
/* ============================== DiscountEvent =============================== */
function isDiscountEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::DiscountEvent"; }
var DiscountEvent = /** @class */ (function () {
    function DiscountEvent(typeArgs, fields) {
        this.$typeName = DiscountEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DiscountEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.price = fields.price;
        ;
        this.discountPct = fields.discountPct;
        ;
        this.discountPrice = fields.discountPrice;
    }
    DiscountEvent.reified = function () {
        var _this = this;
        return { typeName: DiscountEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DiscountEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return DiscountEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return DiscountEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return DiscountEvent.fromBcs(data); }, bcs: DiscountEvent.bcs, fromJSONField: function (field) { return DiscountEvent.fromJSONField(field); }, fromJSON: function (json) { return DiscountEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return DiscountEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DiscountEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new DiscountEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DiscountEvent, "r", {
        get: function () { return DiscountEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    DiscountEvent.phantom = function () { return (0, reified_1.phantom)(DiscountEvent.reified()); };
    Object.defineProperty(DiscountEvent, "p", {
        get: function () { return DiscountEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DiscountEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DiscountEvent", {
                price: bcs_1.bcs.u64(), discount_pct: bcs_1.bcs.u64(), discount_price: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DiscountEvent.fromFields = function (fields) { return DiscountEvent.reified().new({ price: (0, reified_1.decodeFromFields)("u64", fields.price), discountPct: (0, reified_1.decodeFromFields)("u64", fields.discount_pct), discountPrice: (0, reified_1.decodeFromFields)("u64", fields.discount_price) }); };
    DiscountEvent.fromFieldsWithTypes = function (item) {
        if (!isDiscountEvent(item.type)) {
            throw new Error("not a DiscountEvent type");
        }
        return DiscountEvent.reified().new({ price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price), discountPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount_pct), discountPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount_price) });
    };
    DiscountEvent.fromBcs = function (data) { return DiscountEvent.fromFields(DiscountEvent.bcs.parse(data)); };
    DiscountEvent.prototype.toJSONField = function () {
        return {
            price: this.price.toString(), discountPct: this.discountPct.toString(), discountPrice: this.discountPrice.toString(),
        };
    };
    DiscountEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DiscountEvent.fromJSONField = function (field) { return DiscountEvent.reified().new({ price: (0, reified_1.decodeFromJSONField)("u64", field.price), discountPct: (0, reified_1.decodeFromJSONField)("u64", field.discountPct), discountPrice: (0, reified_1.decodeFromJSONField)("u64", field.discountPrice) }); };
    DiscountEvent.fromJSON = function (json) {
        if (json.$typeName !== DiscountEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DiscountEvent.fromJSONField(json);
    };
    DiscountEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDiscountEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DiscountEvent object"));
    } return DiscountEvent.fromFieldsWithTypes(content); };
    DiscountEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DiscountEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDiscountEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DiscountEvent object"));
                        }
                        return [2 /*return*/, DiscountEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DiscountEvent.$typeName = "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::DiscountEvent";
    DiscountEvent.$numTypeParams = 0;
    return DiscountEvent;
}());
exports.DiscountEvent = DiscountEvent;
/* ============================== DiscountEventV2 =============================== */
function isDiscountEventV2(type) { type = (0, util_1.compressSuiType)(type); return type === "0x8a08d583d4cf41a80de2cdb752a4ec22811fc388907c0a07d039fa34d2489257::discount_mint::DiscountEventV2"; }
var DiscountEventV2 = /** @class */ (function () {
    function DiscountEventV2(typeArgs, fields) {
        this.$typeName = DiscountEventV2.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DiscountEventV2.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.pool = fields.pool;
        ;
        this.price = fields.price;
        ;
        this.discountPct = fields.discountPct;
        ;
        this.discountPrice = fields.discountPrice;
        ;
        this.user = fields.user;
        ;
        this.vrfInput = fields.vrfInput;
    }
    DiscountEventV2.reified = function () {
        var _this = this;
        return { typeName: DiscountEventV2.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DiscountEventV2.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return DiscountEventV2.fromFields(fields); }, fromFieldsWithTypes: function (item) { return DiscountEventV2.fromFieldsWithTypes(item); }, fromBcs: function (data) { return DiscountEventV2.fromBcs(data); }, bcs: DiscountEventV2.bcs, fromJSONField: function (field) { return DiscountEventV2.fromJSONField(field); }, fromJSON: function (json) { return DiscountEventV2.fromJSON(json); }, fromSuiParsedData: function (content) { return DiscountEventV2.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DiscountEventV2.fetch(client, id)];
            }); }); }, new: function (fields) { return new DiscountEventV2([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DiscountEventV2, "r", {
        get: function () { return DiscountEventV2.reified(); },
        enumerable: false,
        configurable: true
    });
    DiscountEventV2.phantom = function () { return (0, reified_1.phantom)(DiscountEventV2.reified()); };
    Object.defineProperty(DiscountEventV2, "p", {
        get: function () { return DiscountEventV2.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DiscountEventV2, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DiscountEventV2", {
                pool: structs_3.ID.bcs, price: bcs_1.bcs.u64(), discount_pct: bcs_1.bcs.u64(), discount_price: bcs_1.bcs.u64(), user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), vrf_input: bcs_1.bcs.vector(bcs_1.bcs.u8())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DiscountEventV2.fromFields = function (fields) { return DiscountEventV2.reified().new({ pool: (0, reified_1.decodeFromFields)(structs_3.ID.reified(), fields.pool), price: (0, reified_1.decodeFromFields)("u64", fields.price), discountPct: (0, reified_1.decodeFromFields)("u64", fields.discount_pct), discountPrice: (0, reified_1.decodeFromFields)("u64", fields.discount_price), user: (0, reified_1.decodeFromFields)("address", fields.user), vrfInput: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.vrf_input) }); };
    DiscountEventV2.fromFieldsWithTypes = function (item) {
        if (!isDiscountEventV2(item.type)) {
            throw new Error("not a DiscountEventV2 type");
        }
        return DiscountEventV2.reified().new({ pool: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.ID.reified(), item.fields.pool), price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price), discountPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount_pct), discountPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount_price), user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), vrfInput: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.vrf_input) });
    };
    DiscountEventV2.fromBcs = function (data) { return DiscountEventV2.fromFields(DiscountEventV2.bcs.parse(data)); };
    DiscountEventV2.prototype.toJSONField = function () {
        return {
            pool: this.pool, price: this.price.toString(), discountPct: this.discountPct.toString(), discountPrice: this.discountPrice.toString(), user: this.user, vrfInput: (0, reified_1.fieldToJSON)("vector<u8>", this.vrfInput),
        };
    };
    DiscountEventV2.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DiscountEventV2.fromJSONField = function (field) { return DiscountEventV2.reified().new({ pool: (0, reified_1.decodeFromJSONField)(structs_3.ID.reified(), field.pool), price: (0, reified_1.decodeFromJSONField)("u64", field.price), discountPct: (0, reified_1.decodeFromJSONField)("u64", field.discountPct), discountPrice: (0, reified_1.decodeFromJSONField)("u64", field.discountPrice), user: (0, reified_1.decodeFromJSONField)("address", field.user), vrfInput: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.vrfInput) }); };
    DiscountEventV2.fromJSON = function (json) {
        if (json.$typeName !== DiscountEventV2.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DiscountEventV2.fromJSONField(json);
    };
    DiscountEventV2.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDiscountEventV2(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DiscountEventV2 object"));
    } return DiscountEventV2.fromFieldsWithTypes(content); };
    DiscountEventV2.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DiscountEventV2 object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDiscountEventV2(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DiscountEventV2 object"));
                        }
                        return [2 /*return*/, DiscountEventV2.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DiscountEventV2.$typeName = "0x8a08d583d4cf41a80de2cdb752a4ec22811fc388907c0a07d039fa34d2489257::discount_mint::DiscountEventV2";
    DiscountEventV2.$numTypeParams = 0;
    return DiscountEventV2;
}());
exports.DiscountEventV2 = DiscountEventV2;
/* ============================== DiscountEventV3 =============================== */
function isDiscountEventV3(type) { type = (0, util_1.compressSuiType)(type); return type === "0xcfba36e150e43bc3362f9987c94d20131d463de8b554d64d1155f41417f36870::discount_mint::DiscountEventV3"; }
var DiscountEventV3 = /** @class */ (function () {
    function DiscountEventV3(typeArgs, fields) {
        this.$typeName = DiscountEventV3.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DiscountEventV3.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.pool = fields.pool;
        ;
        this.price = fields.price;
        ;
        this.discountPct = fields.discountPct;
        ;
        this.discountPrice = fields.discountPrice;
        ;
        this.user = fields.user;
        ;
        this.vrfInput = fields.vrfInput;
        ;
        this.level = fields.level;
    }
    DiscountEventV3.reified = function () {
        var _this = this;
        return { typeName: DiscountEventV3.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DiscountEventV3.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return DiscountEventV3.fromFields(fields); }, fromFieldsWithTypes: function (item) { return DiscountEventV3.fromFieldsWithTypes(item); }, fromBcs: function (data) { return DiscountEventV3.fromBcs(data); }, bcs: DiscountEventV3.bcs, fromJSONField: function (field) { return DiscountEventV3.fromJSONField(field); }, fromJSON: function (json) { return DiscountEventV3.fromJSON(json); }, fromSuiParsedData: function (content) { return DiscountEventV3.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DiscountEventV3.fetch(client, id)];
            }); }); }, new: function (fields) { return new DiscountEventV3([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DiscountEventV3, "r", {
        get: function () { return DiscountEventV3.reified(); },
        enumerable: false,
        configurable: true
    });
    DiscountEventV3.phantom = function () { return (0, reified_1.phantom)(DiscountEventV3.reified()); };
    Object.defineProperty(DiscountEventV3, "p", {
        get: function () { return DiscountEventV3.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DiscountEventV3, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DiscountEventV3", {
                pool: structs_3.ID.bcs, price: bcs_1.bcs.u64(), discount_pct: bcs_1.bcs.u64(), discount_price: bcs_1.bcs.u64(), user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), vrf_input: bcs_1.bcs.vector(bcs_1.bcs.u8()), level: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DiscountEventV3.fromFields = function (fields) { return DiscountEventV3.reified().new({ pool: (0, reified_1.decodeFromFields)(structs_3.ID.reified(), fields.pool), price: (0, reified_1.decodeFromFields)("u64", fields.price), discountPct: (0, reified_1.decodeFromFields)("u64", fields.discount_pct), discountPrice: (0, reified_1.decodeFromFields)("u64", fields.discount_price), user: (0, reified_1.decodeFromFields)("address", fields.user), vrfInput: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.vrf_input), level: (0, reified_1.decodeFromFields)("u64", fields.level) }); };
    DiscountEventV3.fromFieldsWithTypes = function (item) {
        if (!isDiscountEventV3(item.type)) {
            throw new Error("not a DiscountEventV3 type");
        }
        return DiscountEventV3.reified().new({ pool: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.ID.reified(), item.fields.pool), price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price), discountPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount_pct), discountPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount_price), user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), vrfInput: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.vrf_input), level: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.level) });
    };
    DiscountEventV3.fromBcs = function (data) { return DiscountEventV3.fromFields(DiscountEventV3.bcs.parse(data)); };
    DiscountEventV3.prototype.toJSONField = function () {
        return {
            pool: this.pool, price: this.price.toString(), discountPct: this.discountPct.toString(), discountPrice: this.discountPrice.toString(), user: this.user, vrfInput: (0, reified_1.fieldToJSON)("vector<u8>", this.vrfInput), level: this.level.toString(),
        };
    };
    DiscountEventV3.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DiscountEventV3.fromJSONField = function (field) { return DiscountEventV3.reified().new({ pool: (0, reified_1.decodeFromJSONField)(structs_3.ID.reified(), field.pool), price: (0, reified_1.decodeFromJSONField)("u64", field.price), discountPct: (0, reified_1.decodeFromJSONField)("u64", field.discountPct), discountPrice: (0, reified_1.decodeFromJSONField)("u64", field.discountPrice), user: (0, reified_1.decodeFromJSONField)("address", field.user), vrfInput: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.vrfInput), level: (0, reified_1.decodeFromJSONField)("u64", field.level) }); };
    DiscountEventV3.fromJSON = function (json) {
        if (json.$typeName !== DiscountEventV3.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DiscountEventV3.fromJSONField(json);
    };
    DiscountEventV3.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDiscountEventV3(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DiscountEventV3 object"));
    } return DiscountEventV3.fromFieldsWithTypes(content); };
    DiscountEventV3.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DiscountEventV3 object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDiscountEventV3(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DiscountEventV3 object"));
                        }
                        return [2 /*return*/, DiscountEventV3.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DiscountEventV3.$typeName = "0xcfba36e150e43bc3362f9987c94d20131d463de8b554d64d1155f41417f36870::discount_mint::DiscountEventV3";
    DiscountEventV3.$numTypeParams = 0;
    return DiscountEventV3;
}());
exports.DiscountEventV3 = DiscountEventV3;
/* ============================== MintRequest =============================== */
function isMintRequest(type) { type = (0, util_1.compressSuiType)(type); return type === "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::MintRequest"; }
var MintRequest = /** @class */ (function () {
    function MintRequest(typeArgs, fields) {
        this.$typeName = MintRequest.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([MintRequest.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        ;
        this.coin = fields.coin;
        ;
        this.vrfInput = fields.vrfInput;
    }
    MintRequest.reified = function () {
        var _this = this;
        return { typeName: MintRequest.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([MintRequest.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return MintRequest.fromFields(fields); }, fromFieldsWithTypes: function (item) { return MintRequest.fromFieldsWithTypes(item); }, fromBcs: function (data) { return MintRequest.fromBcs(data); }, bcs: MintRequest.bcs, fromJSONField: function (field) { return MintRequest.fromJSONField(field); }, fromJSON: function (json) { return MintRequest.fromJSON(json); }, fromSuiParsedData: function (content) { return MintRequest.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, MintRequest.fetch(client, id)];
            }); }); }, new: function (fields) { return new MintRequest([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(MintRequest, "r", {
        get: function () { return MintRequest.reified(); },
        enumerable: false,
        configurable: true
    });
    MintRequest.phantom = function () { return (0, reified_1.phantom)(MintRequest.reified()); };
    Object.defineProperty(MintRequest, "p", {
        get: function () { return MintRequest.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MintRequest, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("MintRequest", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), coin: structs_2.Coin.bcs, vrf_input: bcs_1.bcs.vector(bcs_1.bcs.u8())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    MintRequest.fromFields = function (fields) { return MintRequest.reified().new({ user: (0, reified_1.decodeFromFields)("address", fields.user), coin: (0, reified_1.decodeFromFields)(structs_2.Coin.reified(reified.phantom(structs_4.SUI.reified())), fields.coin), vrfInput: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.vrf_input) }); };
    MintRequest.fromFieldsWithTypes = function (item) {
        if (!isMintRequest(item.type)) {
            throw new Error("not a MintRequest type");
        }
        return MintRequest.reified().new({ user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), coin: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Coin.reified(reified.phantom(structs_4.SUI.reified())), item.fields.coin), vrfInput: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.vrf_input) });
    };
    MintRequest.fromBcs = function (data) { return MintRequest.fromFields(MintRequest.bcs.parse(data)); };
    MintRequest.prototype.toJSONField = function () {
        return {
            user: this.user, coin: this.coin.toJSONField(), vrfInput: (0, reified_1.fieldToJSON)("vector<u8>", this.vrfInput),
        };
    };
    MintRequest.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    MintRequest.fromJSONField = function (field) { return MintRequest.reified().new({ user: (0, reified_1.decodeFromJSONField)("address", field.user), coin: (0, reified_1.decodeFromJSONField)(structs_2.Coin.reified(reified.phantom(structs_4.SUI.reified())), field.coin), vrfInput: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.vrfInput) }); };
    MintRequest.fromJSON = function (json) {
        if (json.$typeName !== MintRequest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MintRequest.fromJSONField(json);
    };
    MintRequest.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMintRequest(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a MintRequest object"));
    } return MintRequest.fromFieldsWithTypes(content); };
    MintRequest.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching MintRequest object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMintRequest(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a MintRequest object"));
                        }
                        return [2 /*return*/, MintRequest.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    MintRequest.$typeName = "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::MintRequest";
    MintRequest.$numTypeParams = 0;
    return MintRequest;
}());
exports.MintRequest = MintRequest;
/* ============================== MintRequestEvent =============================== */
function isMintRequestEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x19f482f191bfc19afeb797391546571cd409ad0105a7b8181877387cbe1c8c07::discount_mint::MintRequestEvent"; }
var MintRequestEvent = /** @class */ (function () {
    function MintRequestEvent(typeArgs, fields) {
        this.$typeName = MintRequestEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([MintRequestEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        ;
        this.vrfInput = fields.vrfInput;
        ;
        this.remaining = fields.remaining;
        ;
        this.seed = fields.seed;
    }
    MintRequestEvent.reified = function () {
        var _this = this;
        return { typeName: MintRequestEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([MintRequestEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return MintRequestEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return MintRequestEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return MintRequestEvent.fromBcs(data); }, bcs: MintRequestEvent.bcs, fromJSONField: function (field) { return MintRequestEvent.fromJSONField(field); }, fromJSON: function (json) { return MintRequestEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return MintRequestEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, MintRequestEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new MintRequestEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(MintRequestEvent, "r", {
        get: function () { return MintRequestEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    MintRequestEvent.phantom = function () { return (0, reified_1.phantom)(MintRequestEvent.reified()); };
    Object.defineProperty(MintRequestEvent, "p", {
        get: function () { return MintRequestEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MintRequestEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("MintRequestEvent", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), vrf_input: bcs_1.bcs.vector(bcs_1.bcs.u8()), remaining: bcs_1.bcs.u64(), seed: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    MintRequestEvent.fromFields = function (fields) { return MintRequestEvent.reified().new({ user: (0, reified_1.decodeFromFields)("address", fields.user), vrfInput: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.vrf_input), remaining: (0, reified_1.decodeFromFields)("u64", fields.remaining), seed: (0, reified_1.decodeFromFields)("u64", fields.seed) }); };
    MintRequestEvent.fromFieldsWithTypes = function (item) {
        if (!isMintRequestEvent(item.type)) {
            throw new Error("not a MintRequestEvent type");
        }
        return MintRequestEvent.reified().new({ user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), vrfInput: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.vrf_input), remaining: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.remaining), seed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.seed) });
    };
    MintRequestEvent.fromBcs = function (data) { return MintRequestEvent.fromFields(MintRequestEvent.bcs.parse(data)); };
    MintRequestEvent.prototype.toJSONField = function () {
        return {
            user: this.user, vrfInput: (0, reified_1.fieldToJSON)("vector<u8>", this.vrfInput), remaining: this.remaining.toString(), seed: this.seed.toString(),
        };
    };
    MintRequestEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    MintRequestEvent.fromJSONField = function (field) { return MintRequestEvent.reified().new({ user: (0, reified_1.decodeFromJSONField)("address", field.user), vrfInput: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.vrfInput), remaining: (0, reified_1.decodeFromJSONField)("u64", field.remaining), seed: (0, reified_1.decodeFromJSONField)("u64", field.seed) }); };
    MintRequestEvent.fromJSON = function (json) {
        if (json.$typeName !== MintRequestEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MintRequestEvent.fromJSONField(json);
    };
    MintRequestEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMintRequestEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a MintRequestEvent object"));
    } return MintRequestEvent.fromFieldsWithTypes(content); };
    MintRequestEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching MintRequestEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMintRequestEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a MintRequestEvent object"));
                        }
                        return [2 /*return*/, MintRequestEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    MintRequestEvent.$typeName = "0x19f482f191bfc19afeb797391546571cd409ad0105a7b8181877387cbe1c8c07::discount_mint::MintRequestEvent";
    MintRequestEvent.$numTypeParams = 0;
    return MintRequestEvent;
}());
exports.MintRequestEvent = MintRequestEvent;
