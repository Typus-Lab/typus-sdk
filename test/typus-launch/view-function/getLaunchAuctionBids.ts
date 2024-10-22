import { getLaunchAuctionBids, getBidderInfo } from "src/typus-launch/auction";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);

    let auction = await getLaunchAuctionBids(config);
    console.log(auction);

    let bidderInfo = await getBidderInfo(config, "0x978f65df8570a075298598a9965c18de9087f9e888eb3430fe20334f5c554cfd");
    console.log(bidderInfo);
})();
