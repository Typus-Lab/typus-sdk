import { Connection, JsonRpcProvider } from "@mysten/sui.js";
import config from "../../config_v2.json";
import { getUsersBid, getUsersHarvestCompound, getUsersTvl } from "../../utils/typus-dov-single-v2/leaderboard";

(async () => {
    console.log(await getUsersTvl("0", "1704067200"));
    const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
    console.log(await getUsersBid(provider, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN));
    console.log(await getUsersHarvestCompound(provider, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN));
})();
