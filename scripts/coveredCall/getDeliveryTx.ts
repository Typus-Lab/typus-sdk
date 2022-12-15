import { getDeliveryTx } from "../../utils/coveredCall/getDeliveryTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, COVERED_CALL_MANAGER } from "../../constants"
(async () => {
    console.log("test for getSubscribeTx()")

    let index = 0
    let size = 0
    let timeOracle = ""

    let deliveryTx: any = await getDeliveryTx(COVERED_CALL_PACKAGE, COVERED_CALL_MANAGER, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, index, size, timeOracle);
    console.log(deliveryTx)
})()