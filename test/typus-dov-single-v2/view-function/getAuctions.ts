import { TypusConfig } from "src/utils";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { getAuctions } from "src/typus-dov-single-v2";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    const provider = config.gRpcClient();

    let indexes = [];
    let result = await getAuctions(config, { indexes });
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
