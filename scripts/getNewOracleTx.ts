import { getNewOracleTx } from "../utils/getNewOracleTx"
import { TOKEN_PACKAGE, DEFAULT_TYPE_ARGUMENT } from "../constants"
(async () => {
    console.log("test for getNewOracleTx()")

    let newOracleTx: any = await getNewOracleTx(TOKEN_PACKAGE, DEFAULT_TYPE_ARGUMENT);
    console.log(newOracleTx)
})()