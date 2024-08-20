import { SuiClient } from "@mysten/sui.js/client";
import { TypusConfig } from "src/utils";
import { PoolData, getPoolMap, getTableTails } from "src/typus-nft";
import "src/utils/load_env";
const config = TypusConfig.default("TESTNET");

const provider = new SuiClient({
    url: config.rpcEndpoint,
});

(async () => {
    const poolMap = await getPoolMap(provider, config);
    console.log(poolMap);

    for (let [name, pool] of poolMap.entries()) {
        console.log(name);
        await getTableTails(provider, pool.table);
    }

    // let [num, remaining] = await name(poolMap);
    // console.log(num);
    // console.log(remaining);
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
