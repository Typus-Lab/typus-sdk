
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { TOKEN_NAME } from '../constants';
import { Vault } from "../utils/fetchData"

const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations

export async function getVaultDataFromRegistry(registry: string): Promise<Vault[]> {
    console.log("registry: " + registry)

    let coveredCallVaults: any[] = await provider.getObjectsOwnedByObject(registry)
    let coveredCallVaultsId: string[] = coveredCallVaults.map(e => e.objectId as string)
    let objsInfo = await provider.getObjectBatch(coveredCallVaultsId)

    let vaults: Vault[] = [];

    for (let objInfo of objsInfo) {
        //idx
        //@ts-ignore
        let idx = objInfo.details.data.fields.name as number

        //asset
        //@ts-ignore
        let type = objInfo.details.data.fields.value.type
        let tokenName: string | undefined = TOKEN_NAME.find(e => type.includes(e))
        if (!tokenName) {
            console.log("can't find token")
            tokenName = ""
        }

        //id
        //@ts-ignore
        let id = objInfo.details.data.fields.id.id
        vaults.push({
            vaultId: id,
            vaultIdx: idx,
            asset: tokenName,
        })
    }

    return vaults
}