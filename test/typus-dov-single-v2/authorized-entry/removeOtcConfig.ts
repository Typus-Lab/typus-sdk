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
    let indexes = ["34", "43"];
    let users = [
        "0xdc72506f269feb89822c13e66b282bc52c5724c27e575a04cbec949a13671d13",
        "0xb6b29d18c728503fb59cc59ecbe52611d26b2746b2cedc8d38cabf81428cae6c",
        "0xf63aa0b102ddaeb791e67c26237488d1e2be10fb0bed6c022139cb354b07bc18",
    ];
    let now = Date.now();
    for (let index of indexes) {
        let vault = (await getVaults(config, { indexes: [index] }))[index];
        // console.log(vault);
        for (let user of users) {
            switch (index) {
                case "34": {
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
