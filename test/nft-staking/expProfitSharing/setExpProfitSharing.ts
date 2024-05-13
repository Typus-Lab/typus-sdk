import config from "../../../mainnet.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import {
    getSetProfitSharingTx,
    getRemoveProfitSharingTx,
    getAllocateProfitSharingValueTx,
} from "../../../utils/nft-staking/authorized-entry";
import { ExpLeaderBoard, getExpLeaderBoard, getExpLeaderBoardWithOwner } from "../../../utils/api/sentio/leader-board";
import { getNftTable } from "../../../utils/nft-staking/fetch";

import mnemonic from "../../../mnemonic.json";
import { assert } from "console";

const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

const typeArgumentsRemove = ["0x2::sui::SUI"];
const typeArguments = ["0x2::sui::SUI"];
const totalRewards = 3333_000000000;

const NAME = "exp_profit_sharing";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    const now: number = Math.floor(new Date().getTime() / 1000);
    const secsInHour = 60 * 60;
    const secsInDay = 60 * 60 * 24;
    const lastMonday8AM = now - (now % (7 * secsInDay)) + 8 * secsInHour - secsInDay * 3;
    console.log(lastMonday8AM);

    const datas = await getNftTable(provider, config.NFT_TABLE);

    // datas to owner map
    const ownerMap = datas.reduce((map, d) => map.set(d.objectId, d.name.value as string), new Map<string, string>());
    // console.log(ownerMap);

    const expLeaderBoard = await getExpLeaderBoard(lastMonday8AM.toString(), (lastMonday8AM + 7 * secsInDay).toString());
    var expLeaderBoardWithOwner = await getExpLeaderBoardWithOwner(expLeaderBoard, ownerMap);
    // filter unstake
    expLeaderBoardWithOwner = expLeaderBoardWithOwner.filter((e) => e.owner);
    // get 100s
    const leaderboard: ExpLeaderBoard[] = [];
    var last = 0;
    for (let e of expLeaderBoardWithOwner) {
        if (leaderboard.length < 100) {
            leaderboard.push(e);
            last = e.total_exp_earn;
        } else if (last == e.total_exp_earn) {
            leaderboard.push(e);
        }
    }
    console.log(leaderboard);
    console.log("leaderboard.length: " + leaderboard.length);
    // Above for FE Usage

    const totalExpEarn = leaderboard.reduce((p, x) => (p += Number(x.total_exp_earn)), 0);
    console.log("totalExpEarn: " + totalExpEarn);

    const eachExpReward = Math.floor(totalRewards / totalExpEarn);
    console.log("eachExpReward: " + eachExpReward);

    const sum = eachExpReward * totalExpEarn;
    console.log("sum: " + sum);

    // const leaderboardThisWeek = await getExpLeaderBoard(thisMonday8AM.toString());
    // console.log(leaderboardThisWeek);

    // process.exit();

    // STEP 1: Remove

    var transactionBlock = await getRemoveProfitSharingTx(
        gasBudget,
        config.SINGLE_COLLATERAL_PACKAGE,
        config.SINGLE_COLLATERAL_REGISTRY,
        NAME,
        typeArgumentsRemove
    );

    var res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(`getRemoveProfitSharingTx:`);
    console.log(res);
    await sleep(5000);

    // STEP 2: Set

    let coins = (await provider.getCoins({ owner: address, coinType: typeArguments[0] })).data.map((coin) => coin.coinObjectId);

    var transactionBlock = await getSetProfitSharingTx(
        gasBudget,
        config.SINGLE_COLLATERAL_PACKAGE,
        config.SINGLE_COLLATERAL_REGISTRY,
        NAME,
        [0, 0, 0, 0, 0, 0, 0],
        sum,
        coins,
        typeArguments
    );

    var res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(`getSetProfitSharingTx:`);
    console.log(res);
    await sleep(5000);

    // STEP 3: Allocate

    if (leaderboard.length >= 100) {
        const users: string[] = [];
        const values: string[] = [];
        var total = 0;

        for (let x of leaderboard) {
            users.push(x.owner!);
            const v = Number(x.total_exp_earn) * eachExpReward;
            total += v;
            values.push(v.toString());
        }

        // check
        assert!(sum == total);

        var transactionBlock = await getAllocateProfitSharingValueTx(
            gasBudget,
            config.SINGLE_COLLATERAL_PACKAGE,
            config.SINGLE_COLLATERAL_REGISTRY,
            users,
            values,
            typeArguments
        );

        var res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
        console.log(`getAllocateProfitSharingValueTx:`);
        console.log(res);
        await sleep(5000);
    }
})();
