import * as reified from "../../_framework/reified";
import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import { UID } from "../../_dependencies/source/0x2/object/structs";
import { VecMap } from "../../_dependencies/source/0x2/vec-map/structs";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../_framework/reified";
import { FieldsWithTypes } from "../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isUnsubscribeEvent(type: string): boolean;
export interface UnsubscribeEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    lpTokenType: ToField<TypeName>;
    userShareId: ToField<"u64">;
    unsubscribedShares: ToField<"u64">;
    unsubscribeTsMs: ToField<"u64">;
    unlockedTsMs: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type UnsubscribeEventReified = Reified<UnsubscribeEvent, UnsubscribeEventFields>;
export declare class UnsubscribeEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UnsubscribeEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UnsubscribeEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UnsubscribeEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly lpTokenType: ToField<TypeName>;
    readonly userShareId: ToField<"u64">;
    readonly unsubscribedShares: ToField<"u64">;
    readonly unsubscribeTsMs: ToField<"u64">;
    readonly unlockedTsMs: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): UnsubscribeEventReified;
    static get r(): reified.StructClassReified<UnsubscribeEvent, UnsubscribeEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UnsubscribeEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UnsubscribeEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        lp_token_type: {
            name: {
                bytes: number[];
            };
        };
        user_share_id: string;
        unsubscribed_shares: string;
        unsubscribe_ts_ms: string;
        unlocked_ts_ms: string;
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        lp_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        user_share_id: string | number | bigint;
        unsubscribed_shares: string | number | bigint;
        unsubscribe_ts_ms: string | number | bigint;
        unlocked_ts_ms: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): UnsubscribeEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UnsubscribeEvent;
    static fromBcs(data: Uint8Array): UnsubscribeEvent;
    toJSONField(): {
        sender: string;
        index: string;
        lpTokenType: {
            name: string;
        };
        userShareId: string;
        unsubscribedShares: string;
        unsubscribeTsMs: string;
        unlockedTsMs: string;
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        lpTokenType: {
            name: string;
        };
        userShareId: string;
        unsubscribedShares: string;
        unsubscribeTsMs: string;
        unlockedTsMs: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UnsubscribeEvent;
    static fromJSON(json: Record<string, any>): UnsubscribeEvent;
    static fromSuiParsedData(content: SuiParsedData): UnsubscribeEvent;
    static fetch(client: SuiClient, id: string): Promise<UnsubscribeEvent>;
}
export declare function isActivateIncentiveTokenEvent(type: string): boolean;
export interface ActivateIncentiveTokenEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    incentiveToken: ToField<TypeName>;
    u64Padding: ToField<Vector<"u64">>;
}
export type ActivateIncentiveTokenEventReified = Reified<ActivateIncentiveTokenEvent, ActivateIncentiveTokenEventFields>;
export declare class ActivateIncentiveTokenEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::ActivateIncentiveTokenEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::ActivateIncentiveTokenEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::ActivateIncentiveTokenEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly incentiveToken: ToField<TypeName>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): ActivateIncentiveTokenEventReified;
    static get r(): reified.StructClassReified<ActivateIncentiveTokenEvent, ActivateIncentiveTokenEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ActivateIncentiveTokenEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::ActivateIncentiveTokenEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        incentive_token: {
            name: {
                bytes: number[];
            };
        };
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        incentive_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): ActivateIncentiveTokenEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ActivateIncentiveTokenEvent;
    static fromBcs(data: Uint8Array): ActivateIncentiveTokenEvent;
    toJSONField(): {
        sender: string;
        index: string;
        incentiveToken: {
            name: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        incentiveToken: {
            name: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ActivateIncentiveTokenEvent;
    static fromJSON(json: Record<string, any>): ActivateIncentiveTokenEvent;
    static fromSuiParsedData(content: SuiParsedData): ActivateIncentiveTokenEvent;
    static fetch(client: SuiClient, id: string): Promise<ActivateIncentiveTokenEvent>;
}
export declare function isAddIncentiveTokenEvent(type: string): boolean;
export interface AddIncentiveTokenEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    incentiveToken: ToField<TypeName>;
    incentiveInfo: ToField<IncentiveInfo>;
    incentiveConfig: ToField<IncentiveConfig>;
    u64Padding: ToField<Vector<"u64">>;
}
export type AddIncentiveTokenEventReified = Reified<AddIncentiveTokenEvent, AddIncentiveTokenEventFields>;
export declare class AddIncentiveTokenEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::AddIncentiveTokenEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::AddIncentiveTokenEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::AddIncentiveTokenEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly incentiveToken: ToField<TypeName>;
    readonly incentiveInfo: ToField<IncentiveInfo>;
    readonly incentiveConfig: ToField<IncentiveConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): AddIncentiveTokenEventReified;
    static get r(): reified.StructClassReified<AddIncentiveTokenEvent, AddIncentiveTokenEventFields>;
    static phantom(): PhantomReified<ToTypeStr<AddIncentiveTokenEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::AddIncentiveTokenEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        incentive_token: {
            name: {
                bytes: number[];
            };
        };
        incentive_info: {
            active: boolean;
            last_allocate_ts_ms: string;
            incentive_price_index: string;
            u64_padding: string[];
        };
        incentive_config: {
            period_incentive_amount: string;
            incentive_interval_ts_ms: string;
            u64_padding: string[];
        };
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        incentive_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        incentive_info: {
            active: boolean;
            last_allocate_ts_ms: string | number | bigint;
            incentive_price_index: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        incentive_config: {
            period_incentive_amount: string | number | bigint;
            incentive_interval_ts_ms: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): AddIncentiveTokenEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): AddIncentiveTokenEvent;
    static fromBcs(data: Uint8Array): AddIncentiveTokenEvent;
    toJSONField(): {
        sender: string;
        index: string;
        incentiveToken: {
            name: string;
        };
        incentiveInfo: {
            active: boolean;
            lastAllocateTsMs: string;
            incentivePriceIndex: string;
            u64Padding: string[];
        };
        incentiveConfig: {
            periodIncentiveAmount: string;
            incentiveIntervalTsMs: string;
            u64Padding: string[];
        };
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        incentiveToken: {
            name: string;
        };
        incentiveInfo: {
            active: boolean;
            lastAllocateTsMs: string;
            incentivePriceIndex: string;
            u64Padding: string[];
        };
        incentiveConfig: {
            periodIncentiveAmount: string;
            incentiveIntervalTsMs: string;
            u64Padding: string[];
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AddIncentiveTokenEvent;
    static fromJSON(json: Record<string, any>): AddIncentiveTokenEvent;
    static fromSuiParsedData(content: SuiParsedData): AddIncentiveTokenEvent;
    static fetch(client: SuiClient, id: string): Promise<AddIncentiveTokenEvent>;
}
export declare function isDeactivateIncentiveTokenEvent(type: string): boolean;
export interface DeactivateIncentiveTokenEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    incentiveToken: ToField<TypeName>;
    u64Padding: ToField<Vector<"u64">>;
}
export type DeactivateIncentiveTokenEventReified = Reified<DeactivateIncentiveTokenEvent, DeactivateIncentiveTokenEventFields>;
export declare class DeactivateIncentiveTokenEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DeactivateIncentiveTokenEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DeactivateIncentiveTokenEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DeactivateIncentiveTokenEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly incentiveToken: ToField<TypeName>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): DeactivateIncentiveTokenEventReified;
    static get r(): reified.StructClassReified<DeactivateIncentiveTokenEvent, DeactivateIncentiveTokenEventFields>;
    static phantom(): PhantomReified<ToTypeStr<DeactivateIncentiveTokenEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DeactivateIncentiveTokenEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        incentive_token: {
            name: {
                bytes: number[];
            };
        };
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        incentive_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): DeactivateIncentiveTokenEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): DeactivateIncentiveTokenEvent;
    static fromBcs(data: Uint8Array): DeactivateIncentiveTokenEvent;
    toJSONField(): {
        sender: string;
        index: string;
        incentiveToken: {
            name: string;
        };
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        incentiveToken: {
            name: string;
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DeactivateIncentiveTokenEvent;
    static fromJSON(json: Record<string, any>): DeactivateIncentiveTokenEvent;
    static fromSuiParsedData(content: SuiParsedData): DeactivateIncentiveTokenEvent;
    static fetch(client: SuiClient, id: string): Promise<DeactivateIncentiveTokenEvent>;
}
export declare function isDeactivatingShares(type: string): boolean;
export interface DeactivatingSharesFields {
    shares: ToField<"u64">;
    unsubscribedTsMs: ToField<"u64">;
    unlockedTsMs: ToField<"u64">;
    unsubscribedIncentivePriceIndex: ToField<VecMap<TypeName, "u64">>;
    u64Padding: ToField<Vector<"u64">>;
}
export type DeactivatingSharesReified = Reified<DeactivatingShares, DeactivatingSharesFields>;
export declare class DeactivatingShares implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DeactivatingShares";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DeactivatingShares";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DeactivatingShares";
    readonly $typeArgs: [];
    readonly shares: ToField<"u64">;
    readonly unsubscribedTsMs: ToField<"u64">;
    readonly unlockedTsMs: ToField<"u64">;
    readonly unsubscribedIncentivePriceIndex: ToField<VecMap<TypeName, "u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): DeactivatingSharesReified;
    static get r(): reified.StructClassReified<DeactivatingShares, DeactivatingSharesFields>;
    static phantom(): PhantomReified<ToTypeStr<DeactivatingShares>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DeactivatingShares">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        shares: string;
        unsubscribed_ts_ms: string;
        unlocked_ts_ms: string;
        unsubscribed_incentive_price_index: {
            contents: {
                key: {
                    name: {
                        bytes: number[];
                    };
                };
                value: string;
            }[];
        };
        u64_padding: string[];
    }, {
        shares: string | number | bigint;
        unsubscribed_ts_ms: string | number | bigint;
        unlocked_ts_ms: string | number | bigint;
        unsubscribed_incentive_price_index: {
            contents: Iterable<{
                key: {
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
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): DeactivatingShares;
    static fromFieldsWithTypes(item: FieldsWithTypes): DeactivatingShares;
    static fromBcs(data: Uint8Array): DeactivatingShares;
    toJSONField(): {
        shares: string;
        unsubscribedTsMs: string;
        unlockedTsMs: string;
        unsubscribedIncentivePriceIndex: {
            contents: {
                key: {
                    name: string;
                };
                value: string;
            }[];
        };
        u64Padding: string[];
    };
    toJSON(): {
        shares: string;
        unsubscribedTsMs: string;
        unlockedTsMs: string;
        unsubscribedIncentivePriceIndex: {
            contents: {
                key: {
                    name: string;
                };
                value: string;
            }[];
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DeactivatingShares;
    static fromJSON(json: Record<string, any>): DeactivatingShares;
    static fromSuiParsedData(content: SuiParsedData): DeactivatingShares;
    static fetch(client: SuiClient, id: string): Promise<DeactivatingShares>;
}
export declare function isDepositIncentiveEvent(type: string): boolean;
export interface DepositIncentiveEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    incentiveTokenType: ToField<TypeName>;
    depositAmount: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type DepositIncentiveEventReified = Reified<DepositIncentiveEvent, DepositIncentiveEventFields>;
export declare class DepositIncentiveEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DepositIncentiveEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DepositIncentiveEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DepositIncentiveEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly incentiveTokenType: ToField<TypeName>;
    readonly depositAmount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): DepositIncentiveEventReified;
    static get r(): reified.StructClassReified<DepositIncentiveEvent, DepositIncentiveEventFields>;
    static phantom(): PhantomReified<ToTypeStr<DepositIncentiveEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::DepositIncentiveEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        incentive_token_type: {
            name: {
                bytes: number[];
            };
        };
        deposit_amount: string;
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        incentive_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        deposit_amount: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): DepositIncentiveEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): DepositIncentiveEvent;
    static fromBcs(data: Uint8Array): DepositIncentiveEvent;
    toJSONField(): {
        sender: string;
        index: string;
        incentiveTokenType: {
            name: string;
        };
        depositAmount: string;
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        incentiveTokenType: {
            name: string;
        };
        depositAmount: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DepositIncentiveEvent;
    static fromJSON(json: Record<string, any>): DepositIncentiveEvent;
    static fromSuiParsedData(content: SuiParsedData): DepositIncentiveEvent;
    static fetch(client: SuiClient, id: string): Promise<DepositIncentiveEvent>;
}
export declare function isHarvestPerUserShareEvent(type: string): boolean;
export interface HarvestPerUserShareEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    incentiveTokenType: ToField<TypeName>;
    harvestAmount: ToField<"u64">;
    userShareId: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type HarvestPerUserShareEventReified = Reified<HarvestPerUserShareEvent, HarvestPerUserShareEventFields>;
export declare class HarvestPerUserShareEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::HarvestPerUserShareEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::HarvestPerUserShareEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::HarvestPerUserShareEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly incentiveTokenType: ToField<TypeName>;
    readonly harvestAmount: ToField<"u64">;
    readonly userShareId: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): HarvestPerUserShareEventReified;
    static get r(): reified.StructClassReified<HarvestPerUserShareEvent, HarvestPerUserShareEventFields>;
    static phantom(): PhantomReified<ToTypeStr<HarvestPerUserShareEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::HarvestPerUserShareEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        incentive_token_type: {
            name: {
                bytes: number[];
            };
        };
        harvest_amount: string;
        user_share_id: string;
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        incentive_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        harvest_amount: string | number | bigint;
        user_share_id: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): HarvestPerUserShareEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): HarvestPerUserShareEvent;
    static fromBcs(data: Uint8Array): HarvestPerUserShareEvent;
    toJSONField(): {
        sender: string;
        index: string;
        incentiveTokenType: {
            name: string;
        };
        harvestAmount: string;
        userShareId: string;
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        incentiveTokenType: {
            name: string;
        };
        harvestAmount: string;
        userShareId: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): HarvestPerUserShareEvent;
    static fromJSON(json: Record<string, any>): HarvestPerUserShareEvent;
    static fromSuiParsedData(content: SuiParsedData): HarvestPerUserShareEvent;
    static fetch(client: SuiClient, id: string): Promise<HarvestPerUserShareEvent>;
}
export declare function isIncentive(type: string): boolean;
export interface IncentiveFields {
    tokenType: ToField<TypeName>;
    config: ToField<IncentiveConfig>;
    info: ToField<IncentiveInfo>;
}
export type IncentiveReified = Reified<Incentive, IncentiveFields>;
export declare class Incentive implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::Incentive";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::Incentive";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::Incentive";
    readonly $typeArgs: [];
    readonly tokenType: ToField<TypeName>;
    readonly config: ToField<IncentiveConfig>;
    readonly info: ToField<IncentiveInfo>;
    private constructor();
    static reified(): IncentiveReified;
    static get r(): reified.StructClassReified<Incentive, IncentiveFields>;
    static phantom(): PhantomReified<ToTypeStr<Incentive>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::Incentive">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        token_type: {
            name: {
                bytes: number[];
            };
        };
        config: {
            period_incentive_amount: string;
            incentive_interval_ts_ms: string;
            u64_padding: string[];
        };
        info: {
            active: boolean;
            last_allocate_ts_ms: string;
            incentive_price_index: string;
            u64_padding: string[];
        };
    }, {
        token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        config: {
            period_incentive_amount: string | number | bigint;
            incentive_interval_ts_ms: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        info: {
            active: boolean;
            last_allocate_ts_ms: string | number | bigint;
            incentive_price_index: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): Incentive;
    static fromFieldsWithTypes(item: FieldsWithTypes): Incentive;
    static fromBcs(data: Uint8Array): Incentive;
    toJSONField(): {
        tokenType: {
            name: string;
        };
        config: {
            periodIncentiveAmount: string;
            incentiveIntervalTsMs: string;
            u64Padding: string[];
        };
        info: {
            active: boolean;
            lastAllocateTsMs: string;
            incentivePriceIndex: string;
            u64Padding: string[];
        };
    };
    toJSON(): {
        tokenType: {
            name: string;
        };
        config: {
            periodIncentiveAmount: string;
            incentiveIntervalTsMs: string;
            u64Padding: string[];
        };
        info: {
            active: boolean;
            lastAllocateTsMs: string;
            incentivePriceIndex: string;
            u64Padding: string[];
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Incentive;
    static fromJSON(json: Record<string, any>): Incentive;
    static fromSuiParsedData(content: SuiParsedData): Incentive;
    static fetch(client: SuiClient, id: string): Promise<Incentive>;
}
export declare function isIncentiveConfig(type: string): boolean;
export interface IncentiveConfigFields {
    periodIncentiveAmount: ToField<"u64">;
    incentiveIntervalTsMs: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type IncentiveConfigReified = Reified<IncentiveConfig, IncentiveConfigFields>;
export declare class IncentiveConfig implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::IncentiveConfig";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::IncentiveConfig";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::IncentiveConfig";
    readonly $typeArgs: [];
    readonly periodIncentiveAmount: ToField<"u64">;
    readonly incentiveIntervalTsMs: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): IncentiveConfigReified;
    static get r(): reified.StructClassReified<IncentiveConfig, IncentiveConfigFields>;
    static phantom(): PhantomReified<ToTypeStr<IncentiveConfig>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::IncentiveConfig">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        period_incentive_amount: string;
        incentive_interval_ts_ms: string;
        u64_padding: string[];
    }, {
        period_incentive_amount: string | number | bigint;
        incentive_interval_ts_ms: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): IncentiveConfig;
    static fromFieldsWithTypes(item: FieldsWithTypes): IncentiveConfig;
    static fromBcs(data: Uint8Array): IncentiveConfig;
    toJSONField(): {
        periodIncentiveAmount: string;
        incentiveIntervalTsMs: string;
        u64Padding: string[];
    };
    toJSON(): {
        periodIncentiveAmount: string;
        incentiveIntervalTsMs: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): IncentiveConfig;
    static fromJSON(json: Record<string, any>): IncentiveConfig;
    static fromSuiParsedData(content: SuiParsedData): IncentiveConfig;
    static fetch(client: SuiClient, id: string): Promise<IncentiveConfig>;
}
export declare function isIncentiveInfo(type: string): boolean;
export interface IncentiveInfoFields {
    active: ToField<"bool">;
    lastAllocateTsMs: ToField<"u64">;
    incentivePriceIndex: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type IncentiveInfoReified = Reified<IncentiveInfo, IncentiveInfoFields>;
export declare class IncentiveInfo implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::IncentiveInfo";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::IncentiveInfo";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::IncentiveInfo";
    readonly $typeArgs: [];
    readonly active: ToField<"bool">;
    readonly lastAllocateTsMs: ToField<"u64">;
    readonly incentivePriceIndex: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): IncentiveInfoReified;
    static get r(): reified.StructClassReified<IncentiveInfo, IncentiveInfoFields>;
    static phantom(): PhantomReified<ToTypeStr<IncentiveInfo>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::IncentiveInfo">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        active: boolean;
        last_allocate_ts_ms: string;
        incentive_price_index: string;
        u64_padding: string[];
    }, {
        active: boolean;
        last_allocate_ts_ms: string | number | bigint;
        incentive_price_index: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): IncentiveInfo;
    static fromFieldsWithTypes(item: FieldsWithTypes): IncentiveInfo;
    static fromBcs(data: Uint8Array): IncentiveInfo;
    toJSONField(): {
        active: boolean;
        lastAllocateTsMs: string;
        incentivePriceIndex: string;
        u64Padding: string[];
    };
    toJSON(): {
        active: boolean;
        lastAllocateTsMs: string;
        incentivePriceIndex: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): IncentiveInfo;
    static fromJSON(json: Record<string, any>): IncentiveInfo;
    static fromSuiParsedData(content: SuiParsedData): IncentiveInfo;
    static fetch(client: SuiClient, id: string): Promise<IncentiveInfo>;
}
export declare function isLpUserShare(type: string): boolean;
export interface LpUserShareFields {
    user: ToField<"address">;
    userShareId: ToField<"u64">;
    stakeTsMs: ToField<"u64">;
    totalShares: ToField<"u64">;
    activeShares: ToField<"u64">;
    deactivatingShares: ToField<Vector<DeactivatingShares>>;
    lastIncentivePriceIndex: ToField<VecMap<TypeName, "u64">>;
    u64Padding: ToField<Vector<"u64">>;
}
export type LpUserShareReified = Reified<LpUserShare, LpUserShareFields>;
export declare class LpUserShare implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::LpUserShare";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::LpUserShare";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::LpUserShare";
    readonly $typeArgs: [];
    readonly user: ToField<"address">;
    readonly userShareId: ToField<"u64">;
    readonly stakeTsMs: ToField<"u64">;
    readonly totalShares: ToField<"u64">;
    readonly activeShares: ToField<"u64">;
    readonly deactivatingShares: ToField<Vector<DeactivatingShares>>;
    readonly lastIncentivePriceIndex: ToField<VecMap<TypeName, "u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): LpUserShareReified;
    static get r(): reified.StructClassReified<LpUserShare, LpUserShareFields>;
    static phantom(): PhantomReified<ToTypeStr<LpUserShare>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::LpUserShare">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        user_share_id: string;
        stake_ts_ms: string;
        total_shares: string;
        active_shares: string;
        deactivating_shares: {
            shares: string;
            unsubscribed_ts_ms: string;
            unlocked_ts_ms: string;
            unsubscribed_incentive_price_index: {
                contents: {
                    key: {
                        name: {
                            bytes: number[];
                        };
                    };
                    value: string;
                }[];
            };
            u64_padding: string[];
        }[];
        last_incentive_price_index: {
            contents: {
                key: {
                    name: {
                        bytes: number[];
                    };
                };
                value: string;
            }[];
        };
        u64_padding: string[];
    }, {
        user: string;
        user_share_id: string | number | bigint;
        stake_ts_ms: string | number | bigint;
        total_shares: string | number | bigint;
        active_shares: string | number | bigint;
        deactivating_shares: Iterable<{
            shares: string | number | bigint;
            unsubscribed_ts_ms: string | number | bigint;
            unlocked_ts_ms: string | number | bigint;
            unsubscribed_incentive_price_index: {
                contents: Iterable<{
                    key: {
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
            };
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        }> & {
            length: number;
        };
        last_incentive_price_index: {
            contents: Iterable<{
                key: {
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
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): LpUserShare;
    static fromFieldsWithTypes(item: FieldsWithTypes): LpUserShare;
    static fromBcs(data: Uint8Array): LpUserShare;
    toJSONField(): {
        user: string;
        userShareId: string;
        stakeTsMs: string;
        totalShares: string;
        activeShares: string;
        deactivatingShares: {
            shares: string;
            unsubscribedTsMs: string;
            unlockedTsMs: string;
            unsubscribedIncentivePriceIndex: {
                contents: {
                    key: {
                        name: string;
                    };
                    value: string;
                }[];
            };
            u64Padding: string[];
        }[];
        lastIncentivePriceIndex: {
            contents: {
                key: {
                    name: string;
                };
                value: string;
            }[];
        };
        u64Padding: string[];
    };
    toJSON(): {
        user: string;
        userShareId: string;
        stakeTsMs: string;
        totalShares: string;
        activeShares: string;
        deactivatingShares: {
            shares: string;
            unsubscribedTsMs: string;
            unlockedTsMs: string;
            unsubscribedIncentivePriceIndex: {
                contents: {
                    key: {
                        name: string;
                    };
                    value: string;
                }[];
            };
            u64Padding: string[];
        }[];
        lastIncentivePriceIndex: {
            contents: {
                key: {
                    name: string;
                };
                value: string;
            }[];
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): LpUserShare;
    static fromJSON(json: Record<string, any>): LpUserShare;
    static fromSuiParsedData(content: SuiParsedData): LpUserShare;
    static fetch(client: SuiClient, id: string): Promise<LpUserShare>;
}
export declare function isNewStakePoolEvent(type: string): boolean;
export interface NewStakePoolEventFields {
    sender: ToField<"address">;
    stakePoolInfo: ToField<StakePoolInfo>;
    stakePoolConfig: ToField<StakePoolConfig>;
    u64Padding: ToField<Vector<"u64">>;
}
export type NewStakePoolEventReified = Reified<NewStakePoolEvent, NewStakePoolEventFields>;
export declare class NewStakePoolEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::NewStakePoolEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::NewStakePoolEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::NewStakePoolEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly stakePoolInfo: ToField<StakePoolInfo>;
    readonly stakePoolConfig: ToField<StakePoolConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): NewStakePoolEventReified;
    static get r(): reified.StructClassReified<NewStakePoolEvent, NewStakePoolEventFields>;
    static phantom(): PhantomReified<ToTypeStr<NewStakePoolEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::NewStakePoolEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        stake_pool_info: {
            stake_token: {
                name: {
                    bytes: number[];
                };
            };
            index: string;
            next_user_share_id: string;
            total_share: string;
            active: boolean;
            u64_padding: string[];
        };
        stake_pool_config: {
            unlock_countdown_ts_ms: string;
            u64_padding: string[];
        };
        u64_padding: string[];
    }, {
        sender: string;
        stake_pool_info: {
            stake_token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            index: string | number | bigint;
            next_user_share_id: string | number | bigint;
            total_share: string | number | bigint;
            active: boolean;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        stake_pool_config: {
            unlock_countdown_ts_ms: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): NewStakePoolEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): NewStakePoolEvent;
    static fromBcs(data: Uint8Array): NewStakePoolEvent;
    toJSONField(): {
        sender: string;
        stakePoolInfo: {
            stakeToken: {
                name: string;
            };
            index: string;
            nextUserShareId: string;
            totalShare: string;
            active: boolean;
            u64Padding: string[];
        };
        stakePoolConfig: {
            unlockCountdownTsMs: string;
            u64Padding: string[];
        };
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        stakePoolInfo: {
            stakeToken: {
                name: string;
            };
            index: string;
            nextUserShareId: string;
            totalShare: string;
            active: boolean;
            u64Padding: string[];
        };
        stakePoolConfig: {
            unlockCountdownTsMs: string;
            u64Padding: string[];
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NewStakePoolEvent;
    static fromJSON(json: Record<string, any>): NewStakePoolEvent;
    static fromSuiParsedData(content: SuiParsedData): NewStakePoolEvent;
    static fetch(client: SuiClient, id: string): Promise<NewStakePoolEvent>;
}
export declare function isRemoveIncentiveTokenEvent(type: string): boolean;
export interface RemoveIncentiveTokenEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    incentiveToken: ToField<TypeName>;
    incentiveBalanceValue: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type RemoveIncentiveTokenEventReified = Reified<RemoveIncentiveTokenEvent, RemoveIncentiveTokenEventFields>;
export declare class RemoveIncentiveTokenEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::RemoveIncentiveTokenEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::RemoveIncentiveTokenEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::RemoveIncentiveTokenEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly incentiveToken: ToField<TypeName>;
    readonly incentiveBalanceValue: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): RemoveIncentiveTokenEventReified;
    static get r(): reified.StructClassReified<RemoveIncentiveTokenEvent, RemoveIncentiveTokenEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RemoveIncentiveTokenEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::RemoveIncentiveTokenEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        incentive_token: {
            name: {
                bytes: number[];
            };
        };
        incentive_balance_value: string;
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        incentive_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        incentive_balance_value: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RemoveIncentiveTokenEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveIncentiveTokenEvent;
    static fromBcs(data: Uint8Array): RemoveIncentiveTokenEvent;
    toJSONField(): {
        sender: string;
        index: string;
        incentiveToken: {
            name: string;
        };
        incentiveBalanceValue: string;
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        incentiveToken: {
            name: string;
        };
        incentiveBalanceValue: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RemoveIncentiveTokenEvent;
    static fromJSON(json: Record<string, any>): RemoveIncentiveTokenEvent;
    static fromSuiParsedData(content: SuiParsedData): RemoveIncentiveTokenEvent;
    static fetch(client: SuiClient, id: string): Promise<RemoveIncentiveTokenEvent>;
}
export declare function isStakeEvent(type: string): boolean;
export interface StakeEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    lpTokenType: ToField<TypeName>;
    stakeAmount: ToField<"u64">;
    userShareId: ToField<"u64">;
    stakeTsMs: ToField<"u64">;
    lastIncentivePriceIndex: ToField<VecMap<TypeName, "u64">>;
    u64Padding: ToField<Vector<"u64">>;
}
export type StakeEventReified = Reified<StakeEvent, StakeEventFields>;
export declare class StakeEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakeEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakeEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakeEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly lpTokenType: ToField<TypeName>;
    readonly stakeAmount: ToField<"u64">;
    readonly userShareId: ToField<"u64">;
    readonly stakeTsMs: ToField<"u64">;
    readonly lastIncentivePriceIndex: ToField<VecMap<TypeName, "u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): StakeEventReified;
    static get r(): reified.StructClassReified<StakeEvent, StakeEventFields>;
    static phantom(): PhantomReified<ToTypeStr<StakeEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakeEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        lp_token_type: {
            name: {
                bytes: number[];
            };
        };
        stake_amount: string;
        user_share_id: string;
        stake_ts_ms: string;
        last_incentive_price_index: {
            contents: {
                key: {
                    name: {
                        bytes: number[];
                    };
                };
                value: string;
            }[];
        };
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        lp_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        stake_amount: string | number | bigint;
        user_share_id: string | number | bigint;
        stake_ts_ms: string | number | bigint;
        last_incentive_price_index: {
            contents: Iterable<{
                key: {
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
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): StakeEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): StakeEvent;
    static fromBcs(data: Uint8Array): StakeEvent;
    toJSONField(): {
        sender: string;
        index: string;
        lpTokenType: {
            name: string;
        };
        stakeAmount: string;
        userShareId: string;
        stakeTsMs: string;
        lastIncentivePriceIndex: {
            contents: {
                key: {
                    name: string;
                };
                value: string;
            }[];
        };
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        lpTokenType: {
            name: string;
        };
        stakeAmount: string;
        userShareId: string;
        stakeTsMs: string;
        lastIncentivePriceIndex: {
            contents: {
                key: {
                    name: string;
                };
                value: string;
            }[];
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): StakeEvent;
    static fromJSON(json: Record<string, any>): StakeEvent;
    static fromSuiParsedData(content: SuiParsedData): StakeEvent;
    static fetch(client: SuiClient, id: string): Promise<StakeEvent>;
}
export declare function isStakePool(type: string): boolean;
export interface StakePoolFields {
    id: ToField<UID>;
    poolInfo: ToField<StakePoolInfo>;
    config: ToField<StakePoolConfig>;
    incentives: ToField<Vector<Incentive>>;
    u64Padding: ToField<Vector<"u64">>;
}
export type StakePoolReified = Reified<StakePool, StakePoolFields>;
export declare class StakePool implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePool";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePool";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePool";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly poolInfo: ToField<StakePoolInfo>;
    readonly config: ToField<StakePoolConfig>;
    readonly incentives: ToField<Vector<Incentive>>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): StakePoolReified;
    static get r(): reified.StructClassReified<StakePool, StakePoolFields>;
    static phantom(): PhantomReified<ToTypeStr<StakePool>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePool">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        pool_info: {
            stake_token: {
                name: {
                    bytes: number[];
                };
            };
            index: string;
            next_user_share_id: string;
            total_share: string;
            active: boolean;
            u64_padding: string[];
        };
        config: {
            unlock_countdown_ts_ms: string;
            u64_padding: string[];
        };
        incentives: {
            token_type: {
                name: {
                    bytes: number[];
                };
            };
            config: {
                period_incentive_amount: string;
                incentive_interval_ts_ms: string;
                u64_padding: string[];
            };
            info: {
                active: boolean;
                last_allocate_ts_ms: string;
                incentive_price_index: string;
                u64_padding: string[];
            };
        }[];
        u64_padding: string[];
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        pool_info: {
            stake_token: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            index: string | number | bigint;
            next_user_share_id: string | number | bigint;
            total_share: string | number | bigint;
            active: boolean;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        config: {
            unlock_countdown_ts_ms: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        incentives: Iterable<{
            token_type: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            config: {
                period_incentive_amount: string | number | bigint;
                incentive_interval_ts_ms: string | number | bigint;
                u64_padding: Iterable<string | number | bigint> & {
                    length: number;
                };
            };
            info: {
                active: boolean;
                last_allocate_ts_ms: string | number | bigint;
                incentive_price_index: string | number | bigint;
                u64_padding: Iterable<string | number | bigint> & {
                    length: number;
                };
            };
        }> & {
            length: number;
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): StakePool;
    static fromFieldsWithTypes(item: FieldsWithTypes): StakePool;
    static fromBcs(data: Uint8Array): StakePool;
    toJSONField(): {
        id: string;
        poolInfo: {
            stakeToken: {
                name: string;
            };
            index: string;
            nextUserShareId: string;
            totalShare: string;
            active: boolean;
            u64Padding: string[];
        };
        config: {
            unlockCountdownTsMs: string;
            u64Padding: string[];
        };
        incentives: {
            tokenType: {
                name: string;
            };
            config: {
                periodIncentiveAmount: string;
                incentiveIntervalTsMs: string;
                u64Padding: string[];
            };
            info: {
                active: boolean;
                lastAllocateTsMs: string;
                incentivePriceIndex: string;
                u64Padding: string[];
            };
        }[];
        u64Padding: string[];
    };
    toJSON(): {
        id: string;
        poolInfo: {
            stakeToken: {
                name: string;
            };
            index: string;
            nextUserShareId: string;
            totalShare: string;
            active: boolean;
            u64Padding: string[];
        };
        config: {
            unlockCountdownTsMs: string;
            u64Padding: string[];
        };
        incentives: {
            tokenType: {
                name: string;
            };
            config: {
                periodIncentiveAmount: string;
                incentiveIntervalTsMs: string;
                u64Padding: string[];
            };
            info: {
                active: boolean;
                lastAllocateTsMs: string;
                incentivePriceIndex: string;
                u64Padding: string[];
            };
        }[];
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): StakePool;
    static fromJSON(json: Record<string, any>): StakePool;
    static fromSuiParsedData(content: SuiParsedData): StakePool;
    static fetch(client: SuiClient, id: string): Promise<StakePool>;
}
export declare function isStakePoolConfig(type: string): boolean;
export interface StakePoolConfigFields {
    unlockCountdownTsMs: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type StakePoolConfigReified = Reified<StakePoolConfig, StakePoolConfigFields>;
export declare class StakePoolConfig implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolConfig";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolConfig";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolConfig";
    readonly $typeArgs: [];
    readonly unlockCountdownTsMs: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): StakePoolConfigReified;
    static get r(): reified.StructClassReified<StakePoolConfig, StakePoolConfigFields>;
    static phantom(): PhantomReified<ToTypeStr<StakePoolConfig>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolConfig">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        unlock_countdown_ts_ms: string;
        u64_padding: string[];
    }, {
        unlock_countdown_ts_ms: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): StakePoolConfig;
    static fromFieldsWithTypes(item: FieldsWithTypes): StakePoolConfig;
    static fromBcs(data: Uint8Array): StakePoolConfig;
    toJSONField(): {
        unlockCountdownTsMs: string;
        u64Padding: string[];
    };
    toJSON(): {
        unlockCountdownTsMs: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): StakePoolConfig;
    static fromJSON(json: Record<string, any>): StakePoolConfig;
    static fromSuiParsedData(content: SuiParsedData): StakePoolConfig;
    static fetch(client: SuiClient, id: string): Promise<StakePoolConfig>;
}
export declare function isStakePoolInfo(type: string): boolean;
export interface StakePoolInfoFields {
    stakeToken: ToField<TypeName>;
    index: ToField<"u64">;
    nextUserShareId: ToField<"u64">;
    totalShare: ToField<"u64">;
    active: ToField<"bool">;
    u64Padding: ToField<Vector<"u64">>;
}
export type StakePoolInfoReified = Reified<StakePoolInfo, StakePoolInfoFields>;
export declare class StakePoolInfo implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolInfo";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolInfo";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolInfo";
    readonly $typeArgs: [];
    readonly stakeToken: ToField<TypeName>;
    readonly index: ToField<"u64">;
    readonly nextUserShareId: ToField<"u64">;
    readonly totalShare: ToField<"u64">;
    readonly active: ToField<"bool">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): StakePoolInfoReified;
    static get r(): reified.StructClassReified<StakePoolInfo, StakePoolInfoFields>;
    static phantom(): PhantomReified<ToTypeStr<StakePoolInfo>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolInfo">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        stake_token: {
            name: {
                bytes: number[];
            };
        };
        index: string;
        next_user_share_id: string;
        total_share: string;
        active: boolean;
        u64_padding: string[];
    }, {
        stake_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        index: string | number | bigint;
        next_user_share_id: string | number | bigint;
        total_share: string | number | bigint;
        active: boolean;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): StakePoolInfo;
    static fromFieldsWithTypes(item: FieldsWithTypes): StakePoolInfo;
    static fromBcs(data: Uint8Array): StakePoolInfo;
    toJSONField(): {
        stakeToken: {
            name: string;
        };
        index: string;
        nextUserShareId: string;
        totalShare: string;
        active: boolean;
        u64Padding: string[];
    };
    toJSON(): {
        stakeToken: {
            name: string;
        };
        index: string;
        nextUserShareId: string;
        totalShare: string;
        active: boolean;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): StakePoolInfo;
    static fromJSON(json: Record<string, any>): StakePoolInfo;
    static fromSuiParsedData(content: SuiParsedData): StakePoolInfo;
    static fetch(client: SuiClient, id: string): Promise<StakePoolInfo>;
}
export declare function isStakePoolRegistry(type: string): boolean;
export interface StakePoolRegistryFields {
    id: ToField<UID>;
    numPool: ToField<"u64">;
}
export type StakePoolRegistryReified = Reified<StakePoolRegistry, StakePoolRegistryFields>;
export declare class StakePoolRegistry implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolRegistry";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolRegistry";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolRegistry";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly numPool: ToField<"u64">;
    private constructor();
    static reified(): StakePoolRegistryReified;
    static get r(): reified.StructClassReified<StakePoolRegistry, StakePoolRegistryFields>;
    static phantom(): PhantomReified<ToTypeStr<StakePoolRegistry>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::StakePoolRegistry">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        num_pool: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        num_pool: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): StakePoolRegistry;
    static fromFieldsWithTypes(item: FieldsWithTypes): StakePoolRegistry;
    static fromBcs(data: Uint8Array): StakePoolRegistry;
    toJSONField(): {
        id: string;
        numPool: string;
    };
    toJSON(): {
        id: string;
        numPool: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): StakePoolRegistry;
    static fromJSON(json: Record<string, any>): StakePoolRegistry;
    static fromSuiParsedData(content: SuiParsedData): StakePoolRegistry;
    static fetch(client: SuiClient, id: string): Promise<StakePoolRegistry>;
}
export declare function isUnstakeEvent(type: string): boolean;
export interface UnstakeEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    lpTokenType: ToField<TypeName>;
    userShareId: ToField<"u64">;
    unstakeAmount: ToField<"u64">;
    unstakeTsMs: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type UnstakeEventReified = Reified<UnstakeEvent, UnstakeEventFields>;
