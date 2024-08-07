import configs from "config.json";
import { getVaults, getUserEvents, parseTxHistory, getNewBidFromSentio, getExerciseFromSentio } from "src/typus-dov-single-v2";
import { EventId, SuiClient, SuiEvent } from "@mysten/sui.js/client";
import * as fs from "fs";

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

const sender = "0xb6c7e3b1c61ee81516a8317f221daa035f1503e0ac3ae7a50b61834bc7a3ead9";
const fileName = "testnetLocalCacheEvents.json";

(async () => {
    const vaults = await getVaults(provider, config.PACKAGE.DOV_SINGLE, config.REGISTRY.DOV_SINGLE, []);

    // 1. Get User Events
    var localCacheEvents: SuiEvent[] = [];
    var cursor: EventId | null | undefined = undefined;
    var localCacheMap = new Map<string, [SuiEvent[], EventId | null | undefined]>();

    try {
        const localCacheFile = fs.readFileSync(fileName, "utf-8");
        const localCache = JSON.parse(localCacheFile);
        localCacheMap = localCache.reduce((map, obj) => {
            map.set(obj.user, [obj.events, obj.cursor]);
            return map;
        }, new Map<string, [SuiEvent[], EventId | null | undefined]>());

        const userCache = localCacheMap.get(sender);
        if (userCache) {
            localCacheEvents = userCache[0];
            cursor = userCache[1];
            console.log("Load from cache...");
        }
    } catch {}

    const [datas1, cursor1] = await getUserEvents(provider, sender, cursor);

    // save local cache for user
    localCacheEvents = localCacheEvents.concat(datas1);
    cursor = cursor1;

    localCacheMap.set(sender, [localCacheEvents, cursor]);
    const localCacheArray = Array.from(localCacheMap.entries());

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
    // const datas2 = await getAutoBidEvents(provider, config.PACKAGE_ORIGIN.DOV_SINGLE, 1710892800000);
    // console.log(datas2.length);

    // 3. Parese User History
    // const datas = localCacheEvents.concat(
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

    const datas = localCacheEvents;

    const txHistory = await parseTxHistory(datas, config.PACKAGE_ORIGIN.DOV_SINGLE, vaults);
    // console.log(txHistory.reverse());

    const newBidHistory = await getNewBidFromSentio(vaults, sender, 0);
    // console.log(newBidHistory);

    const exerciseHistory = await getExerciseFromSentio(vaults, sender, 0);
    // console.log(exerciseHistory);

    const concatHistory = txHistory
        .concat(newBidHistory.filter((x) => txHistory.findIndex((y) => y.txDigest == x.txDigest) == -1))
        .concat(exerciseHistory.filter((x) => txHistory.findIndex((y) => y.txDigest == x.txDigest) == -1))
        .sort((a, b) => Number(b.Date) - Number(a.Date));

    // console.log(concatHistory.filter((h) => h.Action?.includes("Exercise")));
    console.log(concatHistory.filter((h) => Math.round(h.Date?.getTime() / 24 / 3600000) == Math.round(Date.now() / 24 / 3600000)));
})();
