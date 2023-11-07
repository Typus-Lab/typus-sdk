import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import config from "../../dice_config.json";
import { getPlaygrounds, getHistory } from "../../utils/tails-exp-dice/fetch";

const index = 0;
const user = "0xb6c7e3b1c61ee81516a8317f221daa035f1503e0ac3ae7a50b61834bc7a3ead9";

(async () => {
    const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));

    const playgrounds = await getPlaygrounds(provider, config.REGISTRY);

    const history = await getHistory(provider, config.PACKAGE, playgrounds);
    console.log(history);

    const userHistory = history.filter((h) => h.player == user);
    console.log(userHistory);
})();
