import config from "../../mainnet.json";
import {
    getUserEvents,
    getAutoBidEvents,
    parseTxHistory,
    getNewBidFromSentio,
    getExerciseFromSentio,
} from "../../utils/typus-dov-single-v2/user-history";
import { getVaults } from "../../utils/typus-dov-single-v2/view-function";
import { EventId, SuiClient, SuiEvent, SuiEventFilter } from "@mysten/sui.js/client";
import * as fs from "fs";

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

const sender = "0xd15f079d5f60b8fdfdcf3ca66c0d3473790c758b04b6418929d5d2991c5443ee";
const fileName = "mainnetLocalCacheEvents.json";

(async () => {
    const vaults = await getVaults(provider, config.SINGLE_COLLATERAL_PACKAGE, config.SINGLE_COLLATERAL_REGISTRY, []);

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
    // const datas2 = await getAutoBidEvents(provider, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN, 1710892800000);
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

    const txHistory = await parseTxHistory(datas, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN, vaults);
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
    // console.log(concatHistory.filter((h) => Math.round(h.Date?.getTime() / 24 / 3600000) == Math.round(Date.now() / 24 / 3600000)));
})();
