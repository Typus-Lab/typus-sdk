import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getAdditionalConfigs } from "../../utils/typus-dov-single/view-function";
import config from "../../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
(async () => {
    // testnet
    // let indexes = ["0", "2", "4", "6", "7", "10", "11", "12", "13", "14", "15", "16", "17"];
    // mainnet
    let indexes = ["0", "2", "4", "5", "6", "7"];
    let result = await getAdditionalConfigs(
        provider,
        config.SINGLE_COLLATERAL_PACKAGE,
        config.SINGLE_COLLATERAL_ADDITIONAL_CONFIG_REGISTRY,
        indexes
    );
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
