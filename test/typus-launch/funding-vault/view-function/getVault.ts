import { getVault } from "src/typus-launch/funding-vault";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let vaults = await getVault(config, { indexes: ["0"] });
    console.log(JSON.stringify(vaults, null, 2));
})();
