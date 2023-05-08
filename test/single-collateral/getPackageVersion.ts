import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import config from "../../config.json";
import { getPackageVersion } from "../../utils/typus-dov-single/registry";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
(async () => {
    let result = await getPackageVersion(provider, config.SINGLE_COLLATERAL_PACKAGE);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
