import { Transaction } from "@mysten/sui/transactions";
import { SuiClient } from "@mysten/sui/client";
import { BcsReader } from "@mysten/bcs";
import { TypusConfig } from "src/utils";
import { SENDER } from "src/constants";

export async function getAirdrop(
    config: TypusConfig,
    input: {
        typeArguments: string[];
        key: string;
        user: string;
    }
): Promise<string[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    transaction.moveCall({
        target: `${config.package.typus}::airdrop::get_airdrop`,
        typeArguments: input.typeArguments,
        arguments: [
            transaction.object(config.version.typus),
            transaction.object(config.registry.typus.airdrop),
            transaction.pure.string(input.key),
            transaction.pure.address(input.user),
        ],
    });
    let results = (
        await provider.devInspectTransactionBlock({
            sender: SENDER,
            transactionBlock: transaction,
        })
    ).results;
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    return reader.readVec((reader) => {
        return reader.read64();
    });
}
