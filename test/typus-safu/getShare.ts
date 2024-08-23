import "src/utils/load_env";
import config_json from "config-mainnet.json";
import { getShareData } from "src/typus-safu";
import { TypusConfig } from "src/utils";

let config = TypusConfig.parse(config_json);

(async () => {
    let user = "0x8b21d27b7de562512b71ced257825f61fe51f2802e2896312ddc32764ed28cd5";
    console.log(user);

    let share = await getShareData(config, {
        user,
        indexes: ["0", "1", "2", "3"],
    });
    console.log(share);
    // console.log(share["3"][0]["share"]);
})();
