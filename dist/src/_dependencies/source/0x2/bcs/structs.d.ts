import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isBCS(type: string): boolean;
export interface BCSFields {
    bytes: ToField<Vector<"u8">>;
}
export type BCSReified = Reified<BCS, BCSFields>;
export declare class BCS implements StructClass {
    static readonly $typeName = "0x2::bcs::BCS";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::bcs::BCS";
    readonly $fullTypeName: "0x2::bcs::BCS";
    readonly $typeArgs: [];
    readonly bytes: ToField<Vector<"u8">>;
    private constructor();
    static reified(): BCSReified;
    static get r(): reified.StructClassReified<BCS, BCSFields>;
    static phantom(): PhantomReified<ToTypeStr<BCS>>;
    static get p(): reified.PhantomReified<"0x2::bcs::BCS">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        bytes: number[];
    }, {
        bytes: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): BCS;
    static fromFieldsWithTypes(item: FieldsWithTypes): BCS;
    static fromBcs(data: Uint8Array): BCS;
    toJSONField(): {
        bytes: number[];
    };
    toJSON(): {
        bytes: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): BCS;
    static fromJSON(json: Record<string, any>): BCS;
    static fromSuiParsedData(content: SuiParsedData): BCS;
    static fetch(client: SuiClient, id: string): Promise<BCS>;
}
