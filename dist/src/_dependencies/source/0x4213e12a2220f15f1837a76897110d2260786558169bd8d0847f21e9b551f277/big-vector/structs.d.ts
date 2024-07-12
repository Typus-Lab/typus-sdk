import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { TypeName } from "../../0x1/type-name/structs";
import { UID } from "../../0x2/object/structs";
import { BcsType } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isBigVector(type: string): boolean;
export interface BigVectorFields {
    id: ToField<UID>;
    elementType: ToField<TypeName>;
    sliceIdx: ToField<"u64">;
    sliceSize: ToField<"u32">;
    length: ToField<"u64">;
}
export type BigVectorReified = Reified<BigVector, BigVectorFields>;
export declare class BigVector implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::big_vector::BigVector";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::big_vector::BigVector";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::big_vector::BigVector";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly elementType: ToField<TypeName>;
    readonly sliceIdx: ToField<"u64">;
    readonly sliceSize: ToField<"u32">;
    readonly length: ToField<"u64">;
    private constructor();
    static reified(): BigVectorReified;
    static get r(): reified.StructClassReified<BigVector, BigVectorFields>;
    static phantom(): PhantomReified<ToTypeStr<BigVector>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::big_vector::BigVector">;
    static get bcs(): BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        element_type: {
            name: {
                bytes: number[];
            };
        };
        slice_idx: string;
        slice_size: number;
        length: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        element_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        slice_idx: string | number | bigint;
        slice_size: number;
        length: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): BigVector;
    static fromFieldsWithTypes(item: FieldsWithTypes): BigVector;
    static fromBcs(data: Uint8Array): BigVector;
    toJSONField(): {
        id: string;
        elementType: {
            name: string;
        };
        sliceIdx: string;
        sliceSize: number;
        length: string;
    };
    toJSON(): {
        id: string;
        elementType: {
            name: string;
        };
        sliceIdx: string;
        sliceSize: number;
        length: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): BigVector;
    static fromJSON(json: Record<string, any>): BigVector;
    static fromSuiParsedData(content: SuiParsedData): BigVector;
    static fetch(client: SuiClient, id: string): Promise<BigVector>;
}
export declare function isSlice(type: string): boolean;
export interface SliceFields<Element extends TypeArgument> {
    idx: ToField<"u64">;
    vector: ToField<Vector<Element>>;
}
export type SliceReified<Element extends TypeArgument> = Reified<Slice<Element>, SliceFields<Element>>;
export declare class Slice<Element extends TypeArgument> implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::big_vector::Slice";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::big_vector::Slice";
    readonly $fullTypeName: `0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::big_vector::Slice<${ToTypeStr<Element>}>`;
    readonly $typeArgs: [ToTypeStr<Element>];
    readonly idx: ToField<"u64">;
    readonly vector: ToField<Vector<Element>>;
    private constructor();
    static reified<Element extends Reified<TypeArgument, any>>(Element: Element): SliceReified<ToTypeArgument<Element>>;
    static get r(): typeof Slice.reified;
    static phantom<Element extends Reified<TypeArgument, any>>(Element: Element): PhantomReified<ToTypeStr<Slice<ToTypeArgument<Element>>>>;
    static get p(): typeof Slice.phantom;
    static get bcs(): <Element extends BcsType<any>>(Element: Element) => BcsType<{
        idx: string;
        vector: any[];
    }, {
        idx: string | number | bigint;
        vector: Iterable<any> & {
            length: number;
        };
    }>;
    static fromFields<Element extends Reified<TypeArgument, any>>(typeArg: Element, fields: Record<string, any>): Slice<ToTypeArgument<Element>>;
    static fromFieldsWithTypes<Element extends Reified<TypeArgument, any>>(typeArg: Element, item: FieldsWithTypes): Slice<ToTypeArgument<Element>>;
    static fromBcs<Element extends Reified<TypeArgument, any>>(typeArg: Element, data: Uint8Array): Slice<ToTypeArgument<Element>>;
    toJSONField(): {
        idx: string;
        vector: reified.ToJSON<Element>[];
    };
    toJSON(): {
        idx: string;
        vector: reified.ToJSON<Element>[];
        $typeName: string;
        $typeArgs: [reified.ToTypeStr<Element>];
    };
    static fromJSONField<Element extends Reified<TypeArgument, any>>(typeArg: Element, field: any): Slice<ToTypeArgument<Element>>;
    static fromJSON<Element extends Reified<TypeArgument, any>>(typeArg: Element, json: Record<string, any>): Slice<ToTypeArgument<Element>>;
    static fromSuiParsedData<Element extends Reified<TypeArgument, any>>(typeArg: Element, content: SuiParsedData): Slice<ToTypeArgument<Element>>;
    static fetch<Element extends Reified<TypeArgument, any>>(client: SuiClient, typeArg: Element, id: string): Promise<Slice<ToTypeArgument<Element>>>;
}
