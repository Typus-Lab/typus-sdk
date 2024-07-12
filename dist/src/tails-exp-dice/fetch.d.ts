import { SuiClient } from "@mysten/sui.js/client";
export declare function getPlaygrounds(provider: SuiClient, diceRegistry: string): Promise<Playground[]>;
export interface Playground {
    id: string;
    house_whitelist: string[];
    public_key: string;
    num_of_games: string;
    stake_token: string;
    opened_games: Map<string, Game>;
    game_config: GameConfig;
    is_active: boolean;
}
export interface GameConfig {
    max_stake: string;
    min_stake: string;
    stake_lot_size: string;
    base_exp_divisor: string;
    losses_multiplier_bp: string;
    critical_hits_multiplier_bp: string;
}
export interface Game {
    game_id: string;
    player: string;
    stake_amount: string;
    guess_1: string | null;
    larger_than_1: boolean | null;
    vrf_input_1: number[] | null;
    guess_2: string | null;
    larger_than_2: boolean | null;
    vrf_input_2: number[] | null;
}
export declare function getHistory(provider: SuiClient, dicePackage: string, playgrounds: Playground[]): Promise<DrawDisplay[]>;
export declare function waitHistory(provider: SuiClient, dicePackage: string, onMessage: any): Promise<import("@mysten/sui.js/client").Unsubscribe>;
export declare function parseHistory(datas: any, playgrounds: Playground[]): Promise<DrawDisplay[]>;
export interface DrawEvent {
    answer_1: string;
    answer_2: string;
    exp: string;
    game_id: string;
    guess_1: string;
    guess_2: string;
    index: string;
    larger_than_1: boolean;
    larger_than_2: boolean;
    player: string;
    public_key: number[];
    result_1: string;
    result_2: string;
    signature_1: number[];
    signature_2: number[];
    signer: string;
    stake_amount: string;
    timestampMs: string;
}
export interface DrawDisplay {
    game_id: string;
    player: string;
    guess_1: string;
    guess_2: string;
    result_1: string;
    result_2: string;
    bet_amount: string;
    exp: string;
    timestampMs: string;
}
export interface LeaderBoard {
    player: string;
    total_bet_amount: number;
    total_earn_exp: number;
}
export declare function getLeaderBoard(drawDisplays: DrawDisplay[]): Promise<LeaderBoard[]>;
export interface ProfitSharing {
    level_profits: string[];
    level_users: string[];
    pool: string;
    remaining: string;
    total: string;
    tokenType: string;
}
export declare function getProfitSharing(provider: SuiClient, diceProfitSharing: string): Promise<ProfitSharing>;
export declare function calculateLevelReward(totalRewards: number, levelShares: number[], numOfHolders: number[]): number[];
