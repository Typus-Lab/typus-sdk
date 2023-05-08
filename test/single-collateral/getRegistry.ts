import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getRegistry } from "../../utils/typus-dov-single/registry";
import config from "../../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
(async () => {
    let result = await getRegistry(provider, config.SINGLE_COLLATERAL_REGISTRY);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
