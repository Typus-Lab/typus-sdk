import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { BcsType } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isEntry(type: string): boolean;
export interface EntryFields<K extends TypeArgument, V extends TypeArgument> {
    key: ToField<K>;
    value: ToField<V>;
}
export type EntryReified<K extends TypeArgument, V extends TypeArgument> = Reified<Entry<K, V>, EntryFields<K, V>>;
export declare class Entry<K extends TypeArgument, V extends TypeArgument> implements StructClass {
    static readonly $typeName = "0x2::vec_map::Entry";
    static readonly $numTypeParams = 2;
    readonly $typeName = "0x2::vec_map::Entry";
    readonly $fullTypeName: `0x2::vec_map::Entry<${ToTypeStr<K>}, ${ToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<K>, ToTypeStr<V>];
    readonly key: ToField<K>;
    readonly value: ToField<V>;
    private constructor();
    static reified<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(K: K, V: V): EntryReified<ToTypeArgument<K>, ToTypeArgument<V>>;
    static get r(): typeof Entry.reified;
    static phantom<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(K: K, V: V): PhantomReified<ToTypeStr<Entry<ToTypeArgument<K>, ToTypeArgument<V>>>>;
    static get p(): typeof Entry.phantom;
    static get bcs(): <K extends BcsType<any>, V extends BcsType<any>>(K: K, V: V) => BcsType<{
        key: K extends BcsType<infer U_2, any> ? U_2 : never;
        value: V extends BcsType<infer U_2, any> ? U_2 : never;
    }, {
        key: K extends BcsType<any, infer U_3> ? U_3 : never;
        value: V extends BcsType<any, infer U_3> ? U_3 : never;
    }>;
    static fromFields<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], fields: Record<string, any>): Entry<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], item: FieldsWithTypes): Entry<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fromBcs<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], data: Uint8Array): Entry<ToTypeArgument<K>, ToTypeArgument<V>>;
    toJSONField(): {
        key: reified.ToJSON<K>;
        value: reified.ToJSON<V>;
    };
    toJSON(): {
        key: reified.ToJSON<K>;
        value: reified.ToJSON<V>;
        $typeName: string;
        $typeArgs: [reified.ToTypeStr<K>, reified.ToTypeStr<V>];
    };
    static fromJSONField<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], field: any): Entry<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fromJSON<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], json: Record<string, any>): Entry<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fromSuiParsedData<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], content: SuiParsedData): Entry<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fetch<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(client: SuiClient, typeArgs: [K, V], id: string): Promise<Entry<ToTypeArgument<K>, ToTypeArgument<V>>>;
}
export declare function isVecMap(type: string): boolean;
export interface VecMapFields<K extends TypeArgument, V extends TypeArgument> {
    contents: ToField<Vector<Entry<K, V>>>;
}
export type VecMapReified<K extends TypeArgument, V extends TypeArgument> = Reified<VecMap<K, V>, VecMapFields<K, V>>;
export declare class VecMap<K extends TypeArgument, V extends TypeArgument> implements StructClass {
    static readonly $typeName = "0x2::vec_map::VecMap";
    static readonly $numTypeParams = 2;
    readonly $typeName = "0x2::vec_map::VecMap";
    readonly $fullTypeName: `0x2::vec_map::VecMap<${ToTypeStr<K>}, ${ToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<K>, ToTypeStr<V>];
    readonly contents: ToField<Vector<Entry<K, V>>>;
    private constructor();
    static reified<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(K: K, V: V): VecMapReified<ToTypeArgument<K>, ToTypeArgument<V>>;
    static get r(): typeof VecMap.reified;
    static phantom<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(K: K, V: V): PhantomReified<ToTypeStr<VecMap<ToTypeArgument<K>, ToTypeArgument<V>>>>;
    static get p(): typeof VecMap.phantom;
    static get bcs(): <K extends BcsType<any>, V extends BcsType<any>>(K: K, V: V) => BcsType<{
        contents: {
            key: K extends BcsType<infer U_2, any> ? U_2 : never;
            value: V extends BcsType<infer U_2, any> ? U_2 : never;
        }[];
    }, {
        contents: Iterable<{
            key: K extends BcsType<any, infer U_3> ? U_3 : never;
            value: V extends BcsType<any, infer U_3> ? U_3 : never;
        }> & {
            length: number;
        };
    }>;
    static fromFields<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], fields: Record<string, any>): VecMap<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], item: FieldsWithTypes): VecMap<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fromBcs<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], data: Uint8Array): VecMap<ToTypeArgument<K>, ToTypeArgument<V>>;
    toJSONField(): {
        contents: {
            key: reified.ToJSON<K>;
            value: reified.ToJSON<V>;
        }[];
    };
    toJSON(): {
        contents: {
            key: reified.ToJSON<K>;
            value: reified.ToJSON<V>;
        }[];
        $typeName: string;
        $typeArgs: [reified.ToTypeStr<K>, reified.ToTypeStr<V>];
    };
    static fromJSONField<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], field: any): VecMap<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fromJSON<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], json: Record<string, any>): VecMap<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fromSuiParsedData<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], content: SuiParsedData): VecMap<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fetch<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(client: SuiClient, typeArgs: [K, V], id: string): Promise<VecMap<ToTypeArgument<K>, ToTypeArgument<V>>>;
}
