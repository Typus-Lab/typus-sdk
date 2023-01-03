import { getClaimTx } from "../../utils/coveredCall/getClaimTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT } from "../../constants"
(async () => {
    console.log("test for getClaimTx()")

    let index = 0

    let claimTx: any = await getClaimTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, index);
    console.log(claimTx)
})()