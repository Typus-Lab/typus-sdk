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
exports.StakingTails = exports.NftExtension = exports.LevelUpEvent = exports.Registry = exports.ManagerCap = void 0;
exports.isManagerCap = isManagerCap;
exports.isRegistry = isRegistry;
exports.isLevelUpEvent = isLevelUpEvent;
exports.isNftExtension = isNftExtension;
exports.isStakingTails = isStakingTails;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x2/object/structs");
var structs_2 = require("../../0x2/table/structs");
var structs_3 = require("../typus-nft/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== ManagerCap =============================== */
function isManagerCap(type) { type = (0, util_1.compressSuiType)(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::ManagerCap"; }
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
                id: structs_1.UID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ManagerCap.fromFields = function (fields) { return ManagerCap.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id) }); };
    ManagerCap.fromFieldsWithTypes = function (item) {
        if (!isManagerCap(item.type)) {
            throw new Error("not a ManagerCap type");
        }
        return ManagerCap.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id) });
    };
    ManagerCap.fromBcs = function (data) { return ManagerCap.fromFields(ManagerCap.bcs.parse(data)); };
    ManagerCap.prototype.toJSONField = function () {
        return {
            id: this.id,
        };
    };
    ManagerCap.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ManagerCap.fromJSONField = function (field) { return ManagerCap.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id) }); };
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
    ManagerCap.$typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::ManagerCap";
    ManagerCap.$numTypeParams = 0;
    return ManagerCap;
}());
exports.ManagerCap = ManagerCap;
/* ============================== Registry =============================== */
function isRegistry(type) { type = (0, util_1.compressSuiType)(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::Registry"; }
var Registry = /** @class */ (function () {
    function Registry(typeArgs, fields) {
        this.$typeName = Registry.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Registry.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    Registry.reified = function () {
        var _this = this;
        return { typeName: Registry.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Registry.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Registry.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Registry.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Registry.fromBcs(data); }, bcs: Registry.bcs, fromJSONField: function (field) { return Registry.fromJSONField(field); }, fromJSON: function (json) { return Registry.fromJSON(json); }, fromSuiParsedData: function (content) { return Registry.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Registry.fetch(client, id)];
            }); }); }, new: function (fields) { return new Registry([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Registry, "r", {
        get: function () { return Registry.reified(); },
        enumerable: false,
        configurable: true
    });
    Registry.phantom = function () { return (0, reified_1.phantom)(Registry.reified()); };
    Object.defineProperty(Registry, "p", {
        get: function () { return Registry.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Registry, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Registry", {
                id: structs_1.UID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Registry.fromFields = function (fields) { return Registry.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id) }); };
    Registry.fromFieldsWithTypes = function (item) {
        if (!isRegistry(item.type)) {
            throw new Error("not a Registry type");
        }
        return Registry.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id) });
    };
    Registry.fromBcs = function (data) { return Registry.fromFields(Registry.bcs.parse(data)); };
    Registry.prototype.toJSONField = function () {
        return {
            id: this.id,
        };
    };
    Registry.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Registry.fromJSONField = function (field) { return Registry.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id) }); };
    Registry.fromJSON = function (json) {
        if (json.$typeName !== Registry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Registry.fromJSONField(json);
    };
    Registry.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRegistry(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Registry object"));
    } return Registry.fromFieldsWithTypes(content); };
    Registry.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Registry object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRegistry(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Registry object"));
                        }
                        return [2 /*return*/, Registry.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Registry.$typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::Registry";
    Registry.$numTypeParams = 0;
    return Registry;
}());
exports.Registry = Registry;
/* ============================== LevelUpEvent =============================== */
function isLevelUpEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::LevelUpEvent"; }
var LevelUpEvent = /** @class */ (function () {
    function LevelUpEvent(typeArgs, fields) {
        this.$typeName = LevelUpEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([LevelUpEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.nftId = fields.nftId;
        ;
        this.sender = fields.sender;
        ;
        this.number = fields.number;
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
                nft_id: structs_1.ID.bcs, sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), number: bcs_1.bcs.u64(), level: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    LevelUpEvent.fromFields = function (fields) { return LevelUpEvent.reified().new({ nftId: (0, reified_1.decodeFromFields)(structs_1.ID.reified(), fields.nft_id), sender: (0, reified_1.decodeFromFields)("address", fields.sender), number: (0, reified_1.decodeFromFields)("u64", fields.number), level: (0, reified_1.decodeFromFields)("u64", fields.level) }); };
    LevelUpEvent.fromFieldsWithTypes = function (item) {
        if (!isLevelUpEvent(item.type)) {
            throw new Error("not a LevelUpEvent type");
        }
        return LevelUpEvent.reified().new({ nftId: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.ID.reified(), item.fields.nft_id), sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender), number: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.number), level: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.level) });
    };
    LevelUpEvent.fromBcs = function (data) { return LevelUpEvent.fromFields(LevelUpEvent.bcs.parse(data)); };
    LevelUpEvent.prototype.toJSONField = function () {
        return {
            nftId: this.nftId, sender: this.sender, number: this.number.toString(), level: this.level.toString(),
        };
    };
    LevelUpEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    LevelUpEvent.fromJSONField = function (field) { return LevelUpEvent.reified().new({ nftId: (0, reified_1.decodeFromJSONField)(structs_1.ID.reified(), field.nftId), sender: (0, reified_1.decodeFromJSONField)("address", field.sender), number: (0, reified_1.decodeFromJSONField)("u64", field.number), level: (0, reified_1.decodeFromJSONField)("u64", field.level) }); };
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
    LevelUpEvent.$typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::LevelUpEvent";
    LevelUpEvent.$numTypeParams = 0;
    return LevelUpEvent;
}());
exports.LevelUpEvent = LevelUpEvent;
/* ============================== NftExtension =============================== */
function isNftExtension(type) { type = (0, util_1.compressSuiType)(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::NftExtension"; }
var NftExtension = /** @class */ (function () {
    function NftExtension(typeArgs, fields) {
        this.$typeName = NftExtension.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NftExtension.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.nftTable = fields.nftTable;
        ;
        this.nftManagerCap = fields.nftManagerCap;
    }
    NftExtension.reified = function () {
        var _this = this;
        return { typeName: NftExtension.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([NftExtension.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return NftExtension.fromFields(fields); }, fromFieldsWithTypes: function (item) { return NftExtension.fromFieldsWithTypes(item); }, fromBcs: function (data) { return NftExtension.fromBcs(data); }, bcs: NftExtension.bcs, fromJSONField: function (field) { return NftExtension.fromJSONField(field); }, fromJSON: function (json) { return NftExtension.fromJSON(json); }, fromSuiParsedData: function (content) { return NftExtension.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, NftExtension.fetch(client, id)];
            }); }); }, new: function (fields) { return new NftExtension([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(NftExtension, "r", {
        get: function () { return NftExtension.reified(); },
        enumerable: false,
        configurable: true
    });
    NftExtension.phantom = function () { return (0, reified_1.phantom)(NftExtension.reified()); };
    Object.defineProperty(NftExtension, "p", {
        get: function () { return NftExtension.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NftExtension, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("NftExtension", {
                nft_table: structs_2.Table.bcs, nft_manager_cap: structs_3.ManagerCap.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    NftExtension.fromFields = function (fields) { return NftExtension.reified().new({ nftTable: (0, reified_1.decodeFromFields)(structs_2.Table.reified(reified.phantom("address"), reified.phantom(StakingTails.reified())), fields.nft_table), nftManagerCap: (0, reified_1.decodeFromFields)(structs_3.ManagerCap.reified(), fields.nft_manager_cap) }); };
    NftExtension.fromFieldsWithTypes = function (item) {
        if (!isNftExtension(item.type)) {
            throw new Error("not a NftExtension type");
        }
        return NftExtension.reified().new({ nftTable: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Table.reified(reified.phantom("address"), reified.phantom(StakingTails.reified())), item.fields.nft_table), nftManagerCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.ManagerCap.reified(), item.fields.nft_manager_cap) });
    };
    NftExtension.fromBcs = function (data) { return NftExtension.fromFields(NftExtension.bcs.parse(data)); };
    NftExtension.prototype.toJSONField = function () {
        return {
            nftTable: this.nftTable.toJSONField(), nftManagerCap: this.nftManagerCap.toJSONField(),
        };
    };
    NftExtension.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    NftExtension.fromJSONField = function (field) { return NftExtension.reified().new({ nftTable: (0, reified_1.decodeFromJSONField)(structs_2.Table.reified(reified.phantom("address"), reified.phantom(StakingTails.reified())), field.nftTable), nftManagerCap: (0, reified_1.decodeFromJSONField)(structs_3.ManagerCap.reified(), field.nftManagerCap) }); };
    NftExtension.fromJSON = function (json) {
        if (json.$typeName !== NftExtension.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NftExtension.fromJSONField(json);
    };
    NftExtension.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNftExtension(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a NftExtension object"));
    } return NftExtension.fromFieldsWithTypes(content); };
    NftExtension.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching NftExtension object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNftExtension(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a NftExtension object"));
                        }
                        return [2 /*return*/, NftExtension.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    NftExtension.$typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::NftExtension";
    NftExtension.$numTypeParams = 0;
    return NftExtension;
}());
exports.NftExtension = NftExtension;
/* ============================== StakingTails =============================== */
function isStakingTails(type) { type = (0, util_1.compressSuiType)(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::StakingTails"; }
var StakingTails = /** @class */ (function () {
    function StakingTails(typeArgs, fields) {
        this.$typeName = StakingTails.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([StakingTails.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.nft = fields.nft;
        ;
        this.snapshotMs = fields.snapshotMs;
        ;
        this.updatingUrl = fields.updatingUrl;
    }
    StakingTails.reified = function () {
        var _this = this;
        return { typeName: StakingTails.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([StakingTails.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return StakingTails.fromFields(fields); }, fromFieldsWithTypes: function (item) { return StakingTails.fromFieldsWithTypes(item); }, fromBcs: function (data) { return StakingTails.fromBcs(data); }, bcs: StakingTails.bcs, fromJSONField: function (field) { return StakingTails.fromJSONField(field); }, fromJSON: function (json) { return StakingTails.fromJSON(json); }, fromSuiParsedData: function (content) { return StakingTails.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, StakingTails.fetch(client, id)];
            }); }); }, new: function (fields) { return new StakingTails([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(StakingTails, "r", {
        get: function () { return StakingTails.reified(); },
        enumerable: false,
        configurable: true
    });
    StakingTails.phantom = function () { return (0, reified_1.phantom)(StakingTails.reified()); };
    Object.defineProperty(StakingTails, "p", {
        get: function () { return StakingTails.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StakingTails, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("StakingTails", {
                nft: structs_3.Tails.bcs, snapshot_ms: bcs_1.bcs.u64(), updating_url: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    StakingTails.fromFields = function (fields) { return StakingTails.reified().new({ nft: (0, reified_1.decodeFromFields)(structs_3.Tails.reified(), fields.nft), snapshotMs: (0, reified_1.decodeFromFields)("u64", fields.snapshot_ms), updatingUrl: (0, reified_1.decodeFromFields)("bool", fields.updating_url) }); };
    StakingTails.fromFieldsWithTypes = function (item) {
        if (!isStakingTails(item.type)) {
            throw new Error("not a StakingTails type");
        }
        return StakingTails.reified().new({ nft: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Tails.reified(), item.fields.nft), snapshotMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.snapshot_ms), updatingUrl: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.updating_url) });
    };
    StakingTails.fromBcs = function (data) { return StakingTails.fromFields(StakingTails.bcs.parse(data)); };
    StakingTails.prototype.toJSONField = function () {
        return {
            nft: this.nft.toJSONField(), snapshotMs: this.snapshotMs.toString(), updatingUrl: this.updatingUrl,
        };
    };
    StakingTails.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    StakingTails.fromJSONField = function (field) { return StakingTails.reified().new({ nft: (0, reified_1.decodeFromJSONField)(structs_3.Tails.reified(), field.nft), snapshotMs: (0, reified_1.decodeFromJSONField)("u64", field.snapshotMs), updatingUrl: (0, reified_1.decodeFromJSONField)("bool", field.updatingUrl) }); };
    StakingTails.fromJSON = function (json) {
        if (json.$typeName !== StakingTails.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StakingTails.fromJSONField(json);
    };
    StakingTails.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStakingTails(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a StakingTails object"));
    } return StakingTails.fromFieldsWithTypes(content); };
    StakingTails.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching StakingTails object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakingTails(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a StakingTails object"));
                        }
                        return [2 /*return*/, StakingTails.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    StakingTails.$typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::staking::StakingTails";
    StakingTails.$numTypeParams = 0;
    return StakingTails;
}());
exports.StakingTails = StakingTails;
