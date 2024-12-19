import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui/client";
import { getMarkets, getSymbolMarkets } from "src/typus-perp";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let markets = await getMarkets(config);
    console.log(markets[0]);

    let symbolMarkets = await getSymbolMarkets(provider, markets[0]);
    console.log(symbolMarkets); // marketInfo
})();
