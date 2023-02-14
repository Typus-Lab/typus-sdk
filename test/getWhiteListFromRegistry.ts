import { COVERED_CALL_REGISTRY } from "../constants"
import { getWhiteListFromRegistry } from "../utils/getWhiteListFromRegistry"
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { TOKEN_DECIMAL, TESTNET_RPC_ENDPOINT } from '../constants';
import { CoveredCallVault } from "../utils/fetchData"
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
(async () => {
    let whiteLists: string[] = await getWhiteListFromRegistry(COVERED_CALL_REGISTRY, provider);
    console.log("whiteLists: ")
    console.log(whiteLists)
})()