import { getBidderInfo } from "src/typus-launch/auction";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let bidder = "0xd3b8b292081ba8c879e383f8a5ab3d72b8dc70cb47455dd2c2a782167db63fce";
    let auction = await getBidderInfo(config, bidder);
    console.log(bidder);
    console.log(auction);
})();
