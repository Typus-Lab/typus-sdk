import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getUpdateConfigTx, UpdateConfigRequests } from "../../../src";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "../../../config.json";
import "../../../src/utils/load_env";

const config = configs.MAINNET;
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const user = signer.toSuiAddress();
const provider = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    let gasBudget = 1000000000;
    let packageId = config.PACKAGE.DOV_SINGLE;
    let registry = config.REGISTRY.DOV_SINGLE;
    let requests: UpdateConfigRequests[] = [];
    requests.push({ index: "21", config: { capacity: "2100000000000000" } });

    let transactionBlock = await getUpdateConfigTx(gasBudget, packageId, registry, requests);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
