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
    let depositToken = config.SUI_TOKEN;
    let bidToken = config.SUI_TOKEN;
    let typusFrameworkOriginPackageId = config.FRAMEWORK_PACKAGE_ORIGIN;
    let typusFrameworkPackageId = config.FRAMEWORK_PACKAGE;
    let packageId = config.DOV_SINGLE_PACKAGE;
    let typeArguments = [depositToken, bidToken];
    let registry = config.DOV_SINGLE_REGISTRY;
    let index = "19";
    let receipts = [];
    let amount = "10000000000";

    let transactionBlock = new TransactionBlock();
    transactionBlock = getWithdrawTx(
        transactionBlock,
        typusFrameworkOriginPackageId,
        typusFrameworkPackageId,
        packageId,
        typeArguments,
        registry,
        index,
        receipts,
        user,
        amount
    );
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });

    console.log(res);
})();
