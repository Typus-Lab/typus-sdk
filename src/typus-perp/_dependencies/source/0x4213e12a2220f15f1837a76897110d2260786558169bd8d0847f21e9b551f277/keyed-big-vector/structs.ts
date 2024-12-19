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
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName } from "../../../../_framework/util";
import { Vector } from "../../../../_framework/vector";
import { TypeName } from "../../0x1/type-name/structs";
import { UID } from "../../0x2/object/structs";
import { PKG_V16 } from "../index";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== Element =============================== */

export function isElement(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith(`${PKG_V16}::keyed_big_vector::Element` + "<");
}

export interface ElementFields<K extends TypeArgument, V extends TypeArgument> {
    key: ToField<K>;
    value: ToField<V>;
}

export type ElementReified<K extends TypeArgument, V extends TypeArgument> = Reified<Element<K, V>, ElementFields<K, V>>;

export class Element<K extends TypeArgument, V extends TypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V16}::keyed_big_vector::Element`;
    static readonly $numTypeParams = 2;
    static readonly $isPhantom = [false, false] as const;

    readonly $typeName = Element.$typeName;
    readonly $fullTypeName: `${typeof PKG_V16}::keyed_big_vector::Element<${ToTypeStr<K>}, ${ToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<K>, ToTypeStr<V>];
    readonly $isPhantom = Element.$isPhantom;

    readonly key: ToField<K>;
    readonly value: ToField<V>;

    private constructor(typeArgs: [ToTypeStr<K>, ToTypeStr<V>], fields: ElementFields<K, V>) {
        this.$fullTypeName = composeSuiType(
            Element.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V16}::keyed_big_vector::Element<${ToTypeStr<K>}, ${ToTypeStr<V>}>`;
        this.$typeArgs = typeArgs;

        this.key = fields.key;
        this.value = fields.value;
    }

    static reified<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        K: K,
        V: V
    ): ElementReified<ToTypeArgument<K>, ToTypeArgument<V>> {
        return {
            typeName: Element.$typeName,
            fullTypeName: composeSuiType(
                Element.$typeName,
                ...[extractType(K), extractType(V)]
            ) as `${typeof PKG_V16}::keyed_big_vector::Element<${ToTypeStr<ToTypeArgument<K>>}, ${ToTypeStr<ToTypeArgument<V>>}>`,
            typeArgs: [extractType(K), extractType(V)] as [ToTypeStr<ToTypeArgument<K>>, ToTypeStr<ToTypeArgument<V>>],
            isPhantom: Element.$isPhantom,
            reifiedTypeArgs: [K, V],
            fromFields: (fields: Record<string, any>) => Element.fromFields([K, V], fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Element.fromFieldsWithTypes([K, V], item),
            fromBcs: (data: Uint8Array) => Element.fromBcs([K, V], data),
            bcs: Element.bcs(toBcs(K), toBcs(V)),
            fromJSONField: (field: any) => Element.fromJSONField([K, V], field),
            fromJSON: (json: Record<string, any>) => Element.fromJSON([K, V], json),
            fromSuiParsedData: (content: SuiParsedData) => Element.fromSuiParsedData([K, V], content),
            fromSuiObjectData: (content: SuiObjectData) => Element.fromSuiObjectData([K, V], content),
            fetch: async (client: SuiClient, id: string) => Element.fetch(client, [K, V], id),
            new: (fields: ElementFields<ToTypeArgument<K>, ToTypeArgument<V>>) => {
                return new Element([extractType(K), extractType(V)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Element.reified;
    }

    static phantom<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        K: K,
        V: V
    ): PhantomReified<ToTypeStr<Element<ToTypeArgument<K>, ToTypeArgument<V>>>> {
        return phantom(Element.reified(K, V));
    }
    static get p() {
        return Element.phantom;
    }

    static get bcs() {
        return <K extends BcsType<any>, V extends BcsType<any>>(K: K, V: V) =>
            bcs.struct(`Element<${K.name}, ${V.name}>`, {
                key: K,
                value: V,
            });
    }

    static fromFields<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        fields: Record<string, any>
    ): Element<ToTypeArgument<K>, ToTypeArgument<V>> {
        return Element.reified(typeArgs[0], typeArgs[1]).new({
            key: decodeFromFields(typeArgs[0], fields.key),
            value: decodeFromFields(typeArgs[1], fields.value),
        });
    }

    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        item: FieldsWithTypes
    ): Element<ToTypeArgument<K>, ToTypeArgument<V>> {
        if (!isElement(item.type)) {
            throw new Error("not a Element type");
        }
        assertFieldsWithTypesArgsMatch(item, typeArgs);

        return Element.reified(typeArgs[0], typeArgs[1]).new({
            key: decodeFromFieldsWithTypes(typeArgs[0], item.fields.key),
            value: decodeFromFieldsWithTypes(typeArgs[1], item.fields.value),
        });
    }

    static fromBcs<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        data: Uint8Array
    ): Element<ToTypeArgument<K>, ToTypeArgument<V>> {
        return Element.fromFields(typeArgs, Element.bcs(toBcs(typeArgs[0]), toBcs(typeArgs[1])).parse(data));
    }

    toJSONField() {
        return {
            key: fieldToJSON<K>(this.$typeArgs[0], this.key),
            value: fieldToJSON<V>(this.$typeArgs[1], this.value),
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
    ): Element<ToTypeArgument<K>, ToTypeArgument<V>> {
        return Element.reified(typeArgs[0], typeArgs[1]).new({
            key: decodeFromJSONField(typeArgs[0], field.key),
            value: decodeFromJSONField(typeArgs[1], field.value),
        });
    }

    static fromJSON<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        json: Record<string, any>
    ): Element<ToTypeArgument<K>, ToTypeArgument<V>> {
        if (json.$typeName !== Element.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(Element.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs);

        return Element.fromJSONField(typeArgs, json);
    }

    static fromSuiParsedData<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        content: SuiParsedData
    ): Element<ToTypeArgument<K>, ToTypeArgument<V>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isElement(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Element object`);
        }
        return Element.fromFieldsWithTypes(typeArgs, content);
    }

    static fromSuiObjectData<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        data: SuiObjectData
    ): Element<ToTypeArgument<K>, ToTypeArgument<V>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isElement(data.bcs.type)) {
                throw new Error(`object at is not a Element object`);
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

            return Element.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Element.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        client: SuiClient,
        typeArgs: [K, V],
        id: string
    ): Promise<Element<ToTypeArgument<K>, ToTypeArgument<V>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Element object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isElement(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Element object`);
        }

        return Element.fromSuiObjectData(typeArgs, res.data);
    }
}

/* ============================== Slice =============================== */

export function isSlice(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith(`${PKG_V16}::keyed_big_vector::Slice` + "<");
}

export interface SliceFields<K extends TypeArgument, V extends TypeArgument> {
    idx: ToField<"u16">;
    vector: ToField<Vector<Element<K, V>>>;
}

export type SliceReified<K extends TypeArgument, V extends TypeArgument> = Reified<Slice<K, V>, SliceFields<K, V>>;

export class Slice<K extends TypeArgument, V extends TypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V16}::keyed_big_vector::Slice`;
    static readonly $numTypeParams = 2;
    static readonly $isPhantom = [false, false] as const;

    readonly $typeName = Slice.$typeName;
    readonly $fullTypeName: `${typeof PKG_V16}::keyed_big_vector::Slice<${ToTypeStr<K>}, ${ToTypeStr<V>}>`;
    readonly $typeArgs: [ToTypeStr<K>, ToTypeStr<V>];
    readonly $isPhantom = Slice.$isPhantom;

    readonly idx: ToField<"u16">;
    readonly vector: ToField<Vector<Element<K, V>>>;

    private constructor(typeArgs: [ToTypeStr<K>, ToTypeStr<V>], fields: SliceFields<K, V>) {
        this.$fullTypeName = composeSuiType(
            Slice.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V16}::keyed_big_vector::Slice<${ToTypeStr<K>}, ${ToTypeStr<V>}>`;
        this.$typeArgs = typeArgs;

        this.idx = fields.idx;
        this.vector = fields.vector;
    }

    static reified<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        K: K,
        V: V
    ): SliceReified<ToTypeArgument<K>, ToTypeArgument<V>> {
        return {
            typeName: Slice.$typeName,
            fullTypeName: composeSuiType(
                Slice.$typeName,
                ...[extractType(K), extractType(V)]
            ) as `${typeof PKG_V16}::keyed_big_vector::Slice<${ToTypeStr<ToTypeArgument<K>>}, ${ToTypeStr<ToTypeArgument<V>>}>`,
            typeArgs: [extractType(K), extractType(V)] as [ToTypeStr<ToTypeArgument<K>>, ToTypeStr<ToTypeArgument<V>>],
            isPhantom: Slice.$isPhantom,
            reifiedTypeArgs: [K, V],
            fromFields: (fields: Record<string, any>) => Slice.fromFields([K, V], fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Slice.fromFieldsWithTypes([K, V], item),
            fromBcs: (data: Uint8Array) => Slice.fromBcs([K, V], data),
            bcs: Slice.bcs(toBcs(K), toBcs(V)),
            fromJSONField: (field: any) => Slice.fromJSONField([K, V], field),
            fromJSON: (json: Record<string, any>) => Slice.fromJSON([K, V], json),
            fromSuiParsedData: (content: SuiParsedData) => Slice.fromSuiParsedData([K, V], content),
            fromSuiObjectData: (content: SuiObjectData) => Slice.fromSuiObjectData([K, V], content),
            fetch: async (client: SuiClient, id: string) => Slice.fetch(client, [K, V], id),
            new: (fields: SliceFields<ToTypeArgument<K>, ToTypeArgument<V>>) => {
                return new Slice([extractType(K), extractType(V)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Slice.reified;
    }

    static phantom<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        K: K,
        V: V
    ): PhantomReified<ToTypeStr<Slice<ToTypeArgument<K>, ToTypeArgument<V>>>> {
        return phantom(Slice.reified(K, V));
    }
    static get p() {
        return Slice.phantom;
    }

    static get bcs() {
        return <K extends BcsType<any>, V extends BcsType<any>>(K: K, V: V) =>
            bcs.struct(`Slice<${K.name}, ${V.name}>`, {
                idx: bcs.u16(),
                vector: bcs.vector(Element.bcs(K, V)),
            });
    }

    static fromFields<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        fields: Record<string, any>
    ): Slice<ToTypeArgument<K>, ToTypeArgument<V>> {
        return Slice.reified(typeArgs[0], typeArgs[1]).new({
            idx: decodeFromFields("u16", fields.idx),
            vector: decodeFromFields(reified.vector(Element.reified(typeArgs[0], typeArgs[1])), fields.vector),
        });
    }

    static fromFieldsWithTypes<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        item: FieldsWithTypes
    ): Slice<ToTypeArgument<K>, ToTypeArgument<V>> {
        if (!isSlice(item.type)) {
            throw new Error("not a Slice type");
        }
        assertFieldsWithTypesArgsMatch(item, typeArgs);

        return Slice.reified(typeArgs[0], typeArgs[1]).new({
            idx: decodeFromFieldsWithTypes("u16", item.fields.idx),
            vector: decodeFromFieldsWithTypes(reified.vector(Element.reified(typeArgs[0], typeArgs[1])), item.fields.vector),
        });
    }

    static fromBcs<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        data: Uint8Array
    ): Slice<ToTypeArgument<K>, ToTypeArgument<V>> {
        return Slice.fromFields(typeArgs, Slice.bcs(toBcs(typeArgs[0]), toBcs(typeArgs[1])).parse(data));
    }

    toJSONField() {
        return {
            idx: this.idx,
            vector: fieldToJSON<Vector<Element<K, V>>>(
                `vector<${Element.$typeName}<${this.$typeArgs[0]}, ${this.$typeArgs[1]}>>`,
                this.vector
            ),
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
    ): Slice<ToTypeArgument<K>, ToTypeArgument<V>> {
        return Slice.reified(typeArgs[0], typeArgs[1]).new({
            idx: decodeFromJSONField("u16", field.idx),
            vector: decodeFromJSONField(reified.vector(Element.reified(typeArgs[0], typeArgs[1])), field.vector),
        });
    }

    static fromJSON<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        json: Record<string, any>
    ): Slice<ToTypeArgument<K>, ToTypeArgument<V>> {
        if (json.$typeName !== Slice.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(Slice.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs);

        return Slice.fromJSONField(typeArgs, json);
    }

    static fromSuiParsedData<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        content: SuiParsedData
    ): Slice<ToTypeArgument<K>, ToTypeArgument<V>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSlice(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Slice object`);
        }
        return Slice.fromFieldsWithTypes(typeArgs, content);
    }

    static fromSuiObjectData<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        typeArgs: [K, V],
        data: SuiObjectData
    ): Slice<ToTypeArgument<K>, ToTypeArgument<V>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSlice(data.bcs.type)) {
                throw new Error(`object at is not a Slice object`);
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

            return Slice.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Slice.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
        client: SuiClient,
        typeArgs: [K, V],
        id: string
    ): Promise<Slice<ToTypeArgument<K>, ToTypeArgument<V>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Slice object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSlice(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Slice object`);
        }

        return Slice.fromSuiObjectData(typeArgs, res.data);
    }
}

/* ============================== KeyedBigVector =============================== */

export function isKeyedBigVector(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V16}::keyed_big_vector::KeyedBigVector`;
}

