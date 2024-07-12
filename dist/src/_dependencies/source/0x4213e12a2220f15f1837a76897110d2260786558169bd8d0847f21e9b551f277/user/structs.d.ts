import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector, ToTypeStr as ToPhantom } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { LinkedTable } from "../../0x2/linked-table/structs";
import { UID } from "../../0x2/object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isAddAccumulatedTgldAmount(type: string): boolean;
export interface AddAccumulatedTgldAmountFields {
    user: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}
export type AddAccumulatedTgldAmountReified = Reified<AddAccumulatedTgldAmount, AddAccumulatedTgldAmountFields>;
export declare class AddAccumulatedTgldAmount implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::AddAccumulatedTgldAmount";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::AddAccumulatedTgldAmount";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::AddAccumulatedTgldAmount";
    readonly $typeArgs: [];
    readonly user: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;
    private constructor();
    static reified(): AddAccumulatedTgldAmountReified;
    static get r(): reified.StructClassReified<AddAccumulatedTgldAmount, AddAccumulatedTgldAmountFields>;
    static phantom(): PhantomReified<ToTypeStr<AddAccumulatedTgldAmount>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::AddAccumulatedTgldAmount">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        log: string[];
        bcs_padding: number[][];
    }, {
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
    static fromFields(fields: Record<string, any>): AddAccumulatedTgldAmount;
    static fromFieldsWithTypes(item: FieldsWithTypes): AddAccumulatedTgldAmount;
    static fromBcs(data: Uint8Array): AddAccumulatedTgldAmount;
    toJSONField(): {
        user: string;
        log: string[];
        bcsPadding: number[][];
    };
    toJSON(): {
        user: string;
        log: string[];
        bcsPadding: number[][];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AddAccumulatedTgldAmount;
    static fromJSON(json: Record<string, any>): AddAccumulatedTgldAmount;
    static fromSuiParsedData(content: SuiParsedData): AddAccumulatedTgldAmount;
    static fetch(client: SuiClient, id: string): Promise<AddAccumulatedTgldAmount>;
}
export declare function isAddTailsExpAmount(type: string): boolean;
export interface AddTailsExpAmountFields {
    user: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}
export type AddTailsExpAmountReified = Reified<AddTailsExpAmount, AddTailsExpAmountFields>;
export declare class AddTailsExpAmount implements StructClass {
    static readonly $typeName = "0x1840fac0c84618087065346acdbac28bdec4326c416fcd2dc6d2f1b7d86fe62::user::AddTailsExpAmount";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x1840fac0c84618087065346acdbac28bdec4326c416fcd2dc6d2f1b7d86fe62::user::AddTailsExpAmount";
    readonly $fullTypeName: "0x1840fac0c84618087065346acdbac28bdec4326c416fcd2dc6d2f1b7d86fe62::user::AddTailsExpAmount";
    readonly $typeArgs: [];
    readonly user: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;
    private constructor();
    static reified(): AddTailsExpAmountReified;
    static get r(): reified.StructClassReified<AddTailsExpAmount, AddTailsExpAmountFields>;
    static phantom(): PhantomReified<ToTypeStr<AddTailsExpAmount>>;
    static get p(): reified.PhantomReified<"0x1840fac0c84618087065346acdbac28bdec4326c416fcd2dc6d2f1b7d86fe62::user::AddTailsExpAmount">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        log: string[];
        bcs_padding: number[][];
    }, {
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
    static fromFields(fields: Record<string, any>): AddTailsExpAmount;
    static fromFieldsWithTypes(item: FieldsWithTypes): AddTailsExpAmount;
    static fromBcs(data: Uint8Array): AddTailsExpAmount;
    toJSONField(): {
        user: string;
        log: string[];
        bcsPadding: number[][];
    };
    toJSON(): {
        user: string;
        log: string[];
        bcsPadding: number[][];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AddTailsExpAmount;
    static fromJSON(json: Record<string, any>): AddTailsExpAmount;
    static fromSuiParsedData(content: SuiParsedData): AddTailsExpAmount;
    static fetch(client: SuiClient, id: string): Promise<AddTailsExpAmount>;
}
export declare function isMetadata(type: string): boolean;
export interface MetadataFields {
    content: ToField<Vector<"u64">>;
}
export type MetadataReified = Reified<Metadata, MetadataFields>;
export declare class Metadata implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::Metadata";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::Metadata";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::Metadata";
    readonly $typeArgs: [];
    readonly content: ToField<Vector<"u64">>;
    private constructor();
    static reified(): MetadataReified;
    static get r(): reified.StructClassReified<Metadata, MetadataFields>;
    static phantom(): PhantomReified<ToTypeStr<Metadata>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::Metadata">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        content: string[];
    }, {
        content: Iterable<string | number | bigint> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): Metadata;
    static fromFieldsWithTypes(item: FieldsWithTypes): Metadata;
    static fromBcs(data: Uint8Array): Metadata;
    toJSONField(): {
        content: string[];
    };
    toJSON(): {
        content: string[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Metadata;
    static fromJSON(json: Record<string, any>): Metadata;
    static fromSuiParsedData(content: SuiParsedData): Metadata;
    static fetch(client: SuiClient, id: string): Promise<Metadata>;
}
export declare function isRemoveTailsExpAmount(type: string): boolean;
export interface RemoveTailsExpAmountFields {
    user: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}
export type RemoveTailsExpAmountReified = Reified<RemoveTailsExpAmount, RemoveTailsExpAmountFields>;
export declare class RemoveTailsExpAmount implements StructClass {
    static readonly $typeName = "0x1840fac0c84618087065346acdbac28bdec4326c416fcd2dc6d2f1b7d86fe62::user::RemoveTailsExpAmount";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x1840fac0c84618087065346acdbac28bdec4326c416fcd2dc6d2f1b7d86fe62::user::RemoveTailsExpAmount";
    readonly $fullTypeName: "0x1840fac0c84618087065346acdbac28bdec4326c416fcd2dc6d2f1b7d86fe62::user::RemoveTailsExpAmount";
    readonly $typeArgs: [];
    readonly user: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;
    private constructor();
    static reified(): RemoveTailsExpAmountReified;
    static get r(): reified.StructClassReified<RemoveTailsExpAmount, RemoveTailsExpAmountFields>;
    static phantom(): PhantomReified<ToTypeStr<RemoveTailsExpAmount>>;
    static get p(): reified.PhantomReified<"0x1840fac0c84618087065346acdbac28bdec4326c416fcd2dc6d2f1b7d86fe62::user::RemoveTailsExpAmount">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        user: string;
        log: string[];
        bcs_padding: number[][];
    }, {
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
    static fromFields(fields: Record<string, any>): RemoveTailsExpAmount;
    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveTailsExpAmount;
    static fromBcs(data: Uint8Array): RemoveTailsExpAmount;
    toJSONField(): {
        user: string;
        log: string[];
        bcsPadding: number[][];
    };
    toJSON(): {
        user: string;
        log: string[];
        bcsPadding: number[][];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RemoveTailsExpAmount;
    static fromJSON(json: Record<string, any>): RemoveTailsExpAmount;
    static fromSuiParsedData(content: SuiParsedData): RemoveTailsExpAmount;
    static fetch(client: SuiClient, id: string): Promise<RemoveTailsExpAmount>;
}
export declare function isTypusUserRegistry(type: string): boolean;
export interface TypusUserRegistryFields {
    id: ToField<UID>;
    metadata: ToField<LinkedTable<"address", ToPhantom<Metadata>>>;
}
export type TypusUserRegistryReified = Reified<TypusUserRegistry, TypusUserRegistryFields>;
export declare class TypusUserRegistry implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::TypusUserRegistry";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::TypusUserRegistry";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::TypusUserRegistry";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly metadata: ToField<LinkedTable<"address", ToPhantom<Metadata>>>;
    private constructor();
    static reified(): TypusUserRegistryReified;
    static get r(): reified.StructClassReified<TypusUserRegistry, TypusUserRegistryFields>;
    static phantom(): PhantomReified<ToTypeStr<TypusUserRegistry>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::user::TypusUserRegistry">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        metadata: {
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
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        metadata: {
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
    }>;
    static fromFields(fields: Record<string, any>): TypusUserRegistry;
    static fromFieldsWithTypes(item: FieldsWithTypes): TypusUserRegistry;
    static fromBcs(data: Uint8Array): TypusUserRegistry;
    toJSONField(): {
        id: string;
        metadata: {
            id: string;
            size: string;
            head: string | null;
            tail: string | null;
        };
    };
    toJSON(): {
        id: string;
        metadata: {
            id: string;
            size: string;
            head: string | null;
            tail: string | null;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): TypusUserRegistry;
    static fromJSON(json: Record<string, any>): TypusUserRegistry;
    static fromSuiParsedData(content: SuiParsedData): TypusUserRegistry;
    static fetch(client: SuiClient, id: string): Promise<TypusUserRegistry>;
}
