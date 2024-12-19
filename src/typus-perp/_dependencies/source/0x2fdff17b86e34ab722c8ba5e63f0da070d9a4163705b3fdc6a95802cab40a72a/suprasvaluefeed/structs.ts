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
import { UID } from "../../0x2/object/structs";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== Price =============================== */

export function isPrice(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::SupraSValueFeed::Price`;
}

export interface PriceFields {
    pair: ToField<"u32">;
    value: ToField<"u128">;
    decimal: ToField<"u16">;
    timestamp: ToField<"u128">;
    round: ToField<"u64">;
}

export type PriceReified = Reified<Price, PriceFields>;

export class Price implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::SupraSValueFeed::Price`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Price.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::SupraSValueFeed::Price`;
    readonly $typeArgs: [];
    readonly $isPhantom = Price.$isPhantom;

    readonly pair: ToField<"u32">;
    readonly value: ToField<"u128">;
    readonly decimal: ToField<"u16">;
    readonly timestamp: ToField<"u128">;
    readonly round: ToField<"u64">;

    private constructor(typeArgs: [], fields: PriceFields) {
        this.$fullTypeName = composeSuiType(Price.$typeName, ...typeArgs) as `${typeof PKG_V1}::SupraSValueFeed::Price`;
        this.$typeArgs = typeArgs;

        this.pair = fields.pair;
        this.value = fields.value;
        this.decimal = fields.decimal;
        this.timestamp = fields.timestamp;
        this.round = fields.round;
    }

    static reified(): PriceReified {
        return {
            typeName: Price.$typeName,
            fullTypeName: composeSuiType(Price.$typeName, ...[]) as `${typeof PKG_V1}::SupraSValueFeed::Price`,
            typeArgs: [] as [],
            isPhantom: Price.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Price.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Price.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Price.fromBcs(data),
            bcs: Price.bcs,
            fromJSONField: (field: any) => Price.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Price.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Price.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Price.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Price.fetch(client, id),
            new: (fields: PriceFields) => {
                return new Price([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Price.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Price>> {
        return phantom(Price.reified());
    }
    static get p() {
        return Price.phantom();
    }

    static get bcs() {
        return bcs.struct("Price", {
            pair: bcs.u32(),
            value: bcs.u128(),
            decimal: bcs.u16(),
            timestamp: bcs.u128(),
            round: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Price {
        return Price.reified().new({
            pair: decodeFromFields("u32", fields.pair),
            value: decodeFromFields("u128", fields.value),
            decimal: decodeFromFields("u16", fields.decimal),
            timestamp: decodeFromFields("u128", fields.timestamp),
            round: decodeFromFields("u64", fields.round),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Price {
        if (!isPrice(item.type)) {
            throw new Error("not a Price type");
        }

        return Price.reified().new({
            pair: decodeFromFieldsWithTypes("u32", item.fields.pair),
            value: decodeFromFieldsWithTypes("u128", item.fields.value),
            decimal: decodeFromFieldsWithTypes("u16", item.fields.decimal),
            timestamp: decodeFromFieldsWithTypes("u128", item.fields.timestamp),
            round: decodeFromFieldsWithTypes("u64", item.fields.round),
        });
    }

    static fromBcs(data: Uint8Array): Price {
        return Price.fromFields(Price.bcs.parse(data));
    }

    toJSONField() {
        return {
            pair: this.pair,
            value: this.value.toString(),
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

    static fromJSONField(field: any): Price {
        return Price.reified().new({
            pair: decodeFromJSONField("u32", field.pair),
            value: decodeFromJSONField("u128", field.value),
            decimal: decodeFromJSONField("u16", field.decimal),
            timestamp: decodeFromJSONField("u128", field.timestamp),
            round: decodeFromJSONField("u64", field.round),
        });
    }

    static fromJSON(json: Record<string, any>): Price {
        if (json.$typeName !== Price.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Price.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Price {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPrice(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Price object`);
        }
        return Price.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Price {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPrice(data.bcs.type)) {
                throw new Error(`object at is not a Price object`);
            }

            return Price.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Price.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Price> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Price object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPrice(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Price object`);
        }

        return Price.fromSuiObjectData(res.data);
    }
}

/* ============================== OracleHolder =============================== */

export function isOracleHolder(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::SupraSValueFeed::OracleHolder`;
}

export interface OracleHolderFields {
    id: ToField<UID>;
}

export type OracleHolderReified = Reified<OracleHolder, OracleHolderFields>;

export class OracleHolder implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::SupraSValueFeed::OracleHolder`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = OracleHolder.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::SupraSValueFeed::OracleHolder`;
    readonly $typeArgs: [];
    readonly $isPhantom = OracleHolder.$isPhantom;

    readonly id: ToField<UID>;

    private constructor(typeArgs: [], fields: OracleHolderFields) {
        this.$fullTypeName = composeSuiType(OracleHolder.$typeName, ...typeArgs) as `${typeof PKG_V1}::SupraSValueFeed::OracleHolder`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): OracleHolderReified {
        return {
            typeName: OracleHolder.$typeName,
            fullTypeName: composeSuiType(OracleHolder.$typeName, ...[]) as `${typeof PKG_V1}::SupraSValueFeed::OracleHolder`,
            typeArgs: [] as [],
            isPhantom: OracleHolder.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => OracleHolder.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => OracleHolder.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => OracleHolder.fromBcs(data),
            bcs: OracleHolder.bcs,
            fromJSONField: (field: any) => OracleHolder.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => OracleHolder.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => OracleHolder.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => OracleHolder.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => OracleHolder.fetch(client, id),
            new: (fields: OracleHolderFields) => {
                return new OracleHolder([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return OracleHolder.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<OracleHolder>> {
        return phantom(OracleHolder.reified());
    }
    static get p() {
        return OracleHolder.phantom();
    }

    static get bcs() {
        return bcs.struct("OracleHolder", {
            id: UID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): OracleHolder {
        return OracleHolder.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): OracleHolder {
        if (!isOracleHolder(item.type)) {
            throw new Error("not a OracleHolder type");
        }

        return OracleHolder.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
        });
    }

    static fromBcs(data: Uint8Array): OracleHolder {
        return OracleHolder.fromFields(OracleHolder.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): OracleHolder {
        return OracleHolder.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
        });
    }

    static fromJSON(json: Record<string, any>): OracleHolder {
        if (json.$typeName !== OracleHolder.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return OracleHolder.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): OracleHolder {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isOracleHolder(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a OracleHolder object`);
        }
        return OracleHolder.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): OracleHolder {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isOracleHolder(data.bcs.type)) {
                throw new Error(`object at is not a OracleHolder object`);
            }

            return OracleHolder.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return OracleHolder.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<OracleHolder> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching OracleHolder object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isOracleHolder(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a OracleHolder object`);
        }

        return OracleHolder.fromSuiObjectData(res.data);
    }
}
