import config from "../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { fetchUserBids } from "../../utils/typus-dov-single-v2/function/bidding";

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
        "0x95f26ce574fc9ace2608807648d99a4dce17f1be8964613d5b972edc82849e9e",
        {
            eth: "3685",
            weth: "3685",
            sui: "1.15037523",
            afsui: "1.17360106",
            btc: "71092.38581119",
            wbtc: "71092.38581119",
            doge: "0",
            apt: "9",
            sei: "0.58205381",
            sol: "184.74723513",
            wsol: "184.74723513",
            cetus: "0.10748194",
            turbos: "0.0320003",
            jup: "1.23885100",
            buck: "1",
            usdc: "0.99987000",
            usdt: "1",
            navx: "0.15186475",
            fud: "0.00000030919210",
            mfud: "0.30919210",
            inj: "28.59550001",
            usdy: "1.04092509",
            sca: "0.59927439",
        }
    );
    console.info(JSON.stringify(userBids, null, "  "));
})();
