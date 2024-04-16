import { TransactionBlock } from "@mysten/sui.js/transactions";

/**
    public fun remove_airdrop<TOKEN>(
        version: &Version,
        typus_airdrop_registry: &mut TypusAirdropRegistry,
        key: String,
        ctx: &mut TxContext,
    ): Balance<TOKEN>
*/
export async function getRemoveAirdropTx(
    gasBudget: number,
    packageId: string,
    version: string,
    typusLeaderboardRegistry: string,
    key: string,
    typeArguments: string[],
    sender: string
) {
    let tx = new TransactionBlock();

    const balance = tx.moveCall({
        target: `${packageId}::airdrop::remove_airdrop`,
        typeArguments,
        arguments: [tx.object(version), tx.object(typusLeaderboardRegistry), tx.object(key)],
    });

    const coin = tx.moveCall({
        target: `0x2::coin::from_balance`,
        typeArguments,
        arguments: [balance],
    });

    tx.transferObjects([coin], sender);

    tx.setGasBudget(gasBudget);

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
    gasBudget: number,
    packageId: string,
    version: string,
    typusLeaderboardRegistry: string,
    key: string,
    coins: string[],
    amount: string,
    users: string[],
    values: string[],
    typeArguments: string[]
) {
    let tx = new TransactionBlock();

    if (
        typeArguments[0] == "0x2::sui::SUI" ||
        typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"
    ) {
        let [coin] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
        tx.moveCall({
            target: `${packageId}::airdrop::set_airdrop`,
            typeArguments,
            arguments: [
                tx.object(version),
                tx.object(typusLeaderboardRegistry),
                tx.object(key),
                tx.makeMoveVec({ objects: [coin] }),
                tx.pure(users),
                tx.pure(values),
            ],
        });
    } else {
        tx.moveCall({
            target: `${packageId}::airdrop::set_airdrop`,
            typeArguments,
            arguments: [
                tx.object(version),
                tx.object(typusLeaderboardRegistry),
                tx.object(key),
                tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }),
                tx.pure(users),
                tx.pure(values),
            ],
        });
    }

    tx.setGasBudget(gasBudget);

    return tx;
}
