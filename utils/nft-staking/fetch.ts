// import { SuiClient } from "@mysten/sui.js/dist/cjs/client";
// import { JsonRpcProvider } from "@mysten/sui.js/dist/cjs/providers/json-rpc-provider";
import { JsonRpcProvider } from "@mysten/sui.js";
import { Tails } from "../typus-nft/fetch";

export async function getUserStake(provider: JsonRpcProvider, nft_table: string, user: string) {
    const res = await provider.getDynamicFieldObject({
        parentId: nft_table,
        name: {
            type: "address",
            value: user,
        },
    });

    if (res.error) {
        return null;
    }

    // @ts-ignore
    const fields = res.data?.content.fields;

    const staked_tails: StakedTails = {
        nft: fields.value.fields.nft.fields,
        snapshot_ms: fields.value.fields.snapshot_ms,
        updating_url: fields.value.fields.updating_url,
    };

    return staked_tails;
}

export interface StakedTails {
    nft: Tails;
    snapshot_ms: string;
    updating_url: boolean; // false: able to unstake
}
