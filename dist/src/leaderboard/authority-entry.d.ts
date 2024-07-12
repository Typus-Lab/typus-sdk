import { TransactionBlock } from "@mysten/sui.js/transactions";
/**
    public fun activate_leaderboard(
        version: &Version,
        registry: &mut TypusLeaderboardRegistry,
        key: String,
        start_ts_ms: u64,
        end_ts_ms: u64,
        ctx: &mut TxContext,
    )
*/
export declare function getActivateLeaderboardTx(gasBudget: number, packageId: string, version: string, typusLeaderboardRegistry: string, key: string, start_ts_ms: string, end_ts_ms: string): Promise<TransactionBlock>;
/**
    public fun deactivate_leaderboard(
        version: &Version,
        registry: &mut TypusLeaderboardRegistry,
        key: String,
        id: address,
        ctx: &mut TxContext,
    )
*/
export declare function getDeactivateLeaderboardTx(gasBudget: number, packageId: string, version: string, typusLeaderboardRegistry: string, key: string, id: string): Promise<TransactionBlock>;
