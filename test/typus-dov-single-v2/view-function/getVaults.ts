import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getVaults } from "../../../utils/typus-dov-single-v2/view-function";
import config from "../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
(async () => {
    let indexes = [
        //
        "0",
        //
        "1",
    ];
    let result = await getVaults(provider, config.FRAMEWORK_PACKAGE, config.PACKAGE, config.REGISTRY, indexes);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
