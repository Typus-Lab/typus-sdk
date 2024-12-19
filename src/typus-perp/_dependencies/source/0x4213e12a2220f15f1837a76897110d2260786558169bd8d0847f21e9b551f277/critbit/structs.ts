import * as reified from "../../../../_framework/reified";
import {
    PhantomReified,
    Reified,
    StructClass,
    ToField,
    ToTypeArgument,
    ToTypeStr,
    TypeArgument,
    assertFieldsWithTypesArgsMatch,
    assertReifiedTypeArgsMatch,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    extractType,
    fieldToJSON,
    phantom,
    toBcs,
    ToTypeStr as ToPhantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName } from "../../../../_framework/util";
import { Table } from "../../0x2/table/structs";
import { PKG_V1 } from "../index";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== CritbitTree =============================== */

export function isCritbitTree(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith(`${PKG_V1}::critbit::CritbitTree` + "<");
}

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

export class CritbitTree<V extends TypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::critbit::CritbitTree`;
    static readonly $numTypeParams = 1;
    static readonly $isPhantom = [false] as const;

    readonly $typeName = CritbitTree.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::critbit::CritbitTree<${ToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<V>];
    readonly $isPhantom = CritbitTree.$isPhantom;

    readonly root: ToField<"u64">;
    readonly internalNodes: ToField<Table<"u64", ToPhantom<InternalNode>>>;
    readonly leaves: ToField<Table<"u64", ToPhantom<Leaf<V>>>>;
    readonly minLeafIndex: ToField<"u64">;
    readonly maxLeafIndex: ToField<"u64">;
    readonly nextInternalNodeIndex: ToField<"u64">;
    readonly nextLeafIndex: ToField<"u64">;

    private constructor(typeArgs: [ToTypeStr<V>], fields: CritbitTreeFields<V>) {
        this.$fullTypeName = composeSuiType(
            CritbitTree.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::critbit::CritbitTree<${ToTypeStr<V>}>`;
        this.$typeArgs = typeArgs;

        this.root = fields.root;
        this.internalNodes = fields.internalNodes;
        this.leaves = fields.leaves;
        this.minLeafIndex = fields.minLeafIndex;
        this.maxLeafIndex = fields.maxLeafIndex;
        this.nextInternalNodeIndex = fields.nextInternalNodeIndex;
        this.nextLeafIndex = fields.nextLeafIndex;
    }

    static reified<V extends Reified<TypeArgument, any>>(V: V): CritbitTreeReified<ToTypeArgument<V>> {
        return {
            typeName: CritbitTree.$typeName,
            fullTypeName: composeSuiType(
                CritbitTree.$typeName,
                ...[extractType(V)]
            ) as `${typeof PKG_V1}::critbit::CritbitTree<${ToTypeStr<ToTypeArgument<V>>}>`,
            typeArgs: [extractType(V)] as [ToTypeStr<ToTypeArgument<V>>],
            isPhantom: CritbitTree.$isPhantom,
            reifiedTypeArgs: [V],
            fromFields: (fields: Record<string, any>) => CritbitTree.fromFields(V, fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CritbitTree.fromFieldsWithTypes(V, item),
            fromBcs: (data: Uint8Array) => CritbitTree.fromBcs(V, data),
            bcs: CritbitTree.bcs(toBcs(V)),
            fromJSONField: (field: any) => CritbitTree.fromJSONField(V, field),
            fromJSON: (json: Record<string, any>) => CritbitTree.fromJSON(V, json),
            fromSuiParsedData: (content: SuiParsedData) => CritbitTree.fromSuiParsedData(V, content),
            fromSuiObjectData: (content: SuiObjectData) => CritbitTree.fromSuiObjectData(V, content),
            fetch: async (client: SuiClient, id: string) => CritbitTree.fetch(client, V, id),
            new: (fields: CritbitTreeFields<ToTypeArgument<V>>) => {
                return new CritbitTree([extractType(V)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return CritbitTree.reified;
    }

    static phantom<V extends Reified<TypeArgument, any>>(V: V): PhantomReified<ToTypeStr<CritbitTree<ToTypeArgument<V>>>> {
        return phantom(CritbitTree.reified(V));
    }
    static get p() {
        return CritbitTree.phantom;
    }

    static get bcs() {
        return <V extends BcsType<any>>(V: V) =>
            bcs.struct(`CritbitTree<${V.name}>`, {
                root: bcs.u64(),
                internal_nodes: Table.bcs,
                leaves: Table.bcs,
                min_leaf_index: bcs.u64(),
                max_leaf_index: bcs.u64(),
                next_internal_node_index: bcs.u64(),
                next_leaf_index: bcs.u64(),
            });
    }

    static fromFields<V extends Reified<TypeArgument, any>>(typeArg: V, fields: Record<string, any>): CritbitTree<ToTypeArgument<V>> {
        return CritbitTree.reified(typeArg).new({
            root: decodeFromFields("u64", fields.root),
            internalNodes: decodeFromFields(
                Table.reified(reified.phantom("u64"), reified.phantom(InternalNode.reified())),
                fields.internal_nodes
            ),
            leaves: decodeFromFields(Table.reified(reified.phantom("u64"), reified.phantom(Leaf.reified(typeArg))), fields.leaves),
            minLeafIndex: decodeFromFields("u64", fields.min_leaf_index),
            maxLeafIndex: decodeFromFields("u64", fields.max_leaf_index),
            nextInternalNodeIndex: decodeFromFields("u64", fields.next_internal_node_index),
            nextLeafIndex: decodeFromFields("u64", fields.next_leaf_index),
        });
    }

    static fromFieldsWithTypes<V extends Reified<TypeArgument, any>>(typeArg: V, item: FieldsWithTypes): CritbitTree<ToTypeArgument<V>> {
        if (!isCritbitTree(item.type)) {
            throw new Error("not a CritbitTree type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return CritbitTree.reified(typeArg).new({
            root: decodeFromFieldsWithTypes("u64", item.fields.root),
            internalNodes: decodeFromFieldsWithTypes(
                Table.reified(reified.phantom("u64"), reified.phantom(InternalNode.reified())),
                item.fields.internal_nodes
            ),
            leaves: decodeFromFieldsWithTypes(
                Table.reified(reified.phantom("u64"), reified.phantom(Leaf.reified(typeArg))),
                item.fields.leaves
            ),
            minLeafIndex: decodeFromFieldsWithTypes("u64", item.fields.min_leaf_index),
            maxLeafIndex: decodeFromFieldsWithTypes("u64", item.fields.max_leaf_index),
            nextInternalNodeIndex: decodeFromFieldsWithTypes("u64", item.fields.next_internal_node_index),
            nextLeafIndex: decodeFromFieldsWithTypes("u64", item.fields.next_leaf_index),
        });
    }

    static fromBcs<V extends Reified<TypeArgument, any>>(typeArg: V, data: Uint8Array): CritbitTree<ToTypeArgument<V>> {
        const typeArgs = [typeArg];

        return CritbitTree.fromFields(typeArg, CritbitTree.bcs(toBcs(typeArgs[0])).parse(data));
    }

    toJSONField() {
        return {
            root: this.root.toString(),
            internalNodes: this.internalNodes.toJSONField(),
            leaves: this.leaves.toJSONField(),
            minLeafIndex: this.minLeafIndex.toString(),
            maxLeafIndex: this.maxLeafIndex.toString(),
            nextInternalNodeIndex: this.nextInternalNodeIndex.toString(),
            nextLeafIndex: this.nextLeafIndex.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField<V extends Reified<TypeArgument, any>>(typeArg: V, field: any): CritbitTree<ToTypeArgument<V>> {
        return CritbitTree.reified(typeArg).new({
            root: decodeFromJSONField("u64", field.root),
            internalNodes: decodeFromJSONField(
                Table.reified(reified.phantom("u64"), reified.phantom(InternalNode.reified())),
                field.internalNodes
            ),
            leaves: decodeFromJSONField(Table.reified(reified.phantom("u64"), reified.phantom(Leaf.reified(typeArg))), field.leaves),
            minLeafIndex: decodeFromJSONField("u64", field.minLeafIndex),
            maxLeafIndex: decodeFromJSONField("u64", field.maxLeafIndex),
            nextInternalNodeIndex: decodeFromJSONField("u64", field.nextInternalNodeIndex),
            nextLeafIndex: decodeFromJSONField("u64", field.nextLeafIndex),
        });
    }

    static fromJSON<V extends Reified<TypeArgument, any>>(typeArg: V, json: Record<string, any>): CritbitTree<ToTypeArgument<V>> {
        if (json.$typeName !== CritbitTree.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(CritbitTree.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg]);

        return CritbitTree.fromJSONField(typeArg, json);
    }

    static fromSuiParsedData<V extends Reified<TypeArgument, any>>(typeArg: V, content: SuiParsedData): CritbitTree<ToTypeArgument<V>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCritbitTree(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CritbitTree object`);
        }
        return CritbitTree.fromFieldsWithTypes(typeArg, content);
    }

    static fromSuiObjectData<V extends Reified<TypeArgument, any>>(typeArg: V, data: SuiObjectData): CritbitTree<ToTypeArgument<V>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCritbitTree(data.bcs.type)) {
                throw new Error(`object at is not a CritbitTree object`);
            }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 1) {
                throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
            }
            const gotTypeArg = compressSuiType(gotTypeArgs[0]);
            const expectedTypeArg = compressSuiType(extractType(typeArg));
            if (gotTypeArg !== compressSuiType(extractType(typeArg))) {
                throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
            }

            return CritbitTree.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return CritbitTree.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<V extends Reified<TypeArgument, any>>(
        client: SuiClient,
        typeArg: V,
        id: string
    ): Promise<CritbitTree<ToTypeArgument<V>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CritbitTree object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCritbitTree(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CritbitTree object`);
        }

        return CritbitTree.fromSuiObjectData(typeArg, res.data);
    }
}

/* ============================== InternalNode =============================== */

export function isInternalNode(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::critbit::InternalNode`;
}

export interface InternalNodeFields {
    mask: ToField<"u64">;
    leftChild: ToField<"u64">;
    rightChild: ToField<"u64">;
    parent: ToField<"u64">;
}

export type InternalNodeReified = Reified<InternalNode, InternalNodeFields>;

export class InternalNode implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::critbit::InternalNode`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = InternalNode.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::critbit::InternalNode`;
    readonly $typeArgs: [];
    readonly $isPhantom = InternalNode.$isPhantom;

    readonly mask: ToField<"u64">;
    readonly leftChild: ToField<"u64">;
    readonly rightChild: ToField<"u64">;
    readonly parent: ToField<"u64">;

    private constructor(typeArgs: [], fields: InternalNodeFields) {
        this.$fullTypeName = composeSuiType(InternalNode.$typeName, ...typeArgs) as `${typeof PKG_V1}::critbit::InternalNode`;
        this.$typeArgs = typeArgs;

        this.mask = fields.mask;
        this.leftChild = fields.leftChild;
        this.rightChild = fields.rightChild;
        this.parent = fields.parent;
    }

    static reified(): InternalNodeReified {
        return {
            typeName: InternalNode.$typeName,
            fullTypeName: composeSuiType(InternalNode.$typeName, ...[]) as `${typeof PKG_V1}::critbit::InternalNode`,
            typeArgs: [] as [],
            isPhantom: InternalNode.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => InternalNode.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => InternalNode.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => InternalNode.fromBcs(data),
            bcs: InternalNode.bcs,
            fromJSONField: (field: any) => InternalNode.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => InternalNode.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => InternalNode.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => InternalNode.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => InternalNode.fetch(client, id),
            new: (fields: InternalNodeFields) => {
                return new InternalNode([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return InternalNode.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<InternalNode>> {
        return phantom(InternalNode.reified());
    }
    static get p() {
        return InternalNode.phantom();
    }

    static get bcs() {
        return bcs.struct("InternalNode", {
            mask: bcs.u64(),
            left_child: bcs.u64(),
            right_child: bcs.u64(),
            parent: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): InternalNode {
        return InternalNode.reified().new({
            mask: decodeFromFields("u64", fields.mask),
            leftChild: decodeFromFields("u64", fields.left_child),
            rightChild: decodeFromFields("u64", fields.right_child),
            parent: decodeFromFields("u64", fields.parent),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): InternalNode {
        if (!isInternalNode(item.type)) {
            throw new Error("not a InternalNode type");
        }

        return InternalNode.reified().new({
            mask: decodeFromFieldsWithTypes("u64", item.fields.mask),
            leftChild: decodeFromFieldsWithTypes("u64", item.fields.left_child),
            rightChild: decodeFromFieldsWithTypes("u64", item.fields.right_child),
            parent: decodeFromFieldsWithTypes("u64", item.fields.parent),
        });
    }

    static fromBcs(data: Uint8Array): InternalNode {
        return InternalNode.fromFields(InternalNode.bcs.parse(data));
    }

    toJSONField() {
        return {
            mask: this.mask.toString(),
            leftChild: this.leftChild.toString(),
            rightChild: this.rightChild.toString(),
            parent: this.parent.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): InternalNode {
        return InternalNode.reified().new({
            mask: decodeFromJSONField("u64", field.mask),
            leftChild: decodeFromJSONField("u64", field.leftChild),
            rightChild: decodeFromJSONField("u64", field.rightChild),
            parent: decodeFromJSONField("u64", field.parent),
        });
    }

    static fromJSON(json: Record<string, any>): InternalNode {
        if (json.$typeName !== InternalNode.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return InternalNode.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): InternalNode {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isInternalNode(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a InternalNode object`);
        }
        return InternalNode.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): InternalNode {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isInternalNode(data.bcs.type)) {
                throw new Error(`object at is not a InternalNode object`);
            }

            return InternalNode.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return InternalNode.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<InternalNode> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching InternalNode object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isInternalNode(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a InternalNode object`);
        }

        return InternalNode.fromSuiObjectData(res.data);
    }
}

/* ============================== Leaf =============================== */

export function isLeaf(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith(`${PKG_V1}::critbit::Leaf` + "<");
}

export interface LeafFields<V extends TypeArgument> {
    key: ToField<"u64">;
    value: ToField<V>;
    parent: ToField<"u64">;
}

export type LeafReified<V extends TypeArgument> = Reified<Leaf<V>, LeafFields<V>>;

export class Leaf<V extends TypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::critbit::Leaf`;
    static readonly $numTypeParams = 1;
    static readonly $isPhantom = [false] as const;

    readonly $typeName = Leaf.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::critbit::Leaf<${ToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<V>];
    readonly $isPhantom = Leaf.$isPhantom;

    readonly key: ToField<"u64">;
    readonly value: ToField<V>;
    readonly parent: ToField<"u64">;

    private constructor(typeArgs: [ToTypeStr<V>], fields: LeafFields<V>) {
        this.$fullTypeName = composeSuiType(Leaf.$typeName, ...typeArgs) as `${typeof PKG_V1}::critbit::Leaf<${ToTypeStr<V>}>`;
        this.$typeArgs = typeArgs;

        this.key = fields.key;
        this.value = fields.value;
        this.parent = fields.parent;
    }

    static reified<V extends Reified<TypeArgument, any>>(V: V): LeafReified<ToTypeArgument<V>> {
        return {
            typeName: Leaf.$typeName,
            fullTypeName: composeSuiType(
                Leaf.$typeName,
                ...[extractType(V)]
            ) as `${typeof PKG_V1}::critbit::Leaf<${ToTypeStr<ToTypeArgument<V>>}>`,
            typeArgs: [extractType(V)] as [ToTypeStr<ToTypeArgument<V>>],
            isPhantom: Leaf.$isPhantom,
            reifiedTypeArgs: [V],
            fromFields: (fields: Record<string, any>) => Leaf.fromFields(V, fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Leaf.fromFieldsWithTypes(V, item),
            fromBcs: (data: Uint8Array) => Leaf.fromBcs(V, data),
            bcs: Leaf.bcs(toBcs(V)),
            fromJSONField: (field: any) => Leaf.fromJSONField(V, field),
            fromJSON: (json: Record<string, any>) => Leaf.fromJSON(V, json),
            fromSuiParsedData: (content: SuiParsedData) => Leaf.fromSuiParsedData(V, content),
            fromSuiObjectData: (content: SuiObjectData) => Leaf.fromSuiObjectData(V, content),
            fetch: async (client: SuiClient, id: string) => Leaf.fetch(client, V, id),
            new: (fields: LeafFields<ToTypeArgument<V>>) => {
                return new Leaf([extractType(V)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Leaf.reified;
    }

    static phantom<V extends Reified<TypeArgument, any>>(V: V): PhantomReified<ToTypeStr<Leaf<ToTypeArgument<V>>>> {
        return phantom(Leaf.reified(V));
    }
    static get p() {
        return Leaf.phantom;
    }

    static get bcs() {
        return <V extends BcsType<any>>(V: V) =>
            bcs.struct(`Leaf<${V.name}>`, {
                key: bcs.u64(),
                value: V,
                parent: bcs.u64(),
            });
    }

    static fromFields<V extends Reified<TypeArgument, any>>(typeArg: V, fields: Record<string, any>): Leaf<ToTypeArgument<V>> {
        return Leaf.reified(typeArg).new({
            key: decodeFromFields("u64", fields.key),
            value: decodeFromFields(typeArg, fields.value),
            parent: decodeFromFields("u64", fields.parent),
        });
    }

    static fromFieldsWithTypes<V extends Reified<TypeArgument, any>>(typeArg: V, item: FieldsWithTypes): Leaf<ToTypeArgument<V>> {
        if (!isLeaf(item.type)) {
            throw new Error("not a Leaf type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return Leaf.reified(typeArg).new({
            key: decodeFromFieldsWithTypes("u64", item.fields.key),
            value: decodeFromFieldsWithTypes(typeArg, item.fields.value),
            parent: decodeFromFieldsWithTypes("u64", item.fields.parent),
        });
    }

    static fromBcs<V extends Reified<TypeArgument, any>>(typeArg: V, data: Uint8Array): Leaf<ToTypeArgument<V>> {
        const typeArgs = [typeArg];

        return Leaf.fromFields(typeArg, Leaf.bcs(toBcs(typeArgs[0])).parse(data));
    }

    toJSONField() {
        return {
            key: this.key.toString(),
            value: fieldToJSON<V>(this.$typeArgs[0], this.value),
            parent: this.parent.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField<V extends Reified<TypeArgument, any>>(typeArg: V, field: any): Leaf<ToTypeArgument<V>> {
        return Leaf.reified(typeArg).new({
            key: decodeFromJSONField("u64", field.key),
            value: decodeFromJSONField(typeArg, field.value),
            parent: decodeFromJSONField("u64", field.parent),
        });
    }

    static fromJSON<V extends Reified<TypeArgument, any>>(typeArg: V, json: Record<string, any>): Leaf<ToTypeArgument<V>> {
        if (json.$typeName !== Leaf.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(Leaf.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg]);

        return Leaf.fromJSONField(typeArg, json);
    }

    static fromSuiParsedData<V extends Reified<TypeArgument, any>>(typeArg: V, content: SuiParsedData): Leaf<ToTypeArgument<V>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLeaf(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Leaf object`);
        }
        return Leaf.fromFieldsWithTypes(typeArg, content);
    }

    static fromSuiObjectData<V extends Reified<TypeArgument, any>>(typeArg: V, data: SuiObjectData): Leaf<ToTypeArgument<V>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLeaf(data.bcs.type)) {
                throw new Error(`object at is not a Leaf object`);
            }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 1) {
                throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
            }
            const gotTypeArg = compressSuiType(gotTypeArgs[0]);
            const expectedTypeArg = compressSuiType(extractType(typeArg));
            if (gotTypeArg !== compressSuiType(extractType(typeArg))) {
                throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
            }

            return Leaf.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Leaf.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<V extends Reified<TypeArgument, any>>(client: SuiClient, typeArg: V, id: string): Promise<Leaf<ToTypeArgument<V>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Leaf object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLeaf(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Leaf object`);
        }

        return Leaf.fromSuiObjectData(typeArg, res.data);
    }
}
