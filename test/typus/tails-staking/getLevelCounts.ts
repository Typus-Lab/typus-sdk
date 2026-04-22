import { TypusConfig } from "src/utils";
import { getLevelCounts } from "src/typus/tails-staking";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);

    let result = await getLevelCounts(config);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
