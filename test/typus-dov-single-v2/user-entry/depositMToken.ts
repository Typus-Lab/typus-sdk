import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { getTokenRaiseFundTx } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { tokenType } from "src/constants";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let user = signer.toSuiAddress();
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transaction = getTokenRaiseFundTx(config, new Transaction(), {
        typeArguments: [tokenType["TESTNET"].MBLUB, tokenType["TESTNET"].MBLUB],
        index: "22",
        raiseCoins: (await provider.getCoins({ owner: user, coinType: tokenType["TESTNET"].BLUB })).data.map((coin) => coin.coinObjectId),
        raiseAmount: "10000000",
        receipts: [],
        raiseFromPremium: false,
        raiseFromInactive: false,
        user,
        typusTokenType: tokenType["TESTNET"].MBLUB,
    });
    let res = await provider.signAndExecuteTransaction({ signer, transaction });

    console.log(res);
})();
