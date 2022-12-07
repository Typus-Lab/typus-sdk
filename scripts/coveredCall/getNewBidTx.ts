import { getNewBidTx } from "../../utils/coveredCall/getNewBidTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, TIME } from "../../constants"
(async () => {
    console.log("test for getNewBidTx()")

    let index = 0
    let size = 1
    let coin = ""

    let newBidTx: any = await getNewBidTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, index, size, coin, TIME);
    console.log(newBidTx)
})()