import { getSubscribeTx } from "../../utils/coveredCall/getSubscribeTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT } from "../../constants"
(async () => {
    console.log("test for getSubscribeTx()")

    let index = 0

    let subscribeTx: any = await getSubscribeTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, index);
    console.log(subscribeTx)
})()