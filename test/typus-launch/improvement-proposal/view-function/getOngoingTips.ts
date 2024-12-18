import { getOngoingTips } from "src/typus-launch/improvement-proposal";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    // let config = TypusConfig.local("../typus-config/config-testnet.json");
    let vaults = await getOngoingTips(config);
    console.log(JSON.stringify(vaults, null, 2));
})();
