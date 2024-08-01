import configs from "config.json";
import { getHistory, getPlaygrounds } from "src/dice";
import { SuiClient } from "@mysten/sui.js/client";
import "src/utils/load_env";

const config = configs.TESTNET;
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const playgrounds = await getPlaygrounds(provider, config.REGISTRY.EXP_GUESS);
    console.log(playgrounds);

    const history = await getHistory(provider, config.PACKAGE_ORIGIN.DICE, "tails_exp", playgrounds);
    console.log(history);

    // const leaderBoard = await getLeaderBoard(history);
    // console.log(leaderBoard.sort((a, b) => b.total_bet_amount - a.total_bet_amount));
})();
