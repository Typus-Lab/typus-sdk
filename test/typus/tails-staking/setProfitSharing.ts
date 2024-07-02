import { calculateLevelReward } from "../../../utils/tails-exp-dice/fetch";
import { getLevelCounts } from "../../../utils/tails-staking/view-function";
import { getSetProfitSharingTx } from "../../../utils/tails-staking/authorized-entry";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import * as readline from "readline/promises";
import configs from "../../../config.json";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

const config = configs.TESTNET;
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const levelShares = [0, 0.003, 0.017, 0.05, 0.1, 0.29, 0.54];
const totalRewards = 1888_000000000;
const token = "0xd31923b6821fb7ba32d23e514b43d307da6ef991f9ef1af2cc4e26a0992ac87a::afsui::AFSUI";
const tsMs = "1719964800000";

(async () => {
    console.log("totalRewards: " + totalRewards);
    let levelCounts = await getLevelCounts({
        provider,
        typusPackageId: config.PACKAGE.TYPUS,
        typusEcosystemVersion: config.OBJECT.TYPUS_VERSION,
        typusTailsStakingRegistry: config.REGISTRY.TAILS_STAKING,
    });
    console.log("levelCounts: " + levelCounts);
    let levelProfits = calculateLevelReward(totalRewards, levelShares, levelCounts);
    console.log("levelProfits: " + levelProfits);
    let profitAsset = (await provider.getDynamicFields({ parentId: config.REGISTRY.TAILS_STAKING })).data
        .filter((x) => x.objectType.includes(token))
        .map((x) => x.objectId as string)[0];
    let remainingProfit = profitAsset
        ? // @ts-ignore
          Number.parseInt((await provider.getObject({ id: profitAsset, options: { showContent: true } })).data?.content.fields.value)
        : 0;
    console.log("remainingProfit: " + remainingProfit);
    let spendingProfit = 0;
    for (let i = 0; i < 7; i++) {
        spendingProfit += levelCounts[i] * levelProfits[i];
    }
    spendingProfit -= remainingProfit;
    console.log("spendingProfit: " + spendingProfit);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    try {
        const answer = await rl.question("ARE YOU SURE TO PROCEED? [y/N] ", {
            signal: AbortSignal.timeout(10_000), // 10s timeout
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
        typeArguments: [token],
        levelProfits: levelProfits.map((x) => x.toString()),
        coin: inputCoin,
        amount: totalRewards.toString(),
        tsMs: tsMs,
    });
    tx.setGasBudget(100000000);
    let result = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(result);
})();
