import { TransactionBlock } from "@mysten/sui.js/transactions";
import { PythClient } from "src/utils/pyth/pythClient";
import { TOKEN } from "src/constants/token";
import { Position, TradingOrder } from "../position/structs";
export declare function createTradingOrder(config: {
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
}, input: {
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
}): Promise<TransactionBlock>;
export declare function cancelTradingOrder(config: {
    REGISTRY: {
        MARKET_REGISTRY: string;
    };
    OBJECT: {
        TYPUS_PERP_VERSION: string;
    };
}, input: {
    tx: TransactionBlock;
    order: TradingOrder;
    user: string;
}): Promise<TransactionBlock>;
export declare function increaseCollateral(config: {
    REGISTRY: {
        MARKET_REGISTRY: string;
        LP_POOL_REGISTRY: string;
    };
    OBJECT: {
        TYPUS_PERP_VERSION: string;
    };
}, input: {
    pythClient: PythClient;
    tx: TransactionBlock;
    coins: string[];
    amount: string;
    position: Position;
}): Promise<TransactionBlock>;
export declare function releaseCollateral(config: {
    REGISTRY: {
        MARKET_REGISTRY: string;
        LP_POOL_REGISTRY: string;
    };
    OBJECT: {
        TYPUS_PERP_VERSION: string;
    };
}, input: {
    pythClient: PythClient;
    tx: TransactionBlock;
    position: Position;
    amount: string;
}): Promise<TransactionBlock>;
