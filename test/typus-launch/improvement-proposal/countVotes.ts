import "src/utils/load_env";
import { Tip, Vote, getOngoingTips, getTipVotes, countVotes } from "src/typus-launch/improvement-proposal";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig, prettify_big_number, sleep } from "src/utils";
import { BigNumber } from "bignumber.js";
import { setAirdrop } from "src/typus-launch/airdrop";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    // let config = TypusConfig.local("../typus-config/config-testnet.json");
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let now = Date.now();
    let tips: Tip[] = await getOngoingTips(config, {});
    for (const tip of tips) {
        if (tip.config[1] < now) {
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
                    return;
                } else {
                    console.log(`Sufficient ${reward.token} Balance: ${prettify_big_number(reward.amount, coinMetadata?.decimals)}`);
                }
            }
            let transaction = new Transaction();
            countVotes(config, transaction, {
                index: tip.index,
            });
            let res = await provider.signAndExecuteTransaction({ signer, transaction });
            console.log(`Count Votes: ${res.digest}`);
            // transaction.setSender(signer.toSuiAddress());
            // let res = await provider.dryRunTransactionBlock({ transactionBlock: await transaction.build({ client: provider }) });
            // console.log(`Count Votes: ${JSON.stringify(res.effects.status)}`);
            await sleep(1000);
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
                    // transaction.setSender(signer.toSuiAddress());
                    // let res = await provider.dryRunTransactionBlock({ transactionBlock: await transaction.build({ client: provider }) });
                    // console.log(`Set Airdrop: ${JSON.stringify(res.effects.status)}`);
                    await sleep(1000);
                }
            }
        }
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

// while (user_data.length > 0) {
//     console.log(user_data.length);
//     let slice = user_data.splice(0, 300);
//     let transaction = await getSetAirdropTx(config, new Transaction(), {
//         typeArguments: [config.token.typus],
//         key: "typus_airdrop",
//         coins: ["0xa633dd0101ae7b95ba675de8a12a7c9aad420054f4bcf7fcd23bd9d099fc2920"],
//         amount: "500000000000000",
//         users: slice.map((user) => user[0]),
//         values: slice.map((user) => user[1]),
//     });

//     let res = await provider.signAndExecuteTransaction({ signer, transaction });
//     console.log(res);
//     await sleep(5000);
// }
