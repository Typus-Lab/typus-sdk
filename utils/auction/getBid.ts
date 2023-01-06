
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { TOKEN_DECIMAL } from '../../constants';
import { Bid } from "../fetchData"
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations

export async function getBid(vault: string): Promise<Bid[]> {

    let obj = await provider.getObject(vault)
    if (obj.status != "Exists") {
        console.log("obj not exists")
        return []
    }

    //@ts-ignore
    let bidTable: string = obj.details.data.fields.value.fields.auction.fields.bids.fields.id.id
    let obj2: any[] = await provider.getObjectsOwnedByObject(bidTable)
    let ids = obj2.map(e => e.objectId)

    let tmp: any[] = await provider.getObjectBatch(ids)

    let bids: Bid[] = tmp.map(e => {
        let bidData = e.details.data.fields.value.fields
        let res: Bid = {
            price: Number(bidData.price),
            size: Number(bidData.size / (10 ** TOKEN_DECIMAL)),
            tsMs: Number(bidData.ts_ms),
        }
        return res
    })

    return bids
}