import { getNewCoveredCallVaultTx } from "../../utils/coveredCall/getNewCoveredCallVaultTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, COVERED_CALL_MANAGER, DEFAULT_TYPE_ARGUMENT } from "../../constants"
(async () => {
    console.log("test for getNewCoveredCallVaultTx()")

    let expiration = 123
    let assetName = "sui"
    let strike = 456
    let oracle = "0x7158f68a06bc09123fcba1645f4c56ca866a8e90" //created from "new oracle"

    let newCoveredCallVaultTx: any = await getNewCoveredCallVaultTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, COVERED_CALL_MANAGER, expiration, assetName, strike, oracle);
    console.log(newCoveredCallVaultTx)
})()