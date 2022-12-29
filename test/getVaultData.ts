import { COVERED_CALL_REGISTRY } from "../constants"
import { getVaultDataFromRegistry } from "../utils/getVaultData"

(async () => {
    let res = await getVaultDataFromRegistry(COVERED_CALL_REGISTRY);
    console.log("vault: ")
    console.log(res)
})()