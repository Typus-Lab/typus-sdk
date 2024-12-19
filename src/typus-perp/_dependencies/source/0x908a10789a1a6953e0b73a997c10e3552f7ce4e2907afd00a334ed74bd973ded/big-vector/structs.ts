import {
    PhantomReified,
    PhantomToTypeStr,
    PhantomTypeArgument,
    Reified,
    StructClass,
    ToField,
    ToPhantomTypeArgument,
    ToTypeStr,
    assertFieldsWithTypesArgsMatch,
    assertReifiedTypeArgsMatch,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    extractType,
    phantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName } from "../../../../_framework/util";
import { UID } from "../../0x2/object/structs";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== BigVector =============================== */

export function isBigVector(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith(`${PKG_V1}::big_vector::BigVector` + "<");
}

export interface BigVectorFields<Element extends PhantomTypeArgument> {
    id: ToField<UID>;
    sliceCount: ToField<"u64">;
    sliceSize: ToField<"u64">;
    length: ToField<"u64">;
}

export type BigVectorReified<Element extends PhantomTypeArgument> = Reified<BigVector<Element>, BigVectorFields<Element>>;

export class BigVector<Element extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::big_vector::BigVector`;
    static readonly $numTypeParams = 1;
    static readonly $isPhantom = [true] as const;

    readonly $typeName = BigVector.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::big_vector::BigVector<${PhantomToTypeStr<Element>}>`;
    readonly $typeArgs: [PhantomToTypeStr<Element>];
    readonly $isPhantom = BigVector.$isPhantom;

    readonly id: ToField<UID>;
    readonly sliceCount: ToField<"u64">;
    readonly sliceSize: ToField<"u64">;
    readonly length: ToField<"u64">;

    private constructor(typeArgs: [PhantomToTypeStr<Element>], fields: BigVectorFields<Element>) {
        this.$fullTypeName = composeSuiType(
            BigVector.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::big_vector::BigVector<${PhantomToTypeStr<Element>}>`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.sliceCount = fields.sliceCount;
        this.sliceSize = fields.sliceSize;
        this.length = fields.length;
    }

    static reified<Element extends PhantomReified<PhantomTypeArgument>>(
        Element: Element
    ): BigVectorReified<ToPhantomTypeArgument<Element>> {
        return {
            typeName: BigVector.$typeName,
            fullTypeName: composeSuiType(
                BigVector.$typeName,
                ...[extractType(Element)]
            ) as `${typeof PKG_V1}::big_vector::BigVector<${PhantomToTypeStr<ToPhantomTypeArgument<Element>>}>`,
            typeArgs: [extractType(Element)] as [PhantomToTypeStr<ToPhantomTypeArgument<Element>>],
            isPhantom: BigVector.$isPhantom,
            reifiedTypeArgs: [Element],
            fromFields: (fields: Record<string, any>) => BigVector.fromFields(Element, fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => BigVector.fromFieldsWithTypes(Element, item),
            fromBcs: (data: Uint8Array) => BigVector.fromBcs(Element, data),
            bcs: BigVector.bcs,
            fromJSONField: (field: any) => BigVector.fromJSONField(Element, field),
            fromJSON: (json: Record<string, any>) => BigVector.fromJSON(Element, json),
            fromSuiParsedData: (content: SuiParsedData) => BigVector.fromSuiParsedData(Element, content),
            fromSuiObjectData: (content: SuiObjectData) => BigVector.fromSuiObjectData(Element, content),
            fetch: async (client: SuiClient, id: string) => BigVector.fetch(client, Element, id),
            new: (fields: BigVectorFields<ToPhantomTypeArgument<Element>>) => {
                return new BigVector([extractType(Element)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return BigVector.reified;
    }

    static phantom<Element extends PhantomReified<PhantomTypeArgument>>(
        Element: Element
    ): PhantomReified<ToTypeStr<BigVector<ToPhantomTypeArgument<Element>>>> {
        return phantom(BigVector.reified(Element));
    }
    static get p() {
        return BigVector.phantom;
    }

    static get bcs() {
        return bcs.struct("BigVector", {
            id: UID.bcs,
            slice_count: bcs.u64(),
            slice_size: bcs.u64(),
            length: bcs.u64(),
        });
    }

    static fromFields<Element extends PhantomReified<PhantomTypeArgument>>(
        typeArg: Element,
        fields: Record<string, any>
    ): BigVector<ToPhantomTypeArgument<Element>> {
        return BigVector.reified(typeArg).new({
            id: decodeFromFields(UID.reified(), fields.id),
            sliceCount: decodeFromFields("u64", fields.slice_count),
            sliceSize: decodeFromFields("u64", fields.slice_size),
            length: decodeFromFields("u64", fields.length),
        });
    }

    static fromFieldsWithTypes<Element extends PhantomReified<PhantomTypeArgument>>(
        typeArg: Element,
        item: FieldsWithTypes
    ): BigVector<ToPhantomTypeArgument<Element>> {
        if (!isBigVector(item.type)) {
            throw new Error("not a BigVector type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return BigVector.reified(typeArg).new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            sliceCount: decodeFromFieldsWithTypes("u64", item.fields.slice_count),
            sliceSize: decodeFromFieldsWithTypes("u64", item.fields.slice_size),
            length: decodeFromFieldsWithTypes("u64", item.fields.length),
        });
    }

    static fromBcs<Element extends PhantomReified<PhantomTypeArgument>>(
        typeArg: Element,
        data: Uint8Array
    ): BigVector<ToPhantomTypeArgument<Element>> {
        return BigVector.fromFields(typeArg, BigVector.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            sliceCount: this.sliceCount.toString(),
            sliceSize: this.sliceSize.toString(),
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

    static fromJSONField<Element extends PhantomReified<PhantomTypeArgument>>(
        typeArg: Element,
        field: any
    ): BigVector<ToPhantomTypeArgument<Element>> {
        return BigVector.reified(typeArg).new({
            id: decodeFromJSONField(UID.reified(), field.id),
            sliceCount: decodeFromJSONField("u64", field.sliceCount),
            sliceSize: decodeFromJSONField("u64", field.sliceSize),
            length: decodeFromJSONField("u64", field.length),
        });
    }

    static fromJSON<Element extends PhantomReified<PhantomTypeArgument>>(
        typeArg: Element,
        json: Record<string, any>
    ): BigVector<ToPhantomTypeArgument<Element>> {
        if (json.$typeName !== BigVector.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(BigVector.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg]);

        return BigVector.fromJSONField(typeArg, json);
    }

    static fromSuiParsedData<Element extends PhantomReified<PhantomTypeArgument>>(
        typeArg: Element,
        content: SuiParsedData
    ): BigVector<ToPhantomTypeArgument<Element>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBigVector(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a BigVector object`);
        }
        return BigVector.fromFieldsWithTypes(typeArg, content);
    }

    static fromSuiObjectData<Element extends PhantomReified<PhantomTypeArgument>>(
        typeArg: Element,
        data: SuiObjectData
    ): BigVector<ToPhantomTypeArgument<Element>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBigVector(data.bcs.type)) {
                throw new Error(`object at is not a BigVector object`);
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

            return BigVector.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BigVector.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<Element extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient,
        typeArg: Element,
        id: string
    ): Promise<BigVector<ToPhantomTypeArgument<Element>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching BigVector object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isBigVector(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BigVector object`);
        }

        return BigVector.fromSuiObjectData(typeArg, res.data);
    }
}
