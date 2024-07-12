import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isString(type: string): boolean;
export interface StringFields {
    bytes: ToField<Vector<"u8">>;
}
export type StringReified = Reified<String, StringFields>;
export declare class String implements StructClass {
    static readonly $typeName = "0x1::string::String";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x1::string::String";
    readonly $fullTypeName: "0x1::string::String";
    readonly $typeArgs: [];
    readonly bytes: ToField<Vector<"u8">>;
    private constructor();
    static reified(): StringReified;
    static get r(): reified.StructClassReified<String, StringFields>;
    static phantom(): PhantomReified<ToTypeStr<String>>;
    static get p(): reified.PhantomReified<"0x1::string::String">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        bytes: number[];
    }, {
        bytes: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): String;
    static fromFieldsWithTypes(item: FieldsWithTypes): String;
    static fromBcs(data: Uint8Array): String;
    toJSONField(): {
        bytes: number[];
    };
    toJSON(): {
        bytes: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): String;
    static fromJSON(json: Record<string, any>): String;
    static fromSuiParsedData(content: SuiParsedData): String;
    static fetch(client: SuiClient, id: string): Promise<String>;
}
