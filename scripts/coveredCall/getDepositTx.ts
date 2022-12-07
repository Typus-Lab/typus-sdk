import { getCoveredCallDepositTx } from "../../utils/coveredCall/getCoveredCallDepositTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT } from "../../constants"
(async () => {
    console.log("test for getDepositTx()")

    let index = 0
    let rolling = true
    let coin = ""
    let amount = 9999

    let coveredCallDepositTx: any = await getCoveredCallDepositTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, index, rolling, coin, amount);
    console.log(coveredCallDepositTx)
})()