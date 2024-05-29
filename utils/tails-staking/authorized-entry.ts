import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../constants";

/**
    entry fun upload_ids(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        mut ids: vector<address>, // reverse
        ctx: &TxContext,
    ) {
*/
export async function getUploadIdsTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    ids: string[];
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::upload_ids`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.pure(input.ids),
        ],
    });

    return input.tx;
}

/**
    entry fun remove_ids(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        mut count: u64,
        ctx: &TxContext,
    ) {
*/
export async function getRemoveIdsTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    count: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::remove_ids`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.pure(input.count),
        ],
    });

    return input.tx;
}
/**
    entry fun upload_levels(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        mut count: u64,
        ctx: &TxContext,
    ) {
*/
export async function getUploadLevelsTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    count: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::upload_levels`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.pure(input.count),
        ],
    });

    return input.tx;
}

/**
    entry fun remove_levels(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        mut count: u64,
        ctx: &TxContext,
    ) {
*/
export async function getRemoveLevelsTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    count: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusPackageId}::tails_staking::remove_levels`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusTailsStakingRegistry),
            input.tx.pure(input.count),
        ],
    });

    return input.tx;
}
