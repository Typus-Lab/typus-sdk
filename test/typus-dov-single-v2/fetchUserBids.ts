import config from "../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { fetchUserBids, fetchPrices } from "../../utils/typus-dov-single-v2/function/bidding";

const provider = new SuiClient({
    url: "https://fullnode.testnet.sui.io:443",
});

const packageAddress = config["TESTNET"].PACKAGE.DOV_SINGLE;
const registryAddress = config["TESTNET"].REGISTRY.DOV_SINGLE;
const originFramworkAddress = config["TESTNET"].PACKAGE_ORIGIN.FRAMEWORK;
const framwokrAddress = config["TESTNET"].PACKAGE.FRAMEWORK;
const strategyPoolAddress = config["TESTNET"].STRATEGY_POOL;

(async () => {
    const userBids = await fetchUserBids(
        provider,
        "testnet",
        packageAddress,
        framwokrAddress,
        originFramworkAddress,
        registryAddress,
        strategyPoolAddress,
        "0x95f26ce574fc9ace2608807648d99a4dce17f1be8964613d5b972edc82849e9e"
    );
    console.info(JSON.stringify(userBids, null, "  "));
})();
