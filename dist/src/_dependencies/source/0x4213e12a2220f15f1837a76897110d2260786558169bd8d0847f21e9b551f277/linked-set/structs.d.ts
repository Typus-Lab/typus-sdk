import { PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Option } from "../../0x1/option/structs";
import { UID } from "../../0x2/object/structs";
import { BcsType } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isNode(type: string): boolean;
export interface NodeFields<K extends TypeArgument> {
    prev: ToField<Option<K>>;
    next: ToField<Option<K>>;
}
export type NodeReified<K extends TypeArgument> = Reified<Node<K>, NodeFields<K>>;
export declare class Node<K extends TypeArgument> implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::linked_set::Node";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::linked_set::Node";
    readonly $fullTypeName: `0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::linked_set::Node<${ToTypeStr<K>}>`;
    readonly $typeArgs: [ToTypeStr<K>];
    readonly prev: ToField<Option<K>>;
    readonly next: ToField<Option<K>>;
    private constructor();
    static reified<K extends Reified<TypeArgument, any>>(K: K): NodeReified<ToTypeArgument<K>>;
    static get r(): typeof Node.reified;
    static phantom<K extends Reified<TypeArgument, any>>(K: K): PhantomReified<ToTypeStr<Node<ToTypeArgument<K>>>>;
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
    static fromFields<K extends Reified<TypeArgument, any>>(typeArg: K, fields: Record<string, any>): Node<ToTypeArgument<K>>;
    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>>(typeArg: K, item: FieldsWithTypes): Node<ToTypeArgument<K>>;
    static fromBcs<K extends Reified<TypeArgument, any>>(typeArg: K, data: Uint8Array): Node<ToTypeArgument<K>>;
    toJSONField(): {
        prev: import("../../../../_framework/reified").ToJSON<K> | null;
        next: import("../../../../_framework/reified").ToJSON<K> | null;
    };
    toJSON(): {
        prev: import("../../../../_framework/reified").ToJSON<K> | null;
        next: import("../../../../_framework/reified").ToJSON<K> | null;
        $typeName: string;
        $typeArgs: [ToTypeStr<K>];
    };
    static fromJSONField<K extends Reified<TypeArgument, any>>(typeArg: K, field: any): Node<ToTypeArgument<K>>;
    static fromJSON<K extends Reified<TypeArgument, any>>(typeArg: K, json: Record<string, any>): Node<ToTypeArgument<K>>;
    static fromSuiParsedData<K extends Reified<TypeArgument, any>>(typeArg: K, content: SuiParsedData): Node<ToTypeArgument<K>>;
    static fetch<K extends Reified<TypeArgument, any>>(client: SuiClient, typeArg: K, id: string): Promise<Node<ToTypeArgument<K>>>;
}
export declare function isLinkedSet(type: string): boolean;
export interface LinkedSetFields<K extends TypeArgument> {
    id: ToField<UID>;
    size: ToField<"u64">;
    head: ToField<Option<K>>;
    tail: ToField<Option<K>>;
}
export type LinkedSetReified<K extends TypeArgument> = Reified<LinkedSet<K>, LinkedSetFields<K>>;
export declare class LinkedSet<K extends TypeArgument> implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::linked_set::LinkedSet";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::linked_set::LinkedSet";
    readonly $fullTypeName: `0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::linked_set::LinkedSet<${ToTypeStr<K>}>`;
    readonly $typeArgs: [ToTypeStr<K>];
    readonly id: ToField<UID>;
    readonly size: ToField<"u64">;
    readonly head: ToField<Option<K>>;
    readonly tail: ToField<Option<K>>;
    private constructor();
    static reified<K extends Reified<TypeArgument, any>>(K: K): LinkedSetReified<ToTypeArgument<K>>;
    static get r(): typeof LinkedSet.reified;
    static phantom<K extends Reified<TypeArgument, any>>(K: K): PhantomReified<ToTypeStr<LinkedSet<ToTypeArgument<K>>>>;
    static get p(): typeof LinkedSet.phantom;
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
    static fromFields<K extends Reified<TypeArgument, any>>(typeArg: K, fields: Record<string, any>): LinkedSet<ToTypeArgument<K>>;
    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>>(typeArg: K, item: FieldsWithTypes): LinkedSet<ToTypeArgument<K>>;
    static fromBcs<K extends Reified<TypeArgument, any>>(typeArg: K, data: Uint8Array): LinkedSet<ToTypeArgument<K>>;
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
        $typeArgs: [ToTypeStr<K>];
    };
    static fromJSONField<K extends Reified<TypeArgument, any>>(typeArg: K, field: any): LinkedSet<ToTypeArgument<K>>;
    static fromJSON<K extends Reified<TypeArgument, any>>(typeArg: K, json: Record<string, any>): LinkedSet<ToTypeArgument<K>>;
    static fromSuiParsedData<K extends Reified<TypeArgument, any>>(typeArg: K, content: SuiParsedData): LinkedSet<ToTypeArgument<K>>;
    static fetch<K extends Reified<TypeArgument, any>>(client: SuiClient, typeArg: K, id: string): Promise<LinkedSet<ToTypeArgument<K>>>;
}
