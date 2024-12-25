import { Transaction } from "@mysten/sui/transactions";
import { SuiClient } from "@mysten/sui/client";
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
    let transaction = new Transaction();
    transaction.moveCall({
        target: `${config.package.launch.veTypus}::ve_typus::get_ve_typus_bcs`,
        arguments: [transaction.object(config.registry.launch.veTypus), transaction.pure.address(input.user)],
    });
    // @ts-ignore
    let bytes = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock: transaction })).results[0]
        .returnValues[0][0];
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
    let provider = new SuiClient({ url: config.rpcEndpoint });
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
    let results = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock: transaction })).results;
    // @ts-ignore
    let reader = new BcsReader(new Uint8Array(results[0].returnValues[0][0]));
    reader.readULEB();
    let totalVeTypusAmount = reader.read64();
    let totalStakedTypusAmount = reader.read64();
    let averageLockUpTime = (
        (BigInt(totalVeTypusAmount) * BigInt(4 * 365 * 24 * 60 * 60 * 1000)) /
        BigInt(totalStakedTypusAmount)
    ).toString();
    if (input.user) {
        // @ts-ignore
        let reader = new BcsReader(new Uint8Array(results[1].returnValues[0][0]));
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
        reader = new BcsReader(new Uint8Array(results[2].returnValues[0][0]));
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
