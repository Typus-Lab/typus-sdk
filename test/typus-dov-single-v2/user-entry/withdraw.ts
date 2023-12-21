import "../../load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getWithdrawTx } from "../../../utils/typus-dov-single-v2/user-entry";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "../config.json";

const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const user = signer.toSuiAddress();
const provider = new SuiClient({ url: getFullnodeUrl("testnet") });

(async () => {
    let config = configs.TESTNET;
    let depositToken = "0x2::sui::SUI";
    let bidToken = "0x2::sui::SUI";
    let typusFrameworkOriginPackageId = config.FRAMEWORK_PACKAGE_ORIGIN;
    let typusFrameworkPackageId = config.FRAMEWORK_PACKAGE;
    let packageId = config.PACKAGE;
    let typeArguments = [depositToken, bidToken];
    let registry = config.REGISTRY;
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
