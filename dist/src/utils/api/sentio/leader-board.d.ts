export interface ExpLeaderBoard {
    nft_id: string;
    total_exp_earn: number;
    owner: string | undefined;
}
export declare function getExpLeaderBoardWithOwner(expLeaderBoard: ExpLeaderBoard[], ownerMap: Map<string, string>): Promise<ExpLeaderBoard[]>;
export declare function getExpLeaderBoard(startTimestamp: string, endTimestamp?: string): Promise<ExpLeaderBoard[]>;
