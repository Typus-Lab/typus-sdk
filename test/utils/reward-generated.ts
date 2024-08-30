import { TypusConfig } from "src/utils";
import { getTotalDepositorIncentive, getTotalPremium, getTotalProfitSharing, getTotalProfitSharingClaimed } from "src/utils";
import { SuiClient } from "@mysten/sui.js/client";

(async () => {
    let res1 = await getTotalDepositorIncentive();
    console.log(res1);
    let res2 = await getTotalPremium();
    console.log(res2);
    let res3 = await getTotalProfitSharingClaimed();
    console.log(res3);
    let config = await TypusConfig.default("MAINNET");
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let res4 = await getTotalProfitSharing(provider);
    console.log(res4);
})();
