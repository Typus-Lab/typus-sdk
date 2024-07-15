import configs from "../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { getStakePools } from "../../../src";

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const stakePools = await getStakePools(provider, config);
    console.log(stakePools[0]); // 1 lpPool inclueded
})();
