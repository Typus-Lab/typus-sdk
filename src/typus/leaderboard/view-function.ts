import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";
import { AddressFromBytes, TypusConfig } from "src/utils";

export interface Rankings {
    user_score: string;
    leaderboard: Ranks[];
}
export interface Ranks {
    score: string;
    users: string[];
}
export async function getRankings(
    config: TypusConfig,
    provider: SuiClient,
    input: {
        key: string;
        id: string;
        ranks: number;
        user: string;
        active: boolean;
    }
): Promise<Rankings> {
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.package.typus}::leaderboard::get_rankings`,
        typeArguments: [],
        arguments: [
            transactionBlock.pure(config.version.typus),
            transactionBlock.pure(config.registry.typus.leaderboard),
            transactionBlock.pure(input.key),
            transactionBlock.pure(input.id),
            transactionBlock.pure(input.ranks),
            transactionBlock.pure(input.user),
            transactionBlock.pure(input.active),
        ],
    });
    let results = (
        await provider.devInspectTransactionBlock({
            sender: "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            transactionBlock,
        })
    ).results;
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    let result = reader.readVec((reader, i) => {
        if (i == 0) {
            reader.readULEB();
            return reader.read64();
        } else {
            reader.readULEB();
            return {
                score: reader.read64(),
                users: reader.readVec((reader) => {
                    return AddressFromBytes(reader.readBytes(32));
                }),
            };
        }
    });
    return {
        user_score: result[0],
        leaderboard: result.slice(1),
    } as Rankings;
}
