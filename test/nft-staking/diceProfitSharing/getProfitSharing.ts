import "@/utils/load_env";
import config_v2 from "../../../config_v2.json";
import { getProfitSharing } from "../../../utils/tails-exp-dice/fetch";

import { SuiClient } from "@mysten/sui.js/client";

const provider = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    // Already Set
    let res_1 = await getProfitSharing(provider, config_v2.diceProfitSharing);
    console.log(res_1);
})();
