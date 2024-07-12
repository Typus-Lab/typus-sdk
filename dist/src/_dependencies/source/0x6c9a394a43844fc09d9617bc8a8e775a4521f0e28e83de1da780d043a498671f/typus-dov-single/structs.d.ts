import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Option } from "../../0x1/option/structs";
import { String } from "../../0x1/string/structs";
import { TypeName } from "../../0x1/type-name/structs";
import { UID } from "../../0x2/object/structs";
import { Authority } from "../../0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded/authority/structs";
import { BalancePool } from "../../0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded/balance-pool/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isConfig(type: string): boolean;
export interface ConfigFields {
    oracleId: ToField<"address">;
    depositLotSize: ToField<"u64">;
    bidLotSize: ToField<"u64">;
    minDepositSize: ToField<"u64">;
    minBidSize: ToField<"u64">;
    maxDepositEntry: ToField<"u64">;
    maxBidEntry: ToField<"u64">;
    depositFeeBp: ToField<"u64">;
    depositFeeShareBp: ToField<"u64">;
    depositSharedFeePool: ToField<Option<Vector<"u8">>>;
    bidFeeBp: ToField<"u64">;
    depositIncentiveBp: ToField<"u64">;
    bidIncentiveBp: ToField<"u64">;
    auctionDelayTsMs: ToField<"u64">;
    auctionDurationTsMs: ToField<"u64">;
    recoupDelayTsMs: ToField<"u64">;
    capacity: ToField<"u64">;
    leverage: ToField<"u64">;
    riskLevel: ToField<"u64">;
    hasNext: ToField<"bool">;
    activeVaultConfig: ToField<VaultConfig>;
    warmupVaultConfig: ToField<VaultConfig>;
    u64Padding: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<"u8">>;
}
export type ConfigReified = Reified<Config, ConfigFields>;
export declare class Config implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Config";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Config";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Config";
    readonly $typeArgs: [];
    readonly oracleId: ToField<"address">;
    readonly depositLotSize: ToField<"u64">;
    readonly bidLotSize: ToField<"u64">;
    readonly minDepositSize: ToField<"u64">;
    readonly minBidSize: ToField<"u64">;
    readonly maxDepositEntry: ToField<"u64">;
    readonly maxBidEntry: ToField<"u64">;
    readonly depositFeeBp: ToField<"u64">;
    readonly depositFeeShareBp: ToField<"u64">;
    readonly depositSharedFeePool: ToField<Option<Vector<"u8">>>;
    readonly bidFeeBp: ToField<"u64">;
    readonly depositIncentiveBp: ToField<"u64">;
    readonly bidIncentiveBp: ToField<"u64">;
    readonly auctionDelayTsMs: ToField<"u64">;
    readonly auctionDurationTsMs: ToField<"u64">;
    readonly recoupDelayTsMs: ToField<"u64">;
    readonly capacity: ToField<"u64">;
    readonly leverage: ToField<"u64">;
    readonly riskLevel: ToField<"u64">;
    readonly hasNext: ToField<"bool">;
    readonly activeVaultConfig: ToField<VaultConfig>;
    readonly warmupVaultConfig: ToField<VaultConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<"u8">>;
    private constructor();
    static reified(): ConfigReified;
    static get r(): reified.StructClassReified<Config, ConfigFields>;
    static phantom(): PhantomReified<ToTypeStr<Config>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Config">;
    static get bcs(): import("@mysten/bcs").BcsType<{
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
    }, {
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
    }>;
    static fromFields(fields: Record<string, any>): Config;
    static fromFieldsWithTypes(item: FieldsWithTypes): Config;
    static fromBcs(data: Uint8Array): Config;
    toJSONField(): {
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
    toJSON(): {
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
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Config;
    static fromJSON(json: Record<string, any>): Config;
    static fromSuiParsedData(content: SuiParsedData): Config;
    static fetch(client: SuiClient, id: string): Promise<Config>;
}
export declare function isRegistry(type: string): boolean;
export interface RegistryFields {
    id: ToField<UID>;
    numOfVault: ToField<"u64">;
    authority: ToField<Authority>;
    feePool: ToField<BalancePool>;
    portfolioVaultRegistry: ToField<UID>;
    depositVaultRegistry: ToField<UID>;
    auctionRegistry: ToField<UID>;
    bidVaultRegistry: ToField<UID>;
    refundVaultRegistry: ToField<UID>;
    additionalConfigRegistry: ToField<UID>;
    version: ToField<"u64">;
    transactionSuspended: ToField<"bool">;
}
export type RegistryReified = Reified<Registry, RegistryFields>;
export declare class Registry implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Registry";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Registry";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Registry";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly numOfVault: ToField<"u64">;
    readonly authority: ToField<Authority>;
    readonly feePool: ToField<BalancePool>;
    readonly portfolioVaultRegistry: ToField<UID>;
    readonly depositVaultRegistry: ToField<UID>;
    readonly auctionRegistry: ToField<UID>;
    readonly bidVaultRegistry: ToField<UID>;
    readonly refundVaultRegistry: ToField<UID>;
    readonly additionalConfigRegistry: ToField<UID>;
    readonly version: ToField<"u64">;
    readonly transactionSuspended: ToField<"bool">;
    private constructor();
    static reified(): RegistryReified;
    static get r(): reified.StructClassReified<Registry, RegistryFields>;
    static phantom(): PhantomReified<ToTypeStr<Registry>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Registry">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        num_of_vault: string;
        authority: {
            whitelist: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string;
                head: {
                    vec: any[];
                };
                tail: {
                    vec: any[];
                };
            };
        };
        fee_pool: {
            id: {
                id: {
                    bytes: string;
                };
            };
            balance_infos: {
                token: {
                    name: {
                        bytes: number[];
                    };
                };
                value: string;
            }[];
            authority: {
                whitelist: {
                    id: {
                        id: {
                            bytes: string;
                        };
                    };
                    size: string;
                    head: {
                        vec: any[];
                    };
                    tail: {
                        vec: any[];
                    };
                };
            };
        };
        portfolio_vault_registry: {
            id: {
                bytes: string;
            };
        };
        deposit_vault_registry: {
            id: {
                bytes: string;
            };
        };
        auction_registry: {
            id: {
                bytes: string;
            };
        };
        bid_vault_registry: {
            id: {
                bytes: string;
            };
        };
        refund_vault_registry: {
            id: {
                bytes: string;
            };
        };
        additional_config_registry: {
            id: {
                bytes: string;
            };
        };
        version: string;
        transaction_suspended: boolean;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        num_of_vault: string | number | bigint;
        authority: {
            whitelist: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string | number | bigint;
                head: {
                    vec: Iterable<any> & {
                        length: number;
                    };
                };
                tail: {
                    vec: Iterable<any> & {
                        length: number;
                    };
                };
            };
        };
        fee_pool: {
            id: {
                id: {
                    bytes: string;
                };
            };
            balance_infos: Iterable<{
                token: {
                    name: {
                        bytes: Iterable<number> & {
                            length: number;
                        };
                    };
                };
                value: string | number | bigint;
            }> & {
                length: number;
            };
            authority: {
                whitelist: {
                    id: {
                        id: {
                            bytes: string;
                        };
                    };
                    size: string | number | bigint;
                    head: {
                        vec: Iterable<any> & {
                            length: number;
                        };
                    };
                    tail: {
                        vec: Iterable<any> & {
                            length: number;
                        };
                    };
                };
            };
        };
        portfolio_vault_registry: {
            id: {
                bytes: string;
            };
        };
        deposit_vault_registry: {
            id: {
                bytes: string;
            };
        };
        auction_registry: {
            id: {
                bytes: string;
            };
        };
        bid_vault_registry: {
            id: {
                bytes: string;
            };
        };
        refund_vault_registry: {
            id: {
                bytes: string;
            };
        };
        additional_config_registry: {
            id: {
                bytes: string;
            };
        };
        version: string | number | bigint;
        transaction_suspended: boolean;
    }>;
    static fromFields(fields: Record<string, any>): Registry;
    static fromFieldsWithTypes(item: FieldsWithTypes): Registry;
    static fromBcs(data: Uint8Array): Registry;
    toJSONField(): {
        id: string;
        numOfVault: string;
        authority: {
            whitelist: {
                id: string;
                size: string;
                head: string | null;
                tail: string | null;
            };
        };
        feePool: {
            id: string;
            balanceInfos: {
                token: {
                    name: string;
                };
                value: string;
            }[];
            authority: {
                whitelist: {
                    id: string;
                    size: string;
                    head: string | null;
                    tail: string | null;
                };
            };
        };
        portfolioVaultRegistry: string;
        depositVaultRegistry: string;
        auctionRegistry: string;
        bidVaultRegistry: string;
        refundVaultRegistry: string;
        additionalConfigRegistry: string;
        version: string;
        transactionSuspended: boolean;
    };
    toJSON(): {
        id: string;
        numOfVault: string;
        authority: {
            whitelist: {
                id: string;
                size: string;
                head: string | null;
                tail: string | null;
            };
        };
        feePool: {
            id: string;
            balanceInfos: {
                token: {
                    name: string;
                };
                value: string;
            }[];
            authority: {
                whitelist: {
                    id: string;
                    size: string;
                    head: string | null;
                    tail: string | null;
                };
            };
        };
        portfolioVaultRegistry: string;
        depositVaultRegistry: string;
        auctionRegistry: string;
        bidVaultRegistry: string;
        refundVaultRegistry: string;
        additionalConfigRegistry: string;
        version: string;
        transactionSuspended: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Registry;
    static fromJSON(json: Record<string, any>): Registry;
    static fromSuiParsedData(content: SuiParsedData): Registry;
    static fetch(client: SuiClient, id: string): Promise<Registry>;
}
export declare function isActivateEvent(type: string): boolean;
export interface ActivateEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    depositAmount: ToField<"u64">;
    dTokenDecimal: ToField<"u64">;
    contractSize: ToField<"u64">;
    oTokenDecimal: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}
