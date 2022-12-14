import { getNewCoveredCallVaultTx } from "../../utils/coveredCall/getNewCoveredCallVaultTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, COVERED_CALL_MANAGER, DEFAULT_TYPE_ARGUMENT } from "../../constants"
(async () => {
    console.log("test for getNewCoveredCallVaultTx()")

    let expiration = 123
    let strike = 456

    let newCoveredCallVaultTx: any = await getNewCoveredCallVaultTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, COVERED_CALL_MANAGER, expiration, strike);
    console.log(newCoveredCallVaultTx)
})()