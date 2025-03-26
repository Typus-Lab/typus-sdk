import { TypusConfig } from "src/utils";
import { getVaults, parseAssets } from "src/typus-dov-single-v2";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);

    let indexes = ["70"];
    let result = await getVaults(config, { indexes });
    // Object.values(result).forEach((vault) => {
    //     console.log(parseAssets(vault.info));
    // });
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
