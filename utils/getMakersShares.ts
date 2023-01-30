import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { TESTNET_RPC_ENDPOINT } from "../constants"
const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations
export interface MakerShare {
    coveredCallVaultIndex: string;
    share: string;
    maker: string;
    depositAmount: string;
}

interface SubVaultData {
    makerTotalSupply: number;
    makerTotalBalance: number;
}

async function getSubVaultsData(registry: string): Promise<Map<number, SubVaultData>> {

    let subVaultsData = new Map();

    let coveredCallVaults: any[] = await provider.getObjectsOwnedByObject(registry)
    let coveredCallVaultsId: string[] = coveredCallVaults.map(e => e.objectId as string)
    let objsInfo = await provider.getObjectBatch(coveredCallVaultsId)

    for (let objInfo of objsInfo) {
        if (objInfo.status != "Exists") {
            console.log("obj not exist")
            continue
        }
        //@ts-ignore
        let vaultId = Number(objInfo.details.data.fields.name)

        //@ts-ignore
        let vault = objInfo.details.data.fields.value.fields.vault.fields

        let subVaultData: SubVaultData = {
            makerTotalSupply: Number(vault.maker_sub_vault.fields.balance),
            makerTotalBalance: Number(vault.maker_sub_vault.fields.share_supply),
        }
        subVaultsData.set(vaultId, subVaultData)
    }
    return subVaultsData
}

export async function getMakersShares(makerShareTable: string, registry: string): Promise<MakerShare[]> {

    let subVaultsData: Map<number, SubVaultData> = await getSubVaultsData(registry)//vault idx to subvault info

    let makerShareIds: string[] = (await provider.getObjectsOwnedByObject(makerShareTable)).map(x => x.objectId);

    let makerShares: MakerShare[] = (await provider.getObjectBatch(makerShareIds)).map(
        x => {
            if (x.status != "Exists") {
                console.log("obj not exist")
                return {} as MakerShare
            }
            //@ts-ignore
            let obj = (x.details.data.fields)
            /*
            {
                id: { id: '0xae32e84281a8e08fade4f72d0c5f861061deb608' },
                name: {
                    type: '0xb92f3c4c26151b86977b8811765fe74cb133a35f::covered_call::MakerShareKey',
                    fields: { index: '0', maker: '0x4a3b00eac21bfbe062932a5c2b9710245edb2cc2' }
                },
                value: '23000000000'
                }
            */

            let index: string = obj.name.fields.index

            let share: string = obj.value;

            let maker: string = obj.name.fields.maker

            let depositAmount =
                (Number(share) / subVaultsData.get(Number(index))?.makerTotalSupply! * subVaultsData.get(Number(index))?.makerTotalBalance!)

            let res: MakerShare = {

                coveredCallVaultIndex: index,
                //@ts-ignore
                share: share,
                //@ts-ignore
                maker: maker,
                depositAmount: depositAmount.toFixed(0),
            }

            return res
        }
    );
    return makerShares
}


