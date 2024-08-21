import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

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
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        key: string;
        start_ts_ms: string;
        end_ts_ms: string;
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::leaderboard::activate_leaderboard`,
        typeArguments: [],
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.leaderboard),
            tx.pure(input.key),
            tx.pure(input.start_ts_ms),
            tx.pure(input.end_ts_ms),
        ],
    });

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
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        key: string;
        id: string;
    }
) {
    tx.moveCall({
        target: `${config.package.typus}::leaderboard::deactivate_leaderboard`,
        typeArguments: [],
        arguments: [tx.object(config.version.typus), tx.object(config.registry.typus.leaderboard), tx.pure(input.key), tx.pure(input.id)],
    });

    return tx;
}
