import "src/utils/load_env";
import { withdrawFundFromDeepbookBalanceManager } from "src/typus-launch/funding-vault";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transactionBlock = new TransactionBlock();
    withdrawFundFromDeepbookBalanceManager(config, transactionBlock, {
        typeArguments: ["0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"],
        index: "1",
        amount: null,
    });
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
