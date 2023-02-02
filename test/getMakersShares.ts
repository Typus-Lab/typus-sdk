import { MAKER_SHARE_TABLE, COVERED_CALL_REGISTRY } from "../constants"
import { TESTNET_RPC_ENDPOINT } from "../constants"
import { JsonRpcProvider } from '@mysten/sui.js';
import { MakerShare, getMakersShares } from "../utils/getMakersShares"
const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations
(async () => {
    let makersShares: MakerShare[] = await getMakersShares(MAKER_SHARE_TABLE, COVERED_CALL_REGISTRY, provider)
    console.log(makersShares)
})()