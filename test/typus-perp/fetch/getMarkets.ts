import configs from "config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { getMarkets, getSymbolMarkets } from "src/typus-perp";

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const markets = await getMarkets(provider, config);
    console.log(markets[0]);

    const symbolMarkets = await getSymbolMarkets(provider, markets[0]);
    console.log(symbolMarkets); // marketInfo
})();
