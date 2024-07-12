import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector, ToTypeStr as ToPhantom } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { TreasuryCap } from "../../0x2/coin/structs";
import { UID } from "../../0x2/object/structs";
import { TokenPolicyCap } from "../../0x2/token/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isBurnEvent(type: string): boolean;
export interface BurnEventFields {
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}
export type BurnEventReified = Reified<BurnEvent, BurnEventFields>;
export declare class BurnEvent implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::BurnEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::BurnEvent";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::BurnEvent";
    readonly $typeArgs: [];
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;
    private constructor();
    static reified(): BurnEventReified;
    static get r(): reified.StructClassReified<BurnEvent, BurnEventFields>;
    static phantom(): PhantomReified<ToTypeStr<BurnEvent>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::BurnEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        log: string[];
        bcs_padding: number[][];
    }, {
        log: Iterable<string | number | bigint> & {
            length: number;
        };
        bcs_padding: Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): BurnEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): BurnEvent;
    static fromBcs(data: Uint8Array): BurnEvent;
    toJSONField(): {
        log: string[];
        bcsPadding: number[][];
    };
    toJSON(): {
        log: string[];
        bcsPadding: number[][];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): BurnEvent;
    static fromJSON(json: Record<string, any>): BurnEvent;
    static fromSuiParsedData(content: SuiParsedData): BurnEvent;
    static fetch(client: SuiClient, id: string): Promise<BurnEvent>;
}
export declare function isMintEvent(type: string): boolean;
export interface MintEventFields {
    recipient: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}
export type MintEventReified = Reified<MintEvent, MintEventFields>;
export declare class MintEvent implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::MintEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::MintEvent";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::MintEvent";
    readonly $typeArgs: [];
    readonly recipient: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;
    private constructor();
    static reified(): MintEventReified;
    static get r(): reified.StructClassReified<MintEvent, MintEventFields>;
    static phantom(): PhantomReified<ToTypeStr<MintEvent>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::MintEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        recipient: string;
        log: string[];
        bcs_padding: number[][];
    }, {
        recipient: string;
        log: Iterable<string | number | bigint> & {
            length: number;
        };
        bcs_padding: Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): MintEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): MintEvent;
    static fromBcs(data: Uint8Array): MintEvent;
    toJSONField(): {
        recipient: string;
        log: string[];
        bcsPadding: number[][];
    };
    toJSON(): {
        recipient: string;
        log: string[];
        bcsPadding: number[][];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): MintEvent;
    static fromJSON(json: Record<string, any>): MintEvent;
    static fromSuiParsedData(content: SuiParsedData): MintEvent;
    static fetch(client: SuiClient, id: string): Promise<MintEvent>;
}
export declare function isTGLD(type: string): boolean;
export interface TGLDFields {
    dummyField: ToField<"bool">;
}
export type TGLDReified = Reified<TGLD, TGLDFields>;
export declare class TGLD implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::TGLD";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::TGLD";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::TGLD";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): TGLDReified;
    static get r(): reified.StructClassReified<TGLD, TGLDFields>;
    static phantom(): PhantomReified<ToTypeStr<TGLD>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::TGLD">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): TGLD;
    static fromFieldsWithTypes(item: FieldsWithTypes): TGLD;
    static fromBcs(data: Uint8Array): TGLD;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TGLD;
    static fromJSON(json: Record<string, any>): TGLD;
    static fromSuiParsedData(content: SuiParsedData): TGLD;
    static fetch(client: SuiClient, id: string): Promise<TGLD>;
}
export declare function isTgldRegistry(type: string): boolean;
export interface TgldRegistryFields {
    id: ToField<UID>;
    treasuryCap: ToField<TreasuryCap<ToPhantom<TGLD>>>;
    tokenPolicyCap: ToField<TokenPolicyCap<ToPhantom<TGLD>>>;
}
export type TgldRegistryReified = Reified<TgldRegistry, TgldRegistryFields>;
export declare class TgldRegistry implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::TgldRegistry";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::TgldRegistry";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::TgldRegistry";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly treasuryCap: ToField<TreasuryCap<ToPhantom<TGLD>>>;
    readonly tokenPolicyCap: ToField<TokenPolicyCap<ToPhantom<TGLD>>>;
    private constructor();
    static reified(): TgldRegistryReified;
    static get r(): reified.StructClassReified<TgldRegistry, TgldRegistryFields>;
    static phantom(): PhantomReified<ToTypeStr<TgldRegistry>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::tgld::TgldRegistry">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        treasury_cap: {
            id: {
                id: {
                    bytes: string;
                };
            };
            total_supply: {
                value: string;
            };
        };
        token_policy_cap: {
            id: {
                id: {
                    bytes: string;
                };
            };
            for: {
                bytes: string;
            };
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        treasury_cap: {
            id: {
                id: {
                    bytes: string;
                };
            };
            total_supply: {
                value: string | number | bigint;
            };
        };
        token_policy_cap: {
            id: {
                id: {
                    bytes: string;
                };
            };
            for: {
                bytes: string;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): TgldRegistry;
    static fromFieldsWithTypes(item: FieldsWithTypes): TgldRegistry;
    static fromBcs(data: Uint8Array): TgldRegistry;
    toJSONField(): {
        id: string;
        treasuryCap: {
            id: string;
            totalSupply: {
                value: string;
            };
        };
        tokenPolicyCap: {
            id: string;
            for: string;
        };
    };
    toJSON(): {
        id: string;
        treasuryCap: {
            id: string;
            totalSupply: {
                value: string;
            };
        };
        tokenPolicyCap: {
            id: string;
            for: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TgldRegistry;
    static fromJSON(json: Record<string, any>): TgldRegistry;
    static fromSuiParsedData(content: SuiParsedData): TgldRegistry;
    static fetch(client: SuiClient, id: string): Promise<TgldRegistry>;
}
