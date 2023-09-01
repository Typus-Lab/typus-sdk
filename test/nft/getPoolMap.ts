import "../load_env";
import config from "../../nft_config.json";
import { getPoolMap } from "../../utils/typus-nft/fetch";
import { JsonRpcProvider, Connection } from "@mysten/sui.js";

// const client = new SuiClient({ url: config.RPC_ENDPOINT });
const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));

(async () => {
    const poolMap = await getPoolMap(provider, config);
    console.log(poolMap);
})();
