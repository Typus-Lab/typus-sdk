import { getReports } from "src/typus-launch/ve-typus";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let vaults = await getReports(config, {
        tsMss: [
            Date.now().toString(),
            (Date.now() + 24 * 60 * 60 * 1000).toString(),
            (Date.now() + 7 * 24 * 60 * 60 * 1000).toString(),
            (Date.now() + 30 * 24 * 60 * 60 * 1000).toString(),
        ],
    });
    console.log(JSON.stringify(vaults, null, 2));
})();
