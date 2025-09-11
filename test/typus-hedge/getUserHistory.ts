import { TypusConfig } from "src/utils";
import { getVaultData, parseTxHistory } from "src/typus-hedge";
import { EventId, SuiClient, SuiEvent } from "@mysten/sui/client";
import { getUserEvents } from "src/typus-dov-single-v2";
import * as fs from "fs";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let sender = "0x845c22be3e771ac8d90973e9859b5088207527c158f75ba4ac9e6201ca1eedb8";
    let fileName = "mainnetLocalCacheEvents.json";

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

    let datas = localCacheEvents;

    let vaults = await getVaultData(config, {
        indexes: [...Array(2).keys()].map((n) => {
            return n.toString();
        }),
    });

    let txHistory = await parseTxHistory(datas);
    console.log(txHistory.reverse());
})();