export type ActivateEventReified = Reified<ActivateEvent, ActivateEventFields>;
export declare class ActivateEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ActivateEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ActivateEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ActivateEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly depositAmount: ToField<"u64">;
    readonly dTokenDecimal: ToField<"u64">;
    readonly contractSize: ToField<"u64">;
    readonly oTokenDecimal: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): ActivateEventReified;
    static get r(): reified.StructClassReified<ActivateEvent, ActivateEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ActivateEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ActivateEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        round: string;
        deposit_amount: string;
        d_token_decimal: string;
        contract_size: string;
        o_token_decimal: string;
        oracle_info: {
            price: string;
            decimal: string;
        };
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        round: string | number | bigint;
        deposit_amount: string | number | bigint;
        d_token_decimal: string | number | bigint;
        contract_size: string | number | bigint;
        o_token_decimal: string | number | bigint;
        oracle_info: {
            price: string | number | bigint;
            decimal: string | number | bigint;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): ActivateEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ActivateEvent;
    static fromBcs(data: Uint8Array): ActivateEvent;
    toJSONField(): {
        signer: string;
        index: string;
        round: string;
        depositAmount: string;
        dTokenDecimal: string;
        contractSize: string;
        oTokenDecimal: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        round: string;
        depositAmount: string;
        dTokenDecimal: string;
        contractSize: string;
        oTokenDecimal: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ActivateEvent;
    static fromJSON(json: Record<string, any>): ActivateEvent;
    static fromSuiParsedData(content: SuiParsedData): ActivateEvent;
    static fetch(client: SuiClient, id: string): Promise<ActivateEvent>;
}
export declare function isAdditionalConfig(type: string): boolean;
export interface AdditionalConfigFields {
    id: ToField<UID>;
}
export type AdditionalConfigReified = Reified<AdditionalConfig, AdditionalConfigFields>;
export declare class AdditionalConfig implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::AdditionalConfig";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::AdditionalConfig";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::AdditionalConfig";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    private constructor();
    static reified(): AdditionalConfigReified;
    static get r(): reified.StructClassReified<AdditionalConfig, AdditionalConfigFields>;
    static phantom(): PhantomReified<ToTypeStr<AdditionalConfig>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::AdditionalConfig">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): AdditionalConfig;
    static fromFieldsWithTypes(item: FieldsWithTypes): AdditionalConfig;
    static fromBcs(data: Uint8Array): AdditionalConfig;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AdditionalConfig;
    static fromJSON(json: Record<string, any>): AdditionalConfig;
    static fromSuiParsedData(content: SuiParsedData): AdditionalConfig;
    static fetch(client: SuiClient, id: string): Promise<AdditionalConfig>;
}
export declare function isClaimEvent(type: string): boolean;
export interface ClaimEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    decimal: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}
export type ClaimEventReified = Reified<ClaimEvent, ClaimEventFields>;
export declare class ClaimEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ClaimEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ClaimEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ClaimEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): ClaimEventReified;
    static get r(): reified.StructClassReified<ClaimEvent, ClaimEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ClaimEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ClaimEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
        decimal: string;
        oracle_info: {
            price: string;
            decimal: string;
        };
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        amount: string | number | bigint;
        decimal: string | number | bigint;
        oracle_info: {
            price: string | number | bigint;
            decimal: string | number | bigint;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): ClaimEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ClaimEvent;
    static fromBcs(data: Uint8Array): ClaimEvent;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        decimal: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        decimal: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ClaimEvent;
    static fromJSON(json: Record<string, any>): ClaimEvent;
    static fromSuiParsedData(content: SuiParsedData): ClaimEvent;
    static fetch(client: SuiClient, id: string): Promise<ClaimEvent>;
}
export declare function isCloseEvent(type: string): boolean;
export interface CloseEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type CloseEventReified = Reified<CloseEvent, CloseEventFields>;
export declare class CloseEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::CloseEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::CloseEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::CloseEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): CloseEventReified;
    static get r(): reified.StructClassReified<CloseEvent, CloseEventFields>;
    static phantom(): PhantomReified<ToTypeStr<CloseEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::CloseEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        round: string;
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        round: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): CloseEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): CloseEvent;
    static fromBcs(data: Uint8Array): CloseEvent;
    toJSONField(): {
        signer: string;
        index: string;
        round: string;
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        round: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): CloseEvent;
    static fromJSON(json: Record<string, any>): CloseEvent;
    static fromSuiParsedData(content: SuiParsedData): CloseEvent;
    static fetch(client: SuiClient, id: string): Promise<CloseEvent>;
}
export declare function isCompoundEvent(type: string): boolean;
export interface CompoundEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    decimal: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}
export type CompoundEventReified = Reified<CompoundEvent, CompoundEventFields>;
export declare class CompoundEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::CompoundEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::CompoundEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::CompoundEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): CompoundEventReified;
    static get r(): reified.StructClassReified<CompoundEvent, CompoundEventFields>;
    static phantom(): PhantomReified<ToTypeStr<CompoundEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::CompoundEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
        decimal: string;
        oracle_info: {
            price: string;
            decimal: string;
        };
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        amount: string | number | bigint;
        decimal: string | number | bigint;
        oracle_info: {
            price: string | number | bigint;
            decimal: string | number | bigint;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): CompoundEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): CompoundEvent;
    static fromBcs(data: Uint8Array): CompoundEvent;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        decimal: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        decimal: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): CompoundEvent;
    static fromJSON(json: Record<string, any>): CompoundEvent;
    static fromSuiParsedData(content: SuiParsedData): CompoundEvent;
    static fetch(client: SuiClient, id: string): Promise<CompoundEvent>;
}
export declare function isDeliveryEvent(type: string): boolean;
export interface DeliveryEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    early: ToField<"bool">;
    deliveryPrice: ToField<"u64">;
    deliverySize: ToField<"u64">;
    oTokenDecimal: ToField<"u64">;
    oToken: ToField<TypeName>;
    bidderBidValue: ToField<"u64">;
    bidderFee: ToField<"u64">;
    incentiveBidValue: ToField<"u64">;
    incentiveFee: ToField<"u64">;
    bTokenDecimal: ToField<"u64">;
    bToken: ToField<TypeName>;
    depositorIncentiveValue: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type DeliveryEventReified = Reified<DeliveryEvent, DeliveryEventFields>;
