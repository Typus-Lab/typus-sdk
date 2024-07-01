import configs from "../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { getLpPools } from "../../../utils/typus_perp/fetch/getLpPools";

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const lpPools = await getLpPools(provider, config);
    console.log(lpPools);
})();
