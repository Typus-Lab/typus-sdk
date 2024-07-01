import { SuiClient } from "@mysten/sui.js/client";
import { getUserPositions as _getUserPositions } from "../trading/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { readVecPosition } from "../readVec";
import { Position } from "../position/structs";

export async function getUserPositions(
    provider: SuiClient,
    config: { OBJECT: { TYPUS_PERP_VERSION: string }; REGISTRY: { MARKET_REGISTRY: string } },
    user: string
) {
    let tx = new TransactionBlock();

    _getUserPositions(tx, {
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

    const positions: Position[] = readVecPosition(Uint8Array.from(returnValues));
    // console.log(positions);
    return positions;
}
