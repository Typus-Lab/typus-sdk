import * as reified from "../../../../_framework/reified";
import {
    PhantomReified,
    Reified,
    StructClass,
    ToField,
    ToTypeArgument,
    ToTypeStr,
    TypeArgument,
    Vector,
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
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { TypeName } from "../../0x1/type-name/structs";
import { UID } from "../../0x2/object/structs";
import { BcsType, bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== BigVector =============================== */

export function isBigVector(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::big_vector::BigVector";
}

export interface BigVectorFields {
    id: ToField<UID>;
    elementType: ToField<TypeName>;
    sliceIdx: ToField<"u64">;
    sliceSize: ToField<"u32">;
    length: ToField<"u64">;
}

export type BigVectorReified = Reified<BigVector, BigVectorFields>;

export class BigVector implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::big_vector::BigVector";
    static readonly $numTypeParams = 0;

    readonly $typeName = BigVector.$typeName;

    readonly $fullTypeName: "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::big_vector::BigVector";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly elementType: ToField<TypeName>;
    readonly sliceIdx: ToField<"u64">;
    readonly sliceSize: ToField<"u32">;
    readonly length: ToField<"u64">;

    private constructor(typeArgs: [], fields: BigVectorFields) {
        this.$fullTypeName = composeSuiType(
            BigVector.$typeName,
            ...typeArgs
        ) as "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::big_vector::BigVector";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.elementType = fields.elementType;
        this.sliceIdx = fields.sliceIdx;
        this.sliceSize = fields.sliceSize;
        this.length = fields.length;
    }

    static reified(): BigVectorReified {
        return {
            typeName: BigVector.$typeName,
            fullTypeName: composeSuiType(
                BigVector.$typeName,
                ...[]
            ) as "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::big_vector::BigVector",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => BigVector.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => BigVector.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => BigVector.fromBcs(data),
            bcs: BigVector.bcs,
            fromJSONField: (field: any) => BigVector.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => BigVector.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => BigVector.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => BigVector.fetch(client, id),
            new: (fields: BigVectorFields) => {
                return new BigVector([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return BigVector.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<BigVector>> {
        return phantom(BigVector.reified());
    }
    static get p() {
        return BigVector.phantom();
    }

    static get bcs() {
        return bcs.struct("BigVector", {
            id: UID.bcs,
            element_type: TypeName.bcs,
            slice_idx: bcs.u64(),
            slice_size: bcs.u32(),
            length: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): BigVector {
        return BigVector.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            elementType: decodeFromFields(TypeName.reified(), fields.element_type),
            sliceIdx: decodeFromFields("u64", fields.slice_idx),
            sliceSize: decodeFromFields("u32", fields.slice_size),
            length: decodeFromFields("u64", fields.length),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): BigVector {
        if (!isBigVector(item.type)) {
            throw new Error("not a BigVector type");
        }

        return BigVector.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            elementType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.element_type),
            sliceIdx: decodeFromFieldsWithTypes("u64", item.fields.slice_idx),
            sliceSize: decodeFromFieldsWithTypes("u32", item.fields.slice_size),
            length: decodeFromFieldsWithTypes("u64", item.fields.length),
        });
    }

    static fromBcs(data: Uint8Array): BigVector {
        return BigVector.fromFields(BigVector.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            elementType: this.elementType.toJSONField(),
            sliceIdx: this.sliceIdx.toString(),
            sliceSize: this.sliceSize,
            length: this.length.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): BigVector {
        return BigVector.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            elementType: decodeFromJSONField(TypeName.reified(), field.elementType),
            sliceIdx: decodeFromJSONField("u64", field.sliceIdx),
            sliceSize: decodeFromJSONField("u32", field.sliceSize),
            length: decodeFromJSONField("u64", field.length),
        });
    }

    static fromJSON(json: Record<string, any>): BigVector {
        if (json.$typeName !== BigVector.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return BigVector.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): BigVector {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBigVector(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a BigVector object`);
        }
        return BigVector.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<BigVector> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching BigVector object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isBigVector(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BigVector object`);
        }
        return BigVector.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== Slice =============================== */

export function isSlice(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::big_vector::Slice<");
}

export interface SliceFields<Element extends TypeArgument> {
    idx: ToField<"u64">;
    vector: ToField<Vector<Element>>;
}

export type SliceReified<Element extends TypeArgument> = Reified<Slice<Element>, SliceFields<Element>>;

export class Slice<Element extends TypeArgument> implements StructClass {
    static readonly $typeName = "0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::big_vector::Slice";
    static readonly $numTypeParams = 1;

    readonly $typeName = Slice.$typeName;

    readonly $fullTypeName: `0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::big_vector::Slice<${ToTypeStr<Element>}>`;

    readonly $typeArgs: [ToTypeStr<Element>];

    readonly idx: ToField<"u64">;
    readonly vector: ToField<Vector<Element>>;

    private constructor(typeArgs: [ToTypeStr<Element>], fields: SliceFields<Element>) {
        this.$fullTypeName = composeSuiType(
            Slice.$typeName,
            ...typeArgs
        ) as `0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::big_vector::Slice<${ToTypeStr<Element>}>`;
        this.$typeArgs = typeArgs;

        this.idx = fields.idx;
        this.vector = fields.vector;
    }

    static reified<Element extends Reified<TypeArgument, any>>(Element: Element): SliceReified<ToTypeArgument<Element>> {
        return {
            typeName: Slice.$typeName,
            fullTypeName: composeSuiType(
                Slice.$typeName,
                ...[extractType(Element)]
            ) as `0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277::big_vector::Slice<${ToTypeStr<ToTypeArgument<Element>>}>`,
            typeArgs: [extractType(Element)] as [ToTypeStr<ToTypeArgument<Element>>],
            reifiedTypeArgs: [Element],
            fromFields: (fields: Record<string, any>) => Slice.fromFields(Element, fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Slice.fromFieldsWithTypes(Element, item),
            fromBcs: (data: Uint8Array) => Slice.fromBcs(Element, data),
            bcs: Slice.bcs(toBcs(Element)),
            fromJSONField: (field: any) => Slice.fromJSONField(Element, field),
            fromJSON: (json: Record<string, any>) => Slice.fromJSON(Element, json),
            fromSuiParsedData: (content: SuiParsedData) => Slice.fromSuiParsedData(Element, content),
            fetch: async (client: SuiClient, id: string) => Slice.fetch(client, Element, id),
            new: (fields: SliceFields<ToTypeArgument<Element>>) => {
                return new Slice([extractType(Element)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Slice.reified;
    }

    static phantom<Element extends Reified<TypeArgument, any>>(
        Element: Element
    ): PhantomReified<ToTypeStr<Slice<ToTypeArgument<Element>>>> {
        return phantom(Slice.reified(Element));
    }
    static get p() {
        return Slice.phantom;
    }

    static get bcs() {
        return <Element extends BcsType<any>>(Element: Element) =>
            bcs.struct(`Slice<${Element.name}>`, {
                idx: bcs.u64(),
                vector: bcs.vector(Element),
            });
    }

    static fromFields<Element extends Reified<TypeArgument, any>>(
        typeArg: Element,
        fields: Record<string, any>
    ): Slice<ToTypeArgument<Element>> {
        return Slice.reified(typeArg).new({
            idx: decodeFromFields("u64", fields.idx),
            vector: decodeFromFields(reified.vector(typeArg), fields.vector),
        });
    }

    static fromFieldsWithTypes<Element extends Reified<TypeArgument, any>>(
        typeArg: Element,
        item: FieldsWithTypes
    ): Slice<ToTypeArgument<Element>> {
        if (!isSlice(item.type)) {
            throw new Error("not a Slice type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return Slice.reified(typeArg).new({
            idx: decodeFromFieldsWithTypes("u64", item.fields.idx),
            vector: decodeFromFieldsWithTypes(reified.vector(typeArg), item.fields.vector),
        });
    }

    static fromBcs<Element extends Reified<TypeArgument, any>>(typeArg: Element, data: Uint8Array): Slice<ToTypeArgument<Element>> {
        const typeArgs = [typeArg];

        return Slice.fromFields(typeArg, Slice.bcs(toBcs(typeArgs[0])).parse(data));
    }

    toJSONField() {
        return {
            idx: this.idx.toString(),
            vector: fieldToJSON<Vector<Element>>(`vector<${this.$typeArgs[0]}>`, this.vector),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField<Element extends Reified<TypeArgument, any>>(typeArg: Element, field: any): Slice<ToTypeArgument<Element>> {
        return Slice.reified(typeArg).new({
            idx: decodeFromJSONField("u64", field.idx),
            vector: decodeFromJSONField(reified.vector(typeArg), field.vector),
        });
    }

    static fromJSON<Element extends Reified<TypeArgument, any>>(
        typeArg: Element,
        json: Record<string, any>
    ): Slice<ToTypeArgument<Element>> {
        if (json.$typeName !== Slice.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(Slice.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg]);

        return Slice.fromJSONField(typeArg, json);
    }

    static fromSuiParsedData<Element extends Reified<TypeArgument, any>>(
        typeArg: Element,
        content: SuiParsedData
    ): Slice<ToTypeArgument<Element>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSlice(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Slice object`);
        }
        return Slice.fromFieldsWithTypes(typeArg, content);
    }

    static async fetch<Element extends Reified<TypeArgument, any>>(
        client: SuiClient,
        typeArg: Element,
        id: string
    ): Promise<Slice<ToTypeArgument<Element>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Slice object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSlice(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Slice object`);
        }
        return Slice.fromBcs(typeArg, fromB64(res.data.bcs.bcsBytes));
    }
}
