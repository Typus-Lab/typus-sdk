import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";
import { AddressFromBytes } from "../tools";

export const SENDER = "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
export async function getRankings(input: {
    provider: SuiClient;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusLeaderboardRegistry: string;
    key: string;
    id: string;
    ranks: number;
    user: string;
    active: boolean;
}) {
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${input.typusPackageId}::leaderboard::get_rankings`,
        typeArguments: [],
        arguments: [
            transactionBlock.pure(input.typusEcosystemVersion),
            transactionBlock.pure(input.typusLeaderboardRegistry),
            transactionBlock.pure(input.key),
            transactionBlock.pure(input.id),
            transactionBlock.pure(input.ranks),
            transactionBlock.pure(input.user),
            transactionBlock.pure(input.active),
        ],
    });
    let results = (await input.provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock })).results;
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
    console.log(result);
}
