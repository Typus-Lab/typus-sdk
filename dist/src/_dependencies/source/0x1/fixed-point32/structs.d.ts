import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isFixedPoint32(type: string): boolean;
export interface FixedPoint32Fields {
    value: ToField<"u64">;
}
export type FixedPoint32Reified = Reified<FixedPoint32, FixedPoint32Fields>;
export declare class FixedPoint32 implements StructClass {
    static readonly $typeName = "0x1::fixed_point32::FixedPoint32";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x1::fixed_point32::FixedPoint32";
    readonly $fullTypeName: "0x1::fixed_point32::FixedPoint32";
    readonly $typeArgs: [];
    readonly value: ToField<"u64">;
    private constructor();
    static reified(): FixedPoint32Reified;
    static get r(): import("../../../../_framework/reified").StructClassReified<FixedPoint32, FixedPoint32Fields>;
    static phantom(): PhantomReified<ToTypeStr<FixedPoint32>>;
    static get p(): PhantomReified<"0x1::fixed_point32::FixedPoint32">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        value: string;
    }, {
        value: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): FixedPoint32;
    static fromFieldsWithTypes(item: FieldsWithTypes): FixedPoint32;
    static fromBcs(data: Uint8Array): FixedPoint32;
    toJSONField(): {
        value: string;
    };
    toJSON(): {
        value: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): FixedPoint32;
    static fromJSON(json: Record<string, any>): FixedPoint32;
    static fromSuiParsedData(content: SuiParsedData): FixedPoint32;
    static fetch(client: SuiClient, id: string): Promise<FixedPoint32>;
}
