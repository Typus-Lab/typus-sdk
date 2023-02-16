import { COVERED_CALL_REGISTRY } from "../constants"
import { getVaultDataFromRegistry } from "../utils/getVaultData"
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { TOKEN_DECIMAL, TESTNET_RPC_ENDPOINT } from '../constants';
import { CoveredCallVault } from "../utils/fetchData"
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
(async () => {
    let res: CoveredCallVault[] = await getVaultDataFromRegistry(COVERED_CALL_REGISTRY, provider);
    console.log("vault: ")
    console.log(res)
})()