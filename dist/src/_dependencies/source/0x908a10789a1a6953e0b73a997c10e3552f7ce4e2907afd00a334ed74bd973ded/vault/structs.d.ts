import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Option } from "../../0x1/option/structs";
import { String } from "../../0x1/string/structs";
import { TypeName } from "../../0x1/type-name/structs";
import { ID, UID } from "../../0x2/object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isActivate(type: string): boolean;
export interface ActivateFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    hasNext: ToField<"bool">;
}
export type ActivateReified = Reified<Activate, ActivateFields>;
export declare class Activate implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Activate";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Activate";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Activate";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly hasNext: ToField<"bool">;
    private constructor();
    static reified(): ActivateReified;
    static get r(): reified.StructClassReified<Activate, ActivateFields>;
    static phantom(): PhantomReified<ToTypeStr<Activate>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Activate">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
        has_next: boolean;
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
        has_next: boolean;
    }>;
    static fromFields(fields: Record<string, any>): Activate;
    static fromFieldsWithTypes(item: FieldsWithTypes): Activate;
    static fromBcs(data: Uint8Array): Activate;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        hasNext: boolean;
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        hasNext: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Activate;
    static fromJSON(json: Record<string, any>): Activate;
    static fromSuiParsedData(content: SuiParsedData): Activate;
    static fetch(client: SuiClient, id: string): Promise<Activate>;
}
export declare function isBidShare(type: string): boolean;
export interface BidShareFields {
    receipt: ToField<"address">;
    share: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type BidShareReified = Reified<BidShare, BidShareFields>;
export declare class BidShare implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::BidShare";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::BidShare";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::BidShare";
    readonly $typeArgs: [];
    readonly receipt: ToField<"address">;
    readonly share: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): BidShareReified;
    static get r(): reified.StructClassReified<BidShare, BidShareFields>;
    static phantom(): PhantomReified<ToTypeStr<BidShare>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::BidShare">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        receipt: string;
        share: string;
        u64_padding: string[];
    }, {
        receipt: string;
        share: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): BidShare;
    static fromFieldsWithTypes(item: FieldsWithTypes): BidShare;
    static fromBcs(data: Uint8Array): BidShare;
    toJSONField(): {
        receipt: string;
        share: string;
        u64Padding: string[];
    };
    toJSON(): {
        receipt: string;
        share: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): BidShare;
    static fromJSON(json: Record<string, any>): BidShare;
    static fromSuiParsedData(content: SuiParsedData): BidShare;
    static fetch(client: SuiClient, id: string): Promise<BidShare>;
}
export declare function isBidVault(type: string): boolean;
export interface BidVaultFields {
    id: ToField<UID>;
    depositToken: ToField<TypeName>;
    bidToken: ToField<TypeName>;
    incentiveToken: ToField<Option<TypeName>>;
    index: ToField<"u64">;
    shareSupply: ToField<"u64">;
    metadata: ToField<String>;
    u64Padding: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<"u8">>;
}
export type BidVaultReified = Reified<BidVault, BidVaultFields>;
export declare class BidVault implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::BidVault";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::BidVault";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::BidVault";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly depositToken: ToField<TypeName>;
    readonly bidToken: ToField<TypeName>;
    readonly incentiveToken: ToField<Option<TypeName>>;
    readonly index: ToField<"u64">;
    readonly shareSupply: ToField<"u64">;
    readonly metadata: ToField<String>;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<"u8">>;
    private constructor();
    static reified(): BidVaultReified;
    static get r(): reified.StructClassReified<BidVault, BidVaultFields>;
    static phantom(): PhantomReified<ToTypeStr<BidVault>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::BidVault">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
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
        incentive_token: {
            vec: any[];
        };
        index: string;
        share_supply: string;
        metadata: {
            bytes: number[];
        };
        u64_padding: string[];
        bcs_padding: number[];
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
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
        incentive_token: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        index: string | number | bigint;
        share_supply: string | number | bigint;
        metadata: {
            bytes: Iterable<number> & {
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
    static fromFields(fields: Record<string, any>): BidVault;
    static fromFieldsWithTypes(item: FieldsWithTypes): BidVault;
    static fromBcs(data: Uint8Array): BidVault;
    toJSONField(): {
        id: string;
        depositToken: {
            name: string;
        };
        bidToken: {
            name: string;
        };
        incentiveToken: {
            name: string;
        } | null;
        index: string;
        shareSupply: string;
        metadata: string;
        u64Padding: string[];
        bcsPadding: number[];
    };
    toJSON(): {
        id: string;
        depositToken: {
            name: string;
        };
        bidToken: {
            name: string;
        };
        incentiveToken: {
            name: string;
        } | null;
        index: string;
        shareSupply: string;
        metadata: string;
        u64Padding: string[];
        bcsPadding: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): BidVault;
    static fromJSON(json: Record<string, any>): BidVault;
    static fromSuiParsedData(content: SuiParsedData): BidVault;
    static fetch(client: SuiClient, id: string): Promise<BidVault>;
}
export declare function isClaim(type: string): boolean;
export interface ClaimFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}
export type ClaimReified = Reified<Claim, ClaimFields>;
export declare class Claim implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Claim";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Claim";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Claim";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    private constructor();
    static reified(): ClaimReified;
    static get r(): reified.StructClassReified<Claim, ClaimFields>;
    static phantom(): PhantomReified<ToTypeStr<Claim>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Claim">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
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
    }>;
    static fromFields(fields: Record<string, any>): Claim;
    static fromFieldsWithTypes(item: FieldsWithTypes): Claim;
    static fromBcs(data: Uint8Array): Claim;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Claim;
    static fromJSON(json: Record<string, any>): Claim;
    static fromSuiParsedData(content: SuiParsedData): Claim;
    static fetch(client: SuiClient, id: string): Promise<Claim>;
}
export declare function isCompound(type: string): boolean;
export interface CompoundFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    feeAmount: ToField<"u64">;
    feeShareAmount: ToField<"u64">;
    sharedFeePool: ToField<Option<Vector<"u8">>>;
}
export type CompoundReified = Reified<Compound, CompoundFields>;
export declare class Compound implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Compound";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Compound";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Compound";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly feeAmount: ToField<"u64">;
    readonly feeShareAmount: ToField<"u64">;
    readonly sharedFeePool: ToField<Option<Vector<"u8">>>;
    private constructor();
    static reified(): CompoundReified;
    static get r(): reified.StructClassReified<Compound, CompoundFields>;
    static phantom(): PhantomReified<ToTypeStr<Compound>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Compound">;
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
        fee_share_amount: string;
        shared_fee_pool: {
            vec: any[];
        };
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
        fee_share_amount: string | number | bigint;
        shared_fee_pool: {
            vec: Iterable<any> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): Compound;
    static fromFieldsWithTypes(item: FieldsWithTypes): Compound;
    static fromBcs(data: Uint8Array): Compound;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        feeAmount: string;
        feeShareAmount: string;
        sharedFeePool: number[] | null;
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        feeAmount: string;
        feeShareAmount: string;
        sharedFeePool: number[] | null;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Compound;
    static fromJSON(json: Record<string, any>): Compound;
    static fromSuiParsedData(content: SuiParsedData): Compound;
    static fetch(client: SuiClient, id: string): Promise<Compound>;
}
export declare function isDelivery(type: string): boolean;
export interface DeliveryFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    premiumToken: ToField<TypeName>;
    incentiveToken: ToField<TypeName>;
    premium: ToField<"u64">;
    incentive: ToField<"u64">;
}
export type DeliveryReified = Reified<Delivery, DeliveryFields>;
export declare class Delivery implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Delivery";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Delivery";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Delivery";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly premiumToken: ToField<TypeName>;
    readonly incentiveToken: ToField<TypeName>;
    readonly premium: ToField<"u64">;
    readonly incentive: ToField<"u64">;
    private constructor();
    static reified(): DeliveryReified;
    static get r(): reified.StructClassReified<Delivery, DeliveryFields>;
    static phantom(): PhantomReified<ToTypeStr<Delivery>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Delivery">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        premium_token: {
            name: {
                bytes: number[];
            };
        };
        incentive_token: {
            name: {
                bytes: number[];
            };
        };
        premium: string;
        incentive: string;
    }, {
        signer: string;
        index: string | number | bigint;
        premium_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        incentive_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        premium: string | number | bigint;
        incentive: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Delivery;
    static fromFieldsWithTypes(item: FieldsWithTypes): Delivery;
    static fromBcs(data: Uint8Array): Delivery;
    toJSONField(): {
        signer: string;
        index: string;
        premiumToken: {
            name: string;
        };
        incentiveToken: {
            name: string;
        };
        premium: string;
        incentive: string;
    };
    toJSON(): {
        signer: string;
        index: string;
        premiumToken: {
            name: string;
        };
        incentiveToken: {
            name: string;
        };
        premium: string;
        incentive: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Delivery;
    static fromJSON(json: Record<string, any>): Delivery;
    static fromSuiParsedData(content: SuiParsedData): Delivery;
    static fetch(client: SuiClient, id: string): Promise<Delivery>;
}
export declare function isDeposit(type: string): boolean;
export interface DepositFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}
export type DepositReified = Reified<Deposit, DepositFields>;
export declare class Deposit implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Deposit";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Deposit";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Deposit";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    private constructor();
    static reified(): DepositReified;
    static get r(): reified.StructClassReified<Deposit, DepositFields>;
    static phantom(): PhantomReified<ToTypeStr<Deposit>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Deposit">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
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
    }>;
    static fromFields(fields: Record<string, any>): Deposit;
    static fromFieldsWithTypes(item: FieldsWithTypes): Deposit;
    static fromBcs(data: Uint8Array): Deposit;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Deposit;
    static fromJSON(json: Record<string, any>): Deposit;
    static fromSuiParsedData(content: SuiParsedData): Deposit;
    static fetch(client: SuiClient, id: string): Promise<Deposit>;
}
export declare function isDepositShare(type: string): boolean;
export interface DepositShareFields {
    receipt: ToField<"address">;
    activeShare: ToField<"u64">;
    deactivatingShare: ToField<"u64">;
    inactiveShare: ToField<"u64">;
    warmupShare: ToField<"u64">;
    premiumShare: ToField<"u64">;
    incentiveShare: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type DepositShareReified = Reified<DepositShare, DepositShareFields>;
export declare class DepositShare implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::DepositShare";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::DepositShare";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::DepositShare";
    readonly $typeArgs: [];
    readonly receipt: ToField<"address">;
    readonly activeShare: ToField<"u64">;
    readonly deactivatingShare: ToField<"u64">;
    readonly inactiveShare: ToField<"u64">;
    readonly warmupShare: ToField<"u64">;
    readonly premiumShare: ToField<"u64">;
    readonly incentiveShare: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): DepositShareReified;
    static get r(): reified.StructClassReified<DepositShare, DepositShareFields>;
    static phantom(): PhantomReified<ToTypeStr<DepositShare>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::DepositShare">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        receipt: string;
        active_share: string;
        deactivating_share: string;
        inactive_share: string;
        warmup_share: string;
        premium_share: string;
        incentive_share: string;
        u64_padding: string[];
    }, {
        receipt: string;
        active_share: string | number | bigint;
        deactivating_share: string | number | bigint;
        inactive_share: string | number | bigint;
        warmup_share: string | number | bigint;
        premium_share: string | number | bigint;
        incentive_share: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): DepositShare;
    static fromFieldsWithTypes(item: FieldsWithTypes): DepositShare;
    static fromBcs(data: Uint8Array): DepositShare;
    toJSONField(): {
        receipt: string;
        activeShare: string;
        deactivatingShare: string;
        inactiveShare: string;
        warmupShare: string;
        premiumShare: string;
        incentiveShare: string;
        u64Padding: string[];
    };
    toJSON(): {
        receipt: string;
        activeShare: string;
        deactivatingShare: string;
        inactiveShare: string;
        warmupShare: string;
        premiumShare: string;
        incentiveShare: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DepositShare;
    static fromJSON(json: Record<string, any>): DepositShare;
    static fromSuiParsedData(content: SuiParsedData): DepositShare;
    static fetch(client: SuiClient, id: string): Promise<DepositShare>;
}
export declare function isDepositVault(type: string): boolean;
export interface DepositVaultFields {
    id: ToField<UID>;
    depositToken: ToField<TypeName>;
    bidToken: ToField<TypeName>;
    incentiveToken: ToField<Option<TypeName>>;
    index: ToField<"u64">;
    feeBp: ToField<"u64">;
    feeShareBp: ToField<"u64">;
    sharedFeePool: ToField<Option<Vector<"u8">>>;
    activeShareSupply: ToField<"u64">;
    deactivatingShareSupply: ToField<"u64">;
    inactiveShareSupply: ToField<"u64">;
    warmupShareSupply: ToField<"u64">;
    premiumShareSupply: ToField<"u64">;
    incentiveShareSupply: ToField<"u64">;
    hasNext: ToField<"bool">;
    metadata: ToField<String>;
    u64Padding: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<"u8">>;
}
export type DepositVaultReified = Reified<DepositVault, DepositVaultFields>;
export declare class DepositVault implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::DepositVault";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::DepositVault";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::DepositVault";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly depositToken: ToField<TypeName>;
    readonly bidToken: ToField<TypeName>;
    readonly incentiveToken: ToField<Option<TypeName>>;
    readonly index: ToField<"u64">;
    readonly feeBp: ToField<"u64">;
    readonly feeShareBp: ToField<"u64">;
    readonly sharedFeePool: ToField<Option<Vector<"u8">>>;
    readonly activeShareSupply: ToField<"u64">;
    readonly deactivatingShareSupply: ToField<"u64">;
    readonly inactiveShareSupply: ToField<"u64">;
    readonly warmupShareSupply: ToField<"u64">;
    readonly premiumShareSupply: ToField<"u64">;
    readonly incentiveShareSupply: ToField<"u64">;
    readonly hasNext: ToField<"bool">;
    readonly metadata: ToField<String>;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<"u8">>;
    private constructor();
    static reified(): DepositVaultReified;
    static get r(): reified.StructClassReified<DepositVault, DepositVaultFields>;
    static phantom(): PhantomReified<ToTypeStr<DepositVault>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::DepositVault">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
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
        incentive_token: {
            vec: any[];
        };
        index: string;
        fee_bp: string;
        fee_share_bp: string;
        shared_fee_pool: {
            vec: any[];
        };
        active_share_supply: string;
        deactivating_share_supply: string;
        inactive_share_supply: string;
        warmup_share_supply: string;
        premium_share_supply: string;
        incentive_share_supply: string;
        has_next: boolean;
        metadata: {
            bytes: number[];
        };
        u64_padding: string[];
        bcs_padding: number[];
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
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
        incentive_token: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        index: string | number | bigint;
        fee_bp: string | number | bigint;
        fee_share_bp: string | number | bigint;
        shared_fee_pool: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        active_share_supply: string | number | bigint;
        deactivating_share_supply: string | number | bigint;
        inactive_share_supply: string | number | bigint;
        warmup_share_supply: string | number | bigint;
        premium_share_supply: string | number | bigint;
        incentive_share_supply: string | number | bigint;
        has_next: boolean;
        metadata: {
            bytes: Iterable<number> & {
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
    static fromFields(fields: Record<string, any>): DepositVault;
    static fromFieldsWithTypes(item: FieldsWithTypes): DepositVault;
    static fromBcs(data: Uint8Array): DepositVault;
    toJSONField(): {
        id: string;
        depositToken: {
            name: string;
        };
        bidToken: {
            name: string;
        };
        incentiveToken: {
            name: string;
        } | null;
        index: string;
        feeBp: string;
        feeShareBp: string;
        sharedFeePool: number[] | null;
        activeShareSupply: string;
        deactivatingShareSupply: string;
        inactiveShareSupply: string;
        warmupShareSupply: string;
        premiumShareSupply: string;
        incentiveShareSupply: string;
        hasNext: boolean;
        metadata: string;
        u64Padding: string[];
        bcsPadding: number[];
    };
    toJSON(): {
        id: string;
        depositToken: {
            name: string;
        };
        bidToken: {
            name: string;
        };
        incentiveToken: {
            name: string;
        } | null;
        index: string;
        feeBp: string;
        feeShareBp: string;
        sharedFeePool: number[] | null;
        activeShareSupply: string;
        deactivatingShareSupply: string;
        inactiveShareSupply: string;
        warmupShareSupply: string;
        premiumShareSupply: string;
        incentiveShareSupply: string;
        hasNext: boolean;
        metadata: string;
        u64Padding: string[];
        bcsPadding: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DepositVault;
    static fromJSON(json: Record<string, any>): DepositVault;
    static fromSuiParsedData(content: SuiParsedData): DepositVault;
    static fetch(client: SuiClient, id: string): Promise<DepositVault>;
}
export declare function isExercise(type: string): boolean;
export interface ExerciseFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    depositToken: ToField<TypeName>;
    incentiveToken: ToField<Option<TypeName>>;
    amount: ToField<"u64">;
}
export type ExerciseReified = Reified<Exercise, ExerciseFields>;
export declare class Exercise implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Exercise";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Exercise";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Exercise";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly depositToken: ToField<TypeName>;
    readonly incentiveToken: ToField<Option<TypeName>>;
    readonly amount: ToField<"u64">;
    private constructor();
    static reified(): ExerciseReified;
    static get r(): reified.StructClassReified<Exercise, ExerciseFields>;
    static phantom(): PhantomReified<ToTypeStr<Exercise>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Exercise">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        deposit_token: {
            name: {
                bytes: number[];
            };
        };
        incentive_token: {
            vec: any[];
        };
        amount: string;
    }, {
        signer: string;
        index: string | number | bigint;
        deposit_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        incentive_token: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Exercise;
    static fromFieldsWithTypes(item: FieldsWithTypes): Exercise;
    static fromBcs(data: Uint8Array): Exercise;
    toJSONField(): {
        signer: string;
        index: string;
        depositToken: {
            name: string;
        };
        incentiveToken: {
            name: string;
        } | null;
        amount: string;
    };
    toJSON(): {
        signer: string;
        index: string;
        depositToken: {
            name: string;
        };
        incentiveToken: {
            name: string;
        } | null;
        amount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Exercise;
    static fromJSON(json: Record<string, any>): Exercise;
    static fromSuiParsedData(content: SuiParsedData): Exercise;
    static fetch(client: SuiClient, id: string): Promise<Exercise>;
}
export declare function isHarvest(type: string): boolean;
export interface HarvestFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
    feeAmount: ToField<"u64">;
    feeShareAmount: ToField<"u64">;
    sharedFeePool: ToField<Option<Vector<"u8">>>;
}
export type HarvestReified = Reified<Harvest, HarvestFields>;
export declare class Harvest implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Harvest";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Harvest";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Harvest";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly feeAmount: ToField<"u64">;
    readonly feeShareAmount: ToField<"u64">;
    readonly sharedFeePool: ToField<Option<Vector<"u8">>>;
    private constructor();
    static reified(): HarvestReified;
    static get r(): reified.StructClassReified<Harvest, HarvestFields>;
    static phantom(): PhantomReified<ToTypeStr<Harvest>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Harvest">;
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
        fee_share_amount: string;
        shared_fee_pool: {
            vec: any[];
        };
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
        fee_share_amount: string | number | bigint;
        shared_fee_pool: {
            vec: Iterable<any> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): Harvest;
    static fromFieldsWithTypes(item: FieldsWithTypes): Harvest;
    static fromBcs(data: Uint8Array): Harvest;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        feeAmount: string;
        feeShareAmount: string;
        sharedFeePool: number[] | null;
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        feeAmount: string;
        feeShareAmount: string;
        sharedFeePool: number[] | null;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Harvest;
    static fromJSON(json: Record<string, any>): Harvest;
    static fromSuiParsedData(content: SuiParsedData): Harvest;
    static fetch(client: SuiClient, id: string): Promise<Harvest>;
}
export declare function isIncentiviseBidder(type: string): boolean;
export interface IncentiviseBidderFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}
export type IncentiviseBidderReified = Reified<IncentiviseBidder, IncentiviseBidderFields>;
export declare class IncentiviseBidder implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::IncentiviseBidder";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::IncentiviseBidder";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::IncentiviseBidder";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    private constructor();
    static reified(): IncentiviseBidderReified;
    static get r(): reified.StructClassReified<IncentiviseBidder, IncentiviseBidderFields>;
    static phantom(): PhantomReified<ToTypeStr<IncentiviseBidder>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::IncentiviseBidder">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
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
    }>;
    static fromFields(fields: Record<string, any>): IncentiviseBidder;
    static fromFieldsWithTypes(item: FieldsWithTypes): IncentiviseBidder;
    static fromBcs(data: Uint8Array): IncentiviseBidder;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): IncentiviseBidder;
    static fromJSON(json: Record<string, any>): IncentiviseBidder;
    static fromSuiParsedData(content: SuiParsedData): IncentiviseBidder;
    static fetch(client: SuiClient, id: string): Promise<IncentiviseBidder>;
}
export declare function isNewBidVault(type: string): boolean;
export interface NewBidVaultFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    bidToken: ToField<TypeName>;
}
export type NewBidVaultReified = Reified<NewBidVault, NewBidVaultFields>;
export declare class NewBidVault implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewBidVault";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewBidVault";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewBidVault";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly bidToken: ToField<TypeName>;
    private constructor();
    static reified(): NewBidVaultReified;
    static get r(): reified.StructClassReified<NewBidVault, NewBidVaultFields>;
    static phantom(): PhantomReified<ToTypeStr<NewBidVault>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewBidVault">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        bid_token: {
            name: {
                bytes: number[];
            };
        };
    }, {
        signer: string;
        index: string | number | bigint;
        bid_token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): NewBidVault;
    static fromFieldsWithTypes(item: FieldsWithTypes): NewBidVault;
    static fromBcs(data: Uint8Array): NewBidVault;
    toJSONField(): {
        signer: string;
        index: string;
        bidToken: {
            name: string;
        };
    };
    toJSON(): {
        signer: string;
        index: string;
        bidToken: {
            name: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NewBidVault;
    static fromJSON(json: Record<string, any>): NewBidVault;
    static fromSuiParsedData(content: SuiParsedData): NewBidVault;
    static fetch(client: SuiClient, id: string): Promise<NewBidVault>;
}
export declare function isNewDepositVault(type: string): boolean;
export interface NewDepositVaultFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    depositToken: ToField<TypeName>;
    bidToken: ToField<TypeName>;
}
export type NewDepositVaultReified = Reified<NewDepositVault, NewDepositVaultFields>;
export declare class NewDepositVault implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewDepositVault";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewDepositVault";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewDepositVault";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly depositToken: ToField<TypeName>;
    readonly bidToken: ToField<TypeName>;
    private constructor();
    static reified(): NewDepositVaultReified;
    static get r(): reified.StructClassReified<NewDepositVault, NewDepositVaultFields>;
    static phantom(): PhantomReified<ToTypeStr<NewDepositVault>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewDepositVault">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
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
    }, {
        signer: string;
        index: string | number | bigint;
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
    }>;
    static fromFields(fields: Record<string, any>): NewDepositVault;
    static fromFieldsWithTypes(item: FieldsWithTypes): NewDepositVault;
    static fromBcs(data: Uint8Array): NewDepositVault;
    toJSONField(): {
        signer: string;
        index: string;
        depositToken: {
            name: string;
        };
        bidToken: {
            name: string;
        };
    };
    toJSON(): {
        signer: string;
        index: string;
        depositToken: {
            name: string;
        };
        bidToken: {
            name: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NewDepositVault;
    static fromJSON(json: Record<string, any>): NewDepositVault;
    static fromSuiParsedData(content: SuiParsedData): NewDepositVault;
    static fetch(client: SuiClient, id: string): Promise<NewDepositVault>;
}
export declare function isNewRefundVault(type: string): boolean;
export interface NewRefundVaultFields {
    signer: ToField<"address">;
    token: ToField<TypeName>;
}
export type NewRefundVaultReified = Reified<NewRefundVault, NewRefundVaultFields>;
export declare class NewRefundVault implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewRefundVault";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewRefundVault";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewRefundVault";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly token: ToField<TypeName>;
    private constructor();
    static reified(): NewRefundVaultReified;
    static get r(): reified.StructClassReified<NewRefundVault, NewRefundVaultFields>;
    static phantom(): PhantomReified<ToTypeStr<NewRefundVault>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::NewRefundVault">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        token: {
            name: {
                bytes: number[];
            };
        };
    }, {
        signer: string;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): NewRefundVault;
    static fromFieldsWithTypes(item: FieldsWithTypes): NewRefundVault;
    static fromBcs(data: Uint8Array): NewRefundVault;
    toJSONField(): {
        signer: string;
        token: {
            name: string;
        };
    };
    toJSON(): {
        signer: string;
        token: {
            name: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NewRefundVault;
    static fromJSON(json: Record<string, any>): NewRefundVault;
    static fromSuiParsedData(content: SuiParsedData): NewRefundVault;
    static fetch(client: SuiClient, id: string): Promise<NewRefundVault>;
}
export declare function isRecoup(type: string): boolean;
export interface RecoupFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    active: ToField<"u64">;
    deactivating: ToField<"u64">;
}
export type RecoupReified = Reified<Recoup, RecoupFields>;
export declare class Recoup implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Recoup";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Recoup";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Recoup";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly active: ToField<"u64">;
    readonly deactivating: ToField<"u64">;
    private constructor();
    static reified(): RecoupReified;
    static get r(): reified.StructClassReified<Recoup, RecoupFields>;
    static phantom(): PhantomReified<ToTypeStr<Recoup>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Recoup">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        active: string;
        deactivating: string;
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
        active: string | number | bigint;
        deactivating: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Recoup;
    static fromFieldsWithTypes(item: FieldsWithTypes): Recoup;
    static fromBcs(data: Uint8Array): Recoup;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        active: string;
        deactivating: string;
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        active: string;
        deactivating: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Recoup;
    static fromJSON(json: Record<string, any>): Recoup;
    static fromSuiParsedData(content: SuiParsedData): Recoup;
    static fetch(client: SuiClient, id: string): Promise<Recoup>;
}
export declare function isRedeem(type: string): boolean;
export interface RedeemFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}
export type RedeemReified = Reified<Redeem, RedeemFields>;
export declare class Redeem implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Redeem";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Redeem";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Redeem";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    private constructor();
    static reified(): RedeemReified;
    static get r(): reified.StructClassReified<Redeem, RedeemFields>;
    static phantom(): PhantomReified<ToTypeStr<Redeem>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Redeem">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
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
    }>;
    static fromFields(fields: Record<string, any>): Redeem;
    static fromFieldsWithTypes(item: FieldsWithTypes): Redeem;
    static fromBcs(data: Uint8Array): Redeem;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Redeem;
    static fromJSON(json: Record<string, any>): Redeem;
    static fromSuiParsedData(content: SuiParsedData): Redeem;
    static fetch(client: SuiClient, id: string): Promise<Redeem>;
}
export declare function isRefundShare(type: string): boolean;
export interface RefundShareFields {
    user: ToField<"address">;
    share: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}
