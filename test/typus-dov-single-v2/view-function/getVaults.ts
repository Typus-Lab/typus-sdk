import { TypusConfig } from "src/utils";
import { getVaults } from "src/typus-dov-single-v2";

(async () => {
    let config = await TypusConfig.default("TESTNET");

    let indexes = [];
    let result = await getVaults(config, { indexes });
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
