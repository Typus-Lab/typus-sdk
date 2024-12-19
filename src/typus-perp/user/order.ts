import {
    createTradingOrder as _createTradingOrder,
    cancelTradingOrder as _cancelTradingOrder,
    increaseCollateral as _increaseCollateral,
    releaseCollateral as _releaseCollateral,
} from "../typus_perp/trading/functions";
import { Position, TradingOrder } from "../typus_perp/position/structs";
import { CLOCK } from "src/constants";
import { NETWORK } from "..";
import { PythClient, updatePyth, priceInfoObjectIds, pythStateId, TypusConfig } from "src/utils";
import { tokenType, TOKEN, typeArgToToken } from "src/constants";
import { Transaction } from "@mysten/sui/transactions";

export async function createTradingOrder(
    config: TypusConfig,
    tx: Transaction,
    pythClient: PythClient,
    input: {
        coins: string[];
        cToken: TOKEN;
        amount: string;
        tradingToken: TOKEN;
        size: string;
        triggerPrice: string;
        isLong: boolean;
        isStopOrder: boolean;
        reduceOnly: boolean;
        linkedPositionId: string | null;
    }
): Promise<Transaction> {
    // INPUTS
    let TOKEN = input.cToken;
    let BASE_TOKEN = input.tradingToken;

    await updatePyth(pythClient, tx, [TOKEN, BASE_TOKEN]);
    let cToken = tokenType[NETWORK][TOKEN];
    let baseToken = tokenType[NETWORK][BASE_TOKEN];

    var coin;

    if (TOKEN == "SUI") {
        [coin] = tx.splitCoins(tx.gas, [input.amount]);
    } else {
        let destination = input.coins.pop()!;

        if (input.coins.length > 0) {
            tx.mergeCoins(destination, input.coins);
        }

        [coin] = tx.splitCoins(destination, [input.amount]);
    }

    _createTradingOrder(tx, [cToken, baseToken], {
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
        collateral: coin,
        size: BigInt(input.size),
        triggerPrice: BigInt(input.triggerPrice),
        isLong: input.isLong,
        isStopOrder: input.isStopOrder,
        reduceOnly: input.reduceOnly,
        linkedPositionId: input.linkedPositionId ? BigInt(input.linkedPositionId) : null,
    });

    return tx;
}

export async function cancelTradingOrder(
    config: TypusConfig,
    tx: Transaction,
    input: {
        order: TradingOrder;
        user: string;
    }
): Promise<Transaction> {
    let cToken = "0x" + input.order.collateralToken.name;
    let BASE_TOKEN = "0x" + input.order.symbol.baseToken.name;

    let coin = _cancelTradingOrder(tx, [cToken, BASE_TOKEN], {
        version: config.version.perp.perp,
        registry: config.registry.perp.market,
        marketIndex: BigInt(0),
        orderId: input.order.orderId,
        triggerPrice: input.order.triggerPrice,
        orderUser: null,
    });

    tx.transferObjects([coin], input.user);

    return tx;
}

export async function increaseCollateral(
    config: TypusConfig,
    tx: Transaction,
    pythClient: PythClient,
    input: {
        coins: string[];
        amount: string;
        position: Position;
    }
): Promise<Transaction> {
    // parse from Position
    let TOKEN = typeArgToToken(input.position.collateralToken.name);
    let BASE_TOKEN = typeArgToToken(input.position.symbol.baseToken.name);

    await updatePyth(pythClient, tx, [TOKEN, BASE_TOKEN]);
    let cToken = tokenType[NETWORK][TOKEN];
    let baseToken = tokenType[NETWORK][BASE_TOKEN];

    var coin;

    if (TOKEN == "SUI") {
        [coin] = tx.splitCoins(tx.gas, [input.amount]);
    } else {
        let destination = input.coins.pop()!;

        if (input.coins.length > 0) {
            tx.mergeCoins(destination, input.coins);
        }

        [coin] = tx.splitCoins(destination, [input.amount]);
    }

    _increaseCollateral(tx, [cToken, baseToken], {
        version: config.version.perp.perp,
        registry: config.registry.perp.market,
        poolRegistry: config.registry.perp.lpPool,
        marketIndex: BigInt(0),
        poolIndex: BigInt(0),
        pythState: pythStateId[NETWORK],
        oracleCToken: priceInfoObjectIds[NETWORK][TOKEN],
        oracleTradingSymbol: priceInfoObjectIds[NETWORK][BASE_TOKEN],
        clock: CLOCK,
        positionId: BigInt(input.position.positionId),
        collateral: coin,
    });

    return tx;
}

export async function releaseCollateral(
    config: TypusConfig,
    tx: Transaction,
    pythClient: PythClient,
    input: {
        position: Position;
        amount: string;
    }
): Promise<Transaction> {
    // parse from Position
    let TOKEN = typeArgToToken(input.position.collateralToken.name);
    let BASE_TOKEN = typeArgToToken(input.position.symbol.baseToken.name);

    await updatePyth(pythClient, tx, [TOKEN, BASE_TOKEN]);
    let cToken = tokenType[NETWORK][TOKEN];
    let baseToken = tokenType[NETWORK][BASE_TOKEN];

    let coin = _releaseCollateral(tx, [cToken, baseToken], {
        version: config.version.perp.perp,
        registry: config.registry.perp.market,
        poolRegistry: config.registry.perp.lpPool,
        marketIndex: BigInt(0),
        poolIndex: BigInt(0),
        pythState: pythStateId[NETWORK],
        oracleCToken: priceInfoObjectIds[NETWORK][TOKEN],
        oracleTradingSymbol: priceInfoObjectIds[NETWORK][BASE_TOKEN],
        clock: CLOCK,
        positionId: BigInt(input.position.positionId),
        releaseAmount: BigInt(input.amount),
    });

    tx.transferObjects([coin], input.position.user);

    return tx;
}
