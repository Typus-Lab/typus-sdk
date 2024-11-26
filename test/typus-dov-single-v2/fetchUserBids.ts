import { TypusConfig } from "src/utils";
import { fetchUserBids, getUserBidReceipts } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui.js/client";
import { getDepositShares, getUserOwnedObjects, getVaults } from "src/typus-dov-single-v2";

(async () => {
    // Hint: replace the PRC endpoint with your own
    let config = await TypusConfig.default("MAINNET", null);
    let user = "0xd15f079d5f60b8fdfdcf3ca66c0d3473790c758b04b6418929d5d2991c5443ee";

    // Request: depends on user's owned objects amount
    // Hint: use owned object already catched instead of requesting again
    const datas = await getUserOwnedObjects(config, user);

    // Request: 1
    let vaults = await getVaults(config, { indexes: [] });
    // console.log(JSON.stringify(vaults, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));

    // HINT: above code are same in `getDepositShares`
    let userBidReceipts = await getUserBidReceipts(config, datas);
    // Request: 3
    let userBids = await fetchUserBids(config, user, vaults, userBidReceipts);
    console.info(JSON.stringify(userBids, null, "  "));
})();
