import { ID } from "../../_dependencies/source/0x2/object/structs";
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
} from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../_framework/util";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== PythPrice =============================== */

export function isPythPrice(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::oracle::PythPrice`;
}

export interface PythPriceFields {
    price: ToField<"u64">;
    conf: ToField<"u64">;
    timestamp: ToField<"u64">;
    decimal: ToField<"u64">;
}

export type PythPriceReified = Reified<PythPrice, PythPriceFields>;

export class PythPrice implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::oracle::PythPrice`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = PythPrice.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::oracle::PythPrice`;
    readonly $typeArgs: [];
    readonly $isPhantom = PythPrice.$isPhantom;

    readonly price: ToField<"u64">;
    readonly conf: ToField<"u64">;
    readonly timestamp: ToField<"u64">;
    readonly decimal: ToField<"u64">;

    private constructor(typeArgs: [], fields: PythPriceFields) {
        this.$fullTypeName = composeSuiType(PythPrice.$typeName, ...typeArgs) as `${typeof PKG_V1}::oracle::PythPrice`;
        this.$typeArgs = typeArgs;

        this.price = fields.price;
        this.conf = fields.conf;
        this.timestamp = fields.timestamp;
        this.decimal = fields.decimal;
    }

    static reified(): PythPriceReified {
        return {
            typeName: PythPrice.$typeName,
            fullTypeName: composeSuiType(PythPrice.$typeName, ...[]) as `${typeof PKG_V1}::oracle::PythPrice`,
            typeArgs: [] as [],
            isPhantom: PythPrice.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => PythPrice.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => PythPrice.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => PythPrice.fromBcs(data),
            bcs: PythPrice.bcs,
            fromJSONField: (field: any) => PythPrice.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => PythPrice.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => PythPrice.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => PythPrice.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => PythPrice.fetch(client, id),
            new: (fields: PythPriceFields) => {
                return new PythPrice([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return PythPrice.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<PythPrice>> {
        return phantom(PythPrice.reified());
    }
    static get p() {
        return PythPrice.phantom();
    }

    static get bcs() {
        return bcs.struct("PythPrice", {
            price: bcs.u64(),
            conf: bcs.u64(),
            timestamp: bcs.u64(),
            decimal: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): PythPrice {
        return PythPrice.reified().new({
            price: decodeFromFields("u64", fields.price),
            conf: decodeFromFields("u64", fields.conf),
            timestamp: decodeFromFields("u64", fields.timestamp),
            decimal: decodeFromFields("u64", fields.decimal),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): PythPrice {
        if (!isPythPrice(item.type)) {
            throw new Error("not a PythPrice type");
        }

        return PythPrice.reified().new({
            price: decodeFromFieldsWithTypes("u64", item.fields.price),
            conf: decodeFromFieldsWithTypes("u64", item.fields.conf),
            timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp),
            decimal: decodeFromFieldsWithTypes("u64", item.fields.decimal),
        });
    }

    static fromBcs(data: Uint8Array): PythPrice {
        return PythPrice.fromFields(PythPrice.bcs.parse(data));
    }

    toJSONField() {
        return {
            price: this.price.toString(),
            conf: this.conf.toString(),
            timestamp: this.timestamp.toString(),
            decimal: this.decimal.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): PythPrice {
        return PythPrice.reified().new({
            price: decodeFromJSONField("u64", field.price),
            conf: decodeFromJSONField("u64", field.conf),
            timestamp: decodeFromJSONField("u64", field.timestamp),
            decimal: decodeFromJSONField("u64", field.decimal),
        });
    }

    static fromJSON(json: Record<string, any>): PythPrice {
        if (json.$typeName !== PythPrice.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return PythPrice.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): PythPrice {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPythPrice(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PythPrice object`);
        }
        return PythPrice.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): PythPrice {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPythPrice(data.bcs.type)) {
                throw new Error(`object at is not a PythPrice object`);
            }

            return PythPrice.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PythPrice.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<PythPrice> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching PythPrice object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPythPrice(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PythPrice object`);
        }

        return PythPrice.fromSuiObjectData(res.data);
    }
}

/* ============================== PythPriceInfoObject =============================== */

export function isPythPriceInfoObject(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::oracle::PythPriceInfoObject`;
}

export interface PythPriceInfoObjectFields {
    id: ToField<ID>;
}

export type PythPriceInfoObjectReified = Reified<PythPriceInfoObject, PythPriceInfoObjectFields>;

export class PythPriceInfoObject implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::oracle::PythPriceInfoObject`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = PythPriceInfoObject.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::oracle::PythPriceInfoObject`;
    readonly $typeArgs: [];
    readonly $isPhantom = PythPriceInfoObject.$isPhantom;

    readonly id: ToField<ID>;

    private constructor(typeArgs: [], fields: PythPriceInfoObjectFields) {
        this.$fullTypeName = composeSuiType(PythPriceInfoObject.$typeName, ...typeArgs) as `${typeof PKG_V1}::oracle::PythPriceInfoObject`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): PythPriceInfoObjectReified {
        return {
            typeName: PythPriceInfoObject.$typeName,
            fullTypeName: composeSuiType(PythPriceInfoObject.$typeName, ...[]) as `${typeof PKG_V1}::oracle::PythPriceInfoObject`,
            typeArgs: [] as [],
            isPhantom: PythPriceInfoObject.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => PythPriceInfoObject.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => PythPriceInfoObject.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => PythPriceInfoObject.fromBcs(data),
            bcs: PythPriceInfoObject.bcs,
            fromJSONField: (field: any) => PythPriceInfoObject.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => PythPriceInfoObject.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => PythPriceInfoObject.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => PythPriceInfoObject.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => PythPriceInfoObject.fetch(client, id),
            new: (fields: PythPriceInfoObjectFields) => {
                return new PythPriceInfoObject([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return PythPriceInfoObject.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<PythPriceInfoObject>> {
        return phantom(PythPriceInfoObject.reified());
    }
    static get p() {
        return PythPriceInfoObject.phantom();
    }

    static get bcs() {
        return bcs.struct("PythPriceInfoObject", {
            id: ID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): PythPriceInfoObject {
        return PythPriceInfoObject.reified().new({
            id: decodeFromFields(ID.reified(), fields.id),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): PythPriceInfoObject {
        if (!isPythPriceInfoObject(item.type)) {
            throw new Error("not a PythPriceInfoObject type");
        }

        return PythPriceInfoObject.reified().new({
            id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
        });
    }

    static fromBcs(data: Uint8Array): PythPriceInfoObject {
        return PythPriceInfoObject.fromFields(PythPriceInfoObject.bcs.parse(data));
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

    static fromJSONField(field: any): PythPriceInfoObject {
        return PythPriceInfoObject.reified().new({
            id: decodeFromJSONField(ID.reified(), field.id),
        });
    }

    static fromJSON(json: Record<string, any>): PythPriceInfoObject {
        if (json.$typeName !== PythPriceInfoObject.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return PythPriceInfoObject.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): PythPriceInfoObject {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPythPriceInfoObject(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PythPriceInfoObject object`);
        }
        return PythPriceInfoObject.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): PythPriceInfoObject {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPythPriceInfoObject(data.bcs.type)) {
                throw new Error(`object at is not a PythPriceInfoObject object`);
            }

            return PythPriceInfoObject.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PythPriceInfoObject.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<PythPriceInfoObject> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching PythPriceInfoObject object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPythPriceInfoObject(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PythPriceInfoObject object`);
        }

        return PythPriceInfoObject.fromSuiObjectData(res.data);
    }
}
