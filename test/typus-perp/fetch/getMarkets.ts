import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui.js/client";
import { getMarkets, getSymbolMarkets } from "src/typus-perp";

const config = TypusConfig.default("TESTNET");

const provider = new SuiClient({
    url: config.rpcEndpoint,
});

(async () => {
    const markets = await getMarkets(provider, config);
    console.log(markets[0]);

    const symbolMarkets = await getSymbolMarkets(provider, markets[0]);
    console.log(symbolMarkets); // marketInfo
})();
