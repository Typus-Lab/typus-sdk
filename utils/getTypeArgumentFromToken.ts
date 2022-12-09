
import { JsonRpcProvider, Network } from '@mysten/sui.js';

const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations

export async function getTypeArgumentFromToken(token: string): Promise<any> {
    try {
        //get typeArgument from token
        let tmp = await provider.getObject(token)
        //@ts-ignore
        let typeArgument: string = tmp.details.data.type
        typeArgument = typeArgument.split("<")[1]
        typeArgument = typeArgument.split(">")[0]
        return typeArgument
    } catch (e) {
        console.error(e);
    }
}