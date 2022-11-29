import { getMintTx } from "../utils/getMintTx"
import { TOKEN_PACKAGE, TOKEN_REGISTRY } from "../constants"
(async () => {
    console.log("test for getMintTx()")

    let amount = 10000;

    //the payload to mint test coin
    let mintTx: any = await getMintTx(TOKEN_PACKAGE, TOKEN_REGISTRY, amount);
    console.log(mintTx)
})()