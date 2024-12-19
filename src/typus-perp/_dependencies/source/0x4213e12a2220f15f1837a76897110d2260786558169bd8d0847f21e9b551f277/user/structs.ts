import * as reified from "../../../../_framework/reified";
import {
    PhantomReified,
    Reified,
    StructClass,
    ToField,
    ToTypeStr,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    fieldToJSON,
    phantom,
    ToTypeStr as ToPhantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { Vector } from "../../../../_framework/vector";
import { LinkedTable } from "../../0x2/linked-table/structs";
import { UID } from "../../0x2/object/structs";
import { PKG_V1, PKG_V5 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== AddAccumulatedTgldAmount =============================== */

export function isAddAccumulatedTgldAmount(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::user::AddAccumulatedTgldAmount`;
}

export interface AddAccumulatedTgldAmountFields {
    user: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type AddAccumulatedTgldAmountReified = Reified<AddAccumulatedTgldAmount, AddAccumulatedTgldAmountFields>;

export class AddAccumulatedTgldAmount implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::user::AddAccumulatedTgldAmount`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = AddAccumulatedTgldAmount.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::user::AddAccumulatedTgldAmount`;
    readonly $typeArgs: [];
    readonly $isPhantom = AddAccumulatedTgldAmount.$isPhantom;

    readonly user: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: AddAccumulatedTgldAmountFields) {
        this.$fullTypeName = composeSuiType(
            AddAccumulatedTgldAmount.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::user::AddAccumulatedTgldAmount`;
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): AddAccumulatedTgldAmountReified {
        return {
            typeName: AddAccumulatedTgldAmount.$typeName,
            fullTypeName: composeSuiType(AddAccumulatedTgldAmount.$typeName, ...[]) as `${typeof PKG_V1}::user::AddAccumulatedTgldAmount`,
            typeArgs: [] as [],
            isPhantom: AddAccumulatedTgldAmount.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AddAccumulatedTgldAmount.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AddAccumulatedTgldAmount.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AddAccumulatedTgldAmount.fromBcs(data),
            bcs: AddAccumulatedTgldAmount.bcs,
            fromJSONField: (field: any) => AddAccumulatedTgldAmount.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AddAccumulatedTgldAmount.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AddAccumulatedTgldAmount.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => AddAccumulatedTgldAmount.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => AddAccumulatedTgldAmount.fetch(client, id),
            new: (fields: AddAccumulatedTgldAmountFields) => {
                return new AddAccumulatedTgldAmount([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AddAccumulatedTgldAmount.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AddAccumulatedTgldAmount>> {
        return phantom(AddAccumulatedTgldAmount.reified());
    }
    static get p() {
        return AddAccumulatedTgldAmount.phantom();
    }

    static get bcs() {
        return bcs.struct("AddAccumulatedTgldAmount", {
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): AddAccumulatedTgldAmount {
        return AddAccumulatedTgldAmount.reified().new({
            user: decodeFromFields("address", fields.user),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AddAccumulatedTgldAmount {
        if (!isAddAccumulatedTgldAmount(item.type)) {
            throw new Error("not a AddAccumulatedTgldAmount type");
        }

        return AddAccumulatedTgldAmount.reified().new({
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): AddAccumulatedTgldAmount {
        return AddAccumulatedTgldAmount.fromFields(AddAccumulatedTgldAmount.bcs.parse(data));
    }

    toJSONField() {
        return {
            user: this.user,
            log: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.log),
            bcsPadding: fieldToJSON<Vector<Vector<"u8">>>(`vector<vector<u8>>`, this.bcsPadding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): AddAccumulatedTgldAmount {
        return AddAccumulatedTgldAmount.reified().new({
            user: decodeFromJSONField("address", field.user),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): AddAccumulatedTgldAmount {
        if (json.$typeName !== AddAccumulatedTgldAmount.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AddAccumulatedTgldAmount.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AddAccumulatedTgldAmount {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddAccumulatedTgldAmount(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AddAccumulatedTgldAmount object`);
        }
        return AddAccumulatedTgldAmount.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): AddAccumulatedTgldAmount {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAddAccumulatedTgldAmount(data.bcs.type)) {
                throw new Error(`object at is not a AddAccumulatedTgldAmount object`);
            }

            return AddAccumulatedTgldAmount.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AddAccumulatedTgldAmount.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<AddAccumulatedTgldAmount> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AddAccumulatedTgldAmount object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddAccumulatedTgldAmount(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddAccumulatedTgldAmount object`);
        }

        return AddAccumulatedTgldAmount.fromSuiObjectData(res.data);
    }
}

/* ============================== AddTailsExpAmount =============================== */

export function isAddTailsExpAmount(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V5}::user::AddTailsExpAmount`;
}

export interface AddTailsExpAmountFields {
    user: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type AddTailsExpAmountReified = Reified<AddTailsExpAmount, AddTailsExpAmountFields>;

export class AddTailsExpAmount implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V5}::user::AddTailsExpAmount`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = AddTailsExpAmount.$typeName;
    readonly $fullTypeName: `${typeof PKG_V5}::user::AddTailsExpAmount`;
    readonly $typeArgs: [];
    readonly $isPhantom = AddTailsExpAmount.$isPhantom;

    readonly user: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: AddTailsExpAmountFields) {
        this.$fullTypeName = composeSuiType(AddTailsExpAmount.$typeName, ...typeArgs) as `${typeof PKG_V5}::user::AddTailsExpAmount`;
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): AddTailsExpAmountReified {
        return {
            typeName: AddTailsExpAmount.$typeName,
            fullTypeName: composeSuiType(AddTailsExpAmount.$typeName, ...[]) as `${typeof PKG_V5}::user::AddTailsExpAmount`,
            typeArgs: [] as [],
            isPhantom: AddTailsExpAmount.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AddTailsExpAmount.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AddTailsExpAmount.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AddTailsExpAmount.fromBcs(data),
            bcs: AddTailsExpAmount.bcs,
            fromJSONField: (field: any) => AddTailsExpAmount.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AddTailsExpAmount.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AddTailsExpAmount.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => AddTailsExpAmount.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => AddTailsExpAmount.fetch(client, id),
            new: (fields: AddTailsExpAmountFields) => {
                return new AddTailsExpAmount([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AddTailsExpAmount.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AddTailsExpAmount>> {
        return phantom(AddTailsExpAmount.reified());
    }
    static get p() {
        return AddTailsExpAmount.phantom();
    }

    static get bcs() {
        return bcs.struct("AddTailsExpAmount", {
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): AddTailsExpAmount {
        return AddTailsExpAmount.reified().new({
            user: decodeFromFields("address", fields.user),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AddTailsExpAmount {
        if (!isAddTailsExpAmount(item.type)) {
            throw new Error("not a AddTailsExpAmount type");
        }

        return AddTailsExpAmount.reified().new({
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): AddTailsExpAmount {
        return AddTailsExpAmount.fromFields(AddTailsExpAmount.bcs.parse(data));
    }

    toJSONField() {
        return {
            user: this.user,
            log: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.log),
            bcsPadding: fieldToJSON<Vector<Vector<"u8">>>(`vector<vector<u8>>`, this.bcsPadding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): AddTailsExpAmount {
        return AddTailsExpAmount.reified().new({
            user: decodeFromJSONField("address", field.user),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): AddTailsExpAmount {
        if (json.$typeName !== AddTailsExpAmount.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AddTailsExpAmount.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AddTailsExpAmount {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddTailsExpAmount(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AddTailsExpAmount object`);
        }
        return AddTailsExpAmount.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): AddTailsExpAmount {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAddTailsExpAmount(data.bcs.type)) {
                throw new Error(`object at is not a AddTailsExpAmount object`);
            }

            return AddTailsExpAmount.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AddTailsExpAmount.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<AddTailsExpAmount> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AddTailsExpAmount object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddTailsExpAmount(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddTailsExpAmount object`);
        }

        return AddTailsExpAmount.fromSuiObjectData(res.data);
    }
}

/* ============================== Metadata =============================== */

export function isMetadata(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::user::Metadata`;
}

export interface MetadataFields {
    content: ToField<Vector<"u64">>;
}

export type MetadataReified = Reified<Metadata, MetadataFields>;

export class Metadata implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::user::Metadata`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Metadata.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::user::Metadata`;
    readonly $typeArgs: [];
    readonly $isPhantom = Metadata.$isPhantom;

    readonly content: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: MetadataFields) {
        this.$fullTypeName = composeSuiType(Metadata.$typeName, ...typeArgs) as `${typeof PKG_V1}::user::Metadata`;
        this.$typeArgs = typeArgs;

        this.content = fields.content;
    }

    static reified(): MetadataReified {
        return {
            typeName: Metadata.$typeName,
            fullTypeName: composeSuiType(Metadata.$typeName, ...[]) as `${typeof PKG_V1}::user::Metadata`,
            typeArgs: [] as [],
            isPhantom: Metadata.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Metadata.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Metadata.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Metadata.fromBcs(data),
            bcs: Metadata.bcs,
            fromJSONField: (field: any) => Metadata.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Metadata.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Metadata.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Metadata.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Metadata.fetch(client, id),
            new: (fields: MetadataFields) => {
                return new Metadata([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Metadata.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Metadata>> {
        return phantom(Metadata.reified());
    }
    static get p() {
        return Metadata.phantom();
    }

    static get bcs() {
        return bcs.struct("Metadata", {
            content: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): Metadata {
        return Metadata.reified().new({
            content: decodeFromFields(reified.vector("u64"), fields.content),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Metadata {
        if (!isMetadata(item.type)) {
            throw new Error("not a Metadata type");
        }

        return Metadata.reified().new({
            content: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.content),
        });
    }

    static fromBcs(data: Uint8Array): Metadata {
        return Metadata.fromFields(Metadata.bcs.parse(data));
    }

    toJSONField() {
        return {
            content: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.content),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Metadata {
        return Metadata.reified().new({
            content: decodeFromJSONField(reified.vector("u64"), field.content),
        });
    }

    static fromJSON(json: Record<string, any>): Metadata {
        if (json.$typeName !== Metadata.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Metadata.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Metadata {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMetadata(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Metadata object`);
        }
        return Metadata.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Metadata {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMetadata(data.bcs.type)) {
                throw new Error(`object at is not a Metadata object`);
            }

            return Metadata.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Metadata.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Metadata> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Metadata object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMetadata(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Metadata object`);
        }

        return Metadata.fromSuiObjectData(res.data);
    }
}

/* ============================== RemoveTailsExpAmount =============================== */

export function isRemoveTailsExpAmount(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V5}::user::RemoveTailsExpAmount`;
}

export interface RemoveTailsExpAmountFields {
    user: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type RemoveTailsExpAmountReified = Reified<RemoveTailsExpAmount, RemoveTailsExpAmountFields>;

export class RemoveTailsExpAmount implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V5}::user::RemoveTailsExpAmount`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = RemoveTailsExpAmount.$typeName;
    readonly $fullTypeName: `${typeof PKG_V5}::user::RemoveTailsExpAmount`;
    readonly $typeArgs: [];
    readonly $isPhantom = RemoveTailsExpAmount.$isPhantom;

    readonly user: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: RemoveTailsExpAmountFields) {
        this.$fullTypeName = composeSuiType(RemoveTailsExpAmount.$typeName, ...typeArgs) as `${typeof PKG_V5}::user::RemoveTailsExpAmount`;
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): RemoveTailsExpAmountReified {
        return {
            typeName: RemoveTailsExpAmount.$typeName,
            fullTypeName: composeSuiType(RemoveTailsExpAmount.$typeName, ...[]) as `${typeof PKG_V5}::user::RemoveTailsExpAmount`,
            typeArgs: [] as [],
            isPhantom: RemoveTailsExpAmount.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RemoveTailsExpAmount.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RemoveTailsExpAmount.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RemoveTailsExpAmount.fromBcs(data),
            bcs: RemoveTailsExpAmount.bcs,
            fromJSONField: (field: any) => RemoveTailsExpAmount.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RemoveTailsExpAmount.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RemoveTailsExpAmount.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => RemoveTailsExpAmount.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => RemoveTailsExpAmount.fetch(client, id),
            new: (fields: RemoveTailsExpAmountFields) => {
                return new RemoveTailsExpAmount([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RemoveTailsExpAmount.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RemoveTailsExpAmount>> {
        return phantom(RemoveTailsExpAmount.reified());
    }
    static get p() {
        return RemoveTailsExpAmount.phantom();
    }

    static get bcs() {
        return bcs.struct("RemoveTailsExpAmount", {
            user: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            log: bcs.vector(bcs.u64()),
            bcs_padding: bcs.vector(bcs.vector(bcs.u8())),
        });
    }

    static fromFields(fields: Record<string, any>): RemoveTailsExpAmount {
        return RemoveTailsExpAmount.reified().new({
            user: decodeFromFields("address", fields.user),
            log: decodeFromFields(reified.vector("u64"), fields.log),
            bcsPadding: decodeFromFields(reified.vector(reified.vector("u8")), fields.bcs_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveTailsExpAmount {
        if (!isRemoveTailsExpAmount(item.type)) {
            throw new Error("not a RemoveTailsExpAmount type");
        }

        return RemoveTailsExpAmount.reified().new({
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            log: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.log),
            bcsPadding: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.bcs_padding),
        });
    }

    static fromBcs(data: Uint8Array): RemoveTailsExpAmount {
        return RemoveTailsExpAmount.fromFields(RemoveTailsExpAmount.bcs.parse(data));
    }

    toJSONField() {
        return {
            user: this.user,
            log: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.log),
            bcsPadding: fieldToJSON<Vector<Vector<"u8">>>(`vector<vector<u8>>`, this.bcsPadding),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): RemoveTailsExpAmount {
        return RemoveTailsExpAmount.reified().new({
            user: decodeFromJSONField("address", field.user),
            log: decodeFromJSONField(reified.vector("u64"), field.log),
            bcsPadding: decodeFromJSONField(reified.vector(reified.vector("u8")), field.bcsPadding),
        });
    }

    static fromJSON(json: Record<string, any>): RemoveTailsExpAmount {
        if (json.$typeName !== RemoveTailsExpAmount.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RemoveTailsExpAmount.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RemoveTailsExpAmount {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemoveTailsExpAmount(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RemoveTailsExpAmount object`);
        }
        return RemoveTailsExpAmount.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): RemoveTailsExpAmount {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRemoveTailsExpAmount(data.bcs.type)) {
                throw new Error(`object at is not a RemoveTailsExpAmount object`);
            }

            return RemoveTailsExpAmount.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RemoveTailsExpAmount.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<RemoveTailsExpAmount> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RemoveTailsExpAmount object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemoveTailsExpAmount(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemoveTailsExpAmount object`);
        }

        return RemoveTailsExpAmount.fromSuiObjectData(res.data);
    }
}

/* ============================== TypusUserRegistry =============================== */

export function isTypusUserRegistry(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::user::TypusUserRegistry`;
}

export interface TypusUserRegistryFields {
    id: ToField<UID>;
    metadata: ToField<LinkedTable<"address", ToPhantom<Metadata>>>;
}

export type TypusUserRegistryReified = Reified<TypusUserRegistry, TypusUserRegistryFields>;

export class TypusUserRegistry implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::user::TypusUserRegistry`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TypusUserRegistry.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::user::TypusUserRegistry`;
    readonly $typeArgs: [];
    readonly $isPhantom = TypusUserRegistry.$isPhantom;

    readonly id: ToField<UID>;
    readonly metadata: ToField<LinkedTable<"address", ToPhantom<Metadata>>>;

    private constructor(typeArgs: [], fields: TypusUserRegistryFields) {
        this.$fullTypeName = composeSuiType(TypusUserRegistry.$typeName, ...typeArgs) as `${typeof PKG_V1}::user::TypusUserRegistry`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.metadata = fields.metadata;
    }

    static reified(): TypusUserRegistryReified {
        return {
            typeName: TypusUserRegistry.$typeName,
            fullTypeName: composeSuiType(TypusUserRegistry.$typeName, ...[]) as `${typeof PKG_V1}::user::TypusUserRegistry`,
            typeArgs: [] as [],
            isPhantom: TypusUserRegistry.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TypusUserRegistry.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TypusUserRegistry.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TypusUserRegistry.fromBcs(data),
            bcs: TypusUserRegistry.bcs,
            fromJSONField: (field: any) => TypusUserRegistry.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TypusUserRegistry.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TypusUserRegistry.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TypusUserRegistry.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TypusUserRegistry.fetch(client, id),
            new: (fields: TypusUserRegistryFields) => {
                return new TypusUserRegistry([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TypusUserRegistry.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TypusUserRegistry>> {
        return phantom(TypusUserRegistry.reified());
    }
    static get p() {
        return TypusUserRegistry.phantom();
    }

    static get bcs() {
        return bcs.struct("TypusUserRegistry", {
            id: UID.bcs,
            metadata: LinkedTable.bcs(
                bcs.bytes(32).transform({
                    input: (val: string) => fromHEX(val),
                    output: (val: Uint8Array) => toHEX(val),
                })
            ),
        });
    }

    static fromFields(fields: Record<string, any>): TypusUserRegistry {
        return TypusUserRegistry.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            metadata: decodeFromFields(LinkedTable.reified("address", reified.phantom(Metadata.reified())), fields.metadata),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TypusUserRegistry {
        if (!isTypusUserRegistry(item.type)) {
            throw new Error("not a TypusUserRegistry type");
        }

        return TypusUserRegistry.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            metadata: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(Metadata.reified())), item.fields.metadata),
        });
    }

    static fromBcs(data: Uint8Array): TypusUserRegistry {
        return TypusUserRegistry.fromFields(TypusUserRegistry.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            metadata: this.metadata.toJSONField(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): TypusUserRegistry {
        return TypusUserRegistry.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            metadata: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(Metadata.reified())), field.metadata),
        });
    }

    static fromJSON(json: Record<string, any>): TypusUserRegistry {
        if (json.$typeName !== TypusUserRegistry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TypusUserRegistry.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TypusUserRegistry {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTypusUserRegistry(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TypusUserRegistry object`);
        }
        return TypusUserRegistry.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TypusUserRegistry {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTypusUserRegistry(data.bcs.type)) {
                throw new Error(`object at is not a TypusUserRegistry object`);
            }

            return TypusUserRegistry.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TypusUserRegistry.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TypusUserRegistry> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TypusUserRegistry object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTypusUserRegistry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TypusUserRegistry object`);
        }

        return TypusUserRegistry.fromSuiObjectData(res.data);
    }
}
