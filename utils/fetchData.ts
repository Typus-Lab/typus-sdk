
import { JsonRpcProvider, Network } from '@mysten/sui.js';
const provider = new JsonRpcProvider(Network.DEVNET); //for read only operations
const decode = (str: string): string => Buffer.from(str, 'base64').toString('binary');

// typus_portfolio::portfolio

export interface PortfolioVault {
    vaultId: string;
    dToken: string;
    bToken: string;
    oToken: string;

    info: Info;
    config: Config;
    depositVault: DepositVault;
    bidVault: BidVault;
    auction: Auction;
    authority: string[];

    tvl: string;        //regular_sub_vault balance + rolling_sub_vault balance
    vaultBidPrice: string;
}

export interface Info {
    index: string;
    creator: string;
    createTsMs: string;
    round: string;
    deliveryInfo: DeliveryInfo;
}

export interface Config {
    optionType: string;
    period: string;         // daily:0 weekly:1 monthly:2
    activationTsMs: string;
    expirationTsMs: string;
    dTokenDecimal: string;
    bTokenDecimal: string;
    oTokenDecimal: string;
    capacity: string;
    leverage: string;
    hasNext: boolean;
    vaultConfig: VaultConfig;
    nextVaultConfig: VaultConfig;
}

export interface PayoffConfig {
    strikePct: string,  // u64
    weight: string;     // u64
    isBuyer: boolean;    // bool
    strike: string;     // Option<u64>,
}

export interface VaultConfig {
    payoffConfig: PayoffConfig[];
    strikeIncrement: string,
    lotSize: string,
    decaySpeed: string,
    initialPrice: string,
    finalPrice: string,
    auctionDurationInMs: string,
}

export interface DeliveryInfo {
    round: string;
    price: string;
    size: string;
    premium: string;
    tsMs: string;
}

// typus_dov::vault

export interface DepositVault {
    activeSubVault: SubVault;
    deactivatingSubVault: SubVault;
    inactiveSubVault: SubVault;
    warmupSubVault: SubVault;
    hasNext: boolean;
}

export interface BidVault {
    bidderSubVault: SubVault,
    premiumSubVault: SubVault,
    performanceFeeSubVault: SubVault,
}

export interface SubVault {
    balance: string,
    shareSupply: string,
    // user_shares
}


// typus_dov::dutch

export interface Auction {
    startTsMs: string;
    endTsMs: string;
    priceConfig: PriceConfig;
    index: string; // bid index
    // bids
    // ownerships
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