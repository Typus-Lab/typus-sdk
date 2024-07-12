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
exports.UpdateUrlEvent = exports.UpdateDepositEvent = exports.UnstakeNftEvent = exports.TransferNftEvent = exports.StakeNftEvent = exports.SnapshotNftEvent = exports.ProfitSharingEvent = exports.ProfitSharing = exports.PartnerKey = exports.Partner = exports.DailyAttendEvent = exports.ClaimProfitSharingEventV2 = exports.ClaimProfitSharingEvent = exports.NftExtension = exports.LevelUpEvent = exports.WithdrawEvent = void 0;
exports.isWithdrawEvent = isWithdrawEvent;
exports.isLevelUpEvent = isLevelUpEvent;
exports.isNftExtension = isNftExtension;
exports.isClaimProfitSharingEvent = isClaimProfitSharingEvent;
exports.isClaimProfitSharingEventV2 = isClaimProfitSharingEventV2;
exports.isDailyAttendEvent = isDailyAttendEvent;
exports.isPartner = isPartner;
exports.isPartnerKey = isPartnerKey;
exports.isProfitSharing = isProfitSharing;
exports.isProfitSharingEvent = isProfitSharingEvent;
exports.isSnapshotNftEvent = isSnapshotNftEvent;
exports.isStakeNftEvent = isStakeNftEvent;
exports.isTransferNftEvent = isTransferNftEvent;
exports.isUnstakeNftEvent = isUnstakeNftEvent;
exports.isUpdateDepositEvent = isUpdateDepositEvent;
exports.isUpdateUrlEvent = isUpdateUrlEvent;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/string/structs");
var structs_2 = require("../../0x1/type-name/structs");
var structs_3 = require("../../0x2/balance/structs");
var structs_4 = require("../../0x2/object-table/structs");
var structs_5 = require("../../0x2/object/structs");
var structs_6 = require("../../0x2/sui/structs");
var structs_7 = require("../../0x2/transfer-policy/structs");
var structs_8 = require("../../0x2/vec-map/structs");
var structs_9 = require("../../0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828/typus-nft/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== WithdrawEvent =============================== */
function isWithdrawEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::WithdrawEvent"; }
var WithdrawEvent = /** @class */ (function () {
    function WithdrawEvent(typeArgs, fields) {
        this.$typeName = WithdrawEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([WithdrawEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        ;
        this.receiver = fields.receiver;
        ;
        this.amount = fields.amount;
    }
    WithdrawEvent.reified = function () {
        var _this = this;
        return { typeName: WithdrawEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([WithdrawEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return WithdrawEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return WithdrawEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return WithdrawEvent.fromBcs(data); }, bcs: WithdrawEvent.bcs, fromJSONField: function (field) { return WithdrawEvent.fromJSONField(field); }, fromJSON: function (json) { return WithdrawEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return WithdrawEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, WithdrawEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new WithdrawEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(WithdrawEvent, "r", {
        get: function () { return WithdrawEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    WithdrawEvent.phantom = function () { return (0, reified_1.phantom)(WithdrawEvent.reified()); };
    Object.defineProperty(WithdrawEvent, "p", {
        get: function () { return WithdrawEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WithdrawEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("WithdrawEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), receiver: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), amount: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    WithdrawEvent.fromFields = function (fields) { return WithdrawEvent.reified().new({ sender: (0, reified_1.decodeFromFields)("address", fields.sender), receiver: (0, reified_1.decodeFromFields)("address", fields.receiver), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); };
    WithdrawEvent.fromFieldsWithTypes = function (item) {
        if (!isWithdrawEvent(item.type)) {
            throw new Error("not a WithdrawEvent type");
        }
        return WithdrawEvent.reified().new({ sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender), receiver: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.receiver), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    };
    WithdrawEvent.fromBcs = function (data) { return WithdrawEvent.fromFields(WithdrawEvent.bcs.parse(data)); };
    WithdrawEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender, receiver: this.receiver, amount: this.amount.toString(),
        };
    };
    WithdrawEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    WithdrawEvent.fromJSONField = function (field) { return WithdrawEvent.reified().new({ sender: (0, reified_1.decodeFromJSONField)("address", field.sender), receiver: (0, reified_1.decodeFromJSONField)("address", field.receiver), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); };
    WithdrawEvent.fromJSON = function (json) {
        if (json.$typeName !== WithdrawEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return WithdrawEvent.fromJSONField(json);
    };
    WithdrawEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isWithdrawEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a WithdrawEvent object"));
    } return WithdrawEvent.fromFieldsWithTypes(content); };
    WithdrawEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching WithdrawEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isWithdrawEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a WithdrawEvent object"));
                        }
                        return [2 /*return*/, WithdrawEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    WithdrawEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::WithdrawEvent";
    WithdrawEvent.$numTypeParams = 0;
    return WithdrawEvent;
}());
exports.WithdrawEvent = WithdrawEvent;
/* ============================== LevelUpEvent =============================== */
function isLevelUpEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::LevelUpEvent"; }
var LevelUpEvent = /** @class */ (function () {
    function LevelUpEvent(typeArgs, fields) {
        this.$typeName = LevelUpEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([LevelUpEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.nftId = fields.nftId;
        ;
        this.number = fields.number;
        ;
        this.sender = fields.sender;
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
                nft_id: structs_5.ID.bcs, number: bcs_1.bcs.u64(), sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), level: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    LevelUpEvent.fromFields = function (fields) { return LevelUpEvent.reified().new({ nftId: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.nft_id), number: (0, reified_1.decodeFromFields)("u64", fields.number), sender: (0, reified_1.decodeFromFields)("address", fields.sender), level: (0, reified_1.decodeFromFields)("u64", fields.level) }); };
    LevelUpEvent.fromFieldsWithTypes = function (item) {
        if (!isLevelUpEvent(item.type)) {
            throw new Error("not a LevelUpEvent type");
        }
        return LevelUpEvent.reified().new({ nftId: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.nft_id), number: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.number), sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender), level: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.level) });
    };
    LevelUpEvent.fromBcs = function (data) { return LevelUpEvent.fromFields(LevelUpEvent.bcs.parse(data)); };
    LevelUpEvent.prototype.toJSONField = function () {
        return {
            nftId: this.nftId, number: this.number.toString(), sender: this.sender, level: this.level.toString(),
        };
    };
    LevelUpEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    LevelUpEvent.fromJSONField = function (field) { return LevelUpEvent.reified().new({ nftId: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.nftId), number: (0, reified_1.decodeFromJSONField)("u64", field.number), sender: (0, reified_1.decodeFromJSONField)("address", field.sender), level: (0, reified_1.decodeFromJSONField)("u64", field.level) }); };
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
    LevelUpEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::LevelUpEvent";
    LevelUpEvent.$numTypeParams = 0;
    return LevelUpEvent;
}());
exports.LevelUpEvent = LevelUpEvent;
/* ============================== NftExtension =============================== */
function isNftExtension(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::NftExtension"; }
var NftExtension = /** @class */ (function () {
    function NftExtension(typeArgs, fields) {
        this.$typeName = NftExtension.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NftExtension.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.nftTable = fields.nftTable;
        ;
        this.nftManagerCap = fields.nftManagerCap;
        ;
        this.policy = fields.policy;
        ;
        this.fee = fields.fee;
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
                id: structs_5.UID.bcs, nft_table: structs_4.ObjectTable.bcs, nft_manager_cap: structs_9.ManagerCap.bcs, policy: structs_7.TransferPolicy.bcs, fee: structs_3.Balance.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    NftExtension.fromFields = function (fields) { return NftExtension.reified().new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), nftTable: (0, reified_1.decodeFromFields)(structs_4.ObjectTable.reified(reified.phantom("address"), reified.phantom(structs_9.Tails.reified())), fields.nft_table), nftManagerCap: (0, reified_1.decodeFromFields)(structs_9.ManagerCap.reified(), fields.nft_manager_cap), policy: (0, reified_1.decodeFromFields)(structs_7.TransferPolicy.reified(reified.phantom(structs_9.Tails.reified())), fields.policy), fee: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(reified.phantom(structs_6.SUI.reified())), fields.fee) }); };
    NftExtension.fromFieldsWithTypes = function (item) {
        if (!isNftExtension(item.type)) {
            throw new Error("not a NftExtension type");
        }
        return NftExtension.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), nftTable: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.ObjectTable.reified(reified.phantom("address"), reified.phantom(structs_9.Tails.reified())), item.fields.nft_table), nftManagerCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_9.ManagerCap.reified(), item.fields.nft_manager_cap), policy: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.TransferPolicy.reified(reified.phantom(structs_9.Tails.reified())), item.fields.policy), fee: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(reified.phantom(structs_6.SUI.reified())), item.fields.fee) });
    };
    NftExtension.fromBcs = function (data) { return NftExtension.fromFields(NftExtension.bcs.parse(data)); };
    NftExtension.prototype.toJSONField = function () {
        return {
            id: this.id, nftTable: this.nftTable.toJSONField(), nftManagerCap: this.nftManagerCap.toJSONField(), policy: this.policy.toJSONField(), fee: this.fee.toJSONField(),
        };
    };
    NftExtension.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    NftExtension.fromJSONField = function (field) { return NftExtension.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), nftTable: (0, reified_1.decodeFromJSONField)(structs_4.ObjectTable.reified(reified.phantom("address"), reified.phantom(structs_9.Tails.reified())), field.nftTable), nftManagerCap: (0, reified_1.decodeFromJSONField)(structs_9.ManagerCap.reified(), field.nftManagerCap), policy: (0, reified_1.decodeFromJSONField)(structs_7.TransferPolicy.reified(reified.phantom(structs_9.Tails.reified())), field.policy), fee: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(reified.phantom(structs_6.SUI.reified())), field.fee) }); };
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
    NftExtension.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::NftExtension";
    NftExtension.$numTypeParams = 0;
    return NftExtension;
}());
exports.NftExtension = NftExtension;
/* ============================== ClaimProfitSharingEvent =============================== */
function isClaimProfitSharingEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ClaimProfitSharingEvent"; }
var ClaimProfitSharingEvent = /** @class */ (function () {
    function ClaimProfitSharingEvent(typeArgs, fields) {
        this.$typeName = ClaimProfitSharingEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ClaimProfitSharingEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.value = fields.value;
        ;
        this.token = fields.token;
        ;
        this.sender = fields.sender;
        ;
        this.nftId = fields.nftId;
        ;
        this.number = fields.number;
        ;
        this.level = fields.level;
    }
    ClaimProfitSharingEvent.reified = function () {
        var _this = this;
        return { typeName: ClaimProfitSharingEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ClaimProfitSharingEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ClaimProfitSharingEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ClaimProfitSharingEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ClaimProfitSharingEvent.fromBcs(data); }, bcs: ClaimProfitSharingEvent.bcs, fromJSONField: function (field) { return ClaimProfitSharingEvent.fromJSONField(field); }, fromJSON: function (json) { return ClaimProfitSharingEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return ClaimProfitSharingEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ClaimProfitSharingEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new ClaimProfitSharingEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ClaimProfitSharingEvent, "r", {
        get: function () { return ClaimProfitSharingEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    ClaimProfitSharingEvent.phantom = function () { return (0, reified_1.phantom)(ClaimProfitSharingEvent.reified()); };
    Object.defineProperty(ClaimProfitSharingEvent, "p", {
        get: function () { return ClaimProfitSharingEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClaimProfitSharingEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ClaimProfitSharingEvent", {
                value: bcs_1.bcs.u64(), token: structs_2.TypeName.bcs, sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), nft_id: structs_5.ID.bcs, number: bcs_1.bcs.u64(), level: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ClaimProfitSharingEvent.fromFields = function (fields) { return ClaimProfitSharingEvent.reified().new({ value: (0, reified_1.decodeFromFields)("u64", fields.value), token: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.token), sender: (0, reified_1.decodeFromFields)("address", fields.sender), nftId: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.nft_id), number: (0, reified_1.decodeFromFields)("u64", fields.number), level: (0, reified_1.decodeFromFields)("u64", fields.level) }); };
    ClaimProfitSharingEvent.fromFieldsWithTypes = function (item) {
        if (!isClaimProfitSharingEvent(item.type)) {
            throw new Error("not a ClaimProfitSharingEvent type");
        }
        return ClaimProfitSharingEvent.reified().new({ value: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.value), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.token), sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender), nftId: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.nft_id), number: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.number), level: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.level) });
    };
    ClaimProfitSharingEvent.fromBcs = function (data) { return ClaimProfitSharingEvent.fromFields(ClaimProfitSharingEvent.bcs.parse(data)); };
    ClaimProfitSharingEvent.prototype.toJSONField = function () {
        return {
            value: this.value.toString(), token: this.token.toJSONField(), sender: this.sender, nftId: this.nftId, number: this.number.toString(), level: this.level.toString(),
        };
    };
    ClaimProfitSharingEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ClaimProfitSharingEvent.fromJSONField = function (field) { return ClaimProfitSharingEvent.reified().new({ value: (0, reified_1.decodeFromJSONField)("u64", field.value), token: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.token), sender: (0, reified_1.decodeFromJSONField)("address", field.sender), nftId: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.nftId), number: (0, reified_1.decodeFromJSONField)("u64", field.number), level: (0, reified_1.decodeFromJSONField)("u64", field.level) }); };
    ClaimProfitSharingEvent.fromJSON = function (json) {
        if (json.$typeName !== ClaimProfitSharingEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ClaimProfitSharingEvent.fromJSONField(json);
    };
    ClaimProfitSharingEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isClaimProfitSharingEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ClaimProfitSharingEvent object"));
    } return ClaimProfitSharingEvent.fromFieldsWithTypes(content); };
    ClaimProfitSharingEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ClaimProfitSharingEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isClaimProfitSharingEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ClaimProfitSharingEvent object"));
                        }
                        return [2 /*return*/, ClaimProfitSharingEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ClaimProfitSharingEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ClaimProfitSharingEvent";
    ClaimProfitSharingEvent.$numTypeParams = 0;
    return ClaimProfitSharingEvent;
}());
exports.ClaimProfitSharingEvent = ClaimProfitSharingEvent;
/* ============================== ClaimProfitSharingEventV2 =============================== */
function isClaimProfitSharingEventV2(type) { type = (0, util_1.compressSuiType)(type); return type === "0x48b15aafeb26ade39d0c2a3b8c3635bfe8396084812b6fcaeb1104eac793b4a5::tails_staking::ClaimProfitSharingEventV2"; }
var ClaimProfitSharingEventV2 = /** @class */ (function () {
    function ClaimProfitSharingEventV2(typeArgs, fields) {
        this.$typeName = ClaimProfitSharingEventV2.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ClaimProfitSharingEventV2.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.value = fields.value;
        ;
        this.token = fields.token;
        ;
        this.sender = fields.sender;
        ;
        this.nftId = fields.nftId;
        ;
        this.number = fields.number;
        ;
        this.level = fields.level;
        ;
        this.name = fields.name;
    }
    ClaimProfitSharingEventV2.reified = function () {
        var _this = this;
        return { typeName: ClaimProfitSharingEventV2.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ClaimProfitSharingEventV2.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ClaimProfitSharingEventV2.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ClaimProfitSharingEventV2.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ClaimProfitSharingEventV2.fromBcs(data); }, bcs: ClaimProfitSharingEventV2.bcs, fromJSONField: function (field) { return ClaimProfitSharingEventV2.fromJSONField(field); }, fromJSON: function (json) { return ClaimProfitSharingEventV2.fromJSON(json); }, fromSuiParsedData: function (content) { return ClaimProfitSharingEventV2.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ClaimProfitSharingEventV2.fetch(client, id)];
            }); }); }, new: function (fields) { return new ClaimProfitSharingEventV2([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ClaimProfitSharingEventV2, "r", {
        get: function () { return ClaimProfitSharingEventV2.reified(); },
        enumerable: false,
        configurable: true
    });
    ClaimProfitSharingEventV2.phantom = function () { return (0, reified_1.phantom)(ClaimProfitSharingEventV2.reified()); };
    Object.defineProperty(ClaimProfitSharingEventV2, "p", {
        get: function () { return ClaimProfitSharingEventV2.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClaimProfitSharingEventV2, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ClaimProfitSharingEventV2", {
                value: bcs_1.bcs.u64(), token: structs_2.TypeName.bcs, sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), nft_id: structs_5.ID.bcs, number: bcs_1.bcs.u64(), level: bcs_1.bcs.u64(), name: structs_1.String.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ClaimProfitSharingEventV2.fromFields = function (fields) { return ClaimProfitSharingEventV2.reified().new({ value: (0, reified_1.decodeFromFields)("u64", fields.value), token: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.token), sender: (0, reified_1.decodeFromFields)("address", fields.sender), nftId: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.nft_id), number: (0, reified_1.decodeFromFields)("u64", fields.number), level: (0, reified_1.decodeFromFields)("u64", fields.level), name: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.name) }); };
    ClaimProfitSharingEventV2.fromFieldsWithTypes = function (item) {
        if (!isClaimProfitSharingEventV2(item.type)) {
            throw new Error("not a ClaimProfitSharingEventV2 type");
        }
        return ClaimProfitSharingEventV2.reified().new({ value: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.value), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.token), sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender), nftId: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.nft_id), number: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.number), level: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.level), name: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.name) });
    };
    ClaimProfitSharingEventV2.fromBcs = function (data) { return ClaimProfitSharingEventV2.fromFields(ClaimProfitSharingEventV2.bcs.parse(data)); };
    ClaimProfitSharingEventV2.prototype.toJSONField = function () {
        return {
            value: this.value.toString(), token: this.token.toJSONField(), sender: this.sender, nftId: this.nftId, number: this.number.toString(), level: this.level.toString(), name: this.name,
        };
    };
    ClaimProfitSharingEventV2.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ClaimProfitSharingEventV2.fromJSONField = function (field) { return ClaimProfitSharingEventV2.reified().new({ value: (0, reified_1.decodeFromJSONField)("u64", field.value), token: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.token), sender: (0, reified_1.decodeFromJSONField)("address", field.sender), nftId: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.nftId), number: (0, reified_1.decodeFromJSONField)("u64", field.number), level: (0, reified_1.decodeFromJSONField)("u64", field.level), name: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.name) }); };
    ClaimProfitSharingEventV2.fromJSON = function (json) {
        if (json.$typeName !== ClaimProfitSharingEventV2.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ClaimProfitSharingEventV2.fromJSONField(json);
    };
    ClaimProfitSharingEventV2.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isClaimProfitSharingEventV2(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ClaimProfitSharingEventV2 object"));
    } return ClaimProfitSharingEventV2.fromFieldsWithTypes(content); };
    ClaimProfitSharingEventV2.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ClaimProfitSharingEventV2 object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isClaimProfitSharingEventV2(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ClaimProfitSharingEventV2 object"));
                        }
                        return [2 /*return*/, ClaimProfitSharingEventV2.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ClaimProfitSharingEventV2.$typeName = "0x48b15aafeb26ade39d0c2a3b8c3635bfe8396084812b6fcaeb1104eac793b4a5::tails_staking::ClaimProfitSharingEventV2";
    ClaimProfitSharingEventV2.$numTypeParams = 0;
    return ClaimProfitSharingEventV2;
}());
exports.ClaimProfitSharingEventV2 = ClaimProfitSharingEventV2;
/* ============================== DailyAttendEvent =============================== */
function isDailyAttendEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::DailyAttendEvent"; }
var DailyAttendEvent = /** @class */ (function () {
    function DailyAttendEvent(typeArgs, fields) {
        this.$typeName = DailyAttendEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DailyAttendEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        ;
        this.nftId = fields.nftId;
        ;
        this.number = fields.number;
        ;
        this.tsMs = fields.tsMs;
        ;
        this.expEarn = fields.expEarn;
    }
    DailyAttendEvent.reified = function () {
        var _this = this;
        return { typeName: DailyAttendEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DailyAttendEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return DailyAttendEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return DailyAttendEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return DailyAttendEvent.fromBcs(data); }, bcs: DailyAttendEvent.bcs, fromJSONField: function (field) { return DailyAttendEvent.fromJSONField(field); }, fromJSON: function (json) { return DailyAttendEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return DailyAttendEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DailyAttendEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new DailyAttendEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DailyAttendEvent, "r", {
        get: function () { return DailyAttendEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    DailyAttendEvent.phantom = function () { return (0, reified_1.phantom)(DailyAttendEvent.reified()); };
    Object.defineProperty(DailyAttendEvent, "p", {
        get: function () { return DailyAttendEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DailyAttendEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DailyAttendEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), nft_id: structs_5.ID.bcs, number: bcs_1.bcs.u64(), ts_ms: bcs_1.bcs.u64(), exp_earn: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DailyAttendEvent.fromFields = function (fields) { return DailyAttendEvent.reified().new({ sender: (0, reified_1.decodeFromFields)("address", fields.sender), nftId: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.nft_id), number: (0, reified_1.decodeFromFields)("u64", fields.number), tsMs: (0, reified_1.decodeFromFields)("u64", fields.ts_ms), expEarn: (0, reified_1.decodeFromFields)("u64", fields.exp_earn) }); };
    DailyAttendEvent.fromFieldsWithTypes = function (item) {
        if (!isDailyAttendEvent(item.type)) {
            throw new Error("not a DailyAttendEvent type");
        }
        return DailyAttendEvent.reified().new({ sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender), nftId: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.nft_id), number: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.number), tsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.ts_ms), expEarn: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.exp_earn) });
    };
    DailyAttendEvent.fromBcs = function (data) { return DailyAttendEvent.fromFields(DailyAttendEvent.bcs.parse(data)); };
    DailyAttendEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender, nftId: this.nftId, number: this.number.toString(), tsMs: this.tsMs.toString(), expEarn: this.expEarn.toString(),
        };
    };
    DailyAttendEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DailyAttendEvent.fromJSONField = function (field) { return DailyAttendEvent.reified().new({ sender: (0, reified_1.decodeFromJSONField)("address", field.sender), nftId: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.nftId), number: (0, reified_1.decodeFromJSONField)("u64", field.number), tsMs: (0, reified_1.decodeFromJSONField)("u64", field.tsMs), expEarn: (0, reified_1.decodeFromJSONField)("u64", field.expEarn) }); };
    DailyAttendEvent.fromJSON = function (json) {
        if (json.$typeName !== DailyAttendEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DailyAttendEvent.fromJSONField(json);
    };
    DailyAttendEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDailyAttendEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DailyAttendEvent object"));
    } return DailyAttendEvent.fromFieldsWithTypes(content); };
    DailyAttendEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DailyAttendEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDailyAttendEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DailyAttendEvent object"));
                        }
                        return [2 /*return*/, DailyAttendEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DailyAttendEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::DailyAttendEvent";
    DailyAttendEvent.$numTypeParams = 0;
    return DailyAttendEvent;
}());
exports.DailyAttendEvent = DailyAttendEvent;
/* ============================== Partner =============================== */
function isPartner(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::Partner"; }
var Partner = /** @class */ (function () {
    function Partner(typeArgs, fields) {
        this.$typeName = Partner.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Partner.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.expAllocation = fields.expAllocation;
        ;
        this.partnerTraits = fields.partnerTraits;
    }
    Partner.reified = function () {
        var _this = this;
        return { typeName: Partner.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Partner.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Partner.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Partner.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Partner.fromBcs(data); }, bcs: Partner.bcs, fromJSONField: function (field) { return Partner.fromJSONField(field); }, fromJSON: function (json) { return Partner.fromJSON(json); }, fromSuiParsedData: function (content) { return Partner.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Partner.fetch(client, id)];
            }); }); }, new: function (fields) { return new Partner([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Partner, "r", {
        get: function () { return Partner.reified(); },
        enumerable: false,
        configurable: true
    });
    Partner.phantom = function () { return (0, reified_1.phantom)(Partner.reified()); };
    Object.defineProperty(Partner, "p", {
        get: function () { return Partner.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Partner, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Partner", {
                id: structs_5.UID.bcs, exp_allocation: bcs_1.bcs.u64(), partner_traits: structs_8.VecMap.bcs(structs_1.String.bcs, structs_1.String.bcs)
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Partner.fromFields = function (fields) { return Partner.reified().new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), expAllocation: (0, reified_1.decodeFromFields)("u64", fields.exp_allocation), partnerTraits: (0, reified_1.decodeFromFields)(structs_8.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), fields.partner_traits) }); };
    Partner.fromFieldsWithTypes = function (item) {
        if (!isPartner(item.type)) {
            throw new Error("not a Partner type");
        }
        return Partner.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), expAllocation: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.exp_allocation), partnerTraits: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), item.fields.partner_traits) });
    };
    Partner.fromBcs = function (data) { return Partner.fromFields(Partner.bcs.parse(data)); };
    Partner.prototype.toJSONField = function () {
        return {
            id: this.id, expAllocation: this.expAllocation.toString(), partnerTraits: this.partnerTraits.toJSONField(),
        };
    };
    Partner.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Partner.fromJSONField = function (field) { return Partner.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), expAllocation: (0, reified_1.decodeFromJSONField)("u64", field.expAllocation), partnerTraits: (0, reified_1.decodeFromJSONField)(structs_8.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), field.partnerTraits) }); };
    Partner.fromJSON = function (json) {
        if (json.$typeName !== Partner.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Partner.fromJSONField(json);
    };
    Partner.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPartner(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Partner object"));
    } return Partner.fromFieldsWithTypes(content); };
    Partner.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Partner object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPartner(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Partner object"));
                        }
                        return [2 /*return*/, Partner.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Partner.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::Partner";
    Partner.$numTypeParams = 0;
    return Partner;
}());
exports.Partner = Partner;
/* ============================== PartnerKey =============================== */
function isPartnerKey(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::PartnerKey"; }
var PartnerKey = /** @class */ (function () {
    function PartnerKey(typeArgs, fields) {
        this.$typeName = PartnerKey.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([PartnerKey.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.for = fields.for;
        ;
        this.partner = fields.partner;
    }
    PartnerKey.reified = function () {
        var _this = this;
        return { typeName: PartnerKey.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([PartnerKey.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return PartnerKey.fromFields(fields); }, fromFieldsWithTypes: function (item) { return PartnerKey.fromFieldsWithTypes(item); }, fromBcs: function (data) { return PartnerKey.fromBcs(data); }, bcs: PartnerKey.bcs, fromJSONField: function (field) { return PartnerKey.fromJSONField(field); }, fromJSON: function (json) { return PartnerKey.fromJSON(json); }, fromSuiParsedData: function (content) { return PartnerKey.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, PartnerKey.fetch(client, id)];
            }); }); }, new: function (fields) { return new PartnerKey([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(PartnerKey, "r", {
        get: function () { return PartnerKey.reified(); },
        enumerable: false,
        configurable: true
    });
    PartnerKey.phantom = function () { return (0, reified_1.phantom)(PartnerKey.reified()); };
    Object.defineProperty(PartnerKey, "p", {
        get: function () { return PartnerKey.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PartnerKey, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("PartnerKey", {
                id: structs_5.UID.bcs, for: structs_5.ID.bcs, partner: structs_1.String.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    PartnerKey.fromFields = function (fields) { return PartnerKey.reified().new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), for: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.for), partner: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.partner) }); };
    PartnerKey.fromFieldsWithTypes = function (item) {
        if (!isPartnerKey(item.type)) {
            throw new Error("not a PartnerKey type");
        }
        return PartnerKey.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), for: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.for), partner: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.partner) });
    };
    PartnerKey.fromBcs = function (data) { return PartnerKey.fromFields(PartnerKey.bcs.parse(data)); };
    PartnerKey.prototype.toJSONField = function () {
        return {
            id: this.id, for: this.for, partner: this.partner,
        };
    };
    PartnerKey.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    PartnerKey.fromJSONField = function (field) { return PartnerKey.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), for: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.for), partner: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.partner) }); };
    PartnerKey.fromJSON = function (json) {
        if (json.$typeName !== PartnerKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PartnerKey.fromJSONField(json);
    };
    PartnerKey.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPartnerKey(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a PartnerKey object"));
    } return PartnerKey.fromFieldsWithTypes(content); };
    PartnerKey.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching PartnerKey object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPartnerKey(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a PartnerKey object"));
                        }
                        return [2 /*return*/, PartnerKey.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    PartnerKey.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::PartnerKey";
    PartnerKey.$numTypeParams = 0;
    return PartnerKey;
}());
exports.PartnerKey = PartnerKey;
/* ============================== ProfitSharing =============================== */
function isProfitSharing(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharing<"); }
var ProfitSharing = /** @class */ (function () {
    function ProfitSharing(typeArgs, fields) {
        this.$typeName = ProfitSharing.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ProfitSharing.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.levelProfits = fields.levelProfits;
        ;
        this.levelUsers = fields.levelUsers;
        ;
        this.total = fields.total;
        ;
        this.remaining = fields.remaining;
        ;
        this.pool = fields.pool;
    }
    ProfitSharing.reified = function (TOKEN) {
        var _this = this;
        return { typeName: ProfitSharing.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ProfitSharing.$typeName], [(0, reified_1.extractType)(TOKEN)], false)), typeArgs: [(0, reified_1.extractType)(TOKEN)], reifiedTypeArgs: [TOKEN], fromFields: function (fields) { return ProfitSharing.fromFields(TOKEN, fields); }, fromFieldsWithTypes: function (item) { return ProfitSharing.fromFieldsWithTypes(TOKEN, item); }, fromBcs: function (data) { return ProfitSharing.fromBcs(TOKEN, data); }, bcs: ProfitSharing.bcs, fromJSONField: function (field) { return ProfitSharing.fromJSONField(TOKEN, field); }, fromJSON: function (json) { return ProfitSharing.fromJSON(TOKEN, json); }, fromSuiParsedData: function (content) { return ProfitSharing.fromSuiParsedData(TOKEN, content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ProfitSharing.fetch(client, TOKEN, id)];
            }); }); }, new: function (fields) { return new ProfitSharing([(0, reified_1.extractType)(TOKEN)], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ProfitSharing, "r", {
        get: function () { return ProfitSharing.reified; },
        enumerable: false,
        configurable: true
    });
    ProfitSharing.phantom = function (TOKEN) { return (0, reified_1.phantom)(ProfitSharing.reified(TOKEN)); };
    Object.defineProperty(ProfitSharing, "p", {
        get: function () { return ProfitSharing.phantom; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProfitSharing, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ProfitSharing", {
                level_profits: bcs_1.bcs.vector(bcs_1.bcs.u64()), level_users: bcs_1.bcs.vector(bcs_1.bcs.u64()), total: bcs_1.bcs.u64(), remaining: bcs_1.bcs.u64(), pool: structs_3.Balance.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ProfitSharing.fromFields = function (typeArg, fields) { return ProfitSharing.reified(typeArg).new({ levelProfits: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.level_profits), levelUsers: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.level_users), total: (0, reified_1.decodeFromFields)("u64", fields.total), remaining: (0, reified_1.decodeFromFields)("u64", fields.remaining), pool: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(typeArg), fields.pool) }); };
    ProfitSharing.fromFieldsWithTypes = function (typeArg, item) {
        if (!isProfitSharing(item.type)) {
            throw new Error("not a ProfitSharing type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return ProfitSharing.reified(typeArg).new({ levelProfits: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.level_profits), levelUsers: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.level_users), total: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total), remaining: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.remaining), pool: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(typeArg), item.fields.pool) });
    };
    ProfitSharing.fromBcs = function (typeArg, data) { return ProfitSharing.fromFields(typeArg, ProfitSharing.bcs.parse(data)); };
    ProfitSharing.prototype.toJSONField = function () {
        return {
            levelProfits: (0, reified_1.fieldToJSON)("vector<u64>", this.levelProfits), levelUsers: (0, reified_1.fieldToJSON)("vector<u64>", this.levelUsers), total: this.total.toString(), remaining: this.remaining.toString(), pool: this.pool.toJSONField(),
        };
    };
    ProfitSharing.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ProfitSharing.fromJSONField = function (typeArg, field) { return ProfitSharing.reified(typeArg).new({ levelProfits: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.levelProfits), levelUsers: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.levelUsers), total: (0, reified_1.decodeFromJSONField)("u64", field.total), remaining: (0, reified_1.decodeFromJSONField)("u64", field.remaining), pool: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(typeArg), field.pool) }); };
    ProfitSharing.fromJSON = function (typeArg, json) {
        if (json.$typeName !== ProfitSharing.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(ProfitSharing.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return ProfitSharing.fromJSONField(typeArg, json);
    };
    ProfitSharing.fromSuiParsedData = function (typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isProfitSharing(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ProfitSharing object"));
    } return ProfitSharing.fromFieldsWithTypes(typeArg, content); };
    ProfitSharing.fetch = function (client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ProfitSharing object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isProfitSharing(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ProfitSharing object"));
                        }
                        return [2 /*return*/, ProfitSharing.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ProfitSharing.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharing";
    ProfitSharing.$numTypeParams = 1;
    return ProfitSharing;
}());
exports.ProfitSharing = ProfitSharing;
/* ============================== ProfitSharingEvent =============================== */
function isProfitSharingEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharingEvent"; }
var ProfitSharingEvent = /** @class */ (function () {
    function ProfitSharingEvent(typeArgs, fields) {
        this.$typeName = ProfitSharingEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ProfitSharingEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.levelProfits = fields.levelProfits;
        ;
        this.value = fields.value;
        ;
        this.token = fields.token;
    }
    ProfitSharingEvent.reified = function () {
        var _this = this;
        return { typeName: ProfitSharingEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ProfitSharingEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ProfitSharingEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ProfitSharingEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ProfitSharingEvent.fromBcs(data); }, bcs: ProfitSharingEvent.bcs, fromJSONField: function (field) { return ProfitSharingEvent.fromJSONField(field); }, fromJSON: function (json) { return ProfitSharingEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return ProfitSharingEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ProfitSharingEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new ProfitSharingEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ProfitSharingEvent, "r", {
        get: function () { return ProfitSharingEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    ProfitSharingEvent.phantom = function () { return (0, reified_1.phantom)(ProfitSharingEvent.reified()); };
    Object.defineProperty(ProfitSharingEvent, "p", {
        get: function () { return ProfitSharingEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProfitSharingEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ProfitSharingEvent", {
                level_profits: bcs_1.bcs.vector(bcs_1.bcs.u64()), value: bcs_1.bcs.u64(), token: structs_2.TypeName.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ProfitSharingEvent.fromFields = function (fields) { return ProfitSharingEvent.reified().new({ levelProfits: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.level_profits), value: (0, reified_1.decodeFromFields)("u64", fields.value), token: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.token) }); };
    ProfitSharingEvent.fromFieldsWithTypes = function (item) {
        if (!isProfitSharingEvent(item.type)) {
            throw new Error("not a ProfitSharingEvent type");
        }
        return ProfitSharingEvent.reified().new({ levelProfits: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.level_profits), value: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.value), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.token) });
    };
    ProfitSharingEvent.fromBcs = function (data) { return ProfitSharingEvent.fromFields(ProfitSharingEvent.bcs.parse(data)); };
    ProfitSharingEvent.prototype.toJSONField = function () {
        return {
            levelProfits: (0, reified_1.fieldToJSON)("vector<u64>", this.levelProfits), value: this.value.toString(), token: this.token.toJSONField(),
        };
    };
    ProfitSharingEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ProfitSharingEvent.fromJSONField = function (field) { return ProfitSharingEvent.reified().new({ levelProfits: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.levelProfits), value: (0, reified_1.decodeFromJSONField)("u64", field.value), token: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.token) }); };
    ProfitSharingEvent.fromJSON = function (json) {
        if (json.$typeName !== ProfitSharingEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ProfitSharingEvent.fromJSONField(json);
    };
    ProfitSharingEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isProfitSharingEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ProfitSharingEvent object"));
    } return ProfitSharingEvent.fromFieldsWithTypes(content); };
    ProfitSharingEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ProfitSharingEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isProfitSharingEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ProfitSharingEvent object"));
                        }
                        return [2 /*return*/, ProfitSharingEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ProfitSharingEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharingEvent";
    ProfitSharingEvent.$numTypeParams = 0;
    return ProfitSharingEvent;
}());
exports.ProfitSharingEvent = ProfitSharingEvent;
/* ============================== SnapshotNftEvent =============================== */
function isSnapshotNftEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::SnapshotNftEvent"; }
var SnapshotNftEvent = /** @class */ (function () {
    function SnapshotNftEvent(typeArgs, fields) {
        this.$typeName = SnapshotNftEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SnapshotNftEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        ;
        this.nftId = fields.nftId;
        ;
        this.number = fields.number;
        ;
        this.tsMs = fields.tsMs;
        ;
        this.expEarn = fields.expEarn;
    }
    SnapshotNftEvent.reified = function () {
        var _this = this;
        return { typeName: SnapshotNftEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([SnapshotNftEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return SnapshotNftEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return SnapshotNftEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return SnapshotNftEvent.fromBcs(data); }, bcs: SnapshotNftEvent.bcs, fromJSONField: function (field) { return SnapshotNftEvent.fromJSONField(field); }, fromJSON: function (json) { return SnapshotNftEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return SnapshotNftEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, SnapshotNftEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new SnapshotNftEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(SnapshotNftEvent, "r", {
        get: function () { return SnapshotNftEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    SnapshotNftEvent.phantom = function () { return (0, reified_1.phantom)(SnapshotNftEvent.reified()); };
    Object.defineProperty(SnapshotNftEvent, "p", {
        get: function () { return SnapshotNftEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnapshotNftEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("SnapshotNftEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), nft_id: structs_5.ID.bcs, number: bcs_1.bcs.u64(), ts_ms: bcs_1.bcs.u64(), exp_earn: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    SnapshotNftEvent.fromFields = function (fields) { return SnapshotNftEvent.reified().new({ sender: (0, reified_1.decodeFromFields)("address", fields.sender), nftId: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.nft_id), number: (0, reified_1.decodeFromFields)("u64", fields.number), tsMs: (0, reified_1.decodeFromFields)("u64", fields.ts_ms), expEarn: (0, reified_1.decodeFromFields)("u64", fields.exp_earn) }); };
    SnapshotNftEvent.fromFieldsWithTypes = function (item) {
        if (!isSnapshotNftEvent(item.type)) {
            throw new Error("not a SnapshotNftEvent type");
        }
        return SnapshotNftEvent.reified().new({ sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender), nftId: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.nft_id), number: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.number), tsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.ts_ms), expEarn: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.exp_earn) });
    };
    SnapshotNftEvent.fromBcs = function (data) { return SnapshotNftEvent.fromFields(SnapshotNftEvent.bcs.parse(data)); };
    SnapshotNftEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender, nftId: this.nftId, number: this.number.toString(), tsMs: this.tsMs.toString(), expEarn: this.expEarn.toString(),
        };
    };
    SnapshotNftEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    SnapshotNftEvent.fromJSONField = function (field) { return SnapshotNftEvent.reified().new({ sender: (0, reified_1.decodeFromJSONField)("address", field.sender), nftId: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.nftId), number: (0, reified_1.decodeFromJSONField)("u64", field.number), tsMs: (0, reified_1.decodeFromJSONField)("u64", field.tsMs), expEarn: (0, reified_1.decodeFromJSONField)("u64", field.expEarn) }); };
    SnapshotNftEvent.fromJSON = function (json) {
        if (json.$typeName !== SnapshotNftEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SnapshotNftEvent.fromJSONField(json);
    };
    SnapshotNftEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSnapshotNftEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a SnapshotNftEvent object"));
    } return SnapshotNftEvent.fromFieldsWithTypes(content); };
    SnapshotNftEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching SnapshotNftEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSnapshotNftEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a SnapshotNftEvent object"));
                        }
                        return [2 /*return*/, SnapshotNftEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    SnapshotNftEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::SnapshotNftEvent";
    SnapshotNftEvent.$numTypeParams = 0;
    return SnapshotNftEvent;
}());
exports.SnapshotNftEvent = SnapshotNftEvent;
/* ============================== StakeNftEvent =============================== */
function isStakeNftEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::StakeNftEvent"; }
var StakeNftEvent = /** @class */ (function () {
    function StakeNftEvent(typeArgs, fields) {
        this.$typeName = StakeNftEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([StakeNftEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        ;
        this.nftId = fields.nftId;
        ;
        this.number = fields.number;
        ;
        this.tsMs = fields.tsMs;
    }
    StakeNftEvent.reified = function () {
        var _this = this;
        return { typeName: StakeNftEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([StakeNftEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return StakeNftEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return StakeNftEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return StakeNftEvent.fromBcs(data); }, bcs: StakeNftEvent.bcs, fromJSONField: function (field) { return StakeNftEvent.fromJSONField(field); }, fromJSON: function (json) { return StakeNftEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return StakeNftEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, StakeNftEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new StakeNftEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(StakeNftEvent, "r", {
        get: function () { return StakeNftEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    StakeNftEvent.phantom = function () { return (0, reified_1.phantom)(StakeNftEvent.reified()); };
    Object.defineProperty(StakeNftEvent, "p", {
        get: function () { return StakeNftEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StakeNftEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("StakeNftEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), nft_id: structs_5.ID.bcs, number: bcs_1.bcs.u64(), ts_ms: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    StakeNftEvent.fromFields = function (fields) { return StakeNftEvent.reified().new({ sender: (0, reified_1.decodeFromFields)("address", fields.sender), nftId: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.nft_id), number: (0, reified_1.decodeFromFields)("u64", fields.number), tsMs: (0, reified_1.decodeFromFields)("u64", fields.ts_ms) }); };
    StakeNftEvent.fromFieldsWithTypes = function (item) {
        if (!isStakeNftEvent(item.type)) {
            throw new Error("not a StakeNftEvent type");
        }
        return StakeNftEvent.reified().new({ sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender), nftId: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.nft_id), number: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.number), tsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.ts_ms) });
    };
    StakeNftEvent.fromBcs = function (data) { return StakeNftEvent.fromFields(StakeNftEvent.bcs.parse(data)); };
    StakeNftEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender, nftId: this.nftId, number: this.number.toString(), tsMs: this.tsMs.toString(),
        };
    };
    StakeNftEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    StakeNftEvent.fromJSONField = function (field) { return StakeNftEvent.reified().new({ sender: (0, reified_1.decodeFromJSONField)("address", field.sender), nftId: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.nftId), number: (0, reified_1.decodeFromJSONField)("u64", field.number), tsMs: (0, reified_1.decodeFromJSONField)("u64", field.tsMs) }); };
    StakeNftEvent.fromJSON = function (json) {
        if (json.$typeName !== StakeNftEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StakeNftEvent.fromJSONField(json);
    };
    StakeNftEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStakeNftEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a StakeNftEvent object"));
    } return StakeNftEvent.fromFieldsWithTypes(content); };
    StakeNftEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching StakeNftEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakeNftEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a StakeNftEvent object"));
                        }
                        return [2 /*return*/, StakeNftEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    StakeNftEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::StakeNftEvent";
    StakeNftEvent.$numTypeParams = 0;
    return StakeNftEvent;
}());
exports.StakeNftEvent = StakeNftEvent;
/* ============================== TransferNftEvent =============================== */
function isTransferNftEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::TransferNftEvent"; }
var TransferNftEvent = /** @class */ (function () {
    function TransferNftEvent(typeArgs, fields) {
        this.$typeName = TransferNftEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TransferNftEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        ;
        this.receiver = fields.receiver;
        ;
        this.nftId = fields.nftId;
        ;
        this.number = fields.number;
    }
    TransferNftEvent.reified = function () {
        var _this = this;
        return { typeName: TransferNftEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TransferNftEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return TransferNftEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return TransferNftEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return TransferNftEvent.fromBcs(data); }, bcs: TransferNftEvent.bcs, fromJSONField: function (field) { return TransferNftEvent.fromJSONField(field); }, fromJSON: function (json) { return TransferNftEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return TransferNftEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TransferNftEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new TransferNftEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TransferNftEvent, "r", {
        get: function () { return TransferNftEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    TransferNftEvent.phantom = function () { return (0, reified_1.phantom)(TransferNftEvent.reified()); };
    Object.defineProperty(TransferNftEvent, "p", {
        get: function () { return TransferNftEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferNftEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TransferNftEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), receiver: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), nft_id: structs_5.ID.bcs, number: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TransferNftEvent.fromFields = function (fields) { return TransferNftEvent.reified().new({ sender: (0, reified_1.decodeFromFields)("address", fields.sender), receiver: (0, reified_1.decodeFromFields)("address", fields.receiver), nftId: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.nft_id), number: (0, reified_1.decodeFromFields)("u64", fields.number) }); };
    TransferNftEvent.fromFieldsWithTypes = function (item) {
        if (!isTransferNftEvent(item.type)) {
            throw new Error("not a TransferNftEvent type");
        }
        return TransferNftEvent.reified().new({ sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender), receiver: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.receiver), nftId: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.nft_id), number: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.number) });
    };
    TransferNftEvent.fromBcs = function (data) { return TransferNftEvent.fromFields(TransferNftEvent.bcs.parse(data)); };
    TransferNftEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender, receiver: this.receiver, nftId: this.nftId, number: this.number.toString(),
        };
    };
    TransferNftEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TransferNftEvent.fromJSONField = function (field) { return TransferNftEvent.reified().new({ sender: (0, reified_1.decodeFromJSONField)("address", field.sender), receiver: (0, reified_1.decodeFromJSONField)("address", field.receiver), nftId: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.nftId), number: (0, reified_1.decodeFromJSONField)("u64", field.number) }); };
    TransferNftEvent.fromJSON = function (json) {
        if (json.$typeName !== TransferNftEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TransferNftEvent.fromJSONField(json);
    };
    TransferNftEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTransferNftEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TransferNftEvent object"));
    } return TransferNftEvent.fromFieldsWithTypes(content); };
    TransferNftEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TransferNftEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTransferNftEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TransferNftEvent object"));
                        }
                        return [2 /*return*/, TransferNftEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TransferNftEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::TransferNftEvent";
    TransferNftEvent.$numTypeParams = 0;
    return TransferNftEvent;
}());
exports.TransferNftEvent = TransferNftEvent;
/* ============================== UnstakeNftEvent =============================== */
function isUnstakeNftEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UnstakeNftEvent"; }
var UnstakeNftEvent = /** @class */ (function () {
    function UnstakeNftEvent(typeArgs, fields) {
        this.$typeName = UnstakeNftEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UnstakeNftEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        ;
        this.nftId = fields.nftId;
        ;
        this.number = fields.number;
    }
    UnstakeNftEvent.reified = function () {
        var _this = this;
        return { typeName: UnstakeNftEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UnstakeNftEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UnstakeNftEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UnstakeNftEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UnstakeNftEvent.fromBcs(data); }, bcs: UnstakeNftEvent.bcs, fromJSONField: function (field) { return UnstakeNftEvent.fromJSONField(field); }, fromJSON: function (json) { return UnstakeNftEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return UnstakeNftEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UnstakeNftEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new UnstakeNftEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UnstakeNftEvent, "r", {
        get: function () { return UnstakeNftEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    UnstakeNftEvent.phantom = function () { return (0, reified_1.phantom)(UnstakeNftEvent.reified()); };
    Object.defineProperty(UnstakeNftEvent, "p", {
        get: function () { return UnstakeNftEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UnstakeNftEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UnstakeNftEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), nft_id: structs_5.ID.bcs, number: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UnstakeNftEvent.fromFields = function (fields) { return UnstakeNftEvent.reified().new({ sender: (0, reified_1.decodeFromFields)("address", fields.sender), nftId: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.nft_id), number: (0, reified_1.decodeFromFields)("u64", fields.number) }); };
    UnstakeNftEvent.fromFieldsWithTypes = function (item) {
        if (!isUnstakeNftEvent(item.type)) {
            throw new Error("not a UnstakeNftEvent type");
        }
        return UnstakeNftEvent.reified().new({ sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender), nftId: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.nft_id), number: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.number) });
    };
    UnstakeNftEvent.fromBcs = function (data) { return UnstakeNftEvent.fromFields(UnstakeNftEvent.bcs.parse(data)); };
    UnstakeNftEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender, nftId: this.nftId, number: this.number.toString(),
        };
    };
    UnstakeNftEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UnstakeNftEvent.fromJSONField = function (field) { return UnstakeNftEvent.reified().new({ sender: (0, reified_1.decodeFromJSONField)("address", field.sender), nftId: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.nftId), number: (0, reified_1.decodeFromJSONField)("u64", field.number) }); };
    UnstakeNftEvent.fromJSON = function (json) {
        if (json.$typeName !== UnstakeNftEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UnstakeNftEvent.fromJSONField(json);
    };
    UnstakeNftEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUnstakeNftEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UnstakeNftEvent object"));
    } return UnstakeNftEvent.fromFieldsWithTypes(content); };
    UnstakeNftEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UnstakeNftEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUnstakeNftEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UnstakeNftEvent object"));
                        }
                        return [2 /*return*/, UnstakeNftEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UnstakeNftEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UnstakeNftEvent";
    UnstakeNftEvent.$numTypeParams = 0;
    return UnstakeNftEvent;
}());
exports.UnstakeNftEvent = UnstakeNftEvent;
/* ============================== UpdateDepositEvent =============================== */
function isUpdateDepositEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateDepositEvent"; }
var UpdateDepositEvent = /** @class */ (function () {
    function UpdateDepositEvent(typeArgs, fields) {
        this.$typeName = UpdateDepositEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateDepositEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        ;
        this.nftId = fields.nftId;
        ;
        this.number = fields.number;
        ;
        this.before = fields.before;
        ;
        this.after = fields.after;
    }
    UpdateDepositEvent.reified = function () {
        var _this = this;
        return { typeName: UpdateDepositEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateDepositEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UpdateDepositEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UpdateDepositEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UpdateDepositEvent.fromBcs(data); }, bcs: UpdateDepositEvent.bcs, fromJSONField: function (field) { return UpdateDepositEvent.fromJSONField(field); }, fromJSON: function (json) { return UpdateDepositEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return UpdateDepositEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateDepositEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new UpdateDepositEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UpdateDepositEvent, "r", {
        get: function () { return UpdateDepositEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    UpdateDepositEvent.phantom = function () { return (0, reified_1.phantom)(UpdateDepositEvent.reified()); };
    Object.defineProperty(UpdateDepositEvent, "p", {
        get: function () { return UpdateDepositEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateDepositEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateDepositEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), nft_id: structs_5.ID.bcs, number: bcs_1.bcs.u64(), before: bcs_1.bcs.u64(), after: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UpdateDepositEvent.fromFields = function (fields) { return UpdateDepositEvent.reified().new({ sender: (0, reified_1.decodeFromFields)("address", fields.sender), nftId: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.nft_id), number: (0, reified_1.decodeFromFields)("u64", fields.number), before: (0, reified_1.decodeFromFields)("u64", fields.before), after: (0, reified_1.decodeFromFields)("u64", fields.after) }); };
    UpdateDepositEvent.fromFieldsWithTypes = function (item) {
        if (!isUpdateDepositEvent(item.type)) {
            throw new Error("not a UpdateDepositEvent type");
        }
        return UpdateDepositEvent.reified().new({ sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender), nftId: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.nft_id), number: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.number), before: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.before), after: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.after) });
    };
    UpdateDepositEvent.fromBcs = function (data) { return UpdateDepositEvent.fromFields(UpdateDepositEvent.bcs.parse(data)); };
    UpdateDepositEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender, nftId: this.nftId, number: this.number.toString(), before: this.before.toString(), after: this.after.toString(),
        };
    };
    UpdateDepositEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UpdateDepositEvent.fromJSONField = function (field) { return UpdateDepositEvent.reified().new({ sender: (0, reified_1.decodeFromJSONField)("address", field.sender), nftId: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.nftId), number: (0, reified_1.decodeFromJSONField)("u64", field.number), before: (0, reified_1.decodeFromJSONField)("u64", field.before), after: (0, reified_1.decodeFromJSONField)("u64", field.after) }); };
    UpdateDepositEvent.fromJSON = function (json) {
        if (json.$typeName !== UpdateDepositEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpdateDepositEvent.fromJSONField(json);
    };
    UpdateDepositEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpdateDepositEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UpdateDepositEvent object"));
    } return UpdateDepositEvent.fromFieldsWithTypes(content); };
    UpdateDepositEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateDepositEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateDepositEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateDepositEvent object"));
                        }
                        return [2 /*return*/, UpdateDepositEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateDepositEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateDepositEvent";
    UpdateDepositEvent.$numTypeParams = 0;
    return UpdateDepositEvent;
}());
exports.UpdateDepositEvent = UpdateDepositEvent;
/* ============================== UpdateUrlEvent =============================== */
function isUpdateUrlEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateUrlEvent"; }
var UpdateUrlEvent = /** @class */ (function () {
    function UpdateUrlEvent(typeArgs, fields) {
        this.$typeName = UpdateUrlEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateUrlEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.nftId = fields.nftId;
        ;
        this.number = fields.number;
        ;
        this.level = fields.level;
        ;
        this.url = fields.url;
    }
    UpdateUrlEvent.reified = function () {
        var _this = this;
        return { typeName: UpdateUrlEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateUrlEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UpdateUrlEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UpdateUrlEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UpdateUrlEvent.fromBcs(data); }, bcs: UpdateUrlEvent.bcs, fromJSONField: function (field) { return UpdateUrlEvent.fromJSONField(field); }, fromJSON: function (json) { return UpdateUrlEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return UpdateUrlEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateUrlEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new UpdateUrlEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UpdateUrlEvent, "r", {
        get: function () { return UpdateUrlEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    UpdateUrlEvent.phantom = function () { return (0, reified_1.phantom)(UpdateUrlEvent.reified()); };
    Object.defineProperty(UpdateUrlEvent, "p", {
        get: function () { return UpdateUrlEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateUrlEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateUrlEvent", {
                nft_id: structs_5.ID.bcs, number: bcs_1.bcs.u64(), level: bcs_1.bcs.u64(), url: bcs_1.bcs.vector(bcs_1.bcs.u8())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UpdateUrlEvent.fromFields = function (fields) { return UpdateUrlEvent.reified().new({ nftId: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.nft_id), number: (0, reified_1.decodeFromFields)("u64", fields.number), level: (0, reified_1.decodeFromFields)("u64", fields.level), url: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.url) }); };
    UpdateUrlEvent.fromFieldsWithTypes = function (item) {
        if (!isUpdateUrlEvent(item.type)) {
            throw new Error("not a UpdateUrlEvent type");
        }
        return UpdateUrlEvent.reified().new({ nftId: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.nft_id), number: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.number), level: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.level), url: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.url) });
    };
    UpdateUrlEvent.fromBcs = function (data) { return UpdateUrlEvent.fromFields(UpdateUrlEvent.bcs.parse(data)); };
    UpdateUrlEvent.prototype.toJSONField = function () {
        return {
            nftId: this.nftId, number: this.number.toString(), level: this.level.toString(), url: (0, reified_1.fieldToJSON)("vector<u8>", this.url),
        };
    };
    UpdateUrlEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UpdateUrlEvent.fromJSONField = function (field) { return UpdateUrlEvent.reified().new({ nftId: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.nftId), number: (0, reified_1.decodeFromJSONField)("u64", field.number), level: (0, reified_1.decodeFromJSONField)("u64", field.level), url: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.url) }); };
    UpdateUrlEvent.fromJSON = function (json) {
        if (json.$typeName !== UpdateUrlEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpdateUrlEvent.fromJSONField(json);
    };
    UpdateUrlEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpdateUrlEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UpdateUrlEvent object"));
    } return UpdateUrlEvent.fromFieldsWithTypes(content); };
    UpdateUrlEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateUrlEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateUrlEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateUrlEvent object"));
                        }
                        return [2 /*return*/, UpdateUrlEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateUrlEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateUrlEvent";
    UpdateUrlEvent.$numTypeParams = 0;
    return UpdateUrlEvent;
}());
exports.UpdateUrlEvent = UpdateUrlEvent;
