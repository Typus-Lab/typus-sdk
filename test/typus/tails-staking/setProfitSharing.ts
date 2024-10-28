import { getLevelCounts, getSetProfitSharingTx } from "src/typus/tails-staking";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import slack from "slack";
import { calculateLevelReward } from "src/typus-nft";

let process = require("process");
process.removeAllListeners("warning");

interface Material {
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
    nextWeekToken: string;
    nextWeekTokenDecimal: number;
    nextWeekRewards: number;
    nextWeekTsMs: number;
}

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let levelShares = [0, 0.003, 0.017, 0.05, 0.1, 0.29, 0.54];

    let material = await (async () => {
        let tsMs = Date.now();
        let nextWeekTsMs =
            Number.parseInt(
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
            ) +
            86400000 * 7;
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
            nextWeekToken: String(process.env.NEXT_WEEK_TOKEN),
            nextWeekTokenDecimal: Number.parseInt(String(process.env.NEXT_WEEK_TOKEN_DECIMAL)),
            nextWeekRewards: Number.parseInt(String(process.env.NEXT_WEEK_REWARDS)),
            nextWeekTsMs,
        } as Material;
    })();

    if (material.nextWeekTsMs - material.tsMs > 7 * 24 * 60 * 60 * 1000 || material.walletBalance < material.spendingProfit) {
        log(material);
        return;
    }
    let tx = new TransactionBlock();
    let mergedCoin = tx.gas;
    if (material.token != config.token.sui) {
        let coins = (await provider.getCoins({ owner: keypair.toSuiAddress(), coinType: material.token })).data.map(
            (coin) => coin.coinObjectId
        );
        let coin = coins.pop()!;
        if (coins.length > 0) {
            tx.mergeCoins(
                tx.object(coin),
                coins.map((coin) => tx.object(coin))
            );
        }
        mergedCoin = tx.object(coin);
    }
    let [inputCoin] = tx.splitCoins(mergedCoin, [tx.pure(material.spendingProfit)]);
    tx = getSetProfitSharingTx(config, tx, {
        typeArguments: [material.token, material.nextWeekToken],
        levelProfits: material.levelProfits.map((x) => x.toString()),
        coin: inputCoin,
        amount: material.nextWeekRewards.toString(),
        tsMs: material.nextWeekTsMs.toString(),
    });

    let result = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    log(material, result.digest);
})();

function log(material: Material, digest?: string) {
    let msg = "<<Profit Sharing Info>>\n";
    msg += `package:         ${material.package}\n`;
    msg += `wallet:          ${material.wallet}\n`;
    msg += `token:           ${material.token}\n`;
    msg += `levelCounts:     ${material.levelCounts.join(", ")}\n`;
    msg += `levelProfits:    ${material.levelProfits
        .map((x) => {
            return (x / Math.pow(10, material.tokenDecimal)).toFixed(material.tokenDecimal);
        })
        .join(", ")}\n`;
    msg += `walletBalance:   ${(material.walletBalance / Math.pow(10, material.tokenDecimal)).toFixed(material.tokenDecimal)}\n`;
    msg += `rewards:         ${(material.rewards / Math.pow(10, material.tokenDecimal)).toFixed(material.tokenDecimal)}\n`;
    msg += `remainingProfit: ${(material.remainingProfit / Math.pow(10, material.tokenDecimal)).toFixed(material.tokenDecimal)}\n`;
    if (material.walletBalance < material.spendingProfit) {
        msg += `spendingProfit:  ${(material.spendingProfit / Math.pow(10, material.tokenDecimal)).toFixed(material.tokenDecimal)}\n`;
        msg += `lack:            ${((material.spendingProfit - material.walletBalance) / Math.pow(10, material.tokenDecimal)).toFixed(material.tokenDecimal)}\n`;
    } else {
        msg += `spendingProfit:  ${(material.spendingProfit / Math.pow(10, material.tokenDecimal)).toFixed(material.tokenDecimal)}\n`;
    }
    msg += `nextWeekToken:   ${material.nextWeekToken}\n`;
    msg += `nextWeekRewards: ${(material.nextWeekRewards / Math.pow(10, material.nextWeekTokenDecimal)).toFixed(material.nextWeekTokenDecimal)}\n`;
    msg += `nextWeekTsMs:    ${material.nextWeekTsMs} (${new Date(material.nextWeekTsMs).toLocaleString("en-US", { dateStyle: "full", timeStyle: "full", hourCycle: "h24", timeZone: "Asia/Taipei" })})\n`;
    if (digest) {
        msg += `transaction:     https://suivision.xyz/txblock/${digest}`;
    }
    if (material.nextWeekTsMs - material.tsMs <= 7 * 24 * 60 * 60 * 1000 && material.walletBalance < material.spendingProfit) {
        msg += "*!!!ALERT!!! INSUFFICIENT BALANCE!!!*";
    }
    console.log(msg);
    slack.chat.postMessage({
        token: String(process.env.SLACK_BOT_TOKEN),
        channel: String(process.env.SLACK_CHANNEL),
        text: `\`\`\`${msg}\`\`\``,
    });
}
