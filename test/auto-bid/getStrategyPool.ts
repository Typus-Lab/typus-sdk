import "../load_env";
import config from "../../config_v2.json";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { getVaults } from "../../utils/auto-bid/view-function";

const provider = new SuiClient({
    url: getFullnodeUrl("testnet"),
});

(async () => {
    let strategy_pool_id = "0x6e62ea389e67302a49aa4bf19850456ec732045c1e0776323588576a6071da7d";
    let strategy_pool = await getVaults(provider, strategy_pool_id);
    console.log(strategy_pool);
})();
