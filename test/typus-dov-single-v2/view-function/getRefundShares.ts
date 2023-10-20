import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getRefundShares } from "../../../utils/typus-dov-single-v2/view-function";
import config from "../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
(async () => {
    let user = "0x603272d1e61de086a18751482684f882642eb080144aee425c4c34b5e56470b0";
    let typeArguments = [
        "0x2::sui::SUI",
        "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::btc::BTC",
        "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::eth::ETH",
        "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC",
    ];
    let result = await getRefundShares(provider, config.PACKAGE, config.REGISTRY, user, typeArguments);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();