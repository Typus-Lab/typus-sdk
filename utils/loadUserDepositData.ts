import {
    getCoveredCallVaultsFromRegistry,
    getLinkedListNodesFromTable,
    getSubVaultsFromTable,
    getTableFromCoveredCallVault,
    getTableUnderSubVault,
    getUserDataFromLinkedListNode,
    SubVaults
} from "./fetchData"

export interface UserDepositData {
    coveredCallVault: string;
    subVault: string;
    subVaultType: string;
    linkedListNode: string;
    balance: number;
}

export async function loadUserDepositData(registry: string): Promise<any> {

    //in the return map, the user addr will map to an array of UserDepositData
    let usersDepositData = new Map();

    //from registry find covered call vaults
    let coveredCallVaults: any[] = await getCoveredCallVaultsFromRegistry(registry);

    //from covered call vaults find table
    for (let coveredCallVault of coveredCallVaults) {

        let tableUnderCoveredCallVault: string = await getTableFromCoveredCallVault(coveredCallVault.objectId as string)

        //from table find sub vault
        let subVaults: SubVaults = await getSubVaultsFromTable(tableUnderCoveredCallVault)

        //from sub vault find table 
        for (let subVaultType in subVaults) {

            let tableUnderSubVault: string = await getTableUnderSubVault(subVaults[subVaultType] as string)

            //from table find linked list node
            let linkedListNodes: any[] = await getLinkedListNodesFromTable(tableUnderSubVault)

            //from linkedListNode find user data
            for (let linkedListNode of linkedListNodes) {

                let userData: any = await getUserDataFromLinkedListNode(linkedListNode.objectId as string)

                let userDepositData: UserDepositData = {
                    coveredCallVault: coveredCallVault.objectId,
                    subVault: subVaults[subVaultType],
                    subVaultType: subVaultType,
                    linkedListNode: linkedListNode.objectId,
                    balance: userData.value.fields.value
                }

                //store user data in return map
                let userDepositDatas: UserDepositData[] = (usersDepositData.get(userData.name) == undefined) ? [] : usersDepositData.get(userData.name);
                userDepositDatas.push(userDepositData)
                usersDepositData.set(userData.name as string, userDepositDatas)

            }
        }
    }

    return usersDepositData
}