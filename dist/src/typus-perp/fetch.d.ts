import { SuiClient } from "@mysten/sui.js/client";
import { LiquidityPool } from "./lp-pool/structs";
import { Markets, SymbolMarket } from "./trading/structs";
import { TradingOrder, Position } from "./position/structs";
import { LpUserShare, StakePool } from "./stake-pool/structs";
import { PythClient } from "src/utils/pyth/pythClient";
export declare function getLpPools(provider: SuiClient, config: {
    REGISTRY: {
        LP_POOL_REGISTRY: string;
        LIQUIDITY_POOL_REGISTRY: string;
    };
}): Promise<LiquidityPool[]>;
export declare function getStakePools(provider: SuiClient, config: {
    REGISTRY: {
        STAKE_POOL_REGISTRY: string;
    };
}): Promise<StakePool[]>;
export declare function getMarkets(provider: SuiClient, config: {
    REGISTRY: {
        MARKET_REGISTRY: string;
    };
}): Promise<Markets[]>;
export declare function getSymbolMarkets(provider: SuiClient, market: Markets): Promise<Map<string, SymbolMarket>>;
export declare function getUserOrders(provider: SuiClient, config: {
    OBJECT: {
        TYPUS_PERP_VERSION: string;
    };
    REGISTRY: {
        MARKET_REGISTRY: string;
    };
}, user: string): Promise<TradingOrder[]>;
export declare function getUserPositions(provider: SuiClient, config: {
    OBJECT: {
        TYPUS_PERP_VERSION: string;
    };
    REGISTRY: {
        MARKET_REGISTRY: string;
    };
}, user: string): Promise<Position[]>;
export declare function getUserStake(provider: SuiClient, config: {
    REGISTRY: {
        STAKE_POOL_REGISTRY: string;
    };
}, user: string): Promise<LpUserShare[]>;
export declare function getLiquidationPrice(provider: SuiClient, config: {
    OBJECT: {
        TYPUS_PERP_VERSION: string;
    };
    REGISTRY: {
        LP_POOL_REGISTRY: string;
        MARKET_REGISTRY: string;
    };
}, input: {
    pythClient: PythClient;
    positions: Position[];
    user: string;
}): Promise<string[] | undefined>;
