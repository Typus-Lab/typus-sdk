import { SuiClient } from "@mysten/sui.js/client";
import { TypusConfig } from "src/utils";
import { PoolData, getPoolMap, getTableTails } from "src/typus-nft";
import "src/utils/load_env";

(async () => {
    let config = TypusConfig.default("TESTNET");
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let poolMap = await getPoolMap(provider, config);
    console.log(poolMap);

    for (let [name, pool] of poolMap.entries()) {
        console.log(name);
        await getTableTails(provider, pool.table);
    }
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
