import { JsonRpcProvider, Network } from '@mysten/sui.js';
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations

export async function subVaults(): Promise<any> {
    //packageID and registry
    let packageID = process.env.PACKAGE!
    let registry = process.env.VAULT_REGISTRY!
    return await subVaultsV2(packageID, registry, provider)
}

export async function subVaultsV2(packageID: string, registry: string, provider: JsonRpcProvider): Promise<any> {
    //packageID and registry
    // let packageID = process.env.PACKAGE!
    // let registry = process.env.VAULT_REGISTRY!
    console.log("packageID: " + packageID)
    console.log("registry: " + registry)

    //vault
    let tmpObj1 = await provider.getObjectsOwnedByObject(registry)
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
}