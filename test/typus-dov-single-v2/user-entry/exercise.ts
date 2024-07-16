import "../../../src/utils/load_env";
import { getExerciseTx } from "../../../src";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "../../../config.json";

const config = configs.TESTNET;
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const user = signer.toSuiAddress();
const provider = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    let depositToken = "0x2::sui::SUI";
    let bidToken = "0x2::sui::SUI";
    let gasBudget = 100000000;
    let typusFrameworkPackageId = config.PACKAGE.FRAMEWORK;
    let packageId = config.PACKAGE;
    let typeArguments = [depositToken, bidToken];
    let registry = config.REGISTRY;
    let index = "0";
    let receipts = [];
    let request = [{ typeArguments, index, receipts }];

    // @ts-ignore
    let transactionBlock = await getExerciseTx(gasBudget, typusFrameworkPackageId, packageId, registry, request);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
