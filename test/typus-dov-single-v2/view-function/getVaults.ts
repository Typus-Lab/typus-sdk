import config from "../../../config_v2.json";
import { SuiClient } from "@mysten/sui.js/client";
import { getVaults } from "../../../utils/typus-dov-single-v2/view-function";

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    let indexes = [];
    let result = await getVaults(provider, config.SINGLE_COLLATERAL_PACKAGE, config.SINGLE_COLLATERAL_REGISTRY, indexes);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
