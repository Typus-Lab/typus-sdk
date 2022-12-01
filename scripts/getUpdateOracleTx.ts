import { getUpdateOracleTx } from "../utils/getUpdateOracleTx"
import { TOKEN_PACKAGE } from "../constants"
(async () => {
    console.log("test for getUpdateOracleTx()")

    let typeArgument = "0x2::sui::SUI";
    let oracle = "0x7158f68a06bc09123fcba1645f4c56ca866a8e90" //created from "new oracle"
    let managerCap = "0xa31180f78ee420b561240214c301df4adf9377ab" //created from "new oracle"
    let price = 1234
    let unix = 5678

    let mintTx: any = await getUpdateOracleTx(TOKEN_PACKAGE, typeArgument, oracle, managerCap, price, unix);
    console.log(mintTx)
})()