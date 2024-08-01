import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../constants";
import { TypusConfig } from "src/utils";

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
    input: {
        tx: TransactionBlock;
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
            ? input.tx.moveCall({
                  target: `${config.package.framework}::utils::delegate_extract_balance`,
                  typeArguments: [input.typeArguments[0]],
                  arguments: [
                      input.tx.pure(input.user),
                      input.tx.makeMoveVec({
                          type: `0x2::coin::Coin<${input.typeArguments[0]}>`,
                          objects: [input.tx.splitCoins(input.tx.gas, [input.tx.pure(input.raiseAmount)])],
                      }),
                      input.tx.pure(input.raiseAmount),
                  ],
              })
            : input.tx.moveCall({
                  target: `${config.package.framework}::utils::delegate_extract_balance`,
                  typeArguments: [input.typeArguments[0]],
                  arguments: [
                      input.tx.pure(input.user),
                      input.tx.makeMoveVec({
                          type: `0x2::coin::Coin<${input.typeArguments[0]}>`,
                          objects: input.raiseCoins.map((coin) => input.tx.object(coin)),
                      }),
                      input.tx.pure(input.raiseAmount),
                  ],
              });
    let result = input.tx.moveCall({
        target: `${config.package.safu}::safu::raise_fund`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(config.version.typus),
            input.tx.object(config.registry.typus.leaderboard),
            input.tx.object(config.registry.typus.user),
            input.tx.object(config.version.safu),
            input.tx.object(config.registry.safu.safu),
            input.tx.pure(input.index),
            input.tx.object(raiseBalance),
            input.tx.pure(input.raiseFromDeactivating),
            input.tx.pure(input.raiseFromInactive),
            input.tx.pure(input.raiseFromReward),
            input.tx.object(CLOCK),
        ],
    });
    input.tx.transferObjects([input.tx.object(result[0])], input.user);

    return input.tx;
}

/**
    public fun reduce_fund<D_TOKEN>(
        typus_version: &TypusVersion,
        typus_leaderboard_registry: &mut TypusLeaderboardRegistry,
        typus_user_registry: &mut TypusUserRegistry,
        version: &Version,
        registry: &mut Registry,
        index: u64,
        reduce_from_warmup: u64,
        reduce_from_active: u64,
        reduce_from_inactive: u64,
        clock: &Clock,
        ctx: &mut TxContext,
    ): Balance<D_TOKEN> {
 */
export function getReduceFundTx(
    config: TypusConfig,
    input: {
        tx: TransactionBlock;
        typeArguments: string[];
        index: string;
        reduceFromWarmup: string;
        reduceFromActive: string;
        reduceFromInactive: boolean;
        user: string;
    }
) {
    let result = input.tx.moveCall({
        target: `${config.package.safu}::safu::reduce_fund`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(config.version.typus),
            input.tx.object(config.registry.typus.leaderboard),
            input.tx.object(config.registry.typus.user),
            input.tx.object(config.version.safu),
            input.tx.object(config.registry.safu.safu),
            input.tx.pure(input.index),
            input.tx.pure(input.reduceFromWarmup),
            input.tx.pure(input.reduceFromActive),
            input.tx.pure(input.reduceFromInactive),
            input.tx.object(CLOCK),
        ],
    });
    input.tx.moveCall({
        target: `${config.package.framework}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
    });

    return input.tx;
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
    input: {
        tx: TransactionBlock;
        typeArguments: string[];
        index: string;
        user: string;
    }
) {
    let result = input.tx.moveCall({
        target: `${config.package.safu}::safu::claim_reward`,
        typeArguments: input.typeArguments,
        arguments: [input.tx.object(config.version.safu), input.tx.object(config.registry.safu.safu), input.tx.pure(input.index)],
    });
    input.tx.moveCall({
        target: `${config.package.framework}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
    });

    return input.tx;
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
    input: {
        tx: TransactionBlock;
        typeArguments: string[];
        index: string;
    }
) {
    let result = input.tx.moveCall({
        target: `${config.package.safu}::safu::snapshot`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(config.version.typus),
            input.tx.object(config.registry.typus.leaderboard),
            input.tx.object(config.registry.typus.user),
            input.tx.object(config.version.safu),
            input.tx.object(config.registry.safu.safu),
            input.tx.pure(input.index),
            input.tx.object(CLOCK),
        ],
    });

    return input.tx;
}