export declare class DeliveryEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly early: ToField<"bool">;
    readonly deliveryPrice: ToField<"u64">;
    readonly deliverySize: ToField<"u64">;
    readonly oTokenDecimal: ToField<"u64">;
    readonly oToken: ToField<TypeName>;
    readonly bidderBidValue: ToField<"u64">;
    readonly bidderFee: ToField<"u64">;
    readonly incentiveBidValue: ToField<"u64">;
    readonly incentiveFee: ToField<"u64">;
    readonly bTokenDecimal: ToField<"u64">;
    readonly bToken: ToField<TypeName>;
    readonly depositorIncentiveValue: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): DeliveryEventReified;
    static get r(): reified.StructClassReified<DeliveryEvent, DeliveryEventFields>;
    static phantom(): PhantomReified<ToTypeStr<DeliveryEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        round: string;
        early: boolean;
        delivery_price: string;
        delivery_size: string;
        o_token_decimal: string;
        o_token: {
            name: {
                bytes: number[];
            };
        };
        bidder_bid_value: string;
        bidder_fee: string;
        incentive_bid_value: string;
        incentive_fee: string;
        b_token_decimal: string;
        b_token: {
            name: {
                bytes: number[];
            };
        };
        depositor_incentive_value: string;
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        round: string | number | bigint;
        early: boolean;
        delivery_price: string | number | bigint;
        delivery_size: string | number | bigint;
        o_token_decimal: string | number | bigint;
        o_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        bidder_bid_value: string | number | bigint;
        bidder_fee: string | number | bigint;
        incentive_bid_value: string | number | bigint;
        incentive_fee: string | number | bigint;
        b_token_decimal: string | number | bigint;
        b_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        depositor_incentive_value: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): DeliveryEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): DeliveryEvent;
    static fromBcs(data: Uint8Array): DeliveryEvent;
    toJSONField(): {
        signer: string;
        index: string;
        round: string;
        early: boolean;
        deliveryPrice: string;
        deliverySize: string;
        oTokenDecimal: string;
        oToken: {
            name: string;
        };
        bidderBidValue: string;
        bidderFee: string;
        incentiveBidValue: string;
        incentiveFee: string;
        bTokenDecimal: string;
        bToken: {
            name: string;
        };
        depositorIncentiveValue: string;
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        round: string;
        early: boolean;
        deliveryPrice: string;
        deliverySize: string;
        oTokenDecimal: string;
        oToken: {
            name: string;
        };
        bidderBidValue: string;
        bidderFee: string;
        incentiveBidValue: string;
        incentiveFee: string;
        bTokenDecimal: string;
        bToken: {
            name: string;
        };
        depositorIncentiveValue: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DeliveryEvent;
    static fromJSON(json: Record<string, any>): DeliveryEvent;
    static fromSuiParsedData(content: SuiParsedData): DeliveryEvent;
    static fetch(client: SuiClient, id: string): Promise<DeliveryEvent>;
}
export declare function isDeliveryInfo(type: string): boolean;
export interface DeliveryInfoFields {
    auctionType: ToField<"u64">;
    deliveryPrice: ToField<"u64">;
    deliverySize: ToField<"u64">;
    bidderBidValue: ToField<"u64">;
    bidderFee: ToField<"u64">;
    incentiveBidValue: ToField<"u64">;
    incentiveFee: ToField<"u64">;
    tsMs: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type DeliveryInfoReified = Reified<DeliveryInfo, DeliveryInfoFields>;
export declare class DeliveryInfo implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryInfo";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryInfo";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryInfo";
    readonly $typeArgs: [];
    readonly auctionType: ToField<"u64">;
    readonly deliveryPrice: ToField<"u64">;
    readonly deliverySize: ToField<"u64">;
    readonly bidderBidValue: ToField<"u64">;
    readonly bidderFee: ToField<"u64">;
    readonly incentiveBidValue: ToField<"u64">;
    readonly incentiveFee: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): DeliveryInfoReified;
    static get r(): reified.StructClassReified<DeliveryInfo, DeliveryInfoFields>;
    static phantom(): PhantomReified<ToTypeStr<DeliveryInfo>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryInfo">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        auction_type: string;
        delivery_price: string;
        delivery_size: string;
        bidder_bid_value: string;
        bidder_fee: string;
        incentive_bid_value: string;
        incentive_fee: string;
        ts_ms: string;
        u64_padding: string[];
    }, {
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
    }>;
    static fromFields(fields: Record<string, any>): DeliveryInfo;
    static fromFieldsWithTypes(item: FieldsWithTypes): DeliveryInfo;
    static fromBcs(data: Uint8Array): DeliveryInfo;
    toJSONField(): {
        auctionType: string;
        deliveryPrice: string;
        deliverySize: string;
        bidderBidValue: string;
        bidderFee: string;
        incentiveBidValue: string;
        incentiveFee: string;
        tsMs: string;
        u64Padding: string[];
    };
    toJSON(): {
        auctionType: string;
        deliveryPrice: string;
        deliverySize: string;
        bidderBidValue: string;
        bidderFee: string;
        incentiveBidValue: string;
        incentiveFee: string;
        tsMs: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DeliveryInfo;
    static fromJSON(json: Record<string, any>): DeliveryInfo;
    static fromSuiParsedData(content: SuiParsedData): DeliveryInfo;
    static fetch(client: SuiClient, id: string): Promise<DeliveryInfo>;
}
export declare function isDeliveryInfos(type: string): boolean;
export interface DeliveryInfosFields {
    round: ToField<"u64">;
    maxSize: ToField<"u64">;
    totalDeliverySize: ToField<"u64">;
    totalBidderBidValue: ToField<"u64">;
    totalBidderFee: ToField<"u64">;
    totalIncentiveBidValue: ToField<"u64">;
    totalIncentiveFee: ToField<"u64">;
    deliveryInfo: ToField<Vector<DeliveryInfo>>;
    u64Padding: ToField<Vector<"u64">>;
}
export type DeliveryInfosReified = Reified<DeliveryInfos, DeliveryInfosFields>;
export declare class DeliveryInfos implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryInfos";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryInfos";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryInfos";
    readonly $typeArgs: [];
    readonly round: ToField<"u64">;
    readonly maxSize: ToField<"u64">;
    readonly totalDeliverySize: ToField<"u64">;
    readonly totalBidderBidValue: ToField<"u64">;
    readonly totalBidderFee: ToField<"u64">;
    readonly totalIncentiveBidValue: ToField<"u64">;
    readonly totalIncentiveFee: ToField<"u64">;
    readonly deliveryInfo: ToField<Vector<DeliveryInfo>>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): DeliveryInfosReified;
    static get r(): reified.StructClassReified<DeliveryInfos, DeliveryInfosFields>;
    static phantom(): PhantomReified<ToTypeStr<DeliveryInfos>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DeliveryInfos">;
    static get bcs(): import("@mysten/bcs").BcsType<{
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
    }, {
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
    }>;
    static fromFields(fields: Record<string, any>): DeliveryInfos;
    static fromFieldsWithTypes(item: FieldsWithTypes): DeliveryInfos;
    static fromBcs(data: Uint8Array): DeliveryInfos;
    toJSONField(): {
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
    toJSON(): {
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
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DeliveryInfos;
    static fromJSON(json: Record<string, any>): DeliveryInfos;
    static fromSuiParsedData(content: SuiParsedData): DeliveryInfos;
    static fetch(client: SuiClient, id: string): Promise<DeliveryInfos>;
}
export declare function isDepositEvent(type: string): boolean;
export interface DepositEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    decimal: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}
export type DepositEventReified = Reified<DepositEvent, DepositEventFields>;
export declare class DepositEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DepositEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DepositEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DepositEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): DepositEventReified;
    static get r(): reified.StructClassReified<DepositEvent, DepositEventFields>;
    static phantom(): PhantomReified<ToTypeStr<DepositEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DepositEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
        decimal: string;
        oracle_info: {
            price: string;
            decimal: string;
        };
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        amount: string | number | bigint;
        decimal: string | number | bigint;
        oracle_info: {
            price: string | number | bigint;
            decimal: string | number | bigint;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): DepositEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): DepositEvent;
    static fromBcs(data: Uint8Array): DepositEvent;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        decimal: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        decimal: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DepositEvent;
    static fromJSON(json: Record<string, any>): DepositEvent;
    static fromSuiParsedData(content: SuiParsedData): DepositEvent;
    static fetch(client: SuiClient, id: string): Promise<DepositEvent>;
}
export declare function isDepositSnapshot(type: string): boolean;
export interface DepositSnapshotFields {
    snapshots: ToField<Vector<"u64">>;
    totalDeposit: ToField<"u64">;
    snapshotTsMs: ToField<"u64">;
}
export type DepositSnapshotReified = Reified<DepositSnapshot, DepositSnapshotFields>;
export declare class DepositSnapshot implements StructClass {
    static readonly $typeName = "0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::DepositSnapshot";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::DepositSnapshot";
    readonly $fullTypeName: "0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::DepositSnapshot";
    readonly $typeArgs: [];
    readonly snapshots: ToField<Vector<"u64">>;
    readonly totalDeposit: ToField<"u64">;
    readonly snapshotTsMs: ToField<"u64">;
    private constructor();
    static reified(): DepositSnapshotReified;
    static get r(): reified.StructClassReified<DepositSnapshot, DepositSnapshotFields>;
    static phantom(): PhantomReified<ToTypeStr<DepositSnapshot>>;
    static get p(): reified.PhantomReified<"0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::DepositSnapshot">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        snapshots: string[];
        total_deposit: string;
        snapshot_ts_ms: string;
    }, {
        snapshots: Iterable<string | number | bigint> & {
            length: number;
        };
        total_deposit: string | number | bigint;
        snapshot_ts_ms: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): DepositSnapshot;
    static fromFieldsWithTypes(item: FieldsWithTypes): DepositSnapshot;
    static fromBcs(data: Uint8Array): DepositSnapshot;
    toJSONField(): {
        snapshots: string[];
        totalDeposit: string;
        snapshotTsMs: string;
    };
    toJSON(): {
        snapshots: string[];
        totalDeposit: string;
        snapshotTsMs: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DepositSnapshot;
    static fromJSON(json: Record<string, any>): DepositSnapshot;
    static fromSuiParsedData(content: SuiParsedData): DepositSnapshot;
    static fetch(client: SuiClient, id: string): Promise<DepositSnapshot>;
}
export declare function isDropVaultEvent(type: string): boolean;
export interface DropVaultEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type DropVaultEventReified = Reified<DropVaultEvent, DropVaultEventFields>;
export declare class DropVaultEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DropVaultEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DropVaultEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DropVaultEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): DropVaultEventReified;
    static get r(): reified.StructClassReified<DropVaultEvent, DropVaultEventFields>;
    static phantom(): PhantomReified<ToTypeStr<DropVaultEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::DropVaultEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        round: string;
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        round: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): DropVaultEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): DropVaultEvent;
    static fromBcs(data: Uint8Array): DropVaultEvent;
    toJSONField(): {
        signer: string;
        index: string;
        round: string;
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        round: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DropVaultEvent;
    static fromJSON(json: Record<string, any>): DropVaultEvent;
    static fromSuiParsedData(content: SuiParsedData): DropVaultEvent;
    static fetch(client: SuiClient, id: string): Promise<DropVaultEvent>;
}
export declare function isExerciseEvent(type: string): boolean;
export interface ExerciseEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    decimal: ToField<"u64">;
    incentiveToken: ToField<Option<TypeName>>;
    incentiveAmount: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type ExerciseEventReified = Reified<ExerciseEvent, ExerciseEventFields>;
