import { USER_SHARE_REGISTRY } from "../../constants";
import { getUserShares } from "../../utils/portfolio/single-collateral/getVaultData";
import { JsonRpcProvider, Connection } from "@mysten/sui.js";
const connection = new Connection({ fullnode: "https://rpc-testnet.suiscan.xyz:443" });
const provider = new JsonRpcProvider(connection); //for read only operations
(async () => {
  const USER = "0xb6c7e3b1c61ee81516a8317f221daa035f1503e0ac3ae7a50b61834bc7a3ead9";
  let res = await getUserShares(USER_SHARE_REGISTRY, provider, USER);
  console.log("shares: ");
  console.log(res);
})();
