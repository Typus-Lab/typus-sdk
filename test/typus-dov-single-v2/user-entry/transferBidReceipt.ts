import "src/utils/load_env";
import { getTransferBidReceiptTx } from "src/typus-dov-single-v2";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "config.json";

const config = configs.TESTNET;
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    let depositToken = "0x2::sui::SUI";
    let bidToken = "0x2::sui::SUI";
    let typeArguments = [depositToken, bidToken];
    let index = "0";
    let receipts = [];
    let recipient = signer.toSuiAddress();
    let share = "100";

    let transactionBlock = getTransferBidReceiptTx({
        typeArguments,
        index,
        receipts,
        share,
        recipient,
        tx: new TransactionBlock(),
        typusFrameworkOriginPackageId: config.PACKAGE_ORIGIN.FRAMEWORK,
        typusDovSinglePackageId: config.PACKAGE.DOV_SINGLE,
        typusDovSingleRegistry: config.REGISTRY.DOV_SINGLE,
    });
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
