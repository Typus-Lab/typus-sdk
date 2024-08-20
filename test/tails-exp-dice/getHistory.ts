import { TypusConfig } from "src/utils";
import { getHistory, getPlaygrounds } from "src/dice";
import { SuiClient } from "@mysten/sui.js/client";
import "src/utils/load_env";

const config = TypusConfig.default("TESTNET");
const provider = new SuiClient({
    url: config.rpcEndpoint,
});

(async () => {
    const playgrounds = await getPlaygrounds(provider, config.registry.dice.tailsExp);
    console.log(playgrounds);

    const history = await getHistory(provider, config.packageOrigin.dice, "tails_exp", playgrounds);
    console.log(history);

    // const leaderBoard = await getLeaderBoard(history);
    // console.log(leaderBoard.sort((a, b) => b.total_bet_amount - a.total_bet_amount));
})();
