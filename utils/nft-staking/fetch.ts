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

export async function getDailyAttendExp(provider: SuiClient, dailyAttendExp: string) {
    const object = await provider.getObject({
        id: dailyAttendExp,
        options: { showContent: true },
    });

    // @ts-ignore
    const result = object.data?.content?.fields.value;

    return result;
}
