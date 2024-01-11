import "../load_env";
import config from "../../mainnet.json";
import { PoolData, getPoolMap } from "../../utils/typus-nft/fetch";
import { SuiClient } from "@mysten/sui.js/client";

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

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
