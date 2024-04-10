import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import config from "../../config.json";
import { getUserHistory } from "../typus-dov-single/user-history";
(async () => {
    const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
    const sender = "0x8b21d27b7de562512b71ced257825f61fe51f2802e2896312ddc32764ed28cd5";

    const userHistory = await getUserHistory(provider, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN, sender, 1687587861000);
    console.log(userHistory);
})();
