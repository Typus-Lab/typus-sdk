import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";

export const SENDER = "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
export async function getAirdrop(input: {
    provider: SuiClient;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusAirdropRegistry: string;
    key: string;
    user: string;
}): Promise<string[]> {
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${input.typusPackageId}::airdrop::get_airdrop`,
        typeArguments: [],
        arguments: [
            transactionBlock.pure(input.typusEcosystemVersion),
            transactionBlock.pure(input.typusAirdropRegistry),
            transactionBlock.pure(input.key),
            transactionBlock.pure(input.user),
        ],
    });
    let results = (await input.provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock })).results;
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    return reader.readVec((reader) => {
        return reader.read64();
    });
}
