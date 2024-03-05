// import { SuiClient } from "@mysten/sui.js/dist/cjs/client";
// import { JsonRpcProvider } from "@mysten/sui.js/dist/cjs/providers/json-rpc-provider";
import { SuiClient } from "@mysten/sui.js/client";
import { Tails, fieldsToTails } from "../typus-nft/fetch";

export async function getUserStake(provider: SuiClient, nft_table: string, user: string) {
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

    // console.log(fields);

    const tails = fieldsToTails(fields);

    return tails;
}

interface Stake {
    owner: string;
    nft_id: string;
}

export async function getNftTable(provider: SuiClient, nft_table: string) {
    var result = await provider.getDynamicFields({
        parentId: nft_table,
    });

    var datas = result.data;

    while (result.hasNextPage) {
        result = await provider.getDynamicFields({
            parentId: nft_table,
            cursor: result.nextCursor,
        });
        datas = datas.concat(result.data);
    }
    // console.log(datas);

    return datas;
}

export async function getDailyAttendExp(provider: SuiClient, dailyAttendExp: string) {
    const object = await provider.getObject({
        id: dailyAttendExp,
        options: { showContent: true },
    });

    // @ts-ignore
    const result = object.data?.content?.fields.value;

    return result;
}
