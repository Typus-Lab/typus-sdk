import "src/utils/load_env";
import { newTip } from "src/typus-launch/improvement-proposal";
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
    newTip(config, transactionBlock, {
        description: "Test Description2",
        image_url: "https://i.sstatic.net/2BvbQ.jpg",
        proposal: "Test Proposal2",
        config: ["1734670800000", "1735275600000", "1000"],
    });
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
