import { SuiGrpcClient } from "@mysten/sui/grpc";

const grpcClient = new SuiGrpcClient({ network: "testnet", baseUrl: "https://fullnode.testnet.sui.io:443" });

grpcClient.ledgerService
    .getObject({ objectId: "0x0285cbf4aa8585be6c978235d11d06fa35773266ede040d38d34e1d79b049460" }, {})
    .then((x) => console.log(x.response.object?.contents));
