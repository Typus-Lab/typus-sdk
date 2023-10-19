import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getMyBids } from "../../../utils/typus-dov-single-v2/view-function";
import config from "../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
(async () => {
    let receipts = [
        "0xc6c6d33ef8d1bb4cae380a8dff90f871f7bafde31351f9fa6ad107a6ed06c2e8", // SUI-19OCT23-0.349-Put
        "0x2d55481c30de761d88d1b3d50b2253feed842162251b6701524aeb7edb30d99d", // SUI-19OCT23-0.349-Put
        "0x5dd76b586897e1aab0045df620c60fcf9356d1f4dd2f11f44972533523c19730", // SUI-19OCT23-0.362-Put
        "0xe8abbb1200bfbee1d8c4202751ea34f18eef620d967419e365c3daed40ddc1e4", // SUI-20OCT23-0.188-Put
        "0x72a1b50f18dca9bc1501211c9e3d696bb84e7855668c53ba7e0a4d17d9159e2b", // SUI-20OCT23-0.188-Put
    ];
    let result = await getMyBids(provider, config.FRAMEWORK_PACKAGE, config.PACKAGE, config.REGISTRY, receipts);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
