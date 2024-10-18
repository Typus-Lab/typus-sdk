import { getLaunchAuction } from "src/typus-launch";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let auction = getLaunchAuction(config);
    console.log(auction);
})();
