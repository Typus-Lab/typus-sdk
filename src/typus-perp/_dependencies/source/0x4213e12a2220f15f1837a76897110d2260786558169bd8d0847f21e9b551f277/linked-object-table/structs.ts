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
import { UID } from "../../0x2/object/structs";
import { PKG_V1 } from "../index";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== Node =============================== */

export function isNode(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith(`${PKG_V1}::linked_object_table::Node` + "<");
}

export interface NodeFields<K extends TypeArgument, V extends PhantomTypeArgument> {
    prev: ToField<Option<K>>;
    next: ToField<Option<K>>;
}

export type NodeReified<K extends TypeArgument, V extends PhantomTypeArgument> = Reified<Node<K, V>, NodeFields<K, V>>;

export class Node<K extends TypeArgument, V extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::linked_object_table::Node`;
    static readonly $numTypeParams = 2;
    static readonly $isPhantom = [false, true] as const;

    readonly $typeName = Node.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::linked_object_table::Node<${ToTypeStr<K>}, ${PhantomToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<K>, PhantomToTypeStr<V>];
    readonly $isPhantom = Node.$isPhantom;

    readonly prev: ToField<Option<K>>;
    readonly next: ToField<Option<K>>;

    private constructor(typeArgs: [ToTypeStr<K>, PhantomToTypeStr<V>], fields: NodeFields<K, V>) {
        this.$fullTypeName = composeSuiType(
            Node.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::linked_object_table::Node<${ToTypeStr<K>}, ${PhantomToTypeStr<V>}>`;
        this.$typeArgs = typeArgs;

        this.prev = fields.prev;
        this.next = fields.next;
    }

    static reified<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        K: K,
        V: V
    ): NodeReified<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        return {
            typeName: Node.$typeName,
            fullTypeName: composeSuiType(
                Node.$typeName,
                ...[extractType(K), extractType(V)]
            ) as `${typeof PKG_V1}::linked_object_table::Node<${ToTypeStr<ToTypeArgument<K>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<V>>}>`,
            typeArgs: [extractType(K), extractType(V)] as [ToTypeStr<ToTypeArgument<K>>, PhantomToTypeStr<ToPhantomTypeArgument<V>>],
            isPhantom: Node.$isPhantom,
            reifiedTypeArgs: [K, V],
            fromFields: (fields: Record<string, any>) => Node.fromFields([K, V], fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Node.fromFieldsWithTypes([K, V], item),
            fromBcs: (data: Uint8Array) => Node.fromBcs([K, V], data),
            bcs: Node.bcs(toBcs(K)),
            fromJSONField: (field: any) => Node.fromJSONField([K, V], field),
            fromJSON: (json: Record<string, any>) => Node.fromJSON([K, V], json),
            fromSuiParsedData: (content: SuiParsedData) => Node.fromSuiParsedData([K, V], content),
            fromSuiObjectData: (content: SuiObjectData) => Node.fromSuiObjectData([K, V], content),
            fetch: async (client: SuiClient, id: string) => Node.fetch(client, [K, V], id),
            new: (fields: NodeFields<ToTypeArgument<K>, ToPhantomTypeArgument<V>>) => {
                return new Node([extractType(K), extractType(V)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Node.reified;
    }

    static phantom<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        K: K,
        V: V
    ): PhantomReified<ToTypeStr<Node<ToTypeArgument<K>, ToPhantomTypeArgument<V>>>> {
        return phantom(Node.reified(K, V));
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

    static fromFields<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        fields: Record<string, any>
    ): Node<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        return Node.reified(typeArgs[0], typeArgs[1]).new({
            prev: decodeFromFields(Option.reified(typeArgs[0]), fields.prev),
            next: decodeFromFields(Option.reified(typeArgs[0]), fields.next),
        });
    }

    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        item: FieldsWithTypes
    ): Node<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        if (!isNode(item.type)) {
            throw new Error("not a Node type");
        }
        assertFieldsWithTypesArgsMatch(item, typeArgs);

        return Node.reified(typeArgs[0], typeArgs[1]).new({
            prev: decodeFromFieldsWithTypes(Option.reified(typeArgs[0]), item.fields.prev),
            next: decodeFromFieldsWithTypes(Option.reified(typeArgs[0]), item.fields.next),
        });
    }

    static fromBcs<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        data: Uint8Array
    ): Node<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        return Node.fromFields(typeArgs, Node.bcs(toBcs(typeArgs[0])).parse(data));
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

    static fromJSONField<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        field: any
    ): Node<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        return Node.reified(typeArgs[0], typeArgs[1]).new({
            prev: decodeFromJSONField(Option.reified(typeArgs[0]), field.prev),
            next: decodeFromJSONField(Option.reified(typeArgs[0]), field.next),
        });
    }

    static fromJSON<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        json: Record<string, any>
    ): Node<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        if (json.$typeName !== Node.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(Node.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs);

        return Node.fromJSONField(typeArgs, json);
    }

    static fromSuiParsedData<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        content: SuiParsedData
    ): Node<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNode(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Node object`);
        }
        return Node.fromFieldsWithTypes(typeArgs, content);
    }

    static fromSuiObjectData<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        data: SuiObjectData
    ): Node<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
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

    static async fetch<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient,
        typeArgs: [K, V],
        id: string
    ): Promise<Node<ToTypeArgument<K>, ToPhantomTypeArgument<V>>> {
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

/* ============================== LinkedObjectTable =============================== */

export function isLinkedObjectTable(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith(`${PKG_V1}::linked_object_table::LinkedObjectTable` + "<");
}

export interface LinkedObjectTableFields<K extends TypeArgument, V extends PhantomTypeArgument> {
    id: ToField<UID>;
    vid: ToField<UID>;
    size: ToField<"u64">;
    head: ToField<Option<K>>;
    tail: ToField<Option<K>>;
}

export type LinkedObjectTableReified<K extends TypeArgument, V extends PhantomTypeArgument> = Reified<
    LinkedObjectTable<K, V>,
    LinkedObjectTableFields<K, V>
>;

export class LinkedObjectTable<K extends TypeArgument, V extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::linked_object_table::LinkedObjectTable`;
    static readonly $numTypeParams = 2;
    static readonly $isPhantom = [false, true] as const;

    readonly $typeName = LinkedObjectTable.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::linked_object_table::LinkedObjectTable<${ToTypeStr<K>}, ${PhantomToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<K>, PhantomToTypeStr<V>];
    readonly $isPhantom = LinkedObjectTable.$isPhantom;

    readonly id: ToField<UID>;
    readonly vid: ToField<UID>;
    readonly size: ToField<"u64">;
    readonly head: ToField<Option<K>>;
    readonly tail: ToField<Option<K>>;

    private constructor(typeArgs: [ToTypeStr<K>, PhantomToTypeStr<V>], fields: LinkedObjectTableFields<K, V>) {
        this.$fullTypeName = composeSuiType(
            LinkedObjectTable.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::linked_object_table::LinkedObjectTable<${ToTypeStr<K>}, ${PhantomToTypeStr<V>}>`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.vid = fields.vid;
        this.size = fields.size;
        this.head = fields.head;
        this.tail = fields.tail;
    }

    static reified<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        K: K,
        V: V
    ): LinkedObjectTableReified<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        return {
            typeName: LinkedObjectTable.$typeName,
            fullTypeName: composeSuiType(
                LinkedObjectTable.$typeName,
                ...[extractType(K), extractType(V)]
            ) as `${typeof PKG_V1}::linked_object_table::LinkedObjectTable<${ToTypeStr<ToTypeArgument<K>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<V>>}>`,
            typeArgs: [extractType(K), extractType(V)] as [ToTypeStr<ToTypeArgument<K>>, PhantomToTypeStr<ToPhantomTypeArgument<V>>],
            isPhantom: LinkedObjectTable.$isPhantom,
            reifiedTypeArgs: [K, V],
            fromFields: (fields: Record<string, any>) => LinkedObjectTable.fromFields([K, V], fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LinkedObjectTable.fromFieldsWithTypes([K, V], item),
            fromBcs: (data: Uint8Array) => LinkedObjectTable.fromBcs([K, V], data),
            bcs: LinkedObjectTable.bcs(toBcs(K)),
            fromJSONField: (field: any) => LinkedObjectTable.fromJSONField([K, V], field),
            fromJSON: (json: Record<string, any>) => LinkedObjectTable.fromJSON([K, V], json),
            fromSuiParsedData: (content: SuiParsedData) => LinkedObjectTable.fromSuiParsedData([K, V], content),
            fromSuiObjectData: (content: SuiObjectData) => LinkedObjectTable.fromSuiObjectData([K, V], content),
            fetch: async (client: SuiClient, id: string) => LinkedObjectTable.fetch(client, [K, V], id),
            new: (fields: LinkedObjectTableFields<ToTypeArgument<K>, ToPhantomTypeArgument<V>>) => {
                return new LinkedObjectTable([extractType(K), extractType(V)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LinkedObjectTable.reified;
    }

    static phantom<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        K: K,
        V: V
    ): PhantomReified<ToTypeStr<LinkedObjectTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>>> {
        return phantom(LinkedObjectTable.reified(K, V));
    }
    static get p() {
        return LinkedObjectTable.phantom;
    }

    static get bcs() {
        return <K extends BcsType<any>>(K: K) =>
            bcs.struct(`LinkedObjectTable<${K.name}>`, {
                id: UID.bcs,
                vid: UID.bcs,
                size: bcs.u64(),
                head: Option.bcs(K),
                tail: Option.bcs(K),
            });
    }

    static fromFields<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        fields: Record<string, any>
    ): LinkedObjectTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        return LinkedObjectTable.reified(typeArgs[0], typeArgs[1]).new({
            id: decodeFromFields(UID.reified(), fields.id),
            vid: decodeFromFields(UID.reified(), fields.vid),
            size: decodeFromFields("u64", fields.size),
            head: decodeFromFields(Option.reified(typeArgs[0]), fields.head),
            tail: decodeFromFields(Option.reified(typeArgs[0]), fields.tail),
        });
    }

    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        item: FieldsWithTypes
    ): LinkedObjectTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        if (!isLinkedObjectTable(item.type)) {
            throw new Error("not a LinkedObjectTable type");
        }
        assertFieldsWithTypesArgsMatch(item, typeArgs);

        return LinkedObjectTable.reified(typeArgs[0], typeArgs[1]).new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            vid: decodeFromFieldsWithTypes(UID.reified(), item.fields.vid),
            size: decodeFromFieldsWithTypes("u64", item.fields.size),
            head: decodeFromFieldsWithTypes(Option.reified(typeArgs[0]), item.fields.head),
            tail: decodeFromFieldsWithTypes(Option.reified(typeArgs[0]), item.fields.tail),
        });
    }

    static fromBcs<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        data: Uint8Array
    ): LinkedObjectTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        return LinkedObjectTable.fromFields(typeArgs, LinkedObjectTable.bcs(toBcs(typeArgs[0])).parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            vid: this.vid,
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

    static fromJSONField<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        field: any
    ): LinkedObjectTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        return LinkedObjectTable.reified(typeArgs[0], typeArgs[1]).new({
            id: decodeFromJSONField(UID.reified(), field.id),
            vid: decodeFromJSONField(UID.reified(), field.vid),
            size: decodeFromJSONField("u64", field.size),
            head: decodeFromJSONField(Option.reified(typeArgs[0]), field.head),
            tail: decodeFromJSONField(Option.reified(typeArgs[0]), field.tail),
        });
    }

    static fromJSON<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        json: Record<string, any>
    ): LinkedObjectTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        if (json.$typeName !== LinkedObjectTable.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(LinkedObjectTable.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs);

        return LinkedObjectTable.fromJSONField(typeArgs, json);
    }

    static fromSuiParsedData<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        content: SuiParsedData
    ): LinkedObjectTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLinkedObjectTable(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LinkedObjectTable object`);
        }
        return LinkedObjectTable.fromFieldsWithTypes(typeArgs, content);
    }

    static fromSuiObjectData<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [K, V],
        data: SuiObjectData
    ): LinkedObjectTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLinkedObjectTable(data.bcs.type)) {
                throw new Error(`object at is not a LinkedObjectTable object`);
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

            return LinkedObjectTable.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LinkedObjectTable.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<K extends Reified<TypeArgument, any>, V extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient,
        typeArgs: [K, V],
        id: string
    ): Promise<LinkedObjectTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LinkedObjectTable object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLinkedObjectTable(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LinkedObjectTable object`);
        }

        return LinkedObjectTable.fromSuiObjectData(typeArgs, res.data);
    }
}
