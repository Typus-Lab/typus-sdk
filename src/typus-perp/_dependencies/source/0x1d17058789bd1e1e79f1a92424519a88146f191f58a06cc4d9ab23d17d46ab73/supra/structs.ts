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
import { PKG_V2 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== SupraPrice =============================== */

export function isSupraPrice(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V2}::supra::SupraPrice`;
}

export interface SupraPriceFields {
    pair: ToField<"u32">;
    price: ToField<"u128">;
    decimal: ToField<"u16">;
    timestamp: ToField<"u128">;
    round: ToField<"u64">;
}

export type SupraPriceReified = Reified<SupraPrice, SupraPriceFields>;

export class SupraPrice implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V2}::supra::SupraPrice`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = SupraPrice.$typeName;
    readonly $fullTypeName: `${typeof PKG_V2}::supra::SupraPrice`;
    readonly $typeArgs: [];
    readonly $isPhantom = SupraPrice.$isPhantom;

    readonly pair: ToField<"u32">;
    readonly price: ToField<"u128">;
    readonly decimal: ToField<"u16">;
    readonly timestamp: ToField<"u128">;
    readonly round: ToField<"u64">;

    private constructor(typeArgs: [], fields: SupraPriceFields) {
        this.$fullTypeName = composeSuiType(SupraPrice.$typeName, ...typeArgs) as `${typeof PKG_V2}::supra::SupraPrice`;
        this.$typeArgs = typeArgs;

        this.pair = fields.pair;
        this.price = fields.price;
        this.decimal = fields.decimal;
        this.timestamp = fields.timestamp;
        this.round = fields.round;
    }

    static reified(): SupraPriceReified {
        return {
            typeName: SupraPrice.$typeName,
            fullTypeName: composeSuiType(SupraPrice.$typeName, ...[]) as `${typeof PKG_V2}::supra::SupraPrice`,
            typeArgs: [] as [],
            isPhantom: SupraPrice.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SupraPrice.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SupraPrice.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SupraPrice.fromBcs(data),
            bcs: SupraPrice.bcs,
            fromJSONField: (field: any) => SupraPrice.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SupraPrice.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SupraPrice.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => SupraPrice.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => SupraPrice.fetch(client, id),
            new: (fields: SupraPriceFields) => {
                return new SupraPrice([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SupraPrice.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SupraPrice>> {
        return phantom(SupraPrice.reified());
    }
    static get p() {
        return SupraPrice.phantom();
    }

    static get bcs() {
        return bcs.struct("SupraPrice", {
            pair: bcs.u32(),
            price: bcs.u128(),
            decimal: bcs.u16(),
            timestamp: bcs.u128(),
            round: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): SupraPrice {
        return SupraPrice.reified().new({
            pair: decodeFromFields("u32", fields.pair),
            price: decodeFromFields("u128", fields.price),
            decimal: decodeFromFields("u16", fields.decimal),
            timestamp: decodeFromFields("u128", fields.timestamp),
            round: decodeFromFields("u64", fields.round),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SupraPrice {
        if (!isSupraPrice(item.type)) {
            throw new Error("not a SupraPrice type");
        }

        return SupraPrice.reified().new({
            pair: decodeFromFieldsWithTypes("u32", item.fields.pair),
            price: decodeFromFieldsWithTypes("u128", item.fields.price),
            decimal: decodeFromFieldsWithTypes("u16", item.fields.decimal),
            timestamp: decodeFromFieldsWithTypes("u128", item.fields.timestamp),
            round: decodeFromFieldsWithTypes("u64", item.fields.round),
        });
    }

    static fromBcs(data: Uint8Array): SupraPrice {
        return SupraPrice.fromFields(SupraPrice.bcs.parse(data));
    }

    toJSONField() {
        return {
            pair: this.pair,
            price: this.price.toString(),
            decimal: this.decimal,
            timestamp: this.timestamp.toString(),
            round: this.round.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): SupraPrice {
        return SupraPrice.reified().new({
            pair: decodeFromJSONField("u32", field.pair),
            price: decodeFromJSONField("u128", field.price),
            decimal: decodeFromJSONField("u16", field.decimal),
            timestamp: decodeFromJSONField("u128", field.timestamp),
            round: decodeFromJSONField("u64", field.round),
        });
    }

    static fromJSON(json: Record<string, any>): SupraPrice {
        if (json.$typeName !== SupraPrice.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SupraPrice.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SupraPrice {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSupraPrice(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SupraPrice object`);
        }
        return SupraPrice.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): SupraPrice {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSupraPrice(data.bcs.type)) {
                throw new Error(`object at is not a SupraPrice object`);
            }

            return SupraPrice.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SupraPrice.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<SupraPrice> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SupraPrice object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSupraPrice(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SupraPrice object`);
        }

        return SupraPrice.fromSuiObjectData(res.data);
    }
}
