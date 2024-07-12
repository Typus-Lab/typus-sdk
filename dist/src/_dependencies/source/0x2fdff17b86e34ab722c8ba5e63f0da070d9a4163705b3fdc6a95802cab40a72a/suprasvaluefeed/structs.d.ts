import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { UID } from "../../0x2/object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isPrice(type: string): boolean;
export interface PriceFields {
    pair: ToField<"u32">;
    value: ToField<"u128">;
    decimal: ToField<"u16">;
    timestamp: ToField<"u128">;
    round: ToField<"u64">;
}
export type PriceReified = Reified<Price, PriceFields>;
export declare class Price implements StructClass {
    static readonly $typeName = "0x2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a::SupraSValueFeed::Price";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a::SupraSValueFeed::Price";
    readonly $fullTypeName: "0x2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a::SupraSValueFeed::Price";
    readonly $typeArgs: [];
    readonly pair: ToField<"u32">;
    readonly value: ToField<"u128">;
    readonly decimal: ToField<"u16">;
    readonly timestamp: ToField<"u128">;
    readonly round: ToField<"u64">;
    private constructor();
    static reified(): PriceReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<Price, PriceFields>;
    static phantom(): PhantomReified<ToTypeStr<Price>>;
    static get p(): PhantomReified<"0x2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a::SupraSValueFeed::Price">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        pair: number;
        value: string;
        decimal: number;
        timestamp: string;
        round: string;
    }, {
        pair: number;
        value: string | number | bigint;
        decimal: number;
        timestamp: string | number | bigint;
        round: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Price;
    static fromFieldsWithTypes(item: FieldsWithTypes): Price;
    static fromBcs(data: Uint8Array): Price;
    toJSONField(): {
        pair: number;
        value: string;
        decimal: number;
        timestamp: string;
        round: string;
    };
    toJSON(): {
        pair: number;
        value: string;
        decimal: number;
        timestamp: string;
        round: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Price;
    static fromJSON(json: Record<string, any>): Price;
    static fromSuiParsedData(content: SuiParsedData): Price;
    static fetch(client: SuiClient, id: string): Promise<Price>;
}
export declare function isOracleHolder(type: string): boolean;
export interface OracleHolderFields {
    id: ToField<UID>;
}
export type OracleHolderReified = Reified<OracleHolder, OracleHolderFields>;
export declare class OracleHolder implements StructClass {
    static readonly $typeName = "0x2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a::SupraSValueFeed::OracleHolder";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a::SupraSValueFeed::OracleHolder";
    readonly $fullTypeName: "0x2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a::SupraSValueFeed::OracleHolder";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    private constructor();
    static reified(): OracleHolderReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<OracleHolder, OracleHolderFields>;
    static phantom(): PhantomReified<ToTypeStr<OracleHolder>>;
    static get p(): PhantomReified<"0x2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a::SupraSValueFeed::OracleHolder">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): OracleHolder;
    static fromFieldsWithTypes(item: FieldsWithTypes): OracleHolder;
    static fromBcs(data: Uint8Array): OracleHolder;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): OracleHolder;
    static fromJSON(json: Record<string, any>): OracleHolder;
    static fromSuiParsedData(content: SuiParsedData): OracleHolder;
    static fetch(client: SuiClient, id: string): Promise<OracleHolder>;
}
