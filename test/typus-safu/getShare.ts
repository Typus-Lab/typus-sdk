import { getShareData } from "src/typus-safu";
import { TypusConfig } from "src/utils";

(async () => {
    let config = TypusConfig.default("MAINNET");
    let user = "0x8b21d27b7de562512b71ced257825f61fe51f2802e2896312ddc32764ed28cd5";
    console.log(user);

    let share = await getShareData(config, {
        user,
        indexes: ["0", "1", "2", "3"],
    });
    console.log(JSON.stringify(share, null, 2));
    // console.log(share["3"][0]["share"]);
})();
