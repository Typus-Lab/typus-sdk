import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui.js/client";
import { fetchUserBids } from "src/typus-dov-single-v2";

const config = TypusConfig.default("TESTNET");

const provider = new SuiClient({
    url: config.rpcEndpoint,
});

(async () => {
    const userBids = await fetchUserBids(provider, config, "0x95f26ce574fc9ace2608807648d99a4dce17f1be8964613d5b972edc82849e9e");
    console.info(JSON.stringify(userBids, null, "  "));
})();
