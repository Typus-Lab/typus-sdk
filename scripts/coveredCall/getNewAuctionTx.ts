import { getNewAuctionTx } from "../../utils/coveredCall/getNewAuctionTx"
import { COVERED_CALL_MANAGER, COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY } from "../../constants"
(async () => {
    console.log("test for getNewAuctionTx()")

    let typeArgument = "0x27b3674c685046f66cad1d5496d2967894fa5329::token::USDC"
    let vaultIndex = 1;

    let newAuctionTx: any = await getNewAuctionTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, typeArgument, COVERED_CALL_MANAGER, vaultIndex);
    console.log(newAuctionTx)
})()