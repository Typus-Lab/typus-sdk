import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";

const SENDER = "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
export async function getUserMetadata(input: {
    provider: SuiClient;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusUserRegistry: string;
    user: string;
}): Promise<string[]> {
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${input.typusPackageId}::user::get_user_metadata`,
        typeArguments: [],
        arguments: [
            transactionBlock.pure(input.typusEcosystemVersion),
            transactionBlock.pure(input.typusUserRegistry),
            transactionBlock.pure(input.user),
        ],
    });
    let results = (await input.provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock })).results;
    // console.log(JSON.stringify(results));
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    // console.log(JSON.stringify(bytes));
    let reader = new BcsReader(new Uint8Array(bytes));
    reader.readULEB();
    return reader.readVec((reader) => {
        return reader.read64();
    });
}
