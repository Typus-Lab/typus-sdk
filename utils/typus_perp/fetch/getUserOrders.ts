import { SuiClient } from "@mysten/sui.js/client";
import { getUserOrders as _getUserOrders } from "../trading/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { readVecOrder } from "../readVec";
import { TradingOrder } from "../position/structs";

export async function getUserOrders(
    provider: SuiClient,
    config: { OBJECT: { TYPUS_PERP_VERSION: string }; REGISTRY: { MARKET_REGISTRY: string } },
    user: string
) {
    let tx = new TransactionBlock();

    _getUserOrders(tx, {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.MARKET_REGISTRY,
        marketIndex: BigInt(0),
        user,
    });

    let res = await provider.devInspectTransactionBlock({ sender: user, transactionBlock: tx });
    // console.log(res);

    // @ts-ignore
    const returnValues = res.results[0].returnValues[0][0];
    // console.log(returnValues);

    const orders: TradingOrder[] = readVecOrder(Uint8Array.from(returnValues));
    // console.log(orders);
    return orders;
}
