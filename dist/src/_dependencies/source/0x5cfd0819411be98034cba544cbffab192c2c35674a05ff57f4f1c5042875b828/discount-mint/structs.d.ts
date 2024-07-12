import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector, ToTypeStr as ToPhantom } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Balance } from "../../0x2/balance/structs";
import { Coin } from "../../0x2/coin/structs";
import { ID, UID } from "../../0x2/object/structs";
import { SUI } from "../../0x2/sui/structs";
import { TableVec } from "../../0x2/table-vec/structs";
import { Tails } from "../typus-nft/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isManagerCap(type: string): boolean;
export interface ManagerCapFields {
    id: ToField<UID>;
}
export type ManagerCapReified = Reified<ManagerCap, ManagerCapFields>;
export declare class ManagerCap implements StructClass {
    static readonly $typeName = "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::ManagerCap";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::ManagerCap";
    readonly $fullTypeName: "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::ManagerCap";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    private constructor();
    static reified(): ManagerCapReified;
    static get r(): reified.StructClassReified<ManagerCap, ManagerCapFields>;
    static phantom(): PhantomReified<ToTypeStr<ManagerCap>>;
    static get p(): reified.PhantomReified<"0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::ManagerCap">;
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
export declare function isPool(type: string): boolean;
export interface PoolFields {
    id: ToField<UID>;
    num: ToField<"u64">;
    price: ToField<"u64">;
    startMs: ToField<"u64">;
    endMs: ToField<"u64">;
    authority: ToField<"address">;
    publicKey: ToField<Vector<"u8">>;
    discountPcts: ToField<Vector<"u64">>;
    isLive: ToField<"bool">;
    balance: ToField<Balance<ToPhantom<SUI>>>;
    tails: ToField<TableVec<ToPhantom<Tails>>>;
    requests: ToField<Vector<MintRequest>>;
}
export type PoolReified = Reified<Pool, PoolFields>;
export declare class Pool implements StructClass {
    static readonly $typeName = "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::Pool";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::Pool";
    readonly $fullTypeName: "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::Pool";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly num: ToField<"u64">;
    readonly price: ToField<"u64">;
    readonly startMs: ToField<"u64">;
    readonly endMs: ToField<"u64">;
    readonly authority: ToField<"address">;
    readonly publicKey: ToField<Vector<"u8">>;
    readonly discountPcts: ToField<Vector<"u64">>;
    readonly isLive: ToField<"bool">;
    readonly balance: ToField<Balance<ToPhantom<SUI>>>;
    readonly tails: ToField<TableVec<ToPhantom<Tails>>>;
    readonly requests: ToField<Vector<MintRequest>>;
    private constructor();
    static reified(): PoolReified;
    static get r(): reified.StructClassReified<Pool, PoolFields>;
    static phantom(): PhantomReified<ToTypeStr<Pool>>;
    static get p(): reified.PhantomReified<"0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::Pool">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        num: string;
        price: string;
        start_ms: string;
        end_ms: string;
        authority: string;
        public_key: number[];
        discount_pcts: string[];
        is_live: boolean;
        balance: {
            value: string;
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
        requests: {
            user: string;
            coin: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                balance: {
                    value: string;
                };
            };
            vrf_input: number[];
        }[];
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        num: string | number | bigint;
        price: string | number | bigint;
        start_ms: string | number | bigint;
        end_ms: string | number | bigint;
        authority: string;
        public_key: Iterable<number> & {
            length: number;
        };
        discount_pcts: Iterable<string | number | bigint> & {
            length: number;
        };
        is_live: boolean;
        balance: {
            value: string | number | bigint;
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
        requests: Iterable<{
            user: string;
            coin: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                balance: {
                    value: string | number | bigint;
                };
            };
            vrf_input: Iterable<number> & {
                length: number;
            };
        }> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): Pool;
    static fromFieldsWithTypes(item: FieldsWithTypes): Pool;
    static fromBcs(data: Uint8Array): Pool;
    toJSONField(): {
        id: string;
        num: string;
        price: string;
        startMs: string;
        endMs: string;
        authority: string;
        publicKey: number[];
        discountPcts: string[];
        isLive: boolean;
        balance: {
            value: string;
        };
        tails: {
            contents: {
                id: string;
                size: string;
            };
        };
        requests: {
            user: string;
            coin: {
                id: string;
                balance: {
                    value: string;
                };
            };
            vrfInput: number[];
        }[];
    };
    toJSON(): {
        id: string;
        num: string;
        price: string;
        startMs: string;
        endMs: string;
        authority: string;
        publicKey: number[];
        discountPcts: string[];
        isLive: boolean;
        balance: {
            value: string;
        };
        tails: {
            contents: {
                id: string;
                size: string;
            };
        };
        requests: {
            user: string;
            coin: {
                id: string;
                balance: {
                    value: string;
                };
            };
            vrfInput: number[];
        }[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Pool;
    static fromJSON(json: Record<string, any>): Pool;
    static fromSuiParsedData(content: SuiParsedData): Pool;
    static fetch(client: SuiClient, id: string): Promise<Pool>;
}
export declare function isDiscountEvent(type: string): boolean;
export interface DiscountEventFields {
    price: ToField<"u64">;
    discountPct: ToField<"u64">;
    discountPrice: ToField<"u64">;
}
export type DiscountEventReified = Reified<DiscountEvent, DiscountEventFields>;
export declare class DiscountEvent implements StructClass {
    static readonly $typeName = "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::DiscountEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::DiscountEvent";
    readonly $fullTypeName: "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::DiscountEvent";
    readonly $typeArgs: [];
    readonly price: ToField<"u64">;
    readonly discountPct: ToField<"u64">;
    readonly discountPrice: ToField<"u64">;
    private constructor();
    static reified(): DiscountEventReified;
    static get r(): reified.StructClassReified<DiscountEvent, DiscountEventFields>;
    static phantom(): PhantomReified<ToTypeStr<DiscountEvent>>;
    static get p(): reified.PhantomReified<"0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::DiscountEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        price: string;
        discount_pct: string;
        discount_price: string;
    }, {
        price: string | number | bigint;
        discount_pct: string | number | bigint;
        discount_price: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): DiscountEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): DiscountEvent;
    static fromBcs(data: Uint8Array): DiscountEvent;
    toJSONField(): {
        price: string;
        discountPct: string;
        discountPrice: string;
    };
    toJSON(): {
        price: string;
        discountPct: string;
        discountPrice: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DiscountEvent;
    static fromJSON(json: Record<string, any>): DiscountEvent;
    static fromSuiParsedData(content: SuiParsedData): DiscountEvent;
    static fetch(client: SuiClient, id: string): Promise<DiscountEvent>;
}
export declare function isDiscountEventV2(type: string): boolean;
export interface DiscountEventV2Fields {
    pool: ToField<ID>;
    price: ToField<"u64">;
    discountPct: ToField<"u64">;
    discountPrice: ToField<"u64">;
    user: ToField<"address">;
    vrfInput: ToField<Vector<"u8">>;
}
export type DiscountEventV2Reified = Reified<DiscountEventV2, DiscountEventV2Fields>;
export declare class DiscountEventV2 implements StructClass {
    static readonly $typeName = "0x8a08d583d4cf41a80de2cdb752a4ec22811fc388907c0a07d039fa34d2489257::discount_mint::DiscountEventV2";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x8a08d583d4cf41a80de2cdb752a4ec22811fc388907c0a07d039fa34d2489257::discount_mint::DiscountEventV2";
    readonly $fullTypeName: "0x8a08d583d4cf41a80de2cdb752a4ec22811fc388907c0a07d039fa34d2489257::discount_mint::DiscountEventV2";
    readonly $typeArgs: [];
    readonly pool: ToField<ID>;
    readonly price: ToField<"u64">;
    readonly discountPct: ToField<"u64">;
    readonly discountPrice: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly vrfInput: ToField<Vector<"u8">>;
    private constructor();
    static reified(): DiscountEventV2Reified;
    static get r(): reified.StructClassReified<DiscountEventV2, DiscountEventV2Fields>;
    static phantom(): PhantomReified<ToTypeStr<DiscountEventV2>>;
    static get p(): reified.PhantomReified<"0x8a08d583d4cf41a80de2cdb752a4ec22811fc388907c0a07d039fa34d2489257::discount_mint::DiscountEventV2">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        pool: {
            bytes: string;
        };
        price: string;
        discount_pct: string;
        discount_price: string;
        user: string;
        vrf_input: number[];
    }, {
        pool: {
            bytes: string;
        };
        price: string | number | bigint;
        discount_pct: string | number | bigint;
        discount_price: string | number | bigint;
        user: string;
        vrf_input: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): DiscountEventV2;
    static fromFieldsWithTypes(item: FieldsWithTypes): DiscountEventV2;
    static fromBcs(data: Uint8Array): DiscountEventV2;
    toJSONField(): {
        pool: string;
        price: string;
        discountPct: string;
        discountPrice: string;
        user: string;
        vrfInput: number[];
    };
    toJSON(): {
        pool: string;
        price: string;
        discountPct: string;
        discountPrice: string;
        user: string;
        vrfInput: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DiscountEventV2;
    static fromJSON(json: Record<string, any>): DiscountEventV2;
    static fromSuiParsedData(content: SuiParsedData): DiscountEventV2;
    static fetch(client: SuiClient, id: string): Promise<DiscountEventV2>;
}
export declare function isDiscountEventV3(type: string): boolean;
export interface DiscountEventV3Fields {
    pool: ToField<ID>;
    price: ToField<"u64">;
    discountPct: ToField<"u64">;
    discountPrice: ToField<"u64">;
    user: ToField<"address">;
    vrfInput: ToField<Vector<"u8">>;
    level: ToField<"u64">;
}
export type DiscountEventV3Reified = Reified<DiscountEventV3, DiscountEventV3Fields>;
export declare class DiscountEventV3 implements StructClass {
    static readonly $typeName = "0xcfba36e150e43bc3362f9987c94d20131d463de8b554d64d1155f41417f36870::discount_mint::DiscountEventV3";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcfba36e150e43bc3362f9987c94d20131d463de8b554d64d1155f41417f36870::discount_mint::DiscountEventV3";
    readonly $fullTypeName: "0xcfba36e150e43bc3362f9987c94d20131d463de8b554d64d1155f41417f36870::discount_mint::DiscountEventV3";
    readonly $typeArgs: [];
    readonly pool: ToField<ID>;
    readonly price: ToField<"u64">;
    readonly discountPct: ToField<"u64">;
    readonly discountPrice: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly vrfInput: ToField<Vector<"u8">>;
    readonly level: ToField<"u64">;
    private constructor();
    static reified(): DiscountEventV3Reified;
    static get r(): reified.StructClassReified<DiscountEventV3, DiscountEventV3Fields>;
    static phantom(): PhantomReified<ToTypeStr<DiscountEventV3>>;
    static get p(): reified.PhantomReified<"0xcfba36e150e43bc3362f9987c94d20131d463de8b554d64d1155f41417f36870::discount_mint::DiscountEventV3">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        pool: {
            bytes: string;
        };
        price: string;
        discount_pct: string;
        discount_price: string;
        user: string;
        vrf_input: number[];
        level: string;
    }, {
        pool: {
            bytes: string;
        };
        price: string | number | bigint;
        discount_pct: string | number | bigint;
        discount_price: string | number | bigint;
        user: string;
        vrf_input: Iterable<number> & {
            length: number;
        };
        level: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): DiscountEventV3;
    static fromFieldsWithTypes(item: FieldsWithTypes): DiscountEventV3;
    static fromBcs(data: Uint8Array): DiscountEventV3;
    toJSONField(): {
        pool: string;
        price: string;
        discountPct: string;
        discountPrice: string;
        user: string;
        vrfInput: number[];
        level: string;
    };
    toJSON(): {
        pool: string;
        price: string;
        discountPct: string;
        discountPrice: string;
        user: string;
        vrfInput: number[];
        level: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DiscountEventV3;
    static fromJSON(json: Record<string, any>): DiscountEventV3;
    static fromSuiParsedData(content: SuiParsedData): DiscountEventV3;
    static fetch(client: SuiClient, id: string): Promise<DiscountEventV3>;
}
export declare function isMintRequest(type: string): boolean;
export interface MintRequestFields {
    user: ToField<"address">;
    coin: ToField<Coin<ToPhantom<SUI>>>;
    vrfInput: ToField<Vector<"u8">>;
}
export type MintRequestReified = Reified<MintRequest, MintRequestFields>;
export declare class MintRequest implements StructClass {
    static readonly $typeName = "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::MintRequest";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::MintRequest";
    readonly $fullTypeName: "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::MintRequest";
    readonly $typeArgs: [];
    readonly user: ToField<"address">;
    readonly coin: ToField<Coin<ToPhantom<SUI>>>;
    readonly vrfInput: ToField<Vector<"u8">>;
    private constructor();
    static reified(): MintRequestReified;
    static get r(): reified.StructClassReified<MintRequest, MintRequestFields>;
    static phantom(): PhantomReified<ToTypeStr<MintRequest>>;
    static get p(): reified.PhantomReified<"0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::MintRequest">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        coin: {
            id: {
                id: {
                    bytes: string;
                };
            };
            balance: {
                value: string;
            };
        };
        vrf_input: number[];
    }, {
        user: string;
        coin: {
            id: {
                id: {
                    bytes: string;
                };
            };
            balance: {
                value: string | number | bigint;
            };
        };
        vrf_input: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): MintRequest;
    static fromFieldsWithTypes(item: FieldsWithTypes): MintRequest;
    static fromBcs(data: Uint8Array): MintRequest;
    toJSONField(): {
        user: string;
        coin: {
            id: string;
            balance: {
                value: string;
            };
        };
        vrfInput: number[];
    };
    toJSON(): {
        user: string;
        coin: {
            id: string;
            balance: {
                value: string;
            };
        };
        vrfInput: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): MintRequest;
    static fromJSON(json: Record<string, any>): MintRequest;
    static fromSuiParsedData(content: SuiParsedData): MintRequest;
    static fetch(client: SuiClient, id: string): Promise<MintRequest>;
}
export declare function isMintRequestEvent(type: string): boolean;
export interface MintRequestEventFields {
    user: ToField<"address">;
    vrfInput: ToField<Vector<"u8">>;
    remaining: ToField<"u64">;
    seed: ToField<"u64">;
}
export type MintRequestEventReified = Reified<MintRequestEvent, MintRequestEventFields>;
export declare class MintRequestEvent implements StructClass {
    static readonly $typeName = "0x19f482f191bfc19afeb797391546571cd409ad0105a7b8181877387cbe1c8c07::discount_mint::MintRequestEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x19f482f191bfc19afeb797391546571cd409ad0105a7b8181877387cbe1c8c07::discount_mint::MintRequestEvent";
    readonly $fullTypeName: "0x19f482f191bfc19afeb797391546571cd409ad0105a7b8181877387cbe1c8c07::discount_mint::MintRequestEvent";
    readonly $typeArgs: [];
    readonly user: ToField<"address">;
    readonly vrfInput: ToField<Vector<"u8">>;
    readonly remaining: ToField<"u64">;
    readonly seed: ToField<"u64">;
    private constructor();
    static reified(): MintRequestEventReified;
    static get r(): reified.StructClassReified<MintRequestEvent, MintRequestEventFields>;
    static phantom(): PhantomReified<ToTypeStr<MintRequestEvent>>;
    static get p(): reified.PhantomReified<"0x19f482f191bfc19afeb797391546571cd409ad0105a7b8181877387cbe1c8c07::discount_mint::MintRequestEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        vrf_input: number[];
        remaining: string;
        seed: string;
    }, {
        user: string;
        vrf_input: Iterable<number> & {
            length: number;
        };
        remaining: string | number | bigint;
        seed: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): MintRequestEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): MintRequestEvent;
    static fromBcs(data: Uint8Array): MintRequestEvent;
    toJSONField(): {
        user: string;
        vrfInput: number[];
        remaining: string;
        seed: string;
    };
    toJSON(): {
        user: string;
        vrfInput: number[];
        remaining: string;
        seed: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): MintRequestEvent;
    static fromJSON(json: Record<string, any>): MintRequestEvent;
    static fromSuiParsedData(content: SuiParsedData): MintRequestEvent;
    static fetch(client: SuiClient, id: string): Promise<MintRequestEvent>;
}
