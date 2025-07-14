import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getUserOtcConfigs, otc } from "src/typus-dov-single-v2/otc-entry";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let user = "0xf63aa0b102ddaeb791e67c26237488d1e2be10fb0bed6c022139cb354b07bc18";
    let index = "43";
    let otcConfig = (await getUserOtcConfigs(config, { user, indexes: ["42", "43"] }));
    console.log(otcConfig);
})();
