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
exports.UpdateAuctionConfig = exports.RemoveBid = exports.NewBid = exports.DUTCH = exports.Bid = exports.Auction = exports.Terminate = exports.Delivery = void 0;
exports.isDelivery = isDelivery;
exports.isTerminate = isTerminate;
exports.isAuction = isAuction;
exports.isBid = isBid;
exports.isDUTCH = isDUTCH;
exports.isNewBid = isNewBid;
exports.isRemoveBid = isRemoveBid;
exports.isUpdateAuctionConfig = isUpdateAuctionConfig;
var reified = __importStar(require("../../../../_framework/reified"));
var reified_1 = require("../../../../_framework/reified");
var util_1 = require("../../../../_framework/util");
var structs_1 = require("../../0x1/type-name/structs");
var structs_2 = require("../../0x2/object/structs");
var structs_3 = require("../big-vector/structs");
var bcs_1 = require("@mysten/bcs");
/* ============================== Delivery =============================== */
function isDelivery(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Delivery"; }
var Delivery = /** @class */ (function () {
    function Delivery(typeArgs, fields) {
        this.$typeName = Delivery.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Delivery.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.price = fields.price;
        ;
        this.size = fields.size;
        ;
        this.bidderBidValue = fields.bidderBidValue;
        ;
        this.bidderFee = fields.bidderFee;
        ;
        this.incentiveBidValue = fields.incentiveBidValue;
        ;
        this.incentiveFee = fields.incentiveFee;
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
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_1.TypeName.bcs, price: bcs_1.bcs.u64(), size: bcs_1.bcs.u64(), bidder_bid_value: bcs_1.bcs.u64(), bidder_fee: bcs_1.bcs.u64(), incentive_bid_value: bcs_1.bcs.u64(), incentive_fee: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Delivery.fromFields = function (fields) { return Delivery.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token), price: (0, reified_1.decodeFromFields)("u64", fields.price), size: (0, reified_1.decodeFromFields)("u64", fields.size), bidderBidValue: (0, reified_1.decodeFromFields)("u64", fields.bidder_bid_value), bidderFee: (0, reified_1.decodeFromFields)("u64", fields.bidder_fee), incentiveBidValue: (0, reified_1.decodeFromFields)("u64", fields.incentive_bid_value), incentiveFee: (0, reified_1.decodeFromFields)("u64", fields.incentive_fee) }); };
    Delivery.fromFieldsWithTypes = function (item) {
        if (!isDelivery(item.type)) {
            throw new Error("not a Delivery type");
        }
        return Delivery.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token), price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size), bidderBidValue: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bidder_bid_value), bidderFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bidder_fee), incentiveBidValue: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_bid_value), incentiveFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_fee) });
    };
    Delivery.fromBcs = function (data) { return Delivery.fromFields(Delivery.bcs.parse(data)); };
    Delivery.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), price: this.price.toString(), size: this.size.toString(), bidderBidValue: this.bidderBidValue.toString(), bidderFee: this.bidderFee.toString(), incentiveBidValue: this.incentiveBidValue.toString(), incentiveFee: this.incentiveFee.toString(),
        };
    };
    Delivery.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Delivery.fromJSONField = function (field) { return Delivery.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.token), price: (0, reified_1.decodeFromJSONField)("u64", field.price), size: (0, reified_1.decodeFromJSONField)("u64", field.size), bidderBidValue: (0, reified_1.decodeFromJSONField)("u64", field.bidderBidValue), bidderFee: (0, reified_1.decodeFromJSONField)("u64", field.bidderFee), incentiveBidValue: (0, reified_1.decodeFromJSONField)("u64", field.incentiveBidValue), incentiveFee: (0, reified_1.decodeFromJSONField)("u64", field.incentiveFee) }); };
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
    Delivery.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Delivery";
    Delivery.$numTypeParams = 0;
    return Delivery;
}());
exports.Delivery = Delivery;
/* ============================== Terminate =============================== */
function isTerminate(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Terminate"; }
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
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_1.TypeName.bcs
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Terminate.fromFields = function (fields) { return Terminate.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token) }); };
    Terminate.fromFieldsWithTypes = function (item) {
        if (!isTerminate(item.type)) {
            throw new Error("not a Terminate type");
        }
        return Terminate.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token) });
    };
    Terminate.fromBcs = function (data) { return Terminate.fromFields(Terminate.bcs.parse(data)); };
    Terminate.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(),
        };
    };
    Terminate.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Terminate.fromJSONField = function (field) { return Terminate.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.token) }); };
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
    Terminate.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Terminate";
    Terminate.$numTypeParams = 0;
    return Terminate;
}());
exports.Terminate = Terminate;
/* ============================== Auction =============================== */
function isAuction(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Auction"; }
var Auction = /** @class */ (function () {
    function Auction(typeArgs, fields) {
        this.$typeName = Auction.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Auction.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.startTsMs = fields.startTsMs;
        ;
        this.endTsMs = fields.endTsMs;
        ;
        this.size = fields.size;
        ;
        this.decaySpeed = fields.decaySpeed;
        ;
        this.initialPrice = fields.initialPrice;
        ;
        this.finalPrice = fields.finalPrice;
        ;
        this.feeBp = fields.feeBp;
        ;
        this.incentiveBp = fields.incentiveBp;
        ;
        this.tokenDecimal = fields.tokenDecimal;
        ;
        this.sizeDecimal = fields.sizeDecimal;
        ;
        this.totalBidSize = fields.totalBidSize;
        ;
        this.ableToRemoveBid = fields.ableToRemoveBid;
        ;
        this.bids = fields.bids;
        ;
        this.bidIndex = fields.bidIndex;
    }
    Auction.reified = function () {
        var _this = this;
        return { typeName: Auction.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Auction.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Auction.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Auction.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Auction.fromBcs(data); }, bcs: Auction.bcs, fromJSONField: function (field) { return Auction.fromJSONField(field); }, fromJSON: function (json) { return Auction.fromJSON(json); }, fromSuiParsedData: function (content) { return Auction.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Auction.fetch(client, id)];
            }); }); }, new: function (fields) { return new Auction([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Auction, "r", {
        get: function () { return Auction.reified(); },
        enumerable: false,
        configurable: true
    });
    Auction.phantom = function () { return (0, reified_1.phantom)(Auction.reified()); };
    Object.defineProperty(Auction, "p", {
        get: function () { return Auction.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Auction, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Auction", {
                id: structs_2.UID.bcs, index: bcs_1.bcs.u64(), token: structs_1.TypeName.bcs, start_ts_ms: bcs_1.bcs.u64(), end_ts_ms: bcs_1.bcs.u64(), size: bcs_1.bcs.u64(), decay_speed: bcs_1.bcs.u64(), initial_price: bcs_1.bcs.u64(), final_price: bcs_1.bcs.u64(), fee_bp: bcs_1.bcs.u64(), incentive_bp: bcs_1.bcs.u64(), token_decimal: bcs_1.bcs.u64(), size_decimal: bcs_1.bcs.u64(), total_bid_size: bcs_1.bcs.u64(), able_to_remove_bid: bcs_1.bcs.bool(), bids: structs_3.BigVector.bcs, bid_index: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Auction.fromFields = function (fields) { return Auction.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token), startTsMs: (0, reified_1.decodeFromFields)("u64", fields.start_ts_ms), endTsMs: (0, reified_1.decodeFromFields)("u64", fields.end_ts_ms), size: (0, reified_1.decodeFromFields)("u64", fields.size), decaySpeed: (0, reified_1.decodeFromFields)("u64", fields.decay_speed), initialPrice: (0, reified_1.decodeFromFields)("u64", fields.initial_price), finalPrice: (0, reified_1.decodeFromFields)("u64", fields.final_price), feeBp: (0, reified_1.decodeFromFields)("u64", fields.fee_bp), incentiveBp: (0, reified_1.decodeFromFields)("u64", fields.incentive_bp), tokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.token_decimal), sizeDecimal: (0, reified_1.decodeFromFields)("u64", fields.size_decimal), totalBidSize: (0, reified_1.decodeFromFields)("u64", fields.total_bid_size), ableToRemoveBid: (0, reified_1.decodeFromFields)("bool", fields.able_to_remove_bid), bids: (0, reified_1.decodeFromFields)(structs_3.BigVector.reified(reified.phantom(Bid.reified())), fields.bids), bidIndex: (0, reified_1.decodeFromFields)("u64", fields.bid_index) }); };
    Auction.fromFieldsWithTypes = function (item) {
        if (!isAuction(item.type)) {
            throw new Error("not a Auction type");
        }
        return Auction.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token), startTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_ts_ms), endTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.end_ts_ms), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size), decaySpeed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.decay_speed), initialPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.initial_price), finalPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.final_price), feeBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee_bp), incentiveBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_bp), tokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.token_decimal), sizeDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size_decimal), totalBidSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_bid_size), ableToRemoveBid: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.able_to_remove_bid), bids: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.BigVector.reified(reified.phantom(Bid.reified())), item.fields.bids), bidIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_index) });
    };
    Auction.fromBcs = function (data) { return Auction.fromFields(Auction.bcs.parse(data)); };
    Auction.prototype.toJSONField = function () {
        return {
            id: this.id, index: this.index.toString(), token: this.token.toJSONField(), startTsMs: this.startTsMs.toString(), endTsMs: this.endTsMs.toString(), size: this.size.toString(), decaySpeed: this.decaySpeed.toString(), initialPrice: this.initialPrice.toString(), finalPrice: this.finalPrice.toString(), feeBp: this.feeBp.toString(), incentiveBp: this.incentiveBp.toString(), tokenDecimal: this.tokenDecimal.toString(), sizeDecimal: this.sizeDecimal.toString(), totalBidSize: this.totalBidSize.toString(), ableToRemoveBid: this.ableToRemoveBid, bids: this.bids.toJSONField(), bidIndex: this.bidIndex.toString(),
        };
    };
    Auction.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Auction.fromJSONField = function (field) { return Auction.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.token), startTsMs: (0, reified_1.decodeFromJSONField)("u64", field.startTsMs), endTsMs: (0, reified_1.decodeFromJSONField)("u64", field.endTsMs), size: (0, reified_1.decodeFromJSONField)("u64", field.size), decaySpeed: (0, reified_1.decodeFromJSONField)("u64", field.decaySpeed), initialPrice: (0, reified_1.decodeFromJSONField)("u64", field.initialPrice), finalPrice: (0, reified_1.decodeFromJSONField)("u64", field.finalPrice), feeBp: (0, reified_1.decodeFromJSONField)("u64", field.feeBp), incentiveBp: (0, reified_1.decodeFromJSONField)("u64", field.incentiveBp), tokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.tokenDecimal), sizeDecimal: (0, reified_1.decodeFromJSONField)("u64", field.sizeDecimal), totalBidSize: (0, reified_1.decodeFromJSONField)("u64", field.totalBidSize), ableToRemoveBid: (0, reified_1.decodeFromJSONField)("bool", field.ableToRemoveBid), bids: (0, reified_1.decodeFromJSONField)(structs_3.BigVector.reified(reified.phantom(Bid.reified())), field.bids), bidIndex: (0, reified_1.decodeFromJSONField)("u64", field.bidIndex) }); };
    Auction.fromJSON = function (json) {
        if (json.$typeName !== Auction.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Auction.fromJSONField(json);
    };
    Auction.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAuction(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Auction object"));
    } return Auction.fromFieldsWithTypes(content); };
    Auction.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Auction object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAuction(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Auction object"));
                        }
                        return [2 /*return*/, Auction.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Auction.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Auction";
    Auction.$numTypeParams = 0;
    return Auction;
}());
exports.Auction = Auction;
/* ============================== Bid =============================== */
function isBid(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Bid"; }
var Bid = /** @class */ (function () {
    function Bid(typeArgs, fields) {
        this.$typeName = Bid.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([Bid.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.index = fields.index;
        ;
        this.bidder = fields.bidder;
        ;
        this.price = fields.price;
        ;
        this.size = fields.size;
        ;
        this.bidderBalance = fields.bidderBalance;
        ;
        this.incentiveBalance = fields.incentiveBalance;
        ;
        this.feeDiscount = fields.feeDiscount;
        ;
        this.tsMs = fields.tsMs;
    }
    Bid.reified = function () {
        var _this = this;
        return { typeName: Bid.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([Bid.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return Bid.fromFields(fields); }, fromFieldsWithTypes: function (item) { return Bid.fromFieldsWithTypes(item); }, fromBcs: function (data) { return Bid.fromBcs(data); }, bcs: Bid.bcs, fromJSONField: function (field) { return Bid.fromJSONField(field); }, fromJSON: function (json) { return Bid.fromJSON(json); }, fromSuiParsedData: function (content) { return Bid.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, Bid.fetch(client, id)];
            }); }); }, new: function (fields) { return new Bid([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(Bid, "r", {
        get: function () { return Bid.reified(); },
        enumerable: false,
        configurable: true
    });
    Bid.phantom = function () { return (0, reified_1.phantom)(Bid.reified()); };
    Object.defineProperty(Bid, "p", {
        get: function () { return Bid.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bid, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("Bid", {
                index: bcs_1.bcs.u64(), bidder: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), price: bcs_1.bcs.u64(), size: bcs_1.bcs.u64(), bidder_balance: bcs_1.bcs.u64(), incentive_balance: bcs_1.bcs.u64(), fee_discount: bcs_1.bcs.u64(), ts_ms: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Bid.fromFields = function (fields) { return Bid.reified().new({ index: (0, reified_1.decodeFromFields)("u64", fields.index), bidder: (0, reified_1.decodeFromFields)("address", fields.bidder), price: (0, reified_1.decodeFromFields)("u64", fields.price), size: (0, reified_1.decodeFromFields)("u64", fields.size), bidderBalance: (0, reified_1.decodeFromFields)("u64", fields.bidder_balance), incentiveBalance: (0, reified_1.decodeFromFields)("u64", fields.incentive_balance), feeDiscount: (0, reified_1.decodeFromFields)("u64", fields.fee_discount), tsMs: (0, reified_1.decodeFromFields)("u64", fields.ts_ms) }); };
    Bid.fromFieldsWithTypes = function (item) {
        if (!isBid(item.type)) {
            throw new Error("not a Bid type");
        }
        return Bid.reified().new({ index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), bidder: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder), price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size), bidderBalance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bidder_balance), incentiveBalance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_balance), feeDiscount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee_discount), tsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.ts_ms) });
    };
    Bid.fromBcs = function (data) { return Bid.fromFields(Bid.bcs.parse(data)); };
    Bid.prototype.toJSONField = function () {
        return {
            index: this.index.toString(), bidder: this.bidder, price: this.price.toString(), size: this.size.toString(), bidderBalance: this.bidderBalance.toString(), incentiveBalance: this.incentiveBalance.toString(), feeDiscount: this.feeDiscount.toString(), tsMs: this.tsMs.toString(),
        };
    };
    Bid.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    Bid.fromJSONField = function (field) { return Bid.reified().new({ index: (0, reified_1.decodeFromJSONField)("u64", field.index), bidder: (0, reified_1.decodeFromJSONField)("address", field.bidder), price: (0, reified_1.decodeFromJSONField)("u64", field.price), size: (0, reified_1.decodeFromJSONField)("u64", field.size), bidderBalance: (0, reified_1.decodeFromJSONField)("u64", field.bidderBalance), incentiveBalance: (0, reified_1.decodeFromJSONField)("u64", field.incentiveBalance), feeDiscount: (0, reified_1.decodeFromJSONField)("u64", field.feeDiscount), tsMs: (0, reified_1.decodeFromJSONField)("u64", field.tsMs) }); };
    Bid.fromJSON = function (json) {
        if (json.$typeName !== Bid.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Bid.fromJSONField(json);
    };
    Bid.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBid(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a Bid object"));
    } return Bid.fromFieldsWithTypes(content); };
    Bid.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching Bid object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBid(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a Bid object"));
                        }
                        return [2 /*return*/, Bid.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    Bid.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::Bid";
    Bid.$numTypeParams = 0;
    return Bid;
}());
exports.Bid = Bid;
/* ============================== DUTCH =============================== */
function isDUTCH(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::DUTCH"; }
var DUTCH = /** @class */ (function () {
    function DUTCH(typeArgs, fields) {
        this.$typeName = DUTCH.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([DUTCH.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    DUTCH.reified = function () {
        var _this = this;
        return { typeName: DUTCH.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([DUTCH.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return DUTCH.fromFields(fields); }, fromFieldsWithTypes: function (item) { return DUTCH.fromFieldsWithTypes(item); }, fromBcs: function (data) { return DUTCH.fromBcs(data); }, bcs: DUTCH.bcs, fromJSONField: function (field) { return DUTCH.fromJSONField(field); }, fromJSON: function (json) { return DUTCH.fromJSON(json); }, fromSuiParsedData: function (content) { return DUTCH.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, DUTCH.fetch(client, id)];
            }); }); }, new: function (fields) { return new DUTCH([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(DUTCH, "r", {
        get: function () { return DUTCH.reified(); },
        enumerable: false,
        configurable: true
    });
    DUTCH.phantom = function () { return (0, reified_1.phantom)(DUTCH.reified()); };
    Object.defineProperty(DUTCH, "p", {
        get: function () { return DUTCH.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DUTCH, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("DUTCH", {
                dummy_field: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    DUTCH.fromFields = function (fields) { return DUTCH.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); };
    DUTCH.fromFieldsWithTypes = function (item) {
        if (!isDUTCH(item.type)) {
            throw new Error("not a DUTCH type");
        }
        return DUTCH.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    };
    DUTCH.fromBcs = function (data) { return DUTCH.fromFields(DUTCH.bcs.parse(data)); };
    DUTCH.prototype.toJSONField = function () {
        return {
            dummyField: this.dummyField,
        };
    };
    DUTCH.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    DUTCH.fromJSONField = function (field) { return DUTCH.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); };
    DUTCH.fromJSON = function (json) {
        if (json.$typeName !== DUTCH.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DUTCH.fromJSONField(json);
    };
    DUTCH.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDUTCH(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a DUTCH object"));
    } return DUTCH.fromFieldsWithTypes(content); };
    DUTCH.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching DUTCH object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDUTCH(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a DUTCH object"));
                        }
                        return [2 /*return*/, DUTCH.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    DUTCH.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::DUTCH";
    DUTCH.$numTypeParams = 0;
    return DUTCH;
}());
exports.DUTCH = DUTCH;
/* ============================== NewBid =============================== */
function isNewBid(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::NewBid"; }
var NewBid = /** @class */ (function () {
    function NewBid(typeArgs, fields) {
        this.$typeName = NewBid.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([NewBid.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.bidIndex = fields.bidIndex;
        ;
        this.price = fields.price;
        ;
        this.size = fields.size;
        ;
        this.bidderBalance = fields.bidderBalance;
        ;
        this.incentiveBalance = fields.incentiveBalance;
        ;
        this.tsMs = fields.tsMs;
    }
    NewBid.reified = function () {
        var _this = this;
        return { typeName: NewBid.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([NewBid.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return NewBid.fromFields(fields); }, fromFieldsWithTypes: function (item) { return NewBid.fromFieldsWithTypes(item); }, fromBcs: function (data) { return NewBid.fromBcs(data); }, bcs: NewBid.bcs, fromJSONField: function (field) { return NewBid.fromJSONField(field); }, fromJSON: function (json) { return NewBid.fromJSON(json); }, fromSuiParsedData: function (content) { return NewBid.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, NewBid.fetch(client, id)];
            }); }); }, new: function (fields) { return new NewBid([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(NewBid, "r", {
        get: function () { return NewBid.reified(); },
        enumerable: false,
        configurable: true
    });
    NewBid.phantom = function () { return (0, reified_1.phantom)(NewBid.reified()); };
    Object.defineProperty(NewBid, "p", {
        get: function () { return NewBid.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewBid, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("NewBid", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_1.TypeName.bcs, bid_index: bcs_1.bcs.u64(), price: bcs_1.bcs.u64(), size: bcs_1.bcs.u64(), bidder_balance: bcs_1.bcs.u64(), incentive_balance: bcs_1.bcs.u64(), ts_ms: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    NewBid.fromFields = function (fields) { return NewBid.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token), bidIndex: (0, reified_1.decodeFromFields)("u64", fields.bid_index), price: (0, reified_1.decodeFromFields)("u64", fields.price), size: (0, reified_1.decodeFromFields)("u64", fields.size), bidderBalance: (0, reified_1.decodeFromFields)("u64", fields.bidder_balance), incentiveBalance: (0, reified_1.decodeFromFields)("u64", fields.incentive_balance), tsMs: (0, reified_1.decodeFromFields)("u64", fields.ts_ms) }); };
    NewBid.fromFieldsWithTypes = function (item) {
        if (!isNewBid(item.type)) {
            throw new Error("not a NewBid type");
        }
        return NewBid.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token), bidIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_index), price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size), bidderBalance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bidder_balance), incentiveBalance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_balance), tsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.ts_ms) });
    };
    NewBid.fromBcs = function (data) { return NewBid.fromFields(NewBid.bcs.parse(data)); };
    NewBid.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), bidIndex: this.bidIndex.toString(), price: this.price.toString(), size: this.size.toString(), bidderBalance: this.bidderBalance.toString(), incentiveBalance: this.incentiveBalance.toString(), tsMs: this.tsMs.toString(),
        };
    };
    NewBid.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    NewBid.fromJSONField = function (field) { return NewBid.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.token), bidIndex: (0, reified_1.decodeFromJSONField)("u64", field.bidIndex), price: (0, reified_1.decodeFromJSONField)("u64", field.price), size: (0, reified_1.decodeFromJSONField)("u64", field.size), bidderBalance: (0, reified_1.decodeFromJSONField)("u64", field.bidderBalance), incentiveBalance: (0, reified_1.decodeFromJSONField)("u64", field.incentiveBalance), tsMs: (0, reified_1.decodeFromJSONField)("u64", field.tsMs) }); };
    NewBid.fromJSON = function (json) {
        if (json.$typeName !== NewBid.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewBid.fromJSONField(json);
    };
    NewBid.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewBid(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a NewBid object"));
    } return NewBid.fromFieldsWithTypes(content); };
    NewBid.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching NewBid object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewBid(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a NewBid object"));
                        }
                        return [2 /*return*/, NewBid.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    NewBid.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::NewBid";
    NewBid.$numTypeParams = 0;
    return NewBid;
}());
exports.NewBid = NewBid;
/* ============================== RemoveBid =============================== */
function isRemoveBid(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::RemoveBid"; }
var RemoveBid = /** @class */ (function () {
    function RemoveBid(typeArgs, fields) {
        this.$typeName = RemoveBid.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([RemoveBid.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.token = fields.token;
        ;
        this.bidIndex = fields.bidIndex;
        ;
        this.price = fields.price;
        ;
        this.size = fields.size;
        ;
        this.bidderBalance = fields.bidderBalance;
        ;
        this.incentiveBalance = fields.incentiveBalance;
        ;
        this.feeDiscount = fields.feeDiscount;
        ;
        this.tsMs = fields.tsMs;
    }
    RemoveBid.reified = function () {
        var _this = this;
        return { typeName: RemoveBid.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([RemoveBid.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return RemoveBid.fromFields(fields); }, fromFieldsWithTypes: function (item) { return RemoveBid.fromFieldsWithTypes(item); }, fromBcs: function (data) { return RemoveBid.fromBcs(data); }, bcs: RemoveBid.bcs, fromJSONField: function (field) { return RemoveBid.fromJSONField(field); }, fromJSON: function (json) { return RemoveBid.fromJSON(json); }, fromSuiParsedData: function (content) { return RemoveBid.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, RemoveBid.fetch(client, id)];
            }); }); }, new: function (fields) { return new RemoveBid([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(RemoveBid, "r", {
        get: function () { return RemoveBid.reified(); },
        enumerable: false,
        configurable: true
    });
    RemoveBid.phantom = function () { return (0, reified_1.phantom)(RemoveBid.reified()); };
    Object.defineProperty(RemoveBid, "p", {
        get: function () { return RemoveBid.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoveBid, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("RemoveBid", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), token: structs_1.TypeName.bcs, bid_index: bcs_1.bcs.u64(), price: bcs_1.bcs.u64(), size: bcs_1.bcs.u64(), bidder_balance: bcs_1.bcs.u64(), incentive_balance: bcs_1.bcs.u64(), fee_discount: bcs_1.bcs.u64(), ts_ms: bcs_1.bcs.u64()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    RemoveBid.fromFields = function (fields) { return RemoveBid.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), token: (0, reified_1.decodeFromFields)(structs_1.TypeName.reified(), fields.token), bidIndex: (0, reified_1.decodeFromFields)("u64", fields.bid_index), price: (0, reified_1.decodeFromFields)("u64", fields.price), size: (0, reified_1.decodeFromFields)("u64", fields.size), bidderBalance: (0, reified_1.decodeFromFields)("u64", fields.bidder_balance), incentiveBalance: (0, reified_1.decodeFromFields)("u64", fields.incentive_balance), feeDiscount: (0, reified_1.decodeFromFields)("u64", fields.fee_discount), tsMs: (0, reified_1.decodeFromFields)("u64", fields.ts_ms) }); };
    RemoveBid.fromFieldsWithTypes = function (item) {
        if (!isRemoveBid(item.type)) {
            throw new Error("not a RemoveBid type");
        }
        return RemoveBid.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), token: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TypeName.reified(), item.fields.token), bidIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_index), price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size), bidderBalance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bidder_balance), incentiveBalance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_balance), feeDiscount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee_discount), tsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.ts_ms) });
    };
    RemoveBid.fromBcs = function (data) { return RemoveBid.fromFields(RemoveBid.bcs.parse(data)); };
    RemoveBid.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), token: this.token.toJSONField(), bidIndex: this.bidIndex.toString(), price: this.price.toString(), size: this.size.toString(), bidderBalance: this.bidderBalance.toString(), incentiveBalance: this.incentiveBalance.toString(), feeDiscount: this.feeDiscount.toString(), tsMs: this.tsMs.toString(),
        };
    };
    RemoveBid.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    RemoveBid.fromJSONField = function (field) { return RemoveBid.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), token: (0, reified_1.decodeFromJSONField)(structs_1.TypeName.reified(), field.token), bidIndex: (0, reified_1.decodeFromJSONField)("u64", field.bidIndex), price: (0, reified_1.decodeFromJSONField)("u64", field.price), size: (0, reified_1.decodeFromJSONField)("u64", field.size), bidderBalance: (0, reified_1.decodeFromJSONField)("u64", field.bidderBalance), incentiveBalance: (0, reified_1.decodeFromJSONField)("u64", field.incentiveBalance), feeDiscount: (0, reified_1.decodeFromJSONField)("u64", field.feeDiscount), tsMs: (0, reified_1.decodeFromJSONField)("u64", field.tsMs) }); };
    RemoveBid.fromJSON = function (json) {
        if (json.$typeName !== RemoveBid.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RemoveBid.fromJSONField(json);
    };
    RemoveBid.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRemoveBid(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a RemoveBid object"));
    } return RemoveBid.fromFieldsWithTypes(content); };
    RemoveBid.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching RemoveBid object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRemoveBid(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a RemoveBid object"));
                        }
                        return [2 /*return*/, RemoveBid.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    RemoveBid.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::RemoveBid";
    RemoveBid.$numTypeParams = 0;
    return RemoveBid;
}());
exports.RemoveBid = RemoveBid;
/* ============================== UpdateAuctionConfig =============================== */
function isUpdateAuctionConfig(type) { type = (0, util_1.compressSuiType)(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::UpdateAuctionConfig"; }
var UpdateAuctionConfig = /** @class */ (function () {
    function UpdateAuctionConfig(typeArgs, fields) {
        this.$typeName = UpdateAuctionConfig.$typeName;
        this.$fullTypeName = util_1.composeSuiType.apply(void 0, __spreadArray([UpdateAuctionConfig.$typeName], __read(typeArgs), false));
        this.$typeArgs = typeArgs;
        this.signer = fields.signer;
        ;
        this.index = fields.index;
        ;
        this.prevStartTsMs = fields.prevStartTsMs;
        ;
        this.prevEndTsMs = fields.prevEndTsMs;
        ;
        this.prevDecaySpeed = fields.prevDecaySpeed;
        ;
        this.prevInitialPrice = fields.prevInitialPrice;
        ;
        this.prevFinalPrice = fields.prevFinalPrice;
        ;
        this.prevFeeBp = fields.prevFeeBp;
        ;
        this.prevIncentiveBp = fields.prevIncentiveBp;
        ;
        this.prevTokenDecimal = fields.prevTokenDecimal;
        ;
        this.prevSizeDecimal = fields.prevSizeDecimal;
        ;
        this.prevAbleToRemoveBid = fields.prevAbleToRemoveBid;
        ;
        this.startTsMs = fields.startTsMs;
        ;
        this.endTsMs = fields.endTsMs;
        ;
        this.decaySpeed = fields.decaySpeed;
        ;
        this.initialPrice = fields.initialPrice;
        ;
        this.finalPrice = fields.finalPrice;
        ;
        this.feeBp = fields.feeBp;
        ;
        this.incentiveBp = fields.incentiveBp;
        ;
        this.tokenDecimal = fields.tokenDecimal;
        ;
        this.sizeDecimal = fields.sizeDecimal;
        ;
        this.ableToRemoveBid = fields.ableToRemoveBid;
    }
    UpdateAuctionConfig.reified = function () {
        var _this = this;
        return { typeName: UpdateAuctionConfig.$typeName, fullTypeName: util_1.composeSuiType.apply(void 0, __spreadArray([UpdateAuctionConfig.$typeName], [], false)), typeArgs: [], reifiedTypeArgs: [], fromFields: function (fields) { return UpdateAuctionConfig.fromFields(fields); }, fromFieldsWithTypes: function (item) { return UpdateAuctionConfig.fromFieldsWithTypes(item); }, fromBcs: function (data) { return UpdateAuctionConfig.fromBcs(data); }, bcs: UpdateAuctionConfig.bcs, fromJSONField: function (field) { return UpdateAuctionConfig.fromJSONField(field); }, fromJSON: function (json) { return UpdateAuctionConfig.fromJSON(json); }, fromSuiParsedData: function (content) { return UpdateAuctionConfig.fromSuiParsedData(content); }, fetch: function (client, id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, UpdateAuctionConfig.fetch(client, id)];
            }); }); }, new: function (fields) { return new UpdateAuctionConfig([], fields); }, kind: "StructClassReified", };
    };
    Object.defineProperty(UpdateAuctionConfig, "r", {
        get: function () { return UpdateAuctionConfig.reified(); },
        enumerable: false,
        configurable: true
    });
    UpdateAuctionConfig.phantom = function () { return (0, reified_1.phantom)(UpdateAuctionConfig.reified()); };
    Object.defineProperty(UpdateAuctionConfig, "p", {
        get: function () { return UpdateAuctionConfig.phantom(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpdateAuctionConfig, "bcs", {
        get: function () {
            return bcs_1.bcs.struct("UpdateAuctionConfig", {
                signer: bcs_1.bcs.bytes(32).transform({ input: function (val) { return (0, bcs_1.fromHEX)(val); }, output: function (val) { return (0, bcs_1.toHEX)(val); }, }), index: bcs_1.bcs.u64(), prev_start_ts_ms: bcs_1.bcs.u64(), prev_end_ts_ms: bcs_1.bcs.u64(), prev_decay_speed: bcs_1.bcs.u64(), prev_initial_price: bcs_1.bcs.u64(), prev_final_price: bcs_1.bcs.u64(), prev_fee_bp: bcs_1.bcs.u64(), prev_incentive_bp: bcs_1.bcs.u64(), prev_token_decimal: bcs_1.bcs.u64(), prev_size_decimal: bcs_1.bcs.u64(), prev_able_to_remove_bid: bcs_1.bcs.bool(), start_ts_ms: bcs_1.bcs.u64(), end_ts_ms: bcs_1.bcs.u64(), decay_speed: bcs_1.bcs.u64(), initial_price: bcs_1.bcs.u64(), final_price: bcs_1.bcs.u64(), fee_bp: bcs_1.bcs.u64(), incentive_bp: bcs_1.bcs.u64(), token_decimal: bcs_1.bcs.u64(), size_decimal: bcs_1.bcs.u64(), able_to_remove_bid: bcs_1.bcs.bool()
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    UpdateAuctionConfig.fromFields = function (fields) { return UpdateAuctionConfig.reified().new({ signer: (0, reified_1.decodeFromFields)("address", fields.signer), index: (0, reified_1.decodeFromFields)("u64", fields.index), prevStartTsMs: (0, reified_1.decodeFromFields)("u64", fields.prev_start_ts_ms), prevEndTsMs: (0, reified_1.decodeFromFields)("u64", fields.prev_end_ts_ms), prevDecaySpeed: (0, reified_1.decodeFromFields)("u64", fields.prev_decay_speed), prevInitialPrice: (0, reified_1.decodeFromFields)("u64", fields.prev_initial_price), prevFinalPrice: (0, reified_1.decodeFromFields)("u64", fields.prev_final_price), prevFeeBp: (0, reified_1.decodeFromFields)("u64", fields.prev_fee_bp), prevIncentiveBp: (0, reified_1.decodeFromFields)("u64", fields.prev_incentive_bp), prevTokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.prev_token_decimal), prevSizeDecimal: (0, reified_1.decodeFromFields)("u64", fields.prev_size_decimal), prevAbleToRemoveBid: (0, reified_1.decodeFromFields)("bool", fields.prev_able_to_remove_bid), startTsMs: (0, reified_1.decodeFromFields)("u64", fields.start_ts_ms), endTsMs: (0, reified_1.decodeFromFields)("u64", fields.end_ts_ms), decaySpeed: (0, reified_1.decodeFromFields)("u64", fields.decay_speed), initialPrice: (0, reified_1.decodeFromFields)("u64", fields.initial_price), finalPrice: (0, reified_1.decodeFromFields)("u64", fields.final_price), feeBp: (0, reified_1.decodeFromFields)("u64", fields.fee_bp), incentiveBp: (0, reified_1.decodeFromFields)("u64", fields.incentive_bp), tokenDecimal: (0, reified_1.decodeFromFields)("u64", fields.token_decimal), sizeDecimal: (0, reified_1.decodeFromFields)("u64", fields.size_decimal), ableToRemoveBid: (0, reified_1.decodeFromFields)("bool", fields.able_to_remove_bid) }); };
    UpdateAuctionConfig.fromFieldsWithTypes = function (item) {
        if (!isUpdateAuctionConfig(item.type)) {
            throw new Error("not a UpdateAuctionConfig type");
        }
        return UpdateAuctionConfig.reified().new({ signer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.signer), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), prevStartTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.prev_start_ts_ms), prevEndTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.prev_end_ts_ms), prevDecaySpeed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.prev_decay_speed), prevInitialPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.prev_initial_price), prevFinalPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.prev_final_price), prevFeeBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.prev_fee_bp), prevIncentiveBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.prev_incentive_bp), prevTokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.prev_token_decimal), prevSizeDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.prev_size_decimal), prevAbleToRemoveBid: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.prev_able_to_remove_bid), startTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_ts_ms), endTsMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.end_ts_ms), decaySpeed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.decay_speed), initialPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.initial_price), finalPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.final_price), feeBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee_bp), incentiveBp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incentive_bp), tokenDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.token_decimal), sizeDecimal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size_decimal), ableToRemoveBid: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.able_to_remove_bid) });
    };
    UpdateAuctionConfig.fromBcs = function (data) { return UpdateAuctionConfig.fromFields(UpdateAuctionConfig.bcs.parse(data)); };
    UpdateAuctionConfig.prototype.toJSONField = function () {
        return {
            signer: this.signer, index: this.index.toString(), prevStartTsMs: this.prevStartTsMs.toString(), prevEndTsMs: this.prevEndTsMs.toString(), prevDecaySpeed: this.prevDecaySpeed.toString(), prevInitialPrice: this.prevInitialPrice.toString(), prevFinalPrice: this.prevFinalPrice.toString(), prevFeeBp: this.prevFeeBp.toString(), prevIncentiveBp: this.prevIncentiveBp.toString(), prevTokenDecimal: this.prevTokenDecimal.toString(), prevSizeDecimal: this.prevSizeDecimal.toString(), prevAbleToRemoveBid: this.prevAbleToRemoveBid, startTsMs: this.startTsMs.toString(), endTsMs: this.endTsMs.toString(), decaySpeed: this.decaySpeed.toString(), initialPrice: this.initialPrice.toString(), finalPrice: this.finalPrice.toString(), feeBp: this.feeBp.toString(), incentiveBp: this.incentiveBp.toString(), tokenDecimal: this.tokenDecimal.toString(), sizeDecimal: this.sizeDecimal.toString(), ableToRemoveBid: this.ableToRemoveBid,
        };
    };
    UpdateAuctionConfig.prototype.toJSON = function () { return __assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField()); };
    UpdateAuctionConfig.fromJSONField = function (field) { return UpdateAuctionConfig.reified().new({ signer: (0, reified_1.decodeFromJSONField)("address", field.signer), index: (0, reified_1.decodeFromJSONField)("u64", field.index), prevStartTsMs: (0, reified_1.decodeFromJSONField)("u64", field.prevStartTsMs), prevEndTsMs: (0, reified_1.decodeFromJSONField)("u64", field.prevEndTsMs), prevDecaySpeed: (0, reified_1.decodeFromJSONField)("u64", field.prevDecaySpeed), prevInitialPrice: (0, reified_1.decodeFromJSONField)("u64", field.prevInitialPrice), prevFinalPrice: (0, reified_1.decodeFromJSONField)("u64", field.prevFinalPrice), prevFeeBp: (0, reified_1.decodeFromJSONField)("u64", field.prevFeeBp), prevIncentiveBp: (0, reified_1.decodeFromJSONField)("u64", field.prevIncentiveBp), prevTokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.prevTokenDecimal), prevSizeDecimal: (0, reified_1.decodeFromJSONField)("u64", field.prevSizeDecimal), prevAbleToRemoveBid: (0, reified_1.decodeFromJSONField)("bool", field.prevAbleToRemoveBid), startTsMs: (0, reified_1.decodeFromJSONField)("u64", field.startTsMs), endTsMs: (0, reified_1.decodeFromJSONField)("u64", field.endTsMs), decaySpeed: (0, reified_1.decodeFromJSONField)("u64", field.decaySpeed), initialPrice: (0, reified_1.decodeFromJSONField)("u64", field.initialPrice), finalPrice: (0, reified_1.decodeFromJSONField)("u64", field.finalPrice), feeBp: (0, reified_1.decodeFromJSONField)("u64", field.feeBp), incentiveBp: (0, reified_1.decodeFromJSONField)("u64", field.incentiveBp), tokenDecimal: (0, reified_1.decodeFromJSONField)("u64", field.tokenDecimal), sizeDecimal: (0, reified_1.decodeFromJSONField)("u64", field.sizeDecimal), ableToRemoveBid: (0, reified_1.decodeFromJSONField)("bool", field.ableToRemoveBid) }); };
    UpdateAuctionConfig.fromJSON = function (json) {
        if (json.$typeName !== UpdateAuctionConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpdateAuctionConfig.fromJSONField(json);
    };
    UpdateAuctionConfig.fromSuiParsedData = function (content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpdateAuctionConfig(content.type)) {
        throw new Error("object at ".concat(content.fields.id, " is not a UpdateAuctionConfig object"));
    } return UpdateAuctionConfig.fromFieldsWithTypes(content); };
    UpdateAuctionConfig.fetch = function (client, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, client.getObject({ id: id, options: { showBcs: true, }, })];
                    case 1:
                        res = _c.sent();
                        if (res.error) {
                            throw new Error("error fetching UpdateAuctionConfig object at id ".concat(id, ": ").concat(res.error.code));
                        }
                        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateAuctionConfig(res.data.bcs.type)) {
                            throw new Error("object at id ".concat(id, " is not a UpdateAuctionConfig object"));
                        }
                        return [2 /*return*/, UpdateAuctionConfig.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes))];
                }
            });
        });
    };
    UpdateAuctionConfig.$typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::dutch::UpdateAuctionConfig";
    UpdateAuctionConfig.$numTypeParams = 0;
    return UpdateAuctionConfig;
}());
exports.UpdateAuctionConfig = UpdateAuctionConfig;
