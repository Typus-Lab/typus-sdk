import dotenv from "dotenv";
import { getLevelCounts, getSetProfitSharingTx } from "src/typus/tails-staking";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig, splitCoins } from "src/utils";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import slack from "slack";
import { calculateLevelReward } from "src/typus-nft";

let process = require("process");
process.removeAllListeners("warning");

interface Material {
    now: number;
    package: string;
    wallet: string;
    token: string;
    tokenDecimal: number;
    rewards: number;
    levelCounts: number[];
    levelProfits: number[];
    remainingProfit: number;
    walletBalance: number;
    spendingProfit: number;
    tsMs: number;
    roundInterval: number;
    nextRoundToken: string;
    nextRoundTokenDecimal: number;
    nextRoundRewards: number;
    nextRoundTsMs: number;
}

(async () => {
    dotenv.config({ path: ".env" });
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let levelShares = [0, 0.003, 0.017, 0.05, 0.1, 0.29, 0.54];

    let material = await (async () => {
        let now = Date.now();
        let tsMs = Number.parseInt(
            //@ts-ignore
            (
                await provider.queryEvents({
                    query: {
                        MoveEventType:
                            "0xf5c7e61fd28d1ed38711f03e1c5ffc6c5b8435eff386132fc5822efe6d90b138::tails_staking::SetProfitSharingEvent",
                    },
                    limit: 1,
                    order: "descending",
                })
            ).data[0].parsedJson.log[3]
        );
        let roundInterval = 86400000 * Number.parseInt(String(process.env.ROUND_INTERVAL));
        let nextRoundTsMs = tsMs + roundInterval;
        let rewards = Number.parseInt(String(process.env.REWARDS));
        let token = String(process.env.TOKEN);
        let levelCounts = await getLevelCounts(config);
        let levelProfits = calculateLevelReward(rewards, levelShares, levelCounts);
        let profitAsset = (await provider.getDynamicFields({ parentId: config.registry.typus.tailsStaking })).data
            .filter((x) => x.objectType.includes(token))
            .map((x) => x.objectId as string)[0];
        let remainingProfit = profitAsset
            ? // @ts-ignore
              Number.parseInt((await provider.getObject({ id: profitAsset, options: { showContent: true } })).data?.content.fields.value)
            : 0;
        let walletBalance = Number.parseInt((await provider.getBalance({ owner: keypair.toSuiAddress(), coinType: token })).totalBalance);
        let spendingProfit = 0;
        for (let i = 0; i < 7; i++) {
            spendingProfit += levelCounts[i] * levelProfits[i];
        }
        spendingProfit -= remainingProfit;

        return {
            now,
            package: config.package.typus,
            wallet: keypair.toSuiAddress(),
            token,
            tokenDecimal: Number.parseInt(String(process.env.TOKEN_DECIMAL)),
            rewards,
            levelCounts,
            levelProfits,
            remainingProfit,
            walletBalance,
            spendingProfit,
            tsMs,
            roundInterval,
            nextRoundToken: String(process.env.NEXT_ROUND_TOKEN),
            nextRoundTokenDecimal: Number.parseInt(String(process.env.NEXT_ROUND_TOKEN_DECIMAL)),
            nextRoundRewards: Number.parseInt(String(process.env.NEXT_ROUND_REWARDS)),
            nextRoundTsMs,
        } as Material;
    })();

    if (material.now < material.tsMs || material.walletBalance < material.spendingProfit) {
        log(material);
        return;
    }
    let coins = (await provider.getCoins({ owner: keypair.toSuiAddress(), coinType: material.token })).data.map(
        (coin) => coin.coinObjectId
    );
    let tx = new Transaction();
    let coin = splitCoins(tx, material.token, coins, material.spendingProfit.toString());
    tx = getSetProfitSharingTx(config, tx, {
        typeArguments: [material.token, material.nextRoundToken],
        levelProfits: material.levelProfits.map((x) => x.toString()),
        coin,
        amount: material.nextRoundRewards.toString(),
        tsMs: material.nextRoundTsMs.toString(),
    });

    let result = await provider.signAndExecuteTransaction({ signer: keypair, transaction: tx });
    log(material, result.digest);
})();

function log(material: Material, digest?: string) {
    let msg = "<<Profit Sharing Info>>\n";
    msg += `now:              ${material.now} (${new Date(material.now).toLocaleString("en-US", { dateStyle: "full", timeStyle: "full", hourCycle: "h24", timeZone: "Asia/Taipei" })})\n`;
    msg += `package:          ${material.package}\n`;
    msg += `wallet:           ${material.wallet}\n`;
    msg += `token:            ${material.token}\n`;
    msg += `levelCounts:      ${material.levelCounts.join(", ")}\n`;
    msg += `levelProfits:     ${material.levelProfits
        .map((x) => {
            return (x / Math.pow(10, material.tokenDecimal)).toFixed(material.tokenDecimal);
        })
        .join(", ")}\n`;
    msg += `walletBalance:    ${(material.walletBalance / Math.pow(10, material.tokenDecimal)).toFixed(material.tokenDecimal)}\n`;
    msg += `rewards:          ${(material.rewards / Math.pow(10, material.tokenDecimal)).toFixed(material.tokenDecimal)}\n`;
    msg += `remainingProfit:  ${(material.remainingProfit / Math.pow(10, material.tokenDecimal)).toFixed(material.tokenDecimal)}\n`;
    if (material.walletBalance < material.spendingProfit) {
        msg += `spendingProfit:   ${(material.spendingProfit / Math.pow(10, material.tokenDecimal)).toFixed(material.tokenDecimal)}\n`;
        msg += `lack:             ${((material.spendingProfit - material.walletBalance) / Math.pow(10, material.tokenDecimal)).toFixed(material.tokenDecimal)}\n`;
    } else {
        msg += `spendingProfit:   ${(material.spendingProfit / Math.pow(10, material.tokenDecimal)).toFixed(material.tokenDecimal)}\n`;
    }
    msg += `tsMs:             ${material.tsMs} (${new Date(material.tsMs).toLocaleString("en-US", { dateStyle: "full", timeStyle: "full", hourCycle: "h24", timeZone: "Asia/Taipei" })})\n`;
    msg += `nextRoundToken:   ${material.nextRoundToken}\n`;
    msg += `nextRoundRewards: ${(material.nextRoundRewards / Math.pow(10, material.nextRoundTokenDecimal)).toFixed(material.nextRoundTokenDecimal)}\n`;
    msg += `nextRoundTsMs:    ${material.nextRoundTsMs} (${new Date(material.nextRoundTsMs).toLocaleString("en-US", { dateStyle: "full", timeStyle: "full", hourCycle: "h24", timeZone: "Asia/Taipei" })})\n`;
    if (digest) {
        msg += `transaction:     https://suivision.xyz/txblock/${digest}`;
    }
    if (material.now >= material.tsMs && material.walletBalance < material.spendingProfit) {
        msg += "*!!!ALERT!!! INSUFFICIENT BALANCE!!!*";
    }
    console.log(msg);
    slack.chat.postMessage({
        token: String(process.env.SLACK_BOT_TOKEN),
        channel: String(process.env.SLACK_CHANNEL),
        text: `\`\`\`${msg}\`\`\``,
    });
}
