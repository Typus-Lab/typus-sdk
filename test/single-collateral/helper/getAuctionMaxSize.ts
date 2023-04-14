import {
  BTC_ORACLE,
  ETH_ORACLE,
  MODULE,
  PORTFOLIO_PACKAGE,
  REGISTRY,
  testnetConnection,
} from "../../../constants";
import { getVaultDataFromRegistry } from "../../../utils/portfolio/single-collateral/getVaultData";
import { JsonRpcProvider, devnetConnection } from "@mysten/sui.js";
import { PortfolioVault } from "../../../utils/portfolio/single-collateral/fetchData";
import { getAuctionMaxSize } from "../../../utils/portfolio/single-collateral/helper/getAuctionMaxSize";
import { U64FromBytes } from "../../../utils/portfolio/single-collateral/helper/getUserStatus";

const provider = new JsonRpcProvider(testnetConnection); //for read only operations

(async () => {
  let sender = "0xb6c7e3b1c61ee81516a8317f221daa035f1503e0ac3ae7a50b61834bc7a3ead9";
  let oracle = BTC_ORACLE;
  let index = "1";

  let portfolioVaults: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider, index);
  let portfolioVault = portfolioVaults[0];
  console.log(portfolioVault);
  console.log(portfolioVault.config.activeVaultConfig.payoffConfigs);

  let transactionBlock = await getAuctionMaxSize(
    PORTFOLIO_PACKAGE,
    MODULE,
    portfolioVault.typeArgs,
    REGISTRY,
    portfolioVault.info.index,
    oracle
  );
  // success only during auction period
  let res = await provider.devInspectTransactionBlock({ transactionBlock, sender });
  console.log(res);
  // @ts-ignore
  let rawData = res.results[0].returnValues[0][0];
  console.log(rawData);
  console.log(U64FromBytes(rawData.reverse()));
})();
