import config from "../../config_v2.json";
import { getUserHistory } from "../../utils/typus-dov-single-v2/user-history";
import { getVaults } from "../../utils/typus-dov-single-v2/view-function";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";

const provider = new SuiClient({
    url: getFullnodeUrl("testnet"),
});

const sender = "0xdc72506f269feb89822c13e66b282bc52c5724c27e575a04cbec949a13671d13";

(async () => {
    const vaults = await getVaults(provider, config.SINGLE_COLLATERAL_PACKAGE, config.SINGLE_COLLATERAL_REGISTRY, []);
    const userHistory = await getUserHistory(provider, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN, vaults, sender, 1687587861000);
    console.log(userHistory);
})();
