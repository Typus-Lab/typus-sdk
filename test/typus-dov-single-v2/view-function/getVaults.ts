import { TypusConfig } from "src/utils";
import { getVaults, parseAssets } from "src/typus-dov-single-v2";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);

    let indexes = ["126", "133", "132"];
    let vaults = await getVaults(config, { indexes });
    console.dir(vaults, { depth: null });
})();
