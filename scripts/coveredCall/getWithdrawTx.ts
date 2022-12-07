import { getWithdrawTx } from "../../utils/coveredCall/getWithdrawTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, FAKE_TOKEN_TYPE_ARGUMENT } from "../../constants"
(async () => {
    console.log("test for getWithdrawTx()")

    let index = 0
    let rolling = true
    let amount = 9999

    let withdrawTx: any = await getWithdrawTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, FAKE_TOKEN_TYPE_ARGUMENT, index, rolling, amount);
    console.log(withdrawTx)
})()