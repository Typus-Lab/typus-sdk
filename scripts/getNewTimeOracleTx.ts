import { getNewTimeOracleTx } from "../utils/getNewTimeOracleTx"
import { ORACLE_PACKAGE } from "../constants"
(async () => {
    console.log("test for getNewTimeOracleTx()")

    let newTimeOracleTx: any = await getNewTimeOracleTx(ORACLE_PACKAGE);
    console.log(newTimeOracleTx)
})()