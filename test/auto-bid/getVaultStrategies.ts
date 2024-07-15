import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import configs from "../../config.json";
import { getStrategies, getStrategyIds, getStrategyPool } from "../../src";
import "../../src/utils/load_env";
const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    let strategy_pool = await getStrategyPool(provider, config.OBJECT.STRATEGY_POOL);
    // console.log(strategy_pool);

    let parentId = strategy_pool.strategies.get("20")?.get("0")!;
    let ids = await getStrategyIds(provider, parentId);
    let strategies = await getStrategies(provider, ids);
    console.log(strategies);
})();
