
import { JsonRpcProvider } from '@mysten/sui.js';

export async function getTypeArgumentFromToken(token: string, provider: JsonRpcProvider): Promise<any> {
    try {
        //get typeArgument from token
        let tmp = await provider.getObject(token)
        if (tmp.status != "Exists") {
            console.log("obj not exists, but is:")
            console.log(tmp.status)
            return
        }
        //@ts-ignore
        let typeArgument: string = tmp.details.data.type
        typeArgument = typeArgument.split("<")[1]
        typeArgument = typeArgument.split(">")[0]
        return typeArgument
    } catch (e) {
        console.error(e);
    }
}