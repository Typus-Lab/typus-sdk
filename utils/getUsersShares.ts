import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { getVaultDataFromRegistry } from "../utils/getVaultData"
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
export interface UserShare {
    coveredCallVaultIndex: number;
    isRolling: boolean;
    share: number;
    user: string;
    depositAmount: number;
}

interface SubVaultData {
    regularTotalSupply: number;
    regularTotalBalance: number;
    isRollingTotalSupply: number;
    isRollingTotalBalance: number;
}

async function getSubVaultsData(registry: string): Promise<Map<number, SubVaultData>> {

    let subVaultsData = new Map();

    let coveredCallVaults: any[] = await provider.getObjectsOwnedByObject(registry)
    let coveredCallVaultsId: string[] = coveredCallVaults.map(e => e.objectId as string)
    let objsInfo = await provider.getObjectBatch(coveredCallVaultsId)

    for (let objInfo of objsInfo) {
        //@ts-ignore
        let vaultId = Number(objInfo.details.data.fields.name)

        //@ts-ignore
        let vault = objInfo.details.data.fields.value.fields.vault.fields
        let subVaultData: SubVaultData = {
            regularTotalSupply: Number(vault.regular_sub_vault.fields.share_supply),
            regularTotalBalance: Number(vault.regular_sub_vault.fields.balance),
            isRollingTotalSupply: Number(vault.rolling_sub_vault.fields.share_supply),
            isRollingTotalBalance: Number(vault.rolling_sub_vault.fields.balance),
        }
        subVaultsData.set(vaultId, subVaultData)
    }
    return subVaultsData
}

export async function getUsersShares(userShareTable: string, registry: string): Promise<UserShare[]> {

    let subVaultsData: Map<number, SubVaultData> = await getSubVaultsData(registry)//vault idx to subvault info

    let userShareIds: string[] = (await provider.getObjectsOwnedByObject(userShareTable)).map(x => x.objectId);

    let userShares: UserShare[] = (await provider.getObjectBatch(userShareIds)).map(
        x => {
            //@ts-ignore
            let index = Number(x.details.data.fields.name.fields.index)

            //@ts-ignore
            let isRolling = Boolean(x.details.data.fields.name.fields.is_rolling)

            //@ts-ignore
            let share = Number(x.details.data.fields.value);

            //user deposit amount = (user share/total share) * total balance
            let depositAmount = isRolling ?
                (share * subVaultsData.get(index)?.isRollingTotalSupply! / subVaultsData.get(index)?.isRollingTotalBalance!) :
                (share * subVaultsData.get(index)?.regularTotalSupply! / subVaultsData.get(index)?.regularTotalBalance!)

            let res: UserShare = {

                coveredCallVaultIndex: index,
                //@ts-ignore
                isRolling: isRolling,
                //@ts-ignore
                share: share,
                //@ts-ignore
                user: x.details.data.fields.name.fields.user,
                depositAmount: depositAmount,
            }

            return res
        }
    );
    return userShares
}


