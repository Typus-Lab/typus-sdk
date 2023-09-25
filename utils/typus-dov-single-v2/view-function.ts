import { JsonRpcProvider, TransactionBlock } from "@mysten/sui.js";
import { BcsReader } from "@mysten/bcs";
import { AddressFromBytes } from "../tools";

export const SENDER = "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
export interface Vault {
    id: string;
    info: Info;
    config: Config;
    depositVault: DepositVault;
}
export interface Info {
    index: string;
    option_type: string;
    period: string;
    activation_ts_ms: string;
    expiration_ts_ms: string;
    deposit_token: string;
    bid_token: string;
    oracle_token: string;
    d_token_decimal: string;
    b_token_decimal: string;
    o_token_decimal: string;
    creator: string;
    create_ts_ms: string;
    round: string;
    status: string;
    oracle_info: OracleInfo;
    delivery_infos: DeliveryInfos;
    settlement_info: SettlementInfo | undefined;
    u64_padding: string[];
    bcs_padding: string[];
}
export interface OracleInfo {
    price: string;
    decimal: string;
}

export interface DeliveryInfos {
    round: string;
    max_size: string;
    total_delivery_size: string;
    total_bidder_bid_value: string;
    total_bidder_fee: string;
    total_incentive_bid_value: string;
    total_incentive_fee: string;
    delivery_info: DeliveryInfo[];
}
export interface DeliveryInfo {
    delivery_price: string;
    delivery_size: string;
    bidder_bid_value: string;
    bidder_fee: string;
    incentive_bid_value: string;
    incentive_fee: string;
    ts_ms: string;
}
export interface SettlementInfo {
    round: string;
    oracle_price: string;
    oracle_price_decimal: string;
    settle_balance: string;
    settled_balance: string;
    share_price: string;
    share_price_decimal: string;
    ts_ms: string;
}
export interface Config {
    oracle_id: string;
    deposit_lot_size: string;
    bid_lot_size: string;
    min_deposit_size: string;
    min_bid_size: string;
    deposit_fee_bp: string;
    deposit_fee_share_bp: string;
    deposit_shared_fee_pool: string | undefined;
    bid_fee_bp: string;
    deposit_incentive_bp: string;
    bid_incentive_bp: string;
    auction_delay_ts_ms: string;
    auction_duration_ts_ms: string;
    capacity: string;
    leverage: string;
    risk_level: string;
    has_next: boolean;
    active_vault_config: VaultConfig;
    warmup_vault_config: VaultConfig;
    deposit_receipt_display_name: string;
    deposit_receipt_display_description: string;
    deposit_receipt_display_image_url: string;
    bid_receipt_display_name: string;
    bid_receipt_display_description: string;
    bid_receipt_display_image_url: string;
    u64_padding: string[];
    bcs_padding: string[];
}
export interface VaultConfig {
    payoff_configs: PayoffConfig[];
    strike_increment: string;
    decay_speed: string;
    initial_price: string;
    final_price: string;
}
export interface PayoffConfig {
    strike_bp: string;
    weight: string;
    is_buyer: boolean;
    strike: string | undefined;
}
export interface DepositVault {
    id: string;
    deposit_token: string;
    bid_token: string;
    incentive_token: string | undefined;
    index: string;
    fee_bp: string;
    fee_share_bp: string;
    shared_fee_pool: string | undefined;
    active_share_supply: string;
    deactivating_share_supply: string; // unsubscribe
    inactive_share_supply: string; // claim
    warmup_share_supply: string; // deposit / withdraw
    premium_share_supply: string; // harvest
    incentive_share_supply: string; // redeem
    has_next: boolean;
    name: string;
    description: string;
    image_url: string;
    u64_padding: string[];
    bcs_padding: string[];
}
export async function getVaults(
    provider: JsonRpcProvider,
    typusFrameworkPackageId: string,
    packageId: string,
    registry: string,
    indexes: string[]
): Promise<{ [key: string]: Vault }> {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::typus_dov_single::get_vault_data_bcs` as any;
    let transactionBlockArguments = [transactionBlock.pure(registry), transactionBlock.pure(indexes)];
    transactionBlock.moveCall({
        target,
        typeArguments: [],
        arguments: transactionBlockArguments,
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock, sender: SENDER })).results;
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
            option_type: reader.read64(),
            period: reader.read8() + "",
            activation_ts_ms: reader.read64(),
            expiration_ts_ms: reader.read64(),
            deposit_token: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            bid_token: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            oracle_token: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            d_token_decimal: reader.read64(),
            b_token_decimal: reader.read64(),
            o_token_decimal: reader.read64(),
            creator: AddressFromBytes(reader.readBytes(32)),
            create_ts_ms: reader.read64(),
            round: reader.read64(),
            status: reader.read64(),
            oracle_info: {
                price: reader.read64(),
                decimal: reader.read64(),
            },
            delivery_infos: {
                round: reader.read64(),
                max_size: reader.read64(),
                total_delivery_size: reader.read64(),
                total_bidder_bid_value: reader.read64(),
                total_bidder_fee: reader.read64(),
                total_incentive_bid_value: reader.read64(),
                total_incentive_fee: reader.read64(),
                delivery_info: reader.readVec((reader) => {
                    return {
                        delivery_price: reader.read64(),
                        delivery_size: reader.read64(),
                        bidder_bid_value: reader.read64(),
                        bidder_fee: reader.read64(),
                        incentive_bid_value: reader.read64(),
                        incentive_fee: reader.read64(),
                        ts_ms: reader.read64(),
                    };
                }),
            },
            settlement_info: reader
                .readVec((reader) => {
                    return {
                        round: reader.read64(),
                        oracle_price: reader.read64(),
                        oracle_price_decimal: reader.read64(),
                        settle_balance: reader.read64(),
                        settled_balance: reader.read64(),
                        share_price: reader.read64(),
                        share_price_decimal: reader.read64(),
                        ts_ms: reader.read64(),
                    };
                })
                .at(0),
            u64_padding: reader.readVec((reader) => {
                return reader.read64();
            }),
            bcs_padding: reader.readVec((reader) => {
                return reader.read8();
            }),
        };
        let config = {
            oracle_id: AddressFromBytes(reader.readBytes(32)),
            deposit_lot_size: reader.read64(),
            bid_lot_size: reader.read64(),
            min_deposit_size: reader.read64(),
            min_bid_size: reader.read64(),
            deposit_fee_bp: reader.read64(),
            deposit_fee_share_bp: reader.read64(),
            deposit_shared_fee_pool: reader
                .readVec((reader) => {
                    return String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8())));
                })
                .at(0),
            bid_fee_bp: reader.read64(),
            deposit_incentive_bp: reader.read64(),
            bid_incentive_bp: reader.read64(),
            auction_delay_ts_ms: reader.read64(),
            auction_duration_ts_ms: reader.read64(),
            capacity: reader.read64(),
            leverage: reader.read64(),
            risk_level: reader.read64(),
            has_next: reader.read8() > 0,
            active_vault_config: {
                payoff_configs: reader.readVec((reader) => {
                    return {
                        strike_bp: reader.read64(),
                        weight: reader.read64(),
                        is_buyer: reader.read8() > 0,
                        strike: reader
                            .readVec((reader) => {
                                return reader.read64();
                            })
                            .at(0),
                    };
                }),
                strike_increment: reader.read64(),
                decay_speed: reader.read64(),
                initial_price: reader.read64(),
                final_price: reader.read64(),
            },
            warmup_vault_config: {
                payoff_configs: reader.readVec((reader) => {
                    return {
                        strike_bp: reader.read64(),
                        weight: reader.read64(),
                        is_buyer: reader.read8() > 0,
                        strike: reader
                            .readVec((reader) => {
                                return reader.read64();
                            })
                            .at(0),
                    };
                }),
                strike_increment: reader.read64(),
                decay_speed: reader.read64(),
                initial_price: reader.read64(),
                final_price: reader.read64(),
            },
            deposit_receipt_display_name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            deposit_receipt_display_description: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            deposit_receipt_display_image_url: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            bid_receipt_display_name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            bid_receipt_display_description: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            bid_receipt_display_image_url: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            u64_padding: reader.readVec((reader) => {
                return reader.read64();
            }),
            bcs_padding: reader.readVec((reader) => {
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
        let deposit_vault = {
            id: AddressFromBytes(reader.readBytes(32)),
            deposit_token: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            bid_token: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            incentive_token: reader
                .readVec((reader) => {
                    return String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8())));
                })
                .at(0),
            index: reader.read64(),
            fee_bp: reader.read64(),
            fee_share_bp: reader.read64(),
            shared_fee_pool: reader
                .readVec((reader) => {
                    return String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8())));
                })
                .at(0),
            active_share_supply: reader.read64(),
            deactivating_share_supply: reader.read64(), // unsubscribe
            inactive_share_supply: reader.read64(), // claim
            warmup_share_supply: reader.read64(), // deposit / withdraw
            premium_share_supply: reader.read64(), // harvest
            incentive_share_supply: reader.read64(), // redeem
            has_next: reader.read8() > 0,
            name: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            description: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            image_url: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            u64_padding: reader.readVec((reader) => {
                return reader.read64();
            }),
            bcs_padding: reader.readVec((reader) => {
                return reader.read8();
            }),
        };

        result[info.index] = {
            id,
            info,
            config,
            depositVault: deposit_vault,
        };
    });

    return result;
}

export interface DepositShare {
    index: string;
    activeSubVaultUserShare: string;
    deactivatingSubVaultUserShare: string;
    inactiveSubVaultUserShare: string;
    warmupSubVaultUserShare: string;
    premiumSubVaultUserShare: string;
    performanceFeeSubVaultUserShare: string;
}
export async function getDepositShares(
    provider: JsonRpcProvider,
    typusFrameworkPackageId: string,
    packageId: string,
    registry: string,
    receipts: string[]
): Promise<Map<string, DepositShare>> {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::typus_dov_single::get_deposit_shares_bcs` as any;
    let transactionBlockArguments = [
        transactionBlock.pure(registry),
        transactionBlock.makeMoveVec({
            type: `${typusFrameworkPackageId}::vault::TypusDepositReceipt`,
            objects: receipts.map((id) => transactionBlock.object(id)),
        }),
    ];
    transactionBlock.moveCall({
        target,
        typeArguments: [],
        arguments: transactionBlockArguments,
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock, sender: SENDER })).results;
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    let result = Array.from(new Map()).reduce((map, [key, value]) => {
        map[key] = value;
        return map;
    }, {});
    reader.readVec((reader, i) => {
        reader.read8();
        let index = reader.read64();
        let activeSubVaultUserShare = reader.read64();
        let deactivatingSubVaultUserShare = reader.read64();
        let inactiveSubVaultUserShare = reader.read64();
        let warmupSubVaultUserShare = reader.read64();
        let premiumSubVaultUserShare = reader.read64();
        let performanceFeeSubVaultUserShare = reader.read64();
        result[index] = {
            index,
            activeSubVaultUserShare,
            deactivatingSubVaultUserShare,
            inactiveSubVaultUserShare,
            warmupSubVaultUserShare,
            premiumSubVaultUserShare,
            performanceFeeSubVaultUserShare,
        } as DepositShare;
    });

    // @ts-ignore
    return result;
}
