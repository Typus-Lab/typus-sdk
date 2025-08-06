import "src/utils/load_env";
import { SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { TypusConfig } from "src/utils";
import { getWithdrawBidReceiptTx } from "src/auto-bid";
import { Transaction } from "@mysten/sui/transactions";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let vaultIndex = "2";
    let signalIndex = "0";
    let strategyIndex = "9";

    let transaction = new Transaction();

    let receipt = getWithdrawBidReceiptTx(config, transaction, {
        vaultIndex,
        signalIndex,
        strategyIndex,
        user: keypair.toSuiAddress(),
    });
    transaction.transferObjects([receipt], keypair.toSuiAddress());

    let res = await provider.signAndExecuteTransaction({ signer: keypair, transaction });
    console.log(res);
})();
