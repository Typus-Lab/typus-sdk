import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { BcsReader } from "@mysten/bcs";
import { SENDER } from "src/constants";
import { AddressFromBytes, TypusConfig } from "src/utils";

interface Record {
    bidder: string;
    price: string;
    size: string;
    balance: string;
    ts_ms: string;
}

export async function getLaunchAuctionBids(config: TypusConfig): Promise<Record[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    let target = `${config.package.launch.auction}::auction::get_records_bcs` as any;
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
            bidder: AddressFromBytes(reader.readBytes(32)),
            price: reader.read64(),
            size: reader.read64(),
            balance: reader.read64(),
            ts_ms: reader.read64(),
        } as Record;
        return bid;
    });

    return result;
}

export interface UserBidData {
    whitelist_max_bid_size: string;
    whitelist_total_bid_size: string;
    total_bid_size: string; // My Purchased
    total_balance: string;
    refund: string; // My Rebate
    able_to_claim: boolean;
}

export async function getBidderInfo(config: TypusConfig, bidder: string): Promise<UserBidData> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    let target = `${config.package.launch.auction}::auction::get_bidder_info` as any;
    let transactionBlockArguments = [transactionBlock.pure(config.object.launchAuction), transactionBlock.pure(bidder)];
    transactionBlock.moveCall({
        target,
        typeArguments: [],
        arguments: transactionBlockArguments,
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock, sender: SENDER })).results;
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    // console.log(bytes);

    let reader = new BcsReader(new Uint8Array(bytes));

    reader.read8();
    let bid = {
        whitelist_max_bid_size: reader.read64(),
        whitelist_total_bid_size: reader.read64(),
        total_bid_size: reader.read64(),
        total_balance: reader.read64(),
        refund: reader.read64(),
        able_to_claim: reader.read8() == 1 ? false : true,
    } as UserBidData;

    return bid;
}

export async function getBiddersInfo(config: TypusConfig, bidders: string[]): Promise<{ [key: string]: [UserBidData] }> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transactionBlock = new TransactionBlock();
    bidders.forEach((bidder) => {
        transactionBlock.moveCall({
            target: `${config.package.launch.auction}::auction::get_bidder_info`,
            arguments: [transactionBlock.object(config.object.launchAuction), transactionBlock.pure(bidder)],
        });
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock, sender: SENDER })).results;
    let bids: { [key: string]: [UserBidData] } = {};
    results?.forEach((result, i) => {
        // @ts-ignore
        let bytes = result.returnValues[0][0];
        let reader = new BcsReader(new Uint8Array(bytes));
        reader.read8();
        let bid = {
            whitelist_max_bid_size: reader.read64(),
            whitelist_total_bid_size: reader.read64(),
            total_bid_size: reader.read64(),
            total_balance: reader.read64(),
            refund: reader.read64(),
            able_to_claim: reader.read8() == 1 ? false : true,
        } as UserBidData;

        bids[bidders[i]] = [bid];
    });

    return bids;
}

export interface LaunchAuction {
    whitelist_ts_ms: string; // whitelist start timestamp in ms
    start_ts_ms: string; // auction start timestamp in ms
    end_ts_ms: string; // auction end timestamp in ms
    max_size: string; // auction max total bid size
    lot_size: string;
    min_bid_size: string; // min bid size per user during auction
    max_bid_size: string; // max bid size per user during auction
    decay_speed: string;
    initial_price: string;
    final_price: string;
    deliver_price: string; // last user bid price
    token_decimal: string; // bid token
    size_decimal: string; // contract token / contract size
    total_bid_size: string; // sum of auction bid size including whitelist
    bid_balance: string;
    deliver_balance: string;
}

export async function getLaunchAuction(config: TypusConfig): Promise<LaunchAuction> {
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let response = await provider.getObject({ id: config.object.launchAuction, options: { showContent: true } });

    // @ts-ignore
    return response.data.content.fields as LaunchAuction;
}
