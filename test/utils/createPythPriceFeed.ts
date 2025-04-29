import { Transaction } from "@mysten/sui/transactions";
import { SuiClient } from "@mysten/sui/client";
import { priceIDs, TypusConfig } from "src/utils";
import { createPythClient } from "src/utils/pyth/pythClient";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";

(async () => {
    const network = "TESTNET";
    const config = await TypusConfig.default(network, null);
    const provider = new SuiClient({ url: config.rpcEndpoint });
    const pythClient = createPythClient(provider, network);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

    const priceFeeds = [priceIDs["TESTNET"]["XAU"]!];
    let transaction = new Transaction();
    const priceFeedUpdateData = await pythClient.connection.getPriceFeedsUpdateData(priceFeeds);

    await pythClient.client.createPriceFeed(transaction, priceFeedUpdateData);

    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
