// import { JsonRpcProvider, Network } from '@mysten/sui.js';
// import { COVERED_CALL_REGISTRY } from "../constants"
// const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations

// export async function subVaults(): Promise<any> {
//     // let data = await provider.getObject("0x9f3a10e5e7cc22092825c9a4e8269b37fb935a9d")
//     // let data = await provider.getObjectsOwnedByObject("0x0fda36c64af91d4f9c946f00c6f13194c37493ab")
//     // let data = await provider.getObject("0x933ab335ef83ef247ae43f537f9a76317feb7358")
//     // console.log("data: ", JSON.stringify(data))
//     return await subVaultsV2(COVERED_CALL_REGISTRY, provider)
// }

// export async function subVaultsV2(registry: string, provider: JsonRpcProvider): Promise<any> {
//     console.log("registry: " + registry)

//     //vault
//     let tmpObj1 = await provider.getObjectsOwnedByObject(registry)
//     console.log("vault num under registry:" + tmpObj1.length)
//     if (tmpObj1.length != 0) {
//         let vault = tmpObj1[0].objectId
//         // let vault = "0x701c014a20294ee7e170148353a2dfe42fb5fb88"
//         console.log("vault: " + vault)

//         //table
//         let tmpObj2 = await provider.getObject(vault)

//         //@ts-ignore
//         let tableId = tmpObj2.details.data.fields.value.fields.vault.fields.sub_vaults.fields.id.id
//         console.log("table: " + tableId)

//         //sub vault (maker / rolling / no_rolling) id 
//         let tmpObj3 = await provider.getObjectsOwnedByObject(tableId)
//         let subVaultsId: string[] = [];
//         tmpObj3.map(e => {
//             // console.log("data: " + JSON.stringify(e))
//             subVaultsId.push(e.objectId as string)
//         }
//         )
//         console.log("subVaults: ")
//         //@ts-ignore
//         console.log(subVaultsId)

//         //sub vault data
//         const subVaultsMap = new Map();
//         //@ts-ignore
//         for (let e of subVaultsId) {
//             let tmpObj4 = await provider.getObject(e)
//             //@ts-ignore
//             subVaultsMap.set(tmpObj4.details.data.fields.name, tmpObj4.details.data.fields)
//         }
//         // console.log(subVaultsMap.get("rolling").value.fields.users_table)
//         return subVaultsMap
//     } else {
//         console.log("no vault under this registry: " + registry);
//         return null;
//     }
// }

// subVaults()