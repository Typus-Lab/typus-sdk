import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isV__DUMMY(type: string): boolean;
export interface V__DUMMYFields {
    dummyField: ToField<"bool">;
}
export type V__DUMMYReified = Reified<V__DUMMY, V__DUMMYFields>;
export declare class V__DUMMY implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::version_control::V__DUMMY";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::version_control::V__DUMMY";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::version_control::V__DUMMY";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): V__DUMMYReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<V__DUMMY, V__DUMMYFields>;
    static phantom(): PhantomReified<ToTypeStr<V__DUMMY>>;
    static get p(): PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::version_control::V__DUMMY">;
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
export declare function isV__0_2_0(type: string): boolean;
export interface V__0_2_0Fields {
    dummyField: ToField<"bool">;
}
export type V__0_2_0Reified = Reified<V__0_2_0, V__0_2_0Fields>;
export declare class V__0_2_0 implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::version_control::V__0_2_0";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::version_control::V__0_2_0";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::version_control::V__0_2_0";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): V__0_2_0Reified;
    static get r(): import("../../../../_framework/reified").StructClassReified<V__0_2_0, V__0_2_0Fields>;
    static phantom(): PhantomReified<ToTypeStr<V__0_2_0>>;
    static get p(): PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::version_control::V__0_2_0">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): V__0_2_0;
    static fromFieldsWithTypes(item: FieldsWithTypes): V__0_2_0;
    static fromBcs(data: Uint8Array): V__0_2_0;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): V__0_2_0;
    static fromJSON(json: Record<string, any>): V__0_2_0;
    static fromSuiParsedData(content: SuiParsedData): V__0_2_0;
    static fetch(client: SuiClient, id: string): Promise<V__0_2_0>;
}
