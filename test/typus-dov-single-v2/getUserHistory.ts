import config from "../../config_v2.json";
import { getUserHistory } from "../../utils/typus-dov-single-v2/user-history";
import { getVaults } from "../../utils/typus-dov-single-v2/view-function";
import { SuiClient } from "@mysten/sui.js/client";

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

const sender = "0x09953d966977a79550b65661c0e9d03890809a3f94b1ff711482c9ab8254a32a";

(async () => {
    const vaults = await getVaults(provider, config.SINGLE_COLLATERAL_PACKAGE, config.SINGLE_COLLATERAL_REGISTRY, []);
    const userHistory = await getUserHistory(provider, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN, vaults, sender, 0);
    console.log(userHistory);
})();
