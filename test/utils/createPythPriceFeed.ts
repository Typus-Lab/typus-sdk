import { SuiJsonRpcClient } from "@mysten/sui/jsonRpc";
import { Transaction } from "@mysten/sui/transactions";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { PythLazerClient } from "@pythnetwork/pyth-lazer-sdk";
import { TypusConfig } from "src/utils";
import { PythLazerSuiClient } from "src/utils/pyth/pythClient";

// Initialize a brand-new token in OracleV2.feed_id_map by calling
// `oracle_v2::add_latest_price_new_token_v2<TOKEN>` with a freshly-verified Lazer update.
(async () => {
    const network = "MAINNET";
    const config = await TypusConfig.default(network, null);
    const sui = new SuiJsonRpcClient({ url: config.rpcEndpoint, network: "mainnet" });
    const lazer = await PythLazerClient.create({ token: String(process.env.LAZER_TOKEN), webSocketPoolConfig: {} });
    const signer = Ed25519Keypair.deriveKeypair(String(process.env.AUTH_MNEMONIC));

    const oracleV2Id = String(process.env.ORACLE_V2_ID);
    const lazerPackage = String(process.env.PYTH_LAZER_PACKAGE);

    const tokens = ["HOODX", "MSTRX"] as const;
    const tokenTypeArguments: Record<(typeof tokens)[number], string> = {
        HOODX: "<HOODX coin type>",
        MSTRX: "<MSTRX coin type>",
    };

    const client = new PythLazerSuiClient({
        lazer,
        sui,
        network,
        lazerPackage,
        oraclePackage: config.package.oracle,
        oracleV2Id,
    });

    for (const token of tokens) {
        const tx = new Transaction();
        await client.addLatestPriceNewToken(tx, token, tokenTypeArguments[token]);

        const res = await sui.signAndExecuteTransaction({ signer, transaction: tx });
        console.log(token, res.digest);
    }

    lazer.shutdown();
})();
