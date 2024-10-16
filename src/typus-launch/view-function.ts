import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";
import { SENDER } from "src/constants";
import { AddressFromBytes, TypusConfig } from "src/utils";
import { AuctionBid } from "src/typus-dov-single-v2";

export async function getLaunchAuctionBids(config: TypusConfig): Promise<AuctionBid[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    let target = `${config.package.launch}::auction::get_auction_bids_bcs` as any;
    let transactionBlockArguments = [transactionBlock.pure(config.object.launchAuction)];
    transactionBlock.moveCall({
        target,
        typeArguments: [],
        arguments: transactionBlockArguments,
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock, sender: SENDER })).results;
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    let result = reader.readVec((reader, i) => {
        reader.read8();
        let bid = {
            tsMs: reader.read64(),
            bidder: AddressFromBytes(reader.readBytes(32)),
            price: reader.read64(),
            size: reader.read64(),
            bidderBalance: reader.read64(),
            incentiveBalance: reader.read64(),
            feeDiscount: reader.read64(),
            index: reader.read64(),
        } as AuctionBid;
        return bid;
    });

    return result;
}

export interface UserLaunchData {
    bid_size: number;
    refund: number;
}

export async function getUserBidRebate(config: TypusConfig): Promise<UserLaunchData> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    let target = `${config.package.launch}::auction::get_user_bid_and_rebate` as any;
    let transactionBlockArguments = [transactionBlock.pure(config.object.launchAuction)];
    transactionBlock.moveCall({
        target,
        typeArguments: [],
        arguments: transactionBlockArguments,
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock, sender: SENDER })).results;
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    console.log(bytes);

    return {
        bid_size: bytes[0],
        refund: bytes[1],
    } as UserLaunchData;
}

export interface LaunchAuction {
    // dutch_auction: DutchAuction | null;
    delivery_info: DeliveryInfo | null;
    total_size: string;
    token_to_sell: string;
    refund_vault: string;
    minimum_bid_size: string;
    maximum_bid_size: string;
    lot_size: string;
    start_ts_ms: string;
    end_ts_ms: string;
}

export interface DeliveryInfo {
    price: string;
    total_bid_size: string;
    total_bidder_bid_value: string;
    remaining: string;
}

export async function getLaunchAuction(config: TypusConfig): Promise<null> {
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let response = await provider.getObject({ id: config.object.launchAuction });
    console.log(response);

    return null;
}
