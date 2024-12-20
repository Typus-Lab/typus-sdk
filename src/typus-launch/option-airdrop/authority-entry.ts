import { Transaction } from "@mysten/sui/transactions";
import { CLOCK } from "src/constants";
import { TypusConfig } from "src/utils";

/**
    entry fun add_user_share(
        version: &Version,
        snapshot: &mut Snapshot,
        users: vector<address>,
        shares: vector<u64>,
        ctx: &TxContext,
    ) {
*/
export function addUserShare(
    config: TypusConfig,
    tx: Transaction,
    input: {
        users: string[];
        shares: string[];
    }
) {
    tx.moveCall({
        target: `${config.package.launch.optionAirdrop}::option_airdrop::add_user_share`,
        arguments: [
            tx.object(config.version.launch.optionAirdrop),
            tx.object(config.object.launchSnapshot),
            tx.pure(input.users),
            tx.pure(input.shares),
        ],
    });
}

/**
    entry fun remove_user_share(
        version: &Version,
        snapshot: &mut Snapshot,
        ctx: &TxContext,
    ) {
*/
export function removeUserShare(
    config: TypusConfig,
    tx: Transaction,
    input: {
        users: string[];
        shares: string[];
    }
) {
    tx.moveCall({
        target: `${config.package.launch.optionAirdrop}::option_airdrop::remove_user_share`,
        arguments: [tx.object(config.version.launch.optionAirdrop), tx.object(config.object.launchSnapshot)],
    });
}

/**
    entry fun add_airdrop_plan(
        version: &Version,
        snapshot: &mut Snapshot,
        vault_index: u64,
        mut auction_max_size: u64,
        round: u64,
        slice_size: u64,
        ctx: &TxContext,
    ) {
*/
export function addAirdropPlan(
    config: TypusConfig,
    tx: Transaction,
    input: {
        vault_index: string;
        auction_max_size: string;
        round: string;
        slice_size: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.optionAirdrop}::option_airdrop::add_airdrop_plan`,
        arguments: [
            tx.object(config.version.launch.optionAirdrop),
            tx.object(config.object.launchSnapshot),
            tx.pure(input.vault_index),
            tx.pure(input.auction_max_size),
            tx.pure(input.round),
            tx.pure(input.slice_size),
        ],
    });
}

/**
    entry fun airdrop_otc(
        version: &Version,
        snapshot: &mut Snapshot,
        registry: &mut Registry,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
*/
export function airdropOtc(config: TypusConfig, tx: Transaction) {
    tx.moveCall({
        target: `${config.package.launch.optionAirdrop}::option_airdrop::airdrop_otc`,
        arguments: [
            tx.object(config.version.launch.optionAirdrop),
            tx.object(config.object.launchSnapshot),
            tx.object(config.registry.dov.dovSingle),
            tx.object(CLOCK),
        ],
    });
}
