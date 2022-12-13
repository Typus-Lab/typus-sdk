
import { JsonRpcProvider, Network } from '@mysten/sui.js';
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations

const decode = (str: string): string => Buffer.from(str, 'base64').toString('binary');

export interface subVaults {
    rolling: string;
    maker: string;
    regular: string;
}

export async function getCoveredCallVaultsFromRegistry(registry: string): Promise<any> {
    let coveredCallVaults: any[] = await provider.getObjectsOwnedByObject(registry)
    console.log("under the registry, there are " + coveredCallVaults.length + " covered call vaults")
    return coveredCallVaults
}

export async function getTableFromCoveredCallVault(coveredCallVault: any): Promise<any> {
    console.log("coveredCallVault: " + coveredCallVault.objectId)
    let tmp: any = await provider.getObject(coveredCallVault.objectId)
    //@ts-ignore
    let tableUnderCoveredCallVault: string = tmp.details.data.fields.value.fields.vault.fields.sub_vaults.fields.id.id
    console.log("table : " + tableUnderCoveredCallVault)
    return tableUnderCoveredCallVault
}

export async function getSubVaultsFromTable(tableUnderCoveredCallVault: string): Promise<subVaults> {
    let subVaults = await provider.getObjectsOwnedByObject(tableUnderCoveredCallVault)
    console.log("there are " + subVaults.length + " sub vault under table, representing rolling, regular and maker")
    let result = {} as subVaults;
    for (let subVault of subVaults) {
        let txn = await provider.getObject(subVault.objectId)
        //@ts-ignore
        let name = decode(txn.details.data.fields.name)//rolling / regular / maker
        //@ts-ignore
        result[name] = txn.details.data.fields.id.id
    }
    console.log("sub vaults:")
    console.log(result)
    return result
}

export async function getTableUnderSubVault(subVault: string): Promise<any> {
    console.log("sub vault: " + subVault)
    let table = await provider.getObject(subVault)
    console.log("table under sub vault: ", table);
    return table
}

export async function getLinkedListNodesFromTable(table: string): Promise<any[]> {
    let linkedListNodes: any[] = await provider.getObjectsOwnedByObject(table)
    console.log("there are " + linkedListNodes.length + " linked list nodes in table")
    return linkedListNodes
}

export async function getUserDataFromLinkedListNode(linkedListNode: any): Promise<any[]> {
    let tmp = await provider.getObject(linkedListNode)
    //@ts-ignore
    let usersData: any[] = tmp.details.data.fields
    console.log("users data from linked list node:")
    console.log(usersData)
    return usersData
}