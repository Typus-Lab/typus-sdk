import { COVERED_CALL_REGISTRY } from "../constants"
import {
    getCoveredCallVaultsFromRegistry,
    getLinkedListNodesFromTable,
    getSubVaultsFromTable,
    getTableFromCoveredCallVault,
    getTableUnderSubVault,
    getUserDataFromLinkedListNode,
    subVaults
} from "../utils/fetchData"

/*
test sub vault:
0x1395a87663995fe2040fecf1866a01f9a0270fc2
test table under sub vault:
0x0fda36c64af91d4f9c946f00c6f13194c37493ab
test linked list node:
0x933ab335ef83ef247ae43f537f9a76317feb7358
*/

(async () => {
    let user = "0x81c962005db9bd02711b00909cd28a707ec0a248"

    //from registry find covered call vaults
    console.log("registry: " + COVERED_CALL_REGISTRY)
    let coveredCallVaults: any[] = await getCoveredCallVaultsFromRegistry(user);

    //from covered call vaults find table
    for (let coveredCallVault of coveredCallVaults) {


        let tableUnderCoveredCallVault: string = await getTableFromCoveredCallVault(coveredCallVault)

        //from table find sub vault
        let subVaults: subVaults = await getSubVaultsFromTable(tableUnderCoveredCallVault)

        //from sub vault find table 
        for (let e in subVaults) {
            let tableUnderSubVault: string = await getTableUnderSubVault(subVaults[e] as string)

            //from table find linked list node
            let linkedListNodes: any[] = await getLinkedListNodesFromTable(tableUnderSubVault)

            //from linkedListNode find user data
            for (let linkedListNode of linkedListNodes) {
                let usersData: any[] = await getUserDataFromLinkedListNode(linkedListNode)

                //TODO: from user data to match specific user 
                for (let userData of usersData) {

                }
            }
        }
        console.log("------------------------------------------------")
    }

})()