export declare class UnstakeEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UnstakeEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UnstakeEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UnstakeEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly lpTokenType: ToField<TypeName>;
    readonly userShareId: ToField<"u64">;
    readonly unstakeAmount: ToField<"u64">;
    readonly unstakeTsMs: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): UnstakeEventReified;
    static get r(): reified.StructClassReified<UnstakeEvent, UnstakeEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UnstakeEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UnstakeEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        lp_token_type: {
            name: {
                bytes: number[];
            };
        };
        user_share_id: string;
        unstake_amount: string;
        unstake_ts_ms: string;
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        lp_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        user_share_id: string | number | bigint;
        unstake_amount: string | number | bigint;
        unstake_ts_ms: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): UnstakeEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UnstakeEvent;
    static fromBcs(data: Uint8Array): UnstakeEvent;
    toJSONField(): {
        sender: string;
        index: string;
        lpTokenType: {
            name: string;
        };
        userShareId: string;
        unstakeAmount: string;
        unstakeTsMs: string;
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        lpTokenType: {
            name: string;
        };
        userShareId: string;
        unstakeAmount: string;
        unstakeTsMs: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UnstakeEvent;
    static fromJSON(json: Record<string, any>): UnstakeEvent;
    static fromSuiParsedData(content: SuiParsedData): UnstakeEvent;
    static fetch(client: SuiClient, id: string): Promise<UnstakeEvent>;
}
export declare function isUpdateIncentiveConfigEvent(type: string): boolean;
export interface UpdateIncentiveConfigEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    previousIncentiveConfig: ToField<IncentiveConfig>;
    newIncentiveConfig: ToField<IncentiveConfig>;
    u64Padding: ToField<Vector<"u64">>;
}
export type UpdateIncentiveConfigEventReified = Reified<UpdateIncentiveConfigEvent, UpdateIncentiveConfigEventFields>;
export declare class UpdateIncentiveConfigEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UpdateIncentiveConfigEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UpdateIncentiveConfigEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UpdateIncentiveConfigEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly previousIncentiveConfig: ToField<IncentiveConfig>;
    readonly newIncentiveConfig: ToField<IncentiveConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): UpdateIncentiveConfigEventReified;
    static get r(): reified.StructClassReified<UpdateIncentiveConfigEvent, UpdateIncentiveConfigEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateIncentiveConfigEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UpdateIncentiveConfigEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        previous_incentive_config: {
            period_incentive_amount: string;
            incentive_interval_ts_ms: string;
            u64_padding: string[];
        };
        new_incentive_config: {
            period_incentive_amount: string;
            incentive_interval_ts_ms: string;
            u64_padding: string[];
        };
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        previous_incentive_config: {
            period_incentive_amount: string | number | bigint;
            incentive_interval_ts_ms: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        new_incentive_config: {
            period_incentive_amount: string | number | bigint;
            incentive_interval_ts_ms: string | number | bigint;
            u64_padding: Iterable<string | number | bigint> & {
                length: number;
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): UpdateIncentiveConfigEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateIncentiveConfigEvent;
    static fromBcs(data: Uint8Array): UpdateIncentiveConfigEvent;
    toJSONField(): {
        sender: string;
        index: string;
        previousIncentiveConfig: {
            periodIncentiveAmount: string;
            incentiveIntervalTsMs: string;
            u64Padding: string[];
        };
        newIncentiveConfig: {
            periodIncentiveAmount: string;
            incentiveIntervalTsMs: string;
            u64Padding: string[];
        };
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        previousIncentiveConfig: {
            periodIncentiveAmount: string;
            incentiveIntervalTsMs: string;
            u64Padding: string[];
        };
        newIncentiveConfig: {
            periodIncentiveAmount: string;
            incentiveIntervalTsMs: string;
            u64Padding: string[];
        };
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateIncentiveConfigEvent;
    static fromJSON(json: Record<string, any>): UpdateIncentiveConfigEvent;
    static fromSuiParsedData(content: SuiParsedData): UpdateIncentiveConfigEvent;
    static fetch(client: SuiClient, id: string): Promise<UpdateIncentiveConfigEvent>;
}
export declare function isUpdateUnlockCountdownTsMsEvent(type: string): boolean;
export interface UpdateUnlockCountdownTsMsEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    previousUnlockCountdownTsMs: ToField<"u64">;
    newUnlockCountdownTsMs: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type UpdateUnlockCountdownTsMsEventReified = Reified<UpdateUnlockCountdownTsMsEvent, UpdateUnlockCountdownTsMsEventFields>;
export declare class UpdateUnlockCountdownTsMsEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UpdateUnlockCountdownTsMsEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UpdateUnlockCountdownTsMsEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UpdateUnlockCountdownTsMsEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly previousUnlockCountdownTsMs: ToField<"u64">;
    readonly newUnlockCountdownTsMs: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): UpdateUnlockCountdownTsMsEventReified;
    static get r(): reified.StructClassReified<UpdateUnlockCountdownTsMsEvent, UpdateUnlockCountdownTsMsEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateUnlockCountdownTsMsEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::UpdateUnlockCountdownTsMsEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        previous_unlock_countdown_ts_ms: string;
        new_unlock_countdown_ts_ms: string;
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        previous_unlock_countdown_ts_ms: string | number | bigint;
        new_unlock_countdown_ts_ms: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): UpdateUnlockCountdownTsMsEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateUnlockCountdownTsMsEvent;
    static fromBcs(data: Uint8Array): UpdateUnlockCountdownTsMsEvent;
    toJSONField(): {
        sender: string;
        index: string;
        previousUnlockCountdownTsMs: string;
        newUnlockCountdownTsMs: string;
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        previousUnlockCountdownTsMs: string;
        newUnlockCountdownTsMs: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateUnlockCountdownTsMsEvent;
    static fromJSON(json: Record<string, any>): UpdateUnlockCountdownTsMsEvent;
    static fromSuiParsedData(content: SuiParsedData): UpdateUnlockCountdownTsMsEvent;
    static fetch(client: SuiClient, id: string): Promise<UpdateUnlockCountdownTsMsEvent>;
}
export declare function isWithdrawIncentiveEvent(type: string): boolean;
export interface WithdrawIncentiveEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    incentiveTokenType: ToField<TypeName>;
    withdrawalAmount: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type WithdrawIncentiveEventReified = Reified<WithdrawIncentiveEvent, WithdrawIncentiveEventFields>;
