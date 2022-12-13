import { getNewManagerTx } from "../../utils/coveredCall/getNewManagerTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_MANAGER } from "../../constants"
(async () => {
    console.log("test for getNewManagerTx()")

    let user = "0x81c962005db9bd02711b00909cd28a707ec0a248"

    let newManagerTx: any = await getNewManagerTx(COVERED_CALL_PACKAGE, COVERED_CALL_MANAGER, user);
    console.log(newManagerTx)
})()