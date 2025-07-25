import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { removeOtcConfig } from "src/typus-dov-single-v2/otc-entry";
import { getVaults } from "src/typus-dov-single-v2";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    let indexes = ["1"];
    let users = ["0x0ba70693c0c721629cdd2ca7dfa5615d96b76d6c8f9727890291c46dbec0e18c"];
    let now = Date.now();
    for (let index of indexes) {
        let vault = (await getVaults(config, { indexes: [index] }))[index];
        // console.log(vault);
        for (let user of users) {
            switch (index) {
                case "1": {
                    removeOtcConfig(config, transaction, {
                        user,
                        index,
                    });
                    break;
                }
                case "43": {
                    removeOtcConfig(config, transaction, {
                        user,
                        index,
                    });
                    break;
                }
            }
        }
    }
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(
        config.network == "MAINNET" ? `https://suivision.xyz/txblock/${res.digest}` : `https://testnet.suivision.xyz/txblock/${res.digest}`
    );
})();
