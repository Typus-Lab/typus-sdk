import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { getRankings } from "src/typus/leaderboard";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    const provider = config.gRpcClient();

    let dfs = await provider.listDynamicFields({ parentId: "0xa6a9615115f50b848191f7503507f16df83d42e7d487ced03d6d854920356717" });
    // console.dir(dfs, { depth: null });

    let ids = dfs.data.map((x) => x.objectId);
    console.log(ids);

    // 0 => this round
    // 1 => last round
    // let id = ids[1];
    let id = "0xa3cffb5dffd9b5b628a6be09996a895598aa0cc2bd803a18f6b366e7c2cda0db";

    const trading_competition = await getRankings(config, {
        key: "trading_competition",
        id,
        ranks: 500,
        user: "0x51f7f4abb6a4cf83ed59ce634f7c17dc1df2f04abe6842317049a3df0f8be8e4",
        active: true,
    });
    console.log(JSON.stringify(trading_competition, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
