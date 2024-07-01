import { SuiClient } from "@mysten/sui.js/client";
import { LiquidityPool, Registry } from "../lp-pool/structs";

export async function getLpPools(provider: SuiClient, config: { REGISTRY: { LP_POOL_REGISTRY: string } }): Promise<LiquidityPool[]> {
    const lpPoolRegistry = await Registry.fetch(provider, config.REGISTRY.LP_POOL_REGISTRY);
    // console.log(lpPoolRegistry);

    const dynamicFields = await provider.getDynamicFields({
        parentId: lpPoolRegistry.liquidityPoolRegistry,
    });

    const lpPools: LiquidityPool[] = [];

    for (const field of dynamicFields.data) {
        const lpPool = await LiquidityPool.fetch(provider, field.objectId);
        // console.log(lpPool);
        lpPools.push(lpPool);
    }

    return lpPools;
}
