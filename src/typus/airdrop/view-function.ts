import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";
import { TypusConfig } from "src/utils";
import { SENDER } from "src/constants";

export async function getAirdrop(
    config: TypusConfig,
    input: {
        key: string;
        user: string;
    }
): Promise<string[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.package.typus}::airdrop::get_airdrop`,
        typeArguments: [],
        arguments: [
            transactionBlock.pure(config.version.typus),
            transactionBlock.pure(config.registry.typus.airdrop),
            transactionBlock.pure(input.key),
            transactionBlock.pure(input.user),
        ],
    });
    let results = (
        await provider.devInspectTransactionBlock({
            sender: SENDER,
            transactionBlock,
        })
    ).results;
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    return reader.readVec((reader) => {
        return reader.read64();
    });
}
