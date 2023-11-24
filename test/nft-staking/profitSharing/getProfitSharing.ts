import "../../load_env";
import config_v2 from "../../../config_v2.json";
import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getProfitSharing } from "../../../utils/tails-exp-dice/fetch";

const provider = new JsonRpcProvider(new Connection({ fullnode: config_v2.RPC_ENDPOINT }));

(async () => {
    let res_1 = await getProfitSharing(provider, config_v2.diceProfitSharing);
    console.log(res_1);
})();
