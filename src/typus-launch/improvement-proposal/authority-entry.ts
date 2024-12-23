import { TransactionBlock } from "@mysten/sui.js/transactions";
import { isSUI } from "src/_dependencies/source/0x2/sui/structs";
import { CLOCK } from "src/constants";
import { TypusConfig } from "src/utils";

/**
    entry fun new_tip(
        version: &Version,
        registry: &mut Registry,
        description: String,
        image_url: String,
        proposal: String,
        config: vector<u64>,
        ctx: &mut TxContext,
    ) {
*/
export async function newTip(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        description: string;
        image_url: string;
        proposal: string;
        config: string[];
    }
) {
    tx.moveCall({
        target: `${config.package.launch.improvementProposal}::improvement_proposal::new_tip`,
        arguments: [
            tx.object(config.version.launch.improvementProposal),
            tx.object(config.registry.launch.improvementProposal),
            tx.pure(input.description),
            tx.pure(input.image_url),
            tx.pure(input.proposal),
            tx.pure(input.config),
        ],
    });
}

/**
    entry fun update_registry_setting(
        version: &Version,
        registry: &mut Registry,
        setting_index: u64,
        value: u64,
        ctx: &TxContext,
    ) {
*/
export function updateRegistrySetting(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        settingIndex: string;
        value: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.improvementProposal}::improvement_proposal::update_registry_setting`,
        arguments: [
            tx.object(config.version.launch.improvementProposal),
            tx.object(config.registry.launch.improvementProposal),
            tx.pure(input.settingIndex),
            tx.pure(input.value),
        ],
    });
}

/**
    entry fun update_display(
        version: &Version,
        registry: &mut Registry,
        index: u64,
        description: Option<String>,
        image_url: Option<String>,
        proposal: Option<String>,
        ctx: &TxContext,
    ) {
*/
export function updateDisplay(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        index: string;
        description?: string;
        image_url?: string;
        proposal?: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.improvementProposal}::improvement_proposal::update_display`,
        arguments: [
            tx.object(config.version.launch.improvementProposal),
            tx.object(config.registry.launch.improvementProposal),
            tx.pure(input.index),
            tx.pure(input.description ? [input.description] : []),
            tx.pure(input.image_url ? [input.image_url] : []),
            tx.pure(input.proposal ? [input.proposal] : []),
        ],
    });
}

/**
    entry fun update_info(
        version: &Version,
        registry: &mut Registry,
        index: u64,
        info_index: u64,
        value: u64,
        ctx: &TxContext,
    ) {
*/
export function updateInfo(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        index: string;
        infoIndex: string;
        value: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.improvementProposal}::improvement_proposal::update_info`,
        arguments: [
            tx.object(config.version.launch.improvementProposal),
            tx.object(config.registry.launch.improvementProposal),
            tx.pure(input.index),
            tx.pure(input.infoIndex),
            tx.pure(input.value),
        ],
    });
}

/**
    entry fun update_config(
        version: &Version,
        registry: &mut Registry,
        index: u64,
        config_index: u64,
        value: u64,
        ctx: &TxContext,
    ) {
*/
export function updateConfig(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        index: string;
        configIndex: string;
        value: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.improvementProposal}::improvement_proposal::update_config`,
        arguments: [
            tx.object(config.version.launch.improvementProposal),
            tx.object(config.registry.launch.improvementProposal),
            tx.pure(input.index),
            tx.pure(input.configIndex),
            tx.pure(input.value),
        ],
    });
}

/**
    entry fun set_reward<TOKEN>(
        version: &Version,
        registry: &mut Registry,
        index: u64,
        key: String,
        amount: u64,
        ctx: &TxContext,
    ) {
*/
export function setReward(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        index: string;
        key: string;
        amount: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.improvementProposal}::improvement_proposal::set_reward`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.launch.improvementProposal),
            tx.object(config.registry.launch.improvementProposal),
            tx.pure(input.index),
            tx.pure(input.key),
            tx.pure(input.amount),
        ],
    });
}

/**
    entry fun remove_reward(
        version: &Version,
        registry: &mut Registry,
        index: u64,
        reward_index: u64,
        ctx: &TxContext,
    ) {
*/
export function removeReward(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        index: string;
        rewardIndex: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.improvementProposal}::improvement_proposal::remove_reward`,
        arguments: [
            tx.object(config.version.launch.improvementProposal),
            tx.object(config.registry.launch.improvementProposal),
            tx.pure(input.index),
            tx.pure(input.rewardIndex),
        ],
    });
}

/**
    entry fun count_votes(
        version: &Version,
        registry: &mut Registry,
        index: u64,
        ve_typus_registry: &VeTypusRegistry,
        clock: &Clock,
        ctx: &TxContext,
    ) {
*/
export function countVotes(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        index: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.improvementProposal}::improvement_proposal::count_votes`,
        arguments: [
            tx.object(config.version.launch.improvementProposal),
            tx.object(config.registry.launch.improvementProposal),
            tx.pure(input.index),
            tx.object(config.registry.launch.veTypus),
            tx.object(CLOCK),
        ],
    });
}
