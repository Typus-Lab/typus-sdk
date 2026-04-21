import { TypusConfig } from "src/utils";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { getMyBids, getUserOwnedObjects } from "src/typus-dov-single-v2";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    const provider = config.gRpcClient();

    const user = "0xe6b6849126c345010c93022f038ff1f6fb9a759dd7848e4d9e22f68c764377e7";
    const datas = await getUserOwnedObjects(config, user);

    let receipts = datas
        .filter((obj) => obj?.type! == `${config.packageOrigin.framework}::vault::TypusBidReceipt`)
        .map((obj) => obj?.objectId!);
    console.log(receipts);

    let result = await getMyBids(config, { receipts });
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
