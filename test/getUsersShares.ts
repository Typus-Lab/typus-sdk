import { USER_SHARE_TABLE, REGISTRY } from "../constants"
import { getUsersShares, UserShare } from "../utils/getUsersShares"
import { TESTNET_RPC_ENDPOINT } from "../constants"
import { JsonRpcProvider, Network } from '@mysten/sui.js';
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
(async () => {
    let usersShares: UserShare[] = await getUsersShares(USER_SHARE_TABLE, REGISTRY, provider)
    console.log(usersShares)
})()