import { TypusConfig } from "src/utils";
import { getDepositorCashFlows, getUserEvents, parseTxHistory } from "src/typus-safu";
import { EventId, SuiClient, SuiEvent } from "@mysten/sui.js/client";
import * as fs from "fs";

const config = TypusConfig.default("MAINNET");

const provider = new SuiClient({
    url: config.rpcEndpoint,
});

const sender = "0xd15f079d5f60b8fdfdcf3ca66c0d3473790c758b04b6418929d5d2991c5443ee";
const fileName = "mainnetLocalCacheEvents.json";

(async () => {
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

    const datas = localCacheEvents;

    const txHistory = await parseTxHistory(datas, config.packageOrigin.safu);
    console.log(txHistory.reverse());

    const cashFlow = await getDepositorCashFlows(txHistory);
    console.log(cashFlow);
})();
