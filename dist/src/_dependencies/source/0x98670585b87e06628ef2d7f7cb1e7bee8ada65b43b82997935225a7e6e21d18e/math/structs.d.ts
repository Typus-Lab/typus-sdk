import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isSwitchboardDecimal(type: string): boolean;
export interface SwitchboardDecimalFields {
    value: ToField<"u128">;
    dec: ToField<"u8">;
    neg: ToField<"bool">;
}
export type SwitchboardDecimalReified = Reified<SwitchboardDecimal, SwitchboardDecimalFields>;
export declare class SwitchboardDecimal implements StructClass {
    static readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::math::SwitchboardDecimal";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::math::SwitchboardDecimal";
    readonly $fullTypeName: "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::math::SwitchboardDecimal";
    readonly $typeArgs: [];
    readonly value: ToField<"u128">;
    readonly dec: ToField<"u8">;
    readonly neg: ToField<"bool">;
    private constructor();
    static reified(): SwitchboardDecimalReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<SwitchboardDecimal, SwitchboardDecimalFields>;
    static phantom(): PhantomReified<ToTypeStr<SwitchboardDecimal>>;
    static get p(): PhantomReified<"0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::math::SwitchboardDecimal">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        value: string;
        dec: number;
        neg: boolean;
    }, {
        value: string | number | bigint;
        dec: number;
        neg: boolean;
    }>;
    static fromFields(fields: Record<string, any>): SwitchboardDecimal;
    static fromFieldsWithTypes(item: FieldsWithTypes): SwitchboardDecimal;
    static fromBcs(data: Uint8Array): SwitchboardDecimal;
    toJSONField(): {
        value: string;
        dec: number;
        neg: boolean;
    };
    toJSON(): {
        value: string;
        dec: number;
        neg: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SwitchboardDecimal;
    static fromJSON(json: Record<string, any>): SwitchboardDecimal;
    static fromSuiParsedData(content: SuiParsedData): SwitchboardDecimal;
    static fetch(client: SuiClient, id: string): Promise<SwitchboardDecimal>;
}
