import * as reified from "../../../../_framework/reified";
import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { String } from "../../0x1/ascii/structs";
import { TypeName } from "../../0x1/type-name/structs";
import { Balance } from "../../0x2/balance/structs";
import { UID } from "../../0x2/object/structs";
import { BigVector } from "../big-vector/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isAirdrop(type: string): boolean;
export interface AirdropFields {
    user: ToField<"address">;
    value: ToField<"u64">;
}
export type AirdropReified = Reified<Airdrop, AirdropFields>;
export declare class Airdrop implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::Airdrop";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::Airdrop";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::Airdrop";
    readonly $typeArgs: [];
    readonly user: ToField<"address">;
    readonly value: ToField<"u64">;
    private constructor();
    static reified(): AirdropReified;
    static get r(): reified.StructClassReified<Airdrop, AirdropFields>;
    static phantom(): PhantomReified<ToTypeStr<Airdrop>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::Airdrop">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        value: string;
    }, {
        user: string;
        value: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Airdrop;
    static fromFieldsWithTypes(item: FieldsWithTypes): Airdrop;
    static fromBcs(data: Uint8Array): Airdrop;
    toJSONField(): {
        user: string;
        value: string;
    };
    toJSON(): {
        user: string;
        value: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Airdrop;
    static fromJSON(json: Record<string, any>): Airdrop;
    static fromSuiParsedData(content: SuiParsedData): Airdrop;
    static fetch(client: SuiClient, id: string): Promise<Airdrop>;
}
export declare function isAirdropInfo(type: string): boolean;
export interface AirdropInfoFields<TOKEN extends PhantomTypeArgument> {
    id: ToField<UID>;
    balance: ToField<Balance<TOKEN>>;
    airdrops: ToField<BigVector>;
}
export type AirdropInfoReified<TOKEN extends PhantomTypeArgument> = Reified<AirdropInfo<TOKEN>, AirdropInfoFields<TOKEN>>;
export declare class AirdropInfo<TOKEN extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::AirdropInfo";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::AirdropInfo";
    readonly $fullTypeName: `0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::AirdropInfo<${PhantomToTypeStr<TOKEN>}>`;
    readonly $typeArgs: [PhantomToTypeStr<TOKEN>];
    readonly id: ToField<UID>;
    readonly balance: ToField<Balance<TOKEN>>;
    readonly airdrops: ToField<BigVector>;
    private constructor();
    static reified<TOKEN extends PhantomReified<PhantomTypeArgument>>(TOKEN: TOKEN): AirdropInfoReified<ToPhantomTypeArgument<TOKEN>>;
    static get r(): typeof AirdropInfo.reified;
    static phantom<TOKEN extends PhantomReified<PhantomTypeArgument>>(TOKEN: TOKEN): PhantomReified<ToTypeStr<AirdropInfo<ToPhantomTypeArgument<TOKEN>>>>;
    static get p(): typeof AirdropInfo.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        balance: {
            value: string;
        };
        airdrops: {
            id: {
                id: {
                    bytes: string;
                };
            };
            element_type: {
                name: {
                    bytes: number[];
                };
            };
            slice_idx: string;
            slice_size: number;
            length: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        balance: {
            value: string | number | bigint;
        };
        airdrops: {
            id: {
                id: {
                    bytes: string;
                };
            };
            element_type: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            slice_idx: string | number | bigint;
            slice_size: number;
            length: string | number | bigint;
        };
    }>;
    static fromFields<TOKEN extends PhantomReified<PhantomTypeArgument>>(typeArg: TOKEN, fields: Record<string, any>): AirdropInfo<ToPhantomTypeArgument<TOKEN>>;
    static fromFieldsWithTypes<TOKEN extends PhantomReified<PhantomTypeArgument>>(typeArg: TOKEN, item: FieldsWithTypes): AirdropInfo<ToPhantomTypeArgument<TOKEN>>;
    static fromBcs<TOKEN extends PhantomReified<PhantomTypeArgument>>(typeArg: TOKEN, data: Uint8Array): AirdropInfo<ToPhantomTypeArgument<TOKEN>>;
    toJSONField(): {
        id: string;
        balance: {
            value: string;
        };
        airdrops: {
            id: string;
            elementType: {
                name: string;
            };
            sliceIdx: string;
            sliceSize: number;
            length: string;
        };
    };
    toJSON(): {
        id: string;
        balance: {
            value: string;
        };
        airdrops: {
            id: string;
            elementType: {
                name: string;
            };
            sliceIdx: string;
            sliceSize: number;
            length: string;
        };
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<TOKEN>];
    };
    static fromJSONField<TOKEN extends PhantomReified<PhantomTypeArgument>>(typeArg: TOKEN, field: any): AirdropInfo<ToPhantomTypeArgument<TOKEN>>;
    static fromJSON<TOKEN extends PhantomReified<PhantomTypeArgument>>(typeArg: TOKEN, json: Record<string, any>): AirdropInfo<ToPhantomTypeArgument<TOKEN>>;
    static fromSuiParsedData<TOKEN extends PhantomReified<PhantomTypeArgument>>(typeArg: TOKEN, content: SuiParsedData): AirdropInfo<ToPhantomTypeArgument<TOKEN>>;
    static fetch<TOKEN extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: TOKEN, id: string): Promise<AirdropInfo<ToPhantomTypeArgument<TOKEN>>>;
}
export declare function isClaimAirdropEvent(type: string): boolean;
export interface ClaimAirdropEventFields {
    token: ToField<TypeName>;
    key: ToField<String>;
    user: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}
