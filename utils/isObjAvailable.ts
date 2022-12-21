import { JsonRpcProvider, Network } from '@mysten/sui.js';

const rpc = new JsonRpcProvider('https://fullnode.devnet.sui.io:443');
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations

export async function isObjAvailable(obj: string): Promise<Boolean> {
    try {
        let tmp = await provider.getObject(
            obj
        )
        if (tmp.status == "Exists") return true
        else return false
    } catch (e) {
        return false
    }
}