import { getNewOracleTx } from "../utils/getNewOracleTx"
import { TOKEN_PACKAGE } from "../constants"
(async () => {
    console.log("test for getNewOracleTx()")

    let typeArgument = "0x2::sui::SUI";

    let mintTx: any = await getNewOracleTx(TOKEN_PACKAGE, typeArgument);
    console.log(mintTx)
})()