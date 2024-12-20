import { TypusConfig } from "src/utils";
import { getLevelCounts, getStakingInfo } from "src/typus/tails-staking";
import { SuiClient } from "@mysten/sui/client";
import { calculateLevelReward } from "src/typus-nft";
import * as fs from "fs";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);

    let provider = new SuiClient({ url: config.rpcEndpoint });

    // user staking info
    let slice0 = await provider.getObject({
        id: "0x5a9d890ec39f40c658daf5d9d36d87094e3a61a1027394ebfe95438e851f59b6",
        options: { showContent: true },
    });

    // tails level mapping
    let level_res = await provider.getObject({
        id: "0xa04da4863566e5c11919747b82a1955047a1534be2081348d66ef28da610e728",
        options: { showContent: true },
    });
    // @ts-ignore
    let levels = level_res.data?.content.fields.value;
    // console.log(levels.length);

    // @ts-ignore
    let stakingInfos = slice0.data?.content.fields.value.fields.vector;
    console.log(stakingInfos.length);
    // console.log(stakingInfos[0].fields);

    let levelWhitelist = [1000, 1000, 5000, 5000, 10000, 10000, 10000];

    const headers = ["user", "num_levels", "amount"];
    const csvRows = [headers.join(",")];

    for (const stakingInfo of stakingInfos) {
        const user = stakingInfo.fields.user;
        if (user.startsWith("0x")) {
            // console.log(stakingInfo.fields);
            const num_levels = [0, 0, 0, 0, 0, 0, 0];
            const amount = stakingInfo.fields.tails.reduce((acc, num) => {
                const level = levels[num - 1];
                num_levels[level - 1] += 1;
                const whitelist = levelWhitelist[level - 1];
                // console.log(level, whitelist);
                return acc + whitelist;
            }, 0);
            console.log(user, num_levels, amount);
            csvRows.push(`${user},"${num_levels}",${amount}`);
        }
    }

    const csvContent = csvRows.join("\n");
    fs.writeFileSync("TailsWhitelist.csv", csvContent);
})();
