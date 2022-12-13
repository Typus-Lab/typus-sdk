import { JsonRpcProvider, Network } from '@mysten/sui.js';
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations

export async function getCoveredCallVaultAsset(vault: string): Promise<string> {
    let tmp = await provider.getObject(vault)
    //@ts-ignore
    let asset: string = tmp.details.data.type
    return asset
}