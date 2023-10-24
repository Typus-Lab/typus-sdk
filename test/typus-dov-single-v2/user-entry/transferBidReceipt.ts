import "../../load_env";
import { getTransferBidReceiptTx } from "../../../utils/typus-dov-single-v2/user-entry";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import config from "../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

(async () => {
    let depositToken = "0x2::sui::SUI";
    let bidToken = "0x2::sui::SUI";
    let gasBudget = 100000000;
    let typusFrameworkPackageId = config.FRAMEWORK_PACKAGE;
    let packageId = config.PACKAGE;
    let typeArguments = [depositToken, bidToken];
    let registry = config.REGISTRY;
    let index = "0";
    let receipts = [];
    let recipient = await signer.getAddress();
    let share = "100";

    let transactionBlock = await getTransferBidReceiptTx({
        gasBudget,
        typusFrameworkPackageId,
        packageId,
        typeArguments,
        registry,
        index,
        receipts,
        share,
        recipient,
    });
    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(res);
})();
