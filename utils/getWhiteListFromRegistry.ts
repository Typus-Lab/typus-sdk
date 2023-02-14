
import { JsonRpcProvider, Network, GetObjectDataResponse } from '@mysten/sui.js';
import { TOKEN_NAME, PRICE_DECIMAL, TOKEN_DECIMAL, TESTNET_RPC_ENDPOINT } from '../constants';
import { CoveredCallVault, PayoffConfig, Config, VaultConfig, Vault, SubVault, Auction, PriceConfig, DeliveryInfo } from "./fetchData"

// const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations

export async function getWhiteListFromRegistry(registry: string, provider: JsonRpcProvider): Promise<string[]> {
    console.log("registry: " + registry)

    let whiteLists: string[] = []

    let tmp: GetObjectDataResponse = await provider.getObject(registry)
    //@ts-ignore
    let whiteListsTable: string = tmp.details.data.fields.authority.fields.whitelist.fields.nodes.fields.id.id

    let whiteListsNodes: any[] = await provider.getObjectsOwnedByObject(whiteListsTable)
    let whiteListsTableId: string[] = whiteListsNodes.map(e => e.objectId)
    let tmp2: GetObjectDataResponse[] = await provider.getObjectBatch(whiteListsTableId)
    //@ts-ignore
    whiteLists = tmp2.map(e => e.details.data.fields.name)

    return whiteLists
}
