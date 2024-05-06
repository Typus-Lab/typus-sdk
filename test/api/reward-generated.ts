import configs from "../../config.json";
import {
    getTotalDepositorIncentive,
    getTotalPremium,
    getTotalProfitSharing,
    getTotalProfitSharingClaimed,
} from "../../utils/api/sentio/reward-generated";
import { SuiClient } from "@mysten/sui.js/client";

(async () => {
    const res1 = await getTotalDepositorIncentive();
    console.log(res1);
    const res2 = await getTotalPremium();
    console.log(res2);
    const res3 = await getTotalProfitSharingClaimed();
    console.log(res3);
    const config = configs.MAINNET;
    const provider = new SuiClient({ url: config.RPC_ENDPOINT });
    const res4 = await getTotalProfitSharing(provider);
    console.log(res4);
})();
