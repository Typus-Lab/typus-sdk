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
exports.TradingOrder = exports.RemovePositionEvent = exports.RealizedPnlEvent = exports.RealizeFundingEvent = exports.Position = exports.OrderFilledEvent = exports.OptionCollateralInfo = void 0;
exports.isOptionCollateralInfo = isOptionCollateralInfo;
exports.isOrderFilledEvent = isOrderFilledEvent;
exports.isPosition = isPosition;
exports.isRealizeFundingEvent = isRealizeFundingEvent;
exports.isRealizedPnlEvent = isRealizedPnlEvent;
exports.isRemovePositionEvent = isRemovePositionEvent;
exports.isTradingOrder = isTradingOrder;
var reified = __importStar(require("../../_framework/reified"));
var structs_1 = require("../../_dependencies/source/0x1/option/structs");
var structs_2 = require("../../_dependencies/source/0x1/type-name/structs");
var structs_3 = require("../../_dependencies/source/0x2/object/structs");
var reified_1 = require("../../_framework/reified");
var util_1 = require("../../_framework/util");
var structs_4 = require("../symbol/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== OptionCollateralInfo =============================== */
function isOptionCollateralInfo(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::OptionCollateralInfo";
}
var OptionCollateralInfo = /** @class */ (function () {
    function OptionCollateralInfo(typeArgs, fields) {
        this.$typeName = OptionCollateralInfo.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([OptionCollateralInfo.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.index = fields.index;
        this.bidToken = fields.bidToken;
    }
    OptionCollateralInfo.reified = function () {
        var _this = this;
        return {
            typeName: OptionCollateralInfo.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([OptionCollateralInfo.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return OptionCollateralInfo.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return OptionCollateralInfo.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return OptionCollateralInfo.fromBcs(data); },
            bcs: OptionCollateralInfo.bcs,
            fromJSONField: function (field) { return OptionCollateralInfo.fromJSONField(field); },
            fromJSON: function (json) { return OptionCollateralInfo.fromJSON(json); },
            fromSuiParsedData: function (content) { return OptionCollateralInfo.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, OptionCollateralInfo.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new OptionCollateralInfo([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(OptionCollateralInfo, "r", {
        get: function () {
            return OptionCollateralInfo.reified();
        },
        enumerable: false,
        configurable: true
    });
    OptionCollateralInfo.phantom = function () {
        return (0, reified_1.phantom)(OptionCollateralInfo.reified());
    };
    Object.defineProperty(OptionCollateralInfo, "p", {
        get: function () {
            return OptionCollateralInfo.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionCollateralInfo, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("OptionCollateralInfo", {
                index: bcs_1.bcs.u64(),
                bid_token: structs_2.TypeName.bcs,
            });
        },
        enumerable: false,
        configurable: true
    });
    OptionCollateralInfo.fromFields = function (fields) {
        return OptionCollateralInfo.reified().new({
            index: (0, reified_1.decodeFromFields)("u64", fields.index),
            bidToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.bid_token),
        });
    };
    OptionCollateralInfo.fromFieldsWithTypes = function (item) {
        if (!isOptionCollateralInfo(item.type)) {
            throw new Error("not a OptionCollateralInfo type");
        }
        return OptionCollateralInfo.reified().new({
            index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index),
            bidToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.bid_token),
        });
    };
    OptionCollateralInfo.fromBcs = function (data) {
        return OptionCollateralInfo.fromFields(OptionCollateralInfo.bcs.parse(data));
    };
    OptionCollateralInfo.prototype.toJSONField = function () {
        return {
            index: this.index.toString(),
            bidToken: this.bidToken.toJSONField(),
        };
    };
    OptionCollateralInfo.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    OptionCollateralInfo.fromJSONField = function (field) {
        return OptionCollateralInfo.reified().new({
            index: (0, reified_1.decodeFromJSONField)("u64", field.index),
            bidToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.bidToken),
        });
    };
    OptionCollateralInfo.fromJSON = function (json) {
        if (json.$typeName !== OptionCollateralInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return OptionCollateralInfo.fromJSONField(json);
    };
    OptionCollateralInfo.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isOptionCollateralInfo(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a OptionCollateralInfo object"));
        }
        return OptionCollateralInfo.fromFieldsWithTypes(content);
    };
    OptionCollateralInfo.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching OptionCollateralInfo object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isOptionCollateralInfo(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a OptionCollateralInfo object"));
                        }
                        return [2 /*return*/, OptionCollateralInfo.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    OptionCollateralInfo.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::OptionCollateralInfo";
    OptionCollateralInfo.$numTypeParams = 0;
    return OptionCollateralInfo;
}());
exports.OptionCollateralInfo = OptionCollateralInfo;
/* ============================== OrderFilledEvent =============================== */
function isOrderFilledEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::OrderFilledEvent";
}
var OrderFilledEvent = /** @class */ (function () {
    function OrderFilledEvent(typeArgs, fields) {
        this.$typeName = OrderFilledEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([OrderFilledEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        this.collateralToken = fields.collateralToken;
        this.symbol = fields.symbol;
        this.orderId = fields.orderId;
        this.linkedPositionId = fields.linkedPositionId;
        this.newPositionId = fields.newPositionId;
        this.filledSize = fields.filledSize;
        this.filledPrice = fields.filledPrice;
        this.positionSide = fields.positionSide;
        this.positionSize = fields.positionSize;
        this.positionAveragePrice = fields.positionAveragePrice;
        this.realizedTradingFee = fields.realizedTradingFee;
        this.realizedBorrowFee = fields.realizedBorrowFee;
        this.u64Padding = fields.u64Padding;
    }
    OrderFilledEvent.reified = function () {
        var _this = this;
        return {
            typeName: OrderFilledEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([OrderFilledEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return OrderFilledEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return OrderFilledEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return OrderFilledEvent.fromBcs(data); },
            bcs: OrderFilledEvent.bcs,
            fromJSONField: function (field) { return OrderFilledEvent.fromJSONField(field); },
            fromJSON: function (json) { return OrderFilledEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return OrderFilledEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, OrderFilledEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new OrderFilledEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(OrderFilledEvent, "r", {
        get: function () {
            return OrderFilledEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    OrderFilledEvent.phantom = function () {
        return (0, reified_1.phantom)(OrderFilledEvent.reified());
    };
    Object.defineProperty(OrderFilledEvent, "p", {
        get: function () {
            return OrderFilledEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderFilledEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("OrderFilledEvent", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                collateral_token: structs_2.TypeName.bcs,
                symbol: structs_4.Symbol.bcs,
                order_id: bcs_1.bcs.u64(),
                linked_position_id: structs_1.Option.bcs(bcs_1.bcs.u64()),
                new_position_id: structs_1.Option.bcs(bcs_1.bcs.u64()),
                filled_size: bcs_1.bcs.u64(),
                filled_price: bcs_1.bcs.u64(),
                position_side: bcs_1.bcs.bool(),
                position_size: bcs_1.bcs.u64(),
                position_average_price: bcs_1.bcs.u64(),
                realized_trading_fee: bcs_1.bcs.u64(),
                realized_borrow_fee: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    OrderFilledEvent.fromFields = function (fields) {
        return OrderFilledEvent.reified().new({
            user: (0, reified_1.decodeFromFields)("address", fields.user),
            collateralToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.collateral_token),
            symbol: (0, reified_1.decodeFromFields)(structs_4.Symbol.reified(), fields.symbol),
            orderId: (0, reified_1.decodeFromFields)("u64", fields.order_id),
            linkedPositionId: (0, reified_1.decodeFromFields)(structs_1.Option.reified("u64"), fields.linked_position_id),
            newPositionId: (0, reified_1.decodeFromFields)(structs_1.Option.reified("u64"), fields.new_position_id),
            filledSize: (0, reified_1.decodeFromFields)("u64", fields.filled_size),
            filledPrice: (0, reified_1.decodeFromFields)("u64", fields.filled_price),
            positionSide: (0, reified_1.decodeFromFields)("bool", fields.position_side),
            positionSize: (0, reified_1.decodeFromFields)("u64", fields.position_size),
            positionAveragePrice: (0, reified_1.decodeFromFields)("u64", fields.position_average_price),
            realizedTradingFee: (0, reified_1.decodeFromFields)("u64", fields.realized_trading_fee),
            realizedBorrowFee: (0, reified_1.decodeFromFields)("u64", fields.realized_borrow_fee),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    OrderFilledEvent.fromFieldsWithTypes = function (item) {
        if (!isOrderFilledEvent(item.type)) {
            throw new Error("not a OrderFilledEvent type");
        }
        return OrderFilledEvent.reified().new({
            user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user),
            collateralToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.collateral_token),
            symbol: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Symbol.reified(), item.fields.symbol),
            orderId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.order_id),
            linkedPositionId: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("u64"), item.fields.linked_position_id),
            newPositionId: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("u64"), item.fields.new_position_id),
            filledSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.filled_size),
            filledPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.filled_price),
            positionSide: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.position_side),
            positionSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.position_size),
            positionAveragePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.position_average_price),
            realizedTradingFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.realized_trading_fee),
            realizedBorrowFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.realized_borrow_fee),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    OrderFilledEvent.fromBcs = function (data) {
        return OrderFilledEvent.fromFields(OrderFilledEvent.bcs.parse(data));
    };
    OrderFilledEvent.prototype.toJSONField = function () {
        return {
            user: this.user,
            collateralToken: this.collateralToken.toJSONField(),
            symbol: this.symbol.toJSONField(),
            orderId: this.orderId.toString(),
            linkedPositionId: (0, reified_1.fieldToJSON)("0x1::option::Option<u64>", this.linkedPositionId),
            newPositionId: (0, reified_1.fieldToJSON)("0x1::option::Option<u64>", this.newPositionId),
            filledSize: this.filledSize.toString(),
            filledPrice: this.filledPrice.toString(),
            positionSide: this.positionSide,
            positionSize: this.positionSize.toString(),
            positionAveragePrice: this.positionAveragePrice.toString(),
            realizedTradingFee: this.realizedTradingFee.toString(),
            realizedBorrowFee: this.realizedBorrowFee.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    OrderFilledEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    OrderFilledEvent.fromJSONField = function (field) {
        return OrderFilledEvent.reified().new({
            user: (0, reified_1.decodeFromJSONField)("address", field.user),
            collateralToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.collateralToken),
            symbol: (0, reified_1.decodeFromJSONField)(structs_4.Symbol.reified(), field.symbol),
            orderId: (0, reified_1.decodeFromJSONField)("u64", field.orderId),
            linkedPositionId: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("u64"), field.linkedPositionId),
            newPositionId: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("u64"), field.newPositionId),
            filledSize: (0, reified_1.decodeFromJSONField)("u64", field.filledSize),
            filledPrice: (0, reified_1.decodeFromJSONField)("u64", field.filledPrice),
            positionSide: (0, reified_1.decodeFromJSONField)("bool", field.positionSide),
            positionSize: (0, reified_1.decodeFromJSONField)("u64", field.positionSize),
            positionAveragePrice: (0, reified_1.decodeFromJSONField)("u64", field.positionAveragePrice),
            realizedTradingFee: (0, reified_1.decodeFromJSONField)("u64", field.realizedTradingFee),
            realizedBorrowFee: (0, reified_1.decodeFromJSONField)("u64", field.realizedBorrowFee),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    OrderFilledEvent.fromJSON = function (json) {
        if (json.$typeName !== OrderFilledEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return OrderFilledEvent.fromJSONField(json);
    };
    OrderFilledEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isOrderFilledEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a OrderFilledEvent object"));
        }
        return OrderFilledEvent.fromFieldsWithTypes(content);
    };
    OrderFilledEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching OrderFilledEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isOrderFilledEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a OrderFilledEvent object"));
                        }
                        return [2 /*return*/, OrderFilledEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    OrderFilledEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::OrderFilledEvent";
    OrderFilledEvent.$numTypeParams = 0;
    return OrderFilledEvent;
}());
exports.OrderFilledEvent = OrderFilledEvent;
/* ============================== Position =============================== */
function isPosition(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::Position";
}
var Position = /** @class */ (function () {
    function Position(typeArgs, fields) {
        this.$typeName = Position.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Position.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        this.createTsMs = fields.createTsMs;
        this.positionId = fields.positionId;
        this.linkedOrderIds = fields.linkedOrderIds;
        this.linkedOrderPrices = fields.linkedOrderPrices;
        this.user = fields.user;
        this.isLong = fields.isLong;
        this.size = fields.size;
        this.sizeDecimal = fields.sizeDecimal;
        this.collateralToken = fields.collateralToken;
        this.collateralTokenDecimal = fields.collateralTokenDecimal;
        this.symbol = fields.symbol;
        this.collateralAmount = fields.collateralAmount;
        this.reserveAmount = fields.reserveAmount;
        this.averagePrice = fields.averagePrice;
        this.entryBorrowIndex = fields.entryBorrowIndex;
        this.entryFundingRateIndexSign = fields.entryFundingRateIndexSign;
        this.entryFundingRateIndex = fields.entryFundingRateIndex;
        this.unrealizedLoss = fields.unrealizedLoss;
        this.unrealizedFundingSign = fields.unrealizedFundingSign;
        this.unrealizedFundingFee = fields.unrealizedFundingFee;
        this.unrealizedBorrowFee = fields.unrealizedBorrowFee;
        this.unrealizedRebate = fields.unrealizedRebate;
        this.optionCollateralInfo = fields.optionCollateralInfo;
        this.u64Padding = fields.u64Padding;
    }
    Position.reified = function () {
        var _this = this;
        return {
            typeName: Position.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Position.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return Position.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return Position.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return Position.fromBcs(data); },
            bcs: Position.bcs,
            fromJSONField: function (field) { return Position.fromJSONField(field); },
            fromJSON: function (json) { return Position.fromJSON(json); },
            fromSuiParsedData: function (content) { return Position.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Position.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new Position([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(Position, "r", {
        get: function () {
            return Position.reified();
        },
        enumerable: false,
        configurable: true
    });
    Position.phantom = function () {
        return (0, reified_1.phantom)(Position.reified());
    };
    Object.defineProperty(Position, "p", {
        get: function () {
            return Position.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Position, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Position", {
                id: structs_3.UID.bcs,
                create_ts_ms: bcs_1.bcs.u64(),
                position_id: bcs_1.bcs.u64(),
                linked_order_ids: bcs_1.bcs.vector(bcs_1.bcs.u64()),
                linked_order_prices: bcs_1.bcs.vector(bcs_1.bcs.u64()),
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                is_long: bcs_1.bcs.bool(),
                size: bcs_1.bcs.u64(),
                size_decimal: bcs_1.bcs.u64(),
                collateral_token: structs_2.TypeName.bcs,
                collateral_token_decimal: bcs_1.bcs.u64(),
                symbol: structs_4.Symbol.bcs,
                collateral_amount: bcs_1.bcs.u64(),
                reserve_amount: bcs_1.bcs.u64(),
                average_price: bcs_1.bcs.u64(),
                entry_borrow_index: bcs_1.bcs.u64(),
                entry_funding_rate_index_sign: bcs_1.bcs.bool(),
                entry_funding_rate_index: bcs_1.bcs.u64(),
                unrealized_loss: bcs_1.bcs.u64(),
                unrealized_funding_sign: bcs_1.bcs.bool(),
                unrealized_funding_fee: bcs_1.bcs.u64(),
                unrealized_borrow_fee: bcs_1.bcs.u64(),
                unrealized_rebate: bcs_1.bcs.u64(),
                option_collateral_info: structs_1.Option.bcs(OptionCollateralInfo.bcs),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    Position.fromFields = function (fields) {
        return Position.reified().new({
            id: (0, reified_1.decodeFromFields)(structs_3.UID.reified(), fields.id),
            createTsMs: (0, reified_1.decodeFromFields)("u64", fields.create_ts_ms),
            positionId: (0, reified_1.decodeFromFields)("u64", fields.position_id),
            linkedOrderIds: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.linked_order_ids),
            linkedOrderPrices: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.linked_order_prices),
            user: (0, reified_1.decodeFromFields)("address", fields.user),
            isLong: (0, reified_1.decodeFromFields)("bool", fields.is_long),
            size: (0, reified_1.decodeFromFields)("u64", fields.size),
            sizeDecimal: (0, reified_1.decodeFromFields)("u64", fields.size_decimal),
            collateralToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.collateral_token),
            collateralTokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.collateral_token_decimal),
            symbol: (0, reified_1.decodeFromFields)(structs_4.Symbol.reified(), fields.symbol),
            collateralAmount: (0, reified_1.decodeFromFields)("u64", fields.collateral_amount),
            reserveAmount: (0, reified_1.decodeFromFields)("u64", fields.reserve_amount),
            averagePrice: (0, reified_1.decodeFromFields)("u64", fields.average_price),
            entryBorrowIndex: (0, reified_1.decodeFromFields)("u64", fields.entry_borrow_index),
            entryFundingRateIndexSign: (0, reified_1.decodeFromFields)("bool", fields.entry_funding_rate_index_sign),
            entryFundingRateIndex: (0, reified_1.decodeFromFields)("u64", fields.entry_funding_rate_index),
            unrealizedLoss: (0, reified_1.decodeFromFields)("u64", fields.unrealized_loss),
            unrealizedFundingSign: (0, reified_1.decodeFromFields)("bool", fields.unrealized_funding_sign),
            unrealizedFundingFee: (0, reified_1.decodeFromFields)("u64", fields.unrealized_funding_fee),
            unrealizedBorrowFee: (0, reified_1.decodeFromFields)("u64", fields.unrealized_borrow_fee),
            unrealizedRebate: (0, reified_1.decodeFromFields)("u64", fields.unrealized_rebate),
            optionCollateralInfo: (0, reified_1.decodeFromFields)(structs_1.Option.reified(OptionCollateralInfo.reified()), fields.option_collateral_info),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    Position.fromFieldsWithTypes = function (item) {
        if (!isPosition(item.type)) {
            throw new Error("not a Position type");
        }
        return Position.reified().new({
            id: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.UID.reified(), item.fields.id),
            createTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.create_ts_ms),
            positionId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.position_id),
            linkedOrderIds: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.linked_order_ids),
            linkedOrderPrices: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.linked_order_prices),
            user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user),
            isLong: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_long),
            size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size),
            sizeDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size_decimal),
            collateralToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.collateral_token),
            collateralTokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.collateral_token_decimal),
            symbol: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Symbol.reified(), item.fields.symbol),
            collateralAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.collateral_amount),
            reserveAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.reserve_amount),
            averagePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.average_price),
            entryBorrowIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.entry_borrow_index),
            entryFundingRateIndexSign: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.entry_funding_rate_index_sign),
            entryFundingRateIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.entry_funding_rate_index),
            unrealizedLoss: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unrealized_loss),
            unrealizedFundingSign: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.unrealized_funding_sign),
            unrealizedFundingFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unrealized_funding_fee),
            unrealizedBorrowFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unrealized_borrow_fee),
            unrealizedRebate: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unrealized_rebate),
            optionCollateralInfo: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(OptionCollateralInfo.reified()), item.fields.option_collateral_info),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    Position.fromBcs = function (data) {
        return Position.fromFields(Position.bcs.parse(data));
    };
    Position.prototype.toJSONField = function () {
        return {
            id: this.id,
            createTsMs: this.createTsMs.toString(),
            positionId: this.positionId.toString(),
            linkedOrderIds: (0, reified_1.fieldToJSON)("vector<u64>", this.linkedOrderIds),
            linkedOrderPrices: (0, reified_1.fieldToJSON)("vector<u64>", this.linkedOrderPrices),
            user: this.user,
            isLong: this.isLong,
            size: this.size.toString(),
            sizeDecimal: this.sizeDecimal.toString(),
            collateralToken: this.collateralToken.toJSONField(),
            collateralTokenDecimal: this.collateralTokenDecimal.toString(),
            symbol: this.symbol.toJSONField(),
            collateralAmount: this.collateralAmount.toString(),
            reserveAmount: this.reserveAmount.toString(),
            averagePrice: this.averagePrice.toString(),
            entryBorrowIndex: this.entryBorrowIndex.toString(),
            entryFundingRateIndexSign: this.entryFundingRateIndexSign,
            entryFundingRateIndex: this.entryFundingRateIndex.toString(),
            unrealizedLoss: this.unrealizedLoss.toString(),
            unrealizedFundingSign: this.unrealizedFundingSign,
            unrealizedFundingFee: this.unrealizedFundingFee.toString(),
            unrealizedBorrowFee: this.unrealizedBorrowFee.toString(),
            unrealizedRebate: this.unrealizedRebate.toString(),
            optionCollateralInfo: (0, reified_1.fieldToJSON)("0x1::option::Option<0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::OptionCollateralInfo>", this.optionCollateralInfo),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    Position.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    Position.fromJSONField = function (field) {
        return Position.reified().new({
            id: (0, reified_1.decodeFromJSONField)(structs_3.UID.reified(), field.id),
            createTsMs: (0, reified_1.decodeFromJSONField)("u64", field.createTsMs),
            positionId: (0, reified_1.decodeFromJSONField)("u64", field.positionId),
            linkedOrderIds: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.linkedOrderIds),
            linkedOrderPrices: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.linkedOrderPrices),
            user: (0, reified_1.decodeFromJSONField)("address", field.user),
            isLong: (0, reified_1.decodeFromJSONField)("bool", field.isLong),
            size: (0, reified_1.decodeFromJSONField)("u64", field.size),
            sizeDecimal: (0, reified_1.decodeFromJSONField)("u64", field.sizeDecimal),
            collateralToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.collateralToken),
            collateralTokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.collateralTokenDecimal),
            symbol: (0, reified_1.decodeFromJSONField)(structs_4.Symbol.reified(), field.symbol),
            collateralAmount: (0, reified_1.decodeFromJSONField)("u64", field.collateralAmount),
            reserveAmount: (0, reified_1.decodeFromJSONField)("u64", field.reserveAmount),
            averagePrice: (0, reified_1.decodeFromJSONField)("u64", field.averagePrice),
            entryBorrowIndex: (0, reified_1.decodeFromJSONField)("u64", field.entryBorrowIndex),
            entryFundingRateIndexSign: (0, reified_1.decodeFromJSONField)("bool", field.entryFundingRateIndexSign),
            entryFundingRateIndex: (0, reified_1.decodeFromJSONField)("u64", field.entryFundingRateIndex),
            unrealizedLoss: (0, reified_1.decodeFromJSONField)("u64", field.unrealizedLoss),
            unrealizedFundingSign: (0, reified_1.decodeFromJSONField)("bool", field.unrealizedFundingSign),
            unrealizedFundingFee: (0, reified_1.decodeFromJSONField)("u64", field.unrealizedFundingFee),
            unrealizedBorrowFee: (0, reified_1.decodeFromJSONField)("u64", field.unrealizedBorrowFee),
            unrealizedRebate: (0, reified_1.decodeFromJSONField)("u64", field.unrealizedRebate),
            optionCollateralInfo: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(OptionCollateralInfo.reified()), field.optionCollateralInfo),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    Position.fromJSON = function (json) {
        if (json.$typeName !== Position.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return Position.fromJSONField(json);
    };
    Position.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPosition(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a Position object"));
        }
        return Position.fromFieldsWithTypes(content);
    };
    Position.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Position object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPosition(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Position object"));
                        }
                        return [2 /*return*/, Position.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Position.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::Position";
    Position.$numTypeParams = 0;
    return Position;
}());
exports.Position = Position;
/* ============================== RealizeFundingEvent =============================== */
function isRealizeFundingEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RealizeFundingEvent";
}
var RealizeFundingEvent = /** @class */ (function () {
    function RealizeFundingEvent(typeArgs, fields) {
        this.$typeName = RealizeFundingEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RealizeFundingEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        this.collateralToken = fields.collateralToken;
        this.symbol = fields.symbol;
        this.positionId = fields.positionId;
        this.realizedFundingSign = fields.realizedFundingSign;
        this.realizedFundingFee = fields.realizedFundingFee;
        this.u64Padding = fields.u64Padding;
    }
    RealizeFundingEvent.reified = function () {
        var _this = this;
        return {
            typeName: RealizeFundingEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RealizeFundingEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return RealizeFundingEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return RealizeFundingEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return RealizeFundingEvent.fromBcs(data); },
            bcs: RealizeFundingEvent.bcs,
            fromJSONField: function (field) { return RealizeFundingEvent.fromJSONField(field); },
            fromJSON: function (json) { return RealizeFundingEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return RealizeFundingEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RealizeFundingEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new RealizeFundingEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(RealizeFundingEvent, "r", {
        get: function () {
            return RealizeFundingEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    RealizeFundingEvent.phantom = function () {
        return (0, reified_1.phantom)(RealizeFundingEvent.reified());
    };
    Object.defineProperty(RealizeFundingEvent, "p", {
        get: function () {
            return RealizeFundingEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RealizeFundingEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RealizeFundingEvent", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                collateral_token: structs_2.TypeName.bcs,
                symbol: structs_4.Symbol.bcs,
                position_id: bcs_1.bcs.u64(),
                realized_funding_sign: bcs_1.bcs.bool(),
                realized_funding_fee: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    RealizeFundingEvent.fromFields = function (fields) {
        return RealizeFundingEvent.reified().new({
            user: (0, reified_1.decodeFromFields)("address", fields.user),
            collateralToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.collateral_token),
            symbol: (0, reified_1.decodeFromFields)(structs_4.Symbol.reified(), fields.symbol),
            positionId: (0, reified_1.decodeFromFields)("u64", fields.position_id),
            realizedFundingSign: (0, reified_1.decodeFromFields)("bool", fields.realized_funding_sign),
            realizedFundingFee: (0, reified_1.decodeFromFields)("u64", fields.realized_funding_fee),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    RealizeFundingEvent.fromFieldsWithTypes = function (item) {
        if (!isRealizeFundingEvent(item.type)) {
            throw new Error("not a RealizeFundingEvent type");
        }
        return RealizeFundingEvent.reified().new({
            user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user),
            collateralToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.collateral_token),
            symbol: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Symbol.reified(), item.fields.symbol),
            positionId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.position_id),
            realizedFundingSign: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.realized_funding_sign),
            realizedFundingFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.realized_funding_fee),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    RealizeFundingEvent.fromBcs = function (data) {
        return RealizeFundingEvent.fromFields(RealizeFundingEvent.bcs.parse(data));
    };
    RealizeFundingEvent.prototype.toJSONField = function () {
        return {
            user: this.user,
            collateralToken: this.collateralToken.toJSONField(),
            symbol: this.symbol.toJSONField(),
            positionId: this.positionId.toString(),
            realizedFundingSign: this.realizedFundingSign,
            realizedFundingFee: this.realizedFundingFee.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    RealizeFundingEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    RealizeFundingEvent.fromJSONField = function (field) {
        return RealizeFundingEvent.reified().new({
            user: (0, reified_1.decodeFromJSONField)("address", field.user),
            collateralToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.collateralToken),
            symbol: (0, reified_1.decodeFromJSONField)(structs_4.Symbol.reified(), field.symbol),
            positionId: (0, reified_1.decodeFromJSONField)("u64", field.positionId),
            realizedFundingSign: (0, reified_1.decodeFromJSONField)("bool", field.realizedFundingSign),
            realizedFundingFee: (0, reified_1.decodeFromJSONField)("u64", field.realizedFundingFee),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    RealizeFundingEvent.fromJSON = function (json) {
        if (json.$typeName !== RealizeFundingEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return RealizeFundingEvent.fromJSONField(json);
    };
    RealizeFundingEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRealizeFundingEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a RealizeFundingEvent object"));
        }
        return RealizeFundingEvent.fromFieldsWithTypes(content);
    };
    RealizeFundingEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RealizeFundingEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRealizeFundingEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RealizeFundingEvent object"));
                        }
                        return [2 /*return*/, RealizeFundingEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RealizeFundingEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RealizeFundingEvent";
    RealizeFundingEvent.$numTypeParams = 0;
    return RealizeFundingEvent;
}());
exports.RealizeFundingEvent = RealizeFundingEvent;
/* ============================== RealizedPnlEvent =============================== */
function isRealizedPnlEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RealizedPnlEvent";
}
var RealizedPnlEvent = /** @class */ (function () {
    function RealizedPnlEvent(typeArgs, fields) {
        this.$typeName = RealizedPnlEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RealizedPnlEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        this.collateralToken = fields.collateralToken;
        this.symbol = fields.symbol;
        this.positionId = fields.positionId;
        this.positionAverageEntryPrice = fields.positionAverageEntryPrice;
        this.filledPrice = fields.filledPrice;
        this.realizedPnlSign = fields.realizedPnlSign;
        this.realizedPnl = fields.realizedPnl;
        this.realizedTradingFee = fields.realizedTradingFee;
        this.realizedBorrowFee = fields.realizedBorrowFee;
        this.u64Padding = fields.u64Padding;
    }
    RealizedPnlEvent.reified = function () {
        var _this = this;
        return {
            typeName: RealizedPnlEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RealizedPnlEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return RealizedPnlEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return RealizedPnlEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return RealizedPnlEvent.fromBcs(data); },
            bcs: RealizedPnlEvent.bcs,
            fromJSONField: function (field) { return RealizedPnlEvent.fromJSONField(field); },
            fromJSON: function (json) { return RealizedPnlEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return RealizedPnlEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RealizedPnlEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new RealizedPnlEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(RealizedPnlEvent, "r", {
        get: function () {
            return RealizedPnlEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    RealizedPnlEvent.phantom = function () {
        return (0, reified_1.phantom)(RealizedPnlEvent.reified());
    };
    Object.defineProperty(RealizedPnlEvent, "p", {
        get: function () {
            return RealizedPnlEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RealizedPnlEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RealizedPnlEvent", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                collateral_token: structs_2.TypeName.bcs,
                symbol: structs_4.Symbol.bcs,
                position_id: bcs_1.bcs.u64(),
                position_average_entry_price: bcs_1.bcs.u64(),
                filled_price: bcs_1.bcs.u64(),
                realized_pnl_sign: bcs_1.bcs.bool(),
                realized_pnl: bcs_1.bcs.u64(),
                realized_trading_fee: bcs_1.bcs.u64(),
                realized_borrow_fee: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    RealizedPnlEvent.fromFields = function (fields) {
        return RealizedPnlEvent.reified().new({
            user: (0, reified_1.decodeFromFields)("address", fields.user),
            collateralToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.collateral_token),
            symbol: (0, reified_1.decodeFromFields)(structs_4.Symbol.reified(), fields.symbol),
            positionId: (0, reified_1.decodeFromFields)("u64", fields.position_id),
            positionAverageEntryPrice: (0, reified_1.decodeFromFields)("u64", fields.position_average_entry_price),
            filledPrice: (0, reified_1.decodeFromFields)("u64", fields.filled_price),
            realizedPnlSign: (0, reified_1.decodeFromFields)("bool", fields.realized_pnl_sign),
            realizedPnl: (0, reified_1.decodeFromFields)("u64", fields.realized_pnl),
            realizedTradingFee: (0, reified_1.decodeFromFields)("u64", fields.realized_trading_fee),
            realizedBorrowFee: (0, reified_1.decodeFromFields)("u64", fields.realized_borrow_fee),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    RealizedPnlEvent.fromFieldsWithTypes = function (item) {
        if (!isRealizedPnlEvent(item.type)) {
            throw new Error("not a RealizedPnlEvent type");
        }
        return RealizedPnlEvent.reified().new({
            user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user),
            collateralToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.collateral_token),
            symbol: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Symbol.reified(), item.fields.symbol),
            positionId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.position_id),
            positionAverageEntryPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.position_average_entry_price),
            filledPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.filled_price),
            realizedPnlSign: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.realized_pnl_sign),
            realizedPnl: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.realized_pnl),
            realizedTradingFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.realized_trading_fee),
            realizedBorrowFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.realized_borrow_fee),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    RealizedPnlEvent.fromBcs = function (data) {
        return RealizedPnlEvent.fromFields(RealizedPnlEvent.bcs.parse(data));
    };
    RealizedPnlEvent.prototype.toJSONField = function () {
        return {
            user: this.user,
            collateralToken: this.collateralToken.toJSONField(),
            symbol: this.symbol.toJSONField(),
            positionId: this.positionId.toString(),
            positionAverageEntryPrice: this.positionAverageEntryPrice.toString(),
            filledPrice: this.filledPrice.toString(),
            realizedPnlSign: this.realizedPnlSign,
            realizedPnl: this.realizedPnl.toString(),
            realizedTradingFee: this.realizedTradingFee.toString(),
            realizedBorrowFee: this.realizedBorrowFee.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    RealizedPnlEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    RealizedPnlEvent.fromJSONField = function (field) {
        return RealizedPnlEvent.reified().new({
            user: (0, reified_1.decodeFromJSONField)("address", field.user),
            collateralToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.collateralToken),
            symbol: (0, reified_1.decodeFromJSONField)(structs_4.Symbol.reified(), field.symbol),
            positionId: (0, reified_1.decodeFromJSONField)("u64", field.positionId),
            positionAverageEntryPrice: (0, reified_1.decodeFromJSONField)("u64", field.positionAverageEntryPrice),
            filledPrice: (0, reified_1.decodeFromJSONField)("u64", field.filledPrice),
            realizedPnlSign: (0, reified_1.decodeFromJSONField)("bool", field.realizedPnlSign),
            realizedPnl: (0, reified_1.decodeFromJSONField)("u64", field.realizedPnl),
            realizedTradingFee: (0, reified_1.decodeFromJSONField)("u64", field.realizedTradingFee),
            realizedBorrowFee: (0, reified_1.decodeFromJSONField)("u64", field.realizedBorrowFee),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    RealizedPnlEvent.fromJSON = function (json) {
        if (json.$typeName !== RealizedPnlEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return RealizedPnlEvent.fromJSONField(json);
    };
    RealizedPnlEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRealizedPnlEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a RealizedPnlEvent object"));
        }
        return RealizedPnlEvent.fromFieldsWithTypes(content);
    };
    RealizedPnlEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RealizedPnlEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRealizedPnlEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RealizedPnlEvent object"));
                        }
                        return [2 /*return*/, RealizedPnlEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RealizedPnlEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RealizedPnlEvent";
    RealizedPnlEvent.$numTypeParams = 0;
    return RealizedPnlEvent;
}());
exports.RealizedPnlEvent = RealizedPnlEvent;
/* ============================== RemovePositionEvent =============================== */
function isRemovePositionEvent(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RemovePositionEvent";
}
var RemovePositionEvent = /** @class */ (function () {
    function RemovePositionEvent(typeArgs, fields) {
        this.$typeName = RemovePositionEvent.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RemovePositionEvent.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        this.collateralToken = fields.collateralToken;
        this.symbol = fields.symbol;
        this.linkedOrderIds = fields.linkedOrderIds;
        this.linkedOrderPrices = fields.linkedOrderPrices;
        this.remainingCollateralAmount = fields.remainingCollateralAmount;
        this.realizedBorrowFeeAmount = fields.realizedBorrowFeeAmount;
        this.u64Padding = fields.u64Padding;
    }
    RemovePositionEvent.reified = function () {
        var _this = this;
        return {
            typeName: RemovePositionEvent.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RemovePositionEvent.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return RemovePositionEvent.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return RemovePositionEvent.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return RemovePositionEvent.fromBcs(data); },
            bcs: RemovePositionEvent.bcs,
            fromJSONField: function (field) { return RemovePositionEvent.fromJSONField(field); },
            fromJSON: function (json) { return RemovePositionEvent.fromJSON(json); },
            fromSuiParsedData: function (content) { return RemovePositionEvent.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RemovePositionEvent.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new RemovePositionEvent([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(RemovePositionEvent, "r", {
        get: function () {
            return RemovePositionEvent.reified();
        },
        enumerable: false,
        configurable: true
    });
    RemovePositionEvent.phantom = function () {
        return (0, reified_1.phantom)(RemovePositionEvent.reified());
    };
    Object.defineProperty(RemovePositionEvent, "p", {
        get: function () {
            return RemovePositionEvent.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemovePositionEvent, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RemovePositionEvent", {
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                collateral_token: structs_2.TypeName.bcs,
                symbol: structs_4.Symbol.bcs,
                linked_order_ids: bcs_1.bcs.vector(bcs_1.bcs.u64()),
                linked_order_prices: bcs_1.bcs.vector(bcs_1.bcs.u64()),
                remaining_collateral_amount: bcs_1.bcs.u64(),
                realized_borrow_fee_amount: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    RemovePositionEvent.fromFields = function (fields) {
        return RemovePositionEvent.reified().new({
            user: (0, reified_1.decodeFromFields)("address", fields.user),
            collateralToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.collateral_token),
            symbol: (0, reified_1.decodeFromFields)(structs_4.Symbol.reified(), fields.symbol),
            linkedOrderIds: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.linked_order_ids),
            linkedOrderPrices: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.linked_order_prices),
            remainingCollateralAmount: (0, reified_1.decodeFromFields)("u64", fields.remaining_collateral_amount),
            realizedBorrowFeeAmount: (0, reified_1.decodeFromFields)("u64", fields.realized_borrow_fee_amount),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    RemovePositionEvent.fromFieldsWithTypes = function (item) {
        if (!isRemovePositionEvent(item.type)) {
            throw new Error("not a RemovePositionEvent type");
        }
        return RemovePositionEvent.reified().new({
            user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user),
            collateralToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.collateral_token),
            symbol: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Symbol.reified(), item.fields.symbol),
            linkedOrderIds: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.linked_order_ids),
            linkedOrderPrices: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.linked_order_prices),
            remainingCollateralAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.remaining_collateral_amount),
            realizedBorrowFeeAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.realized_borrow_fee_amount),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    RemovePositionEvent.fromBcs = function (data) {
        return RemovePositionEvent.fromFields(RemovePositionEvent.bcs.parse(data));
    };
    RemovePositionEvent.prototype.toJSONField = function () {
        return {
            user: this.user,
            collateralToken: this.collateralToken.toJSONField(),
            symbol: this.symbol.toJSONField(),
            linkedOrderIds: (0, reified_1.fieldToJSON)("vector<u64>", this.linkedOrderIds),
            linkedOrderPrices: (0, reified_1.fieldToJSON)("vector<u64>", this.linkedOrderPrices),
            remainingCollateralAmount: this.remainingCollateralAmount.toString(),
            realizedBorrowFeeAmount: this.realizedBorrowFeeAmount.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    RemovePositionEvent.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    RemovePositionEvent.fromJSONField = function (field) {
        return RemovePositionEvent.reified().new({
            user: (0, reified_1.decodeFromJSONField)("address", field.user),
            collateralToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.collateralToken),
            symbol: (0, reified_1.decodeFromJSONField)(structs_4.Symbol.reified(), field.symbol),
            linkedOrderIds: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.linkedOrderIds),
            linkedOrderPrices: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.linkedOrderPrices),
            remainingCollateralAmount: (0, reified_1.decodeFromJSONField)("u64", field.remainingCollateralAmount),
            realizedBorrowFeeAmount: (0, reified_1.decodeFromJSONField)("u64", field.realizedBorrowFeeAmount),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    RemovePositionEvent.fromJSON = function (json) {
        if (json.$typeName !== RemovePositionEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return RemovePositionEvent.fromJSONField(json);
    };
    RemovePositionEvent.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemovePositionEvent(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a RemovePositionEvent object"));
        }
        return RemovePositionEvent.fromFieldsWithTypes(content);
    };
    RemovePositionEvent.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RemovePositionEvent object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRemovePositionEvent(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RemovePositionEvent object"));
                        }
                        return [2 /*return*/, RemovePositionEvent.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RemovePositionEvent.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::RemovePositionEvent";
    RemovePositionEvent.$numTypeParams = 0;
    return RemovePositionEvent;
}());
exports.RemovePositionEvent = RemovePositionEvent;
/* ============================== TradingOrder =============================== */
function isTradingOrder(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::TradingOrder";
}
var TradingOrder = /** @class */ (function () {
    function TradingOrder(typeArgs, fields) {
        this.$typeName = TradingOrder.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([TradingOrder.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        this.createTsMs = fields.createTsMs;
        this.orderId = fields.orderId;
        this.linkedPositionId = fields.linkedPositionId;
        this.user = fields.user;
        this.collateralToken = fields.collateralToken;
        this.collateralTokenDecimal = fields.collateralTokenDecimal;
        this.symbol = fields.symbol;
        this.leveragePct = fields.leveragePct;
        this.reduceOnly = fields.reduceOnly;
        this.isLong = fields.isLong;
        this.isStopOrder = fields.isStopOrder;
        this.size = fields.size;
        this.sizeDecimal = fields.sizeDecimal;
        this.triggerPrice = fields.triggerPrice;
        this.oraclePriceWhenPlacing = fields.oraclePriceWhenPlacing;
        this.u64Padding = fields.u64Padding;
    }
    TradingOrder.reified = function () {
        var _this = this;
        return {
            typeName: TradingOrder.$typeName,
            fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([TradingOrder.$typeName], [], false)),
            typeArgs: [],
            reifiedTypeArgs: [],
            fromFields: function (fields) { return TradingOrder.fromFields(fields); },
            fromFieldsWithTypes: function (item) { return TradingOrder.fromFieldsWithTypes(item); },
            fromBcs: function (data) { return TradingOrder.fromBcs(data); },
            bcs: TradingOrder.bcs,
            fromJSONField: function (field) { return TradingOrder.fromJSONField(field); },
            fromJSON: function (json) { return TradingOrder.fromJSON(json); },
            fromSuiParsedData: function (content) { return TradingOrder.fromSuiParsedData(content); },
            fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, TradingOrder.fetch(client, id)];
            }); }); },
            new: function (fields) {
                return new TradingOrder([], fields);
            },
            kind: "StructClassReified",
        };
    };
    Object.defineProperty(TradingOrder, "r", {
        get: function () {
            return TradingOrder.reified();
        },
        enumerable: false,
        configurable: true
    });
    TradingOrder.phantom = function () {
        return (0, reified_1.phantom)(TradingOrder.reified());
    };
    Object.defineProperty(TradingOrder, "p", {
        get: function () {
            return TradingOrder.phantom();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TradingOrder, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("TradingOrder", {
                id: structs_3.UID.bcs,
                create_ts_ms: bcs_1.bcs.u64(),
                order_id: bcs_1.bcs.u64(),
                linked_position_id: structs_1.Option.bcs(bcs_1.bcs.u64()),
                user: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); } }),
                collateral_token: structs_2.TypeName.bcs,
                collateral_token_decimal: bcs_1.bcs.u64(),
                symbol: structs_4.Symbol.bcs,
                leverage_pct: bcs_1.bcs.u64(),
                reduce_only: bcs_1.bcs.bool(),
                is_long: bcs_1.bcs.bool(),
                is_stop_order: bcs_1.bcs.bool(),
                size: bcs_1.bcs.u64(),
                size_decimal: bcs_1.bcs.u64(),
                trigger_price: bcs_1.bcs.u64(),
                oracle_price_when_placing: bcs_1.bcs.u64(),
                u64_padding: bcs_1.bcs.vector(bcs_1.bcs.u64()),
            });
        },
        enumerable: false,
        configurable: true
    });
    TradingOrder.fromFields = function (fields) {
        return TradingOrder.reified().new({
            id: (0, reified_1.decodeFromFields)(structs_3.UID.reified(), fields.id),
            createTsMs: (0, reified_1.decodeFromFields)("u64", fields.create_ts_ms),
            orderId: (0, reified_1.decodeFromFields)("u64", fields.order_id),
            linkedPositionId: (0, reified_1.decodeFromFields)(structs_1.Option.reified("u64"), fields.linked_position_id),
            user: (0, reified_1.decodeFromFields)("address", fields.user),
            collateralToken: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.collateral_token),
            collateralTokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.collateral_token_decimal),
            symbol: (0, reified_1.decodeFromFields)(structs_4.Symbol.reified(), fields.symbol),
            leveragePct: (0, reified_1.decodeFromFields)("u64", fields.leverage_pct),
            reduceOnly: (0, reified_1.decodeFromFields)("bool", fields.reduce_only),
            isLong: (0, reified_1.decodeFromFields)("bool", fields.is_long),
            isStopOrder: (0, reified_1.decodeFromFields)("bool", fields.is_stop_order),
            size: (0, reified_1.decodeFromFields)("u64", fields.size),
            sizeDecimal: (0, reified_1.decodeFromFields)("u64", fields.size_decimal),
            triggerPrice: (0, reified_1.decodeFromFields)("u64", fields.trigger_price),
            oraclePriceWhenPlacing: (0, reified_1.decodeFromFields)("u64", fields.oracle_price_when_placing),
            u64Padding: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.u64_padding),
        });
    };
    TradingOrder.fromFieldsWithTypes = function (item) {
        if (!isTradingOrder(item.type)) {
            throw new Error("not a TradingOrder type");
        }
        return TradingOrder.reified().new({
            id: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.UID.reified(), item.fields.id),
            createTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.create_ts_ms),
            orderId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.order_id),
            linkedPositionId: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("u64"), item.fields.linked_position_id),
            user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user),
            collateralToken: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.collateral_token),
            collateralTokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.collateral_token_decimal),
            symbol: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Symbol.reified(), item.fields.symbol),
            leveragePct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.leverage_pct),
            reduceOnly: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.reduce_only),
            isLong: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_long),
            isStopOrder: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_stop_order),
            size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size),
            sizeDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size_decimal),
            triggerPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.trigger_price),
            oraclePriceWhenPlacing: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.oracle_price_when_placing),
            u64Padding: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.u64_padding),
        });
    };
    TradingOrder.fromBcs = function (data) {
        return TradingOrder.fromFields(TradingOrder.bcs.parse(data));
    };
    TradingOrder.prototype.toJSONField = function () {
        return {
            id: this.id,
            createTsMs: this.createTsMs.toString(),
            orderId: this.orderId.toString(),
            linkedPositionId: (0, reified_1.fieldToJSON)("0x1::option::Option<u64>", this.linkedPositionId),
            user: this.user,
            collateralToken: this.collateralToken.toJSONField(),
            collateralTokenDecimal: this.collateralTokenDecimal.toString(),
            symbol: this.symbol.toJSONField(),
            leveragePct: this.leveragePct.toString(),
            reduceOnly: this.reduceOnly,
            isLong: this.isLong,
            isStopOrder: this.isStopOrder,
            size: this.size.toString(),
            sizeDecimal: this.sizeDecimal.toString(),
            triggerPrice: this.triggerPrice.toString(),
            oraclePriceWhenPlacing: this.oraclePriceWhenPlacing.toString(),
            u64Padding: (0, reified_1.fieldToJSON)("vector<u64>", this.u64Padding),
        };
    };
    TradingOrder.prototype.toJSON = function () {
        return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    };
    TradingOrder.fromJSONField = function (field) {
        return TradingOrder.reified().new({
            id: (0, reified_1.decodeFromJSONField)(structs_3.UID.reified(), field.id),
            createTsMs: (0, reified_1.decodeFromJSONField)("u64", field.createTsMs),
            orderId: (0, reified_1.decodeFromJSONField)("u64", field.orderId),
            linkedPositionId: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("u64"), field.linkedPositionId),
            user: (0, reified_1.decodeFromJSONField)("address", field.user),
            collateralToken: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.collateralToken),
            collateralTokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.collateralTokenDecimal),
            symbol: (0, reified_1.decodeFromJSONField)(structs_4.Symbol.reified(), field.symbol),
            leveragePct: (0, reified_1.decodeFromJSONField)("u64", field.leveragePct),
            reduceOnly: (0, reified_1.decodeFromJSONField)("bool", field.reduceOnly),
            isLong: (0, reified_1.decodeFromJSONField)("bool", field.isLong),
            isStopOrder: (0, reified_1.decodeFromJSONField)("bool", field.isStopOrder),
            size: (0, reified_1.decodeFromJSONField)("u64", field.size),
            sizeDecimal: (0, reified_1.decodeFromJSONField)("u64", field.sizeDecimal),
            triggerPrice: (0, reified_1.decodeFromJSONField)("u64", field.triggerPrice),
            oraclePriceWhenPlacing: (0, reified_1.decodeFromJSONField)("u64", field.oraclePriceWhenPlacing),
            u64Padding: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.u64Padding),
        });
    };
    TradingOrder.fromJSON = function (json) {
        if (json.$typeName !== TradingOrder.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return TradingOrder.fromJSONField(json);
    };
    TradingOrder.fromSuiParsedData = function (content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTradingOrder(content.type)) {
            throw new Error("object at ".concat(content.fields.id, " is not a TradingOrder object"));
        }
        return TradingOrder.fromFieldsWithTypes(content);
    };
    TradingOrder.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true } })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching TradingOrder object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTradingOrder(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a TradingOrder object"));
                        }
                        return [2 /*return*/, TradingOrder.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    TradingOrder.$typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::position::TradingOrder";
    TradingOrder.$numTypeParams = 0;
    return TradingOrder;
}());
exports.TradingOrder = TradingOrder;
