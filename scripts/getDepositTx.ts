import { getDepositTx } from "../utils/getDepositTx"
import { REGISTRY, PACKAGE_ID } from "../constants"
(async () => {
    console.log("test for getDepositTx()")

    let isRolling = true;
    let coin = "0x7e200466dc7fee2303d8b19c8b311c6471999f61"
    let amount = 9999;

    //the payload to mint test coin
    let depositTx: any = await getDepositTx(PACKAGE_ID, REGISTRY, isRolling, coin, amount);
    console.log(depositTx)
})()