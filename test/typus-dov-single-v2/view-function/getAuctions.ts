import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui.js/client";
import { getAuctions } from "src/typus-dov-single-v2";

const config = TypusConfig.default("TESTNET");
const provider = new SuiClient({
    url: config.rpcEndpoint,
});

(async () => {
    let indexes = [];
    let result = await getAuctions(provider, config.package.dovSingle, config.registry.dov.dovSingle, indexes);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
