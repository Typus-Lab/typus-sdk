import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getUserShares } from "../../utils/portfolio/single-collateral/user-share";
import config from "../../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const user = "0xdc72506f269feb89822c13e66b282bc52c5724c27e575a04cbec949a13671d13";
(async () => {
    let indexes = ["0", "1", "2"];
    let result = await getUserShares(provider, config.SINGLE_COLLATERAL_PACKAGE, config.SINGLE_COLLATERAL_REGISTRY, indexes, user);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
