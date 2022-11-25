import { getMintTx } from "../utils/getMintTx"
import { REGISTRY, PACKAGE_ID } from "../constants"
(async () => {
    console.log("test for getMintTx()")

    let amount = 10000;

    //the payload to mint test coin
    let mintTx: any = await getMintTx(PACKAGE_ID, REGISTRY, amount);
    console.log(mintTx)
})()