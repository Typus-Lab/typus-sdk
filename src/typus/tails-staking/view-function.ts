import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";
import { AddressFromBytes } from "../../utils";

export interface StakingInfo {
    user: string;
    tails: string[];
    profits: string[];
    u64Padding: string[];
}
export async function getStakingInfo(input: {
    provider: SuiClient;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    user: string;
}): Promise<StakingInfo> {
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${input.typusPackageId}::tails_staking::get_staking_info`,
        typeArguments: [],
        arguments: [
            transactionBlock.pure(input.typusEcosystemVersion),
            transactionBlock.pure(input.typusTailsStakingRegistry),
            transactionBlock.pure(input.user),
        ],
    });
    let results = (
        await input.provider.devInspectTransactionBlock({
            sender: "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
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

export async function getLevelCounts(input: {
    provider: SuiClient;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
}): Promise<number[]> {
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${input.typusPackageId}::tails_staking::get_level_counts`,
        typeArguments: [],
        arguments: [transactionBlock.pure(input.typusEcosystemVersion), transactionBlock.pure(input.typusTailsStakingRegistry)],
    });
    let results = (
        await input.provider.devInspectTransactionBlock({
            sender: "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
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
