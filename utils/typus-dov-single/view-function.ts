import { JsonRpcProvider, TransactionBlock } from "@mysten/sui.js";
import { BcsReader } from "@mysten/bcs";
import { U64FromBytes, AddressFromBytes } from "../tools";
import { DepositVaultUserShare, BidVaultUserShare } from "../typus-framework/vault";
import { CLOCK, SENDER } from "../../constants";

export interface UserShare {
    index: string;
    depositVaultUserShare: DepositVaultUserShare;
    bidVaultUserShare: BidVaultUserShare;
}

export interface UserBid {
    bid_index: string;
    price: string;
    size: string;
    ts_ms: string;
    coin_value: string;
    bidder: string;
}

export interface VaultUserShare {
    user: string;
    share: string;
}

export interface VaultUserShares {
    active: VaultUserShare[];
    deactivating: VaultUserShare[];
    inactive: VaultUserShare[];
    warmup: VaultUserShare[];
    bidder: VaultUserShare[];
    premium: VaultUserShare[];
    performanceFee: VaultUserShare[];
}

export interface AdditionalConfig {
    index: string;
    auction_start_delay_ts_ms: string;
    auction_lot_size: string;
    auction_benchmark_price: string;
    oracle_id: string;
    risk_level: string;
    min_bid_size: string;
    min_deposit: string;
    incentive_flag: string;
    incentive_rate_bp: string;
    remaining_incentive_sui: string;
    depositor_incentive_rate_bp: string;
    current_portfolio_step: string;
}

