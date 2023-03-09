import { PORTFOLIO_PACKAGE, REGISTRY } from "../constants"
import { getVaultDataFromRegistry } from "../utils/getVaultData"
import { JsonRpcProvider, Network, UnserializedSignableTransaction } from '@mysten/sui.js';
import { PortfolioVault } from "../utils/fetchData"
import { getUserStatus } from "../utils/portfolio/helper/getUserStatus";

const provider = new JsonRpcProvider(Network.DEVNET); //for read only operations
(async () => {
    let sender = "0x7ece7464c461df204c1eb0ef9b6186018bac83ee"

    let portfolioVaults: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider);

    let portfolioVault = portfolioVaults[0];

    console.log(portfolioVault)

    let data = await getUserStatus(PORTFOLIO_PACKAGE, portfolioVault.typeArgs, REGISTRY, portfolioVault.info.index, "0x7ece7464c461df204c1eb0ef9b6186018bac83ee");

    let tx: UnserializedSignableTransaction = {
        kind: 'moveCall',
        data,
    }

    let res = await provider.devInspectTransaction(sender, tx)

    console.log("vault: ")
    console.log(res)
})()