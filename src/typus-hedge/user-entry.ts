import { Transaction, TransactionObjectArgument } from "@mysten/sui/transactions";
import { CLOCK, tokenType } from "src/constants";
import { TypusConfig, splitCoin } from "src/utils";

/**
    public fun raise_fund<MAIN_TOKEN, HEDGE_TOKEN>(
        typus_version: &mut TypusVersion,
        typus_leaderboard_registry: &mut TypusLeaderboardRegistry,
        typus_user_registry: &mut TypusUserRegistry,
        version: &Version,
        registry: &mut Registry,
        index: u64,
        raise_main_token_balance: Balance<MAIN_TOKEN>,
        raise_hedge_token_balance: Balance<HEDGE_TOKEN>,
        raise_main_token_from_deactivating: u64,
        raise_hedge_token_from_deactivating: u64,
        raise_main_token_from_inactive: u64,
        raise_hedge_token_from_inactive: u64,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
 */
export function raiseFund(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        raiseMainCoins: string[];
        raiseMainAmount: string;
        raiseHedgeCoins: string[];
        raiseHedgeAmount: string;
        raiseMainFromDeactivating: string;
        raiseHedgeFromDeactivating: string;
        raiseMainFromInactive: string;
        raiseHedgeFromInactive: string;
    }
) {
    let mainCoin = splitCoin(tx, input.typeArguments[0], input.raiseMainCoins, input.raiseMainAmount, config.sponsored);
    let hedgeCoin = splitCoin(tx, input.typeArguments[1], input.raiseHedgeCoins, input.raiseHedgeAmount, config.sponsored);
    let mainBalance = tx.moveCall({
        target: `0x2::coin::into_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [tx.object(mainCoin)],
    });
    let hedgeBalance = tx.moveCall({
        target: `0x2::coin::into_balance`,
        typeArguments: [input.typeArguments[1]],
        arguments: [tx.object(hedgeCoin)],
    });
    tx.moveCall({
        target: `${config.package.hedge.hedge}::typus_hedge::raise_fund`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.leaderboard),
            tx.object(config.registry.typus.user),
            tx.object(config.version.hedge.hedge),
            tx.object(config.registry.hedge.hedge),
            tx.pure.u64(input.index),
            tx.object(mainBalance),
            tx.object(hedgeBalance),
            tx.pure.u64(input.raiseMainFromDeactivating),
            tx.pure.u64(input.raiseHedgeFromDeactivating),
            tx.pure.u64(input.raiseMainFromInactive),
            tx.pure.u64(input.raiseHedgeFromInactive),
            tx.object(CLOCK),
        ],
    });
}

/**
    public fun reduce_fund<MAIN_TOKEN, HEDGE_TOKEN>(
        typus_version: &mut TypusVersion,
        typus_leaderboard_registry: &mut TypusLeaderboardRegistry,
        typus_user_registry: &mut TypusUserRegistry,
        version: &mut Version,
        registry: &mut Registry,
        index: u64,
        reduce_main_token_from_warmup: u64,
        reduce_hedge_token_from_warmup: u64,
        reduce_main_token_from_active: u64,
        reduce_hedge_token_from_active: u64,
        reduce_from_inactive: bool,
        fee: Balance<SUI>,
        clock: &Clock,
        ctx: &mut TxContext,
    ): (Balance<MAIN_TOKEN>, Balance<HEDGE_TOKEN>) {
 */
export function reduceFund(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        reduceMainFromWarmup: string;
        reduceHedgeFromWarmup: string;
        reduceMainFromActive: string;
        reduceHedgeFromActive: string;
        reduceFromInactive: boolean;
        feeAmount: string;
        user: string;
    }
) {
    let [feeCoin] = tx.splitCoins(tx.gas, [tx.pure.u64(input.feeAmount)]);
    let feeBalance = tx.moveCall({
        target: `0x2::coin::into_balance`,
        typeArguments: [tokenType["MAINNET"].SUI],
        arguments: [tx.object(feeCoin)],
    });
    let result = tx.moveCall({
        target: `${config.package.hedge.hedge}::typus_hedge::reduce_fund`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.leaderboard),
            tx.object(config.registry.typus.user),
            tx.object(config.version.hedge.hedge),
            tx.object(config.registry.hedge.hedge),
            tx.pure.u64(input.index),
            tx.pure.u64(input.reduceMainFromWarmup),
            tx.pure.u64(input.reduceHedgeFromWarmup),
            tx.pure.u64(input.reduceMainFromActive),
            tx.pure.u64(input.reduceHedgeFromActive),
            tx.pure.bool(input.reduceFromInactive),
            tx.object(feeBalance),
            tx.object(CLOCK),
        ],
    });
    tx.moveCall({
        target: `${config.package.framework}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [tx.object(result[0]), tx.pure.address(input.user)],
    });
    tx.moveCall({
        target: `${config.package.framework}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[1]],
        arguments: [tx.object(result[1]), tx.pure.address(input.user)],
    });
}

/**
    public fun snapshot(
        typus_version: &TypusVersion,
        typus_leaderboard_registry: &mut TypusLeaderboardRegistry,
        typus_user_registry: &mut TypusUserRegistry,
        version: &mut Version,
        registry: &mut Registry,
        index: u64,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
 */
export function snapshot(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        receipts: string[] | TransactionObjectArgument[];
        user: string;
    }
) {
    tx.moveCall({
        target: `${config.package.hedge.hedge}::typus_hedge::snapshot`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.leaderboard),
            tx.object(config.registry.typus.user),
            tx.object(config.version.hedge.hedge),
            tx.object(config.registry.hedge.hedge),
            tx.pure.u64(input.index),
            tx.object(CLOCK),
        ],
    });
}
