import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { BcsType } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isVecSet(type: string): boolean;
export interface VecSetFields<K extends TypeArgument> {
    contents: ToField<Vector<K>>;
}
export type VecSetReified<K extends TypeArgument> = Reified<VecSet<K>, VecSetFields<K>>;
export declare class VecSet<K extends TypeArgument> implements StructClass {
    static readonly $typeName = "0x2::vec_set::VecSet";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::vec_set::VecSet";
    readonly $fullTypeName: `0x2::vec_set::VecSet<${ToTypeStr<K>}>`;
    readonly $typeArgs: [ToTypeStr<K>];
    readonly contents: ToField<Vector<K>>;
    private constructor();
    static reified<K extends Reified<TypeArgument, any>>(K: K): VecSetReified<ToTypeArgument<K>>;
    static get r(): typeof VecSet.reified;
    static phantom<K extends Reified<TypeArgument, any>>(K: K): PhantomReified<ToTypeStr<VecSet<ToTypeArgument<K>>>>;
    static get p(): typeof VecSet.phantom;
    static get bcs(): <K extends BcsType<any>>(K: K) => BcsType<{
        contents: any[];
    }, {
        contents: Iterable<any> & {
            length: number;
        };
    }>;
    static fromFields<K extends Reified<TypeArgument, any>>(typeArg: K, fields: Record<string, any>): VecSet<ToTypeArgument<K>>;
    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>>(typeArg: K, item: FieldsWithTypes): VecSet<ToTypeArgument<K>>;
    static fromBcs<K extends Reified<TypeArgument, any>>(typeArg: K, data: Uint8Array): VecSet<ToTypeArgument<K>>;
    toJSONField(): {
        contents: reified.ToJSON<K>[];
    };
    toJSON(): {
        contents: reified.ToJSON<K>[];
        $typeName: string;
        $typeArgs: [reified.ToTypeStr<K>];
    };
    static fromJSONField<K extends Reified<TypeArgument, any>>(typeArg: K, field: any): VecSet<ToTypeArgument<K>>;
    static fromJSON<K extends Reified<TypeArgument, any>>(typeArg: K, json: Record<string, any>): VecSet<ToTypeArgument<K>>;
    static fromSuiParsedData<K extends Reified<TypeArgument, any>>(typeArg: K, content: SuiParsedData): VecSet<ToTypeArgument<K>>;
    static fetch<K extends Reified<TypeArgument, any>>(client: SuiClient, typeArg: K, id: string): Promise<VecSet<ToTypeArgument<K>>>;
}
