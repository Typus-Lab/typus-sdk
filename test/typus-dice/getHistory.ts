import configs from "../../config.json";
import { getHistory, getPlaygrounds } from "../../src";
import { SuiClient } from "@mysten/sui.js/client";
import "../../src/utils/load_env";
const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const playgrounds = await getPlaygrounds(provider, config.REGISTRY.TYPUS_DICE);
    console.log(playgrounds);

    const history = await getHistory(provider, config.PACKAGE_ORIGIN.DICE, "combo_dice", playgrounds);
    console.log(history);

    // const leaderBoard = await getLeaderBoard(history);
    // console.log(leaderBoard.sort((a, b) => b.total_bet_amount - a.total_bet_amount));
})();
