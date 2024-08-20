import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getUpdateConfigTx, UpdateConfigRequests } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui.js/client";
import { TypusConfig } from "src/utils";
import "src/utils/load_env";

const config = TypusConfig.default("MAINNET");
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const user = signer.toSuiAddress();
const provider = new SuiClient({ url: config.rpcEndpoint });

(async () => {
    let gasBudget = 1000000000;
    let packageId = config.package.dovSingle;
    let registry = config.registry.dov.dovSingle;
    let requests: UpdateConfigRequests[] = [];
    requests.push({ index: "21", config: { capacity: "2100000000000000" } });

    let transactionBlock = await getUpdateConfigTx(gasBudget, packageId, registry, requests);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
