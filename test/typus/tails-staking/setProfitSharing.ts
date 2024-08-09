import { getLevelCounts, getSetProfitSharingTx } from "src/typus/tails-staking";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "config.json";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import slack from "slack";

const process = require("process");
process.removeAllListeners("warning");
const config = configs.MAINNET;
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const levelShares = [0, 0.003, 0.017, 0.05, 0.1, 0.29, 0.54];

(async () => {
    let material = await init();
    if (material.nextWeekTsMs - material.tsMs > 7 * 24 * 60 * 60 * 1000 || material.walletBalance < material.spendingProfit) {
        log(material);
        return;
    }
    let tx = new TransactionBlock();
    let mergedCoin = tx.gas;
    if (material.token != config.TOKEN.SUI) {
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
    tx = getSetProfitSharingTx({
        tx,
        typusPackageId: config.PACKAGE.TYPUS,
        typusEcosystemVersion: config.OBJECT.TYPUS_VERSION,
        typusTailsStakingRegistry: config.REGISTRY.TAILS_STAKING,
        typeArguments: [material.token, material.nextWeekToken],
        levelProfits: material.levelProfits.map((x) => x.toString()),
        coin: inputCoin,
        amount: material.nextWeekRewards.toString(),
        tsMs: material.nextWeekTsMs.toString(),
    });
    tx.setGasBudget(100000000);
    let result = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    log(material, result.digest);
})();

interface Material {
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

async function init(): Promise<Material> {
    let tsMs = Date.now();
    let rewards = Number.parseInt(String(process.env.REWARDS));
    let token = String(process.env.TOKEN);
    let levelCounts = await getLevelCounts({
        provider,
        typusPackageId: config.PACKAGE.TYPUS,
        typusEcosystemVersion: config.OBJECT.TYPUS_VERSION,
        typusTailsStakingRegistry: config.REGISTRY.TAILS_STAKING,
    });
    let levelProfits = calculateLevelReward(rewards, levelShares, levelCounts);
    let profitAsset = (await provider.getDynamicFields({ parentId: config.REGISTRY.TAILS_STAKING })).data
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
        nextWeekTsMs: (Math.floor(tsMs / 86400000 / 7) + 1) * (86400000 * 7) + 370800000,
    };
}

function log(material: Material, digest?: string) {
    let msg = "<<Profit Sharing Info>>\n";
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
        channel: "tails-by-typus",
        text: `\`\`\`${msg}\`\`\``,
    });
}

function calculateLevelReward(totalRewards: number, levelShares: number[], numOfHolders: number[]): number[] {
    // Step 1: Calculate original level rewards (per holder)
    const totalShares: number = levelShares.reduce((acc, share) => acc + share, 0);
    const originalRewardPerHolder: number[] = levelShares.map((levelShare, index) => {
        const num: number = numOfHolders[index];
        const levelRewardPerHolder: number = num > 0 ? (totalRewards * levelShare) / totalShares / num : 0;
        return Math.floor(levelRewardPerHolder);
    });
    const originalLevelRewards: number[] = originalRewardPerHolder.map((reward, index) => reward * numOfHolders[index]);
    const distributedRewards: number = originalLevelRewards.reduce((acc, reward) => acc + reward, 0);
    const emptyLevelRewards: number = totalRewards - distributedRewards;

    // Step 2: Distribute rewards from empty levels
    let reversedOriginalRewardPerHolder: number[] = originalRewardPerHolder.slice().reverse();
    let reversedNumOfHolders: number[] = numOfHolders.slice().reverse();
    let reversedScaledRewardPerHolder: number[] = [];
    if (emptyLevelRewards > 0) {
        let undistributedRewards: number = emptyLevelRewards;
        let uncalculatedDistributedRewards: number = distributedRewards;
        reversedScaledRewardPerHolder = reversedOriginalRewardPerHolder.map((rewardPerHolder, index) => {
            const num: number = reversedNumOfHolders[index];
            const scaledRewardPerHolder: number =
                num > 0
                    ? uncalculatedDistributedRewards > 0
                        ? (rewardPerHolder * (uncalculatedDistributedRewards + undistributedRewards)) / uncalculatedDistributedRewards
                        : rewardPerHolder
                    : 0;

            undistributedRewards -= (scaledRewardPerHolder - rewardPerHolder) * num;
            uncalculatedDistributedRewards -= rewardPerHolder * num;
            return Math.floor(scaledRewardPerHolder);
        });
    } else {
        reversedScaledRewardPerHolder = reversedOriginalRewardPerHolder.slice();
    }

    // Step 3: Capped level reward
    let reversedCappedRewardPerHolder: number[] = [reversedOriginalRewardPerHolder[0]];
    var tempHighLevelReward: number = 0;
    reversedScaledRewardPerHolder.forEach((highLevelReward, index) => {
        const lowLevelReward: number = reversedScaledRewardPerHolder[index + 1] || 0;
        tempHighLevelReward =
            highLevelReward > 0
                ? tempHighLevelReward > 0
                    ? Math.min(highLevelReward, tempHighLevelReward)
                    : highLevelReward
                : tempHighLevelReward;
        reversedCappedRewardPerHolder.push(tempHighLevelReward > 0 ? Math.min(lowLevelReward, tempHighLevelReward) : lowLevelReward);
    });
    reversedCappedRewardPerHolder.pop();
    let cappedRewardPerHolder: number[] = reversedCappedRewardPerHolder.slice().reverse();

    // Step 4: Distribute capped reward from Step 3 into each level
    const distributedRewardsStep4: number = reversedCappedRewardPerHolder.reduce(
        (acc, reward, index) => acc + reward * reversedNumOfHolders[index],
        0
    );
    var undistributedRewardsStep4: number = totalRewards - distributedRewardsStep4;
    var uncalculatedDistributedRewardsStep4: number = distributedRewardsStep4;
    var levelReward: number[] = cappedRewardPerHolder.map((rewardPerHolder, index) => {
        const num: number = reversedNumOfHolders[index];
        const scaledRewardPerHolder: number =
            uncalculatedDistributedRewardsStep4 > 0
                ? (rewardPerHolder * (uncalculatedDistributedRewardsStep4 + undistributedRewardsStep4)) /
                  uncalculatedDistributedRewardsStep4
                : rewardPerHolder;

        undistributedRewardsStep4 -= (scaledRewardPerHolder - rewardPerHolder) * num;
        uncalculatedDistributedRewardsStep4 -= rewardPerHolder * num;
        return Math.floor(scaledRewardPerHolder);
    });

    return levelReward;
}
