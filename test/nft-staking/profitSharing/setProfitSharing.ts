import config from "../../../mainnet.json";
import { KioskClient, Network } from "@mysten/kiosk";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { getTailsIds, getTails } from "../../../utils/typus-nft/fetch";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getStakeNftTx } from "../../../utils/nft-staking/user-entry";
import { getAllocateProfitSharingTx, getSetProfitSharingTx } from "../../../utils/nft-staking/authorized-entry";
import { getProfitSharing, ProfitSharing, calculateLevelReward } from "../../../utils/tails-exp-dice/fetch";

import mnemonic from "../../../mnemonic.json";

const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

const totalRewards = 3000_000000000;
const levelShares = [0, 0.02, 0.06, 0.1, 0.14, 0.24, 0.44];

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    var result = await provider.getDynamicFields({
        parentId: config.NFT_TABLE,
    });

    var datas = result.data;

    while (result.hasNextPage) {
        result = await provider.getDynamicFields({
            parentId: config.NFT_TABLE,
            cursor: result.nextCursor,
        });
        datas = datas.concat(result.data);
    }
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

    // STEP 1

    var transactionBlock = await getSetProfitSharingTx(
        gasBudget,
        config.SINGLE_COLLATERAL_PACKAGE,
        config.SINGLE_COLLATERAL_REGISTRY,
        levelProfits,
        sum
    );

    var res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(`getSetProfitSharingTx:`);
    console.log(res);

    // STEP 2

    var transactionBlock = await getAllocateProfitSharingTx(
        gasBudget,
        config.SINGLE_COLLATERAL_PACKAGE,
        config.SINGLE_COLLATERAL_REGISTRY,
        users
    );

    var res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(`getAllocateProfitSharingTx:`);
    console.log(res);
})();
