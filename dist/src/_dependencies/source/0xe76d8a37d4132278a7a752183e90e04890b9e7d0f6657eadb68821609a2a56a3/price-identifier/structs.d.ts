import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isPriceIdentifier(type: string): boolean;
export interface PriceIdentifierFields {
    bytes: ToField<Vector<"u8">>;
}
export type PriceIdentifierReified = Reified<PriceIdentifier, PriceIdentifierFields>;
export declare class PriceIdentifier implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_identifier::PriceIdentifier";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_identifier::PriceIdentifier";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_identifier::PriceIdentifier";
    readonly $typeArgs: [];
    readonly bytes: ToField<Vector<"u8">>;
    private constructor();
    static reified(): PriceIdentifierReified;
    static get r(): reified.StructClassReified<PriceIdentifier, PriceIdentifierFields>;
    static phantom(): PhantomReified<ToTypeStr<PriceIdentifier>>;
    static get p(): reified.PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_identifier::PriceIdentifier">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        bytes: number[];
    }, {
        bytes: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): PriceIdentifier;
    static fromFieldsWithTypes(item: FieldsWithTypes): PriceIdentifier;
    static fromBcs(data: Uint8Array): PriceIdentifier;
    toJSONField(): {
        bytes: number[];
    };
    toJSON(): {
        bytes: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PriceIdentifier;
    static fromJSON(json: Record<string, any>): PriceIdentifier;
    static fromSuiParsedData(content: SuiParsedData): PriceIdentifier;
    static fetch(client: SuiClient, id: string): Promise<PriceIdentifier>;
}
