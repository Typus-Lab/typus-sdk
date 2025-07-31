import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig, splitCoin } from "src/utils";

/**
    entry fun set_airdrop<TOKEN>(
        version: &Version,
        registry: &mut Registry,
        key: String,
        coin: Coin<TOKEN>,
        users: vector<address>,
        values: vector<u64>,
        ctx: &mut TxContext,
    ) {
*/
export async function setAirdrop(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        key: string;
        coins: string[];
        amount: string;
        users: string[];
        values: string[];
    }
) {
    tx.moveCall({
        target: `${config.package.launch.airdrop}::airdrop::set_airdrop`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.launch.airdrop),
            tx.object(config.registry.launch.airdrop),
            tx.pure.string(input.key),
            tx.object(splitCoin(tx, input.typeArguments[0], input.coins, input.amount)),
            tx.pure.vector("address", input.users),
            tx.pure.vector("u64", input.values),
        ],
    });
}

/**
    entry fun remove_airdrop<TOKEN>(
        version: &Version,
        registry: &mut Registry,
        key: String,
        ctx: &mut TxContext,
    ) {
*/
export async function removeAirdrop(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        key: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.airdrop}::airdrop::remove_airdrop`,
        typeArguments: input.typeArguments,
        arguments: [tx.object(config.version.launch.airdrop), tx.object(config.registry.launch.airdrop), tx.pure.string(input.key)],
    });
}
