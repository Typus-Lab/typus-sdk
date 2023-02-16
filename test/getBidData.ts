import { getBid } from "../utils/auction/getBid"
import { TESTNET_RPC_ENDPOINT } from "../constants"
import { JsonRpcProvider, Network } from '@mysten/sui.js';
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
(async () => {
    let vault = "0x1e5807f118c2fc7e0f74eeb439b34f448532a900"
    let bid = await getBid(vault, provider)
    console.log(bid)
})()