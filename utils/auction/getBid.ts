
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { TOKEN_DECIMAL, TESTNET_RPC_ENDPOINT } from '../../constants';
import { Bid } from "../fetchData"
// const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations

export async function getBid(vault: string, provider: JsonRpcProvider): Promise<Bid[]> {

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
            price: (bidData.price),
            size: Number(bidData.size / (10 ** TOKEN_DECIMAL)).toString(),
            tsMs: (bidData.ts_ms),
            tokenBalance: (bidData.coin.fields.balance),
            ownerAddress: bidData.owner,
        }
        return res
    })

    return bids
}