import { getNewOracleTx } from "../utils/getNewOracleTx"
import { TOKEN_PACKAGE, DEFAULT_TYPE_ARGUMENT } from "../constants"
(async () => {
    console.log("test for getNewOracleTx()")
    let decimal = 8;
    let newOracleTx: any = await getNewOracleTx(TOKEN_PACKAGE, DEFAULT_TYPE_ARGUMENT, decimal);
    console.log(newOracleTx)
})()