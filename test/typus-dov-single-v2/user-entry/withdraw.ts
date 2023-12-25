import "../../load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getWithdrawTx } from "../../../utils/typus-dov-single-v2/user-entry";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "../config.json";

const config = configs.TESTNET;
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const user = signer.toSuiAddress();
const provider = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    let transactionBlock = new TransactionBlock();
    transactionBlock = getWithdrawTx({
        tx: transactionBlock,
        typusFrameworkOriginPackageId: config.FRAMEWORK_PACKAGE_ORIGIN,
        typusFrameworkPackageId: config.FRAMEWORK_PACKAGE,
        typusDovSinglePackageId: config.DOV_SINGLE_PACKAGE,
        typusDovSingleRegistry: config.DOV_SINGLE_REGISTRY,
        typeArguments: [config.SUI_TOKEN, config.SUI_TOKEN],
        index: "19",
        receipts: [],
        user,
        share: "10000000000",
    });
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });

    console.log(res);
})();
