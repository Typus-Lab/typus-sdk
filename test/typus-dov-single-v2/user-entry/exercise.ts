import "src/utils/load_env";
import { getExerciseTx } from "src/typus-dov-single-v2";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

const config = TypusConfig.default("TESTNET");
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const user = signer.toSuiAddress();
const provider = new SuiClient({ url: config.rpcEndpoint });

(async () => {
    let depositToken = "0x2::sui::SUI";
    let bidToken = "0x2::sui::SUI";
    let gasBudget = 100000000;
    let typusFrameworkPackageId = config.package.framework;
    let packageId = config.package;
    let typeArguments = [depositToken, bidToken];
    let registry = config.registry;
    let index = "0";
    let receipts = [];
    let request = [{ typeArguments, index, receipts }];

    // @ts-ignore
    let transactionBlock = await getExerciseTx(gasBudget, typusFrameworkPackageId, packageId, registry, request);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
