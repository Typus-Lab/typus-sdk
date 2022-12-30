import { JsonRpcProvider, Network } from '@mysten/sui.js';
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations

export async function getVaultIndexInregistry(registry: string): Promise<number> {
    const txn = await provider.getObject(
        registry
    );
    if (txn.status != "Exists") {
        console.log("obj not exists")
        return -1
    }
    //@ts-ignore
    let index: number = txn.details.data.fields.name
    return index
}