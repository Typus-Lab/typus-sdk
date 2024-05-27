import { TransactionBlock } from "@mysten/sui.js/transactions";

/**
    public fun claim_profit_sharing<TOKEN>(
        version: &mut Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        ctx: &mut TxContext,
    ): Balance<TOKEN>
*/
export async function getClaimProfitSharingTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    typeArguments: string[];
    user: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::claim_profit_sharing`,
        typeArguments: input.typeArguments,
        arguments: [input.tx.object(input.typusEcosystemVersion), input.tx.object(input.typusTailsStakingRegistry)],
    });
    input.tx.moveCall({
        target: `${input.typusPackageId}::utility::transfer_balance`,
        typeArguments: input.typeArguments,
        arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
    });

    return input.tx;
}
