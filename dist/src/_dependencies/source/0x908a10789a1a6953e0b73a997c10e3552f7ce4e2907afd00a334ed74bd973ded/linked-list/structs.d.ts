import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeArgument, ToTypeStr, TypeArgument } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Option } from "../../0x1/option/structs";
import { ID } from "../../0x2/object/structs";
import { BcsType } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isNode(type: string): boolean;
export interface NodeFields<K extends TypeArgument, V extends TypeArgument> {
    value: ToField<V>;
    prev: ToField<Option<K>>;
    next: ToField<Option<K>>;
    exists: ToField<"bool">;
}
export type NodeReified<K extends TypeArgument, V extends TypeArgument> = Reified<Node<K, V>, NodeFields<K, V>>;
export declare class Node<K extends TypeArgument, V extends TypeArgument> implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::linked_list::Node";
    static readonly $numTypeParams = 2;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::linked_list::Node";
    readonly $fullTypeName: `0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::linked_list::Node<${ToTypeStr<K>}, ${ToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<K>, ToTypeStr<V>];
    readonly value: ToField<V>;
    readonly prev: ToField<Option<K>>;
    readonly next: ToField<Option<K>>;
    readonly exists: ToField<"bool">;
    private constructor();
    static reified<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(K: K, V: V): NodeReified<ToTypeArgument<K>, ToTypeArgument<V>>;
    static get r(): typeof Node.reified;
    static phantom<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(K: K, V: V): PhantomReified<ToTypeStr<Node<ToTypeArgument<K>, ToTypeArgument<V>>>>;
    static get p(): typeof Node.phantom;
    static get bcs(): <K extends BcsType<any>, V extends BcsType<any>>(K: K, V: V) => BcsType<{
        value: V extends BcsType<infer U_2, any> ? U_2 : never;
        prev: {
            vec: any[];
        };
        next: {
            vec: any[];
        };
        exists: boolean;
    }, {
        value: V extends BcsType<any, infer U_3> ? U_3 : never;
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
        exists: boolean;
    }>;
    static fromFields<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], fields: Record<string, any>): Node<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], item: FieldsWithTypes): Node<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fromBcs<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], data: Uint8Array): Node<ToTypeArgument<K>, ToTypeArgument<V>>;
    toJSONField(): {
        value: import("../../../../_framework/reified").ToJSON<V>;
        prev: import("../../../../_framework/reified").ToJSON<K> | null;
        next: import("../../../../_framework/reified").ToJSON<K> | null;
        exists: boolean;
    };
    toJSON(): {
        value: import("../../../../_framework/reified").ToJSON<V>;
        prev: import("../../../../_framework/reified").ToJSON<K> | null;
        next: import("../../../../_framework/reified").ToJSON<K> | null;
        exists: boolean;
        $typeName: string;
        $typeArgs: [ToTypeStr<K>, ToTypeStr<V>];
    };
    static fromJSONField<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], field: any): Node<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fromJSON<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], json: Record<string, any>): Node<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fromSuiParsedData<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(typeArgs: [K, V], content: SuiParsedData): Node<ToTypeArgument<K>, ToTypeArgument<V>>;
    static fetch<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(client: SuiClient, typeArgs: [K, V], id: string): Promise<Node<ToTypeArgument<K>, ToTypeArgument<V>>>;
}
export declare function isLinkedList(type: string): boolean;
export interface LinkedListFields<K extends TypeArgument, V extends PhantomTypeArgument> {
    id: ToField<ID>;
    first: ToField<Option<K>>;
    last: ToField<Option<K>>;
    length: ToField<"u64">;
}
export type LinkedListReified<K extends TypeArgument, V extends PhantomTypeArgument> = Reified<LinkedList<K, V>, LinkedListFields<K, V>>;
export declare class LinkedList<K extends TypeArgument, V extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::linked_list::LinkedList";
    static readonly $numTypeParams = 2;
    readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::linked_list::LinkedList";
    readonly $fullTypeName: `0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::linked_list::LinkedList<${ToTypeStr<K>}, ${PhantomToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<K>, PhantomToTypeStr<V>];
    readonly id: ToField<ID>;
    readonly first: ToField<Option<K>>;
    readonly last: ToField<Option<K>>;
    readonly length: ToField<"u64">;
    private constructor();
    static reified<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(K: K, V: V): LinkedListReified<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static get r(): typeof LinkedList.reified;
    static phantom<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(K: K, V: V): PhantomReified<ToTypeStr<LinkedList<ToTypeArgument<K>, ToPhantomTypeArgument<V>>>>;
    static get p(): typeof LinkedList.phantom;
    static get bcs(): <K extends BcsType<any>>(K: K) => BcsType<{
        id: {
            bytes: string;
        };
        first: {
            vec: any[];
        };
        last: {
            vec: any[];
        };
        length: string;
    }, {
        id: {
            bytes: string;
        };
        first: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        last: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        length: string | number | bigint;
    }>;
    static fromFields<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], fields: Record<string, any>): LinkedList<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], item: FieldsWithTypes): LinkedList<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromBcs<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], data: Uint8Array): LinkedList<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    toJSONField(): {
        id: string;
        first: import("../../../../_framework/reified").ToJSON<K> | null;
        last: import("../../../../_framework/reified").ToJSON<K> | null;
        length: string;
    };
    toJSON(): {
        id: string;
        first: import("../../../../_framework/reified").ToJSON<K> | null;
        last: import("../../../../_framework/reified").ToJSON<K> | null;
        length: string;
        $typeName: string;
        $typeArgs: [ToTypeStr<K>, PhantomToTypeStr<V>];
    };
    static fromJSONField<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], field: any): LinkedList<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromJSON<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], json: Record<string, any>): LinkedList<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fromSuiParsedData<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(typeArgs: [K, V], content: SuiParsedData): LinkedList<ToTypeArgument<K>, ToPhantomTypeArgument<V>>;
    static fetch<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [K, V], id: string): Promise<LinkedList<ToTypeArgument<K>, ToPhantomTypeArgument<V>>>;
}
