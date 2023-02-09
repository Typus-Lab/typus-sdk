import { JsonRpcProvider, Ed25519Keypair, RawSigner, SuiEventEnvelope, Network, Base64DataBuffer } from '@mysten/sui.js';
import { fromB64 } from '@mysten/bcs';
import fs from "fs";
import fetch from 'cross-fetch';
import { TESTNET_RPC_ENDPOINT } from "../constants"
const { execSync } = require('child_process');
const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations
const owner = "0xd28103a499003bed0b1b9ee52988ecdd2db82224";
const obj1 = "0x7e9e58daeb94bbd0450bb9ee9f00e219a1f2b734";//obj owned by owner
const obj2 = "0x74aa838eb6627c8e74b0645484abb463e6fd6669";//obj owned by owner
const obj1Digest = "tclmc0L6hewmfWxQAxSl9eUe14C82+hzE4OblKgY38U=";
const obj2Digest = "tclmc0L6hewmfWxQAxSl9eUe14C82+hzE4OblKgY38U=";
const receiver = "0x15ca0895f29101085cb26e00ede89420741b3140";
const tx1 = "GRiBgktRqgJ4MSoRhCfSm/+1R/Zh9jy4UncoQeFAu5I="
// export PRIVATEKEY=~/.sui/sui_config/sui.keystore
const secretKeysPath = process.env.PRIVATEKEY;

const subVault = "0xd3b2d3ee74afe2b5af0f810b3368955f068188e8"

const TEST_MNEMONIC = "tackle wheat jungle viable memory dwarf swift fold purpose cattle impose horn"
const VALID_SECRET_KEY = "Itk7iNFs91kXKdqVqmLrBKJItNIoSyWAOh+ZC2qaSihpxiAxNYwKPjwfresk9CSbKCmwNwvXfPQoeLL4rVa4OQ=="//'mdqVWeFekT7pqy5T49+tV12jO0m+ESW7ki4zSU9JiCgbL0kJbj5dvQ/PqcDAzZLZqzshVEs01d1KZdmLh4uZIg==';

// let secretKeys = (readJsonFile<any>(secretKeysPath as string))
// let sender = secretKeys[0]

// let keypair = Ed25519Keypair.fromSecretKey(fromB64(sender))// Error: Wrong secretKey size. Expected 64 bytes, got 65.
// let keypair = Ed25519Keypair.fromSecretKey(fromB64(VALID_SECRET_KEY))
let keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

function readJsonFile<T>(filePath: string): T {
    return JSON.parse(
        fs.readFileSync(
            filePath,
            "utf-8"
        )
    )
}

// //Success
// (async () => {
//     console.log("test for getObjectsOwnedByAddress()")

//     const objects = await provider.getObjectsOwnedByAddress(
//         owner
//     )
//     console.log(objects)
// })();

// //Success
// (async () => {
//     console.log("test for getObjectsOwnedByObject()")

//     const objects = await provider.getObjectsOwnedByObject(
//         obj1
//     )
//     console.log(objects)

//     //filter obj by type
//     for (let object of objects) {
//         if (object.type.includes("dynamic_field")) console.log("it's dynamic field object")
//     }
// })();

// //Success
// (async () => {
//     console.log("test for getObject() and getObjectBatch()")

//     const txn = await provider.getObject(
//         obj1
//     );
//     console.log(txn)

//     // You can also fetch multiple objects in one batch request
//     const txns = await provider.getObjectBatch([
//         obj1,
//         obj2,
//     ]);
//     console.log(txns)
// })();

// // Fail
// (async () => {
//     console.log("test for getTransactionWithEffects() and getTransactionWithEffectsBatch()")

//     const txn = await provider.getTransactionWithEffects(
//         obj1Digest
//     );
//     console.log(txn)

//     You can also fetch multiple transactions in one batch request
//     const txns = await provider.getTransactionWithEffectsBatch([
//         obj1Digest,
//         obj2Digest,
//     ]);
//     console.log(txns)
// })();

