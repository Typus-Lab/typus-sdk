import { TypusConfig } from "src/utils";
import { getStakePools } from "src/typus-perp";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);

    let stakePools = await getStakePools(config);
    console.log(stakePools[0]); // 1 lpPool inclueded
})();
