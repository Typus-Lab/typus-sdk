import * as reified from "../../../../_framework/reified";
import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, Vector, ToTypeStr as ToPhantom } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { String } from "../../0x1/string/structs";
import { TypeName } from "../../0x1/type-name/structs";
import { Balance } from "../../0x2/balance/structs";
import { ObjectTable } from "../../0x2/object-table/structs";
import { ID, UID } from "../../0x2/object/structs";
import { SUI } from "../../0x2/sui/structs";
import { TransferPolicy } from "../../0x2/transfer-policy/structs";
import { VecMap } from "../../0x2/vec-map/structs";
import { ManagerCap, Tails } from "../../0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828/typus-nft/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isWithdrawEvent(type: string): boolean;
export interface WithdrawEventFields {
    sender: ToField<"address">;
    receiver: ToField<"address">;
    amount: ToField<"u64">;
}
export type WithdrawEventReified = Reified<WithdrawEvent, WithdrawEventFields>;
export declare class WithdrawEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::WithdrawEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::WithdrawEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::WithdrawEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly receiver: ToField<"address">;
    readonly amount: ToField<"u64">;
    private constructor();
    static reified(): WithdrawEventReified;
    static get r(): reified.StructClassReified<WithdrawEvent, WithdrawEventFields>;
    static phantom(): PhantomReified<ToTypeStr<WithdrawEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::WithdrawEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        receiver: string;
        amount: string;
    }, {
        sender: string;
        receiver: string;
        amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): WithdrawEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): WithdrawEvent;
    static fromBcs(data: Uint8Array): WithdrawEvent;
    toJSONField(): {
        sender: string;
        receiver: string;
        amount: string;
    };
    toJSON(): {
        sender: string;
        receiver: string;
        amount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): WithdrawEvent;
    static fromJSON(json: Record<string, any>): WithdrawEvent;
    static fromSuiParsedData(content: SuiParsedData): WithdrawEvent;
    static fetch(client: SuiClient, id: string): Promise<WithdrawEvent>;
}
export declare function isLevelUpEvent(type: string): boolean;
export interface LevelUpEventFields {
    nftId: ToField<ID>;
    number: ToField<"u64">;
    sender: ToField<"address">;
    level: ToField<"u64">;
}
export type LevelUpEventReified = Reified<LevelUpEvent, LevelUpEventFields>;
export declare class LevelUpEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::LevelUpEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::LevelUpEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::LevelUpEvent";
    readonly $typeArgs: [];
    readonly nftId: ToField<ID>;
    readonly number: ToField<"u64">;
    readonly sender: ToField<"address">;
    readonly level: ToField<"u64">;
    private constructor();
    static reified(): LevelUpEventReified;
    static get r(): reified.StructClassReified<LevelUpEvent, LevelUpEventFields>;
    static phantom(): PhantomReified<ToTypeStr<LevelUpEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::LevelUpEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        nft_id: {
            bytes: string;
        };
        number: string;
        sender: string;
        level: string;
    }, {
        nft_id: {
            bytes: string;
        };
        number: string | number | bigint;
        sender: string;
        level: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): LevelUpEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): LevelUpEvent;
    static fromBcs(data: Uint8Array): LevelUpEvent;
    toJSONField(): {
        nftId: string;
        number: string;
        sender: string;
        level: string;
    };
    toJSON(): {
        nftId: string;
        number: string;
        sender: string;
        level: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): LevelUpEvent;
    static fromJSON(json: Record<string, any>): LevelUpEvent;
    static fromSuiParsedData(content: SuiParsedData): LevelUpEvent;
    static fetch(client: SuiClient, id: string): Promise<LevelUpEvent>;
}
export declare function isNftExtension(type: string): boolean;
export interface NftExtensionFields {
    id: ToField<UID>;
    nftTable: ToField<ObjectTable<"address", ToPhantom<Tails>>>;
    nftManagerCap: ToField<ManagerCap>;
    policy: ToField<TransferPolicy<ToPhantom<Tails>>>;
    fee: ToField<Balance<ToPhantom<SUI>>>;
}
export type NftExtensionReified = Reified<NftExtension, NftExtensionFields>;
export declare class NftExtension implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::NftExtension";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::NftExtension";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::NftExtension";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly nftTable: ToField<ObjectTable<"address", ToPhantom<Tails>>>;
    readonly nftManagerCap: ToField<ManagerCap>;
    readonly policy: ToField<TransferPolicy<ToPhantom<Tails>>>;
    readonly fee: ToField<Balance<ToPhantom<SUI>>>;
    private constructor();
    static reified(): NftExtensionReified;
    static get r(): reified.StructClassReified<NftExtension, NftExtensionFields>;
    static phantom(): PhantomReified<ToTypeStr<NftExtension>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::NftExtension">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        nft_table: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
        nft_manager_cap: {
            id: {
                id: {
                    bytes: string;
                };
            };
        };
        policy: {
            id: {
                id: {
                    bytes: string;
                };
            };
            balance: {
                value: string;
            };
            rules: {
                contents: any[];
            };
        };
        fee: {
            value: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        nft_table: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
        nft_manager_cap: {
            id: {
                id: {
                    bytes: string;
                };
            };
        };
        policy: {
            id: {
                id: {
                    bytes: string;
                };
            };
            balance: {
                value: string | number | bigint;
            };
            rules: {
                contents: Iterable<any> & {
                    length: number;
                };
            };
        };
        fee: {
            value: string | number | bigint;
        };
    }>;
    static fromFields(fields: Record<string, any>): NftExtension;
    static fromFieldsWithTypes(item: FieldsWithTypes): NftExtension;
    static fromBcs(data: Uint8Array): NftExtension;
    toJSONField(): {
        id: string;
        nftTable: {
            id: string;
            size: string;
        };
        nftManagerCap: {
            id: string;
        };
        policy: {
            id: string;
            balance: {
                value: string;
            };
            rules: {
                contents: {
                    name: string;
                }[];
            };
        };
        fee: {
            value: string;
        };
    };
    toJSON(): {
        id: string;
        nftTable: {
            id: string;
            size: string;
        };
        nftManagerCap: {
            id: string;
        };
        policy: {
            id: string;
            balance: {
                value: string;
            };
            rules: {
                contents: {
                    name: string;
                }[];
            };
        };
        fee: {
            value: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NftExtension;
    static fromJSON(json: Record<string, any>): NftExtension;
    static fromSuiParsedData(content: SuiParsedData): NftExtension;
    static fetch(client: SuiClient, id: string): Promise<NftExtension>;
}
export declare function isClaimProfitSharingEvent(type: string): boolean;
export interface ClaimProfitSharingEventFields {
    value: ToField<"u64">;
    token: ToField<TypeName>;
    sender: ToField<"address">;
    nftId: ToField<ID>;
    number: ToField<"u64">;
    level: ToField<"u64">;
}
export type ClaimProfitSharingEventReified = Reified<ClaimProfitSharingEvent, ClaimProfitSharingEventFields>;
export declare class ClaimProfitSharingEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ClaimProfitSharingEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ClaimProfitSharingEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ClaimProfitSharingEvent";
    readonly $typeArgs: [];
    readonly value: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly sender: ToField<"address">;
    readonly nftId: ToField<ID>;
    readonly number: ToField<"u64">;
    readonly level: ToField<"u64">;
    private constructor();
    static reified(): ClaimProfitSharingEventReified;
    static get r(): reified.StructClassReified<ClaimProfitSharingEvent, ClaimProfitSharingEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ClaimProfitSharingEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ClaimProfitSharingEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        value: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        sender: string;
        nft_id: {
            bytes: string;
        };
        number: string;
        level: string;
    }, {
        value: string | number | bigint;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        sender: string;
        nft_id: {
            bytes: string;
        };
        number: string | number | bigint;
        level: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): ClaimProfitSharingEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ClaimProfitSharingEvent;
    static fromBcs(data: Uint8Array): ClaimProfitSharingEvent;
    toJSONField(): {
        value: string;
        token: {
            name: string;
        };
        sender: string;
        nftId: string;
        number: string;
        level: string;
    };
    toJSON(): {
        value: string;
        token: {
            name: string;
        };
        sender: string;
        nftId: string;
        number: string;
        level: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ClaimProfitSharingEvent;
    static fromJSON(json: Record<string, any>): ClaimProfitSharingEvent;
    static fromSuiParsedData(content: SuiParsedData): ClaimProfitSharingEvent;
    static fetch(client: SuiClient, id: string): Promise<ClaimProfitSharingEvent>;
}
export declare function isClaimProfitSharingEventV2(type: string): boolean;
export interface ClaimProfitSharingEventV2Fields {
    value: ToField<"u64">;
    token: ToField<TypeName>;
    sender: ToField<"address">;
    nftId: ToField<ID>;
    number: ToField<"u64">;
    level: ToField<"u64">;
    name: ToField<String>;
}
export type ClaimProfitSharingEventV2Reified = Reified<ClaimProfitSharingEventV2, ClaimProfitSharingEventV2Fields>;
export declare class ClaimProfitSharingEventV2 implements StructClass {
    static readonly $typeName = "0x48b15aafeb26ade39d0c2a3b8c3635bfe8396084812b6fcaeb1104eac793b4a5::tails_staking::ClaimProfitSharingEventV2";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x48b15aafeb26ade39d0c2a3b8c3635bfe8396084812b6fcaeb1104eac793b4a5::tails_staking::ClaimProfitSharingEventV2";
    readonly $fullTypeName: "0x48b15aafeb26ade39d0c2a3b8c3635bfe8396084812b6fcaeb1104eac793b4a5::tails_staking::ClaimProfitSharingEventV2";
    readonly $typeArgs: [];
    readonly value: ToField<"u64">;
    readonly token: ToField<TypeName>;
    readonly sender: ToField<"address">;
    readonly nftId: ToField<ID>;
    readonly number: ToField<"u64">;
    readonly level: ToField<"u64">;
    readonly name: ToField<String>;
    private constructor();
    static reified(): ClaimProfitSharingEventV2Reified;
    static get r(): reified.StructClassReified<ClaimProfitSharingEventV2, ClaimProfitSharingEventV2Fields>;
    static phantom(): PhantomReified<ToTypeStr<ClaimProfitSharingEventV2>>;
    static get p(): reified.PhantomReified<"0x48b15aafeb26ade39d0c2a3b8c3635bfe8396084812b6fcaeb1104eac793b4a5::tails_staking::ClaimProfitSharingEventV2">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        value: string;
        token: {
            name: {
                bytes: number[];
            };
        };
        sender: string;
        nft_id: {
            bytes: string;
        };
        number: string;
        level: string;
        name: {
            bytes: number[];
        };
    }, {
        value: string | number | bigint;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        sender: string;
        nft_id: {
            bytes: string;
        };
        number: string | number | bigint;
        level: string | number | bigint;
        name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): ClaimProfitSharingEventV2;
    static fromFieldsWithTypes(item: FieldsWithTypes): ClaimProfitSharingEventV2;
    static fromBcs(data: Uint8Array): ClaimProfitSharingEventV2;
    toJSONField(): {
        value: string;
        token: {
            name: string;
        };
        sender: string;
        nftId: string;
        number: string;
        level: string;
        name: string;
    };
    toJSON(): {
        value: string;
        token: {
            name: string;
        };
        sender: string;
        nftId: string;
        number: string;
        level: string;
        name: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ClaimProfitSharingEventV2;
    static fromJSON(json: Record<string, any>): ClaimProfitSharingEventV2;
    static fromSuiParsedData(content: SuiParsedData): ClaimProfitSharingEventV2;
    static fetch(client: SuiClient, id: string): Promise<ClaimProfitSharingEventV2>;
}
export declare function isDailyAttendEvent(type: string): boolean;
export interface DailyAttendEventFields {
    sender: ToField<"address">;
    nftId: ToField<ID>;
    number: ToField<"u64">;
    tsMs: ToField<"u64">;
    expEarn: ToField<"u64">;
}
export type DailyAttendEventReified = Reified<DailyAttendEvent, DailyAttendEventFields>;
export declare class DailyAttendEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::DailyAttendEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::DailyAttendEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::DailyAttendEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly nftId: ToField<ID>;
    readonly number: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    readonly expEarn: ToField<"u64">;
    private constructor();
    static reified(): DailyAttendEventReified;
    static get r(): reified.StructClassReified<DailyAttendEvent, DailyAttendEventFields>;
    static phantom(): PhantomReified<ToTypeStr<DailyAttendEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::DailyAttendEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        nft_id: {
            bytes: string;
        };
        number: string;
        ts_ms: string;
        exp_earn: string;
    }, {
        sender: string;
        nft_id: {
            bytes: string;
        };
        number: string | number | bigint;
        ts_ms: string | number | bigint;
        exp_earn: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): DailyAttendEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): DailyAttendEvent;
    static fromBcs(data: Uint8Array): DailyAttendEvent;
    toJSONField(): {
        sender: string;
        nftId: string;
        number: string;
        tsMs: string;
        expEarn: string;
    };
    toJSON(): {
        sender: string;
        nftId: string;
        number: string;
        tsMs: string;
        expEarn: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DailyAttendEvent;
    static fromJSON(json: Record<string, any>): DailyAttendEvent;
    static fromSuiParsedData(content: SuiParsedData): DailyAttendEvent;
    static fetch(client: SuiClient, id: string): Promise<DailyAttendEvent>;
}
export declare function isPartner(type: string): boolean;
export interface PartnerFields {
    id: ToField<UID>;
    expAllocation: ToField<"u64">;
    partnerTraits: ToField<VecMap<String, String>>;
}
export type PartnerReified = Reified<Partner, PartnerFields>;
export declare class Partner implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::Partner";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::Partner";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::Partner";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly expAllocation: ToField<"u64">;
    readonly partnerTraits: ToField<VecMap<String, String>>;
    private constructor();
    static reified(): PartnerReified;
    static get r(): reified.StructClassReified<Partner, PartnerFields>;
    static phantom(): PhantomReified<ToTypeStr<Partner>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::Partner">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        exp_allocation: string;
        partner_traits: {
            contents: {
                key: {
                    bytes: number[];
                };
                value: {
                    bytes: number[];
                };
            }[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        exp_allocation: string | number | bigint;
        partner_traits: {
            contents: Iterable<{
                key: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                value: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            }> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): Partner;
    static fromFieldsWithTypes(item: FieldsWithTypes): Partner;
    static fromBcs(data: Uint8Array): Partner;
    toJSONField(): {
        id: string;
        expAllocation: string;
        partnerTraits: {
            contents: {
                key: string;
                value: string;
            }[];
        };
    };
    toJSON(): {
        id: string;
        expAllocation: string;
        partnerTraits: {
            contents: {
                key: string;
                value: string;
            }[];
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Partner;
    static fromJSON(json: Record<string, any>): Partner;
    static fromSuiParsedData(content: SuiParsedData): Partner;
    static fetch(client: SuiClient, id: string): Promise<Partner>;
}
export declare function isPartnerKey(type: string): boolean;
export interface PartnerKeyFields {
    id: ToField<UID>;
    for: ToField<ID>;
    partner: ToField<String>;
}
export type PartnerKeyReified = Reified<PartnerKey, PartnerKeyFields>;
export declare class PartnerKey implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::PartnerKey";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::PartnerKey";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::PartnerKey";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly for: ToField<ID>;
    readonly partner: ToField<String>;
    private constructor();
    static reified(): PartnerKeyReified;
    static get r(): reified.StructClassReified<PartnerKey, PartnerKeyFields>;
    static phantom(): PhantomReified<ToTypeStr<PartnerKey>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::PartnerKey">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        for: {
            bytes: string;
        };
        partner: {
            bytes: number[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        for: {
            bytes: string;
        };
        partner: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): PartnerKey;
    static fromFieldsWithTypes(item: FieldsWithTypes): PartnerKey;
    static fromBcs(data: Uint8Array): PartnerKey;
    toJSONField(): {
        id: string;
        for: string;
        partner: string;
    };
    toJSON(): {
        id: string;
        for: string;
        partner: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PartnerKey;
    static fromJSON(json: Record<string, any>): PartnerKey;
    static fromSuiParsedData(content: SuiParsedData): PartnerKey;
    static fetch(client: SuiClient, id: string): Promise<PartnerKey>;
}
export declare function isProfitSharing(type: string): boolean;
export interface ProfitSharingFields<TOKEN extends PhantomTypeArgument> {
    levelProfits: ToField<Vector<"u64">>;
    levelUsers: ToField<Vector<"u64">>;
    total: ToField<"u64">;
    remaining: ToField<"u64">;
    pool: ToField<Balance<TOKEN>>;
}
export type ProfitSharingReified<TOKEN extends PhantomTypeArgument> = Reified<ProfitSharing<TOKEN>, ProfitSharingFields<TOKEN>>;
export declare class ProfitSharing<TOKEN extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharing";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharing";
    readonly $fullTypeName: `0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharing<${PhantomToTypeStr<TOKEN>}>`;
    readonly $typeArgs: [PhantomToTypeStr<TOKEN>];
    readonly levelProfits: ToField<Vector<"u64">>;
    readonly levelUsers: ToField<Vector<"u64">>;
    readonly total: ToField<"u64">;
    readonly remaining: ToField<"u64">;
    readonly pool: ToField<Balance<TOKEN>>;
    private constructor();
    static reified<TOKEN extends PhantomReified<PhantomTypeArgument>>(TOKEN: TOKEN): ProfitSharingReified<ToPhantomTypeArgument<TOKEN>>;
    static get r(): typeof ProfitSharing.reified;
    static phantom<TOKEN extends PhantomReified<PhantomTypeArgument>>(TOKEN: TOKEN): PhantomReified<ToTypeStr<ProfitSharing<ToPhantomTypeArgument<TOKEN>>>>;
    static get p(): typeof ProfitSharing.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        level_profits: string[];
        level_users: string[];
        total: string;
        remaining: string;
        pool: {
            value: string;
        };
    }, {
        level_profits: Iterable<string | number | bigint> & {
            length: number;
        };
        level_users: Iterable<string | number | bigint> & {
            length: number;
        };
        total: string | number | bigint;
        remaining: string | number | bigint;
        pool: {
            value: string | number | bigint;
        };
    }>;
    static fromFields<TOKEN extends PhantomReified<PhantomTypeArgument>>(typeArg: TOKEN, fields: Record<string, any>): ProfitSharing<ToPhantomTypeArgument<TOKEN>>;
    static fromFieldsWithTypes<TOKEN extends PhantomReified<PhantomTypeArgument>>(typeArg: TOKEN, item: FieldsWithTypes): ProfitSharing<ToPhantomTypeArgument<TOKEN>>;
    static fromBcs<TOKEN extends PhantomReified<PhantomTypeArgument>>(typeArg: TOKEN, data: Uint8Array): ProfitSharing<ToPhantomTypeArgument<TOKEN>>;
    toJSONField(): {
        levelProfits: string[];
        levelUsers: string[];
        total: string;
        remaining: string;
        pool: {
            value: string;
        };
    };
    toJSON(): {
        levelProfits: string[];
        levelUsers: string[];
        total: string;
        remaining: string;
        pool: {
            value: string;
        };
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<TOKEN>];
    };
    static fromJSONField<TOKEN extends PhantomReified<PhantomTypeArgument>>(typeArg: TOKEN, field: any): ProfitSharing<ToPhantomTypeArgument<TOKEN>>;
    static fromJSON<TOKEN extends PhantomReified<PhantomTypeArgument>>(typeArg: TOKEN, json: Record<string, any>): ProfitSharing<ToPhantomTypeArgument<TOKEN>>;
    static fromSuiParsedData<TOKEN extends PhantomReified<PhantomTypeArgument>>(typeArg: TOKEN, content: SuiParsedData): ProfitSharing<ToPhantomTypeArgument<TOKEN>>;
    static fetch<TOKEN extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: TOKEN, id: string): Promise<ProfitSharing<ToPhantomTypeArgument<TOKEN>>>;
}
export declare function isProfitSharingEvent(type: string): boolean;
export interface ProfitSharingEventFields {
    levelProfits: ToField<Vector<"u64">>;
    value: ToField<"u64">;
    token: ToField<TypeName>;
}
export type ProfitSharingEventReified = Reified<ProfitSharingEvent, ProfitSharingEventFields>;
export declare class ProfitSharingEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharingEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharingEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharingEvent";
    readonly $typeArgs: [];
    readonly levelProfits: ToField<Vector<"u64">>;
    readonly value: ToField<"u64">;
    readonly token: ToField<TypeName>;
    private constructor();
    static reified(): ProfitSharingEventReified;
    static get r(): reified.StructClassReified<ProfitSharingEvent, ProfitSharingEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ProfitSharingEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharingEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        level_profits: string[];
        value: string;
        token: {
            name: {
                bytes: number[];
            };
        };
    }, {
        level_profits: Iterable<string | number | bigint> & {
            length: number;
        };
        value: string | number | bigint;
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): ProfitSharingEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ProfitSharingEvent;
    static fromBcs(data: Uint8Array): ProfitSharingEvent;
    toJSONField(): {
        levelProfits: string[];
        value: string;
        token: {
            name: string;
        };
    };
    toJSON(): {
        levelProfits: string[];
        value: string;
        token: {
            name: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ProfitSharingEvent;
    static fromJSON(json: Record<string, any>): ProfitSharingEvent;
    static fromSuiParsedData(content: SuiParsedData): ProfitSharingEvent;
    static fetch(client: SuiClient, id: string): Promise<ProfitSharingEvent>;
}
export declare function isSnapshotNftEvent(type: string): boolean;
export interface SnapshotNftEventFields {
    sender: ToField<"address">;
    nftId: ToField<ID>;
    number: ToField<"u64">;
    tsMs: ToField<"u64">;
    expEarn: ToField<"u64">;
}
export type SnapshotNftEventReified = Reified<SnapshotNftEvent, SnapshotNftEventFields>;
export declare class SnapshotNftEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::SnapshotNftEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::SnapshotNftEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::SnapshotNftEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly nftId: ToField<ID>;
    readonly number: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    readonly expEarn: ToField<"u64">;
    private constructor();
    static reified(): SnapshotNftEventReified;
    static get r(): reified.StructClassReified<SnapshotNftEvent, SnapshotNftEventFields>;
    static phantom(): PhantomReified<ToTypeStr<SnapshotNftEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::SnapshotNftEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        nft_id: {
            bytes: string;
        };
        number: string;
        ts_ms: string;
        exp_earn: string;
    }, {
        sender: string;
        nft_id: {
            bytes: string;
        };
        number: string | number | bigint;
        ts_ms: string | number | bigint;
        exp_earn: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): SnapshotNftEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): SnapshotNftEvent;
    static fromBcs(data: Uint8Array): SnapshotNftEvent;
    toJSONField(): {
        sender: string;
        nftId: string;
        number: string;
        tsMs: string;
        expEarn: string;
    };
    toJSON(): {
        sender: string;
        nftId: string;
        number: string;
        tsMs: string;
        expEarn: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SnapshotNftEvent;
    static fromJSON(json: Record<string, any>): SnapshotNftEvent;
    static fromSuiParsedData(content: SuiParsedData): SnapshotNftEvent;
    static fetch(client: SuiClient, id: string): Promise<SnapshotNftEvent>;
}
export declare function isStakeNftEvent(type: string): boolean;
export interface StakeNftEventFields {
    sender: ToField<"address">;
    nftId: ToField<ID>;
    number: ToField<"u64">;
    tsMs: ToField<"u64">;
}
export type StakeNftEventReified = Reified<StakeNftEvent, StakeNftEventFields>;
export declare class StakeNftEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::StakeNftEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::StakeNftEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::StakeNftEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly nftId: ToField<ID>;
    readonly number: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    private constructor();
    static reified(): StakeNftEventReified;
    static get r(): reified.StructClassReified<StakeNftEvent, StakeNftEventFields>;
    static phantom(): PhantomReified<ToTypeStr<StakeNftEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::StakeNftEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        nft_id: {
            bytes: string;
        };
        number: string;
        ts_ms: string;
    }, {
        sender: string;
        nft_id: {
            bytes: string;
        };
        number: string | number | bigint;
        ts_ms: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): StakeNftEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): StakeNftEvent;
    static fromBcs(data: Uint8Array): StakeNftEvent;
    toJSONField(): {
        sender: string;
        nftId: string;
        number: string;
        tsMs: string;
    };
    toJSON(): {
        sender: string;
        nftId: string;
        number: string;
        tsMs: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): StakeNftEvent;
    static fromJSON(json: Record<string, any>): StakeNftEvent;
    static fromSuiParsedData(content: SuiParsedData): StakeNftEvent;
    static fetch(client: SuiClient, id: string): Promise<StakeNftEvent>;
}
export declare function isTransferNftEvent(type: string): boolean;
export interface TransferNftEventFields {
    sender: ToField<"address">;
    receiver: ToField<"address">;
    nftId: ToField<ID>;
    number: ToField<"u64">;
}
export type TransferNftEventReified = Reified<TransferNftEvent, TransferNftEventFields>;
export declare class TransferNftEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::TransferNftEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::TransferNftEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::TransferNftEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly receiver: ToField<"address">;
    readonly nftId: ToField<ID>;
    readonly number: ToField<"u64">;
    private constructor();
    static reified(): TransferNftEventReified;
    static get r(): reified.StructClassReified<TransferNftEvent, TransferNftEventFields>;
    static phantom(): PhantomReified<ToTypeStr<TransferNftEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::TransferNftEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        receiver: string;
        nft_id: {
            bytes: string;
        };
        number: string;
    }, {
        sender: string;
        receiver: string;
        nft_id: {
            bytes: string;
        };
        number: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): TransferNftEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): TransferNftEvent;
    static fromBcs(data: Uint8Array): TransferNftEvent;
    toJSONField(): {
        sender: string;
        receiver: string;
        nftId: string;
        number: string;
    };
    toJSON(): {
        sender: string;
        receiver: string;
        nftId: string;
        number: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TransferNftEvent;
    static fromJSON(json: Record<string, any>): TransferNftEvent;
    static fromSuiParsedData(content: SuiParsedData): TransferNftEvent;
    static fetch(client: SuiClient, id: string): Promise<TransferNftEvent>;
}
export declare function isUnstakeNftEvent(type: string): boolean;
export interface UnstakeNftEventFields {
    sender: ToField<"address">;
    nftId: ToField<ID>;
    number: ToField<"u64">;
}
export type UnstakeNftEventReified = Reified<UnstakeNftEvent, UnstakeNftEventFields>;
export declare class UnstakeNftEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UnstakeNftEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UnstakeNftEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UnstakeNftEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly nftId: ToField<ID>;
    readonly number: ToField<"u64">;
    private constructor();
    static reified(): UnstakeNftEventReified;
    static get r(): reified.StructClassReified<UnstakeNftEvent, UnstakeNftEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UnstakeNftEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UnstakeNftEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        nft_id: {
            bytes: string;
        };
        number: string;
    }, {
        sender: string;
        nft_id: {
            bytes: string;
        };
        number: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): UnstakeNftEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UnstakeNftEvent;
    static fromBcs(data: Uint8Array): UnstakeNftEvent;
    toJSONField(): {
        sender: string;
        nftId: string;
        number: string;
    };
    toJSON(): {
        sender: string;
        nftId: string;
        number: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UnstakeNftEvent;
    static fromJSON(json: Record<string, any>): UnstakeNftEvent;
    static fromSuiParsedData(content: SuiParsedData): UnstakeNftEvent;
    static fetch(client: SuiClient, id: string): Promise<UnstakeNftEvent>;
}
export declare function isUpdateDepositEvent(type: string): boolean;
export interface UpdateDepositEventFields {
    sender: ToField<"address">;
    nftId: ToField<ID>;
    number: ToField<"u64">;
    before: ToField<"u64">;
    after: ToField<"u64">;
}
export type UpdateDepositEventReified = Reified<UpdateDepositEvent, UpdateDepositEventFields>;
export declare class UpdateDepositEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateDepositEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateDepositEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateDepositEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly nftId: ToField<ID>;
    readonly number: ToField<"u64">;
    readonly before: ToField<"u64">;
    readonly after: ToField<"u64">;
    private constructor();
    static reified(): UpdateDepositEventReified;
    static get r(): reified.StructClassReified<UpdateDepositEvent, UpdateDepositEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateDepositEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateDepositEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        nft_id: {
            bytes: string;
        };
        number: string;
        before: string;
        after: string;
    }, {
        sender: string;
        nft_id: {
            bytes: string;
        };
        number: string | number | bigint;
        before: string | number | bigint;
        after: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): UpdateDepositEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateDepositEvent;
    static fromBcs(data: Uint8Array): UpdateDepositEvent;
    toJSONField(): {
        sender: string;
        nftId: string;
        number: string;
        before: string;
        after: string;
    };
    toJSON(): {
        sender: string;
        nftId: string;
        number: string;
        before: string;
        after: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateDepositEvent;
    static fromJSON(json: Record<string, any>): UpdateDepositEvent;
    static fromSuiParsedData(content: SuiParsedData): UpdateDepositEvent;
    static fetch(client: SuiClient, id: string): Promise<UpdateDepositEvent>;
}
export declare function isUpdateUrlEvent(type: string): boolean;
export interface UpdateUrlEventFields {
    nftId: ToField<ID>;
    number: ToField<"u64">;
    level: ToField<"u64">;
    url: ToField<Vector<"u8">>;
}
export type UpdateUrlEventReified = Reified<UpdateUrlEvent, UpdateUrlEventFields>;
export declare class UpdateUrlEvent implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateUrlEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateUrlEvent";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateUrlEvent";
    readonly $typeArgs: [];
    readonly nftId: ToField<ID>;
    readonly number: ToField<"u64">;
    readonly level: ToField<"u64">;
    readonly url: ToField<Vector<"u8">>;
    private constructor();
    static reified(): UpdateUrlEventReified;
    static get r(): reified.StructClassReified<UpdateUrlEvent, UpdateUrlEventFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateUrlEvent>>;
    static get p(): reified.PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateUrlEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        nft_id: {
            bytes: string;
        };
        number: string;
        level: string;
        url: number[];
    }, {
        nft_id: {
            bytes: string;
        };
        number: string | number | bigint;
        level: string | number | bigint;
        url: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): UpdateUrlEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateUrlEvent;
    static fromBcs(data: Uint8Array): UpdateUrlEvent;
    toJSONField(): {
        nftId: string;
        number: string;
        level: string;
        url: number[];
    };
    toJSON(): {
        nftId: string;
        number: string;
        level: string;
        url: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateUrlEvent;
    static fromJSON(json: Record<string, any>): UpdateUrlEvent;
    static fromSuiParsedData(content: SuiParsedData): UpdateUrlEvent;
    static fetch(client: SuiClient, id: string): Promise<UpdateUrlEvent>;
}
