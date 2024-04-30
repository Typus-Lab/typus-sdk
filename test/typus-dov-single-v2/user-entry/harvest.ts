import "../../load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getHarvestTx } from "../../../utils/typus-dov-single-v2/user-entry";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "../../../config.json";

const config = configs.TESTNET;
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const user = signer.toSuiAddress();
const provider = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    let transactionBlock = new TransactionBlock();
    transactionBlock = getHarvestTx({
        tx: transactionBlock,
        typusFrameworkOriginPackageId: config.PACKAGE_ORIGIN.FRAMEWORK,
        typusFrameworkPackageId: config.FRAMEWORK_PACKAGE,
        typusDovSinglePackageId: config.PACKAGE.DOV_SINGLE,
        typusDovSingleRegistry: config.REGISTRY.DOV_SINGLE,
        typeArguments: [config.USDT_TOKEN, config.USDT_TOKEN],
        index: "31",
        receipts: ["0x93809ac72a6eae1d17dc1777d490af77971a00423a933b061ff96a8fe2cecf85"],
        user,
        incentiveToken: config.SUI_TOKEN,
    });
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });

    console.log(res);
})();
