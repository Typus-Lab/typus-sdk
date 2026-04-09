import { Transaction } from "@mysten/sui/transactions";
import { SuiGrpcClient } from "@mysten/sui/grpc";
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
    const provider = config.gRpcClient();
    let transaction = new Transaction();
    transaction.moveCall({
        target: `${config.package.launch.veTypus}::ve_typus::get_ve_typus_bcs`,
        arguments: [transaction.object(config.registry.launch.veTypus), transaction.pure.address(input.user)],
    });
    let devInspectTransactionBlockResult = await provider.simulateTransaction({ transaction });
    // @ts-ignore
    let bytes = devInspectTransactionBlockResult.commandResults[0].returnValues[0].bcs;
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

export interface VeTypusReport {
    totalVeTypusAmount: string;
    totalStakedTypusAmount: string;
}
export async function getReports(
    config: TypusConfig,
    input: {
        tsMss: string[];
    }
): Promise<VeTypusReport[]> {
    const provider = config.gRpcClient();
    let transaction = new Transaction();
    input.tsMss.forEach((tsMs) => {
        transaction.moveCall({
            target: `${config.package.launch.veTypus}::ve_typus::get_report`,
            arguments: [transaction.object(config.registry.launch.veTypus), transaction.pure.u64(tsMs)],
        });
    });
    let results = (await provider.simulateTransaction({ transaction, checksEnabled: false, include: { commandResults: true } }))
        .commandResults;
    // @ts-ignore
    return results?.map((result) => {
        // @ts-ignore
        let reader = new BcsReader(new Uint8Array(result.returnValues[0].bcs));
        reader.readULEB();
        return {
            totalVeTypusAmount: reader.read64(),
            totalStakedTypusAmount: reader.read64(),
        } as VeTypusReport;
    });
}

export interface VeTypusInfo {
    totalVeTypusAmount: string;
    totalStakedTypusAmount: string;
    averageLockUpTime: string;
    veTypusAmount: string;
    veTypus: VeTypus[];
}
export async function fetchVeTypusInfo(
    config: TypusConfig,
    input: {
        tsMs: string;
        user?: string;
    }
): Promise<VeTypusInfo> {
    const provider = config.gRpcClient();
    let transaction = new Transaction();
    transaction.moveCall({
        target: `${config.package.launch.veTypus}::ve_typus::get_report`,
        arguments: [transaction.object(config.registry.launch.veTypus), transaction.pure.u64(input.tsMs)],
    });
    if (input.user) {
        transaction.moveCall({
            target: `${config.package.launch.veTypus}::ve_typus::get_ve_typus_bcs`,
            arguments: [transaction.object(config.registry.launch.veTypus), transaction.pure.address(input.user)],
        });
        transaction.moveCall({
            target: `${config.package.launch.veTypus}::ve_typus::get_ve_typus`,
            arguments: [
                transaction.object(config.registry.launch.veTypus),
                transaction.pure.address(input.user),
                transaction.pure.u64(input.tsMs),
            ],
        });
    }
    let results = (await provider.simulateTransaction({ transaction, checksEnabled: false, include: { commandResults: true } }))
        .commandResults;
    // @ts-ignore
    let reader = new BcsReader(new Uint8Array(results[0].returnValues[0].bcs));
    reader.readULEB();
    let totalVeTypusAmount = reader.read64();
    let totalStakedTypusAmount = reader.read64();
    let averageLockUpTime = (
        (BigInt(totalVeTypusAmount) * BigInt(4 * 365 * 24 * 60 * 60 * 1000)) /
        BigInt(totalStakedTypusAmount)
    ).toString();
    if (input.user) {
        // @ts-ignore
        let reader = new BcsReader(new Uint8Array(results[1].returnValues[0].bcs));
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
        reader = new BcsReader(new Uint8Array(results[2].returnValues[0].bcs));
        let veTypusAmount = reader.read64();
        return {
            totalVeTypusAmount,
            totalStakedTypusAmount,
            averageLockUpTime,
            veTypusAmount,
            veTypus,
        };
    } else {
        // @ts-ignore
        return {
            totalVeTypusAmount,
            totalStakedTypusAmount,
            averageLockUpTime,
        };
    }
}
