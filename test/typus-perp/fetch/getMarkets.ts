import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui.js/client";
import { getMarkets, getSymbolMarkets } from "src/typus-perp";

(async () => {
    let config = TypusConfig.default("TESTNET");
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let markets = await getMarkets(config);
    console.log(markets[0]);

    let symbolMarkets = await getSymbolMarkets(provider, markets[0]);
    console.log(symbolMarkets); // marketInfo
})();
