import "../load_env";
import config from "../../config.json";
import { PoolData, getPoolMap } from "../../utils/typus-nft/fetch";
import { JsonRpcProvider, Connection } from "@mysten/sui.js";

// const client = new SuiClient({ url: config.RPC_ENDPOINT });
const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));

(async () => {
    const poolMap = await getPoolMap(provider, config);
    console.log(poolMap);

    let [num, remaining] = await name(poolMap);
    console.log(num);
    console.log(remaining);
})();

async function name(poolMap: Map<string, PoolData>) {
    var num = 0;
    var remaining = 0;

    Promise.all([
        poolMap.forEach(async (poolData) => {
            num += poolData.num;
            remaining += poolData.remaining;
        }),
    ]);

    return [num, remaining];
}
