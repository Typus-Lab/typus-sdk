import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { TESTNET_RPC_ENDPOINT } from "../constants"
// const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations
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

async function getSubVaultsData(registry: string, provider: JsonRpcProvider): Promise<Map<number, SubVaultData>> {

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
            regularTotalSupply: Number(vault.regular_sub_vault.fields.share_supply),
            regularTotalBalance: Number(vault.regular_sub_vault.fields.balance),
            isRollingTotalSupply: Number(vault.rolling_sub_vault.fields.share_supply),
            isRollingTotalBalance: Number(vault.rolling_sub_vault.fields.balance),
        }
        subVaultsData.set(vaultId, subVaultData)
    }
    return subVaultsData
}

export async function getUsersShares(userShareTable: string, registry: string, provider: JsonRpcProvider): Promise<UserShare[]> {

    let subVaultsData: Map<number, SubVaultData> = await getSubVaultsData(registry, provider)//vault idx to subvault info

    let userShareIds: string[] = (await provider.getObjectsOwnedByObject(userShareTable)).map(x => x.objectId);

    let userShares: UserShare[] = (await provider.getObjectBatch(userShareIds)).map(
        x => {
            if (x.status != "Exists") {
                console.log("obj not exist")
                return {} as UserShare
            }
            //@ts-ignore
            let index = Number(x.details.data.fields.name.fields.index)

            //@ts-ignore
            let isRolling = Boolean(x.details.data.fields.name.fields.is_rolling)

            //@ts-ignore
            let share = Number(x.details.data.fields.value);

            //user deposit amount = (user share/total share) * total balance
            let depositAmount = isRolling ?
                (share / subVaultsData.get(index)?.isRollingTotalSupply! * subVaultsData.get(index)?.isRollingTotalBalance!) :
                (share / subVaultsData.get(index)?.regularTotalSupply! * subVaultsData.get(index)?.regularTotalBalance!)
            depositAmount = Number(depositAmount.toFixed(0))

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


