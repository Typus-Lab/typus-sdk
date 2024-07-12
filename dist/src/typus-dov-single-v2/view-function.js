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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVaults = getVaults;
exports.getAuctions = getAuctions;
exports.getAuctionBids = getAuctionBids;
exports.getDepositShares = getDepositShares;
exports.getMyBids = getMyBids;
exports.getRefundShares = getRefundShares;
var transactions_1 = require("@mysten/sui.js/transactions");
var bcs_1 = require("@mysten/bcs");
var tools_1 = require("src/utils/tools");
var SENDER = "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
function getVaults(provider_1, packageId_1, registry_1, indexes_1) {
    return __awaiter(this, arguments, void 0, function (provider, packageId, registry, indexes, sender) {
        var transactionBlock, target, transactionBlockArguments, results, bytes, reader, result;
        if (sender === void 0) { sender = SENDER; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    transactionBlock = new transactions_1.TransactionBlock();
                    target = "".concat(packageId, "::tds_view_function::get_vault_data_bcs");
                    transactionBlockArguments = [transactionBlock.pure(registry), transactionBlock.pure(indexes)];
                    transactionBlock.moveCall({
                        target: target,
                        typeArguments: [],
                        arguments: transactionBlockArguments,
                    });
                    return [4 /*yield*/, provider.devInspectTransactionBlock({ transactionBlock: transactionBlock, sender: sender })];
                case 1:
                    results = (_a.sent()).results;
                    bytes = results[results.length - 1].returnValues[0][0];
                    reader = new bcs_1.BcsReader(new Uint8Array(bytes));
                    result = {};
                    reader.readVec(function (reader) {
                        reader.read16();
                        var id = (0, tools_1.AddressFromBytes)(reader.readBytes(32));
                        var info = {
                            index: reader.read64(),
                            optionType: reader.read64(),
                            period: reader.read8() + "",
                            activationTsMs: reader.read64(),
                            expirationTsMs: reader.read64(),
                            depositToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                            bidToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                            settlementBase: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                            settlementQuote: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                            settlementBaseName: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                            settlementQuoteName: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                            dTokenDecimal: reader.read64(),
                            bTokenDecimal: reader.read64(),
                            oTokenDecimal: reader.read64(),
                            creator: (0, tools_1.AddressFromBytes)(reader.readBytes(32)),
                            createTsMs: reader.read64(),
                            round: reader.read64(),
                            status: reader.read64(),
                            oracleInfo: {
                                price: reader.read64(),
                                decimal: reader.read64(),
                            },
                            deliveryInfos: {
                                round: reader.read64(),
                                maxSize: reader.read64(),
                                totalDeliverySize: reader.read64(),
                                totalBidderBidValue: reader.read64(),
                                totalBidderFee: reader.read64(),
                                totalIncentiveBidValue: reader.read64(),
                                totalIncentiveFee: reader.read64(),
                                deliveryInfo: reader.readVec(function (reader) {
                                    return {
                                        auctionType: reader.read64(),
                                        deliveryPrice: reader.read64(),
                                        deliverySize: reader.read64(),
                                        bidderBidValue: reader.read64(),
                                        bidderFee: reader.read64(),
                                        incentiveBidValue: reader.read64(),
                                        incentiveFee: reader.read64(),
                                        tsMs: reader.read64(),
                                        u64Padding: reader.readVec(function (reader) {
                                            return reader.read64();
                                        }),
                                    };
                                }),
                                u64Padding: reader.readVec(function (reader) {
                                    return reader.read64();
                                }),
                            },
                            settlementInfo: reader
                                .readVec(function (reader) {
                                return {
                                    round: reader.read64(),
                                    oraclePrice: reader.read64(),
                                    oraclePriceDecimal: reader.read64(),
                                    settleBalance: reader.read64(),
                                    settledBalance: reader.read64(),
                                    sharePrice: reader.read64(),
                                    sharePriceDecimal: reader.read64(),
                                    tsMs: reader.read64(),
                                    u64Padding: reader.readVec(function (reader) {
                                        return reader.read64();
                                    }),
                                };
                            })
                                .at(0),
                            u64Padding: reader.readVec(function (reader) {
                                return reader.read64();
                            }),
                            bcsPadding: reader.readVec(function (reader) {
                                return reader.read8();
                            }),
                        };
                        var config = {
                            oracleId: (0, tools_1.AddressFromBytes)(reader.readBytes(32)),
                            depositLotSize: reader.read64(),
                            bidLotSize: reader.read64(),
                            minDepositSize: reader.read64(),
                            minBidSize: reader.read64(),
                            maxDepositEntry: reader.read64(),
                            maxBidEntry: reader.read64(),
                            depositFeeBp: reader.read64(),
                            depositFeeShareBp: reader.read64(),
                            depositSharedFeePool: reader
                                .readVec(function (reader) {
                                return String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8())));
                            })
                                .at(0),
                            bidFeeBp: reader.read64(),
                            depositIncentiveBp: reader.read64(),
                            bidIncentiveBp: reader.read64(),
                            auctionDelayTsMs: reader.read64(),
                            auctionDurationTsMs: reader.read64(),
                            recoupDelayTsMs: reader.read64(),
                            capacity: reader.read64(),
                            leverage: reader.read64(),
                            riskLevel: reader.read64(),
                            hasNext: reader.read8() > 0,
                            activeVaultConfig: {
                                payoffConfigs: reader.readVec(function (reader) {
                                    return {
                                        strikeBp: reader.read64(),
                                        weight: reader.read64(),
                                        isBuyer: reader.read8() > 0,
                                        strike: reader
                                            .readVec(function (reader) {
                                            return reader.read64();
                                        })
                                            .at(0),
                                        u64Padding: reader.readVec(function (reader) {
                                            return reader.read64();
                                        }),
                                    };
                                }),
                                strikeIncrement: reader.read64(),
                                decaySpeed: reader.read64(),
                                initialPrice: reader.read64(),
                                finalPrice: reader.read64(),
                                u64Padding: reader.readVec(function (reader) {
                                    return reader.read64();
                                }),
                            },
                            warmupVaultConfig: {
                                payoffConfigs: reader.readVec(function (reader) {
                                    return {
                                        strikeBp: reader.read64(),
                                        weight: reader.read64(),
                                        isBuyer: reader.read8() > 0,
                                        strike: reader
                                            .readVec(function (reader) {
                                            return reader.read64();
                                        })
                                            .at(0),
                                        u64Padding: reader.readVec(function (reader) {
                                            return reader.read64();
                                        }),
                                    };
                                }),
                                strikeIncrement: reader.read64(),
                                decaySpeed: reader.read64(),
                                initialPrice: reader.read64(),
                                finalPrice: reader.read64(),
                                u64Padding: reader.readVec(function (reader) {
                                    return reader.read64();
                                }),
                            },
                            u64Padding: reader.readVec(function (reader) {
                                return reader.read64();
                            }),
                            bcsPadding: reader.readVec(function (reader) {
                                return reader.read8();
                            }),
                        };
                        // skip authority bytes
                        reader.readBytes(32); // id
                        reader.read64(); // size
                        reader.readVec(function (reader) {
                            return reader.readBytes(32);
                        }); // head
                        reader.readVec(function (reader) {
                            return reader.readBytes(32);
                        }); // tail
                        var depositVault = {
                            id: (0, tools_1.AddressFromBytes)(reader.readBytes(32)),
                            depositToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                            bidToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                            incentiveToken: reader
                                .readVec(function (reader) {
                                return String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8())));
                            })
                                .at(0),
                            index: reader.read64(),
                            feeBp: reader.read64(),
                            feeShareBp: reader.read64(),
                            sharedFeePool: reader
                                .readVec(function (reader) {
                                return String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8())));
                            })
                                .at(0),
                            activeShareSupply: reader.read64(),
                            deactivatingShareSupply: reader.read64(), // unsubscribe
                            inactiveShareSupply: reader.read64(), // claim
                            warmupShareSupply: reader.read64(), // deposit / withdraw
                            premiumShareSupply: reader.read64(), // harvest
                            incentiveShareSupply: reader.read64(), // redeem
                            hasNext: reader.read8() > 0,
                            metadata: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                            u64Padding: reader.readVec(function (reader) {
                                return reader.read64();
                            }),
                            bcsPadding: reader.readVec(function (reader) {
                                return reader.read8();
                            }),
                        };
                        result[info.index] = {
                            id: id,
                            info: info,
                            config: config,
                            depositVault: depositVault,
                        };
                    });
                    return [2 /*return*/, result];
            }
        });
    });
}
function getAuctions(provider_1, packageId_1, registry_1, indexes_1) {
    return __awaiter(this, arguments, void 0, function (provider, packageId, registry, indexes, sender) {
        var transactionBlock, target, transactionBlockArguments, results, bytes, reader, result;
        if (sender === void 0) { sender = SENDER; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    transactionBlock = new transactions_1.TransactionBlock();
                    target = "".concat(packageId, "::tds_view_function::get_auction_bcs");
                    transactionBlockArguments = [transactionBlock.pure(registry), transactionBlock.pure(indexes)];
                    transactionBlock.moveCall({
                        target: target,
                        typeArguments: [],
                        arguments: transactionBlockArguments,
                    });
                    return [4 /*yield*/, provider.devInspectTransactionBlock({ transactionBlock: transactionBlock, sender: sender })];
                case 1:
                    results = (_a.sent()).results;
                    bytes = results[results.length - 1].returnValues[0][0];
                    reader = new bcs_1.BcsReader(new Uint8Array(bytes));
                    result = {};
                    reader.readVec(function (reader) {
                        reader.read16();
                        var id = (0, tools_1.AddressFromBytes)(reader.readBytes(32));
                        var index = reader.read64();
                        var token = String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8())));
                        var startTsMs = reader.read64();
                        var endTsMs = reader.read64();
                        var size = reader.read64();
                        var decaySpeed = reader.read64();
                        var initialPrice = reader.read64();
                        var finalPrice = reader.read64();
                        var feeBp = reader.read64();
                        var incentiveBp = reader.read64();
                        var tokenDecimal = reader.read64();
                        var sizeDecimal = reader.read64();
                        var totalBidSize = reader.read64();
                        var ableToRemoveBid = reader.read8() > 0;
                        // skip bids bytes
                        reader.readBytes(32); // id
                        reader.read64(); // slice_count
                        reader.read64(); // slice_size
                        reader.read64(); // length
                        var bidIndex = reader.read64();
                        result[index] = {
                            id: id,
                            index: index,
                            token: token,
                            startTsMs: startTsMs,
                            endTsMs: endTsMs,
                            size: size,
                            decaySpeed: decaySpeed,
                            initialPrice: initialPrice,
                            finalPrice: finalPrice,
                            feeBp: feeBp,
                            incentiveBp: incentiveBp,
                            tokenDecimal: tokenDecimal,
                            sizeDecimal: sizeDecimal,
                            totalBidSize: totalBidSize,
                            ableToRemoveBid: ableToRemoveBid,
                            bidIndex: bidIndex,
                        };
                    });
                    return [2 /*return*/, result];
            }
        });
    });
}
function getAuctionBids(provider_1, packageId_1, registry_1, index_1) {
    return __awaiter(this, arguments, void 0, function (provider, packageId, registry, index, sender) {
        var transactionBlock, target, transactionBlockArguments, results, bytes, reader, result;
        if (sender === void 0) { sender = SENDER; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    transactionBlock = new transactions_1.TransactionBlock();
                    target = "".concat(packageId, "::tds_view_function::get_auction_bids_bcs");
                    transactionBlockArguments = [transactionBlock.pure(registry), transactionBlock.pure(index)];
                    transactionBlock.moveCall({
                        target: target,
                        typeArguments: [],
                        arguments: transactionBlockArguments,
                    });
                    return [4 /*yield*/, provider.devInspectTransactionBlock({ transactionBlock: transactionBlock, sender: sender })];
                case 1:
                    results = (_a.sent()).results;
                    bytes = results[results.length - 1].returnValues[0][0];
                    reader = new bcs_1.BcsReader(new Uint8Array(bytes));
                    result = reader.readVec(function (reader, i) {
                        reader.read8();
                        var bid = {
                            tsMs: reader.read64(),
                            bidder: (0, tools_1.AddressFromBytes)(reader.readBytes(32)),
                            price: reader.read64(),
                            size: reader.read64(),
                            bidderBalance: reader.read64(),
                            incentiveBalance: reader.read64(),
                            feeDiscount: reader.read64(),
                            index: reader.read64(),
                        };
                        return bid;
                    });
                    return [2 /*return*/, result];
            }
        });
    });
}
function getDepositShares(provider_1, typusFrameworkPackageId_1, packageId_1, registry_1, receipts_1, user_1) {
    return __awaiter(this, arguments, void 0, function (provider, typusFrameworkPackageId, packageId, registry, receipts, user, sender) {
        var transactionBlock, target, transactionBlockArguments, results, bytes, reader, depositShare, depositSnapshot;
        if (sender === void 0) { sender = SENDER; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    transactionBlock = new transactions_1.TransactionBlock();
                    target = "".concat(packageId, "::tds_view_function::get_deposit_shares_bcs");
                    transactionBlockArguments = [
                        transactionBlock.pure(registry),
                        transactionBlock.makeMoveVec({
                            type: "".concat(typusFrameworkPackageId, "::vault::TypusDepositReceipt"),
                            objects: receipts.map(function (id) { return transactionBlock.object(id); }),
                        }),
                        transactionBlock.pure(user),
                    ];
                    transactionBlock.moveCall({
                        target: target,
                        typeArguments: [],
                        arguments: transactionBlockArguments,
                    });
                    return [4 /*yield*/, provider.devInspectTransactionBlock({ transactionBlock: transactionBlock, sender: sender })];
                case 1:
                    results = (_a.sent()).results;
                    bytes = results[results.length - 1].returnValues[0][0];
                    reader = new bcs_1.BcsReader(new Uint8Array(bytes));
                    depositShare = Array.from(new Map()).reduce(function (map, _a) {
                        var _b = __read(_a, 2), key = _b[0], value = _b[1];
                        map[key] = value;
                        return map;
                    }, {});
                    depositSnapshot = {};
                    // console.log(bytes);
                    reader.readVec(function (reader, i) {
                        if (i == 0) {
                            reader.readULEB();
                            depositSnapshot = {
                                snapshots: reader.readVec(function (reader) {
                                    return reader.read64();
                                }),
                                totalDeposit: reader.read64(),
                                snapshotTsMs: reader.read64(),
                            };
                        }
                        else {
                            reader.readULEB();
                            var index = reader.read64();
                            var activeSubVaultUserShare = reader.read64();
                            var deactivatingSubVaultUserShare = reader.read64();
                            var inactiveSubVaultUserShare = reader.read64();
                            var warmupSubVaultUserShare = reader.read64();
                            var premiumSubVaultUserShare = reader.read64();
                            var incentiveShare = reader.read64();
                            depositShare[index] = {
                                index: index,
                                activeSubVaultUserShare: activeSubVaultUserShare,
                                deactivatingSubVaultUserShare: deactivatingSubVaultUserShare,
                                inactiveSubVaultUserShare: inactiveSubVaultUserShare,
                                warmupSubVaultUserShare: warmupSubVaultUserShare,
                                premiumSubVaultUserShare: premiumSubVaultUserShare,
                                incentiveShare: incentiveShare,
                            };
                        }
                    });
                    // @ts-ignore
                    return [2 /*return*/, { depositShare: depositShare, depositSnapshot: depositSnapshot }];
            }
        });
    });
}
function getMyBids(provider_1, typusFrameworkPackageId_1, packageId_1, registry_1, receipts_1) {
    return __awaiter(this, arguments, void 0, function (provider, typusFrameworkPackageId, packageId, registry, receipts, sender) {
        var transactionBlock, target, transactionBlockArguments, results, bytes, reader, result;
        if (sender === void 0) { sender = SENDER; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    transactionBlock = new transactions_1.TransactionBlock();
                    target = "".concat(packageId, "::tds_view_function::get_my_bids_bcs");
                    transactionBlockArguments = [
                        transactionBlock.pure(registry),
                        transactionBlock.makeMoveVec({
                            type: "".concat(typusFrameworkPackageId, "::vault::TypusBidReceipt"),
                            objects: receipts.map(function (id) { return transactionBlock.object(id); }),
                        }),
                    ];
                    transactionBlock.moveCall({
                        target: target,
                        typeArguments: [],
                        arguments: transactionBlockArguments,
                    });
                    return [4 /*yield*/, provider.devInspectTransactionBlock({ transactionBlock: transactionBlock, sender: sender })];
                case 1:
                    results = (_a.sent()).results;
                    bytes = results[results.length - 1].returnValues[0][0];
                    reader = new bcs_1.BcsReader(new Uint8Array(bytes));
                    result = Array.from(new Map()).reduce(function (map, _a) {
                        var _b = __read(_a, 2), key = _b[0], value = _b[1];
                        map[key] = value;
                        return map;
                    }, {});
                    reader.readVec(function (reader, i) {
                        reader.read16();
                        var bidVault = {
                            id: (0, tools_1.AddressFromBytes)(reader.readBytes(32)),
                            depositToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                            bidToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                            incentiveToken: reader
                                .readVec(function (reader) {
                                return String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8())));
                            })
                                .at(0),
                            index: reader.read64(),
                            shareSupply: reader.read64(),
                            metadata: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                            u64Padding: reader.readVec(function (reader) {
                                return reader.read64();
                            }),
                            bcsPadding: reader.readVec(function (reader) {
                                return reader.read8();
                            }),
                        };
                        result[bidVault.index + "-" + bidVault.id] = {
                            bidVault: bidVault,
                            share: reader.read64(),
                        };
                    });
                    // @ts-ignore
                    return [2 /*return*/, result];
            }
        });
    });
}
function getRefundShares(provider_1, packageId_1, registry_1, typeArguments_1) {
    return __awaiter(this, arguments, void 0, function (provider, packageId, registry, typeArguments, sender) {
        var transactionBlock, target, transactionBlockArguments, results, refundShares;
        if (sender === void 0) { sender = SENDER; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    transactionBlock = new transactions_1.TransactionBlock();
                    target = "".concat(packageId, "::tds_view_function::get_refund_shares_bcs");
                    transactionBlockArguments = [transactionBlock.pure(registry)];
                    typeArguments.forEach(function (typeArgument) {
                        transactionBlock.moveCall({
                            target: target,
                            typeArguments: [typeArgument],
                            arguments: transactionBlockArguments,
                        });
                    });
                    return [4 /*yield*/, provider.devInspectTransactionBlock({
                            transactionBlock: transactionBlock,
                            sender: sender,
                        })];
                case 1:
                    results = (_a.sent()).results;
                    refundShares = Array.from(new Map()).reduce(function (map, _a) {
                        var _b = __read(_a, 2), key = _b[0], value = _b[1];
                        map[key] = value;
                        return map;
                    }, {});
                    // @ts-ignore
                    results.forEach(function (result) {
                        // @ts-ignore
                        var bytes = result.returnValues[0][0];
                        var reader = new bcs_1.BcsReader(new Uint8Array(bytes));
                        reader.read8();
                        refundShares[String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8())))] = reader.read64();
                    });
                    // @ts-ignore
                    return [2 /*return*/, refundShares];
            }
        });
    });
}
