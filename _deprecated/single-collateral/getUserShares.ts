import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getUserShares } from "../typus-dov-single/view-function";
import config from "../../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const user = "0x603272d1e61de086a18751482684f882642eb080144aee425c4c34b5e56470b0";
(async () => {
    let indexes = ["0", "1", "2"];
    let result = await getUserShares(provider, config.SINGLE_COLLATERAL_PACKAGE, config.SINGLE_COLLATERAL_REGISTRY, indexes, user);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
