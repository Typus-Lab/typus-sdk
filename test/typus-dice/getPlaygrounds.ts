import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getPlaygrounds } from "src/dice";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let module: "combo_dice" | "tails_exp" = "combo_dice";

    let playgrounds = await getPlaygrounds(config, { module });
    console.log(playgrounds);
})();
