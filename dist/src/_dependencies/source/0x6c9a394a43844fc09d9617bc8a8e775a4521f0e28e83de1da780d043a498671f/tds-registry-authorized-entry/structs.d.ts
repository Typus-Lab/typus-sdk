import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { TypeName } from "../../0x1/type-name/structs";
import { Config, Info } from "../typus-dov-single/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isWithdrawIncentiveEvent(type: string): boolean;
export interface WithdrawIncentiveEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}
export type WithdrawIncentiveEventReified = Reified<WithdrawIncentiveEvent, WithdrawIncentiveEventFields>;
export declare class WithdrawIncentiveEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::WithdrawIncentiveEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::WithdrawIncentiveEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::WithdrawIncentiveEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    private constructor();
    static reified(): WithdrawIncentiveEventReified;
    static get r(): reified.StructClassReified<WithdrawIncentiveEvent, WithdrawIncentiveEventFields>;
    static phantom(): PhantomReified<ToTypeStr<WithdrawIncentiveEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::WithdrawIncentiveEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
    }, {
        signer: string;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): WithdrawIncentiveEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): WithdrawIncentiveEvent;
    static fromBcs(data: Uint8Array): WithdrawIncentiveEvent;
    toJSONField(): {
        signer: string;
        token: {
            name: string;
        };
        amount: string;
    };
    toJSON(): {
        signer: string;
        token: {
            name: string;
        };
        amount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): WithdrawIncentiveEvent;
    static fromJSON(json: Record<string, any>): WithdrawIncentiveEvent;
    static fromSuiParsedData(content: SuiParsedData): WithdrawIncentiveEvent;
    static fetch(client: SuiClient, id: string): Promise<WithdrawIncentiveEvent>;
}
export declare function isAddAuthorizedUserEvent(type: string): boolean;
export interface AddAuthorizedUserEventFields {
    signer: ToField<"address">;
    users: ToField<Vector<"address">>;
}
export type AddAuthorizedUserEventReified = Reified<AddAuthorizedUserEvent, AddAuthorizedUserEventFields>;
export declare class AddAuthorizedUserEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::AddAuthorizedUserEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::AddAuthorizedUserEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::AddAuthorizedUserEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly users: ToField<Vector<"address">>;
    private constructor();
    static reified(): AddAuthorizedUserEventReified;
    static get r(): reified.StructClassReified<AddAuthorizedUserEvent, AddAuthorizedUserEventFields>;
    static phantom(): PhantomReified<ToTypeStr<AddAuthorizedUserEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::AddAuthorizedUserEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        users: string[];
    }, {
        signer: string;
        users: Iterable<string> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): AddAuthorizedUserEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): AddAuthorizedUserEvent;
    static fromBcs(data: Uint8Array): AddAuthorizedUserEvent;
    toJSONField(): {
        signer: string;
        users: string[];
    };
    toJSON(): {
        signer: string;
        users: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AddAuthorizedUserEvent;
    static fromJSON(json: Record<string, any>): AddAuthorizedUserEvent;
    static fromSuiParsedData(content: SuiParsedData): AddAuthorizedUserEvent;
    static fetch(client: SuiClient, id: string): Promise<AddAuthorizedUserEvent>;
}
export declare function isIncentiviseEvent(type: string): boolean;
export interface IncentiviseEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}
export type IncentiviseEventReified = Reified<IncentiviseEvent, IncentiviseEventFields>;
export declare class IncentiviseEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::IncentiviseEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::IncentiviseEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::IncentiviseEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    private constructor();
    static reified(): IncentiviseEventReified;
    static get r(): reified.StructClassReified<IncentiviseEvent, IncentiviseEventFields>;
    static phantom(): PhantomReified<ToTypeStr<IncentiviseEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::IncentiviseEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
    }, {
        signer: string;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): IncentiviseEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): IncentiviseEvent;
    static fromBcs(data: Uint8Array): IncentiviseEvent;
    toJSONField(): {
        signer: string;
        token: {
            name: string;
        };
        amount: string;
    };
    toJSON(): {
        signer: string;
        token: {
            name: string;
        };
        amount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): IncentiviseEvent;
    static fromJSON(json: Record<string, any>): IncentiviseEvent;
    static fromSuiParsedData(content: SuiParsedData): IncentiviseEvent;
    static fetch(client: SuiClient, id: string): Promise<IncentiviseEvent>;
}
export declare function isNewPortfolioVaultEvent(type: string): boolean;
export interface NewPortfolioVaultEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    info: ToField<Info>;
    config: ToField<Config>;
}
export type NewPortfolioVaultEventReified = Reified<NewPortfolioVaultEvent, NewPortfolioVaultEventFields>;
export declare class NewPortfolioVaultEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::NewPortfolioVaultEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::NewPortfolioVaultEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::NewPortfolioVaultEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly info: ToField<Info>;
    readonly config: ToField<Config>;
    private constructor();
    static reified(): NewPortfolioVaultEventReified;
    static get r(): reified.StructClassReified<NewPortfolioVaultEvent, NewPortfolioVaultEventFields>;
    static phantom(): PhantomReified<ToTypeStr<NewPortfolioVaultEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::NewPortfolioVaultEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        info: {
            index: string;
            option_type: string;
            period: number;
            activation_ts_ms: string;
            expiration_ts_ms: string;
            deposit_token: {
                name: {
                    bytes: number[];
                };
            };
            bid_token: {
                name: {
                    bytes: number[];
                };
            };
            settlement_base: {
                name: {
                    bytes: number[];
                };
            };
            settlement_quote: {
                name: {
                    bytes: number[];
                };
            };
            settlement_base_name: {
                bytes: number[];
            };
            settlement_quote_name: {
                bytes: number[];
            };
            d_token_decimal: string;
            b_token_decimal: string;
            o_token_decimal: string;
            creator: string;
            create_ts_ms: string;
            round: string;
            status: string;
            oracle_info: {
                price: string;
                decimal: string;
            };
            delivery_infos: {
                round: string;
                max_size: string;
                total_delivery_size: string;
                total_bidder_bid_value: string;
                total_bidder_fee: string;
                total_incentive_bid_value: string;
                total_incentive_fee: string;
                delivery_info: {
                    auction_type: string;
                    delivery_price: string;
                    delivery_size: string;
                    bidder_bid_value: string;
                    bidder_fee: string;
                    incentive_bid_value: string;
                    incentive_fee: string;
                    ts_ms: string;
                    u64_padding: string[];
                }[];
                u64_padding: string[];
            };
            settlement_info: {
                vec: any[];
            };
            u64_padding: string[];
            bcs_padding: number[];
        };
        config: {
            oracle_id: string;
            deposit_lot_size: string;
            bid_lot_size: string;
            min_deposit_size: string;
            min_bid_size: string;
            max_deposit_entry: string;
            max_bid_entry: string;
            deposit_fee_bp: string;
            deposit_fee_share_bp: string;
            deposit_shared_fee_pool: {
                vec: any[];
            };
            bid_fee_bp: string;
            deposit_incentive_bp: string;
            bid_incentive_bp: string;
            auction_delay_ts_ms: string;
            auction_duration_ts_ms: string;
            recoup_delay_ts_ms: string;
            capacity: string;
            leverage: string;
            risk_level: string;
            has_next: boolean;
            active_vault_config: {
                payoff_configs: {
                    strike_bp: string;
                    weight: string;
                    is_buyer: boolean;
                    strike: {
                        vec: any[];
                    };
                    u64_padding: string[];
                }[];
                strike_increment: string;
                decay_speed: string;
                initial_price: string;
                final_price: string;
                u64_padding: string[];
            };
            warmup_vault_config: {
                payoff_configs: {
                    strike_bp: string;
                    weight: string;
                    is_buyer: boolean;
                    strike: {
                        vec: any[];
                    };
                    u64_padding: string[];
                }[];
                strike_increment: string;
                decay_speed: string;
                initial_price: string;
                final_price: string;
                u64_padding: string[];
            };
            u64_padding: string[];
            bcs_padding: number[];
        };
    }, {
        signer: string;
        index: string | number | bigint;
        info: {
            index: string | number | bigint;
            option_type: string | number | bigint;
            period: number;
            activation_ts_ms: string | number | bigint;
            expiration_ts_ms: string | number | bigint;
            deposit_token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            bid_token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            settlement_base: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            settlement_quote: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            settlement_base_name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            settlement_quote_name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            d_token_decimal: string | number | bigint;
            b_token_decimal: string | number | bigint;
            o_token_decimal: string | number | bigint;
            creator: string;
            create_ts_ms: string | number | bigint;
            round: string | number | bigint;
            status: string | number | bigint;
            oracle_info: {
                price: string | number | bigint;
                decimal: string | number | bigint;
            };
            delivery_infos: {
                round: string | number | bigint;
                max_size: string | number | bigint;
                total_delivery_size: string | number | bigint;
                total_bidder_bid_value: string | number | bigint;
                total_bidder_fee: string | number | bigint;
                total_incentive_bid_value: string | number | bigint;
                total_incentive_fee: string | number | bigint;
                delivery_info: Iterable<{
                    auction_type: string | number | bigint;
                    delivery_price: string | number | bigint;
                    delivery_size: string | number | bigint;
                    bidder_bid_value: string | number | bigint;
                    bidder_fee: string | number | bigint;
                    incentive_bid_value: string | number | bigint;
                    incentive_fee: string | number | bigint;
                    ts_ms: string | number | bigint;
                    u64_padding: Iterable<string | number | bigint> & {
                        length: number;
                    };
                }> & {
                    length: number;
                };
                u64_padding: Iterable<string | number | bigint> & {
                    length: number;
                };
            };
            settlement_info: {
                vec: Iterable<any> & {
                    length: number;
                };
            };
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
            bcs_padding: Iterable<number> & {
                length: number;
            };
        };
        config: {
            oracle_id: string;
            deposit_lot_size: string | number | bigint;
            bid_lot_size: string | number | bigint;
            min_deposit_size: string | number | bigint;
            min_bid_size: string | number | bigint;
            max_deposit_entry: string | number | bigint;
            max_bid_entry: string | number | bigint;
            deposit_fee_bp: string | number | bigint;
            deposit_fee_share_bp: string | number | bigint;
            deposit_shared_fee_pool: {
                vec: Iterable<any> & {
                    length: number;
                };
            };
            bid_fee_bp: string | number | bigint;
            deposit_incentive_bp: string | number | bigint;
            bid_incentive_bp: string | number | bigint;
            auction_delay_ts_ms: string | number | bigint;
            auction_duration_ts_ms: string | number | bigint;
            recoup_delay_ts_ms: string | number | bigint;
            capacity: string | number | bigint;
            leverage: string | number | bigint;
            risk_level: string | number | bigint;
            has_next: boolean;
            active_vault_config: {
                payoff_configs: Iterable<{
                    strike_bp: string | number | bigint;
                    weight: string | number | bigint;
                    is_buyer: boolean;
                    strike: {
                        vec: Iterable<any> & {
                            length: number;
                        };
                    };
                    u64_padding: Iterable<string | number | bigint> & {
                        length: number;
                    };
                }> & {
                    length: number;
                };
                strike_increment: string | number | bigint;
                decay_speed: string | number | bigint;
                initial_price: string | number | bigint;
                final_price: string | number | bigint;
                u64_padding: Iterable<string | number | bigint> & {
                    length: number;
                };
            };
            warmup_vault_config: {
                payoff_configs: Iterable<{
                    strike_bp: string | number | bigint;
                    weight: string | number | bigint;
                    is_buyer: boolean;
                    strike: {
                        vec: Iterable<any> & {
                            length: number;
                        };
                    };
                    u64_padding: Iterable<string | number | bigint> & {
                        length: number;
                    };
                }> & {
                    length: number;
                };
                strike_increment: string | number | bigint;
                decay_speed: string | number | bigint;
                initial_price: string | number | bigint;
                final_price: string | number | bigint;
                u64_padding: Iterable<string | number | bigint> & {
                    length: number;
                };
            };
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
            bcs_padding: Iterable<number> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): NewPortfolioVaultEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): NewPortfolioVaultEvent;
    static fromBcs(data: Uint8Array): NewPortfolioVaultEvent;
    toJSONField(): {
        signer: string;
        index: string;
        info: {
            index: string;
            optionType: string;
            period: number;
            activationTsMs: string;
            expirationTsMs: string;
            depositToken: {
                name: string;
            };
            bidToken: {
                name: string;
            };
            settlementBase: {
                name: string;
            };
            settlementQuote: {
                name: string;
            };
            settlementBaseName: string;
            settlementQuoteName: string;
            dTokenDecimal: string;
            bTokenDecimal: string;
            oTokenDecimal: string;
            creator: string;
            createTsMs: string;
            round: string;
            status: string;
            oracleInfo: {
                price: string;
                decimal: string;
            };
            deliveryInfos: {
                round: string;
                maxSize: string;
                totalDeliverySize: string;
                totalBidderBidValue: string;
                totalBidderFee: string;
                totalIncentiveBidValue: string;
                totalIncentiveFee: string;
                deliveryInfo: {
                    auctionType: string;
                    deliveryPrice: string;
                    deliverySize: string;
                    bidderBidValue: string;
                    bidderFee: string;
                    incentiveBidValue: string;
                    incentiveFee: string;
                    tsMs: string;
                    u64Padding: string[];
                }[];
                u64Padding: string[];
            };
            settlementInfo: {
                round: string;
                oraclePrice: string;
                oraclePriceDecimal: string;
                settleBalance: string;
                settledBalance: string;
                sharePrice: string;
                sharePriceDecimal: string;
                tsMs: string;
                u64Padding: string[];
            } | null;
            u64Padding: string[];
            bcsPadding: number[];
        };
        config: {
            oracleId: string;
            depositLotSize: string;
            bidLotSize: string;
            minDepositSize: string;
            minBidSize: string;
            maxDepositEntry: string;
            maxBidEntry: string;
            depositFeeBp: string;
            depositFeeShareBp: string;
            depositSharedFeePool: number[] | null;
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
            activeVaultConfig: {
                payoffConfigs: {
                    strikeBp: string;
                    weight: string;
                    isBuyer: boolean;
                    strike: string | null;
                    u64Padding: string[];
                }[];
                strikeIncrement: string;
                decaySpeed: string;
                initialPrice: string;
                finalPrice: string;
                u64Padding: string[];
            };
            warmupVaultConfig: {
                payoffConfigs: {
                    strikeBp: string;
                    weight: string;
                    isBuyer: boolean;
                    strike: string | null;
                    u64Padding: string[];
                }[];
                strikeIncrement: string;
                decaySpeed: string;
                initialPrice: string;
                finalPrice: string;
                u64Padding: string[];
            };
            u64Padding: string[];
            bcsPadding: number[];
        };
    };
    toJSON(): {
        signer: string;
        index: string;
        info: {
            index: string;
            optionType: string;
            period: number;
            activationTsMs: string;
            expirationTsMs: string;
            depositToken: {
                name: string;
            };
            bidToken: {
                name: string;
            };
            settlementBase: {
                name: string;
            };
            settlementQuote: {
                name: string;
            };
            settlementBaseName: string;
            settlementQuoteName: string;
            dTokenDecimal: string;
            bTokenDecimal: string;
            oTokenDecimal: string;
            creator: string;
            createTsMs: string;
            round: string;
            status: string;
            oracleInfo: {
                price: string;
                decimal: string;
            };
            deliveryInfos: {
                round: string;
                maxSize: string;
                totalDeliverySize: string;
                totalBidderBidValue: string;
                totalBidderFee: string;
                totalIncentiveBidValue: string;
                totalIncentiveFee: string;
                deliveryInfo: {
                    auctionType: string;
                    deliveryPrice: string;
                    deliverySize: string;
                    bidderBidValue: string;
                    bidderFee: string;
                    incentiveBidValue: string;
                    incentiveFee: string;
                    tsMs: string;
                    u64Padding: string[];
                }[];
                u64Padding: string[];
            };
            settlementInfo: {
                round: string;
                oraclePrice: string;
                oraclePriceDecimal: string;
                settleBalance: string;
                settledBalance: string;
                sharePrice: string;
                sharePriceDecimal: string;
                tsMs: string;
                u64Padding: string[];
            } | null;
            u64Padding: string[];
            bcsPadding: number[];
        };
        config: {
            oracleId: string;
            depositLotSize: string;
            bidLotSize: string;
            minDepositSize: string;
            minBidSize: string;
            maxDepositEntry: string;
            maxBidEntry: string;
            depositFeeBp: string;
            depositFeeShareBp: string;
            depositSharedFeePool: number[] | null;
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
            activeVaultConfig: {
                payoffConfigs: {
                    strikeBp: string;
                    weight: string;
                    isBuyer: boolean;
                    strike: string | null;
                    u64Padding: string[];
                }[];
                strikeIncrement: string;
                decaySpeed: string;
                initialPrice: string;
                finalPrice: string;
                u64Padding: string[];
            };
            warmupVaultConfig: {
                payoffConfigs: {
                    strikeBp: string;
                    weight: string;
                    isBuyer: boolean;
                    strike: string | null;
                    u64Padding: string[];
                }[];
                strikeIncrement: string;
                decaySpeed: string;
                initialPrice: string;
                finalPrice: string;
                u64Padding: string[];
            };
            u64Padding: string[];
            bcsPadding: number[];
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NewPortfolioVaultEvent;
    static fromJSON(json: Record<string, any>): NewPortfolioVaultEvent;
    static fromSuiParsedData(content: SuiParsedData): NewPortfolioVaultEvent;
    static fetch(client: SuiClient, id: string): Promise<NewPortfolioVaultEvent>;
}
export declare function isRemoveAuthorizedUserEvent(type: string): boolean;
export interface RemoveAuthorizedUserEventFields {
    signer: ToField<"address">;
    users: ToField<Vector<"address">>;
}
export type RemoveAuthorizedUserEventReified = Reified<RemoveAuthorizedUserEvent, RemoveAuthorizedUserEventFields>;
export declare class RemoveAuthorizedUserEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::RemoveAuthorizedUserEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::RemoveAuthorizedUserEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::RemoveAuthorizedUserEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly users: ToField<Vector<"address">>;
    private constructor();
    static reified(): RemoveAuthorizedUserEventReified;
    static get r(): reified.StructClassReified<RemoveAuthorizedUserEvent, RemoveAuthorizedUserEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RemoveAuthorizedUserEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::RemoveAuthorizedUserEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        users: string[];
    }, {
        signer: string;
        users: Iterable<string> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RemoveAuthorizedUserEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveAuthorizedUserEvent;
    static fromBcs(data: Uint8Array): RemoveAuthorizedUserEvent;
    toJSONField(): {
        signer: string;
        users: string[];
    };
    toJSON(): {
        signer: string;
        users: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RemoveAuthorizedUserEvent;
    static fromJSON(json: Record<string, any>): RemoveAuthorizedUserEvent;
    static fromSuiParsedData(content: SuiParsedData): RemoveAuthorizedUserEvent;
    static fetch(client: SuiClient, id: string): Promise<RemoveAuthorizedUserEvent>;
}
export declare function isResumeTransactionEvent(type: string): boolean;
export interface ResumeTransactionEventFields {
    signer: ToField<"address">;
}
export type ResumeTransactionEventReified = Reified<ResumeTransactionEvent, ResumeTransactionEventFields>;
export declare class ResumeTransactionEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::ResumeTransactionEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::ResumeTransactionEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::ResumeTransactionEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    private constructor();
    static reified(): ResumeTransactionEventReified;
    static get r(): reified.StructClassReified<ResumeTransactionEvent, ResumeTransactionEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ResumeTransactionEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::ResumeTransactionEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
    }, {
        signer: string;
    }>;
    static fromFields(fields: Record<string, any>): ResumeTransactionEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ResumeTransactionEvent;
    static fromBcs(data: Uint8Array): ResumeTransactionEvent;
    toJSONField(): {
        signer: string;
    };
    toJSON(): {
        signer: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ResumeTransactionEvent;
    static fromJSON(json: Record<string, any>): ResumeTransactionEvent;
    static fromSuiParsedData(content: SuiParsedData): ResumeTransactionEvent;
    static fetch(client: SuiClient, id: string): Promise<ResumeTransactionEvent>;
}
export declare function isSetAvailableIncentiveAmountEvent(type: string): boolean;
export interface SetAvailableIncentiveAmountEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    prevAmount: ToField<"u64">;
    amount: ToField<"u64">;
}
export type SetAvailableIncentiveAmountEventReified = Reified<SetAvailableIncentiveAmountEvent, SetAvailableIncentiveAmountEventFields>;
export declare class SetAvailableIncentiveAmountEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::SetAvailableIncentiveAmountEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::SetAvailableIncentiveAmountEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::SetAvailableIncentiveAmountEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly prevAmount: ToField<"u64">;
    readonly amount: ToField<"u64">;
    private constructor();
    static reified(): SetAvailableIncentiveAmountEventReified;
    static get r(): reified.StructClassReified<SetAvailableIncentiveAmountEvent, SetAvailableIncentiveAmountEventFields>;
    static phantom(): PhantomReified<ToTypeStr<SetAvailableIncentiveAmountEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::SetAvailableIncentiveAmountEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        prev_amount: string;
        amount: string;
    }, {
        signer: string;
        index: string | number | bigint;
        prev_amount: string | number | bigint;
        amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): SetAvailableIncentiveAmountEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): SetAvailableIncentiveAmountEvent;
    static fromBcs(data: Uint8Array): SetAvailableIncentiveAmountEvent;
    toJSONField(): {
        signer: string;
        index: string;
        prevAmount: string;
        amount: string;
    };
    toJSON(): {
        signer: string;
        index: string;
        prevAmount: string;
        amount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SetAvailableIncentiveAmountEvent;
    static fromJSON(json: Record<string, any>): SetAvailableIncentiveAmountEvent;
    static fromSuiParsedData(content: SuiParsedData): SetAvailableIncentiveAmountEvent;
    static fetch(client: SuiClient, id: string): Promise<SetAvailableIncentiveAmountEvent>;
}
export declare function isSuspendTransactionEvent(type: string): boolean;
export interface SuspendTransactionEventFields {
    signer: ToField<"address">;
}
export type SuspendTransactionEventReified = Reified<SuspendTransactionEvent, SuspendTransactionEventFields>;
export declare class SuspendTransactionEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::SuspendTransactionEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::SuspendTransactionEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::SuspendTransactionEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    private constructor();
    static reified(): SuspendTransactionEventReified;
    static get r(): reified.StructClassReified<SuspendTransactionEvent, SuspendTransactionEventFields>;
    static phantom(): PhantomReified<ToTypeStr<SuspendTransactionEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::SuspendTransactionEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
    }, {
        signer: string;
    }>;
    static fromFields(fields: Record<string, any>): SuspendTransactionEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): SuspendTransactionEvent;
    static fromBcs(data: Uint8Array): SuspendTransactionEvent;
    toJSONField(): {
        signer: string;
    };
    toJSON(): {
        signer: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SuspendTransactionEvent;
    static fromJSON(json: Record<string, any>): SuspendTransactionEvent;
    static fromSuiParsedData(content: SuiParsedData): SuspendTransactionEvent;
    static fetch(client: SuiClient, id: string): Promise<SuspendTransactionEvent>;
}
export declare function isUpgradeRegistryEvent(type: string): boolean;
export interface UpgradeRegistryEventFields {
    signer: ToField<"address">;
    prevVersion: ToField<"u64">;
    version: ToField<"u64">;
}
export type UpgradeRegistryEventReified = Reified<UpgradeRegistryEvent, UpgradeRegistryEventFields>;
export declare class UpgradeRegistryEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::UpgradeRegistryEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::UpgradeRegistryEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::UpgradeRegistryEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly prevVersion: ToField<"u64">;
    readonly version: ToField<"u64">;
    private constructor();
    static reified(): UpgradeRegistryEventReified;
    static get r(): reified.StructClassReified<UpgradeRegistryEvent, UpgradeRegistryEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpgradeRegistryEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_registry_authorized_entry::UpgradeRegistryEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        prev_version: string;
        version: string;
    }, {
        signer: string;
        prev_version: string | number | bigint;
        version: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): UpgradeRegistryEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpgradeRegistryEvent;
    static fromBcs(data: Uint8Array): UpgradeRegistryEvent;
    toJSONField(): {
        signer: string;
        prevVersion: string;
        version: string;
    };
    toJSON(): {
        signer: string;
        prevVersion: string;
        version: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpgradeRegistryEvent;
    static fromJSON(json: Record<string, any>): UpgradeRegistryEvent;
    static fromSuiParsedData(content: SuiParsedData): UpgradeRegistryEvent;
    static fetch(client: SuiClient, id: string): Promise<UpgradeRegistryEvent>;
}