export type ClaimAirdropEventReified = Reified<ClaimAirdropEvent, ClaimAirdropEventFields>;
export declare class ClaimAirdropEvent implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::ClaimAirdropEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::ClaimAirdropEvent";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::ClaimAirdropEvent";
    readonly $typeArgs: [];
    readonly token: ToField<TypeName>;
    readonly key: ToField<String>;
    readonly user: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;
    private constructor();
    static reified(): ClaimAirdropEventReified;
    static get r(): reified.StructClassReified<ClaimAirdropEvent, ClaimAirdropEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ClaimAirdropEvent>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::ClaimAirdropEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        token: {
            name: {
                bytes: number[];
            };
        };
        key: {
            bytes: number[];
        };
        user: string;
        log: string[];
        bcs_padding: number[][];
    }, {
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        key: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        user: string;
        log: Iterable<string | number | bigint> & {
            length: number;
        };
        bcs_padding: Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): ClaimAirdropEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ClaimAirdropEvent;
    static fromBcs(data: Uint8Array): ClaimAirdropEvent;
    toJSONField(): {
        token: {
            name: string;
        };
        key: string;
        user: string;
        log: string[];
        bcsPadding: number[][];
    };
    toJSON(): {
        token: {
            name: string;
        };
        key: string;
        user: string;
        log: string[];
        bcsPadding: number[][];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ClaimAirdropEvent;
    static fromJSON(json: Record<string, any>): ClaimAirdropEvent;
    static fromSuiParsedData(content: SuiParsedData): ClaimAirdropEvent;
    static fetch(client: SuiClient, id: string): Promise<ClaimAirdropEvent>;
}
export declare function isRemoveAirdropEvent(type: string): boolean;
export interface RemoveAirdropEventFields {
    token: ToField<TypeName>;
    key: ToField<String>;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}
