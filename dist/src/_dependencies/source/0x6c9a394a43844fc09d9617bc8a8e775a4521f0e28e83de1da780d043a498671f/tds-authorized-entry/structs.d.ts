import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { TypeName } from "../../0x1/type-name/structs";
import { Config, VaultConfig } from "../typus-dov-single/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isAddPortfolioVaultAuthorizedUserEvent(type: string): boolean;
export interface AddPortfolioVaultAuthorizedUserEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    users: ToField<Vector<"address">>;
}
export type AddPortfolioVaultAuthorizedUserEventReified = Reified<AddPortfolioVaultAuthorizedUserEvent, AddPortfolioVaultAuthorizedUserEventFields>;
export declare class AddPortfolioVaultAuthorizedUserEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::AddPortfolioVaultAuthorizedUserEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::AddPortfolioVaultAuthorizedUserEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::AddPortfolioVaultAuthorizedUserEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly users: ToField<Vector<"address">>;
    private constructor();
    static reified(): AddPortfolioVaultAuthorizedUserEventReified;
    static get r(): reified.StructClassReified<AddPortfolioVaultAuthorizedUserEvent, AddPortfolioVaultAuthorizedUserEventFields>;
    static phantom(): PhantomReified<ToTypeStr<AddPortfolioVaultAuthorizedUserEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::AddPortfolioVaultAuthorizedUserEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        users: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        users: Iterable<string> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): AddPortfolioVaultAuthorizedUserEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): AddPortfolioVaultAuthorizedUserEvent;
    static fromBcs(data: Uint8Array): AddPortfolioVaultAuthorizedUserEvent;
    toJSONField(): {
        signer: string;
        index: string;
        users: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        users: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AddPortfolioVaultAuthorizedUserEvent;
    static fromJSON(json: Record<string, any>): AddPortfolioVaultAuthorizedUserEvent;
    static fromSuiParsedData(content: SuiParsedData): AddPortfolioVaultAuthorizedUserEvent;
    static fetch(client: SuiClient, id: string): Promise<AddPortfolioVaultAuthorizedUserEvent>;
}
export declare function isFixedIncentiviseEvent(type: string): boolean;
export interface FixedIncentiviseEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    fixedIncentiveAmount: ToField<"u64">;
}
export type FixedIncentiviseEventReified = Reified<FixedIncentiviseEvent, FixedIncentiviseEventFields>;
export declare class FixedIncentiviseEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::FixedIncentiviseEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::FixedIncentiviseEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::FixedIncentiviseEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly fixedIncentiveAmount: ToField<"u64">;
    private constructor();
    static reified(): FixedIncentiviseEventReified;
    static get r(): reified.StructClassReified<FixedIncentiviseEvent, FixedIncentiviseEventFields>;
    static phantom(): PhantomReified<ToTypeStr<FixedIncentiviseEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::FixedIncentiviseEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
        fixed_incentive_amount: string;
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
        fixed_incentive_amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): FixedIncentiviseEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): FixedIncentiviseEvent;
    static fromBcs(data: Uint8Array): FixedIncentiviseEvent;
    toJSONField(): {
        signer: string;
        token: {
            name: string;
        };
        amount: string;
        fixedIncentiveAmount: string;
    };
    toJSON(): {
        signer: string;
        token: {
            name: string;
        };
        amount: string;
        fixedIncentiveAmount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): FixedIncentiviseEvent;
    static fromJSON(json: Record<string, any>): FixedIncentiviseEvent;
    static fromSuiParsedData(content: SuiParsedData): FixedIncentiviseEvent;
    static fetch(client: SuiClient, id: string): Promise<FixedIncentiviseEvent>;
}
export declare function isRemovePortfolioVaultAuthorizedUserEvent(type: string): boolean;
export interface RemovePortfolioVaultAuthorizedUserEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    users: ToField<Vector<"address">>;
}
export type RemovePortfolioVaultAuthorizedUserEventReified = Reified<RemovePortfolioVaultAuthorizedUserEvent, RemovePortfolioVaultAuthorizedUserEventFields>;
export declare class RemovePortfolioVaultAuthorizedUserEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::RemovePortfolioVaultAuthorizedUserEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::RemovePortfolioVaultAuthorizedUserEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::RemovePortfolioVaultAuthorizedUserEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly users: ToField<Vector<"address">>;
    private constructor();
    static reified(): RemovePortfolioVaultAuthorizedUserEventReified;
    static get r(): reified.StructClassReified<RemovePortfolioVaultAuthorizedUserEvent, RemovePortfolioVaultAuthorizedUserEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RemovePortfolioVaultAuthorizedUserEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::RemovePortfolioVaultAuthorizedUserEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        users: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        users: Iterable<string> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RemovePortfolioVaultAuthorizedUserEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RemovePortfolioVaultAuthorizedUserEvent;
    static fromBcs(data: Uint8Array): RemovePortfolioVaultAuthorizedUserEvent;
    toJSONField(): {
        signer: string;
        index: string;
        users: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        users: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RemovePortfolioVaultAuthorizedUserEvent;
    static fromJSON(json: Record<string, any>): RemovePortfolioVaultAuthorizedUserEvent;
    static fromSuiParsedData(content: SuiParsedData): RemovePortfolioVaultAuthorizedUserEvent;
    static fetch(client: SuiClient, id: string): Promise<RemovePortfolioVaultAuthorizedUserEvent>;
}
export declare function isUpdateActiveVaultConfigEvent(type: string): boolean;
export interface UpdateActiveVaultConfigEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    previous: ToField<VaultConfig>;
    current: ToField<VaultConfig>;
}
export type UpdateActiveVaultConfigEventReified = Reified<UpdateActiveVaultConfigEvent, UpdateActiveVaultConfigEventFields>;
export declare class UpdateActiveVaultConfigEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateActiveVaultConfigEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateActiveVaultConfigEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateActiveVaultConfigEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly previous: ToField<VaultConfig>;
    readonly current: ToField<VaultConfig>;
    private constructor();
    static reified(): UpdateActiveVaultConfigEventReified;
    static get r(): reified.StructClassReified<UpdateActiveVaultConfigEvent, UpdateActiveVaultConfigEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateActiveVaultConfigEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateActiveVaultConfigEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        previous: {
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
        current: {
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
    }, {
        signer: string;
        index: string | number | bigint;
        previous: {
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
        current: {
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
    }>;
    static fromFields(fields: Record<string, any>): UpdateActiveVaultConfigEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateActiveVaultConfigEvent;
    static fromBcs(data: Uint8Array): UpdateActiveVaultConfigEvent;
    toJSONField(): {
        signer: string;
        index: string;
        previous: {
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
        current: {
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
    };
    toJSON(): {
        signer: string;
        index: string;
        previous: {
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
        current: {
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
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateActiveVaultConfigEvent;
    static fromJSON(json: Record<string, any>): UpdateActiveVaultConfigEvent;
    static fromSuiParsedData(content: SuiParsedData): UpdateActiveVaultConfigEvent;
    static fetch(client: SuiClient, id: string): Promise<UpdateActiveVaultConfigEvent>;
}
export declare function isUpdateAuctionConfigEvent(type: string): boolean;
export interface UpdateAuctionConfigEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    startTsMs: ToField<"u64">;
    endTsMs: ToField<"u64">;
    decaySpeed: ToField<"u64">;
    initialPrice: ToField<"u64">;
    finalPrice: ToField<"u64">;
    feeBp: ToField<"u64">;
    incentiveBp: ToField<"u64">;
    tokenDecimal: ToField<"u64">;
    sizeDecimal: ToField<"u64">;
    ableToRemoveBid: ToField<"bool">;
}
export type UpdateAuctionConfigEventReified = Reified<UpdateAuctionConfigEvent, UpdateAuctionConfigEventFields>;
export declare class UpdateAuctionConfigEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateAuctionConfigEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateAuctionConfigEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateAuctionConfigEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly startTsMs: ToField<"u64">;
    readonly endTsMs: ToField<"u64">;
    readonly decaySpeed: ToField<"u64">;
    readonly initialPrice: ToField<"u64">;
    readonly finalPrice: ToField<"u64">;
    readonly feeBp: ToField<"u64">;
    readonly incentiveBp: ToField<"u64">;
    readonly tokenDecimal: ToField<"u64">;
    readonly sizeDecimal: ToField<"u64">;
    readonly ableToRemoveBid: ToField<"bool">;
    private constructor();
    static reified(): UpdateAuctionConfigEventReified;
    static get r(): reified.StructClassReified<UpdateAuctionConfigEvent, UpdateAuctionConfigEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateAuctionConfigEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateAuctionConfigEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        start_ts_ms: string;
        end_ts_ms: string;
        decay_speed: string;
        initial_price: string;
        final_price: string;
        fee_bp: string;
        incentive_bp: string;
        token_decimal: string;
        size_decimal: string;
        able_to_remove_bid: boolean;
    }, {
        signer: string;
        index: string | number | bigint;
        start_ts_ms: string | number | bigint;
        end_ts_ms: string | number | bigint;
        decay_speed: string | number | bigint;
        initial_price: string | number | bigint;
        final_price: string | number | bigint;
        fee_bp: string | number | bigint;
        incentive_bp: string | number | bigint;
        token_decimal: string | number | bigint;
        size_decimal: string | number | bigint;
        able_to_remove_bid: boolean;
    }>;
    static fromFields(fields: Record<string, any>): UpdateAuctionConfigEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateAuctionConfigEvent;
    static fromBcs(data: Uint8Array): UpdateAuctionConfigEvent;
    toJSONField(): {
        signer: string;
        index: string;
        startTsMs: string;
        endTsMs: string;
        decaySpeed: string;
        initialPrice: string;
        finalPrice: string;
        feeBp: string;
        incentiveBp: string;
        tokenDecimal: string;
        sizeDecimal: string;
        ableToRemoveBid: boolean;
    };
    toJSON(): {
        signer: string;
        index: string;
        startTsMs: string;
        endTsMs: string;
        decaySpeed: string;
        initialPrice: string;
        finalPrice: string;
        feeBp: string;
        incentiveBp: string;
        tokenDecimal: string;
        sizeDecimal: string;
        ableToRemoveBid: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateAuctionConfigEvent;
    static fromJSON(json: Record<string, any>): UpdateAuctionConfigEvent;
    static fromSuiParsedData(content: SuiParsedData): UpdateAuctionConfigEvent;
    static fetch(client: SuiClient, id: string): Promise<UpdateAuctionConfigEvent>;
}
export declare function isUpdateConfigEvent(type: string): boolean;
export interface UpdateConfigEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    previous: ToField<Config>;
    current: ToField<Config>;
}
export type UpdateConfigEventReified = Reified<UpdateConfigEvent, UpdateConfigEventFields>;
export declare class UpdateConfigEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateConfigEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateConfigEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateConfigEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly previous: ToField<Config>;
    readonly current: ToField<Config>;
    private constructor();
    static reified(): UpdateConfigEventReified;
    static get r(): reified.StructClassReified<UpdateConfigEvent, UpdateConfigEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateConfigEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateConfigEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        previous: {
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
        current: {
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
        previous: {
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
        current: {
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
    static fromFields(fields: Record<string, any>): UpdateConfigEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateConfigEvent;
    static fromBcs(data: Uint8Array): UpdateConfigEvent;
    toJSONField(): {
        signer: string;
        index: string;
        previous: {
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
        current: {
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
        previous: {
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
        current: {
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
    static fromJSONField(field: any): UpdateConfigEvent;
    static fromJSON(json: Record<string, any>): UpdateConfigEvent;
    static fromSuiParsedData(content: SuiParsedData): UpdateConfigEvent;
    static fetch(client: SuiClient, id: string): Promise<UpdateConfigEvent>;
}
export declare function isUpdateStrikeEvent(type: string): boolean;
export interface UpdateStrikeEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    oraclePrice: ToField<"u64">;
    oraclePriceDecimal: ToField<"u64">;
    vaultConfig: ToField<VaultConfig>;
}
export type UpdateStrikeEventReified = Reified<UpdateStrikeEvent, UpdateStrikeEventFields>;
export declare class UpdateStrikeEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateStrikeEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateStrikeEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateStrikeEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly oraclePrice: ToField<"u64">;
    readonly oraclePriceDecimal: ToField<"u64">;
    readonly vaultConfig: ToField<VaultConfig>;
    private constructor();
    static reified(): UpdateStrikeEventReified;
    static get r(): reified.StructClassReified<UpdateStrikeEvent, UpdateStrikeEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateStrikeEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateStrikeEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        oracle_price: string;
        oracle_price_decimal: string;
        vault_config: {
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
    }, {
        signer: string;
        index: string | number | bigint;
        oracle_price: string | number | bigint;
        oracle_price_decimal: string | number | bigint;
        vault_config: {
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
    }>;
    static fromFields(fields: Record<string, any>): UpdateStrikeEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateStrikeEvent;
    static fromBcs(data: Uint8Array): UpdateStrikeEvent;
    toJSONField(): {
        signer: string;
        index: string;
        oraclePrice: string;
        oraclePriceDecimal: string;
        vaultConfig: {
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
    };
    toJSON(): {
        signer: string;
        index: string;
        oraclePrice: string;
        oraclePriceDecimal: string;
        vaultConfig: {
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
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateStrikeEvent;
    static fromJSON(json: Record<string, any>): UpdateStrikeEvent;
    static fromSuiParsedData(content: SuiParsedData): UpdateStrikeEvent;
    static fetch(client: SuiClient, id: string): Promise<UpdateStrikeEvent>;
}
export declare function isUpdateWarmupVaultConfigEvent(type: string): boolean;
export interface UpdateWarmupVaultConfigEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    previous: ToField<VaultConfig>;
    current: ToField<VaultConfig>;
}
export type UpdateWarmupVaultConfigEventReified = Reified<UpdateWarmupVaultConfigEvent, UpdateWarmupVaultConfigEventFields>;
export declare class UpdateWarmupVaultConfigEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateWarmupVaultConfigEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateWarmupVaultConfigEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateWarmupVaultConfigEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly previous: ToField<VaultConfig>;
    readonly current: ToField<VaultConfig>;
    private constructor();
    static reified(): UpdateWarmupVaultConfigEventReified;
    static get r(): reified.StructClassReified<UpdateWarmupVaultConfigEvent, UpdateWarmupVaultConfigEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateWarmupVaultConfigEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::UpdateWarmupVaultConfigEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        previous: {
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
        current: {
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
    }, {
        signer: string;
        index: string | number | bigint;
        previous: {
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
        current: {
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
    }>;
    static fromFields(fields: Record<string, any>): UpdateWarmupVaultConfigEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateWarmupVaultConfigEvent;
    static fromBcs(data: Uint8Array): UpdateWarmupVaultConfigEvent;
    toJSONField(): {
        signer: string;
        index: string;
        previous: {
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
        current: {
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
    };
    toJSON(): {
        signer: string;
        index: string;
        previous: {
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
        current: {
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
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateWarmupVaultConfigEvent;
    static fromJSON(json: Record<string, any>): UpdateWarmupVaultConfigEvent;
    static fromSuiParsedData(content: SuiParsedData): UpdateWarmupVaultConfigEvent;
    static fetch(client: SuiClient, id: string): Promise<UpdateWarmupVaultConfigEvent>;
}
export declare function isWithdrawFixedIncentiveEvent(type: string): boolean;
export interface WithdrawFixedIncentiveEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}
export type WithdrawFixedIncentiveEventReified = Reified<WithdrawFixedIncentiveEvent, WithdrawFixedIncentiveEventFields>;
export declare class WithdrawFixedIncentiveEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::WithdrawFixedIncentiveEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::WithdrawFixedIncentiveEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::WithdrawFixedIncentiveEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    private constructor();
    static reified(): WithdrawFixedIncentiveEventReified;
    static get r(): reified.StructClassReified<WithdrawFixedIncentiveEvent, WithdrawFixedIncentiveEventFields>;
    static phantom(): PhantomReified<ToTypeStr<WithdrawFixedIncentiveEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_authorized_entry::WithdrawFixedIncentiveEvent">;
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
    static fromFields(fields: Record<string, any>): WithdrawFixedIncentiveEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): WithdrawFixedIncentiveEvent;
    static fromBcs(data: Uint8Array): WithdrawFixedIncentiveEvent;
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
    static fromJSONField(field: any): WithdrawFixedIncentiveEvent;
    static fromJSON(json: Record<string, any>): WithdrawFixedIncentiveEvent;
    static fromSuiParsedData(content: SuiParsedData): WithdrawFixedIncentiveEvent;
    static fetch(client: SuiClient, id: string): Promise<WithdrawFixedIncentiveEvent>;
}