export type RefundShareReified = Reified<RefundShare, RefundShareFields>;
export declare class RefundShare implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::RefundShare";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::RefundShare";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::RefundShare";
    readonly $typeArgs: [];
    readonly user: ToField<"address">;
    readonly share: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): RefundShareReified;
    static get r(): reified.StructClassReified<RefundShare, RefundShareFields>;
    static phantom(): PhantomReified<ToTypeStr<RefundShare>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::RefundShare">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        share: string;
        u64_padding: string[];
    }, {
        user: string;
        share: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RefundShare;
    static fromFieldsWithTypes(item: FieldsWithTypes): RefundShare;
    static fromBcs(data: Uint8Array): RefundShare;
    toJSONField(): {
        user: string;
        share: string;
        u64Padding: string[];
    };
    toJSON(): {
        user: string;
        share: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RefundShare;
    static fromJSON(json: Record<string, any>): RefundShare;
    static fromSuiParsedData(content: SuiParsedData): RefundShare;
    static fetch(client: SuiClient, id: string): Promise<RefundShare>;
}
export declare function isRefundVault(type: string): boolean;
export interface RefundVaultFields {
    id: ToField<UID>;
    token: ToField<TypeName>;
    shareSupply: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<"u8">>;
}
export type RefundVaultReified = Reified<RefundVault, RefundVaultFields>;
export declare class RefundVault implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::RefundVault";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::RefundVault";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::RefundVault";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly token: ToField<TypeName>;
    readonly shareSupply: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<"u8">>;
    private constructor();
    static reified(): RefundVaultReified;
    static get r(): reified.StructClassReified<RefundVault, RefundVaultFields>;
    static phantom(): PhantomReified<ToTypeStr<RefundVault>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::RefundVault">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        token: {
            name: {
                bytes: number[];
            };
        };
        share_supply: string;
        u64_padding: string[];
        bcs_padding: number[];
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        share_supply: string | number | bigint;
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
        bcs_padding: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RefundVault;
    static fromFieldsWithTypes(item: FieldsWithTypes): RefundVault;
    static fromBcs(data: Uint8Array): RefundVault;
    toJSONField(): {
        id: string;
        token: {
            name: string;
        };
        shareSupply: string;
        u64Padding: string[];
        bcsPadding: number[];
    };
    toJSON(): {
        id: string;
        token: {
            name: string;
        };
        shareSupply: string;
        u64Padding: string[];
        bcsPadding: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RefundVault;
    static fromJSON(json: Record<string, any>): RefundVault;
    static fromSuiParsedData(content: SuiParsedData): RefundVault;
    static fetch(client: SuiClient, id: string): Promise<RefundVault>;
}
export declare function isSettle(type: string): boolean;
export interface SettleFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    depositToken: ToField<TypeName>;
    bidToken: ToField<TypeName>;
    sharePrice: ToField<"u64">;
    sharePriceDecimal: ToField<"u64">;
}
export type SettleReified = Reified<Settle, SettleFields>;
export declare class Settle implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Settle";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Settle";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Settle";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly depositToken: ToField<TypeName>;
    readonly bidToken: ToField<TypeName>;
    readonly sharePrice: ToField<"u64">;
    readonly sharePriceDecimal: ToField<"u64">;
    private constructor();
    static reified(): SettleReified;
    static get r(): reified.StructClassReified<Settle, SettleFields>;
    static phantom(): PhantomReified<ToTypeStr<Settle>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Settle">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
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
        share_price: string;
        share_price_decimal: string;
    }, {
        signer: string;
        index: string | number | bigint;
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
        share_price: string | number | bigint;
        share_price_decimal: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Settle;
    static fromFieldsWithTypes(item: FieldsWithTypes): Settle;
    static fromBcs(data: Uint8Array): Settle;
    toJSONField(): {
        signer: string;
        index: string;
        depositToken: {
            name: string;
        };
        bidToken: {
            name: string;
        };
        sharePrice: string;
        sharePriceDecimal: string;
    };
    toJSON(): {
        signer: string;
        index: string;
        depositToken: {
            name: string;
        };
        bidToken: {
            name: string;
        };
        sharePrice: string;
        sharePriceDecimal: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Settle;
    static fromJSON(json: Record<string, any>): Settle;
    static fromSuiParsedData(content: SuiParsedData): Settle;
    static fetch(client: SuiClient, id: string): Promise<Settle>;
}
export declare function isTerminate(type: string): boolean;
export interface TerminateFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
}
export type TerminateReified = Reified<Terminate, TerminateFields>;
export declare class Terminate implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Terminate";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Terminate";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Terminate";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    private constructor();
    static reified(): TerminateReified;
    static get r(): reified.StructClassReified<Terminate, TerminateFields>;
    static phantom(): PhantomReified<ToTypeStr<Terminate>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Terminate">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
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
    }>;
    static fromFields(fields: Record<string, any>): Terminate;
    static fromFieldsWithTypes(item: FieldsWithTypes): Terminate;
    static fromBcs(data: Uint8Array): Terminate;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Terminate;
    static fromJSON(json: Record<string, any>): Terminate;
    static fromSuiParsedData(content: SuiParsedData): Terminate;
    static fetch(client: SuiClient, id: string): Promise<Terminate>;
}
export declare function isTypusBidReceipt(type: string): boolean;
export interface TypusBidReceiptFields {
    id: ToField<UID>;
    vid: ToField<ID>;
    index: ToField<"u64">;
    metadata: ToField<String>;
    u64Padding: ToField<Vector<"u64">>;
}
export type TypusBidReceiptReified = Reified<TypusBidReceipt, TypusBidReceiptFields>;
export declare class TypusBidReceipt implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::TypusBidReceipt";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::TypusBidReceipt";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::TypusBidReceipt";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly vid: ToField<ID>;
    readonly index: ToField<"u64">;
    readonly metadata: ToField<String>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): TypusBidReceiptReified;
    static get r(): reified.StructClassReified<TypusBidReceipt, TypusBidReceiptFields>;
    static phantom(): PhantomReified<ToTypeStr<TypusBidReceipt>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::TypusBidReceipt">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        vid: {
            bytes: string;
        };
        index: string;
        metadata: {
            bytes: number[];
        };
        u64_padding: string[];
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        vid: {
            bytes: string;
        };
        index: string | number | bigint;
        metadata: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): TypusBidReceipt;
    static fromFieldsWithTypes(item: FieldsWithTypes): TypusBidReceipt;
    static fromBcs(data: Uint8Array): TypusBidReceipt;
    toJSONField(): {
        id: string;
        vid: string;
        index: string;
        metadata: string;
        u64Padding: string[];
    };
    toJSON(): {
        id: string;
        vid: string;
        index: string;
        metadata: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TypusBidReceipt;
    static fromJSON(json: Record<string, any>): TypusBidReceipt;
    static fromSuiParsedData(content: SuiParsedData): TypusBidReceipt;
    static fetch(client: SuiClient, id: string): Promise<TypusBidReceipt>;
}
export declare function isTypusDepositReceipt(type: string): boolean;
export interface TypusDepositReceiptFields {
    id: ToField<UID>;
    vid: ToField<ID>;
    index: ToField<"u64">;
    metadata: ToField<String>;
    u64Padding: ToField<Vector<"u64">>;
}
export type TypusDepositReceiptReified = Reified<TypusDepositReceipt, TypusDepositReceiptFields>;
export declare class TypusDepositReceipt implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::TypusDepositReceipt";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::TypusDepositReceipt";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::TypusDepositReceipt";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly vid: ToField<ID>;
    readonly index: ToField<"u64">;
    readonly metadata: ToField<String>;
    readonly u64Padding: ToField<Vector<"u64">>;
    private constructor();
    static reified(): TypusDepositReceiptReified;
    static get r(): reified.StructClassReified<TypusDepositReceipt, TypusDepositReceiptFields>;
    static phantom(): PhantomReified<ToTypeStr<TypusDepositReceipt>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::TypusDepositReceipt">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        vid: {
            bytes: string;
        };
        index: string;
        metadata: {
            bytes: number[];
        };
        u64_padding: string[];
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        vid: {
            bytes: string;
        };
        index: string | number | bigint;
        metadata: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        u64_padding: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): TypusDepositReceipt;
    static fromFieldsWithTypes(item: FieldsWithTypes): TypusDepositReceipt;
    static fromBcs(data: Uint8Array): TypusDepositReceipt;
    toJSONField(): {
        id: string;
        vid: string;
        index: string;
        metadata: string;
        u64Padding: string[];
    };
    toJSON(): {
        id: string;
        vid: string;
        index: string;
        metadata: string;
        u64Padding: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TypusDepositReceipt;
    static fromJSON(json: Record<string, any>): TypusDepositReceipt;
    static fromSuiParsedData(content: SuiParsedData): TypusDepositReceipt;
    static fetch(client: SuiClient, id: string): Promise<TypusDepositReceipt>;
}
export declare function isUnsubscribe(type: string): boolean;
export interface UnsubscribeFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}
export type UnsubscribeReified = Reified<Unsubscribe, UnsubscribeFields>;
export declare class Unsubscribe implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Unsubscribe";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Unsubscribe";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Unsubscribe";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    private constructor();
    static reified(): UnsubscribeReified;
    static get r(): reified.StructClassReified<Unsubscribe, UnsubscribeFields>;
    static phantom(): PhantomReified<ToTypeStr<Unsubscribe>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Unsubscribe">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
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
    }>;
    static fromFields(fields: Record<string, any>): Unsubscribe;
    static fromFieldsWithTypes(item: FieldsWithTypes): Unsubscribe;
    static fromBcs(data: Uint8Array): Unsubscribe;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Unsubscribe;
    static fromJSON(json: Record<string, any>): Unsubscribe;
    static fromSuiParsedData(content: SuiParsedData): Unsubscribe;
    static fetch(client: SuiClient, id: string): Promise<Unsubscribe>;
}
export declare function isUpdateFeeConfig(type: string): boolean;
export interface UpdateFeeConfigFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    prevFeeBp: ToField<"u64">;
    feeBp: ToField<"u64">;
}
export type UpdateFeeConfigReified = Reified<UpdateFeeConfig, UpdateFeeConfigFields>;
export declare class UpdateFeeConfig implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::UpdateFeeConfig";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::UpdateFeeConfig";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::UpdateFeeConfig";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly prevFeeBp: ToField<"u64">;
    readonly feeBp: ToField<"u64">;
    private constructor();
    static reified(): UpdateFeeConfigReified;
    static get r(): reified.StructClassReified<UpdateFeeConfig, UpdateFeeConfigFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateFeeConfig>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::UpdateFeeConfig">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        prev_fee_bp: string;
        fee_bp: string;
    }, {
        signer: string;
        index: string | number | bigint;
        prev_fee_bp: string | number | bigint;
        fee_bp: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): UpdateFeeConfig;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateFeeConfig;
    static fromBcs(data: Uint8Array): UpdateFeeConfig;
    toJSONField(): {
        signer: string;
        index: string;
        prevFeeBp: string;
        feeBp: string;
    };
    toJSON(): {
        signer: string;
        index: string;
        prevFeeBp: string;
        feeBp: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateFeeConfig;
    static fromJSON(json: Record<string, any>): UpdateFeeConfig;
    static fromSuiParsedData(content: SuiParsedData): UpdateFeeConfig;
    static fetch(client: SuiClient, id: string): Promise<UpdateFeeConfig>;
}
export declare function isUpdateFeeShareConfig(type: string): boolean;
export interface UpdateFeeShareConfigFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    prevFeeBp: ToField<"u64">;
    prevSharedFeePool: ToField<Option<Vector<"u8">>>;
    feeBp: ToField<"u64">;
    sharedFeePool: ToField<Option<Vector<"u8">>>;
}
export type UpdateFeeShareConfigReified = Reified<UpdateFeeShareConfig, UpdateFeeShareConfigFields>;
export declare class UpdateFeeShareConfig implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::UpdateFeeShareConfig";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::UpdateFeeShareConfig";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::UpdateFeeShareConfig";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly prevFeeBp: ToField<"u64">;
    readonly prevSharedFeePool: ToField<Option<Vector<"u8">>>;
    readonly feeBp: ToField<"u64">;
    readonly sharedFeePool: ToField<Option<Vector<"u8">>>;
    private constructor();
    static reified(): UpdateFeeShareConfigReified;
    static get r(): reified.StructClassReified<UpdateFeeShareConfig, UpdateFeeShareConfigFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateFeeShareConfig>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::UpdateFeeShareConfig">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        prev_fee_bp: string;
        prev_shared_fee_pool: {
            vec: any[];
        };
        fee_bp: string;
        shared_fee_pool: {
            vec: any[];
        };
    }, {
        signer: string;
        index: string | number | bigint;
        prev_fee_bp: string | number | bigint;
        prev_shared_fee_pool: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        fee_bp: string | number | bigint;
        shared_fee_pool: {
            vec: Iterable<any> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): UpdateFeeShareConfig;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateFeeShareConfig;
    static fromBcs(data: Uint8Array): UpdateFeeShareConfig;
    toJSONField(): {
        signer: string;
        index: string;
        prevFeeBp: string;
        prevSharedFeePool: number[] | null;
        feeBp: string;
        sharedFeePool: number[] | null;
    };
    toJSON(): {
        signer: string;
        index: string;
        prevFeeBp: string;
        prevSharedFeePool: number[] | null;
        feeBp: string;
        sharedFeePool: number[] | null;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateFeeShareConfig;
    static fromJSON(json: Record<string, any>): UpdateFeeShareConfig;
    static fromSuiParsedData(content: SuiParsedData): UpdateFeeShareConfig;
    static fetch(client: SuiClient, id: string): Promise<UpdateFeeShareConfig>;
}
export declare function isVAULT(type: string): boolean;
export interface VAULTFields {
    dummyField: ToField<"bool">;
}
export type VAULTReified = Reified<VAULT, VAULTFields>;
export declare class VAULT implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::VAULT";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::VAULT";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::VAULT";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): VAULTReified;
    static get r(): reified.StructClassReified<VAULT, VAULTFields>;
    static phantom(): PhantomReified<ToTypeStr<VAULT>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::VAULT">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): VAULT;
    static fromFieldsWithTypes(item: FieldsWithTypes): VAULT;
    static fromBcs(data: Uint8Array): VAULT;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): VAULT;
    static fromJSON(json: Record<string, any>): VAULT;
    static fromSuiParsedData(content: SuiParsedData): VAULT;
    static fetch(client: SuiClient, id: string): Promise<VAULT>;
}
export declare function isWithdraw(type: string): boolean;
export interface WithdrawFields {
    signer: ToField<"address">;
    index: ToField<"u64">;
    token: ToField<TypeName>;
    amount: ToField<"u64">;
}
export type WithdrawReified = Reified<Withdraw, WithdrawFields>;
export declare class Withdraw implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Withdraw";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Withdraw";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Withdraw";
    readonly $typeArgs: [];
    readonly signer: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    private constructor();
    static reified(): WithdrawReified;
    static get r(): reified.StructClassReified<Withdraw, WithdrawFields>;
    static phantom(): PhantomReified<ToTypeStr<Withdraw>>;
    static get p(): reified.PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::Withdraw">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        signer: string;
        index: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        amount: string;
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
    }>;
    static fromFields(fields: Record<string, any>): Withdraw;
    static fromFieldsWithTypes(item: FieldsWithTypes): Withdraw;
    static fromBcs(data: Uint8Array): Withdraw;
    toJSONField(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
    };
    toJSON(): {
        signer: string;
        index: string;
        token: {
            name: string;
        };
        amount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Withdraw;
    static fromJSON(json: Record<string, any>): Withdraw;
    static fromSuiParsedData(content: SuiParsedData): Withdraw;
    static fetch(client: SuiClient, id: string): Promise<Withdraw>;
}
