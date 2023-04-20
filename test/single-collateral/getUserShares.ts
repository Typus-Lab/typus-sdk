import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getUserShares } from "../../utils/portfolio/single-collateral/user-share";
import config from "../../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const indexes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const user = "0x8b21d27b7de562512b71ced257825f61fe51f2802e2896312ddc32764ed28cd5";
(async () => {
    let result = await getUserShares(provider, config.PORTFOLIO_PACKAGE, config.SINGLE_COLLATERAL_REGISTRY, indexes, user);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
