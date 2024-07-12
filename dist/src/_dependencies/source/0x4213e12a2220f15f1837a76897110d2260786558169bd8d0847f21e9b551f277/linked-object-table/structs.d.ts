import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeArgument, ToTypeStr, TypeArgument } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Option } from "../../0x1/option/structs";
import { UID } from "../../0x2/object/structs";
import { BcsType } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isNode(type: string): boolean;
export interface NodeFields<K extends TypeArgument, V extends PhantomTypeArgument> {
    prev: ToField<Option<K>>;
    next: ToField<Option<K>>;
}
export type NodeReified<K extends TypeArgument, V extends PhantomTypeArgument> = Reified<Node<K, V>, NodeFields<K, V>>;
export declare class Node<K extends TypeArgument, V extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::linked_object_table::Node";
    static readonly $numTypeParams = 2;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::linked_object_table::Node";
    readonly $fullTypeName: `0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::linked_object_table::Node<${ToTypeStr<K>}, ${PhantomToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<K>, PhantomToTypeStr<V>];
    readonly prev: ToField<Option<K>>;
    readonly next: ToField<Option<K>>;
    private constructor();
    static reified<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(K: K, V: V): NodeReified<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static get r(): typeof Node.reified;
    static phantom<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(K: K, V: V): PhantomReified<ToTypeStr<Node<ToTypeArgument<K>, ToPhantomTypeArgument<V>>>>;
    static get p(): typeof Node.phantom;
    static get bcs(): <K extends BcsType<any>>(K: K) => BcsType<{
        prev: {
            vec: any[];
        };
        next: {
            vec: any[];
        };
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
    }>;
    static fromFields<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], fields: Record<string, any>): Node<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], item: FieldsWithTypes): Node<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromBcs<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], data: Uint8Array): Node<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    toJSONField(): {
        prev: import("../../../../_framework/reified").ToJSON<K> | null;
        next: import("../../../../_framework/reified").ToJSON<K> | null;
    };
    toJSON(): {
        prev: import("../../../../_framework/reified").ToJSON<K> | null;
        next: import("../../../../_framework/reified").ToJSON<K> | null;
        $typeName: string;
        $typeArgs: [ToTypeStr<K>, PhantomToTypeStr<V>];
    };
    static fromJSONField<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], field: any): Node<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromJSON<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], json: Record<string, any>): Node<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromSuiParsedData<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], content: SuiParsedData): Node<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fetch<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [K, V], id: string): Promise<Node<ToTypeArgument<K>, ToPhantomTypeArgument<V>>>;
}
export declare function isLinkedObjectTable(type: string): boolean;
export interface LinkedObjectTableFields<K extends TypeArgument, V extends PhantomTypeArgument> {
    id: ToField<UID>;
    vid: ToField<UID>;
    size: ToField<"u64">;
    head: ToField<Option<K>>;
    tail: ToField<Option<K>>;
}
export type LinkedObjectTableReified<K extends TypeArgument, V extends PhantomTypeArgument> = Reified<LinkedObjectTable<K, V>, LinkedObjectTableFields<K, V>>;
export declare class LinkedObjectTable<K extends TypeArgument, V extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::linked_object_table::LinkedObjectTable";
    static readonly $numTypeParams = 2;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::linked_object_table::LinkedObjectTable";
    readonly $fullTypeName: `0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::linked_object_table::LinkedObjectTable<${ToTypeStr<K>}, ${PhantomToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<K>, PhantomToTypeStr<V>];
    readonly id: ToField<UID>;
    readonly vid: ToField<UID>;
    readonly size: ToField<"u64">;
    readonly head: ToField<Option<K>>;
    readonly tail: ToField<Option<K>>;
    private constructor();
    static reified<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(K: K, V: V): LinkedObjectTableReified<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static get r(): typeof LinkedObjectTable.reified;
    static phantom<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(K: K, V: V): PhantomReified<ToTypeStr<LinkedObjectTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>>>;
    static get p(): typeof LinkedObjectTable.phantom;
    static get bcs(): <K extends BcsType<any>>(K: K) => BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        vid: {
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
        vid: {
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
    static fromFields<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], fields: Record<string, any>): LinkedObjectTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], item: FieldsWithTypes): LinkedObjectTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromBcs<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], data: Uint8Array): LinkedObjectTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    toJSONField(): {
        id: string;
        vid: string;
        size: string;
        head: import("../../../../_framework/reified").ToJSON<K> | null;
        tail: import("../../../../_framework/reified").ToJSON<K> | null;
    };
    toJSON(): {
        id: string;
        vid: string;
        size: string;
        head: import("../../../../_framework/reified").ToJSON<K> | null;
        tail: import("../../../../_framework/reified").ToJSON<K> | null;
        $typeName: string;
        $typeArgs: [ToTypeStr<K>, PhantomToTypeStr<V>];
    };
    static fromJSONField<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], field: any): LinkedObjectTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromJSON<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], json: Record<string, any>): LinkedObjectTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromSuiParsedData<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], content: SuiParsedData): LinkedObjectTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fetch<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [K, V], id: string): Promise<LinkedObjectTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>>;
}
