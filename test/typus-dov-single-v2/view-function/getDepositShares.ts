import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getDepositShares } from "../../../utils/typus-dov-single-v2/view-function";
import config from "../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
(async () => {
    let receipts = [
        // "0x592d96912d9eda672be8744db7403cc4fc7504239e853d65abdea76eace2ec85",
        // "0xe51a2388f5fef53a205071fe2624fe31043dc8259c122a734934319009ed9ab6",
    ];
    let result = await getDepositShares(provider, config.FRAMEWORK_PACKAGE, config.PACKAGE, config.REGISTRY, receipts);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
