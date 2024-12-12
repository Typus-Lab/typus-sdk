import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";
import { mint } from "src/typus-launch/ve-typus";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let user = signer.toSuiAddress();

    let transactionBlock = new TransactionBlock();

    mint(config, transactionBlock, {
        coins: ["0x2effbc729fb09fd2ffbcacd075654d4be3dedf59b08daa3c54217049a598b6b3"],
        amount: "1000000000000",
        lockUpPeriod: "172798765",
    });
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
