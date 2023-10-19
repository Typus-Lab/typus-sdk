import "../../load_env";
import { getUpdateConfigTx } from "../../../utils/typus-dov-single-v2/authorized-entry";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import config from "../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

(async () => {
    let gasBudget = 100000000;
    let packageId = config.PACKAGE;
    let registry = config.REGISTRY;
    let index = "0";

    let transactionBlock = await getUpdateConfigTx(gasBudget, packageId, registry, index, {});
    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(res);
})();
