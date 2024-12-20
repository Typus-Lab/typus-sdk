import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { renew } from "src/typus-launch/ve-typus";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let user = signer.toSuiAddress();

    let transaction = new Transaction();

    renew(config, transaction, {
        veTypus: "0x2c455bdae95f11b278014bd0e99b5cb4045e3695c7d8dac64bda126983947c53",
        lockUpPeriod: (2 * 24 * 60 * 60 * 1000).toString(),
    });
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
