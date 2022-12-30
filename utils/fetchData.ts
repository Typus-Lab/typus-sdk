
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { UserDepositData } from "../utils/loadUsersDepositData"
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations

const decode = (str: string): string => Buffer.from(str, 'base64').toString('binary');

export interface SubVaults {
    rolling: string;
    maker: string;
    regular: string;
}

export interface Vault {
    vaultId: string;
    vaultIdx: number;
    asset: string;

    //vault
    ableToDeposit: boolean;
    ableToWithdraw: boolean;
    // maker_sub_vault: string;
    // regular_sub_vault: string;
    // rolling_sub_vault: string;

    //config
    expirationTsMs: number;
    payoffConfig: PayoffConfig;
    period: number;// daily:0 weekly:1 monthly:2
    shareDecimal: number;
    startTsMs: number;
    tokenDecimal: number;

    //  status:string; // Upcoming Or Active 
    //  tvl:number;
    //  apy:number
    //  Capacity//not yet
}

export interface PayoffConfig {
    exposureRatio: number;
    premiumRoi: number;
    strike: number;
    strikeOtmPct: number;
}
//new version: getVaultDataFromRegistry()
export async function getCoveredCallVaultsFromRegistry(registry: string): Promise<any> {
    console.log("registry: " + registry)
    let coveredCallVaults: any[] = await provider.getObjectsOwnedByObject(registry)
    console.log("under the registry, there are " + coveredCallVaults.length + " covered call vaults")
    return coveredCallVaults
}

export async function getTableFromCoveredCallVault(coveredCallVault: string): Promise<any> {
    console.log("coveredCallVault: " + coveredCallVault)
    let tmp: any = await provider.getObject(coveredCallVault)
    if (tmp.status != "Exists") {
        console.log("obj not exists")
        return
    }
    //@ts-ignore
    let tableUnderCoveredCallVault: string = tmp.details.data.fields.value.fields.vault.fields.sub_vaults.fields.id.id
    console.log("table : " + tableUnderCoveredCallVault)
    return tableUnderCoveredCallVault
}

export async function getSubVaultsFromTable(tableUnderCoveredCallVault: string): Promise<SubVaults> {
    let subVaults = await provider.getObjectsOwnedByObject(tableUnderCoveredCallVault)
    console.log("there are " + subVaults.length + " sub vault under table, representing rolling, regular and maker")
    let result = {} as SubVaults;
    for (let subVault of subVaults) {
        let txn = await provider.getObject(subVault.objectId)
        if (txn.status != "Exists") {
            console.log("obj not exists")
            return {} as SubVaults
        }
        //@ts-ignore
        let name = decode(txn.details.data.fields.name)//rolling / regular / maker
        //@ts-ignore
        result[name] = txn.details.data.fields.id.id
    }
    console.log("sub vaults:")
    console.log(result)
    return result
}

export async function getTableUnderSubVault(subVault: string): Promise<string> {
    console.log("sub vault: " + subVault)
    let tmp = await provider.getObject(subVault)
    if (tmp.status != "Exists") {
        console.log("obj not exists")
        return ""
    }
    //@ts-ignore
    let table: string = tmp.details.data.fields.value.fields.user_shares.fields.nodes.fields.id.id
    console.log("table under sub vault: ", table);
    return table
}

export async function getLinkedListNodesFromTable(table: string): Promise<any[]> {
    let linkedListNodes: any[] = await provider.getObjectsOwnedByObject(table)
    console.log("there are " + linkedListNodes.length + " linked list nodes in table")
    return linkedListNodes
}

export async function getUserDataFromLinkedListNode(linkedListNode: string): Promise<any> {
    let tmp = await provider.getObject(linkedListNode)
    if (tmp.status != "Exists") {
        console.log("obj not exists")
        return
    }
    //@ts-ignore
    let usersData: any = tmp.details.data.fields
    console.log("users data from linked list node:")
    console.log(usersData)
    return usersData
}