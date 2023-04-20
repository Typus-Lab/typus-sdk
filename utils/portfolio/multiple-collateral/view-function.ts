import { JsonRpcProvider, TransactionBlock } from "@mysten/sui.js";
import { U64FromBytes } from "../../tools";
import { DepositVaultUserShare, BidVaultUserShare } from "../../typus-framework/vault";
import { CLOCK, SENDER } from "../../../constants";

export interface UserShare {
    index: string;
    depositVaultUserShare: DepositVaultUserShare;
    bidVaultUserShare: BidVaultUserShare;
}

export async function getAuctionMaxSize(
    provider: JsonRpcProvider,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string
): Promise<BigInt> {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::multiple_collateral::get_auction_max_size` as any;
    let transactionBlockArguments = [transactionBlock.pure(registry), transactionBlock.pure(index)];
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
    index: string
): Promise<BigInt> {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::multiple_collateral::get_max_loss_per_unit` as any;
    let transactionBlockArguments = [transactionBlock.pure(registry), transactionBlock.pure(index)];
    transactionBlock.moveCall({
        target,
        typeArguments,
        arguments: transactionBlockArguments,
    });
    // @ts-ignore
    let bytes = (await provider.devInspectTransactionBlock({ transactionBlock, sender: SENDER })).results[0].returnValues[0][0];

    return U64FromBytes(bytes.reverse());
}
