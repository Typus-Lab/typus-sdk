import { ORACLE_PACKAGE, PORTFOLIO_PACKAGE, REGISTRY } from "../constants"
import { getVaultDataFromRegistry } from "../utils/getVaultData"
import { JsonRpcProvider, Network, UnserializedSignableTransaction } from '@mysten/sui.js';
import { PortfolioVault } from "../utils/fetchData"
import { getAuctionMaxSize } from "../utils/portfolio/helper/getAuctionMaxSize";


const provider = new JsonRpcProvider(Network.DEVNET); //for read only operations

(async () => {
    let user = "0x7ece7464c461df204c1eb0ef9b6186018bac83ee"
    let dogeOracle = "0x48ab076f16e2bc3fdfb9be44990976dadcc30128"

    let portfolioVaults: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider);
    let portfolioVault = portfolioVaults[0];
    console.log(portfolioVault)

    let tx: UnserializedSignableTransaction = {
        kind: 'moveCall',
        data: await getAuctionMaxSize(PORTFOLIO_PACKAGE, portfolioVault.typeArgs, REGISTRY, portfolioVault.info.index, dogeOracle),
    }

    let res = await provider.devInspectTransaction(user, tx)
    console.log(res)
})()