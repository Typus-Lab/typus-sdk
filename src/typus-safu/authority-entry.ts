import { Transaction } from "@mysten/sui/transactions";
import { CLOCK, tokenType } from "src/constants";
import { TypusConfig, splitCoins } from "src/utils";

/**
    entry fun update_vault_config(
        version: &Version,
        registry: &mut Registry,
        index: u64,
        config_index: u64,
        value: u64,
        ctx: &TxContext,
    ) {
 */
export function updateVaultConfig(
    config: TypusConfig,
    tx: Transaction,
    input: {
        index: string;
        configIndex: string;
        value: string;
    }
) {
    tx.moveCall({
        target: `${config.package.safu}::safu::update_vault_config`,
        typeArguments: [],
        arguments: [
            tx.object(config.version.safu),
            tx.object(config.registry.safu.safu),
            tx.pure.u64(input.index),
            tx.pure.u64(input.configIndex),
            tx.pure.u64(input.value),
        ],
    });
}