export async function getUserShares(
    provider: JsonRpcProvider,
    packageId: string,
    registry: string,
    indexes: string[],
    user: string
): Promise<Map<string, UserShare>> {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::typus_dov_single::get_user_shares` as any;
    let transactionBlockArguments = [transactionBlock.pure(registry), transactionBlock.pure(indexes), transactionBlock.pure(user)];
    transactionBlock.moveCall({
        target,
        arguments: transactionBlockArguments,
    });
    // @ts-ignore
    let bytes = (await provider.devInspectTransactionBlock({ transactionBlock, sender: user })).results[0].returnValues[0][0];

    let result = Array.from(new Map()).reduce((map, [key, value]) => {
        map[key] = value;
        return map;
    }, {});
    while (bytes.length > 49) {
        // struct UserShare {
        //     index: u64,      // 8
        //     tag: u64,        // 1
        //     user: address,   // 32
        //     share: u64,      // 8
        // }
        let user_share_bytes = bytes.splice(bytes.length - 49, 49);
        let index = U64FromBytes(user_share_bytes.splice(0, 8).reverse()).toString();
        let tag = U64FromBytes(user_share_bytes.splice(0, 1).reverse()).toString();
        user_share_bytes.splice(0, 32);
        let share = U64FromBytes(user_share_bytes.splice(0, 8).reverse());
        if (result[index] == undefined) {
            result[index] = {
                index,
                depositVaultUserShare: {
                    activeSubVaultUserShare: BigInt(0),
                    deactivatingSubVaultUserShare: BigInt(0),
                    inactiveSubVaultUserShare: BigInt(0),
                    warmupSubVaultUserShare: BigInt(0),
                },
                bidVaultUserShare: {
                    bidderSubVaultUserShare: BigInt(0),
                    premiumSubVaultUserShare: BigInt(0),
                    performanceFeeSubVaultUserShare: BigInt(0),
                },
            } as UserShare;
        }
        result[index].index = index;
        switch (tag) {
            case "0": {
                result[index].depositVaultUserShare.activeSubVaultUserShare = share;
                break;
            }
            case "1": {
                result[index].depositVaultUserShare.deactivatingSubVaultUserShare = share;
                break;
            }
            case "2": {
                result[index].depositVaultUserShare.inactiveSubVaultUserShare = share;
                break;
            }
            case "3": {
                result[index].depositVaultUserShare.warmupSubVaultUserShare = share;
                break;
            }
            case "4": {
                result[index].bidVaultUserShare.bidderSubVaultUserShare = share;
                break;
            }
            case "5": {
                result[index].bidVaultUserShare.premiumSubVaultUserShare = share;
                break;
            }
            case "6": {
                result[index].bidVaultUserShare.performanceFeeSubVaultUserShare = share;
                break;
            }
        }
    }

    // @ts-ignore
    return result;
}

export async function getAuctionMaxSize(
    provider: JsonRpcProvider,
    packageId: string,
    typeArguments: string[],
    registry: string,
    additional_config_registry: string,
    index: string,
    priceOracle: string
): Promise<BigInt> {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::typus_dov_single::get_auction_max_size` as any;
    let transactionBlockArguments = [
        transactionBlock.pure(registry),
        transactionBlock.pure(additional_config_registry),
        transactionBlock.pure(index),
        transactionBlock.pure(priceOracle),
        transactionBlock.pure(CLOCK),
    ];
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
    additional_config_registry: string,
    index: string,
    priceOracle: string
): Promise<BigInt> {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::typus_dov_single::get_max_loss_per_unit` as any;
    let transactionBlockArguments = [
        transactionBlock.pure(registry),
        transactionBlock.pure(additional_config_registry),
        transactionBlock.pure(index),
        transactionBlock.pure(priceOracle),
        transactionBlock.pure(CLOCK),
    ];
    transactionBlock.moveCall({
        target,
        typeArguments,
        arguments: transactionBlockArguments,
    });
    // @ts-ignore
    let bytes = (await provider.devInspectTransactionBlock({ transactionBlock, sender: SENDER })).results[0].returnValues[0][0];

    return U64FromBytes(bytes.reverse());
}

export async function getAuctionTotalBidSize(
    provider: JsonRpcProvider,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string
): Promise<BigInt> {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::typus_dov_single::get_auction_total_bid_size` as any;
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

export async function getAuctionBids(
    provider: JsonRpcProvider,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string
): Promise<UserBid[]> {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::typus_dov_single::get_auction_bids` as any;
    let transactionBlockArguments = [transactionBlock.pure(registry), transactionBlock.pure(index)];
    transactionBlock.moveCall({
        target,
        typeArguments,
        arguments: transactionBlockArguments,
    });
    // @ts-ignore
    let bytes = (await provider.devInspectTransactionBlock({ transactionBlock, sender: SENDER })).results[0].returnValues[0][0];

    let result: UserBid[] = [];
    while (bytes.length > 72) {
        // struct UserBid {
        //     index: u64,       // 8
        //     price: u64,       // 8
        //     size: u64,        // 8
        //     ts_ms: u64,       // 8
        //     balance: u64,     // 8
        //     bidder: address,  // 32
        // }
        let user_bid_bytes = bytes.splice(bytes.length - 72, 72);
        let bid_index = U64FromBytes(user_bid_bytes.splice(0, 8).reverse()).toString();
        let price = U64FromBytes(user_bid_bytes.splice(0, 8).reverse()).toString();
        let size = U64FromBytes(user_bid_bytes.splice(0, 8).reverse()).toString();
        let ts_ms = U64FromBytes(user_bid_bytes.splice(0, 8).reverse()).toString();
        let coin_value = U64FromBytes(user_bid_bytes.splice(0, 8).reverse()).toString();
        let bidder = AddressFromBytes(user_bid_bytes.splice(0, 32));
        result.push({
            bid_index,
            price,
            size,
            ts_ms,
            coin_value,
            bidder,
        } as UserBid);
    }

    return result;
}

export async function getVaultUserShares(
    provider: JsonRpcProvider,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string
): Promise<VaultUserShares> {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::typus_dov_single::get_vault_user_shares` as any;
    let transactionBlockArguments = [transactionBlock.pure(registry), transactionBlock.pure(index)];
    transactionBlock.moveCall({
        target,
        typeArguments,
        arguments: transactionBlockArguments,
    });
    // @ts-ignore
    let bytes = (await provider.devInspectTransactionBlock({ transactionBlock, sender: SENDER })).results[0].returnValues;

    return {
        // @ts-ignore
        active: parseVaultUserShares(bytes[0][0]),
        // @ts-ignore
        deactivating: parseVaultUserShares(bytes[1][0]),
        // @ts-ignore
        inactive: parseVaultUserShares(bytes[2][0]),
        // @ts-ignore
        warmup: parseVaultUserShares(bytes[3][0]),
        // @ts-ignore
        bidder: parseVaultUserShares(bytes[4][0]),
        // @ts-ignore
        premium: parseVaultUserShares(bytes[5][0]),
        // @ts-ignore
        performanceFee: parseVaultUserShares(bytes[6][0]),
    } as VaultUserShares;
}
function parseVaultUserShares(bytes: number[]): VaultUserShare[] {
    let result: VaultUserShare[] = [];
    while (bytes.length > 40) {
        // struct UserBid {
        //     user: address,  // 32
        //     share: u64,     // 8
        // }
        let user_share_bytes = bytes.splice(bytes.length - 40, 40);
        let user = AddressFromBytes(user_share_bytes.splice(0, 32));
        let share = U64FromBytes(user_share_bytes.splice(0, 8).reverse()).toString();
        result.push({
            user,
            share,
        } as VaultUserShare);
    }
    return result.reverse();
}

export async function getAdditionalConfigs(
    provider: JsonRpcProvider,
    packageId: string,
    typeArguments: string[],
    registry: string,
    additional_config_registry: string,
    indexes: string[]
): Promise<[string, Map<string, AdditionalConfig>]> {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::typus_dov_single::get_additional_configs` as any;
    // let target = `${packageId}::test::get_additional_configs` as any;
    let transactionBlockArguments = [
        transactionBlock.pure(registry),
        transactionBlock.pure(additional_config_registry),
        transactionBlock.pure(indexes),
    ];
    // let transactionBlockArguments = [];
    transactionBlock.moveCall({
        target,
        typeArguments,
        arguments: transactionBlockArguments,
    });
    // @ts-ignore
    let bytes = (await provider.devInspectTransactionBlock({ transactionBlock, sender: SENDER })).results[0].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    let result = Array.from(new Map()).reduce((map, [key, value]) => {
        map[key] = value;
        return map;
    }, {});
    let incentive_balance = "0";
    // index: u64
    // auction_start_delay_ts_ms: Option<u64>
    // auction_lot_size: Option<u64>
    // auction_benchmark_price: Option<u64>
    // oracle_id: Option<address>
    reader.readVec((reader, i) => {
        if (i == 0) {
            reader.read8();
            incentive_balance = reader.read64();
        } else {
            reader.read8();
            let index = reader.read64();
            let auction_start_delay_ts_ms = reader
                .readVec((reader) => {
                    return reader.read64();
                })
                .at(0);
            let auction_lot_size = reader
                .readVec((reader) => {
                    return reader.read64();
                })
                .at(0);
            let auction_benchmark_price = reader
                .readVec((reader) => {
                    return reader.read64();
                })
                .at(0);
            let oracle_id = reader
                .readVec((reader) => {
                    return AddressFromBytes(reader.readBytes(32));
                })
                .at(0);
            let risk_level = reader
                .readVec((reader) => {
                    return reader.read8();
                })
                .at(0);
            let min_bid_size = reader
                .readVec((reader) => {
                    return reader.read64();
                })
                .at(0);
            let min_deposit = reader
                .readVec((reader) => {
                    return reader.read64();
                })
                .at(0);
            let incentive_flag = reader
                .readVec((reader) => {
                    return reader.read8();
                })
                .at(0);
            let incentive_rate_bp = reader
                .readVec((reader) => {
                    return reader.read64();
                })
                .at(0);
            let remaining_incentive_sui = reader
                .readVec((reader) => {
                    return reader.read64();
                })
                .at(0);
            let depositor_incentive_rate_bp = reader
                .readVec((reader) => {
                    return reader.read64();
                })
                .at(0);
            let current_portfolio_step = reader
                .readVec((reader) => {
                    return reader.read64();
                })
                .at(0);
            result[index] = {
                index,
                auction_start_delay_ts_ms: auction_start_delay_ts_ms ? auction_start_delay_ts_ms : "0",
                auction_lot_size: auction_lot_size ? auction_lot_size : "0",
                auction_benchmark_price: auction_benchmark_price ? auction_benchmark_price : "0",
                oracle_id: oracle_id ? oracle_id : "0",
                risk_level: risk_level ? risk_level : "0",
                min_bid_size: min_bid_size ? min_bid_size : "0",
                min_deposit: min_deposit ? min_deposit : "0",
                incentive_flag: incentive_flag ? incentive_flag : "0",
                incentive_rate_bp: incentive_rate_bp ? incentive_rate_bp : "0",
                remaining_incentive_sui: remaining_incentive_sui ? remaining_incentive_sui : "0",
                depositor_incentive_rate_bp: depositor_incentive_rate_bp ? depositor_incentive_rate_bp : "0",
                current_portfolio_step: current_portfolio_step ? current_portfolio_step : "0",
            } as AdditionalConfig;
        }
    });

    // @ts-ignore
    return [incentive_balance, result];
}
