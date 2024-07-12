import { SuiClient } from "@mysten/sui.js/client";
export interface StakingInfo {
    user: string;
    tails: string[];
    profits: string[];
    u64Padding: string[];
}
export declare function getStakingInfo(input: {
    provider: SuiClient;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    user: string;
}): Promise<StakingInfo>;
export declare function getLevelCounts(input: {
    provider: SuiClient;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
}): Promise<number[]>;
