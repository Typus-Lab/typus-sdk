import { getDepositTx } from "../../utils/coveredCall/getDepositTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, FAKE_TOKEN_TYPE_ARGUMENT } from "../../constants"
(async () => {
    console.log("test for getDepositTx()")

    let index = 0
    let rolling = true
    let coin = ""
    let amount = 9999

    let depositTx: any = await getDepositTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, FAKE_TOKEN_TYPE_ARGUMENT, index, rolling, coin, amount);
    console.log(depositTx)
})()