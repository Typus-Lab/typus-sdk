import "../../load_env";
import { UpdateConfigRequests, getUpdateConfigTx } from "../../../utils/typus-dov-single-v2/authorized-entry";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import config from "../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

(async () => {
    let gasBudget = 1000000000;
    let packageId = config.PACKAGE;
    let registry = config.REGISTRY;
    let requests: UpdateConfigRequests[] = [];
    for (var i = 0; i <= 13; i++) {
        requests.push({ index: i + "", config: { recoupDelayTsMs: "1800000" } });
    }

    let transactionBlock = await getUpdateConfigTx(gasBudget, packageId, registry, requests);
    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(res);
})();
