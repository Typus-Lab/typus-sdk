import config from "../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { getAuctions } from "../../../utils/typus-dov-single-v2/view-function";

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    let indexes = [];
    let result = await getAuctions(provider, config.PACKAGE, config.REGISTRY, indexes);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
