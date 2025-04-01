import { Transaction } from "@mysten/sui/transactions";
import { SuiClient } from "@mysten/sui/client";
import { TypusConfig } from "src/utils";
import { createPythClient } from "src/utils/pyth/pythClient";
(async () => {
    const network = "TESTNET";
    const config = await TypusConfig.default(network, null);
    const provider = new SuiClient({ url: config.rpcEndpoint });
    const pythClient = createPythClient(provider, network);

    const priceFeeds = ["0xa6ba0195b5364be116059e401fb71484ed3400d4d9bfbdf46bd11eab4f9b7cea"];
    let transaction = new Transaction();
    const priceFeedUpdateData = await pythClient.connection.getPriceFeedsUpdateData(priceFeeds);

    let priceInfoObjectIds = await pythClient.client.updatePriceFeeds(transaction, priceFeedUpdateData, priceFeeds);
    console.log(priceInfoObjectIds);
})();
