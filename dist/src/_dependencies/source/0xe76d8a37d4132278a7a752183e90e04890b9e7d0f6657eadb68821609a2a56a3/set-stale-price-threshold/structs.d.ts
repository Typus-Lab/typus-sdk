import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isStalePriceThreshold(type: string): boolean;
export interface StalePriceThresholdFields {
    threshold: ToField<"u64">;
}
export type StalePriceThresholdReified = Reified<StalePriceThreshold, StalePriceThresholdFields>;
export declare class StalePriceThreshold implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_stale_price_threshold::StalePriceThreshold";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_stale_price_threshold::StalePriceThreshold";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_stale_price_threshold::StalePriceThreshold";
    readonly $typeArgs: [];
    readonly threshold: ToField<"u64">;
    private constructor();
    static reified(): StalePriceThresholdReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<StalePriceThreshold, StalePriceThresholdFields>;
    static phantom(): PhantomReified<ToTypeStr<StalePriceThreshold>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::set_stale_price_threshold::StalePriceThreshold">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        threshold: string;
    }, {
        threshold: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): StalePriceThreshold;
    static fromFieldsWithTypes(item: FieldsWithTypes): StalePriceThreshold;
    static fromBcs(data: Uint8Array): StalePriceThreshold;
    toJSONField(): {
        threshold: string;
    };
    toJSON(): {
        threshold: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): StalePriceThreshold;
    static fromJSON(json: Record<string, any>): StalePriceThreshold;
    static fromSuiParsedData(content: SuiParsedData): StalePriceThreshold;
    static fetch(client: SuiClient, id: string): Promise<StalePriceThreshold>;
}
