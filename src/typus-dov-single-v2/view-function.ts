import { Transaction } from "@mysten/sui/transactions";
import { SuiClient } from "@mysten/sui/client";
import { BcsReader } from "@mysten/bcs";
import { AddressFromBytes, TypusConfig } from "src/utils";
import { SENDER } from "src/constants";

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
    deactivatingShareSupply: string; // unsubscribe
    inactiveShareSupply: string; // claim
    warmupShareSupply: string; // deposit / withdraw
    premiumShareSupply: string; // harvest
    incentiveShareSupply: string; // redeem
    hasNext: boolean;
    metadata: string;
    u64Padding: string[];
    bcsPadding: string[];
}
export async function getVaults(
    config: TypusConfig,
    input: {
        indexes: string[];
    }
): Promise<{ [key: string]: Vault }> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    let target = `${config.package.dovSingle}::tds_view_function::get_vault_data_bcs` as any;
    let transactionBlockArguments = [transaction.object(config.registry.dov.dovSingle), transaction.pure.vector("u64", input.indexes)];
    transaction.moveCall({
        target,
        typeArguments: [],
        arguments: transactionBlockArguments,
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock: transaction, sender: SENDER })).results;
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    // console.log(JSON.stringify(bytes));
    let reader = new BcsReader(new Uint8Array(bytes));
    let result: {
        [key: string]: Vault;
    } = {};
    reader.readVec((reader) => {
        reader.read16();
        let id = AddressFromBytes(reader.readBytes(32));
        let info = {
            index: reader.read64(),
            optionType: reader.read64(),
            period: reader.read8() + "",
            activationTsMs: reader.read64(),
            expirationTsMs: reader.read64(),
            depositToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            bidToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            settlementBase: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            settlementQuote: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            settlementBaseName: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            settlementQuoteName: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            dTokenDecimal: reader.read64(),
            bTokenDecimal: reader.read64(),
            oTokenDecimal: reader.read64(),
            creator: AddressFromBytes(reader.readBytes(32)),
            createTsMs: reader.read64(),
            round: reader.read64(),
            status: reader.read64(),
            oracleInfo: {
                price: reader.read64(),
                decimal: reader.read64(),
            },
            deliveryInfos: {
                round: reader.read64(),
                maxSize: reader.read64(),
                totalDeliverySize: reader.read64(),
                totalBidderBidValue: reader.read64(),
                totalBidderFee: reader.read64(),
                totalIncentiveBidValue: reader.read64(),
                totalIncentiveFee: reader.read64(),
                deliveryInfo: reader.readVec((reader) => {
                    return {
                        auctionType: reader.read64(),
                        deliveryPrice: reader.read64(),
                        deliverySize: reader.read64(),
                        bidderBidValue: reader.read64(),
                        bidderFee: reader.read64(),
                        incentiveBidValue: reader.read64(),
                        incentiveFee: reader.read64(),
                        tsMs: reader.read64(),
                        u64Padding: reader.readVec((reader) => {
                            return reader.read64();
                        }),
                    };
                }),
                u64Padding: reader.readVec((reader) => {
                    return reader.read64();
                }),
            },
            settlementInfo: reader
                .readVec((reader) => {
                    return {
                        round: reader.read64(),
                        oraclePrice: reader.read64(),
                        oraclePriceDecimal: reader.read64(),
                        settleBalance: reader.read64(),
                        settledBalance: reader.read64(),
                        sharePrice: reader.read64(),
                        sharePriceDecimal: reader.read64(),
                        tsMs: reader.read64(),
                        u64Padding: reader.readVec((reader) => {
                            return reader.read64();
                        }),
                    };
                })
                .at(0),
            u64Padding: reader.readVec((reader) => {
                return reader.read64();
            }),
            bcsPadding: reader.readVec((reader) => {
                return reader.read8();
            }),
        };
        let config = {
            oracleId: AddressFromBytes(reader.readBytes(32)),
            depositLotSize: reader.read64(),
            bidLotSize: reader.read64(),
            minDepositSize: reader.read64(),
            minBidSize: reader.read64(),
            maxDepositEntry: reader.read64(),
            maxBidEntry: reader.read64(),
            depositFeeBp: reader.read64(),
            depositFeeShareBp: reader.read64(),
            depositSharedFeePool: reader
                .readVec((reader) => {
                    return String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB())));
                })
                .at(0),
            bidFeeBp: reader.read64(),
            depositIncentiveBp: reader.read64(),
            bidIncentiveBp: reader.read64(),
            auctionDelayTsMs: reader.read64(),
            auctionDurationTsMs: reader.read64(),
            recoupDelayTsMs: reader.read64(),
            capacity: reader.read64(),
            leverage: reader.read64(),
            riskLevel: reader.read64(),
            hasNext: reader.read8() > 0,
            activeVaultConfig: {
                payoffConfigs: reader.readVec((reader) => {
                    return {
                        strikeBp: reader.read64(),
                        weight: reader.read64(),
                        isBuyer: reader.read8() > 0,
                        strike: reader
                            .readVec((reader) => {
                                return reader.read64();
                            })
                            .at(0),
                        u64Padding: reader.readVec((reader) => {
                            return reader.read64();
                        }),
                    };
                }),
                strikeIncrement: reader.read64(),
                decaySpeed: reader.read64(),
                initialPrice: reader.read64(),
                finalPrice: reader.read64(),
                u64Padding: reader.readVec((reader) => {
                    return reader.read64();
                }),
            },
            warmupVaultConfig: {
                payoffConfigs: reader.readVec((reader) => {
                    return {
                        strikeBp: reader.read64(),
                        weight: reader.read64(),
                        isBuyer: reader.read8() > 0,
                        strike: reader
                            .readVec((reader) => {
                                return reader.read64();
                            })
                            .at(0),
                        u64Padding: reader.readVec((reader) => {
                            return reader.read64();
                        }),
                    };
                }),
                strikeIncrement: reader.read64(),
                decaySpeed: reader.read64(),
                initialPrice: reader.read64(),
                finalPrice: reader.read64(),
                u64Padding: reader.readVec((reader) => {
                    return reader.read64();
                }),
            },
            u64Padding: reader.readVec((reader) => {
                return reader.read64();
            }),
            bcsPadding: reader.readVec((reader) => {
                return reader.read8();
            }),
        };
        // skip authority bytes
        reader.readBytes(32); // id
        reader.read64(); // size
        reader.readVec((reader) => {
            return reader.readBytes(32);
        }); // head
        reader.readVec((reader) => {
            return reader.readBytes(32);
        }); // tail
        let depositVault = {
            id: AddressFromBytes(reader.readBytes(32)),
            depositToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            bidToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            incentiveToken: reader
                .readVec((reader) => {
                    return String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB())));
                })
                .at(0),
            index: reader.read64(),
            feeBp: reader.read64(),
            feeShareBp: reader.read64(),
            sharedFeePool: reader
                .readVec((reader) => {
                    return String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB())));
                })
                .at(0),
            activeShareSupply: reader.read64(),
            deactivatingShareSupply: reader.read64(), // unsubscribe
            inactiveShareSupply: reader.read64(), // claim
            warmupShareSupply: reader.read64(), // deposit / withdraw
            premiumShareSupply: reader.read64(), // harvest
            incentiveShareSupply: reader.read64(), // redeem
            hasNext: reader.read8() > 0,
            metadata: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            u64Padding: reader.readVec((reader) => {
                return reader.read64();
            }),
            bcsPadding: reader.readVec((reader) => {
                return reader.read8();
            }),
        };

        result[info.index] = {
            id,
            info,
            config,
            depositVault,
        };
    });

    return result;
}

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
export async function getAuctions(
    config: TypusConfig,
    input: {
        indexes: string[];
    }
): Promise<{ [key: string]: Auction }> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    let target = `${config.package.dovSingle}::tds_view_function::get_auction_bcs` as any;
    let transactionBlockArguments = [transaction.object(config.registry.dov.dovSingle), transaction.pure.vector("u64", input.indexes)];
    transaction.moveCall({
        target,
        typeArguments: [],
        arguments: transactionBlockArguments,
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock: transaction, sender: SENDER })).results;
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    // console.log(JSON.stringify(bytes));
    let reader = new BcsReader(new Uint8Array(bytes));
    let result: {
        [key: string]: Auction;
    } = {};
    reader.readVec((reader) => {
        reader.read16();
        let id = AddressFromBytes(reader.readBytes(32));
        let index = reader.read64();
        let token = String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB())));
        let startTsMs = reader.read64();
        let endTsMs = reader.read64();
        let size = reader.read64();
        let decaySpeed = reader.read64();
        let initialPrice = reader.read64();
        let finalPrice = reader.read64();
        let feeBp = reader.read64();
        let incentiveBp = reader.read64();
        let tokenDecimal = reader.read64();
        let sizeDecimal = reader.read64();
        let totalBidSize = reader.read64();
        let ableToRemoveBid = reader.read8() > 0;
        // skip bids bytes
        reader.readBytes(32); // id
        reader.read64(); // slice_count
        reader.read64(); // slice_size
        reader.read64(); // length
        let bidIndex = reader.read64();
        result[index] = {
            id,
            index,
            token,
            startTsMs,
            endTsMs,
            size,
            decaySpeed,
            initialPrice,
            finalPrice,
            feeBp,
            incentiveBp,
            tokenDecimal,
            sizeDecimal,
            totalBidSize,
            ableToRemoveBid,
            bidIndex,
        };
    });

    return result;
}

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
export async function getAuctionBids(
    config: TypusConfig,
    input: {
        index: string;
    }
): Promise<AuctionBid[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    let target = `${config.package.dovSingle}::tds_view_function::get_auction_bids_bcs` as any;
    let transactionBlockArguments = [transaction.object(config.registry.dov.dovSingle), transaction.pure.u64(input.index)];
    transaction.moveCall({
        target,
        typeArguments: [],
        arguments: transactionBlockArguments,
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock: transaction, sender: SENDER })).results;
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
    a: { [key: string]: DepositShare };
    b: DepositSnapshot;
}
export async function getDepositShares(
    config: TypusConfig,
    input: {
        receipts: string[];
        user: string;
    }
): Promise<{ depositShare: { [key: string]: DepositShare }; depositSnapshot: DepositSnapshot }> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    let target = `${config.package.dovSingle}::tds_view_function::get_deposit_shares_bcs` as any;
    let transactionBlockArguments = [
        transaction.object(config.registry.dov.dovSingle),
        transaction.makeMoveVec({
            type: `${config.package.framework}::vault::TypusDepositReceipt`,
            elements: input.receipts.map((id) => transaction.object(id)),
        }),
        transaction.pure.address(input.user),
    ];
    transaction.moveCall({
        target,
        typeArguments: [],
        arguments: transactionBlockArguments,
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock: transaction, sender: SENDER })).results;
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    let depositShare = Array.from(new Map()).reduce((map, [key, value]) => {
        map[key] = value;
        return map;
    }, {});
    let depositSnapshot = {};
    // console.log(bytes);
    reader.readVec((reader, i) => {
        if (i == 0) {
            reader.readULEB();
            depositSnapshot = {
                snapshots: reader.readVec((reader) => {
                    return reader.read64();
                }),
                totalDeposit: reader.read64(),
                snapshotTsMs: reader.read64(),
            } as DepositSnapshot;
        } else {
            reader.readULEB();
            let index = reader.read64();
            let activeSubVaultUserShare = reader.read64();
            let deactivatingSubVaultUserShare = reader.read64();
            let inactiveSubVaultUserShare = reader.read64();
            let warmupSubVaultUserShare = reader.read64();
            let premiumSubVaultUserShare = reader.read64();
            let incentiveShare = reader.read64();
            depositShare[index] = {
                index,
                activeSubVaultUserShare,
                deactivatingSubVaultUserShare,
                inactiveSubVaultUserShare,
                warmupSubVaultUserShare,
                premiumSubVaultUserShare,
                incentiveShare,
            } as DepositShare;
        }
    });

    // @ts-ignore
    return { depositShare, depositSnapshot };
}

