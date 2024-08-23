import config_json from "config-mainnet.json";
import { getVaultData } from "src/typus-safu";
import { TypusConfig } from "src/utils";

(async () => {
    let config = TypusConfig.parse(config_json);

    let vault = await getVaultData(config, {
        indexes: ["0", "1", "2", "3", "4", "5"],
    });
    console.log(vault);
})();
