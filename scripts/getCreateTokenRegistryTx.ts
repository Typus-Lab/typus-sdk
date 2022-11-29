import { getCreateTokenRegistryTx } from "../utils/getCreateTokenRegistryTx"
import { PACKAGE_ID } from "../constants"
(async () => {
    console.log("test for getCreateTokenRegistryTx()")

    //the payload to mint test coin
    let createTokenRegistryTx: any = await getCreateTokenRegistryTx(PACKAGE_ID);
    console.log(createTokenRegistryTx)
})()
