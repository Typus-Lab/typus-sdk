import { Transaction } from "@mysten/sui/transactions";
import { CLOCK } from "src/constants";
import { TypusConfig } from "src/utils";

/**
    public fun vote(
        version: &Version,
        registry: &mut Registry,
        ve_typus_registry: &VeTypusRegistry,
        index: u64,
        yes: bool,
        clock: &Clock,
        ctx: &TxContext,
    ) {
 */
export function vote(
    config: TypusConfig,
    tx: Transaction,
    input: {
        index: string;
        yes: boolean;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.improvementProposal}::improvement_proposal::vote`,
        arguments: [
            tx.object(config.version.launch.improvementProposal),
            tx.object(config.registry.launch.improvementProposal),
            tx.object(config.registry.launch.veTypus),
            tx.pure.u64(input.index),
            tx.pure.bool(input.yes),
            tx.object(CLOCK),
        ],
    });
}

/**
    public fun update_votes(
        version: &Version,
        registry: &mut Registry,
        ve_typus_registry: &VeTypusRegistry,
        clock: &Clock,
        ctx: &TxContext,
    ) {
 */
export function updateVotes(config: TypusConfig, tx: Transaction) {
    tx.moveCall({
        target: `${config.package.launch.improvementProposal}::improvement_proposal::update_votes`,
        arguments: [
            tx.object(config.version.launch.improvementProposal),
            tx.object(config.registry.launch.improvementProposal),
            tx.object(config.registry.launch.veTypus),
            tx.object(CLOCK),
        ],
    });
}
