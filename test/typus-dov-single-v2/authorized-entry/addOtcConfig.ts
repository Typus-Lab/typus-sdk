import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { addOtcConfig } from "src/typus-dov-single-v2/otc-entry";
import { getVaults } from "src/typus-dov-single-v2";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    let indexes = ["125"];
    let users = ["0x74c7a18d6de49f31bc6007e24afa3ea0693fefa5db6c7174c68730540c82d275"];
    let now = Date.now();
    for (let index of indexes) {
        let vault = (await getVaults(config, { indexes: [index] }))[index];
        // console.log(vault);
        for (let user of users) {
            switch (index) {
                case "125": {
                    addOtcConfig(config, transaction, {
                        user,
                        index,
                        round: vault.info.round,
                        size: "711610000",
                        price: "0.00440000",
                        fee_bp: "0",
                        // expiration_ts_ms: (BigInt(vault.info.activationTsMs) + BigInt(120 * 60 * 1000)).toString(),
                        // expiration_ts_ms: "1752829200000",
                        expiration_ts_ms: (now + 5 * 60 * 1000).toString(),
                    });
                }
            }
        }
    }
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
