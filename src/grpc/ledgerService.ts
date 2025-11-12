// import * as grpc from "@grpc/grpc-js";
// import * as protoLoader from "@grpc/proto-loader";

// // Load proto definitions
// const packageDefinition = protoLoader.loadSync("sui/rpc/v2/ledger_service.proto", {
//     keepCase: true,
//     longs: String,
//     enums: String,
//     defaults: true,
//     oneofs: true,
//     includeDirs: ["src/grpc/proto"],
// });

// const suiProto = grpc.loadPackageDefinition(packageDefinition) as any;
// const LedgerService = suiProto.sui.rpc.v2.LedgerService;

// // Create gRPC client
// const client = new LedgerService("fullnode.testnet.sui.io:443", grpc.credentials.createSsl());

// // // Sample transaction digest in Base58 format
// // const base58Digest = "3ByWphQ5sAVojiTrTrGXGM5FmCVzpzYmhsjbhYESJtxp";

// // // Construct the request
// // const request = {
// //     digest: base58Digest,
// //     read_mask: {
// //         paths: ["events", "effects"],
// //     },
// // };

// // // Make gRPC call
// // client.GetTransaction(request, (err: any, response: any) => {
// //     if (err) {
// //         console.error("Error:", err);
// //     } else {
// //         console.log("Response:", JSON.stringify(response, null, 2));
// //     }
// // });

// // const request = {
// //     object_id: "0x0285cbf4aa8585be6c978235d11d06fa35773266ede040d38d34e1d79b049460",
// //     read_mask: {
// //         paths: ["bcs"],
// //     },
// // };

// // // Make gRPC call
// // client.GetObject(request, (err: any, response: any) => {
// //     if (err) {
// //         console.error("Error:", err);
// //     } else {
// //         console.dir(response);
// //     }
// // });

// const request = {
//     requests: [
//         { object_id: "0x0285cbf4aa8585be6c978235d11d06fa35773266ede040d38d34e1d79b049460" },
//         { object_id: "0x50b01081469d032e04bfcbd057614b1359376920f55c7bebd076e0e2af07a57f" },
//     ],
//     read_mask: {
//         paths: ["bcs"],
//     },
// };

// // Make gRPC call
// client.BatchGetObjects(request, (err: any, response: any) => {
//     if (err) {
//         console.error("Error:", err);
//     } else {
//         console.dir(response, { depth: null });
//     }
// });
