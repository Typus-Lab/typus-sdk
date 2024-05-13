import config from "../../../mainnet.json";
import { SuiClient } from "@mysten/sui.js/client";
import { getTails } from "../../../utils/typus-nft/fetch";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getAllocateProfitSharingTx, getSetProfitSharingTx, getRemoveProfitSharingTx } from "../../../utils/nft-staking/authorized-entry";
import { calculateLevelReward } from "../../../utils/tails-exp-dice/fetch";
import { getProfitSharing } from "../../../utils/tails-exp-dice/fetch";

import mnemonic from "../../../mnemonic.json";
import { getNftTable } from "../../../utils/nft-staking/fetch";

const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

const typeArguments = ["0x2::sui::SUI"];
const totalRewards = 2222_000000000;

const levelShares = [0, 0.003, 0.017, 0.05, 0.1, 0.29, 0.54];

const NAME = "dice_profit_sharing";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    let lastRound = await getProfitSharing(provider, config.diceProfitSharing);
    // console.log(lastRound.tokenType);
    const typeArgumentsRemove = [lastRound.tokenType];

    const datas = await getNftTable(provider, config.NFT_TABLE);
    // console.log(datas);

    const tails = await getTails(
        provider,
        datas.map((data) => data.objectId)
    );
    // console.log(tails);

    const levelUsers = [0, 0, 0, 0, 0, 0, 0];
    tails.forEach((tail) => (levelUsers[Number(tail.level) - 1] += 1));
    console.log("Level Users: ", levelUsers);

    const levelProfits = calculateLevelReward(totalRewards, levelShares, levelUsers);
    console.log("Level Profits: ", levelProfits);

    const sum = levelUsers.reduce((sum, user, i) => (sum += user * levelProfits[i]), 0);
    console.log("Sum Profits: ", sum);
    console.assert(totalRewards >= sum);

    const users = datas.map((d) => d.name.value as string);
    console.log("users.length: " + users.length);

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
        levelProfits,
        sum,
        coins,
        typeArguments
    );

    var res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(`getSetProfitSharingTx:`);
    console.log(res);
    await sleep(5000);

    // STEP 3: Allocate

    while (users.length > 0) {
        const input = users.splice(0, 300);
        console.log(input.length);
        var transactionBlock = await getAllocateProfitSharingTx(
            gasBudget,
            config.SINGLE_COLLATERAL_PACKAGE,
            config.SINGLE_COLLATERAL_REGISTRY,
            input,
            typeArguments
        );

        var res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
        console.log(`getAllocateProfitSharingTx:`);
        console.log(res);
        await sleep(5000);
    }
})();
