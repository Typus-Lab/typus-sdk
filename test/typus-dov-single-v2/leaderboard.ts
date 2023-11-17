import { Connection, JsonRpcProvider } from "@mysten/sui.js";
import config from "../../config_v2.json";
import {
    getUsersBidEvents,
    sumUsersBidPremium,
    getUsersHarvestCompound,
    getUsersTvl,
    getSuiNS,
} from "../../utils/typus-dov-single-v2/leaderboard";

(async () => {
    const startTs = 1700118000;
    const endTs = 1704067200;
    console.log(await getUsersTvl(startTs.toString(), endTs.toString()));
    const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
    const datas = await getUsersBidEvents(provider, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN, startTs);
    const usersBidPremium = await sumUsersBidPremium(datas, [], startTs, endTs);
    console.log(usersBidPremium);
    const usersBidPremiumIndex0 = await sumUsersBidPremium(datas, ["0"]);
    console.log(usersBidPremiumIndex0);
    console.log(await getUsersHarvestCompound(provider, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN));
    // SuiNS
    const usersBidPremiumNS = new Map<string, number>();
    for (let x of usersBidPremium) {
        const name = await getSuiNS(provider, x[0]);
        usersBidPremiumNS.set(name, x[1]);
    }
    console.log(usersBidPremiumNS);
})();
