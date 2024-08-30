import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getStrategies, getStrategyIds, getStrategyPool } from "src/auto-bid";

(async () => {
    let config = await TypusConfig.default("TESTNET");

    let strategy_pool = await getStrategyPool(config);
    console.log(strategy_pool);

    let parentId = strategy_pool.strategies.get("20")?.get("0")!;
    let ids = await getStrategyIds(config, parentId);
    let strategies = await getStrategies(config, ids);
    console.log(strategies);
})();
