import { getUpdateTimeOracleTx } from "../utils/getUpdateTimeOracleTx"
import { ORACLE_PACKAGE } from "../constants"
(async () => {
    console.log("test for getUpdateTimeOracleTx()")

    let oracle = "0x7158f68a06bc09123fcba1645f4c56ca866a8e90" //created from "new oracle"
    let managerCap = "0xa31180f78ee420b561240214c301df4adf9377ab" //created from "new oracle"
    let ts = 5678

    let updateTimeOracleTx: any = await getUpdateTimeOracleTx(ORACLE_PACKAGE, oracle, managerCap, ts);
    console.log(updateTimeOracleTx)
})()