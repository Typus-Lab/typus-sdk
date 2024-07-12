import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isPriceData(type: string): boolean;
export interface PriceDataFields {
    dummyField: ToField<"bool">;
}
export type PriceDataReified = Reified<PriceData, PriceDataFields>;
export declare class PriceData implements StructClass {
    static readonly $typeName = "0x2c64e2d3eb17daa7d2652e90957c21e8664418aa41092ddd4734fb6d6c61a133::price_data_pull::PriceData";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2c64e2d3eb17daa7d2652e90957c21e8664418aa41092ddd4734fb6d6c61a133::price_data_pull::PriceData";
    readonly $fullTypeName: "0x2c64e2d3eb17daa7d2652e90957c21e8664418aa41092ddd4734fb6d6c61a133::price_data_pull::PriceData";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): PriceDataReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<PriceData, PriceDataFields>;
    static phantom(): PhantomReified<ToTypeStr<PriceData>>;
    static get p(): PhantomReified<"0x2c64e2d3eb17daa7d2652e90957c21e8664418aa41092ddd4734fb6d6c61a133::price_data_pull::PriceData">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): PriceData;
    static fromFieldsWithTypes(item: FieldsWithTypes): PriceData;
    static fromBcs(data: Uint8Array): PriceData;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PriceData;
    static fromJSON(json: Record<string, any>): PriceData;
    static fromSuiParsedData(content: SuiParsedData): PriceData;
    static fetch(client: SuiClient, id: string): Promise<PriceData>;
}
