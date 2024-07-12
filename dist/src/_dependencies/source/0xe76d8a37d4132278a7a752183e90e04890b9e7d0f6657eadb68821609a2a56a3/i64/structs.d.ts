import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isI64(type: string): boolean;
export interface I64Fields {
    negative: ToField<"bool">;
    magnitude: ToField<"u64">;
}
export type I64Reified = Reified<I64, I64Fields>;
export declare class I64 implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::i64::I64";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::i64::I64";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::i64::I64";
    readonly $typeArgs: [];
    readonly negative: ToField<"bool">;
    readonly magnitude: ToField<"u64">;
    private constructor();
    static reified(): I64Reified;
    static get r(): import("../../../../_framework/reified").StructClassReified<I64, I64Fields>;
    static phantom(): PhantomReified<ToTypeStr<I64>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::i64::I64">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        negative: boolean;
        magnitude: string;
    }, {
        negative: boolean;
        magnitude: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): I64;
    static fromFieldsWithTypes(item: FieldsWithTypes): I64;
    static fromBcs(data: Uint8Array): I64;
    toJSONField(): {
        negative: boolean;
        magnitude: string;
    };
    toJSON(): {
        negative: boolean;
        magnitude: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): I64;
    static fromJSON(json: Record<string, any>): I64;
    static fromSuiParsedData(content: SuiParsedData): I64;
    static fetch(client: SuiClient, id: string): Promise<I64>;
}
