import { getDepositTx } from "../utils/getDepositTx"
import { SHARKFIN_PACKAGE, SHARKFIN_REGISTRY } from "../constants"
(async () => {
    console.log("test for getDepositTx()")

    let isRolling = true;
    let typeArgument = "0x27b3674c685046f66cad1d5496d2967894fa5329::token::USDC"
    let vaultIndex = 1;
    let coin = "0x51537ac6fdbe920db8319e3fa41b764d721cc46e"
    let amount = 9999;

    //the payload to mint test coin
    let depositTx: any = await getDepositTx(SHARKFIN_PACKAGE, SHARKFIN_REGISTRY, typeArgument, vaultIndex, isRolling, coin, amount);
    console.log(depositTx)
})()