export declare class ExerciseEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ExerciseEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ExerciseEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ExerciseEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly incentiveToken: ToField<Option<TypeName>>;
    readonly incentiveAmount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): ExerciseEventReified;
    static get r(): reified.StructClassReified<ExerciseEvent, ExerciseEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ExerciseEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::ExerciseEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
        decimal: string;
        incentive_token: {
            vec: any[];
        };
        incentive_amount: string;
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        amount: string | number | bigint;
        decimal: string | number | bigint;
        incentive_token: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        incentive_amount: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): ExerciseEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ExerciseEvent;
    static fromBcs(data: Uint8Array): ExerciseEvent;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        decimal: string;
        incentiveToken: {
            name: string;
        } | null;
        incentiveAmount: string;
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        decimal: string;
        incentiveToken: {
            name: string;
        } | null;
        incentiveAmount: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ExerciseEvent;
    static fromJSON(json: Record<string, any>): ExerciseEvent;
    static fromSuiParsedData(content: SuiParsedData): ExerciseEvent;
    static fetch(client: SuiClient, id: string): Promise<ExerciseEvent>;
}
export declare function isHarvestEvent(type: string): boolean;
export interface HarvestEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    feeAmount: ToField<"u64">;
    decimal: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}
export type HarvestEventReified = Reified<HarvestEvent, HarvestEventFields>;
export declare class HarvestEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::HarvestEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::HarvestEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::HarvestEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly feeAmount: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): HarvestEventReified;
    static get r(): reified.StructClassReified<HarvestEvent, HarvestEventFields>;
    static phantom(): PhantomReified<ToTypeStr<HarvestEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::HarvestEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
        fee_amount: string;
        decimal: string;
        oracle_info: {
            price: string;
            decimal: string;
        };
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        amount: string | number | bigint;
        fee_amount: string | number | bigint;
        decimal: string | number | bigint;
        oracle_info: {
            price: string | number | bigint;
            decimal: string | number | bigint;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): HarvestEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): HarvestEvent;
    static fromBcs(data: Uint8Array): HarvestEvent;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        feeAmount: string;
        decimal: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        feeAmount: string;
        decimal: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): HarvestEvent;
    static fromJSON(json: Record<string, any>): HarvestEvent;
    static fromSuiParsedData(content: SuiParsedData): HarvestEvent;
    static fetch(client: SuiClient, id: string): Promise<HarvestEvent>;
}
export declare function isInfo(type: string): boolean;
export interface InfoFields {
    index: ToField<"u64">;
    optionType: ToField<"u64">;
    period: ToField<"u8">;
    activationTsMs: ToField<"u64">;
    expirationTsMs: ToField<"u64">;
    depositToken: ToField<TypeName>;
    bidToken: ToField<TypeName>;
    settlementBase: ToField<TypeName>;
    settlementQuote: ToField<TypeName>;
    settlementBaseName: ToField<String>;
    settlementQuoteName: ToField<String>;
    dTokenDecimal: ToField<"u64">;
    bTokenDecimal: ToField<"u64">;
    oTokenDecimal: ToField<"u64">;
    creator: ToField<"address">;
    createTsMs: ToField<"u64">;
    round: ToField<"u64">;
    status: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    deliveryInfos: ToField<DeliveryInfos>;
    settlementInfo: ToField<Option<SettlementInfo>>;
    u64Padding: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<"u8">>;
}
export type InfoReified = Reified<Info, InfoFields>;
export declare class Info implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Info";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Info";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Info";
    readonly $typeArgs: [];
    readonly index: ToField<"u64">;
    readonly optionType: ToField<"u64">;
    readonly period: ToField<"u8">;
    readonly activationTsMs: ToField<"u64">;
    readonly expirationTsMs: ToField<"u64">;
    readonly depositToken: ToField<TypeName>;
    readonly bidToken: ToField<TypeName>;
    readonly settlementBase: ToField<TypeName>;
    readonly settlementQuote: ToField<TypeName>;
    readonly settlementBaseName: ToField<String>;
    readonly settlementQuoteName: ToField<String>;
    readonly dTokenDecimal: ToField<"u64">;
    readonly bTokenDecimal: ToField<"u64">;
    readonly oTokenDecimal: ToField<"u64">;
    readonly creator: ToField<"address">;
    readonly createTsMs: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly status: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly deliveryInfos: ToField<DeliveryInfos>;
    readonly settlementInfo: ToField<Option<SettlementInfo>>;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<"u8">>;
    private constructor();
    static reified(): InfoReified;
    static get r(): reified.StructClassReified<Info, InfoFields>;
    static phantom(): PhantomReified<ToTypeStr<Info>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::Info">;
    static get bcs(): import("@mysten/bcs").BcsType<{
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
    }, {
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
    }>;
    static fromFields(fields: Record<string, any>): Info;
    static fromFieldsWithTypes(item: FieldsWithTypes): Info;
    static fromBcs(data: Uint8Array): Info;
    toJSONField(): {
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
    toJSON(): {
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
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Info;
    static fromJSON(json: Record<string, any>): Info;
    static fromSuiParsedData(content: SuiParsedData): Info;
    static fetch(client: SuiClient, id: string): Promise<Info>;
}
export declare function isNewAuctionEvent(type: string): boolean;
export interface NewAuctionEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    startTsMs: ToField<"u64">;
    endTsMs: ToField<"u64">;
    size: ToField<"u64">;
    vaultConfig: ToField<VaultConfig>;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}