export interface KeyedBigVectorFields {
    id: ToField<UID>;
    keyType: ToField<TypeName>;
    valueType: ToField<TypeName>;
    sliceIdx: ToField<"u16">;
    sliceSize: ToField<"u32">;
    length: ToField<"u64">;
}

export type KeyedBigVectorReified = Reified<KeyedBigVector, KeyedBigVectorFields>;

export class KeyedBigVector implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V16}::keyed_big_vector::KeyedBigVector`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = KeyedBigVector.$typeName;
    readonly $fullTypeName: `${typeof PKG_V16}::keyed_big_vector::KeyedBigVector`;
    readonly $typeArgs: [];
    readonly $isPhantom = KeyedBigVector.$isPhantom;

    readonly id: ToField<UID>;
    readonly keyType: ToField<TypeName>;
    readonly valueType: ToField<TypeName>;
    readonly sliceIdx: ToField<"u16">;
    readonly sliceSize: ToField<"u32">;
    readonly length: ToField<"u64">;

    private constructor(typeArgs: [], fields: KeyedBigVectorFields) {
        this.$fullTypeName = composeSuiType(KeyedBigVector.$typeName, ...typeArgs) as `${typeof PKG_V16}::keyed_big_vector::KeyedBigVector`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.keyType = fields.keyType;
        this.valueType = fields.valueType;
        this.sliceIdx = fields.sliceIdx;
        this.sliceSize = fields.sliceSize;
        this.length = fields.length;
    }

    static reified(): KeyedBigVectorReified {
        return {
            typeName: KeyedBigVector.$typeName,
            fullTypeName: composeSuiType(KeyedBigVector.$typeName, ...[]) as `${typeof PKG_V16}::keyed_big_vector::KeyedBigVector`,
            typeArgs: [] as [],
            isPhantom: KeyedBigVector.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => KeyedBigVector.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => KeyedBigVector.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => KeyedBigVector.fromBcs(data),
            bcs: KeyedBigVector.bcs,
            fromJSONField: (field: any) => KeyedBigVector.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => KeyedBigVector.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => KeyedBigVector.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => KeyedBigVector.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => KeyedBigVector.fetch(client, id),
            new: (fields: KeyedBigVectorFields) => {
                return new KeyedBigVector([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return KeyedBigVector.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<KeyedBigVector>> {
        return phantom(KeyedBigVector.reified());
    }
    static get p() {
        return KeyedBigVector.phantom();
    }

    static get bcs() {
        return bcs.struct("KeyedBigVector", {
            id: UID.bcs,
            key_type: TypeName.bcs,
            value_type: TypeName.bcs,
            slice_idx: bcs.u16(),
            slice_size: bcs.u32(),
            length: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): KeyedBigVector {
        return KeyedBigVector.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            keyType: decodeFromFields(TypeName.reified(), fields.key_type),
            valueType: decodeFromFields(TypeName.reified(), fields.value_type),
            sliceIdx: decodeFromFields("u16", fields.slice_idx),
            sliceSize: decodeFromFields("u32", fields.slice_size),
            length: decodeFromFields("u64", fields.length),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): KeyedBigVector {
        if (!isKeyedBigVector(item.type)) {
            throw new Error("not a KeyedBigVector type");
        }

        return KeyedBigVector.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            keyType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.key_type),
            valueType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.value_type),
            sliceIdx: decodeFromFieldsWithTypes("u16", item.fields.slice_idx),
            sliceSize: decodeFromFieldsWithTypes("u32", item.fields.slice_size),
            length: decodeFromFieldsWithTypes("u64", item.fields.length),
        });
    }

    static fromBcs(data: Uint8Array): KeyedBigVector {
        return KeyedBigVector.fromFields(KeyedBigVector.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            keyType: this.keyType.toJSONField(),
            valueType: this.valueType.toJSONField(),
            sliceIdx: this.sliceIdx,
            sliceSize: this.sliceSize,
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

    static fromJSONField(field: any): KeyedBigVector {
        return KeyedBigVector.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            keyType: decodeFromJSONField(TypeName.reified(), field.keyType),
            valueType: decodeFromJSONField(TypeName.reified(), field.valueType),
            sliceIdx: decodeFromJSONField("u16", field.sliceIdx),
            sliceSize: decodeFromJSONField("u32", field.sliceSize),
            length: decodeFromJSONField("u64", field.length),
        });
    }

    static fromJSON(json: Record<string, any>): KeyedBigVector {
        if (json.$typeName !== KeyedBigVector.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return KeyedBigVector.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): KeyedBigVector {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isKeyedBigVector(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a KeyedBigVector object`);
        }
        return KeyedBigVector.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): KeyedBigVector {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isKeyedBigVector(data.bcs.type)) {
                throw new Error(`object at is not a KeyedBigVector object`);
            }

            return KeyedBigVector.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return KeyedBigVector.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<KeyedBigVector> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching KeyedBigVector object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isKeyedBigVector(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a KeyedBigVector object`);
        }

        return KeyedBigVector.fromSuiObjectData(res.data);
    }
}
