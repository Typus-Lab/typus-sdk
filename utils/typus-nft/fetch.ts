// import { SuiClient } from "@mysten/sui.js/dist/cjs/client";
// import { JsonRpcProvider } from "@mysten/sui.js/dist/cjs/providers/json-rpc-provider";
import { JsonRpcProvider } from "@mysten/sui.js";

export async function getPool(provider: JsonRpcProvider, pool: string) {
    const res = await provider.getObject({ id: pool, options: { showContent: true } });

    // @ts-ignore
    const fields = res.data?.content.fields;

    const poolData: PoolData = {
        pool_id: pool,
        is_live: fields.is_live,
        num: Number(fields.num),
        remaing: fields.tails.length,
    };

    return poolData;
}

export interface PoolData {
    pool_id: string;
    is_live: boolean;
    num: number;
    remaing: number;
}

export const necklaces = [
    "none",
    "bucket_protocol",
    "kriya_dex",
    "cetus_protocol",
    "ethos_wallet",
    "typus",
    "mysten_labs",
    "navi_protocol",
    "scallop_sui",
    "shinami_corp",
    "studio_mirai",
    "sui_frens",
    "sui_network",
    "blockvision",
];

export async function getPoolMap(provider: JsonRpcProvider, nftConfig) {
    let pools: string[] = necklaces.map((necklace) => nftConfig[necklace]);

    const res = await provider.multiGetObjects({ ids: pools, options: { showContent: true } });

    const poolMap: Map<string, PoolData> = await necklaces.reduce(async (promise, necklace, i) => {
        let map = await promise;

        // @ts-ignore
        const fields = res[i].data?.content.fields;

        const poolData: PoolData = {
            pool_id: pools[i],
            is_live: fields.is_live,
            num: Number(fields.num),
            remaing: fields.tails.length,
        };

        map[necklace] = poolData;
        return map;
    }, Promise.resolve(new Map<string, PoolData>()));

    return poolMap;
}

export async function getWhitelistMap(nftConfig, wlTokens) {
    let pools: string[] = necklaces.map((necklace) => nftConfig[necklace]);

    console.log(pools);

    const whitelistMap = new Map<string, string[]>();

    necklaces.forEach(async (necklace, i) => {
        const tokens = wlTokens.filter(
            (wlToken) =>
                // @ts-ignore
                wlToken.data?.content?.fields.for == pools[i]
        );

        console.log(tokens);

        whitelistMap.set(
            necklace,
            tokens.map((token) => token.data?.objectId)
        );
    });

    return whitelistMap;
}
