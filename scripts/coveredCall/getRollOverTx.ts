import { getRollOverTx } from "../../utils/coveredCall/getRollOverTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, COVERED_CALL_MANAGER } from "../../constants"
(async () => {
    console.log("test for getRollOverTx()")

    let index = 0

    let rollOverTx: any = await getRollOverTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, COVERED_CALL_MANAGER, index);
    console.log(rollOverTx)
})()