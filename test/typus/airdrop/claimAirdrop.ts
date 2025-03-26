import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { EventId, SuiClient, SuiEvent } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { getClaimAirdropTx, getAirdrop } from "src/typus/airdrop";
import { TypusConfig } from "src/utils";
import mnemonic from "mnemonic.json";
import { getUserEvents } from "src/typus-dov-single-v2";
import * as fs from "fs";
import { tokenType } from "src/constants";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(mnemonic.W));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let user = signer.toSuiAddress();
    console.log(`Using account ${user}`);

    let amount = await getAirdrop(config, {
        typeArguments: [tokenType["TESTNET"]["TYPUS"]],
        key: "typus_airdrop",
        user,
    });
    console.log(`Claiming ${Number(amount[1]) / 10 ** 9} TYPUS...`);

    if (Number(amount[1]) > 0) {
        let transaction = getClaimAirdropTx(config, new Transaction(), {
            typeArguments: [tokenType["TESTNET"]["TYPUS"]],
            key: "typus_airdrop",
            user,
        });

        let res = await provider.signAndExecuteTransaction({ signer, transaction });
        console.log(res);
    }

    // User history -> airdrop::ClaimAirdropEvent
    var localCacheEvents: SuiEvent[] = [];
    var cursor: EventId | null | undefined = undefined;
    var localCacheMap = new Map<string, [SuiEvent[], EventId | null | undefined]>();
    const fileName = "testnetLocalCacheEvents.json";

    try {
        let localCacheFile = fs.readFileSync(fileName, "utf-8");
        let localCache = JSON.parse(localCacheFile);
        localCacheMap = localCache.reduce((map, obj) => {
            map.set(obj.user, [obj.events, obj.cursor]);
            return map;
        }, new Map<string, [SuiEvent[], EventId | null | undefined]>());

        let userCache = localCacheMap.get(user);
        if (userCache) {
            localCacheEvents = userCache[0];
            cursor = userCache[1];
            console.log("Load from cache...");
        }
    } catch {}

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

    const claimEvents = localCacheEvents.filter((x) => x.type.endsWith("airdrop::ClaimAirdropEvent"));
    if (claimEvents.length > 0) {
        // @ts-ignore
        console.log(`Already Claimed ${Number(claimEvents[0].parsedJson.log) / 10 ** 9} TYPUS`);
    }
})();
