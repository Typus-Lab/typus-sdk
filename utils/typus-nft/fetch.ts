import { SuiClient } from "@mysten/sui.js/dist/cjs/client";
// import { JsonRpcProvider } from "@mysten/sui.js/dist/cjs/providers/json-rpc-provider";

export async function getPool(client: SuiClient, pool: string) {
    const res = await client.getObject({ id: pool, options: { showContent: true } });

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
