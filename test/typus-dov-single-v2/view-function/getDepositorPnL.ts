import { EventId, SuiClient, SuiEvent } from "@mysten/sui.js/client";
import { getVaults, getUserEvents, parseTxHistory, getNewBidFromSentio, getDepositorCashFlows } from "src/typus-dov-single-v2";
import * as fs from "fs";
import { TypusConfig } from "src/utils";
const config = TypusConfig.default("TESTNET");

const provider = new SuiClient({
    url: config.rpcEndpoint,
});

const sender = "0xbd637af537b5d8d734bacb36477a71cc83251e5545af22d51d671fb94d484107";

(async () => {
    const vaults = await getVaults(provider, config.package.dovSingle, config.registry.dov.dovSingle, []);

    // 1. Get User Events
    const localCacheFile = fs.readFileSync("localCacheEvents.json", "utf-8");
    const localCache = JSON.parse(localCacheFile);
    const localCacheMap: Map<string, [SuiEvent[], EventId | null | undefined]> = localCache.reduce((map, obj) => {
        map.set(obj.user, [obj.events, obj.cursor]);
        return map;
    }, new Map<string, [SuiEvent[], EventId | null | undefined]>());

    var localCacheEvents: SuiEvent[] = [];
    var cursor: EventId | null | undefined = undefined;

    const userCache = localCacheMap.get(sender);
    if (userCache) {
        localCacheEvents = userCache[0];
        cursor = userCache[1];
        console.log("Load from cache...");
    }

    const [datas1, cursor1] = await getUserEvents(provider, sender, cursor);

    // save local cache for user
    localCacheEvents = localCacheEvents.concat(datas1);
    cursor = cursor1;

    localCacheMap.set(sender, [localCacheEvents, cursor]);
    const localCacheArray = Array.from(localCacheMap.entries());

    fs.writeFileSync(
        "localCacheEvents.json",
        JSON.stringify(
            localCacheArray.map(([k, v]) => {
                let t = { user: k, events: v[0], cursor: v[1] };
                return t;
            }),
            null,
            2
        ),
        "utf-8"
    );

    console.log(localCacheEvents.length);
    console.log(cursor);

    const datas = localCacheEvents;

    const txHistory = await parseTxHistory(datas, config.packageOrigin.dovSingle, vaults);
    // console.log(txHistory.reverse());

    const newBidHistory = await getNewBidFromSentio(vaults, sender, 0);
    // console.log(newBidHistory);

    const userHistory = txHistory
        .concat(newBidHistory.filter((x) => txHistory.findIndex((y) => y.txDigest == x.txDigest) == -1))
        .sort((a, b) => Number(b.Date) - Number(a.Date));

    // depositorCashFlows
    const depositorCashFlows = await getDepositorCashFlows(userHistory);
    console.log(depositorCashFlows);

    //
})();

// let prices = await getLatestPriceUSD();
// // console.log(prices);

// let sum = 0;
// for (let [token, amount] of depositorCashFlows.entries()) {
//     let price = prices.get(token.replace("W", ""))!;
//     // console.log(`${token} ${price * amount}`);
//     sum += price * amount;
// }
// // console.log(`${user} total earn ${sum} USD from Typus`);

// let res_1 = await getUserStake(provider, config.NFT_TABLE, user);
// // console.log(res_1!.number); // null

// return [sum, res_1];
