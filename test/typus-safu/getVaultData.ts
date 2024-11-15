import { getVaultData } from "src/typus-safu";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);

    let vault = await getVaultData(config, {
        indexes: [...Array(24).keys()].map((index) => {
            return index.toString();
        }),
    });
    console.log(JSON.stringify(vault, null, 2));
})();