export declare class WithdrawIncentiveEvent implements StructClass {
    static readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::WithdrawIncentiveEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::WithdrawIncentiveEvent";
    readonly $fullTypeName: "0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::WithdrawIncentiveEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly incentiveTokenType: ToField<TypeName>;
    readonly withdrawalAmount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): WithdrawIncentiveEventReified;
    static get r(): reified.StructClassReified<WithdrawIncentiveEvent, WithdrawIncentiveEventFields>;
    static phantom(): PhantomReified<ToTypeStr<WithdrawIncentiveEvent>>;
    static get p(): reified.PhantomReified<"0x4bcf9eade4480bcb9fcd3139ec8d22afda34b25af06092904fcccb06e1b8043c::stake_pool::WithdrawIncentiveEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        index: string;
        incentive_token_type: {
            name: {
                bytes: number[];
            };
        };
        withdrawal_amount: string;
        u64_padding: string[];
    }, {
        sender: string;
        index: string | number | bigint;
        incentive_token_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        withdrawal_amount: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): WithdrawIncentiveEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): WithdrawIncentiveEvent;
    static fromBcs(data: Uint8Array): WithdrawIncentiveEvent;
    toJSONField(): {
        sender: string;
        index: string;
        incentiveTokenType: {
            name: string;
        };
        withdrawalAmount: string;
        u64Padding: string[];
    };
    toJSON(): {
        sender: string;
        index: string;
        incentiveTokenType: {
            name: string;
        };
        withdrawalAmount: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): WithdrawIncentiveEvent;
    static fromJSON(json: Record<string, any>): WithdrawIncentiveEvent;
    static fromSuiParsedData(content: SuiParsedData): WithdrawIncentiveEvent;
    static fetch(client: SuiClient, id: string): Promise<WithdrawIncentiveEvent>;
}
