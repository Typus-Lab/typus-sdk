import { getLaunchAuctionBids, getBidderInfo } from "src/typus-launch";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let auction = getLaunchAuctionBids(config);
    console.log(auction);

    let bidderInfo = getBidderInfo(config, "0x123");
    console.log(bidderInfo);
})();
