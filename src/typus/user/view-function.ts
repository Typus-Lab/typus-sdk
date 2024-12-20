import { Transaction } from "@mysten/sui/transactions";
import { SuiClient } from "@mysten/sui/client";
import { BcsReader } from "@mysten/bcs";
import { TypusConfig } from "src/utils";
import { SENDER } from "src/constants";

export async function getUserMetadata(
    config: TypusConfig,
    input: {
        user: string;
    }
): Promise<string[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    transaction.moveCall({
        target: `${config.package.typus}::user::get_user_metadata`,
        typeArguments: [],
        arguments: [
            transaction.object(config.version.typus),
            transaction.object(config.registry.typus.user),
            transaction.pure.address(input.user),
        ],
    });
    let results = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock: transaction })).results;
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
