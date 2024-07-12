import { SuiClient } from "@mysten/sui.js/client";
export interface Rankings {
    user_score: string;
    leaderboard: Ranks[];
}
export interface Ranks {
    score: string;
    users: string[];
}
export declare function getRankings(input: {
    provider: SuiClient;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusLeaderboardRegistry: string;
    key: string;
    id: string;
    ranks: number;
    user: string;
    active: boolean;
}): Promise<Rankings>;
