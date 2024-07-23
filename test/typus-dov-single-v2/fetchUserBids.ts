import configs from "../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { fetchUserBids, fetchPrices } from "../../src";
const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

const packageAddress = config.PACKAGE.DOV_SINGLE;
const registryAddress = config.REGISTRY.DOV_SINGLE;
const originFramworkAddress = config.PACKAGE_ORIGIN.FRAMEWORK;
const framwokrAddress = config.PACKAGE.FRAMEWORK;
const strategyPoolAddress = config.OBJECT.STRATEGY_POOL;

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
