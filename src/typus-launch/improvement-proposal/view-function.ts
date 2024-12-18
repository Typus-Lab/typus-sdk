import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";
import { AddressFromBytes, TypusConfig } from "src/utils";
import { SENDER } from "src/constants";

export interface Tip {
    id;
    index;
    description;
    imageUrl;
    proposal;
    info;
    config;
    rewards;
    votes;
    u64Padding;
    bcsPadding;
}
/**
    public(package) fun get_ongoing_tips_bcs(
        registry: &Registry,
    ): vector<u8> {
 */
export async function getOngoingTips(config: TypusConfig): Promise<Tip[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.package.launch.improvementProposal}::improvement_proposal::get_ongoing_tips_bcs`,
        arguments: [transactionBlock.object(config.registry.launch.improvementProposal)],
    });
    // @ts-ignore
    let bytes = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock })).results[0].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    reader.readULEB();
    return reader.readVec((reader) => {
        reader.readULEB();
        return {
            id: AddressFromBytes(reader.readBytes(32)),
            index: reader.read64(),
            description: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            imageUrl: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            proposal: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            info: reader.readVec((reader) => {
                return reader.read64();
            }),
            config: reader.readVec((reader) => {
                return reader.read64();
            }),
            rewards: reader.readVec((reader) => {
                return {
                    token: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                    amount: reader.read64(),
                };
            }),
            votes: {
                id: AddressFromBytes(reader.readBytes(32)),
                key_type: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                value_type: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                slice_idx: reader.read16(),
                slice_size: reader.read32(),
                length: reader.read64(),
            },
            u64Padding: reader.readVec((reader) => {
                return reader.read64();
            }),
            bcsPadding: reader.readVec((reader) => {
                return reader.read8();
            }),
        } as Tip;
    });
}
/**
    public(package) fun get_ended_tips_bcs(
        registry: &Registry,
    ): vector<u8> {
 */
export async function getEndedTips(config: TypusConfig): Promise<Tip[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.package.launch.improvementProposal}::improvement_proposal::get_ended_tips_bcs`,
        arguments: [transactionBlock.object(config.registry.launch.improvementProposal)],
    });
    // @ts-ignore
    let bytes = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock })).results[0].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    reader.readULEB();
    return reader.readVec((reader) => {
        reader.readULEB();
        return {
            id: AddressFromBytes(reader.readBytes(32)),
            index: reader.read64(),
            description: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            imageUrl: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            proposal: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            info: reader.readVec((reader) => {
                return reader.read64();
            }),
            config: reader.readVec((reader) => {
                return reader.read64();
            }),
            rewards: reader.readVec((reader) => {
                return {
                    token: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                    amount: reader.read64(),
                };
            }),
            votes: {
                id: AddressFromBytes(reader.readBytes(32)),
                key_type: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                value_type: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                slice_idx: reader.read16(),
                slice_size: reader.read32(),
                length: reader.read64(),
            },
            u64Padding: reader.readVec((reader) => {
                return reader.read64();
            }),
            bcsPadding: reader.readVec((reader) => {
                return reader.read8();
            }),
        } as Tip;
    });
}

export interface Vote {
    index: string;
    yes: string;
    no: string;
}
/**
    public(package) fun get_ongoing_tip_votes_bcs(
        registry: &Registry,
        user: address,
    ): vector<u8> {
 */
export async function getOngoingTipVotes(config: TypusConfig, input: { user: string }): Promise<Vote[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.package.launch.improvementProposal}::improvement_proposal::get_ongoing_tip_votes_bcs`,
        arguments: [transactionBlock.object(config.registry.launch.improvementProposal), transactionBlock.pure(input.user)],
    });
    // @ts-ignore
    let bytes = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock })).results[0].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    reader.readULEB();
    return reader.readVec((reader) => {
        reader.readULEB();
        return {
            index: reader.read64(),
            yes: reader.read64(),
            no: reader.read64(),
        } as Vote;
    });
}
/**
    public(package) fun get_ended_tip_votes_bcs(
        registry: &Registry,
        user: address,
    ): vector<u8> {
 */
export async function getEndedTipVotes(config: TypusConfig, input: { user: string }): Promise<Vote[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.package.launch.improvementProposal}::improvement_proposal::get_ended_tip_votes_bcs`,
        arguments: [transactionBlock.object(config.registry.launch.improvementProposal), transactionBlock.pure(input.user)],
    });
    // @ts-ignore
    let bytes = (await provider.devInspectTransactionBlock({ sender: SENDER, transactionBlock })).results[0].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    reader.readULEB();
    return reader.readVec((reader) => {
        reader.readULEB();
        return {
            index: reader.read64(),
            yes: reader.read64(),
            no: reader.read64(),
        } as Vote;
    });
}
