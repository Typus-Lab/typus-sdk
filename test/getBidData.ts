import { getBid } from "../utils/auction/getBid"
import { JsonRpcProvider, devnetConnection } from '@mysten/sui.js';
const provider = new JsonRpcProvider(devnetConnection);//for read only operations
(async () => {
    let vault = "0x0ba9a1e3b6389e412c609feef563b1407a63272a"
    let bid = await getBid(vault, provider)
    console.log(bid)
})()