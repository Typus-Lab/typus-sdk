import configs from "../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { getVaults } from "../../../utils/typus-dov-single-v2/view-function";

const config = configs.TESTNET;
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    let indexes = [];
    let result = await getVaults(provider, config.DOV_SINGLE_PACKAGE, config.DOV_SINGLE_REGISTRY, indexes);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
