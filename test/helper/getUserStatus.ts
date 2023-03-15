import { PORTFOLIO_PACKAGE, REGISTRY } from "../../constants"
import { getVaultDataFromRegistry } from "../../utils/getVaultData"
import { JsonRpcProvider, devnetConnection, UnserializedSignableTransaction } from '@mysten/sui.js';
import { PortfolioVault } from "../../utils/fetchData"
import { getUserStatus, parseUserStatusResult } from "../../utils/portfolio/helper/getUserStatus";

const provider = new JsonRpcProvider(devnetConnection); //for read only operations

(async () => {
    // let user = "0x586f88ab13f90a93c955123c0e6fc2510b8c172a"
    // let index = "3"
    // console.log(user, index)

    // let portfolioVaults: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider);
    // let portfolioVault = portfolioVaults.find(portfolioVault => portfolioVault.info.index == index)!;
    // console.log(portfolioVault)

    // let tx: UnserializedSignableTransaction = {
    //     kind: 'moveCall',
    //     data: await getUserStatus(PORTFOLIO_PACKAGE, portfolioVault.typeArgs, REGISTRY, portfolioVault.info.index, user),
    // }

    // let res = await provider.devInspectTransaction(user, tx)
    // console.log(res)

    // @ts-ignore
    let rawData: Uint8Array = res.results.Ok[0][1].returnValues[0][0];
    // let rawData: Uint8Array = [
    //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 228, 11, 84, 2, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0
    // ];
    // {
    //     active: 0n,
    //     deactivating: 0n,
    //     inactive: 0n,
    //     warmup: 10000000000n,
    //     bidder: 0n,
    //     premium: 0n,
    //     performance_fee: 0n
    // }
    // let rawData: Uint8Array = [
    //     191, 19, 151, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     65, 205, 94, 5, 0, 0, 0, 0, 128, 150, 152, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     5, 23, 0, 0, 0, 0, 0, 0
    // ];
    // {
    //     active: 9900991n,
    //     deactivating: 0n,
    //     inactive: 0n,
    //     warmup: 90099009n,
    //     bidder: 10000000n,
    //     premium: 0n,
    //     performance_fee: 5893n
    // }
    console.log(rawData)

    let userStatusResult = parseUserStatusResult(rawData);
    console.log(userStatusResult)

    //    [191, 19, 151, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     65, 205, 94, 5, 0, 0, 0, 0, 128, 150, 152, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     5, 23, 0, 0, 0, 0, 0, 0]
    //
    //   active: 9900991,
    //   deactivating: 0,
    //   inactive: 0,
    //   warmup: 90099009,
    //   bidder: 10000000,
    //   premium: 0,
    //   performance_fee: 5893
})()