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
exports.WithdrawEvent = exports.VaultConfig = exports.UnsubscribeEvent = exports.TransferBidReceiptEvent = exports.TerminateVaultEvent = exports.TerminateAuctionEvent = exports.TYPUS_DOV_SINGLE = exports.SettlementInfo = exports.SettleEvent = exports.RefundEvent = exports.ReduceFundEvent = exports.RedeemEvent = exports.RecoupEvent = exports.RaiseFundEvent = exports.PortfolioVault = exports.PayoffConfig = exports.OtcEvent = exports.OracleInfo = exports.NewBidEvent = exports.NewAuctionEvent = exports.Info = exports.HarvestEvent = exports.ExerciseEvent = exports.DropVaultEvent = exports.DepositSnapshot = exports.DepositEvent = exports.DeliveryInfos = exports.DeliveryInfo = exports.DeliveryEvent = exports.CompoundEvent = exports.CloseEvent = exports.ClaimEvent = exports.AdditionalConfig = exports.ActivateEvent = exports.Registry = exports.Config = void 0;
exports.isConfig = isConfig;
exports.isRegistry = isRegistry;
exports.isActivateEvent = isActivateEvent;
exports.isAdditionalConfig = isAdditionalConfig;
exports.isClaimEvent = isClaimEvent;
exports.isCloseEvent = isCloseEvent;
exports.isCompoundEvent = isCompoundEvent;
exports.isDeliveryEvent = isDeliveryEvent;
exports.isDeliveryInfo = isDeliveryInfo;
exports.isDeliveryInfos = isDeliveryInfos;
exports.isDepositEvent = isDepositEvent;
exports.isDepositSnapshot = isDepositSnapshot;
exports.isDropVaultEvent = isDropVaultEvent;
exports.isExerciseEvent = isExerciseEvent;
exports.isHarvestEvent = isHarvestEvent;
exports.isInfo = isInfo;
exports.isNewAuctionEvent = isNewAuctionEvent;
exports.isNewBidEvent = isNewBidEvent;
exports.isOracleInfo = isOracleInfo;
exports.isOtcEvent = isOtcEvent;
exports.isPayoffConfig = isPayoffConfig;
exports.isPortfolioVault = isPortfolioVault;
exports.isRaiseFundEvent = isRaiseFundEvent;
exports.isRecoupEvent = isRecoupEvent;
exports.isRedeemEvent = isRedeemEvent;
exports.isReduceFundEvent = isReduceFundEvent;
exports.isRefundEvent = isRefundEvent;
exports.isSettleEvent = isSettleEvent;
exports.isSettlementInfo = isSettlementInfo;
exports.isTYPUS_DOV_SINGLE = isTYPUS_DOV_SINGLE;
exports.isTerminateAuctionEvent = isTerminateAuctionEvent;
exports.isTerminateVaultEvent = isTerminateVaultEvent;
exports.isTransferBidReceiptEvent = isTransferBidReceiptEvent;
exports.isUnsubscribeEvent = isUnsubscribeEvent;
exports.isVaultConfig = isVaultConfig;
exports.isWithdrawEvent = isWithdrawEvent;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/option/structs");
var structs_2 = require("../../0x1/string/structs");
var structs_3 = require("../../0x1/type-name/structs");
var structs_4 = require("../../0x2/object/structs");
var structs_5 = require("../../0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded/authority/structs");
var structs_6 = require("../../0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded/balance-pool/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== Config =============================== */
function isConfig(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Config"; }
var Config = /** @class */ (function () {
    function Config(typeArgs, fields) {
        this.$typeName = Config.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Config.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.oracleId = fields.oracleId;
        ;
        this.depositLotSize = fields.depositLotSize;
        ;
        this.bidLotSize = fields.bidLotSize;
        ;
        this.minDepositSize = fields.minDepositSize;
        ;
        this.minBidSize = fields.minBidSize;
        ;
        this.maxDepositEntry = fields.maxDepositEntry;
        ;
        this.maxBidEntry = fields.maxBidEntry;
        ;
        this.depositFeeBp = fields.depositFeeBp;
        ;
        this.depositFeeShareBp = fields.depositFeeShareBp;
        ;
        this.depositSharedFeePool = fields.depositSharedFeePool;
        ;
        this.bidFeeBp = fields.bidFeeBp;
        ;
        this.depositIncentiveBp = fields.depositIncentiveBp;
        ;
        this.bidIncentiveBp = fields.bidIncentiveBp;
        ;
        this.auctionDelayTsMs = fields.auctionDelayTsMs;
        ;
        this.auctionDurationTsMs = fields.auctionDurationTsMs;
        ;
        this.recoupDelayTsMs = fields.recoupDelayTsMs;
        ;
        this.capacity = fields.capacity;
        ;
        this.leverage = fields.leverage;
        ;
        this.riskLevel = fields.riskLevel;
        ;
        this.hasNext = fields.hasNext;
        ;
        this.activeVaultConfig = fields.activeVaultConfig;
        ;
        this.warmupVaultConfig = fields.warmupVaultConfig;
        ;
        this.u64Padding = fields.u64Padding;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    Config.reified = function () {
        var _this = this;
        return { typeName: Config.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Config.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Config.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Config.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Config.fromBcs(data); }, bcs: Config.bcs, fromJSONField: function (field) { return Config.fromJSONField(field); }, fromJSON: function (json) { return Config.fromJSON(json); }, fromSuiParsedData: function (content) { return Config.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Config.fetch(client, id)];
            }); }); }, new: function (fields) { return new Config([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Config, "r", {
        get: function () { return Config.reified(); },
        enumerable: false,
        configurable: true
    });
    Config.phantom = function () { return (0, reified_1.phantom)(Config.reified()); };
    Object.defineProperty(Config, "p", {
        get: function () { return Config.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Config, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Config", {
                oracle_id: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), deposit_lot_size: bcs_1.bcs.u64(), bid_lot_size: bcs_1.bcs.u64(), min_deposit_size: bcs_1.bcs.u64(), min_bid_size: bcs_1.bcs.u64(), max_deposit_entry: bcs_1.bcs.u64(), max_bid_entry: bcs_1.bcs.u64(), deposit_fee_bp: bcs_1.bcs.u64(), deposit_fee_share_bp: bcs_1.bcs.u64(), deposit_shared_fee_pool: structs_1.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u8())), bid_fee_bp: bcs_1.bcs.u64(), deposit_incentive_bp: bcs_1.bcs.u64(), bid_incentive_bp: bcs_1.bcs.u64(), auction_delay_ts_ms: bcs_1.bcs.u64(), auction_duration_ts_ms: bcs_1.bcs.u64(), recoup_delay_ts_ms: bcs_1.bcs.u64(), capacity: bcs_1.bcs.u64(), leverage: bcs_1.bcs.u64(), risk_level: bcs_1.bcs.u64(), has_next: bcs_1.bcs.bool(), active_vault_config: VaultConfig.bcs, warmup_vault_config: VaultConfig.bcs, u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.u8())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Config.fromFields = function (fields) { return Config.reified().new({ oracleId: (0, reified_1.decodeFromFields)("address", fields.oracle_id), depositLotSize: (0, reified_1.decodeFromFields)("u64", fields.deposit_lot_size), bidLotSize: (0, reified_1.decodeFromFields)("u64", fields.bid_lot_size), minDepositSize: (0, reified_1.decodeFromFields)("u64", fields.min_deposit_size), minBidSize: (0, reified_1.decodeFromFields)("u64", fields.min_bid_size), maxDepositEntry: (0, reified_1.decodeFromFields)("u64", fields.max_deposit_entry), maxBidEntry: (0, reified_1.decodeFromFields)("u64", fields.max_bid_entry), depositFeeBp: (0, reified_1.decodeFromFields)("u64", fields.deposit_fee_bp), depositFeeShareBp: (0, reified_1.decodeFromFields)("u64", fields.deposit_fee_share_bp), depositSharedFeePool: (0, reified_1.decodeFromFields)(structs_1.Option.reified(reified.vector("u8")), fields.deposit_shared_fee_pool), bidFeeBp: (0, reified_1.decodeFromFields)("u64", fields.bid_fee_bp), depositIncentiveBp: (0, reified_1.decodeFromFields)("u64", fields.deposit_incentive_bp), bidIncentiveBp: (0, reified_1.decodeFromFields)("u64", fields.bid_incentive_bp), auctionDelayTsMs: (0, reified_1.decodeFromFields)("u64", fields.auction_delay_ts_ms), auctionDurationTsMs: (0, reified_1.decodeFromFields)("u64", fields.auction_duration_ts_ms), recoupDelayTsMs: (0, reified_1.decodeFromFields)("u64", fields.recoup_delay_ts_ms), capacity: (0, reified_1.decodeFromFields)("u64", fields.capacity), leverage: (0, reified_1.decodeFromFields)("u64", fields.leverage), riskLevel: (0, reified_1.decodeFromFields)("u64", fields.risk_level), hasNext: (0, reified_1.decodeFromFields)("bool", fields.has_next), activeVaultConfig: (0, reified_1.decodeFromFields)(VaultConfig.reified(), fields.active_vault_config), warmupVaultConfig: (0, reified_1.decodeFromFields)(VaultConfig.reified(), fields.warmup_vault_config), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.bcs_padding) }); };
    Config.fromFieldsWithTypes = function (item) {
        if (!isConfig(item.type)) {
            throw new Error("not a Config type");
        }
        return Config.reified().new({ oracleId: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.oracle_id), depositLotSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deposit_lot_size), bidLotSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_lot_size), minDepositSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_deposit_size), minBidSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_bid_size), maxDepositEntry: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_deposit_entry), maxBidEntry: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_bid_entry), depositFeeBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deposit_fee_bp), depositFeeShareBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deposit_fee_share_bp), depositSharedFeePool: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(reified.vector("u8")), item.fields.deposit_shared_fee_pool), bidFeeBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_fee_bp), depositIncentiveBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deposit_incentive_bp), bidIncentiveBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_incentive_bp), auctionDelayTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_delay_ts_ms), auctionDurationTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_duration_ts_ms), recoupDelayTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.recoup_delay_ts_ms), capacity: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.capacity), leverage: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.leverage), riskLevel: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.risk_level), hasNext: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.has_next), activeVaultConfig: (0, reified_1.decodeFromFieldsWithTypes)(VaultConfig.reified(), item.fields.active_vault_config), warmupVaultConfig: (0, reified_1.decodeFromFieldsWithTypes)(VaultConfig.reified(), item.fields.warmup_vault_config), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.bcs_padding) });
    };
    Config.fromBcs = function (data) { return Config.fromFields(Config.bcs.parse(data)); };
    Config.prototype.toJSONField = function () {
        return {
            oracleId: this.oracleId, depositLotSize: this.depositLotSize.toString(), bidLotSize: this.bidLotSize.toString(), minDepositSize: this.minDepositSize.toString(), minBidSize: this.minBidSize.toString(), maxDepositEntry: this.maxDepositEntry.toString(), maxBidEntry: this.maxBidEntry.toString(), depositFeeBp: this.depositFeeBp.toString(), depositFeeShareBp: this.depositFeeShareBp.toString(), depositSharedFeePool: (0, reified_1.fieldToJSON)("0x1::option::Option<vector<u8>>", this.depositSharedFeePool), bidFeeBp: this.bidFeeBp.toString(), depositIncentiveBp: this.depositIncentiveBp.toString(), bidIncentiveBp: this.bidIncentiveBp.toString(), auctionDelayTsMs: this.auctionDelayTsMs.toString(), auctionDurationTsMs: this.auctionDurationTsMs.toString(), recoupDelayTsMs: this.recoupDelayTsMs.toString(), capacity: this.capacity.toString(), leverage: this.leverage.toString(), riskLevel: this.riskLevel.toString(), hasNext: this.hasNext, activeVaultConfig: this.activeVaultConfig.toJSONField(), warmupVaultConfig: this.warmupVaultConfig.toJSONField(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding), bcsPadding: (0, reified_1.fieldToJSON)("vector<u8>", this.bcsPadding),
        };
    };
    Config.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Config.fromJSONField = function (field) { return Config.reified().new({ oracleId: (0, reified_1.decodeFromJSONField)("address", field.oracleId), depositLotSize: (0, reified_1.decodeFromJSONField)("u64", field.depositLotSize), bidLotSize: (0, reified_1.decodeFromJSONField)("u64", field.bidLotSize), minDepositSize: (0, reified_1.decodeFromJSONField)("u64", field.minDepositSize), minBidSize: (0, reified_1.decodeFromJSONField)("u64", field.minBidSize), maxDepositEntry: (0, reified_1.decodeFromJSONField)("u64", field.maxDepositEntry), maxBidEntry: (0, reified_1.decodeFromJSONField)("u64", field.maxBidEntry), depositFeeBp: (0, reified_1.decodeFromJSONField)("u64", field.depositFeeBp), depositFeeShareBp: (0, reified_1.decodeFromJSONField)("u64", field.depositFeeShareBp), depositSharedFeePool: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(reified.vector("u8")), field.depositSharedFeePool), bidFeeBp: (0, reified_1.decodeFromJSONField)("u64", field.bidFeeBp), depositIncentiveBp: (0, reified_1.decodeFromJSONField)("u64", field.depositIncentiveBp), bidIncentiveBp: (0, reified_1.decodeFromJSONField)("u64", field.bidIncentiveBp), auctionDelayTsMs: (0, reified_1.decodeFromJSONField)("u64", field.auctionDelayTsMs), auctionDurationTsMs: (0, reified_1.decodeFromJSONField)("u64", field.auctionDurationTsMs), recoupDelayTsMs: (0, reified_1.decodeFromJSONField)("u64", field.recoupDelayTsMs), capacity: (0, reified_1.decodeFromJSONField)("u64", field.capacity), leverage: (0, reified_1.decodeFromJSONField)("u64", field.leverage), riskLevel: (0, reified_1.decodeFromJSONField)("u64", field.riskLevel), hasNext: (0, reified_1.decodeFromJSONField)("bool", field.hasNext), activeVaultConfig: (0, reified_1.decodeFromJSONField)(VaultConfig.reified(), field.activeVaultConfig), warmupVaultConfig: (0, reified_1.decodeFromJSONField)(VaultConfig.reified(), field.warmupVaultConfig), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.bcsPadding) }); };
    Config.fromJSON = function (json) {
        if (json.$typeName !== Config.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Config.fromJSONField(json);
    };
    Config.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isConfig(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Config object"));
    } return Config.fromFieldsWithTypes(content); };
    Config.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Config object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isConfig(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Config object"));
                        }
                        return [2 /*return*/, Config.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Config.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Config";
    Config.$numTypeParams = 0;
    return Config;
}());
exports.Config = Config;
/* ============================== Registry =============================== */
function isRegistry(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Registry"; }
var Registry = /** @class */ (function () {
    function Registry(typeArgs, fields) {
        this.$typeName = Registry.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Registry.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.numOfVault = fields.numOfVault;
        ;
        this.authority = fields.authority;
        ;
        this.feePool = fields.feePool;
        ;
        this.portfolioVaultRegistry = fields.portfolioVaultRegistry;
        ;
        this.depositVaultRegistry = fields.depositVaultRegistry;
        ;
        this.auctionRegistry = fields.auctionRegistry;
        ;
        this.bidVaultRegistry = fields.bidVaultRegistry;
        ;
        this.refundVaultRegistry = fields.refundVaultRegistry;
        ;
        this.additionalConfigRegistry = fields.additionalConfigRegistry;
        ;
        this.version = fields.version;
        ;
        this.transactionSuspended = fields.transactionSuspended;
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
                id: structs_4.UID.bcs, num_of_vault: bcs_1.bcs.u64(), authority: structs_5.Authority.bcs, fee_pool: structs_6.BalancePool.bcs, portfolio_vault_registry: structs_4.UID.bcs, deposit_vault_registry: structs_4.UID.bcs, auction_registry: structs_4.UID.bcs, bid_vault_registry: structs_4.UID.bcs, refund_vault_registry: structs_4.UID.bcs, additional_config_registry: structs_4.UID.bcs, version: bcs_1.bcs.u64(), transaction_suspended: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Registry.fromFields = function (fields) { return Registry.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id), numOfVault: (0, reified_1.decodeFromFields)("u64", fields.num_of_vault), authority: (0, reified_1.decodeFromFields)(structs_5.Authority.reified(), fields.authority), feePool: (0, reified_1.decodeFromFields)(structs_6.BalancePool.reified(), fields.fee_pool), portfolioVaultRegistry: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.portfolio_vault_registry), depositVaultRegistry: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.deposit_vault_registry), auctionRegistry: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.auction_registry), bidVaultRegistry: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.bid_vault_registry), refundVaultRegistry: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.refund_vault_registry), additionalConfigRegistry: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.additional_config_registry), version: (0, reified_1.decodeFromFields)("u64", fields.version), transactionSuspended: (0, reified_1.decodeFromFields)("bool", fields.transaction_suspended) }); };
    Registry.fromFieldsWithTypes = function (item) {
        if (!isRegistry(item.type)) {
            throw new Error("not a Registry type");
        }
        return Registry.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id), numOfVault: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.num_of_vault), authority: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Authority.reified(), item.fields.authority), feePool: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.BalancePool.reified(), item.fields.fee_pool), portfolioVaultRegistry: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.portfolio_vault_registry), depositVaultRegistry: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.deposit_vault_registry), auctionRegistry: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.auction_registry), bidVaultRegistry: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.bid_vault_registry), refundVaultRegistry: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.refund_vault_registry), additionalConfigRegistry: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.additional_config_registry), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), transactionSuspended: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.transaction_suspended) });
    };
    Registry.fromBcs = function (data) { return Registry.fromFields(Registry.bcs.parse(data)); };
    Registry.prototype.toJSONField = function () {
        return {
            id: this.id, numOfVault: this.numOfVault.toString(), authority: this.authority.toJSONField(), feePool: this.feePool.toJSONField(), portfolioVaultRegistry: this.portfolioVaultRegistry, depositVaultRegistry: this.depositVaultRegistry, auctionRegistry: this.auctionRegistry, bidVaultRegistry: this.bidVaultRegistry, refundVaultRegistry: this.refundVaultRegistry, additionalConfigRegistry: this.additionalConfigRegistry, version: this.version.toString(), transactionSuspended: this.transactionSuspended,
        };
    };
    Registry.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Registry.fromJSONField = function (field) { return Registry.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id), numOfVault: (0, reified_1.decodeFromJSONField)("u64", field.numOfVault), authority: (0, reified_1.decodeFromJSONField)(structs_5.Authority.reified(), field.authority), feePool: (0, reified_1.decodeFromJSONField)(structs_6.BalancePool.reified(), field.feePool), portfolioVaultRegistry: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.portfolioVaultRegistry), depositVaultRegistry: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.depositVaultRegistry), auctionRegistry: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.auctionRegistry), bidVaultRegistry: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.bidVaultRegistry), refundVaultRegistry: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.refundVaultRegistry), additionalConfigRegistry: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.additionalConfigRegistry), version: (0, reified_1.decodeFromJSONField)("u64", field.version), transactionSuspended: (0, reified_1.decodeFromJSONField)("bool", field.transactionSuspended) }); };
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
    Registry.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Registry";
    Registry.$numTypeParams = 0;
    return Registry;
}());
exports.Registry = Registry;
/* ============================== ActivateEvent =============================== */
function isActivateEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ActivateEvent"; }
var ActivateEvent = /** @class */ (function () {
    function ActivateEvent(typeArgs, fields) {
        this.$typeName = ActivateEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ActivateEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.round = fields.round;
        ;
        this.depositAmount = fields.depositAmount;
        ;
        this.dTokenDecimal = fields.dTokenDecimal;
        ;
        this.contractSize = fields.contractSize;
        ;
        this.oTokenDecimal = fields.oTokenDecimal;
        ;
        this.oracleInfo = fields.oracleInfo;
        ;
        this.u64Padding = fields.u64Padding;
    }
    ActivateEvent.reified = function () {
        var _this = this;
        return { typeName: ActivateEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ActivateEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ActivateEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ActivateEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ActivateEvent.fromBcs(data); }, bcs: ActivateEvent.bcs, fromJSONField: function (field) { return ActivateEvent.fromJSONField(field); }, fromJSON: function (json) { return ActivateEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return ActivateEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ActivateEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new ActivateEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ActivateEvent, "r", {
        get: function () { return ActivateEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    ActivateEvent.phantom = function () { return (0, reified_1.phantom)(ActivateEvent.reified()); };
    Object.defineProperty(ActivateEvent, "p", {
        get: function () { return ActivateEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActivateEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ActivateEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), round: bcs_1.bcs.u64(), deposit_amount: bcs_1.bcs.u64(), d_token_decimal: bcs_1.bcs.u64(), contract_size: bcs_1.bcs.u64(), o_token_decimal: bcs_1.bcs.u64(), oracle_info: OracleInfo.bcs, u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ActivateEvent.fromFields = function (fields) { return ActivateEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), round: (0, reified_1.decodeFromFields)("u64", fields.round), depositAmount: (0, reified_1.decodeFromFields)("u64", fields.deposit_amount), dTokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.d_token_decimal), contractSize: (0, reified_1.decodeFromFields)("u64", fields.contract_size), oTokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.o_token_decimal), oracleInfo: (0, reified_1.decodeFromFields)(OracleInfo.reified(), fields.oracle_info), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    ActivateEvent.fromFieldsWithTypes = function (item) {
        if (!isActivateEvent(item.type)) {
            throw new Error("not a ActivateEvent type");
        }
        return ActivateEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), round: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.round), depositAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deposit_amount), dTokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.d_token_decimal), contractSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.contract_size), oTokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.o_token_decimal), oracleInfo: (0, reified_1.decodeFromFieldsWithTypes)(OracleInfo.reified(), item.fields.oracle_info), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    ActivateEvent.fromBcs = function (data) { return ActivateEvent.fromFields(ActivateEvent.bcs.parse(data)); };
    ActivateEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), round: this.round.toString(), depositAmount: this.depositAmount.toString(), dTokenDecimal: this.dTokenDecimal.toString(), contractSize: this.contractSize.toString(), oTokenDecimal: this.oTokenDecimal.toString(), oracleInfo: this.oracleInfo.toJSONField(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    ActivateEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ActivateEvent.fromJSONField = function (field) { return ActivateEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), round: (0, reified_1.decodeFromJSONField)("u64", field.round), depositAmount: (0, reified_1.decodeFromJSONField)("u64", field.depositAmount), dTokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.dTokenDecimal), contractSize: (0, reified_1.decodeFromJSONField)("u64", field.contractSize), oTokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.oTokenDecimal), oracleInfo: (0, reified_1.decodeFromJSONField)(OracleInfo.reified(), field.oracleInfo), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    ActivateEvent.fromJSON = function (json) {
        if (json.$typeName !== ActivateEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ActivateEvent.fromJSONField(json);
    };
    ActivateEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isActivateEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ActivateEvent object"));
    } return ActivateEvent.fromFieldsWithTypes(content); };
    ActivateEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ActivateEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isActivateEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ActivateEvent object"));
                        }
                        return [2 /*return*/, ActivateEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ActivateEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ActivateEvent";
    ActivateEvent.$numTypeParams = 0;
    return ActivateEvent;
}());
exports.ActivateEvent = ActivateEvent;
/* ============================== AdditionalConfig =============================== */
function isAdditionalConfig(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::AdditionalConfig"; }
var AdditionalConfig = /** @class */ (function () {
    function AdditionalConfig(typeArgs, fields) {
        this.$typeName = AdditionalConfig.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AdditionalConfig.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    AdditionalConfig.reified = function () {
        var _this = this;
        return { typeName: AdditionalConfig.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AdditionalConfig.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return AdditionalConfig.fromFields(fields); }, fromFieldsWithTypes: function (item) { return AdditionalConfig.fromFieldsWithTypes(item); }, fromBcs: function (data) { return AdditionalConfig.fromBcs(data); }, bcs: AdditionalConfig.bcs, fromJSONField: function (field) { return AdditionalConfig.fromJSONField(field); }, fromJSON: function (json) { return AdditionalConfig.fromJSON(json); }, fromSuiParsedData: function (content) { return AdditionalConfig.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AdditionalConfig.fetch(client, id)];
            }); }); }, new: function (fields) { return new AdditionalConfig([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(AdditionalConfig, "r", {
        get: function () { return AdditionalConfig.reified(); },
        enumerable: false,
        configurable: true
    });
    AdditionalConfig.phantom = function () { return (0, reified_1.phantom)(AdditionalConfig.reified()); };
    Object.defineProperty(AdditionalConfig, "p", {
        get: function () { return AdditionalConfig.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AdditionalConfig, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AdditionalConfig", {
                id: structs_4.UID.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    AdditionalConfig.fromFields = function (fields) { return AdditionalConfig.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id) }); };
    AdditionalConfig.fromFieldsWithTypes = function (item) {
        if (!isAdditionalConfig(item.type)) {
            throw new Error("not a AdditionalConfig type");
        }
        return AdditionalConfig.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id) });
    };
    AdditionalConfig.fromBcs = function (data) { return AdditionalConfig.fromFields(AdditionalConfig.bcs.parse(data)); };
    AdditionalConfig.prototype.toJSONField = function () {
        return {
            id: this.id,
        };
    };
    AdditionalConfig.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    AdditionalConfig.fromJSONField = function (field) { return AdditionalConfig.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id) }); };
    AdditionalConfig.fromJSON = function (json) {
        if (json.$typeName !== AdditionalConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AdditionalConfig.fromJSONField(json);
    };
    AdditionalConfig.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAdditionalConfig(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a AdditionalConfig object"));
    } return AdditionalConfig.fromFieldsWithTypes(content); };
    AdditionalConfig.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AdditionalConfig object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAdditionalConfig(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AdditionalConfig object"));
                        }
                        return [2 /*return*/, AdditionalConfig.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AdditionalConfig.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::AdditionalConfig";
    AdditionalConfig.$numTypeParams = 0;
    return AdditionalConfig;
}());
exports.AdditionalConfig = AdditionalConfig;
/* ============================== ClaimEvent =============================== */
function isClaimEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ClaimEvent"; }
var ClaimEvent = /** @class */ (function () {
    function ClaimEvent(typeArgs, fields) {
        this.$typeName = ClaimEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ClaimEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
        ;
        this.decimal = fields.decimal;
        ;
        this.oracleInfo = fields.oracleInfo;
        ;
        this.u64Padding = fields.u64Padding;
    }
    ClaimEvent.reified = function () {
        var _this = this;
        return { typeName: ClaimEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ClaimEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ClaimEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ClaimEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ClaimEvent.fromBcs(data); }, bcs: ClaimEvent.bcs, fromJSONField: function (field) { return ClaimEvent.fromJSONField(field); }, fromJSON: function (json) { return ClaimEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return ClaimEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ClaimEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new ClaimEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ClaimEvent, "r", {
        get: function () { return ClaimEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    ClaimEvent.phantom = function () { return (0, reified_1.phantom)(ClaimEvent.reified()); };
    Object.defineProperty(ClaimEvent, "p", {
        get: function () { return ClaimEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClaimEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ClaimEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64(), decimal: bcs_1.bcs.u64(), oracle_info: OracleInfo.bcs, u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ClaimEvent.fromFields = function (fields) { return ClaimEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount), decimal: (0, reified_1.decodeFromFields)("u64", fields.decimal), oracleInfo: (0, reified_1.decodeFromFields)(OracleInfo.reified(), fields.oracle_info), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    ClaimEvent.fromFieldsWithTypes = function (item) {
        if (!isClaimEvent(item.type)) {
            throw new Error("not a ClaimEvent type");
        }
        return ClaimEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), decimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.decimal), oracleInfo: (0, reified_1.decodeFromFieldsWithTypes)(OracleInfo.reified(), item.fields.oracle_info), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    ClaimEvent.fromBcs = function (data) { return ClaimEvent.fromFields(ClaimEvent.bcs.parse(data)); };
    ClaimEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), amount: this.amount.toString(), decimal: this.decimal.toString(), oracleInfo: this.oracleInfo.toJSONField(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    ClaimEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ClaimEvent.fromJSONField = function (field) { return ClaimEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), decimal: (0, reified_1.decodeFromJSONField)("u64", field.decimal), oracleInfo: (0, reified_1.decodeFromJSONField)(OracleInfo.reified(), field.oracleInfo), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    ClaimEvent.fromJSON = function (json) {
        if (json.$typeName !== ClaimEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ClaimEvent.fromJSONField(json);
    };
    ClaimEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isClaimEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ClaimEvent object"));
    } return ClaimEvent.fromFieldsWithTypes(content); };
    ClaimEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ClaimEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isClaimEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ClaimEvent object"));
                        }
                        return [2 /*return*/, ClaimEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ClaimEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ClaimEvent";
    ClaimEvent.$numTypeParams = 0;
    return ClaimEvent;
}());
exports.ClaimEvent = ClaimEvent;
/* ============================== CloseEvent =============================== */
function isCloseEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::CloseEvent"; }
var CloseEvent = /** @class */ (function () {
    function CloseEvent(typeArgs, fields) {
        this.$typeName = CloseEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([CloseEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.round = fields.round;
        ;
        this.u64Padding = fields.u64Padding;
    }
    CloseEvent.reified = function () {
        var _this = this;
        return { typeName: CloseEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([CloseEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return CloseEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return CloseEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return CloseEvent.fromBcs(data); }, bcs: CloseEvent.bcs, fromJSONField: function (field) { return CloseEvent.fromJSONField(field); }, fromJSON: function (json) { return CloseEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return CloseEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, CloseEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new CloseEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(CloseEvent, "r", {
        get: function () { return CloseEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    CloseEvent.phantom = function () { return (0, reified_1.phantom)(CloseEvent.reified()); };
    Object.defineProperty(CloseEvent, "p", {
        get: function () { return CloseEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloseEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("CloseEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), round: bcs_1.bcs.u64(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    CloseEvent.fromFields = function (fields) { return CloseEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), round: (0, reified_1.decodeFromFields)("u64", fields.round), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    CloseEvent.fromFieldsWithTypes = function (item) {
        if (!isCloseEvent(item.type)) {
            throw new Error("not a CloseEvent type");
        }
        return CloseEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), round: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.round), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    CloseEvent.fromBcs = function (data) { return CloseEvent.fromFields(CloseEvent.bcs.parse(data)); };
    CloseEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), round: this.round.toString(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    CloseEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    CloseEvent.fromJSONField = function (field) { return CloseEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), round: (0, reified_1.decodeFromJSONField)("u64", field.round), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    CloseEvent.fromJSON = function (json) {
        if (json.$typeName !== CloseEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return CloseEvent.fromJSONField(json);
    };
    CloseEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCloseEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a CloseEvent object"));
    } return CloseEvent.fromFieldsWithTypes(content); };
    CloseEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching CloseEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCloseEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a CloseEvent object"));
                        }
                        return [2 /*return*/, CloseEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    CloseEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::CloseEvent";
    CloseEvent.$numTypeParams = 0;
    return CloseEvent;
}());
exports.CloseEvent = CloseEvent;
/* ============================== CompoundEvent =============================== */
function isCompoundEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::CompoundEvent"; }
var CompoundEvent = /** @class */ (function () {
    function CompoundEvent(typeArgs, fields) {
        this.$typeName = CompoundEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([CompoundEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
        ;
        this.decimal = fields.decimal;
        ;
        this.oracleInfo = fields.oracleInfo;
        ;
        this.u64Padding = fields.u64Padding;
    }
    CompoundEvent.reified = function () {
        var _this = this;
        return { typeName: CompoundEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([CompoundEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return CompoundEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return CompoundEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return CompoundEvent.fromBcs(data); }, bcs: CompoundEvent.bcs, fromJSONField: function (field) { return CompoundEvent.fromJSONField(field); }, fromJSON: function (json) { return CompoundEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return CompoundEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, CompoundEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new CompoundEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(CompoundEvent, "r", {
        get: function () { return CompoundEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    CompoundEvent.phantom = function () { return (0, reified_1.phantom)(CompoundEvent.reified()); };
    Object.defineProperty(CompoundEvent, "p", {
        get: function () { return CompoundEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompoundEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("CompoundEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64(), decimal: bcs_1.bcs.u64(), oracle_info: OracleInfo.bcs, u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    CompoundEvent.fromFields = function (fields) { return CompoundEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount), decimal: (0, reified_1.decodeFromFields)("u64", fields.decimal), oracleInfo: (0, reified_1.decodeFromFields)(OracleInfo.reified(), fields.oracle_info), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    CompoundEvent.fromFieldsWithTypes = function (item) {
        if (!isCompoundEvent(item.type)) {
            throw new Error("not a CompoundEvent type");
        }
        return CompoundEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), decimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.decimal), oracleInfo: (0, reified_1.decodeFromFieldsWithTypes)(OracleInfo.reified(), item.fields.oracle_info), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    CompoundEvent.fromBcs = function (data) { return CompoundEvent.fromFields(CompoundEvent.bcs.parse(data)); };
    CompoundEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), amount: this.amount.toString(), decimal: this.decimal.toString(), oracleInfo: this.oracleInfo.toJSONField(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    CompoundEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    CompoundEvent.fromJSONField = function (field) { return CompoundEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), decimal: (0, reified_1.decodeFromJSONField)("u64", field.decimal), oracleInfo: (0, reified_1.decodeFromJSONField)(OracleInfo.reified(), field.oracleInfo), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    CompoundEvent.fromJSON = function (json) {
        if (json.$typeName !== CompoundEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return CompoundEvent.fromJSONField(json);
    };
    CompoundEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCompoundEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a CompoundEvent object"));
    } return CompoundEvent.fromFieldsWithTypes(content); };
    CompoundEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching CompoundEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCompoundEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a CompoundEvent object"));
                        }
                        return [2 /*return*/, CompoundEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    CompoundEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::CompoundEvent";
    CompoundEvent.$numTypeParams = 0;
    return CompoundEvent;
}());
exports.CompoundEvent = CompoundEvent;
/* ============================== DeliveryEvent =============================== */
function isDeliveryEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryEvent"; }
var DeliveryEvent = /** @class */ (function () {
    function DeliveryEvent(typeArgs, fields) {
        this.$typeName = DeliveryEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DeliveryEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.round = fields.round;
        ;
        this.early = fields.early;
        ;
        this.deliveryPrice = fields.deliveryPrice;
        ;
        this.deliverySize = fields.deliverySize;
        ;
        this.oTokenDecimal = fields.oTokenDecimal;
        ;
        this.oToken = fields.oToken;
        ;
        this.bidderBidValue = fields.bidderBidValue;
        ;
        this.bidderFee = fields.bidderFee;
        ;
        this.incentiveBidValue = fields.incentiveBidValue;
        ;
        this.incentiveFee = fields.incentiveFee;
        ;
        this.bTokenDecimal = fields.bTokenDecimal;
        ;
        this.bToken = fields.bToken;
        ;
        this.depositorIncentiveValue = fields.depositorIncentiveValue;
        ;
        this.u64Padding = fields.u64Padding;
    }
    DeliveryEvent.reified = function () {
        var _this = this;
        return { typeName: DeliveryEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DeliveryEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return DeliveryEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return DeliveryEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return DeliveryEvent.fromBcs(data); }, bcs: DeliveryEvent.bcs, fromJSONField: function (field) { return DeliveryEvent.fromJSONField(field); }, fromJSON: function (json) { return DeliveryEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return DeliveryEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DeliveryEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new DeliveryEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DeliveryEvent, "r", {
        get: function () { return DeliveryEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    DeliveryEvent.phantom = function () { return (0, reified_1.phantom)(DeliveryEvent.reified()); };
    Object.defineProperty(DeliveryEvent, "p", {
        get: function () { return DeliveryEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeliveryEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DeliveryEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), round: bcs_1.bcs.u64(), early: bcs_1.bcs.bool(), delivery_price: bcs_1.bcs.u64(), delivery_size: bcs_1.bcs.u64(), o_token_decimal: bcs_1.bcs.u64(), o_token: structs_3.TypeName.bcs, bidder_bid_value: bcs_1.bcs.u64(), bidder_fee: bcs_1.bcs.u64(), incentive_bid_value: bcs_1.bcs.u64(), incentive_fee: bcs_1.bcs.u64(), b_token_decimal: bcs_1.bcs.u64(), b_token: structs_3.TypeName.bcs, depositor_incentive_value: bcs_1.bcs.u64(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DeliveryEvent.fromFields = function (fields) { return DeliveryEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), round: (0, reified_1.decodeFromFields)("u64", fields.round), early: (0, reified_1.decodeFromFields)("bool", fields.early), deliveryPrice: (0, reified_1.decodeFromFields)("u64", fields.delivery_price), deliverySize: (0, reified_1.decodeFromFields)("u64", fields.delivery_size), oTokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.o_token_decimal), oToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.o_token), bidderBidValue: (0, reified_1.decodeFromFields)("u64", fields.bidder_bid_value), bidderFee: (0, reified_1.decodeFromFields)("u64", fields.bidder_fee), incentiveBidValue: (0, reified_1.decodeFromFields)("u64", fields.incentive_bid_value), incentiveFee: (0, reified_1.decodeFromFields)("u64", fields.incentive_fee), bTokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.b_token_decimal), bToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.b_token), depositorIncentiveValue: (0, reified_1.decodeFromFields)("u64", fields.depositor_incentive_value), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    DeliveryEvent.fromFieldsWithTypes = function (item) {
        if (!isDeliveryEvent(item.type)) {
            throw new Error("not a DeliveryEvent type");
        }
        return DeliveryEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), round: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.round), early: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.early), deliveryPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.delivery_price), deliverySize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.delivery_size), oTokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.o_token_decimal), oToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.o_token), bidderBidValue: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bidder_bid_value), bidderFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bidder_fee), incentiveBidValue: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_bid_value), incentiveFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_fee), bTokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.b_token_decimal), bToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.b_token), depositorIncentiveValue: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.depositor_incentive_value), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    DeliveryEvent.fromBcs = function (data) { return DeliveryEvent.fromFields(DeliveryEvent.bcs.parse(data)); };
    DeliveryEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), round: this.round.toString(), early: this.early, deliveryPrice: this.deliveryPrice.toString(), deliverySize: this.deliverySize.toString(), oTokenDecimal: this.oTokenDecimal.toString(), oToken: this.oToken.toJSONField(), bidderBidValue: this.bidderBidValue.toString(), bidderFee: this.bidderFee.toString(), incentiveBidValue: this.incentiveBidValue.toString(), incentiveFee: this.incentiveFee.toString(), bTokenDecimal: this.bTokenDecimal.toString(), bToken: this.bToken.toJSONField(), depositorIncentiveValue: this.depositorIncentiveValue.toString(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    DeliveryEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DeliveryEvent.fromJSONField = function (field) { return DeliveryEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), round: (0, reified_1.decodeFromJSONField)("u64", field.round), early: (0, reified_1.decodeFromJSONField)("bool", field.early), deliveryPrice: (0, reified_1.decodeFromJSONField)("u64", field.deliveryPrice), deliverySize: (0, reified_1.decodeFromJSONField)("u64", field.deliverySize), oTokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.oTokenDecimal), oToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.oToken), bidderBidValue: (0, reified_1.decodeFromJSONField)("u64", field.bidderBidValue), bidderFee: (0, reified_1.decodeFromJSONField)("u64", field.bidderFee), incentiveBidValue: (0, reified_1.decodeFromJSONField)("u64", field.incentiveBidValue), incentiveFee: (0, reified_1.decodeFromJSONField)("u64", field.incentiveFee), bTokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.bTokenDecimal), bToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.bToken), depositorIncentiveValue: (0, reified_1.decodeFromJSONField)("u64", field.depositorIncentiveValue), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    DeliveryEvent.fromJSON = function (json) {
        if (json.$typeName !== DeliveryEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DeliveryEvent.fromJSONField(json);
    };
    DeliveryEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDeliveryEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DeliveryEvent object"));
    } return DeliveryEvent.fromFieldsWithTypes(content); };
    DeliveryEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DeliveryEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDeliveryEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DeliveryEvent object"));
                        }
                        return [2 /*return*/, DeliveryEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DeliveryEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryEvent";
    DeliveryEvent.$numTypeParams = 0;
    return DeliveryEvent;
}());
exports.DeliveryEvent = DeliveryEvent;
/* ============================== DeliveryInfo =============================== */
function isDeliveryInfo(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryInfo"; }
var DeliveryInfo = /** @class */ (function () {
    function DeliveryInfo(typeArgs, fields) {
        this.$typeName = DeliveryInfo.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DeliveryInfo.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.auctionType = fields.auctionType;
        ;
        this.deliveryPrice = fields.deliveryPrice;
        ;
        this.deliverySize = fields.deliverySize;
        ;
        this.bidderBidValue = fields.bidderBidValue;
        ;
        this.bidderFee = fields.bidderFee;
        ;
        this.incentiveBidValue = fields.incentiveBidValue;
        ;
        this.incentiveFee = fields.incentiveFee;
        ;
        this.tsMs = fields.tsMs;
        ;
        this.u64Padding = fields.u64Padding;
    }
    DeliveryInfo.reified = function () {
        var _this = this;
        return { typeName: DeliveryInfo.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DeliveryInfo.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return DeliveryInfo.fromFields(fields); }, fromFieldsWithTypes: function (item) { return DeliveryInfo.fromFieldsWithTypes(item); }, fromBcs: function (data) { return DeliveryInfo.fromBcs(data); }, bcs: DeliveryInfo.bcs, fromJSONField: function (field) { return DeliveryInfo.fromJSONField(field); }, fromJSON: function (json) { return DeliveryInfo.fromJSON(json); }, fromSuiParsedData: function (content) { return DeliveryInfo.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DeliveryInfo.fetch(client, id)];
            }); }); }, new: function (fields) { return new DeliveryInfo([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DeliveryInfo, "r", {
        get: function () { return DeliveryInfo.reified(); },
        enumerable: false,
        configurable: true
    });
    DeliveryInfo.phantom = function () { return (0, reified_1.phantom)(DeliveryInfo.reified()); };
    Object.defineProperty(DeliveryInfo, "p", {
        get: function () { return DeliveryInfo.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeliveryInfo, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DeliveryInfo", {
                auction_type: bcs_1.bcs.u64(), delivery_price: bcs_1.bcs.u64(), delivery_size: bcs_1.bcs.u64(), bidder_bid_value: bcs_1.bcs.u64(), bidder_fee: bcs_1.bcs.u64(), incentive_bid_value: bcs_1.bcs.u64(), incentive_fee: bcs_1.bcs.u64(), ts_ms: bcs_1.bcs.u64(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DeliveryInfo.fromFields = function (fields) { return DeliveryInfo.reified().new({ auctionType: (0, reified_1.decodeFromFields)("u64", fields.auction_type), deliveryPrice: (0, reified_1.decodeFromFields)("u64", fields.delivery_price), deliverySize: (0, reified_1.decodeFromFields)("u64", fields.delivery_size), bidderBidValue: (0, reified_1.decodeFromFields)("u64", fields.bidder_bid_value), bidderFee: (0, reified_1.decodeFromFields)("u64", fields.bidder_fee), incentiveBidValue: (0, reified_1.decodeFromFields)("u64", fields.incentive_bid_value), incentiveFee: (0, reified_1.decodeFromFields)("u64", fields.incentive_fee), tsMs: (0, reified_1.decodeFromFields)("u64", fields.ts_ms), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    DeliveryInfo.fromFieldsWithTypes = function (item) {
        if (!isDeliveryInfo(item.type)) {
            throw new Error("not a DeliveryInfo type");
        }
        return DeliveryInfo.reified().new({ auctionType: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_type), deliveryPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.delivery_price), deliverySize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.delivery_size), bidderBidValue: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bidder_bid_value), bidderFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bidder_fee), incentiveBidValue: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_bid_value), incentiveFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_fee), tsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.ts_ms), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    DeliveryInfo.fromBcs = function (data) { return DeliveryInfo.fromFields(DeliveryInfo.bcs.parse(data)); };
    DeliveryInfo.prototype.toJSONField = function () {
        return {
            auctionType: this.auctionType.toString(), deliveryPrice: this.deliveryPrice.toString(), deliverySize: this.deliverySize.toString(), bidderBidValue: this.bidderBidValue.toString(), bidderFee: this.bidderFee.toString(), incentiveBidValue: this.incentiveBidValue.toString(), incentiveFee: this.incentiveFee.toString(), tsMs: this.tsMs.toString(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    DeliveryInfo.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DeliveryInfo.fromJSONField = function (field) { return DeliveryInfo.reified().new({ auctionType: (0, reified_1.decodeFromJSONField)("u64", field.auctionType), deliveryPrice: (0, reified_1.decodeFromJSONField)("u64", field.deliveryPrice), deliverySize: (0, reified_1.decodeFromJSONField)("u64", field.deliverySize), bidderBidValue: (0, reified_1.decodeFromJSONField)("u64", field.bidderBidValue), bidderFee: (0, reified_1.decodeFromJSONField)("u64", field.bidderFee), incentiveBidValue: (0, reified_1.decodeFromJSONField)("u64", field.incentiveBidValue), incentiveFee: (0, reified_1.decodeFromJSONField)("u64", field.incentiveFee), tsMs: (0, reified_1.decodeFromJSONField)("u64", field.tsMs), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    DeliveryInfo.fromJSON = function (json) {
        if (json.$typeName !== DeliveryInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DeliveryInfo.fromJSONField(json);
    };
    DeliveryInfo.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDeliveryInfo(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DeliveryInfo object"));
    } return DeliveryInfo.fromFieldsWithTypes(content); };
    DeliveryInfo.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DeliveryInfo object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDeliveryInfo(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DeliveryInfo object"));
                        }
                        return [2 /*return*/, DeliveryInfo.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DeliveryInfo.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryInfo";
    DeliveryInfo.$numTypeParams = 0;
    return DeliveryInfo;
}());
exports.DeliveryInfo = DeliveryInfo;
/* ============================== DeliveryInfos =============================== */
function isDeliveryInfos(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryInfos"; }
var DeliveryInfos = /** @class */ (function () {
    function DeliveryInfos(typeArgs, fields) {
        this.$typeName = DeliveryInfos.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DeliveryInfos.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.round = fields.round;
        ;
        this.maxSize = fields.maxSize;
        ;
        this.totalDeliverySize = fields.totalDeliverySize;
        ;
        this.totalBidderBidValue = fields.totalBidderBidValue;
        ;
        this.totalBidderFee = fields.totalBidderFee;
        ;
        this.totalIncentiveBidValue = fields.totalIncentiveBidValue;
        ;
        this.totalIncentiveFee = fields.totalIncentiveFee;
        ;
        this.deliveryInfo = fields.deliveryInfo;
        ;
        this.u64Padding = fields.u64Padding;
    }
    DeliveryInfos.reified = function () {
        var _this = this;
        return { typeName: DeliveryInfos.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DeliveryInfos.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return DeliveryInfos.fromFields(fields); }, fromFieldsWithTypes: function (item) { return DeliveryInfos.fromFieldsWithTypes(item); }, fromBcs: function (data) { return DeliveryInfos.fromBcs(data); }, bcs: DeliveryInfos.bcs, fromJSONField: function (field) { return DeliveryInfos.fromJSONField(field); }, fromJSON: function (json) { return DeliveryInfos.fromJSON(json); }, fromSuiParsedData: function (content) { return DeliveryInfos.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DeliveryInfos.fetch(client, id)];
            }); }); }, new: function (fields) { return new DeliveryInfos([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DeliveryInfos, "r", {
        get: function () { return DeliveryInfos.reified(); },
        enumerable: false,
        configurable: true
    });
    DeliveryInfos.phantom = function () { return (0, reified_1.phantom)(DeliveryInfos.reified()); };
    Object.defineProperty(DeliveryInfos, "p", {
        get: function () { return DeliveryInfos.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeliveryInfos, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DeliveryInfos", {
                round: bcs_1.bcs.u64(), max_size: bcs_1.bcs.u64(), total_delivery_size: bcs_1.bcs.u64(), total_bidder_bid_value: bcs_1.bcs.u64(), total_bidder_fee: bcs_1.bcs.u64(), total_incentive_bid_value: bcs_1.bcs.u64(), total_incentive_fee: bcs_1.bcs.u64(), delivery_info: bcs_1.bcs.vector(DeliveryInfo.bcs), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DeliveryInfos.fromFields = function (fields) { return DeliveryInfos.reified().new({ round: (0, reified_1.decodeFromFields)("u64", fields.round), maxSize: (0, reified_1.decodeFromFields)("u64", fields.max_size), totalDeliverySize: (0, reified_1.decodeFromFields)("u64", fields.total_delivery_size), totalBidderBidValue: (0, reified_1.decodeFromFields)("u64", fields.total_bidder_bid_value), totalBidderFee: (0, reified_1.decodeFromFields)("u64", fields.total_bidder_fee), totalIncentiveBidValue: (0, reified_1.decodeFromFields)("u64", fields.total_incentive_bid_value), totalIncentiveFee: (0, reified_1.decodeFromFields)("u64", fields.total_incentive_fee), deliveryInfo: (0, reified_1.decodeFromFields)(reified.vector(DeliveryInfo.reified()), fields.delivery_info), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    DeliveryInfos.fromFieldsWithTypes = function (item) {
        if (!isDeliveryInfos(item.type)) {
            throw new Error("not a DeliveryInfos type");
        }
        return DeliveryInfos.reified().new({ round: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.round), maxSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_size), totalDeliverySize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_delivery_size), totalBidderBidValue: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_bidder_bid_value), totalBidderFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_bidder_fee), totalIncentiveBidValue: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_incentive_bid_value), totalIncentiveFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_incentive_fee), deliveryInfo: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(DeliveryInfo.reified()), item.fields.delivery_info), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    DeliveryInfos.fromBcs = function (data) { return DeliveryInfos.fromFields(DeliveryInfos.bcs.parse(data)); };
    DeliveryInfos.prototype.toJSONField = function () {
        return {
            round: this.round.toString(), maxSize: this.maxSize.toString(), totalDeliverySize: this.totalDeliverySize.toString(), totalBidderBidValue: this.totalBidderBidValue.toString(), totalBidderFee: this.totalBidderFee.toString(), totalIncentiveBidValue: this.totalIncentiveBidValue.toString(), totalIncentiveFee: this.totalIncentiveFee.toString(), deliveryInfo: (0, reified_1.fieldToJSON)("vector<0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryInfo>", this.deliveryInfo), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    DeliveryInfos.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DeliveryInfos.fromJSONField = function (field) { return DeliveryInfos.reified().new({ round: (0, reified_1.decodeFromJSONField)("u64", field.round), maxSize: (0, reified_1.decodeFromJSONField)("u64", field.maxSize), totalDeliverySize: (0, reified_1.decodeFromJSONField)("u64", field.totalDeliverySize), totalBidderBidValue: (0, reified_1.decodeFromJSONField)("u64", field.totalBidderBidValue), totalBidderFee: (0, reified_1.decodeFromJSONField)("u64", field.totalBidderFee), totalIncentiveBidValue: (0, reified_1.decodeFromJSONField)("u64", field.totalIncentiveBidValue), totalIncentiveFee: (0, reified_1.decodeFromJSONField)("u64", field.totalIncentiveFee), deliveryInfo: (0, reified_1.decodeFromJSONField)(reified.vector(DeliveryInfo.reified()), field.deliveryInfo), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    DeliveryInfos.fromJSON = function (json) {
        if (json.$typeName !== DeliveryInfos.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DeliveryInfos.fromJSONField(json);
    };
    DeliveryInfos.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDeliveryInfos(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DeliveryInfos object"));
    } return DeliveryInfos.fromFieldsWithTypes(content); };
    DeliveryInfos.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DeliveryInfos object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDeliveryInfos(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DeliveryInfos object"));
                        }
                        return [2 /*return*/, DeliveryInfos.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DeliveryInfos.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryInfos";
    DeliveryInfos.$numTypeParams = 0;
    return DeliveryInfos;
}());
exports.DeliveryInfos = DeliveryInfos;
/* ============================== DepositEvent =============================== */
function isDepositEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DepositEvent"; }
var DepositEvent = /** @class */ (function () {
    function DepositEvent(typeArgs, fields) {
        this.$typeName = DepositEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DepositEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
        ;
        this.decimal = fields.decimal;
        ;
        this.oracleInfo = fields.oracleInfo;
        ;
        this.u64Padding = fields.u64Padding;
    }
    DepositEvent.reified = function () {
        var _this = this;
        return { typeName: DepositEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DepositEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return DepositEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return DepositEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return DepositEvent.fromBcs(data); }, bcs: DepositEvent.bcs, fromJSONField: function (field) { return DepositEvent.fromJSONField(field); }, fromJSON: function (json) { return DepositEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return DepositEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DepositEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new DepositEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DepositEvent, "r", {
        get: function () { return DepositEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    DepositEvent.phantom = function () { return (0, reified_1.phantom)(DepositEvent.reified()); };
    Object.defineProperty(DepositEvent, "p", {
        get: function () { return DepositEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DepositEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DepositEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64(), decimal: bcs_1.bcs.u64(), oracle_info: OracleInfo.bcs, u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DepositEvent.fromFields = function (fields) { return DepositEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount), decimal: (0, reified_1.decodeFromFields)("u64", fields.decimal), oracleInfo: (0, reified_1.decodeFromFields)(OracleInfo.reified(), fields.oracle_info), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    DepositEvent.fromFieldsWithTypes = function (item) {
        if (!isDepositEvent(item.type)) {
            throw new Error("not a DepositEvent type");
        }
        return DepositEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), decimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.decimal), oracleInfo: (0, reified_1.decodeFromFieldsWithTypes)(OracleInfo.reified(), item.fields.oracle_info), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    DepositEvent.fromBcs = function (data) { return DepositEvent.fromFields(DepositEvent.bcs.parse(data)); };
    DepositEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), amount: this.amount.toString(), decimal: this.decimal.toString(), oracleInfo: this.oracleInfo.toJSONField(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    DepositEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DepositEvent.fromJSONField = function (field) { return DepositEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), decimal: (0, reified_1.decodeFromJSONField)("u64", field.decimal), oracleInfo: (0, reified_1.decodeFromJSONField)(OracleInfo.reified(), field.oracleInfo), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    DepositEvent.fromJSON = function (json) {
        if (json.$typeName !== DepositEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DepositEvent.fromJSONField(json);
    };
    DepositEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDepositEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DepositEvent object"));
    } return DepositEvent.fromFieldsWithTypes(content); };
    DepositEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DepositEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDepositEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DepositEvent object"));
                        }
                        return [2 /*return*/, DepositEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DepositEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DepositEvent";
    DepositEvent.$numTypeParams = 0;
    return DepositEvent;
}());
exports.DepositEvent = DepositEvent;
/* ============================== DepositSnapshot =============================== */
function isDepositSnapshot(type) { type = (0, util_1.compressSuiType)(type); return type === "0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::DepositSnapshot"; }
var DepositSnapshot = /** @class */ (function () {
    function DepositSnapshot(typeArgs, fields) {
        this.$typeName = DepositSnapshot.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DepositSnapshot.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.snapshots = fields.snapshots;
        ;
        this.totalDeposit = fields.totalDeposit;
        ;
        this.snapshotTsMs = fields.snapshotTsMs;
    }
    DepositSnapshot.reified = function () {
        var _this = this;
        return { typeName: DepositSnapshot.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DepositSnapshot.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return DepositSnapshot.fromFields(fields); }, fromFieldsWithTypes: function (item) { return DepositSnapshot.fromFieldsWithTypes(item); }, fromBcs: function (data) { return DepositSnapshot.fromBcs(data); }, bcs: DepositSnapshot.bcs, fromJSONField: function (field) { return DepositSnapshot.fromJSONField(field); }, fromJSON: function (json) { return DepositSnapshot.fromJSON(json); }, fromSuiParsedData: function (content) { return DepositSnapshot.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DepositSnapshot.fetch(client, id)];
            }); }); }, new: function (fields) { return new DepositSnapshot([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DepositSnapshot, "r", {
        get: function () { return DepositSnapshot.reified(); },
        enumerable: false,
        configurable: true
    });
    DepositSnapshot.phantom = function () { return (0, reified_1.phantom)(DepositSnapshot.reified()); };
    Object.defineProperty(DepositSnapshot, "p", {
        get: function () { return DepositSnapshot.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DepositSnapshot, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DepositSnapshot", {
                snapshots: bcs_1.bcs.vector(bcs_1.bcs.u64()), total_deposit: bcs_1.bcs.u64(), snapshot_ts_ms: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DepositSnapshot.fromFields = function (fields) { return DepositSnapshot.reified().new({ snapshots: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.snapshots), totalDeposit: (0, reified_1.decodeFromFields)("u64", fields.total_deposit), snapshotTsMs: (0, reified_1.decodeFromFields)("u64", fields.snapshot_ts_ms) }); };
    DepositSnapshot.fromFieldsWithTypes = function (item) {
        if (!isDepositSnapshot(item.type)) {
            throw new Error("not a DepositSnapshot type");
        }
        return DepositSnapshot.reified().new({ snapshots: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.snapshots), totalDeposit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_deposit), snapshotTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.snapshot_ts_ms) });
    };
    DepositSnapshot.fromBcs = function (data) { return DepositSnapshot.fromFields(DepositSnapshot.bcs.parse(data)); };
    DepositSnapshot.prototype.toJSONField = function () {
        return {
            snapshots: (0, reified_1.fieldToJSON)("vector<u64>", this.snapshots), totalDeposit: this.totalDeposit.toString(), snapshotTsMs: this.snapshotTsMs.toString(),
        };
    };
    DepositSnapshot.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DepositSnapshot.fromJSONField = function (field) { return DepositSnapshot.reified().new({ snapshots: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.snapshots), totalDeposit: (0, reified_1.decodeFromJSONField)("u64", field.totalDeposit), snapshotTsMs: (0, reified_1.decodeFromJSONField)("u64", field.snapshotTsMs) }); };
    DepositSnapshot.fromJSON = function (json) {
        if (json.$typeName !== DepositSnapshot.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DepositSnapshot.fromJSONField(json);
    };
    DepositSnapshot.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDepositSnapshot(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DepositSnapshot object"));
    } return DepositSnapshot.fromFieldsWithTypes(content); };
    DepositSnapshot.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DepositSnapshot object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDepositSnapshot(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DepositSnapshot object"));
                        }
                        return [2 /*return*/, DepositSnapshot.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DepositSnapshot.$typeName = "0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::DepositSnapshot";
    DepositSnapshot.$numTypeParams = 0;
    return DepositSnapshot;
}());
exports.DepositSnapshot = DepositSnapshot;
/* ============================== DropVaultEvent =============================== */
function isDropVaultEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DropVaultEvent"; }
var DropVaultEvent = /** @class */ (function () {
    function DropVaultEvent(typeArgs, fields) {
        this.$typeName = DropVaultEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DropVaultEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.round = fields.round;
        ;
        this.u64Padding = fields.u64Padding;
    }
    DropVaultEvent.reified = function () {
        var _this = this;
        return { typeName: DropVaultEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DropVaultEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return DropVaultEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return DropVaultEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return DropVaultEvent.fromBcs(data); }, bcs: DropVaultEvent.bcs, fromJSONField: function (field) { return DropVaultEvent.fromJSONField(field); }, fromJSON: function (json) { return DropVaultEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return DropVaultEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DropVaultEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new DropVaultEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DropVaultEvent, "r", {
        get: function () { return DropVaultEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    DropVaultEvent.phantom = function () { return (0, reified_1.phantom)(DropVaultEvent.reified()); };
    Object.defineProperty(DropVaultEvent, "p", {
        get: function () { return DropVaultEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DropVaultEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DropVaultEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), round: bcs_1.bcs.u64(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DropVaultEvent.fromFields = function (fields) { return DropVaultEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), round: (0, reified_1.decodeFromFields)("u64", fields.round), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    DropVaultEvent.fromFieldsWithTypes = function (item) {
        if (!isDropVaultEvent(item.type)) {
            throw new Error("not a DropVaultEvent type");
        }
        return DropVaultEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), round: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.round), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    DropVaultEvent.fromBcs = function (data) { return DropVaultEvent.fromFields(DropVaultEvent.bcs.parse(data)); };
    DropVaultEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), round: this.round.toString(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    DropVaultEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DropVaultEvent.fromJSONField = function (field) { return DropVaultEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), round: (0, reified_1.decodeFromJSONField)("u64", field.round), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    DropVaultEvent.fromJSON = function (json) {
        if (json.$typeName !== DropVaultEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DropVaultEvent.fromJSONField(json);
    };
    DropVaultEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDropVaultEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DropVaultEvent object"));
    } return DropVaultEvent.fromFieldsWithTypes(content); };
    DropVaultEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DropVaultEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDropVaultEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DropVaultEvent object"));
                        }
                        return [2 /*return*/, DropVaultEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DropVaultEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DropVaultEvent";
    DropVaultEvent.$numTypeParams = 0;
    return DropVaultEvent;
}());
exports.DropVaultEvent = DropVaultEvent;
/* ============================== ExerciseEvent =============================== */
function isExerciseEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ExerciseEvent"; }
var ExerciseEvent = /** @class */ (function () {
    function ExerciseEvent(typeArgs, fields) {
        this.$typeName = ExerciseEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ExerciseEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
        ;
        this.decimal = fields.decimal;
        ;
        this.incentiveToken = fields.incentiveToken;
        ;
        this.incentiveAmount = fields.incentiveAmount;
        ;
        this.u64Padding = fields.u64Padding;
    }
    ExerciseEvent.reified = function () {
        var _this = this;
        return { typeName: ExerciseEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ExerciseEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ExerciseEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ExerciseEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ExerciseEvent.fromBcs(data); }, bcs: ExerciseEvent.bcs, fromJSONField: function (field) { return ExerciseEvent.fromJSONField(field); }, fromJSON: function (json) { return ExerciseEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return ExerciseEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ExerciseEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new ExerciseEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ExerciseEvent, "r", {
        get: function () { return ExerciseEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    ExerciseEvent.phantom = function () { return (0, reified_1.phantom)(ExerciseEvent.reified()); };
    Object.defineProperty(ExerciseEvent, "p", {
        get: function () { return ExerciseEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExerciseEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ExerciseEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64(), decimal: bcs_1.bcs.u64(), incentive_token: structs_1.Option.bcs(structs_3.TypeName.bcs), incentive_amount: bcs_1.bcs.u64(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ExerciseEvent.fromFields = function (fields) { return ExerciseEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount), decimal: (0, reified_1.decodeFromFields)("u64", fields.decimal), incentiveToken: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_3.TypeName.reified()), fields.incentive_token), incentiveAmount: (0, reified_1.decodeFromFields)("u64", fields.incentive_amount), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    ExerciseEvent.fromFieldsWithTypes = function (item) {
        if (!isExerciseEvent(item.type)) {
            throw new Error("not a ExerciseEvent type");
        }
        return ExerciseEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), decimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.decimal), incentiveToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_3.TypeName.reified()), item.fields.incentive_token), incentiveAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_amount), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    ExerciseEvent.fromBcs = function (data) { return ExerciseEvent.fromFields(ExerciseEvent.bcs.parse(data)); };
    ExerciseEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), amount: this.amount.toString(), decimal: this.decimal.toString(), incentiveToken: (0, reified_1.fieldToJSON)("0x1::option::Option<0x1::type_name::TypeName>", this.incentiveToken), incentiveAmount: this.incentiveAmount.toString(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    ExerciseEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ExerciseEvent.fromJSONField = function (field) { return ExerciseEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), decimal: (0, reified_1.decodeFromJSONField)("u64", field.decimal), incentiveToken: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_3.TypeName.reified()), field.incentiveToken), incentiveAmount: (0, reified_1.decodeFromJSONField)("u64", field.incentiveAmount), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    ExerciseEvent.fromJSON = function (json) {
        if (json.$typeName !== ExerciseEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ExerciseEvent.fromJSONField(json);
    };
    ExerciseEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isExerciseEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ExerciseEvent object"));
    } return ExerciseEvent.fromFieldsWithTypes(content); };
    ExerciseEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ExerciseEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isExerciseEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ExerciseEvent object"));
                        }
                        return [2 /*return*/, ExerciseEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ExerciseEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ExerciseEvent";
    ExerciseEvent.$numTypeParams = 0;
    return ExerciseEvent;
}());
exports.ExerciseEvent = ExerciseEvent;
/* ============================== HarvestEvent =============================== */
function isHarvestEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::HarvestEvent"; }
var HarvestEvent = /** @class */ (function () {
    function HarvestEvent(typeArgs, fields) {
        this.$typeName = HarvestEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([HarvestEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
        ;
        this.feeAmount = fields.feeAmount;
        ;
        this.decimal = fields.decimal;
        ;
        this.oracleInfo = fields.oracleInfo;
        ;
        this.u64Padding = fields.u64Padding;
    }
    HarvestEvent.reified = function () {
        var _this = this;
        return { typeName: HarvestEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([HarvestEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return HarvestEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return HarvestEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return HarvestEvent.fromBcs(data); }, bcs: HarvestEvent.bcs, fromJSONField: function (field) { return HarvestEvent.fromJSONField(field); }, fromJSON: function (json) { return HarvestEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return HarvestEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, HarvestEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new HarvestEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(HarvestEvent, "r", {
        get: function () { return HarvestEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    HarvestEvent.phantom = function () { return (0, reified_1.phantom)(HarvestEvent.reified()); };
    Object.defineProperty(HarvestEvent, "p", {
        get: function () { return HarvestEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HarvestEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("HarvestEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64(), fee_amount: bcs_1.bcs.u64(), decimal: bcs_1.bcs.u64(), oracle_info: OracleInfo.bcs, u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    HarvestEvent.fromFields = function (fields) { return HarvestEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount), feeAmount: (0, reified_1.decodeFromFields)("u64", fields.fee_amount), decimal: (0, reified_1.decodeFromFields)("u64", fields.decimal), oracleInfo: (0, reified_1.decodeFromFields)(OracleInfo.reified(), fields.oracle_info), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    HarvestEvent.fromFieldsWithTypes = function (item) {
        if (!isHarvestEvent(item.type)) {
            throw new Error("not a HarvestEvent type");
        }
        return HarvestEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), feeAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee_amount), decimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.decimal), oracleInfo: (0, reified_1.decodeFromFieldsWithTypes)(OracleInfo.reified(), item.fields.oracle_info), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    HarvestEvent.fromBcs = function (data) { return HarvestEvent.fromFields(HarvestEvent.bcs.parse(data)); };
    HarvestEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), amount: this.amount.toString(), feeAmount: this.feeAmount.toString(), decimal: this.decimal.toString(), oracleInfo: this.oracleInfo.toJSONField(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    HarvestEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    HarvestEvent.fromJSONField = function (field) { return HarvestEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), feeAmount: (0, reified_1.decodeFromJSONField)("u64", field.feeAmount), decimal: (0, reified_1.decodeFromJSONField)("u64", field.decimal), oracleInfo: (0, reified_1.decodeFromJSONField)(OracleInfo.reified(), field.oracleInfo), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    HarvestEvent.fromJSON = function (json) {
        if (json.$typeName !== HarvestEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HarvestEvent.fromJSONField(json);
    };
    HarvestEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHarvestEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a HarvestEvent object"));
    } return HarvestEvent.fromFieldsWithTypes(content); };
    HarvestEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching HarvestEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHarvestEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a HarvestEvent object"));
                        }
                        return [2 /*return*/, HarvestEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    HarvestEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::HarvestEvent";
    HarvestEvent.$numTypeParams = 0;
    return HarvestEvent;
}());
exports.HarvestEvent = HarvestEvent;
/* ============================== Info =============================== */
function isInfo(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Info"; }
var Info = /** @class */ (function () {
    function Info(typeArgs, fields) {
        this.$typeName = Info.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Info.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.index = fields.index;
        ;
        this.optionType = fields.optionType;
        ;
        this.period = fields.period;
        ;
        this.activationTsMs = fields.activationTsMs;
        ;
        this.expirationTsMs = fields.expirationTsMs;
        ;
        this.depositToken = fields.depositToken;
        ;
        this.bidToken = fields.bidToken;
        ;
        this.settlementBase = fields.settlementBase;
        ;
        this.settlementQuote = fields.settlementQuote;
        ;
        this.settlementBaseName = fields.settlementBaseName;
        ;
        this.settlementQuoteName = fields.settlementQuoteName;
        ;
        this.dTokenDecimal = fields.dTokenDecimal;
        ;
        this.bTokenDecimal = fields.bTokenDecimal;
        ;
        this.oTokenDecimal = fields.oTokenDecimal;
        ;
        this.creator = fields.creator;
        ;
        this.createTsMs = fields.createTsMs;
        ;
        this.round = fields.round;
        ;
        this.status = fields.status;
        ;
        this.oracleInfo = fields.oracleInfo;
        ;
        this.deliveryInfos = fields.deliveryInfos;
        ;
        this.settlementInfo = fields.settlementInfo;
        ;
        this.u64Padding = fields.u64Padding;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    Info.reified = function () {
        var _this = this;
        return { typeName: Info.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Info.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Info.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Info.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Info.fromBcs(data); }, bcs: Info.bcs, fromJSONField: function (field) { return Info.fromJSONField(field); }, fromJSON: function (json) { return Info.fromJSON(json); }, fromSuiParsedData: function (content) { return Info.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Info.fetch(client, id)];
            }); }); }, new: function (fields) { return new Info([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Info, "r", {
        get: function () { return Info.reified(); },
        enumerable: false,
        configurable: true
    });
    Info.phantom = function () { return (0, reified_1.phantom)(Info.reified()); };
    Object.defineProperty(Info, "p", {
        get: function () { return Info.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Info, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Info", {
                index: bcs_1.bcs.u64(), option_type: bcs_1.bcs.u64(), period: bcs_1.bcs.u8(), activation_ts_ms: bcs_1.bcs.u64(), expiration_ts_ms: bcs_1.bcs.u64(), deposit_token: structs_3.TypeName.bcs, bid_token: structs_3.TypeName.bcs, settlement_base: structs_3.TypeName.bcs, settlement_quote: structs_3.TypeName.bcs, settlement_base_name: structs_2.String.bcs, settlement_quote_name: structs_2.String.bcs, d_token_decimal: bcs_1.bcs.u64(), b_token_decimal: bcs_1.bcs.u64(), o_token_decimal: bcs_1.bcs.u64(), creator: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), create_ts_ms: bcs_1.bcs.u64(), round: bcs_1.bcs.u64(), status: bcs_1.bcs.u64(), oracle_info: OracleInfo.bcs, delivery_infos: DeliveryInfos.bcs, settlement_info: structs_1.Option.bcs(SettlementInfo.bcs), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.u8())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Info.fromFields = function (fields) { return Info.reified().new({ index: (0, reified_1.decodeFromFields)("u64", fields.index), optionType: (0, reified_1.decodeFromFields)("u64", fields.option_type), period: (0, reified_1.decodeFromFields)("u8", fields.period), activationTsMs: (0, reified_1.decodeFromFields)("u64", fields.activation_ts_ms), expirationTsMs: (0, reified_1.decodeFromFields)("u64", fields.expiration_ts_ms), depositToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.deposit_token), bidToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.bid_token), settlementBase: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.settlement_base), settlementQuote: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.settlement_quote), settlementBaseName: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.settlement_base_name), settlementQuoteName: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.settlement_quote_name), dTokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.d_token_decimal), bTokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.b_token_decimal), oTokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.o_token_decimal), creator: (0, reified_1.decodeFromFields)("address", fields.creator), createTsMs: (0, reified_1.decodeFromFields)("u64", fields.create_ts_ms), round: (0, reified_1.decodeFromFields)("u64", fields.round), status: (0, reified_1.decodeFromFields)("u64", fields.status), oracleInfo: (0, reified_1.decodeFromFields)(OracleInfo.reified(), fields.oracle_info), deliveryInfos: (0, reified_1.decodeFromFields)(DeliveryInfos.reified(), fields.delivery_infos), settlementInfo: (0, reified_1.decodeFromFields)(structs_1.Option.reified(SettlementInfo.reified()), fields.settlement_info), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.bcs_padding) }); };
    Info.fromFieldsWithTypes = function (item) {
        if (!isInfo(item.type)) {
            throw new Error("not a Info type");
        }
        return Info.reified().new({ index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), optionType: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.option_type), period: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.period), activationTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.activation_ts_ms), expirationTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_ts_ms), depositToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.deposit_token), bidToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.bid_token), settlementBase: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.settlement_base), settlementQuote: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.settlement_quote), settlementBaseName: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.settlement_base_name), settlementQuoteName: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.settlement_quote_name), dTokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.d_token_decimal), bTokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.b_token_decimal), oTokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.o_token_decimal), creator: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.creator), createTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.create_ts_ms), round: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.round), status: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.status), oracleInfo: (0, reified_1.decodeFromFieldsWithTypes)(OracleInfo.reified(), item.fields.oracle_info), deliveryInfos: (0, reified_1.decodeFromFieldsWithTypes)(DeliveryInfos.reified(), item.fields.delivery_infos), settlementInfo: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(SettlementInfo.reified()), item.fields.settlement_info), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.bcs_padding) });
    };
    Info.fromBcs = function (data) { return Info.fromFields(Info.bcs.parse(data)); };
    Info.prototype.toJSONField = function () {
        return {
            index: this.index.toString(), optionType: this.optionType.toString(), period: this.period, activationTsMs: this.activationTsMs.toString(), expirationTsMs: this.expirationTsMs.toString(), depositToken: this.depositToken.toJSONField(), bidToken: this.bidToken.toJSONField(), settlementBase: this.settlementBase.toJSONField(), settlementQuote: this.settlementQuote.toJSONField(), settlementBaseName: this.settlementBaseName, settlementQuoteName: this.settlementQuoteName, dTokenDecimal: this.dTokenDecimal.toString(), bTokenDecimal: this.bTokenDecimal.toString(), oTokenDecimal: this.oTokenDecimal.toString(), creator: this.creator, createTsMs: this.createTsMs.toString(), round: this.round.toString(), status: this.status.toString(), oracleInfo: this.oracleInfo.toJSONField(), deliveryInfos: this.deliveryInfos.toJSONField(), settlementInfo: (0, reified_1.fieldToJSON)("0x1::option::Option<0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::SettlementInfo>", this.settlementInfo), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding), bcsPadding: (0, reified_1.fieldToJSON)("vector<u8>", this.bcsPadding),
        };
    };
    Info.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Info.fromJSONField = function (field) { return Info.reified().new({ index: (0, reified_1.decodeFromJSONField)("u64", field.index), optionType: (0, reified_1.decodeFromJSONField)("u64", field.optionType), period: (0, reified_1.decodeFromJSONField)("u8", field.period), activationTsMs: (0, reified_1.decodeFromJSONField)("u64", field.activationTsMs), expirationTsMs: (0, reified_1.decodeFromJSONField)("u64", field.expirationTsMs), depositToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.depositToken), bidToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.bidToken), settlementBase: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.settlementBase), settlementQuote: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.settlementQuote), settlementBaseName: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.settlementBaseName), settlementQuoteName: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.settlementQuoteName), dTokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.dTokenDecimal), bTokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.bTokenDecimal), oTokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.oTokenDecimal), creator: (0, reified_1.decodeFromJSONField)("address", field.creator), createTsMs: (0, reified_1.decodeFromJSONField)("u64", field.createTsMs), round: (0, reified_1.decodeFromJSONField)("u64", field.round), status: (0, reified_1.decodeFromJSONField)("u64", field.status), oracleInfo: (0, reified_1.decodeFromJSONField)(OracleInfo.reified(), field.oracleInfo), deliveryInfos: (0, reified_1.decodeFromJSONField)(DeliveryInfos.reified(), field.deliveryInfos), settlementInfo: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(SettlementInfo.reified()), field.settlementInfo), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.bcsPadding) }); };
    Info.fromJSON = function (json) {
        if (json.$typeName !== Info.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Info.fromJSONField(json);
    };
    Info.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isInfo(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Info object"));
    } return Info.fromFieldsWithTypes(content); };
    Info.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Info object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isInfo(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Info object"));
                        }
                        return [2 /*return*/, Info.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Info.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Info";
    Info.$numTypeParams = 0;
    return Info;
}());
exports.Info = Info;
/* ============================== NewAuctionEvent =============================== */
function isNewAuctionEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::NewAuctionEvent"; }
var NewAuctionEvent = /** @class */ (function () {
    function NewAuctionEvent(typeArgs, fields) {
        this.$typeName = NewAuctionEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NewAuctionEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.round = fields.round;
        ;
        this.startTsMs = fields.startTsMs;
        ;
        this.endTsMs = fields.endTsMs;
        ;
        this.size = fields.size;
        ;
        this.vaultConfig = fields.vaultConfig;
        ;
        this.oracleInfo = fields.oracleInfo;
        ;
        this.u64Padding = fields.u64Padding;
    }
    NewAuctionEvent.reified = function () {
        var _this = this;
        return { typeName: NewAuctionEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([NewAuctionEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return NewAuctionEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return NewAuctionEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return NewAuctionEvent.fromBcs(data); }, bcs: NewAuctionEvent.bcs, fromJSONField: function (field) { return NewAuctionEvent.fromJSONField(field); }, fromJSON: function (json) { return NewAuctionEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return NewAuctionEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, NewAuctionEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new NewAuctionEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(NewAuctionEvent, "r", {
        get: function () { return NewAuctionEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    NewAuctionEvent.phantom = function () { return (0, reified_1.phantom)(NewAuctionEvent.reified()); };
    Object.defineProperty(NewAuctionEvent, "p", {
        get: function () { return NewAuctionEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewAuctionEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("NewAuctionEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), round: bcs_1.bcs.u64(), start_ts_ms: bcs_1.bcs.u64(), end_ts_ms: bcs_1.bcs.u64(), size: bcs_1.bcs.u64(), vault_config: VaultConfig.bcs, oracle_info: OracleInfo.bcs, u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    NewAuctionEvent.fromFields = function (fields) { return NewAuctionEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), round: (0, reified_1.decodeFromFields)("u64", fields.round), startTsMs: (0, reified_1.decodeFromFields)("u64", fields.start_ts_ms), endTsMs: (0, reified_1.decodeFromFields)("u64", fields.end_ts_ms), size: (0, reified_1.decodeFromFields)("u64", fields.size), vaultConfig: (0, reified_1.decodeFromFields)(VaultConfig.reified(), fields.vault_config), oracleInfo: (0, reified_1.decodeFromFields)(OracleInfo.reified(), fields.oracle_info), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    NewAuctionEvent.fromFieldsWithTypes = function (item) {
        if (!isNewAuctionEvent(item.type)) {
            throw new Error("not a NewAuctionEvent type");
        }
        return NewAuctionEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), round: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.round), startTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_ts_ms), endTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.end_ts_ms), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size), vaultConfig: (0, reified_1.decodeFromFieldsWithTypes)(VaultConfig.reified(), item.fields.vault_config), oracleInfo: (0, reified_1.decodeFromFieldsWithTypes)(OracleInfo.reified(), item.fields.oracle_info), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    NewAuctionEvent.fromBcs = function (data) { return NewAuctionEvent.fromFields(NewAuctionEvent.bcs.parse(data)); };
    NewAuctionEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), round: this.round.toString(), startTsMs: this.startTsMs.toString(), endTsMs: this.endTsMs.toString(), size: this.size.toString(), vaultConfig: this.vaultConfig.toJSONField(), oracleInfo: this.oracleInfo.toJSONField(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    NewAuctionEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    NewAuctionEvent.fromJSONField = function (field) { return NewAuctionEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), round: (0, reified_1.decodeFromJSONField)("u64", field.round), startTsMs: (0, reified_1.decodeFromJSONField)("u64", field.startTsMs), endTsMs: (0, reified_1.decodeFromJSONField)("u64", field.endTsMs), size: (0, reified_1.decodeFromJSONField)("u64", field.size), vaultConfig: (0, reified_1.decodeFromJSONField)(VaultConfig.reified(), field.vaultConfig), oracleInfo: (0, reified_1.decodeFromJSONField)(OracleInfo.reified(), field.oracleInfo), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    NewAuctionEvent.fromJSON = function (json) {
        if (json.$typeName !== NewAuctionEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewAuctionEvent.fromJSONField(json);
    };
    NewAuctionEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewAuctionEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a NewAuctionEvent object"));
    } return NewAuctionEvent.fromFieldsWithTypes(content); };
    NewAuctionEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching NewAuctionEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewAuctionEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a NewAuctionEvent object"));
                        }
                        return [2 /*return*/, NewAuctionEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    NewAuctionEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::NewAuctionEvent";
    NewAuctionEvent.$numTypeParams = 0;
    return NewAuctionEvent;
}());
exports.NewAuctionEvent = NewAuctionEvent;
/* ============================== NewBidEvent =============================== */
function isNewBidEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::NewBidEvent"; }
var NewBidEvent = /** @class */ (function () {
    function NewBidEvent(typeArgs, fields) {
        this.$typeName = NewBidEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NewBidEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.bidIndex = fields.bidIndex;
        ;
        this.price = fields.price;
        ;
        this.size = fields.size;
        ;
        this.bToken = fields.bToken;
        ;
        this.oToken = fields.oToken;
        ;
        this.bidderBalance = fields.bidderBalance;
        ;
        this.incentiveBalance = fields.incentiveBalance;
        ;
        this.decimal = fields.decimal;
        ;
        this.tsMs = fields.tsMs;
        ;
        this.oracleInfo = fields.oracleInfo;
        ;
        this.u64Padding = fields.u64Padding;
    }
    NewBidEvent.reified = function () {
        var _this = this;
        return { typeName: NewBidEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([NewBidEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return NewBidEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return NewBidEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return NewBidEvent.fromBcs(data); }, bcs: NewBidEvent.bcs, fromJSONField: function (field) { return NewBidEvent.fromJSONField(field); }, fromJSON: function (json) { return NewBidEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return NewBidEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, NewBidEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new NewBidEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(NewBidEvent, "r", {
        get: function () { return NewBidEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    NewBidEvent.phantom = function () { return (0, reified_1.phantom)(NewBidEvent.reified()); };
    Object.defineProperty(NewBidEvent, "p", {
        get: function () { return NewBidEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewBidEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("NewBidEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), bid_index: bcs_1.bcs.u64(), price: bcs_1.bcs.u64(), size: bcs_1.bcs.u64(), b_token: structs_3.TypeName.bcs, o_token: structs_3.TypeName.bcs, bidder_balance: bcs_1.bcs.u64(), incentive_balance: bcs_1.bcs.u64(), decimal: bcs_1.bcs.u64(), ts_ms: bcs_1.bcs.u64(), oracle_info: OracleInfo.bcs, u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    NewBidEvent.fromFields = function (fields) { return NewBidEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), bidIndex: (0, reified_1.decodeFromFields)("u64", fields.bid_index), price: (0, reified_1.decodeFromFields)("u64", fields.price), size: (0, reified_1.decodeFromFields)("u64", fields.size), bToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.b_token), oToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.o_token), bidderBalance: (0, reified_1.decodeFromFields)("u64", fields.bidder_balance), incentiveBalance: (0, reified_1.decodeFromFields)("u64", fields.incentive_balance), decimal: (0, reified_1.decodeFromFields)("u64", fields.decimal), tsMs: (0, reified_1.decodeFromFields)("u64", fields.ts_ms), oracleInfo: (0, reified_1.decodeFromFields)(OracleInfo.reified(), fields.oracle_info), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    NewBidEvent.fromFieldsWithTypes = function (item) {
        if (!isNewBidEvent(item.type)) {
            throw new Error("not a NewBidEvent type");
        }
        return NewBidEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), bidIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_index), price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size), bToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.b_token), oToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.o_token), bidderBalance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bidder_balance), incentiveBalance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_balance), decimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.decimal), tsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.ts_ms), oracleInfo: (0, reified_1.decodeFromFieldsWithTypes)(OracleInfo.reified(), item.fields.oracle_info), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    NewBidEvent.fromBcs = function (data) { return NewBidEvent.fromFields(NewBidEvent.bcs.parse(data)); };
    NewBidEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), bidIndex: this.bidIndex.toString(), price: this.price.toString(), size: this.size.toString(), bToken: this.bToken.toJSONField(), oToken: this.oToken.toJSONField(), bidderBalance: this.bidderBalance.toString(), incentiveBalance: this.incentiveBalance.toString(), decimal: this.decimal.toString(), tsMs: this.tsMs.toString(), oracleInfo: this.oracleInfo.toJSONField(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    NewBidEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    NewBidEvent.fromJSONField = function (field) { return NewBidEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), bidIndex: (0, reified_1.decodeFromJSONField)("u64", field.bidIndex), price: (0, reified_1.decodeFromJSONField)("u64", field.price), size: (0, reified_1.decodeFromJSONField)("u64", field.size), bToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.bToken), oToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.oToken), bidderBalance: (0, reified_1.decodeFromJSONField)("u64", field.bidderBalance), incentiveBalance: (0, reified_1.decodeFromJSONField)("u64", field.incentiveBalance), decimal: (0, reified_1.decodeFromJSONField)("u64", field.decimal), tsMs: (0, reified_1.decodeFromJSONField)("u64", field.tsMs), oracleInfo: (0, reified_1.decodeFromJSONField)(OracleInfo.reified(), field.oracleInfo), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    NewBidEvent.fromJSON = function (json) {
        if (json.$typeName !== NewBidEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewBidEvent.fromJSONField(json);
    };
    NewBidEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewBidEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a NewBidEvent object"));
    } return NewBidEvent.fromFieldsWithTypes(content); };
    NewBidEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching NewBidEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewBidEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a NewBidEvent object"));
                        }
                        return [2 /*return*/, NewBidEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    NewBidEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::NewBidEvent";
    NewBidEvent.$numTypeParams = 0;
    return NewBidEvent;
}());
exports.NewBidEvent = NewBidEvent;
/* ============================== OracleInfo =============================== */
function isOracleInfo(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::OracleInfo"; }
var OracleInfo = /** @class */ (function () {
    function OracleInfo(typeArgs, fields) {
        this.$typeName = OracleInfo.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([OracleInfo.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.price = fields.price;
        ;
        this.decimal = fields.decimal;
    }
    OracleInfo.reified = function () {
        var _this = this;
        return { typeName: OracleInfo.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([OracleInfo.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return OracleInfo.fromFields(fields); }, fromFieldsWithTypes: function (item) { return OracleInfo.fromFieldsWithTypes(item); }, fromBcs: function (data) { return OracleInfo.fromBcs(data); }, bcs: OracleInfo.bcs, fromJSONField: function (field) { return OracleInfo.fromJSONField(field); }, fromJSON: function (json) { return OracleInfo.fromJSON(json); }, fromSuiParsedData: function (content) { return OracleInfo.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, OracleInfo.fetch(client, id)];
            }); }); }, new: function (fields) { return new OracleInfo([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(OracleInfo, "r", {
        get: function () { return OracleInfo.reified(); },
        enumerable: false,
        configurable: true
    });
    OracleInfo.phantom = function () { return (0, reified_1.phantom)(OracleInfo.reified()); };
    Object.defineProperty(OracleInfo, "p", {
        get: function () { return OracleInfo.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OracleInfo, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("OracleInfo", {
                price: bcs_1.bcs.u64(), decimal: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    OracleInfo.fromFields = function (fields) { return OracleInfo.reified().new({ price: (0, reified_1.decodeFromFields)("u64", fields.price), decimal: (0, reified_1.decodeFromFields)("u64", fields.decimal) }); };
    OracleInfo.fromFieldsWithTypes = function (item) {
        if (!isOracleInfo(item.type)) {
            throw new Error("not a OracleInfo type");
        }
        return OracleInfo.reified().new({ price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price), decimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.decimal) });
    };
    OracleInfo.fromBcs = function (data) { return OracleInfo.fromFields(OracleInfo.bcs.parse(data)); };
    OracleInfo.prototype.toJSONField = function () {
        return {
            price: this.price.toString(), decimal: this.decimal.toString(),
        };
    };
    OracleInfo.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    OracleInfo.fromJSONField = function (field) { return OracleInfo.reified().new({ price: (0, reified_1.decodeFromJSONField)("u64", field.price), decimal: (0, reified_1.decodeFromJSONField)("u64", field.decimal) }); };
    OracleInfo.fromJSON = function (json) {
        if (json.$typeName !== OracleInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return OracleInfo.fromJSONField(json);
    };
    OracleInfo.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isOracleInfo(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a OracleInfo object"));
    } return OracleInfo.fromFieldsWithTypes(content); };
    OracleInfo.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching OracleInfo object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isOracleInfo(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a OracleInfo object"));
                        }
                        return [2 /*return*/, OracleInfo.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    OracleInfo.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::OracleInfo";
    OracleInfo.$numTypeParams = 0;
    return OracleInfo;
}());
exports.OracleInfo = OracleInfo;
/* ============================== OtcEvent =============================== */
function isOtcEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::OtcEvent"; }
var OtcEvent = /** @class */ (function () {
    function OtcEvent(typeArgs, fields) {
        this.$typeName = OtcEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([OtcEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.round = fields.round;
        ;
        this.deliveryPrice = fields.deliveryPrice;
        ;
        this.deliverySize = fields.deliverySize;
        ;
        this.oTokenDecimal = fields.oTokenDecimal;
        ;
        this.bidderBidValue = fields.bidderBidValue;
        ;
        this.bidderFee = fields.bidderFee;
        ;
        this.incentiveBidValue = fields.incentiveBidValue;
        ;
        this.incentiveFee = fields.incentiveFee;
        ;
        this.bTokenDecimal = fields.bTokenDecimal;
        ;
        this.depositorIncentiveValue = fields.depositorIncentiveValue;
        ;
        this.u64Padding = fields.u64Padding;
    }
    OtcEvent.reified = function () {
        var _this = this;
        return { typeName: OtcEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([OtcEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return OtcEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return OtcEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return OtcEvent.fromBcs(data); }, bcs: OtcEvent.bcs, fromJSONField: function (field) { return OtcEvent.fromJSONField(field); }, fromJSON: function (json) { return OtcEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return OtcEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, OtcEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new OtcEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(OtcEvent, "r", {
        get: function () { return OtcEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    OtcEvent.phantom = function () { return (0, reified_1.phantom)(OtcEvent.reified()); };
    Object.defineProperty(OtcEvent, "p", {
        get: function () { return OtcEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OtcEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("OtcEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), round: bcs_1.bcs.u64(), delivery_price: bcs_1.bcs.u64(), delivery_size: bcs_1.bcs.u64(), o_token_decimal: bcs_1.bcs.u64(), bidder_bid_value: bcs_1.bcs.u64(), bidder_fee: bcs_1.bcs.u64(), incentive_bid_value: bcs_1.bcs.u64(), incentive_fee: bcs_1.bcs.u64(), b_token_decimal: bcs_1.bcs.u64(), depositor_incentive_value: bcs_1.bcs.u64(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    OtcEvent.fromFields = function (fields) { return OtcEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), round: (0, reified_1.decodeFromFields)("u64", fields.round), deliveryPrice: (0, reified_1.decodeFromFields)("u64", fields.delivery_price), deliverySize: (0, reified_1.decodeFromFields)("u64", fields.delivery_size), oTokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.o_token_decimal), bidderBidValue: (0, reified_1.decodeFromFields)("u64", fields.bidder_bid_value), bidderFee: (0, reified_1.decodeFromFields)("u64", fields.bidder_fee), incentiveBidValue: (0, reified_1.decodeFromFields)("u64", fields.incentive_bid_value), incentiveFee: (0, reified_1.decodeFromFields)("u64", fields.incentive_fee), bTokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.b_token_decimal), depositorIncentiveValue: (0, reified_1.decodeFromFields)("u64", fields.depositor_incentive_value), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    OtcEvent.fromFieldsWithTypes = function (item) {
        if (!isOtcEvent(item.type)) {
            throw new Error("not a OtcEvent type");
        }
        return OtcEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), round: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.round), deliveryPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.delivery_price), deliverySize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.delivery_size), oTokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.o_token_decimal), bidderBidValue: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bidder_bid_value), bidderFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bidder_fee), incentiveBidValue: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_bid_value), incentiveFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_fee), bTokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.b_token_decimal), depositorIncentiveValue: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.depositor_incentive_value), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    OtcEvent.fromBcs = function (data) { return OtcEvent.fromFields(OtcEvent.bcs.parse(data)); };
    OtcEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), round: this.round.toString(), deliveryPrice: this.deliveryPrice.toString(), deliverySize: this.deliverySize.toString(), oTokenDecimal: this.oTokenDecimal.toString(), bidderBidValue: this.bidderBidValue.toString(), bidderFee: this.bidderFee.toString(), incentiveBidValue: this.incentiveBidValue.toString(), incentiveFee: this.incentiveFee.toString(), bTokenDecimal: this.bTokenDecimal.toString(), depositorIncentiveValue: this.depositorIncentiveValue.toString(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    OtcEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    OtcEvent.fromJSONField = function (field) { return OtcEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), round: (0, reified_1.decodeFromJSONField)("u64", field.round), deliveryPrice: (0, reified_1.decodeFromJSONField)("u64", field.deliveryPrice), deliverySize: (0, reified_1.decodeFromJSONField)("u64", field.deliverySize), oTokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.oTokenDecimal), bidderBidValue: (0, reified_1.decodeFromJSONField)("u64", field.bidderBidValue), bidderFee: (0, reified_1.decodeFromJSONField)("u64", field.bidderFee), incentiveBidValue: (0, reified_1.decodeFromJSONField)("u64", field.incentiveBidValue), incentiveFee: (0, reified_1.decodeFromJSONField)("u64", field.incentiveFee), bTokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.bTokenDecimal), depositorIncentiveValue: (0, reified_1.decodeFromJSONField)("u64", field.depositorIncentiveValue), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    OtcEvent.fromJSON = function (json) {
        if (json.$typeName !== OtcEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return OtcEvent.fromJSONField(json);
    };
    OtcEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isOtcEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a OtcEvent object"));
    } return OtcEvent.fromFieldsWithTypes(content); };
    OtcEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching OtcEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isOtcEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a OtcEvent object"));
                        }
                        return [2 /*return*/, OtcEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    OtcEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::OtcEvent";
    OtcEvent.$numTypeParams = 0;
    return OtcEvent;
}());
exports.OtcEvent = OtcEvent;
/* ============================== PayoffConfig =============================== */
function isPayoffConfig(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::PayoffConfig"; }
var PayoffConfig = /** @class */ (function () {
    function PayoffConfig(typeArgs, fields) {
        this.$typeName = PayoffConfig.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([PayoffConfig.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.strikeBp = fields.strikeBp;
        ;
        this.weight = fields.weight;
        ;
        this.isBuyer = fields.isBuyer;
        ;
        this.strike = fields.strike;
        ;
        this.u64Padding = fields.u64Padding;
    }
    PayoffConfig.reified = function () {
        var _this = this;
        return { typeName: PayoffConfig.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([PayoffConfig.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return PayoffConfig.fromFields(fields); }, fromFieldsWithTypes: function (item) { return PayoffConfig.fromFieldsWithTypes(item); }, fromBcs: function (data) { return PayoffConfig.fromBcs(data); }, bcs: PayoffConfig.bcs, fromJSONField: function (field) { return PayoffConfig.fromJSONField(field); }, fromJSON: function (json) { return PayoffConfig.fromJSON(json); }, fromSuiParsedData: function (content) { return PayoffConfig.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, PayoffConfig.fetch(client, id)];
            }); }); }, new: function (fields) { return new PayoffConfig([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(PayoffConfig, "r", {
        get: function () { return PayoffConfig.reified(); },
        enumerable: false,
        configurable: true
    });
    PayoffConfig.phantom = function () { return (0, reified_1.phantom)(PayoffConfig.reified()); };
    Object.defineProperty(PayoffConfig, "p", {
        get: function () { return PayoffConfig.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayoffConfig, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("PayoffConfig", {
                strike_bp: bcs_1.bcs.u64(), weight: bcs_1.bcs.u64(), is_buyer: bcs_1.bcs.bool(), strike: structs_1.Option.bcs(bcs_1.bcs.u64()), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    PayoffConfig.fromFields = function (fields) { return PayoffConfig.reified().new({ strikeBp: (0, reified_1.decodeFromFields)("u64", fields.strike_bp), weight: (0, reified_1.decodeFromFields)("u64", fields.weight), isBuyer: (0, reified_1.decodeFromFields)("bool", fields.is_buyer), strike: (0, reified_1.decodeFromFields)(structs_1.Option.reified("u64"), fields.strike), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    PayoffConfig.fromFieldsWithTypes = function (item) {
        if (!isPayoffConfig(item.type)) {
            throw new Error("not a PayoffConfig type");
        }
        return PayoffConfig.reified().new({ strikeBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.strike_bp), weight: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.weight), isBuyer: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_buyer), strike: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("u64"), item.fields.strike), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    PayoffConfig.fromBcs = function (data) { return PayoffConfig.fromFields(PayoffConfig.bcs.parse(data)); };
    PayoffConfig.prototype.toJSONField = function () {
        return {
            strikeBp: this.strikeBp.toString(), weight: this.weight.toString(), isBuyer: this.isBuyer, strike: (0, reified_1.fieldToJSON)("0x1::option::Option<u64>", this.strike), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    PayoffConfig.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    PayoffConfig.fromJSONField = function (field) { return PayoffConfig.reified().new({ strikeBp: (0, reified_1.decodeFromJSONField)("u64", field.strikeBp), weight: (0, reified_1.decodeFromJSONField)("u64", field.weight), isBuyer: (0, reified_1.decodeFromJSONField)("bool", field.isBuyer), strike: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("u64"), field.strike), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    PayoffConfig.fromJSON = function (json) {
        if (json.$typeName !== PayoffConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PayoffConfig.fromJSONField(json);
    };
    PayoffConfig.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPayoffConfig(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a PayoffConfig object"));
    } return PayoffConfig.fromFieldsWithTypes(content); };
    PayoffConfig.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching PayoffConfig object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPayoffConfig(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a PayoffConfig object"));
                        }
                        return [2 /*return*/, PayoffConfig.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    PayoffConfig.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::PayoffConfig";
    PayoffConfig.$numTypeParams = 0;
    return PayoffConfig;
}());
exports.PayoffConfig = PayoffConfig;
/* ============================== PortfolioVault =============================== */
function isPortfolioVault(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::PortfolioVault"; }
var PortfolioVault = /** @class */ (function () {
    function PortfolioVault(typeArgs, fields) {
        this.$typeName = PortfolioVault.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([PortfolioVault.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.info = fields.info;
        ;
        this.config = fields.config;
        ;
        this.authority = fields.authority;
    }
    PortfolioVault.reified = function () {
        var _this = this;
        return { typeName: PortfolioVault.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([PortfolioVault.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return PortfolioVault.fromFields(fields); }, fromFieldsWithTypes: function (item) { return PortfolioVault.fromFieldsWithTypes(item); }, fromBcs: function (data) { return PortfolioVault.fromBcs(data); }, bcs: PortfolioVault.bcs, fromJSONField: function (field) { return PortfolioVault.fromJSONField(field); }, fromJSON: function (json) { return PortfolioVault.fromJSON(json); }, fromSuiParsedData: function (content) { return PortfolioVault.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, PortfolioVault.fetch(client, id)];
            }); }); }, new: function (fields) { return new PortfolioVault([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(PortfolioVault, "r", {
        get: function () { return PortfolioVault.reified(); },
        enumerable: false,
        configurable: true
    });
    PortfolioVault.phantom = function () { return (0, reified_1.phantom)(PortfolioVault.reified()); };
    Object.defineProperty(PortfolioVault, "p", {
        get: function () { return PortfolioVault.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PortfolioVault, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("PortfolioVault", {
                id: structs_4.UID.bcs, info: Info.bcs, config: Config.bcs, authority: structs_5.Authority.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    PortfolioVault.fromFields = function (fields) { return PortfolioVault.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id), info: (0, reified_1.decodeFromFields)(Info.reified(), fields.info), config: (0, reified_1.decodeFromFields)(Config.reified(), fields.config), authority: (0, reified_1.decodeFromFields)(structs_5.Authority.reified(), fields.authority) }); };
    PortfolioVault.fromFieldsWithTypes = function (item) {
        if (!isPortfolioVault(item.type)) {
            throw new Error("not a PortfolioVault type");
        }
        return PortfolioVault.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id), info: (0, reified_1.decodeFromFieldsWithTypes)(Info.reified(), item.fields.info), config: (0, reified_1.decodeFromFieldsWithTypes)(Config.reified(), item.fields.config), authority: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Authority.reified(), item.fields.authority) });
    };
    PortfolioVault.fromBcs = function (data) { return PortfolioVault.fromFields(PortfolioVault.bcs.parse(data)); };
    PortfolioVault.prototype.toJSONField = function () {
        return {
            id: this.id, info: this.info.toJSONField(), config: this.config.toJSONField(), authority: this.authority.toJSONField(),
        };
    };
    PortfolioVault.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    PortfolioVault.fromJSONField = function (field) { return PortfolioVault.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id), info: (0, reified_1.decodeFromJSONField)(Info.reified(), field.info), config: (0, reified_1.decodeFromJSONField)(Config.reified(), field.config), authority: (0, reified_1.decodeFromJSONField)(structs_5.Authority.reified(), field.authority) }); };
    PortfolioVault.fromJSON = function (json) {
        if (json.$typeName !== PortfolioVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PortfolioVault.fromJSONField(json);
    };
    PortfolioVault.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPortfolioVault(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a PortfolioVault object"));
    } return PortfolioVault.fromFieldsWithTypes(content); };
    PortfolioVault.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching PortfolioVault object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPortfolioVault(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a PortfolioVault object"));
                        }
                        return [2 /*return*/, PortfolioVault.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    PortfolioVault.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::PortfolioVault";
    PortfolioVault.$numTypeParams = 0;
    return PortfolioVault;
}());
exports.PortfolioVault = PortfolioVault;
/* ============================== RaiseFundEvent =============================== */
function isRaiseFundEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::RaiseFundEvent"; }
var RaiseFundEvent = /** @class */ (function () {
    function RaiseFundEvent(typeArgs, fields) {
        this.$typeName = RaiseFundEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RaiseFundEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.token = fields.token;
        ;
        this.log = fields.log;
    }
    RaiseFundEvent.reified = function () {
        var _this = this;
        return { typeName: RaiseFundEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RaiseFundEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RaiseFundEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RaiseFundEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RaiseFundEvent.fromBcs(data); }, bcs: RaiseFundEvent.bcs, fromJSONField: function (field) { return RaiseFundEvent.fromJSONField(field); }, fromJSON: function (json) { return RaiseFundEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return RaiseFundEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RaiseFundEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new RaiseFundEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RaiseFundEvent, "r", {
        get: function () { return RaiseFundEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    RaiseFundEvent.phantom = function () { return (0, reified_1.phantom)(RaiseFundEvent.reified()); };
    Object.defineProperty(RaiseFundEvent, "p", {
        get: function () { return RaiseFundEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RaiseFundEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RaiseFundEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), token: structs_3.TypeName.bcs, log: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RaiseFundEvent.fromFields = function (fields) { return RaiseFundEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), log: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.log) }); };
    RaiseFundEvent.fromFieldsWithTypes = function (item) {
        if (!isRaiseFundEvent(item.type)) {
            throw new Error("not a RaiseFundEvent type");
        }
        return RaiseFundEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), log: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.log) });
    };
    RaiseFundEvent.fromBcs = function (data) { return RaiseFundEvent.fromFields(RaiseFundEvent.bcs.parse(data)); };
    RaiseFundEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, token: this.token.toJSONField(), log: (0, reified_1.fieldToJSON)("vector<u64>", this.log),
        };
    };
    RaiseFundEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RaiseFundEvent.fromJSONField = function (field) { return RaiseFundEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), log: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.log) }); };
    RaiseFundEvent.fromJSON = function (json) {
        if (json.$typeName !== RaiseFundEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RaiseFundEvent.fromJSONField(json);
    };
    RaiseFundEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRaiseFundEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RaiseFundEvent object"));
    } return RaiseFundEvent.fromFieldsWithTypes(content); };
    RaiseFundEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RaiseFundEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRaiseFundEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RaiseFundEvent object"));
                        }
                        return [2 /*return*/, RaiseFundEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RaiseFundEvent.$typeName = "0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::RaiseFundEvent";
    RaiseFundEvent.$numTypeParams = 0;
    return RaiseFundEvent;
}());
exports.RaiseFundEvent = RaiseFundEvent;
/* ============================== RecoupEvent =============================== */
function isRecoupEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RecoupEvent"; }
var RecoupEvent = /** @class */ (function () {
    function RecoupEvent(typeArgs, fields) {
        this.$typeName = RecoupEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RecoupEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.round = fields.round;
        ;
        this.activeAmount = fields.activeAmount;
        ;
        this.deactivatingAmount = fields.deactivatingAmount;
        ;
        this.dTokenDecimal = fields.dTokenDecimal;
        ;
        this.u64Padding = fields.u64Padding;
    }
    RecoupEvent.reified = function () {
        var _this = this;
        return { typeName: RecoupEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RecoupEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RecoupEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RecoupEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RecoupEvent.fromBcs(data); }, bcs: RecoupEvent.bcs, fromJSONField: function (field) { return RecoupEvent.fromJSONField(field); }, fromJSON: function (json) { return RecoupEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return RecoupEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RecoupEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new RecoupEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RecoupEvent, "r", {
        get: function () { return RecoupEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    RecoupEvent.phantom = function () { return (0, reified_1.phantom)(RecoupEvent.reified()); };
    Object.defineProperty(RecoupEvent, "p", {
        get: function () { return RecoupEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RecoupEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RecoupEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), round: bcs_1.bcs.u64(), active_amount: bcs_1.bcs.u64(), deactivating_amount: bcs_1.bcs.u64(), d_token_decimal: bcs_1.bcs.u64(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RecoupEvent.fromFields = function (fields) { return RecoupEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), round: (0, reified_1.decodeFromFields)("u64", fields.round), activeAmount: (0, reified_1.decodeFromFields)("u64", fields.active_amount), deactivatingAmount: (0, reified_1.decodeFromFields)("u64", fields.deactivating_amount), dTokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.d_token_decimal), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    RecoupEvent.fromFieldsWithTypes = function (item) {
        if (!isRecoupEvent(item.type)) {
            throw new Error("not a RecoupEvent type");
        }
        return RecoupEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), round: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.round), activeAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.active_amount), deactivatingAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deactivating_amount), dTokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.d_token_decimal), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    RecoupEvent.fromBcs = function (data) { return RecoupEvent.fromFields(RecoupEvent.bcs.parse(data)); };
    RecoupEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), round: this.round.toString(), activeAmount: this.activeAmount.toString(), deactivatingAmount: this.deactivatingAmount.toString(), dTokenDecimal: this.dTokenDecimal.toString(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    RecoupEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RecoupEvent.fromJSONField = function (field) { return RecoupEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), round: (0, reified_1.decodeFromJSONField)("u64", field.round), activeAmount: (0, reified_1.decodeFromJSONField)("u64", field.activeAmount), deactivatingAmount: (0, reified_1.decodeFromJSONField)("u64", field.deactivatingAmount), dTokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.dTokenDecimal), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    RecoupEvent.fromJSON = function (json) {
        if (json.$typeName !== RecoupEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RecoupEvent.fromJSONField(json);
    };
    RecoupEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRecoupEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RecoupEvent object"));
    } return RecoupEvent.fromFieldsWithTypes(content); };
    RecoupEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RecoupEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRecoupEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RecoupEvent object"));
                        }
                        return [2 /*return*/, RecoupEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RecoupEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RecoupEvent";
    RecoupEvent.$numTypeParams = 0;
    return RecoupEvent;
}());
exports.RecoupEvent = RecoupEvent;
/* ============================== RedeemEvent =============================== */
function isRedeemEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RedeemEvent"; }
var RedeemEvent = /** @class */ (function () {
    function RedeemEvent(typeArgs, fields) {
        this.$typeName = RedeemEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RedeemEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
        ;
        this.oracleInfo = fields.oracleInfo;
        ;
        this.u64Padding = fields.u64Padding;
    }
    RedeemEvent.reified = function () {
        var _this = this;
        return { typeName: RedeemEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RedeemEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RedeemEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RedeemEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RedeemEvent.fromBcs(data); }, bcs: RedeemEvent.bcs, fromJSONField: function (field) { return RedeemEvent.fromJSONField(field); }, fromJSON: function (json) { return RedeemEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return RedeemEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RedeemEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new RedeemEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RedeemEvent, "r", {
        get: function () { return RedeemEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    RedeemEvent.phantom = function () { return (0, reified_1.phantom)(RedeemEvent.reified()); };
    Object.defineProperty(RedeemEvent, "p", {
        get: function () { return RedeemEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedeemEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RedeemEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64(), oracle_info: OracleInfo.bcs, u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RedeemEvent.fromFields = function (fields) { return RedeemEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount), oracleInfo: (0, reified_1.decodeFromFields)(OracleInfo.reified(), fields.oracle_info), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    RedeemEvent.fromFieldsWithTypes = function (item) {
        if (!isRedeemEvent(item.type)) {
            throw new Error("not a RedeemEvent type");
        }
        return RedeemEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), oracleInfo: (0, reified_1.decodeFromFieldsWithTypes)(OracleInfo.reified(), item.fields.oracle_info), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    RedeemEvent.fromBcs = function (data) { return RedeemEvent.fromFields(RedeemEvent.bcs.parse(data)); };
    RedeemEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), amount: this.amount.toString(), oracleInfo: this.oracleInfo.toJSONField(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    RedeemEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RedeemEvent.fromJSONField = function (field) { return RedeemEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), oracleInfo: (0, reified_1.decodeFromJSONField)(OracleInfo.reified(), field.oracleInfo), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    RedeemEvent.fromJSON = function (json) {
        if (json.$typeName !== RedeemEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RedeemEvent.fromJSONField(json);
    };
    RedeemEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRedeemEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RedeemEvent object"));
    } return RedeemEvent.fromFieldsWithTypes(content); };
    RedeemEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RedeemEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRedeemEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RedeemEvent object"));
                        }
                        return [2 /*return*/, RedeemEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RedeemEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RedeemEvent";
    RedeemEvent.$numTypeParams = 0;
    return RedeemEvent;
}());
exports.RedeemEvent = RedeemEvent;
/* ============================== ReduceFundEvent =============================== */
function isReduceFundEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::ReduceFundEvent"; }
var ReduceFundEvent = /** @class */ (function () {
    function ReduceFundEvent(typeArgs, fields) {
        this.$typeName = ReduceFundEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ReduceFundEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.dToken = fields.dToken;
        ;
        this.bToken = fields.bToken;
        ;
        this.iToken = fields.iToken;
        ;
        this.log = fields.log;
    }
    ReduceFundEvent.reified = function () {
        var _this = this;
        return { typeName: ReduceFundEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ReduceFundEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return ReduceFundEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return ReduceFundEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return ReduceFundEvent.fromBcs(data); }, bcs: ReduceFundEvent.bcs, fromJSONField: function (field) { return ReduceFundEvent.fromJSONField(field); }, fromJSON: function (json) { return ReduceFundEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return ReduceFundEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ReduceFundEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new ReduceFundEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(ReduceFundEvent, "r", {
        get: function () { return ReduceFundEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    ReduceFundEvent.phantom = function () { return (0, reified_1.phantom)(ReduceFundEvent.reified()); };
    Object.defineProperty(ReduceFundEvent, "p", {
        get: function () { return ReduceFundEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReduceFundEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ReduceFundEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), d_token: structs_3.TypeName.bcs, b_token: structs_3.TypeName.bcs, i_token: structs_3.TypeName.bcs, log: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ReduceFundEvent.fromFields = function (fields) { return ReduceFundEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), dToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.d_token), bToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.b_token), iToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.i_token), log: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.log) }); };
    ReduceFundEvent.fromFieldsWithTypes = function (item) {
        if (!isReduceFundEvent(item.type)) {
            throw new Error("not a ReduceFundEvent type");
        }
        return ReduceFundEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), dToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.d_token), bToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.b_token), iToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.i_token), log: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.log) });
    };
    ReduceFundEvent.fromBcs = function (data) { return ReduceFundEvent.fromFields(ReduceFundEvent.bcs.parse(data)); };
    ReduceFundEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, dToken: this.dToken.toJSONField(), bToken: this.bToken.toJSONField(), iToken: this.iToken.toJSONField(), log: (0, reified_1.fieldToJSON)("vector<u64>", this.log),
        };
    };
    ReduceFundEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    ReduceFundEvent.fromJSONField = function (field) { return ReduceFundEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), dToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.dToken), bToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.bToken), iToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.iToken), log: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.log) }); };
    ReduceFundEvent.fromJSON = function (json) {
        if (json.$typeName !== ReduceFundEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ReduceFundEvent.fromJSONField(json);
    };
    ReduceFundEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isReduceFundEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a ReduceFundEvent object"));
    } return ReduceFundEvent.fromFieldsWithTypes(content); };
    ReduceFundEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ReduceFundEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isReduceFundEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ReduceFundEvent object"));
                        }
                        return [2 /*return*/, ReduceFundEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ReduceFundEvent.$typeName = "0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::ReduceFundEvent";
    ReduceFundEvent.$numTypeParams = 0;
    return ReduceFundEvent;
}());
exports.ReduceFundEvent = ReduceFundEvent;
/* ============================== RefundEvent =============================== */
function isRefundEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RefundEvent"; }
var RefundEvent = /** @class */ (function () {
    function RefundEvent(typeArgs, fields) {
        this.$typeName = RefundEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RefundEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
        ;
        this.u64Padding = fields.u64Padding;
    }
    RefundEvent.reified = function () {
        var _this = this;
        return { typeName: RefundEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RefundEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RefundEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RefundEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RefundEvent.fromBcs(data); }, bcs: RefundEvent.bcs, fromJSONField: function (field) { return RefundEvent.fromJSONField(field); }, fromJSON: function (json) { return RefundEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return RefundEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RefundEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new RefundEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RefundEvent, "r", {
        get: function () { return RefundEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    RefundEvent.phantom = function () { return (0, reified_1.phantom)(RefundEvent.reified()); };
    Object.defineProperty(RefundEvent, "p", {
        get: function () { return RefundEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RefundEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RefundEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RefundEvent.fromFields = function (fields) { return RefundEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    RefundEvent.fromFieldsWithTypes = function (item) {
        if (!isRefundEvent(item.type)) {
            throw new Error("not a RefundEvent type");
        }
        return RefundEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    RefundEvent.fromBcs = function (data) { return RefundEvent.fromFields(RefundEvent.bcs.parse(data)); };
    RefundEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, token: this.token.toJSONField(), amount: this.amount.toString(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    RefundEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RefundEvent.fromJSONField = function (field) { return RefundEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    RefundEvent.fromJSON = function (json) {
        if (json.$typeName !== RefundEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RefundEvent.fromJSONField(json);
    };
    RefundEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRefundEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RefundEvent object"));
    } return RefundEvent.fromFieldsWithTypes(content); };
    RefundEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RefundEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRefundEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RefundEvent object"));
                        }
                        return [2 /*return*/, RefundEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RefundEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RefundEvent";
    RefundEvent.$numTypeParams = 0;
    return RefundEvent;
}());
exports.RefundEvent = RefundEvent;
/* ============================== SettleEvent =============================== */
function isSettleEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::SettleEvent"; }
var SettleEvent = /** @class */ (function () {
    function SettleEvent(typeArgs, fields) {
        this.$typeName = SettleEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SettleEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.round = fields.round;
        ;
        this.oraclePrice = fields.oraclePrice;
        ;
        this.oraclePriceDecimal = fields.oraclePriceDecimal;
        ;
        this.settleBalance = fields.settleBalance;
        ;
        this.settledBalance = fields.settledBalance;
        ;
        this.dTokenDecimal = fields.dTokenDecimal;
        ;
        this.dToken = fields.dToken;
        ;
        this.sharePrice = fields.sharePrice;
        ;
        this.u64Padding = fields.u64Padding;
    }
    SettleEvent.reified = function () {
        var _this = this;
        return { typeName: SettleEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([SettleEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return SettleEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return SettleEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return SettleEvent.fromBcs(data); }, bcs: SettleEvent.bcs, fromJSONField: function (field) { return SettleEvent.fromJSONField(field); }, fromJSON: function (json) { return SettleEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return SettleEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, SettleEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new SettleEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(SettleEvent, "r", {
        get: function () { return SettleEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    SettleEvent.phantom = function () { return (0, reified_1.phantom)(SettleEvent.reified()); };
    Object.defineProperty(SettleEvent, "p", {
        get: function () { return SettleEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SettleEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("SettleEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), round: bcs_1.bcs.u64(), oracle_price: bcs_1.bcs.u64(), oracle_price_decimal: bcs_1.bcs.u64(), settle_balance: bcs_1.bcs.u64(), settled_balance: bcs_1.bcs.u64(), d_token_decimal: bcs_1.bcs.u64(), d_token: structs_3.TypeName.bcs, share_price: bcs_1.bcs.u64(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    SettleEvent.fromFields = function (fields) { return SettleEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), round: (0, reified_1.decodeFromFields)("u64", fields.round), oraclePrice: (0, reified_1.decodeFromFields)("u64", fields.oracle_price), oraclePriceDecimal: (0, reified_1.decodeFromFields)("u64", fields.oracle_price_decimal), settleBalance: (0, reified_1.decodeFromFields)("u64", fields.settle_balance), settledBalance: (0, reified_1.decodeFromFields)("u64", fields.settled_balance), dTokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.d_token_decimal), dToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.d_token), sharePrice: (0, reified_1.decodeFromFields)("u64", fields.share_price), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    SettleEvent.fromFieldsWithTypes = function (item) {
        if (!isSettleEvent(item.type)) {
            throw new Error("not a SettleEvent type");
        }
        return SettleEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), round: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.round), oraclePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.oracle_price), oraclePriceDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.oracle_price_decimal), settleBalance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.settle_balance), settledBalance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.settled_balance), dTokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.d_token_decimal), dToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.d_token), sharePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.share_price), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    SettleEvent.fromBcs = function (data) { return SettleEvent.fromFields(SettleEvent.bcs.parse(data)); };
    SettleEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), round: this.round.toString(), oraclePrice: this.oraclePrice.toString(), oraclePriceDecimal: this.oraclePriceDecimal.toString(), settleBalance: this.settleBalance.toString(), settledBalance: this.settledBalance.toString(), dTokenDecimal: this.dTokenDecimal.toString(), dToken: this.dToken.toJSONField(), sharePrice: this.sharePrice.toString(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    SettleEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    SettleEvent.fromJSONField = function (field) { return SettleEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), round: (0, reified_1.decodeFromJSONField)("u64", field.round), oraclePrice: (0, reified_1.decodeFromJSONField)("u64", field.oraclePrice), oraclePriceDecimal: (0, reified_1.decodeFromJSONField)("u64", field.oraclePriceDecimal), settleBalance: (0, reified_1.decodeFromJSONField)("u64", field.settleBalance), settledBalance: (0, reified_1.decodeFromJSONField)("u64", field.settledBalance), dTokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.dTokenDecimal), dToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.dToken), sharePrice: (0, reified_1.decodeFromJSONField)("u64", field.sharePrice), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    SettleEvent.fromJSON = function (json) {
        if (json.$typeName !== SettleEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SettleEvent.fromJSONField(json);
    };
    SettleEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSettleEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a SettleEvent object"));
    } return SettleEvent.fromFieldsWithTypes(content); };
    SettleEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching SettleEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSettleEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a SettleEvent object"));
                        }
                        return [2 /*return*/, SettleEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    SettleEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::SettleEvent";
    SettleEvent.$numTypeParams = 0;
    return SettleEvent;
}());
exports.SettleEvent = SettleEvent;
/* ============================== SettlementInfo =============================== */
function isSettlementInfo(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::SettlementInfo"; }
var SettlementInfo = /** @class */ (function () {
    function SettlementInfo(typeArgs, fields) {
        this.$typeName = SettlementInfo.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SettlementInfo.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.round = fields.round;
        ;
        this.oraclePrice = fields.oraclePrice;
        ;
        this.oraclePriceDecimal = fields.oraclePriceDecimal;
        ;
        this.settleBalance = fields.settleBalance;
        ;
        this.settledBalance = fields.settledBalance;
        ;
        this.sharePrice = fields.sharePrice;
        ;
        this.sharePriceDecimal = fields.sharePriceDecimal;
        ;
        this.tsMs = fields.tsMs;
        ;
        this.u64Padding = fields.u64Padding;
    }
    SettlementInfo.reified = function () {
        var _this = this;
        return { typeName: SettlementInfo.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([SettlementInfo.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return SettlementInfo.fromFields(fields); }, fromFieldsWithTypes: function (item) { return SettlementInfo.fromFieldsWithTypes(item); }, fromBcs: function (data) { return SettlementInfo.fromBcs(data); }, bcs: SettlementInfo.bcs, fromJSONField: function (field) { return SettlementInfo.fromJSONField(field); }, fromJSON: function (json) { return SettlementInfo.fromJSON(json); }, fromSuiParsedData: function (content) { return SettlementInfo.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, SettlementInfo.fetch(client, id)];
            }); }); }, new: function (fields) { return new SettlementInfo([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(SettlementInfo, "r", {
        get: function () { return SettlementInfo.reified(); },
        enumerable: false,
        configurable: true
    });
    SettlementInfo.phantom = function () { return (0, reified_1.phantom)(SettlementInfo.reified()); };
    Object.defineProperty(SettlementInfo, "p", {
        get: function () { return SettlementInfo.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SettlementInfo, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("SettlementInfo", {
                round: bcs_1.bcs.u64(), oracle_price: bcs_1.bcs.u64(), oracle_price_decimal: bcs_1.bcs.u64(), settle_balance: bcs_1.bcs.u64(), settled_balance: bcs_1.bcs.u64(), share_price: bcs_1.bcs.u64(), share_price_decimal: bcs_1.bcs.u64(), ts_ms: bcs_1.bcs.u64(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    SettlementInfo.fromFields = function (fields) { return SettlementInfo.reified().new({ round: (0, reified_1.decodeFromFields)("u64", fields.round), oraclePrice: (0, reified_1.decodeFromFields)("u64", fields.oracle_price), oraclePriceDecimal: (0, reified_1.decodeFromFields)("u64", fields.oracle_price_decimal), settleBalance: (0, reified_1.decodeFromFields)("u64", fields.settle_balance), settledBalance: (0, reified_1.decodeFromFields)("u64", fields.settled_balance), sharePrice: (0, reified_1.decodeFromFields)("u64", fields.share_price), sharePriceDecimal: (0, reified_1.decodeFromFields)("u64", fields.share_price_decimal), tsMs: (0, reified_1.decodeFromFields)("u64", fields.ts_ms), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    SettlementInfo.fromFieldsWithTypes = function (item) {
        if (!isSettlementInfo(item.type)) {
            throw new Error("not a SettlementInfo type");
        }
        return SettlementInfo.reified().new({ round: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.round), oraclePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.oracle_price), oraclePriceDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.oracle_price_decimal), settleBalance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.settle_balance), settledBalance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.settled_balance), sharePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.share_price), sharePriceDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.share_price_decimal), tsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.ts_ms), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    SettlementInfo.fromBcs = function (data) { return SettlementInfo.fromFields(SettlementInfo.bcs.parse(data)); };
    SettlementInfo.prototype.toJSONField = function () {
        return {
            round: this.round.toString(), oraclePrice: this.oraclePrice.toString(), oraclePriceDecimal: this.oraclePriceDecimal.toString(), settleBalance: this.settleBalance.toString(), settledBalance: this.settledBalance.toString(), sharePrice: this.sharePrice.toString(), sharePriceDecimal: this.sharePriceDecimal.toString(), tsMs: this.tsMs.toString(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    SettlementInfo.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    SettlementInfo.fromJSONField = function (field) { return SettlementInfo.reified().new({ round: (0, reified_1.decodeFromJSONField)("u64", field.round), oraclePrice: (0, reified_1.decodeFromJSONField)("u64", field.oraclePrice), oraclePriceDecimal: (0, reified_1.decodeFromJSONField)("u64", field.oraclePriceDecimal), settleBalance: (0, reified_1.decodeFromJSONField)("u64", field.settleBalance), settledBalance: (0, reified_1.decodeFromJSONField)("u64", field.settledBalance), sharePrice: (0, reified_1.decodeFromJSONField)("u64", field.sharePrice), sharePriceDecimal: (0, reified_1.decodeFromJSONField)("u64", field.sharePriceDecimal), tsMs: (0, reified_1.decodeFromJSONField)("u64", field.tsMs), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    SettlementInfo.fromJSON = function (json) {
        if (json.$typeName !== SettlementInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SettlementInfo.fromJSONField(json);
    };
    SettlementInfo.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSettlementInfo(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a SettlementInfo object"));
    } return SettlementInfo.fromFieldsWithTypes(content); };
    SettlementInfo.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching SettlementInfo object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSettlementInfo(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a SettlementInfo object"));
                        }
                        return [2 /*return*/, SettlementInfo.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    SettlementInfo.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::SettlementInfo";
    SettlementInfo.$numTypeParams = 0;
    return SettlementInfo;
}());
exports.SettlementInfo = SettlementInfo;
/* ============================== TYPUS_DOV_SINGLE =============================== */
function isTYPUS_DOV_SINGLE(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TYPUS_DOV_SINGLE"; }
var TYPUS_DOV_SINGLE = /** @class */ (function () {
    function TYPUS_DOV_SINGLE(typeArgs, fields) {
        this.$typeName = TYPUS_DOV_SINGLE.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TYPUS_DOV_SINGLE.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    TYPUS_DOV_SINGLE.reified = function () {
        var _this = this;
        return { typeName: TYPUS_DOV_SINGLE.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TYPUS_DOV_SINGLE.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return TYPUS_DOV_SINGLE.fromFields(fields); }, fromFieldsWithTypes: function (item) { return TYPUS_DOV_SINGLE.fromFieldsWithTypes(item); }, fromBcs: function (data) { return TYPUS_DOV_SINGLE.fromBcs(data); }, bcs: TYPUS_DOV_SINGLE.bcs, fromJSONField: function (field) { return TYPUS_DOV_SINGLE.fromJSONField(field); }, fromJSON: function (json) { return TYPUS_DOV_SINGLE.fromJSON(json); }, fromSuiParsedData: function (content) { return TYPUS_DOV_SINGLE.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TYPUS_DOV_SINGLE.fetch(client, id)];
            }); }); }, new: function (fields) { return new TYPUS_DOV_SINGLE([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TYPUS_DOV_SINGLE, "r", {
        get: function () { return TYPUS_DOV_SINGLE.reified(); },
        enumerable: false,
        configurable: true
    });
    TYPUS_DOV_SINGLE.phantom = function () { return (0, reified_1.phantom)(TYPUS_DOV_SINGLE.reified()); };
    Object.defineProperty(TYPUS_DOV_SINGLE, "p", {
        get: function () { return TYPUS_DOV_SINGLE.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TYPUS_DOV_SINGLE, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TYPUS_DOV_SINGLE", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TYPUS_DOV_SINGLE.fromFields = function (fields) { return TYPUS_DOV_SINGLE.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    TYPUS_DOV_SINGLE.fromFieldsWithTypes = function (item) {
        if (!isTYPUS_DOV_SINGLE(item.type)) {
            throw new Error("not a TYPUS_DOV_SINGLE type");
        }
        return TYPUS_DOV_SINGLE.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    TYPUS_DOV_SINGLE.fromBcs = function (data) { return TYPUS_DOV_SINGLE.fromFields(TYPUS_DOV_SINGLE.bcs.parse(data)); };
    TYPUS_DOV_SINGLE.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    TYPUS_DOV_SINGLE.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TYPUS_DOV_SINGLE.fromJSONField = function (field) { return TYPUS_DOV_SINGLE.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    TYPUS_DOV_SINGLE.fromJSON = function (json) {
        if (json.$typeName !== TYPUS_DOV_SINGLE.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TYPUS_DOV_SINGLE.fromJSONField(json);
    };
    TYPUS_DOV_SINGLE.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTYPUS_DOV_SINGLE(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TYPUS_DOV_SINGLE object"));
    } return TYPUS_DOV_SINGLE.fromFieldsWithTypes(content); };
    TYPUS_DOV_SINGLE.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TYPUS_DOV_SINGLE object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTYPUS_DOV_SINGLE(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TYPUS_DOV_SINGLE object"));
                        }
                        return [2 /*return*/, TYPUS_DOV_SINGLE.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TYPUS_DOV_SINGLE.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TYPUS_DOV_SINGLE";
    TYPUS_DOV_SINGLE.$numTypeParams = 0;
    return TYPUS_DOV_SINGLE;
}());
exports.TYPUS_DOV_SINGLE = TYPUS_DOV_SINGLE;
/* ============================== TerminateAuctionEvent =============================== */
function isTerminateAuctionEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TerminateAuctionEvent"; }
var TerminateAuctionEvent = /** @class */ (function () {
    function TerminateAuctionEvent(typeArgs, fields) {
        this.$typeName = TerminateAuctionEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TerminateAuctionEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.round = fields.round;
        ;
        this.u64Padding = fields.u64Padding;
    }
    TerminateAuctionEvent.reified = function () {
        var _this = this;
        return { typeName: TerminateAuctionEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TerminateAuctionEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return TerminateAuctionEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return TerminateAuctionEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return TerminateAuctionEvent.fromBcs(data); }, bcs: TerminateAuctionEvent.bcs, fromJSONField: function (field) { return TerminateAuctionEvent.fromJSONField(field); }, fromJSON: function (json) { return TerminateAuctionEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return TerminateAuctionEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TerminateAuctionEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new TerminateAuctionEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TerminateAuctionEvent, "r", {
        get: function () { return TerminateAuctionEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    TerminateAuctionEvent.phantom = function () { return (0, reified_1.phantom)(TerminateAuctionEvent.reified()); };
    Object.defineProperty(TerminateAuctionEvent, "p", {
        get: function () { return TerminateAuctionEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TerminateAuctionEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TerminateAuctionEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), round: bcs_1.bcs.u64(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TerminateAuctionEvent.fromFields = function (fields) { return TerminateAuctionEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), round: (0, reified_1.decodeFromFields)("u64", fields.round), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    TerminateAuctionEvent.fromFieldsWithTypes = function (item) {
        if (!isTerminateAuctionEvent(item.type)) {
            throw new Error("not a TerminateAuctionEvent type");
        }
        return TerminateAuctionEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), round: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.round), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    TerminateAuctionEvent.fromBcs = function (data) { return TerminateAuctionEvent.fromFields(TerminateAuctionEvent.bcs.parse(data)); };
    TerminateAuctionEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), round: this.round.toString(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    TerminateAuctionEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TerminateAuctionEvent.fromJSONField = function (field) { return TerminateAuctionEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), round: (0, reified_1.decodeFromJSONField)("u64", field.round), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    TerminateAuctionEvent.fromJSON = function (json) {
        if (json.$typeName !== TerminateAuctionEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TerminateAuctionEvent.fromJSONField(json);
    };
    TerminateAuctionEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTerminateAuctionEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TerminateAuctionEvent object"));
    } return TerminateAuctionEvent.fromFieldsWithTypes(content); };
    TerminateAuctionEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TerminateAuctionEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTerminateAuctionEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TerminateAuctionEvent object"));
                        }
                        return [2 /*return*/, TerminateAuctionEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TerminateAuctionEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TerminateAuctionEvent";
    TerminateAuctionEvent.$numTypeParams = 0;
    return TerminateAuctionEvent;
}());
exports.TerminateAuctionEvent = TerminateAuctionEvent;
/* ============================== TerminateVaultEvent =============================== */
function isTerminateVaultEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TerminateVaultEvent"; }
var TerminateVaultEvent = /** @class */ (function () {
    function TerminateVaultEvent(typeArgs, fields) {
        this.$typeName = TerminateVaultEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TerminateVaultEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.round = fields.round;
        ;
        this.u64Padding = fields.u64Padding;
    }
    TerminateVaultEvent.reified = function () {
        var _this = this;
        return { typeName: TerminateVaultEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TerminateVaultEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return TerminateVaultEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return TerminateVaultEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return TerminateVaultEvent.fromBcs(data); }, bcs: TerminateVaultEvent.bcs, fromJSONField: function (field) { return TerminateVaultEvent.fromJSONField(field); }, fromJSON: function (json) { return TerminateVaultEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return TerminateVaultEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TerminateVaultEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new TerminateVaultEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TerminateVaultEvent, "r", {
        get: function () { return TerminateVaultEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    TerminateVaultEvent.phantom = function () { return (0, reified_1.phantom)(TerminateVaultEvent.reified()); };
    Object.defineProperty(TerminateVaultEvent, "p", {
        get: function () { return TerminateVaultEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TerminateVaultEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TerminateVaultEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), round: bcs_1.bcs.u64(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TerminateVaultEvent.fromFields = function (fields) { return TerminateVaultEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), round: (0, reified_1.decodeFromFields)("u64", fields.round), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    TerminateVaultEvent.fromFieldsWithTypes = function (item) {
        if (!isTerminateVaultEvent(item.type)) {
            throw new Error("not a TerminateVaultEvent type");
        }
        return TerminateVaultEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), round: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.round), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    TerminateVaultEvent.fromBcs = function (data) { return TerminateVaultEvent.fromFields(TerminateVaultEvent.bcs.parse(data)); };
    TerminateVaultEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), round: this.round.toString(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    TerminateVaultEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TerminateVaultEvent.fromJSONField = function (field) { return TerminateVaultEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), round: (0, reified_1.decodeFromJSONField)("u64", field.round), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    TerminateVaultEvent.fromJSON = function (json) {
        if (json.$typeName !== TerminateVaultEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TerminateVaultEvent.fromJSONField(json);
    };
    TerminateVaultEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTerminateVaultEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TerminateVaultEvent object"));
    } return TerminateVaultEvent.fromFieldsWithTypes(content); };
    TerminateVaultEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TerminateVaultEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTerminateVaultEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TerminateVaultEvent object"));
                        }
                        return [2 /*return*/, TerminateVaultEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TerminateVaultEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TerminateVaultEvent";
    TerminateVaultEvent.$numTypeParams = 0;
    return TerminateVaultEvent;
}());
exports.TerminateVaultEvent = TerminateVaultEvent;
/* ============================== TransferBidReceiptEvent =============================== */
function isTransferBidReceiptEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TransferBidReceiptEvent"; }
var TransferBidReceiptEvent = /** @class */ (function () {
    function TransferBidReceiptEvent(typeArgs, fields) {
        this.$typeName = TransferBidReceiptEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TransferBidReceiptEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.amount = fields.amount;
        ;
        this.decimal = fields.decimal;
        ;
        this.recipient = fields.recipient;
        ;
        this.oracleInfo = fields.oracleInfo;
        ;
        this.u64Padding = fields.u64Padding;
    }
    TransferBidReceiptEvent.reified = function () {
        var _this = this;
        return { typeName: TransferBidReceiptEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TransferBidReceiptEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return TransferBidReceiptEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return TransferBidReceiptEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return TransferBidReceiptEvent.fromBcs(data); }, bcs: TransferBidReceiptEvent.bcs, fromJSONField: function (field) { return TransferBidReceiptEvent.fromJSONField(field); }, fromJSON: function (json) { return TransferBidReceiptEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return TransferBidReceiptEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TransferBidReceiptEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new TransferBidReceiptEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TransferBidReceiptEvent, "r", {
        get: function () { return TransferBidReceiptEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    TransferBidReceiptEvent.phantom = function () { return (0, reified_1.phantom)(TransferBidReceiptEvent.reified()); };
    Object.defineProperty(TransferBidReceiptEvent, "p", {
        get: function () { return TransferBidReceiptEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferBidReceiptEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TransferBidReceiptEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), amount: bcs_1.bcs.u64(), decimal: bcs_1.bcs.u64(), recipient: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), oracle_info: OracleInfo.bcs, u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TransferBidReceiptEvent.fromFields = function (fields) { return TransferBidReceiptEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), amount: (0, reified_1.decodeFromFields)("u64", fields.amount), decimal: (0, reified_1.decodeFromFields)("u64", fields.decimal), recipient: (0, reified_1.decodeFromFields)("address", fields.recipient), oracleInfo: (0, reified_1.decodeFromFields)(OracleInfo.reified(), fields.oracle_info), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    TransferBidReceiptEvent.fromFieldsWithTypes = function (item) {
        if (!isTransferBidReceiptEvent(item.type)) {
            throw new Error("not a TransferBidReceiptEvent type");
        }
        return TransferBidReceiptEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), decimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.decimal), recipient: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.recipient), oracleInfo: (0, reified_1.decodeFromFieldsWithTypes)(OracleInfo.reified(), item.fields.oracle_info), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    TransferBidReceiptEvent.fromBcs = function (data) { return TransferBidReceiptEvent.fromFields(TransferBidReceiptEvent.bcs.parse(data)); };
    TransferBidReceiptEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), amount: this.amount.toString(), decimal: this.decimal.toString(), recipient: this.recipient, oracleInfo: this.oracleInfo.toJSONField(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    TransferBidReceiptEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TransferBidReceiptEvent.fromJSONField = function (field) { return TransferBidReceiptEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), decimal: (0, reified_1.decodeFromJSONField)("u64", field.decimal), recipient: (0, reified_1.decodeFromJSONField)("address", field.recipient), oracleInfo: (0, reified_1.decodeFromJSONField)(OracleInfo.reified(), field.oracleInfo), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    TransferBidReceiptEvent.fromJSON = function (json) {
        if (json.$typeName !== TransferBidReceiptEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TransferBidReceiptEvent.fromJSONField(json);
    };
    TransferBidReceiptEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTransferBidReceiptEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TransferBidReceiptEvent object"));
    } return TransferBidReceiptEvent.fromFieldsWithTypes(content); };
    TransferBidReceiptEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TransferBidReceiptEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTransferBidReceiptEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TransferBidReceiptEvent object"));
                        }
                        return [2 /*return*/, TransferBidReceiptEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TransferBidReceiptEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TransferBidReceiptEvent";
    TransferBidReceiptEvent.$numTypeParams = 0;
    return TransferBidReceiptEvent;
}());
exports.TransferBidReceiptEvent = TransferBidReceiptEvent;
/* ============================== UnsubscribeEvent =============================== */
function isUnsubscribeEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::UnsubscribeEvent"; }
var UnsubscribeEvent = /** @class */ (function () {
    function UnsubscribeEvent(typeArgs, fields) {
        this.$typeName = UnsubscribeEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UnsubscribeEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
        ;
        this.decimal = fields.decimal;
        ;
        this.oracleInfo = fields.oracleInfo;
        ;
        this.u64Padding = fields.u64Padding;
    }
    UnsubscribeEvent.reified = function () {
        var _this = this;
        return { typeName: UnsubscribeEvent.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UnsubscribeEvent.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UnsubscribeEvent.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UnsubscribeEvent.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UnsubscribeEvent.fromBcs(data); }, bcs: UnsubscribeEvent.bcs, fromJSONField: function (field) { return UnsubscribeEvent.fromJSONField(field); }, fromJSON: function (json) { return UnsubscribeEvent.fromJSON(json); }, fromSuiParsedData: function (content) { return UnsubscribeEvent.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UnsubscribeEvent.fetch(client, id)];
            }); }); }, new: function (fields) { return new UnsubscribeEvent([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UnsubscribeEvent, "r", {
        get: function () { return UnsubscribeEvent.reified(); },
        enumerable: false,
        configurable: true
    });
    UnsubscribeEvent.phantom = function () { return (0, reified_1.phantom)(UnsubscribeEvent.reified()); };
    Object.defineProperty(UnsubscribeEvent, "p", {
        get: function () { return UnsubscribeEvent.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UnsubscribeEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UnsubscribeEvent", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64(), decimal: bcs_1.bcs.u64(), oracle_info: OracleInfo.bcs, u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UnsubscribeEvent.fromFields = function (fields) { return UnsubscribeEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount), decimal: (0, reified_1.decodeFromFields)("u64", fields.decimal), oracleInfo: (0, reified_1.decodeFromFields)(OracleInfo.reified(), fields.oracle_info), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    UnsubscribeEvent.fromFieldsWithTypes = function (item) {
        if (!isUnsubscribeEvent(item.type)) {
            throw new Error("not a UnsubscribeEvent type");
        }
        return UnsubscribeEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), decimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.decimal), oracleInfo: (0, reified_1.decodeFromFieldsWithTypes)(OracleInfo.reified(), item.fields.oracle_info), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    UnsubscribeEvent.fromBcs = function (data) { return UnsubscribeEvent.fromFields(UnsubscribeEvent.bcs.parse(data)); };
    UnsubscribeEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), amount: this.amount.toString(), decimal: this.decimal.toString(), oracleInfo: this.oracleInfo.toJSONField(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    UnsubscribeEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UnsubscribeEvent.fromJSONField = function (field) { return UnsubscribeEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), decimal: (0, reified_1.decodeFromJSONField)("u64", field.decimal), oracleInfo: (0, reified_1.decodeFromJSONField)(OracleInfo.reified(), field.oracleInfo), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    UnsubscribeEvent.fromJSON = function (json) {
        if (json.$typeName !== UnsubscribeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UnsubscribeEvent.fromJSONField(json);
    };
    UnsubscribeEvent.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUnsubscribeEvent(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UnsubscribeEvent object"));
    } return UnsubscribeEvent.fromFieldsWithTypes(content); };
    UnsubscribeEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
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
    UnsubscribeEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::UnsubscribeEvent";
    UnsubscribeEvent.$numTypeParams = 0;
    return UnsubscribeEvent;
}());
exports.UnsubscribeEvent = UnsubscribeEvent;
/* ============================== VaultConfig =============================== */
function isVaultConfig(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::VaultConfig"; }
var VaultConfig = /** @class */ (function () {
    function VaultConfig(typeArgs, fields) {
        this.$typeName = VaultConfig.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([VaultConfig.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.payoffConfigs = fields.payoffConfigs;
        ;
        this.strikeIncrement = fields.strikeIncrement;
        ;
        this.decaySpeed = fields.decaySpeed;
        ;
        this.initialPrice = fields.initialPrice;
        ;
        this.finalPrice = fields.finalPrice;
        ;
        this.u64Padding = fields.u64Padding;
    }
    VaultConfig.reified = function () {
        var _this = this;
        return { typeName: VaultConfig.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([VaultConfig.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return VaultConfig.fromFields(fields); }, fromFieldsWithTypes: function (item) { return VaultConfig.fromFieldsWithTypes(item); }, fromBcs: function (data) { return VaultConfig.fromBcs(data); }, bcs: VaultConfig.bcs, fromJSONField: function (field) { return VaultConfig.fromJSONField(field); }, fromJSON: function (json) { return VaultConfig.fromJSON(json); }, fromSuiParsedData: function (content) { return VaultConfig.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, VaultConfig.fetch(client, id)];
            }); }); }, new: function (fields) { return new VaultConfig([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(VaultConfig, "r", {
        get: function () { return VaultConfig.reified(); },
        enumerable: false,
        configurable: true
    });
    VaultConfig.phantom = function () { return (0, reified_1.phantom)(VaultConfig.reified()); };
    Object.defineProperty(VaultConfig, "p", {
        get: function () { return VaultConfig.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VaultConfig, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("VaultConfig", {
                payoff_configs: bcs_1.bcs.vector(PayoffConfig.bcs), strike_increment: bcs_1.bcs.u64(), decay_speed: bcs_1.bcs.u64(), initial_price: bcs_1.bcs.u64(), final_price: bcs_1.bcs.u64(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    VaultConfig.fromFields = function (fields) { return VaultConfig.reified().new({ payoffConfigs: (0, reified_1.decodeFromFields)(reified.vector(PayoffConfig.reified()), fields.payoff_configs), strikeIncrement: (0, reified_1.decodeFromFields)("u64", fields.strike_increment), decaySpeed: (0, reified_1.decodeFromFields)("u64", fields.decay_speed), initialPrice: (0, reified_1.decodeFromFields)("u64", fields.initial_price), finalPrice: (0, reified_1.decodeFromFields)("u64", fields.final_price), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    VaultConfig.fromFieldsWithTypes = function (item) {
        if (!isVaultConfig(item.type)) {
            throw new Error("not a VaultConfig type");
        }
        return VaultConfig.reified().new({ payoffConfigs: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(PayoffConfig.reified()), item.fields.payoff_configs), strikeIncrement: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.strike_increment), decaySpeed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.decay_speed), initialPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.initial_price), finalPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.final_price), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    VaultConfig.fromBcs = function (data) { return VaultConfig.fromFields(VaultConfig.bcs.parse(data)); };
    VaultConfig.prototype.toJSONField = function () {
        return {
            payoffConfigs: (0, reified_1.fieldToJSON)("vector<0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::PayoffConfig>", this.payoffConfigs), strikeIncrement: this.strikeIncrement.toString(), decaySpeed: this.decaySpeed.toString(), initialPrice: this.initialPrice.toString(), finalPrice: this.finalPrice.toString(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    VaultConfig.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    VaultConfig.fromJSONField = function (field) { return VaultConfig.reified().new({ payoffConfigs: (0, reified_1.decodeFromJSONField)(reified.vector(PayoffConfig.reified()), field.payoffConfigs), strikeIncrement: (0, reified_1.decodeFromJSONField)("u64", field.strikeIncrement), decaySpeed: (0, reified_1.decodeFromJSONField)("u64", field.decaySpeed), initialPrice: (0, reified_1.decodeFromJSONField)("u64", field.initialPrice), finalPrice: (0, reified_1.decodeFromJSONField)("u64", field.finalPrice), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    VaultConfig.fromJSON = function (json) {
        if (json.$typeName !== VaultConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return VaultConfig.fromJSONField(json);
    };
    VaultConfig.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVaultConfig(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a VaultConfig object"));
    } return VaultConfig.fromFieldsWithTypes(content); };
    VaultConfig.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching VaultConfig object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVaultConfig(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a VaultConfig object"));
                        }
                        return [2 /*return*/, VaultConfig.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    VaultConfig.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::VaultConfig";
    VaultConfig.$numTypeParams = 0;
    return VaultConfig;
}());
exports.VaultConfig = VaultConfig;
/* ============================== WithdrawEvent =============================== */
function isWithdrawEvent(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::WithdrawEvent"; }
var WithdrawEvent = /** @class */ (function () {
    function WithdrawEvent(typeArgs, fields) {
        this.$typeName = WithdrawEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([WithdrawEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
        ;
        this.decimal = fields.decimal;
        ;
        this.oracleInfo = fields.oracleInfo;
        ;
        this.u64Padding = fields.u64Padding;
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
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64(), decimal: bcs_1.bcs.u64(), oracle_info: OracleInfo.bcs, u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    WithdrawEvent.fromFields = function (fields) { return WithdrawEvent.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount), decimal: (0, reified_1.decodeFromFields)("u64", fields.decimal), oracleInfo: (0, reified_1.decodeFromFields)(OracleInfo.reified(), fields.oracle_info), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    WithdrawEvent.fromFieldsWithTypes = function (item) {
        if (!isWithdrawEvent(item.type)) {
            throw new Error("not a WithdrawEvent type");
        }
        return WithdrawEvent.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), decimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.decimal), oracleInfo: (0, reified_1.decodeFromFieldsWithTypes)(OracleInfo.reified(), item.fields.oracle_info), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    WithdrawEvent.fromBcs = function (data) { return WithdrawEvent.fromFields(WithdrawEvent.bcs.parse(data)); };
    WithdrawEvent.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), amount: this.amount.toString(), decimal: this.decimal.toString(), oracleInfo: this.oracleInfo.toJSONField(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    WithdrawEvent.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    WithdrawEvent.fromJSONField = function (field) { return WithdrawEvent.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), decimal: (0, reified_1.decodeFromJSONField)("u64", field.decimal), oracleInfo: (0, reified_1.decodeFromJSONField)(OracleInfo.reified(), field.oracleInfo), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
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
    WithdrawEvent.$typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::WithdrawEvent";
    WithdrawEvent.$numTypeParams = 0;
    return WithdrawEvent;
}());
exports.WithdrawEvent = WithdrawEvent;
