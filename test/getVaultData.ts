import { COVERED_CALL_REGISTRY } from "../constants"
import { getVaultDataFromRegistry } from "../utils/getVaultData"
import { CoveredCallVault } from "../utils/fetchData"
(async () => {
    let res: CoveredCallVault[] = await getVaultDataFromRegistry(COVERED_CALL_REGISTRY);
    console.log("vault: ")
    console.log(res)
})()