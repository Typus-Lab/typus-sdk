import { REGISTRY } from '../constants';
import { getVaultDataFromRegistry } from '../utils/getVaultData';
import { devnetConnection, JsonRpcProvider } from '@mysten/sui.js';
import { PortfolioVault } from '../utils/fetchData';
const provider = new JsonRpcProvider(devnetConnection); //for read only operations
(async () => {
    let res: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider);
    console.log('vault: ');
    console.log(res);
})();
