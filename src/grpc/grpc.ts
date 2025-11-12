import { SuiGrpcClient } from "@mysten/sui/grpc";
import { LIQUIDITY_POOL_0 } from "src/perp";

import * as lp_pool from "src/generated/typus_perp/lp_pool";

const grpcClient = new SuiGrpcClient({ network: "mainnet", baseUrl: "https://fullnode.mainnet.sui.io:443" });

grpcClient.ledgerService.getObject({ objectId: LIQUIDITY_POOL_0 }).then((x) => console.log(x.response.object?.contents));
