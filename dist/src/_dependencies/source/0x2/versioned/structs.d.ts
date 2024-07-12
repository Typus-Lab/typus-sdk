import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { ID, UID } from "../object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isVersionChangeCap(type: string): boolean;
export interface VersionChangeCapFields {
    versionedId: ToField<ID>;
    oldVersion: ToField<"u64">;
}
export type VersionChangeCapReified = Reified<VersionChangeCap, VersionChangeCapFields>;
export declare class VersionChangeCap implements StructClass {
    static readonly $typeName = "0x2::versioned::VersionChangeCap";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::versioned::VersionChangeCap";
    readonly $fullTypeName: "0x2::versioned::VersionChangeCap";
    readonly $typeArgs: [];
    readonly versionedId: ToField<ID>;
    readonly oldVersion: ToField<"u64">;
    private constructor();
    static reified(): VersionChangeCapReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<VersionChangeCap, VersionChangeCapFields>;
    static phantom(): PhantomReified<ToTypeStr<VersionChangeCap>>;
    static get p(): PhantomReified<"0x2::versioned::VersionChangeCap">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        versioned_id: {
            bytes: string;
        };
        old_version: string;
    }, {
        versioned_id: {
            bytes: string;
        };
        old_version: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): VersionChangeCap;
    static fromFieldsWithTypes(item: FieldsWithTypes): VersionChangeCap;
    static fromBcs(data: Uint8Array): VersionChangeCap;
    toJSONField(): {
        versionedId: string;
        oldVersion: string;
    };
    toJSON(): {
        versionedId: string;
        oldVersion: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): VersionChangeCap;
    static fromJSON(json: Record<string, any>): VersionChangeCap;
    static fromSuiParsedData(content: SuiParsedData): VersionChangeCap;
    static fetch(client: SuiClient, id: string): Promise<VersionChangeCap>;
}
export declare function isVersioned(type: string): boolean;
export interface VersionedFields {
    id: ToField<UID>;
    version: ToField<"u64">;
}
export type VersionedReified = Reified<Versioned, VersionedFields>;
export declare class Versioned implements StructClass {
    static readonly $typeName = "0x2::versioned::Versioned";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::versioned::Versioned";
    readonly $fullTypeName: "0x2::versioned::Versioned";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly version: ToField<"u64">;
    private constructor();
    static reified(): VersionedReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<Versioned, VersionedFields>;
    static phantom(): PhantomReified<ToTypeStr<Versioned>>;
    static get p(): PhantomReified<"0x2::versioned::Versioned">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        version: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        version: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Versioned;
    static fromFieldsWithTypes(item: FieldsWithTypes): Versioned;
    static fromBcs(data: Uint8Array): Versioned;
    toJSONField(): {
        id: string;
        version: string;
    };
    toJSON(): {
        id: string;
        version: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Versioned;
    static fromJSON(json: Record<string, any>): Versioned;
    static fromSuiParsedData(content: SuiParsedData): Versioned;
    static fetch(client: SuiClient, id: string): Promise<Versioned>;
}
