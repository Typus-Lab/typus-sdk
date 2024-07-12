import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isBytes32(type: string): boolean;
export interface Bytes32Fields {
    data: ToField<Vector<"u8">>;
}
export type Bytes32Reified = Reified<Bytes32, Bytes32Fields>;
export declare class Bytes32 implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::bytes32::Bytes32";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::bytes32::Bytes32";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::bytes32::Bytes32";
    readonly $typeArgs: [];
    readonly data: ToField<Vector<"u8">>;
    private constructor();
    static reified(): Bytes32Reified;
    static get r(): reified.StructClassReified<Bytes32, Bytes32Fields>;
    static phantom(): PhantomReified<ToTypeStr<Bytes32>>;
    static get p(): reified.PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::bytes32::Bytes32">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        data: number[];
    }, {
        data: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): Bytes32;
    static fromFieldsWithTypes(item: FieldsWithTypes): Bytes32;
    static fromBcs(data: Uint8Array): Bytes32;
    toJSONField(): {
        data: number[];
    };
    toJSON(): {
        data: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Bytes32;
    static fromJSON(json: Record<string, any>): Bytes32;
    static fromSuiParsedData(content: SuiParsedData): Bytes32;
    static fetch(client: SuiClient, id: string): Promise<Bytes32>;
}
