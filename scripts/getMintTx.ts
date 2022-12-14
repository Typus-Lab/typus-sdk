import { getMintTx } from "../utils/getMintTx"
import { TOKEN_PACKAGE, TOKEN_REGISTRY_BTC, TOKEN_NAME } from "../constants"
(async () => {
    console.log("test for getMintTx()")

    let amount = 10000;
    let moduleName = TOKEN_NAME["BTC"]//reference: sui-dev-token repo

    //the payload to mint test coin
    let mintTx: any = await getMintTx(TOKEN_PACKAGE, TOKEN_REGISTRY_BTC, moduleName, amount);
    console.log(mintTx)
})()