import configs from "../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { getMyBids } from "../../../utils/typus-dov-single-v2/view-function";

const config = configs.MAINNET;
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
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
        .filter((obj) => obj.data?.type! == `${config.PACKAGE_ORIGIN.FRAMEWORK}::vault::TypusBidReceipt`)
        .map((obj) => obj.data?.objectId!);
    // console.log(receipts);

    let result = await getMyBids(provider, config.PACKAGE.FRAMEWORK, config.PACKAGE.DOV_SINGLE, config.REGISTRY.DOV_SINGLE, receipts);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
