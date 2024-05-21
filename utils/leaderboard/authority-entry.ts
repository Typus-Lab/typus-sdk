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
export async function getActivateLeaderboardTx(
    gasBudget: number,
    packageId: string,
    version: string,
    typusLeaderboardRegistry: string,
    key: string,
    start_ts_ms: string,
    end_ts_ms: string
) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${packageId}::leaderboard::activate_leaderboard`,
        typeArguments: [],
        arguments: [tx.object(version), tx.object(typusLeaderboardRegistry), tx.pure(key), tx.pure(start_ts_ms), tx.pure(end_ts_ms)],
    });

    tx.setGasBudget(gasBudget);

    return tx;
}

/**
    public fun deactivate_leaderboard(
        version: &Version,
        registry: &mut TypusLeaderboardRegistry,
        key: String,
        id: address,
        ctx: &mut TxContext,
    )
*/
export async function getDeactivateLeaderboardTx(
    gasBudget: number,
    packageId: string,
    version: string,
    typusLeaderboardRegistry: string,
    key: string,
    id: string
) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${packageId}::leaderboard::deactivate_leaderboard`,
        typeArguments: [],
        arguments: [tx.object(version), tx.object(typusLeaderboardRegistry), tx.object(key), tx.pure(id)],
    });

    tx.setGasBudget(gasBudget);

    return tx;
}
