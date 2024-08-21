import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";
import { TypusConfig } from "src/utils";

const SENDER = "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
export async function getUserMetadata(
    config: TypusConfig,
    input: {
        provider: SuiClient;
        user: string;
    }
): Promise<string[]> {
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.package.typus}::user::get_user_metadata`,
        typeArguments: [],
        arguments: [
            transactionBlock.pure(config.version.typus),
            transactionBlock.pure(config.registry.typus.user),
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
