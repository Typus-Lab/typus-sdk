import {
    createTradingOrder as _createTradingOrder,
    cancelTradingOrder as _cancelTradingOrder,
    increaseCollateral as _increaseCollateral,
    releaseCollateral as _releaseCollateral,
    createTradingOrderWithBidReceipt as _createTradingOrderWithBidReceipt,
    reduceOptionCollateralPositionSize as _reduceOptionCollateralPositionSize,
} from "../trading/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { PythClient, updatePyth, updateOracleWithPyth, priceInfoObjectIds, pythStateId, TypusConfig } from "../../utils";
import { tokenType, TOKEN, CLOCK } from "../../constants";
import { NETWORK } from "..";
import { Position, TradingOrder } from "../position/structs";
import { getSplitBidReceiptTx } from "../../typus-dov-single-v2/";

export async function createTradingOrderWithBidReceipt(
    config: TypusConfig,
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

    updateOracleWithPyth(
        input.pythClient,
        input.tx,
        config.package.oracle,
        config.oracle[BASE_TOKEN.toLocaleLowerCase()],
        BASE_TOKEN,
        "USDC"
    );

    // split bid receipt
    var collateralBidReceipt;
    if (input.share) {
        collateralBidReceipt = getSplitBidReceiptTx({
            tx: input.tx,
            typusFrameworkOriginPackageId: config.packageOrigin.framework,
            typusDovSinglePackageId: config.package.dovSingle,
            typusDovSingleRegistry: config.registry.dov.dovSingle,
            index: input.index,
            receipts: [input.bidReceipt],
            share: input.share,
            recipient: input.user,
        });
    } else {
        collateralBidReceipt = input.bidReceipt;
    }

    _createTradingOrderWithBidReceipt(input.tx, [cToken, bToken, baseToken], {
        version: config.version.perp,
        registry: config.registry.perp.market,
        poolRegistry: config.registry.perp.lpPool,
        marketIndex: BigInt(0),
        poolIndex: BigInt(0),
        pythState: pythStateId[NETWORK],
        oracleCToken: priceInfoObjectIds[NETWORK][TOKEN],
        oracleTradingSymbol: priceInfoObjectIds[NETWORK][BASE_TOKEN],
        clock: CLOCK,
        typusEcosystemVersion: config.version.typus,
        typusUserRegistry: config.registry.typus.user,
        typusLeaderboardRegistry: config.registry.typus.leaderboard,
        isLong: input.isLong,
        dovRegistry: config.registry.dov.dovSingle,
        typusOracle: config.oracle[BASE_TOKEN.toLocaleLowerCase()],
        collateralBidReceipt,
        user: input.user,
    });

    return input.tx;
}

export async function reduceOptionCollateralPositionSize(
    config: TypusConfig,
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

    // updateOracleWithPyth(input.pythClient, input.tx, config.package.oracle, config.oracle[BASE_TOKEN.toLocaleLowerCase()], BASE_TOKEN, "USDC");

    // // split bid receipt
    // var collateralBidReceipt;
    // if (input.share) {
    //     collateralBidReceipt = getSplitBidReceiptTx({
    //         tx: input.tx,
    //         typusFrameworkOriginPackageId: config.packageOrigin.framework,
    //         typusDovSinglePackageId: config.package.dovSingle,
    //         typusDovSingleRegistry: config.registry.dov.dovSingle,
    //         index: input.index,
    //         receipts: [input.bidReceipt],
    //         share: input.share,
    //         recipient: input.user,
    //     });
    // } else {
    //     collateralBidReceipt = input.bidReceipt;
    // }

    // _reduceOptionCollateralPositionSize(input.tx, [cToken, bToken, baseToken], {
    //     version: config.version.perp,
    //     registry: config.registry.perp.market,
    //     poolRegistry: config.registry.perp.lpPool,
    //     marketIndex: BigInt(0),
    //     poolIndex: BigInt(0),
    //     pythState: pythStateId[NETWORK],
    //     oracleCToken: priceInfoObjectIds[NETWORK][TOKEN],
    //     oracleTradingSymbol: priceInfoObjectIds[NETWORK][BASE_TOKEN],
    //     clock: CLOCK,
    //     typusEcosystemVersion: config.version.typus,
    //     typusUserRegistry: config.registry.typus.user,
    //     typusLeaderboardRegistry: config.registry.typus.leaderboard,
    //     dovRegistry: config.registry.dov.dovSingle,
    //     typusOracle: config.oracle[BASE_TOKEN.toLocaleLowerCase()],
    //     positionId: BigInt(123),
    //     orderSize: null,
    // });

    return input.tx;
}
