import { TransactionBlock } from "@mysten/sui.js/transactions";
export declare function getClaimAirdropTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusAirdropRegistry: string;
    typeArguments: string[];
    key: string;
    user: string;
}): TransactionBlock;
