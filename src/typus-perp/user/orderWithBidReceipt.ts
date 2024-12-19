import {
    createTradingOrder as _createTradingOrder,
    cancelTradingOrder as _cancelTradingOrder,
    increaseCollateral as _increaseCollateral,
    releaseCollateral as _releaseCollateral,
    createTradingOrderWithBidReceipt as _createTradingOrderWithBidReceipt,
    reduceOptionCollateralPositionSize as _reduceOptionCollateralPositionSize,
} from "../typus_perp/trading/functions";
import { Transaction } from "@mysten/sui/transactions";
import { PythClient, updatePyth, updateOracleWithPyth, priceInfoObjectIds, pythStateId, TypusConfig } from "src/utils";
import { tokenType, TOKEN, CLOCK } from "src/constants";
import { NETWORK } from "..";
import { getSplitBidReceiptTx } from "src/typus-dov-single-v2/";

export async function createTradingOrderWithBidReceipt(
    config: TypusConfig,
    tx: Transaction,
    pythClient: PythClient,
    input: {
        cToken: TOKEN;
        tradingToken: TOKEN;
        isLong: boolean;
        user: string;
        index: string;
        bToken: TOKEN;
        bidReceipt: string;
        share: string | null;
    }
): Promise<Transaction> {
    // INPUTS
    let TOKEN = input.cToken;
    let BASE_TOKEN = input.tradingToken;

    await updatePyth(pythClient, tx, [TOKEN, BASE_TOKEN]);
    let cToken = tokenType[NETWORK][TOKEN];
    let bToken = tokenType[NETWORK][input.bToken];
    let baseToken = tokenType[NETWORK][BASE_TOKEN];

    updateOracleWithPyth(pythClient, tx, config.package.oracle, config.oracle[BASE_TOKEN.toLocaleLowerCase()], BASE_TOKEN, "USDC");

    // split bid receipt
    var collateralBidReceipt;

    if (input.share) {
        collateralBidReceipt = getSplitBidReceiptTx(config, tx, {
            index: input.index,
            receipts: [input.bidReceipt],
            share: input.share,
            recipient: input.user,
        });
    } else {
        collateralBidReceipt = input.bidReceipt;
    }

    _createTradingOrderWithBidReceipt(tx, [cToken, bToken, baseToken], {
        version: config.version.perp.perp,
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

    return tx;
}

export async function reduceOptionCollateralPositionSize(
    config: TypusConfig,
    tx: Transaction,
    pythClient: PythClient,
    input: {
        cToken: TOKEN;
        tradingToken: TOKEN;
        bToken: string;
        share: string | null;
        index: string;
        user: string;
        bidReceipt: string;
    }
): Promise<Transaction> {
    let TOKEN = input.cToken;
    let BASE_TOKEN = input.tradingToken;

    await updatePyth(pythClient, tx, [TOKEN, BASE_TOKEN]);
    let cToken = tokenType[NETWORK][TOKEN];
    let bToken = tokenType[NETWORK][input.bToken];
    let baseToken = tokenType[NETWORK][BASE_TOKEN];

    updateOracleWithPyth(pythClient, tx, config.package.oracle, config.oracle[BASE_TOKEN.toLocaleLowerCase()], BASE_TOKEN, "USDC");

    // split bid receipt
    var collateralBidReceipt;
    if (input.share) {
        collateralBidReceipt = getSplitBidReceiptTx(config, tx, {
            index: input.index,
            receipts: [input.bidReceipt],
            share: input.share,
            recipient: input.user,
        });
    } else {
        collateralBidReceipt = input.bidReceipt;
    }

    _reduceOptionCollateralPositionSize(tx, [cToken, bToken, baseToken], {
        version: config.version.perp.perp,
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
        dovRegistry: config.registry.dov.dovSingle,
        typusOracle: config.oracle[BASE_TOKEN.toLocaleLowerCase()],
        positionId: BigInt(123),
        orderSize: null,
    });

    return tx;
}
