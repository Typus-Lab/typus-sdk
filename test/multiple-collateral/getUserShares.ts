import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getUserShares } from "../../utils/portfolio/multiple-collateral/user-share";

const connection = new Connection({ fullnode: "https://rpc-testnet.suiscan.xyz:443" });
// const connection = new Connection({ fullnode: "https://fullnode.testnet.sui.io:443" });
const provider = new JsonRpcProvider(connection); //for read only operations
const packageId = "0x5bc14570416400e66d178646067f9f44c7a1ae8bfa489630e86c3a57de10e49a";
const registry = "0xbb8abceca4104136a0deded4bfc81c12a8d4f3a3b55cd11482dd9a569c6c2dce";
const indexes = ["0", "1", "2"];
const user = "0x603272d1e61de086a18751482684f882642eb080144aee425c4c34b5e56470b0";
(async () => {
    let result = await getUserShares(provider, packageId, registry, indexes, user);
    console.log(JSON.stringify(result, (_, v) => typeof v === 'bigint' ? `${v}` : v, 2));
})();