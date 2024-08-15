import config_json from "config-mainnet.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getVaultData } from "src/typus-safu";
import { TypusConfig } from "src/utils";
import "src/utils/load_env";

let config = TypusConfig.parse(config_json);
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({ url: config.rpcEndpoint });

(async () => {
    const user = keypair.toSuiAddress();
    console.log(user);

    const share = await getVaultData(
        config,
        {
            provider,
            indexes: ["0", "1"]
        });
    console.log(share);
})();
