import { Connection, JsonRpcProvider } from "@mysten/sui.js";
import config from "../../config_v2.json";
import { getUsersBidEvents, sumUsersBidPremium, getUsersHarvestCompound, getUsersTvl } from "../../utils/typus-dov-single-v2/leaderboard";

(async () => {
    console.log(await getUsersTvl("0", "1704067200"));
    console.log(await getUsersTvl("1700722800", "1704067200"));
    const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
    const datas = await getUsersBidEvents(provider, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN);
    const usersBidPremium = await sumUsersBidPremium(datas);
    console.log(usersBidPremium);
    const usersBidPremiumIndex0 = await sumUsersBidPremium(datas, ["0"]);
    console.log(usersBidPremiumIndex0);
    console.log(await getUsersHarvestCompound(provider, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN));
})();
