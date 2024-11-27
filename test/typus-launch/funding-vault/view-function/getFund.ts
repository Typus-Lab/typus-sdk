import { getFund } from "src/typus-launch/funding-vault";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let vaults = await getFund(config, { indexes: ["0"], user: "0xd15f079d5f60b8fdfdcf3ca66c0d3473790c758b04b6418929d5d2991c5443ee" });
    // console.log(JSON.stringify(vaults, null, 2));

    const deposit = vaults["0"].reduce((acc, cur) => {
        acc += Number(cur.balance) / 1000000000;
        return acc;
    }, 0);
    console.log(`19JAN25 All Weather: ${deposit} SUI`);
})();
