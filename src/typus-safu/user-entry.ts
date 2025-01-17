import { Transaction } from "@mysten/sui/transactions";
import { CLOCK, tokenType } from "src/constants";
import { TypusConfig, splitCoins } from "src/utils";

/**
    public fun raise_fund<D_TOKEN>(
        typus_version: &TypusVersion,
        typus_leaderboard_registry: &mut TypusLeaderboardRegistry,
        typus_user_registry: &mut TypusUserRegistry,
        version: &Version,
        registry: &mut Registry,
        index: u64,
        raise_balance: Balance<D_TOKEN>,
        raise_from_deactivating: u64,
        raise_from_inactive: u64,
        raise_from_reward: u64,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
 */
export function getRaiseFundTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        raiseCoins: string[];
        raiseAmount: string;
        raiseFromDeactivating: string;
        raiseFromInactive: string;
        raiseFromReward: string;
        user: string;
    }
) {
    let raiseBalance =
        input.typeArguments[0] == "0x2::sui::SUI" ||
        input.typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"
            ? tx.moveCall({
                  target: `${config.package.framework}::utils::delegate_extract_balance`,
                  typeArguments: [input.typeArguments[0]],
                  arguments: [
                      tx.pure.address(input.user),
                      tx.makeMoveVec({
                          type: `0x2::coin::Coin<${input.typeArguments[0]}>`,
                          elements: [tx.splitCoins(tx.gas, [tx.pure.u64(input.raiseAmount)])],
                      }),
                      tx.pure.u64(input.raiseAmount),
                  ],
              })
            : tx.moveCall({
                  target: `${config.package.framework}::utils::delegate_extract_balance`,
                  typeArguments: [input.typeArguments[0]],
                  arguments: [
                      tx.pure.address(input.user),
                      tx.makeMoveVec({
                          type: `0x2::coin::Coin<${input.typeArguments[0]}>`,
                          elements: input.raiseCoins.map((coin) => tx.object(coin)),
                      }),
                      tx.pure.u64(input.raiseAmount),
                  ],
              });
    let result = tx.moveCall({
        target: `${config.package.safu}::safu::raise_fund`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.leaderboard),
            tx.object(config.registry.typus.user),
            tx.object(config.version.safu),
            tx.object(config.registry.safu.safu),
            tx.pure.u64(input.index),
            tx.object(raiseBalance),
            tx.pure.u64(input.raiseFromDeactivating),
            tx.pure.u64(input.raiseFromInactive),
            tx.pure.u64(input.raiseFromReward),
            tx.object(CLOCK),
        ],
    });
    // tx.transferObjects([tx.object(result[0])], input.user);

    return tx;
}

/**
    public fun reduce_fund_v2<D_TOKEN>(
        typus_version: &TypusVersion,
        typus_leaderboard_registry: &mut TypusLeaderboardRegistry,
        typus_user_registry: &mut TypusUserRegistry,
        version: &mut Version,
        registry: &mut Registry,
        index: u64,
        reduce_from_warmup: u64,
        reduce_from_active: u64,
        reduce_from_inactive: u64,
        coin: Coin<SUI>,
        clock: &Clock,
        ctx: &mut TxContext,
    ): Balance<D_TOKEN> {
 */
export function getReduceFundTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        reduceFromWarmup: string;
        reduceFromActive: string;
        reduceFromInactive: string;
        feeAmount: string;
        user: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.safu}::safu::reduce_fund_v2`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.leaderboard),
            tx.object(config.registry.typus.user),
            tx.object(config.version.safu),
            tx.object(config.registry.safu.safu),
            tx.pure.u64(input.index),
            tx.pure.u64(input.reduceFromWarmup),
            tx.pure.u64(input.reduceFromActive),
            tx.pure.u64(input.reduceFromInactive),
            tx.object(splitCoins(tx, tokenType.SUI, [], input.feeAmount)),
            tx.object(CLOCK),
        ],
    });
    tx.moveCall({
        target: `${config.package.framework}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [tx.object(result[0]), tx.pure.address(input.user)],
    });

    return tx;
}

/**
    public fun claim_reward<R_TOKEN>(
        version: &Version,
        registry: &mut Registry,
        index: u64,
        ctx: &TxContext,
    ): Balance<R_TOKEN> {
 */
export function getClaimRewardTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        user: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.safu}::safu::claim_reward`,
        typeArguments: input.typeArguments,
        arguments: [tx.object(config.version.safu), tx.object(config.registry.safu.safu), tx.pure.u64(input.index)],
    });
    tx.moveCall({
        target: `${config.package.framework}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [tx.object(result[0]), tx.pure.address(input.user)],
    });

    return tx;
}

/**
    public fun snapshot(
        typus_version: &TypusVersion,
        typus_leaderboard_registry: &mut TypusLeaderboardRegistry,
        typus_user_registry: &mut TypusUserRegistry,
        version: &Version,
        registry: &mut Registry,
        index: u64,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
 */
export function getSnapshotTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        index: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.safu}::safu::snapshot`,
        typeArguments: [],
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.leaderboard),
            tx.object(config.registry.typus.user),
            tx.object(config.version.safu),
            tx.object(config.registry.safu.safu),
            tx.pure.u64(input.index),
            tx.object(CLOCK),
        ],
    });

    return tx;
}
