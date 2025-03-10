import { EventId, SuiClient, SuiEvent } from "@mysten/sui/client";
import { getVaults, getUserEvents, parseTxHistory, getNewBidFromSentio, getDepositorCashFlows } from "src/typus-dov-single-v2";
import * as fs from "fs";
import { TypusConfig } from "src/utils";

(async () => {
    let network: "MAINNET" | "TESTNET" = "MAINNET";
    let config = await TypusConfig.default(network, null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let user = "0xd15f079d5f60b8fdfdcf3ca66c0d3473790c758b04b6418929d5d2991c5443ee";
    let fileName = `${network.toLowerCase()}LocalCacheEvents.json`;
    let vaults = await getVaults(config, { indexes: [] });

    let localCacheMap: Map<string, [SuiEvent[], EventId | null | undefined]> = new Map<string, [SuiEvent[], EventId | null | undefined]>();

    // 1. Get User Events
    try {
        let localCache = JSON.parse(fileName);
        for (let obj of localCache) {
            localCacheMap.set(obj.user, [obj.events, obj.cursor]);
        }
    } catch (e) {}

    var localCacheEvents: SuiEvent[] = [];
    var cursor: EventId | null | undefined = undefined;

    let userCache = localCacheMap.get(user);
    if (userCache) {
        localCacheEvents = userCache[0];
        cursor = userCache[1];
        console.log("Load from cache...");
    }

    let [datas1, cursor1] = await getUserEvents(provider, user, cursor);

    // save local cache for user
    localCacheEvents = localCacheEvents.concat(datas1);
    cursor = cursor1;

    localCacheMap.set(user, [localCacheEvents, cursor]);
    let localCacheArray = Array.from(localCacheMap.entries());

    fs.writeFileSync(
        fileName,
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

    let datas = localCacheEvents;

    let txHistory = await parseTxHistory(datas, vaults);
    // console.log(txHistory.reverse());

    let newBidHistory = await getNewBidFromSentio(vaults, user, 0);
    // console.log(newBidHistory);

    let userHistory = txHistory
        .concat(newBidHistory.filter((x) => txHistory.findIndex((y) => y.txDigest == x.txDigest) == -1))
        .sort((a, b) => Number(b.Date) - Number(a.Date));

    // depositorCashFlows
    let depositorCashFlows = await getDepositorCashFlows(userHistory);
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
