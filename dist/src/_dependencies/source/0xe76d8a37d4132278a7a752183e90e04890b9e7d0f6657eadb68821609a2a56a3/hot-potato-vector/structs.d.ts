import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { BcsType } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isHotPotatoVector(type: string): boolean;
export interface HotPotatoVectorFields<T extends TypeArgument> {
    contents: ToField<Vector<T>>;
}
export type HotPotatoVectorReified<T extends TypeArgument> = Reified<HotPotatoVector<T>, HotPotatoVectorFields<T>>;
export declare class HotPotatoVector<T extends TypeArgument> implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::hot_potato_vector::HotPotatoVector";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::hot_potato_vector::HotPotatoVector";
    readonly $fullTypeName: `0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::hot_potato_vector::HotPotatoVector<${ToTypeStr<T>}>`;
    readonly $typeArgs: [ToTypeStr<T>];
    readonly contents: ToField<Vector<T>>;
    private constructor();
    static reified<T extends Reified<TypeArgument, any>>(T: T): HotPotatoVectorReified<ToTypeArgument<T>>;
    static get r(): typeof HotPotatoVector.reified;
    static phantom<T extends Reified<TypeArgument, any>>(T: T): PhantomReified<ToTypeStr<HotPotatoVector<ToTypeArgument<T>>>>;
    static get p(): typeof HotPotatoVector.phantom;
    static get bcs(): <T extends BcsType<any>>(T: T) => BcsType<{
        contents: any[];
    }, {
        contents: Iterable<any> & {
            length: number;
        };
    }>;
    static fromFields<T extends Reified<TypeArgument, any>>(typeArg: T, fields: Record<string, any>): HotPotatoVector<ToTypeArgument<T>>;
    static fromFieldsWithTypes<T extends Reified<TypeArgument, any>>(typeArg: T, item: FieldsWithTypes): HotPotatoVector<ToTypeArgument<T>>;
    static fromBcs<T extends Reified<TypeArgument, any>>(typeArg: T, data: Uint8Array): HotPotatoVector<ToTypeArgument<T>>;
    toJSONField(): {
        contents: reified.ToJSON<T>[];
    };
    toJSON(): {
        contents: reified.ToJSON<T>[];
        $typeName: string;
        $typeArgs: [reified.ToTypeStr<T>];
    };
    static fromJSONField<T extends Reified<TypeArgument, any>>(typeArg: T, field: any): HotPotatoVector<ToTypeArgument<T>>;
    static fromJSON<T extends Reified<TypeArgument, any>>(typeArg: T, json: Record<string, any>): HotPotatoVector<ToTypeArgument<T>>;
    static fromSuiParsedData<T extends Reified<TypeArgument, any>>(typeArg: T, content: SuiParsedData): HotPotatoVector<ToTypeArgument<T>>;
    static fetch<T extends Reified<TypeArgument, any>>(client: SuiClient, typeArg: T, id: string): Promise<HotPotatoVector<ToTypeArgument<T>>>;
}
