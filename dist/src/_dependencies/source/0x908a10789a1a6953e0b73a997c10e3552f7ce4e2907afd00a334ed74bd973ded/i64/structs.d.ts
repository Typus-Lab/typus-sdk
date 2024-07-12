import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isI64(type: string): boolean;
export interface I64Fields {
    bits: ToField<"u64">;
}
export type I64Reified = Reified<I64, I64Fields>;
export declare class I64 implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::i64::I64";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::i64::I64";
    readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::i64::I64";
    readonly $typeArgs: [];
    readonly bits: ToField<"u64">;
    private constructor();
    static reified(): I64Reified;
    static get r(): import("../../../../_framework/reified").StructClassReified<I64, I64Fields>;
    static phantom(): PhantomReified<ToTypeStr<I64>>;
    static get p(): PhantomReified<"0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::i64::I64">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        bits: string;
    }, {
        bits: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): I64;
    static fromFieldsWithTypes(item: FieldsWithTypes): I64;
    static fromBcs(data: Uint8Array): I64;
    toJSONField(): {
        bits: string;
    };
    toJSON(): {
        bits: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): I64;
    static fromJSON(json: Record<string, any>): I64;
    static fromSuiParsedData(content: SuiParsedData): I64;
    static fetch(client: SuiClient, id: string): Promise<I64>;
}
