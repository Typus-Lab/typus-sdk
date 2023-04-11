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