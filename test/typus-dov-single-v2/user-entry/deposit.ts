import "../../load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getDepositTx } from "../../../utils/typus-dov-single-v2/user-entry";
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
    let gasBudget = 100000000;
    let typusFrameworkOriginPackageId = config.FRAMEWORK_PACKAGE_ORIGIN;
    let typusFrameworkPackageId = config.FRAMEWORK_PACKAGE;
    let packageId = config.PACKAGE;
    let typeArguments = [depositToken, bidToken];
    let registry = config.REGISTRY;
    let index = "19";
    let coins = (await provider.getCoins({ owner: user, coinType: depositToken })).data.map((coin) => coin.coinObjectId);
    let amount = "10000000000";
    let receipts = [];

    let transactionBlock = new TransactionBlock();
    transactionBlock = await getDepositTx(
        transactionBlock,
        typusFrameworkOriginPackageId,
        typusFrameworkPackageId,
        packageId,
        typeArguments,
        registry,
        index,
        coins,
        amount,
        receipts,
        user
    );
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });

    console.log(res);
})();
