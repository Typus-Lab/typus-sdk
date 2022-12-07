import { getRemoveBidTx } from "../../utils/coveredCall/getRemoveBidTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT } from "../../constants"
(async () => {
    console.log("test for getRemoveBidTx()")

    let index = 0
    let bidIndex = 1

    let removeBidTx: any = await getRemoveBidTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, index, bidIndex);
    console.log(removeBidTx)
})()