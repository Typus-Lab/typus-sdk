import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isSUI(type: string): boolean;
export interface SUIFields {
    dummyField: ToField<"bool">;
}
export type SUIReified = Reified<SUI, SUIFields>;
export declare class SUI implements StructClass {
    static readonly $typeName = "0x2::sui::SUI";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::sui::SUI";
    readonly $fullTypeName: "0x2::sui::SUI";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): SUIReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<SUI, SUIFields>;
    static phantom(): PhantomReified<ToTypeStr<SUI>>;
    static get p(): PhantomReified<"0x2::sui::SUI">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): SUI;
    static fromFieldsWithTypes(item: FieldsWithTypes): SUI;
    static fromBcs(data: Uint8Array): SUI;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SUI;
    static fromJSON(json: Record<string, any>): SUI;
    static fromSuiParsedData(content: SuiParsedData): SUI;
    static fetch(client: SuiClient, id: string): Promise<SUI>;
}
