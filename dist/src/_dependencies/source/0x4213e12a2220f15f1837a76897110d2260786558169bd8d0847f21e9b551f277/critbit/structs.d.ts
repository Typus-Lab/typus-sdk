import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument, ToTypeStr as ToPhantom } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Table } from "../../0x2/table/structs";
import { BcsType } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isCritbitTree(type: string): boolean;
export interface CritbitTreeFields<V extends TypeArgument> {
    root: ToField<"u64">;
    internalNodes: ToField<Table<"u64", ToPhantom<InternalNode>>>;
    leaves: ToField<Table<"u64", ToPhantom<Leaf<V>>>>;
    minLeafIndex: ToField<"u64">;
    maxLeafIndex: ToField<"u64">;
    nextInternalNodeIndex: ToField<"u64">;
    nextLeafIndex: ToField<"u64">;
}
export type CritbitTreeReified<V extends TypeArgument> = Reified<CritbitTree<V>, CritbitTreeFields<V>>;
export declare class CritbitTree<V extends TypeArgument> implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::critbit::CritbitTree";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::critbit::CritbitTree";
    readonly $fullTypeName: `0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::critbit::CritbitTree<${ToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<V>];
    readonly root: ToField<"u64">;
    readonly internalNodes: ToField<Table<"u64", ToPhantom<InternalNode>>>;
    readonly leaves: ToField<Table<"u64", ToPhantom<Leaf<V>>>>;
    readonly minLeafIndex: ToField<"u64">;
    readonly maxLeafIndex: ToField<"u64">;
    readonly nextInternalNodeIndex: ToField<"u64">;
    readonly nextLeafIndex: ToField<"u64">;
    private constructor();
    static reified<V extends Reified<TypeArgument, any>>(V: V): CritbitTreeReified<ToTypeArgument<V>>;
    static get r(): typeof CritbitTree.reified;
    static phantom<V extends Reified<TypeArgument, any>>(V: V): PhantomReified<ToTypeStr<CritbitTree<ToTypeArgument<V>>>>;
    static get p(): typeof CritbitTree.phantom;
    static get bcs(): <V extends BcsType<any>>(V: V) => BcsType<{
        root: string;
        internal_nodes: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
        leaves: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
        min_leaf_index: string;
        max_leaf_index: string;
        next_internal_node_index: string;
        next_leaf_index: string;
    }, {
        root: string | number | bigint;
        internal_nodes: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
        leaves: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
        min_leaf_index: string | number | bigint;
        max_leaf_index: string | number | bigint;
        next_internal_node_index: string | number | bigint;
        next_leaf_index: string | number | bigint;
    }>;
    static fromFields<V extends Reified<TypeArgument, any>>(typeArg: V, fields: Record<string, any>): CritbitTree<ToTypeArgument<V>>;
    static fromFieldsWithTypes<V extends Reified<TypeArgument, any>>(typeArg: V, item: FieldsWithTypes): CritbitTree<ToTypeArgument<V>>;
    static fromBcs<V extends Reified<TypeArgument, any>>(typeArg: V, data: Uint8Array): CritbitTree<ToTypeArgument<V>>;
    toJSONField(): {
        root: string;
        internalNodes: {
            id: string;
            size: string;
        };
        leaves: {
            id: string;
            size: string;
        };
        minLeafIndex: string;
        maxLeafIndex: string;
        nextInternalNodeIndex: string;
        nextLeafIndex: string;
    };
    toJSON(): {
        root: string;
        internalNodes: {
            id: string;
            size: string;
        };
        leaves: {
            id: string;
            size: string;
        };
        minLeafIndex: string;
        maxLeafIndex: string;
        nextInternalNodeIndex: string;
        nextLeafIndex: string;
        $typeName: string;
        $typeArgs: [reified.ToTypeStr<V>];
    };
    static fromJSONField<V extends Reified<TypeArgument, any>>(typeArg: V, field: any): CritbitTree<ToTypeArgument<V>>;
    static fromJSON<V extends Reified<TypeArgument, any>>(typeArg: V, json: Record<string, any>): CritbitTree<ToTypeArgument<V>>;
    static fromSuiParsedData<V extends Reified<TypeArgument, any>>(typeArg: V, content: SuiParsedData): CritbitTree<ToTypeArgument<V>>;
    static fetch<V extends Reified<TypeArgument, any>>(client: SuiClient, typeArg: V, id: string): Promise<CritbitTree<ToTypeArgument<V>>>;
}
export declare function isInternalNode(type: string): boolean;
export interface InternalNodeFields {
    mask: ToField<"u64">;
    leftChild: ToField<"u64">;
    rightChild: ToField<"u64">;
    parent: ToField<"u64">;
}
export type InternalNodeReified = Reified<InternalNode, InternalNodeFields>;
export declare class InternalNode implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::critbit::InternalNode";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::critbit::InternalNode";
    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::critbit::InternalNode";
    readonly $typeArgs: [];
    readonly mask: ToField<"u64">;
    readonly leftChild: ToField<"u64">;
    readonly rightChild: ToField<"u64">;
    readonly parent: ToField<"u64">;
    private constructor();
    static reified(): InternalNodeReified;
    static get r(): reified.StructClassReified<InternalNode, InternalNodeFields>;
    static phantom(): PhantomReified<ToTypeStr<InternalNode>>;
    static get p(): reified.PhantomReified<"0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::critbit::InternalNode">;
    static get bcs(): BcsType<{
        mask: string;
        left_child: string;
        right_child: string;
        parent: string;
    }, {
        mask: string | number | bigint;
        left_child: string | number | bigint;
        right_child: string | number | bigint;
        parent: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): InternalNode;
    static fromFieldsWithTypes(item: FieldsWithTypes): InternalNode;
    static fromBcs(data: Uint8Array): InternalNode;
    toJSONField(): {
        mask: string;
        leftChild: string;
        rightChild: string;
        parent: string;
    };
    toJSON(): {
        mask: string;
        leftChild: string;
        rightChild: string;
        parent: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): InternalNode;
    static fromJSON(json: Record<string, any>): InternalNode;
    static fromSuiParsedData(content: SuiParsedData): InternalNode;
    static fetch(client: SuiClient, id: string): Promise<InternalNode>;
}
export declare function isLeaf(type: string): boolean;
export interface LeafFields<V extends TypeArgument> {
    key: ToField<"u64">;
    value: ToField<V>;
    parent: ToField<"u64">;
}
export type LeafReified<V extends TypeArgument> = Reified<Leaf<V>, LeafFields<V>>;
export declare class Leaf<V extends TypeArgument> implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::critbit::Leaf";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::critbit::Leaf";
    readonly $fullTypeName: `0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::critbit::Leaf<${ToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<V>];
    readonly key: ToField<"u64">;
    readonly value: ToField<V>;
    readonly parent: ToField<"u64">;
    private constructor();
    static reified<V extends Reified<TypeArgument, any>>(V: V): LeafReified<ToTypeArgument<V>>;
    static get r(): typeof Leaf.reified;
    static phantom<V extends Reified<TypeArgument, any>>(V: V): PhantomReified<ToTypeStr<Leaf<ToTypeArgument<V>>>>;
    static get p(): typeof Leaf.phantom;
    static get bcs(): <V extends BcsType<any>>(V: V) => BcsType<{
        key: string;
        value: V extends BcsType<infer U_2, any> ? U_2 : never;
        parent: string;
    }, {
        key: string | number | bigint;
        value: V extends BcsType<any, infer U_3> ? U_3 : never;
        parent: string | number | bigint;
    }>;
    static fromFields<V extends Reified<TypeArgument, any>>(typeArg: V, fields: Record<string, any>): Leaf<ToTypeArgument<V>>;
    static fromFieldsWithTypes<V extends Reified<TypeArgument, any>>(typeArg: V, item: FieldsWithTypes): Leaf<ToTypeArgument<V>>;
    static fromBcs<V extends Reified<TypeArgument, any>>(typeArg: V, data: Uint8Array): Leaf<ToTypeArgument<V>>;
    toJSONField(): {
        key: string;
        value: reified.ToJSON<V>;
        parent: string;
    };
    toJSON(): {
        key: string;
        value: reified.ToJSON<V>;
        parent: string;
        $typeName: string;
        $typeArgs: [reified.ToTypeStr<V>];
    };
    static fromJSONField<V extends Reified<TypeArgument, any>>(typeArg: V, field: any): Leaf<ToTypeArgument<V>>;
    static fromJSON<V extends Reified<TypeArgument, any>>(typeArg: V, json: Record<string, any>): Leaf<ToTypeArgument<V>>;
    static fromSuiParsedData<V extends Reified<TypeArgument, any>>(typeArg: V, content: SuiParsedData): Leaf<ToTypeArgument<V>>;
    static fetch<V extends Reified<TypeArgument, any>>(client: SuiClient, typeArg: V, id: string): Promise<Leaf<ToTypeArgument<V>>>;
}
