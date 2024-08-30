import { getVaultData } from "src/typus-safu";
import { TypusConfig } from "src/utils";

(async () => {
    let config = TypusConfig.default("MAINNET");

    let vault = await getVaultData(config, {
        indexes: ["0", "1", "2", "3"],
    });
    console.log(JSON.stringify(vault, null, 2));
})();
