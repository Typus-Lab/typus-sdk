export declare function getTotalDepositorIncentive(): Promise<TokenAmount>;
export declare function getTotalPremium(): Promise<number>;
/** Returns Accumulated Rewards im USD [v1, v2] */
export declare function getAccumulatedRewardGeneratedUSD(): Promise<[number, number]>;
export declare function getTotalProfitSharingClaimed(): Promise<TokenAmount[]>;
import { SuiClient } from "@mysten/sui.js/client";
export declare function getTotalProfitSharing(provider: SuiClient): Promise<TokenAmount[]>;
interface TokenAmount {
    token: string;
    total_amount: string;
}
/** Returns Accumulated Users [v1, v2] */
export declare function getAccumulatedUser(): Promise<number[]>;
/** Returns Accumulated Notional Volume in USD [v1, v2] */
export declare function getAccumulatedNotionalVolumeUSD(): Promise<number[]>;
export {};
