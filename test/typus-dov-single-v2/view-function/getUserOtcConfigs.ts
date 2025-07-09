import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getUserOtcConfigs, otc } from "src/typus-dov-single-v2/otc-entry";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let user = "0x3774f5e22fb66c928e60beedf9347704e2b703ed7d415058aedfcf4162bd522e";
    let index = "125";
    let otcConfig = (await getUserOtcConfigs(config, { user, indexes: [index] }))[0];
    console.log(otcConfig);
})();
