import { TypusConfig } from "src/utils";
import { getHistory, getPlaygrounds } from "src/dice";
import { SuiClient } from "@mysten/sui.js/client";
import "src/utils/load_env";

const config = TypusConfig.default("TESTNET");
const provider = new SuiClient({
    url: config.rpcEndpoint,
});

(async () => {
    const playgrounds = await getPlaygrounds(provider, config.registry.dice.comboDice);
    console.log(playgrounds);

    const history = await getHistory(
        provider,
        "0xf1d628b4f14f9dae42d73a6cdee9b5f80567fee323166c4ecfb124de7d4ff254",
        "combo_dice",
        playgrounds
    );
    console.log(history);

    // const leaderBoard = await getLeaderBoard(history);
    // console.log(leaderBoard.sort((a, b) => b.total_bet_amount - a.total_bet_amount));
})();
