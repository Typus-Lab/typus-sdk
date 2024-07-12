import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { I64 } from "../i64/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isPrice(type: string): boolean;
export interface PriceFields {
    price: ToField<I64>;
    conf: ToField<"u64">;
    expo: ToField<I64>;
    timestamp: ToField<"u64">;
}
export type PriceReified = Reified<Price, PriceFields>;
export declare class Price implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price::Price";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price::Price";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price::Price";
    readonly $typeArgs: [];
    readonly price: ToField<I64>;
    readonly conf: ToField<"u64">;
    readonly expo: ToField<I64>;
    readonly timestamp: ToField<"u64">;
    private constructor();
    static reified(): PriceReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<Price, PriceFields>;
    static phantom(): PhantomReified<ToTypeStr<Price>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price::Price">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        price: {
            negative: boolean;
            magnitude: string;
        };
        conf: string;
        expo: {
            negative: boolean;
            magnitude: string;
        };
        timestamp: string;
    }, {
        price: {
            negative: boolean;
            magnitude: string | number | bigint;
        };
        conf: string | number | bigint;
        expo: {
            negative: boolean;
            magnitude: string | number | bigint;
        };
        timestamp: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Price;
    static fromFieldsWithTypes(item: FieldsWithTypes): Price;
    static fromBcs(data: Uint8Array): Price;
    toJSONField(): {
        price: {
            negative: boolean;
            magnitude: string;
        };
        conf: string;
        expo: {
            negative: boolean;
            magnitude: string;
        };
        timestamp: string;
    };
    toJSON(): {
        price: {
            negative: boolean;
            magnitude: string;
        };
        conf: string;
        expo: {
            negative: boolean;
            magnitude: string;
        };
        timestamp: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Price;
    static fromJSON(json: Record<string, any>): Price;
    static fromSuiParsedData(content: SuiParsedData): Price;
    static fetch(client: SuiClient, id: string): Promise<Price>;
}
