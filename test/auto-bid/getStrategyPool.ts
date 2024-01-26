import "../load_env";
import config from "../../config_v2.json";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { getVaults } from "../../utils/auto-bid/view-function";

const provider = new SuiClient({
    url: getFullnodeUrl("testnet"),
});

(async () => {
    let strategy_pool_id = config.STRATEGY_POOL;
    let strategy_pool = await getVaults(provider, strategy_pool_id);
    console.log(strategy_pool);
})();
