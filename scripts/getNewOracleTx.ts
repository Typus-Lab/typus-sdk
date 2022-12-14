import { getNewOracleTx } from "../utils/getNewOracleTx"
import { ORACLE_PACKAGE, DEFAULT_TYPE_ARGUMENT } from "../constants"
(async () => {
    console.log("test for getNewOracleTx()")
    let decimal = 8;
    let newOracleTx: any = await getNewOracleTx(ORACLE_PACKAGE, DEFAULT_TYPE_ARGUMENT, decimal);
    console.log(newOracleTx)
})()