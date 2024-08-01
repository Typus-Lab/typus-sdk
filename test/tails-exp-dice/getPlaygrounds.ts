import "src/utils/load_env";
import configs from "config.json";
import { getPlaygrounds } from "src/dice";
import { SuiClient } from "@mysten/sui.js/client";
import "src/utils/load_env";

const config = configs.TESTNET;
const provider = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    const playgrounds = await getPlaygrounds(provider, config.REGISTRY.EXP_GUESS);
    console.log(playgrounds);
})();
