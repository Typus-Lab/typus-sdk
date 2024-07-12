import { TransactionBlock } from "@mysten/sui.js/transactions";
import { PythClient } from "src/utils/pyth/pythClient";
import { TOKEN } from "src/constants/token";
import { Position } from "../position/structs";
export declare function createTradingOrderWithBidReceipt(config: {
    PACKAGE_ORIGIN: {
        FRAMEWORK: string;
    };
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
}, input: {
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
}): Promise<TransactionBlock>;
export declare function reduceOptionCollateralPositionSize(config: {
    PACKAGE_ORIGIN: {
        FRAMEWORK: string;
    };
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
}, input: {
    pythClient: PythClient;
    tx: TransactionBlock;
    position: Position;
    size: string | null;
}): Promise<TransactionBlock>;
