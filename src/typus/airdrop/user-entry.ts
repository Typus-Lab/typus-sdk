import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

export function getClaimAirdropTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        key: string;
        user: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.typus}::airdrop::claim_airdrop`,
        typeArguments: input.typeArguments,
        arguments: [tx.object(config.version.typus), tx.object(config.registry.typus.airdrop), tx.pure.string(input.key)],
    });
    tx.moveCall({
        target: `${config.package.typus}::utility::transfer_balance_opt`,
        typeArguments: [input.typeArguments[0]],
        arguments: [tx.object(result[0]), tx.pure.address(input.user)],
    });

    return tx;
}
