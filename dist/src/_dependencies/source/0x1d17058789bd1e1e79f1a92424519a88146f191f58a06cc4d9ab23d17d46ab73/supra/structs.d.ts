import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isSupraPrice(type: string): boolean;
export interface SupraPriceFields {
    pair: ToField<"u32">;
    price: ToField<"u128">;
    decimal: ToField<"u16">;
    timestamp: ToField<"u128">;
    round: ToField<"u64">;
}
export type SupraPriceReified = Reified<SupraPrice, SupraPriceFields>;
export declare class SupraPrice implements StructClass {
    static readonly $typeName = "0x6b5aa33a21d8b5cafbe8cff4dcb0d19909abc91ef289dc9a0b6d90f8fd1152d4::supra::SupraPrice";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6b5aa33a21d8b5cafbe8cff4dcb0d19909abc91ef289dc9a0b6d90f8fd1152d4::supra::SupraPrice";
    readonly $fullTypeName: "0x6b5aa33a21d8b5cafbe8cff4dcb0d19909abc91ef289dc9a0b6d90f8fd1152d4::supra::SupraPrice";
    readonly $typeArgs: [];
    readonly pair: ToField<"u32">;
    readonly price: ToField<"u128">;
    readonly decimal: ToField<"u16">;
    readonly timestamp: ToField<"u128">;
    readonly round: ToField<"u64">;
    private constructor();
    static reified(): SupraPriceReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<SupraPrice, SupraPriceFields>;
    static phantom(): PhantomReified<ToTypeStr<SupraPrice>>;
    static get p(): PhantomReified<"0x6b5aa33a21d8b5cafbe8cff4dcb0d19909abc91ef289dc9a0b6d90f8fd1152d4::supra::SupraPrice">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        pair: number;
        price: string;
        decimal: number;
        timestamp: string;
        round: string;
    }, {
        pair: number;
        price: string | number | bigint;
        decimal: number;
        timestamp: string | number | bigint;
        round: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): SupraPrice;
    static fromFieldsWithTypes(item: FieldsWithTypes): SupraPrice;
    static fromBcs(data: Uint8Array): SupraPrice;
    toJSONField(): {
        pair: number;
        price: string;
        decimal: number;
        timestamp: string;
        round: string;
    };
    toJSON(): {
        pair: number;
        price: string;
        decimal: number;
        timestamp: string;
        round: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SupraPrice;
    static fromJSON(json: Record<string, any>): SupraPrice;
    static fromSuiParsedData(content: SuiParsedData): SupraPrice;
    static fetch(client: SuiClient, id: string): Promise<SupraPrice>;
}
