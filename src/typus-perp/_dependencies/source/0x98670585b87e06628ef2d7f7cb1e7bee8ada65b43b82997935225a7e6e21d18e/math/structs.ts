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
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== SwitchboardDecimal =============================== */

export function isSwitchboardDecimal(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::math::SwitchboardDecimal`;
}

export interface SwitchboardDecimalFields {
    value: ToField<"u128">;
    dec: ToField<"u8">;
    neg: ToField<"bool">;
}

export type SwitchboardDecimalReified = Reified<SwitchboardDecimal, SwitchboardDecimalFields>;

export class SwitchboardDecimal implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::math::SwitchboardDecimal`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = SwitchboardDecimal.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::math::SwitchboardDecimal`;
    readonly $typeArgs: [];
    readonly $isPhantom = SwitchboardDecimal.$isPhantom;

    readonly value: ToField<"u128">;
    readonly dec: ToField<"u8">;
    readonly neg: ToField<"bool">;

    private constructor(typeArgs: [], fields: SwitchboardDecimalFields) {
        this.$fullTypeName = composeSuiType(SwitchboardDecimal.$typeName, ...typeArgs) as `${typeof PKG_V1}::math::SwitchboardDecimal`;
        this.$typeArgs = typeArgs;

        this.value = fields.value;
        this.dec = fields.dec;
        this.neg = fields.neg;
    }

    static reified(): SwitchboardDecimalReified {
        return {
            typeName: SwitchboardDecimal.$typeName,
            fullTypeName: composeSuiType(SwitchboardDecimal.$typeName, ...[]) as `${typeof PKG_V1}::math::SwitchboardDecimal`,
            typeArgs: [] as [],
            isPhantom: SwitchboardDecimal.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SwitchboardDecimal.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SwitchboardDecimal.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SwitchboardDecimal.fromBcs(data),
            bcs: SwitchboardDecimal.bcs,
            fromJSONField: (field: any) => SwitchboardDecimal.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SwitchboardDecimal.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SwitchboardDecimal.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => SwitchboardDecimal.fromSuiObjectData(content),
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
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
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

    static fromSuiObjectData(data: SuiObjectData): SwitchboardDecimal {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSwitchboardDecimal(data.bcs.type)) {
                throw new Error(`object at is not a SwitchboardDecimal object`);
            }

            return SwitchboardDecimal.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SwitchboardDecimal.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<SwitchboardDecimal> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SwitchboardDecimal object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSwitchboardDecimal(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SwitchboardDecimal object`);
        }

        return SwitchboardDecimal.fromSuiObjectData(res.data);
    }
}
