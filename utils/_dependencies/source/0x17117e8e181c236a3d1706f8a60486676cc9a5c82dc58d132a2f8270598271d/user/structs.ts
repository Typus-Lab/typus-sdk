import * as reified from "../../../../_framework/reified";
import {
    PhantomReified,
    Reified,
    StructClass,
    ToField,
    ToTypeStr,
    Vector,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    fieldToJSON,
    phantom,
    ToTypeStr as ToPhantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { LinkedTable } from "../../0x2/linked-table/structs";
import { UID } from "../../0x2/object/structs";
import { bcs, fromB64, fromHEX, toHEX } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== AddAccumulatedTgldAmount =============================== */

export function isAddAccumulatedTgldAmount(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d::user::AddAccumulatedTgldAmount";
}

export interface AddAccumulatedTgldAmountFields {
    user: ToField<"address">;
    log: ToField<Vector<"u64">>;
    bcsPadding: ToField<Vector<Vector<"u8">>>;
}

export type AddAccumulatedTgldAmountReified = Reified<AddAccumulatedTgldAmount, AddAccumulatedTgldAmountFields>;

export class AddAccumulatedTgldAmount implements StructClass {
    static readonly $typeName = "0x17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d::user::AddAccumulatedTgldAmount";
    static readonly $numTypeParams = 0;

    readonly $typeName = AddAccumulatedTgldAmount.$typeName;

    readonly $fullTypeName: "0x17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d::user::AddAccumulatedTgldAmount";

    readonly $typeArgs: [];

    readonly user: ToField<"address">;
    readonly log: ToField<Vector<"u64">>;
    readonly bcsPadding: ToField<Vector<Vector<"u8">>>;

    private constructor(typeArgs: [], fields: AddAccumulatedTgldAmountFields) {
        this.$fullTypeName = composeSuiType(
            AddAccumulatedTgldAmount.$typeName,
            ...typeArgs
        ) as "0x17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d::user::AddAccumulatedTgldAmount";
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.log = fields.log;
        this.bcsPadding = fields.bcsPadding;
    }

    static reified(): AddAccumulatedTgldAmountReified {
        return {
            typeName: AddAccumulatedTgldAmount.$typeName,
            fullTypeName: composeSuiType(
                AddAccumulatedTgldAmount.$typeName,
                ...[]
            ) as "0x17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d::user::AddAccumulatedTgldAmount",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AddAccumulatedTgldAmount.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AddAccumulatedTgldAmount.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AddAccumulatedTgldAmount.fromBcs(data),
            bcs: AddAccumulatedTgldAmount.bcs,
            fromJSONField: (field: any) => AddAccumulatedTgldAmount.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AddAccumulatedTgldAmount.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AddAccumulatedTgldAmount.fromSuiParsedData(content),
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
            user: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
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
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
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

    static async fetch(client: SuiClient, id: string): Promise<AddAccumulatedTgldAmount> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AddAccumulatedTgldAmount object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddAccumulatedTgldAmount(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddAccumulatedTgldAmount object`);
        }
        return AddAccumulatedTgldAmount.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== Metadata =============================== */

export function isMetadata(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d::user::Metadata";
}

export interface MetadataFields {
    content: ToField<Vector<"u64">>;
}

export type MetadataReified = Reified<Metadata, MetadataFields>;

export class Metadata implements StructClass {
    static readonly $typeName = "0x17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d::user::Metadata";
    static readonly $numTypeParams = 0;

    readonly $typeName = Metadata.$typeName;

    readonly $fullTypeName: "0x17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d::user::Metadata";

    readonly $typeArgs: [];

    readonly content: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: MetadataFields) {
        this.$fullTypeName = composeSuiType(
            Metadata.$typeName,
            ...typeArgs
        ) as "0x17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d::user::Metadata";
        this.$typeArgs = typeArgs;

        this.content = fields.content;
    }

    static reified(): MetadataReified {
        return {
            typeName: Metadata.$typeName,
            fullTypeName: composeSuiType(
                Metadata.$typeName,
                ...[]
            ) as "0x17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d::user::Metadata",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Metadata.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Metadata.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Metadata.fromBcs(data),
            bcs: Metadata.bcs,
            fromJSONField: (field: any) => Metadata.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Metadata.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Metadata.fromSuiParsedData(content),
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
        return Metadata.reified().new({ content: decodeFromFields(reified.vector("u64"), fields.content) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Metadata {
        if (!isMetadata(item.type)) {
            throw new Error("not a Metadata type");
        }

        return Metadata.reified().new({ content: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.content) });
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
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): Metadata {
        return Metadata.reified().new({ content: decodeFromJSONField(reified.vector("u64"), field.content) });
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

    static async fetch(client: SuiClient, id: string): Promise<Metadata> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Metadata object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMetadata(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Metadata object`);
        }
        return Metadata.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== TypusUserRegistry =============================== */

export function isTypusUserRegistry(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d::user::TypusUserRegistry";
}

export interface TypusUserRegistryFields {
    id: ToField<UID>;
    metadata: ToField<LinkedTable<"address", ToPhantom<Metadata>>>;
}

export type TypusUserRegistryReified = Reified<TypusUserRegistry, TypusUserRegistryFields>;

export class TypusUserRegistry implements StructClass {
    static readonly $typeName = "0x17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d::user::TypusUserRegistry";
    static readonly $numTypeParams = 0;

    readonly $typeName = TypusUserRegistry.$typeName;

    readonly $fullTypeName: "0x17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d::user::TypusUserRegistry";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly metadata: ToField<LinkedTable<"address", ToPhantom<Metadata>>>;

    private constructor(typeArgs: [], fields: TypusUserRegistryFields) {
        this.$fullTypeName = composeSuiType(
            TypusUserRegistry.$typeName,
            ...typeArgs
        ) as "0x17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d::user::TypusUserRegistry";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.metadata = fields.metadata;
    }

    static reified(): TypusUserRegistryReified {
        return {
            typeName: TypusUserRegistry.$typeName,
            fullTypeName: composeSuiType(
                TypusUserRegistry.$typeName,
                ...[]
            ) as "0x17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d::user::TypusUserRegistry",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TypusUserRegistry.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TypusUserRegistry.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TypusUserRegistry.fromBcs(data),
            bcs: TypusUserRegistry.bcs,
            fromJSONField: (field: any) => TypusUserRegistry.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TypusUserRegistry.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TypusUserRegistry.fromSuiParsedData(content),
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
                bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) })
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
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
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

    static async fetch(client: SuiClient, id: string): Promise<TypusUserRegistry> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TypusUserRegistry object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTypusUserRegistry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TypusUserRegistry object`);
        }
        return TypusUserRegistry.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
