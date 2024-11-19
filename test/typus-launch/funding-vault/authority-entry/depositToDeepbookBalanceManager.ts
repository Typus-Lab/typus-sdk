import "src/utils/load_env";
import { depositToDeepbookBalanceManager } from "src/typus-launch/funding-vault";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transactionBlock = new TransactionBlock();
    depositToDeepbookBalanceManager(config, transactionBlock, {
        typeArguments: ["0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270::deep::DEEP"],
        index: "1",
        coins: (await provider.getCoins({ owner: signer.toSuiAddress(), coinType: config.token.deep })).data.map((coin) => coin.coinObjectId),
        amount: "1000000"
    });
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();