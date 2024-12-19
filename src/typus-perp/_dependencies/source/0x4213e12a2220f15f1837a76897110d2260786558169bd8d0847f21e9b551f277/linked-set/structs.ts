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
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName } from "../../../../_framework/util";
import { Option } from "../../0x1/option/structs";
import { UID } from "../../0x2/object/structs";
import { PKG_V1 } from "../index";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== Node =============================== */

export function isNode(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith(`${PKG_V1}::linked_set::Node` + "<");
}

export interface NodeFields<K extends TypeArgument> {
    prev: ToField<Option<K>>;
    next: ToField<Option<K>>;
}

export type NodeReified<K extends TypeArgument> = Reified<Node<K>, NodeFields<K>>;

export class Node<K extends TypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::linked_set::Node`;
    static readonly $numTypeParams = 1;
    static readonly $isPhantom = [false] as const;

    readonly $typeName = Node.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::linked_set::Node<${ToTypeStr<K>}>`;
    readonly $typeArgs: [ToTypeStr<K>];
    readonly $isPhantom = Node.$isPhantom;

    readonly prev: ToField<Option<K>>;
    readonly next: ToField<Option<K>>;

    private constructor(typeArgs: [ToTypeStr<K>], fields: NodeFields<K>) {
        this.$fullTypeName = composeSuiType(Node.$typeName, ...typeArgs) as `${typeof PKG_V1}::linked_set::Node<${ToTypeStr<K>}>`;
        this.$typeArgs = typeArgs;

        this.prev = fields.prev;
        this.next = fields.next;
    }

    static reified<K extends Reified<TypeArgument, any>>(K: K): NodeReified<ToTypeArgument<K>> {
        return {
            typeName: Node.$typeName,
            fullTypeName: composeSuiType(
                Node.$typeName,
                ...[extractType(K)]
            ) as `${typeof PKG_V1}::linked_set::Node<${ToTypeStr<ToTypeArgument<K>>}>`,
            typeArgs: [extractType(K)] as [ToTypeStr<ToTypeArgument<K>>],
            isPhantom: Node.$isPhantom,
            reifiedTypeArgs: [K],
            fromFields: (fields: Record<string, any>) => Node.fromFields(K, fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Node.fromFieldsWithTypes(K, item),
            fromBcs: (data: Uint8Array) => Node.fromBcs(K, data),
            bcs: Node.bcs(toBcs(K)),
            fromJSONField: (field: any) => Node.fromJSONField(K, field),
            fromJSON: (json: Record<string, any>) => Node.fromJSON(K, json),
            fromSuiParsedData: (content: SuiParsedData) => Node.fromSuiParsedData(K, content),
            fromSuiObjectData: (content: SuiObjectData) => Node.fromSuiObjectData(K, content),
            fetch: async (client: SuiClient, id: string) => Node.fetch(client, K, id),
            new: (fields: NodeFields<ToTypeArgument<K>>) => {
                return new Node([extractType(K)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Node.reified;
    }

    static phantom<K extends Reified<TypeArgument, any>>(K: K): PhantomReified<ToTypeStr<Node<ToTypeArgument<K>>>> {
        return phantom(Node.reified(K));
    }
    static get p() {
        return Node.phantom;
    }

    static get bcs() {
        return <K extends BcsType<any>>(K: K) =>
            bcs.struct(`Node<${K.name}>`, {
                prev: Option.bcs(K),
                next: Option.bcs(K),
            });
    }

    static fromFields<K extends Reified<TypeArgument, any>>(typeArg: K, fields: Record<string, any>): Node<ToTypeArgument<K>> {
        return Node.reified(typeArg).new({
            prev: decodeFromFields(Option.reified(typeArg), fields.prev),
            next: decodeFromFields(Option.reified(typeArg), fields.next),
        });
    }

    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>>(typeArg: K, item: FieldsWithTypes): Node<ToTypeArgument<K>> {
        if (!isNode(item.type)) {
            throw new Error("not a Node type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return Node.reified(typeArg).new({
            prev: decodeFromFieldsWithTypes(Option.reified(typeArg), item.fields.prev),
            next: decodeFromFieldsWithTypes(Option.reified(typeArg), item.fields.next),
        });
    }

    static fromBcs<K extends Reified<TypeArgument, any>>(typeArg: K, data: Uint8Array): Node<ToTypeArgument<K>> {
        const typeArgs = [typeArg];

        return Node.fromFields(typeArg, Node.bcs(toBcs(typeArgs[0])).parse(data));
    }

    toJSONField() {
        return {
            prev: fieldToJSON<Option<K>>(`${Option.$typeName}<${this.$typeArgs[0]}>`, this.prev),
            next: fieldToJSON<Option<K>>(`${Option.$typeName}<${this.$typeArgs[0]}>`, this.next),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField<K extends Reified<TypeArgument, any>>(typeArg: K, field: any): Node<ToTypeArgument<K>> {
        return Node.reified(typeArg).new({
            prev: decodeFromJSONField(Option.reified(typeArg), field.prev),
            next: decodeFromJSONField(Option.reified(typeArg), field.next),
        });
    }

    static fromJSON<K extends Reified<TypeArgument, any>>(typeArg: K, json: Record<string, any>): Node<ToTypeArgument<K>> {
        if (json.$typeName !== Node.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(Node.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg]);

        return Node.fromJSONField(typeArg, json);
    }

    static fromSuiParsedData<K extends Reified<TypeArgument, any>>(typeArg: K, content: SuiParsedData): Node<ToTypeArgument<K>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNode(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Node object`);
        }
        return Node.fromFieldsWithTypes(typeArg, content);
    }

    static fromSuiObjectData<K extends Reified<TypeArgument, any>>(typeArg: K, data: SuiObjectData): Node<ToTypeArgument<K>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNode(data.bcs.type)) {
                throw new Error(`object at is not a Node object`);
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

            return Node.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Node.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<K extends Reified<TypeArgument, any>>(client: SuiClient, typeArg: K, id: string): Promise<Node<ToTypeArgument<K>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Node object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNode(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Node object`);
        }

        return Node.fromSuiObjectData(typeArg, res.data);
    }
}

/* ============================== LinkedSet =============================== */

export function isLinkedSet(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith(`${PKG_V1}::linked_set::LinkedSet` + "<");
}

export interface LinkedSetFields<K extends TypeArgument> {
    id: ToField<UID>;
    size: ToField<"u64">;
    head: ToField<Option<K>>;
    tail: ToField<Option<K>>;
}

export type LinkedSetReified<K extends TypeArgument> = Reified<LinkedSet<K>, LinkedSetFields<K>>;

export class LinkedSet<K extends TypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::linked_set::LinkedSet`;
    static readonly $numTypeParams = 1;
    static readonly $isPhantom = [false] as const;

    readonly $typeName = LinkedSet.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::linked_set::LinkedSet<${ToTypeStr<K>}>`;
    readonly $typeArgs: [ToTypeStr<K>];
    readonly $isPhantom = LinkedSet.$isPhantom;

    readonly id: ToField<UID>;
    readonly size: ToField<"u64">;
    readonly head: ToField<Option<K>>;
    readonly tail: ToField<Option<K>>;

    private constructor(typeArgs: [ToTypeStr<K>], fields: LinkedSetFields<K>) {
        this.$fullTypeName = composeSuiType(LinkedSet.$typeName, ...typeArgs) as `${typeof PKG_V1}::linked_set::LinkedSet<${ToTypeStr<K>}>`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.size = fields.size;
        this.head = fields.head;
        this.tail = fields.tail;
    }

    static reified<K extends Reified<TypeArgument, any>>(K: K): LinkedSetReified<ToTypeArgument<K>> {
        return {
            typeName: LinkedSet.$typeName,
            fullTypeName: composeSuiType(
                LinkedSet.$typeName,
                ...[extractType(K)]
            ) as `${typeof PKG_V1}::linked_set::LinkedSet<${ToTypeStr<ToTypeArgument<K>>}>`,
            typeArgs: [extractType(K)] as [ToTypeStr<ToTypeArgument<K>>],
            isPhantom: LinkedSet.$isPhantom,
            reifiedTypeArgs: [K],
            fromFields: (fields: Record<string, any>) => LinkedSet.fromFields(K, fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LinkedSet.fromFieldsWithTypes(K, item),
            fromBcs: (data: Uint8Array) => LinkedSet.fromBcs(K, data),
            bcs: LinkedSet.bcs(toBcs(K)),
            fromJSONField: (field: any) => LinkedSet.fromJSONField(K, field),
            fromJSON: (json: Record<string, any>) => LinkedSet.fromJSON(K, json),
            fromSuiParsedData: (content: SuiParsedData) => LinkedSet.fromSuiParsedData(K, content),
            fromSuiObjectData: (content: SuiObjectData) => LinkedSet.fromSuiObjectData(K, content),
            fetch: async (client: SuiClient, id: string) => LinkedSet.fetch(client, K, id),
            new: (fields: LinkedSetFields<ToTypeArgument<K>>) => {
                return new LinkedSet([extractType(K)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LinkedSet.reified;
    }

    static phantom<K extends Reified<TypeArgument, any>>(K: K): PhantomReified<ToTypeStr<LinkedSet<ToTypeArgument<K>>>> {
        return phantom(LinkedSet.reified(K));
    }
    static get p() {
        return LinkedSet.phantom;
    }

    static get bcs() {
        return <K extends BcsType<any>>(K: K) =>
            bcs.struct(`LinkedSet<${K.name}>`, {
                id: UID.bcs,
                size: bcs.u64(),
                head: Option.bcs(K),
                tail: Option.bcs(K),
            });
    }

    static fromFields<K extends Reified<TypeArgument, any>>(typeArg: K, fields: Record<string, any>): LinkedSet<ToTypeArgument<K>> {
        return LinkedSet.reified(typeArg).new({
            id: decodeFromFields(UID.reified(), fields.id),
            size: decodeFromFields("u64", fields.size),
            head: decodeFromFields(Option.reified(typeArg), fields.head),
            tail: decodeFromFields(Option.reified(typeArg), fields.tail),
        });
    }

    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>>(typeArg: K, item: FieldsWithTypes): LinkedSet<ToTypeArgument<K>> {
        if (!isLinkedSet(item.type)) {
            throw new Error("not a LinkedSet type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return LinkedSet.reified(typeArg).new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            head: decodeFromFieldsWithTypes(Option.reified(typeArg), item.fields.head),
            tail: decodeFromFieldsWithTypes(Option.reified(typeArg), item.fields.tail),
        });
    }

    static fromBcs<K extends Reified<TypeArgument, any>>(typeArg: K, data: Uint8Array): LinkedSet<ToTypeArgument<K>> {
        const typeArgs = [typeArg];

        return LinkedSet.fromFields(typeArg, LinkedSet.bcs(toBcs(typeArgs[0])).parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            size: this.size.toString(),
            head: fieldToJSON<Option<K>>(`${Option.$typeName}<${this.$typeArgs[0]}>`, this.head),
            tail: fieldToJSON<Option<K>>(`${Option.$typeName}<${this.$typeArgs[0]}>`, this.tail),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField<K extends Reified<TypeArgument, any>>(typeArg: K, field: any): LinkedSet<ToTypeArgument<K>> {
        return LinkedSet.reified(typeArg).new({
            id: decodeFromJSONField(UID.reified(), field.id),
            size: decodeFromJSONField("u64", field.size),
            head: decodeFromJSONField(Option.reified(typeArg), field.head),
            tail: decodeFromJSONField(Option.reified(typeArg), field.tail),
        });
    }

    static fromJSON<K extends Reified<TypeArgument, any>>(typeArg: K, json: Record<string, any>): LinkedSet<ToTypeArgument<K>> {
        if (json.$typeName !== LinkedSet.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(LinkedSet.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg]);

        return LinkedSet.fromJSONField(typeArg, json);
    }

    static fromSuiParsedData<K extends Reified<TypeArgument, any>>(typeArg: K, content: SuiParsedData): LinkedSet<ToTypeArgument<K>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLinkedSet(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LinkedSet object`);
        }
        return LinkedSet.fromFieldsWithTypes(typeArg, content);
    }

    static fromSuiObjectData<K extends Reified<TypeArgument, any>>(typeArg: K, data: SuiObjectData): LinkedSet<ToTypeArgument<K>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLinkedSet(data.bcs.type)) {
                throw new Error(`object at is not a LinkedSet object`);
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

            return LinkedSet.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LinkedSet.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<K extends Reified<TypeArgument, any>>(
        client: SuiClient,
        typeArg: K,
        id: string
    ): Promise<LinkedSet<ToTypeArgument<K>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LinkedSet object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLinkedSet(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LinkedSet object`);
        }

        return LinkedSet.fromSuiObjectData(typeArg, res.data);
    }
}
