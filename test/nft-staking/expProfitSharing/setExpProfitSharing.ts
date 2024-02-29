import config from "../../../config_v2.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import {
    getSetProfitSharingTx,
    getRemoveProfitSharingTx,
    getAllocateProfitSharingValueTx,
} from "../../../utils/nft-staking/authorized-entry";
import { getExpLeaderBoard } from "../../../utils/leader-board";

import mnemonic from "../../../mnemonic.json";
import { assert } from "console";

const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

const typeArgumentsRemove = ["0x2::sui::SUI"];
const typeArguments = ["0x2::sui::SUI"];
const totalRewards = 1_000000000;

const NAME = "exp_profit_sharing";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    const now: number = Math.floor(new Date().getTime() / 1000);
    const secsInHour = 60 * 60;
    const secsInDay = 60 * 60 * 24;
    const thisMonday8AM = now - (now % (7 * secsInDay)) + 8 * secsInHour - secsInDay * 3;
    console.log(thisMonday8AM);

    // const leaderboard = await getExpLeaderBoard((thisMonday8AM - 7 * secsInDay).toString(), thisMonday8AM.toString());
    // console.log(leaderboard);

    // for testing
    const leaderboard = [
        {
            address: "0xb6c7e3b1c61ee81516a8317f221daa035f1503e0ac3ae7a50b61834bc7a3ead9",
            total_exp_earn: "5664091",
        },
    ];

    const totalExpEarn = leaderboard.reduce((p, x) => (p += Number(x.total_exp_earn)), 0);
    console.log(totalExpEarn);

    const eachExpReward = Math.floor(totalRewards / totalExpEarn);
    console.log(eachExpReward);

    const sum = eachExpReward * totalExpEarn;
    console.log(sum);

    // const leaderboardThisWeek = await getExpLeaderBoard(thisMonday8AM.toString());
    // console.log(leaderboardThisWeek);

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
    await sleep(1000);

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
    await sleep(1000);

    // STEP 3: Allocate

    if (leaderboard.length == 100) {
        const users: string[] = [];
        const values: string[] = [];
        var total = 0;

        for (let x of leaderboard) {
            users.push(x.address);
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
        await sleep(1000);
    }
})();