export type NewAuctionEventReified = Reified<NewAuctionEvent, NewAuctionEventFields>;
export declare class NewAuctionEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::NewAuctionEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::NewAuctionEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::NewAuctionEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly startTsMs: ToField<"u64">;
    readonly endTsMs: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly vaultConfig: ToField<VaultConfig>;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): NewAuctionEventReified;
    static get r(): reified.StructClassReified<NewAuctionEvent, NewAuctionEventFields>;
    static phantom(): PhantomReified<ToTypeStr<NewAuctionEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::NewAuctionEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        round: string;
        start_ts_ms: string;
        end_ts_ms: string;
        size: string;
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
        oracle_info: {
            price: string;
            decimal: string;
        };
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        round: string | number | bigint;
        start_ts_ms: string | number | bigint;
        end_ts_ms: string | number | bigint;
        size: string | number | bigint;
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
        oracle_info: {
            price: string | number | bigint;
            decimal: string | number | bigint;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): NewAuctionEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): NewAuctionEvent;
    static fromBcs(data: Uint8Array): NewAuctionEvent;
    toJSONField(): {
        signer: string;
        index: string;
        round: string;
        startTsMs: string;
        endTsMs: string;
        size: string;
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
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        round: string;
        startTsMs: string;
        endTsMs: string;
        size: string;
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
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NewAuctionEvent;
    static fromJSON(json: Record<string, any>): NewAuctionEvent;
    static fromSuiParsedData(content: SuiParsedData): NewAuctionEvent;
    static fetch(client: SuiClient, id: string): Promise<NewAuctionEvent>;
}
export declare function isNewBidEvent(type: string): boolean;
export interface NewBidEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    bidIndex: ToField<"u64">;
    price: ToField<"u64">;
    size: ToField<"u64">;
    bToken: ToField<TypeName>;
    oToken: ToField<TypeName>;
    bidderBalance: ToField<"u64">;
    incentiveBalance: ToField<"u64">;
    decimal: ToField<"u64">;
    tsMs: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}
export type NewBidEventReified = Reified<NewBidEvent, NewBidEventFields>;
export declare class NewBidEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::NewBidEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::NewBidEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::NewBidEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly bidIndex: ToField<"u64">;
    readonly price: ToField<"u64">;
    readonly size: ToField<"u64">;
    readonly bToken: ToField<TypeName>;
    readonly oToken: ToField<TypeName>;
    readonly bidderBalance: ToField<"u64">;
    readonly incentiveBalance: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): NewBidEventReified;
    static get r(): reified.StructClassReified<NewBidEvent, NewBidEventFields>;
    static phantom(): PhantomReified<ToTypeStr<NewBidEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::NewBidEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        bid_index: string;
        price: string;
        size: string;
        b_token: {
            name: {
                bytes: number[];
            };
        };
        o_token: {
            name: {
                bytes: number[];
            };
        };
        bidder_balance: string;
        incentive_balance: string;
        decimal: string;
        ts_ms: string;
        oracle_info: {
            price: string;
            decimal: string;
        };
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        bid_index: string | number | bigint;
        price: string | number | bigint;
        size: string | number | bigint;
        b_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        o_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        bidder_balance: string | number | bigint;
        incentive_balance: string | number | bigint;
        decimal: string | number | bigint;
        ts_ms: string | number | bigint;
        oracle_info: {
            price: string | number | bigint;
            decimal: string | number | bigint;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): NewBidEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): NewBidEvent;
    static fromBcs(data: Uint8Array): NewBidEvent;
    toJSONField(): {
        signer: string;
        index: string;
        bidIndex: string;
        price: string;
        size: string;
        bToken: {
            name: string;
        };
        oToken: {
            name: string;
        };
        bidderBalance: string;
        incentiveBalance: string;
        decimal: string;
        tsMs: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        bidIndex: string;
        price: string;
        size: string;
        bToken: {
            name: string;
        };
        oToken: {
            name: string;
        };
        bidderBalance: string;
        incentiveBalance: string;
        decimal: string;
        tsMs: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NewBidEvent;
    static fromJSON(json: Record<string, any>): NewBidEvent;
    static fromSuiParsedData(content: SuiParsedData): NewBidEvent;
    static fetch(client: SuiClient, id: string): Promise<NewBidEvent>;
}
export declare function isOracleInfo(type: string): boolean;
export interface OracleInfoFields {
    price: ToField<"u64">;
    decimal: ToField<"u64">;
}
export type OracleInfoReified = Reified<OracleInfo, OracleInfoFields>;
export declare class OracleInfo implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::OracleInfo";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::OracleInfo";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::OracleInfo";
    readonly $typeArgs: [];
    readonly price: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    private constructor();
    static reified(): OracleInfoReified;
    static get r(): reified.StructClassReified<OracleInfo, OracleInfoFields>;
    static phantom(): PhantomReified<ToTypeStr<OracleInfo>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::OracleInfo">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        price: string;
        decimal: string;
    }, {
        price: string | number | bigint;
        decimal: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): OracleInfo;
    static fromFieldsWithTypes(item: FieldsWithTypes): OracleInfo;
    static fromBcs(data: Uint8Array): OracleInfo;
    toJSONField(): {
        price: string;
        decimal: string;
    };
    toJSON(): {
        price: string;
        decimal: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): OracleInfo;
    static fromJSON(json: Record<string, any>): OracleInfo;
    static fromSuiParsedData(content: SuiParsedData): OracleInfo;
    static fetch(client: SuiClient, id: string): Promise<OracleInfo>;
}
export declare function isOtcEvent(type: string): boolean;
export interface OtcEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    deliveryPrice: ToField<"u64">;
    deliverySize: ToField<"u64">;
    oTokenDecimal: ToField<"u64">;
    bidderBidValue: ToField<"u64">;
    bidderFee: ToField<"u64">;
    incentiveBidValue: ToField<"u64">;
    incentiveFee: ToField<"u64">;
    bTokenDecimal: ToField<"u64">;
    depositorIncentiveValue: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type OtcEventReified = Reified<OtcEvent, OtcEventFields>;
