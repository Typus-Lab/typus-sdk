import { getSettleTx } from "../../utils/coveredCall/getSettleTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, COVERED_CALL_MANAGER, ORACLE_PACKAGE } from "../../constants"
(async () => {
    console.log("test for getSettleTx()")

    let index = 0
    let priceOracle = ""//publish from typus-oracle/sources/unix_time

    let settleTx: any = await getSettleTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, COVERED_CALL_MANAGER, index, ORACLE_PACKAGE, priceOracle);
    console.log(settleTx)
})()