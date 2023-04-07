import { REGISTRY } from "../constants";
import { getVaultDataFromRegistry } from "../utils/getVaultData";
import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { PortfolioVault } from "../utils/fetchData";
const connection = new Connection({ fullnode: "https://sui-testnet-rpc.allthatnode.com:443" });
const provider = new JsonRpcProvider(connection); //for read only operations
(async () => {
  let res: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider);
  console.log("vault: ");
  console.log(res);
})();
