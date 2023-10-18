import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getMyBids } from "../../../utils/typus-dov-single-v2/view-function";
import config from "../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
(async () => {
    let receipts = [
        "0xb618954e81c561d5502356b9fd7254ba16b3fad1ed760a05dfd369ad4b867e13",
        "0x58c65af553a3d55019ef402674435321ff23ca6efd4b38d227448c3ea6368575",
    ];
    let result = await getMyBids(provider, config.FRAMEWORK_PACKAGE, config.PACKAGE, config.REGISTRY, receipts);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
