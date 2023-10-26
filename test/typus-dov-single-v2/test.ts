import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import config from "./config.json";

(async () => {
    const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
    let data = (await provider.getDynamicFields({ parentId: "0x8a30889c5b1c670e0569fb17c192b560db15d6ed2d606b3d8a7d6d2d5c1963bc" })).data
        .filter((x) => x.objectType.includes("Balance"))
        .map((x) => x.objectId as string);
    let result = await provider.multiGetObjects({
        ids: data,
        options: { showContent: true },
    });

    console.log(JSON.stringify(result, null, 2));
})();
