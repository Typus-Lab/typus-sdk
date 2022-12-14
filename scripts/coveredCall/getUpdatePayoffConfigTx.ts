import { getUpdatePayoffConfigTx } from "../../utils/coveredCall/getUpdatePayoffConfigTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, COVERED_CALL_MANAGER } from "../../constants"
(async () => {
    console.log("test for getUpdatePayoffConfigTx()")

    let index = 0
    let price = 4000
    let roi = 1000

    let updatePayoffConfigTx: any = await getUpdatePayoffConfigTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, COVERED_CALL_MANAGER, index, price, roi);
    console.log(updatePayoffConfigTx)
})()