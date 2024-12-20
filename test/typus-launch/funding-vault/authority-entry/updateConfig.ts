import "src/utils/load_env";
import { updateConfig } from "src/typus-launch/funding-vault";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transactionBlock = new TransactionBlock();
    updateConfig(config, transactionBlock, {
        index: "0",
        configIndex: "6",
        value: "3000",
    });
    updateConfig(config, transactionBlock, {
        index: "0",
        configIndex: "7",
        value: (365 * 24 * 60 * 60 * 100).toString(),
    });
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
