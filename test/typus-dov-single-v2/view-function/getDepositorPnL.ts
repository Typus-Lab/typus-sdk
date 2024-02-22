import config from "../../../mainnet.json";
import { SuiClient } from "@mysten/sui.js/client";
import { DepositShare, getDepositShares, getVaults } from "../../../utils/typus-dov-single-v2/view-function";
import { getUserHistory } from "../../../utils/typus-dov-single-v2/user-history";
import { getDepositorCashFlows } from "../../../utils/typus-dov-single-v2/depositorPnl";

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const user = "0xd15f079d5f60b8fdfdcf3ca66c0d3473790c758b04b6418929d5d2991c5443ee";

    // userHistory
    const vaults = await getVaults(provider, config.SINGLE_COLLATERAL_PACKAGE, config.SINGLE_COLLATERAL_REGISTRY, []);
    const userHistory = await getUserHistory(provider, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN, vaults, user, 0);
    console.log(userHistory.length);

    // depositorCashFlows
    const depositorCashFlows = await getDepositorCashFlows(userHistory);
    console.log(depositorCashFlows);

    //
})();

// let prices = await getLatestPriceUSD();
// // console.log(prices);

// let sum = 0;
// for (let [token, amount] of depositorCashFlows.entries()) {
//     let price = prices.get(token.replace("W", ""))!;
//     // console.log(`${token} ${price * amount}`);
//     sum += price * amount;
// }
// // console.log(`${user} total earn ${sum} USD from Typus`);

// let res_1 = await getUserStake(provider, config.NFT_TABLE, user);
// // console.log(res_1!.number); // null

// return [sum, res_1];
