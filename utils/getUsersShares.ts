import { JsonRpcProvider, Network } from '@mysten/sui.js';

const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
export interface UserShare {
    coveredCallVaultIndex: number;
    isRolling: boolean;
    share: number;
    user: string;
    // depositAmount: number;
}

export async function getUsersShares(userShareTable: string): Promise<any> {
    userShareTable = "0xee0ed2fb694508934edee1f620a99354eecdafbd"
    let userShareIds = (await provider.getObjectsOwnedByObject(userShareTable)).map(x => x.objectId);
    console.log(userShareIds)
    let userShares = (await provider.getObjectBatch(userShareIds)).map(
        x => {
            let res: UserShare = {
                //@ts-ignore
                coveredCallVaultIndex: +x.details.data.fields.value.fields.index,
                //@ts-ignore
                isRolling: x.details.data.fields.value.fields.is_rolling,
                //@ts-ignore
                share: +x.details.data.fields.value.fields.share,
                //@ts-ignore
                user: x.details.data.fields.value.fields.user,
            }
            return res;
        }
    );
    return userShares
}


