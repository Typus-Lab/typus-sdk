import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getPlaygrounds } from "src/dice";
import { SuiClient } from "@mysten/sui.js/client";
import "src/utils/load_env";

const config = TypusConfig.default("TESTNET");
const provider = new SuiClient({ url: config.rpcEndpoint });

(async () => {
    const playgrounds = await getPlaygrounds(provider, config.registry.dice.tailsExp);
    console.log(playgrounds);
})();
