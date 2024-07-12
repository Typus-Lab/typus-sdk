import BigNumber from "bignumber.js";
import { PublicKey } from "@solana/web3.js";
import { PriceData } from "@pythnetwork/client";
import { SuiClient } from "@mysten/sui.js/dist/cjs/client";
import { Auction, BidShare, Vault } from "../view-function";
export declare const ASSET_INFO: {
    BTC: {
        product: PublicKey;
        price: PublicKey;
    };
    ETH: {
        product: PublicKey;
        price: PublicKey;
    };
    SUI: {
        product: PublicKey;
        price: PublicKey;
    };
    CETUS: {
        product: PublicKey;
        price: PublicKey;
    };
    SEI: {
        product: PublicKey;
        price: PublicKey;
    };
    USDC: {
        product: PublicKey;
        price: PublicKey;
    };
    USDT: {
        product: PublicKey;
        price: PublicKey;
    };
    TURBOS: {
        product: PublicKey;
        price: PublicKey;
    };
    APT: {
        product: PublicKey;
        price: PublicKey;
    };
    SOL: {
        product: PublicKey;
        price: PublicKey;
    };
    INJ: {
        product: PublicKey;
        price: PublicKey;
    };
    JUP: {
        product: PublicKey;
        price: PublicKey;
    };
    HASUI: {
        product: PublicKey;
        price: PublicKey;
    };
    VSUI: {
        product: PublicKey;
        price: PublicKey;
    };
};
export declare const tokenOrder: {
    [key: string]: number;
};
export declare const optionTypeOrder: {
    [key: string]: number;
};
export declare const periodOrder: {
    [key: string]: number;
};
export type Receipt = {
    id: string;
    index: string;
    name: string;
    description: string;
    vid: string;
};
export type TokenAmount = {
    value: string;
    token: string;
};
export type BidVaultInfo = {
    vaultInfo: Vault;
    receipt: Receipt;
};
export interface Bid {
    vaultIndex: string;
    expiry: string;
    auctionName: string;
    strikes: string[];
    bidSize: TokenAmount;
    breakEvenPrice: string;
    estPnls: TokenAmount[];
    receiptsId: string[];
    receiptsVid: string[];
    settlePrice: string;
    isAutoBid: boolean;
}
export interface OrderBy {
    tokenOrder: number;
    optionTypeOrder: number;
    periodOrder: number;
}
export interface CoinInfo {
    price: string;
    decimal: string;
    quote: string;
}
export declare const IncentiveRateBp = 4;
export declare const parsePythOracleData: (data: PriceData[], decimals: {
    [key: string]: string;
}) => {
    [key: string]: CoinInfo;
};
export declare const fetchPrices: (provider: SuiClient, network: string) => Promise<{
    [key: string]: CoinInfo;
}>;
export declare const calcIncentiveRate: (incentiveBp: any) => number;
export declare const calcDeliveryPrice: (bidShare: BidShare, vaultInfo: Vault) => BigNumber;
export declare const calcBreakEvenPrice: (optionType: string, period: string, strikes: string[], bToken: string, price: string, incentive: number) => number;
export declare const calcEstPnl: (live: boolean, incentive: number, bidSize: string, optionType: string, assets: string[], strikes: string[], bidShare: BidShare, deliveryPrice: string, oTokenPrice: string) => TokenAmount[];
export declare const parseStrikes: (period: string, optionType: string, metadata: string) => string[];
export declare const parseBidReceipt: (vaults: Vault[], bidReceipts: {
    [key: string]: Receipt[];
}) => {
    sortedBidReceipts: string[];
    bidVaultsInfo: BidVaultInfo[];
};
export declare const parseBid: (bidVaultInfo: BidVaultInfo, bidShare: BidShare, auction: Auction | null, oTokenPrice: string, isAutoBid: boolean) => Bid & OrderBy;
export declare const getUserBidReceipts: (provider: SuiClient, network: string, originFramworkAddress: string, userAddress: string) => Promise<{
    [key: string]: Receipt[];
}>;
/**
 * Fetch user's bids info
 *
 * @param provider - Sui Client instance.
 * @param network - network type in lowercase.
 * @param packageAddress - Typus main package address.
 * @param framworkAddress - Typus framwork package address.
 * @param originFramworkAddress - Typus intial framwork package address.
 * @param registryAddress - Typus registry package address.
 * @param strategyPoolAddress - strategy pool package address.
 * @param userAddress - user's wallet address.
 * @param prices - tokens prices (usd pair on Pyth)
 * @return User Bids.
 */
export declare const fetchUserBids: (provider: SuiClient, network: string, packageAddress: string, framworkAddress: string, originFramworkAddress: string, registryAddress: string, strategyPoolAddress: string, userAddress: string, prices?: {
    [key: string]: CoinInfo;
}) => Promise<any>;
