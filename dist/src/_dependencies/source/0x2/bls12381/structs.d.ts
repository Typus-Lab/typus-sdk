import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isG1(type: string): boolean;
export interface G1Fields {
    dummyField: ToField<"bool">;
}
export type G1Reified = Reified<G1, G1Fields>;
export declare class G1 implements StructClass {
    static readonly $typeName = "0x2::bls12381::G1";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::bls12381::G1";
    readonly $fullTypeName: "0x2::bls12381::G1";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): G1Reified;
    static get r(): import("../../../../_framework/reified").StructClassReified<G1, G1Fields>;
    static phantom(): PhantomReified<ToTypeStr<G1>>;
    static get p(): PhantomReified<"0x2::bls12381::G1">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): G1;
    static fromFieldsWithTypes(item: FieldsWithTypes): G1;
    static fromBcs(data: Uint8Array): G1;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): G1;
    static fromJSON(json: Record<string, any>): G1;
    static fromSuiParsedData(content: SuiParsedData): G1;
    static fetch(client: SuiClient, id: string): Promise<G1>;
}
export declare function isG2(type: string): boolean;
export interface G2Fields {
    dummyField: ToField<"bool">;
}
export type G2Reified = Reified<G2, G2Fields>;
export declare class G2 implements StructClass {
    static readonly $typeName = "0x2::bls12381::G2";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::bls12381::G2";
    readonly $fullTypeName: "0x2::bls12381::G2";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): G2Reified;
    static get r(): import("../../../../_framework/reified").StructClassReified<G2, G2Fields>;
    static phantom(): PhantomReified<ToTypeStr<G2>>;
    static get p(): PhantomReified<"0x2::bls12381::G2">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): G2;
    static fromFieldsWithTypes(item: FieldsWithTypes): G2;
    static fromBcs(data: Uint8Array): G2;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): G2;
    static fromJSON(json: Record<string, any>): G2;
    static fromSuiParsedData(content: SuiParsedData): G2;
    static fetch(client: SuiClient, id: string): Promise<G2>;
}
export declare function isGT(type: string): boolean;
export interface GTFields {
    dummyField: ToField<"bool">;
}
export type GTReified = Reified<GT, GTFields>;
export declare class GT implements StructClass {
    static readonly $typeName = "0x2::bls12381::GT";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::bls12381::GT";
    readonly $fullTypeName: "0x2::bls12381::GT";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): GTReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<GT, GTFields>;
    static phantom(): PhantomReified<ToTypeStr<GT>>;
    static get p(): PhantomReified<"0x2::bls12381::GT">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): GT;
    static fromFieldsWithTypes(item: FieldsWithTypes): GT;
    static fromBcs(data: Uint8Array): GT;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): GT;
    static fromJSON(json: Record<string, any>): GT;
    static fromSuiParsedData(content: SuiParsedData): GT;
    static fetch(client: SuiClient, id: string): Promise<GT>;
}
export declare function isScalar(type: string): boolean;
export interface ScalarFields {
    dummyField: ToField<"bool">;
}
export type ScalarReified = Reified<Scalar, ScalarFields>;
export declare class Scalar implements StructClass {
    static readonly $typeName = "0x2::bls12381::Scalar";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::bls12381::Scalar";
    readonly $fullTypeName: "0x2::bls12381::Scalar";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): ScalarReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<Scalar, ScalarFields>;
    static phantom(): PhantomReified<ToTypeStr<Scalar>>;
    static get p(): PhantomReified<"0x2::bls12381::Scalar">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): Scalar;
    static fromFieldsWithTypes(item: FieldsWithTypes): Scalar;
    static fromBcs(data: Uint8Array): Scalar;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Scalar;
    static fromJSON(json: Record<string, any>): Scalar;
    static fromSuiParsedData(content: SuiParsedData): Scalar;
    static fetch(client: SuiClient, id: string): Promise<Scalar>;
}
