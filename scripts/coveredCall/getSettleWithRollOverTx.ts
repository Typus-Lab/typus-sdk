import { getSettleWithRollOverTx } from "../../utils/coveredCall/getSettleWithRollOverTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, COVERED_CALL_MANAGER, ORACLE_PACKAGE } from "../../constants"
(async () => {
    console.log("test for getSettleWithRollOverTx()")

    let index = 0
    let priceOracle = ""//publish from typus-oracle/sources/unix_time

    let settleWithRollOverTx: any = await getSettleWithRollOverTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, COVERED_CALL_MANAGER, index, ORACLE_PACKAGE, priceOracle);
    console.log(settleWithRollOverTx)
})()