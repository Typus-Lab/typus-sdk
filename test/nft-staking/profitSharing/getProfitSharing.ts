import "../../load_env";
import config_v2 from "../../../config_v2.json";
import { getProfitSharing, ProfitSharing, calculateLevelReward } from "../../../utils/tails-exp-dice/fetch";
import { getTails } from "../../../utils/typus-nft/fetch";
import { SuiClient } from "@mysten/sui.js/client";

const provider = new SuiClient({ url: config_v2.RPC_ENDPOINT });

const totalRewards = 30_000000000;
const levelShares = [0, 0.1, 0.2, 0.3, 0.4, 0, 0];

(async () => {
    // Already Set
    // let res_1 = await getProfitSharing(provider, config_v2.diceProfitSharing);
    // console.log(res_1);

    // Estimation
    var result = await provider.getDynamicFields({
        parentId: config_v2.NFT_TABLE,
    });

    var datas = result.data;

    while (result.hasNextPage) {
        result = await provider.getDynamicFields({
            parentId: config_v2.NFT_TABLE,
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

    const users = datas.map((d) => d.name.value);
    console.log("users.length: " + users.length);

    console.log("total profit sharing: " + totalRewards);

    var level_users = [0, 0, 0, 0, 0, 0, 0];
    tails.forEach((tail) => (level_users[Number(tail.level) - 1] += 1));
    console.log("level_users: " + level_users);

    // calculation
    const rewards = calculateLevelReward(totalRewards, levelShares, level_users);
    console.log("level_profits: ", rewards);
})();
