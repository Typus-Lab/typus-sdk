import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui/client";
import { getRankings } from "src/typus/leaderboard";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let dfs = await provider.getDynamicFields({ parentId: "0xa6a9615115f50b848191f7503507f16df83d42e7d487ced03d6d854920356717" });
    // console.dir(dfs, { depth: null });

    let ids = dfs.data.map((x) => x.objectId);

    // 0 => this round
    // 1 => last round
    let id = ids[1];

    const trading_competition = await getRankings(config, {
        key: "trading_competition",
        id,
        ranks: 500,
        user: "0x51f7f4abb6a4cf83ed59ce634f7c17dc1df2f04abe6842317049a3df0f8be8e4",
        active: true,
    });
    console.log(JSON.stringify(trading_competition, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
