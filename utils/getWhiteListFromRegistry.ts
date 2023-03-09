
import { JsonRpcProvider, GetObjectDataResponse } from '@mysten/sui.js';

export async function getWhiteListFromRegistry(registry: string, provider: JsonRpcProvider): Promise<string[]> {
    console.log("registry: " + registry)

    let whiteLists: string[] = []

    let tmp: GetObjectDataResponse = await provider.getObject(registry)
    //@ts-ignore
    let whiteListsTable: string = tmp.details.data.fields.authority.fields.whitelist.fields.nodes.fields.id.id

    let whiteListsNodes: any[] = (await provider.getDynamicFields(whiteListsTable)).data
    let whiteListsTableId: string[] = whiteListsNodes.map(e => e.objectId)
    let tmp2: GetObjectDataResponse[] = await provider.getObjectBatch(whiteListsTableId)
    //@ts-ignore
    whiteLists = tmp2.map(e => e.details.data.fields.name)

    return whiteLists
}
