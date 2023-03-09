import { MAKER_SHARE_TABLE, REGISTRY } from "../constants"
import { TESTNET_RPC_ENDPOINT } from "../constants"
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { MakerShare, getMakersShares } from "../utils/getMakersShares"
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
(async () => {
    let makersShares: MakerShare[] = await getMakersShares(MAKER_SHARE_TABLE, REGISTRY, provider)
    console.log(makersShares)
})()