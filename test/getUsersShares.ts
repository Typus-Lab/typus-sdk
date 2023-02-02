import { USER_SHARE_TABLE, COVERED_CALL_REGISTRY } from "../constants"
import { getUsersShares, UserShare } from "../utils/getUsersShares"
import { TESTNET_RPC_ENDPOINT } from "../constants"
import { JsonRpcProvider } from '@mysten/sui.js';
const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations
(async () => {
    let usersShares: UserShare[] = await getUsersShares(USER_SHARE_TABLE, COVERED_CALL_REGISTRY, provider)
    console.log(usersShares)
})()