import { SuiClient } from "@mysten/sui.js/client";
import { getUserShares } from "../stake-pool/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { readVecShares } from "../readVec";
import { LpUserShare } from "../stake-pool/structs";

export async function getUserStake(
    provider: SuiClient,
    config: { REGISTRY: { STAKE_POOL_REGISTRY: string } },
    user: string
): Promise<LpUserShare[]> {
    let tx = new TransactionBlock();

    getUserShares(tx, {
        registry: config.REGISTRY.STAKE_POOL_REGISTRY,
        index: BigInt(0),
        user,
    });

    let res = await provider.devInspectTransactionBlock({ sender: user, transactionBlock: tx });
    // console.log(res);

    if (res.results) {
        // @ts-ignore
        const returnValues = res.results[0].returnValues[0][0];
        // console.log(returnValues);

        const stake: LpUserShare[] = readVecShares(Uint8Array.from(returnValues));
        // console.log(stake);
        // console.log(stake[0].deactivatingShares);
        // console.log(stake[0].lastIncentivePriceIndex);
        return stake;
    } else {
        return [];
    }
}
