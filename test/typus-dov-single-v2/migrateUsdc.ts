import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getRaiseFundTx } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
})();

interface TakeDepositVaultResult {
    depositVault;
    receipt;
}
function takeDepositVault(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        index: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_registry_authorized_entry::take_deposit_vault`,
        typeArguments: [],
        arguments: [tx.object(config.registry.dov.dovSingle), tx.pure(input.index)],
    });

    return [tx, { depositVault: result[0], receipt: result[1] } as TakeDepositVaultResult];
}