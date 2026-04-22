import { Transaction } from "@mysten/sui/transactions";
import { SuiGrpcClient } from "@mysten/sui/grpc";
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
    const provider = config.gRpcClient();
    let transaction = new Transaction();
    transaction.moveCall({
        target: `${config.package.typus}::tails_staking::get_staking_info`,
        typeArguments: [],
        arguments: [
            transaction.object(config.version.typus),
            transaction.object(config.registry.typus.tailsStaking),
            transaction.pure.address(input.user),
        ],
    });
    let results = (
        await provider.simulateTransaction({
            transaction,
        })
    ).commandResults;
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0].bcs;
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
    const provider = config.gRpcClient();
    let transaction = new Transaction();
    transaction.moveCall({
        target: `${config.package.typus}::tails_staking::get_level_counts`,
        typeArguments: [],
        arguments: [transaction.object(config.version.typus), transaction.object(config.registry.typus.tailsStaking)],
    });
    let results = (
        await provider.simulateTransaction({
            transaction,
            checksEnabled: false,
            include: { commandResults: true },
        })
    ).commandResults;
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0].bcs;
    let reader = new BcsReader(new Uint8Array(bytes));
    return reader.readVec((reader) => {
        return Number.parseInt(reader.read64());
    });
}
