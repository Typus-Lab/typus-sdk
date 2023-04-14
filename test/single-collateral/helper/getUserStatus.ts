import { MODULE, PORTFOLIO_PACKAGE, REGISTRY, testnetConnection } from "../../../constants";
import { getVaultDataFromRegistry } from "../../../utils/portfolio/single-collateral/getVaultData";
import { JsonRpcProvider, devnetConnection } from "@mysten/sui.js";
import { PortfolioVault } from "../../../utils/portfolio/single-collateral/fetchData";
import { getUserStatus, parseUserStatusResult } from "../../../utils/portfolio/single-collateral/helper/getUserStatus";

const provider = new JsonRpcProvider(testnetConnection); //for read only operations

(async () => {
  let sender = "0xb6c7e3b1c61ee81516a8317f221daa035f1503e0ac3ae7a50b61834bc7a3ead9";
  let index = "1";

  let portfolioVaults: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider, index);
  let portfolioVault = portfolioVaults[0];
  console.log(portfolioVault);

  let transactionBlock = await getUserStatus(
    PORTFOLIO_PACKAGE,
    MODULE,
    portfolioVault.typeArgs,
    REGISTRY,
    portfolioVault.info.index,
    sender
  );

  let res = await provider.devInspectTransactionBlock({ transactionBlock, sender });
  console.log(res);

  // @ts-ignore
  let rawData: Uint8Array = res.results[0].returnValues[0][0];

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
  console.log(rawData);

  let userStatusResult = parseUserStatusResult(rawData);
  console.log(userStatusResult);

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
})();
