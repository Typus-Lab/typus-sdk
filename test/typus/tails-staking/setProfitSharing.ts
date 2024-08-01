import { getLevelCounts, getSetProfitSharingTx } from "src/typus/tails-staking";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import * as readline from "readline/promises";
import configs from "config.json";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

const process = require("process");
process.removeAllListeners("warning");
const config = configs.MAINNET;
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const levelShares = [0, 0.003, 0.017, 0.05, 0.1, 0.29, 0.54];
const rewards = 1888_000000000;
const token = config.TOKEN.SUI;
const nextWeekRewards = 1888_000000000;
const nextWeekToken = config.TOKEN.SUI;
const nextWeekTsMs = (Math.floor(Date.now() / 86400000 / 7) + 1) * (86400000 * 7) + 370800000;

(async () => {
    console.log(`wallet: ${keypair.toSuiAddress()}`);
    console.log(`token: ${token}`);
    let levelCounts = await getLevelCounts({
        provider,
        typusPackageId: config.PACKAGE.TYPUS,
        typusEcosystemVersion: config.OBJECT.TYPUS_VERSION,
        typusTailsStakingRegistry: config.REGISTRY.TAILS_STAKING,
    });
    console.log(`levelCounts: ${levelCounts}`);
    let levelProfits = calculateLevelReward(rewards, levelShares, levelCounts);
    console.log(`levelProfits: ${levelProfits}`);
    let profitAsset = (await provider.getDynamicFields({ parentId: config.REGISTRY.TAILS_STAKING })).data
        .filter((x) => x.objectType.includes(token))
        .map((x) => x.objectId as string)[0];
    let remainingProfit = profitAsset
        ? // @ts-ignore
          Number.parseInt((await provider.getObject({ id: profitAsset, options: { showContent: true } })).data?.content.fields.value)
        : 0;
    console.log(`rewards:         ${rewards}`);
    console.log(`remainingProfit: ${remainingProfit}`);
    let walletBalance = Number.parseInt((await provider.getBalance({ owner: keypair.toSuiAddress(), coinType: token })).totalBalance);
    let spendingProfit = 0;
    for (let i = 0; i < 7; i++) {
        spendingProfit += levelCounts[i] * levelProfits[i];
    }
    spendingProfit -= remainingProfit;
    if (walletBalance < spendingProfit) {
        console.log(`spendingProfit:  ${spendingProfit}`);
        console.log(`lack:            ${spendingProfit - walletBalance}`);
    } else {
        console.log(`spendingProfit:  ${spendingProfit}`);
    }
    console.log(`nextWeekRewards: ${nextWeekRewards}`);
    console.log(`nextWeekToken: ${nextWeekToken}`);
    console.log(`nextWeekTsMs: ${nextWeekTsMs} (${new Date(nextWeekTsMs)})`);
    if (walletBalance < spendingProfit) {
        console.log("INSUFFICIENT BALANCE");
        return;
    }
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    try {
        const answer = await rl.question("ARE YOU SURE TO PROCEED? [y/N] ", {
            signal: AbortSignal.timeout(30_000), // 10s timeout
        });
        switch (answer.toLowerCase()) {
            case "y":
                console.log("PROCEEDED");
                break;
            default:
                console.log("CANCELED");
                return process.exit(1);
        }
    } finally {
        rl.close();
    }
    let tx = new TransactionBlock();
    let mergedCoin = tx.gas;
    if (token != config.TOKEN.SUI) {
        let coins = (await provider.getCoins({ owner: keypair.toSuiAddress(), coinType: token })).data.map((coin) => coin.coinObjectId);
        let coin = coins.pop()!;
        if (coins.length > 0) {
            tx.mergeCoins(
                tx.object(coin),
                coins.map((coin) => tx.object(coin))
            );
        }
        mergedCoin = tx.object(coin);
    }
    let [inputCoin] = tx.splitCoins(mergedCoin, [tx.pure(spendingProfit)]);
    tx = getSetProfitSharingTx({
        tx,
        typusPackageId: config.PACKAGE.TYPUS,
        typusEcosystemVersion: config.OBJECT.TYPUS_VERSION,
        typusTailsStakingRegistry: config.REGISTRY.TAILS_STAKING,
        typeArguments: [token, nextWeekToken],
        levelProfits: levelProfits.map((x) => x.toString()),
        coin: inputCoin,
        amount: nextWeekRewards.toString(),
        tsMs: nextWeekTsMs.toString(),
    });
    tx.setGasBudget(100000000);
    let result = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(result);
})();

export function calculateLevelReward(totalRewards: number, levelShares: number[], numOfHolders: number[]): number[] {
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
    // console.log("Step 1 - ", originalRewardPerHolder);

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
    // let scaledRewardPerHolder: number[] = reversedScaledRewardPerHolder.slice().reverse();
    // console.log("Step 2 - ", scaledRewardPerHolder);

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
    // console.log("Step 3 - ", cappedRewardPerHolder);

    // Step 4: Distribute capped reward from Step 3 into each level
    const distributedRewardsStep4: number = reversedCappedRewardPerHolder.reduce(
        (acc, reward, index) => acc + reward * reversedNumOfHolders[index],
        0
    );
    var undistributedRewardsStep4: number = totalRewards - distributedRewardsStep4;
    var uncalculatedDistributedRewardsStep4: number = distributedRewardsStep4;

    // console.log(distributedRewardsStep4);

    // console.log(totalRewards);
    // console.log(undistributedRewardsStep4);
    // console.log(uncalculatedDistributedRewardsStep4);

    var levelReward: number[] = cappedRewardPerHolder.map((rewardPerHolder, index) => {
        const num: number = reversedNumOfHolders[index];
        const scaledRewardPerHolder: number =
            uncalculatedDistributedRewardsStep4 > 0
                ? (rewardPerHolder * (uncalculatedDistributedRewardsStep4 + undistributedRewardsStep4)) /
                  uncalculatedDistributedRewardsStep4
                : rewardPerHolder;

        undistributedRewardsStep4 -= (scaledRewardPerHolder - rewardPerHolder) * num;
        uncalculatedDistributedRewardsStep4 -= rewardPerHolder * num;
        // console.log(undistributedRewardsStep4);
        return Math.floor(scaledRewardPerHolder);
    });
    // console.log("Step 4 - ", levelReward);

    return levelReward;
}
