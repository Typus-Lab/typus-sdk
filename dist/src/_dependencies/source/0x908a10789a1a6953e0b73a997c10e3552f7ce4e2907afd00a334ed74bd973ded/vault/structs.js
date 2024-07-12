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
exports.Withdraw = exports.VAULT = exports.UpdateFeeShareConfig = exports.UpdateFeeConfig = exports.Unsubscribe = exports.TypusDepositReceipt = exports.TypusBidReceipt = exports.Terminate = exports.Settle = exports.RefundVault = exports.RefundShare = exports.Redeem = exports.Recoup = exports.NewRefundVault = exports.NewDepositVault = exports.NewBidVault = exports.IncentiviseBidder = exports.Harvest = exports.Exercise = exports.DepositVault = exports.DepositShare = exports.Deposit = exports.Delivery = exports.Compound = exports.Claim = exports.BidVault = exports.BidShare = exports.Activate = void 0;
exports.isActivate = isActivate;
exports.isBidShare = isBidShare;
exports.isBidVault = isBidVault;
exports.isClaim = isClaim;
exports.isCompound = isCompound;
exports.isDelivery = isDelivery;
exports.isDeposit = isDeposit;
exports.isDepositShare = isDepositShare;
exports.isDepositVault = isDepositVault;
exports.isExercise = isExercise;
exports.isHarvest = isHarvest;
exports.isIncentiviseBidder = isIncentiviseBidder;
exports.isNewBidVault = isNewBidVault;
exports.isNewDepositVault = isNewDepositVault;
exports.isNewRefundVault = isNewRefundVault;
exports.isRecoup = isRecoup;
exports.isRedeem = isRedeem;
exports.isRefundShare = isRefundShare;
exports.isRefundVault = isRefundVault;
exports.isSettle = isSettle;
exports.isTerminate = isTerminate;
exports.isTypusBidReceipt = isTypusBidReceipt;
exports.isTypusDepositReceipt = isTypusDepositReceipt;
exports.isUnsubscribe = isUnsubscribe;
exports.isUpdateFeeConfig = isUpdateFeeConfig;
exports.isUpdateFeeShareConfig = isUpdateFeeShareConfig;
exports.isVAULT = isVAULT;
exports.isWithdraw = isWithdraw;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/option/structs");
var structs_2 = require("../../0x1/string/structs");
var structs_3 = require("../../0x1/type-name/structs");
var structs_4 = require("../../0x2/object/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== Activate =============================== */
function isActivate(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Activate"; }
var Activate = /** @class */ (function () {
    function Activate(typeArgs, fields) {
        this.$typeName = Activate.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Activate.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
        ;
        this.hasNext = fields.hasNext;
    }
    Activate.reified = function () {
        var _this = this;
        return { typeName: Activate.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Activate.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Activate.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Activate.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Activate.fromBcs(data); }, bcs: Activate.bcs, fromJSONField: function (field) { return Activate.fromJSONField(field); }, fromJSON: function (json) { return Activate.fromJSON(json); }, fromSuiParsedData: function (content) { return Activate.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Activate.fetch(client, id)];
            }); }); }, new: function (fields) { return new Activate([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Activate, "r", {
        get: function () { return Activate.reified(); },
        enumerable: false,
        configurable: true
    });
    Activate.phantom = function () { return (0, reified_1.phantom)(Activate.reified()); };
    Object.defineProperty(Activate, "p", {
        get: function () { return Activate.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Activate, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Activate", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64(), has_next: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Activate.fromFields = function (fields) { return Activate.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount), hasNext: (0, reified_1.decodeFromFields)("bool", fields.has_next) }); };
    Activate.fromFieldsWithTypes = function (item) {
        if (!isActivate(item.type)) {
            throw new Error("not a Activate type");
        }
        return Activate.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), hasNext: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.has_next) });
    };
    Activate.fromBcs = function (data) { return Activate.fromFields(Activate.bcs.parse(data)); };
    Activate.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), amount: this.amount.toString(), hasNext: this.hasNext,
        };
    };
    Activate.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Activate.fromJSONField = function (field) { return Activate.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), hasNext: (0, reified_1.decodeFromJSONField)("bool", field.hasNext) }); };
    Activate.fromJSON = function (json) {
        if (json.$typeName !== Activate.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Activate.fromJSONField(json);
    };
    Activate.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isActivate(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Activate object"));
    } return Activate.fromFieldsWithTypes(content); };
    Activate.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Activate object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isActivate(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Activate object"));
                        }
                        return [2 /*return*/, Activate.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Activate.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Activate";
    Activate.$numTypeParams = 0;
    return Activate;
}());
exports.Activate = Activate;
/* ============================== BidShare =============================== */
function isBidShare(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::BidShare"; }
var BidShare = /** @class */ (function () {
    function BidShare(typeArgs, fields) {
        this.$typeName = BidShare.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([BidShare.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.receipt = fields.receipt;
        ;
        this.share = fields.share;
        ;
        this.u64Padding = fields.u64Padding;
    }
    BidShare.reified = function () {
        var _this = this;
        return { typeName: BidShare.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([BidShare.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return BidShare.fromFields(fields); }, fromFieldsWithTypes: function (item) { return BidShare.fromFieldsWithTypes(item); }, fromBcs: function (data) { return BidShare.fromBcs(data); }, bcs: BidShare.bcs, fromJSONField: function (field) { return BidShare.fromJSONField(field); }, fromJSON: function (json) { return BidShare.fromJSON(json); }, fromSuiParsedData: function (content) { return BidShare.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, BidShare.fetch(client, id)];
            }); }); }, new: function (fields) { return new BidShare([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(BidShare, "r", {
        get: function () { return BidShare.reified(); },
        enumerable: false,
        configurable: true
    });
    BidShare.phantom = function () { return (0, reified_1.phantom)(BidShare.reified()); };
    Object.defineProperty(BidShare, "p", {
        get: function () { return BidShare.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BidShare, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("BidShare", {
                receipt: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), share: bcs_1.bcs.u64(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    BidShare.fromFields = function (fields) { return BidShare.reified().new({ receipt: (0, reified_1.decodeFromFields)("address", fields.receipt), share: (0, reified_1.decodeFromFields)("u64", fields.share), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    BidShare.fromFieldsWithTypes = function (item) {
        if (!isBidShare(item.type)) {
            throw new Error("not a BidShare type");
        }
        return BidShare.reified().new({ receipt: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.receipt), share: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.share), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    BidShare.fromBcs = function (data) { return BidShare.fromFields(BidShare.bcs.parse(data)); };
    BidShare.prototype.toJSONField = function () {
        return {
            receipt: this.receipt, share: this.share.toString(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    BidShare.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    BidShare.fromJSONField = function (field) { return BidShare.reified().new({ receipt: (0, reified_1.decodeFromJSONField)("address", field.receipt), share: (0, reified_1.decodeFromJSONField)("u64", field.share), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    BidShare.fromJSON = function (json) {
        if (json.$typeName !== BidShare.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BidShare.fromJSONField(json);
    };
    BidShare.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBidShare(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a BidShare object"));
    } return BidShare.fromFieldsWithTypes(content); };
    BidShare.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching BidShare object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidShare(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a BidShare object"));
                        }
                        return [2 /*return*/, BidShare.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    BidShare.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::BidShare";
    BidShare.$numTypeParams = 0;
    return BidShare;
}());
exports.BidShare = BidShare;
/* ============================== BidVault =============================== */
function isBidVault(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::BidVault"; }
var BidVault = /** @class */ (function () {
    function BidVault(typeArgs, fields) {
        this.$typeName = BidVault.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([BidVault.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.depositToken = fields.depositToken;
        ;
        this.bidToken = fields.bidToken;
        ;
        this.incentiveToken = fields.incentiveToken;
        ;
        this.index = fields.index;
        ;
        this.shareSupply = fields.shareSupply;
        ;
        this.metadata = fields.metadata;
        ;
        this.u64Padding = fields.u64Padding;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    BidVault.reified = function () {
        var _this = this;
        return { typeName: BidVault.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([BidVault.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return BidVault.fromFields(fields); }, fromFieldsWithTypes: function (item) { return BidVault.fromFieldsWithTypes(item); }, fromBcs: function (data) { return BidVault.fromBcs(data); }, bcs: BidVault.bcs, fromJSONField: function (field) { return BidVault.fromJSONField(field); }, fromJSON: function (json) { return BidVault.fromJSON(json); }, fromSuiParsedData: function (content) { return BidVault.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, BidVault.fetch(client, id)];
            }); }); }, new: function (fields) { return new BidVault([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(BidVault, "r", {
        get: function () { return BidVault.reified(); },
        enumerable: false,
        configurable: true
    });
    BidVault.phantom = function () { return (0, reified_1.phantom)(BidVault.reified()); };
    Object.defineProperty(BidVault, "p", {
        get: function () { return BidVault.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BidVault, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("BidVault", {
                id: structs_4.UID.bcs, deposit_token: structs_3.TypeName.bcs, bid_token: structs_3.TypeName.bcs, incentive_token: structs_1.Option.bcs(structs_3.TypeName.bcs), index: bcs_1.bcs.u64(), share_supply: bcs_1.bcs.u64(), metadata: structs_2.String.bcs, u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.u8())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    BidVault.fromFields = function (fields) { return BidVault.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id), depositToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.deposit_token), bidToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.bid_token), incentiveToken: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_3.TypeName.reified()), fields.incentive_token), index: (0, reified_1.decodeFromFields)("u64", fields.index), shareSupply: (0, reified_1.decodeFromFields)("u64", fields.share_supply), metadata: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.metadata), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.bcs_padding) }); };
    BidVault.fromFieldsWithTypes = function (item) {
        if (!isBidVault(item.type)) {
            throw new Error("not a BidVault type");
        }
        return BidVault.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id), depositToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.deposit_token), bidToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.bid_token), incentiveToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_3.TypeName.reified()), item.fields.incentive_token), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), shareSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.share_supply), metadata: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.metadata), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.bcs_padding) });
    };
    BidVault.fromBcs = function (data) { return BidVault.fromFields(BidVault.bcs.parse(data)); };
    BidVault.prototype.toJSONField = function () {
        return {
            id: this.id, depositToken: this.depositToken.toJSONField(), bidToken: this.bidToken.toJSONField(), incentiveToken: (0, reified_1.fieldToJSON)("0x1::option::Option<0x1::type_name::TypeName>", this.incentiveToken), index: this.index.toString(), shareSupply: this.shareSupply.toString(), metadata: this.metadata, u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding), bcsPadding: (0, reified_1.fieldToJSON)("vector<u8>", this.bcsPadding),
        };
    };
    BidVault.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    BidVault.fromJSONField = function (field) { return BidVault.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id), depositToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.depositToken), bidToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.bidToken), incentiveToken: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_3.TypeName.reified()), field.incentiveToken), index: (0, reified_1.decodeFromJSONField)("u64", field.index), shareSupply: (0, reified_1.decodeFromJSONField)("u64", field.shareSupply), metadata: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.metadata), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.bcsPadding) }); };
    BidVault.fromJSON = function (json) {
        if (json.$typeName !== BidVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BidVault.fromJSONField(json);
    };
    BidVault.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBidVault(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a BidVault object"));
    } return BidVault.fromFieldsWithTypes(content); };
    BidVault.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching BidVault object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidVault(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a BidVault object"));
                        }
                        return [2 /*return*/, BidVault.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    BidVault.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::BidVault";
    BidVault.$numTypeParams = 0;
    return BidVault;
}());
exports.BidVault = BidVault;
/* ============================== Claim =============================== */
function isClaim(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Claim"; }
var Claim = /** @class */ (function () {
    function Claim(typeArgs, fields) {
        this.$typeName = Claim.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Claim.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
    }
    Claim.reified = function () {
        var _this = this;
        return { typeName: Claim.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Claim.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Claim.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Claim.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Claim.fromBcs(data); }, bcs: Claim.bcs, fromJSONField: function (field) { return Claim.fromJSONField(field); }, fromJSON: function (json) { return Claim.fromJSON(json); }, fromSuiParsedData: function (content) { return Claim.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Claim.fetch(client, id)];
            }); }); }, new: function (fields) { return new Claim([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Claim, "r", {
        get: function () { return Claim.reified(); },
        enumerable: false,
        configurable: true
    });
    Claim.phantom = function () { return (0, reified_1.phantom)(Claim.reified()); };
    Object.defineProperty(Claim, "p", {
        get: function () { return Claim.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Claim, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Claim", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Claim.fromFields = function (fields) { return Claim.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); };
    Claim.fromFieldsWithTypes = function (item) {
        if (!isClaim(item.type)) {
            throw new Error("not a Claim type");
        }
        return Claim.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    };
    Claim.fromBcs = function (data) { return Claim.fromFields(Claim.bcs.parse(data)); };
    Claim.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), amount: this.amount.toString(),
        };
    };
    Claim.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Claim.fromJSONField = function (field) { return Claim.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); };
    Claim.fromJSON = function (json) {
        if (json.$typeName !== Claim.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Claim.fromJSONField(json);
    };
    Claim.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isClaim(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Claim object"));
    } return Claim.fromFieldsWithTypes(content); };
    Claim.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Claim object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isClaim(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Claim object"));
                        }
                        return [2 /*return*/, Claim.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Claim.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Claim";
    Claim.$numTypeParams = 0;
    return Claim;
}());
exports.Claim = Claim;
/* ============================== Compound =============================== */
function isCompound(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Compound"; }
var Compound = /** @class */ (function () {
    function Compound(typeArgs, fields) {
        this.$typeName = Compound.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Compound.$typeName], __read(typeArgs), false));
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
        this.feeShareAmount = fields.feeShareAmount;
        ;
        this.sharedFeePool = fields.sharedFeePool;
    }
    Compound.reified = function () {
        var _this = this;
        return { typeName: Compound.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Compound.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Compound.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Compound.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Compound.fromBcs(data); }, bcs: Compound.bcs, fromJSONField: function (field) { return Compound.fromJSONField(field); }, fromJSON: function (json) { return Compound.fromJSON(json); }, fromSuiParsedData: function (content) { return Compound.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Compound.fetch(client, id)];
            }); }); }, new: function (fields) { return new Compound([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Compound, "r", {
        get: function () { return Compound.reified(); },
        enumerable: false,
        configurable: true
    });
    Compound.phantom = function () { return (0, reified_1.phantom)(Compound.reified()); };
    Object.defineProperty(Compound, "p", {
        get: function () { return Compound.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Compound, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Compound", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64(), fee_amount: bcs_1.bcs.u64(), fee_share_amount: bcs_1.bcs.u64(), shared_fee_pool: structs_1.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u8()))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Compound.fromFields = function (fields) { return Compound.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount), feeAmount: (0, reified_1.decodeFromFields)("u64", fields.fee_amount), feeShareAmount: (0, reified_1.decodeFromFields)("u64", fields.fee_share_amount), sharedFeePool: (0, reified_1.decodeFromFields)(structs_1.Option.reified(reified.vector("u8")), fields.shared_fee_pool) }); };
    Compound.fromFieldsWithTypes = function (item) {
        if (!isCompound(item.type)) {
            throw new Error("not a Compound type");
        }
        return Compound.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), feeAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee_amount), feeShareAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee_share_amount), sharedFeePool: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(reified.vector("u8")), item.fields.shared_fee_pool) });
    };
    Compound.fromBcs = function (data) { return Compound.fromFields(Compound.bcs.parse(data)); };
    Compound.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), amount: this.amount.toString(), feeAmount: this.feeAmount.toString(), feeShareAmount: this.feeShareAmount.toString(), sharedFeePool: (0, reified_1.fieldToJSON)("0x1::option::Option<vector<u8>>", this.sharedFeePool),
        };
    };
    Compound.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Compound.fromJSONField = function (field) { return Compound.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), feeAmount: (0, reified_1.decodeFromJSONField)("u64", field.feeAmount), feeShareAmount: (0, reified_1.decodeFromJSONField)("u64", field.feeShareAmount), sharedFeePool: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(reified.vector("u8")), field.sharedFeePool) }); };
    Compound.fromJSON = function (json) {
        if (json.$typeName !== Compound.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Compound.fromJSONField(json);
    };
    Compound.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCompound(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Compound object"));
    } return Compound.fromFieldsWithTypes(content); };
    Compound.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Compound object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCompound(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Compound object"));
                        }
                        return [2 /*return*/, Compound.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Compound.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Compound";
    Compound.$numTypeParams = 0;
    return Compound;
}());
exports.Compound = Compound;
/* ============================== Delivery =============================== */
function isDelivery(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Delivery"; }
var Delivery = /** @class */ (function () {
    function Delivery(typeArgs, fields) {
        this.$typeName = Delivery.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Delivery.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.premiumToken = fields.premiumToken;
        ;
        this.incentiveToken = fields.incentiveToken;
        ;
        this.premium = fields.premium;
        ;
        this.incentive = fields.incentive;
    }
    Delivery.reified = function () {
        var _this = this;
        return { typeName: Delivery.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Delivery.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Delivery.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Delivery.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Delivery.fromBcs(data); }, bcs: Delivery.bcs, fromJSONField: function (field) { return Delivery.fromJSONField(field); }, fromJSON: function (json) { return Delivery.fromJSON(json); }, fromSuiParsedData: function (content) { return Delivery.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Delivery.fetch(client, id)];
            }); }); }, new: function (fields) { return new Delivery([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Delivery, "r", {
        get: function () { return Delivery.reified(); },
        enumerable: false,
        configurable: true
    });
    Delivery.phantom = function () { return (0, reified_1.phantom)(Delivery.reified()); };
    Object.defineProperty(Delivery, "p", {
        get: function () { return Delivery.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Delivery, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Delivery", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), premium_token: structs_3.TypeName.bcs, incentive_token: structs_3.TypeName.bcs, premium: bcs_1.bcs.u64(), incentive: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Delivery.fromFields = function (fields) { return Delivery.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), premiumToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.premium_token), incentiveToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.incentive_token), premium: (0, reified_1.decodeFromFields)("u64", fields.premium), incentive: (0, reified_1.decodeFromFields)("u64", fields.incentive) }); };
    Delivery.fromFieldsWithTypes = function (item) {
        if (!isDelivery(item.type)) {
            throw new Error("not a Delivery type");
        }
        return Delivery.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), premiumToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.premium_token), incentiveToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.incentive_token), premium: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.premium), incentive: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive) });
    };
    Delivery.fromBcs = function (data) { return Delivery.fromFields(Delivery.bcs.parse(data)); };
    Delivery.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), premiumToken: this.premiumToken.toJSONField(), incentiveToken: this.incentiveToken.toJSONField(), premium: this.premium.toString(), incentive: this.incentive.toString(),
        };
    };
    Delivery.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Delivery.fromJSONField = function (field) { return Delivery.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), premiumToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.premiumToken), incentiveToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.incentiveToken), premium: (0, reified_1.decodeFromJSONField)("u64", field.premium), incentive: (0, reified_1.decodeFromJSONField)("u64", field.incentive) }); };
    Delivery.fromJSON = function (json) {
        if (json.$typeName !== Delivery.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Delivery.fromJSONField(json);
    };
    Delivery.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDelivery(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Delivery object"));
    } return Delivery.fromFieldsWithTypes(content); };
    Delivery.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Delivery object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDelivery(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Delivery object"));
                        }
                        return [2 /*return*/, Delivery.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Delivery.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Delivery";
    Delivery.$numTypeParams = 0;
    return Delivery;
}());
exports.Delivery = Delivery;
/* ============================== Deposit =============================== */
function isDeposit(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Deposit"; }
var Deposit = /** @class */ (function () {
    function Deposit(typeArgs, fields) {
        this.$typeName = Deposit.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Deposit.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
    }
    Deposit.reified = function () {
        var _this = this;
        return { typeName: Deposit.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Deposit.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Deposit.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Deposit.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Deposit.fromBcs(data); }, bcs: Deposit.bcs, fromJSONField: function (field) { return Deposit.fromJSONField(field); }, fromJSON: function (json) { return Deposit.fromJSON(json); }, fromSuiParsedData: function (content) { return Deposit.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Deposit.fetch(client, id)];
            }); }); }, new: function (fields) { return new Deposit([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Deposit, "r", {
        get: function () { return Deposit.reified(); },
        enumerable: false,
        configurable: true
    });
    Deposit.phantom = function () { return (0, reified_1.phantom)(Deposit.reified()); };
    Object.defineProperty(Deposit, "p", {
        get: function () { return Deposit.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Deposit, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Deposit", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Deposit.fromFields = function (fields) { return Deposit.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); };
    Deposit.fromFieldsWithTypes = function (item) {
        if (!isDeposit(item.type)) {
            throw new Error("not a Deposit type");
        }
        return Deposit.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    };
    Deposit.fromBcs = function (data) { return Deposit.fromFields(Deposit.bcs.parse(data)); };
    Deposit.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), amount: this.amount.toString(),
        };
    };
    Deposit.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Deposit.fromJSONField = function (field) { return Deposit.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); };
    Deposit.fromJSON = function (json) {
        if (json.$typeName !== Deposit.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Deposit.fromJSONField(json);
    };
    Deposit.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDeposit(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Deposit object"));
    } return Deposit.fromFieldsWithTypes(content); };
    Deposit.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Deposit object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDeposit(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Deposit object"));
                        }
                        return [2 /*return*/, Deposit.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Deposit.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Deposit";
    Deposit.$numTypeParams = 0;
    return Deposit;
}());
exports.Deposit = Deposit;
/* ============================== DepositShare =============================== */
function isDepositShare(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::DepositShare"; }
var DepositShare = /** @class */ (function () {
    function DepositShare(typeArgs, fields) {
        this.$typeName = DepositShare.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DepositShare.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.receipt = fields.receipt;
        ;
        this.activeShare = fields.activeShare;
        ;
        this.deactivatingShare = fields.deactivatingShare;
        ;
        this.inactiveShare = fields.inactiveShare;
        ;
        this.warmupShare = fields.warmupShare;
        ;
        this.premiumShare = fields.premiumShare;
        ;
        this.incentiveShare = fields.incentiveShare;
        ;
        this.u64Padding = fields.u64Padding;
    }
    DepositShare.reified = function () {
        var _this = this;
        return { typeName: DepositShare.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DepositShare.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return DepositShare.fromFields(fields); }, fromFieldsWithTypes: function (item) { return DepositShare.fromFieldsWithTypes(item); }, fromBcs: function (data) { return DepositShare.fromBcs(data); }, bcs: DepositShare.bcs, fromJSONField: function (field) { return DepositShare.fromJSONField(field); }, fromJSON: function (json) { return DepositShare.fromJSON(json); }, fromSuiParsedData: function (content) { return DepositShare.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DepositShare.fetch(client, id)];
            }); }); }, new: function (fields) { return new DepositShare([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DepositShare, "r", {
        get: function () { return DepositShare.reified(); },
        enumerable: false,
        configurable: true
    });
    DepositShare.phantom = function () { return (0, reified_1.phantom)(DepositShare.reified()); };
    Object.defineProperty(DepositShare, "p", {
        get: function () { return DepositShare.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DepositShare, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DepositShare", {
                receipt: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), active_share: bcs_1.bcs.u64(), deactivating_share: bcs_1.bcs.u64(), inactive_share: bcs_1.bcs.u64(), warmup_share: bcs_1.bcs.u64(), premium_share: bcs_1.bcs.u64(), incentive_share: bcs_1.bcs.u64(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DepositShare.fromFields = function (fields) { return DepositShare.reified().new({ receipt: (0, reified_1.decodeFromFields)("address", fields.receipt), activeShare: (0, reified_1.decodeFromFields)("u64", fields.active_share), deactivatingShare: (0, reified_1.decodeFromFields)("u64", fields.deactivating_share), inactiveShare: (0, reified_1.decodeFromFields)("u64", fields.inactive_share), warmupShare: (0, reified_1.decodeFromFields)("u64", fields.warmup_share), premiumShare: (0, reified_1.decodeFromFields)("u64", fields.premium_share), incentiveShare: (0, reified_1.decodeFromFields)("u64", fields.incentive_share), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    DepositShare.fromFieldsWithTypes = function (item) {
        if (!isDepositShare(item.type)) {
            throw new Error("not a DepositShare type");
        }
        return DepositShare.reified().new({ receipt: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.receipt), activeShare: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.active_share), deactivatingShare: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deactivating_share), inactiveShare: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.inactive_share), warmupShare: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.warmup_share), premiumShare: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.premium_share), incentiveShare: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_share), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    DepositShare.fromBcs = function (data) { return DepositShare.fromFields(DepositShare.bcs.parse(data)); };
    DepositShare.prototype.toJSONField = function () {
        return {
            receipt: this.receipt, activeShare: this.activeShare.toString(), deactivatingShare: this.deactivatingShare.toString(), inactiveShare: this.inactiveShare.toString(), warmupShare: this.warmupShare.toString(), premiumShare: this.premiumShare.toString(), incentiveShare: this.incentiveShare.toString(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    DepositShare.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DepositShare.fromJSONField = function (field) { return DepositShare.reified().new({ receipt: (0, reified_1.decodeFromJSONField)("address", field.receipt), activeShare: (0, reified_1.decodeFromJSONField)("u64", field.activeShare), deactivatingShare: (0, reified_1.decodeFromJSONField)("u64", field.deactivatingShare), inactiveShare: (0, reified_1.decodeFromJSONField)("u64", field.inactiveShare), warmupShare: (0, reified_1.decodeFromJSONField)("u64", field.warmupShare), premiumShare: (0, reified_1.decodeFromJSONField)("u64", field.premiumShare), incentiveShare: (0, reified_1.decodeFromJSONField)("u64", field.incentiveShare), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    DepositShare.fromJSON = function (json) {
        if (json.$typeName !== DepositShare.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DepositShare.fromJSONField(json);
    };
    DepositShare.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDepositShare(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DepositShare object"));
    } return DepositShare.fromFieldsWithTypes(content); };
    DepositShare.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DepositShare object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDepositShare(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DepositShare object"));
                        }
                        return [2 /*return*/, DepositShare.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DepositShare.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::DepositShare";
    DepositShare.$numTypeParams = 0;
    return DepositShare;
}());
exports.DepositShare = DepositShare;
/* ============================== DepositVault =============================== */
function isDepositVault(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::DepositVault"; }
var DepositVault = /** @class */ (function () {
    function DepositVault(typeArgs, fields) {
        this.$typeName = DepositVault.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DepositVault.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.depositToken = fields.depositToken;
        ;
        this.bidToken = fields.bidToken;
        ;
        this.incentiveToken = fields.incentiveToken;
        ;
        this.index = fields.index;
        ;
        this.feeBp = fields.feeBp;
        ;
        this.feeShareBp = fields.feeShareBp;
        ;
        this.sharedFeePool = fields.sharedFeePool;
        ;
        this.activeShareSupply = fields.activeShareSupply;
        ;
        this.deactivatingShareSupply = fields.deactivatingShareSupply;
        ;
        this.inactiveShareSupply = fields.inactiveShareSupply;
        ;
        this.warmupShareSupply = fields.warmupShareSupply;
        ;
        this.premiumShareSupply = fields.premiumShareSupply;
        ;
        this.incentiveShareSupply = fields.incentiveShareSupply;
        ;
        this.hasNext = fields.hasNext;
        ;
        this.metadata = fields.metadata;
        ;
        this.u64Padding = fields.u64Padding;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    DepositVault.reified = function () {
        var _this = this;
        return { typeName: DepositVault.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DepositVault.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return DepositVault.fromFields(fields); }, fromFieldsWithTypes: function (item) { return DepositVault.fromFieldsWithTypes(item); }, fromBcs: function (data) { return DepositVault.fromBcs(data); }, bcs: DepositVault.bcs, fromJSONField: function (field) { return DepositVault.fromJSONField(field); }, fromJSON: function (json) { return DepositVault.fromJSON(json); }, fromSuiParsedData: function (content) { return DepositVault.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DepositVault.fetch(client, id)];
            }); }); }, new: function (fields) { return new DepositVault([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DepositVault, "r", {
        get: function () { return DepositVault.reified(); },
        enumerable: false,
        configurable: true
    });
    DepositVault.phantom = function () { return (0, reified_1.phantom)(DepositVault.reified()); };
    Object.defineProperty(DepositVault, "p", {
        get: function () { return DepositVault.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DepositVault, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DepositVault", {
                id: structs_4.UID.bcs, deposit_token: structs_3.TypeName.bcs, bid_token: structs_3.TypeName.bcs, incentive_token: structs_1.Option.bcs(structs_3.TypeName.bcs), index: bcs_1.bcs.u64(), fee_bp: bcs_1.bcs.u64(), fee_share_bp: bcs_1.bcs.u64(), shared_fee_pool: structs_1.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u8())), active_share_supply: bcs_1.bcs.u64(), deactivating_share_supply: bcs_1.bcs.u64(), inactive_share_supply: bcs_1.bcs.u64(), warmup_share_supply: bcs_1.bcs.u64(), premium_share_supply: bcs_1.bcs.u64(), incentive_share_supply: bcs_1.bcs.u64(), has_next: bcs_1.bcs.bool(), metadata: structs_2.String.bcs, u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.u8())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DepositVault.fromFields = function (fields) { return DepositVault.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id), depositToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.deposit_token), bidToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.bid_token), incentiveToken: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_3.TypeName.reified()), fields.incentive_token), index: (0, reified_1.decodeFromFields)("u64", fields.index), feeBp: (0, reified_1.decodeFromFields)("u64", fields.fee_bp), feeShareBp: (0, reified_1.decodeFromFields)("u64", fields.fee_share_bp), sharedFeePool: (0, reified_1.decodeFromFields)(structs_1.Option.reified(reified.vector("u8")), fields.shared_fee_pool), activeShareSupply: (0, reified_1.decodeFromFields)("u64", fields.active_share_supply), deactivatingShareSupply: (0, reified_1.decodeFromFields)("u64", fields.deactivating_share_supply), inactiveShareSupply: (0, reified_1.decodeFromFields)("u64", fields.inactive_share_supply), warmupShareSupply: (0, reified_1.decodeFromFields)("u64", fields.warmup_share_supply), premiumShareSupply: (0, reified_1.decodeFromFields)("u64", fields.premium_share_supply), incentiveShareSupply: (0, reified_1.decodeFromFields)("u64", fields.incentive_share_supply), hasNext: (0, reified_1.decodeFromFields)("bool", fields.has_next), metadata: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.metadata), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.bcs_padding) }); };
    DepositVault.fromFieldsWithTypes = function (item) {
        if (!isDepositVault(item.type)) {
            throw new Error("not a DepositVault type");
        }
        return DepositVault.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id), depositToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.deposit_token), bidToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.bid_token), incentiveToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_3.TypeName.reified()), item.fields.incentive_token), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), feeBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee_bp), feeShareBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee_share_bp), sharedFeePool: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(reified.vector("u8")), item.fields.shared_fee_pool), activeShareSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.active_share_supply), deactivatingShareSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deactivating_share_supply), inactiveShareSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.inactive_share_supply), warmupShareSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.warmup_share_supply), premiumShareSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.premium_share_supply), incentiveShareSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_share_supply), hasNext: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.has_next), metadata: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.metadata), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.bcs_padding) });
    };
    DepositVault.fromBcs = function (data) { return DepositVault.fromFields(DepositVault.bcs.parse(data)); };
    DepositVault.prototype.toJSONField = function () {
        return {
            id: this.id, depositToken: this.depositToken.toJSONField(), bidToken: this.bidToken.toJSONField(), incentiveToken: (0, reified_1.fieldToJSON)("0x1::option::Option<0x1::type_name::TypeName>", this.incentiveToken), index: this.index.toString(), feeBp: this.feeBp.toString(), feeShareBp: this.feeShareBp.toString(), sharedFeePool: (0, reified_1.fieldToJSON)("0x1::option::Option<vector<u8>>", this.sharedFeePool), activeShareSupply: this.activeShareSupply.toString(), deactivatingShareSupply: this.deactivatingShareSupply.toString(), inactiveShareSupply: this.inactiveShareSupply.toString(), warmupShareSupply: this.warmupShareSupply.toString(), premiumShareSupply: this.premiumShareSupply.toString(), incentiveShareSupply: this.incentiveShareSupply.toString(), hasNext: this.hasNext, metadata: this.metadata, u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding), bcsPadding: (0, reified_1.fieldToJSON)("vector<u8>", this.bcsPadding),
        };
    };
    DepositVault.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DepositVault.fromJSONField = function (field) { return DepositVault.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id), depositToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.depositToken), bidToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.bidToken), incentiveToken: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_3.TypeName.reified()), field.incentiveToken), index: (0, reified_1.decodeFromJSONField)("u64", field.index), feeBp: (0, reified_1.decodeFromJSONField)("u64", field.feeBp), feeShareBp: (0, reified_1.decodeFromJSONField)("u64", field.feeShareBp), sharedFeePool: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(reified.vector("u8")), field.sharedFeePool), activeShareSupply: (0, reified_1.decodeFromJSONField)("u64", field.activeShareSupply), deactivatingShareSupply: (0, reified_1.decodeFromJSONField)("u64", field.deactivatingShareSupply), inactiveShareSupply: (0, reified_1.decodeFromJSONField)("u64", field.inactiveShareSupply), warmupShareSupply: (0, reified_1.decodeFromJSONField)("u64", field.warmupShareSupply), premiumShareSupply: (0, reified_1.decodeFromJSONField)("u64", field.premiumShareSupply), incentiveShareSupply: (0, reified_1.decodeFromJSONField)("u64", field.incentiveShareSupply), hasNext: (0, reified_1.decodeFromJSONField)("bool", field.hasNext), metadata: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.metadata), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.bcsPadding) }); };
    DepositVault.fromJSON = function (json) {
        if (json.$typeName !== DepositVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DepositVault.fromJSONField(json);
    };
    DepositVault.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDepositVault(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DepositVault object"));
    } return DepositVault.fromFieldsWithTypes(content); };
    DepositVault.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DepositVault object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDepositVault(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DepositVault object"));
                        }
                        return [2 /*return*/, DepositVault.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DepositVault.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::DepositVault";
    DepositVault.$numTypeParams = 0;
    return DepositVault;
}());
exports.DepositVault = DepositVault;
/* ============================== Exercise =============================== */
function isExercise(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Exercise"; }
var Exercise = /** @class */ (function () {
    function Exercise(typeArgs, fields) {
        this.$typeName = Exercise.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Exercise.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.depositToken = fields.depositToken;
        ;
        this.incentiveToken = fields.incentiveToken;
        ;
        this.amount = fields.amount;
    }
    Exercise.reified = function () {
        var _this = this;
        return { typeName: Exercise.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Exercise.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Exercise.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Exercise.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Exercise.fromBcs(data); }, bcs: Exercise.bcs, fromJSONField: function (field) { return Exercise.fromJSONField(field); }, fromJSON: function (json) { return Exercise.fromJSON(json); }, fromSuiParsedData: function (content) { return Exercise.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Exercise.fetch(client, id)];
            }); }); }, new: function (fields) { return new Exercise([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Exercise, "r", {
        get: function () { return Exercise.reified(); },
        enumerable: false,
        configurable: true
    });
    Exercise.phantom = function () { return (0, reified_1.phantom)(Exercise.reified()); };
    Object.defineProperty(Exercise, "p", {
        get: function () { return Exercise.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Exercise, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Exercise", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), deposit_token: structs_3.TypeName.bcs, incentive_token: structs_1.Option.bcs(structs_3.TypeName.bcs), amount: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Exercise.fromFields = function (fields) { return Exercise.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), depositToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.deposit_token), incentiveToken: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_3.TypeName.reified()), fields.incentive_token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); };
    Exercise.fromFieldsWithTypes = function (item) {
        if (!isExercise(item.type)) {
            throw new Error("not a Exercise type");
        }
        return Exercise.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), depositToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.deposit_token), incentiveToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_3.TypeName.reified()), item.fields.incentive_token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    };
    Exercise.fromBcs = function (data) { return Exercise.fromFields(Exercise.bcs.parse(data)); };
    Exercise.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), depositToken: this.depositToken.toJSONField(), incentiveToken: (0, reified_1.fieldToJSON)("0x1::option::Option<0x1::type_name::TypeName>", this.incentiveToken), amount: this.amount.toString(),
        };
    };
    Exercise.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Exercise.fromJSONField = function (field) { return Exercise.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), depositToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.depositToken), incentiveToken: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_3.TypeName.reified()), field.incentiveToken), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); };
    Exercise.fromJSON = function (json) {
        if (json.$typeName !== Exercise.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Exercise.fromJSONField(json);
    };
    Exercise.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isExercise(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Exercise object"));
    } return Exercise.fromFieldsWithTypes(content); };
    Exercise.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Exercise object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isExercise(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Exercise object"));
                        }
                        return [2 /*return*/, Exercise.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Exercise.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Exercise";
    Exercise.$numTypeParams = 0;
    return Exercise;
}());
exports.Exercise = Exercise;
/* ============================== Harvest =============================== */
function isHarvest(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Harvest"; }
var Harvest = /** @class */ (function () {
    function Harvest(typeArgs, fields) {
        this.$typeName = Harvest.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Harvest.$typeName], __read(typeArgs), false));
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
        this.feeShareAmount = fields.feeShareAmount;
        ;
        this.sharedFeePool = fields.sharedFeePool;
    }
    Harvest.reified = function () {
        var _this = this;
        return { typeName: Harvest.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Harvest.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Harvest.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Harvest.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Harvest.fromBcs(data); }, bcs: Harvest.bcs, fromJSONField: function (field) { return Harvest.fromJSONField(field); }, fromJSON: function (json) { return Harvest.fromJSON(json); }, fromSuiParsedData: function (content) { return Harvest.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Harvest.fetch(client, id)];
            }); }); }, new: function (fields) { return new Harvest([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Harvest, "r", {
        get: function () { return Harvest.reified(); },
        enumerable: false,
        configurable: true
    });
    Harvest.phantom = function () { return (0, reified_1.phantom)(Harvest.reified()); };
    Object.defineProperty(Harvest, "p", {
        get: function () { return Harvest.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Harvest, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Harvest", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64(), fee_amount: bcs_1.bcs.u64(), fee_share_amount: bcs_1.bcs.u64(), shared_fee_pool: structs_1.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u8()))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Harvest.fromFields = function (fields) { return Harvest.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount), feeAmount: (0, reified_1.decodeFromFields)("u64", fields.fee_amount), feeShareAmount: (0, reified_1.decodeFromFields)("u64", fields.fee_share_amount), sharedFeePool: (0, reified_1.decodeFromFields)(structs_1.Option.reified(reified.vector("u8")), fields.shared_fee_pool) }); };
    Harvest.fromFieldsWithTypes = function (item) {
        if (!isHarvest(item.type)) {
            throw new Error("not a Harvest type");
        }
        return Harvest.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), feeAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee_amount), feeShareAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee_share_amount), sharedFeePool: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(reified.vector("u8")), item.fields.shared_fee_pool) });
    };
    Harvest.fromBcs = function (data) { return Harvest.fromFields(Harvest.bcs.parse(data)); };
    Harvest.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), amount: this.amount.toString(), feeAmount: this.feeAmount.toString(), feeShareAmount: this.feeShareAmount.toString(), sharedFeePool: (0, reified_1.fieldToJSON)("0x1::option::Option<vector<u8>>", this.sharedFeePool),
        };
    };
    Harvest.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Harvest.fromJSONField = function (field) { return Harvest.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), feeAmount: (0, reified_1.decodeFromJSONField)("u64", field.feeAmount), feeShareAmount: (0, reified_1.decodeFromJSONField)("u64", field.feeShareAmount), sharedFeePool: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(reified.vector("u8")), field.sharedFeePool) }); };
    Harvest.fromJSON = function (json) {
        if (json.$typeName !== Harvest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Harvest.fromJSONField(json);
    };
    Harvest.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHarvest(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Harvest object"));
    } return Harvest.fromFieldsWithTypes(content); };
    Harvest.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Harvest object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHarvest(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Harvest object"));
                        }
                        return [2 /*return*/, Harvest.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Harvest.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Harvest";
    Harvest.$numTypeParams = 0;
    return Harvest;
}());
exports.Harvest = Harvest;
/* ============================== IncentiviseBidder =============================== */
function isIncentiviseBidder(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::IncentiviseBidder"; }
var IncentiviseBidder = /** @class */ (function () {
    function IncentiviseBidder(typeArgs, fields) {
        this.$typeName = IncentiviseBidder.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([IncentiviseBidder.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
    }
    IncentiviseBidder.reified = function () {
        var _this = this;
        return { typeName: IncentiviseBidder.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([IncentiviseBidder.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return IncentiviseBidder.fromFields(fields); }, fromFieldsWithTypes: function (item) { return IncentiviseBidder.fromFieldsWithTypes(item); }, fromBcs: function (data) { return IncentiviseBidder.fromBcs(data); }, bcs: IncentiviseBidder.bcs, fromJSONField: function (field) { return IncentiviseBidder.fromJSONField(field); }, fromJSON: function (json) { return IncentiviseBidder.fromJSON(json); }, fromSuiParsedData: function (content) { return IncentiviseBidder.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, IncentiviseBidder.fetch(client, id)];
            }); }); }, new: function (fields) { return new IncentiviseBidder([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(IncentiviseBidder, "r", {
        get: function () { return IncentiviseBidder.reified(); },
        enumerable: false,
        configurable: true
    });
    IncentiviseBidder.phantom = function () { return (0, reified_1.phantom)(IncentiviseBidder.reified()); };
    Object.defineProperty(IncentiviseBidder, "p", {
        get: function () { return IncentiviseBidder.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IncentiviseBidder, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("IncentiviseBidder", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    IncentiviseBidder.fromFields = function (fields) { return IncentiviseBidder.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); };
    IncentiviseBidder.fromFieldsWithTypes = function (item) {
        if (!isIncentiviseBidder(item.type)) {
            throw new Error("not a IncentiviseBidder type");
        }
        return IncentiviseBidder.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    };
    IncentiviseBidder.fromBcs = function (data) { return IncentiviseBidder.fromFields(IncentiviseBidder.bcs.parse(data)); };
    IncentiviseBidder.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), amount: this.amount.toString(),
        };
    };
    IncentiviseBidder.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    IncentiviseBidder.fromJSONField = function (field) { return IncentiviseBidder.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); };
    IncentiviseBidder.fromJSON = function (json) {
        if (json.$typeName !== IncentiviseBidder.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return IncentiviseBidder.fromJSONField(json);
    };
    IncentiviseBidder.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isIncentiviseBidder(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a IncentiviseBidder object"));
    } return IncentiviseBidder.fromFieldsWithTypes(content); };
    IncentiviseBidder.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching IncentiviseBidder object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isIncentiviseBidder(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a IncentiviseBidder object"));
                        }
                        return [2 /*return*/, IncentiviseBidder.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    IncentiviseBidder.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::IncentiviseBidder";
    IncentiviseBidder.$numTypeParams = 0;
    return IncentiviseBidder;
}());
exports.IncentiviseBidder = IncentiviseBidder;
/* ============================== NewBidVault =============================== */
function isNewBidVault(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewBidVault"; }
var NewBidVault = /** @class */ (function () {
    function NewBidVault(typeArgs, fields) {
        this.$typeName = NewBidVault.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NewBidVault.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.bidToken = fields.bidToken;
    }
    NewBidVault.reified = function () {
        var _this = this;
        return { typeName: NewBidVault.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([NewBidVault.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return NewBidVault.fromFields(fields); }, fromFieldsWithTypes: function (item) { return NewBidVault.fromFieldsWithTypes(item); }, fromBcs: function (data) { return NewBidVault.fromBcs(data); }, bcs: NewBidVault.bcs, fromJSONField: function (field) { return NewBidVault.fromJSONField(field); }, fromJSON: function (json) { return NewBidVault.fromJSON(json); }, fromSuiParsedData: function (content) { return NewBidVault.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, NewBidVault.fetch(client, id)];
            }); }); }, new: function (fields) { return new NewBidVault([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(NewBidVault, "r", {
        get: function () { return NewBidVault.reified(); },
        enumerable: false,
        configurable: true
    });
    NewBidVault.phantom = function () { return (0, reified_1.phantom)(NewBidVault.reified()); };
    Object.defineProperty(NewBidVault, "p", {
        get: function () { return NewBidVault.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewBidVault, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("NewBidVault", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), bid_token: structs_3.TypeName.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    NewBidVault.fromFields = function (fields) { return NewBidVault.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), bidToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.bid_token) }); };
    NewBidVault.fromFieldsWithTypes = function (item) {
        if (!isNewBidVault(item.type)) {
            throw new Error("not a NewBidVault type");
        }
        return NewBidVault.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), bidToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.bid_token) });
    };
    NewBidVault.fromBcs = function (data) { return NewBidVault.fromFields(NewBidVault.bcs.parse(data)); };
    NewBidVault.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), bidToken: this.bidToken.toJSONField(),
        };
    };
    NewBidVault.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    NewBidVault.fromJSONField = function (field) { return NewBidVault.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), bidToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.bidToken) }); };
    NewBidVault.fromJSON = function (json) {
        if (json.$typeName !== NewBidVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewBidVault.fromJSONField(json);
    };
    NewBidVault.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewBidVault(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a NewBidVault object"));
    } return NewBidVault.fromFieldsWithTypes(content); };
    NewBidVault.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching NewBidVault object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewBidVault(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a NewBidVault object"));
                        }
                        return [2 /*return*/, NewBidVault.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    NewBidVault.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewBidVault";
    NewBidVault.$numTypeParams = 0;
    return NewBidVault;
}());
exports.NewBidVault = NewBidVault;
/* ============================== NewDepositVault =============================== */
function isNewDepositVault(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewDepositVault"; }
var NewDepositVault = /** @class */ (function () {
    function NewDepositVault(typeArgs, fields) {
        this.$typeName = NewDepositVault.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NewDepositVault.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.depositToken = fields.depositToken;
        ;
        this.bidToken = fields.bidToken;
    }
    NewDepositVault.reified = function () {
        var _this = this;
        return { typeName: NewDepositVault.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([NewDepositVault.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return NewDepositVault.fromFields(fields); }, fromFieldsWithTypes: function (item) { return NewDepositVault.fromFieldsWithTypes(item); }, fromBcs: function (data) { return NewDepositVault.fromBcs(data); }, bcs: NewDepositVault.bcs, fromJSONField: function (field) { return NewDepositVault.fromJSONField(field); }, fromJSON: function (json) { return NewDepositVault.fromJSON(json); }, fromSuiParsedData: function (content) { return NewDepositVault.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, NewDepositVault.fetch(client, id)];
            }); }); }, new: function (fields) { return new NewDepositVault([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(NewDepositVault, "r", {
        get: function () { return NewDepositVault.reified(); },
        enumerable: false,
        configurable: true
    });
    NewDepositVault.phantom = function () { return (0, reified_1.phantom)(NewDepositVault.reified()); };
    Object.defineProperty(NewDepositVault, "p", {
        get: function () { return NewDepositVault.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewDepositVault, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("NewDepositVault", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), deposit_token: structs_3.TypeName.bcs, bid_token: structs_3.TypeName.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    NewDepositVault.fromFields = function (fields) { return NewDepositVault.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), depositToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.deposit_token), bidToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.bid_token) }); };
    NewDepositVault.fromFieldsWithTypes = function (item) {
        if (!isNewDepositVault(item.type)) {
            throw new Error("not a NewDepositVault type");
        }
        return NewDepositVault.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), depositToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.deposit_token), bidToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.bid_token) });
    };
    NewDepositVault.fromBcs = function (data) { return NewDepositVault.fromFields(NewDepositVault.bcs.parse(data)); };
    NewDepositVault.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), depositToken: this.depositToken.toJSONField(), bidToken: this.bidToken.toJSONField(),
        };
    };
    NewDepositVault.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    NewDepositVault.fromJSONField = function (field) { return NewDepositVault.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), depositToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.depositToken), bidToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.bidToken) }); };
    NewDepositVault.fromJSON = function (json) {
        if (json.$typeName !== NewDepositVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewDepositVault.fromJSONField(json);
    };
    NewDepositVault.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewDepositVault(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a NewDepositVault object"));
    } return NewDepositVault.fromFieldsWithTypes(content); };
    NewDepositVault.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching NewDepositVault object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewDepositVault(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a NewDepositVault object"));
                        }
                        return [2 /*return*/, NewDepositVault.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    NewDepositVault.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewDepositVault";
    NewDepositVault.$numTypeParams = 0;
    return NewDepositVault;
}());
exports.NewDepositVault = NewDepositVault;
/* ============================== NewRefundVault =============================== */
function isNewRefundVault(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewRefundVault"; }
var NewRefundVault = /** @class */ (function () {
    function NewRefundVault(typeArgs, fields) {
        this.$typeName = NewRefundVault.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NewRefundVault.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.token = fields.token;
    }
    NewRefundVault.reified = function () {
        var _this = this;
        return { typeName: NewRefundVault.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([NewRefundVault.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return NewRefundVault.fromFields(fields); }, fromFieldsWithTypes: function (item) { return NewRefundVault.fromFieldsWithTypes(item); }, fromBcs: function (data) { return NewRefundVault.fromBcs(data); }, bcs: NewRefundVault.bcs, fromJSONField: function (field) { return NewRefundVault.fromJSONField(field); }, fromJSON: function (json) { return NewRefundVault.fromJSON(json); }, fromSuiParsedData: function (content) { return NewRefundVault.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, NewRefundVault.fetch(client, id)];
            }); }); }, new: function (fields) { return new NewRefundVault([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(NewRefundVault, "r", {
        get: function () { return NewRefundVault.reified(); },
        enumerable: false,
        configurable: true
    });
    NewRefundVault.phantom = function () { return (0, reified_1.phantom)(NewRefundVault.reified()); };
    Object.defineProperty(NewRefundVault, "p", {
        get: function () { return NewRefundVault.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewRefundVault, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("NewRefundVault", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), token: structs_3.TypeName.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    NewRefundVault.fromFields = function (fields) { return NewRefundVault.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token) }); };
    NewRefundVault.fromFieldsWithTypes = function (item) {
        if (!isNewRefundVault(item.type)) {
            throw new Error("not a NewRefundVault type");
        }
        return NewRefundVault.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token) });
    };
    NewRefundVault.fromBcs = function (data) { return NewRefundVault.fromFields(NewRefundVault.bcs.parse(data)); };
    NewRefundVault.prototype.toJSONField = function () {
        return {
            signer: this.signer, token: this.token.toJSONField(),
        };
    };
    NewRefundVault.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    NewRefundVault.fromJSONField = function (field) { return NewRefundVault.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token) }); };
    NewRefundVault.fromJSON = function (json) {
        if (json.$typeName !== NewRefundVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewRefundVault.fromJSONField(json);
    };
    NewRefundVault.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewRefundVault(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a NewRefundVault object"));
    } return NewRefundVault.fromFieldsWithTypes(content); };
    NewRefundVault.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching NewRefundVault object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewRefundVault(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a NewRefundVault object"));
                        }
                        return [2 /*return*/, NewRefundVault.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    NewRefundVault.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewRefundVault";
    NewRefundVault.$numTypeParams = 0;
    return NewRefundVault;
}());
exports.NewRefundVault = NewRefundVault;
/* ============================== Recoup =============================== */
function isRecoup(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Recoup"; }
var Recoup = /** @class */ (function () {
    function Recoup(typeArgs, fields) {
        this.$typeName = Recoup.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Recoup.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.active = fields.active;
        ;
        this.deactivating = fields.deactivating;
    }
    Recoup.reified = function () {
        var _this = this;
        return { typeName: Recoup.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Recoup.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Recoup.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Recoup.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Recoup.fromBcs(data); }, bcs: Recoup.bcs, fromJSONField: function (field) { return Recoup.fromJSONField(field); }, fromJSON: function (json) { return Recoup.fromJSON(json); }, fromSuiParsedData: function (content) { return Recoup.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Recoup.fetch(client, id)];
            }); }); }, new: function (fields) { return new Recoup([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Recoup, "r", {
        get: function () { return Recoup.reified(); },
        enumerable: false,
        configurable: true
    });
    Recoup.phantom = function () { return (0, reified_1.phantom)(Recoup.reified()); };
    Object.defineProperty(Recoup, "p", {
        get: function () { return Recoup.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Recoup, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Recoup", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, active: bcs_1.bcs.u64(), deactivating: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Recoup.fromFields = function (fields) { return Recoup.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), active: (0, reified_1.decodeFromFields)("u64", fields.active), deactivating: (0, reified_1.decodeFromFields)("u64", fields.deactivating) }); };
    Recoup.fromFieldsWithTypes = function (item) {
        if (!isRecoup(item.type)) {
            throw new Error("not a Recoup type");
        }
        return Recoup.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), active: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.active), deactivating: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deactivating) });
    };
    Recoup.fromBcs = function (data) { return Recoup.fromFields(Recoup.bcs.parse(data)); };
    Recoup.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), active: this.active.toString(), deactivating: this.deactivating.toString(),
        };
    };
    Recoup.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Recoup.fromJSONField = function (field) { return Recoup.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), active: (0, reified_1.decodeFromJSONField)("u64", field.active), deactivating: (0, reified_1.decodeFromJSONField)("u64", field.deactivating) }); };
    Recoup.fromJSON = function (json) {
        if (json.$typeName !== Recoup.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Recoup.fromJSONField(json);
    };
    Recoup.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRecoup(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Recoup object"));
    } return Recoup.fromFieldsWithTypes(content); };
    Recoup.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Recoup object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRecoup(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Recoup object"));
                        }
                        return [2 /*return*/, Recoup.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Recoup.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Recoup";
    Recoup.$numTypeParams = 0;
    return Recoup;
}());
exports.Recoup = Recoup;
/* ============================== Redeem =============================== */
function isRedeem(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Redeem"; }
var Redeem = /** @class */ (function () {
    function Redeem(typeArgs, fields) {
        this.$typeName = Redeem.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Redeem.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
    }
    Redeem.reified = function () {
        var _this = this;
        return { typeName: Redeem.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Redeem.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Redeem.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Redeem.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Redeem.fromBcs(data); }, bcs: Redeem.bcs, fromJSONField: function (field) { return Redeem.fromJSONField(field); }, fromJSON: function (json) { return Redeem.fromJSON(json); }, fromSuiParsedData: function (content) { return Redeem.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Redeem.fetch(client, id)];
            }); }); }, new: function (fields) { return new Redeem([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Redeem, "r", {
        get: function () { return Redeem.reified(); },
        enumerable: false,
        configurable: true
    });
    Redeem.phantom = function () { return (0, reified_1.phantom)(Redeem.reified()); };
    Object.defineProperty(Redeem, "p", {
        get: function () { return Redeem.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Redeem, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Redeem", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Redeem.fromFields = function (fields) { return Redeem.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); };
    Redeem.fromFieldsWithTypes = function (item) {
        if (!isRedeem(item.type)) {
            throw new Error("not a Redeem type");
        }
        return Redeem.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    };
    Redeem.fromBcs = function (data) { return Redeem.fromFields(Redeem.bcs.parse(data)); };
    Redeem.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), amount: this.amount.toString(),
        };
    };
    Redeem.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Redeem.fromJSONField = function (field) { return Redeem.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); };
    Redeem.fromJSON = function (json) {
        if (json.$typeName !== Redeem.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Redeem.fromJSONField(json);
    };
    Redeem.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRedeem(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Redeem object"));
    } return Redeem.fromFieldsWithTypes(content); };
    Redeem.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Redeem object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRedeem(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Redeem object"));
                        }
                        return [2 /*return*/, Redeem.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Redeem.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Redeem";
    Redeem.$numTypeParams = 0;
    return Redeem;
}());
exports.Redeem = Redeem;
/* ============================== RefundShare =============================== */
function isRefundShare(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::RefundShare"; }
var RefundShare = /** @class */ (function () {
    function RefundShare(typeArgs, fields) {
        this.$typeName = RefundShare.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RefundShare.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        ;
        this.share = fields.share;
        ;
        this.u64Padding = fields.u64Padding;
    }
    RefundShare.reified = function () {
        var _this = this;
        return { typeName: RefundShare.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RefundShare.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RefundShare.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RefundShare.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RefundShare.fromBcs(data); }, bcs: RefundShare.bcs, fromJSONField: function (field) { return RefundShare.fromJSONField(field); }, fromJSON: function (json) { return RefundShare.fromJSON(json); }, fromSuiParsedData: function (content) { return RefundShare.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RefundShare.fetch(client, id)];
            }); }); }, new: function (fields) { return new RefundShare([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RefundShare, "r", {
        get: function () { return RefundShare.reified(); },
        enumerable: false,
        configurable: true
    });
    RefundShare.phantom = function () { return (0, reified_1.phantom)(RefundShare.reified()); };
    Object.defineProperty(RefundShare, "p", {
        get: function () { return RefundShare.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RefundShare, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RefundShare", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), share: bcs_1.bcs.u64(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RefundShare.fromFields = function (fields) { return RefundShare.reified().new({ user: (0, reified_1.decodeFromFields)("address", fields.user), share: (0, reified_1.decodeFromFields)("u64", fields.share), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    RefundShare.fromFieldsWithTypes = function (item) {
        if (!isRefundShare(item.type)) {
            throw new Error("not a RefundShare type");
        }
        return RefundShare.reified().new({ user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), share: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.share), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    RefundShare.fromBcs = function (data) { return RefundShare.fromFields(RefundShare.bcs.parse(data)); };
    RefundShare.prototype.toJSONField = function () {
        return {
            user: this.user, share: this.share.toString(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    RefundShare.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RefundShare.fromJSONField = function (field) { return RefundShare.reified().new({ user: (0, reified_1.decodeFromJSONField)("address", field.user), share: (0, reified_1.decodeFromJSONField)("u64", field.share), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    RefundShare.fromJSON = function (json) {
        if (json.$typeName !== RefundShare.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RefundShare.fromJSONField(json);
    };
    RefundShare.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRefundShare(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RefundShare object"));
    } return RefundShare.fromFieldsWithTypes(content); };
    RefundShare.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RefundShare object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRefundShare(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RefundShare object"));
                        }
                        return [2 /*return*/, RefundShare.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RefundShare.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::RefundShare";
    RefundShare.$numTypeParams = 0;
    return RefundShare;
}());
exports.RefundShare = RefundShare;
/* ============================== RefundVault =============================== */
function isRefundVault(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::RefundVault"; }
var RefundVault = /** @class */ (function () {
    function RefundVault(typeArgs, fields) {
        this.$typeName = RefundVault.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RefundVault.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.token = fields.token;
        ;
        this.shareSupply = fields.shareSupply;
        ;
        this.u64Padding = fields.u64Padding;
        ;
        this.bcsPadding = fields.bcsPadding;
    }
    RefundVault.reified = function () {
        var _this = this;
        return { typeName: RefundVault.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RefundVault.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RefundVault.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RefundVault.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RefundVault.fromBcs(data); }, bcs: RefundVault.bcs, fromJSONField: function (field) { return RefundVault.fromJSONField(field); }, fromJSON: function (json) { return RefundVault.fromJSON(json); }, fromSuiParsedData: function (content) { return RefundVault.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RefundVault.fetch(client, id)];
            }); }); }, new: function (fields) { return new RefundVault([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RefundVault, "r", {
        get: function () { return RefundVault.reified(); },
        enumerable: false,
        configurable: true
    });
    RefundVault.phantom = function () { return (0, reified_1.phantom)(RefundVault.reified()); };
    Object.defineProperty(RefundVault, "p", {
        get: function () { return RefundVault.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RefundVault, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RefundVault", {
                id: structs_4.UID.bcs, token: structs_3.TypeName.bcs, share_supply: bcs_1.bcs.u64(), u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()), bcs_padding: bcs_1.bcs.vector(bcs_1.bcs.u8())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RefundVault.fromFields = function (fields) { return RefundVault.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), shareSupply: (0, reified_1.decodeFromFields)("u64", fields.share_supply), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding), bcsPadding: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.bcs_padding) }); };
    RefundVault.fromFieldsWithTypes = function (item) {
        if (!isRefundVault(item.type)) {
            throw new Error("not a RefundVault type");
        }
        return RefundVault.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), shareSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.share_supply), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding), bcsPadding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.bcs_padding) });
    };
    RefundVault.fromBcs = function (data) { return RefundVault.fromFields(RefundVault.bcs.parse(data)); };
    RefundVault.prototype.toJSONField = function () {
        return {
            id: this.id, token: this.token.toJSONField(), shareSupply: this.shareSupply.toString(), u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding), bcsPadding: (0, reified_1.fieldToJSON)("vector<u8>", this.bcsPadding),
        };
    };
    RefundVault.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RefundVault.fromJSONField = function (field) { return RefundVault.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), shareSupply: (0, reified_1.decodeFromJSONField)("u64", field.shareSupply), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding), bcsPadding: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.bcsPadding) }); };
    RefundVault.fromJSON = function (json) {
        if (json.$typeName !== RefundVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RefundVault.fromJSONField(json);
    };
    RefundVault.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRefundVault(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RefundVault object"));
    } return RefundVault.fromFieldsWithTypes(content); };
    RefundVault.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RefundVault object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRefundVault(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RefundVault object"));
                        }
                        return [2 /*return*/, RefundVault.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RefundVault.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::RefundVault";
    RefundVault.$numTypeParams = 0;
    return RefundVault;
}());
exports.RefundVault = RefundVault;
/* ============================== Settle =============================== */
function isSettle(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Settle"; }
var Settle = /** @class */ (function () {
    function Settle(typeArgs, fields) {
        this.$typeName = Settle.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Settle.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.depositToken = fields.depositToken;
        ;
        this.bidToken = fields.bidToken;
        ;
        this.sharePrice = fields.sharePrice;
        ;
        this.sharePriceDecimal = fields.sharePriceDecimal;
    }
    Settle.reified = function () {
        var _this = this;
        return { typeName: Settle.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Settle.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Settle.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Settle.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Settle.fromBcs(data); }, bcs: Settle.bcs, fromJSONField: function (field) { return Settle.fromJSONField(field); }, fromJSON: function (json) { return Settle.fromJSON(json); }, fromSuiParsedData: function (content) { return Settle.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Settle.fetch(client, id)];
            }); }); }, new: function (fields) { return new Settle([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Settle, "r", {
        get: function () { return Settle.reified(); },
        enumerable: false,
        configurable: true
    });
    Settle.phantom = function () { return (0, reified_1.phantom)(Settle.reified()); };
    Object.defineProperty(Settle, "p", {
        get: function () { return Settle.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Settle, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Settle", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), deposit_token: structs_3.TypeName.bcs, bid_token: structs_3.TypeName.bcs, share_price: bcs_1.bcs.u64(), share_price_decimal: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Settle.fromFields = function (fields) { return Settle.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), depositToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.deposit_token), bidToken: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.bid_token), sharePrice: (0, reified_1.decodeFromFields)("u64", fields.share_price), sharePriceDecimal: (0, reified_1.decodeFromFields)("u64", fields.share_price_decimal) }); };
    Settle.fromFieldsWithTypes = function (item) {
        if (!isSettle(item.type)) {
            throw new Error("not a Settle type");
        }
        return Settle.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), depositToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.deposit_token), bidToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.bid_token), sharePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.share_price), sharePriceDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.share_price_decimal) });
    };
    Settle.fromBcs = function (data) { return Settle.fromFields(Settle.bcs.parse(data)); };
    Settle.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), depositToken: this.depositToken.toJSONField(), bidToken: this.bidToken.toJSONField(), sharePrice: this.sharePrice.toString(), sharePriceDecimal: this.sharePriceDecimal.toString(),
        };
    };
    Settle.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Settle.fromJSONField = function (field) { return Settle.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), depositToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.depositToken), bidToken: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.bidToken), sharePrice: (0, reified_1.decodeFromJSONField)("u64", field.sharePrice), sharePriceDecimal: (0, reified_1.decodeFromJSONField)("u64", field.sharePriceDecimal) }); };
    Settle.fromJSON = function (json) {
        if (json.$typeName !== Settle.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Settle.fromJSONField(json);
    };
    Settle.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSettle(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Settle object"));
    } return Settle.fromFieldsWithTypes(content); };
    Settle.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Settle object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSettle(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Settle object"));
                        }
                        return [2 /*return*/, Settle.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Settle.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Settle";
    Settle.$numTypeParams = 0;
    return Settle;
}());
exports.Settle = Settle;
/* ============================== Terminate =============================== */
function isTerminate(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Terminate"; }
var Terminate = /** @class */ (function () {
    function Terminate(typeArgs, fields) {
        this.$typeName = Terminate.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Terminate.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
    }
    Terminate.reified = function () {
        var _this = this;
        return { typeName: Terminate.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Terminate.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Terminate.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Terminate.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Terminate.fromBcs(data); }, bcs: Terminate.bcs, fromJSONField: function (field) { return Terminate.fromJSONField(field); }, fromJSON: function (json) { return Terminate.fromJSON(json); }, fromSuiParsedData: function (content) { return Terminate.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Terminate.fetch(client, id)];
            }); }); }, new: function (fields) { return new Terminate([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Terminate, "r", {
        get: function () { return Terminate.reified(); },
        enumerable: false,
        configurable: true
    });
    Terminate.phantom = function () { return (0, reified_1.phantom)(Terminate.reified()); };
    Object.defineProperty(Terminate, "p", {
        get: function () { return Terminate.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Terminate, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Terminate", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Terminate.fromFields = function (fields) { return Terminate.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token) }); };
    Terminate.fromFieldsWithTypes = function (item) {
        if (!isTerminate(item.type)) {
            throw new Error("not a Terminate type");
        }
        return Terminate.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token) });
    };
    Terminate.fromBcs = function (data) { return Terminate.fromFields(Terminate.bcs.parse(data)); };
    Terminate.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(),
        };
    };
    Terminate.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Terminate.fromJSONField = function (field) { return Terminate.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token) }); };
    Terminate.fromJSON = function (json) {
        if (json.$typeName !== Terminate.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Terminate.fromJSONField(json);
    };
    Terminate.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTerminate(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Terminate object"));
    } return Terminate.fromFieldsWithTypes(content); };
    Terminate.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Terminate object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTerminate(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Terminate object"));
                        }
                        return [2 /*return*/, Terminate.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Terminate.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Terminate";
    Terminate.$numTypeParams = 0;
    return Terminate;
}());
exports.Terminate = Terminate;
/* ============================== TypusBidReceipt =============================== */
function isTypusBidReceipt(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::TypusBidReceipt"; }
var TypusBidReceipt = /** @class */ (function () {
    function TypusBidReceipt(typeArgs, fields) {
        this.$typeName = TypusBidReceipt.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TypusBidReceipt.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.vid = fields.vid;
        ;
        this.index = fields.index;
        ;
        this.metadata = fields.metadata;
        ;
        this.u64Padding = fields.u64Padding;
    }
    TypusBidReceipt.reified = function () {
        var _this = this;
        return { typeName: TypusBidReceipt.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TypusBidReceipt.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return TypusBidReceipt.fromFields(fields); }, fromFieldsWithTypes: function (item) { return TypusBidReceipt.fromFieldsWithTypes(item); }, fromBcs: function (data) { return TypusBidReceipt.fromBcs(data); }, bcs: TypusBidReceipt.bcs, fromJSONField: function (field) { return TypusBidReceipt.fromJSONField(field); }, fromJSON: function (json) { return TypusBidReceipt.fromJSON(json); }, fromSuiParsedData: function (content) { return TypusBidReceipt.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TypusBidReceipt.fetch(client, id)];
            }); }); }, new: function (fields) { return new TypusBidReceipt([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TypusBidReceipt, "r", {
        get: function () { return TypusBidReceipt.reified(); },
        enumerable: false,
        configurable: true
    });
    TypusBidReceipt.phantom = function () { return (0, reified_1.phantom)(TypusBidReceipt.reified()); };
    Object.defineProperty(TypusBidReceipt, "p", {
        get: function () { return TypusBidReceipt.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TypusBidReceipt, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TypusBidReceipt", {
                id: structs_4.UID.bcs, vid: structs_4.ID.bcs, index: bcs_1.bcs.u64(), metadata: structs_2.String.bcs, u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TypusBidReceipt.fromFields = function (fields) { return TypusBidReceipt.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id), vid: (0, reified_1.decodeFromFields)(structs_4.ID.reified(), fields.vid), index: (0, reified_1.decodeFromFields)("u64", fields.index), metadata: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.metadata), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    TypusBidReceipt.fromFieldsWithTypes = function (item) {
        if (!isTypusBidReceipt(item.type)) {
            throw new Error("not a TypusBidReceipt type");
        }
        return TypusBidReceipt.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id), vid: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.ID.reified(), item.fields.vid), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), metadata: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.metadata), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    TypusBidReceipt.fromBcs = function (data) { return TypusBidReceipt.fromFields(TypusBidReceipt.bcs.parse(data)); };
    TypusBidReceipt.prototype.toJSONField = function () {
        return {
            id: this.id, vid: this.vid, index: this.index.toString(), metadata: this.metadata, u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    TypusBidReceipt.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TypusBidReceipt.fromJSONField = function (field) { return TypusBidReceipt.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id), vid: (0, reified_1.decodeFromJSONField)(structs_4.ID.reified(), field.vid), index: (0, reified_1.decodeFromJSONField)("u64", field.index), metadata: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.metadata), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    TypusBidReceipt.fromJSON = function (json) {
        if (json.$typeName !== TypusBidReceipt.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TypusBidReceipt.fromJSONField(json);
    };
    TypusBidReceipt.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTypusBidReceipt(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TypusBidReceipt object"));
    } return TypusBidReceipt.fromFieldsWithTypes(content); };
    TypusBidReceipt.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TypusBidReceipt object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTypusBidReceipt(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TypusBidReceipt object"));
                        }
                        return [2 /*return*/, TypusBidReceipt.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TypusBidReceipt.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::TypusBidReceipt";
    TypusBidReceipt.$numTypeParams = 0;
    return TypusBidReceipt;
}());
exports.TypusBidReceipt = TypusBidReceipt;
/* ============================== TypusDepositReceipt =============================== */
function isTypusDepositReceipt(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::TypusDepositReceipt"; }
var TypusDepositReceipt = /** @class */ (function () {
    function TypusDepositReceipt(typeArgs, fields) {
        this.$typeName = TypusDepositReceipt.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TypusDepositReceipt.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.vid = fields.vid;
        ;
        this.index = fields.index;
        ;
        this.metadata = fields.metadata;
        ;
        this.u64Padding = fields.u64Padding;
    }
    TypusDepositReceipt.reified = function () {
        var _this = this;
        return { typeName: TypusDepositReceipt.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TypusDepositReceipt.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return TypusDepositReceipt.fromFields(fields); }, fromFieldsWithTypes: function (item) { return TypusDepositReceipt.fromFieldsWithTypes(item); }, fromBcs: function (data) { return TypusDepositReceipt.fromBcs(data); }, bcs: TypusDepositReceipt.bcs, fromJSONField: function (field) { return TypusDepositReceipt.fromJSONField(field); }, fromJSON: function (json) { return TypusDepositReceipt.fromJSON(json); }, fromSuiParsedData: function (content) { return TypusDepositReceipt.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TypusDepositReceipt.fetch(client, id)];
            }); }); }, new: function (fields) { return new TypusDepositReceipt([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(TypusDepositReceipt, "r", {
        get: function () { return TypusDepositReceipt.reified(); },
        enumerable: false,
        configurable: true
    });
    TypusDepositReceipt.phantom = function () { return (0, reified_1.phantom)(TypusDepositReceipt.reified()); };
    Object.defineProperty(TypusDepositReceipt, "p", {
        get: function () { return TypusDepositReceipt.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TypusDepositReceipt, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TypusDepositReceipt", {
                id: structs_4.UID.bcs, vid: structs_4.ID.bcs, index: bcs_1.bcs.u64(), metadata: structs_2.String.bcs, u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64())
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    TypusDepositReceipt.fromFields = function (fields) { return TypusDepositReceipt.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id), vid: (0, reified_1.decodeFromFields)(structs_4.ID.reified(), fields.vid), index: (0, reified_1.decodeFromFields)("u64", fields.index), metadata: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.metadata), u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding) }); };
    TypusDepositReceipt.fromFieldsWithTypes = function (item) {
        if (!isTypusDepositReceipt(item.type)) {
            throw new Error("not a TypusDepositReceipt type");
        }
        return TypusDepositReceipt.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id), vid: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.ID.reified(), item.fields.vid), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), metadata: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.metadata), u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding) });
    };
    TypusDepositReceipt.fromBcs = function (data) { return TypusDepositReceipt.fromFields(TypusDepositReceipt.bcs.parse(data)); };
    TypusDepositReceipt.prototype.toJSONField = function () {
        return {
            id: this.id, vid: this.vid, index: this.index.toString(), metadata: this.metadata, u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    TypusDepositReceipt.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    TypusDepositReceipt.fromJSONField = function (field) { return TypusDepositReceipt.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id), vid: (0, reified_1.decodeFromJSONField)(structs_4.ID.reified(), field.vid), index: (0, reified_1.decodeFromJSONField)("u64", field.index), metadata: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.metadata), u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding) }); };
    TypusDepositReceipt.fromJSON = function (json) {
        if (json.$typeName !== TypusDepositReceipt.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TypusDepositReceipt.fromJSONField(json);
    };
    TypusDepositReceipt.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTypusDepositReceipt(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a TypusDepositReceipt object"));
    } return TypusDepositReceipt.fromFieldsWithTypes(content); };
    TypusDepositReceipt.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TypusDepositReceipt object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTypusDepositReceipt(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TypusDepositReceipt object"));
                        }
                        return [2 /*return*/, TypusDepositReceipt.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TypusDepositReceipt.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::TypusDepositReceipt";
    TypusDepositReceipt.$numTypeParams = 0;
    return TypusDepositReceipt;
}());
exports.TypusDepositReceipt = TypusDepositReceipt;
/* ============================== Unsubscribe =============================== */
function isUnsubscribe(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Unsubscribe"; }
var Unsubscribe = /** @class */ (function () {
    function Unsubscribe(typeArgs, fields) {
        this.$typeName = Unsubscribe.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Unsubscribe.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
    }
    Unsubscribe.reified = function () {
        var _this = this;
        return { typeName: Unsubscribe.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Unsubscribe.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Unsubscribe.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Unsubscribe.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Unsubscribe.fromBcs(data); }, bcs: Unsubscribe.bcs, fromJSONField: function (field) { return Unsubscribe.fromJSONField(field); }, fromJSON: function (json) { return Unsubscribe.fromJSON(json); }, fromSuiParsedData: function (content) { return Unsubscribe.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Unsubscribe.fetch(client, id)];
            }); }); }, new: function (fields) { return new Unsubscribe([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Unsubscribe, "r", {
        get: function () { return Unsubscribe.reified(); },
        enumerable: false,
        configurable: true
    });
    Unsubscribe.phantom = function () { return (0, reified_1.phantom)(Unsubscribe.reified()); };
    Object.defineProperty(Unsubscribe, "p", {
        get: function () { return Unsubscribe.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Unsubscribe, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Unsubscribe", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Unsubscribe.fromFields = function (fields) { return Unsubscribe.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); };
    Unsubscribe.fromFieldsWithTypes = function (item) {
        if (!isUnsubscribe(item.type)) {
            throw new Error("not a Unsubscribe type");
        }
        return Unsubscribe.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    };
    Unsubscribe.fromBcs = function (data) { return Unsubscribe.fromFields(Unsubscribe.bcs.parse(data)); };
    Unsubscribe.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), amount: this.amount.toString(),
        };
    };
    Unsubscribe.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Unsubscribe.fromJSONField = function (field) { return Unsubscribe.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); };
    Unsubscribe.fromJSON = function (json) {
        if (json.$typeName !== Unsubscribe.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Unsubscribe.fromJSONField(json);
    };
    Unsubscribe.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUnsubscribe(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Unsubscribe object"));
    } return Unsubscribe.fromFieldsWithTypes(content); };
    Unsubscribe.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Unsubscribe object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUnsubscribe(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Unsubscribe object"));
                        }
                        return [2 /*return*/, Unsubscribe.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Unsubscribe.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Unsubscribe";
    Unsubscribe.$numTypeParams = 0;
    return Unsubscribe;
}());
exports.Unsubscribe = Unsubscribe;
/* ============================== UpdateFeeConfig =============================== */
function isUpdateFeeConfig(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::UpdateFeeConfig"; }
var UpdateFeeConfig = /** @class */ (function () {
    function UpdateFeeConfig(typeArgs, fields) {
        this.$typeName = UpdateFeeConfig.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateFeeConfig.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.prevFeeBp = fields.prevFeeBp;
        ;
        this.feeBp = fields.feeBp;
    }
    UpdateFeeConfig.reified = function () {
        var _this = this;
        return { typeName: UpdateFeeConfig.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateFeeConfig.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UpdateFeeConfig.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UpdateFeeConfig.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UpdateFeeConfig.fromBcs(data); }, bcs: UpdateFeeConfig.bcs, fromJSONField: function (field) { return UpdateFeeConfig.fromJSONField(field); }, fromJSON: function (json) { return UpdateFeeConfig.fromJSON(json); }, fromSuiParsedData: function (content) { return UpdateFeeConfig.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateFeeConfig.fetch(client, id)];
            }); }); }, new: function (fields) { return new UpdateFeeConfig([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UpdateFeeConfig, "r", {
        get: function () { return UpdateFeeConfig.reified(); },
        enumerable: false,
        configurable: true
    });
    UpdateFeeConfig.phantom = function () { return (0, reified_1.phantom)(UpdateFeeConfig.reified()); };
    Object.defineProperty(UpdateFeeConfig, "p", {
        get: function () { return UpdateFeeConfig.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateFeeConfig, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateFeeConfig", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), prev_fee_bp: bcs_1.bcs.u64(), fee_bp: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UpdateFeeConfig.fromFields = function (fields) { return UpdateFeeConfig.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), prevFeeBp: (0, reified_1.decodeFromFields)("u64", fields.prev_fee_bp), feeBp: (0, reified_1.decodeFromFields)("u64", fields.fee_bp) }); };
    UpdateFeeConfig.fromFieldsWithTypes = function (item) {
        if (!isUpdateFeeConfig(item.type)) {
            throw new Error("not a UpdateFeeConfig type");
        }
        return UpdateFeeConfig.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), prevFeeBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.prev_fee_bp), feeBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee_bp) });
    };
    UpdateFeeConfig.fromBcs = function (data) { return UpdateFeeConfig.fromFields(UpdateFeeConfig.bcs.parse(data)); };
    UpdateFeeConfig.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), prevFeeBp: this.prevFeeBp.toString(), feeBp: this.feeBp.toString(),
        };
    };
    UpdateFeeConfig.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UpdateFeeConfig.fromJSONField = function (field) { return UpdateFeeConfig.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), prevFeeBp: (0, reified_1.decodeFromJSONField)("u64", field.prevFeeBp), feeBp: (0, reified_1.decodeFromJSONField)("u64", field.feeBp) }); };
    UpdateFeeConfig.fromJSON = function (json) {
        if (json.$typeName !== UpdateFeeConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpdateFeeConfig.fromJSONField(json);
    };
    UpdateFeeConfig.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpdateFeeConfig(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UpdateFeeConfig object"));
    } return UpdateFeeConfig.fromFieldsWithTypes(content); };
    UpdateFeeConfig.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateFeeConfig object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateFeeConfig(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateFeeConfig object"));
                        }
                        return [2 /*return*/, UpdateFeeConfig.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateFeeConfig.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::UpdateFeeConfig";
    UpdateFeeConfig.$numTypeParams = 0;
    return UpdateFeeConfig;
}());
exports.UpdateFeeConfig = UpdateFeeConfig;
/* ============================== UpdateFeeShareConfig =============================== */
function isUpdateFeeShareConfig(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::UpdateFeeShareConfig"; }
var UpdateFeeShareConfig = /** @class */ (function () {
    function UpdateFeeShareConfig(typeArgs, fields) {
        this.$typeName = UpdateFeeShareConfig.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateFeeShareConfig.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.prevFeeBp = fields.prevFeeBp;
        ;
        this.prevSharedFeePool = fields.prevSharedFeePool;
        ;
        this.feeBp = fields.feeBp;
        ;
        this.sharedFeePool = fields.sharedFeePool;
    }
    UpdateFeeShareConfig.reified = function () {
        var _this = this;
        return { typeName: UpdateFeeShareConfig.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateFeeShareConfig.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UpdateFeeShareConfig.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UpdateFeeShareConfig.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UpdateFeeShareConfig.fromBcs(data); }, bcs: UpdateFeeShareConfig.bcs, fromJSONField: function (field) { return UpdateFeeShareConfig.fromJSONField(field); }, fromJSON: function (json) { return UpdateFeeShareConfig.fromJSON(json); }, fromSuiParsedData: function (content) { return UpdateFeeShareConfig.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateFeeShareConfig.fetch(client, id)];
            }); }); }, new: function (fields) { return new UpdateFeeShareConfig([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UpdateFeeShareConfig, "r", {
        get: function () { return UpdateFeeShareConfig.reified(); },
        enumerable: false,
        configurable: true
    });
    UpdateFeeShareConfig.phantom = function () { return (0, reified_1.phantom)(UpdateFeeShareConfig.reified()); };
    Object.defineProperty(UpdateFeeShareConfig, "p", {
        get: function () { return UpdateFeeShareConfig.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateFeeShareConfig, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateFeeShareConfig", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), prev_fee_bp: bcs_1.bcs.u64(), prev_shared_fee_pool: structs_1.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u8())), fee_bp: bcs_1.bcs.u64(), shared_fee_pool: structs_1.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u8()))
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UpdateFeeShareConfig.fromFields = function (fields) { return UpdateFeeShareConfig.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), prevFeeBp: (0, reified_1.decodeFromFields)("u64", fields.prev_fee_bp), prevSharedFeePool: (0, reified_1.decodeFromFields)(structs_1.Option.reified(reified.vector("u8")), fields.prev_shared_fee_pool), feeBp: (0, reified_1.decodeFromFields)("u64", fields.fee_bp), sharedFeePool: (0, reified_1.decodeFromFields)(structs_1.Option.reified(reified.vector("u8")), fields.shared_fee_pool) }); };
    UpdateFeeShareConfig.fromFieldsWithTypes = function (item) {
        if (!isUpdateFeeShareConfig(item.type)) {
            throw new Error("not a UpdateFeeShareConfig type");
        }
        return UpdateFeeShareConfig.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), prevFeeBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.prev_fee_bp), prevSharedFeePool: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(reified.vector("u8")), item.fields.prev_shared_fee_pool), feeBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee_bp), sharedFeePool: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(reified.vector("u8")), item.fields.shared_fee_pool) });
    };
    UpdateFeeShareConfig.fromBcs = function (data) { return UpdateFeeShareConfig.fromFields(UpdateFeeShareConfig.bcs.parse(data)); };
    UpdateFeeShareConfig.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), prevFeeBp: this.prevFeeBp.toString(), prevSharedFeePool: (0, reified_1.fieldToJSON)("0x1::option::Option<vector<u8>>", this.prevSharedFeePool), feeBp: this.feeBp.toString(), sharedFeePool: (0, reified_1.fieldToJSON)("0x1::option::Option<vector<u8>>", this.sharedFeePool),
        };
    };
    UpdateFeeShareConfig.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UpdateFeeShareConfig.fromJSONField = function (field) { return UpdateFeeShareConfig.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), prevFeeBp: (0, reified_1.decodeFromJSONField)("u64", field.prevFeeBp), prevSharedFeePool: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(reified.vector("u8")), field.prevSharedFeePool), feeBp: (0, reified_1.decodeFromJSONField)("u64", field.feeBp), sharedFeePool: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(reified.vector("u8")), field.sharedFeePool) }); };
    UpdateFeeShareConfig.fromJSON = function (json) {
        if (json.$typeName !== UpdateFeeShareConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpdateFeeShareConfig.fromJSONField(json);
    };
    UpdateFeeShareConfig.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpdateFeeShareConfig(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UpdateFeeShareConfig object"));
    } return UpdateFeeShareConfig.fromFieldsWithTypes(content); };
    UpdateFeeShareConfig.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateFeeShareConfig object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateFeeShareConfig(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateFeeShareConfig object"));
                        }
                        return [2 /*return*/, UpdateFeeShareConfig.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateFeeShareConfig.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::UpdateFeeShareConfig";
    UpdateFeeShareConfig.$numTypeParams = 0;
    return UpdateFeeShareConfig;
}());
exports.UpdateFeeShareConfig = UpdateFeeShareConfig;
/* ============================== VAULT =============================== */
function isVAULT(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::VAULT"; }
var VAULT = /** @class */ (function () {
    function VAULT(typeArgs, fields) {
        this.$typeName = VAULT.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([VAULT.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    VAULT.reified = function () {
        var _this = this;
        return { typeName: VAULT.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([VAULT.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return VAULT.fromFields(fields); }, fromFieldsWithTypes: function (item) { return VAULT.fromFieldsWithTypes(item); }, fromBcs: function (data) { return VAULT.fromBcs(data); }, bcs: VAULT.bcs, fromJSONField: function (field) { return VAULT.fromJSONField(field); }, fromJSON: function (json) { return VAULT.fromJSON(json); }, fromSuiParsedData: function (content) { return VAULT.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, VAULT.fetch(client, id)];
            }); }); }, new: function (fields) { return new VAULT([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(VAULT, "r", {
        get: function () { return VAULT.reified(); },
        enumerable: false,
        configurable: true
    });
    VAULT.phantom = function () { return (0, reified_1.phantom)(VAULT.reified()); };
    Object.defineProperty(VAULT, "p", {
        get: function () { return VAULT.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VAULT, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("VAULT", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    VAULT.fromFields = function (fields) { return VAULT.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    VAULT.fromFieldsWithTypes = function (item) {
        if (!isVAULT(item.type)) {
            throw new Error("not a VAULT type");
        }
        return VAULT.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    VAULT.fromBcs = function (data) { return VAULT.fromFields(VAULT.bcs.parse(data)); };
    VAULT.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    VAULT.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    VAULT.fromJSONField = function (field) { return VAULT.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    VAULT.fromJSON = function (json) {
        if (json.$typeName !== VAULT.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return VAULT.fromJSONField(json);
    };
    VAULT.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVAULT(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a VAULT object"));
    } return VAULT.fromFieldsWithTypes(content); };
    VAULT.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching VAULT object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVAULT(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a VAULT object"));
                        }
                        return [2 /*return*/, VAULT.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    VAULT.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::VAULT";
    VAULT.$numTypeParams = 0;
    return VAULT;
}());
exports.VAULT = VAULT;
/* ============================== Withdraw =============================== */
function isWithdraw(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Withdraw"; }
var Withdraw = /** @class */ (function () {
    function Withdraw(typeArgs, fields) {
        this.$typeName = Withdraw.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Withdraw.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
    }
    Withdraw.reified = function () {
        var _this = this;
        return { typeName: Withdraw.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Withdraw.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Withdraw.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Withdraw.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Withdraw.fromBcs(data); }, bcs: Withdraw.bcs, fromJSONField: function (field) { return Withdraw.fromJSONField(field); }, fromJSON: function (json) { return Withdraw.fromJSON(json); }, fromSuiParsedData: function (content) { return Withdraw.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Withdraw.fetch(client, id)];
            }); }); }, new: function (fields) { return new Withdraw([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Withdraw, "r", {
        get: function () { return Withdraw.reified(); },
        enumerable: false,
        configurable: true
    });
    Withdraw.phantom = function () { return (0, reified_1.phantom)(Withdraw.reified()); };
    Object.defineProperty(Withdraw, "p", {
        get: function () { return Withdraw.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Withdraw, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Withdraw", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Withdraw.fromFields = function (fields) { return Withdraw.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); };
    Withdraw.fromFieldsWithTypes = function (item) {
        if (!isWithdraw(item.type)) {
            throw new Error("not a Withdraw type");
        }
        return Withdraw.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    };
    Withdraw.fromBcs = function (data) { return Withdraw.fromFields(Withdraw.bcs.parse(data)); };
    Withdraw.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), amount: this.amount.toString(),
        };
    };
    Withdraw.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Withdraw.fromJSONField = function (field) { return Withdraw.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); };
    Withdraw.fromJSON = function (json) {
        if (json.$typeName !== Withdraw.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Withdraw.fromJSONField(json);
    };
    Withdraw.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isWithdraw(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Withdraw object"));
    } return Withdraw.fromFieldsWithTypes(content); };
    Withdraw.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Withdraw object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isWithdraw(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Withdraw object"));
                        }
                        return [2 /*return*/, Withdraw.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Withdraw.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Withdraw";
    Withdraw.$numTypeParams = 0;
    return Withdraw;
}());
exports.Withdraw = Withdraw;
