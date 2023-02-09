import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { TESTNET_RPC_ENDPOINT } from "../constants"
import BigNumber from 'bignumber.js';
// const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations
export interface UserShare {
    coveredCallVaultIndex: number;
    isRolling: boolean;
    share: number;
    user: string;
    depositAmount: string;
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
            let depositAmount: BigNumber = isRolling ?
                (new BigNumber(share).div(new BigNumber(subVaultsData.get(index)?.isRollingTotalSupply!)).multipliedBy(subVaultsData.get(index)?.isRollingTotalBalance!)) :
                (new BigNumber(share).div(new BigNumber(subVaultsData.get(index)?.regularTotalSupply!)).multipliedBy(subVaultsData.get(index)?.regularTotalBalance!))

            let depositAmountRes = depositAmount.toNumber().toFixed(0)

            let res: UserShare = {

                coveredCallVaultIndex: index,
                //@ts-ignore
                isRolling: isRolling,
                //@ts-ignore
                share: share,
                //@ts-ignore
                user: x.details.data.fields.name.fields.user,
                depositAmount: depositAmountRes,
            }

            return res
        }
    );
    return userShares
}


