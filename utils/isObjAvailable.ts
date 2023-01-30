// import { JsonRpcProvider, Network } from '@mysten/sui.js';

// const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations

// export async function isObjAvailable(obj: string): Promise<Boolean> {
//     try {
//         let tmp = await provider.getObject(
//             obj
//         )
//         if (tmp.status == "Exists") return true
//         else return false
//     } catch (e) {
//         return false
//     }
// }