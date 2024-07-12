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
exports.WithdrawIncentiveEvent = exports.UpdateUnlockCountdownTsMsEvent = exports.UpdateIncentiveConfigEvent = exports.UnstakeEvent = exports.StakePoolRegistry = exports.StakePoolInfo = exports.StakePoolConfig = exports.StakePool = exports.StakeEvent = exports.RemoveIncentiveTokenEvent = exports.NewStakePoolEvent = exports.LpUserShare = exports.IncentiveInfo = exports.IncentiveConfig = exports.Incentive = exports.HarvestPerUserShareEvent = exports.DepositIncentiveEvent = exports.DeactivatingShares = exports.DeactivateIncentiveTokenEvent = exports.AddIncentiveTokenEvent = exports.ActivateIncentiveTokenEvent = exports.UnsubscribeEvent = void 0;
exports.isUnsubscribeEvent = isUnsubscribeEvent;
exports.isActivateIncentiveTokenEvent = isActivateIncentiveTokenEvent;
exports.isAddIncentiveTokenEvent = isAddIncentiveTokenEvent;
exports.isDeactivateIncentiveTokenEvent = isDeactivateIncentiveTokenEvent;
exports.isDeactivatingShares = isDeactivatingShares;
exports.isDepositIncentiveEvent = isDepositIncentiveEvent;
exports.isHarvestPerUserShareEvent = isHarvestPerUserShareEvent;
exports.isIncentive = isIncentive;
exports.isIncentiveConfig = isIncentiveConfig;
exports.isIncentiveInfo = isIncentiveInfo;
exports.isLpUserShare = isLpUserShare;
exports.isNewStakePoolEvent = isNewStakePoolEvent;
exports.isRemoveIncentiveTokenEvent = isRemoveIncentiveTokenEvent;
exports.isStakeEvent = isStakeEvent;
exports.isStakePool = isStakePool;
exports.isStakePoolConfig = isStakePoolConfig;
exports.isStakePoolInfo = isStakePoolInfo;
exports.isStakePoolRegistry = isStakePoolRegistry;
exports.isUnstakeEvent = isUnstakeEvent;
exports.isUpdateIncentiveConfigEvent = isUpdateIncentiveConfigEvent;
exports.isUpdateUnlockCountdownTsMsEvent = isUpdateUnlockCountdownTsMsEvent;
exports.isWithdrawIncentiveEvent = isWithdrawIncentiveEvent;
var reified = __importStar(require("../../_framework/reified"));
var structs_1 = require("../../_dependencies/source/0x1/type-name/structs");
var structs_2 = require("../../_dependencies/source/0x2/object/structs");
var structs_3 = require("../../_dependencies/source/0x2/vec-map/structs");
var reified_1 = require("../../_framework/reified");
var util_1 = require("../../_framework/util");
var bcs_1 = require("@mysten/bcs");
/* ============================== UnsubscribeEvent =============================== */
function isUnsubscribeEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UnsubscribeEvent";
}
var UnsubscribeEvent = /** @class */ (function () {
    function UnsubscribeEvent(typeArgs, fields) {
        this.$typeName = UnsubscribeEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UnsubscribeEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.userShareId = fields.userShareId;
        this.unsubscribedShares = fields.unsubscribedShares;
        this.unsubscribeTsMs = fields.unsubscribeTsMs;
        this.unlockedTsMs = fields.unlockedTsMs;
        this.u64Padding = fields.u64Padding;
    }
    UnsubscribeEvent.reified = function () {
        var _this = this;
        return {
            typeName: UnsubscribeEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UnsubscribeEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return UnsubscribeEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return UnsubscribeEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return UnsubscribeEvent.fromBcs(data); },
            bcs: UnsubscribeEvent.bcs,
            fromJSONField: function (field) { return UnsubscribeEvent.fromJSONField(field); },
            fromJSON: function (json) { return UnsubscribeEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return UnsubscribeEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UnsubscribeEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new UnsubscribeEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(UnsubscribeEvent, "r", {
        get: function () {
            return UnsubscribeEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    UnsubscribeEvent.phantom = function () {
        return (0, reified_1.phantom)(UnsubscribeEvent.reified());
    };
    Object.defineProperty(UnsubscribeEvent, "p", {
        get: function () {
            return UnsubscribeEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UnsubscribeEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UnsubscribeEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                lp_token_type: structs_1.TypeName.bcs,
                user_share_id: bcs_1.bcs.u64(),
                unsubscribed_shares: bcs_1.bcs.u64(),
                unsubscribe_ts_ms: bcs_1.bcs.u64(),
                unlocked_ts_ms: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    UnsubscribeEvent.fromFields = function (fields) {
        return UnsubscribeEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            lpTokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.lp_token_type),
            userShareId: (0, reified_1.decodeFromFields)("u64", fields.user_share_id),
            unsubscribedShares: (0, reified_1.decodeFromFields)("u64", fields.unsubscribed_shares),
            unsubscribeTsMs: (0, reified_1.decodeFromFields)("u64", fields.unsubscribe_ts_ms),
            unlockedTsMs: (0, reified_1.decodeFromFields)("u64", fields.unlocked_ts_ms),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    UnsubscribeEvent.fromFieldsWithTypes = function (item) {
        if (!isUnsubscribeEvent(item.type)) {
            throw new Error("not a UnsubscribeEvent type");
        }
        return UnsubscribeEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            lpTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.lp_token_type),
            userShareId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.user_share_id),
            unsubscribedShares: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unsubscribed_shares),
            unsubscribeTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unsubscribe_ts_ms),
            unlockedTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unlocked_ts_ms),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    UnsubscribeEvent.fromBcs = function (data) {
        return UnsubscribeEvent.fromFields(UnsubscribeEvent.bcs.parse(data));
    };
    UnsubscribeEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            userShareId: this.userShareId.toString(),
            unsubscribedShares: this.unsubscribedShares.toString(),
            unsubscribeTsMs: this.unsubscribeTsMs.toString(),
            unlockedTsMs: this.unlockedTsMs.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    UnsubscribeEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    UnsubscribeEvent.fromJSONField = function (field) {
        return UnsubscribeEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            lpTokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.lpTokenType),
            userShareId: (0, reified_1.decodeFromJSONField)("u64", field.userShareId),
            unsubscribedShares: (0, reified_1.decodeFromJSONField)("u64", field.unsubscribedShares),
            unsubscribeTsMs: (0, reified_1.decodeFromJSONField)("u64", field.unsubscribeTsMs),
            unlockedTsMs: (0, reified_1.decodeFromJSONField)("u64", field.unlockedTsMs),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    UnsubscribeEvent.fromJSON = function (json) {
        if (json.$typeName !== UnsubscribeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return UnsubscribeEvent.fromJSONField(json);
    };
    UnsubscribeEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUnsubscribeEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a UnsubscribeEvent object"));
        }
        return UnsubscribeEvent.fromFieldsWithTypes(content);
    };
    UnsubscribeEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UnsubscribeEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUnsubscribeEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UnsubscribeEvent object"));
                        }
                        return [2 /*return*/, UnsubscribeEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UnsubscribeEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UnsubscribeEvent";
    UnsubscribeEvent.$numTypeParams = 0;
    return UnsubscribeEvent;
}());
exports.UnsubscribeEvent = UnsubscribeEvent;
/* ============================== ActivateIncentiveTokenEvent =============================== */
function isActivateIncentiveTokenEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::ActivateIncentiveTokenEvent";
}
var ActivateIncentiveTokenEvent = /** @class */ (function () {
    function ActivateIncentiveTokenEvent(typeArgs, fields) {
        this.$typeName = ActivateIncentiveTokenEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ActivateIncentiveTokenEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.incentiveToken = fields.incentiveToken;
        this.u64Padding = fields.u64Padding;
    }
    ActivateIncentiveTokenEvent.reified = function () {
        var _this = this;
        return {
            typeName: ActivateIncentiveTokenEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ActivateIncentiveTokenEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return ActivateIncentiveTokenEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return ActivateIncentiveTokenEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return ActivateIncentiveTokenEvent.fromBcs(data); },
            bcs: ActivateIncentiveTokenEvent.bcs,
            fromJSONField: function (field) { return ActivateIncentiveTokenEvent.fromJSONField(field); },
            fromJSON: function (json) { return ActivateIncentiveTokenEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return ActivateIncentiveTokenEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ActivateIncentiveTokenEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new ActivateIncentiveTokenEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(ActivateIncentiveTokenEvent, "r", {
        get: function () {
            return ActivateIncentiveTokenEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    ActivateIncentiveTokenEvent.phantom = function () {
        return (0, reified_1.phantom)(ActivateIncentiveTokenEvent.reified());
    };
    Object.defineProperty(ActivateIncentiveTokenEvent, "p", {
        get: function () {
            return ActivateIncentiveTokenEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActivateIncentiveTokenEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ActivateIncentiveTokenEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                incentive_token: structs_1.TypeName.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    ActivateIncentiveTokenEvent.fromFields = function (fields) {
        return ActivateIncentiveTokenEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            incentiveToken: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.incentive_token),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    ActivateIncentiveTokenEvent.fromFieldsWithTypes = function (item) {
        if (!isActivateIncentiveTokenEvent(item.type)) {
            throw new Error("not a ActivateIncentiveTokenEvent type");
        }
        return ActivateIncentiveTokenEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            incentiveToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.incentive_token),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    ActivateIncentiveTokenEvent.fromBcs = function (data) {
        return ActivateIncentiveTokenEvent.fromFields(ActivateIncentiveTokenEvent.bcs.parse(data));
    };
    ActivateIncentiveTokenEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            incentiveToken: this.incentiveToken.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    ActivateIncentiveTokenEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    ActivateIncentiveTokenEvent.fromJSONField = function (field) {
        return ActivateIncentiveTokenEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            incentiveToken: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.incentiveToken),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    ActivateIncentiveTokenEvent.fromJSON = function (json) {
        if (json.$typeName !== ActivateIncentiveTokenEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return ActivateIncentiveTokenEvent.fromJSONField(json);
    };
    ActivateIncentiveTokenEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isActivateIncentiveTokenEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a ActivateIncentiveTokenEvent object"));
        }
        return ActivateIncentiveTokenEvent.fromFieldsWithTypes(content);
    };
    ActivateIncentiveTokenEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ActivateIncentiveTokenEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isActivateIncentiveTokenEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ActivateIncentiveTokenEvent object"));
                        }
                        return [2 /*return*/, ActivateIncentiveTokenEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ActivateIncentiveTokenEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::ActivateIncentiveTokenEvent";
    ActivateIncentiveTokenEvent.$numTypeParams = 0;
    return ActivateIncentiveTokenEvent;
}());
exports.ActivateIncentiveTokenEvent = ActivateIncentiveTokenEvent;
/* ============================== AddIncentiveTokenEvent =============================== */
function isAddIncentiveTokenEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::AddIncentiveTokenEvent";
}
var AddIncentiveTokenEvent = /** @class */ (function () {
    function AddIncentiveTokenEvent(typeArgs, fields) {
        this.$typeName = AddIncentiveTokenEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AddIncentiveTokenEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.incentiveToken = fields.incentiveToken;
        this.incentiveInfo = fields.incentiveInfo;
        this.incentiveConfig = fields.incentiveConfig;
        this.u64Padding = fields.u64Padding;
    }
    AddIncentiveTokenEvent.reified = function () {
        var _this = this;
        return {
            typeName: AddIncentiveTokenEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AddIncentiveTokenEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return AddIncentiveTokenEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return AddIncentiveTokenEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return AddIncentiveTokenEvent.fromBcs(data); },
            bcs: AddIncentiveTokenEvent.bcs,
            fromJSONField: function (field) { return AddIncentiveTokenEvent.fromJSONField(field); },
            fromJSON: function (json) { return AddIncentiveTokenEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return AddIncentiveTokenEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AddIncentiveTokenEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new AddIncentiveTokenEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(AddIncentiveTokenEvent, "r", {
        get: function () {
            return AddIncentiveTokenEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    AddIncentiveTokenEvent.phantom = function () {
        return (0, reified_1.phantom)(AddIncentiveTokenEvent.reified());
    };
    Object.defineProperty(AddIncentiveTokenEvent, "p", {
        get: function () {
            return AddIncentiveTokenEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddIncentiveTokenEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AddIncentiveTokenEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                incentive_token: structs_1.TypeName.bcs,
                incentive_info: IncentiveInfo.bcs,
                incentive_config: IncentiveConfig.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    AddIncentiveTokenEvent.fromFields = function (fields) {
        return AddIncentiveTokenEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            incentiveToken: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.incentive_token),
            incentiveInfo: (0, reified_1.decodeFromFields)(IncentiveInfo.reified(), fields.incentive_info),
            incentiveConfig: (0, reified_1.decodeFromFields)(IncentiveConfig.reified(), fields.incentive_config),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    AddIncentiveTokenEvent.fromFieldsWithTypes = function (item) {
        if (!isAddIncentiveTokenEvent(item.type)) {
            throw new Error("not a AddIncentiveTokenEvent type");
        }
        return AddIncentiveTokenEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            incentiveToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.incentive_token),
            incentiveInfo: (0, reified_1.decodeFromFieldsWithTypes)(IncentiveInfo.reified(), item.fields.incentive_info),
            incentiveConfig: (0, reified_1.decodeFromFieldsWithTypes)(IncentiveConfig.reified(), item.fields.incentive_config),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    AddIncentiveTokenEvent.fromBcs = function (data) {
        return AddIncentiveTokenEvent.fromFields(AddIncentiveTokenEvent.bcs.parse(data));
    };
    AddIncentiveTokenEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            incentiveToken: this.incentiveToken.toJSONField(),
            incentiveInfo: this.incentiveInfo.toJSONField(),
            incentiveConfig: this.incentiveConfig.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    AddIncentiveTokenEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    AddIncentiveTokenEvent.fromJSONField = function (field) {
        return AddIncentiveTokenEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            incentiveToken: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.incentiveToken),
            incentiveInfo: (0, reified_1.decodeFromJSONField)(IncentiveInfo.reified(), field.incentiveInfo),
            incentiveConfig: (0, reified_1.decodeFromJSONField)(IncentiveConfig.reified(), field.incentiveConfig),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    AddIncentiveTokenEvent.fromJSON = function (json) {
        if (json.$typeName !== AddIncentiveTokenEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return AddIncentiveTokenEvent.fromJSONField(json);
    };
    AddIncentiveTokenEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddIncentiveTokenEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a AddIncentiveTokenEvent object"));
        }
        return AddIncentiveTokenEvent.fromFieldsWithTypes(content);
    };
    AddIncentiveTokenEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AddIncentiveTokenEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAddIncentiveTokenEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AddIncentiveTokenEvent object"));
                        }
                        return [2 /*return*/, AddIncentiveTokenEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AddIncentiveTokenEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::AddIncentiveTokenEvent";
    AddIncentiveTokenEvent.$numTypeParams = 0;
    return AddIncentiveTokenEvent;
}());
exports.AddIncentiveTokenEvent = AddIncentiveTokenEvent;
/* ============================== DeactivateIncentiveTokenEvent =============================== */
function isDeactivateIncentiveTokenEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DeactivateIncentiveTokenEvent";
}
var DeactivateIncentiveTokenEvent = /** @class */ (function () {
    function DeactivateIncentiveTokenEvent(typeArgs, fields) {
        this.$typeName = DeactivateIncentiveTokenEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DeactivateIncentiveTokenEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.incentiveToken = fields.incentiveToken;
        this.u64Padding = fields.u64Padding;
    }
    DeactivateIncentiveTokenEvent.reified = function () {
        var _this = this;
        return {
            typeName: DeactivateIncentiveTokenEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DeactivateIncentiveTokenEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return DeactivateIncentiveTokenEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return DeactivateIncentiveTokenEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return DeactivateIncentiveTokenEvent.fromBcs(data); },
            bcs: DeactivateIncentiveTokenEvent.bcs,
            fromJSONField: function (field) { return DeactivateIncentiveTokenEvent.fromJSONField(field); },
            fromJSON: function (json) { return DeactivateIncentiveTokenEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return DeactivateIncentiveTokenEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DeactivateIncentiveTokenEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new DeactivateIncentiveTokenEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(DeactivateIncentiveTokenEvent, "r", {
        get: function () {
            return DeactivateIncentiveTokenEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    DeactivateIncentiveTokenEvent.phantom = function () {
        return (0, reified_1.phantom)(DeactivateIncentiveTokenEvent.reified());
    };
    Object.defineProperty(DeactivateIncentiveTokenEvent, "p", {
        get: function () {
            return DeactivateIncentiveTokenEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeactivateIncentiveTokenEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DeactivateIncentiveTokenEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                incentive_token: structs_1.TypeName.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    DeactivateIncentiveTokenEvent.fromFields = function (fields) {
        return DeactivateIncentiveTokenEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            incentiveToken: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.incentive_token),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    DeactivateIncentiveTokenEvent.fromFieldsWithTypes = function (item) {
        if (!isDeactivateIncentiveTokenEvent(item.type)) {
            throw new Error("not a DeactivateIncentiveTokenEvent type");
        }
        return DeactivateIncentiveTokenEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            incentiveToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.incentive_token),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    DeactivateIncentiveTokenEvent.fromBcs = function (data) {
        return DeactivateIncentiveTokenEvent.fromFields(DeactivateIncentiveTokenEvent.bcs.parse(data));
    };
    DeactivateIncentiveTokenEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            incentiveToken: this.incentiveToken.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    DeactivateIncentiveTokenEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    DeactivateIncentiveTokenEvent.fromJSONField = function (field) {
        return DeactivateIncentiveTokenEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            incentiveToken: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.incentiveToken),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    DeactivateIncentiveTokenEvent.fromJSON = function (json) {
        if (json.$typeName !== DeactivateIncentiveTokenEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return DeactivateIncentiveTokenEvent.fromJSONField(json);
    };
    DeactivateIncentiveTokenEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDeactivateIncentiveTokenEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a DeactivateIncentiveTokenEvent object"));
        }
        return DeactivateIncentiveTokenEvent.fromFieldsWithTypes(content);
    };
    DeactivateIncentiveTokenEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DeactivateIncentiveTokenEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDeactivateIncentiveTokenEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DeactivateIncentiveTokenEvent object"));
                        }
                        return [2 /*return*/, DeactivateIncentiveTokenEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DeactivateIncentiveTokenEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DeactivateIncentiveTokenEvent";
    DeactivateIncentiveTokenEvent.$numTypeParams = 0;
    return DeactivateIncentiveTokenEvent;
}());
exports.DeactivateIncentiveTokenEvent = DeactivateIncentiveTokenEvent;
/* ============================== DeactivatingShares =============================== */
function isDeactivatingShares(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DeactivatingShares";
}
var DeactivatingShares = /** @class */ (function () {
    function DeactivatingShares(typeArgs, fields) {
        this.$typeName = DeactivatingShares.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DeactivatingShares.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.shares = fields.shares;
        this.unsubscribedTsMs = fields.unsubscribedTsMs;
        this.unlockedTsMs = fields.unlockedTsMs;
        this.unsubscribedIncentivePriceIndex = fields.unsubscribedIncentivePriceIndex;
        this.u64Padding = fields.u64Padding;
    }
    DeactivatingShares.reified = function () {
        var _this = this;
        return {
            typeName: DeactivatingShares.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DeactivatingShares.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return DeactivatingShares.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return DeactivatingShares.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return DeactivatingShares.fromBcs(data); },
            bcs: DeactivatingShares.bcs,
            fromJSONField: function (field) { return DeactivatingShares.fromJSONField(field); },
            fromJSON: function (json) { return DeactivatingShares.fromJSON(json); },
            fromSuiParsedData: function (content) { return DeactivatingShares.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DeactivatingShares.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new DeactivatingShares([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(DeactivatingShares, "r", {
        get: function () {
            return DeactivatingShares.reified();
        },
        enumerable: false,
        configurable: true
    });
    DeactivatingShares.phantom = function () {
        return (0, reified_1.phantom)(DeactivatingShares.reified());
    };
    Object.defineProperty(DeactivatingShares, "p", {
        get: function () {
            return DeactivatingShares.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeactivatingShares, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DeactivatingShares", {
                shares: bcs_1.bcs.u64(),
                unsubscribed_ts_ms: bcs_1.bcs.u64(),
                unlocked_ts_ms: bcs_1.bcs.u64(),
                unsubscribed_incentive_price_index: structs_3.VecMap.bcs(structs_1.TypeName.bcs, bcs_1.bcs.u64()),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    DeactivatingShares.fromFields = function (fields) {
        return DeactivatingShares.reified().new({
            shares: (0, reified_1.decodeFromFields)("u64", fields.shares),
            unsubscribedTsMs: (0, reified_1.decodeFromFields)("u64", fields.unsubscribed_ts_ms),
            unlockedTsMs: (0, reified_1.decodeFromFields)("u64", fields.unlocked_ts_ms),
            unsubscribedIncentivePriceIndex: (0, reified_1.decodeFromFields)(structs_3.VecMap.reified(structs_1.TypeName.reified(), "u64"), fields.unsubscribed_incentive_price_index),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    DeactivatingShares.fromFieldsWithTypes = function (item) {
        if (!isDeactivatingShares(item.type)) {
            throw new Error("not a DeactivatingShares type");
        }
        return DeactivatingShares.reified().new({
            shares: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.shares),
            unsubscribedTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unsubscribed_ts_ms),
            unlockedTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unlocked_ts_ms),
            unsubscribedIncentivePriceIndex: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.VecMap.reified(structs_1.TypeName.reified(), "u64"), item.fields.unsubscribed_incentive_price_index),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    DeactivatingShares.fromBcs = function (data) {
        return DeactivatingShares.fromFields(DeactivatingShares.bcs.parse(data));
    };
    DeactivatingShares.prototype.toJSONField = function () {
        return {
            shares: this.shares.toString(),
            unsubscribedTsMs: this.unsubscribedTsMs.toString(),
            unlockedTsMs: this.unlockedTsMs.toString(),
            unsubscribedIncentivePriceIndex: this.unsubscribedIncentivePriceIndex.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    DeactivatingShares.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    DeactivatingShares.fromJSONField = function (field) {
        return DeactivatingShares.reified().new({
            shares: (0, reified_1.decodeFromJSONField)("u64", field.shares),
            unsubscribedTsMs: (0, reified_1.decodeFromJSONField)("u64", field.unsubscribedTsMs),
            unlockedTsMs: (0, reified_1.decodeFromJSONField)("u64", field.unlockedTsMs),
            unsubscribedIncentivePriceIndex: (0, reified_1.decodeFromJSONField)(structs_3.VecMap.reified(structs_1.TypeName.reified(), "u64"), field.unsubscribedIncentivePriceIndex),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    DeactivatingShares.fromJSON = function (json) {
        if (json.$typeName !== DeactivatingShares.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return DeactivatingShares.fromJSONField(json);
    };
    DeactivatingShares.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDeactivatingShares(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a DeactivatingShares object"));
        }
        return DeactivatingShares.fromFieldsWithTypes(content);
    };
    DeactivatingShares.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DeactivatingShares object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDeactivatingShares(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DeactivatingShares object"));
                        }
                        return [2 /*return*/, DeactivatingShares.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DeactivatingShares.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DeactivatingShares";
    DeactivatingShares.$numTypeParams = 0;
    return DeactivatingShares;
}());
exports.DeactivatingShares = DeactivatingShares;
/* ============================== DepositIncentiveEvent =============================== */
function isDepositIncentiveEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DepositIncentiveEvent";
}
var DepositIncentiveEvent = /** @class */ (function () {
    function DepositIncentiveEvent(typeArgs, fields) {
        this.$typeName = DepositIncentiveEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DepositIncentiveEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.incentiveTokenType = fields.incentiveTokenType;
        this.depositAmount = fields.depositAmount;
        this.u64Padding = fields.u64Padding;
    }
    DepositIncentiveEvent.reified = function () {
        var _this = this;
        return {
            typeName: DepositIncentiveEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DepositIncentiveEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return DepositIncentiveEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return DepositIncentiveEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return DepositIncentiveEvent.fromBcs(data); },
            bcs: DepositIncentiveEvent.bcs,
            fromJSONField: function (field) { return DepositIncentiveEvent.fromJSONField(field); },
            fromJSON: function (json) { return DepositIncentiveEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return DepositIncentiveEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DepositIncentiveEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new DepositIncentiveEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(DepositIncentiveEvent, "r", {
        get: function () {
            return DepositIncentiveEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    DepositIncentiveEvent.phantom = function () {
        return (0, reified_1.phantom)(DepositIncentiveEvent.reified());
    };
    Object.defineProperty(DepositIncentiveEvent, "p", {
        get: function () {
            return DepositIncentiveEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DepositIncentiveEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DepositIncentiveEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                incentive_token_type: structs_1.TypeName.bcs,
                deposit_amount: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    DepositIncentiveEvent.fromFields = function (fields) {
        return DepositIncentiveEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            incentiveTokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.incentive_token_type),
            depositAmount: (0, reified_1.decodeFromFields)("u64", fields.deposit_amount),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    DepositIncentiveEvent.fromFieldsWithTypes = function (item) {
        if (!isDepositIncentiveEvent(item.type)) {
            throw new Error("not a DepositIncentiveEvent type");
        }
        return DepositIncentiveEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            incentiveTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.incentive_token_type),
            depositAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deposit_amount),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    DepositIncentiveEvent.fromBcs = function (data) {
        return DepositIncentiveEvent.fromFields(DepositIncentiveEvent.bcs.parse(data));
    };
    DepositIncentiveEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            incentiveTokenType: this.incentiveTokenType.toJSONField(),
            depositAmount: this.depositAmount.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    DepositIncentiveEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    DepositIncentiveEvent.fromJSONField = function (field) {
        return DepositIncentiveEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            incentiveTokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.incentiveTokenType),
            depositAmount: (0, reified_1.decodeFromJSONField)("u64", field.depositAmount),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    DepositIncentiveEvent.fromJSON = function (json) {
        if (json.$typeName !== DepositIncentiveEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return DepositIncentiveEvent.fromJSONField(json);
    };
    DepositIncentiveEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDepositIncentiveEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a DepositIncentiveEvent object"));
        }
        return DepositIncentiveEvent.fromFieldsWithTypes(content);
    };
    DepositIncentiveEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DepositIncentiveEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDepositIncentiveEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DepositIncentiveEvent object"));
                        }
                        return [2 /*return*/, DepositIncentiveEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DepositIncentiveEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DepositIncentiveEvent";
    DepositIncentiveEvent.$numTypeParams = 0;
    return DepositIncentiveEvent;
}());
exports.DepositIncentiveEvent = DepositIncentiveEvent;
/* ============================== HarvestPerUserShareEvent =============================== */
function isHarvestPerUserShareEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::HarvestPerUserShareEvent";
}
var HarvestPerUserShareEvent = /** @class */ (function () {
    function HarvestPerUserShareEvent(typeArgs, fields) {
        this.$typeName = HarvestPerUserShareEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([HarvestPerUserShareEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.incentiveTokenType = fields.incentiveTokenType;
        this.harvestAmount = fields.harvestAmount;
        this.userShareId = fields.userShareId;
        this.u64Padding = fields.u64Padding;
    }
    HarvestPerUserShareEvent.reified = function () {
        var _this = this;
        return {
            typeName: HarvestPerUserShareEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([HarvestPerUserShareEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return HarvestPerUserShareEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return HarvestPerUserShareEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return HarvestPerUserShareEvent.fromBcs(data); },
            bcs: HarvestPerUserShareEvent.bcs,
            fromJSONField: function (field) { return HarvestPerUserShareEvent.fromJSONField(field); },
            fromJSON: function (json) { return HarvestPerUserShareEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return HarvestPerUserShareEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, HarvestPerUserShareEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new HarvestPerUserShareEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(HarvestPerUserShareEvent, "r", {
        get: function () {
            return HarvestPerUserShareEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    HarvestPerUserShareEvent.phantom = function () {
        return (0, reified_1.phantom)(HarvestPerUserShareEvent.reified());
    };
    Object.defineProperty(HarvestPerUserShareEvent, "p", {
        get: function () {
            return HarvestPerUserShareEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HarvestPerUserShareEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("HarvestPerUserShareEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                incentive_token_type: structs_1.TypeName.bcs,
                harvest_amount: bcs_1.bcs.u64(),
                user_share_id: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    HarvestPerUserShareEvent.fromFields = function (fields) {
        return HarvestPerUserShareEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            incentiveTokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.incentive_token_type),
            harvestAmount: (0, reified_1.decodeFromFields)("u64", fields.harvest_amount),
            userShareId: (0, reified_1.decodeFromFields)("u64", fields.user_share_id),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    HarvestPerUserShareEvent.fromFieldsWithTypes = function (item) {
        if (!isHarvestPerUserShareEvent(item.type)) {
            throw new Error("not a HarvestPerUserShareEvent type");
        }
        return HarvestPerUserShareEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            incentiveTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.incentive_token_type),
            harvestAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.harvest_amount),
            userShareId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.user_share_id),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    HarvestPerUserShareEvent.fromBcs = function (data) {
        return HarvestPerUserShareEvent.fromFields(HarvestPerUserShareEvent.bcs.parse(data));
    };
    HarvestPerUserShareEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            incentiveTokenType: this.incentiveTokenType.toJSONField(),
            harvestAmount: this.harvestAmount.toString(),
            userShareId: this.userShareId.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    HarvestPerUserShareEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    HarvestPerUserShareEvent.fromJSONField = function (field) {
        return HarvestPerUserShareEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            incentiveTokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.incentiveTokenType),
            harvestAmount: (0, reified_1.decodeFromJSONField)("u64", field.harvestAmount),
            userShareId: (0, reified_1.decodeFromJSONField)("u64", field.userShareId),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    HarvestPerUserShareEvent.fromJSON = function (json) {
        if (json.$typeName !== HarvestPerUserShareEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return HarvestPerUserShareEvent.fromJSONField(json);
    };
    HarvestPerUserShareEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isHarvestPerUserShareEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a HarvestPerUserShareEvent object"));
        }
        return HarvestPerUserShareEvent.fromFieldsWithTypes(content);
    };
    HarvestPerUserShareEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching HarvestPerUserShareEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHarvestPerUserShareEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a HarvestPerUserShareEvent object"));
                        }
                        return [2 /*return*/, HarvestPerUserShareEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    HarvestPerUserShareEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::HarvestPerUserShareEvent";
    HarvestPerUserShareEvent.$numTypeParams = 0;
    return HarvestPerUserShareEvent;
}());
exports.HarvestPerUserShareEvent = HarvestPerUserShareEvent;
/* ============================== Incentive =============================== */
function isIncentive(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::Incentive";
}
var Incentive = /** @class */ (function () {
    function Incentive(typeArgs, fields) {
        this.$typeName = Incentive.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Incentive.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.tokenType = fields.tokenType;
        this.config = fields.config;
        this.info = fields.info;
    }
    Incentive.reified = function () {
        var _this = this;
        return {
            typeName: Incentive.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Incentive.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return Incentive.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return Incentive.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return Incentive.fromBcs(data); },
            bcs: Incentive.bcs,
            fromJSONField: function (field) { return Incentive.fromJSONField(field); },
            fromJSON: function (json) { return Incentive.fromJSON(json); },
            fromSuiParsedData: function (content) { return Incentive.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Incentive.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new Incentive([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(Incentive, "r", {
        get: function () {
            return Incentive.reified();
        },
        enumerable: false,
        configurable: true
    });
    Incentive.phantom = function () {
        return (0, reified_1.phantom)(Incentive.reified());
    };
    Object.defineProperty(Incentive, "p", {
        get: function () {
            return Incentive.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Incentive, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Incentive", {
                token_type: structs_1.TypeName.bcs,
                config: IncentiveConfig.bcs,
                info: IncentiveInfo.bcs,
            });
        },
        enumerable: false,
        configurable: true
    });
    Incentive.fromFields = function (fields) {
        return Incentive.reified().new({
            tokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token_type),
            config: (0, reified_1.decodeFromFields)(IncentiveConfig.reified(), fields.config),
            info: (0, reified_1.decodeFromFields)(IncentiveInfo.reified(), fields.info),
        });
    };
    Incentive.fromFieldsWithTypes = function (item) {
        if (!isIncentive(item.type)) {
            throw new Error("not a Incentive type");
        }
        return Incentive.reified().new({
            tokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token_type),
            config: (0, reified_1.decodeFromFieldsWithTypes)(IncentiveConfig.reified(), item.fields.config),
            info: (0, reified_1.decodeFromFieldsWithTypes)(IncentiveInfo.reified(), item.fields.info),
        });
    };
    Incentive.fromBcs = function (data) {
        return Incentive.fromFields(Incentive.bcs.parse(data));
    };
    Incentive.prototype.toJSONField = function () {
        return {
            tokenType: this.tokenType.toJSONField(),
            config: this.config.toJSONField(),
            info: this.info.toJSONField(),
        };
    };
    Incentive.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    Incentive.fromJSONField = function (field) {
        return Incentive.reified().new({
            tokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.tokenType),
            config: (0, reified_1.decodeFromJSONField)(IncentiveConfig.reified(), field.config),
            info: (0, reified_1.decodeFromJSONField)(IncentiveInfo.reified(), field.info),
        });
    };
    Incentive.fromJSON = function (json) {
        if (json.$typeName !== Incentive.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return Incentive.fromJSONField(json);
    };
    Incentive.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isIncentive(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a Incentive object"));
        }
        return Incentive.fromFieldsWithTypes(content);
    };
    Incentive.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Incentive object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isIncentive(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Incentive object"));
                        }
                        return [2 /*return*/, Incentive.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Incentive.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::Incentive";
    Incentive.$numTypeParams = 0;
    return Incentive;
}());
exports.Incentive = Incentive;
/* ============================== IncentiveConfig =============================== */
function isIncentiveConfig(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::IncentiveConfig";
}
var IncentiveConfig = /** @class */ (function () {
    function IncentiveConfig(typeArgs, fields) {
        this.$typeName = IncentiveConfig.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([IncentiveConfig.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.periodIncentiveAmount = fields.periodIncentiveAmount;
        this.incentiveIntervalTsMs = fields.incentiveIntervalTsMs;
        this.u64Padding = fields.u64Padding;
    }
    IncentiveConfig.reified = function () {
        var _this = this;
        return {
            typeName: IncentiveConfig.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([IncentiveConfig.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return IncentiveConfig.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return IncentiveConfig.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return IncentiveConfig.fromBcs(data); },
            bcs: IncentiveConfig.bcs,
            fromJSONField: function (field) { return IncentiveConfig.fromJSONField(field); },
            fromJSON: function (json) { return IncentiveConfig.fromJSON(json); },
            fromSuiParsedData: function (content) { return IncentiveConfig.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, IncentiveConfig.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new IncentiveConfig([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(IncentiveConfig, "r", {
        get: function () {
            return IncentiveConfig.reified();
        },
        enumerable: false,
        configurable: true
    });
    IncentiveConfig.phantom = function () {
        return (0, reified_1.phantom)(IncentiveConfig.reified());
    };
    Object.defineProperty(IncentiveConfig, "p", {
        get: function () {
            return IncentiveConfig.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IncentiveConfig, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("IncentiveConfig", {
                period_incentive_amount: bcs_1.bcs.u64(),
                incentive_interval_ts_ms: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    IncentiveConfig.fromFields = function (fields) {
        return IncentiveConfig.reified().new({
            periodIncentiveAmount: (0, reified_1.decodeFromFields)("u64", fields.period_incentive_amount),
            incentiveIntervalTsMs: (0, reified_1.decodeFromFields)("u64", fields.incentive_interval_ts_ms),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    IncentiveConfig.fromFieldsWithTypes = function (item) {
        if (!isIncentiveConfig(item.type)) {
            throw new Error("not a IncentiveConfig type");
        }
        return IncentiveConfig.reified().new({
            periodIncentiveAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.period_incentive_amount),
            incentiveIntervalTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_interval_ts_ms),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    IncentiveConfig.fromBcs = function (data) {
        return IncentiveConfig.fromFields(IncentiveConfig.bcs.parse(data));
    };
    IncentiveConfig.prototype.toJSONField = function () {
        return {
            periodIncentiveAmount: this.periodIncentiveAmount.toString(),
            incentiveIntervalTsMs: this.incentiveIntervalTsMs.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    IncentiveConfig.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    IncentiveConfig.fromJSONField = function (field) {
        return IncentiveConfig.reified().new({
            periodIncentiveAmount: (0, reified_1.decodeFromJSONField)("u64", field.periodIncentiveAmount),
            incentiveIntervalTsMs: (0, reified_1.decodeFromJSONField)("u64", field.incentiveIntervalTsMs),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    IncentiveConfig.fromJSON = function (json) {
        if (json.$typeName !== IncentiveConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return IncentiveConfig.fromJSONField(json);
    };
    IncentiveConfig.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isIncentiveConfig(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a IncentiveConfig object"));
        }
        return IncentiveConfig.fromFieldsWithTypes(content);
    };
    IncentiveConfig.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching IncentiveConfig object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isIncentiveConfig(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a IncentiveConfig object"));
                        }
                        return [2 /*return*/, IncentiveConfig.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    IncentiveConfig.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::IncentiveConfig";
    IncentiveConfig.$numTypeParams = 0;
    return IncentiveConfig;
}());
exports.IncentiveConfig = IncentiveConfig;
/* ============================== IncentiveInfo =============================== */
function isIncentiveInfo(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::IncentiveInfo";
}
var IncentiveInfo = /** @class */ (function () {
    function IncentiveInfo(typeArgs, fields) {
        this.$typeName = IncentiveInfo.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([IncentiveInfo.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.active = fields.active;
        this.lastAllocateTsMs = fields.lastAllocateTsMs;
        this.incentivePriceIndex = fields.incentivePriceIndex;
        this.u64Padding = fields.u64Padding;
    }
    IncentiveInfo.reified = function () {
        var _this = this;
        return {
            typeName: IncentiveInfo.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([IncentiveInfo.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return IncentiveInfo.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return IncentiveInfo.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return IncentiveInfo.fromBcs(data); },
            bcs: IncentiveInfo.bcs,
            fromJSONField: function (field) { return IncentiveInfo.fromJSONField(field); },
            fromJSON: function (json) { return IncentiveInfo.fromJSON(json); },
            fromSuiParsedData: function (content) { return IncentiveInfo.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, IncentiveInfo.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new IncentiveInfo([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(IncentiveInfo, "r", {
        get: function () {
            return IncentiveInfo.reified();
        },
        enumerable: false,
        configurable: true
    });
    IncentiveInfo.phantom = function () {
        return (0, reified_1.phantom)(IncentiveInfo.reified());
    };
    Object.defineProperty(IncentiveInfo, "p", {
        get: function () {
            return IncentiveInfo.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IncentiveInfo, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("IncentiveInfo", {
                active: bcs_1.bcs.bool(),
                last_allocate_ts_ms: bcs_1.bcs.u64(),
                incentive_price_index: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    IncentiveInfo.fromFields = function (fields) {
        return IncentiveInfo.reified().new({
            active: (0, reified_1.decodeFromFields)("bool", fields.active),
            lastAllocateTsMs: (0, reified_1.decodeFromFields)("u64", fields.last_allocate_ts_ms),
            incentivePriceIndex: (0, reified_1.decodeFromFields)("u64", fields.incentive_price_index),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    IncentiveInfo.fromFieldsWithTypes = function (item) {
        if (!isIncentiveInfo(item.type)) {
            throw new Error("not a IncentiveInfo type");
        }
        return IncentiveInfo.reified().new({
            active: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.active),
            lastAllocateTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_allocate_ts_ms),
            incentivePriceIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_price_index),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    IncentiveInfo.fromBcs = function (data) {
        return IncentiveInfo.fromFields(IncentiveInfo.bcs.parse(data));
    };
    IncentiveInfo.prototype.toJSONField = function () {
        return {
            active: this.active,
            lastAllocateTsMs: this.lastAllocateTsMs.toString(),
            incentivePriceIndex: this.incentivePriceIndex.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    IncentiveInfo.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    IncentiveInfo.fromJSONField = function (field) {
        return IncentiveInfo.reified().new({
            active: (0, reified_1.decodeFromJSONField)("bool", field.active),
            lastAllocateTsMs: (0, reified_1.decodeFromJSONField)("u64", field.lastAllocateTsMs),
            incentivePriceIndex: (0, reified_1.decodeFromJSONField)("u64", field.incentivePriceIndex),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    IncentiveInfo.fromJSON = function (json) {
        if (json.$typeName !== IncentiveInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return IncentiveInfo.fromJSONField(json);
    };
    IncentiveInfo.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isIncentiveInfo(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a IncentiveInfo object"));
        }
        return IncentiveInfo.fromFieldsWithTypes(content);
    };
    IncentiveInfo.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching IncentiveInfo object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isIncentiveInfo(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a IncentiveInfo object"));
                        }
                        return [2 /*return*/, IncentiveInfo.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    IncentiveInfo.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::IncentiveInfo";
    IncentiveInfo.$numTypeParams = 0;
    return IncentiveInfo;
}());
exports.IncentiveInfo = IncentiveInfo;
/* ============================== LpUserShare =============================== */
function isLpUserShare(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::LpUserShare";
}
var LpUserShare = /** @class */ (function () {
    function LpUserShare(typeArgs, fields) {
        this.$typeName = LpUserShare.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([LpUserShare.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        this.userShareId = fields.userShareId;
        this.stakeTsMs = fields.stakeTsMs;
        this.totalShares = fields.totalShares;
        this.activeShares = fields.activeShares;
        this.deactivatingShares = fields.deactivatingShares;
        this.lastIncentivePriceIndex = fields.lastIncentivePriceIndex;
        this.u64Padding = fields.u64Padding;
    }
    LpUserShare.reified = function () {
        var _this = this;
        return {
            typeName: LpUserShare.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([LpUserShare.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return LpUserShare.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return LpUserShare.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return LpUserShare.fromBcs(data); },
            bcs: LpUserShare.bcs,
            fromJSONField: function (field) { return LpUserShare.fromJSONField(field); },
            fromJSON: function (json) { return LpUserShare.fromJSON(json); },
            fromSuiParsedData: function (content) { return LpUserShare.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, LpUserShare.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new LpUserShare([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(LpUserShare, "r", {
        get: function () {
            return LpUserShare.reified();
        },
        enumerable: false,
        configurable: true
    });
    LpUserShare.phantom = function () {
        return (0, reified_1.phantom)(LpUserShare.reified());
    };
    Object.defineProperty(LpUserShare, "p", {
        get: function () {
            return LpUserShare.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LpUserShare, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("LpUserShare", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                user_share_id: bcs_1.bcs.u64(),
                stake_ts_ms: bcs_1.bcs.u64(),
                total_shares: bcs_1.bcs.u64(),
                active_shares: bcs_1.bcs.u64(),
                deactivating_shares: bcs_1.bcs.vector(DeactivatingShares.bcs),
                last_incentive_price_index: structs_3.VecMap.bcs(structs_1.TypeName.bcs, bcs_1.bcs.u64()),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    LpUserShare.fromFields = function (fields) {
        return LpUserShare.reified().new({
            user: (0, reified_1.decodeFromFields)("address", fields.user),
            userShareId: (0, reified_1.decodeFromFields)("u64", fields.user_share_id),
            stakeTsMs: (0, reified_1.decodeFromFields)("u64", fields.stake_ts_ms),
            totalShares: (0, reified_1.decodeFromFields)("u64", fields.total_shares),
            activeShares: (0, reified_1.decodeFromFields)("u64", fields.active_shares),
            deactivatingShares: (0, reified_1.decodeFromFields)(reified.vector(DeactivatingShares.reified()), fields.deactivating_shares),
            lastIncentivePriceIndex: (0, reified_1.decodeFromFields)(structs_3.VecMap.reified(structs_1.TypeName.reified(), "u64"), fields.last_incentive_price_index),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    LpUserShare.fromFieldsWithTypes = function (item) {
        if (!isLpUserShare(item.type)) {
            throw new Error("not a LpUserShare type");
        }
        return LpUserShare.reified().new({
            user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user),
            userShareId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.user_share_id),
            stakeTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stake_ts_ms),
            totalShares: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_shares),
            activeShares: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.active_shares),
            deactivatingShares: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(DeactivatingShares.reified()), item.fields.deactivating_shares),
            lastIncentivePriceIndex: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.VecMap.reified(structs_1.TypeName.reified(), "u64"), item.fields.last_incentive_price_index),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    LpUserShare.fromBcs = function (data) {
        return LpUserShare.fromFields(LpUserShare.bcs.parse(data));
    };
    LpUserShare.prototype.toJSONField = function () {
        return {
            user: this.user,
            userShareId: this.userShareId.toString(),
            stakeTsMs: this.stakeTsMs.toString(),
            totalShares: this.totalShares.toString(),
            activeShares: this.activeShares.toString(),
            deactivatingShares: (0, reified_1.fieldToJSON)("vector<0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DeactivatingShares>", this.deactivatingShares),
            lastIncentivePriceIndex: this.lastIncentivePriceIndex.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    LpUserShare.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    LpUserShare.fromJSONField = function (field) {
        return LpUserShare.reified().new({
            user: (0, reified_1.decodeFromJSONField)("address", field.user),
            userShareId: (0, reified_1.decodeFromJSONField)("u64", field.userShareId),
            stakeTsMs: (0, reified_1.decodeFromJSONField)("u64", field.stakeTsMs),
            totalShares: (0, reified_1.decodeFromJSONField)("u64", field.totalShares),
            activeShares: (0, reified_1.decodeFromJSONField)("u64", field.activeShares),
            deactivatingShares: (0, reified_1.decodeFromJSONField)(reified.vector(DeactivatingShares.reified()), field.deactivatingShares),
            lastIncentivePriceIndex: (0, reified_1.decodeFromJSONField)(structs_3.VecMap.reified(structs_1.TypeName.reified(), "u64"), field.lastIncentivePriceIndex),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    LpUserShare.fromJSON = function (json) {
        if (json.$typeName !== LpUserShare.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return LpUserShare.fromJSONField(json);
    };
    LpUserShare.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLpUserShare(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a LpUserShare object"));
        }
        return LpUserShare.fromFieldsWithTypes(content);
    };
    LpUserShare.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching LpUserShare object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLpUserShare(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a LpUserShare object"));
                        }
                        return [2 /*return*/, LpUserShare.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    LpUserShare.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::LpUserShare";
    LpUserShare.$numTypeParams = 0;
    return LpUserShare;
}());
exports.LpUserShare = LpUserShare;
/* ============================== NewStakePoolEvent =============================== */
function isNewStakePoolEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::NewStakePoolEvent";
}
var NewStakePoolEvent = /** @class */ (function () {
    function NewStakePoolEvent(typeArgs, fields) {
        this.$typeName = NewStakePoolEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NewStakePoolEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.stakePoolInfo = fields.stakePoolInfo;
        this.stakePoolConfig = fields.stakePoolConfig;
        this.u64Padding = fields.u64Padding;
    }
    NewStakePoolEvent.reified = function () {
        var _this = this;
        return {
            typeName: NewStakePoolEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([NewStakePoolEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return NewStakePoolEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return NewStakePoolEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return NewStakePoolEvent.fromBcs(data); },
            bcs: NewStakePoolEvent.bcs,
            fromJSONField: function (field) { return NewStakePoolEvent.fromJSONField(field); },
            fromJSON: function (json) { return NewStakePoolEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return NewStakePoolEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, NewStakePoolEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new NewStakePoolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(NewStakePoolEvent, "r", {
        get: function () {
            return NewStakePoolEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    NewStakePoolEvent.phantom = function () {
        return (0, reified_1.phantom)(NewStakePoolEvent.reified());
    };
    Object.defineProperty(NewStakePoolEvent, "p", {
        get: function () {
            return NewStakePoolEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewStakePoolEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("NewStakePoolEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                stake_pool_info: StakePoolInfo.bcs,
                stake_pool_config: StakePoolConfig.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    NewStakePoolEvent.fromFields = function (fields) {
        return NewStakePoolEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            stakePoolInfo: (0, reified_1.decodeFromFields)(StakePoolInfo.reified(), fields.stake_pool_info),
            stakePoolConfig: (0, reified_1.decodeFromFields)(StakePoolConfig.reified(), fields.stake_pool_config),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    NewStakePoolEvent.fromFieldsWithTypes = function (item) {
        if (!isNewStakePoolEvent(item.type)) {
            throw new Error("not a NewStakePoolEvent type");
        }
        return NewStakePoolEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            stakePoolInfo: (0, reified_1.decodeFromFieldsWithTypes)(StakePoolInfo.reified(), item.fields.stake_pool_info),
            stakePoolConfig: (0, reified_1.decodeFromFieldsWithTypes)(StakePoolConfig.reified(), item.fields.stake_pool_config),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    NewStakePoolEvent.fromBcs = function (data) {
        return NewStakePoolEvent.fromFields(NewStakePoolEvent.bcs.parse(data));
    };
    NewStakePoolEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            stakePoolInfo: this.stakePoolInfo.toJSONField(),
            stakePoolConfig: this.stakePoolConfig.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    NewStakePoolEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    NewStakePoolEvent.fromJSONField = function (field) {
        return NewStakePoolEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            stakePoolInfo: (0, reified_1.decodeFromJSONField)(StakePoolInfo.reified(), field.stakePoolInfo),
            stakePoolConfig: (0, reified_1.decodeFromJSONField)(StakePoolConfig.reified(), field.stakePoolConfig),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    NewStakePoolEvent.fromJSON = function (json) {
        if (json.$typeName !== NewStakePoolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return NewStakePoolEvent.fromJSONField(json);
    };
    NewStakePoolEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewStakePoolEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a NewStakePoolEvent object"));
        }
        return NewStakePoolEvent.fromFieldsWithTypes(content);
    };
    NewStakePoolEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching NewStakePoolEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewStakePoolEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a NewStakePoolEvent object"));
                        }
                        return [2 /*return*/, NewStakePoolEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    NewStakePoolEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::NewStakePoolEvent";
    NewStakePoolEvent.$numTypeParams = 0;
    return NewStakePoolEvent;
}());
exports.NewStakePoolEvent = NewStakePoolEvent;
/* ============================== RemoveIncentiveTokenEvent =============================== */
function isRemoveIncentiveTokenEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::RemoveIncentiveTokenEvent";
}
var RemoveIncentiveTokenEvent = /** @class */ (function () {
    function RemoveIncentiveTokenEvent(typeArgs, fields) {
        this.$typeName = RemoveIncentiveTokenEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RemoveIncentiveTokenEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.incentiveToken = fields.incentiveToken;
        this.incentiveBalanceValue = fields.incentiveBalanceValue;
        this.u64Padding = fields.u64Padding;
    }
    RemoveIncentiveTokenEvent.reified = function () {
        var _this = this;
        return {
            typeName: RemoveIncentiveTokenEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RemoveIncentiveTokenEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return RemoveIncentiveTokenEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return RemoveIncentiveTokenEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return RemoveIncentiveTokenEvent.fromBcs(data); },
            bcs: RemoveIncentiveTokenEvent.bcs,
            fromJSONField: function (field) { return RemoveIncentiveTokenEvent.fromJSONField(field); },
            fromJSON: function (json) { return RemoveIncentiveTokenEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return RemoveIncentiveTokenEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RemoveIncentiveTokenEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new RemoveIncentiveTokenEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(RemoveIncentiveTokenEvent, "r", {
        get: function () {
            return RemoveIncentiveTokenEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    RemoveIncentiveTokenEvent.phantom = function () {
        return (0, reified_1.phantom)(RemoveIncentiveTokenEvent.reified());
    };
    Object.defineProperty(RemoveIncentiveTokenEvent, "p", {
        get: function () {
            return RemoveIncentiveTokenEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoveIncentiveTokenEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RemoveIncentiveTokenEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                incentive_token: structs_1.TypeName.bcs,
                incentive_balance_value: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    RemoveIncentiveTokenEvent.fromFields = function (fields) {
        return RemoveIncentiveTokenEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            incentiveToken: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.incentive_token),
            incentiveBalanceValue: (0, reified_1.decodeFromFields)("u64", fields.incentive_balance_value),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    RemoveIncentiveTokenEvent.fromFieldsWithTypes = function (item) {
        if (!isRemoveIncentiveTokenEvent(item.type)) {
            throw new Error("not a RemoveIncentiveTokenEvent type");
        }
        return RemoveIncentiveTokenEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            incentiveToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.incentive_token),
            incentiveBalanceValue: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_balance_value),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    RemoveIncentiveTokenEvent.fromBcs = function (data) {
        return RemoveIncentiveTokenEvent.fromFields(RemoveIncentiveTokenEvent.bcs.parse(data));
    };
    RemoveIncentiveTokenEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            incentiveToken: this.incentiveToken.toJSONField(),
            incentiveBalanceValue: this.incentiveBalanceValue.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    RemoveIncentiveTokenEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    RemoveIncentiveTokenEvent.fromJSONField = function (field) {
        return RemoveIncentiveTokenEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            incentiveToken: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.incentiveToken),
            incentiveBalanceValue: (0, reified_1.decodeFromJSONField)("u64", field.incentiveBalanceValue),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    RemoveIncentiveTokenEvent.fromJSON = function (json) {
        if (json.$typeName !== RemoveIncentiveTokenEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return RemoveIncentiveTokenEvent.fromJSONField(json);
    };
    RemoveIncentiveTokenEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemoveIncentiveTokenEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a RemoveIncentiveTokenEvent object"));
        }
        return RemoveIncentiveTokenEvent.fromFieldsWithTypes(content);
    };
    RemoveIncentiveTokenEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RemoveIncentiveTokenEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRemoveIncentiveTokenEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RemoveIncentiveTokenEvent object"));
                        }
                        return [2 /*return*/, RemoveIncentiveTokenEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RemoveIncentiveTokenEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::RemoveIncentiveTokenEvent";
    RemoveIncentiveTokenEvent.$numTypeParams = 0;
    return RemoveIncentiveTokenEvent;
}());
exports.RemoveIncentiveTokenEvent = RemoveIncentiveTokenEvent;
/* ============================== StakeEvent =============================== */
function isStakeEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakeEvent";
}
var StakeEvent = /** @class */ (function () {
    function StakeEvent(typeArgs, fields) {
        this.$typeName = StakeEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([StakeEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.stakeAmount = fields.stakeAmount;
        this.userShareId = fields.userShareId;
        this.stakeTsMs = fields.stakeTsMs;
        this.lastIncentivePriceIndex = fields.lastIncentivePriceIndex;
        this.u64Padding = fields.u64Padding;
    }
    StakeEvent.reified = function () {
        var _this = this;
        return {
            typeName: StakeEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([StakeEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return StakeEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return StakeEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return StakeEvent.fromBcs(data); },
            bcs: StakeEvent.bcs,
            fromJSONField: function (field) { return StakeEvent.fromJSONField(field); },
            fromJSON: function (json) { return StakeEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return StakeEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, StakeEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new StakeEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(StakeEvent, "r", {
        get: function () {
            return StakeEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    StakeEvent.phantom = function () {
        return (0, reified_1.phantom)(StakeEvent.reified());
    };
    Object.defineProperty(StakeEvent, "p", {
        get: function () {
            return StakeEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StakeEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("StakeEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                lp_token_type: structs_1.TypeName.bcs,
                stake_amount: bcs_1.bcs.u64(),
                user_share_id: bcs_1.bcs.u64(),
                stake_ts_ms: bcs_1.bcs.u64(),
                last_incentive_price_index: structs_3.VecMap.bcs(structs_1.TypeName.bcs, bcs_1.bcs.u64()),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    StakeEvent.fromFields = function (fields) {
        return StakeEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            lpTokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.lp_token_type),
            stakeAmount: (0, reified_1.decodeFromFields)("u64", fields.stake_amount),
            userShareId: (0, reified_1.decodeFromFields)("u64", fields.user_share_id),
            stakeTsMs: (0, reified_1.decodeFromFields)("u64", fields.stake_ts_ms),
            lastIncentivePriceIndex: (0, reified_1.decodeFromFields)(structs_3.VecMap.reified(structs_1.TypeName.reified(), "u64"), fields.last_incentive_price_index),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    StakeEvent.fromFieldsWithTypes = function (item) {
        if (!isStakeEvent(item.type)) {
            throw new Error("not a StakeEvent type");
        }
        return StakeEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            lpTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.lp_token_type),
            stakeAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stake_amount),
            userShareId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.user_share_id),
            stakeTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stake_ts_ms),
            lastIncentivePriceIndex: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.VecMap.reified(structs_1.TypeName.reified(), "u64"), item.fields.last_incentive_price_index),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    StakeEvent.fromBcs = function (data) {
        return StakeEvent.fromFields(StakeEvent.bcs.parse(data));
    };
    StakeEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            stakeAmount: this.stakeAmount.toString(),
            userShareId: this.userShareId.toString(),
            stakeTsMs: this.stakeTsMs.toString(),
            lastIncentivePriceIndex: this.lastIncentivePriceIndex.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    StakeEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    StakeEvent.fromJSONField = function (field) {
        return StakeEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            lpTokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.lpTokenType),
            stakeAmount: (0, reified_1.decodeFromJSONField)("u64", field.stakeAmount),
            userShareId: (0, reified_1.decodeFromJSONField)("u64", field.userShareId),
            stakeTsMs: (0, reified_1.decodeFromJSONField)("u64", field.stakeTsMs),
            lastIncentivePriceIndex: (0, reified_1.decodeFromJSONField)(structs_3.VecMap.reified(structs_1.TypeName.reified(), "u64"), field.lastIncentivePriceIndex),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    StakeEvent.fromJSON = function (json) {
        if (json.$typeName !== StakeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return StakeEvent.fromJSONField(json);
    };
    StakeEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isStakeEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a StakeEvent object"));
        }
        return StakeEvent.fromFieldsWithTypes(content);
    };
    StakeEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching StakeEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakeEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a StakeEvent object"));
                        }
                        return [2 /*return*/, StakeEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    StakeEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakeEvent";
    StakeEvent.$numTypeParams = 0;
    return StakeEvent;
}());
exports.StakeEvent = StakeEvent;
/* ============================== StakePool =============================== */
function isStakePool(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePool";
}
var StakePool = /** @class */ (function () {
    function StakePool(typeArgs, fields) {
        this.$typeName = StakePool.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([StakePool.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        this.poolInfo = fields.poolInfo;
        this.config = fields.config;
        this.incentives = fields.incentives;
        this.u64Padding = fields.u64Padding;
    }
    StakePool.reified = function () {
        var _this = this;
        return {
            typeName: StakePool.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([StakePool.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return StakePool.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return StakePool.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return StakePool.fromBcs(data); },
            bcs: StakePool.bcs,
            fromJSONField: function (field) { return StakePool.fromJSONField(field); },
            fromJSON: function (json) { return StakePool.fromJSON(json); },
            fromSuiParsedData: function (content) { return StakePool.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, StakePool.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new StakePool([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(StakePool, "r", {
        get: function () {
            return StakePool.reified();
        },
        enumerable: false,
        configurable: true
    });
    StakePool.phantom = function () {
        return (0, reified_1.phantom)(StakePool.reified());
    };
    Object.defineProperty(StakePool, "p", {
        get: function () {
            return StakePool.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StakePool, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("StakePool", {
                id: structs_2.UID.bcs,
                pool_info: StakePoolInfo.bcs,
                config: StakePoolConfig.bcs,
                incentives: bcs_1.bcs.vector(Incentive.bcs),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    StakePool.fromFields = function (fields) {
        return StakePool.reified().new({
            id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id),
            poolInfo: (0, reified_1.decodeFromFields)(StakePoolInfo.reified(), fields.pool_info),
            config: (0, reified_1.decodeFromFields)(StakePoolConfig.reified(), fields.config),
            incentives: (0, reified_1.decodeFromFields)(reified.vector(Incentive.reified()), fields.incentives),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    StakePool.fromFieldsWithTypes = function (item) {
        if (!isStakePool(item.type)) {
            throw new Error("not a StakePool type");
        }
        return StakePool.reified().new({
            id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id),
            poolInfo: (0, reified_1.decodeFromFieldsWithTypes)(StakePoolInfo.reified(), item.fields.pool_info),
            config: (0, reified_1.decodeFromFieldsWithTypes)(StakePoolConfig.reified(), item.fields.config),
            incentives: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(Incentive.reified()), item.fields.incentives),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    StakePool.fromBcs = function (data) {
        return StakePool.fromFields(StakePool.bcs.parse(data));
    };
    StakePool.prototype.toJSONField = function () {
        return {
            id: this.id,
            poolInfo: this.poolInfo.toJSONField(),
            config: this.config.toJSONField(),
            incentives: (0, reified_1.fieldToJSON)("vector<0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::Incentive>", this.incentives),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    StakePool.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    StakePool.fromJSONField = function (field) {
        return StakePool.reified().new({
            id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id),
            poolInfo: (0, reified_1.decodeFromJSONField)(StakePoolInfo.reified(), field.poolInfo),
            config: (0, reified_1.decodeFromJSONField)(StakePoolConfig.reified(), field.config),
            incentives: (0, reified_1.decodeFromJSONField)(reified.vector(Incentive.reified()), field.incentives),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    StakePool.fromJSON = function (json) {
        if (json.$typeName !== StakePool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return StakePool.fromJSONField(json);
    };
    StakePool.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isStakePool(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a StakePool object"));
        }
        return StakePool.fromFieldsWithTypes(content);
    };
    StakePool.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching StakePool object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakePool(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a StakePool object"));
                        }
                        return [2 /*return*/, StakePool.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    StakePool.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePool";
    StakePool.$numTypeParams = 0;
    return StakePool;
}());
exports.StakePool = StakePool;
/* ============================== StakePoolConfig =============================== */
function isStakePoolConfig(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolConfig";
}
var StakePoolConfig = /** @class */ (function () {
    function StakePoolConfig(typeArgs, fields) {
        this.$typeName = StakePoolConfig.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([StakePoolConfig.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.unlockCountdownTsMs = fields.unlockCountdownTsMs;
        this.u64Padding = fields.u64Padding;
    }
    StakePoolConfig.reified = function () {
        var _this = this;
        return {
            typeName: StakePoolConfig.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([StakePoolConfig.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return StakePoolConfig.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return StakePoolConfig.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return StakePoolConfig.fromBcs(data); },
            bcs: StakePoolConfig.bcs,
            fromJSONField: function (field) { return StakePoolConfig.fromJSONField(field); },
            fromJSON: function (json) { return StakePoolConfig.fromJSON(json); },
            fromSuiParsedData: function (content) { return StakePoolConfig.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, StakePoolConfig.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new StakePoolConfig([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(StakePoolConfig, "r", {
        get: function () {
            return StakePoolConfig.reified();
        },
        enumerable: false,
        configurable: true
    });
    StakePoolConfig.phantom = function () {
        return (0, reified_1.phantom)(StakePoolConfig.reified());
    };
    Object.defineProperty(StakePoolConfig, "p", {
        get: function () {
            return StakePoolConfig.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StakePoolConfig, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("StakePoolConfig", {
                unlock_countdown_ts_ms: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    StakePoolConfig.fromFields = function (fields) {
        return StakePoolConfig.reified().new({
            unlockCountdownTsMs: (0, reified_1.decodeFromFields)("u64", fields.unlock_countdown_ts_ms),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    StakePoolConfig.fromFieldsWithTypes = function (item) {
        if (!isStakePoolConfig(item.type)) {
            throw new Error("not a StakePoolConfig type");
        }
        return StakePoolConfig.reified().new({
            unlockCountdownTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unlock_countdown_ts_ms),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    StakePoolConfig.fromBcs = function (data) {
        return StakePoolConfig.fromFields(StakePoolConfig.bcs.parse(data));
    };
    StakePoolConfig.prototype.toJSONField = function () {
        return {
            unlockCountdownTsMs: this.unlockCountdownTsMs.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    StakePoolConfig.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    StakePoolConfig.fromJSONField = function (field) {
        return StakePoolConfig.reified().new({
            unlockCountdownTsMs: (0, reified_1.decodeFromJSONField)("u64", field.unlockCountdownTsMs),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    StakePoolConfig.fromJSON = function (json) {
        if (json.$typeName !== StakePoolConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return StakePoolConfig.fromJSONField(json);
    };
    StakePoolConfig.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isStakePoolConfig(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a StakePoolConfig object"));
        }
        return StakePoolConfig.fromFieldsWithTypes(content);
    };
    StakePoolConfig.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching StakePoolConfig object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakePoolConfig(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a StakePoolConfig object"));
                        }
                        return [2 /*return*/, StakePoolConfig.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    StakePoolConfig.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolConfig";
    StakePoolConfig.$numTypeParams = 0;
    return StakePoolConfig;
}());
exports.StakePoolConfig = StakePoolConfig;
/* ============================== StakePoolInfo =============================== */
function isStakePoolInfo(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolInfo";
}
var StakePoolInfo = /** @class */ (function () {
    function StakePoolInfo(typeArgs, fields) {
        this.$typeName = StakePoolInfo.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([StakePoolInfo.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.stakeToken = fields.stakeToken;
        this.index = fields.index;
        this.nextUserShareId = fields.nextUserShareId;
        this.totalShare = fields.totalShare;
        this.active = fields.active;
        this.u64Padding = fields.u64Padding;
    }
    StakePoolInfo.reified = function () {
        var _this = this;
        return {
            typeName: StakePoolInfo.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([StakePoolInfo.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return StakePoolInfo.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return StakePoolInfo.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return StakePoolInfo.fromBcs(data); },
            bcs: StakePoolInfo.bcs,
            fromJSONField: function (field) { return StakePoolInfo.fromJSONField(field); },
            fromJSON: function (json) { return StakePoolInfo.fromJSON(json); },
            fromSuiParsedData: function (content) { return StakePoolInfo.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, StakePoolInfo.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new StakePoolInfo([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(StakePoolInfo, "r", {
        get: function () {
            return StakePoolInfo.reified();
        },
        enumerable: false,
        configurable: true
    });
    StakePoolInfo.phantom = function () {
        return (0, reified_1.phantom)(StakePoolInfo.reified());
    };
    Object.defineProperty(StakePoolInfo, "p", {
        get: function () {
            return StakePoolInfo.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StakePoolInfo, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("StakePoolInfo", {
                stake_token: structs_1.TypeName.bcs,
                index: bcs_1.bcs.u64(),
                next_user_share_id: bcs_1.bcs.u64(),
                total_share: bcs_1.bcs.u64(),
                active: bcs_1.bcs.bool(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    StakePoolInfo.fromFields = function (fields) {
        return StakePoolInfo.reified().new({
            stakeToken: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.stake_token),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            nextUserShareId: (0, reified_1.decodeFromFields)("u64", fields.next_user_share_id),
            totalShare: (0, reified_1.decodeFromFields)("u64", fields.total_share),
            active: (0, reified_1.decodeFromFields)("bool", fields.active),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    StakePoolInfo.fromFieldsWithTypes = function (item) {
        if (!isStakePoolInfo(item.type)) {
            throw new Error("not a StakePoolInfo type");
        }
        return StakePoolInfo.reified().new({
            stakeToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.stake_token),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            nextUserShareId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_user_share_id),
            totalShare: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_share),
            active: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.active),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    StakePoolInfo.fromBcs = function (data) {
        return StakePoolInfo.fromFields(StakePoolInfo.bcs.parse(data));
    };
    StakePoolInfo.prototype.toJSONField = function () {
        return {
            stakeToken: this.stakeToken.toJSONField(),
            index: this.index.toString(),
            nextUserShareId: this.nextUserShareId.toString(),
            totalShare: this.totalShare.toString(),
            active: this.active,
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    StakePoolInfo.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    StakePoolInfo.fromJSONField = function (field) {
        return StakePoolInfo.reified().new({
            stakeToken: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.stakeToken),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            nextUserShareId: (0, reified_1.decodeFromJSONField)("u64", field.nextUserShareId),
            totalShare: (0, reified_1.decodeFromJSONField)("u64", field.totalShare),
            active: (0, reified_1.decodeFromJSONField)("bool", field.active),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    StakePoolInfo.fromJSON = function (json) {
        if (json.$typeName !== StakePoolInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return StakePoolInfo.fromJSONField(json);
    };
    StakePoolInfo.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isStakePoolInfo(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a StakePoolInfo object"));
        }
        return StakePoolInfo.fromFieldsWithTypes(content);
    };
    StakePoolInfo.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching StakePoolInfo object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakePoolInfo(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a StakePoolInfo object"));
                        }
                        return [2 /*return*/, StakePoolInfo.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    StakePoolInfo.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolInfo";
    StakePoolInfo.$numTypeParams = 0;
    return StakePoolInfo;
}());
exports.StakePoolInfo = StakePoolInfo;
/* ============================== StakePoolRegistry =============================== */
function isStakePoolRegistry(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolRegistry";
}
var StakePoolRegistry = /** @class */ (function () {
    function StakePoolRegistry(typeArgs, fields) {
        this.$typeName = StakePoolRegistry.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([StakePoolRegistry.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        this.numPool = fields.numPool;
    }
    StakePoolRegistry.reified = function () {
        var _this = this;
        return {
            typeName: StakePoolRegistry.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([StakePoolRegistry.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return StakePoolRegistry.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return StakePoolRegistry.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return StakePoolRegistry.fromBcs(data); },
            bcs: StakePoolRegistry.bcs,
            fromJSONField: function (field) { return StakePoolRegistry.fromJSONField(field); },
            fromJSON: function (json) { return StakePoolRegistry.fromJSON(json); },
            fromSuiParsedData: function (content) { return StakePoolRegistry.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, StakePoolRegistry.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new StakePoolRegistry([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(StakePoolRegistry, "r", {
        get: function () {
            return StakePoolRegistry.reified();
        },
        enumerable: false,
        configurable: true
    });
    StakePoolRegistry.phantom = function () {
        return (0, reified_1.phantom)(StakePoolRegistry.reified());
    };
    Object.defineProperty(StakePoolRegistry, "p", {
        get: function () {
            return StakePoolRegistry.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StakePoolRegistry, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("StakePoolRegistry", {
                id: structs_2.UID.bcs,
                num_pool: bcs_1.bcs.u64(),
            });
        },
        enumerable: false,
        configurable: true
    });
    StakePoolRegistry.fromFields = function (fields) {
        return StakePoolRegistry.reified().new({
            id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id),
            numPool: (0, reified_1.decodeFromFields)("u64", fields.num_pool),
        });
    };
    StakePoolRegistry.fromFieldsWithTypes = function (item) {
        if (!isStakePoolRegistry(item.type)) {
            throw new Error("not a StakePoolRegistry type");
        }
        return StakePoolRegistry.reified().new({
            id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id),
            numPool: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.num_pool),
        });
    };
    StakePoolRegistry.fromBcs = function (data) {
        return StakePoolRegistry.fromFields(StakePoolRegistry.bcs.parse(data));
    };
    StakePoolRegistry.prototype.toJSONField = function () {
        return {
            id: this.id,
            numPool: this.numPool.toString(),
        };
    };
    StakePoolRegistry.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    StakePoolRegistry.fromJSONField = function (field) {
        return StakePoolRegistry.reified().new({
            id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id),
            numPool: (0, reified_1.decodeFromJSONField)("u64", field.numPool),
        });
    };
    StakePoolRegistry.fromJSON = function (json) {
        if (json.$typeName !== StakePoolRegistry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return StakePoolRegistry.fromJSONField(json);
    };
    StakePoolRegistry.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isStakePoolRegistry(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a StakePoolRegistry object"));
        }
        return StakePoolRegistry.fromFieldsWithTypes(content);
    };
    StakePoolRegistry.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching StakePoolRegistry object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakePoolRegistry(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a StakePoolRegistry object"));
                        }
                        return [2 /*return*/, StakePoolRegistry.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    StakePoolRegistry.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolRegistry";
    StakePoolRegistry.$numTypeParams = 0;
    return StakePoolRegistry;
}());
exports.StakePoolRegistry = StakePoolRegistry;
/* ============================== UnstakeEvent =============================== */
function isUnstakeEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UnstakeEvent";
}
var UnstakeEvent = /** @class */ (function () {
    function UnstakeEvent(typeArgs, fields) {
        this.$typeName = UnstakeEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UnstakeEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.userShareId = fields.userShareId;
        this.unstakeAmount = fields.unstakeAmount;
        this.unstakeTsMs = fields.unstakeTsMs;
        this.u64Padding = fields.u64Padding;
    }
    UnstakeEvent.reified = function () {
        var _this = this;
        return {
            typeName: UnstakeEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UnstakeEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return UnstakeEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return UnstakeEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return UnstakeEvent.fromBcs(data); },
            bcs: UnstakeEvent.bcs,
            fromJSONField: function (field) { return UnstakeEvent.fromJSONField(field); },
            fromJSON: function (json) { return UnstakeEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return UnstakeEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UnstakeEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new UnstakeEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(UnstakeEvent, "r", {
        get: function () {
            return UnstakeEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    UnstakeEvent.phantom = function () {
        return (0, reified_1.phantom)(UnstakeEvent.reified());
    };
    Object.defineProperty(UnstakeEvent, "p", {
        get: function () {
            return UnstakeEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UnstakeEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UnstakeEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                lp_token_type: structs_1.TypeName.bcs,
                user_share_id: bcs_1.bcs.u64(),
                unstake_amount: bcs_1.bcs.u64(),
                unstake_ts_ms: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    UnstakeEvent.fromFields = function (fields) {
        return UnstakeEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            lpTokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.lp_token_type),
            userShareId: (0, reified_1.decodeFromFields)("u64", fields.user_share_id),
            unstakeAmount: (0, reified_1.decodeFromFields)("u64", fields.unstake_amount),
            unstakeTsMs: (0, reified_1.decodeFromFields)("u64", fields.unstake_ts_ms),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    UnstakeEvent.fromFieldsWithTypes = function (item) {
        if (!isUnstakeEvent(item.type)) {
            throw new Error("not a UnstakeEvent type");
        }
        return UnstakeEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            lpTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.lp_token_type),
            userShareId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.user_share_id),
            unstakeAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unstake_amount),
            unstakeTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unstake_ts_ms),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    UnstakeEvent.fromBcs = function (data) {
        return UnstakeEvent.fromFields(UnstakeEvent.bcs.parse(data));
    };
    UnstakeEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            userShareId: this.userShareId.toString(),
            unstakeAmount: this.unstakeAmount.toString(),
            unstakeTsMs: this.unstakeTsMs.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    UnstakeEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    UnstakeEvent.fromJSONField = function (field) {
        return UnstakeEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            lpTokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.lpTokenType),
            userShareId: (0, reified_1.decodeFromJSONField)("u64", field.userShareId),
            unstakeAmount: (0, reified_1.decodeFromJSONField)("u64", field.unstakeAmount),
            unstakeTsMs: (0, reified_1.decodeFromJSONField)("u64", field.unstakeTsMs),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    UnstakeEvent.fromJSON = function (json) {
        if (json.$typeName !== UnstakeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return UnstakeEvent.fromJSONField(json);
    };
    UnstakeEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUnstakeEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a UnstakeEvent object"));
        }
        return UnstakeEvent.fromFieldsWithTypes(content);
    };
    UnstakeEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UnstakeEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUnstakeEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UnstakeEvent object"));
                        }
                        return [2 /*return*/, UnstakeEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UnstakeEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UnstakeEvent";
    UnstakeEvent.$numTypeParams = 0;
    return UnstakeEvent;
}());
exports.UnstakeEvent = UnstakeEvent;
/* ============================== UpdateIncentiveConfigEvent =============================== */
function isUpdateIncentiveConfigEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UpdateIncentiveConfigEvent";
}
var UpdateIncentiveConfigEvent = /** @class */ (function () {
    function UpdateIncentiveConfigEvent(typeArgs, fields) {
        this.$typeName = UpdateIncentiveConfigEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateIncentiveConfigEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.previousIncentiveConfig = fields.previousIncentiveConfig;
        this.newIncentiveConfig = fields.newIncentiveConfig;
        this.u64Padding = fields.u64Padding;
    }
    UpdateIncentiveConfigEvent.reified = function () {
        var _this = this;
        return {
            typeName: UpdateIncentiveConfigEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateIncentiveConfigEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return UpdateIncentiveConfigEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return UpdateIncentiveConfigEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return UpdateIncentiveConfigEvent.fromBcs(data); },
            bcs: UpdateIncentiveConfigEvent.bcs,
            fromJSONField: function (field) { return UpdateIncentiveConfigEvent.fromJSONField(field); },
            fromJSON: function (json) { return UpdateIncentiveConfigEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return UpdateIncentiveConfigEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateIncentiveConfigEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new UpdateIncentiveConfigEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(UpdateIncentiveConfigEvent, "r", {
        get: function () {
            return UpdateIncentiveConfigEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    UpdateIncentiveConfigEvent.phantom = function () {
        return (0, reified_1.phantom)(UpdateIncentiveConfigEvent.reified());
    };
    Object.defineProperty(UpdateIncentiveConfigEvent, "p", {
        get: function () {
            return UpdateIncentiveConfigEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateIncentiveConfigEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateIncentiveConfigEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                previous_incentive_config: IncentiveConfig.bcs,
                new_incentive_config: IncentiveConfig.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    UpdateIncentiveConfigEvent.fromFields = function (fields) {
        return UpdateIncentiveConfigEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            previousIncentiveConfig: (0, reified_1.decodeFromFields)(IncentiveConfig.reified(), fields.previous_incentive_config),
            newIncentiveConfig: (0, reified_1.decodeFromFields)(IncentiveConfig.reified(), fields.new_incentive_config),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    UpdateIncentiveConfigEvent.fromFieldsWithTypes = function (item) {
        if (!isUpdateIncentiveConfigEvent(item.type)) {
            throw new Error("not a UpdateIncentiveConfigEvent type");
        }
        return UpdateIncentiveConfigEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            previousIncentiveConfig: (0, reified_1.decodeFromFieldsWithTypes)(IncentiveConfig.reified(), item.fields.previous_incentive_config),
            newIncentiveConfig: (0, reified_1.decodeFromFieldsWithTypes)(IncentiveConfig.reified(), item.fields.new_incentive_config),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    UpdateIncentiveConfigEvent.fromBcs = function (data) {
        return UpdateIncentiveConfigEvent.fromFields(UpdateIncentiveConfigEvent.bcs.parse(data));
    };
    UpdateIncentiveConfigEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            previousIncentiveConfig: this.previousIncentiveConfig.toJSONField(),
            newIncentiveConfig: this.newIncentiveConfig.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    UpdateIncentiveConfigEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    UpdateIncentiveConfigEvent.fromJSONField = function (field) {
        return UpdateIncentiveConfigEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            previousIncentiveConfig: (0, reified_1.decodeFromJSONField)(IncentiveConfig.reified(), field.previousIncentiveConfig),
            newIncentiveConfig: (0, reified_1.decodeFromJSONField)(IncentiveConfig.reified(), field.newIncentiveConfig),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    UpdateIncentiveConfigEvent.fromJSON = function (json) {
        if (json.$typeName !== UpdateIncentiveConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return UpdateIncentiveConfigEvent.fromJSONField(json);
    };
    UpdateIncentiveConfigEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateIncentiveConfigEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a UpdateIncentiveConfigEvent object"));
        }
        return UpdateIncentiveConfigEvent.fromFieldsWithTypes(content);
    };
    UpdateIncentiveConfigEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateIncentiveConfigEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateIncentiveConfigEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateIncentiveConfigEvent object"));
                        }
                        return [2 /*return*/, UpdateIncentiveConfigEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateIncentiveConfigEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UpdateIncentiveConfigEvent";
    UpdateIncentiveConfigEvent.$numTypeParams = 0;
    return UpdateIncentiveConfigEvent;
}());
exports.UpdateIncentiveConfigEvent = UpdateIncentiveConfigEvent;
/* ============================== UpdateUnlockCountdownTsMsEvent =============================== */
function isUpdateUnlockCountdownTsMsEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UpdateUnlockCountdownTsMsEvent";
}
var UpdateUnlockCountdownTsMsEvent = /** @class */ (function () {
    function UpdateUnlockCountdownTsMsEvent(typeArgs, fields) {
        this.$typeName = UpdateUnlockCountdownTsMsEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateUnlockCountdownTsMsEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.previousUnlockCountdownTsMs = fields.previousUnlockCountdownTsMs;
        this.newUnlockCountdownTsMs = fields.newUnlockCountdownTsMs;
        this.u64Padding = fields.u64Padding;
    }
    UpdateUnlockCountdownTsMsEvent.reified = function () {
        var _this = this;
        return {
            typeName: UpdateUnlockCountdownTsMsEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateUnlockCountdownTsMsEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return UpdateUnlockCountdownTsMsEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return UpdateUnlockCountdownTsMsEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return UpdateUnlockCountdownTsMsEvent.fromBcs(data); },
            bcs: UpdateUnlockCountdownTsMsEvent.bcs,
            fromJSONField: function (field) { return UpdateUnlockCountdownTsMsEvent.fromJSONField(field); },
            fromJSON: function (json) { return UpdateUnlockCountdownTsMsEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return UpdateUnlockCountdownTsMsEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateUnlockCountdownTsMsEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new UpdateUnlockCountdownTsMsEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(UpdateUnlockCountdownTsMsEvent, "r", {
        get: function () {
            return UpdateUnlockCountdownTsMsEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    UpdateUnlockCountdownTsMsEvent.phantom = function () {
        return (0, reified_1.phantom)(UpdateUnlockCountdownTsMsEvent.reified());
    };
    Object.defineProperty(UpdateUnlockCountdownTsMsEvent, "p", {
        get: function () {
            return UpdateUnlockCountdownTsMsEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateUnlockCountdownTsMsEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateUnlockCountdownTsMsEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                previous_unlock_countdown_ts_ms: bcs_1.bcs.u64(),
                new_unlock_countdown_ts_ms: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    UpdateUnlockCountdownTsMsEvent.fromFields = function (fields) {
        return UpdateUnlockCountdownTsMsEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            previousUnlockCountdownTsMs: (0, reified_1.decodeFromFields)("u64", fields.previous_unlock_countdown_ts_ms),
            newUnlockCountdownTsMs: (0, reified_1.decodeFromFields)("u64", fields.new_unlock_countdown_ts_ms),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    UpdateUnlockCountdownTsMsEvent.fromFieldsWithTypes = function (item) {
        if (!isUpdateUnlockCountdownTsMsEvent(item.type)) {
            throw new Error("not a UpdateUnlockCountdownTsMsEvent type");
        }
        return UpdateUnlockCountdownTsMsEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            previousUnlockCountdownTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.previous_unlock_countdown_ts_ms),
            newUnlockCountdownTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_unlock_countdown_ts_ms),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    UpdateUnlockCountdownTsMsEvent.fromBcs = function (data) {
        return UpdateUnlockCountdownTsMsEvent.fromFields(UpdateUnlockCountdownTsMsEvent.bcs.parse(data));
    };
    UpdateUnlockCountdownTsMsEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            previousUnlockCountdownTsMs: this.previousUnlockCountdownTsMs.toString(),
            newUnlockCountdownTsMs: this.newUnlockCountdownTsMs.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    UpdateUnlockCountdownTsMsEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    UpdateUnlockCountdownTsMsEvent.fromJSONField = function (field) {
        return UpdateUnlockCountdownTsMsEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            previousUnlockCountdownTsMs: (0, reified_1.decodeFromJSONField)("u64", field.previousUnlockCountdownTsMs),
            newUnlockCountdownTsMs: (0, reified_1.decodeFromJSONField)("u64", field.newUnlockCountdownTsMs),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    UpdateUnlockCountdownTsMsEvent.fromJSON = function (json) {
        if (json.$typeName !== UpdateUnlockCountdownTsMsEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return UpdateUnlockCountdownTsMsEvent.fromJSONField(json);
    };
    UpdateUnlockCountdownTsMsEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateUnlockCountdownTsMsEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a UpdateUnlockCountdownTsMsEvent object"));
        }
        return UpdateUnlockCountdownTsMsEvent.fromFieldsWithTypes(content);
    };
    UpdateUnlockCountdownTsMsEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateUnlockCountdownTsMsEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateUnlockCountdownTsMsEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateUnlockCountdownTsMsEvent object"));
                        }
                        return [2 /*return*/, UpdateUnlockCountdownTsMsEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateUnlockCountdownTsMsEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UpdateUnlockCountdownTsMsEvent";
    UpdateUnlockCountdownTsMsEvent.$numTypeParams = 0;
    return UpdateUnlockCountdownTsMsEvent;
}());
exports.UpdateUnlockCountdownTsMsEvent = UpdateUnlockCountdownTsMsEvent;
/* ============================== WithdrawIncentiveEvent =============================== */
function isWithdrawIncentiveEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::WithdrawIncentiveEvent";
}
var WithdrawIncentiveEvent = /** @class */ (function () {
    function WithdrawIncentiveEvent(typeArgs, fields) {
        this.$typeName = WithdrawIncentiveEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([WithdrawIncentiveEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        this.index = fields.index;
        this.incentiveTokenType = fields.incentiveTokenType;
        this.withdrawalAmount = fields.withdrawalAmount;
        this.u64Padding = fields.u64Padding;
    }
    WithdrawIncentiveEvent.reified = function () {
        var _this = this;
        return {
            typeName: WithdrawIncentiveEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([WithdrawIncentiveEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return WithdrawIncentiveEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return WithdrawIncentiveEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return WithdrawIncentiveEvent.fromBcs(data); },
            bcs: WithdrawIncentiveEvent.bcs,
            fromJSONField: function (field) { return WithdrawIncentiveEvent.fromJSONField(field); },
            fromJSON: function (json) { return WithdrawIncentiveEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return WithdrawIncentiveEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, WithdrawIncentiveEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new WithdrawIncentiveEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(WithdrawIncentiveEvent, "r", {
        get: function () {
            return WithdrawIncentiveEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    WithdrawIncentiveEvent.phantom = function () {
        return (0, reified_1.phantom)(WithdrawIncentiveEvent.reified());
    };
    Object.defineProperty(WithdrawIncentiveEvent, "p", {
        get: function () {
            return WithdrawIncentiveEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WithdrawIncentiveEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("WithdrawIncentiveEvent", {
                sender: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                index: bcs_1.bcs.u64(),
                incentive_token_type: structs_1.TypeName.bcs,
                withdrawal_amount: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    WithdrawIncentiveEvent.fromFields = function (fields) {
        return WithdrawIncentiveEvent.reified().new({
            sender: (0, reified_1.decodeFromFields)("address", fields.sender),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            incentiveTokenType: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.incentive_token_type),
            withdrawalAmount: (0, reified_1.decodeFromFields)("u64", fields.withdrawal_amount),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    WithdrawIncentiveEvent.fromFieldsWithTypes = function (item) {
        if (!isWithdrawIncentiveEvent(item.type)) {
            throw new Error("not a WithdrawIncentiveEvent type");
        }
        return WithdrawIncentiveEvent.reified().new({
            sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            incentiveTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.incentive_token_type),
            withdrawalAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.withdrawal_amount),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    WithdrawIncentiveEvent.fromBcs = function (data) {
        return WithdrawIncentiveEvent.fromFields(WithdrawIncentiveEvent.bcs.parse(data));
    };
    WithdrawIncentiveEvent.prototype.toJSONField = function () {
        return {
            sender: this.sender,
            index: this.index.toString(),
            incentiveTokenType: this.incentiveTokenType.toJSONField(),
            withdrawalAmount: this.withdrawalAmount.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    WithdrawIncentiveEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    WithdrawIncentiveEvent.fromJSONField = function (field) {
        return WithdrawIncentiveEvent.reified().new({
            sender: (0, reified_1.decodeFromJSONField)("address", field.sender),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            incentiveTokenType: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.incentiveTokenType),
            withdrawalAmount: (0, reified_1.decodeFromJSONField)("u64", field.withdrawalAmount),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    WithdrawIncentiveEvent.fromJSON = function (json) {
        if (json.$typeName !== WithdrawIncentiveEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return WithdrawIncentiveEvent.fromJSONField(json);
    };
    WithdrawIncentiveEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isWithdrawIncentiveEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a WithdrawIncentiveEvent object"));
        }
        return WithdrawIncentiveEvent.fromFieldsWithTypes(content);
    };
    WithdrawIncentiveEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching WithdrawIncentiveEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isWithdrawIncentiveEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a WithdrawIncentiveEvent object"));
                        }
                        return [2 /*return*/, WithdrawIncentiveEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    WithdrawIncentiveEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::WithdrawIncentiveEvent";
    WithdrawIncentiveEvent.$numTypeParams = 0;
    return WithdrawIncentiveEvent;
}());
exports.WithdrawIncentiveEvent = WithdrawIncentiveEvent;
