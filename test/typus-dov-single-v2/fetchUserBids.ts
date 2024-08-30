import { TypusConfig } from "src/utils";
import { fetchUserBids } from "src/typus-dov-single-v2";

(async () => {
    let config = await TypusConfig.default("TESTNET");

    let userBids = await fetchUserBids(config, "0x95f26ce574fc9ace2608807648d99a4dce17f1be8964613d5b972edc82849e9e");
    console.info(JSON.stringify(userBids, null, "  "));
})();
