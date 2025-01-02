import { getEndedTips } from "src/typus-launch/improvement-proposal";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    // let config = TypusConfig.local("../typus-config/config-testnet.json");
    let tips = await getEndedTips(config);
    console.log(JSON.stringify(tips, null, 2));
})();
