import { getNewSharkFinVaultTx } from "../utils/getNewSharkFinVaultTx"
import { SHARKFIN_PACKAGE, SHARKFIN_REGISTRY } from "../constants"
(async () => {
    console.log("test for getNewSharkFinVaultTx()")

    //0x27b3674c685046f66cad1d5496d2967894fa5329: token package
    let typeArgument = "0x27b3674c685046f66cad1d5496d2967894fa5329::token::USDC"
    let expiration = 1671344789
    let bullish = true
    let lowBarrierPrice = 1
    let highBarrierPrice = 10

    let newSharkFinVaultTx: any = await getNewSharkFinVaultTx(SHARKFIN_PACKAGE, SHARKFIN_REGISTRY, typeArgument, expiration, bullish, lowBarrierPrice, highBarrierPrice);
    console.log(newSharkFinVaultTx)
})()
