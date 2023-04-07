import { getBid } from "../utils/auction/getBid";
import { JsonRpcProvider } from "@mysten/sui.js";
import { PortfolioVault } from "../utils/fetchData";
import { getVaultDataFromRegistry } from "../utils/getVaultData";
import { REGISTRY, testnetConnection } from "../constants";

const provider = new JsonRpcProvider(testnetConnection); //for read only operations

(async () => {
  let index = "1";
  let portfolioVaults: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider, index);
  let portfolioVault = portfolioVaults[0];
  console.log(portfolioVault);

  let bid = await getBid(portfolioVault, provider);
  console.log(bid);
})();
