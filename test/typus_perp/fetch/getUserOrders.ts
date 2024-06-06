import configs from "../../../perp.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getUserOrders } from "../../../utils/typus_perp/trading/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import "../../load_env";
import { Position, readVecOrder } from "../../../utils/typus_perp/position/structs";
import { bcs } from "@mysten/bcs";

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

    getUserOrders(tx, {
        version: config.TYPUS_PERP_VERSION,
        registry: config.TYPUS_PERP_MARKET_REGISTRY,
        marketIndex: BigInt(0),
        user,
    });

    let res = await provider.devInspectTransactionBlock({ sender: user, transactionBlock: tx });
    // console.log(res);

    // @ts-ignore
    const returnValues = res.results[0].returnValues[0][0];
    // console.log(returnValues);

    const orders = readVecOrder(Uint8Array.from(returnValues));
    console.log(orders);
})();
