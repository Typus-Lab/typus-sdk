import { TypusConfig } from "src/utils";
import { getLpPools } from "src/typus-perp";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);

    let lpPools = await getLpPools(config);
    console.log(lpPools); // 1 lpPool inclueded

    // avaliable token types to mint the lp tokens (3 token types supported)
    console.log(lpPools[0].liquidityTokens);

    //
    console.log(lpPools[0].tokenPools);

    // maxCapacity, targetWeightBp
    console.log(lpPools[0].tokenPools[1].config.spotConfig);

    // utilizationThresholdBp0
    console.log(lpPools[0].tokenPools[1].config.marginConfig);
})();
