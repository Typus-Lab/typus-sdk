import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getStrategyPool } from "src/auto-bid";

(async () => {
    let config = TypusConfig.default("TESTNET");

    let strategy_pool = await getStrategyPool(config);
    console.log(strategy_pool);
})();
