import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getHistory, getPlaygrounds } from "src/dice";

(async () => {
    let config = TypusConfig.default("MAINNET");
    let module: "combo_dice" | "tails_exp" = "combo_dice";

    let playgrounds = await getPlaygrounds(config, { module });
    console.log(playgrounds);

    let history = await getHistory(config, { module, playgrounds });
    console.log(history);
})();
