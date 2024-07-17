import configs from "../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { getAuctions } from "../../../src";

const config = configs.TESTNET;
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    let indexes = [];
    let result = await getAuctions(provider, config.PACKAGE.DOV_SINGLE, config.REGISTRY.DOV_SINGLE, indexes);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
