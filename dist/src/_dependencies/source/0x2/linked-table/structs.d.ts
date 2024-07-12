import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeArgument, ToTypeStr, TypeArgument } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Option } from "../../0x1/option/structs";
import { UID } from "../object/structs";
import { BcsType } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isLinkedTable(type: string): boolean;
export interface LinkedTableFields<K extends TypeArgument, V extends PhantomTypeArgument> {
    id: ToField<UID>;
    size: ToField<"u64">;
    head: ToField<Option<K>>;
    tail: ToField<Option<K>>;
}
export type LinkedTableReified<K extends TypeArgument, V extends PhantomTypeArgument> = Reified<LinkedTable<K, V>, LinkedTableFields<K, V>>;
export declare class LinkedTable<K extends TypeArgument, V extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::linked_table::LinkedTable";
    static readonly $numTypeParams = 2;
    readonly $typeName = "0x2::linked_table::LinkedTable";
    readonly $fullTypeName: `0x2::linked_table::LinkedTable<${ToTypeStr<K>}, ${PhantomToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<K>, PhantomToTypeStr<V>];
    readonly id: ToField<UID>;
    readonly size: ToField<"u64">;
    readonly head: ToField<Option<K>>;
    readonly tail: ToField<Option<K>>;
    private constructor();
    static reified<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(K: K, V: V): LinkedTableReified<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static get r(): typeof LinkedTable.reified;
    static phantom<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(K: K, V: V): PhantomReified<ToTypeStr<LinkedTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>>>;
    static get p(): typeof LinkedTable.phantom;
    static get bcs(): <K extends BcsType<any>>(K: K) => BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        size: string;
        head: {
            vec: any[];
        };
        tail: {
            vec: any[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        size: string | number | bigint;
        head: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        tail: {
            vec: Iterable<any> & {
                length: number;
            };
        };
    }>;
    static fromFields<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], fields: Record<string, any>): LinkedTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], item: FieldsWithTypes): LinkedTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromBcs<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], data: Uint8Array): LinkedTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    toJSONField(): {
        id: string;
        size: string;
        head: import("../../../../_framework/reified").ToJSON<K> | null;
        tail: import("../../../../_framework/reified").ToJSON<K> | null;
    };
    toJSON(): {
        id: string;
        size: string;
        head: import("../../../../_framework/reified").ToJSON<K> | null;
        tail: import("../../../../_framework/reified").ToJSON<K> | null;
        $typeName: string;
        $typeArgs: [ToTypeStr<K>, PhantomToTypeStr<V>];
    };
    static fromJSONField<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], field: any): LinkedTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromJSON<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], json: Record<string, any>): LinkedTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromSuiParsedData<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], content: SuiParsedData): LinkedTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fetch<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [K, V], id: string): Promise<LinkedTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>>;
}
export declare function isNode(type: string): boolean;
export interface NodeFields<K extends TypeArgument, V extends TypeArgument> {
    prev: ToField<Option<K>>;
    next: ToField<Option<K>>;
    value: ToField<V>;
}
export type NodeReified<K extends TypeArgument, V extends TypeArgument> = Reified<Node<K, V>, NodeFields<K, V>>;
export declare class Node<K extends TypeArgument, V extends TypeArgument> implements StructClass {
    static readonly $typeName = "0x2::linked_table::Node";
    static readonly $numTypeParams = 2;
    readonly $typeName = "0x2::linked_table::Node";
    readonly $fullTypeName: `0x2::linked_table::Node<${ToTypeStr<K>}, ${ToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<K>, ToTypeStr<V>];
    readonly prev: ToField<Option<K>>;
    readonly next: ToField<Option<K>>;
    readonly value: ToField<V>;
    private constructor();
    static reified<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(K: K, V: V): NodeReified<ToTypeArgument<K>, ToTypeArgument<V>>;
    static get r(): typeof Node.reified;
    static phantom<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(K: K, V: V): PhantomReified<ToTypeStr<Node<ToTypeArgument<K>, ToTypeArgument<V>>>>;
    static get p(): typeof Node.phantom;
    static get bcs(): <K extends BcsType<any>, V extends BcsType<any>>(K: K, V: V) => BcsType<{
        prev: {
            vec: any[];
        };
        next: {
            vec: any[];
        };
        value: V extends BcsType<infer U_2, any> ? U_2 : never;
    }, {
        prev: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        next: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        value: V extends BcsType<any, infer U_3> ? U_3 : never;
    }>;
    static fromFields<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], fields: Record<string, any>): Node<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], item: FieldsWithTypes): Node<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fromBcs<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], data: Uint8Array): Node<ToTypeArgument<K>, ToTypeArgument<V>>;
    toJSONField(): {
        prev: import("../../../../_framework/reified").ToJSON<K> | null;
        next: import("../../../../_framework/reified").ToJSON<K> | null;
        value: import("../../../../_framework/reified").ToJSON<V>;
    };
    toJSON(): {
        prev: import("../../../../_framework/reified").ToJSON<K> | null;
        next: import("../../../../_framework/reified").ToJSON<K> | null;
        value: import("../../../../_framework/reified").ToJSON<V>;
        $typeName: string;
        $typeArgs: [ToTypeStr<K>, ToTypeStr<V>];
    };
    static fromJSONField<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], field: any): Node<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fromJSON<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], json: Record<string, any>): Node<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fromSuiParsedData<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], content: SuiParsedData): Node<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fetch<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(client: SuiClient, typeArgs: [K, V], id: string): Promise<Node<ToTypeArgument<K>, ToTypeArgument<V>>>;
}
