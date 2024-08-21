import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

/**
    public fun remove_airdrop<TOKEN>(
        version: &Version,
        typus_airdrop_registry: &mut TypusAirdropRegistry,
        key: String,
        ctx: &mut TxContext,
    ): Balance<TOKEN>
*/
export async function getRemoveAirdropTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        key: string;
        sender: string;
    }
) {
    const balance = tx.moveCall({
        target: `${config.package.typus}::airdrop::remove_airdrop`,
        typeArguments: input.typeArguments,
        arguments: [tx.object(config.version.typus), tx.object(config.registry.typus.airdrop), tx.object(input.key)],
    });
    const coin = tx.moveCall({
        target: `0x2::coin::from_balance`,
        typeArguments: input.typeArguments,
        arguments: [balance],
    });
    tx.transferObjects([coin], input.sender);

    return tx;
}

/**
    public fun set_airdrop<TOKEN>(
        version: &Version,
        typus_airdrop_registry: &mut TypusAirdropRegistry,
        key: String,
        mut coins: vector<Coin<TOKEN>>,
        mut users: vector<address>,
        mut values: vector<u64>,
        ctx: &mut TxContext,
    )
*/
export async function getSetAirdropTx(
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
    if (
        input.typeArguments[0] == "0x2::sui::SUI" ||
        input.typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"
    ) {
        let [coin] = tx.splitCoins(tx.gas, [tx.pure(input.amount)]);
        tx.moveCall({
            target: `${config.package.typus}::airdrop::set_airdrop`,
            typeArguments: input.typeArguments,
            arguments: [
                tx.object(config.version.typus),
                tx.object(config.registry.typus.airdrop),
                tx.object(input.key),
                tx.makeMoveVec({ objects: [coin] }),
                tx.pure(input.users),
                tx.pure(input.values),
            ],
        });
    } else {
        tx.moveCall({
            target: `${config.package.typus}::airdrop::set_airdrop`,
            typeArguments: input.typeArguments,
            arguments: [
                tx.object(config.version.typus),
                tx.object(config.registry.typus.airdrop),
                tx.object(input.key),
                tx.makeMoveVec({ objects: input.coins.map((id) => tx.object(id)) }),
                tx.pure(input.users),
                tx.pure(input.values),
            ],
        });
    }

    return tx;
}
