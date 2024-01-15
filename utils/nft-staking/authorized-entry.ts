import { TransactionBlock } from "@mysten/sui.js/transactions";

export async function getSetProfitSharingTx(
    gasBudget: number,
    packageId: string,
    registry: string,
    level_profits: number[],
    amount: number,
    coins: string[],
    typeArguments: string[]
) {
    let tx = new TransactionBlock();

    if (
        typeArguments[0] == "0x2::sui::SUI" ||
        typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"
    ) {
        let [input_coin] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
        tx.moveCall({
            target: `${packageId}::tails_staking::set_profit_sharing`,
            typeArguments,
            arguments: [tx.object(registry), tx.pure(level_profits), input_coin],
        });
    } else {
        const coin = coins.pop()!;

        if (coins.length > 0) {
            tx.mergeCoins(
                tx.object(coin),
                coins.map((id) => tx.object(id))
            );
        }

        let [input_coin] = tx.splitCoins(tx.object(coin), [tx.pure(amount)]);

        tx.moveCall({
            target: `${packageId}::tails_staking::set_profit_sharing`,
            typeArguments,
            arguments: [tx.object(registry), tx.pure(level_profits), input_coin],
        });
    }

    tx.setGasBudget(gasBudget);
    return tx;
}

export async function getAllocateProfitSharingTx(
    gasBudget: number,
    packageId: string,
    registry: string,
    users: string[],
    typeArguments: string[]
) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${packageId}::tails_staking::allocate_profit_sharing`,
        typeArguments,
        arguments: [tx.object(registry), tx.pure(users)],
    });

    tx.setGasBudget(gasBudget);
    return tx;
}

export async function getRemoveProfitSharingTx(gasBudget: number, packageId: string, registry: string, typeArgumentsRemove: string[]) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${packageId}::tails_staking::remove_profit_sharing`,
        typeArguments: typeArgumentsRemove,
        arguments: [tx.object(registry)],
    });

    tx.setGasBudget(gasBudget);
    return tx;
}
