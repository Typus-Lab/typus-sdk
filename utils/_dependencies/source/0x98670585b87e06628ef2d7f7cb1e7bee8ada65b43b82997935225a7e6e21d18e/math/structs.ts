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

/* ============================== SwitchboardDecimal =============================== */

export function isSwitchboardDecimal(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::math::SwitchboardDecimal";
}

export interface SwitchboardDecimalFields {
    value: ToField<"u128">;
    dec: ToField<"u8">;
    neg: ToField<"bool">;
}

export type SwitchboardDecimalReified = Reified<SwitchboardDecimal, SwitchboardDecimalFields>;

export class SwitchboardDecimal implements StructClass {
    static readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::math::SwitchboardDecimal";
    static readonly $numTypeParams = 0;

    readonly $typeName = SwitchboardDecimal.$typeName;

    readonly $fullTypeName: "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::math::SwitchboardDecimal";

    readonly $typeArgs: [];

    readonly value: ToField<"u128">;
    readonly dec: ToField<"u8">;
    readonly neg: ToField<"bool">;

    private constructor(typeArgs: [], fields: SwitchboardDecimalFields) {
        this.$fullTypeName = composeSuiType(
            SwitchboardDecimal.$typeName,
            ...typeArgs
        ) as "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::math::SwitchboardDecimal";
        this.$typeArgs = typeArgs;

        this.value = fields.value;
        this.dec = fields.dec;
        this.neg = fields.neg;
    }

    static reified(): SwitchboardDecimalReified {
        return {
            typeName: SwitchboardDecimal.$typeName,
            fullTypeName: composeSuiType(
                SwitchboardDecimal.$typeName,
                ...[]
            ) as "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::math::SwitchboardDecimal",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SwitchboardDecimal.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SwitchboardDecimal.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SwitchboardDecimal.fromBcs(data),
            bcs: SwitchboardDecimal.bcs,
            fromJSONField: (field: any) => SwitchboardDecimal.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SwitchboardDecimal.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SwitchboardDecimal.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => SwitchboardDecimal.fetch(client, id),
            new: (fields: SwitchboardDecimalFields) => {
                return new SwitchboardDecimal([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SwitchboardDecimal.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SwitchboardDecimal>> {
        return phantom(SwitchboardDecimal.reified());
    }
    static get p() {
        return SwitchboardDecimal.phantom();
    }

    static get bcs() {
        return bcs.struct("SwitchboardDecimal", {
            value: bcs.u128(),
            dec: bcs.u8(),
            neg: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): SwitchboardDecimal {
        return SwitchboardDecimal.reified().new({
            value: decodeFromFields("u128", fields.value),
            dec: decodeFromFields("u8", fields.dec),
            neg: decodeFromFields("bool", fields.neg),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SwitchboardDecimal {
        if (!isSwitchboardDecimal(item.type)) {
            throw new Error("not a SwitchboardDecimal type");
        }

        return SwitchboardDecimal.reified().new({
            value: decodeFromFieldsWithTypes("u128", item.fields.value),
            dec: decodeFromFieldsWithTypes("u8", item.fields.dec),
            neg: decodeFromFieldsWithTypes("bool", item.fields.neg),
        });
    }

    static fromBcs(data: Uint8Array): SwitchboardDecimal {
        return SwitchboardDecimal.fromFields(SwitchboardDecimal.bcs.parse(data));
    }

    toJSONField() {
        return {
            value: this.value.toString(),
            dec: this.dec,
            neg: this.neg,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): SwitchboardDecimal {
        return SwitchboardDecimal.reified().new({
            value: decodeFromJSONField("u128", field.value),
            dec: decodeFromJSONField("u8", field.dec),
            neg: decodeFromJSONField("bool", field.neg),
        });
    }

    static fromJSON(json: Record<string, any>): SwitchboardDecimal {
        if (json.$typeName !== SwitchboardDecimal.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SwitchboardDecimal.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SwitchboardDecimal {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSwitchboardDecimal(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SwitchboardDecimal object`);
        }
        return SwitchboardDecimal.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<SwitchboardDecimal> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SwitchboardDecimal object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSwitchboardDecimal(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SwitchboardDecimal object`);
        }
        return SwitchboardDecimal.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
