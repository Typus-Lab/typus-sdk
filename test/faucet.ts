import { JsonRpcProvider, testnetConnection } from "@mysten/sui.js";
const provider = new JsonRpcProvider(testnetConnection); //for read only operations

const address = "0xb6c7e3b1c61ee81516a8317f221daa035f1503e0ac3ae7a50b61834bc7a3ead9";

(async () => {
  let res = await provider.requestSuiFromFaucet(address);
  console.log(res);
})();
