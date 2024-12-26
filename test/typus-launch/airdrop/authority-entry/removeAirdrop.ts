import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";
import { removeAirdrop } from "src/typus-launch/airdrop";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    // let config = TypusConfig.local("../typus-config/config-testnet.json");
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transactionBlock = new TransactionBlock();
    removeAirdrop(config, transactionBlock, {
        typeArguments: ["0xd31923b6821fb7ba32d23e514b43d307da6ef991f9ef1af2cc4e26a0992ac87a::afsui::AFSUI"],
        key: "Typus Improvement Proposal #2",
    });
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
