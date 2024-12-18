import "src/utils/load_env";
import { setReward } from "src/typus-launch/improvement-proposal";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    // let config = TypusConfig.local("../typus-config/config-testnet.json");
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transactionBlock = new TransactionBlock();
    setReward(config, transactionBlock, {
        typeArguments: ["0xaded0918624ba1a31a9818ae73ccb557d46f35cb0d754b34597356ce38e6004d::typus::TYPUS"],
        index: "0",
        amount: "10000000000000",
    });
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
