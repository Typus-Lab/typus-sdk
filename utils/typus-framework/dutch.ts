export interface Auction {
    startTsMs: string;
    endTsMs: string;
    priceConfig: PriceConfig;
    bidIndex: string;   // bid index
    bids: string; // Table<u64, Bid<TOKEN>>,
    ownerships: string; // Table<address, vector<u64>>,
    totalBidSize: string;
    ableToRemoveBid: boolean;
}

export interface PriceConfig {
    decaySpeed: string;
    initialPrice: string;
    finalPrice: string;
}

export interface Bid {
    price: string;
    size: string;
    tsMs: string;
    tokenBalance: string;
    ownerAddress: string;
}

export function parseAuction(auction): Auction {
    return {
        startTsMs: auction.fields.start_ts_ms,
        endTsMs: auction.fields.end_ts_ms,
        priceConfig: {
            decaySpeed: auction.fields.price_config.fields.decay_speed,
            initialPrice: auction.fields.price_config.fields.initial_price,
            finalPrice: auction.fields.price_config.fields.final_price,
        } as PriceConfig,
        bidIndex: auction.fields.bid_index,
        bids: auction.fields.bids.fields.id.id,
        ownerships: auction.fields.ownerships.fields.id.id,
        totalBidSize: auction.fields.total_bid_size,
        ableToRemoveBid: auction.fields.able_to_remove_bid,
    };
}