export declare class OtcEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::OtcEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::OtcEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::OtcEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly deliveryPrice: ToField<"u64">;
    readonly deliverySize: ToField<"u64">;
    readonly oTokenDecimal: ToField<"u64">;
    readonly bidderBidValue: ToField<"u64">;
    readonly bidderFee: ToField<"u64">;
    readonly incentiveBidValue: ToField<"u64">;
    readonly incentiveFee: ToField<"u64">;
    readonly bTokenDecimal: ToField<"u64">;
    readonly depositorIncentiveValue: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): OtcEventReified;
    static get r(): reified.StructClassReified<OtcEvent, OtcEventFields>;
    static phantom(): PhantomReified<ToTypeStr<OtcEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::OtcEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        round: string;
        delivery_price: string;
        delivery_size: string;
        o_token_decimal: string;
        bidder_bid_value: string;
        bidder_fee: string;
        incentive_bid_value: string;
        incentive_fee: string;
        b_token_decimal: string;
        depositor_incentive_value: string;
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        round: string | number | bigint;
        delivery_price: string | number | bigint;
        delivery_size: string | number | bigint;
        o_token_decimal: string | number | bigint;
        bidder_bid_value: string | number | bigint;
        bidder_fee: string | number | bigint;
        incentive_bid_value: string | number | bigint;
        incentive_fee: string | number | bigint;
        b_token_decimal: string | number | bigint;
        depositor_incentive_value: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): OtcEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): OtcEvent;
    static fromBcs(data: Uint8Array): OtcEvent;
    toJSONField(): {
        signer: string;
        index: string;
        round: string;
        deliveryPrice: string;
        deliverySize: string;
        oTokenDecimal: string;
        bidderBidValue: string;
        bidderFee: string;
        incentiveBidValue: string;
        incentiveFee: string;
        bTokenDecimal: string;
        depositorIncentiveValue: string;
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        round: string;
        deliveryPrice: string;
        deliverySize: string;
        oTokenDecimal: string;
        bidderBidValue: string;
        bidderFee: string;
        incentiveBidValue: string;
        incentiveFee: string;
        bTokenDecimal: string;
        depositorIncentiveValue: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): OtcEvent;
    static fromJSON(json: Record<string, any>): OtcEvent;
    static fromSuiParsedData(content: SuiParsedData): OtcEvent;
    static fetch(client: SuiClient, id: string): Promise<OtcEvent>;
}
export declare function isPayoffConfig(type: string): boolean;
export interface PayoffConfigFields {
    strikeBp: ToField<"u64">;
    weight: ToField<"u64">;
    isBuyer: ToField<"bool">;
    strike: ToField<Option<"u64">>;
    u64Padding: ToField<Vector<"u64">>;
}
export type PayoffConfigReified = Reified<PayoffConfig, PayoffConfigFields>;
export declare class PayoffConfig implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::PayoffConfig";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::PayoffConfig";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::PayoffConfig";
    readonly $typeArgs: [];
    readonly strikeBp: ToField<"u64">;
    readonly weight: ToField<"u64">;
    readonly isBuyer: ToField<"bool">;
    readonly strike: ToField<Option<"u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): PayoffConfigReified;
    static get r(): reified.StructClassReified<PayoffConfig, PayoffConfigFields>;
    static phantom(): PhantomReified<ToTypeStr<PayoffConfig>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::PayoffConfig">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        strike_bp: string;
        weight: string;
        is_buyer: boolean;
        strike: {
            vec: any[];
        };
        u64_padding: string[];
    }, {
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
    }>;
    static fromFields(fields: Record<string, any>): PayoffConfig;
    static fromFieldsWithTypes(item: FieldsWithTypes): PayoffConfig;
    static fromBcs(data: Uint8Array): PayoffConfig;
    toJSONField(): {
        strikeBp: string;
        weight: string;
        isBuyer: boolean;
        strike: string | null;
        u64Padding: string[];
    };
    toJSON(): {
        strikeBp: string;
        weight: string;
        isBuyer: boolean;
        strike: string | null;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PayoffConfig;
    static fromJSON(json: Record<string, any>): PayoffConfig;
    static fromSuiParsedData(content: SuiParsedData): PayoffConfig;
    static fetch(client: SuiClient, id: string): Promise<PayoffConfig>;
}
export declare function isPortfolioVault(type: string): boolean;
export interface PortfolioVaultFields {
    id: ToField<UID>;
    info: ToField<Info>;
    config: ToField<Config>;
    authority: ToField<Authority>;
}
export type PortfolioVaultReified = Reified<PortfolioVault, PortfolioVaultFields>;
export declare class PortfolioVault implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::PortfolioVault";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::PortfolioVault";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::PortfolioVault";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly info: ToField<Info>;
    readonly config: ToField<Config>;
    readonly authority: ToField<Authority>;
    private constructor();
    static reified(): PortfolioVaultReified;
    static get r(): reified.StructClassReified<PortfolioVault, PortfolioVaultFields>;
    static phantom(): PhantomReified<ToTypeStr<PortfolioVault>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::PortfolioVault">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
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
        authority: {
            whitelist: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string;
                head: {
                    vec: any[];
                };
                tail: {
                    vec: any[];
                };
            };
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
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
        authority: {
            whitelist: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string | number | bigint;
                head: {
                    vec: Iterable<any> & {
                        length: number;
                    };
                };
                tail: {
                    vec: Iterable<any> & {
                        length: number;
                    };
                };
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): PortfolioVault;
    static fromFieldsWithTypes(item: FieldsWithTypes): PortfolioVault;
    static fromBcs(data: Uint8Array): PortfolioVault;
    toJSONField(): {
        id: string;
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
        authority: {
            whitelist: {
                id: string;
                size: string;
                head: string | null;
                tail: string | null;
            };
        };
    };
    toJSON(): {
        id: string;
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
        authority: {
            whitelist: {
                id: string;
                size: string;
                head: string | null;
                tail: string | null;
            };
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PortfolioVault;
    static fromJSON(json: Record<string, any>): PortfolioVault;
    static fromSuiParsedData(content: SuiParsedData): PortfolioVault;
    static fetch(client: SuiClient, id: string): Promise<PortfolioVault>;
}
export declare function isRaiseFundEvent(type: string): boolean;
export interface RaiseFundEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    log: ToField<Vector<"u64">>;
}
export type RaiseFundEventReified = Reified<RaiseFundEvent, RaiseFundEventFields>;
export declare class RaiseFundEvent implements StructClass {
    static readonly $typeName = "0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::RaiseFundEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::RaiseFundEvent";
    readonly $fullTypeName: "0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::RaiseFundEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly log: ToField<Vector<"u64">>;
    private constructor();
    static reified(): RaiseFundEventReified;
    static get r(): reified.StructClassReified<RaiseFundEvent, RaiseFundEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RaiseFundEvent>>;
    static get p(): reified.PhantomReified<"0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::RaiseFundEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        log: string[];
    }, {
        signer: string;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        log: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RaiseFundEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RaiseFundEvent;
    static fromBcs(data: Uint8Array): RaiseFundEvent;
    toJSONField(): {
        signer: string;
        token: {
            name: string;
        };
        log: string[];
    };
    toJSON(): {
        signer: string;
        token: {
            name: string;
        };
        log: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RaiseFundEvent;
    static fromJSON(json: Record<string, any>): RaiseFundEvent;
    static fromSuiParsedData(content: SuiParsedData): RaiseFundEvent;
    static fetch(client: SuiClient, id: string): Promise<RaiseFundEvent>;
}
export declare function isRecoupEvent(type: string): boolean;
export interface RecoupEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    activeAmount: ToField<"u64">;
    deactivatingAmount: ToField<"u64">;
    dTokenDecimal: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type RecoupEventReified = Reified<RecoupEvent, RecoupEventFields>;
export declare class RecoupEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RecoupEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RecoupEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RecoupEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly activeAmount: ToField<"u64">;
    readonly deactivatingAmount: ToField<"u64">;
    readonly dTokenDecimal: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): RecoupEventReified;
    static get r(): reified.StructClassReified<RecoupEvent, RecoupEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RecoupEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RecoupEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        round: string;
        active_amount: string;
        deactivating_amount: string;
        d_token_decimal: string;
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        round: string | number | bigint;
        active_amount: string | number | bigint;
        deactivating_amount: string | number | bigint;
        d_token_decimal: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RecoupEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RecoupEvent;
    static fromBcs(data: Uint8Array): RecoupEvent;
    toJSONField(): {
        signer: string;
        index: string;
        round: string;
        activeAmount: string;
        deactivatingAmount: string;
        dTokenDecimal: string;
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        round: string;
        activeAmount: string;
        deactivatingAmount: string;
        dTokenDecimal: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RecoupEvent;
    static fromJSON(json: Record<string, any>): RecoupEvent;
    static fromSuiParsedData(content: SuiParsedData): RecoupEvent;
    static fetch(client: SuiClient, id: string): Promise<RecoupEvent>;
}
export declare function isRedeemEvent(type: string): boolean;
export interface RedeemEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}
export type RedeemEventReified = Reified<RedeemEvent, RedeemEventFields>;
export declare class RedeemEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RedeemEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RedeemEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RedeemEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): RedeemEventReified;
    static get r(): reified.StructClassReified<RedeemEvent, RedeemEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RedeemEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RedeemEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
        oracle_info: {
            price: string;
            decimal: string;
        };
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        amount: string | number | bigint;
        oracle_info: {
            price: string | number | bigint;
            decimal: string | number | bigint;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RedeemEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RedeemEvent;
    static fromBcs(data: Uint8Array): RedeemEvent;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RedeemEvent;
    static fromJSON(json: Record<string, any>): RedeemEvent;
    static fromSuiParsedData(content: SuiParsedData): RedeemEvent;
    static fetch(client: SuiClient, id: string): Promise<RedeemEvent>;
}
export declare function isReduceFundEvent(type: string): boolean;
export interface ReduceFundEventFields {
    signer: ToField<"address">;
    dToken: ToField<TypeName>;
    bToken: ToField<TypeName>;
    iToken: ToField<TypeName>;
    log: ToField<Vector<"u64">>;
}
export type ReduceFundEventReified = Reified<ReduceFundEvent, ReduceFundEventFields>;
export declare class ReduceFundEvent implements StructClass {
    static readonly $typeName = "0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::ReduceFundEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::ReduceFundEvent";
    readonly $fullTypeName: "0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::ReduceFundEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly dToken: ToField<TypeName>;
    readonly bToken: ToField<TypeName>;
    readonly iToken: ToField<TypeName>;
    readonly log: ToField<Vector<"u64">>;
    private constructor();
    static reified(): ReduceFundEventReified;
    static get r(): reified.StructClassReified<ReduceFundEvent, ReduceFundEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ReduceFundEvent>>;
    static get p(): reified.PhantomReified<"0x10250db78795fda6ce62b76efa324eb1a7dc50beeed1229fba40c50e4305ef9a::typus_dov_single::ReduceFundEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        d_token: {
            name: {
                bytes: number[];
            };
        };
        b_token: {
            name: {
                bytes: number[];
            };
        };
        i_token: {
            name: {
                bytes: number[];
            };
        };
        log: string[];
    }, {
        signer: string;
        d_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        b_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        i_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        log: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): ReduceFundEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ReduceFundEvent;
    static fromBcs(data: Uint8Array): ReduceFundEvent;
    toJSONField(): {
        signer: string;
        dToken: {
            name: string;
        };
        bToken: {
            name: string;
        };
        iToken: {
            name: string;
        };
        log: string[];
    };
    toJSON(): {
        signer: string;
        dToken: {
            name: string;
        };
        bToken: {
            name: string;
        };
        iToken: {
            name: string;
        };
        log: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ReduceFundEvent;
    static fromJSON(json: Record<string, any>): ReduceFundEvent;
    static fromSuiParsedData(content: SuiParsedData): ReduceFundEvent;
    static fetch(client: SuiClient, id: string): Promise<ReduceFundEvent>;
}
export declare function isRefundEvent(type: string): boolean;
export interface RefundEventFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type RefundEventReified = Reified<RefundEvent, RefundEventFields>;
export declare class RefundEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RefundEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RefundEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RefundEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): RefundEventReified;
    static get r(): reified.StructClassReified<RefundEvent, RefundEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RefundEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::RefundEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
        u64_padding: string[];
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
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RefundEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RefundEvent;
    static fromBcs(data: Uint8Array): RefundEvent;
    toJSONField(): {
        signer: string;
        token: {
            name: string;
        };
        amount: string;
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        token: {
            name: string;
        };
        amount: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RefundEvent;
    static fromJSON(json: Record<string, any>): RefundEvent;
    static fromSuiParsedData(content: SuiParsedData): RefundEvent;
    static fetch(client: SuiClient, id: string): Promise<RefundEvent>;
}
export declare function isSettleEvent(type: string): boolean;
export interface SettleEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    oraclePrice: ToField<"u64">;
    oraclePriceDecimal: ToField<"u64">;
    settleBalance: ToField<"u64">;
    settledBalance: ToField<"u64">;
    dTokenDecimal: ToField<"u64">;
    dToken: ToField<TypeName>;
    sharePrice: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type SettleEventReified = Reified<SettleEvent, SettleEventFields>;
