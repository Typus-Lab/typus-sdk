import { Transaction } from "@mysten/sui/transactions";
import { SuiClient } from "@mysten/sui/client";
import { BcsReader } from "@mysten/bcs";
import { SENDER } from "src/constants";
import { AddressFromBytes, TypusConfig } from "src/utils";

export interface Vault {
    id: string;
    token: string;
    info: string[];
    config: string[];
    fund: string;
    refund: string;
}
export async function getVault(
    config: TypusConfig,
    input: {
        indexes: string[];
    }
): Promise<{ [key: string]: [Vault] }> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    input.indexes.forEach((index) => {
        transaction.moveCall({
            target: `${config.package.launch.fundingVault}::funding_vault::get_vault_bcs`,
            arguments: [transaction.object(config.registry.launch.fundingVault), transaction.pure.u64(index)],
        });
    });
    let results = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock: transaction })).results;
    let vaults: {
        [key: string]: [Vault];
    } = {};
    results?.forEach((result) => {
        // @ts-ignore
        let bytes = result.returnValues[0][0];
        let reader = new BcsReader(new Uint8Array(bytes));
        reader.readULEB();
        let id = AddressFromBytes(reader.readBytes(32));
        let token = String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB())));
        let info = reader.readVec((reader) => {
            return reader.read64();
        });
        let config = reader.readVec((reader) => {
            return reader.read64();
        });
        let fund = AddressFromBytes(reader.readBytes(32));
        reader.read64();
        let refund = AddressFromBytes(reader.readBytes(32));
        reader.read64();

        vaults[info[0]] = [
            {
                id,
                token,
                info,
                config,
                fund,
                refund,
            },
        ];
    });

    return vaults;
}
export interface Fund {
    balance: string;
    tsMs: string;
}
export async function getFund(
    config: TypusConfig,
    input: {
        indexes: string[];
        user: string;
    }
): Promise<{ [key: string]: Fund[] }> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    input.indexes.forEach((index) => {
        transaction.moveCall({
            target: `${config.package.launch.fundingVault}::funding_vault::get_fund_bcs`,
            arguments: [
                transaction.object(config.registry.launch.fundingVault),
                transaction.pure.u64(index),
                transaction.pure.address(input.user),
            ],
        });
    });
    let results = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock: transaction })).results;
    let funds: {
        [key: string]: Fund[];
    } = {};
    results?.forEach((result, i) => {
        // @ts-ignore
        let bytes = result.returnValues[0][0];
        let reader = new BcsReader(new Uint8Array(bytes));
        reader.readULEB();
        let fund = reader.readVec((reader) => {
            return {
                balance: reader.read64(),
                tsMs: reader.read64(),
            } as Fund;
        });

        funds[input.indexes[i]] = fund;
    });

    return funds;
}

export async function getRefund(
    config: TypusConfig,
    input: {
        indexes: string[];
        user: string;
    }
): Promise<{ [key: string]: Fund[] }> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    input.indexes.forEach((index) => {
        transaction.moveCall({
            target: `${config.package.launch.fundingVault}::funding_vault::get_refund_bcs`,
            arguments: [
                transaction.object(config.registry.launch.fundingVault),
                transaction.pure.u64(index),
                transaction.pure.address(input.user),
            ],
        });
    });
    let results = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock: transaction })).results;
    let funds: {
        [key: string]: Fund[];
    } = {};
    results?.forEach((result, i) => {
        // @ts-ignore
        let bytes = result.returnValues[0][0];
        let reader = new BcsReader(new Uint8Array(bytes));
        reader.readULEB();
        let fund = reader.readVec((reader) => {
            return {
                balance: reader.read64(),
                tsMs: reader.read64(),
            } as Fund;
        });

        funds[input.indexes[i]] = fund;
    });

    return funds;
}

export async function getAllFunds(
    config: TypusConfig,
    input: {
        index: string;
        users: string[];
    }
): Promise<Fund[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    input.users.forEach((user) => {
        transaction.moveCall({
            target: `${config.package.launch.fundingVault}::funding_vault::get_fund_bcs`,
            arguments: [
                transaction.object(config.registry.launch.fundingVault),
                transaction.pure.u64(input.index),
                transaction.pure.address(user),
            ],
        });
    });
    let results = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock: transaction })).results;
    let funds: Fund[] = [];
    results?.forEach((result, i) => {
        // @ts-ignore
        let bytes = result.returnValues[0][0];
        let reader = new BcsReader(new Uint8Array(bytes));
        reader.readULEB();
        let fund = reader.readVec((reader) => {
            return {
                balance: reader.read64(),
                tsMs: reader.read64(),
            } as Fund;
        });

        funds = funds.concat(fund);
    });

    return funds;
}
