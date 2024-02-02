// @ts-nocheck
import "../load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getVaults } from "../../utils/typus-dov-single-v2/view-function";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "./config.json";
import * as fs from "fs";
import { array } from "superstruct";

const config = configs.MAINNET;
const provider = new SuiClient({ url: config.RPC_ENDPOINT });

async function i() {
    const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let gasBudget = 1000000000;
    let packageId = "0xb6f8dcaaa66119503ced9cef9362f9162d03d1f6fcd37e49bb456ea0aa26ab60";
    let module = "typus_fs";
    let registry = "0x9340fbdfe6ce5c8094e41cf26afcce65fcf4b0b312db23ab91522d50592ca7e2";
    let key = "avif";
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${packageId}::${module}::add`,
        typeArguments: [],
        arguments: [transactionBlock.pure(registry), transactionBlock.pure(key)],
    });
    transactionBlock.setGasBudget(gasBudget);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
    let image = fs.readFileSync(`/Users/starj/Downloads/${key}.txt`, "utf-8");
    let pieces = image.match(/.{1,10240}/g);
    let reverse_string = (str: string): string => [...str].reverse().join("");
    for (let i in pieces) {
        await new Promise((f) => setTimeout(f, 1000));
        let transactionBlock = new TransactionBlock();
        transactionBlock.moveCall({
            target: `${packageId}::${module}::reverse_extend`,
            typeArguments: [],
            arguments: [transactionBlock.pure(registry), transactionBlock.pure(key), transactionBlock.pure(reverse_string(pieces[i]))],
        });
        transactionBlock.setGasBudget(gasBudget);
        let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
        console.log(res);
    }
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

async function iv() {
    export interface Tails {
        id: string;
        number: string;
        level: string;
        exp: string;
        necklace: string;
        previousTransaction: string;
        owner: string;
    }
    let tails = {};
    let transactions = {};
    let ids = fs.readFileSync(`/Users/starj/Documents/alphabit/tails.txt`, "utf-8").split("\n");

    for (let i = 0; i < ids.length; i += 50) {
        console.log(i);
        let slice = ids.slice(i, i + 50);
        let data = await provider.multiGetObjects({
            ids: slice,
            options: {
                showContent: true,
                showPreviousTransaction: true,
            },
        });
        data.forEach((x) => {
            tails[x.data.content.fields.id.id] = {
                id: x.data.content.fields.id.id,
                number: x.data.content.fields.number,
                level: x.data.content.fields.level,
                exp: x.data.content.fields.exp,
                necklace: x.data.content.fields.attributes.fields.contents[3].fields.value,
                previousTransaction: x.data.previousTransaction,
            } as Tails;
        });
        let data = await provider.multiGetTransactionBlocks({
            digests: [...new Set(data.map((x) => x.data.previousTransaction))],
            options: { showInput: true },
        });
        data.forEach((x) => {
            transactions[x.digest] = x.transaction.data.sender;
        });
        slice.forEach((x) => {
            tails[x].owner = transactions[tails[x].previousTransaction];
        });
    }

    let result = Object.values(tails);
    result.sort((a, b) => a.owner.localeCompare(b.owner));
    let csv = "";
    result.forEach((x) => {
        csv =
            csv +
            x.id +
            "," +
            x.number +
            "," +
            x.level +
            "," +
            x.exp +
            "," +
            x.necklace +
            "," +
            x.previousTransaction +
            "," +
            x.owner +
            "\n";
    });
    fs.writeFileSync("./tails.csv", csv);
}

(async () => {
    await iv();
})();
