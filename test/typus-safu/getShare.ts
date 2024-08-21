import config_json from "config-mainnet.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getShareData } from "src/typus-safu";
import { TypusConfig } from "src/utils";
import "src/utils/load_env";

let config = TypusConfig.parse(config_json);
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({ url: config.rpcEndpoint });

(async () => {
    const user = keypair.toSuiAddress();
    console.log(user);
    // const user = "0x8b21d27b7de562512b71ced257825f61fe51f2802e2896312ddc32764ed28cd5";

    const share = await getShareData(
        config,
        {
            provider,
            user,
            indexes: ["0", "1", "2", "3"]
        });
    console.log(share);
    // console.log(share["3"][0]["share"]);
})();