export declare class SettleEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::SettleEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::SettleEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::SettleEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly oraclePrice: ToField<"u64">;
    readonly oraclePriceDecimal: ToField<"u64">;
    readonly settleBalance: ToField<"u64">;
    readonly settledBalance: ToField<"u64">;
    readonly dTokenDecimal: ToField<"u64">;
    readonly dToken: ToField<TypeName>;
    readonly sharePrice: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): SettleEventReified;
    static get r(): reified.StructClassReified<SettleEvent, SettleEventFields>;
    static phantom(): PhantomReified<ToTypeStr<SettleEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::SettleEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        round: string;
        oracle_price: string;
        oracle_price_decimal: string;
        settle_balance: string;
        settled_balance: string;
        d_token_decimal: string;
        d_token: {
            name: {
                bytes: number[];
            };
        };
        share_price: string;
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        round: string | number | bigint;
        oracle_price: string | number | bigint;
        oracle_price_decimal: string | number | bigint;
        settle_balance: string | number | bigint;
        settled_balance: string | number | bigint;
        d_token_decimal: string | number | bigint;
        d_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        share_price: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): SettleEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): SettleEvent;
    static fromBcs(data: Uint8Array): SettleEvent;
    toJSONField(): {
        signer: string;
        index: string;
        round: string;
        oraclePrice: string;
        oraclePriceDecimal: string;
        settleBalance: string;
        settledBalance: string;
        dTokenDecimal: string;
        dToken: {
            name: string;
        };
        sharePrice: string;
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        round: string;
        oraclePrice: string;
        oraclePriceDecimal: string;
        settleBalance: string;
        settledBalance: string;
        dTokenDecimal: string;
        dToken: {
            name: string;
        };
        sharePrice: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SettleEvent;
    static fromJSON(json: Record<string, any>): SettleEvent;
    static fromSuiParsedData(content: SuiParsedData): SettleEvent;
    static fetch(client: SuiClient, id: string): Promise<SettleEvent>;
}
export declare function isSettlementInfo(type: string): boolean;
export interface SettlementInfoFields {
    round: ToField<"u64">;
    oraclePrice: ToField<"u64">;
    oraclePriceDecimal: ToField<"u64">;
    settleBalance: ToField<"u64">;
    settledBalance: ToField<"u64">;
    sharePrice: ToField<"u64">;
    sharePriceDecimal: ToField<"u64">;
    tsMs: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type SettlementInfoReified = Reified<SettlementInfo, SettlementInfoFields>;
export declare class SettlementInfo implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::SettlementInfo";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::SettlementInfo";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::SettlementInfo";
    readonly $typeArgs: [];
    readonly round: ToField<"u64">;
    readonly oraclePrice: ToField<"u64">;
    readonly oraclePriceDecimal: ToField<"u64">;
    readonly settleBalance: ToField<"u64">;
    readonly settledBalance: ToField<"u64">;
    readonly sharePrice: ToField<"u64">;
    readonly sharePriceDecimal: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): SettlementInfoReified;
    static get r(): reified.StructClassReified<SettlementInfo, SettlementInfoFields>;
    static phantom(): PhantomReified<ToTypeStr<SettlementInfo>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::SettlementInfo">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        round: string;
        oracle_price: string;
        oracle_price_decimal: string;
        settle_balance: string;
        settled_balance: string;
        share_price: string;
        share_price_decimal: string;
        ts_ms: string;
        u64_padding: string[];
    }, {
        round: string | number | bigint;
        oracle_price: string | number | bigint;
        oracle_price_decimal: string | number | bigint;
        settle_balance: string | number | bigint;
        settled_balance: string | number | bigint;
        share_price: string | number | bigint;
        share_price_decimal: string | number | bigint;
        ts_ms: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): SettlementInfo;
    static fromFieldsWithTypes(item: FieldsWithTypes): SettlementInfo;
    static fromBcs(data: Uint8Array): SettlementInfo;
    toJSONField(): {
        round: string;
        oraclePrice: string;
        oraclePriceDecimal: string;
        settleBalance: string;
        settledBalance: string;
        sharePrice: string;
        sharePriceDecimal: string;
        tsMs: string;
        u64Padding: string[];
    };
    toJSON(): {
        round: string;
        oraclePrice: string;
        oraclePriceDecimal: string;
        settleBalance: string;
        settledBalance: string;
        sharePrice: string;
        sharePriceDecimal: string;
        tsMs: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SettlementInfo;
    static fromJSON(json: Record<string, any>): SettlementInfo;
    static fromSuiParsedData(content: SuiParsedData): SettlementInfo;
    static fetch(client: SuiClient, id: string): Promise<SettlementInfo>;
}
export declare function isTYPUS_DOV_SINGLE(type: string): boolean;
export interface TYPUS_DOV_SINGLEFields {
    dummyField: ToField<"bool">;
}
export type TYPUS_DOV_SINGLEReified = Reified<TYPUS_DOV_SINGLE, TYPUS_DOV_SINGLEFields>;
export declare class TYPUS_DOV_SINGLE implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TYPUS_DOV_SINGLE";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TYPUS_DOV_SINGLE";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TYPUS_DOV_SINGLE";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): TYPUS_DOV_SINGLEReified;
    static get r(): reified.StructClassReified<TYPUS_DOV_SINGLE, TYPUS_DOV_SINGLEFields>;
    static phantom(): PhantomReified<ToTypeStr<TYPUS_DOV_SINGLE>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TYPUS_DOV_SINGLE">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): TYPUS_DOV_SINGLE;
    static fromFieldsWithTypes(item: FieldsWithTypes): TYPUS_DOV_SINGLE;
    static fromBcs(data: Uint8Array): TYPUS_DOV_SINGLE;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TYPUS_DOV_SINGLE;
    static fromJSON(json: Record<string, any>): TYPUS_DOV_SINGLE;
    static fromSuiParsedData(content: SuiParsedData): TYPUS_DOV_SINGLE;
    static fetch(client: SuiClient, id: string): Promise<TYPUS_DOV_SINGLE>;
}
export declare function isTerminateAuctionEvent(type: string): boolean;
export interface TerminateAuctionEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type TerminateAuctionEventReified = Reified<TerminateAuctionEvent, TerminateAuctionEventFields>;
export declare class TerminateAuctionEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TerminateAuctionEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TerminateAuctionEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TerminateAuctionEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): TerminateAuctionEventReified;
    static get r(): reified.StructClassReified<TerminateAuctionEvent, TerminateAuctionEventFields>;
    static phantom(): PhantomReified<ToTypeStr<TerminateAuctionEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TerminateAuctionEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        round: string;
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        round: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): TerminateAuctionEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): TerminateAuctionEvent;
    static fromBcs(data: Uint8Array): TerminateAuctionEvent;
    toJSONField(): {
        signer: string;
        index: string;
        round: string;
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        round: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TerminateAuctionEvent;
    static fromJSON(json: Record<string, any>): TerminateAuctionEvent;
    static fromSuiParsedData(content: SuiParsedData): TerminateAuctionEvent;
    static fetch(client: SuiClient, id: string): Promise<TerminateAuctionEvent>;
}
export declare function isTerminateVaultEvent(type: string): boolean;
export interface TerminateVaultEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    round: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type TerminateVaultEventReified = Reified<TerminateVaultEvent, TerminateVaultEventFields>;
export declare class TerminateVaultEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TerminateVaultEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TerminateVaultEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TerminateVaultEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly round: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): TerminateVaultEventReified;
    static get r(): reified.StructClassReified<TerminateVaultEvent, TerminateVaultEventFields>;
    static phantom(): PhantomReified<ToTypeStr<TerminateVaultEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TerminateVaultEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        round: string;
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        round: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): TerminateVaultEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): TerminateVaultEvent;
    static fromBcs(data: Uint8Array): TerminateVaultEvent;
    toJSONField(): {
        signer: string;
        index: string;
        round: string;
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        round: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TerminateVaultEvent;
    static fromJSON(json: Record<string, any>): TerminateVaultEvent;
    static fromSuiParsedData(content: SuiParsedData): TerminateVaultEvent;
    static fetch(client: SuiClient, id: string): Promise<TerminateVaultEvent>;
}
export declare function isTransferBidReceiptEvent(type: string): boolean;
export interface TransferBidReceiptEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    amount: ToField<"u64">;
    decimal: ToField<"u64">;
    recipient: ToField<"address">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}
