import { SuiClient } from "@mysten/sui.js/client";
import {
    createTradingOrder as _createTradingOrder,
    cancelTradingOrder as _cancelTradingOrder,
    increaseCollateral as _increaseCollateral,
    releaseCollateral as _releaseCollateral,
} from "../trading/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../constants";
import { PythClient, createPythClient, updatePyth } from "../../utils/pyth/pythClient";
import { priceInfoObjectIds, pythStateId } from "../../utils/pyth/constant";
import { tokenType, TOKEN, typeArgToToken } from "../../constants/token";
import { NETWORK } from "..";
import { Position, TradingOrder } from "../position/structs";

export async function createTradingOrder(
    config: {
        REGISTRY: {
            MARKET_REGISTRY: string;
            USER: string;
            LEADERBOARD: string;
            LP_POOL_REGISTRY: string;
        };
        OBJECT: {
            TYPUS_VERSION: string;
            TYPUS_PERP_VERSION: string;
        };
    },
    input: {
        pythClient: PythClient;
        tx: TransactionBlock;
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
): Promise<TransactionBlock> {
    // INPUTS
    const TOKEN = input.cToken;
    const BASE_TOKEN = input.tradingToken;

    await updatePyth(input.pythClient, input.tx, [TOKEN, BASE_TOKEN]);
    const cToken = tokenType[NETWORK][TOKEN];
    const baseToken = tokenType[NETWORK][BASE_TOKEN];

    var coin;

    if (TOKEN == "SUI") {
        [coin] = input.tx.splitCoins(input.tx.gas, [input.amount]);
    } else {
        const destination = input.coins.pop()!;

        if (input.coins.length > 0) {
            input.tx.mergeCoins(destination, input.coins);
        }

        [coin] = input.tx.splitCoins(destination, [input.amount]);
    }

    _createTradingOrder(input.tx, [cToken, baseToken], {
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
        collateral: coin,
        size: BigInt(input.size),
        triggerPrice: BigInt(input.triggerPrice),
        isLong: input.isLong,
        isStopOrder: input.isStopOrder,
        reduceOnly: input.reduceOnly,
        linkedPositionId: input.linkedPositionId ? BigInt(input.linkedPositionId) : null,
    });

    return input.tx;
}

export async function cancelTradingOrder(
    config: {
        REGISTRY: {
            MARKET_REGISTRY: string;
        };
        OBJECT: {
            TYPUS_PERP_VERSION: string;
        };
    },
    input: {
        tx: TransactionBlock;
        order: TradingOrder;
        user: string;
    }
): Promise<TransactionBlock> {
    const cToken = "0x" + input.order.collateralToken.name;
    const BASE_TOKEN = "0x" + input.order.symbol.baseToken.name;

    const coin = _cancelTradingOrder(input.tx, [cToken, BASE_TOKEN], {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.MARKET_REGISTRY,
        marketIndex: BigInt(0),
        orderId: input.order.orderId,
        triggerPrice: input.order.triggerPrice,
    });

    input.tx.transferObjects([coin], input.user);

    return input.tx;
}

export async function increaseCollateral(
    config: {
        REGISTRY: {
            MARKET_REGISTRY: string;
            LP_POOL_REGISTRY: string;
        };
        OBJECT: {
            TYPUS_PERP_VERSION: string;
        };
    },
    input: {
        pythClient: PythClient;
        tx: TransactionBlock;
        coins: string[];
        amount: string;
        position: Position;
    }
): Promise<TransactionBlock> {
    // parse from Position
    const TOKEN = typeArgToToken(input.position.collateralToken.name);
    const BASE_TOKEN = typeArgToToken(input.position.symbol.baseToken.name);

    await updatePyth(input.pythClient, input.tx, [TOKEN, BASE_TOKEN]);
    const cToken = tokenType[NETWORK][TOKEN];
    const baseToken = tokenType[NETWORK][BASE_TOKEN];

    var coin;

    if (TOKEN == "SUI") {
        [coin] = input.tx.splitCoins(input.tx.gas, [input.amount]);
    } else {
        const destination = input.coins.pop()!;

        if (input.coins.length > 0) {
            input.tx.mergeCoins(destination, input.coins);
        }

        [coin] = input.tx.splitCoins(destination, [input.amount]);
    }

    _increaseCollateral(input.tx, [cToken, baseToken], {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.MARKET_REGISTRY,
        poolRegistry: config.REGISTRY.LP_POOL_REGISTRY,
        marketIndex: BigInt(0),
        poolIndex: BigInt(0),
        pythState: pythStateId[NETWORK],
        oracleCToken: priceInfoObjectIds[NETWORK][TOKEN],
        oracleTradingSymbol: priceInfoObjectIds[NETWORK][BASE_TOKEN],
        clock: CLOCK,
        positionId: BigInt(input.position.positionId),
        collateral: coin,
    });

    return input.tx;
}

export async function releaseCollateral(
    config: {
        REGISTRY: {
            MARKET_REGISTRY: string;
            LP_POOL_REGISTRY: string;
        };
        OBJECT: {
            TYPUS_PERP_VERSION: string;
        };
    },
    input: {
        pythClient: PythClient;
        tx: TransactionBlock;
        position: Position;
        amount: string;
    }
): Promise<TransactionBlock> {
    // parse from Position
    const TOKEN = typeArgToToken(input.position.collateralToken.name);
    const BASE_TOKEN = typeArgToToken(input.position.symbol.baseToken.name);

    await updatePyth(input.pythClient, input.tx, [TOKEN, BASE_TOKEN]);
    const cToken = tokenType[NETWORK][TOKEN];
    const baseToken = tokenType[NETWORK][BASE_TOKEN];

    const coin = _releaseCollateral(input.tx, [cToken, baseToken], {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.MARKET_REGISTRY,
        poolRegistry: config.REGISTRY.LP_POOL_REGISTRY,
        marketIndex: BigInt(0),
        poolIndex: BigInt(0),
        pythState: pythStateId[NETWORK],
        oracleCToken: priceInfoObjectIds[NETWORK][TOKEN],
        oracleTradingSymbol: priceInfoObjectIds[NETWORK][BASE_TOKEN],
        clock: CLOCK,
        positionId: BigInt(input.position.positionId),
        releaseAmount: BigInt(input.amount),
    });

    input.tx.transferObjects([coin], input.position.user);

    return input.tx;
}
