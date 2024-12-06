import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";
import { SENDER } from "src/constants";
import { AddressFromBytes, TypusConfig } from "src/utils";

export interface VeTypus {
    id: string;
    balance: string;
    lockUpPeriod: string;
    createTsMs: string;
    updateTsMs: string;
}
export async function getVeTypus(
    config: TypusConfig,
    input: {
        user: string;
    }
): Promise<VeTypus[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.package.launch.veTypus}::ve_typus::get_ve_typus_bcs`,
        arguments: [transactionBlock.object(config.registry.launch.veTypus), transactionBlock.pure(input.user)],
    });
    // @ts-ignore
    let bytes = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock })).results[0].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    reader.readULEB();
    return reader.readVec((reader) => {
        reader.readULEB();
        return {
            id: AddressFromBytes(reader.readBytes(32)),
            balance: reader.read64(),
            lockUpPeriod: reader.read64(),
            createTsMs: reader.read64(),
            updateTsMs: reader.read64(),
        } as VeTypus;
    });
}

export interface VeTypusInfo {
    veTypusAmount: string;
    veTypus: VeTypus[];
    totalVeTypusAmount: string;
    totalStakedTypusAmount: string;
    averageLockUpTime: string;
}
export async function fetchVeTypusInfo(
    config: TypusConfig,
    input: {
        user: string;
        tsMs: string;
    }
): Promise<VeTypusInfo> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.package.launch.veTypus}::ve_typus::get_ve_typus_bcs`,
        arguments: [transactionBlock.object(config.registry.launch.veTypus), transactionBlock.pure(input.user)],
    });
    transactionBlock.moveCall({
        target: `${config.package.launch.veTypus}::ve_typus::get_ve_typus`,
        arguments: [
            transactionBlock.object(config.registry.launch.veTypus),
            transactionBlock.pure(input.user),
            transactionBlock.pure(input.tsMs),
        ],
    });
    transactionBlock.moveCall({
        target: `${config.package.launch.veTypus}::ve_typus::get_report`,
        arguments: [transactionBlock.object(config.registry.launch.veTypus), transactionBlock.pure(input.tsMs)],
    });
    let results = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock })).results;
    // @ts-ignore
    let reader = new BcsReader(new Uint8Array(results[0].returnValues[0][0]));
    reader.readULEB();
    let veTypus = reader.readVec((reader) => {
        reader.readULEB();
        return {
            id: AddressFromBytes(reader.readBytes(32)),
            balance: reader.read64(),
            lockUpPeriod: reader.read64(),
            createTsMs: reader.read64(),
            updateTsMs: reader.read64(),
        } as VeTypus;
    });
    // @ts-ignore
    reader = new BcsReader(new Uint8Array(results[1].returnValues[0][0]));
    let veTypusAmount = reader.read64();
    // @ts-ignore
    reader = new BcsReader(new Uint8Array(results[2].returnValues[0][0]));
    reader.readULEB();
    let totalVeTypusAmount = reader.read64();
    let totalStakedTypusAmount = reader.read64();
    let averageLockUpTime = (
        (BigInt(totalVeTypusAmount) * BigInt(4 * 365 * 24 * 60 * 60 * 1000)) /
        BigInt(totalStakedTypusAmount)
    ).toString();
    return {
        veTypusAmount,
        veTypus,
        totalVeTypusAmount,
        totalStakedTypusAmount,
        averageLockUpTime,
    };
}
