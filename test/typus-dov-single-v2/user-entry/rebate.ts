import "../../load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getRebateTx } from "../../../utils/typus-dov-single-v2/user-entry";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "../config.json";

const config = configs.TESTNET;
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const user = signer.toSuiAddress();
const provider = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    let transactionBlock = new TransactionBlock();
    transactionBlock = getRebateTx({
        tx: transactionBlock,
        typusFrameworkPackageId: config.FRAMEWORK_PACKAGE,
        typusDovSinglePackageId: config.DOV_SINGLE_PACKAGE,
        typusDovSingleRegistry: config.DOV_SINGLE_REGISTRY,
        typeArgument: config.SUI_TOKEN,
        user,
    });
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });

    console.log(res);
})();
