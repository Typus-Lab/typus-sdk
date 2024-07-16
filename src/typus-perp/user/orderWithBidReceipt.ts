import {
    createTradingOrder as _createTradingOrder,
    cancelTradingOrder as _cancelTradingOrder,
    increaseCollateral as _increaseCollateral,
    releaseCollateral as _releaseCollateral,
    createTradingOrderWithBidReceipt as _createTradingOrderWithBidReceipt,
    reduceOptionCollateralPositionSize as _reduceOptionCollateralPositionSize,
} from "../trading/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../constants";
import { PythClient, createPythClient, updatePyth, updateOracleWithPyth } from "../../utils/pyth/pythClient";
import { priceInfoObjectIds, pythStateId } from "../../utils/pyth/constant";
import { tokenType, TOKEN, typeArgToToken } from "../../constants/token";
import { NETWORK } from "..";
import { Position, TradingOrder } from "../position/structs";
import { getSplitBidReceiptTx } from "../../typus-dov-single-v2/entry/user-entry";

export async function createTradingOrderWithBidReceipt(
    config: {
        PACKAGE_ORIGIN: { FRAMEWORK: string };
        PACKAGE: {
            DOV_SINGLE: string;
            ORACLE: string;
        };
        REGISTRY: {
            DOV_SINGLE: string;
            MARKET_REGISTRY: string;
            USER: string;
            LEADERBOARD: string;
            LP_POOL_REGISTRY: string;
        };
        OBJECT: {
            TYPUS_VERSION: string;
            TYPUS_PERP_VERSION: string;
        };
        ORACLE: {};
    },
    input: {
        pythClient: PythClient;
        tx: TransactionBlock;
        cToken: TOKEN;
        tradingToken: TOKEN;
        isLong: boolean;
        user: string;
        index: string;
        bToken: string;
        bidReceipt: string;
        share: string | null;
    }
): Promise<TransactionBlock> {
    // INPUTS
    const TOKEN = input.cToken;
    const BASE_TOKEN = input.tradingToken;

    await updatePyth(input.pythClient, input.tx, [TOKEN, BASE_TOKEN]);
    const cToken = tokenType[NETWORK][TOKEN];
    const bToken = tokenType[NETWORK][input.bToken];
    const baseToken = tokenType[NETWORK][BASE_TOKEN];

    updateOracleWithPyth(input.pythClient, input.tx, config.PACKAGE.ORACLE, config.ORACLE[BASE_TOKEN], BASE_TOKEN, "USDC");

    // split bid receipt
    var collateralBidReceipt;
    if (input.share) {
        collateralBidReceipt = getSplitBidReceiptTx({
            tx: input.tx,
            typusFrameworkOriginPackageId: config.PACKAGE_ORIGIN.FRAMEWORK,
            typusDovSinglePackageId: config.PACKAGE.DOV_SINGLE,
            typusDovSingleRegistry: config.REGISTRY.DOV_SINGLE,
            index: input.index,
            receipts: [input.bidReceipt],
            share: input.share,
            recipient: input.user,
        });
    } else {
        collateralBidReceipt = input.bidReceipt;
    }

    _createTradingOrderWithBidReceipt(input.tx, [cToken, bToken, baseToken], {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.MARKET_REGISTRY,
        poolRegistry: config.REGISTRY.LP_POOL_REGISTRY,
        marketIndex: BigInt(0),
        poolIndex: BigInt(0),
        pythState: pythStateId[NETWORK],
        oracleCToken: priceInfoObjectIds[NETWORK][TOKEN],
        oracleTradingSymbol: priceInfoObjectIds[NETWORK][BASE_TOKEN],
        clock: CLOCK,
        typusEcosystemVersion: config.OBJECT.TYPUS_VERSION,
        typusUserRegistry: config.REGISTRY.USER,
        typusLeaderboardRegistry: config.REGISTRY.LEADERBOARD,
        isLong: input.isLong,
        dovRegistry: config.REGISTRY.DOV_SINGLE,
        typusOracle: config.ORACLE[BASE_TOKEN],
        collateralBidReceipt,
        user: input.user,
    });

    return input.tx;
}

export async function reduceOptionCollateralPositionSize(
    config: {
        PACKAGE_ORIGIN: { FRAMEWORK: string };
        PACKAGE: {
            DOV_SINGLE: string;
            ORACLE: string;
        };
        REGISTRY: {
            DOV_SINGLE: string;
            MARKET_REGISTRY: string;
            USER: string;
            LEADERBOARD: string;
            LP_POOL_REGISTRY: string;
        };
        OBJECT: {
            TYPUS_VERSION: string;
            TYPUS_PERP_VERSION: string;
        };
        ORACLE: {};
    },
    input: {
        pythClient: PythClient;
        tx: TransactionBlock;
        position: Position;
        size: string | null;
    }
): Promise<TransactionBlock> {
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

    return input.tx;
}
