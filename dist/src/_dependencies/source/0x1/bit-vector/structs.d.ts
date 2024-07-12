import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isBitVector(type: string): boolean;
export interface BitVectorFields {
    length: ToField<"u64">;
    bitField: ToField<Vector<"bool">>;
}
export type BitVectorReified = Reified<BitVector, BitVectorFields>;
export declare class BitVector implements StructClass {
    static readonly $typeName = "0x1::bit_vector::BitVector";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x1::bit_vector::BitVector";
    readonly $fullTypeName: "0x1::bit_vector::BitVector";
    readonly $typeArgs: [];
    readonly length: ToField<"u64">;
    readonly bitField: ToField<Vector<"bool">>;
    private constructor();
    static reified(): BitVectorReified;
    static get r(): reified.StructClassReified<BitVector, BitVectorFields>;
    static phantom(): PhantomReified<ToTypeStr<BitVector>>;
    static get p(): reified.PhantomReified<"0x1::bit_vector::BitVector">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        length: string;
        bit_field: boolean[];
    }, {
        length: string | number | bigint;
        bit_field: Iterable<boolean> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): BitVector;
    static fromFieldsWithTypes(item: FieldsWithTypes): BitVector;
    static fromBcs(data: Uint8Array): BitVector;
    toJSONField(): {
        length: string;
        bitField: boolean[];
    };
    toJSON(): {
        length: string;
        bitField: boolean[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): BitVector;
    static fromJSON(json: Record<string, any>): BitVector;
    static fromSuiParsedData(content: SuiParsedData): BitVector;
    static fetch(client: SuiClient, id: string): Promise<BitVector>;
}