export type RemoveAirdropEventReified = Reified<RemoveAirdropEvent, RemoveAirdropEventFields>;
export declare class RemoveAirdropEvent implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::RemoveAirdropEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::RemoveAirdropEvent";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::RemoveAirdropEvent";
    readonly $typeArgs: [];
    readonly token: ToField<TypeName>;
    readonly key: ToField<String>;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;
    private constructor();
    static reified(): RemoveAirdropEventReified;
    static get r(): reified.StructClassReified<RemoveAirdropEvent, RemoveAirdropEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RemoveAirdropEvent>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::RemoveAirdropEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        token: {
            name: {
                bytes: number[];
            };
        };
        key: {
            bytes: number[];
        };
        log: string[];
        bcs_padding: number[][];
    }, {
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        key: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        log: Iterable<string | number | bigint> & {
            length: number;
        };
        bcs_padding: Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): RemoveAirdropEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveAirdropEvent;
    static fromBcs(data: Uint8Array): RemoveAirdropEvent;
    toJSONField(): {
        token: {
            name: string;
        };
        key: string;
        log: string[];
        bcsPadding: number[][];
    };
    toJSON(): {
        token: {
            name: string;
        };
        key: string;
        log: string[];
        bcsPadding: number[][];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RemoveAirdropEvent;
    static fromJSON(json: Record<string, any>): RemoveAirdropEvent;
    static fromSuiParsedData(content: SuiParsedData): RemoveAirdropEvent;
    static fetch(client: SuiClient, id: string): Promise<RemoveAirdropEvent>;
}
export declare function isSetAirdropEvent(type: string): boolean;
export interface SetAirdropEventFields {
    token: ToField<TypeName>;
    key: ToField<String>;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}
export type SetAirdropEventReified = Reified<SetAirdropEvent, SetAirdropEventFields>;
export declare class SetAirdropEvent implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::SetAirdropEvent";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::SetAirdropEvent";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::SetAirdropEvent";
    readonly $typeArgs: [];
    readonly token: ToField<TypeName>;
    readonly key: ToField<String>;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;
    private constructor();
    static reified(): SetAirdropEventReified;
    static get r(): reified.StructClassReified<SetAirdropEvent, SetAirdropEventFields>;
    static phantom(): PhantomReified<ToTypeStr<SetAirdropEvent>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::SetAirdropEvent">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        token: {
            name: {
                bytes: number[];
            };
        };
        key: {
            bytes: number[];
        };
        log: string[];
        bcs_padding: number[][];
    }, {
        token: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        key: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        log: Iterable<string | number | bigint> & {
            length: number;
        };
        bcs_padding: Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): SetAirdropEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): SetAirdropEvent;
    static fromBcs(data: Uint8Array): SetAirdropEvent;
    toJSONField(): {
        token: {
            name: string;
        };
        key: string;
        log: string[];
        bcsPadding: number[][];
    };
    toJSON(): {
        token: {
            name: string;
        };
        key: string;
        log: string[];
        bcsPadding: number[][];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SetAirdropEvent;
    static fromJSON(json: Record<string, any>): SetAirdropEvent;
    static fromSuiParsedData(content: SuiParsedData): SetAirdropEvent;
    static fetch(client: SuiClient, id: string): Promise<SetAirdropEvent>;
}
export declare function isTypusAirdropRegistry(type: string): boolean;
export interface TypusAirdropRegistryFields {
    id: ToField<UID>;
}
export type TypusAirdropRegistryReified = Reified<TypusAirdropRegistry, TypusAirdropRegistryFields>;
export declare class TypusAirdropRegistry implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::TypusAirdropRegistry";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::TypusAirdropRegistry";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::TypusAirdropRegistry";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    private constructor();
    static reified(): TypusAirdropRegistryReified;
    static get r(): reified.StructClassReified<TypusAirdropRegistry, TypusAirdropRegistryFields>;
    static phantom(): PhantomReified<ToTypeStr<TypusAirdropRegistry>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::airdrop::TypusAirdropRegistry">;
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
    static fromFields(fields: Record<string, any>): TypusAirdropRegistry;
    static fromFieldsWithTypes(item: FieldsWithTypes): TypusAirdropRegistry;
    static fromBcs(data: Uint8Array): TypusAirdropRegistry;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TypusAirdropRegistry;
    static fromJSON(json: Record<string, any>): TypusAirdropRegistry;
    static fromSuiParsedData(content: SuiParsedData): TypusAirdropRegistry;
    static fetch(client: SuiClient, id: string): Promise<TypusAirdropRegistry>;
}
