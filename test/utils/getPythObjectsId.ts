import { Transaction } from "@mysten/sui/transactions";
import { SuiClient } from "@mysten/sui/client";
import { priceIDs, TypusConfig } from "src/utils";
import { createPythClient } from "src/utils/pyth/pythClient";
(async () => {
    const network = "TESTNET";
    const config = await TypusConfig.default(network, null);
    const provider = new SuiClient({ url: config.rpcEndpoint });
    const pythClient = createPythClient(provider, network);

    const priceFeed = priceIDs[network]["XAG"]!;
    let priceInfoObjectId = await pythClient.client.getPriceFeedObjectId(priceFeed);
    console.log(priceInfoObjectId);
})();
