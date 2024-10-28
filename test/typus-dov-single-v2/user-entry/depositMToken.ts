import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getTokenRaiseFundTx } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let user = signer.toSuiAddress();
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transactionBlock = getTokenRaiseFundTx(config, new TransactionBlock(), {
        typeArguments: [config.token.mblub, config.token.mblub],
        index: "22",
        raiseCoins: (await provider.getCoins({ owner: user, coinType: config.token.blub })).data.map((coin) => coin.coinObjectId),
        raiseAmount: "10000000",
        receipts: [],
        raiseFromPremium: false,
        raiseFromInactive: false,
        user,
        typusTokenType: "0x4b5d0a097ee8a309a89bb2bc589403a4a9a39de639d576495b697be2a60f69bb::mblub::MBLUB",
    });
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });

    console.log(res);
})();
