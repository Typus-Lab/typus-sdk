import "../load_env";
import config from "../../config_v2.json";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { getStrategies, getStrategyIds, getVaults } from "../../utils/auto-bid/view-function";

const provider = new SuiClient({
    url: getFullnodeUrl("testnet"),
});

(async () => {
    let strategy_pool = await getVaults(provider, config.STRATEGY_POOL);
    // console.log(strategy_pool);

    let parentId = strategy_pool.strategies.get("20")?.get("0")!;
    let ids = await getStrategyIds(provider, parentId);
    let strategies = await getStrategies(provider, ids);
    console.log(strategies);
})();
