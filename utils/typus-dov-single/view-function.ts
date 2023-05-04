import { JsonRpcProvider, TransactionBlock } from "@mysten/sui.js";
import { U64FromBytes } from "../tools";
import { DepositVaultUserShare, BidVaultUserShare } from "../typus-framework/vault";
import { CLOCK, SENDER } from "../../constants";

export interface UserShare {
    index: string;
    depositVaultUserShare: DepositVaultUserShare;
    bidVaultUserShare: BidVaultUserShare;
}

export async function getUserShares(
    provider: JsonRpcProvider,
    packageId: string,
    registry: string,
    indexes: string[],
    user: string
): Promise<Map<string, UserShare>> {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::typus_dov_single::get_user_shares` as any;
    let transactionBlockArguments = [transactionBlock.pure(registry), transactionBlock.pure(indexes), transactionBlock.pure(user)];
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
                depositVaultUserShare: {
                    activeSubVaultUserShare: BigInt(0),
                    deactivatingSubVaultUserShare: BigInt(0),
                    inactiveSubVaultUserShare: BigInt(0),
                    warmupSubVaultUserShare: BigInt(0),
                },
                bidVaultUserShare: {
                    bidderSubVaultUserShare: BigInt(0),
                    premiumSubVaultUserShare: BigInt(0),
                    performanceFeeSubVaultUserShare: BigInt(0),
                },
            } as UserShare;
        }
        result[index].index = index;
        switch (tag) {
            case "0": {
                result[index].depositVaultUserShare.activeSubVaultUserShare = share;
                break;
            }
            case "1": {
                result[index].depositVaultUserShare.deactivatingSubVaultUserShare = share;
                break;
            }
            case "2": {
                result[index].depositVaultUserShare.inactiveSubVaultUserShare = share;
                break;
            }
            case "3": {
                result[index].depositVaultUserShare.warmupSubVaultUserShare = share;
                break;
            }
            case "4": {
                result[index].bidVaultUserShare.bidderSubVaultUserShare = share;
                break;
            }
            case "5": {
                result[index].bidVaultUserShare.premiumSubVaultUserShare = share;
                break;
            }
            case "6": {
                result[index].bidVaultUserShare.performanceFeeSubVaultUserShare = share;
                break;
            }
        }
    }

    // @ts-ignore
    return result;
}

export async function getAuctionMaxSize(
    provider: JsonRpcProvider,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    priceOracle: string
): Promise<BigInt> {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::typus_dov_single::get_auction_max_size` as any;
    let transactionBlockArguments = [
        transactionBlock.pure(registry),
        transactionBlock.pure(index),
        transactionBlock.pure(priceOracle),
        transactionBlock.pure(CLOCK),
    ];
    transactionBlock.moveCall({
        target,
        typeArguments,
        arguments: transactionBlockArguments,
    });
    // @ts-ignore
    let bytes = (await provider.devInspectTransactionBlock({ transactionBlock, sender: SENDER })).results[0].returnValues[0][0];

    return U64FromBytes(bytes.reverse());
}

export async function getMaxLossPerUnit(
    provider: JsonRpcProvider,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    priceOracle: string
): Promise<BigInt> {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::typus_dov_single::get_max_loss_per_unit` as any;
    let transactionBlockArguments = [
        transactionBlock.pure(registry),
        transactionBlock.pure(index),
        transactionBlock.pure(priceOracle),
        transactionBlock.pure(CLOCK),
    ];
    transactionBlock.moveCall({
        target,
        typeArguments,
        arguments: transactionBlockArguments,
    });
    // @ts-ignore
    let bytes = (await provider.devInspectTransactionBlock({ transactionBlock, sender: SENDER })).results[0].returnValues[0][0];

    return U64FromBytes(bytes.reverse());
}
