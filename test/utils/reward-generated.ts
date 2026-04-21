import { getTotalDepositorIncentive, getTotalPremium, getTotalProfitSharingClaimed } from "src/utils";

(async () => {
    let res1 = await getTotalDepositorIncentive();
    console.log(res1);
    let res2 = await getTotalPremium();
    console.log(res2);
    let res3 = await getTotalProfitSharingClaimed();
    console.log(res3);
})();
