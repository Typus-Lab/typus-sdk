import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui.js/client";
import { getMyBids } from "src/typus-dov-single-v2";
const config = TypusConfig.default("MAINNET");

const provider = new SuiClient({
    url: config.rpcEndpoint,
});

(async () => {
    const user = "0xe6b6849126c345010c93022f038ff1f6fb9a759dd7848e4d9e22f68c764377e7";

    var temp = await provider.getOwnedObjects({
        owner: user,
        options: { showType: true, showContent: true },
    });

    var datas = temp.data;

    while (temp.hasNextPage) {
        temp = await provider.getOwnedObjects({
            owner: user,
            options: { showType: true, showContent: true },
            cursor: temp.nextCursor,
        });
        datas = datas.concat(temp.data);
    }

    const receipts = datas
        .filter((obj) => obj.data?.type! == `${config.packageOrigin.framework}::vault::TypusBidReceipt`)
        .map((obj) => obj.data?.objectId!);
    // console.log(receipts);

    let result = await getMyBids(provider, config.package.framework, config.package.dovSingle, config.registry.dov.dovSingle, receipts);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
