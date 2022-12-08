import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { COVERED_CALL_REGISTRY } from "../constants"
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations

export async function subVaults(): Promise<any> {
    return await subVaultsV2(COVERED_CALL_REGISTRY, provider)
}

export async function subVaultsV2(registry: string, provider: JsonRpcProvider): Promise<any> {
    console.log("registry: " + registry)

    //vault
    let tmpObj1 = await provider.getObjectsOwnedByObject(registry)
    console.log("vault num under registry:" + tmpObj1.length)
    if (tmpObj1.length != 0) {
        let vault = tmpObj1[0].objectId
        console.log("vault: " + vault)

        //table
        let tmpObj2 = await provider.getObject(vault)
        //@ts-ignore
        let table = tmpObj2.details.data.fields.value.fields.sub_vaults.fields.id.id
        console.log("table: " + table)

        //sub vault (maker / rolling / no_rolling) id 
        let tmpObj3 = await provider.getObjectsOwnedByObject(table)
        let subVaultsId: string[] = [];
        tmpObj3.map(e => {
            subVaultsId.push(e.objectId as string)
        }
        )
        console.log("subVaults: ")
        //@ts-ignore
        console.log(subVaultsId)

        //sub vault data
        const subVaultsMap = new Map();
        //@ts-ignore
        for (let e of subVaultsId) {
            let tmpObj4 = await provider.getObject(e)
            //@ts-ignore
            subVaultsMap.set(tmpObj4.details.data.fields.name, tmpObj4.details.data.fields)
        }
        // console.log(subVaultsMap.get("rolling").value.fields.users_table)
        return subVaultsMap
    } else {
        console.log("no vault under this registry: " + registry);
        return null;
    }
}