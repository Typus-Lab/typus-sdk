import { Transaction } from "@mysten/sui/transactions";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { priceIDs, TypusConfig } from "src/utils";
import { createPythClient } from "src/utils/pyth/pythClient";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";

(async () => {
    const network = "MAINNET";
    const config = await TypusConfig.default(network, null);
    const provider = new SuiClient({ url: config.rpcEndpoint });
    const pythClient = createPythClient(provider, network);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.AUTH_MNEMONIC));

    const priceFeeds = [priceIDs[network]["HOODX"]!, priceIDs[network]["MSTRX"]!];
    let transaction = new Transaction();
    const priceFeedUpdateData = await pythClient.connection.getPriceFeedsUpdateData(priceFeeds);

    await pythClient.client.createPriceFeed(transaction, priceFeedUpdateData);

    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
