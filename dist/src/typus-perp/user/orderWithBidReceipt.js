"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTradingOrderWithBidReceipt = createTradingOrderWithBidReceipt;
exports.reduceOptionCollateralPositionSize = reduceOptionCollateralPositionSize;
var functions_1 = require("../trading/functions");
var constants_1 = require("src/constants");
var pythClient_1 = require("src/utils/pyth/pythClient");
var constant_1 = require("src/utils/pyth/constant");
var token_1 = require("src/constants/token");
var __1 = require("..");
var user_entry_1 = require("src/typus-dov-single-v2/entry/user-entry");
function createTradingOrderWithBidReceipt(config, input) {
    return __awaiter(this, void 0, void 0, function () {
        var TOKEN, BASE_TOKEN, cToken, bToken, baseToken, collateralBidReceipt;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    TOKEN = input.cToken;
                    BASE_TOKEN = input.tradingToken;
                    return [4 /*yield*/, (0, pythClient_1.updatePyth)(input.pythClient, input.tx, [TOKEN, BASE_TOKEN])];
                case 1:
                    _a.sent();
                    cToken = token_1.tokenType[__1.NETWORK][TOKEN];
                    bToken = token_1.tokenType[__1.NETWORK][input.bToken];
                    baseToken = token_1.tokenType[__1.NETWORK][BASE_TOKEN];
                    (0, pythClient_1.updateOracleWithPyth)(input.pythClient, input.tx, config.PACKAGE.ORACLE, config.ORACLE[BASE_TOKEN], BASE_TOKEN, "USDC");
                    if (input.share) {
                        collateralBidReceipt = (0, user_entry_1.getSplitBidReceiptTx)({
                            tx: input.tx,
                            typusFrameworkOriginPackageId: config.PACKAGE_ORIGIN.FRAMEWORK,
                            typusDovSinglePackageId: config.PACKAGE.DOV_SINGLE,
                            typusDovSingleRegistry: config.REGISTRY.DOV_SINGLE,
                            index: input.index,
                            receipts: [input.bidReceipt],
                            share: input.share,
                            recipient: input.user,
                        });
                    }
                    else {
                        collateralBidReceipt = input.bidReceipt;
                    }
                    (0, functions_1.createTradingOrderWithBidReceipt)(input.tx, [cToken, bToken, baseToken], {
                        version: config.OBJECT.TYPUS_PERP_VERSION,
                        registry: config.REGISTRY.MARKET_REGISTRY,
                        poolRegistry: config.REGISTRY.LP_POOL_REGISTRY,
                        marketIndex: BigInt(0),
                        poolIndex: BigInt(0),
                        pythState: constant_1.pythStateId[__1.NETWORK],
                        oracleCToken: constant_1.priceInfoObjectIds[__1.NETWORK][TOKEN],
                        oracleTradingSymbol: constant_1.priceInfoObjectIds[__1.NETWORK][BASE_TOKEN],
                        clock: constants_1.CLOCK,
                        typusEcosystemVersion: config.OBJECT.TYPUS_VERSION,
                        typusUserRegistry: config.REGISTRY.USER,
                        typusLeaderboardRegistry: config.REGISTRY.LEADERBOARD,
                        isLong: input.isLong,
                        dovRegistry: config.REGISTRY.DOV_SINGLE,
                        typusOracle: config.ORACLE[BASE_TOKEN],
                        collateralBidReceipt: collateralBidReceipt,
                        user: input.user,
                    });
                    return [2 /*return*/, input.tx];
            }
        });
    });
}
function reduceOptionCollateralPositionSize(config, input) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // const TOKEN = input.cToken;
            // const BASE_TOKEN = input.tradingToken;
            // await updatePyth(input.pythClient, input.tx, [TOKEN, BASE_TOKEN]);
            // const cToken = tokenType[NETWORK][TOKEN];
            // const bToken = tokenType[NETWORK][input.bToken];
            // const baseToken = tokenType[NETWORK][BASE_TOKEN];
            // updateOracleWithPyth(input.pythClient, input.tx, config.PACKAGE.ORACLE, config.ORACLE[BASE_TOKEN], BASE_TOKEN, "USDC");
            // // split bid receipt
            // var collateralBidReceipt;
            // if (input.share) {
            //     collateralBidReceipt = getSplitBidReceiptTx({
            //         tx: input.tx,
            //         typusFrameworkOriginPackageId: config.PACKAGE_ORIGIN.FRAMEWORK,
            //         typusDovSinglePackageId: config.PACKAGE.DOV_SINGLE,
            //         typusDovSingleRegistry: config.REGISTRY.DOV_SINGLE,
            //         index: input.index,
            //         receipts: [input.bidReceipt],
            //         share: input.share,
            //         recipient: input.user,
            //     });
            // } else {
            //     collateralBidReceipt = input.bidReceipt;
            // }
            // _reduceOptionCollateralPositionSize(input.tx, [cToken, bToken, baseToken], {
            //     version: config.OBJECT.TYPUS_PERP_VERSION,
            //     registry: config.REGISTRY.MARKET_REGISTRY,
            //     poolRegistry: config.REGISTRY.LP_POOL_REGISTRY,
            //     marketIndex: BigInt(0),
            //     poolIndex: BigInt(0),
            //     pythState: pythStateId[NETWORK],
            //     oracleCToken: priceInfoObjectIds[NETWORK][TOKEN],
            //     oracleTradingSymbol: priceInfoObjectIds[NETWORK][BASE_TOKEN],
            //     clock: CLOCK,
            //     typusEcosystemVersion: config.OBJECT.TYPUS_VERSION,
            //     typusUserRegistry: config.REGISTRY.USER,
            //     typusLeaderboardRegistry: config.REGISTRY.LEADERBOARD,
            //     dovRegistry: config.REGISTRY.DOV_SINGLE,
            //     typusOracle: config.ORACLE[BASE_TOKEN],
            //     positionId: BigInt(123),
            //     orderSize: null,
            // });
            return [2 /*return*/, input.tx];
        });
    });
}
