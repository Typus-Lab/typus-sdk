import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, ToTypeStr as ToPhantom } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { String } from "../../0x1/string/structs";
import { ID, UID } from "../../0x2/object/structs";
import { TransferPolicyCap } from "../../0x2/transfer-policy/structs";
import { Url } from "../../0x2/url/structs";
import { VecMap } from "../../0x2/vec-map/structs";
import { TableVec } from "../table-vec/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isManagerCap(type: string): boolean;
export interface ManagerCapFields {
    id: ToField<UID>;
}
export type ManagerCapReified = Reified<ManagerCap, ManagerCapFields>;
export declare class ManagerCap implements StructClass {
    static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::ManagerCap";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::ManagerCap";
    readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::ManagerCap";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    private constructor();
    static reified(): ManagerCapReified;
    static get r(): reified.StructClassReified<ManagerCap, ManagerCapFields>;
    static phantom(): PhantomReified<ToTypeStr<ManagerCap>>;
    static get p(): reified.PhantomReified<"0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::ManagerCap">;
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
    static fromFields(fields: Record<string, any>): ManagerCap;
    static fromFieldsWithTypes(item: FieldsWithTypes): ManagerCap;
    static fromBcs(data: Uint8Array): ManagerCap;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ManagerCap;
    static fromJSON(json: Record<string, any>): ManagerCap;
    static fromSuiParsedData(content: SuiParsedData): ManagerCap;
    static fetch(client: SuiClient, id: string): Promise<ManagerCap>;
}
export declare function isMintEvent(type: string): boolean;
export interface MintEventFields {
    id: ToField<ID>;
    name: ToField<String>;
    description: ToField<String>;
    number: ToField<"u64">;
    url: ToField<Url>;
    attributes: ToField<VecMap<String, String>>;
    sender: ToField<"address">;
}
export type MintEventReified = Reified<MintEvent, MintEventFields>;
export declare class MintEvent implements StructClass {
    static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::MintEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::MintEvent";
    readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::MintEvent";
    readonly $typeArgs: [];
    readonly id: ToField<ID>;
    readonly name: ToField<String>;
    readonly description: ToField<String>;
    readonly number: ToField<"u64">;
    readonly url: ToField<Url>;
    readonly attributes: ToField<VecMap<String, String>>;
    readonly sender: ToField<"address">;
    private constructor();
    static reified(): MintEventReified;
    static get r(): reified.StructClassReified<MintEvent, MintEventFields>;
    static phantom(): PhantomReified<ToTypeStr<MintEvent>>;
    static get p(): reified.PhantomReified<"0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::MintEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
        name: {
            bytes: number[];
        };
        description: {
            bytes: number[];
        };
        number: string;
        url: {
            url: {
                bytes: number[];
            };
        };
        attributes: {
            contents: {
                key: {
                    bytes: number[];
                };
                value: {
                    bytes: number[];
                };
            }[];
        };
        sender: string;
    }, {
        id: {
            bytes: string;
        };
        name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        description: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        number: string | number | bigint;
        url: {
            url: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        attributes: {
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
        sender: string;
    }>;
    static fromFields(fields: Record<string, any>): MintEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): MintEvent;
    static fromBcs(data: Uint8Array): MintEvent;
    toJSONField(): {
        id: string;
        name: string;
        description: string;
        number: string;
        url: string;
        attributes: {
            contents: {
                key: string;
                value: string;
            }[];
        };
        sender: string;
    };
    toJSON(): {
        id: string;
        name: string;
        description: string;
        number: string;
        url: string;
        attributes: {
            contents: {
                key: string;
                value: string;
            }[];
        };
        sender: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): MintEvent;
    static fromJSON(json: Record<string, any>): MintEvent;
    static fromSuiParsedData(content: SuiParsedData): MintEvent;
    static fetch(client: SuiClient, id: string): Promise<MintEvent>;
}
export declare function isExpUpEvent(type: string): boolean;
export interface ExpUpEventFields {
    nftId: ToField<ID>;
    number: ToField<"u64">;
    expEarn: ToField<"u64">;
}
export type ExpUpEventReified = Reified<ExpUpEvent, ExpUpEventFields>;
export declare class ExpUpEvent implements StructClass {
    static readonly $typeName = "0x45d61e41640f8dc1c2e333789b5842adf508ceb9c98d7c1808092f9e2e45b615::typus_nft::ExpUpEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x45d61e41640f8dc1c2e333789b5842adf508ceb9c98d7c1808092f9e2e45b615::typus_nft::ExpUpEvent";
    readonly $fullTypeName: "0x45d61e41640f8dc1c2e333789b5842adf508ceb9c98d7c1808092f9e2e45b615::typus_nft::ExpUpEvent";
    readonly $typeArgs: [];
    readonly nftId: ToField<ID>;
    readonly number: ToField<"u64">;
    readonly expEarn: ToField<"u64">;
    private constructor();
    static reified(): ExpUpEventReified;
    static get r(): reified.StructClassReified<ExpUpEvent, ExpUpEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ExpUpEvent>>;
    static get p(): reified.PhantomReified<"0x45d61e41640f8dc1c2e333789b5842adf508ceb9c98d7c1808092f9e2e45b615::typus_nft::ExpUpEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        nft_id: {
            bytes: string;
        };
        number: string;
        exp_earn: string;
    }, {
        nft_id: {
            bytes: string;
        };
        number: string | number | bigint;
        exp_earn: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): ExpUpEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ExpUpEvent;
    static fromBcs(data: Uint8Array): ExpUpEvent;
    toJSONField(): {
        nftId: string;
        number: string;
        expEarn: string;
    };
    toJSON(): {
        nftId: string;
        number: string;
        expEarn: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ExpUpEvent;
    static fromJSON(json: Record<string, any>): ExpUpEvent;
    static fromSuiParsedData(content: SuiParsedData): ExpUpEvent;
    static fetch(client: SuiClient, id: string): Promise<ExpUpEvent>;
}
export declare function isFirstBidEvent(type: string): boolean;
export interface FirstBidEventFields {
    nftId: ToField<ID>;
    number: ToField<"u64">;
    expEarn: ToField<"u64">;
}
export type FirstBidEventReified = Reified<FirstBidEvent, FirstBidEventFields>;
export declare class FirstBidEvent implements StructClass {
    static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::FirstBidEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::FirstBidEvent";
    readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::FirstBidEvent";
    readonly $typeArgs: [];
    readonly nftId: ToField<ID>;
    readonly number: ToField<"u64">;
    readonly expEarn: ToField<"u64">;
    private constructor();
    static reified(): FirstBidEventReified;
    static get r(): reified.StructClassReified<FirstBidEvent, FirstBidEventFields>;
    static phantom(): PhantomReified<ToTypeStr<FirstBidEvent>>;
    static get p(): reified.PhantomReified<"0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::FirstBidEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        nft_id: {
            bytes: string;
        };
        number: string;
        exp_earn: string;
    }, {
        nft_id: {
            bytes: string;
        };
        number: string | number | bigint;
        exp_earn: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): FirstBidEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): FirstBidEvent;
    static fromBcs(data: Uint8Array): FirstBidEvent;
    toJSONField(): {
        nftId: string;
        number: string;
        expEarn: string;
    };
    toJSON(): {
        nftId: string;
        number: string;
        expEarn: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): FirstBidEvent;
    static fromJSON(json: Record<string, any>): FirstBidEvent;
    static fromSuiParsedData(content: SuiParsedData): FirstBidEvent;
    static fetch(client: SuiClient, id: string): Promise<FirstBidEvent>;
}
export declare function isFirstDepositEvent(type: string): boolean;
export interface FirstDepositEventFields {
    nftId: ToField<ID>;
    number: ToField<"u64">;
    expEarn: ToField<"u64">;
}
export type FirstDepositEventReified = Reified<FirstDepositEvent, FirstDepositEventFields>;
export declare class FirstDepositEvent implements StructClass {
    static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::FirstDepositEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::FirstDepositEvent";
    readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::FirstDepositEvent";
    readonly $typeArgs: [];
    readonly nftId: ToField<ID>;
    readonly number: ToField<"u64">;
    readonly expEarn: ToField<"u64">;
    private constructor();
    static reified(): FirstDepositEventReified;
    static get r(): reified.StructClassReified<FirstDepositEvent, FirstDepositEventFields>;
    static phantom(): PhantomReified<ToTypeStr<FirstDepositEvent>>;
    static get p(): reified.PhantomReified<"0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::FirstDepositEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        nft_id: {
            bytes: string;
        };
        number: string;
        exp_earn: string;
    }, {
        nft_id: {
            bytes: string;
        };
        number: string | number | bigint;
        exp_earn: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): FirstDepositEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): FirstDepositEvent;
    static fromBcs(data: Uint8Array): FirstDepositEvent;
    toJSONField(): {
        nftId: string;
        number: string;
        expEarn: string;
    };
    toJSON(): {
        nftId: string;
        number: string;
        expEarn: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): FirstDepositEvent;
    static fromJSON(json: Record<string, any>): FirstDepositEvent;
    static fromSuiParsedData(content: SuiParsedData): FirstDepositEvent;
    static fetch(client: SuiClient, id: string): Promise<FirstDepositEvent>;
}
export declare function isLevelUpEvent(type: string): boolean;
export interface LevelUpEventFields {
    nftId: ToField<ID>;
    level: ToField<"u64">;
}
export type LevelUpEventReified = Reified<LevelUpEvent, LevelUpEventFields>;
export declare class LevelUpEvent implements StructClass {
    static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::LevelUpEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::LevelUpEvent";
    readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::LevelUpEvent";
    readonly $typeArgs: [];
    readonly nftId: ToField<ID>;
    readonly level: ToField<"u64">;
    private constructor();
    static reified(): LevelUpEventReified;
    static get r(): reified.StructClassReified<LevelUpEvent, LevelUpEventFields>;
    static phantom(): PhantomReified<ToTypeStr<LevelUpEvent>>;
    static get p(): reified.PhantomReified<"0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::LevelUpEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        nft_id: {
            bytes: string;
        };
        level: string;
    }, {
        nft_id: {
            bytes: string;
        };
        level: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): LevelUpEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): LevelUpEvent;
    static fromBcs(data: Uint8Array): LevelUpEvent;
    toJSONField(): {
        nftId: string;
        level: string;
    };
    toJSON(): {
        nftId: string;
        level: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): LevelUpEvent;
    static fromJSON(json: Record<string, any>): LevelUpEvent;
    static fromSuiParsedData(content: SuiParsedData): LevelUpEvent;
    static fetch(client: SuiClient, id: string): Promise<LevelUpEvent>;
}
export declare function isNewManagerCapEvent(type: string): boolean;
export interface NewManagerCapEventFields {
    id: ToField<ID>;
    sender: ToField<"address">;
}
export type NewManagerCapEventReified = Reified<NewManagerCapEvent, NewManagerCapEventFields>;
export declare class NewManagerCapEvent implements StructClass {
    static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::NewManagerCapEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::NewManagerCapEvent";
    readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::NewManagerCapEvent";
    readonly $typeArgs: [];
    readonly id: ToField<ID>;
    readonly sender: ToField<"address">;
    private constructor();
    static reified(): NewManagerCapEventReified;
    static get r(): reified.StructClassReified<NewManagerCapEvent, NewManagerCapEventFields>;
    static phantom(): PhantomReified<ToTypeStr<NewManagerCapEvent>>;
    static get p(): reified.PhantomReified<"0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::NewManagerCapEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
        sender: string;
    }, {
        id: {
            bytes: string;
        };
        sender: string;
    }>;
    static fromFields(fields: Record<string, any>): NewManagerCapEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): NewManagerCapEvent;
    static fromBcs(data: Uint8Array): NewManagerCapEvent;
    toJSONField(): {
        id: string;
        sender: string;
    };
    toJSON(): {
        id: string;
        sender: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): NewManagerCapEvent;
    static fromJSON(json: Record<string, any>): NewManagerCapEvent;
    static fromSuiParsedData(content: SuiParsedData): NewManagerCapEvent;
    static fetch(client: SuiClient, id: string): Promise<NewManagerCapEvent>;
}
export declare function isPool(type: string): boolean;
export interface PoolFields {
    id: ToField<UID>;
    tails: ToField<TableVec<ToPhantom<Tails>>>;
    num: ToField<"u64">;
    isLive: ToField<"bool">;
    startMs: ToField<"u64">;
}
export type PoolReified = Reified<Pool, PoolFields>;
export declare class Pool implements StructClass {
    static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Pool";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Pool";
    readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Pool";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly tails: ToField<TableVec<ToPhantom<Tails>>>;
    readonly num: ToField<"u64">;
    readonly isLive: ToField<"bool">;
    readonly startMs: ToField<"u64">;
    private constructor();
    static reified(): PoolReified;
    static get r(): reified.StructClassReified<Pool, PoolFields>;
    static phantom(): PhantomReified<ToTypeStr<Pool>>;
    static get p(): reified.PhantomReified<"0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Pool">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        tails: {
            contents: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string;
            };
        };
        num: string;
        is_live: boolean;
        start_ms: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        tails: {
            contents: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string | number | bigint;
            };
        };
        num: string | number | bigint;
        is_live: boolean;
        start_ms: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Pool;
    static fromFieldsWithTypes(item: FieldsWithTypes): Pool;
    static fromBcs(data: Uint8Array): Pool;
    toJSONField(): {
        id: string;
        tails: {
            contents: {
                id: string;
                size: string;
            };
        };
        num: string;
        isLive: boolean;
        startMs: string;
    };
    toJSON(): {
        id: string;
        tails: {
            contents: {
                id: string;
                size: string;
            };
        };
        num: string;
        isLive: boolean;
        startMs: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Pool;
    static fromJSON(json: Record<string, any>): Pool;
    static fromSuiParsedData(content: SuiParsedData): Pool;
    static fetch(client: SuiClient, id: string): Promise<Pool>;
}
export declare function isRoyalty(type: string): boolean;
export interface RoyaltyFields {
    id: ToField<UID>;
    recipients: ToField<VecMap<"address", "u64">>;
    policyCap: ToField<TransferPolicyCap<ToPhantom<Tails>>>;
}
export type RoyaltyReified = Reified<Royalty, RoyaltyFields>;
export declare class Royalty implements StructClass {
    static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Royalty";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Royalty";
    readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Royalty";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly recipients: ToField<VecMap<"address", "u64">>;
    readonly policyCap: ToField<TransferPolicyCap<ToPhantom<Tails>>>;
    private constructor();
    static reified(): RoyaltyReified;
    static get r(): reified.StructClassReified<Royalty, RoyaltyFields>;
    static phantom(): PhantomReified<ToTypeStr<Royalty>>;
    static get p(): reified.PhantomReified<"0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Royalty">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        recipients: {
            contents: {
                key: string;
                value: string;
            }[];
        };
        policy_cap: {
            id: {
                id: {
                    bytes: string;
                };
            };
            policy_id: {
                bytes: string;
            };
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        recipients: {
            contents: Iterable<{
                key: string;
                value: string | number | bigint;
            }> & {
                length: number;
            };
        };
        policy_cap: {
            id: {
                id: {
                    bytes: string;
                };
            };
            policy_id: {
                bytes: string;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): Royalty;
    static fromFieldsWithTypes(item: FieldsWithTypes): Royalty;
    static fromBcs(data: Uint8Array): Royalty;
    toJSONField(): {
        id: string;
        recipients: {
            contents: {
                key: string;
                value: string;
            }[];
        };
        policyCap: {
            id: string;
            policyId: string;
        };
    };
    toJSON(): {
        id: string;
        recipients: {
            contents: {
                key: string;
                value: string;
            }[];
        };
        policyCap: {
            id: string;
            policyId: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Royalty;
    static fromJSON(json: Record<string, any>): Royalty;
    static fromSuiParsedData(content: SuiParsedData): Royalty;
    static fetch(client: SuiClient, id: string): Promise<Royalty>;
}
export declare function isRoyaltyUpdateEvent(type: string): boolean;
export interface RoyaltyUpdateEventFields {
    sender: ToField<"address">;
    recipients: ToField<VecMap<"address", "u64">>;
}
export type RoyaltyUpdateEventReified = Reified<RoyaltyUpdateEvent, RoyaltyUpdateEventFields>;
export declare class RoyaltyUpdateEvent implements StructClass {
    static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::RoyaltyUpdateEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::RoyaltyUpdateEvent";
    readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::RoyaltyUpdateEvent";
    readonly $typeArgs: [];
    readonly sender: ToField<"address">;
    readonly recipients: ToField<VecMap<"address", "u64">>;
    private constructor();
    static reified(): RoyaltyUpdateEventReified;
    static get r(): reified.StructClassReified<RoyaltyUpdateEvent, RoyaltyUpdateEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RoyaltyUpdateEvent>>;
    static get p(): reified.PhantomReified<"0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::RoyaltyUpdateEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        recipients: {
            contents: {
                key: string;
                value: string;
            }[];
        };
    }, {
        sender: string;
        recipients: {
            contents: Iterable<{
                key: string;
                value: string | number | bigint;
            }> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): RoyaltyUpdateEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RoyaltyUpdateEvent;
    static fromBcs(data: Uint8Array): RoyaltyUpdateEvent;
    toJSONField(): {
        sender: string;
        recipients: {
            contents: {
                key: string;
                value: string;
            }[];
        };
    };
    toJSON(): {
        sender: string;
        recipients: {
            contents: {
                key: string;
                value: string;
            }[];
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RoyaltyUpdateEvent;
    static fromJSON(json: Record<string, any>): RoyaltyUpdateEvent;
    static fromSuiParsedData(content: SuiParsedData): RoyaltyUpdateEvent;
    static fetch(client: SuiClient, id: string): Promise<RoyaltyUpdateEvent>;
}
export declare function isTYPUS_NFT(type: string): boolean;
export interface TYPUS_NFTFields {
    dummyField: ToField<"bool">;
}
export type TYPUS_NFTReified = Reified<TYPUS_NFT, TYPUS_NFTFields>;
export declare class TYPUS_NFT implements StructClass {
    static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::TYPUS_NFT";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::TYPUS_NFT";
    readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::TYPUS_NFT";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): TYPUS_NFTReified;
    static get r(): reified.StructClassReified<TYPUS_NFT, TYPUS_NFTFields>;
    static phantom(): PhantomReified<ToTypeStr<TYPUS_NFT>>;
    static get p(): reified.PhantomReified<"0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::TYPUS_NFT">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): TYPUS_NFT;
    static fromFieldsWithTypes(item: FieldsWithTypes): TYPUS_NFT;
    static fromBcs(data: Uint8Array): TYPUS_NFT;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TYPUS_NFT;
    static fromJSON(json: Record<string, any>): TYPUS_NFT;
    static fromSuiParsedData(content: SuiParsedData): TYPUS_NFT;
    static fetch(client: SuiClient, id: string): Promise<TYPUS_NFT>;
}
export declare function isTails(type: string): boolean;
export interface TailsFields {
    id: ToField<UID>;
    name: ToField<String>;
    description: ToField<String>;
    number: ToField<"u64">;
    url: ToField<Url>;
    attributes: ToField<VecMap<String, String>>;
    level: ToField<"u64">;
    exp: ToField<"u64">;
    firstBid: ToField<"bool">;
    firstDeposit: ToField<"bool">;
    firstDepositNft: ToField<"bool">;
    u64Padding: ToField<VecMap<String, "u64">>;
}
export type TailsReified = Reified<Tails, TailsFields>;
export declare class Tails implements StructClass {
    static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Tails";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Tails";
    readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Tails";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly name: ToField<String>;
    readonly description: ToField<String>;
    readonly number: ToField<"u64">;
    readonly url: ToField<Url>;
    readonly attributes: ToField<VecMap<String, String>>;
    readonly level: ToField<"u64">;
    readonly exp: ToField<"u64">;
    readonly firstBid: ToField<"bool">;
    readonly firstDeposit: ToField<"bool">;
    readonly firstDepositNft: ToField<"bool">;
    readonly u64Padding: ToField<VecMap<String, "u64">>;
    private constructor();
    static reified(): TailsReified;
    static get r(): reified.StructClassReified<Tails, TailsFields>;
    static phantom(): PhantomReified<ToTypeStr<Tails>>;
    static get p(): reified.PhantomReified<"0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Tails">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        name: {
            bytes: number[];
        };
        description: {
            bytes: number[];
        };
        number: string;
        url: {
            url: {
                bytes: number[];
            };
        };
        attributes: {
            contents: {
                key: {
                    bytes: number[];
                };
                value: {
                    bytes: number[];
                };
            }[];
        };
        level: string;
        exp: string;
        first_bid: boolean;
        first_deposit: boolean;
        first_deposit_nft: boolean;
        u64_padding: {
            contents: {
                key: {
                    bytes: number[];
                };
                value: string;
            }[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        description: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        number: string | number | bigint;
        url: {
            url: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        attributes: {
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
        level: string | number | bigint;
        exp: string | number | bigint;
        first_bid: boolean;
        first_deposit: boolean;
        first_deposit_nft: boolean;
        u64_padding: {
            contents: Iterable<{
                key: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                value: string | number | bigint;
            }> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): Tails;
    static fromFieldsWithTypes(item: FieldsWithTypes): Tails;
    static fromBcs(data: Uint8Array): Tails;
    toJSONField(): {
        id: string;
        name: string;
        description: string;
        number: string;
        url: string;
        attributes: {
            contents: {
                key: string;
                value: string;
            }[];
        };
        level: string;
        exp: string;
        firstBid: boolean;
        firstDeposit: boolean;
        firstDepositNft: boolean;
        u64Padding: {
            contents: {
                key: string;
                value: string;
            }[];
        };
    };
    toJSON(): {
        id: string;
        name: string;
        description: string;
        number: string;
        url: string;
        attributes: {
            contents: {
                key: string;
                value: string;
            }[];
        };
        level: string;
        exp: string;
        firstBid: boolean;
        firstDeposit: boolean;
        firstDepositNft: boolean;
        u64Padding: {
            contents: {
                key: string;
                value: string;
            }[];
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Tails;
    static fromJSON(json: Record<string, any>): Tails;
    static fromSuiParsedData(content: SuiParsedData): Tails;
    static fetch(client: SuiClient, id: string): Promise<Tails>;
}
export declare function isWhitelist(type: string): boolean;
export interface WhitelistFields {
    id: ToField<UID>;
    for: ToField<ID>;
}
export type WhitelistReified = Reified<Whitelist, WhitelistFields>;
export declare class Whitelist implements StructClass {
    static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Whitelist";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Whitelist";
    readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Whitelist";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly for: ToField<ID>;
    private constructor();
    static reified(): WhitelistReified;
    static get r(): reified.StructClassReified<Whitelist, WhitelistFields>;
    static phantom(): PhantomReified<ToTypeStr<Whitelist>>;
    static get p(): reified.PhantomReified<"0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::typus_nft::Whitelist">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        for: {
            bytes: string;
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
    }>;
    static fromFields(fields: Record<string, any>): Whitelist;
    static fromFieldsWithTypes(item: FieldsWithTypes): Whitelist;
    static fromBcs(data: Uint8Array): Whitelist;
    toJSONField(): {
        id: string;
        for: string;
    };
    toJSON(): {
        id: string;
        for: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Whitelist;
    static fromJSON(json: Record<string, any>): Whitelist;
    static fromSuiParsedData(content: SuiParsedData): Whitelist;
    static fetch(client: SuiClient, id: string): Promise<Whitelist>;
}
