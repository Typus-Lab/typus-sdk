import "../../load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getUpdateConfigTx, UpdateConfigRequests } from "../../../utils/typus-dov-single-v2/authorized-entry";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "../../../config.json";

const config = configs.TESTNET;
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const user = signer.toSuiAddress();
const provider = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    let gasBudget = 1000000000;
    let packageId = config.PACKAGE.DOV_SINGLE;
    let registry = config.REGISTRY.DOV_SINGLE;
    let requests: UpdateConfigRequests[] = [];
    requests.push({ index: "34", config: { depositLotSize: "10", bidLotSize: "10", minDepositSize: "10", minBidSize: "10" } });

    let transactionBlock = await getUpdateConfigTx(gasBudget, packageId, registry, requests);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
