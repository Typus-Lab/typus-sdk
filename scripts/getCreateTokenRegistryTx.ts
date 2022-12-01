import { getCreateTokenRegistryTx } from "../utils/getCreateTokenRegistryTx"
import { TOKEN_PACKAGE } from "../constants"
(async () => {
    console.log("test for getCreateTokenRegistryTx()")

    let createTokenRegistryTx: any = await getCreateTokenRegistryTx(TOKEN_PACKAGE);
    console.log(createTokenRegistryTx)
})()
