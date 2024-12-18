import { TransactionBlock } from "@mysten/sui.js/transactions";
import { isSUI } from "src/_dependencies/source/0x2/sui/structs";
import { TypusConfig } from "src/utils";

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
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        key: string;
        coins: string[];
        amount: string;
        users: string[];
        values: string[];
    }
) {
    let [coin] = isSUI(input.typeArguments[0])
        ? tx.splitCoins(tx.gas, [tx.pure(input.amount)])
        : (() => {
              let coin = input.coins.pop()!;
              if (input.coins.length > 0) {
                  tx.mergeCoins(
                      tx.object(coin),
                      input.coins.map((id) => tx.object(id))
                  );
              }
              return tx.splitCoins(tx.object(coin), [tx.pure(input.amount)]);
          })();
    tx.moveCall({
        target: `${config.package.launch.airdrop}::airdrop::set_airdrop`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.launch.airdrop),
            tx.object(config.registry.launch.airdrop),
            tx.pure(input.key),
            tx.object(coin),
            tx.pure(input.users),
            tx.pure(input.values),
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
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        key: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.airdrop}::airdrop::remove_airdrop`,
        typeArguments: input.typeArguments,
        arguments: [tx.object(config.version.launch.airdrop), tx.object(config.registry.launch.airdrop), tx.pure(input.key)],
    });
}
