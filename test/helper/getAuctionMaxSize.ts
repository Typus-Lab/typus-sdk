import { PORTFOLIO_PACKAGE, REGISTRY } from "../../constants"
import { getVaultDataFromRegistry } from "../../utils/getVaultData"
import { JsonRpcProvider, Network, UnserializedSignableTransaction } from '@mysten/sui.js';
import { PortfolioVault } from "../../utils/fetchData"
import { getAuctionMaxSize } from "../../utils/portfolio/helper/getAuctionMaxSize";
import { intFromBytes } from "../../utils/portfolio/helper/getUserStatus";


const provider = new JsonRpcProvider(Network.DEVNET); //for read only operations

(async () => {
    let user = "0x4a3b00eac21bfbe062932a5c2b9710245edb2cc2"
    let dogeOracle = "0x48ab076f16e2bc3fdfb9be44990976dadcc30128"
    let index = "0"

    let portfolioVaults: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider);
    let portfolioVault = portfolioVaults.find(portfolioVault => portfolioVault.info.index == index)!;
    console.log(portfolioVault)

    let tx: UnserializedSignableTransaction = {
        kind: 'moveCall',
        data: await getAuctionMaxSize(PORTFOLIO_PACKAGE, portfolioVault.typeArgs, REGISTRY, portfolioVault.info.index, dogeOracle),
    }
    // success only during auction period
    let res = await provider.devInspectTransaction(user, tx)
    console.log(res)
    // @ts-ignore
    let rawData: Uint8Array = res.results.Ok[0][1].returnValues[0][0];
    console.log(rawData)
    console.log(intFromBytes(rawData.reverse()))
})()