// //Fail (without correct signer)
// (async () => {
//     console.log("test for transferObject()")
//     const transferTxn = await signer.transferObject({
//         objectId: obj1,
//         gasBudget: 100000,
//         recipient: receiver,
//     });
//     console.log('transferTxn', transferTxn);
// })();

// //Fail (without correct signer)
// (async () => {
//     console.log("test for executeMoveCall()")
//     const moveCallTxn = await signer.executeMoveCall({
//         packageObjectId: '0x2',
//         module: 'devnet_nft',
//         function: 'mint',
//         typeArguments: [],
//         arguments: [
//             'Example NFT',
//             'An NFT created by the wallet Command Line Tool',
//             'ipfs://bafkreibngqhl3gaa7daob4i2vccziay2jjlp435cf66vhono7nrvww53ty',
//         ],
//         gasBudget: 100000,
//     });
//     console.log('moveCallTxn', moveCallTxn);
// })();

// //Fail( Error subscribing to event)
// (async () => {
//     console.log("test for subscribeEvent()")
//     // calls RPC method 'sui_subscribeEvent' with params:
//     // [ { SenderAddress: '0xbff6ccc8707aa517b4f1b95750a2a8c666012df3' } ]

//     const subscriptionId = await provider.subscribeEvent(
//         { SenderAddress: '0xbff6ccc8707aa517b4f1b95750a2a8c666012df3' },
//         (event: SuiEventEnvelope) => {
//             console.log(event)
//             // handle subscription notification message here. This function is called once per subscription message.
//         }
//     );

//     // later, to unsubscribe
//     // calls RPC method 'sui_unsubscribeEvent' with params: [ subscriptionId ]
//     const subFoundAndRemoved = await provider.unsubscribeEvent(subscriptionId);
// })();

// //Fail (without correct signer)
//refer: https://docs.sui.io/build/json-rpc
// (async () => {
//     console.log("test for publish()")
//     const compiledModules = JSON.parse(
//         execSync(
//             `${cliPath} move build --dump-bytecode-as-base64 --path ${packagePath}`,
//             { encoding: 'utf-8' }
//         )
//     );
//     const modulesInBytes = compiledModules.map((m) =>
//         Array.from(new Base64DataBuffer(m).getData())
//     );
//     const publishTxn = await signer.publish({
//         compiledModules: modulesInBytes,
//         gasBudget: 100000,
//     });
//     console.log('publishTxn', publishTxn);
// })();

// //Success
// (async () => {
//     console.log("test for getTransactions()") // return digest
//     let txs = await provider.getTransactionsForObject(
//         obj1
//     )
//     console.log(txs)

//     let tx = await provider.getTransactionWithEffects(
//         txs[0]
//     )
//     console.log(tx)
// })();

// //Success
// (async () => {
//     console.log("test for getEvents()")//input type: EventQuery
//     const senderEvents = await provider.getEvents(
//         { "Transaction": tx1 },
//         null,
//         null,
//     );
//     for (let e of senderEvents.data) {
//         console.log(e.event)
//     }
// })();

// let packageId = "0xfbbdd33ab4c02e7a315e2477931bae4cbdf46381";
// let registry = "0x0a9d87a1b6c00415708d2f1c62784b52f797213c";
// let coin = "0x84e5c5702bfbb00a830fb43e720a3a412cc2a8db";
// console.log("test for deposit()")
// await deposit(packageId, registry, coin)
// async function deposit(packageId: string, registry: string, coin: string) {
//     let txn = {
//         packageObjectId: packageId,
//         module: 'shark_fin',
//         function: 'deposit',
//         typeArguments: ["0x2::sui::SUI"],
//         arguments: [
//             registry,
//             0,
//             true,
//             coin
//         ],
//         gasBudget: 100000,
//     }
//     const moveCallTxn = await signer.executeMoveCall(txn);
//     console.log('moveCallTxn', moveCallTxn);
// }



