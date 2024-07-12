import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isBytes20(type: string): boolean;
export interface Bytes20Fields {
    data: ToField<Vector<"u8">>;
}
export type Bytes20Reified = Reified<Bytes20, Bytes20Fields>;
export declare class Bytes20 implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::bytes20::Bytes20";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::bytes20::Bytes20";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::bytes20::Bytes20";
    readonly $typeArgs: [];
    readonly data: ToField<Vector<"u8">>;
    private constructor();
    static reified(): Bytes20Reified;
    static get r(): reified.StructClassReified<Bytes20, Bytes20Fields>;
    static phantom(): PhantomReified<ToTypeStr<Bytes20>>;
    static get p(): reified.PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::bytes20::Bytes20">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        data: number[];
    }, {
        data: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): Bytes20;
    static fromFieldsWithTypes(item: FieldsWithTypes): Bytes20;
    static fromBcs(data: Uint8Array): Bytes20;
    toJSONField(): {
        data: number[];
    };
    toJSON(): {
        data: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Bytes20;
    static fromJSON(json: Record<string, any>): Bytes20;
    static fromSuiParsedData(content: SuiParsedData): Bytes20;
    static fetch(client: SuiClient, id: string): Promise<Bytes20>;
}
