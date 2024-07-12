import { SuiClient } from "@mysten/sui.js/client";
import { BidShare } from "src/typus-dov-single-v2/view-function";
export declare function getUserStrategies(provider: SuiClient, packageId: string, registry: string, strategyPool: string, user: string): Promise<StrategyV2[]>;
export declare function getStrategyPool(provider: SuiClient, strategyPool: string): Promise<StrategyPoolV2>;
export interface StrategyPoolV2 {
    id: string;
    strategies: Map<string, Map<string, string>>;
    authority: string[];
}
export interface StrategyV2 {
    id: string;
    vault_index: string;
    signal_index: string;
    user: string;
    price_percentage: string;
    size: string;
    max_times: string;
    target_rounds: string[];
    receipts: TypusBidReceipt[];
    active: boolean;
    u64_padding: string[];
    bid_times: string;
    bid_round: string;
    bid_ts_ms: string;
    bid_rounds: string[];
    accumulated_profit: string;
    remaining_balance: string | undefined;
    gain_to_harvest: string | undefined;
    accumulated_cost: string | undefined;
    my_bids: {
        [key: string]: BidShare;
    };
    status: "active" | "insufficient balance" | "finished";
}
export interface TypusBidReceipt {
    id: string;
    vid: string;
    index: string;
    metadata: string;
    u64_padding: string[];
}
export declare function getStrategies(provider: SuiClient, strategyIds: string[]): Promise<Map<string, StrategyV2>>;
export declare function getStrategyIds(provider: SuiClient, parentId: string): Promise<string[]>;
