import {
    PhantomReified,
    Reified,
    StructClass,
    ToField,
    ToTypeStr,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    phantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== PriceData =============================== */

export function isPriceData(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a::price_data_pull::PriceData";
}

export interface PriceDataFields {
    dummyField: ToField<"bool">;
}

export type PriceDataReified = Reified<PriceData, PriceDataFields>;

export class PriceData implements StructClass {
    static readonly $typeName = "0x2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a::price_data_pull::PriceData";
    static readonly $numTypeParams = 0;

    readonly $typeName = PriceData.$typeName;

    readonly $fullTypeName: "0x2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a::price_data_pull::PriceData";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: PriceDataFields) {
        this.$fullTypeName = composeSuiType(
            PriceData.$typeName,
            ...typeArgs
        ) as "0x2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a::price_data_pull::PriceData";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): PriceDataReified {
        return {
            typeName: PriceData.$typeName,
            fullTypeName: composeSuiType(
                PriceData.$typeName,
                ...[]
            ) as "0x2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a::price_data_pull::PriceData",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => PriceData.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => PriceData.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => PriceData.fromBcs(data),
            bcs: PriceData.bcs,
            fromJSONField: (field: any) => PriceData.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => PriceData.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => PriceData.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => PriceData.fetch(client, id),
            new: (fields: PriceDataFields) => {
                return new PriceData([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return PriceData.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<PriceData>> {
        return phantom(PriceData.reified());
    }
    static get p() {
        return PriceData.phantom();
    }

    static get bcs() {
        return bcs.struct("PriceData", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): PriceData {
        return PriceData.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): PriceData {
        if (!isPriceData(item.type)) {
            throw new Error("not a PriceData type");
        }

        return PriceData.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): PriceData {
        return PriceData.fromFields(PriceData.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): PriceData {
        return PriceData.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): PriceData {
        if (json.$typeName !== PriceData.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return PriceData.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): PriceData {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPriceData(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PriceData object`);
        }
        return PriceData.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<PriceData> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching PriceData object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPriceData(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PriceData object`);
        }
        return PriceData.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
