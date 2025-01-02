import "src/utils/load_env";
import { updateConfig } from "src/typus-launch/improvement-proposal";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    // let config = TypusConfig.local("../typus-config/config-testnet.json");
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transaction = new Transaction();
    updateConfig(config, transaction, {
        index: "1",
        configIndex: "0",
        value: "1735790400000",
    });
    updateConfig(config, transaction, {
        index: "2",
        configIndex: "0",
        value: "1735790400000",
    });
    updateConfig(config, transaction, {
        index: "3",
        configIndex: "0",
        value: "1735790400000",
    });
    updateConfig(config, transaction, {
        index: "4",
        configIndex: "0",
        value: "1735790400000",
    });
    updateConfig(config, transaction, {
        index: "5",
        configIndex: "0",
        value: "1735790400000",
    });
    updateConfig(config, transaction, {
        index: "6",
        configIndex: "0",
        value: "1735790400000",
    });
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
