import { SuiClient } from "@mysten/sui.js/client";
import configs from "config.json";
import { getStrategyPool } from "src/auto-bid";
import "src/utils/load_env";
const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    let strategy_pool_id = config.OBJECT.STRATEGY_POOL;
    let strategy_pool = await getStrategyPool(provider, strategy_pool_id);
    console.log(strategy_pool);
})();
