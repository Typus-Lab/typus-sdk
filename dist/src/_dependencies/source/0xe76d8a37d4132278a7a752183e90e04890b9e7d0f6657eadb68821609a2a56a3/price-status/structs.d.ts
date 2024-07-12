import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isPriceStatus(type: string): boolean;
export interface PriceStatusFields {
    status: ToField<"u64">;
}
export type PriceStatusReified = Reified<PriceStatus, PriceStatusFields>;
export declare class PriceStatus implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_status::PriceStatus";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_status::PriceStatus";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_status::PriceStatus";
    readonly $typeArgs: [];
    readonly status: ToField<"u64">;
    private constructor();
    static reified(): PriceStatusReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<PriceStatus, PriceStatusFields>;
    static phantom(): PhantomReified<ToTypeStr<PriceStatus>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_status::PriceStatus">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        status: string;
    }, {
        status: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): PriceStatus;
    static fromFieldsWithTypes(item: FieldsWithTypes): PriceStatus;
    static fromBcs(data: Uint8Array): PriceStatus;
    toJSONField(): {
        status: string;
    };
    toJSON(): {
        status: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PriceStatus;
    static fromJSON(json: Record<string, any>): PriceStatus;
    static fromSuiParsedData(content: SuiParsedData): PriceStatus;
    static fetch(client: SuiClient, id: string): Promise<PriceStatus>;
}
