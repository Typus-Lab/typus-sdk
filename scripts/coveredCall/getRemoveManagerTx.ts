import { getRemoveManagerTx } from "../../utils/coveredCall/getRemoveManagerTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_MANAGER } from "../../constants"
(async () => {
    console.log("test for getRemoveManagerTx()")

    let removeManagerTx: any = await getRemoveManagerTx(COVERED_CALL_PACKAGE, COVERED_CALL_MANAGER);
    console.log(removeManagerTx)
})()