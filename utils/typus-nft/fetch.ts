// import { SuiClient } from "@mysten/sui.js/dist/cjs/client";
// import { JsonRpcProvider } from "@mysten/sui.js/dist/cjs/providers/json-rpc-provider";
import { JsonRpcProvider } from "@mysten/sui.js";

export async function getPool(provider: JsonRpcProvider, pool: string) {
    const res = await provider.getObject({ id: pool, options: { showContent: true } });

    // @ts-ignore
    const fields = res.data?.content.fields;

    const poolData: PoolData = {
        is_live: fields.is_live,
        num: Number(fields.num),
        remaing: fields.tails.length,
    };

    return poolData;
}

interface PoolData {
    is_live: boolean;
    num: number;
    remaing: number;
}
