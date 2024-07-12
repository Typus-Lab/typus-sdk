import { SuiClient } from "@mysten/sui.js/client";
export interface Vault {
    id: string;
    info: Info;
    config: Config;
    depositVault: DepositVault;
}
export interface Info {
    index: string;
    optionType: string;
    period: string;
    activationTsMs: string;
    expirationTsMs: string;
    depositToken: string;
    bidToken: string;
    settlementBase: string;
    settlementQuote: string;
    settlementBaseName: string;
    settlementQuoteName: string;
    dTokenDecimal: string;
    bTokenDecimal: string;
    oTokenDecimal: string;
    creator: string;
    createTsMs: string;
    round: string;
    status: string;
    oracleInfo: OracleInfo;
    deliveryInfos: DeliveryInfos;
    settlementInfo: SettlementInfo | undefined;
    u64Padding: string[];
    bcsPadding: string[];
}
export interface OracleInfo {
    price: string;
    decimal: string;
}
export interface DeliveryInfos {
    round: string;
    maxSize: string;
    totalDeliverySize: string;
    totalBidderBidValue: string;
    totalBidderFee: string;
    totalIncentiveBidValue: string;
    totalIncentiveFee: string;
    deliveryInfo: DeliveryInfo[];
    u64Padding: string[];
}
export interface DeliveryInfo {
    auctionType: string;
    deliveryPrice: string;
    deliverySize: string;
    bidderBidValue: string;
    bidderFee: string;
    incentiveBidValue: string;
    incentiveFee: string;
    tsMs: string;
    u64Padding: string[];
}
export interface SettlementInfo {
    round: string;
    oraclePrice: string;
    oraclePriceDecimal: string;
    settleBalance: string;
    settledBalance: string;
    sharePrice: string;
    sharePriceDecimal: string;
    tsMs: string;
    u64Padding: string[];
}
export interface Config {
    oracleId: string;
    depositLotSize: string;
    bidLotSize: string;
    minDepositSize: string;
    minBidSize: string;
    maxDepositEntry: string;
    maxBidEntry: string;
    depositFeeBp: string;
    depositFeeShareBp: string;
    depositSharedFeePool: string | undefined;
    bidFeeBp: string;
    depositIncentiveBp: string;
    bidIncentiveBp: string;
    auctionDelayTsMs: string;
    auctionDurationTsMs: string;
    recoupDelayTsMs: string;
    capacity: string;
    leverage: string;
    riskLevel: string;
    hasNext: boolean;
    activeVaultConfig: VaultConfig;
    warmupVaultConfig: VaultConfig;
    u64Padding: string[];
    bcsPadding: string[];
}
export interface VaultConfig {
    payoffConfigs: PayoffConfig[];
    strikeIncrement: string;
    decaySpeed: string;
    initialPrice: string;
    finalPrice: string;
    u64Padding: string[];
}
export interface PayoffConfig {
    strikeBp: string;
    weight: string;
    isBuyer: boolean;
    strike: string | undefined;
    u64Padding: string[];
}
export interface DepositVault {
    id: string;
    depositToken: string;
    bidToken: string;
    incentiveToken: string | undefined;
    index: string;
    feeBp: string;
    feeShareBp: string;
    sharedFeePool: string | undefined;
    activeShareSupply: string;
    deactivatingShareSupply: string;
    inactiveShareSupply: string;
    warmupShareSupply: string;
    premiumShareSupply: string;
    incentiveShareSupply: string;
    hasNext: boolean;
    metadata: string;
    u64Padding: string[];
    bcsPadding: string[];
}
export declare function getVaults(provider: SuiClient, packageId: string, registry: string, indexes: string[], sender?: string): Promise<{
    [key: string]: Vault;
}>;
export interface Auction {
    id: string;
    index: string;
    token: string;
    startTsMs: string;
    endTsMs: string;
    size: string;
    decaySpeed: string;
    initialPrice: string;
    finalPrice: string;
    feeBp: string;
    incentiveBp: string;
    tokenDecimal: string;
    sizeDecimal: string;
    totalBidSize: string;
    ableToRemoveBid: boolean;
    bidIndex: string;
}
export declare function getAuctions(provider: SuiClient, packageId: string, registry: string, indexes: string[], sender?: string): Promise<{
    [key: string]: Auction;
}>;
export interface AuctionBid {
    index: string;
    bidder: string;
    price: string;
    size: string;
    bidderBalance: string;
    incentiveBalance: string;
    feeDiscount: string;
    tsMs: string;
}
export declare function getAuctionBids(provider: SuiClient, packageId: string, registry: string, index: string, sender?: string): Promise<AuctionBid[]>;
export interface DepositSnapshot {
    snapshots: string[];
    totalDeposit: string;
    snapshotTsMs: string;
}
export interface DepositShare {
    index: string;
    activeSubVaultUserShare: string;
    deactivatingSubVaultUserShare: string;
    inactiveSubVaultUserShare: string;
    warmupSubVaultUserShare: string;
    premiumSubVaultUserShare: string;
    incentiveShare: string;
}
export interface RRR {
    a: {
        [key: string]: DepositShare;
    };
    b: DepositSnapshot;
}
export declare function getDepositShares(provider: SuiClient, typusFrameworkPackageId: string, packageId: string, registry: string, receipts: string[], user: string, sender?: string): Promise<{
    depositShare: {
        [key: string]: DepositShare;
    };
    depositSnapshot: DepositSnapshot;
}>;
export interface BidVault {
    id: string;
    depositToken: string;
    bidToken: string;
    incentiveToken: string | undefined;
    index: string;
    shareSupply: string;
    metadata: string;
    u64Padding: string[];
    bcsPadding: string[];
}
export interface BidShare {
    bidVault: BidVault;
    share: string;
}
export declare function getMyBids(provider: SuiClient, typusFrameworkPackageId: string, packageId: string, registry: string, receipts: string[], sender?: string): Promise<{
    [key: string]: BidShare;
}>;
export declare function getRefundShares(provider: SuiClient, packageId: string, registry: string, typeArguments: string[], sender?: string): Promise<{
    [key: string]: string;
}>;
