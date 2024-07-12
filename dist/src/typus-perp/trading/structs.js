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
exports.UpdateProtocolFeeShareBpEvent = exports.UpdateMarketConfigEvent = exports.UpdateFundingRateEvent = exports.USD = exports.SymbolMarket = exports.SuspendTradingSymbolEvent = exports.SuspendMarketEvent = exports.ResumeTradingSymbolEvent = exports.ResumeMarketEvent = exports.ReleaseCollateralEvent = exports.NewMarketsEvent = exports.MatchTradingOrderEvent = exports.Markets = exports.MarketRegistry = exports.MarketInfo = exports.MarketConfig = exports.ManagerReducePosition = exports.LiquidateEvent = exports.LinkedOrdersInfo = exports.IncreaseCollateralEvent = exports.CreateTradingOrderWithBidReceiptsEvent = exports.CreateTradingOrderEvent = exports.CancelTradingOrderEvent = exports.AddTradingSymbolEvent = void 0;
exports.isAddTradingSymbolEvent = isAddTradingSymbolEvent;
exports.isCancelTradingOrderEvent = isCancelTradingOrderEvent;
exports.isCreateTradingOrderEvent = isCreateTradingOrderEvent;
exports.isCreateTradingOrderWithBidReceiptsEvent = isCreateTradingOrderWithBidReceiptsEvent;
exports.isIncreaseCollateralEvent = isIncreaseCollateralEvent;
exports.isLinkedOrdersInfo = isLinkedOrdersInfo;
exports.isLiquidateEvent = isLiquidateEvent;
exports.isManagerReducePosition = isManagerReducePosition;
exports.isMarketConfig = isMarketConfig;
exports.isMarketInfo = isMarketInfo;
exports.isMarketRegistry = isMarketRegistry;
exports.isMarkets = isMarkets;
exports.isMatchTradingOrderEvent = isMatchTradingOrderEvent;
exports.isNewMarketsEvent = isNewMarketsEvent;
exports.isReleaseCollateralEvent = isReleaseCollateralEvent;
exports.isResumeMarketEvent = isResumeMarketEvent;
exports.isResumeTradingSymbolEvent = isResumeTradingSymbolEvent;
exports.isSuspendMarketEvent = isSuspendMarketEvent;
exports.isSuspendTradingSymbolEvent = isSuspendTradingSymbolEvent;
exports.isSymbolMarket = isSymbolMarket;
exports.isUSD = isUSD;
exports.isUpdateFundingRateEvent = isUpdateFundingRateEvent;
exports.isUpdateMarketConfigEvent = isUpdateMarketConfigEvent;
exports.isUpdateProtocolFeeShareBpEvent = isUpdateProtocolFeeShareBpEvent;
var reified = __importStar(require("../../_framework/reified"));
var structs_1 = require("../../_dependencies/source/0x1/option/structs");
var structs_2 = require("../../_dependencies/source/0x1/type-name/structs");
var structs_3 = require("../../_dependencies/source/0x2/object-table/structs");
var structs_4 = require("../../_dependencies/source/0x2/object/structs");
var structs_5 = require("../../_dependencies/source/0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277/big-vector/structs");
var reified_1 = require("../../_framework/reified");
var util_1 = require("../../_framework/util");
var bcs_1 = require("@mysten/bcs");
/* ============================== AddTradingSymbolEvent =============================== */
function isAddTradingSymbolEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::AddTradingSymbolEvent";
}
var AddTradingSymbolEvent = /** @class */ (function () {
    function AddTradingSymbolEvent(typeArgs, fields) {
        this.$typeName = AddTradingSymbolEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([AddTradingSymbolEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.index = fields.index;
        this.baseTokenType = fields.baseTokenType;
        this.marketInfo = fields.marketInfo;
        this.marketConfig = fields.marketConfig;
        this.u64Padding = fields.u64Padding;
    }
    AddTradingSymbolEvent.reified = function () {
        var _this = this;
        return {
            typeName: AddTradingSymbolEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([AddTradingSymbolEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return AddTradingSymbolEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return AddTradingSymbolEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return AddTradingSymbolEvent.fromBcs(data); },
            bcs: AddTradingSymbolEvent.bcs,
            fromJSONField: function (field) { return AddTradingSymbolEvent.fromJSONField(field); },
            fromJSON: function (json) { return AddTradingSymbolEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return AddTradingSymbolEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, AddTradingSymbolEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new AddTradingSymbolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(AddTradingSymbolEvent, "r", {
        get: function () {
            return AddTradingSymbolEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    AddTradingSymbolEvent.phantom = function () {
        return (0, reified_1.phantom)(AddTradingSymbolEvent.reified());
    };
    Object.defineProperty(AddTradingSymbolEvent, "p", {
        get: function () {
            return AddTradingSymbolEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddTradingSymbolEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("AddTradingSymbolEvent", {
                index: bcs_1.bcs.u64(),
                base_token_type: structs_2.TypeName.bcs,
                market_info: MarketInfo.bcs,
                market_config: MarketConfig.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    AddTradingSymbolEvent.fromFields = function (fields) {
        return AddTradingSymbolEvent.reified().new({
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            baseTokenType: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.base_token_type),
            marketInfo: (0, reified_1.decodeFromFields)(MarketInfo.reified(), fields.market_info),
            marketConfig: (0, reified_1.decodeFromFields)(MarketConfig.reified(), fields.market_config),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    AddTradingSymbolEvent.fromFieldsWithTypes = function (item) {
        if (!isAddTradingSymbolEvent(item.type)) {
            throw new Error("not a AddTradingSymbolEvent type");
        }
        return AddTradingSymbolEvent.reified().new({
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            baseTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.base_token_type),
            marketInfo: (0, reified_1.decodeFromFieldsWithTypes)(MarketInfo.reified(), item.fields.market_info),
            marketConfig: (0, reified_1.decodeFromFieldsWithTypes)(MarketConfig.reified(), item.fields.market_config),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    AddTradingSymbolEvent.fromBcs = function (data) {
        return AddTradingSymbolEvent.fromFields(AddTradingSymbolEvent.bcs.parse(data));
    };
    AddTradingSymbolEvent.prototype.toJSONField = function () {
        return {
            index: this.index.toString(),
            baseTokenType: this.baseTokenType.toJSONField(),
            marketInfo: this.marketInfo.toJSONField(),
            marketConfig: this.marketConfig.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    AddTradingSymbolEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    AddTradingSymbolEvent.fromJSONField = function (field) {
        return AddTradingSymbolEvent.reified().new({
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            baseTokenType: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.baseTokenType),
            marketInfo: (0, reified_1.decodeFromJSONField)(MarketInfo.reified(), field.marketInfo),
            marketConfig: (0, reified_1.decodeFromJSONField)(MarketConfig.reified(), field.marketConfig),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    AddTradingSymbolEvent.fromJSON = function (json) {
        if (json.$typeName !== AddTradingSymbolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return AddTradingSymbolEvent.fromJSONField(json);
    };
    AddTradingSymbolEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddTradingSymbolEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a AddTradingSymbolEvent object"));
        }
        return AddTradingSymbolEvent.fromFieldsWithTypes(content);
    };
    AddTradingSymbolEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching AddTradingSymbolEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAddTradingSymbolEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a AddTradingSymbolEvent object"));
                        }
                        return [2 /*return*/, AddTradingSymbolEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    AddTradingSymbolEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::AddTradingSymbolEvent";
    AddTradingSymbolEvent.$numTypeParams = 0;
    return AddTradingSymbolEvent;
}());
exports.AddTradingSymbolEvent = AddTradingSymbolEvent;
/* ============================== CancelTradingOrderEvent =============================== */
function isCancelTradingOrderEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CancelTradingOrderEvent";
}
var CancelTradingOrderEvent = /** @class */ (function () {
    function CancelTradingOrderEvent(typeArgs, fields) {
        this.$typeName = CancelTradingOrderEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([CancelTradingOrderEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        this.marketIndex = fields.marketIndex;
        this.orderId = fields.orderId;
        this.triggerPrice = fields.triggerPrice;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.releasedCollateralAmount = fields.releasedCollateralAmount;
        this.u64Padding = fields.u64Padding;
    }
    CancelTradingOrderEvent.reified = function () {
        var _this = this;
        return {
            typeName: CancelTradingOrderEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([CancelTradingOrderEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return CancelTradingOrderEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return CancelTradingOrderEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return CancelTradingOrderEvent.fromBcs(data); },
            bcs: CancelTradingOrderEvent.bcs,
            fromJSONField: function (field) { return CancelTradingOrderEvent.fromJSONField(field); },
            fromJSON: function (json) { return CancelTradingOrderEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return CancelTradingOrderEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, CancelTradingOrderEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new CancelTradingOrderEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(CancelTradingOrderEvent, "r", {
        get: function () {
            return CancelTradingOrderEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    CancelTradingOrderEvent.phantom = function () {
        return (0, reified_1.phantom)(CancelTradingOrderEvent.reified());
    };
    Object.defineProperty(CancelTradingOrderEvent, "p", {
        get: function () {
            return CancelTradingOrderEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CancelTradingOrderEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("CancelTradingOrderEvent", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                market_index: bcs_1.bcs.u64(),
                order_id: bcs_1.bcs.u64(),
                trigger_price: bcs_1.bcs.u64(),
                collateral_token: structs_2.TypeName.bcs,
                base_token: structs_2.TypeName.bcs,
                released_collateral_amount: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    CancelTradingOrderEvent.fromFields = function (fields) {
        return CancelTradingOrderEvent.reified().new({
            user: (0, reified_1.decodeFromFields)("address", fields.user),
            marketIndex: (0, reified_1.decodeFromFields)("u64", fields.market_index),
            orderId: (0, reified_1.decodeFromFields)("u64", fields.order_id),
            triggerPrice: (0, reified_1.decodeFromFields)("u64", fields.trigger_price),
            collateralToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.collateral_token),
            baseToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.base_token),
            releasedCollateralAmount: (0, reified_1.decodeFromFields)("u64", fields.released_collateral_amount),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    CancelTradingOrderEvent.fromFieldsWithTypes = function (item) {
        if (!isCancelTradingOrderEvent(item.type)) {
            throw new Error("not a CancelTradingOrderEvent type");
        }
        return CancelTradingOrderEvent.reified().new({
            user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user),
            marketIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.market_index),
            orderId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.order_id),
            triggerPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.trigger_price),
            collateralToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.collateral_token),
            baseToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.base_token),
            releasedCollateralAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.released_collateral_amount),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    CancelTradingOrderEvent.fromBcs = function (data) {
        return CancelTradingOrderEvent.fromFields(CancelTradingOrderEvent.bcs.parse(data));
    };
    CancelTradingOrderEvent.prototype.toJSONField = function () {
        return {
            user: this.user,
            marketIndex: this.marketIndex.toString(),
            orderId: this.orderId.toString(),
            triggerPrice: this.triggerPrice.toString(),
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            releasedCollateralAmount: this.releasedCollateralAmount.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    CancelTradingOrderEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    CancelTradingOrderEvent.fromJSONField = function (field) {
        return CancelTradingOrderEvent.reified().new({
            user: (0, reified_1.decodeFromJSONField)("address", field.user),
            marketIndex: (0, reified_1.decodeFromJSONField)("u64", field.marketIndex),
            orderId: (0, reified_1.decodeFromJSONField)("u64", field.orderId),
            triggerPrice: (0, reified_1.decodeFromJSONField)("u64", field.triggerPrice),
            collateralToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.collateralToken),
            baseToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.baseToken),
            releasedCollateralAmount: (0, reified_1.decodeFromJSONField)("u64", field.releasedCollateralAmount),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    CancelTradingOrderEvent.fromJSON = function (json) {
        if (json.$typeName !== CancelTradingOrderEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return CancelTradingOrderEvent.fromJSONField(json);
    };
    CancelTradingOrderEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCancelTradingOrderEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a CancelTradingOrderEvent object"));
        }
        return CancelTradingOrderEvent.fromFieldsWithTypes(content);
    };
    CancelTradingOrderEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching CancelTradingOrderEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCancelTradingOrderEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a CancelTradingOrderEvent object"));
                        }
                        return [2 /*return*/, CancelTradingOrderEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    CancelTradingOrderEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CancelTradingOrderEvent";
    CancelTradingOrderEvent.$numTypeParams = 0;
    return CancelTradingOrderEvent;
}());
exports.CancelTradingOrderEvent = CancelTradingOrderEvent;
/* ============================== CreateTradingOrderEvent =============================== */
function isCreateTradingOrderEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CreateTradingOrderEvent";
}
var CreateTradingOrderEvent = /** @class */ (function () {
    function CreateTradingOrderEvent(typeArgs, fields) {
        this.$typeName = CreateTradingOrderEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([CreateTradingOrderEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        this.marketIndex = fields.marketIndex;
        this.poolIndex = fields.poolIndex;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.linkedPositionId = fields.linkedPositionId;
        this.collateralAmount = fields.collateralAmount;
        this.leveragePct = fields.leveragePct;
        this.reduceOnly = fields.reduceOnly;
        this.isLong = fields.isLong;
        this.isStopOrder = fields.isStopOrder;
        this.size = fields.size;
        this.triggerPrice = fields.triggerPrice;
        this.filled = fields.filled;
        this.filledPrice = fields.filledPrice;
        this.u64Padding = fields.u64Padding;
    }
    CreateTradingOrderEvent.reified = function () {
        var _this = this;
        return {
            typeName: CreateTradingOrderEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([CreateTradingOrderEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return CreateTradingOrderEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return CreateTradingOrderEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return CreateTradingOrderEvent.fromBcs(data); },
            bcs: CreateTradingOrderEvent.bcs,
            fromJSONField: function (field) { return CreateTradingOrderEvent.fromJSONField(field); },
            fromJSON: function (json) { return CreateTradingOrderEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return CreateTradingOrderEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, CreateTradingOrderEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new CreateTradingOrderEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(CreateTradingOrderEvent, "r", {
        get: function () {
            return CreateTradingOrderEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    CreateTradingOrderEvent.phantom = function () {
        return (0, reified_1.phantom)(CreateTradingOrderEvent.reified());
    };
    Object.defineProperty(CreateTradingOrderEvent, "p", {
        get: function () {
            return CreateTradingOrderEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateTradingOrderEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("CreateTradingOrderEvent", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                market_index: bcs_1.bcs.u64(),
                pool_index: bcs_1.bcs.u64(),
                collateral_token: structs_2.TypeName.bcs,
                base_token: structs_2.TypeName.bcs,
                linked_position_id: structs_1.Option.bcs(bcs_1.bcs.u64()),
                collateral_amount: bcs_1.bcs.u64(),
                leverage_pct: bcs_1.bcs.u64(),
                reduce_only: bcs_1.bcs.bool(),
                is_long: bcs_1.bcs.bool(),
                is_stop_order: bcs_1.bcs.bool(),
                size: bcs_1.bcs.u64(),
                trigger_price: bcs_1.bcs.u64(),
                filled: bcs_1.bcs.bool(),
                filled_price: structs_1.Option.bcs(bcs_1.bcs.u64()),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    CreateTradingOrderEvent.fromFields = function (fields) {
        return CreateTradingOrderEvent.reified().new({
            user: (0, reified_1.decodeFromFields)("address", fields.user),
            marketIndex: (0, reified_1.decodeFromFields)("u64", fields.market_index),
            poolIndex: (0, reified_1.decodeFromFields)("u64", fields.pool_index),
            collateralToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.collateral_token),
            baseToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.base_token),
            linkedPositionId: (0, reified_1.decodeFromFields)(structs_1.Option.reified("u64"), fields.linked_position_id),
            collateralAmount: (0, reified_1.decodeFromFields)("u64", fields.collateral_amount),
            leveragePct: (0, reified_1.decodeFromFields)("u64", fields.leverage_pct),
            reduceOnly: (0, reified_1.decodeFromFields)("bool", fields.reduce_only),
            isLong: (0, reified_1.decodeFromFields)("bool", fields.is_long),
            isStopOrder: (0, reified_1.decodeFromFields)("bool", fields.is_stop_order),
            size: (0, reified_1.decodeFromFields)("u64", fields.size),
            triggerPrice: (0, reified_1.decodeFromFields)("u64", fields.trigger_price),
            filled: (0, reified_1.decodeFromFields)("bool", fields.filled),
            filledPrice: (0, reified_1.decodeFromFields)(structs_1.Option.reified("u64"), fields.filled_price),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    CreateTradingOrderEvent.fromFieldsWithTypes = function (item) {
        if (!isCreateTradingOrderEvent(item.type)) {
            throw new Error("not a CreateTradingOrderEvent type");
        }
        return CreateTradingOrderEvent.reified().new({
            user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user),
            marketIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.market_index),
            poolIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.pool_index),
            collateralToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.collateral_token),
            baseToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.base_token),
            linkedPositionId: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("u64"), item.fields.linked_position_id),
            collateralAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.collateral_amount),
            leveragePct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.leverage_pct),
            reduceOnly: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.reduce_only),
            isLong: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_long),
            isStopOrder: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_stop_order),
            size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size),
            triggerPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.trigger_price),
            filled: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.filled),
            filledPrice: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("u64"), item.fields.filled_price),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    CreateTradingOrderEvent.fromBcs = function (data) {
        return CreateTradingOrderEvent.fromFields(CreateTradingOrderEvent.bcs.parse(data));
    };
    CreateTradingOrderEvent.prototype.toJSONField = function () {
        return {
            user: this.user,
            marketIndex: this.marketIndex.toString(),
            poolIndex: this.poolIndex.toString(),
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            linkedPositionId: (0, reified_1.fieldToJSON)("0x1::option::Option<u64>", this.linkedPositionId),
            collateralAmount: this.collateralAmount.toString(),
            leveragePct: this.leveragePct.toString(),
            reduceOnly: this.reduceOnly,
            isLong: this.isLong,
            isStopOrder: this.isStopOrder,
            size: this.size.toString(),
            triggerPrice: this.triggerPrice.toString(),
            filled: this.filled,
            filledPrice: (0, reified_1.fieldToJSON)("0x1::option::Option<u64>", this.filledPrice),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    CreateTradingOrderEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    CreateTradingOrderEvent.fromJSONField = function (field) {
        return CreateTradingOrderEvent.reified().new({
            user: (0, reified_1.decodeFromJSONField)("address", field.user),
            marketIndex: (0, reified_1.decodeFromJSONField)("u64", field.marketIndex),
            poolIndex: (0, reified_1.decodeFromJSONField)("u64", field.poolIndex),
            collateralToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.collateralToken),
            baseToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.baseToken),
            linkedPositionId: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("u64"), field.linkedPositionId),
            collateralAmount: (0, reified_1.decodeFromJSONField)("u64", field.collateralAmount),
            leveragePct: (0, reified_1.decodeFromJSONField)("u64", field.leveragePct),
            reduceOnly: (0, reified_1.decodeFromJSONField)("bool", field.reduceOnly),
            isLong: (0, reified_1.decodeFromJSONField)("bool", field.isLong),
            isStopOrder: (0, reified_1.decodeFromJSONField)("bool", field.isStopOrder),
            size: (0, reified_1.decodeFromJSONField)("u64", field.size),
            triggerPrice: (0, reified_1.decodeFromJSONField)("u64", field.triggerPrice),
            filled: (0, reified_1.decodeFromJSONField)("bool", field.filled),
            filledPrice: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("u64"), field.filledPrice),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    CreateTradingOrderEvent.fromJSON = function (json) {
        if (json.$typeName !== CreateTradingOrderEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return CreateTradingOrderEvent.fromJSONField(json);
    };
    CreateTradingOrderEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCreateTradingOrderEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a CreateTradingOrderEvent object"));
        }
        return CreateTradingOrderEvent.fromFieldsWithTypes(content);
    };
    CreateTradingOrderEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching CreateTradingOrderEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCreateTradingOrderEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a CreateTradingOrderEvent object"));
                        }
                        return [2 /*return*/, CreateTradingOrderEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    CreateTradingOrderEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CreateTradingOrderEvent";
    CreateTradingOrderEvent.$numTypeParams = 0;
    return CreateTradingOrderEvent;
}());
exports.CreateTradingOrderEvent = CreateTradingOrderEvent;
/* ============================== CreateTradingOrderWithBidReceiptsEvent =============================== */
function isCreateTradingOrderWithBidReceiptsEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CreateTradingOrderWithBidReceiptsEvent";
}
var CreateTradingOrderWithBidReceiptsEvent = /** @class */ (function () {
    function CreateTradingOrderWithBidReceiptsEvent(typeArgs, fields) {
        this.$typeName = CreateTradingOrderWithBidReceiptsEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([CreateTradingOrderWithBidReceiptsEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        this.marketIndex = fields.marketIndex;
        this.poolIndex = fields.poolIndex;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.collateralInDepositToken = fields.collateralInDepositToken;
        this.isLong = fields.isLong;
        this.size = fields.size;
        this.triggerPrice = fields.triggerPrice;
        this.filled = fields.filled;
        this.filledPrice = fields.filledPrice;
        this.u64Padding = fields.u64Padding;
    }
    CreateTradingOrderWithBidReceiptsEvent.reified = function () {
        var _this = this;
        return {
            typeName: CreateTradingOrderWithBidReceiptsEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([CreateTradingOrderWithBidReceiptsEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return CreateTradingOrderWithBidReceiptsEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return CreateTradingOrderWithBidReceiptsEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return CreateTradingOrderWithBidReceiptsEvent.fromBcs(data); },
            bcs: CreateTradingOrderWithBidReceiptsEvent.bcs,
            fromJSONField: function (field) { return CreateTradingOrderWithBidReceiptsEvent.fromJSONField(field); },
            fromJSON: function (json) { return CreateTradingOrderWithBidReceiptsEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return CreateTradingOrderWithBidReceiptsEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, CreateTradingOrderWithBidReceiptsEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new CreateTradingOrderWithBidReceiptsEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(CreateTradingOrderWithBidReceiptsEvent, "r", {
        get: function () {
            return CreateTradingOrderWithBidReceiptsEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    CreateTradingOrderWithBidReceiptsEvent.phantom = function () {
        return (0, reified_1.phantom)(CreateTradingOrderWithBidReceiptsEvent.reified());
    };
    Object.defineProperty(CreateTradingOrderWithBidReceiptsEvent, "p", {
        get: function () {
            return CreateTradingOrderWithBidReceiptsEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateTradingOrderWithBidReceiptsEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("CreateTradingOrderWithBidReceiptsEvent", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                market_index: bcs_1.bcs.u64(),
                pool_index: bcs_1.bcs.u64(),
                collateral_token: structs_2.TypeName.bcs,
                base_token: structs_2.TypeName.bcs,
                collateral_in_deposit_token: bcs_1.bcs.u64(),
                is_long: bcs_1.bcs.bool(),
                size: bcs_1.bcs.u64(),
                trigger_price: bcs_1.bcs.u64(),
                filled: bcs_1.bcs.bool(),
                filled_price: structs_1.Option.bcs(bcs_1.bcs.u64()),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    CreateTradingOrderWithBidReceiptsEvent.fromFields = function (fields) {
        return CreateTradingOrderWithBidReceiptsEvent.reified().new({
            user: (0, reified_1.decodeFromFields)("address", fields.user),
            marketIndex: (0, reified_1.decodeFromFields)("u64", fields.market_index),
            poolIndex: (0, reified_1.decodeFromFields)("u64", fields.pool_index),
            collateralToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.collateral_token),
            baseToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.base_token),
            collateralInDepositToken: (0, reified_1.decodeFromFields)("u64", fields.collateral_in_deposit_token),
            isLong: (0, reified_1.decodeFromFields)("bool", fields.is_long),
            size: (0, reified_1.decodeFromFields)("u64", fields.size),
            triggerPrice: (0, reified_1.decodeFromFields)("u64", fields.trigger_price),
            filled: (0, reified_1.decodeFromFields)("bool", fields.filled),
            filledPrice: (0, reified_1.decodeFromFields)(structs_1.Option.reified("u64"), fields.filled_price),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    CreateTradingOrderWithBidReceiptsEvent.fromFieldsWithTypes = function (item) {
        if (!isCreateTradingOrderWithBidReceiptsEvent(item.type)) {
            throw new Error("not a CreateTradingOrderWithBidReceiptsEvent type");
        }
        return CreateTradingOrderWithBidReceiptsEvent.reified().new({
            user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user),
            marketIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.market_index),
            poolIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.pool_index),
            collateralToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.collateral_token),
            baseToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.base_token),
            collateralInDepositToken: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.collateral_in_deposit_token),
            isLong: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_long),
            size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size),
            triggerPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.trigger_price),
            filled: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.filled),
            filledPrice: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("u64"), item.fields.filled_price),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    CreateTradingOrderWithBidReceiptsEvent.fromBcs = function (data) {
        return CreateTradingOrderWithBidReceiptsEvent.fromFields(CreateTradingOrderWithBidReceiptsEvent.bcs.parse(data));
    };
    CreateTradingOrderWithBidReceiptsEvent.prototype.toJSONField = function () {
        return {
            user: this.user,
            marketIndex: this.marketIndex.toString(),
            poolIndex: this.poolIndex.toString(),
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            collateralInDepositToken: this.collateralInDepositToken.toString(),
            isLong: this.isLong,
            size: this.size.toString(),
            triggerPrice: this.triggerPrice.toString(),
            filled: this.filled,
            filledPrice: (0, reified_1.fieldToJSON)("0x1::option::Option<u64>", this.filledPrice),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    CreateTradingOrderWithBidReceiptsEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    CreateTradingOrderWithBidReceiptsEvent.fromJSONField = function (field) {
        return CreateTradingOrderWithBidReceiptsEvent.reified().new({
            user: (0, reified_1.decodeFromJSONField)("address", field.user),
            marketIndex: (0, reified_1.decodeFromJSONField)("u64", field.marketIndex),
            poolIndex: (0, reified_1.decodeFromJSONField)("u64", field.poolIndex),
            collateralToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.collateralToken),
            baseToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.baseToken),
            collateralInDepositToken: (0, reified_1.decodeFromJSONField)("u64", field.collateralInDepositToken),
            isLong: (0, reified_1.decodeFromJSONField)("bool", field.isLong),
            size: (0, reified_1.decodeFromJSONField)("u64", field.size),
            triggerPrice: (0, reified_1.decodeFromJSONField)("u64", field.triggerPrice),
            filled: (0, reified_1.decodeFromJSONField)("bool", field.filled),
            filledPrice: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("u64"), field.filledPrice),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    CreateTradingOrderWithBidReceiptsEvent.fromJSON = function (json) {
        if (json.$typeName !== CreateTradingOrderWithBidReceiptsEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return CreateTradingOrderWithBidReceiptsEvent.fromJSONField(json);
    };
    CreateTradingOrderWithBidReceiptsEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCreateTradingOrderWithBidReceiptsEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a CreateTradingOrderWithBidReceiptsEvent object"));
        }
        return CreateTradingOrderWithBidReceiptsEvent.fromFieldsWithTypes(content);
    };
    CreateTradingOrderWithBidReceiptsEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching CreateTradingOrderWithBidReceiptsEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCreateTradingOrderWithBidReceiptsEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a CreateTradingOrderWithBidReceiptsEvent object"));
                        }
                        return [2 /*return*/, CreateTradingOrderWithBidReceiptsEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    CreateTradingOrderWithBidReceiptsEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::CreateTradingOrderWithBidReceiptsEvent";
    CreateTradingOrderWithBidReceiptsEvent.$numTypeParams = 0;
    return CreateTradingOrderWithBidReceiptsEvent;
}());
exports.CreateTradingOrderWithBidReceiptsEvent = CreateTradingOrderWithBidReceiptsEvent;
/* ============================== IncreaseCollateralEvent =============================== */
function isIncreaseCollateralEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::IncreaseCollateralEvent";
}
var IncreaseCollateralEvent = /** @class */ (function () {
    function IncreaseCollateralEvent(typeArgs, fields) {
        this.$typeName = IncreaseCollateralEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([IncreaseCollateralEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        this.marketIndex = fields.marketIndex;
        this.poolIndex = fields.poolIndex;
        this.positionId = fields.positionId;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.increasedCollateralAmount = fields.increasedCollateralAmount;
        this.remainingCollateralAmount = fields.remainingCollateralAmount;
        this.u64Padding = fields.u64Padding;
    }
    IncreaseCollateralEvent.reified = function () {
        var _this = this;
        return {
            typeName: IncreaseCollateralEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([IncreaseCollateralEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return IncreaseCollateralEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return IncreaseCollateralEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return IncreaseCollateralEvent.fromBcs(data); },
            bcs: IncreaseCollateralEvent.bcs,
            fromJSONField: function (field) { return IncreaseCollateralEvent.fromJSONField(field); },
            fromJSON: function (json) { return IncreaseCollateralEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return IncreaseCollateralEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, IncreaseCollateralEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new IncreaseCollateralEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(IncreaseCollateralEvent, "r", {
        get: function () {
            return IncreaseCollateralEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    IncreaseCollateralEvent.phantom = function () {
        return (0, reified_1.phantom)(IncreaseCollateralEvent.reified());
    };
    Object.defineProperty(IncreaseCollateralEvent, "p", {
        get: function () {
            return IncreaseCollateralEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IncreaseCollateralEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("IncreaseCollateralEvent", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                market_index: bcs_1.bcs.u64(),
                pool_index: bcs_1.bcs.u64(),
                position_id: bcs_1.bcs.u64(),
                collateral_token: structs_2.TypeName.bcs,
                base_token: structs_2.TypeName.bcs,
                increased_collateral_amount: bcs_1.bcs.u64(),
                remaining_collateral_amount: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    IncreaseCollateralEvent.fromFields = function (fields) {
        return IncreaseCollateralEvent.reified().new({
            user: (0, reified_1.decodeFromFields)("address", fields.user),
            marketIndex: (0, reified_1.decodeFromFields)("u64", fields.market_index),
            poolIndex: (0, reified_1.decodeFromFields)("u64", fields.pool_index),
            positionId: (0, reified_1.decodeFromFields)("u64", fields.position_id),
            collateralToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.collateral_token),
            baseToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.base_token),
            increasedCollateralAmount: (0, reified_1.decodeFromFields)("u64", fields.increased_collateral_amount),
            remainingCollateralAmount: (0, reified_1.decodeFromFields)("u64", fields.remaining_collateral_amount),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    IncreaseCollateralEvent.fromFieldsWithTypes = function (item) {
        if (!isIncreaseCollateralEvent(item.type)) {
            throw new Error("not a IncreaseCollateralEvent type");
        }
        return IncreaseCollateralEvent.reified().new({
            user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user),
            marketIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.market_index),
            poolIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.pool_index),
            positionId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.position_id),
            collateralToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.collateral_token),
            baseToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.base_token),
            increasedCollateralAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.increased_collateral_amount),
            remainingCollateralAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.remaining_collateral_amount),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    IncreaseCollateralEvent.fromBcs = function (data) {
        return IncreaseCollateralEvent.fromFields(IncreaseCollateralEvent.bcs.parse(data));
    };
    IncreaseCollateralEvent.prototype.toJSONField = function () {
        return {
            user: this.user,
            marketIndex: this.marketIndex.toString(),
            poolIndex: this.poolIndex.toString(),
            positionId: this.positionId.toString(),
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            increasedCollateralAmount: this.increasedCollateralAmount.toString(),
            remainingCollateralAmount: this.remainingCollateralAmount.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    IncreaseCollateralEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    IncreaseCollateralEvent.fromJSONField = function (field) {
        return IncreaseCollateralEvent.reified().new({
            user: (0, reified_1.decodeFromJSONField)("address", field.user),
            marketIndex: (0, reified_1.decodeFromJSONField)("u64", field.marketIndex),
            poolIndex: (0, reified_1.decodeFromJSONField)("u64", field.poolIndex),
            positionId: (0, reified_1.decodeFromJSONField)("u64", field.positionId),
            collateralToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.collateralToken),
            baseToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.baseToken),
            increasedCollateralAmount: (0, reified_1.decodeFromJSONField)("u64", field.increasedCollateralAmount),
            remainingCollateralAmount: (0, reified_1.decodeFromJSONField)("u64", field.remainingCollateralAmount),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    IncreaseCollateralEvent.fromJSON = function (json) {
        if (json.$typeName !== IncreaseCollateralEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return IncreaseCollateralEvent.fromJSONField(json);
    };
    IncreaseCollateralEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isIncreaseCollateralEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a IncreaseCollateralEvent object"));
        }
        return IncreaseCollateralEvent.fromFieldsWithTypes(content);
    };
    IncreaseCollateralEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching IncreaseCollateralEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isIncreaseCollateralEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a IncreaseCollateralEvent object"));
                        }
                        return [2 /*return*/, IncreaseCollateralEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    IncreaseCollateralEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::IncreaseCollateralEvent";
    IncreaseCollateralEvent.$numTypeParams = 0;
    return IncreaseCollateralEvent;
}());
exports.IncreaseCollateralEvent = IncreaseCollateralEvent;
/* ============================== LinkedOrdersInfo =============================== */
function isLinkedOrdersInfo(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::LinkedOrdersInfo";
}
var LinkedOrdersInfo = /** @class */ (function () {
    function LinkedOrdersInfo(typeArgs, fields) {
        this.$typeName = LinkedOrdersInfo.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([LinkedOrdersInfo.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.users = fields.users;
        this.ids = fields.ids;
        this.prices = fields.prices;
        this.u64Padding = fields.u64Padding;
    }
    LinkedOrdersInfo.reified = function () {
        var _this = this;
        return {
            typeName: LinkedOrdersInfo.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([LinkedOrdersInfo.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return LinkedOrdersInfo.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return LinkedOrdersInfo.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return LinkedOrdersInfo.fromBcs(data); },
            bcs: LinkedOrdersInfo.bcs,
            fromJSONField: function (field) { return LinkedOrdersInfo.fromJSONField(field); },
            fromJSON: function (json) { return LinkedOrdersInfo.fromJSON(json); },
            fromSuiParsedData: function (content) { return LinkedOrdersInfo.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, LinkedOrdersInfo.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new LinkedOrdersInfo([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(LinkedOrdersInfo, "r", {
        get: function () {
            return LinkedOrdersInfo.reified();
        },
        enumerable: false,
        configurable: true
    });
    LinkedOrdersInfo.phantom = function () {
        return (0, reified_1.phantom)(LinkedOrdersInfo.reified());
    };
    Object.defineProperty(LinkedOrdersInfo, "p", {
        get: function () {
            return LinkedOrdersInfo.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkedOrdersInfo, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("LinkedOrdersInfo", {
                users: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } })),
                ids: bcs_1.bcs.vector(bcs_1.bcs.vector(bcs_1.bcs.u64())),
                prices: bcs_1.bcs.vector(bcs_1.bcs.vector(bcs_1.bcs.u64())),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    LinkedOrdersInfo.fromFields = function (fields) {
        return LinkedOrdersInfo.reified().new({
            users: (0, reified_1.decodeFromFields)(reified.vector("address"), fields.users),
            ids: (0, reified_1.decodeFromFields)(reified.vector(reified.vector("u64")), fields.ids),
            prices: (0, reified_1.decodeFromFields)(reified.vector(reified.vector("u64")), fields.prices),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    LinkedOrdersInfo.fromFieldsWithTypes = function (item) {
        if (!isLinkedOrdersInfo(item.type)) {
            throw new Error("not a LinkedOrdersInfo type");
        }
        return LinkedOrdersInfo.reified().new({
            users: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("address"), item.fields.users),
            ids: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector("u64")), item.fields.ids),
            prices: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector("u64")), item.fields.prices),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    LinkedOrdersInfo.fromBcs = function (data) {
        return LinkedOrdersInfo.fromFields(LinkedOrdersInfo.bcs.parse(data));
    };
    LinkedOrdersInfo.prototype.toJSONField = function () {
        return {
            users: (0, reified_1.fieldToJSON)("vector<address>", this.users),
            ids: (0, reified_1.fieldToJSON)("vector<vector<u64>>", this.ids),
            prices: (0, reified_1.fieldToJSON)("vector<vector<u64>>", this.prices),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    LinkedOrdersInfo.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    LinkedOrdersInfo.fromJSONField = function (field) {
        return LinkedOrdersInfo.reified().new({
            users: (0, reified_1.decodeFromJSONField)(reified.vector("address"), field.users),
            ids: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector("u64")), field.ids),
            prices: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector("u64")), field.prices),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    LinkedOrdersInfo.fromJSON = function (json) {
        if (json.$typeName !== LinkedOrdersInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return LinkedOrdersInfo.fromJSONField(json);
    };
    LinkedOrdersInfo.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLinkedOrdersInfo(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a LinkedOrdersInfo object"));
        }
        return LinkedOrdersInfo.fromFieldsWithTypes(content);
    };
    LinkedOrdersInfo.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching LinkedOrdersInfo object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLinkedOrdersInfo(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a LinkedOrdersInfo object"));
                        }
                        return [2 /*return*/, LinkedOrdersInfo.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    LinkedOrdersInfo.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::LinkedOrdersInfo";
    LinkedOrdersInfo.$numTypeParams = 0;
    return LinkedOrdersInfo;
}());
exports.LinkedOrdersInfo = LinkedOrdersInfo;
/* ============================== LiquidateEvent =============================== */
function isLiquidateEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::LiquidateEvent";
}
var LiquidateEvent = /** @class */ (function () {
    function LiquidateEvent(typeArgs, fields) {
        this.$typeName = LiquidateEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([LiquidateEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.positionId = fields.positionId;
        this.collateralPrice = fields.collateralPrice;
        this.tradingPrice = fields.tradingPrice;
        this.liquidatorFeeValue = fields.liquidatorFeeValue;
        this.u64Padding = fields.u64Padding;
    }
    LiquidateEvent.reified = function () {
        var _this = this;
        return {
            typeName: LiquidateEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([LiquidateEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return LiquidateEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return LiquidateEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return LiquidateEvent.fromBcs(data); },
            bcs: LiquidateEvent.bcs,
            fromJSONField: function (field) { return LiquidateEvent.fromJSONField(field); },
            fromJSON: function (json) { return LiquidateEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return LiquidateEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, LiquidateEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new LiquidateEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(LiquidateEvent, "r", {
        get: function () {
            return LiquidateEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    LiquidateEvent.phantom = function () {
        return (0, reified_1.phantom)(LiquidateEvent.reified());
    };
    Object.defineProperty(LiquidateEvent, "p", {
        get: function () {
            return LiquidateEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LiquidateEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("LiquidateEvent", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                collateral_token: structs_2.TypeName.bcs,
                base_token: structs_2.TypeName.bcs,
                position_id: bcs_1.bcs.u64(),
                collateral_price: bcs_1.bcs.u64(),
                trading_price: bcs_1.bcs.u64(),
                liquidator_fee_value: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    LiquidateEvent.fromFields = function (fields) {
        return LiquidateEvent.reified().new({
            user: (0, reified_1.decodeFromFields)("address", fields.user),
            collateralToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.collateral_token),
            baseToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.base_token),
            positionId: (0, reified_1.decodeFromFields)("u64", fields.position_id),
            collateralPrice: (0, reified_1.decodeFromFields)("u64", fields.collateral_price),
            tradingPrice: (0, reified_1.decodeFromFields)("u64", fields.trading_price),
            liquidatorFeeValue: (0, reified_1.decodeFromFields)("u64", fields.liquidator_fee_value),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    LiquidateEvent.fromFieldsWithTypes = function (item) {
        if (!isLiquidateEvent(item.type)) {
            throw new Error("not a LiquidateEvent type");
        }
        return LiquidateEvent.reified().new({
            user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user),
            collateralToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.collateral_token),
            baseToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.base_token),
            positionId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.position_id),
            collateralPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.collateral_price),
            tradingPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.trading_price),
            liquidatorFeeValue: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.liquidator_fee_value),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    LiquidateEvent.fromBcs = function (data) {
        return LiquidateEvent.fromFields(LiquidateEvent.bcs.parse(data));
    };
    LiquidateEvent.prototype.toJSONField = function () {
        return {
            user: this.user,
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            positionId: this.positionId.toString(),
            collateralPrice: this.collateralPrice.toString(),
            tradingPrice: this.tradingPrice.toString(),
            liquidatorFeeValue: this.liquidatorFeeValue.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    LiquidateEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    LiquidateEvent.fromJSONField = function (field) {
        return LiquidateEvent.reified().new({
            user: (0, reified_1.decodeFromJSONField)("address", field.user),
            collateralToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.collateralToken),
            baseToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.baseToken),
            positionId: (0, reified_1.decodeFromJSONField)("u64", field.positionId),
            collateralPrice: (0, reified_1.decodeFromJSONField)("u64", field.collateralPrice),
            tradingPrice: (0, reified_1.decodeFromJSONField)("u64", field.tradingPrice),
            liquidatorFeeValue: (0, reified_1.decodeFromJSONField)("u64", field.liquidatorFeeValue),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    LiquidateEvent.fromJSON = function (json) {
        if (json.$typeName !== LiquidateEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return LiquidateEvent.fromJSONField(json);
    };
    LiquidateEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLiquidateEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a LiquidateEvent object"));
        }
        return LiquidateEvent.fromFieldsWithTypes(content);
    };
    LiquidateEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching LiquidateEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLiquidateEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a LiquidateEvent object"));
                        }
                        return [2 /*return*/, LiquidateEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    LiquidateEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::LiquidateEvent";
    LiquidateEvent.$numTypeParams = 0;
    return LiquidateEvent;
}());
exports.LiquidateEvent = LiquidateEvent;
/* ============================== ManagerReducePosition =============================== */
function isManagerReducePosition(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ManagerReducePosition";
}
var ManagerReducePosition = /** @class */ (function () {
    function ManagerReducePosition(typeArgs, fields) {
        this.$typeName = ManagerReducePosition.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ManagerReducePosition.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.positionId = fields.positionId;
        this.reducedSize = fields.reducedSize;
        this.collateralPrice = fields.collateralPrice;
        this.tradingPrice = fields.tradingPrice;
        this.cancelledOrderIds = fields.cancelledOrderIds;
        this.u64Padding = fields.u64Padding;
    }
    ManagerReducePosition.reified = function () {
        var _this = this;
        return {
            typeName: ManagerReducePosition.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ManagerReducePosition.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return ManagerReducePosition.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return ManagerReducePosition.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return ManagerReducePosition.fromBcs(data); },
            bcs: ManagerReducePosition.bcs,
            fromJSONField: function (field) { return ManagerReducePosition.fromJSONField(field); },
            fromJSON: function (json) { return ManagerReducePosition.fromJSON(json); },
            fromSuiParsedData: function (content) { return ManagerReducePosition.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ManagerReducePosition.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new ManagerReducePosition([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(ManagerReducePosition, "r", {
        get: function () {
            return ManagerReducePosition.reified();
        },
        enumerable: false,
        configurable: true
    });
    ManagerReducePosition.phantom = function () {
        return (0, reified_1.phantom)(ManagerReducePosition.reified());
    };
    Object.defineProperty(ManagerReducePosition, "p", {
        get: function () {
            return ManagerReducePosition.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagerReducePosition, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ManagerReducePosition", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                collateral_token: structs_2.TypeName.bcs,
                base_token: structs_2.TypeName.bcs,
                position_id: bcs_1.bcs.u64(),
                reduced_size: bcs_1.bcs.u64(),
                collateral_price: bcs_1.bcs.u64(),
                trading_price: bcs_1.bcs.u64(),
                cancelled_order_ids: bcs_1.bcs.vector(bcs_1.bcs.u64()),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    ManagerReducePosition.fromFields = function (fields) {
        return ManagerReducePosition.reified().new({
            user: (0, reified_1.decodeFromFields)("address", fields.user),
            collateralToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.collateral_token),
            baseToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.base_token),
            positionId: (0, reified_1.decodeFromFields)("u64", fields.position_id),
            reducedSize: (0, reified_1.decodeFromFields)("u64", fields.reduced_size),
            collateralPrice: (0, reified_1.decodeFromFields)("u64", fields.collateral_price),
            tradingPrice: (0, reified_1.decodeFromFields)("u64", fields.trading_price),
            cancelledOrderIds: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.cancelled_order_ids),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    ManagerReducePosition.fromFieldsWithTypes = function (item) {
        if (!isManagerReducePosition(item.type)) {
            throw new Error("not a ManagerReducePosition type");
        }
        return ManagerReducePosition.reified().new({
            user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user),
            collateralToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.collateral_token),
            baseToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.base_token),
            positionId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.position_id),
            reducedSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.reduced_size),
            collateralPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.collateral_price),
            tradingPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.trading_price),
            cancelledOrderIds: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.cancelled_order_ids),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    ManagerReducePosition.fromBcs = function (data) {
        return ManagerReducePosition.fromFields(ManagerReducePosition.bcs.parse(data));
    };
    ManagerReducePosition.prototype.toJSONField = function () {
        return {
            user: this.user,
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            positionId: this.positionId.toString(),
            reducedSize: this.reducedSize.toString(),
            collateralPrice: this.collateralPrice.toString(),
            tradingPrice: this.tradingPrice.toString(),
            cancelledOrderIds: (0, reified_1.fieldToJSON)("vector<u64>", this.cancelledOrderIds),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    ManagerReducePosition.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    ManagerReducePosition.fromJSONField = function (field) {
        return ManagerReducePosition.reified().new({
            user: (0, reified_1.decodeFromJSONField)("address", field.user),
            collateralToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.collateralToken),
            baseToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.baseToken),
            positionId: (0, reified_1.decodeFromJSONField)("u64", field.positionId),
            reducedSize: (0, reified_1.decodeFromJSONField)("u64", field.reducedSize),
            collateralPrice: (0, reified_1.decodeFromJSONField)("u64", field.collateralPrice),
            tradingPrice: (0, reified_1.decodeFromJSONField)("u64", field.tradingPrice),
            cancelledOrderIds: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.cancelledOrderIds),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    ManagerReducePosition.fromJSON = function (json) {
        if (json.$typeName !== ManagerReducePosition.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return ManagerReducePosition.fromJSONField(json);
    };
    ManagerReducePosition.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isManagerReducePosition(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a ManagerReducePosition object"));
        }
        return ManagerReducePosition.fromFieldsWithTypes(content);
    };
    ManagerReducePosition.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ManagerReducePosition object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isManagerReducePosition(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ManagerReducePosition object"));
                        }
                        return [2 /*return*/, ManagerReducePosition.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ManagerReducePosition.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ManagerReducePosition";
    ManagerReducePosition.$numTypeParams = 0;
    return ManagerReducePosition;
}());
exports.ManagerReducePosition = ManagerReducePosition;
/* ============================== MarketConfig =============================== */
function isMarketConfig(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketConfig";
}
var MarketConfig = /** @class */ (function () {
    function MarketConfig(typeArgs, fields) {
        this.$typeName = MarketConfig.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([MarketConfig.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.oracleId = fields.oracleId;
        this.maxLeveragePct = fields.maxLeveragePct;
        this.minSize = fields.minSize;
        this.lotSize = fields.lotSize;
        this.tradingFeeRate = fields.tradingFeeRate;
        this.tradingFeeDecimal = fields.tradingFeeDecimal;
        this.basicFundingRate = fields.basicFundingRate;
        this.fundingIntervalTsMs = fields.fundingIntervalTsMs;
        this.u64Padding = fields.u64Padding;
    }
    MarketConfig.reified = function () {
        var _this = this;
        return {
            typeName: MarketConfig.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([MarketConfig.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return MarketConfig.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return MarketConfig.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return MarketConfig.fromBcs(data); },
            bcs: MarketConfig.bcs,
            fromJSONField: function (field) { return MarketConfig.fromJSONField(field); },
            fromJSON: function (json) { return MarketConfig.fromJSON(json); },
            fromSuiParsedData: function (content) { return MarketConfig.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, MarketConfig.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new MarketConfig([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(MarketConfig, "r", {
        get: function () {
            return MarketConfig.reified();
        },
        enumerable: false,
        configurable: true
    });
    MarketConfig.phantom = function () {
        return (0, reified_1.phantom)(MarketConfig.reified());
    };
    Object.defineProperty(MarketConfig, "p", {
        get: function () {
            return MarketConfig.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketConfig, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("MarketConfig", {
                oracle_id: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                max_leverage_pct: bcs_1.bcs.u64(),
                min_size: bcs_1.bcs.u64(),
                lot_size: bcs_1.bcs.u64(),
                trading_fee_rate: bcs_1.bcs.u64(),
                trading_fee_decimal: bcs_1.bcs.u64(),
                basic_funding_rate: bcs_1.bcs.u64(),
                funding_interval_ts_ms: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    MarketConfig.fromFields = function (fields) {
        return MarketConfig.reified().new({
            oracleId: (0, reified_1.decodeFromFields)("address", fields.oracle_id),
            maxLeveragePct: (0, reified_1.decodeFromFields)("u64", fields.max_leverage_pct),
            minSize: (0, reified_1.decodeFromFields)("u64", fields.min_size),
            lotSize: (0, reified_1.decodeFromFields)("u64", fields.lot_size),
            tradingFeeRate: (0, reified_1.decodeFromFields)("u64", fields.trading_fee_rate),
            tradingFeeDecimal: (0, reified_1.decodeFromFields)("u64", fields.trading_fee_decimal),
            basicFundingRate: (0, reified_1.decodeFromFields)("u64", fields.basic_funding_rate),
            fundingIntervalTsMs: (0, reified_1.decodeFromFields)("u64", fields.funding_interval_ts_ms),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    MarketConfig.fromFieldsWithTypes = function (item) {
        if (!isMarketConfig(item.type)) {
            throw new Error("not a MarketConfig type");
        }
        return MarketConfig.reified().new({
            oracleId: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.oracle_id),
            maxLeveragePct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_leverage_pct),
            minSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_size),
            lotSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.lot_size),
            tradingFeeRate: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.trading_fee_rate),
            tradingFeeDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.trading_fee_decimal),
            basicFundingRate: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.basic_funding_rate),
            fundingIntervalTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.funding_interval_ts_ms),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    MarketConfig.fromBcs = function (data) {
        return MarketConfig.fromFields(MarketConfig.bcs.parse(data));
    };
    MarketConfig.prototype.toJSONField = function () {
        return {
            oracleId: this.oracleId,
            maxLeveragePct: this.maxLeveragePct.toString(),
            minSize: this.minSize.toString(),
            lotSize: this.lotSize.toString(),
            tradingFeeRate: this.tradingFeeRate.toString(),
            tradingFeeDecimal: this.tradingFeeDecimal.toString(),
            basicFundingRate: this.basicFundingRate.toString(),
            fundingIntervalTsMs: this.fundingIntervalTsMs.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    MarketConfig.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    MarketConfig.fromJSONField = function (field) {
        return MarketConfig.reified().new({
            oracleId: (0, reified_1.decodeFromJSONField)("address", field.oracleId),
            maxLeveragePct: (0, reified_1.decodeFromJSONField)("u64", field.maxLeveragePct),
            minSize: (0, reified_1.decodeFromJSONField)("u64", field.minSize),
            lotSize: (0, reified_1.decodeFromJSONField)("u64", field.lotSize),
            tradingFeeRate: (0, reified_1.decodeFromJSONField)("u64", field.tradingFeeRate),
            tradingFeeDecimal: (0, reified_1.decodeFromJSONField)("u64", field.tradingFeeDecimal),
            basicFundingRate: (0, reified_1.decodeFromJSONField)("u64", field.basicFundingRate),
            fundingIntervalTsMs: (0, reified_1.decodeFromJSONField)("u64", field.fundingIntervalTsMs),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    MarketConfig.fromJSON = function (json) {
        if (json.$typeName !== MarketConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return MarketConfig.fromJSONField(json);
    };
    MarketConfig.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMarketConfig(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a MarketConfig object"));
        }
        return MarketConfig.fromFieldsWithTypes(content);
    };
    MarketConfig.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching MarketConfig object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMarketConfig(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a MarketConfig object"));
                        }
                        return [2 /*return*/, MarketConfig.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    MarketConfig.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketConfig";
    MarketConfig.$numTypeParams = 0;
    return MarketConfig;
}());
exports.MarketConfig = MarketConfig;
/* ============================== MarketInfo =============================== */
function isMarketInfo(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketInfo";
}
var MarketInfo = /** @class */ (function () {
    function MarketInfo(typeArgs, fields) {
        this.$typeName = MarketInfo.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([MarketInfo.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.isActive = fields.isActive;
        this.sizeDecimal = fields.sizeDecimal;
        this.userLongPositionSize = fields.userLongPositionSize;
        this.userShortPositionSize = fields.userShortPositionSize;
        this.nextPositionId = fields.nextPositionId;
        this.userLongOrderSize = fields.userLongOrderSize;
        this.userShortOrderSize = fields.userShortOrderSize;
        this.nextOrderId = fields.nextOrderId;
        this.lastFundingTsMs = fields.lastFundingTsMs;
        this.cumulativeFundingRateIndexSign = fields.cumulativeFundingRateIndexSign;
        this.cumulativeFundingRateIndex = fields.cumulativeFundingRateIndex;
        this.previousLastFundingTsMs = fields.previousLastFundingTsMs;
        this.previousCumulativeFundingRateIndexSign = fields.previousCumulativeFundingRateIndexSign;
        this.previousCumulativeFundingRateIndex = fields.previousCumulativeFundingRateIndex;
        this.u64Padding = fields.u64Padding;
    }
    MarketInfo.reified = function () {
        var _this = this;
        return {
            typeName: MarketInfo.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([MarketInfo.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return MarketInfo.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return MarketInfo.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return MarketInfo.fromBcs(data); },
            bcs: MarketInfo.bcs,
            fromJSONField: function (field) { return MarketInfo.fromJSONField(field); },
            fromJSON: function (json) { return MarketInfo.fromJSON(json); },
            fromSuiParsedData: function (content) { return MarketInfo.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, MarketInfo.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new MarketInfo([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(MarketInfo, "r", {
        get: function () {
            return MarketInfo.reified();
        },
        enumerable: false,
        configurable: true
    });
    MarketInfo.phantom = function () {
        return (0, reified_1.phantom)(MarketInfo.reified());
    };
    Object.defineProperty(MarketInfo, "p", {
        get: function () {
            return MarketInfo.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketInfo, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("MarketInfo", {
                is_active: bcs_1.bcs.bool(),
                size_decimal: bcs_1.bcs.u64(),
                user_long_position_size: bcs_1.bcs.u64(),
                user_short_position_size: bcs_1.bcs.u64(),
                next_position_id: bcs_1.bcs.u64(),
                user_long_order_size: bcs_1.bcs.u64(),
                user_short_order_size: bcs_1.bcs.u64(),
                next_order_id: bcs_1.bcs.u64(),
                last_funding_ts_ms: bcs_1.bcs.u64(),
                cumulative_funding_rate_index_sign: bcs_1.bcs.bool(),
                cumulative_funding_rate_index: bcs_1.bcs.u64(),
                previous_last_funding_ts_ms: bcs_1.bcs.u64(),
                previous_cumulative_funding_rate_index_sign: bcs_1.bcs.bool(),
                previous_cumulative_funding_rate_index: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    MarketInfo.fromFields = function (fields) {
        return MarketInfo.reified().new({
            isActive: (0, reified_1.decodeFromFields)("bool", fields.is_active),
            sizeDecimal: (0, reified_1.decodeFromFields)("u64", fields.size_decimal),
            userLongPositionSize: (0, reified_1.decodeFromFields)("u64", fields.user_long_position_size),
            userShortPositionSize: (0, reified_1.decodeFromFields)("u64", fields.user_short_position_size),
            nextPositionId: (0, reified_1.decodeFromFields)("u64", fields.next_position_id),
            userLongOrderSize: (0, reified_1.decodeFromFields)("u64", fields.user_long_order_size),
            userShortOrderSize: (0, reified_1.decodeFromFields)("u64", fields.user_short_order_size),
            nextOrderId: (0, reified_1.decodeFromFields)("u64", fields.next_order_id),
            lastFundingTsMs: (0, reified_1.decodeFromFields)("u64", fields.last_funding_ts_ms),
            cumulativeFundingRateIndexSign: (0, reified_1.decodeFromFields)("bool", fields.cumulative_funding_rate_index_sign),
            cumulativeFundingRateIndex: (0, reified_1.decodeFromFields)("u64", fields.cumulative_funding_rate_index),
            previousLastFundingTsMs: (0, reified_1.decodeFromFields)("u64", fields.previous_last_funding_ts_ms),
            previousCumulativeFundingRateIndexSign: (0, reified_1.decodeFromFields)("bool", fields.previous_cumulative_funding_rate_index_sign),
            previousCumulativeFundingRateIndex: (0, reified_1.decodeFromFields)("u64", fields.previous_cumulative_funding_rate_index),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    MarketInfo.fromFieldsWithTypes = function (item) {
        if (!isMarketInfo(item.type)) {
            throw new Error("not a MarketInfo type");
        }
        return MarketInfo.reified().new({
            isActive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_active),
            sizeDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size_decimal),
            userLongPositionSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.user_long_position_size),
            userShortPositionSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.user_short_position_size),
            nextPositionId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_position_id),
            userLongOrderSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.user_long_order_size),
            userShortOrderSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.user_short_order_size),
            nextOrderId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_order_id),
            lastFundingTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_funding_ts_ms),
            cumulativeFundingRateIndexSign: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.cumulative_funding_rate_index_sign),
            cumulativeFundingRateIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cumulative_funding_rate_index),
            previousLastFundingTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.previous_last_funding_ts_ms),
            previousCumulativeFundingRateIndexSign: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.previous_cumulative_funding_rate_index_sign),
            previousCumulativeFundingRateIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.previous_cumulative_funding_rate_index),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    MarketInfo.fromBcs = function (data) {
        return MarketInfo.fromFields(MarketInfo.bcs.parse(data));
    };
    MarketInfo.prototype.toJSONField = function () {
        return {
            isActive: this.isActive,
            sizeDecimal: this.sizeDecimal.toString(),
            userLongPositionSize: this.userLongPositionSize.toString(),
            userShortPositionSize: this.userShortPositionSize.toString(),
            nextPositionId: this.nextPositionId.toString(),
            userLongOrderSize: this.userLongOrderSize.toString(),
            userShortOrderSize: this.userShortOrderSize.toString(),
            nextOrderId: this.nextOrderId.toString(),
            lastFundingTsMs: this.lastFundingTsMs.toString(),
            cumulativeFundingRateIndexSign: this.cumulativeFundingRateIndexSign,
            cumulativeFundingRateIndex: this.cumulativeFundingRateIndex.toString(),
            previousLastFundingTsMs: this.previousLastFundingTsMs.toString(),
            previousCumulativeFundingRateIndexSign: this.previousCumulativeFundingRateIndexSign,
            previousCumulativeFundingRateIndex: this.previousCumulativeFundingRateIndex.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    MarketInfo.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    MarketInfo.fromJSONField = function (field) {
        return MarketInfo.reified().new({
            isActive: (0, reified_1.decodeFromJSONField)("bool", field.isActive),
            sizeDecimal: (0, reified_1.decodeFromJSONField)("u64", field.sizeDecimal),
            userLongPositionSize: (0, reified_1.decodeFromJSONField)("u64", field.userLongPositionSize),
            userShortPositionSize: (0, reified_1.decodeFromJSONField)("u64", field.userShortPositionSize),
            nextPositionId: (0, reified_1.decodeFromJSONField)("u64", field.nextPositionId),
            userLongOrderSize: (0, reified_1.decodeFromJSONField)("u64", field.userLongOrderSize),
            userShortOrderSize: (0, reified_1.decodeFromJSONField)("u64", field.userShortOrderSize),
            nextOrderId: (0, reified_1.decodeFromJSONField)("u64", field.nextOrderId),
            lastFundingTsMs: (0, reified_1.decodeFromJSONField)("u64", field.lastFundingTsMs),
            cumulativeFundingRateIndexSign: (0, reified_1.decodeFromJSONField)("bool", field.cumulativeFundingRateIndexSign),
            cumulativeFundingRateIndex: (0, reified_1.decodeFromJSONField)("u64", field.cumulativeFundingRateIndex),
            previousLastFundingTsMs: (0, reified_1.decodeFromJSONField)("u64", field.previousLastFundingTsMs),
            previousCumulativeFundingRateIndexSign: (0, reified_1.decodeFromJSONField)("bool", field.previousCumulativeFundingRateIndexSign),
            previousCumulativeFundingRateIndex: (0, reified_1.decodeFromJSONField)("u64", field.previousCumulativeFundingRateIndex),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    MarketInfo.fromJSON = function (json) {
        if (json.$typeName !== MarketInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return MarketInfo.fromJSONField(json);
    };
    MarketInfo.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMarketInfo(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a MarketInfo object"));
        }
        return MarketInfo.fromFieldsWithTypes(content);
    };
    MarketInfo.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching MarketInfo object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMarketInfo(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a MarketInfo object"));
                        }
                        return [2 /*return*/, MarketInfo.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    MarketInfo.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketInfo";
    MarketInfo.$numTypeParams = 0;
    return MarketInfo;
}());
exports.MarketInfo = MarketInfo;
/* ============================== MarketRegistry =============================== */
function isMarketRegistry(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketRegistry";
}
var MarketRegistry = /** @class */ (function () {
    function MarketRegistry(typeArgs, fields) {
        this.$typeName = MarketRegistry.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([MarketRegistry.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        this.referralRegistry = fields.referralRegistry;
        this.numMarket = fields.numMarket;
        this.u64Padding = fields.u64Padding;
    }
    MarketRegistry.reified = function () {
        var _this = this;
        return {
            typeName: MarketRegistry.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([MarketRegistry.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return MarketRegistry.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return MarketRegistry.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return MarketRegistry.fromBcs(data); },
            bcs: MarketRegistry.bcs,
            fromJSONField: function (field) { return MarketRegistry.fromJSONField(field); },
            fromJSON: function (json) { return MarketRegistry.fromJSON(json); },
            fromSuiParsedData: function (content) { return MarketRegistry.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, MarketRegistry.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new MarketRegistry([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(MarketRegistry, "r", {
        get: function () {
            return MarketRegistry.reified();
        },
        enumerable: false,
        configurable: true
    });
    MarketRegistry.phantom = function () {
        return (0, reified_1.phantom)(MarketRegistry.reified());
    };
    Object.defineProperty(MarketRegistry, "p", {
        get: function () {
            return MarketRegistry.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketRegistry, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("MarketRegistry", {
                id: structs_4.UID.bcs,
                referral_registry: structs_4.UID.bcs,
                num_market: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    MarketRegistry.fromFields = function (fields) {
        return MarketRegistry.reified().new({
            id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id),
            referralRegistry: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.referral_registry),
            numMarket: (0, reified_1.decodeFromFields)("u64", fields.num_market),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    MarketRegistry.fromFieldsWithTypes = function (item) {
        if (!isMarketRegistry(item.type)) {
            throw new Error("not a MarketRegistry type");
        }
        return MarketRegistry.reified().new({
            id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id),
            referralRegistry: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.referral_registry),
            numMarket: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.num_market),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    MarketRegistry.fromBcs = function (data) {
        return MarketRegistry.fromFields(MarketRegistry.bcs.parse(data));
    };
    MarketRegistry.prototype.toJSONField = function () {
        return {
            id: this.id,
            referralRegistry: this.referralRegistry,
            numMarket: this.numMarket.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    MarketRegistry.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    MarketRegistry.fromJSONField = function (field) {
        return MarketRegistry.reified().new({
            id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id),
            referralRegistry: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.referralRegistry),
            numMarket: (0, reified_1.decodeFromJSONField)("u64", field.numMarket),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    MarketRegistry.fromJSON = function (json) {
        if (json.$typeName !== MarketRegistry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return MarketRegistry.fromJSONField(json);
    };
    MarketRegistry.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMarketRegistry(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a MarketRegistry object"));
        }
        return MarketRegistry.fromFieldsWithTypes(content);
    };
    MarketRegistry.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching MarketRegistry object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMarketRegistry(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a MarketRegistry object"));
                        }
                        return [2 /*return*/, MarketRegistry.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    MarketRegistry.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MarketRegistry";
    MarketRegistry.$numTypeParams = 0;
    return MarketRegistry;
}());
exports.MarketRegistry = MarketRegistry;
/* ============================== Markets =============================== */
function isMarkets(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::Markets";
}
var Markets = /** @class */ (function () {
    function Markets(typeArgs, fields) {
        this.$typeName = Markets.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Markets.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.quoteTokenType = fields.quoteTokenType;
        this.isActive = fields.isActive;
        this.protocolFeeShareBp = fields.protocolFeeShareBp;
        this.symbols = fields.symbols;
        this.symbolMarkets = fields.symbolMarkets;
        this.u64Padding = fields.u64Padding;
    }
    Markets.reified = function () {
        var _this = this;
        return {
            typeName: Markets.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Markets.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return Markets.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return Markets.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return Markets.fromBcs(data); },
            bcs: Markets.bcs,
            fromJSONField: function (field) { return Markets.fromJSONField(field); },
            fromJSON: function (json) { return Markets.fromJSON(json); },
            fromSuiParsedData: function (content) { return Markets.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Markets.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new Markets([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(Markets, "r", {
        get: function () {
            return Markets.reified();
        },
        enumerable: false,
        configurable: true
    });
    Markets.phantom = function () {
        return (0, reified_1.phantom)(Markets.reified());
    };
    Object.defineProperty(Markets, "p", {
        get: function () {
            return Markets.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Markets, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Markets", {
                id: structs_4.UID.bcs,
                index: bcs_1.bcs.u64(),
                lp_token_type: structs_2.TypeName.bcs,
                quote_token_type: structs_2.TypeName.bcs,
                is_active: bcs_1.bcs.bool(),
                protocol_fee_share_bp: bcs_1.bcs.u64(),
                symbols: bcs_1.bcs.vector(structs_2.TypeName.bcs),
                symbol_markets: structs_3.ObjectTable.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    Markets.fromFields = function (fields) {
        return Markets.reified().new({
            id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id),
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            lpTokenType: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.lp_token_type),
            quoteTokenType: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.quote_token_type),
            isActive: (0, reified_1.decodeFromFields)("bool", fields.is_active),
            protocolFeeShareBp: (0, reified_1.decodeFromFields)("u64", fields.protocol_fee_share_bp),
            symbols: (0, reified_1.decodeFromFields)(reified.vector(structs_2.TypeName.reified()), fields.symbols),
            symbolMarkets: (0, reified_1.decodeFromFields)(structs_3.ObjectTable.reified(reified.phantom(structs_2.TypeName.reified()), reified.phantom(SymbolMarket.reified())), fields.symbol_markets),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    Markets.fromFieldsWithTypes = function (item) {
        if (!isMarkets(item.type)) {
            throw new Error("not a Markets type");
        }
        return Markets.reified().new({
            id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id),
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            lpTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.lp_token_type),
            quoteTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.quote_token_type),
            isActive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_active),
            protocolFeeShareBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.protocol_fee_share_bp),
            symbols: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_2.TypeName.reified()), item.fields.symbols),
            symbolMarkets: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.ObjectTable.reified(reified.phantom(structs_2.TypeName.reified()), reified.phantom(SymbolMarket.reified())), item.fields.symbol_markets),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    Markets.fromBcs = function (data) {
        return Markets.fromFields(Markets.bcs.parse(data));
    };
    Markets.prototype.toJSONField = function () {
        return {
            id: this.id,
            index: this.index.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            quoteTokenType: this.quoteTokenType.toJSONField(),
            isActive: this.isActive,
            protocolFeeShareBp: this.protocolFeeShareBp.toString(),
            symbols: (0, reified_1.fieldToJSON)("vector<0x1::type_name::TypeName>", this.symbols),
            symbolMarkets: this.symbolMarkets.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    Markets.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    Markets.fromJSONField = function (field) {
        return Markets.reified().new({
            id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id),
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            lpTokenType: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.lpTokenType),
            quoteTokenType: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.quoteTokenType),
            isActive: (0, reified_1.decodeFromJSONField)("bool", field.isActive),
            protocolFeeShareBp: (0, reified_1.decodeFromJSONField)("u64", field.protocolFeeShareBp),
            symbols: (0, reified_1.decodeFromJSONField)(reified.vector(structs_2.TypeName.reified()), field.symbols),
            symbolMarkets: (0, reified_1.decodeFromJSONField)(structs_3.ObjectTable.reified(reified.phantom(structs_2.TypeName.reified()), reified.phantom(SymbolMarket.reified())), field.symbolMarkets),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    Markets.fromJSON = function (json) {
        if (json.$typeName !== Markets.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return Markets.fromJSONField(json);
    };
    Markets.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMarkets(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a Markets object"));
        }
        return Markets.fromFieldsWithTypes(content);
    };
    Markets.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Markets object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMarkets(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Markets object"));
                        }
                        return [2 /*return*/, Markets.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Markets.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::Markets";
    Markets.$numTypeParams = 0;
    return Markets;
}());
exports.Markets = Markets;
/* ============================== MatchTradingOrderEvent =============================== */
function isMatchTradingOrderEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MatchTradingOrderEvent";
}
var MatchTradingOrderEvent = /** @class */ (function () {
    function MatchTradingOrderEvent(typeArgs, fields) {
        this.$typeName = MatchTradingOrderEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([MatchTradingOrderEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.matchedOrderIds = fields.matchedOrderIds;
        this.linkedOrdersToBeCancelled = fields.linkedOrdersToBeCancelled;
        this.u64Padding = fields.u64Padding;
    }
    MatchTradingOrderEvent.reified = function () {
        var _this = this;
        return {
            typeName: MatchTradingOrderEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([MatchTradingOrderEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return MatchTradingOrderEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return MatchTradingOrderEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return MatchTradingOrderEvent.fromBcs(data); },
            bcs: MatchTradingOrderEvent.bcs,
            fromJSONField: function (field) { return MatchTradingOrderEvent.fromJSONField(field); },
            fromJSON: function (json) { return MatchTradingOrderEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return MatchTradingOrderEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, MatchTradingOrderEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new MatchTradingOrderEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(MatchTradingOrderEvent, "r", {
        get: function () {
            return MatchTradingOrderEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    MatchTradingOrderEvent.phantom = function () {
        return (0, reified_1.phantom)(MatchTradingOrderEvent.reified());
    };
    Object.defineProperty(MatchTradingOrderEvent, "p", {
        get: function () {
            return MatchTradingOrderEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MatchTradingOrderEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("MatchTradingOrderEvent", {
                collateral_token: structs_2.TypeName.bcs,
                base_token: structs_2.TypeName.bcs,
                matched_order_ids: bcs_1.bcs.vector(bcs_1.bcs.u64()),
                linked_orders_to_be_cancelled: LinkedOrdersInfo.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    MatchTradingOrderEvent.fromFields = function (fields) {
        return MatchTradingOrderEvent.reified().new({
            collateralToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.collateral_token),
            baseToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.base_token),
            matchedOrderIds: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.matched_order_ids),
            linkedOrdersToBeCancelled: (0, reified_1.decodeFromFields)(LinkedOrdersInfo.reified(), fields.linked_orders_to_be_cancelled),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    MatchTradingOrderEvent.fromFieldsWithTypes = function (item) {
        if (!isMatchTradingOrderEvent(item.type)) {
            throw new Error("not a MatchTradingOrderEvent type");
        }
        return MatchTradingOrderEvent.reified().new({
            collateralToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.collateral_token),
            baseToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.base_token),
            matchedOrderIds: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.matched_order_ids),
            linkedOrdersToBeCancelled: (0, reified_1.decodeFromFieldsWithTypes)(LinkedOrdersInfo.reified(), item.fields.linked_orders_to_be_cancelled),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    MatchTradingOrderEvent.fromBcs = function (data) {
        return MatchTradingOrderEvent.fromFields(MatchTradingOrderEvent.bcs.parse(data));
    };
    MatchTradingOrderEvent.prototype.toJSONField = function () {
        return {
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            matchedOrderIds: (0, reified_1.fieldToJSON)("vector<u64>", this.matchedOrderIds),
            linkedOrdersToBeCancelled: this.linkedOrdersToBeCancelled.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    MatchTradingOrderEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    MatchTradingOrderEvent.fromJSONField = function (field) {
        return MatchTradingOrderEvent.reified().new({
            collateralToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.collateralToken),
            baseToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.baseToken),
            matchedOrderIds: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.matchedOrderIds),
            linkedOrdersToBeCancelled: (0, reified_1.decodeFromJSONField)(LinkedOrdersInfo.reified(), field.linkedOrdersToBeCancelled),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    MatchTradingOrderEvent.fromJSON = function (json) {
        if (json.$typeName !== MatchTradingOrderEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return MatchTradingOrderEvent.fromJSONField(json);
    };
    MatchTradingOrderEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMatchTradingOrderEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a MatchTradingOrderEvent object"));
        }
        return MatchTradingOrderEvent.fromFieldsWithTypes(content);
    };
    MatchTradingOrderEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching MatchTradingOrderEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMatchTradingOrderEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a MatchTradingOrderEvent object"));
                        }
                        return [2 /*return*/, MatchTradingOrderEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    MatchTradingOrderEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::MatchTradingOrderEvent";
    MatchTradingOrderEvent.$numTypeParams = 0;
    return MatchTradingOrderEvent;
}());
exports.MatchTradingOrderEvent = MatchTradingOrderEvent;
/* ============================== NewMarketsEvent =============================== */
function isNewMarketsEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::NewMarketsEvent";
}
var NewMarketsEvent = /** @class */ (function () {
    function NewMarketsEvent(typeArgs, fields) {
        this.$typeName = NewMarketsEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NewMarketsEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.quoteTokenType = fields.quoteTokenType;
        this.protocolFeeShareBp = fields.protocolFeeShareBp;
        this.u64Padding = fields.u64Padding;
    }
    NewMarketsEvent.reified = function () {
        var _this = this;
        return {
            typeName: NewMarketsEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([NewMarketsEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return NewMarketsEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return NewMarketsEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return NewMarketsEvent.fromBcs(data); },
            bcs: NewMarketsEvent.bcs,
            fromJSONField: function (field) { return NewMarketsEvent.fromJSONField(field); },
            fromJSON: function (json) { return NewMarketsEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return NewMarketsEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, NewMarketsEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new NewMarketsEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(NewMarketsEvent, "r", {
        get: function () {
            return NewMarketsEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    NewMarketsEvent.phantom = function () {
        return (0, reified_1.phantom)(NewMarketsEvent.reified());
    };
    Object.defineProperty(NewMarketsEvent, "p", {
        get: function () {
            return NewMarketsEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewMarketsEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("NewMarketsEvent", {
                index: bcs_1.bcs.u64(),
                lp_token_type: structs_2.TypeName.bcs,
                quote_token_type: structs_2.TypeName.bcs,
                protocol_fee_share_bp: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    NewMarketsEvent.fromFields = function (fields) {
        return NewMarketsEvent.reified().new({
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            lpTokenType: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.lp_token_type),
            quoteTokenType: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.quote_token_type),
            protocolFeeShareBp: (0, reified_1.decodeFromFields)("u64", fields.protocol_fee_share_bp),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    NewMarketsEvent.fromFieldsWithTypes = function (item) {
        if (!isNewMarketsEvent(item.type)) {
            throw new Error("not a NewMarketsEvent type");
        }
        return NewMarketsEvent.reified().new({
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            lpTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.lp_token_type),
            quoteTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.quote_token_type),
            protocolFeeShareBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.protocol_fee_share_bp),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    NewMarketsEvent.fromBcs = function (data) {
        return NewMarketsEvent.fromFields(NewMarketsEvent.bcs.parse(data));
    };
    NewMarketsEvent.prototype.toJSONField = function () {
        return {
            index: this.index.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            quoteTokenType: this.quoteTokenType.toJSONField(),
            protocolFeeShareBp: this.protocolFeeShareBp.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    NewMarketsEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    NewMarketsEvent.fromJSONField = function (field) {
        return NewMarketsEvent.reified().new({
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            lpTokenType: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.lpTokenType),
            quoteTokenType: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.quoteTokenType),
            protocolFeeShareBp: (0, reified_1.decodeFromJSONField)("u64", field.protocolFeeShareBp),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    NewMarketsEvent.fromJSON = function (json) {
        if (json.$typeName !== NewMarketsEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return NewMarketsEvent.fromJSONField(json);
    };
    NewMarketsEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewMarketsEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a NewMarketsEvent object"));
        }
        return NewMarketsEvent.fromFieldsWithTypes(content);
    };
    NewMarketsEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching NewMarketsEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewMarketsEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a NewMarketsEvent object"));
                        }
                        return [2 /*return*/, NewMarketsEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    NewMarketsEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::NewMarketsEvent";
    NewMarketsEvent.$numTypeParams = 0;
    return NewMarketsEvent;
}());
exports.NewMarketsEvent = NewMarketsEvent;
/* ============================== ReleaseCollateralEvent =============================== */
function isReleaseCollateralEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ReleaseCollateralEvent";
}
var ReleaseCollateralEvent = /** @class */ (function () {
    function ReleaseCollateralEvent(typeArgs, fields) {
        this.$typeName = ReleaseCollateralEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ReleaseCollateralEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        this.marketIndex = fields.marketIndex;
        this.poolIndex = fields.poolIndex;
        this.positionId = fields.positionId;
        this.collateralToken = fields.collateralToken;
        this.baseToken = fields.baseToken;
        this.releasedCollateralAmount = fields.releasedCollateralAmount;
        this.remainingCollateralAmount = fields.remainingCollateralAmount;
        this.u64Padding = fields.u64Padding;
    }
    ReleaseCollateralEvent.reified = function () {
        var _this = this;
        return {
            typeName: ReleaseCollateralEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ReleaseCollateralEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return ReleaseCollateralEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return ReleaseCollateralEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return ReleaseCollateralEvent.fromBcs(data); },
            bcs: ReleaseCollateralEvent.bcs,
            fromJSONField: function (field) { return ReleaseCollateralEvent.fromJSONField(field); },
            fromJSON: function (json) { return ReleaseCollateralEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return ReleaseCollateralEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ReleaseCollateralEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new ReleaseCollateralEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(ReleaseCollateralEvent, "r", {
        get: function () {
            return ReleaseCollateralEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    ReleaseCollateralEvent.phantom = function () {
        return (0, reified_1.phantom)(ReleaseCollateralEvent.reified());
    };
    Object.defineProperty(ReleaseCollateralEvent, "p", {
        get: function () {
            return ReleaseCollateralEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReleaseCollateralEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ReleaseCollateralEvent", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                market_index: bcs_1.bcs.u64(),
                pool_index: bcs_1.bcs.u64(),
                position_id: bcs_1.bcs.u64(),
                collateral_token: structs_2.TypeName.bcs,
                base_token: structs_2.TypeName.bcs,
                released_collateral_amount: bcs_1.bcs.u64(),
                remaining_collateral_amount: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    ReleaseCollateralEvent.fromFields = function (fields) {
        return ReleaseCollateralEvent.reified().new({
            user: (0, reified_1.decodeFromFields)("address", fields.user),
            marketIndex: (0, reified_1.decodeFromFields)("u64", fields.market_index),
            poolIndex: (0, reified_1.decodeFromFields)("u64", fields.pool_index),
            positionId: (0, reified_1.decodeFromFields)("u64", fields.position_id),
            collateralToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.collateral_token),
            baseToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.base_token),
            releasedCollateralAmount: (0, reified_1.decodeFromFields)("u64", fields.released_collateral_amount),
            remainingCollateralAmount: (0, reified_1.decodeFromFields)("u64", fields.remaining_collateral_amount),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    ReleaseCollateralEvent.fromFieldsWithTypes = function (item) {
        if (!isReleaseCollateralEvent(item.type)) {
            throw new Error("not a ReleaseCollateralEvent type");
        }
        return ReleaseCollateralEvent.reified().new({
            user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user),
            marketIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.market_index),
            poolIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.pool_index),
            positionId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.position_id),
            collateralToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.collateral_token),
            baseToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.base_token),
            releasedCollateralAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.released_collateral_amount),
            remainingCollateralAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.remaining_collateral_amount),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    ReleaseCollateralEvent.fromBcs = function (data) {
        return ReleaseCollateralEvent.fromFields(ReleaseCollateralEvent.bcs.parse(data));
    };
    ReleaseCollateralEvent.prototype.toJSONField = function () {
        return {
            user: this.user,
            marketIndex: this.marketIndex.toString(),
            poolIndex: this.poolIndex.toString(),
            positionId: this.positionId.toString(),
            collateralToken: this.collateralToken.toJSONField(),
            baseToken: this.baseToken.toJSONField(),
            releasedCollateralAmount: this.releasedCollateralAmount.toString(),
            remainingCollateralAmount: this.remainingCollateralAmount.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    ReleaseCollateralEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    ReleaseCollateralEvent.fromJSONField = function (field) {
        return ReleaseCollateralEvent.reified().new({
            user: (0, reified_1.decodeFromJSONField)("address", field.user),
            marketIndex: (0, reified_1.decodeFromJSONField)("u64", field.marketIndex),
            poolIndex: (0, reified_1.decodeFromJSONField)("u64", field.poolIndex),
            positionId: (0, reified_1.decodeFromJSONField)("u64", field.positionId),
            collateralToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.collateralToken),
            baseToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.baseToken),
            releasedCollateralAmount: (0, reified_1.decodeFromJSONField)("u64", field.releasedCollateralAmount),
            remainingCollateralAmount: (0, reified_1.decodeFromJSONField)("u64", field.remainingCollateralAmount),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    ReleaseCollateralEvent.fromJSON = function (json) {
        if (json.$typeName !== ReleaseCollateralEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return ReleaseCollateralEvent.fromJSONField(json);
    };
    ReleaseCollateralEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isReleaseCollateralEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a ReleaseCollateralEvent object"));
        }
        return ReleaseCollateralEvent.fromFieldsWithTypes(content);
    };
    ReleaseCollateralEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ReleaseCollateralEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isReleaseCollateralEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ReleaseCollateralEvent object"));
                        }
                        return [2 /*return*/, ReleaseCollateralEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ReleaseCollateralEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ReleaseCollateralEvent";
    ReleaseCollateralEvent.$numTypeParams = 0;
    return ReleaseCollateralEvent;
}());
exports.ReleaseCollateralEvent = ReleaseCollateralEvent;
/* ============================== ResumeMarketEvent =============================== */
function isResumeMarketEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ResumeMarketEvent";
}
var ResumeMarketEvent = /** @class */ (function () {
    function ResumeMarketEvent(typeArgs, fields) {
        this.$typeName = ResumeMarketEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ResumeMarketEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.index = fields.index;
        this.u64Padding = fields.u64Padding;
    }
    ResumeMarketEvent.reified = function () {
        var _this = this;
        return {
            typeName: ResumeMarketEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ResumeMarketEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return ResumeMarketEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return ResumeMarketEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return ResumeMarketEvent.fromBcs(data); },
            bcs: ResumeMarketEvent.bcs,
            fromJSONField: function (field) { return ResumeMarketEvent.fromJSONField(field); },
            fromJSON: function (json) { return ResumeMarketEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return ResumeMarketEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ResumeMarketEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new ResumeMarketEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(ResumeMarketEvent, "r", {
        get: function () {
            return ResumeMarketEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    ResumeMarketEvent.phantom = function () {
        return (0, reified_1.phantom)(ResumeMarketEvent.reified());
    };
    Object.defineProperty(ResumeMarketEvent, "p", {
        get: function () {
            return ResumeMarketEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ResumeMarketEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ResumeMarketEvent", {
                index: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    ResumeMarketEvent.fromFields = function (fields) {
        return ResumeMarketEvent.reified().new({
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    ResumeMarketEvent.fromFieldsWithTypes = function (item) {
        if (!isResumeMarketEvent(item.type)) {
            throw new Error("not a ResumeMarketEvent type");
        }
        return ResumeMarketEvent.reified().new({
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    ResumeMarketEvent.fromBcs = function (data) {
        return ResumeMarketEvent.fromFields(ResumeMarketEvent.bcs.parse(data));
    };
    ResumeMarketEvent.prototype.toJSONField = function () {
        return {
            index: this.index.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    ResumeMarketEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    ResumeMarketEvent.fromJSONField = function (field) {
        return ResumeMarketEvent.reified().new({
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    ResumeMarketEvent.fromJSON = function (json) {
        if (json.$typeName !== ResumeMarketEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return ResumeMarketEvent.fromJSONField(json);
    };
    ResumeMarketEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isResumeMarketEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a ResumeMarketEvent object"));
        }
        return ResumeMarketEvent.fromFieldsWithTypes(content);
    };
    ResumeMarketEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ResumeMarketEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isResumeMarketEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ResumeMarketEvent object"));
                        }
                        return [2 /*return*/, ResumeMarketEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ResumeMarketEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ResumeMarketEvent";
    ResumeMarketEvent.$numTypeParams = 0;
    return ResumeMarketEvent;
}());
exports.ResumeMarketEvent = ResumeMarketEvent;
/* ============================== ResumeTradingSymbolEvent =============================== */
function isResumeTradingSymbolEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ResumeTradingSymbolEvent";
}
var ResumeTradingSymbolEvent = /** @class */ (function () {
    function ResumeTradingSymbolEvent(typeArgs, fields) {
        this.$typeName = ResumeTradingSymbolEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([ResumeTradingSymbolEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.index = fields.index;
        this.resumedBaseToken = fields.resumedBaseToken;
        this.u64Padding = fields.u64Padding;
    }
    ResumeTradingSymbolEvent.reified = function () {
        var _this = this;
        return {
            typeName: ResumeTradingSymbolEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([ResumeTradingSymbolEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return ResumeTradingSymbolEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return ResumeTradingSymbolEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return ResumeTradingSymbolEvent.fromBcs(data); },
            bcs: ResumeTradingSymbolEvent.bcs,
            fromJSONField: function (field) { return ResumeTradingSymbolEvent.fromJSONField(field); },
            fromJSON: function (json) { return ResumeTradingSymbolEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return ResumeTradingSymbolEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, ResumeTradingSymbolEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new ResumeTradingSymbolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(ResumeTradingSymbolEvent, "r", {
        get: function () {
            return ResumeTradingSymbolEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    ResumeTradingSymbolEvent.phantom = function () {
        return (0, reified_1.phantom)(ResumeTradingSymbolEvent.reified());
    };
    Object.defineProperty(ResumeTradingSymbolEvent, "p", {
        get: function () {
            return ResumeTradingSymbolEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ResumeTradingSymbolEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("ResumeTradingSymbolEvent", {
                index: bcs_1.bcs.u64(),
                resumed_base_token: structs_2.TypeName.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    ResumeTradingSymbolEvent.fromFields = function (fields) {
        return ResumeTradingSymbolEvent.reified().new({
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            resumedBaseToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.resumed_base_token),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    ResumeTradingSymbolEvent.fromFieldsWithTypes = function (item) {
        if (!isResumeTradingSymbolEvent(item.type)) {
            throw new Error("not a ResumeTradingSymbolEvent type");
        }
        return ResumeTradingSymbolEvent.reified().new({
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            resumedBaseToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.resumed_base_token),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    ResumeTradingSymbolEvent.fromBcs = function (data) {
        return ResumeTradingSymbolEvent.fromFields(ResumeTradingSymbolEvent.bcs.parse(data));
    };
    ResumeTradingSymbolEvent.prototype.toJSONField = function () {
        return {
            index: this.index.toString(),
            resumedBaseToken: this.resumedBaseToken.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    ResumeTradingSymbolEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    ResumeTradingSymbolEvent.fromJSONField = function (field) {
        return ResumeTradingSymbolEvent.reified().new({
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            resumedBaseToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.resumedBaseToken),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    ResumeTradingSymbolEvent.fromJSON = function (json) {
        if (json.$typeName !== ResumeTradingSymbolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return ResumeTradingSymbolEvent.fromJSONField(json);
    };
    ResumeTradingSymbolEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isResumeTradingSymbolEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a ResumeTradingSymbolEvent object"));
        }
        return ResumeTradingSymbolEvent.fromFieldsWithTypes(content);
    };
    ResumeTradingSymbolEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching ResumeTradingSymbolEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isResumeTradingSymbolEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a ResumeTradingSymbolEvent object"));
                        }
                        return [2 /*return*/, ResumeTradingSymbolEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    ResumeTradingSymbolEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::ResumeTradingSymbolEvent";
    ResumeTradingSymbolEvent.$numTypeParams = 0;
    return ResumeTradingSymbolEvent;
}());
exports.ResumeTradingSymbolEvent = ResumeTradingSymbolEvent;
/* ============================== SuspendMarketEvent =============================== */
function isSuspendMarketEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SuspendMarketEvent";
}
var SuspendMarketEvent = /** @class */ (function () {
    function SuspendMarketEvent(typeArgs, fields) {
        this.$typeName = SuspendMarketEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SuspendMarketEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.index = fields.index;
        this.u64Padding = fields.u64Padding;
    }
    SuspendMarketEvent.reified = function () {
        var _this = this;
        return {
            typeName: SuspendMarketEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([SuspendMarketEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return SuspendMarketEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return SuspendMarketEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return SuspendMarketEvent.fromBcs(data); },
            bcs: SuspendMarketEvent.bcs,
            fromJSONField: function (field) { return SuspendMarketEvent.fromJSONField(field); },
            fromJSON: function (json) { return SuspendMarketEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return SuspendMarketEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, SuspendMarketEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new SuspendMarketEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(SuspendMarketEvent, "r", {
        get: function () {
            return SuspendMarketEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    SuspendMarketEvent.phantom = function () {
        return (0, reified_1.phantom)(SuspendMarketEvent.reified());
    };
    Object.defineProperty(SuspendMarketEvent, "p", {
        get: function () {
            return SuspendMarketEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SuspendMarketEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("SuspendMarketEvent", {
                index: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    SuspendMarketEvent.fromFields = function (fields) {
        return SuspendMarketEvent.reified().new({
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    SuspendMarketEvent.fromFieldsWithTypes = function (item) {
        if (!isSuspendMarketEvent(item.type)) {
            throw new Error("not a SuspendMarketEvent type");
        }
        return SuspendMarketEvent.reified().new({
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    SuspendMarketEvent.fromBcs = function (data) {
        return SuspendMarketEvent.fromFields(SuspendMarketEvent.bcs.parse(data));
    };
    SuspendMarketEvent.prototype.toJSONField = function () {
        return {
            index: this.index.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    SuspendMarketEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    SuspendMarketEvent.fromJSONField = function (field) {
        return SuspendMarketEvent.reified().new({
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    SuspendMarketEvent.fromJSON = function (json) {
        if (json.$typeName !== SuspendMarketEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return SuspendMarketEvent.fromJSONField(json);
    };
    SuspendMarketEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSuspendMarketEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a SuspendMarketEvent object"));
        }
        return SuspendMarketEvent.fromFieldsWithTypes(content);
    };
    SuspendMarketEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching SuspendMarketEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSuspendMarketEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a SuspendMarketEvent object"));
                        }
                        return [2 /*return*/, SuspendMarketEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    SuspendMarketEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SuspendMarketEvent";
    SuspendMarketEvent.$numTypeParams = 0;
    return SuspendMarketEvent;
}());
exports.SuspendMarketEvent = SuspendMarketEvent;
/* ============================== SuspendTradingSymbolEvent =============================== */
function isSuspendTradingSymbolEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SuspendTradingSymbolEvent";
}
var SuspendTradingSymbolEvent = /** @class */ (function () {
    function SuspendTradingSymbolEvent(typeArgs, fields) {
        this.$typeName = SuspendTradingSymbolEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SuspendTradingSymbolEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.index = fields.index;
        this.suspendedBaseToken = fields.suspendedBaseToken;
        this.u64Padding = fields.u64Padding;
    }
    SuspendTradingSymbolEvent.reified = function () {
        var _this = this;
        return {
            typeName: SuspendTradingSymbolEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([SuspendTradingSymbolEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return SuspendTradingSymbolEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return SuspendTradingSymbolEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return SuspendTradingSymbolEvent.fromBcs(data); },
            bcs: SuspendTradingSymbolEvent.bcs,
            fromJSONField: function (field) { return SuspendTradingSymbolEvent.fromJSONField(field); },
            fromJSON: function (json) { return SuspendTradingSymbolEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return SuspendTradingSymbolEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, SuspendTradingSymbolEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new SuspendTradingSymbolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(SuspendTradingSymbolEvent, "r", {
        get: function () {
            return SuspendTradingSymbolEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    SuspendTradingSymbolEvent.phantom = function () {
        return (0, reified_1.phantom)(SuspendTradingSymbolEvent.reified());
    };
    Object.defineProperty(SuspendTradingSymbolEvent, "p", {
        get: function () {
            return SuspendTradingSymbolEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SuspendTradingSymbolEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("SuspendTradingSymbolEvent", {
                index: bcs_1.bcs.u64(),
                suspended_base_token: structs_2.TypeName.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    SuspendTradingSymbolEvent.fromFields = function (fields) {
        return SuspendTradingSymbolEvent.reified().new({
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            suspendedBaseToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.suspended_base_token),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    SuspendTradingSymbolEvent.fromFieldsWithTypes = function (item) {
        if (!isSuspendTradingSymbolEvent(item.type)) {
            throw new Error("not a SuspendTradingSymbolEvent type");
        }
        return SuspendTradingSymbolEvent.reified().new({
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            suspendedBaseToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.suspended_base_token),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    SuspendTradingSymbolEvent.fromBcs = function (data) {
        return SuspendTradingSymbolEvent.fromFields(SuspendTradingSymbolEvent.bcs.parse(data));
    };
    SuspendTradingSymbolEvent.prototype.toJSONField = function () {
        return {
            index: this.index.toString(),
            suspendedBaseToken: this.suspendedBaseToken.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    SuspendTradingSymbolEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    SuspendTradingSymbolEvent.fromJSONField = function (field) {
        return SuspendTradingSymbolEvent.reified().new({
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            suspendedBaseToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.suspendedBaseToken),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    SuspendTradingSymbolEvent.fromJSON = function (json) {
        if (json.$typeName !== SuspendTradingSymbolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return SuspendTradingSymbolEvent.fromJSONField(json);
    };
    SuspendTradingSymbolEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSuspendTradingSymbolEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a SuspendTradingSymbolEvent object"));
        }
        return SuspendTradingSymbolEvent.fromFieldsWithTypes(content);
    };
    SuspendTradingSymbolEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching SuspendTradingSymbolEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSuspendTradingSymbolEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a SuspendTradingSymbolEvent object"));
                        }
                        return [2 /*return*/, SuspendTradingSymbolEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    SuspendTradingSymbolEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SuspendTradingSymbolEvent";
    SuspendTradingSymbolEvent.$numTypeParams = 0;
    return SuspendTradingSymbolEvent;
}());
exports.SuspendTradingSymbolEvent = SuspendTradingSymbolEvent;
/* ============================== SymbolMarket =============================== */
function isSymbolMarket(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SymbolMarket";
}
var SymbolMarket = /** @class */ (function () {
    function SymbolMarket(typeArgs, fields) {
        this.$typeName = SymbolMarket.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([SymbolMarket.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        this.userPositions = fields.userPositions;
        this.tokenCollateralOrders = fields.tokenCollateralOrders;
        this.optionCollateralOrders = fields.optionCollateralOrders;
        this.marketInfo = fields.marketInfo;
        this.marketConfig = fields.marketConfig;
    }
    SymbolMarket.reified = function () {
        var _this = this;
        return {
            typeName: SymbolMarket.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([SymbolMarket.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return SymbolMarket.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return SymbolMarket.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return SymbolMarket.fromBcs(data); },
            bcs: SymbolMarket.bcs,
            fromJSONField: function (field) { return SymbolMarket.fromJSONField(field); },
            fromJSON: function (json) { return SymbolMarket.fromJSON(json); },
            fromSuiParsedData: function (content) { return SymbolMarket.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, SymbolMarket.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new SymbolMarket([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(SymbolMarket, "r", {
        get: function () {
            return SymbolMarket.reified();
        },
        enumerable: false,
        configurable: true
    });
    SymbolMarket.phantom = function () {
        return (0, reified_1.phantom)(SymbolMarket.reified());
    };
    Object.defineProperty(SymbolMarket, "p", {
        get: function () {
            return SymbolMarket.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolMarket, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("SymbolMarket", {
                id: structs_4.UID.bcs,
                user_positions: structs_5.BigVector.bcs,
                token_collateral_orders: structs_4.UID.bcs,
                option_collateral_orders: structs_4.UID.bcs,
                market_info: MarketInfo.bcs,
                market_config: MarketConfig.bcs,
            });
        },
        enumerable: false,
        configurable: true
    });
    SymbolMarket.fromFields = function (fields) {
        return SymbolMarket.reified().new({
            id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id),
            userPositions: (0, reified_1.decodeFromFields)(structs_5.BigVector.reified(), fields.user_positions),
            tokenCollateralOrders: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.token_collateral_orders),
            optionCollateralOrders: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.option_collateral_orders),
            marketInfo: (0, reified_1.decodeFromFields)(MarketInfo.reified(), fields.market_info),
            marketConfig: (0, reified_1.decodeFromFields)(MarketConfig.reified(), fields.market_config),
        });
    };
    SymbolMarket.fromFieldsWithTypes = function (item) {
        if (!isSymbolMarket(item.type)) {
            throw new Error("not a SymbolMarket type");
        }
        return SymbolMarket.reified().new({
            id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id),
            userPositions: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.BigVector.reified(), item.fields.user_positions),
            tokenCollateralOrders: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.token_collateral_orders),
            optionCollateralOrders: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.option_collateral_orders),
            marketInfo: (0, reified_1.decodeFromFieldsWithTypes)(MarketInfo.reified(), item.fields.market_info),
            marketConfig: (0, reified_1.decodeFromFieldsWithTypes)(MarketConfig.reified(), item.fields.market_config),
        });
    };
    SymbolMarket.fromBcs = function (data) {
        return SymbolMarket.fromFields(SymbolMarket.bcs.parse(data));
    };
    SymbolMarket.prototype.toJSONField = function () {
        return {
            id: this.id,
            userPositions: this.userPositions.toJSONField(),
            tokenCollateralOrders: this.tokenCollateralOrders,
            optionCollateralOrders: this.optionCollateralOrders,
            marketInfo: this.marketInfo.toJSONField(),
            marketConfig: this.marketConfig.toJSONField(),
        };
    };
    SymbolMarket.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    SymbolMarket.fromJSONField = function (field) {
        return SymbolMarket.reified().new({
            id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id),
            userPositions: (0, reified_1.decodeFromJSONField)(structs_5.BigVector.reified(), field.userPositions),
            tokenCollateralOrders: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.tokenCollateralOrders),
            optionCollateralOrders: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.optionCollateralOrders),
            marketInfo: (0, reified_1.decodeFromJSONField)(MarketInfo.reified(), field.marketInfo),
            marketConfig: (0, reified_1.decodeFromJSONField)(MarketConfig.reified(), field.marketConfig),
        });
    };
    SymbolMarket.fromJSON = function (json) {
        if (json.$typeName !== SymbolMarket.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return SymbolMarket.fromJSONField(json);
    };
    SymbolMarket.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSymbolMarket(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a SymbolMarket object"));
        }
        return SymbolMarket.fromFieldsWithTypes(content);
    };
    SymbolMarket.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching SymbolMarket object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSymbolMarket(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a SymbolMarket object"));
                        }
                        return [2 /*return*/, SymbolMarket.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    SymbolMarket.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::SymbolMarket";
    SymbolMarket.$numTypeParams = 0;
    return SymbolMarket;
}());
exports.SymbolMarket = SymbolMarket;
/* ============================== USD =============================== */
function isUSD(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::USD";
}
var USD = /** @class */ (function () {
    function USD(typeArgs, fields) {
        this.$typeName = USD.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([USD.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    USD.reified = function () {
        var _this = this;
        return {
            typeName: USD.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([USD.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return USD.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return USD.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return USD.fromBcs(data); },
            bcs: USD.bcs,
            fromJSONField: function (field) { return USD.fromJSONField(field); },
            fromJSON: function (json) { return USD.fromJSON(json); },
            fromSuiParsedData: function (content) { return USD.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, USD.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new USD([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(USD, "r", {
        get: function () {
            return USD.reified();
        },
        enumerable: false,
        configurable: true
    });
    USD.phantom = function () {
        return (0, reified_1.phantom)(USD.reified());
    };
    Object.defineProperty(USD, "p", {
        get: function () {
            return USD.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USD, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("USD", {
                dummy_field: bcs_1.bcs.bool(),
            });
        },
        enumerable: false,
        configurable: true
    });
    USD.fromFields = function (fields) {
        return USD.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) });
    };
    USD.fromFieldsWithTypes = function (item) {
        if (!isUSD(item.type)) {
            throw new Error("not a USD type");
        }
        return USD.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    USD.fromBcs = function (data) {
        return USD.fromFields(USD.bcs.parse(data));
    };
    USD.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    USD.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    USD.fromJSONField = function (field) {
        return USD.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) });
    };
    USD.fromJSON = function (json) {
        if (json.$typeName !== USD.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return USD.fromJSONField(json);
    };
    USD.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUSD(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a USD object"));
        }
        return USD.fromFieldsWithTypes(content);
    };
    USD.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching USD object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUSD(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a USD object"));
                        }
                        return [2 /*return*/, USD.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    USD.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::USD";
    USD.$numTypeParams = 0;
    return USD;
}());
exports.USD = USD;
/* ============================== UpdateFundingRateEvent =============================== */
function isUpdateFundingRateEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateFundingRateEvent";
}
var UpdateFundingRateEvent = /** @class */ (function () {
    function UpdateFundingRateEvent(typeArgs, fields) {
        this.$typeName = UpdateFundingRateEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateFundingRateEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.baseToken = fields.baseToken;
        this.newFundingTsMs = fields.newFundingTsMs;
        this.intervalsCount = fields.intervalsCount;
        this.previousCumulativeFundingRateIndexSign = fields.previousCumulativeFundingRateIndexSign;
        this.previousCumulativeFundingRateIndex = fields.previousCumulativeFundingRateIndex;
        this.cumulativeFundingRateIndexSign = fields.cumulativeFundingRateIndexSign;
        this.cumulativeFundingRateIndex = fields.cumulativeFundingRateIndex;
        this.u64Padding = fields.u64Padding;
    }
    UpdateFundingRateEvent.reified = function () {
        var _this = this;
        return {
            typeName: UpdateFundingRateEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateFundingRateEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return UpdateFundingRateEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return UpdateFundingRateEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return UpdateFundingRateEvent.fromBcs(data); },
            bcs: UpdateFundingRateEvent.bcs,
            fromJSONField: function (field) { return UpdateFundingRateEvent.fromJSONField(field); },
            fromJSON: function (json) { return UpdateFundingRateEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return UpdateFundingRateEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateFundingRateEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new UpdateFundingRateEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(UpdateFundingRateEvent, "r", {
        get: function () {
            return UpdateFundingRateEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    UpdateFundingRateEvent.phantom = function () {
        return (0, reified_1.phantom)(UpdateFundingRateEvent.reified());
    };
    Object.defineProperty(UpdateFundingRateEvent, "p", {
        get: function () {
            return UpdateFundingRateEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateFundingRateEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateFundingRateEvent", {
                base_token: structs_2.TypeName.bcs,
                new_funding_ts_ms: bcs_1.bcs.u64(),
                intervals_count: bcs_1.bcs.u64(),
                previous_cumulative_funding_rate_index_sign: bcs_1.bcs.bool(),
                previous_cumulative_funding_rate_index: bcs_1.bcs.u64(),
                cumulative_funding_rate_index_sign: bcs_1.bcs.bool(),
                cumulative_funding_rate_index: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    UpdateFundingRateEvent.fromFields = function (fields) {
        return UpdateFundingRateEvent.reified().new({
            baseToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.base_token),
            newFundingTsMs: (0, reified_1.decodeFromFields)("u64", fields.new_funding_ts_ms),
            intervalsCount: (0, reified_1.decodeFromFields)("u64", fields.intervals_count),
            previousCumulativeFundingRateIndexSign: (0, reified_1.decodeFromFields)("bool", fields.previous_cumulative_funding_rate_index_sign),
            previousCumulativeFundingRateIndex: (0, reified_1.decodeFromFields)("u64", fields.previous_cumulative_funding_rate_index),
            cumulativeFundingRateIndexSign: (0, reified_1.decodeFromFields)("bool", fields.cumulative_funding_rate_index_sign),
            cumulativeFundingRateIndex: (0, reified_1.decodeFromFields)("u64", fields.cumulative_funding_rate_index),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    UpdateFundingRateEvent.fromFieldsWithTypes = function (item) {
        if (!isUpdateFundingRateEvent(item.type)) {
            throw new Error("not a UpdateFundingRateEvent type");
        }
        return UpdateFundingRateEvent.reified().new({
            baseToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.base_token),
            newFundingTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_funding_ts_ms),
            intervalsCount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.intervals_count),
            previousCumulativeFundingRateIndexSign: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.previous_cumulative_funding_rate_index_sign),
            previousCumulativeFundingRateIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.previous_cumulative_funding_rate_index),
            cumulativeFundingRateIndexSign: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.cumulative_funding_rate_index_sign),
            cumulativeFundingRateIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cumulative_funding_rate_index),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    UpdateFundingRateEvent.fromBcs = function (data) {
        return UpdateFundingRateEvent.fromFields(UpdateFundingRateEvent.bcs.parse(data));
    };
    UpdateFundingRateEvent.prototype.toJSONField = function () {
        return {
            baseToken: this.baseToken.toJSONField(),
            newFundingTsMs: this.newFundingTsMs.toString(),
            intervalsCount: this.intervalsCount.toString(),
            previousCumulativeFundingRateIndexSign: this.previousCumulativeFundingRateIndexSign,
            previousCumulativeFundingRateIndex: this.previousCumulativeFundingRateIndex.toString(),
            cumulativeFundingRateIndexSign: this.cumulativeFundingRateIndexSign,
            cumulativeFundingRateIndex: this.cumulativeFundingRateIndex.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    UpdateFundingRateEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    UpdateFundingRateEvent.fromJSONField = function (field) {
        return UpdateFundingRateEvent.reified().new({
            baseToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.baseToken),
            newFundingTsMs: (0, reified_1.decodeFromJSONField)("u64", field.newFundingTsMs),
            intervalsCount: (0, reified_1.decodeFromJSONField)("u64", field.intervalsCount),
            previousCumulativeFundingRateIndexSign: (0, reified_1.decodeFromJSONField)("bool", field.previousCumulativeFundingRateIndexSign),
            previousCumulativeFundingRateIndex: (0, reified_1.decodeFromJSONField)("u64", field.previousCumulativeFundingRateIndex),
            cumulativeFundingRateIndexSign: (0, reified_1.decodeFromJSONField)("bool", field.cumulativeFundingRateIndexSign),
            cumulativeFundingRateIndex: (0, reified_1.decodeFromJSONField)("u64", field.cumulativeFundingRateIndex),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    UpdateFundingRateEvent.fromJSON = function (json) {
        if (json.$typeName !== UpdateFundingRateEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return UpdateFundingRateEvent.fromJSONField(json);
    };
    UpdateFundingRateEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateFundingRateEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a UpdateFundingRateEvent object"));
        }
        return UpdateFundingRateEvent.fromFieldsWithTypes(content);
    };
    UpdateFundingRateEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateFundingRateEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateFundingRateEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateFundingRateEvent object"));
                        }
                        return [2 /*return*/, UpdateFundingRateEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateFundingRateEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateFundingRateEvent";
    UpdateFundingRateEvent.$numTypeParams = 0;
    return UpdateFundingRateEvent;
}());
exports.UpdateFundingRateEvent = UpdateFundingRateEvent;
/* ============================== UpdateMarketConfigEvent =============================== */
function isUpdateMarketConfigEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateMarketConfigEvent";
}
var UpdateMarketConfigEvent = /** @class */ (function () {
    function UpdateMarketConfigEvent(typeArgs, fields) {
        this.$typeName = UpdateMarketConfigEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateMarketConfigEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.index = fields.index;
        this.baseTokenType = fields.baseTokenType;
        this.previousMarketConfig = fields.previousMarketConfig;
        this.newMarketConfig = fields.newMarketConfig;
        this.u64Padding = fields.u64Padding;
    }
    UpdateMarketConfigEvent.reified = function () {
        var _this = this;
        return {
            typeName: UpdateMarketConfigEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateMarketConfigEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return UpdateMarketConfigEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return UpdateMarketConfigEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return UpdateMarketConfigEvent.fromBcs(data); },
            bcs: UpdateMarketConfigEvent.bcs,
            fromJSONField: function (field) { return UpdateMarketConfigEvent.fromJSONField(field); },
            fromJSON: function (json) { return UpdateMarketConfigEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return UpdateMarketConfigEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateMarketConfigEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new UpdateMarketConfigEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(UpdateMarketConfigEvent, "r", {
        get: function () {
            return UpdateMarketConfigEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    UpdateMarketConfigEvent.phantom = function () {
        return (0, reified_1.phantom)(UpdateMarketConfigEvent.reified());
    };
    Object.defineProperty(UpdateMarketConfigEvent, "p", {
        get: function () {
            return UpdateMarketConfigEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateMarketConfigEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateMarketConfigEvent", {
                index: bcs_1.bcs.u64(),
                base_token_type: structs_2.TypeName.bcs,
                previous_market_config: MarketConfig.bcs,
                new_market_config: MarketConfig.bcs,
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    UpdateMarketConfigEvent.fromFields = function (fields) {
        return UpdateMarketConfigEvent.reified().new({
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            baseTokenType: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.base_token_type),
            previousMarketConfig: (0, reified_1.decodeFromFields)(MarketConfig.reified(), fields.previous_market_config),
            newMarketConfig: (0, reified_1.decodeFromFields)(MarketConfig.reified(), fields.new_market_config),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    UpdateMarketConfigEvent.fromFieldsWithTypes = function (item) {
        if (!isUpdateMarketConfigEvent(item.type)) {
            throw new Error("not a UpdateMarketConfigEvent type");
        }
        return UpdateMarketConfigEvent.reified().new({
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            baseTokenType: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.base_token_type),
            previousMarketConfig: (0, reified_1.decodeFromFieldsWithTypes)(MarketConfig.reified(), item.fields.previous_market_config),
            newMarketConfig: (0, reified_1.decodeFromFieldsWithTypes)(MarketConfig.reified(), item.fields.new_market_config),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    UpdateMarketConfigEvent.fromBcs = function (data) {
        return UpdateMarketConfigEvent.fromFields(UpdateMarketConfigEvent.bcs.parse(data));
    };
    UpdateMarketConfigEvent.prototype.toJSONField = function () {
        return {
            index: this.index.toString(),
            baseTokenType: this.baseTokenType.toJSONField(),
            previousMarketConfig: this.previousMarketConfig.toJSONField(),
            newMarketConfig: this.newMarketConfig.toJSONField(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    UpdateMarketConfigEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    UpdateMarketConfigEvent.fromJSONField = function (field) {
        return UpdateMarketConfigEvent.reified().new({
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            baseTokenType: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.baseTokenType),
            previousMarketConfig: (0, reified_1.decodeFromJSONField)(MarketConfig.reified(), field.previousMarketConfig),
            newMarketConfig: (0, reified_1.decodeFromJSONField)(MarketConfig.reified(), field.newMarketConfig),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    UpdateMarketConfigEvent.fromJSON = function (json) {
        if (json.$typeName !== UpdateMarketConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return UpdateMarketConfigEvent.fromJSONField(json);
    };
    UpdateMarketConfigEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateMarketConfigEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a UpdateMarketConfigEvent object"));
        }
        return UpdateMarketConfigEvent.fromFieldsWithTypes(content);
    };
    UpdateMarketConfigEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateMarketConfigEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateMarketConfigEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateMarketConfigEvent object"));
                        }
                        return [2 /*return*/, UpdateMarketConfigEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateMarketConfigEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateMarketConfigEvent";
    UpdateMarketConfigEvent.$numTypeParams = 0;
    return UpdateMarketConfigEvent;
}());
exports.UpdateMarketConfigEvent = UpdateMarketConfigEvent;
/* ============================== UpdateProtocolFeeShareBpEvent =============================== */
function isUpdateProtocolFeeShareBpEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateProtocolFeeShareBpEvent";
}
var UpdateProtocolFeeShareBpEvent = /** @class */ (function () {
    function UpdateProtocolFeeShareBpEvent(typeArgs, fields) {
        this.$typeName = UpdateProtocolFeeShareBpEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateProtocolFeeShareBpEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.index = fields.index;
        this.previousProtocolFeeShareBp = fields.previousProtocolFeeShareBp;
        this.newProtocolFeeShareBp = fields.newProtocolFeeShareBp;
        this.u64Padding = fields.u64Padding;
    }
    UpdateProtocolFeeShareBpEvent.reified = function () {
        var _this = this;
        return {
            typeName: UpdateProtocolFeeShareBpEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateProtocolFeeShareBpEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return UpdateProtocolFeeShareBpEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return UpdateProtocolFeeShareBpEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return UpdateProtocolFeeShareBpEvent.fromBcs(data); },
            bcs: UpdateProtocolFeeShareBpEvent.bcs,
            fromJSONField: function (field) { return UpdateProtocolFeeShareBpEvent.fromJSONField(field); },
            fromJSON: function (json) { return UpdateProtocolFeeShareBpEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return UpdateProtocolFeeShareBpEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateProtocolFeeShareBpEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new UpdateProtocolFeeShareBpEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(UpdateProtocolFeeShareBpEvent, "r", {
        get: function () {
            return UpdateProtocolFeeShareBpEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    UpdateProtocolFeeShareBpEvent.phantom = function () {
        return (0, reified_1.phantom)(UpdateProtocolFeeShareBpEvent.reified());
    };
    Object.defineProperty(UpdateProtocolFeeShareBpEvent, "p", {
        get: function () {
            return UpdateProtocolFeeShareBpEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateProtocolFeeShareBpEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateProtocolFeeShareBpEvent", {
                index: bcs_1.bcs.u64(),
                previous_protocol_fee_share_bp: bcs_1.bcs.u64(),
                new_protocol_fee_share_bp: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    UpdateProtocolFeeShareBpEvent.fromFields = function (fields) {
        return UpdateProtocolFeeShareBpEvent.reified().new({
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            previousProtocolFeeShareBp: (0, reified_1.decodeFromFields)("u64", fields.previous_protocol_fee_share_bp),
            newProtocolFeeShareBp: (0, reified_1.decodeFromFields)("u64", fields.new_protocol_fee_share_bp),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    UpdateProtocolFeeShareBpEvent.fromFieldsWithTypes = function (item) {
        if (!isUpdateProtocolFeeShareBpEvent(item.type)) {
            throw new Error("not a UpdateProtocolFeeShareBpEvent type");
        }
        return UpdateProtocolFeeShareBpEvent.reified().new({
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            previousProtocolFeeShareBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.previous_protocol_fee_share_bp),
            newProtocolFeeShareBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_protocol_fee_share_bp),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    UpdateProtocolFeeShareBpEvent.fromBcs = function (data) {
        return UpdateProtocolFeeShareBpEvent.fromFields(UpdateProtocolFeeShareBpEvent.bcs.parse(data));
    };
    UpdateProtocolFeeShareBpEvent.prototype.toJSONField = function () {
        return {
            index: this.index.toString(),
            previousProtocolFeeShareBp: this.previousProtocolFeeShareBp.toString(),
            newProtocolFeeShareBp: this.newProtocolFeeShareBp.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    UpdateProtocolFeeShareBpEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    UpdateProtocolFeeShareBpEvent.fromJSONField = function (field) {
        return UpdateProtocolFeeShareBpEvent.reified().new({
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            previousProtocolFeeShareBp: (0, reified_1.decodeFromJSONField)("u64", field.previousProtocolFeeShareBp),
            newProtocolFeeShareBp: (0, reified_1.decodeFromJSONField)("u64", field.newProtocolFeeShareBp),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    UpdateProtocolFeeShareBpEvent.fromJSON = function (json) {
        if (json.$typeName !== UpdateProtocolFeeShareBpEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return UpdateProtocolFeeShareBpEvent.fromJSONField(json);
    };
    UpdateProtocolFeeShareBpEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateProtocolFeeShareBpEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a UpdateProtocolFeeShareBpEvent object"));
        }
        return UpdateProtocolFeeShareBpEvent.fromFieldsWithTypes(content);
    };
    UpdateProtocolFeeShareBpEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateProtocolFeeShareBpEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateProtocolFeeShareBpEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateProtocolFeeShareBpEvent object"));
                        }
                        return [2 /*return*/, UpdateProtocolFeeShareBpEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateProtocolFeeShareBpEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::trading::UpdateProtocolFeeShareBpEvent";
    UpdateProtocolFeeShareBpEvent.$numTypeParams = 0;
    return UpdateProtocolFeeShareBpEvent;
}());
exports.UpdateProtocolFeeShareBpEvent = UpdateProtocolFeeShareBpEvent;
