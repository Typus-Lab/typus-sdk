import { COVERED_CALL_REGISTRY } from "../constants"
import { loadUsersDepositData, UserDepositData } from "../utils/loadUsersDepositData"
/*
test sub vault:
0x1395a87663995fe2040fecf1866a01f9a0270fc2
test table under sub vault:
0x0fda36c64af91d4f9c946f00c6f13194c37493ab
test linked list node:
0x933ab335ef83ef247ae43f537f9a76317feb7358
*/

(async () => {
    let userA = "0x81c962005db9bd02711b00909cd28a707ec0a248"

    let usersDepositData: Map<string, UserDepositData[]> = await loadUsersDepositData(COVERED_CALL_REGISTRY);

    // console.log("usersDepositData:")
    // console.log(usersDepositData)

    console.log("userA data in usersDepositData")
    console.log(usersDepositData.get(userA))
})()