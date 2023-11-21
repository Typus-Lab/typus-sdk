import { TransactionBlock } from "@mysten/sui.js";

export async function getSetProfitSharingTx(
    gasBudget: number,
    packageId: string,
    registry: string,
    level_profits: number[],
    amount: number
) {
    let tx = new TransactionBlock();

    let [coin] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
    tx.moveCall({
        target: `${packageId}::tails_staking::set_profit_sharing`,
        typeArguments: ["0x2::sui::SUI"],
        arguments: [tx.object(registry), tx.pure(level_profits), coin],
    });

    tx.setGasBudget(gasBudget);
    return tx;
}

export async function getAllocateProfitSharingTx(gasBudget: number, packageId: string, registry: string, users: string[]) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${packageId}::tails_staking::allocate_profit_sharing`,
        typeArguments: ["0x2::sui::SUI"],
        arguments: [tx.object(registry), tx.pure(users)],
    });

    tx.setGasBudget(gasBudget);
    return tx;
}

export async function getClaimProfitSharingTx(gasBudget: number, packageId: string, registry: string) {
    let tx = new TransactionBlock();

    tx.moveCall({
        target: `${packageId}::tails_staking::claim_profit_sharing`,
        typeArguments: ["0x2::sui::SUI"],
        arguments: [tx.object(registry)],
    });

    tx.setGasBudget(gasBudget);
    return tx;
}
