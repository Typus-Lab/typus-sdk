import config from "../../dice_config.json";
import { getHistory, getLeaderBoard, getPlaygrounds } from "../../utils/typus-dice/fetch";
import { SuiClient } from "@mysten/sui.js/client";

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const playgrounds = await getPlaygrounds(provider, config.TYPUS_DICE_REGISTRY);

    const history = await getHistory(provider, config.TYPUS_DICE_EVENT_PACKAGE, playgrounds);
    console.log(history);

    const leaderBoard = await getLeaderBoard(history);
    console.log(leaderBoard.sort((a, b) => b.total_bet_amount - a.total_bet_amount));
})();
