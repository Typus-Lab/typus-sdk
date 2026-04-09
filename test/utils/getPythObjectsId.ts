import { Transaction } from "@mysten/sui/transactions";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { priceIDs, TypusConfig } from "src/utils";
import { createPythClient } from "src/utils/pyth/pythClient";
(async () => {
    const network = "MAINNET";
    const config = await TypusConfig.default(network, null);
    const provider = new SuiClient({ url: config.rpcEndpoint });
    const pythClient = createPythClient(provider, network);

    const priceFeeds = [priceIDs[network]["HOODX"]!, priceIDs[network]["MSTRX"]!];

    for (const priceFeed of priceFeeds) {
        // console.log(priceFeed);
        let priceInfoObjectId = await pythClient.client.getPriceFeedObjectId(priceFeed);
        console.log(priceInfoObjectId);
    }
})();
