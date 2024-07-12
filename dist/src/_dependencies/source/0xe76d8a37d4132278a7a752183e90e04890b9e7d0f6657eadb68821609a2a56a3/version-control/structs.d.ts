import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isV__0_1_1(type: string): boolean;
export interface V__0_1_1Fields {
    dummyField: ToField<"bool">;
}
export type V__0_1_1Reified = Reified<V__0_1_1, V__0_1_1Fields>;
export declare class V__0_1_1 implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::version_control::V__0_1_1";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::version_control::V__0_1_1";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::version_control::V__0_1_1";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): V__0_1_1Reified;
    static get r(): import("../../../../_framework/reified").StructClassReified<V__0_1_1, V__0_1_1Fields>;
    static phantom(): PhantomReified<ToTypeStr<V__0_1_1>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::version_control::V__0_1_1">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): V__0_1_1;
    static fromFieldsWithTypes(item: FieldsWithTypes): V__0_1_1;
    static fromBcs(data: Uint8Array): V__0_1_1;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): V__0_1_1;
    static fromJSON(json: Record<string, any>): V__0_1_1;
    static fromSuiParsedData(content: SuiParsedData): V__0_1_1;
    static fetch(client: SuiClient, id: string): Promise<V__0_1_1>;
}
export declare function isV__DUMMY(type: string): boolean;
export interface V__DUMMYFields {
    dummyField: ToField<"bool">;
}
export type V__DUMMYReified = Reified<V__DUMMY, V__DUMMYFields>;
export declare class V__DUMMY implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::version_control::V__DUMMY";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::version_control::V__DUMMY";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::version_control::V__DUMMY";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): V__DUMMYReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<V__DUMMY, V__DUMMYFields>;
    static phantom(): PhantomReified<ToTypeStr<V__DUMMY>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::version_control::V__DUMMY">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): V__DUMMY;
    static fromFieldsWithTypes(item: FieldsWithTypes): V__DUMMY;
    static fromBcs(data: Uint8Array): V__DUMMY;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): V__DUMMY;
    static fromJSON(json: Record<string, any>): V__DUMMY;
    static fromSuiParsedData(content: SuiParsedData): V__DUMMY;
    static fetch(client: SuiClient, id: string): Promise<V__DUMMY>;
}