export type TransferBidReceiptEventReified = Reified<TransferBidReceiptEvent, TransferBidReceiptEventFields>;
export declare class TransferBidReceiptEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TransferBidReceiptEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TransferBidReceiptEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TransferBidReceiptEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly amount: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly recipient: ToField<"address">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): TransferBidReceiptEventReified;
    static get r(): reified.StructClassReified<TransferBidReceiptEvent, TransferBidReceiptEventFields>;
    static phantom(): PhantomReified<ToTypeStr<TransferBidReceiptEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::TransferBidReceiptEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        amount: string;
        decimal: string;
        recipient: string;
        oracle_info: {
            price: string;
            decimal: string;
        };
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        amount: string | number | bigint;
        decimal: string | number | bigint;
        recipient: string;
        oracle_info: {
            price: string | number | bigint;
            decimal: string | number | bigint;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): TransferBidReceiptEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): TransferBidReceiptEvent;
    static fromBcs(data: Uint8Array): TransferBidReceiptEvent;
    toJSONField(): {
        signer: string;
        index: string;
        amount: string;
        decimal: string;
        recipient: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        amount: string;
        decimal: string;
        recipient: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TransferBidReceiptEvent;
    static fromJSON(json: Record<string, any>): TransferBidReceiptEvent;
    static fromSuiParsedData(content: SuiParsedData): TransferBidReceiptEvent;
    static fetch(client: SuiClient, id: string): Promise<TransferBidReceiptEvent>;
}
export declare function isUnsubscribeEvent(type: string): boolean;
export interface UnsubscribeEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    decimal: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}
export type UnsubscribeEventReified = Reified<UnsubscribeEvent, UnsubscribeEventFields>;
export declare class UnsubscribeEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::UnsubscribeEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::UnsubscribeEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::UnsubscribeEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): UnsubscribeEventReified;
    static get r(): reified.StructClassReified<UnsubscribeEvent, UnsubscribeEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UnsubscribeEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::UnsubscribeEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
        decimal: string;
        oracle_info: {
            price: string;
            decimal: string;
        };
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        amount: string | number | bigint;
        decimal: string | number | bigint;
        oracle_info: {
            price: string | number | bigint;
            decimal: string | number | bigint;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): UnsubscribeEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UnsubscribeEvent;
    static fromBcs(data: Uint8Array): UnsubscribeEvent;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        decimal: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        decimal: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UnsubscribeEvent;
    static fromJSON(json: Record<string, any>): UnsubscribeEvent;
    static fromSuiParsedData(content: SuiParsedData): UnsubscribeEvent;
    static fetch(client: SuiClient, id: string): Promise<UnsubscribeEvent>;
}
export declare function isVaultConfig(type: string): boolean;
export interface VaultConfigFields {
    payoffConfigs: ToField<Vector<PayoffConfig>>;
    strikeIncrement: ToField<"u64">;
    decaySpeed: ToField<"u64">;
    initialPrice: ToField<"u64">;
    finalPrice: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type VaultConfigReified = Reified<VaultConfig, VaultConfigFields>;
export declare class VaultConfig implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::VaultConfig";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::VaultConfig";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::VaultConfig";
    readonly $typeArgs: [];
    readonly payoffConfigs: ToField<Vector<PayoffConfig>>;
    readonly strikeIncrement: ToField<"u64">;
    readonly decaySpeed: ToField<"u64">;
    readonly initialPrice: ToField<"u64">;
    readonly finalPrice: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): VaultConfigReified;
    static get r(): reified.StructClassReified<VaultConfig, VaultConfigFields>;
    static phantom(): PhantomReified<ToTypeStr<VaultConfig>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::VaultConfig">;
    static get bcs(): import("@mysten/bcs").BcsType<{
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
    }, {
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
    }>;
    static fromFields(fields: Record<string, any>): VaultConfig;
    static fromFieldsWithTypes(item: FieldsWithTypes): VaultConfig;
    static fromBcs(data: Uint8Array): VaultConfig;
    toJSONField(): {
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
    toJSON(): {
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
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): VaultConfig;
    static fromJSON(json: Record<string, any>): VaultConfig;
    static fromSuiParsedData(content: SuiParsedData): VaultConfig;
    static fetch(client: SuiClient, id: string): Promise<VaultConfig>;
}
export declare function isWithdrawEvent(type: string): boolean;
export interface WithdrawEventFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    decimal: ToField<"u64">;
    oracleInfo: ToField<OracleInfo>;
    u64Padding: ToField<Vector<"u64">>;
}
export type WithdrawEventReified = Reified<WithdrawEvent, WithdrawEventFields>;
export declare class WithdrawEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::WithdrawEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::WithdrawEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::WithdrawEvent";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly decimal: ToField<"u64">;
    readonly oracleInfo: ToField<OracleInfo>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): WithdrawEventReified;
    static get r(): reified.StructClassReified<WithdrawEvent, WithdrawEventFields>;
    static phantom(): PhantomReified<ToTypeStr<WithdrawEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::typus_dov_single::WithdrawEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
        decimal: string;
        oracle_info: {
            price: string;
            decimal: string;
        };
        u64_padding: string[];
    }, {
        signer: string;
        index: string | number | bigint;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        amount: string | number | bigint;
        decimal: string | number | bigint;
        oracle_info: {
            price: string | number | bigint;
            decimal: string | number | bigint;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): WithdrawEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): WithdrawEvent;
    static fromBcs(data: Uint8Array): WithdrawEvent;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        decimal: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        decimal: string;
        oracleInfo: {
            price: string;
            decimal: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): WithdrawEvent;
    static fromJSON(json: Record<string, any>): WithdrawEvent;
    static fromSuiParsedData(content: SuiParsedData): WithdrawEvent;
    static fetch(client: SuiClient, id: string): Promise<WithdrawEvent>;
}
