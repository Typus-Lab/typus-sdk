import { TransactionBlock } from "@mysten/sui.js/transactions";

export function getClaimAirdropTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusAirdropRegistry: string;
    typeArguments: string[];
    key: string;
    user: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::airdrop::claim_airdrop`,
        typeArguments: input.typeArguments,
        arguments: [input.tx.object(input.typusEcosystemVersion), input.tx.object(input.typusAirdropRegistry), input.tx.pure(input.key)],
    });
    input.tx.moveCall({
        target: `${input.typusPackageId}::utility::transfer_balance_opt`,
        typeArguments: [input.typeArguments[0]],
        arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
    });

    return input.tx;
}
