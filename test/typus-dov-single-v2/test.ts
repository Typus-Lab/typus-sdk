// @ts-nocheck
import "../load_env";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "./config.json";
import { getVaults } from "../../utils/typus-dov-single-v2/view-function";

const config = configs.MAINNET;
const provider = new SuiClient({ url: config.RPC_ENDPOINT });

async function i() {
    let user = "0x978f65df8570a075298598a9965c18de9087f9e888eb3430fe20334f5c554cfd";
    let transactionBlock = new TransactionBlock();
    let target = `0x2::clock::timestamp_ms` as any;
    transactionBlock.moveCall({
        target,
        typeArguments: [],
        arguments: [transactionBlock.pure("0x6")],
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock, sender: user })).results;

    console.log(JSON.stringify(results));
    // console.log(JSON.stringify(results, null, 2));
}

async function ii() {
    let vaults = Object.values(await getVaults(provider, config.DOV_SINGLE_PACKAGE, config.DOV_SINGLE_REGISTRY, []));
    for (let i = 0; i < vaults.length; i++) {
        // let indexes = [23, 27, 28];
        // if (!indexes.includes(i)) {
        //     continue;
        // }
        let data = (await provider.getDynamicFields({ parentId: vaults[i].depositVault.id })).data;
        let balances = await provider.multiGetObjects({
            ids: data.filter((x) => x.objectType.includes("Balance")).map((x) => x.objectId as string),
            options: { showContent: true },
        });
        let t_active_share = BigInt(0);
        let t_deactivating_share = BigInt(0);
        let t_inactive_share = BigInt(0);
        let t_warmup_share = BigInt(0);
        let t_premium_share = BigInt(0);
        let t_incentive_share = BigInt(0);
        (
            await provider.getObject({
                id: (
                    await provider.getDynamicFields({
                        parentId: (
                            await provider.getObject({
                                id: data.find((x) => x.objectType.includes("BigVector")).objectId,
                                options: { showContent: true },
                            })
                        ).data.content.fields.value.fields.id.id,
                    })
                ).data[0].objectId,
                options: { showContent: true },
            })
        ).data.content.fields.value.forEach((depositShare) => {
            t_active_share += BigInt(depositShare.fields.active_share);
            t_deactivating_share += BigInt(depositShare.fields.deactivating_share);
            t_inactive_share += BigInt(depositShare.fields.inactive_share);
            t_warmup_share += BigInt(depositShare.fields.warmup_share);
            t_premium_share += BigInt(depositShare.fields.premium_share);
            t_incentive_share += BigInt(depositShare.fields.incentive_share);
        });
        let result = {
            index: vaults[i].depositVault.index,
            active_balance: "0",
            __active_share: vaults[i].depositVault.activeShareSupply,
            t_active_share: t_active_share.toString(),
            deactivating_balance: "0",
            __deactivating_share: vaults[i].depositVault.deactivatingShareSupply,
            t_deactivating_share: t_deactivating_share.toString(),
            inactive_balance: "0",
            __inactive_share: vaults[i].depositVault.inactiveShareSupply,
            t_inactive_share: t_inactive_share.toString(),
            warmup_balance: "0",
            __warmup_share: vaults[i].depositVault.warmupShareSupply,
            t_warmup_share: t_warmup_share.toString(),
            premium_balance: "0",
            __premium_share: vaults[i].depositVault.premiumShareSupply,
            t_premium_share: t_premium_share.toString(),
            incentive_balance: "0",
            __incentive_share: vaults[i].depositVault.incentiveShareSupply,
            t_incentive_share: t_incentive_share.toString(),
        };
        balances.forEach((x) => {
            result[String.fromCharCode.apply(null, Array.from(x.data.content.fields.name))] = x.data.content.fields.value;
        });
        console.log(result);
        await new Promise((f) => setTimeout(f, 1000));
    }
}

async function iii() {
    let data = (
        await provider.getDynamicFields({ parentId: "0xf8ed4cec0d3863d46083fd84254a15199e2d8fd91638444014afe55359553a59" })
    ).data.map((x) => x.objectId as string);
    let result = await provider.multiGetObjects({
        ids: data,
        options: { showContent: true },
    });
    console.log(JSON.stringify(result, null, 2));
}

(async () => {
    await ii();
})();
