import "src/utils/load_env";
import { updateConfig } from "src/typus-launch/funding-vault";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transaction = new Transaction();
    updateConfig(config, transaction, {
        index: "0",
        configIndex: "6",
        value: "3000",
    });
    updateConfig(config, transaction, {
        index: "0",
        configIndex: "7",
        value: (365 * 24 * 60 * 60 * 100).toString(),
    });
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
