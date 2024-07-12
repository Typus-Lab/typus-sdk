import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isUpdateFee(type: string): boolean;
export interface UpdateFeeFields {
    mantissa: ToField<"u64">;
    exponent: ToField<"u64">;
}
export type UpdateFeeReified = Reified<UpdateFee, UpdateFeeFields>;
export declare class UpdateFee implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_update_fee::UpdateFee";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_update_fee::UpdateFee";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_update_fee::UpdateFee";
    readonly $typeArgs: [];
    readonly mantissa: ToField<"u64">;
    readonly exponent: ToField<"u64">;
    private constructor();
    static reified(): UpdateFeeReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<UpdateFee, UpdateFeeFields>;
    static phantom(): PhantomReified<ToTypeStr<UpdateFee>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_update_fee::UpdateFee">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        mantissa: string;
        exponent: string;
    }, {
        mantissa: string | number | bigint;
        exponent: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): UpdateFee;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateFee;
    static fromBcs(data: Uint8Array): UpdateFee;
    toJSONField(): {
        mantissa: string;
        exponent: string;
    };
    toJSON(): {
        mantissa: string;
        exponent: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UpdateFee;
    static fromJSON(json: Record<string, any>): UpdateFee;
    static fromSuiParsedData(content: SuiParsedData): UpdateFee;
    static fetch(client: SuiClient, id: string): Promise<UpdateFee>;
}
