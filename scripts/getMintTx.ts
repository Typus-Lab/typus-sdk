import { getMintTx } from "../utils/getMintTx"
import { registry, packageId } from "../constants"
(async () => {
    console.log("test for getMintTx()")

    let amount = 10000;
    let mintTx: string = await getMintTx(packageId, registry, amount);
    console.log(mintTx)
})()