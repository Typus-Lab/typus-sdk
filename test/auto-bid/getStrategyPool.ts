import { SuiClient } from "@mysten/sui.js/client";
import { TypusConfig } from "src/utils";
import { getStrategyPool } from "src/auto-bid";
import "src/utils/load_env";
const config = TypusConfig.default("TESTNET");

const provider = new SuiClient({
    url: config.rpcEndpoint,
});

(async () => {
    let strategy_pool_id = config.object.strategyPool;
    let strategy_pool = await getStrategyPool(provider, strategy_pool_id);
    console.log(strategy_pool);
})();
