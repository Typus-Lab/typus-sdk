import "../load_env";
import config from "../../dice_config.json";
// import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { getPlaygrounds } from "../../utils/typus-dice/fetch";

// const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const provider = new SuiClient({ url: getFullnodeUrl("testnet") });

(async () => {
    const playgrounds = await getPlaygrounds(provider, config.TYPUS_DICE_REGISTRY);
    console.log(playgrounds);
    // playgrounds.forEach(playground => {
    //     console.log(playground.opened_games);
    // });
})();
