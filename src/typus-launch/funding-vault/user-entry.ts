import { Transaction } from "@mysten/sui/transactions";
import { CLOCK } from "src/constants";
import { splitCoin, TypusConfig } from "src/utils";

/**
    public fun raise_fund<TOKEN>(
        version: &Version,
        registry: &mut Registry,
        index: u64,
        coin: Coin<TOKEN>,
        clock: &Clock,
        ctx: &TxContext,
    ) {
*/
export function raiseFund(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        coins: string[];
        amount: string;
    }
) {
    let coin = splitCoin(tx, input.typeArguments[0], input.coins, input.amount);
    tx.moveCall({
        target: `${config.package.launch.fundingVault}::funding_vault::raise_fund`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.launch.fundingVault),
            tx.object(config.registry.launch.fundingVault),
            tx.pure.u64(input.index),
            coin,
            tx.object(CLOCK),
        ],
    });
}
/**
    public fun reduce_fund<TOKEN>(
        version: &mut Version,
        registry: &mut Registry,
        index: u64,
        mut reduce_from_fund: u64,
        reduce_from_refund: bool,
        clock: &Clock,
        ctx: &mut TxContext,
    ): Balance<TOKEN> {
*/
export function reduceFund(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        reduceFromFund: string;
        reduceFromRefund: boolean;
        user: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.launch.fundingVault}::funding_vault::reduce_fund`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.launch.fundingVault),
            tx.object(config.registry.launch.fundingVault),
            tx.pure.u64(input.index),
            tx.pure.u64(input.reduceFromFund),
            tx.pure.bool(input.reduceFromRefund),
            tx.object(CLOCK),
        ],
    });
    tx.transferObjects([result[0]], input.user);
}
