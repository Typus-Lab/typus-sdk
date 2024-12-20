import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

/**
    entry fun claim_airdrop<TOKEN>(
        version: &Version,
        registry: &mut Registry,
        key: String,
        recipient: address,
        ctx: &mut TxContext,
    ) {
 */
export function claimAirdrop(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        key: string;
        recipient: string;
    }
) {
    tx.moveCall({
        target: `${config.package.launch.airdrop}::airdrop::claim_airdrop`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.launch.airdrop),
            tx.object(config.registry.launch.airdrop),
            tx.pure(input.key),
            tx.pure(input.recipient),
        ],
    });
}
