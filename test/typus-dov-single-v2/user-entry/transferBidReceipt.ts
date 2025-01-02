import "src/utils/load_env";
import { getTransferBidReceiptTx } from "src/typus-dov-single-v2";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let depositToken = "0x2::sui::SUI";
    let bidToken = "0x2::sui::SUI";
    let typeArguments = [depositToken, bidToken];
    let index = "0";
    let receipts = [];
    let recipient = signer.toSuiAddress();
    let share = "100";

    let transaction = getTransferBidReceiptTx(config, new Transaction(), {
        typeArguments,
        index,
        receipts,
        share,
        recipient,
    });

    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
