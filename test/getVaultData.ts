import { REGISTRY } from "../constants"
import { getVaultDataFromRegistry } from "../utils/getVaultData"
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { PortfolioVault } from "../utils/fetchData"
const provider = new JsonRpcProvider(Network.DEVNET); //for read only operations
(async () => {
    let res: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider);
    console.log("vault: ")
    console.log(res)
})()