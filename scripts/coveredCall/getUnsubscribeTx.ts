import { getUnsubscribeTx } from "../../utils/coveredCall/getUnsubscribeTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT } from "../../constants"
(async () => {
    console.log("test for getUnsubscribeTx()")

    let index = 0

    let coveredCallUnsubscribeTx: any = await getUnsubscribeTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, index);
    console.log(coveredCallUnsubscribeTx)
})()