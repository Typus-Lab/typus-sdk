import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { getRaiseFundTx } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let user = signer.toSuiAddress();
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transaction = getRaiseFundTx(config, new Transaction(), {
        typeArguments: [config.token.usdc, config.token.sui],
        index: "1",
        raiseCoins: (await provider.getCoins({ owner: user, coinType: config.token.usdc })).data.map((coin) => coin.coinObjectId),
        raiseAmount: "1000000",
        receipts: [],
        raiseFromPremium: false,
        raiseFromInactive: false,
        user,
    });
    let res = await provider.signAndExecuteTransaction({ signer, transaction });

    console.log(res);
})();
