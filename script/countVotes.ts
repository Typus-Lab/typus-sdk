import { Tip, Vote, getOngoingTips, getTipVotes, countVotes } from "src/typus-launch/improvement-proposal";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig, prettify_big_number, sleep } from "src/utils";
import { BigNumber } from "bignumber.js";
import { setAirdrop } from "src/typus-launch/airdrop";
import slack from "slack";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, ".env") });

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    // let config = TypusConfig.local("../typus-config/config-testnet.json");
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let now = Date.now();
    let tips: Tip[] = await getOngoingTips(config, {});
    let count = 0;
    let msg = "<<Typus Improvement Proposal Info>>\n";
    for (const tip of tips) {
        msg = msg + `#${tip.index}: ${tip.description}\n`;
        msg =
            msg +
            `  -  start time: ${tip.config[0]} (${new Date(Number.parseInt(tip.config[0])).toLocaleString("en-US", { dateStyle: "full", timeStyle: "full", hourCycle: "h24", timeZone: "Asia/Taipei" })})\n`;
        msg =
            msg +
            `  -    end time: ${tip.config[1]} (${new Date(Number.parseInt(tip.config[1])).toLocaleString("en-US", { dateStyle: "full", timeStyle: "full", hourCycle: "h24", timeZone: "Asia/Taipei" })})\n`;
        msg = msg + `  -   yes votes: ${prettify_big_number(tip.info[0], 9)} \n`;
        msg = msg + `  -    no votes: ${prettify_big_number(tip.info[1], 9)} \n`;
        if (tip.config[1] < now) {
            count++;
            console.log(`Processing Typus Improvement Proposal #${tip.index}`);
            let votes = await getTipVotes(config, { index: tip.index });
            await sleep(1000);
            console.log(`${votes.length} vote${votes.length > 1 ? "s" : ""} fetched`);
            for (const reward of tip.rewards) {
                let walletBalance = BigNumber(
                    (await provider.getBalance({ owner: signer.toSuiAddress(), coinType: "0x" + reward.token })).totalBalance
                );
                await sleep(1000);
                let coinMetadata = await provider.getCoinMetadata({ coinType: "0x" + reward.token });
                await sleep(1000);
                if (walletBalance < BigNumber(reward.amount)) {
                    console.log(
                        `Insufficient ${reward.token} Balance: ${prettify_big_number(walletBalance, coinMetadata?.decimals)}, expect: ${prettify_big_number(reward.amount, coinMetadata?.decimals)}`
                    );
                    msg =
                        msg +
                        `  - insufficient ${reward.token} Balance: ${prettify_big_number(walletBalance, coinMetadata?.decimals)}, expect: ${prettify_big_number(reward.amount, coinMetadata?.decimals)}\n`;
                    continue;
                } else {
                    console.log(`Sufficient ${reward.token} Balance: ${prettify_big_number(reward.amount, coinMetadata?.decimals)}`);
                }
            }
            let transaction = new Transaction();
            countVotes(config, transaction, {
                index: tip.index,
            });
            let res = await provider.signAndExecuteTransaction({ signer, transaction, options: { showEvents: true } });
            console.log(`Count Votes: ${res.digest}`);
            msg = msg + `  - count votes: ${res.digest}\n`;
            // @ts-ignore
            msg = msg + `  -     vetypus: ${prettify_big_number(res.events[0].parsedJson.log[1], 9)}\n`;
            // @ts-ignore
            msg = msg + `  -   threshold: ${prettify_big_number(res.events[0].parsedJson.log[4], 9)}\n`;
            // transaction.setSender(signer.toSuiAddress());
            // let res = await provider.dryRunTransactionBlock({ transactionBlock: await transaction.build({ client: provider }) });
            // console.log(`Count Votes: ${JSON.stringify(res, null, 2)}`);
            await sleep(1000);
            // @ts-ignore
            if (res.events[0].parsedJson.log[6] != "0") {
                for (const reward of tip.rewards) {
                    let token = "0x" + reward.token;
                    let userRewards = calculateUserReward(votes, reward.amount);
                    while (userRewards.length > 0) {
                        let slice = userRewards.splice(0, 300);
                        let coins = (await provider.getCoins({ owner: signer.toSuiAddress(), coinType: token })).data.map(
                            (coin) => coin.coinObjectId
                        );
                        await sleep(1000);
                        let amount = slice.reduce((sum, current) => BigNumber(sum).plus(BigNumber(current.reward)), BigNumber(0));
                        let transaction = new Transaction();
                        setAirdrop(config, transaction, {
                            typeArguments: [token],
                            key: reward.key,
                            coins,
                            amount: amount.toString(),
                            users: slice.map((userReward) => {
                                return userReward.user;
                            }),
                            values: slice.map((userReward) => {
                                return userReward.reward.toString();
                            }),
                        });
                        let res = await provider.signAndExecuteTransaction({ signer, transaction });
                        console.log(`Set Airdrop: ${res.digest}`);
                        msg = msg + `  - set airdrop: ${res.digest}\n`;
                        // transaction.setSender(signer.toSuiAddress());
                        // let res = await provider.dryRunTransactionBlock({ transactionBlock: await transaction.build({ client: provider }) });
                        // console.log(`Set Airdrop: ${JSON.stringify(res.effects.status)}`);
                        await sleep(1000);
                    }
                }
            }
        }
    }
    console.log(msg);
    if (count > 0 || (Math.floor((Date.now() % 86400000) / 3600000) == 0 && tips.length > 0)) {
        slack.chat.postMessage({
            token: String(process.env.SLACK_BOT_TOKEN),
            channel: String(process.env.SLACK_CHANNEL),
            text: `\`\`\`${msg}\`\`\``,
        });
    }
})();

function calculateUserReward(votes: Vote[], reward): { user: string; reward: BigNumber }[] {
    reward = BigNumber(reward);
    let totalShare = votes.reduce((sum, vote) => BigNumber(sum).plus(BigNumber(vote.yes)).plus(BigNumber(vote.no)), BigNumber(0));
    return votes.map((vote) => {
        let userVote = BigNumber(vote.yes).plus(BigNumber(vote.no));
        let userReward = {
            user: vote.user,
            reward: reward.multipliedBy(userVote).dividedBy(totalShare).integerValue(),
        };
        reward = reward.minus(userReward.reward);
        totalShare = totalShare.minus(userVote);
        return userReward;
    });
}
