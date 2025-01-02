import { Transaction } from "@mysten/sui/transactions";
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
    tx: Transaction,
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
            tx.pure.string(input.description),
            tx.pure.string(input.image_url),
            tx.pure.string(input.proposal),
            tx.pure.vector("u64", input.config),
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
    tx: Transaction,
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
            tx.pure.u64(input.settingIndex),
            tx.pure.u64(input.value),
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
    tx: Transaction,
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
            tx.pure.u64(input.index),
            tx.pure.option("string", input.description),
            tx.pure.option("string", input.image_url),
            tx.pure.option("string", input.proposal),
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
    tx: Transaction,
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
            tx.pure.u64(input.index),
            tx.pure.u64(input.infoIndex),
            tx.pure.u64(input.value),
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
    tx: Transaction,
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
            tx.pure.u64(input.index),
            tx.pure.u64(input.configIndex),
            tx.pure.u64(input.value),
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
    tx: Transaction,
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
            tx.pure.u64(input.index),
            tx.pure.string(input.key),
            tx.pure.u64(input.amount),
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
    tx: Transaction,
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
            tx.pure.u64(input.index),
            tx.pure.u64(input.rewardIndex),
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
    tx: Transaction,
    input: {
        index: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.improvementProposal}::improvement_proposal::count_votes`,
        arguments: [
            tx.object(config.version.launch.improvementProposal),
            tx.object(config.registry.launch.improvementProposal),
            tx.pure.u64(input.index),
            tx.object(config.registry.launch.veTypus),
            tx.object(CLOCK),
        ],
    });
}
