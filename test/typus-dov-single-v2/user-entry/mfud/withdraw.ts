import "../../../load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getWithdrawTx } from "../../../../utils/typus-dov-single-v2/mfud-user-entry";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "../../config.json";

const config = configs.TESTNET;
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const user = signer.toSuiAddress();
const provider = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    let transactionBlock = new TransactionBlock();
    transactionBlock = getWithdrawTx({
        tx: transactionBlock,
        typusFrameworkOriginPackageId: config.PACKAGE_ORIGIN.FRAMEWORK,
        typusFrameworkPackageId: config.FRAMEWORK_PACKAGE,
        typusDovSinglePackageId: config.PACKAGE.DOV_SINGLE,
        typusDovSingleRegistry: config.REGISTRY.DOV_SINGLE,
        mfudPackageId: config.MFUD_PACKAGE,
        mfudRegistry: config.MFUD_REGISTRY,
        typeArguments: [config.MFUD_TOKEN, config.MFUD_TOKEN],
        index: "34",
        receipts: [],
        user,
        amount: "10",
    });
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });

    console.log(res);
})();
