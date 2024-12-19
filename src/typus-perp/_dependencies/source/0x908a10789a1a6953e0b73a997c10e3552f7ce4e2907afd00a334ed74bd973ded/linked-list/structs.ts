import {
    PhantomReified,
    PhantomToTypeStr,
    PhantomTypeArgument,
    Reified,
    StructClass,
    ToField,
    ToPhantomTypeArgument,
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
import { ID } from "../../0x2/object/structs";
import { PKG_V1 } from "../index";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== Node =============================== */

export function isNode(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith(`${PKG_V1}::linked_list::Node` + "<");
}

export interface NodeFields<K extends TypeArgument, V extends TypeArgument> {
    value: ToField<V>;
    prev: ToField<Option<K>>;
    next: ToField<Option<K>>;
    exists: ToField<"bool">;
}

export type NodeReified<K extends TypeArgument, V extends TypeArgument> = Reified<Node<K, V>, NodeFields<K, V>>;

export class Node<K extends TypeArgument, V extends TypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::linked_list::Node`;
    static readonly $numTypeParams = 2;
    static readonly $isPhantom = [false, false] as const;

    readonly $typeName = Node.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::linked_list::Node<${ToTypeStr<K>}, ${ToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<K>, ToTypeStr<V>];
    readonly $isPhantom = Node.$isPhantom;

    readonly value: ToField<V>;
    readonly prev: ToField<Option<K>>;
    readonly next: ToField<Option<K>>;
    readonly exists: ToField<"bool">;

    private constructor(typeArgs: [ToTypeStr<K>, ToTypeStr<V>], fields: NodeFields<K, V>) {
        this.$fullTypeName = composeSuiType(
            Node.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::linked_list::Node<${ToTypeStr<K>}, ${ToTypeStr<V>}>`;
        this.$typeArgs = typeArgs;

        this.value = fields.value;
        this.prev = fields.prev;
        this.next = fields.next;
        this.exists = fields.exists;
    }

    static reified<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        K: K,
        V: V
    ): NodeReified<ToTypeArgument<K>, ToTypeArgument<V>> {
        return {
            typeName: Node.$typeName,
            fullTypeName: composeSuiType(
                Node.$typeName,
                ...[extractType(K), extractType(V)]
            ) as `${typeof PKG_V1}::linked_list::Node<${ToTypeStr<ToTypeArgument<K>>}, ${ToTypeStr<ToTypeArgument<V>>}>`,
            typeArgs: [extractType(K), extractType(V)] as [ToTypeStr<ToTypeArgument<K>>, ToTypeStr<ToTypeArgument<V>>],
            isPhantom: Node.$isPhantom,
            reifiedTypeArgs: [K, V],
            fromFields: (fields: Record<string, any>) => Node.fromFields([K, V], fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Node.fromFieldsWithTypes([K, V], item),
            fromBcs: (data: Uint8Array) => Node.fromBcs([K, V], data),
            bcs: Node.bcs(toBcs(K), toBcs(V)),
            fromJSONField: (field: any) => Node.fromJSONField([K, V], field),
            fromJSON: (json: Record<string, any>) => Node.fromJSON([K, V], json),
            fromSuiParsedData: (content: SuiParsedData) => Node.fromSuiParsedData([K, V], content),
            fromSuiObjectData: (content: SuiObjectData) => Node.fromSuiObjectData([K, V], content),
            fetch: async (client: SuiClient, id: string) => Node.fetch(client, [K, V], id),
            new: (fields: NodeFields<ToTypeArgument<K>, ToTypeArgument<V>>) => {
                return new Node([extractType(K), extractType(V)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Node.reified;
    }

    static phantom<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        K: K,
        V: V
    ): PhantomReified<ToTypeStr<Node<ToTypeArgument<K>, ToTypeArgument<V>>>> {
        return phantom(Node.reified(K, V));
    }
    static get p() {
        return Node.phantom;
    }

    static get bcs() {
        return <K extends BcsType<any>, V extends BcsType<any>>(K: K, V: V) =>
            bcs.struct(`Node<${K.name}, ${V.name}>`, {
                value: V,
                prev: Option.bcs(K),
                next: Option.bcs(K),
                exists: bcs.bool(),
            });
    }

    static fromFields<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        fields: Record<string, any>
    ): Node<ToTypeArgument<K>, ToTypeArgument<V>> {
        return Node.reified(typeArgs[0], typeArgs[1]).new({
            value: decodeFromFields(typeArgs[1], fields.value),
            prev: decodeFromFields(Option.reified(typeArgs[0]), fields.prev),
            next: decodeFromFields(Option.reified(typeArgs[0]), fields.next),
            exists: decodeFromFields("bool", fields.exists),
        });
    }

    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        item: FieldsWithTypes
    ): Node<ToTypeArgument<K>, ToTypeArgument<V>> {
        if (!isNode(item.type)) {
            throw new Error("not a Node type");
        }
        assertFieldsWithTypesArgsMatch(item, typeArgs);

        return Node.reified(typeArgs[0], typeArgs[1]).new({
            value: decodeFromFieldsWithTypes(typeArgs[1], item.fields.value),
            prev: decodeFromFieldsWithTypes(Option.reified(typeArgs[0]), item.fields.prev),
            next: decodeFromFieldsWithTypes(Option.reified(typeArgs[0]), item.fields.next),
            exists: decodeFromFieldsWithTypes("bool", item.fields.exists),
        });
    }

    static fromBcs<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        data: Uint8Array
    ): Node<ToTypeArgument<K>, ToTypeArgument<V>> {
        return Node.fromFields(typeArgs, Node.bcs(toBcs(typeArgs[0]), toBcs(typeArgs[1])).parse(data));
    }

    toJSONField() {
        return {
            value: fieldToJSON<V>(this.$typeArgs[1], this.value),
            prev: fieldToJSON<Option<K>>(`${Option.$typeName}<${this.$typeArgs[0]}>`, this.prev),
            next: fieldToJSON<Option<K>>(`${Option.$typeName}<${this.$typeArgs[0]}>`, this.next),
            exists: this.exists,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        field: any
    ): Node<ToTypeArgument<K>, ToTypeArgument<V>> {
        return Node.reified(typeArgs[0], typeArgs[1]).new({
            value: decodeFromJSONField(typeArgs[1], field.value),
            prev: decodeFromJSONField(Option.reified(typeArgs[0]), field.prev),
            next: decodeFromJSONField(Option.reified(typeArgs[0]), field.next),
            exists: decodeFromJSONField("bool", field.exists),
        });
    }

    static fromJSON<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        json: Record<string, any>
    ): Node<ToTypeArgument<K>, ToTypeArgument<V>> {
        if (json.$typeName !== Node.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(Node.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs);

        return Node.fromJSONField(typeArgs, json);
    }

    static fromSuiParsedData<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        content: SuiParsedData
    ): Node<ToTypeArgument<K>, ToTypeArgument<V>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNode(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Node object`);
        }
        return Node.fromFieldsWithTypes(typeArgs, content);
    }

    static fromSuiObjectData<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        data: SuiObjectData
    ): Node<ToTypeArgument<K>, ToTypeArgument<V>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNode(data.bcs.type)) {
                throw new Error(`object at is not a Node object`);
            }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 2) {
                throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`);
            }
            for (let i = 0; i < 2; i++) {
                const gotTypeArg = compressSuiType(gotTypeArgs[i]);
                const expectedTypeArg = compressSuiType(extractType(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }

            return Node.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Node.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        client: SuiClient,
        typeArgs: [K, V],
        id: string
    ): Promise<Node<ToTypeArgument<K>, ToTypeArgument<V>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Node object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNode(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Node object`);
        }

        return Node.fromSuiObjectData(typeArgs, res.data);
    }
}

/* ============================== LinkedList =============================== */

export function isLinkedList(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith(`${PKG_V1}::linked_list::LinkedList` + "<");
}

export interface LinkedListFields<K extends TypeArgument, V extends PhantomTypeArgument> {
    id: ToField<ID>;
    first: ToField<Option<K>>;
    last: ToField<Option<K>>;
    length: ToField<"u64">;
}

export type LinkedListReified<K extends TypeArgument, V extends PhantomTypeArgument> = Reified<LinkedList<K, V>, LinkedListFields<K, V>>;

export class LinkedList<K extends TypeArgument, V extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::linked_list::LinkedList`;
    static readonly $numTypeParams = 2;
    static readonly $isPhantom = [false, true] as const;

    readonly $typeName = LinkedList.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::linked_list::LinkedList<${ToTypeStr<K>}, ${PhantomToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<K>, PhantomToTypeStr<V>];
    readonly $isPhantom = LinkedList.$isPhantom;

    readonly id: ToField<ID>;
    readonly first: ToField<Option<K>>;
    readonly last: ToField<Option<K>>;
    readonly length: ToField<"u64">;

    private constructor(typeArgs: [ToTypeStr<K>, PhantomToTypeStr<V>], fields: LinkedListFields<K, V>) {
        this.$fullTypeName = composeSuiType(
            LinkedList.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::linked_list::LinkedList<${ToTypeStr<K>}, ${PhantomToTypeStr<V>}>`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.first = fields.first;
        this.last = fields.last;
        this.length = fields.length;
    }

    static reified<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        K: K,
        V: V
    ): LinkedListReified<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        return {
            typeName: LinkedList.$typeName,
            fullTypeName: composeSuiType(
                LinkedList.$typeName,
                ...[extractType(K), extractType(V)]
            ) as `${typeof PKG_V1}::linked_list::LinkedList<${ToTypeStr<ToTypeArgument<K>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<V>>}>`,
            typeArgs: [extractType(K), extractType(V)] as [ToTypeStr<ToTypeArgument<K>>, PhantomToTypeStr<ToPhantomTypeArgument<V>>],
            isPhantom: LinkedList.$isPhantom,
            reifiedTypeArgs: [K, V],
            fromFields: (fields: Record<string, any>) => LinkedList.fromFields([K, V], fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LinkedList.fromFieldsWithTypes([K, V], item),
            fromBcs: (data: Uint8Array) => LinkedList.fromBcs([K, V], data),
            bcs: LinkedList.bcs(toBcs(K)),
            fromJSONField: (field: any) => LinkedList.fromJSONField([K, V], field),
            fromJSON: (json: Record<string, any>) => LinkedList.fromJSON([K, V], json),
            fromSuiParsedData: (content: SuiParsedData) => LinkedList.fromSuiParsedData([K, V], content),
            fromSuiObjectData: (content: SuiObjectData) => LinkedList.fromSuiObjectData([K, V], content),
            fetch: async (client: SuiClient, id: string) => LinkedList.fetch(client, [K, V], id),
            new: (fields: LinkedListFields<ToTypeArgument<K>, ToPhantomTypeArgument<V>>) => {
                return new LinkedList([extractType(K), extractType(V)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LinkedList.reified;
    }

    static phantom<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        K: K,
        V: V
    ): PhantomReified<ToTypeStr<LinkedList<ToTypeArgument<K>, ToPhantomTypeArgument<V>>>> {
        return phantom(LinkedList.reified(K, V));
    }
    static get p() {
        return LinkedList.phantom;
    }

    static get bcs() {
        return <K extends BcsType<any>>(K: K) =>
            bcs.struct(`LinkedList<${K.name}>`, {
                id: ID.bcs,
                first: Option.bcs(K),
                last: Option.bcs(K),
                length: bcs.u64(),
            });
    }

    static fromFields<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        fields: Record<string, any>
    ): LinkedList<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        return LinkedList.reified(typeArgs[0], typeArgs[1]).new({
            id: decodeFromFields(ID.reified(), fields.id),
            first: decodeFromFields(Option.reified(typeArgs[0]), fields.first),
            last: decodeFromFields(Option.reified(typeArgs[0]), fields.last),
            length: decodeFromFields("u64", fields.length),
        });
    }

    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        item: FieldsWithTypes
    ): LinkedList<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        if (!isLinkedList(item.type)) {
            throw new Error("not a LinkedList type");
        }
        assertFieldsWithTypesArgsMatch(item, typeArgs);

        return LinkedList.reified(typeArgs[0], typeArgs[1]).new({
            id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
            first: decodeFromFieldsWithTypes(Option.reified(typeArgs[0]), item.fields.first),
            last: decodeFromFieldsWithTypes(Option.reified(typeArgs[0]), item.fields.last),
            length: decodeFromFieldsWithTypes("u64", item.fields.length),
        });
    }

    static fromBcs<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        data: Uint8Array
    ): LinkedList<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        return LinkedList.fromFields(typeArgs, LinkedList.bcs(toBcs(typeArgs[0])).parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            first: fieldToJSON<Option<K>>(`${Option.$typeName}<${this.$typeArgs[0]}>`, this.first),
            last: fieldToJSON<Option<K>>(`${Option.$typeName}<${this.$typeArgs[0]}>`, this.last),
            length: this.length.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        field: any
    ): LinkedList<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        return LinkedList.reified(typeArgs[0], typeArgs[1]).new({
            id: decodeFromJSONField(ID.reified(), field.id),
            first: decodeFromJSONField(Option.reified(typeArgs[0]), field.first),
            last: decodeFromJSONField(Option.reified(typeArgs[0]), field.last),
            length: decodeFromJSONField("u64", field.length),
        });
    }

    static fromJSON<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        json: Record<string, any>
    ): LinkedList<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        if (json.$typeName !== LinkedList.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(LinkedList.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs);

        return LinkedList.fromJSONField(typeArgs, json);
    }

    static fromSuiParsedData<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        content: SuiParsedData
    ): LinkedList<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLinkedList(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LinkedList object`);
        }
        return LinkedList.fromFieldsWithTypes(typeArgs, content);
    }

    static fromSuiObjectData<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        data: SuiObjectData
    ): LinkedList<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLinkedList(data.bcs.type)) {
                throw new Error(`object at is not a LinkedList object`);
            }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 2) {
                throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`);
            }
            for (let i = 0; i < 2; i++) {
                const gotTypeArg = compressSuiType(gotTypeArgs[i]);
                const expectedTypeArg = compressSuiType(extractType(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }

            return LinkedList.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LinkedList.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient,
        typeArgs: [K, V],
        id: string
    ): Promise<LinkedList<ToTypeArgument<K>, ToPhantomTypeArgument<V>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LinkedList object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLinkedList(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LinkedList object`);
        }

        return LinkedList.fromSuiObjectData(typeArgs, res.data);
    }
}
