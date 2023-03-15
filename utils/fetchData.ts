
import { devnetConnection, JsonRpcProvider } from '@mysten/sui.js';
const provider = new JsonRpcProvider(devnetConnection); //for read only operations
const decode = (str: string): string => Buffer.from(str, 'base64').toString('binary');

// typus_portfolio::portfolio

export interface PortfolioVault {
    vaultId: string;
    typeArgs: string[];
    assets: string[];

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
    lotSize: string,
    capacity: string;
    leverage: string;
    hasNext: boolean;
    activeVaultConfig: VaultConfig;
    warmupVaultConfig: VaultConfig;
    upcomingVaultConfig: VaultConfig;
}

export function parseVaultConfig(vaultConfigF: any): VaultConfig {
    let payoffConfigs = vaultConfigF.payoff_configs.map(x => parsePayoffConfig(x.fields))

    return {
        payoffConfigs,
        strikeIncrement: vaultConfigF.strike_increment,
        decaySpeed: vaultConfigF.decay_speed,
        initialPrice: vaultConfigF.initial_price,
        finalPrice: vaultConfigF.final_price,
        auctionDurationInMs: vaultConfigF.auction_duration_in_ms,
    }
}

export function parsePayoffConfig(payoffConfigF: any): PayoffConfig {
    return {
        strikePct: payoffConfigF.strike_pct,
        weight: payoffConfigF.weight,
        isBuyer: payoffConfigF.is_buyer,
        strike: payoffConfigF.strike,
    }
}

export interface PayoffConfig {
    strikePct: string,  // u64
    weight: string;     // u64
    isBuyer: boolean;    // bool
    strike: string;     // Option<u64>,
}

export interface VaultConfig {
    payoffConfigs: PayoffConfig[];
    strikeIncrement: string,
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

export function parseSubVault(subVaultF: any): SubVault {
    return {
        balance: subVaultF.balance,
        shareSupply: subVaultF.share_supply,
    }
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