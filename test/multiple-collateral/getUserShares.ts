import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getUserShares } from "../../utils/typus-dov-double/view-function";

const connection = new Connection({ fullnode: "https://rpc-testnet.suiscan.xyz:443" });
// const connection = new Connection({ fullnode: "https://fullnode.testnet.sui.io:443" });
const provider = new JsonRpcProvider(connection); //for read only operations
const packageId = "0xab7e0bab5980ad0b55d3fae9d64c1bd41043a3bf383ff41dbc7f0c4ffe766213";
const registry = "0x5083936779bd8bbc26f374baf90981ad5af8f57fe22920105aa47d4e012364de";
const user = "0x603272d1e61de086a18751482684f882642eb080144aee425c4c34b5e56470b0";
(async () => {
    let indexes = ["0", "1", "2"];
    let result = await getUserShares(provider, packageId, registry, indexes, user);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
