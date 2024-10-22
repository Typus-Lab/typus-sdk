import { TypusConfig } from "src/utils";
import { getVaults, getUserEvents, parseTxHistory, getNewBidFromSentio, getExerciseFromSentio } from "src/typus-dov-single-v2";
import { EventId, SuiClient, SuiEvent } from "@mysten/sui.js/client";
import * as fs from "fs";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let sender = "0xb6c7e3b1c61ee81516a8317f221daa035f1503e0ac3ae7a50b61834bc7a3ead9";
    let fileName = "testnetLocalCacheEvents.json";
    let vaults = await getVaults(config, { indexes: [] });

    // 1. Get User Events
    var localCacheEvents: SuiEvent[] = [];
    var cursor: EventId | null | undefined = undefined;
    var localCacheMap = new Map<string, [SuiEvent[], EventId | null | undefined]>();

    try {
        let localCacheFile = fs.readFileSync(fileName, "utf-8");
        let localCache = JSON.parse(localCacheFile);
        localCacheMap = localCache.reduce((map, obj) => {
            map.set(obj.user, [obj.events, obj.cursor]);
            return map;
        }, new Map<string, [SuiEvent[], EventId | null | undefined]>());

        let userCache = localCacheMap.get(sender);
        if (userCache) {
            localCacheEvents = userCache[0];
            cursor = userCache[1];
            console.log("Load from cache...");
        }
    } catch {}

    let [datas1, cursor1] = await getUserEvents(provider, sender, cursor);

    // save local cache for user
    localCacheEvents = localCacheEvents.concat(datas1);
    cursor = cursor1;

    localCacheMap.set(sender, [localCacheEvents, cursor]);
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

    // 2. Get AutoBid Events
    // let datas2 = await getAutoBidEvents(provider, config.packageOrigin.dovSingle, 1710892800000);
    // console.log(datas2.length);

    // 3. Parese User History
    // let datas = localCacheEvents.concat(
    //     datas2.filter((x) => {
    //         // @ts-ignore
    //         if (x.parsedJson.signer) {
    //             // @ts-ignore
    //             return x.parsedJson.signer == sender;
    //         } else if (x.type.endsWith("ExpUpEvent")) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     })
    // );

    let datas = localCacheEvents;

    let txHistory = await parseTxHistory(datas, vaults);
    // console.log(txHistory.reverse());

    let newBidHistory = await getNewBidFromSentio(vaults, sender, 0);
    // console.log(newBidHistory);

    let exerciseHistory = await getExerciseFromSentio(vaults, sender, 0);
    // console.log(exerciseHistory);

    let concatHistory = txHistory
        .concat(newBidHistory.filter((x) => txHistory.findIndex((y) => y.txDigest == x.txDigest) == -1))
        .concat(exerciseHistory.filter((x) => txHistory.findIndex((y) => y.txDigest == x.txDigest) == -1))
        .sort((a, b) => Number(b.Date) - Number(a.Date));

    // console.log(concatHistory.filter((h) => h.Action?.includes("Exercise")));
    console.log(concatHistory.filter((h) => Math.round(h.Date?.getTime() / 24 / 3600000) == Math.round(Date.now() / 24 / 3600000)));
})();
