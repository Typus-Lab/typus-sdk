import "../load_env";
import config from "../../dice_config.json";
import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getPlaygrounds } from "../../utils/tails-exp-dice/fetch";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));

(async () => {
    const playgrounds = await getPlaygrounds(provider, config.REGISTRY);
    console.log(playgrounds);
})();
