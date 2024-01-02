import configs from "../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { getDepositShares } from "../../../utils/typus-dov-single-v2/view-function";

const config = configs.MAINNET;
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const user = "0x0ba70693c0c721629cdd2ca7dfa5615d96b76d6c8f9727890291c46dbec0e18c";

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
        .filter((obj) => obj.data?.type! == `${config.FRAMEWORK_PACKAGE_ORIGIN}::vault::TypusDepositReceipt`)
        .map((obj) => obj.data?.objectId!);
    // console.log(receipts);

    const result = await getDepositShares(
        provider,
        config.FRAMEWORK_PACKAGE_ORIGIN,
        config.DOV_SINGLE_PACKAGE,
        config.DOV_SINGLE_REGISTRY,
        receipts
    );
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
