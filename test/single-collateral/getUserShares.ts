import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getUserShares } from "../../utils/portfolio/single-collateral/user-share";
import config from "../../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const indexes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const user = "0xdc72506f269feb89822c13e66b282bc52c5724c27e575a04cbec949a13671d13";
(async () => {
    let result = await getUserShares(provider, config.PORTFOLIO_PACKAGE, config.SINGLE_COLLATERAL_REGISTRY, indexes, user);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
