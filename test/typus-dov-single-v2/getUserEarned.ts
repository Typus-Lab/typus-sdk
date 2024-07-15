import config from "../../mainnet.json";
import { getUserHistory } from "../../utils/typus-dov-single-v2/user-history";
import { getVaults } from "../../utils/typus-dov-single-v2/view-function";
import { SuiClient } from "@mysten/sui.js/client";
import { getLatestPriceUSD } from "../../utils/price";
import { getUserStake } from "../../utils/nft-staking/fetch";

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

const sender = "0xd15f079d5f60b8fdfdcf3ca66c0d3473790c758b04b6418929d5d2991c5443ee";

(async () => {
    const vaults = await getVaults(provider, config.PACKAGE.DOV_SINGLE, config.REGISTRY.DOV_SINGLE, []);
    const userHistory = await getUserHistory(provider, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN, vaults, sender, 0);
    // console.log(userHistory);

    let earn = new Map<string, number>();
    for (let history of userHistory) {
        let token = "";
        let amount = "";
        if (history.Action!.startsWith("Harvest")) {
            [amount, token] = history.Amount?.split(" ")!;
            console.log(`Harvest ${amount} ${token}`);
        } else if (history.Action!.startsWith("Compound")) {
            [amount, token] = history.Amount?.split(" ")!;
            console.log(`Compound ${amount} ${token}`);
        } else if (history.Action!.startsWith("Exercise")) {
            [amount, token] = history.Amount?.split(" ")!;
            console.log(`Exercise ${amount} ${token}`);
        } else if (history.Action!.startsWith("Claim Profit Sharing")) {
            [amount, token] = history.Amount?.split(" ")!;
            console.log(`Claim Profit Sharing ${amount} ${token}`);
        }
        if (earn.has(token)) {
            let sum = earn.get(token)!;
            earn.set(token, sum + Number(amount));
        } else {
            earn.set(token, Number(amount));
        }
    }
    console.log(earn);
    earn.delete("");

    let prices = await getLatestPriceUSD();
    console.log(prices);

    let sum = 0;
    for (let [token, amount] of earn.entries()) {
        let price = prices.get(token)!;
        // console.log(`${token} ${price * amount}`);
        sum += price * amount;
    }
    console.log(`${sender} total earn ${sum} USD from Typus`);

    let res_1 = await getUserStake(provider, config.NFT_TABLE, sender);
    console.log(res_1!.number); // null
})();
