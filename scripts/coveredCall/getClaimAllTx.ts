import { getClaimAllTx } from "../../utils/coveredCall/getClaimAllTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT } from "../../constants"
(async () => {
    console.log("test for getClaimAllTx()")

    let index = 0
    let isRolling = true

    let claimAllTx: any = await getClaimAllTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, index, isRolling);
    console.log(claimAllTx)
})()