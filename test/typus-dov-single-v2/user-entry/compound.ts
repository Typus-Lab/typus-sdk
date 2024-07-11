import "@/utils/load_env";
import { getCompoundTx } from "../../../utils/typus-dov-single-v2/user-entry";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import config from "../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

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

    let transactionBlock = await getCompoundTx(gasBudget, typusFrameworkPackageId, packageId, registry, request);
    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(res);
})();
