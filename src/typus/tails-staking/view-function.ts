import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";
import { AddressFromBytes, TypusConfig } from "src/utils";
import { SENDER } from "src/constants";

export interface StakingInfo {
    user: string;
    tails: string[];
    profits: string[];
    u64Padding: string[];
}
export async function getStakingInfo(
    config: TypusConfig,
    input: {
        user: string;
    }
): Promise<StakingInfo> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.package.typus}::tails_staking::get_staking_info`,
        typeArguments: [],
        arguments: [
            transactionBlock.pure(config.version.typus),
            transactionBlock.pure(config.registry.typus.tailsStaking),
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
    let length = reader.readULEB();
    if (length > 0) {
        return {
            user: AddressFromBytes(reader.readBytes(32)),
            tails: reader.readVec((reader) => {
                return reader.read64();
            }),
            profits: reader.readVec((reader) => {
                return reader.read64();
            }),
            u64Padding: reader.readVec((reader) => {
                return reader.read64();
            }),
        } as StakingInfo;
    } else {
        return {
            user: input.user,
            tails: [],
            profits: [],
            u64Padding: ["0"],
        } as StakingInfo;
    }
}

export async function getLevelCounts(config: TypusConfig): Promise<number[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.package.typus}::tails_staking::get_level_counts`,
        typeArguments: [],
        arguments: [transactionBlock.pure(config.version.typus), transactionBlock.pure(config.registry.typus.tailsStaking)],
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
        return Number.parseInt(reader.read64());
    });
}
