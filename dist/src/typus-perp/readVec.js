"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readVecPosition = readVecPosition;
exports.readVecOrder = readVecOrder;
exports.readVecShares = readVecShares;
var bcs_1 = require("@mysten/bcs");
var tools_1 = require("src/utils/tools");
// import { Position, TradingOrder } from "./position/structs";
function readVecPosition(bytes) {
    var reader = new bcs_1.BcsReader(bytes);
    return reader.readVec(function (reader) {
        reader.read16();
        var position = {
            id: (0, tools_1.AddressFromBytes)(reader.readBytes(32)),
            createTsMs: reader.read64(),
            positionId: reader.read64(),
            linkedOrderIds: reader.readVec(function (reader) { return reader.read64(); }),
            linkedOrderPrices: reader.readVec(function (reader) { return reader.read64(); }),
            user: (0, tools_1.AddressFromBytes)(reader.readBytes(32)),
            isLong: reader.read8(),
            size: reader.read64(),
            sizeDecimal: reader.read64(),
            collateralToken: { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))) },
            collateralTokenDecimal: reader.read64(),
            symbol: {
                baseToken: { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))) },
                quoteToken: { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))) },
            },
            collateralAmount: reader.read64(),
            reserveAmount: reader.read64(),
            averagePrice: reader.read64(),
            entryBorrowIndex: reader.read64(),
            entryFundingRateIndexSign: reader.read8(),
            entryFundingRateIndex: reader.read64(),
            unrealizedLoss: reader.read64(),
            unrealizedFundingSign: reader.read8(),
            unrealizedFundingFee: reader.read64(),
            unrealizedBorrowFee: reader.read64(),
            unrealizedRebate: reader.read64(),
            optionCollateralInfo: reader
                .readVec(function (reader) {
                return {
                    index: reader.read64(),
                    bid_token: { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))) },
                };
            })
                .at(0),
            u64Padding: reader.readVec(function (reader) { return reader.read64(); }),
        };
        return position;
    });
}
function readVecOrder(bytes) {
    var reader = new bcs_1.BcsReader(bytes);
    return reader.readVec(function (reader) {
        reader.read16();
        var order = {
            id: (0, tools_1.AddressFromBytes)(reader.readBytes(32)),
            createTsMs: reader.read64(),
            orderId: reader.read64(),
            linkedPositionId: reader
                .readVec(function (reader) {
                return reader.read64();
            })
                .at(0),
            user: (0, tools_1.AddressFromBytes)(reader.readBytes(32)),
            collateralToken: { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))) },
            collateralTokenDecimal: reader.read64(),
            symbol: {
                baseToken: { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))) },
                quoteToken: { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))) },
            },
            leveragePct: reader.read64(),
            reduceOnly: reader.read8(),
            isLong: reader.read8(),
            isStopOrder: reader.read8(),
            size: reader.read64(),
            sizeDecimal: reader.read64(),
            triggerPrice: reader.read64(),
            oraclePriceWhenPlacing: reader.read64(),
            u64Padding: reader.readVec(function (reader) { return reader.read64(); }),
        };
        return order;
    });
}
function readVecShares(bytes) {
    var reader = new bcs_1.BcsReader(bytes);
    return reader.readVec(function (reader) {
        reader.read16();
        var share = {
            user: (0, tools_1.AddressFromBytes)(reader.readBytes(32)),
            userShareId: reader.read64(),
            stakeTsMs: reader.read64(),
            totalShares: reader.read64(),
            activeShares: reader.read64(),
            deactivatingShares: reader.readVec(function (reader) {
                var deactivatingShares = {
                    shares: reader.read64(),
                    unsubscribedTsMs: reader.read64(),
                    unlockedTsMs: reader.read64(),
                    unsubscribedIncentivePriceIndex: reader.readVec(function (reader) { return [
                        { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))) },
                        reader.read64(),
                    ]; }),
                    u64Padding: reader.readVec(function (reader) { return reader.read64(); }),
                };
                return deactivatingShares;
            }),
            lastIncentivePriceIndex: reader.readVec(function (reader) { return [
                { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))) },
                reader.read64(),
            ]; }),
            u64Padding: reader.readVec(function (reader) { return reader.read64(); }),
        };
        return share;
    });
}
