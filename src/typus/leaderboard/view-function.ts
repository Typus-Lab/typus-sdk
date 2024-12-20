import { Transaction } from "@mysten/sui/transactions";
import { SuiClient } from "@mysten/sui/client";
import { BcsReader } from "@mysten/bcs";
import { AddressFromBytes, TypusConfig } from "src/utils";
import { SENDER } from "src/constants";

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
    input: {
        key: string;
        id: string;
        ranks: number;
        user: string;
        active: boolean;
    }
): Promise<Rankings> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    transaction.moveCall({
        target: `${config.package.typus}::leaderboard::get_rankings`,
        typeArguments: [],
        arguments: [
            transaction.object(config.version.typus),
            transaction.object(config.registry.typus.leaderboard),
            transaction.pure.string(input.key),
            transaction.pure.address(input.id),
            transaction.pure.u64(input.ranks),
            transaction.pure.address(input.user),
            transaction.pure.bool(input.active),
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
