import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { updateVaultConfig } from "src/typus-safu";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transaction = new Transaction();
    [...Array(28).keys()].forEach((index) => {
        updateVaultConfig(config, transaction, {
            index: index.toString(),
            configIndex: "9",
            value: "0",
        });
        updateVaultConfig(config, transaction, {
            index: index.toString(),
            configIndex: "10",
            value: "0",
        });
        updateVaultConfig(config, transaction, {
            index: index.toString(),
            configIndex: "11",
            value: "0",
        });
    });

    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
