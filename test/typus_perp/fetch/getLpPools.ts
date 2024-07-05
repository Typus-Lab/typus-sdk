import configs from "../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { getLpPools } from "../../../utils/typus_perp/fetch";

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const lpPools = await getLpPools(provider, config);
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
