import configs from "../../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { cancelTradingOrder, getUserOrders } from "../../../../utils/typus_perp/trading/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { readVecOrder } from "../../../../utils/typus_perp/readVec";
import "../../../load_env";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    const tx1 = new TransactionBlock();
    tx1.setGasBudget(gasBudget);

    getUserOrders(tx1, {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.MARKET_REGISTRY,
        marketIndex: BigInt(0),
        user: address,
    });

    const res1 = await provider.devInspectTransactionBlock({ sender: address, transactionBlock: tx1 });
    // console.log(res1);

    // @ts-ignore
    const returnValues = res1.results[0].returnValues[0][0];
    // console.log(returnValues);

    const orders = readVecOrder(Uint8Array.from(returnValues));
    console.log(orders);

    // Cancel the first order
    let order = orders[0];
    const tx = new TransactionBlock();
    tx.setGasBudget(gasBudget);

    const cToken = order.collateral_token;
    const BASE_TOKEN = order.baseToken;

    const coin = cancelTradingOrder(tx, [cToken, BASE_TOKEN], {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.MARKET_REGISTRY,
        marketIndex: BigInt(0),
        orderId: order.order_id,
        triggerPrice: order.trigger_price,
    });

    tx.transferObjects([coin], address);

    let dryrunRes = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: address,
    });
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("CancelTradingOrderEvent"))[0].parsedJson);

    const res2 = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res2);
})();
