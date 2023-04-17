import { JsonRpcProvider, TransactionBlock } from "@mysten/sui.js";
import { U64FromBytes } from "../../tools";
import {
    DepositVaultUserShare,
    BidVaultUserShare,
} from "../../typus-framework/vault";

export interface UserShare {
    index: string;
    depositVaultUserShare: DepositVaultUserShare,
    bidVaultUserShare: BidVaultUserShare,
}

export async function getUserShares(
    provider: JsonRpcProvider,
    packageId: string,
    registry: string,
    indexes: string[],
    user: string,
): Promise<Map<string, UserShare>> {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::single_collateral::get_user_shares` as any;
    let transactionBlockArguments = [
        transactionBlock.pure(registry),
        transactionBlock.pure(indexes),
        transactionBlock.pure(user)
    ];
    transactionBlock.moveCall({
        target,
        arguments: transactionBlockArguments,
    });
    // @ts-ignore
    let bytes = (await provider.devInspectTransactionBlock({ transactionBlock, sender: user })).results[0].returnValues[0][0];

    let result = Array.from(new Map()).reduce((map, [key, value]) => {
        map[key] = value;
        return map;
    }, {});
    while (bytes.length > 49) {
        // struct UserShare {
        //     index: u64,      // 8
        //     tag: u64,        // 1
        //     user: address,   // 32
        //     share: u64,      // 8
        // }
        let user_share_bytes = bytes.splice(bytes.length - 49, 49);
        let index = U64FromBytes(user_share_bytes.splice(0, 8).reverse()).toString();
        let tag = U64FromBytes(user_share_bytes.splice(0, 1).reverse()).toString();
        user_share_bytes.splice(0, 32);
        let share = U64FromBytes(user_share_bytes.splice(0, 8).reverse());
        if (result[index] == undefined) {
            result[index] = {
                index,
                depositVaultUserShare: {},
                bidVaultUserShare: {},
            } as UserShare;
        }
        result[index].index = index;
        switch (tag) {
            case "0": {
                result[index].depositVaultUserShare.activeSubVaultUserShare = share;
            }
            case "1": {
                result[index].depositVaultUserShare.deactivatingSubVaultUserShare = share;
            }
            case "2": {
                result[index].depositVaultUserShare.inactiveSubVaultUserShare = share;
            }
            case "3": {
                result[index].depositVaultUserShare.warmupSubVaultUserShare = share;
            }
            case "4": {
                result[index].bidVaultUserShare.bidderSubVaultUserShare = share;
            }
            case "5": {
                result[index].bidVaultUserShare.premiumSubVaultUserShare = share;
            }
            case "6": {
                result[index].bidVaultUserShare.performanceFeeSubVaultUserShare = share;
            }
        }
    }

    // @ts-ignore
    return result;
}