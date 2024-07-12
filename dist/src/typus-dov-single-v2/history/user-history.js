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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserEvents = getUserEvents;
exports.getAutoBidEvents = getAutoBidEvents;
exports.parseTxHistory = parseTxHistory;
exports.getFromSentio = getFromSentio;
exports.getNewBidFromSentio = getNewBidFromSentio;
exports.getExerciseFromSentio = getExerciseFromSentio;
exports.getDepositorCashFlows = getDepositorCashFlows;
var token_1 = require("src/constants/token");
var bignumber_js_1 = __importDefault(require("bignumber.js"));
function getUserEvents(provider, sender, cursor) {
    return __awaiter(this, void 0, void 0, function () {
        var senderFilter, hasNextPage, datas, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    senderFilter = {
                        Sender: sender,
                    };
                    hasNextPage = true;
                    datas = [];
                    _a.label = 1;
                case 1:
                    if (!hasNextPage) return [3 /*break*/, 3];
                    return [4 /*yield*/, provider.queryEvents({
                            query: senderFilter,
                            order: "ascending",
                            cursor: cursor,
                        })];
                case 2:
                    result = _a.sent();
                    // console.log(result);
                    hasNextPage = result.hasNextPage;
                    cursor = result.nextCursor;
                    // @ts-ignore
                    datas = datas.concat(result.data);
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/, [datas, cursor]];
            }
        });
    });
}
function getAutoBidEvents(provider, originPackage, startTimeMs) {
    return __awaiter(this, void 0, void 0, function () {
        var moduleFilter, hasNextPage, cursor, datas, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    moduleFilter = {
                        MoveModule: { package: originPackage, module: "auto_bid" },
                    };
                    hasNextPage = true;
                    cursor = undefined;
                    datas = [];
                    _a.label = 1;
                case 1:
                    if (!hasNextPage) return [3 /*break*/, 3];
                    return [4 /*yield*/, provider.queryEvents({
                            query: moduleFilter,
                            order: "descending",
                            cursor: cursor,
                        })];
                case 2:
                    result = _a.sent();
                    // console.log(result);
                    hasNextPage = result.hasNextPage;
                    cursor = result.nextCursor;
                    // @ts-ignore
                    datas = datas.concat(result.data);
                    if (hasNextPage && Number(result.data[result.data.length - 1].timestampMs) < startTimeMs) {
                        return [3 /*break*/, 3];
                    }
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/, datas];
            }
        });
    });
}
function parseTxHistory(datas, originPackage, vaults) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, datas
                        .filter(function (event) {
                        var type = event.type;
                        return (event.packageId == originPackage ||
                            type.includes("typus_nft::First") ||
                            type.includes("typus_nft::ExpUpEvent") ||
                            type.includes("tails_staking"));
                    })
                        .sort(function (a, b) {
                        // From Old to New!
                        if (a.timestampMs == b.timestampMs) {
                            return Number(a.id.eventSeq) - Number(b.id.eventSeq);
                        }
                        else {
                            return Number(a.timestampMs) - Number(b.timestampMs);
                        }
                    })
                        .reduce(function (promise, event) { return __awaiter(_this, void 0, void 0, function () {
                        var txHistory, functionType, action, Action, Amount, Index, Period, Vault, RiskLevel, Tails, Exp, d_token, b_token, o_token, token, amount, i, i, i, token, amount, token, amount, amount, token, amount, token, amount, token, amount, b_token_name, b_token_amount, i_token_name, i_token_amount, token, amount, token, amount, deposit_amount, deposit_amount, balance, balance, profit, profit, token, amount, amount, token, amount, size, token, amount, token, amount, size, bidder_balance;
                        var _a, _b, _c;
                        var _d;
                        return __generator(this, function (_e) {
                            switch (_e.label) {
                                case 0: return [4 /*yield*/, promise];
                                case 1:
                                    txHistory = _e.sent();
                                    functionType = (_d = new RegExp("^([^::]+)::([^::]+)::([^<]+)").exec(event.type)) === null || _d === void 0 ? void 0 : _d.slice(1, 4);
                                    action = functionType[2];
                                    Tails = undefined;
                                    Index = event.parsedJson.index || event.parsedJson.vault_index;
                                    if (Index) {
                                        _a = __read(parseVaultInfo(vaults, Index, action, event.parsedJson.log), 6), Period = _a[0], Vault = _a[1], RiskLevel = _a[2], d_token = _a[3], b_token = _a[4], o_token = _a[5];
                                    }
                                    switch (action) {
                                        // new version events
                                        case "StakeTailsEvent":
                                            Action = "Stake";
                                            Amount = "0.05 SUI";
                                            Tails = "#".concat(event.parsedJson.log[0]);
                                            break;
                                        case "UnstakeTailsEvent":
                                            Action = "Unstake";
                                            Tails = "#".concat(event.parsedJson.log[0]);
                                            break;
                                        case "DailySignUpEvent":
                                            Action = "Check In";
                                            Tails = event.parsedJson.tails.map(function (num) { return "#".concat(num); }).join(" ");
                                            Exp = event.parsedJson.log[0];
                                            break;
                                        case "TransferTailsEvent":
                                            Action = "Transfer";
                                            Amount = "0.01 SUI";
                                            Tails = "#".concat(event.parsedJson.log[0]);
                                            break;
                                        case "ExpUpEvent":
                                            if (event.parsedJson.log) {
                                                Action = "Train Tail";
                                                Tails = "#".concat(event.parsedJson.log[0]);
                                                Exp = event.parsedJson.log[1];
                                                if (Number(Exp) == 0) {
                                                    return [2 /*return*/, txHistory];
                                                }
                                            }
                                            break;
                                        case "LevelUpEvent":
                                            if (event.parsedJson.log) {
                                                Action = "Level Up to Level ".concat(event.parsedJson.log[1]);
                                                Tails = "#".concat(event.parsedJson.log[0]);
                                            }
                                            break;
                                        case "ClaimProfitSharingEvent":
                                            if (event.parsedJson.profit_asset) {
                                                token = (0, token_1.typeArgToAsset)("0x" + event.parsedJson.profit_asset.name);
                                                amount = Number(event.parsedJson.log[0]) / Math.pow(10, (0, token_1.assetToDecimal)(token));
                                                Action = "Harvest Dice Profit";
                                                Tails = event.parsedJson.tails.map(function (num) { return "#".concat(num); }).join(" ");
                                                Amount = "".concat((0, bignumber_js_1.default)(amount).toFixed(), " ").concat(token);
                                            }
                                            break;
                                        // old version events
                                        case "StakeNftEvent":
                                            Action = "Stake";
                                            Amount = "0.05 SUI";
                                            Tails = "#".concat(event.parsedJson.number);
                                            break;
                                        case "UnstakeNftEvent":
                                            Action = "Unstake";
                                            Tails = "#".concat(event.parsedJson.number);
                                            break;
                                        case "ExpUpEvent":
                                            i = txHistory.findIndex(function (x) { return x.txDigest == event.id.txDigest && x.Action != "First Deposit" && x.Action != "Stake"; });
                                            if (i != -1 && txHistory[i].Tails == undefined) {
                                                txHistory[i].Tails = "#".concat(event.parsedJson.number);
                                                txHistory[i].Exp = event.parsedJson.exp_earn;
                                                return [2 /*return*/, txHistory];
                                            }
                                            else if (event.id.eventSeq == 0) {
                                                Action = "Collect EXP";
                                                Tails = "#".concat(event.parsedJson.number);
                                                Exp = event.parsedJson.exp_earn;
                                            }
                                            else {
                                                return [2 /*return*/, txHistory];
                                            }
                                            break;
                                        case "TransferNftEvent":
                                            Action = "Transfer";
                                            Amount = "0.01 SUI";
                                            Tails = "#".concat(event.parsedJson.number);
                                            break;
                                        case "DailyAttendEvent":
                                            i = txHistory.findIndex(function (x) { return x.txDigest == event.id.txDigest && x.Action == "Collect EXP"; });
                                            if (i != -1) {
                                                txHistory[i].Action = "Check In";
                                                return [2 /*return*/, txHistory];
                                            }
                                            break;
                                        case "FirstDepositEvent":
                                            Action = "First Deposit";
                                            Tails = "#".concat(event.parsedJson.number);
                                            Exp = event.parsedJson.exp_earn;
                                            break;
                                        case "FirstBidEvent":
                                            Action = "First Bid";
                                            Tails = "#".concat(event.parsedJson.number);
                                            Exp = event.parsedJson.exp_earn;
                                            break;
                                        case "LevelUpEvent":
                                            Action = "Level Up to Level ".concat(event.parsedJson.level);
                                            if (event.parsedJson.number) {
                                                Tails = "#".concat(event.parsedJson.number);
                                                break;
                                            }
                                            else {
                                                return [2 /*return*/, txHistory];
                                            }
                                        case "DepositEvent":
                                        case "WithdrawEvent":
                                        case "UnsubscribeEvent":
                                        case "ClaimEvent":
                                        case "CompoundEvent":
                                        case "HarvestEvent":
                                            i = txHistory.findIndex(function (x) { return x.txDigest == event.id.txDigest && x.Action == "Collect EXP"; });
                                            token = (0, token_1.typeArgToAsset)("0x" + event.parsedJson.token.name);
                                            amount = Number(event.parsedJson.amount) / Math.pow(10, Number(event.parsedJson.decimal));
                                            Action = action.slice(0, action.length - 5);
                                            if (Action == "Harvest") {
                                                Action = "Harvest Reward";
                                            }
                                            Amount = "".concat((0, bignumber_js_1.default)(amount).toFixed(), " ").concat(token);
                                            Index = Index;
                                            if (i != -1) {
                                                txHistory[i].Action = Action;
                                                txHistory[i].Amount = Amount;
                                                txHistory[i].Vault = Vault;
                                                txHistory[i].RiskLevel = RiskLevel;
                                                txHistory[i].Index = Index;
                                                return [2 /*return*/, txHistory];
                                            }
                                            break;
                                        case "RaiseFundEvent":
                                            Index = event.parsedJson.log[0];
                                            _b = __read(parseVaultInfo(vaults, Index, action, event.parsedJson.log), 6), Period = _b[0], Vault = _b[1], RiskLevel = _b[2], d_token = _b[3], b_token = _b[4], o_token = _b[5];
                                            token = (0, token_1.typeArgToAsset)("0x" + event.parsedJson.token.name);
                                            if (event.parsedJson.log[4] > 0) {
                                                // deposit
                                                Action = "Deposit";
                                                amount = Number(event.parsedJson.log[4]) / Math.pow(10, (0, token_1.assetToDecimal)(token));
                                                Amount = "".concat((0, bignumber_js_1.default)(amount).toFixed(), " ").concat(token);
                                            }
                                            else if (event.parsedJson.log[5] > 0) {
                                                // compound
                                                Action = "Compound";
                                                amount = Number(event.parsedJson.log[5]) / Math.pow(10, (0, token_1.assetToDecimal)(token));
                                                Amount = "".concat((0, bignumber_js_1.default)(amount).toFixed(), " ").concat(token);
                                            }
                                            break;
                                        case "ReduceFundEvent":
                                            Index = event.parsedJson.log[0];
                                            _c = __read(parseVaultInfo(vaults, Index, action, event.parsedJson.log), 6), Period = _c[0], Vault = _c[1], RiskLevel = _c[2], d_token = _c[3], b_token = _c[4], o_token = _c[5];
                                            if (event.parsedJson.log[4] > 0) {
                                                // withdraw
                                                Action = "Withdraw";
                                                token = (0, token_1.typeArgToAsset)("0x" + event.parsedJson.d_token.name);
                                                amount = Number(event.parsedJson.log[4]) / Math.pow(10, (0, token_1.assetToDecimal)(token));
                                                Amount = "".concat((0, bignumber_js_1.default)(amount).toFixed(), " ").concat(token);
                                                txHistory.push({
                                                    Index: Index,
                                                    Period: Period,
                                                    Action: Action,
                                                    Amount: Amount,
                                                    Vault: Vault,
                                                    RiskLevel: RiskLevel,
                                                    Tails: Tails,
                                                    Exp: Exp,
                                                    Date: new Date(Number(event.timestampMs)),
                                                    txDigest: event.id.txDigest,
                                                });
                                            }
                                            if (event.parsedJson.log[5] > 0) {
                                                // unsubscribe
                                                Action = "Unsubscribe";
                                                token = (0, token_1.typeArgToAsset)("0x" + event.parsedJson.d_token.name);
                                                amount = Number(event.parsedJson.log[5]) / Math.pow(10, (0, token_1.assetToDecimal)(token));
                                                Amount = "".concat((0, bignumber_js_1.default)(amount).toFixed(), " ").concat(token);
                                                txHistory.push({
                                                    Index: Index,
                                                    Period: Period,
                                                    Action: Action,
                                                    Amount: Amount,
                                                    Vault: Vault,
                                                    RiskLevel: RiskLevel,
                                                    Tails: Tails,
                                                    Exp: Exp,
                                                    Date: new Date(Number(event.timestampMs)),
                                                    txDigest: event.id.txDigest,
                                                });
                                            }
                                            if (event.parsedJson.log[9] > 0) {
                                                // claim
                                                Action = "Claim";
                                                token = (0, token_1.typeArgToAsset)("0x" + event.parsedJson.d_token.name);
                                                amount = Number(event.parsedJson.log[9]) / Math.pow(10, (0, token_1.assetToDecimal)(token));
                                                Amount = "".concat((0, bignumber_js_1.default)(amount).toFixed(), " ").concat(token);
                                                txHistory.push({
                                                    Index: Index,
                                                    Period: Period,
                                                    Action: Action,
                                                    Amount: Amount,
                                                    Vault: Vault,
                                                    RiskLevel: RiskLevel,
                                                    Tails: Tails,
                                                    Exp: Exp,
                                                    Date: new Date(Number(event.timestampMs)),
                                                    txDigest: event.id.txDigest,
                                                });
                                            }
                                            if (event.parsedJson.log[6] > 0 && event.parsedJson.log[10] > 0) {
                                                // Harvest d token and i token
                                                Action = "Harvest Reward";
                                                b_token_name = (0, token_1.typeArgToAsset)("0x" + event.parsedJson.b_token.name);
                                                b_token_amount = Number(event.parsedJson.log[6]) / Math.pow(10, (0, token_1.assetToDecimal)(b_token_name));
                                                i_token_name = (0, token_1.typeArgToAsset)("0x" + event.parsedJson.i_token.name);
                                                i_token_amount = Number(event.parsedJson.log[10]) / Math.pow(10, (0, token_1.assetToDecimal)(i_token_name));
                                                Amount = "".concat((0, bignumber_js_1.default)(b_token_amount).toFixed(), " ").concat(b_token_name, "\n").concat((0, bignumber_js_1.default)(i_token_amount).toFixed(), " ").concat(i_token_name);
                                                // var amount =
                                                //     Number(event.parsedJson!.log[6]) / 10 ** assetToDecimal(token)!
                                                //     Number(event.parsedJson!.log[10]) / 10 ** assetToDecimal(token)!;
                                                // Amount = `${BigNumber(amount).toFixed()} ${token}`;
                                                txHistory.push({
                                                    Index: Index,
                                                    Period: Period,
                                                    Action: Action,
                                                    Amount: Amount,
                                                    Vault: Vault,
                                                    RiskLevel: RiskLevel,
                                                    Tails: Tails,
                                                    Exp: Exp,
                                                    Date: new Date(Number(event.timestampMs)),
                                                    txDigest: event.id.txDigest,
                                                });
                                            }
                                            else {
                                                if (event.parsedJson.log[6] > 0) {
                                                    // harvest
                                                    Action = "Harvest Reward";
                                                    token = (0, token_1.typeArgToAsset)("0x" + event.parsedJson.b_token.name);
                                                    amount = Number(event.parsedJson.log[6]) / Math.pow(10, (0, token_1.assetToDecimal)(token));
                                                    Amount = "".concat((0, bignumber_js_1.default)(amount).toFixed(), " ").concat(token);
                                                    txHistory.push({
                                                        Index: Index,
                                                        Period: Period,
                                                        Action: Action,
                                                        Amount: Amount,
                                                        Vault: Vault,
                                                        RiskLevel: RiskLevel,
                                                        Tails: Tails,
                                                        Exp: Exp,
                                                        Date: new Date(Number(event.timestampMs)),
                                                        txDigest: event.id.txDigest,
                                                    });
                                                }
                                                if (event.parsedJson.log[10] > 0) {
                                                    // redeem
                                                    Action = "Harvest Reward";
                                                    token = (0, token_1.typeArgToAsset)("0x" + event.parsedJson.i_token.name);
                                                    amount = Number(event.parsedJson.log[10]) / Math.pow(10, (0, token_1.assetToDecimal)(token));
                                                    Amount = "".concat((0, bignumber_js_1.default)(amount).toFixed(), " ").concat(token);
                                                    txHistory.push({
                                                        Index: Index,
                                                        Period: Period,
                                                        Action: Action,
                                                        Amount: Amount,
                                                        Vault: Vault,
                                                        RiskLevel: RiskLevel,
                                                        Tails: Tails,
                                                        Exp: Exp,
                                                        Date: new Date(Number(event.timestampMs)),
                                                        txDigest: event.id.txDigest,
                                                    });
                                                }
                                            }
                                            return [2 /*return*/, txHistory];
                                        case "NewStrategyEventV2":
                                            Action = "Create Strategy";
                                            deposit_amount = Number(event.parsedJson.deposit_amount) / Math.pow(10, (0, token_1.assetToDecimal)(b_token));
                                            Amount = "".concat((0, bignumber_js_1.default)(deposit_amount).toFixed(), " ").concat(b_token);
                                            break;
                                        case "UpdateStrategyEvent":
                                            Action = "Update Strategy";
                                            deposit_amount = Number(event.parsedJson.deposit_amount) / Math.pow(10, (0, token_1.assetToDecimal)(b_token));
                                            Amount = "".concat((0, bignumber_js_1.default)(deposit_amount).toFixed(), " ").concat(b_token);
                                            break;
                                        case "CloseStrategyEventV2":
                                            Action = "Close Strategy";
                                            if (b_token == d_token) {
                                                balance = (Number(event.parsedJson.u64_padding[0]) + Number(event.parsedJson.u64_padding[1])) /
                                                    Math.pow(10, (0, token_1.assetToDecimal)(b_token));
                                                Amount = "".concat((0, bignumber_js_1.default)(balance).toFixed(), " ").concat(b_token);
                                            }
                                            else {
                                                balance = Number(event.parsedJson.u64_padding[0]) / Math.pow(10, (0, token_1.assetToDecimal)(b_token));
                                                profit = Number(event.parsedJson.u64_padding[1]) / Math.pow(10, (0, token_1.assetToDecimal)(d_token));
                                                Amount = "".concat((0, bignumber_js_1.default)(balance).toFixed(), " ").concat(b_token, "\n").concat((0, bignumber_js_1.default)(profit).toFixed(), " ").concat(d_token);
                                            }
                                            break;
                                        case "WithdrawProfitEvent":
                                            Action = "Harvest Gain";
                                            profit = Number(event.parsedJson.profit) / Math.pow(10, (0, token_1.assetToDecimal)(d_token));
                                            Amount = "".concat((0, bignumber_js_1.default)(profit).toFixed(), " ").concat(d_token);
                                            break;
                                        case "RedeemEvent":
                                            token = (0, token_1.typeArgToAsset)("0x" + event.parsedJson.token.name);
                                            amount = Number(event.parsedJson.amount) / Math.pow(10, (0, token_1.assetToDecimal)(token));
                                            Action = "Harvest Reward";
                                            Amount = "".concat((0, bignumber_js_1.default)(amount).toFixed(), " ").concat(token);
                                            Index = Index;
                                            break;
                                        case "TransferBidReceiptEvent":
                                            amount = Number(event.parsedJson.amount) / Math.pow(10, Number(event.parsedJson.decimal));
                                            Action = "Transfer Receipt";
                                            Amount = "".concat((0, bignumber_js_1.default)(amount).toFixed(), " ").concat(o_token);
                                            break;
                                        case "ExerciseEvent":
                                            token = (0, token_1.typeArgToAsset)("0x" + event.parsedJson.token.name);
                                            amount = Number(event.parsedJson.amount) / Math.pow(10, Number(event.parsedJson.decimal));
                                            Action = "Exercise";
                                            Amount = "".concat((0, bignumber_js_1.default)(amount).toFixed(), " ").concat(token);
                                            if (event.parsedJson.u64_padding[0]) {
                                                size = Number(event.parsedJson.u64_padding[0]) / Math.pow(10, (0, token_1.assetToDecimal)(o_token));
                                                Action = "Exercise ".concat(size, " ").concat(o_token);
                                            }
                                            if (event.sender != event.parsedJson.signer) {
                                                Action = "Auto " + Action;
                                            }
                                            break;
                                        case "RefundEvent":
                                            token = (0, token_1.typeArgToAsset)("0x" + event.parsedJson.token.name);
                                            amount = Number(event.parsedJson.amount) / Math.pow(10, (0, token_1.assetToDecimal)(token));
                                            Action = "Rebate";
                                            Amount = "".concat((0, bignumber_js_1.default)(amount).toFixed(), " ").concat(token);
                                            break;
                                        // case "ClaimProfitSharingEvent":
                                        //     var token = typeArgToAsset("0x" + event.parsedJson!.token.name);
                                        //     var amount = Number(event.parsedJson!.value) / 10 ** assetToDecimal(token)!;
                                        //     Action = "Claim Profit Sharing";
                                        //     Amount = `${BigNumber(amount).toFixed()} ${token}`;
                                        //     Tails = `#${event.parsedJson!.number}`;
                                        //     break;
                                        case "ClaimProfitSharingEventV2":
                                            token = (0, token_1.typeArgToAsset)("0x" + event.parsedJson.token.name);
                                            amount = Number(event.parsedJson.value) / Math.pow(10, (0, token_1.assetToDecimal)(token));
                                            // dice_profit, exp_profit
                                            // TODO: filter amount != 0
                                            switch (event.parsedJson.name) {
                                                case "dice_profit":
                                                    Action = "Harvest Dice Profit";
                                                    break;
                                                case "exp_profit":
                                                    Action = "Harvest Leaderboard Prize";
                                                    break;
                                            }
                                            Amount = "".concat((0, bignumber_js_1.default)(amount).toFixed(), " ").concat(token);
                                            Tails = "#".concat(event.parsedJson.number);
                                            break;
                                        case "NewBidEvent":
                                            o_token = (0, token_1.typeArgToAsset)("0x" + event.parsedJson.o_token.name);
                                            b_token = (0, token_1.typeArgToAsset)("0x" + event.parsedJson.b_token.name);
                                            size = Number(event.parsedJson.size) / Math.pow(10, (0, token_1.assetToDecimal)(o_token));
                                            bidder_balance = Number(event.parsedJson.bidder_balance) / Math.pow(10, (0, token_1.assetToDecimal)(b_token));
                                            Action = action.slice(0, action.length - 5) + " ".concat(size, " ").concat(o_token);
                                            Amount = "".concat((0, bignumber_js_1.default)(bidder_balance).toFixed(), " ").concat(b_token);
                                            if (event.sender != event.parsedJson.signer) {
                                                Action = "Auto " + Action;
                                            }
                                            break;
                                        default:
                                            return [2 /*return*/, txHistory];
                                    }
                                    txHistory.push({
                                        Index: Index,
                                        Period: Period,
                                        Action: Action,
                                        Amount: Amount,
                                        Vault: Vault,
                                        RiskLevel: RiskLevel,
                                        Tails: Tails,
                                        Exp: Exp,
                                        Date: new Date(Number(event.timestampMs)),
                                        txDigest: event.id.txDigest,
                                    });
                                    return [2 /*return*/, txHistory];
                            }
                        });
                    }); }, Promise.resolve(new Array()))];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, results.filter(function (result) { return result.Action; })];
            }
        });
    });
}
function getFromSentio(event, userAddress, startTimestamp) {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, headers, requestData, jsonData, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";
                    headers = {
                        "api-key": "tz3JJ6stG7Fux6ueRSRA5mdpC9U0lozI3",
                        "Content-Type": "application/json",
                    };
                    requestData = {
                        sqlQuery: {
                            sql: "\n                SELECT *\n                FROM ".concat(event, "\n                WHERE distinct_id = \"").concat(userAddress, "\" && timestamp >= ").concat(startTimestamp, "\n                ORDER BY timestamp DESC;\n            "),
                            size: 1000,
                        },
                    };
                    jsonData = JSON.stringify(requestData);
                    return [4 /*yield*/, fetch(apiUrl, {
                            method: "POST",
                            headers: headers,
                            body: jsonData,
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data.result.rows];
            }
        });
    });
}
function getNewBidFromSentio(vaults, userAddress, startTimestamp) {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, headers, requestData, jsonData, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";
                    headers = {
                        "api-key": "tz3JJ6stG7Fux6ueRSRA5mdpC9U0lozI3",
                        "Content-Type": "application/json",
                    };
                    requestData = {
                        sqlQuery: {
                            sql: "\n                SELECT *\n                FROM NewBid N\n                LEFT JOIN (\n                    SELECT number, distinct_id, exp_earn, transaction_hash, log_index\n                    FROM ExpUp\n                ) S ON N.transaction_hash = S.transaction_hash && N.log_index + 1 = S.log_index\n                WHERE N.distinct_id = \"".concat(userAddress, "\" && N.timestamp >= ").concat(startTimestamp, "\n                ORDER BY N.timestamp DESC;\n            "),
                            size: 1000,
                        },
                    };
                    jsonData = JSON.stringify(requestData);
                    return [4 /*yield*/, fetch(apiUrl, {
                            method: "POST",
                            headers: headers,
                            body: jsonData,
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data.result.rows.map(function (x) {
                            var _a = __read(parseVaultInfo(vaults, x.index, "NewBidEvent"), 6), Period = _a[0], Vault = _a[1], RiskLevel = _a[2], d_token = _a[3], b_token = _a[4], o_token = _a[5];
                            if (x.number == "0" && x.exp_earn == "0") {
                                x.number = undefined;
                                x.exp_earn = undefined;
                            }
                            var txHistory = {
                                Index: x.index,
                                Period: Period,
                                Vault: Vault,
                                RiskLevel: RiskLevel,
                                Action: "Auto Bid" + " ".concat(x.size, " ").concat(x.o_token),
                                Amount: x.bidder_balance + " ".concat(x.b_token),
                                Tails: x.number,
                                Exp: x.exp_earn,
                                Date: new Date(Number(x.ts_ms)),
                                txDigest: x.transaction_hash,
                            };
                            return txHistory;
                        })];
            }
        });
    });
}
function getExerciseFromSentio(vaults, userAddress, startTimestamp) {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, headers, requestData, jsonData, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";
                    headers = {
                        "api-key": "tz3JJ6stG7Fux6ueRSRA5mdpC9U0lozI3",
                        "Content-Type": "application/json",
                    };
                    requestData = {
                        sqlQuery: {
                            sql: "\n                SELECT *\n                FROM Exercise N\n                WHERE N.distinct_id = \"".concat(userAddress, "\" && N.timestamp >= ").concat(startTimestamp, "\n                ORDER BY N.timestamp DESC;\n            "),
                            size: 1000,
                        },
                    };
                    jsonData = JSON.stringify(requestData);
                    return [4 /*yield*/, fetch(apiUrl, {
                            method: "POST",
                            headers: headers,
                            body: jsonData,
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data.result.rows.map(function (x) {
                            var _a = __read(parseVaultInfo(vaults, x.index, "ExerciseEvent"), 6), Period = _a[0], Vault = _a[1], RiskLevel = _a[2], d_token = _a[3], b_token = _a[4], o_token = _a[5];
                            // console.log(x);
                            var Action = "Auto Exercise";
                            if (x.raw_share) {
                                var size = Number(x.raw_share) / Math.pow(10, (0, token_1.assetToDecimal)(o_token));
                                Action = "Auto Exercise ".concat(size, " ").concat(o_token);
                            }
                            var txHistory = {
                                Index: x.index,
                                Period: Period,
                                Vault: Vault,
                                RiskLevel: RiskLevel,
                                Action: Action,
                                Amount: "".concat(x.amount, " ").concat(x.coin_symbol),
                                Tails: x.number,
                                Exp: x.exp_earn,
                                Date: new Date(x.timestamp),
                                txDigest: x.transaction_hash,
                            };
                            return txHistory;
                        })];
            }
        });
    });
}
function parseVaultInfo(vaults, Index, action, eventLog) {
    var v = vaults[Index];
    var Period;
    var Vault;
    var RiskLevel;
    var d_token;
    var b_token;
    var o_token;
    var period;
    if (v) {
        switch (v.info.period) {
            case "0":
                period = "Daily";
                break;
            case "1":
                period = "Weekly";
                break;
            case "2":
                period = "Monthly";
                break;
            case "3":
                period = "Hourly";
                break;
            case "4":
                period = "10 Minutes";
                break;
            default:
                period = "";
                break;
        }
        Period = period;
        var optionType = void 0;
        switch (v.info.optionType) {
            case "0":
                switch (action) {
                    case "DepositEvent":
                    case "WithdrawEvent":
                    case "UnsubscribeEvent":
                    case "ClaimEvent":
                    case "CompoundEvent":
                    case "HarvestEvent":
                    case "RedeemEvent":
                    case "ReduceFundEvent":
                    case "RaiseFundEvent":
                        optionType = "Covered Call";
                        break;
                    default:
                        optionType = "Call";
                        break;
                }
                break;
            case "1":
                switch (action) {
                    case "DepositEvent":
                    case "WithdrawEvent":
                    case "UnsubscribeEvent":
                    case "ClaimEvent":
                    case "CompoundEvent":
                    case "HarvestEvent":
                    case "RedeemEvent":
                    case "ReduceFundEvent":
                    case "RaiseFundEvent":
                        optionType = "Put Selling";
                        break;
                    default:
                        optionType = "Put";
                        break;
                }
                break;
            case "2":
                optionType = "Call Spread";
                break;
            case "3":
                optionType = "Put Spread";
                break;
            case "4":
                optionType = "Capped Call";
                break;
            case "5":
                optionType = "Capped Put";
                break;
            case "6":
                switch (action) {
                    case "DepositEvent":
                    case "WithdrawEvent":
                    case "UnsubscribeEvent":
                    case "ClaimEvent":
                    case "CompoundEvent":
                    case "HarvestEvent":
                    case "RedeemEvent":
                    case "ReduceFundEvent":
                    case "RaiseFundEvent":
                        // for depositor
                        optionType = "Call Selling";
                        break;
                    default:
                        // for bidder
                        optionType = "Capped Call";
                        break;
                }
                break;
            default:
                optionType = "";
                break;
        }
        switch (v.config.riskLevel) {
            case "1":
                RiskLevel = "Conservative";
                break;
            case "2":
                RiskLevel = "Moderate";
                break;
            case "3":
                RiskLevel = "Aggressive";
                break;
            default:
                RiskLevel = "";
                break;
        }
        Vault = "".concat(v.info.settlementBaseName, " ").concat(period, " ").concat(optionType);
        d_token = (0, token_1.typeArgToAsset)("0x" + v.info.depositToken);
        b_token = (0, token_1.typeArgToAsset)("0x" + v.info.bidToken);
        o_token = (0, token_1.typeArgToAsset)("0x" + v.info.settlementBase);
    }
    return [Period, Vault, RiskLevel, d_token, b_token, o_token];
}
function getDepositorCashFlows(userHistory) {
    var e_1, _a, e_2, _b, e_3, _c;
    var _d, _e, _f, _g, _h;
    var depositorCashFlows = new Map();
    try {
        for (var userHistory_1 = __values(userHistory), userHistory_1_1 = userHistory_1.next(); !userHistory_1_1.done; userHistory_1_1 = userHistory_1.next()) {
            var history_1 = userHistory_1_1.value;
            var index = history_1.Index;
            if (history_1.Action.startsWith("Harvest Reward")) {
                var historyAmounts = (_d = history_1.Amount) === null || _d === void 0 ? void 0 : _d.split("\n");
                try {
                    for (var historyAmounts_1 = (e_2 = void 0, __values(historyAmounts)), historyAmounts_1_1 = historyAmounts_1.next(); !historyAmounts_1_1.done; historyAmounts_1_1 = historyAmounts_1.next()) {
                        var historyAmount = historyAmounts_1_1.value;
                        var _j = __read(historyAmount.split(" "), 2), amount = _j[0], token = _j[1];
                        if (depositorCashFlows.has(index)) {
                            var depositorCashFlow = depositorCashFlows.get(index);
                            var totalHarvest = depositorCashFlow.totalHarvest;
                            if (totalHarvest.has(token)) {
                                var sum = totalHarvest.get(token);
                                totalHarvest.set(token, sum + Number(amount));
                            }
                            else {
                                totalHarvest.set(token, Number(amount));
                            }
                            depositorCashFlow.totalHarvest = totalHarvest;
                            depositorCashFlows.set(index, depositorCashFlow);
                        }
                        else {
                            var totalHarvest = new Map();
                            totalHarvest.set(token, Number(amount));
                            var depositorCashFlow = {
                                D_TOKEN: undefined,
                                totalDeposit: 0,
                                totalWithdraw: 0,
                                totalClaim: 0,
                                totalCompound: 0,
                                netDeposit: undefined,
                                totalHarvest: totalHarvest,
                            };
                            depositorCashFlows.set(index, depositorCashFlow);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (historyAmounts_1_1 && !historyAmounts_1_1.done && (_b = historyAmounts_1.return)) _b.call(historyAmounts_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            else if (history_1.Action.startsWith("Deposit")) {
                var _k = __read((_e = history_1.Amount) === null || _e === void 0 ? void 0 : _e.split(" "), 2), amount = _k[0], token = _k[1];
                if (depositorCashFlows.has(index)) {
                    var depositorCashFlow = depositorCashFlows.get(index);
                    depositorCashFlow.D_TOKEN = token;
                    depositorCashFlow.totalDeposit += Number(amount);
                    depositorCashFlows.set(index, depositorCashFlow);
                }
                else {
                    var depositorCashFlow = {
                        D_TOKEN: token,
                        totalDeposit: Number(amount),
                        totalWithdraw: 0,
                        totalClaim: 0,
                        totalCompound: 0,
                        netDeposit: undefined,
                        totalHarvest: new Map(),
                    };
                    depositorCashFlows.set(index, depositorCashFlow);
                }
            }
            else if (history_1.Action.startsWith("Withdraw")) {
                var _l = __read((_f = history_1.Amount) === null || _f === void 0 ? void 0 : _f.split(" "), 2), amount = _l[0], token = _l[1];
                if (depositorCashFlows.has(index)) {
                    var depositorCashFlow = depositorCashFlows.get(index);
                    depositorCashFlow.D_TOKEN = token;
                    depositorCashFlow.totalWithdraw += Number(amount);
                    depositorCashFlows.set(index, depositorCashFlow);
                }
                else {
                    var depositorCashFlow = {
                        D_TOKEN: token,
                        totalDeposit: 0,
                        totalWithdraw: Number(amount),
                        totalClaim: 0,
                        totalCompound: 0,
                        netDeposit: undefined,
                        totalHarvest: new Map(),
                    };
                    depositorCashFlows.set(index, depositorCashFlow);
                }
            }
            else if (history_1.Action == "Claim") {
                var _m = __read((_g = history_1.Amount) === null || _g === void 0 ? void 0 : _g.split(" "), 2), amount = _m[0], token = _m[1];
                if (depositorCashFlows.has(index)) {
                    var depositorCashFlow = depositorCashFlows.get(index);
                    depositorCashFlow.D_TOKEN = token;
                    depositorCashFlow.totalClaim += Number(amount);
                    depositorCashFlows.set(index, depositorCashFlow);
                }
                else {
                    var depositorCashFlow = {
                        D_TOKEN: token,
                        totalDeposit: 0,
                        totalWithdraw: 0,
                        totalClaim: Number(amount),
                        totalCompound: 0,
                        netDeposit: undefined,
                        totalHarvest: new Map(),
                    };
                    depositorCashFlows.set(index, depositorCashFlow);
                }
            }
            else if (history_1.Action == "Compound") {
                var _o = __read((_h = history_1.Amount) === null || _h === void 0 ? void 0 : _h.split(" "), 2), amount = _o[0], token = _o[1];
                if (depositorCashFlows.has(index)) {
                    var depositorCashFlow = depositorCashFlows.get(index);
                    depositorCashFlow.D_TOKEN = token;
                    depositorCashFlow.totalCompound += Number(amount);
                    depositorCashFlows.set(index, depositorCashFlow);
                }
                else {
                    var depositorCashFlow = {
                        D_TOKEN: token,
                        totalDeposit: 0,
                        totalWithdraw: 0,
                        totalClaim: 0,
                        totalCompound: Number(amount),
                        netDeposit: undefined,
                        totalHarvest: new Map(),
                    };
                    depositorCashFlows.set(index, depositorCashFlow);
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (userHistory_1_1 && !userHistory_1_1.done && (_a = userHistory_1.return)) _a.call(userHistory_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        // console.log(depositorCashFlows);
        for (var _p = __values(depositorCashFlows.entries()), _q = _p.next(); !_q.done; _q = _p.next()) {
            var _r = __read(_q.value, 2), index = _r[0], share = _r[1];
            share.netDeposit = share.totalDeposit + share.totalCompound - share.totalWithdraw - share.totalClaim;
            depositorCashFlows.set(index, share);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_q && !_q.done && (_c = _p.return)) _c.call(_p);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return depositorCashFlows;
}