export interface BidVault {
    id: string;
    depositToken: string;
    bidToken: string;
    incentiveToken: string | undefined;
    index: string;
    shareSupply: string;
    metadata: string;
    u64Padding: string[]; // [SETTLE_PRICE, DELIVERY_PRICE, BID_INCENTIVE_BP, (ROUND)]
    bcsPadding: string[];
}
export interface BidShare {
    bidVault: BidVault;
    share: string;
}
export async function getMyBids(
    config: TypusConfig,
    input: {
        receipts: string[];
    }
): Promise<{ [key: string]: BidShare }> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    let target = `${config.package.dovSingle}::tds_view_function::get_my_bids_bcs` as any;
    let transactionBlockArguments = [
        transaction.object(config.registry.dov.dovSingle),
        transaction.makeMoveVec({
            type: `${config.package.framework}::vault::TypusBidReceipt`,
            elements: input.receipts.map((id) => transaction.object(id)),
        }),
    ];
    transaction.moveCall({
        target,
        typeArguments: [],
        arguments: transactionBlockArguments,
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock: transaction, sender: SENDER })).results;
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    let result = Array.from(new Map()).reduce((map, [key, value]) => {
        map[key] = value;
        return map;
    }, {});
    reader.readVec((reader, i) => {
        reader.read16();
        let bidVault = {
            id: AddressFromBytes(reader.readBytes(32)),
            depositToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            bidToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            incentiveToken: reader
                .readVec((reader) => {
                    return String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB())));
                })
                .at(0),
            index: reader.read64(),
            shareSupply: reader.read64(),
            metadata: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB()))),
            u64Padding: reader.readVec((reader) => {
                return reader.read64();
            }),
            bcsPadding: reader.readVec((reader) => {
                return reader.read8();
            }),
        } as BidVault;
        result[bidVault.index + "-" + bidVault.id] = {
            bidVault,
            share: reader.read64(),
        } as BidShare;
    });

    // @ts-ignore
    return result;
}

export async function getRefundShares(
    config: TypusConfig,
    input: {
        typeArguments: string[];
        user: string;
    }
): Promise<{ [key: string]: string }> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    let target = `${config.package.dovSingle}::tds_view_function::get_refund_shares_bcs` as any;
    let transactionBlockArguments = [transaction.object(config.registry.dov.dovSingle)];
    input.typeArguments.forEach((typeArgument) => {
        transaction.moveCall({
            target,
            typeArguments: [typeArgument],
            arguments: transactionBlockArguments,
        });
    });
    let results = (
        await provider.devInspectTransactionBlock({
            transactionBlock: transaction,
            sender: input.user,
        })
    ).results;
    let refundShares = Array.from(new Map()).reduce((map, [key, value]) => {
        map[key] = value;
        return map;
    }, {});
    // @ts-ignore
    results.forEach((result) => {
        // @ts-ignore
        let bytes = result.returnValues[0][0];
        let reader = new BcsReader(new Uint8Array(bytes));
        reader.read8();
        refundShares[String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.readULEB())))] = reader.read64();
    });

    // @ts-ignore
    return refundShares;
}
