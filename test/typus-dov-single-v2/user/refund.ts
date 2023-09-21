import "../../load_env";
import { getRefundTx } from "../../../utils/typus-dov-single-v2/user-entry";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import config from "../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

(async () => {
    let token = "0x2::sui::SUI";
    let gasBudget = 100000000;
    let packageId = config.PACKAGE;
    let typeArguments = [token];
    let registry = config.REGISTRY;

    let transactionBlock = await getRefundTx(gasBudget, packageId, typeArguments, registry);
    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(res);
})();
