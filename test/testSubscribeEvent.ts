import { JsonRpcProvider, devnetConnection } from "@mysten/sui.js";
import WebSocket from "ws";

const provider = new JsonRpcProvider(devnetConnection); //for read only operations
const devnetNftFilter = {
  All: [
    { EventType: "MoveEvent" },
    { Package: "0x2" },
    { Module: "devnet_nft" },
  ],
};
(async () => {
  console.log("test for subscribeEvent()");
})();

// (async () => {
//     console.log("connect...")
//     console.log(await subscribeEvent())
// })()

// async function subscribeEvent(): Promise<any[]> {
//     let results[] = [];

//     let msg = {
//         jsonrpc: "2.0",
//         id: 1,
//         method: "sui_subscribeEvent",
//         params:
//             [{ "All": [{ SenderAddress: '0x82a2d7e3875b49217702d61b7411576af12ecab3' }] }]
//     };
//     let ws = new WebSocket("wss://pubsub.devnet.sui.io:443")
//     //ws://136.243.36.109:9001

//     ws.onmessage = function (e) {
//         // do something with the response...
//         console.log(JSON.parse(e.data.toString()))
//         results = JSON.parse(e.data.toString()).result;

//         // close the connection from the server
//         ws.close();
//     };

//     ws.onopen = function () {
//         ws.send(JSON.stringify(msg));
//     };

//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(results), 5000);
//     });
// }
