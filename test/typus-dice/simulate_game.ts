import "../load_env";
import config from "../../dice_config.json";
import { simulateGame } from "../../utils/typus-dice/view-function";

import drawKeys from "../../combo_dice_draw_keys.json";



const index = "0";
const amount = "10000000";
const guess_1 = "3000";
const larger_than_1 = true;
const guess_2 = "3000";
const larger_than_2 = true;
const vrf_input_1 = [
    61, 149, 169, 30, 108, 189, 115, 103, 34, 32, 6, 242, 1, 96, 185, 193, 86, 158, 35, 169,
    62, 211, 157, 201, 19, 74, 224, 235, 178, 141, 219, 240, 3, 0, 0, 0, 0, 0, 0, 0,
];
const vrf_input_2 = [
    227, 120, 170, 123, 163, 41, 20, 164, 110, 118, 150, 238, 141, 14, 56, 111, 126, 52, 57,
    241, 99, 204, 233, 27, 99, 132, 134, 31, 104, 149, 24, 120, 3, 0, 0, 0, 0, 0, 0, 0,
];

(async () => {

    console.log(drawKeys);
    let result = await simulateGame(
        "testnet",
        config.PACKAGE,
        config.TYPUS_DICE_REGISTRY,
        index.toString(),
        amount,
        guess_1,
        larger_than_1,
        guess_2,
        larger_than_2,
        vrf_input_1,
        vrf_input_2,
        drawKeys
    );

    console.log(result);
})();
