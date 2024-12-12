import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";
import { delegateMint } from "src/typus-launch/ve-typus";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let user = signer.toSuiAddress();

    let transactionBlock = new TransactionBlock();

    delegateMint(config, transactionBlock, {
        user: "0x603272d1e61de086a18751482684f882642eb080144aee425c4c34b5e56470b0",
        coins: ["0x2effbc729fb09fd2ffbcacd075654d4be3dedf59b08daa3c54217049a598b6b3"],
        amount: "12345000000000",
        lockUpPeriod: "86400000",
    });
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
// 0xbd637af537b5d8d734bacb36477a71cc83251e5545af22d51d671fb94d484107