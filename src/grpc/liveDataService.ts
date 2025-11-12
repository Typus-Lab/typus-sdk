// import * as grpc from "@grpc/grpc-js";
// import * as protoLoader from "@grpc/proto-loader";
// import * as path from "path";

// // Load proto definitions
// const packageDefinition = protoLoader.loadSync("sui/rpc/v2beta2/live_data_service.proto", {
//     keepCase: true,
//     longs: String,
//     enums: String,
//     defaults: true,
//     oneofs: true,
//     includeDirs: ["src/grpc/proto"],
// });

// const suiProto = grpc.loadPackageDefinition(packageDefinition) as any;
// const LiveDataService = suiProto.sui.rpc.v2beta2.LiveDataService;
// // console.log(Object.keys(LiveDataService.service));

// // Create gRPC client
// const client = new LiveDataService("fullnode.testnet.sui.io:443", grpc.credentials.createSsl());

// // Construct the request
// const request1 = {
//     parent: "0x0285cbf4aa8585be6c978235d11d06fa35773266ede040d38d34e1d79b049460",
//     page_size: 50, // maximum 1000
//     // page_token,
//     read_mask: {
//         paths: ["name_value", "object"],
//     },
// };

// // Make gRPC call
// client.ListDynamicFields(request1, (err: any, response: any) => {
//     if (err) {
//         console.error("Error:", err);
//     } else {
//         console.log("Response:", JSON.stringify(response, null, 2));
//     }
// });

// // // Construct the request
// // const request2 = {
// //     owner: "0x978f65df8570a075298598a9965c18de9087f9e888eb3430fe20334f5c554cfd",
// //     // page_size: 50, // maximum 1000
// //     // page_token,
// // };

// // // Make gRPC call
// // client.ListOwnedObjects(request2, (err: any, response: any) => {
// //     if (err) {
// //         console.error("Error:", err);
// //     } else {
// //         console.log("Response:", JSON.stringify(response, null, 2));
// //     }
// // });
