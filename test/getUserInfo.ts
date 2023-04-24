// import { USER_SHARE_REGISTRY } from "../constants";
import { getUserInfo } from "../utils/portfolio/single-collateral/getVaultData";
import { JsonRpcProvider, Connection } from "@mysten/sui.js";
const connection = new Connection({ fullnode: "https://rpc-testnet.suiscan.xyz:443" });
const provider = new JsonRpcProvider(connection); //for read only operations
(async () => {
    /*
  let res = await getUserInfo(USER_SHARE_REGISTRY, provider);
  res.forEach((r) => {
    console.log(r.user, r.shares);
  });
  console.log(res.length);
  */
})();
