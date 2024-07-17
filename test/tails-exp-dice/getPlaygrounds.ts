import "../../src/utils/load_env";
import configs from "../../config.json";
import { waitHistory, getPlaygrounds, parseHistory, newGamePlayGuessTx, simulateGame, DrawResult, getDrawResult } from "../../src";
import { SuiClient, SuiHTTPTransport, getFullnodeUrl } from "@mysten/sui.js/client";
const config = configs.TESTNET;

import "../../src/utils/load_env";

const provider = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    const playgrounds = await getPlaygrounds(provider, config.REGISTRY.EXP_GUESS);
    console.log(playgrounds);
})();
