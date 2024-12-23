import { BcsReader } from "@mysten/bcs";
import { AddressFromBytes } from "src/utils";
// import { Position, TradingOrder } from "./position/structs";

export function readVecPosition(bytes: Uint8Array) {
    let reader = new BcsReader(bytes);
    return reader.readVec((reader) => {
        reader.read16();
        let position = {
            id: AddressFromBytes(reader.readBytes(32)),
            createTsMs: reader.read64(),
            positionId: reader.read64(),
            linkedOrderIds: reader.readVec((reader) => reader.read64()),
            linkedOrderPrices: reader.readVec((reader) => reader.read64()),
            user: AddressFromBytes(reader.readBytes(32)),
            isLong: reader.read8(),
            size: reader.read64(),
            sizeDecimal: reader.read64(),
            collateralToken: { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))) },
            collateralTokenDecimal: reader.read64(),
            symbol: {
                baseToken: { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))) },
                quoteToken: { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))) },
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
                .readVec((reader) => {
                    return {
                        index: reader.read64(),
                        bid_token: { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))) },
                    };
                })
                .at(0),
            u64Padding: reader.readVec((reader) => reader.read64()),
        };

        return position;
    });
}

export function readVecOrder(bytes: Uint8Array) {
    let reader = new BcsReader(bytes);
    return reader.readVec((reader) => {
        reader.read16();
        let order = {
            id: AddressFromBytes(reader.readBytes(32)),
            createTsMs: reader.read64(),
            orderId: reader.read64(),
            linkedPositionId: reader
                .readVec((reader) => {
                    return reader.read64();
                })
                .at(0),
            user: AddressFromBytes(reader.readBytes(32)),
            collateralToken: { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))) },
            collateralTokenDecimal: reader.read64(),
            symbol: {
                baseToken: { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))) },
                quoteToken: { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))) },
            },
            leveragePct: reader.read64(),
            reduceOnly: reader.read8(),
            isLong: reader.read8(),
            isStopOrder: reader.read8(),
            size: reader.read64(),
            sizeDecimal: reader.read64(),
            triggerPrice: reader.read64(),
            oraclePriceWhenPlacing: reader.read64(),
            u64Padding: reader.readVec((reader) => reader.read64()),
        };

        return order;
    });
}

export function readVecShares(bytes: Uint8Array) {
    let reader = new BcsReader(bytes);
    return reader.readVec((reader) => {
        reader.read16();
        let share = {
            user: AddressFromBytes(reader.readBytes(32)),
            userShareId: reader.read64(),
            stakeTsMs: reader.read64(),
            totalShares: reader.read64(),
            activeShares: reader.read64(),
            deactivatingShares: reader.readVec((reader) => {
                let deactivatingShares = {
                    shares: reader.read64(),
                    unsubscribedTsMs: reader.read64(),
                    unlockedTsMs: reader.read64(),
                    unsubscribedIncentivePriceIndex: reader.readVec((reader) => [
                        { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))) },
                        reader.read64(),
                    ]),
                    u64Padding: reader.readVec((reader) => reader.read64()),
                };
                return deactivatingShares;
            }),
            lastIncentivePriceIndex: reader.readVec((reader) => [
                { name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))) },
                reader.read64(),
            ]),
            u64Padding: reader.readVec((reader) => reader.read64()),
        };

        return share;
    });
}
