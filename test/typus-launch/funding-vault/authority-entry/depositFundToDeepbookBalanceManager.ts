import "src/utils/load_env";
import { depositFundToDeepbookBalanceManager } from "src/typus-launch/funding-vault";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transaction = new Transaction();
    depositFundToDeepbookBalanceManager(config, transaction, {
        typeArguments: ["0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"],
        index: "1",
    });
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
