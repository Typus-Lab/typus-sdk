import { REGISTRY } from "../constants"
import { getWhiteListFromRegistry } from "../utils/getWhiteListFromRegistry"
import { JsonRpcProvider, devnetConnection } from '@mysten/sui.js';

const provider = new JsonRpcProvider(devnetConnection);//for read only operations
(async () => {
    let whiteLists: string[] = await getWhiteListFromRegistry(REGISTRY, provider);
    console.log("whiteLists: ")
    console.log(whiteLists)
})()