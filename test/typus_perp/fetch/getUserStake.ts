import configs from "../../../perp.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getUserShares } from "../../../utils/typus_perp/stake-pool/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import "../../load_env";
import { readVecShares } from "../../../utils/typus_perp/readVec";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    const user = keypair.toSuiAddress();
    console.log(user);

    let tx = new TransactionBlock();
    tx.setGasBudget(gasBudget);

    getUserShares(tx, {
        registry: config.TYPUS_PERP_STAKE_POOL_REGISTRY,
        index: BigInt(0),
        user,
    });

    let res = await provider.devInspectTransactionBlock({ sender: user, transactionBlock: tx });
    console.log(res);

    // @ts-ignore
    const returnValues = res.results[0].returnValues[0][0];
    console.log(returnValues);

    const orders = readVecShares(Uint8Array.from(returnValues));
    console.log(orders);
    // console.log(orders[0].last_harvest_ts_ms);
})();
