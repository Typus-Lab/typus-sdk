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
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== Version =============================== */

export function isVersion(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::version::Version";
}

export interface VersionFields {
    id: ToField<UID>;
    value: ToField<"u64">;
}

export type VersionReified = Reified<Version, VersionFields>;

export class Version implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::version::Version";
    static readonly $numTypeParams = 0;

    readonly $typeName = Version.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::version::Version";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly value: ToField<"u64">;

    private constructor(typeArgs: [], fields: VersionFields) {
        this.$fullTypeName = composeSuiType(
            Version.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::version::Version";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.value = fields.value;
    }

    static reified(): VersionReified {
        return {
            typeName: Version.$typeName,
            fullTypeName: composeSuiType(
                Version.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::version::Version",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Version.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Version.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Version.fromBcs(data),
            bcs: Version.bcs,
            fromJSONField: (field: any) => Version.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Version.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Version.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => Version.fetch(client, id),
            new: (fields: VersionFields) => {
                return new Version([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Version.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Version>> {
        return phantom(Version.reified());
    }
    static get p() {
        return Version.phantom();
    }

    static get bcs() {
        return bcs.struct("Version", {
            id: UID.bcs,
            value: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Version {
        return Version.reified().new({ id: decodeFromFields(UID.reified(), fields.id), value: decodeFromFields("u64", fields.value) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Version {
        if (!isVersion(item.type)) {
            throw new Error("not a Version type");
        }

        return Version.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            value: decodeFromFieldsWithTypes("u64", item.fields.value),
        });
    }

    static fromBcs(data: Uint8Array): Version {
        return Version.fromFields(Version.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            value: this.value.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): Version {
        return Version.reified().new({ id: decodeFromJSONField(UID.reified(), field.id), value: decodeFromJSONField("u64", field.value) });
    }

    static fromJSON(json: Record<string, any>): Version {
        if (json.$typeName !== Version.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Version.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Version {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isVersion(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Version object`);
        }
        return Version.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<Version> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Version object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isVersion(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Version object`);
        }
        return Version.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== VersionCap =============================== */

export function isVersionCap(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::version::VersionCap";
}

export interface VersionCapFields {
    id: ToField<UID>;
}

export type VersionCapReified = Reified<VersionCap, VersionCapFields>;

export class VersionCap implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::version::VersionCap";
    static readonly $numTypeParams = 0;

    readonly $typeName = VersionCap.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::version::VersionCap";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;

    private constructor(typeArgs: [], fields: VersionCapFields) {
        this.$fullTypeName = composeSuiType(
            VersionCap.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::version::VersionCap";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): VersionCapReified {
        return {
            typeName: VersionCap.$typeName,
            fullTypeName: composeSuiType(
                VersionCap.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::version::VersionCap",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => VersionCap.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => VersionCap.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => VersionCap.fromBcs(data),
            bcs: VersionCap.bcs,
            fromJSONField: (field: any) => VersionCap.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => VersionCap.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => VersionCap.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => VersionCap.fetch(client, id),
            new: (fields: VersionCapFields) => {
                return new VersionCap([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return VersionCap.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<VersionCap>> {
        return phantom(VersionCap.reified());
    }
    static get p() {
        return VersionCap.phantom();
    }

    static get bcs() {
        return bcs.struct("VersionCap", {
            id: UID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): VersionCap {
        return VersionCap.reified().new({ id: decodeFromFields(UID.reified(), fields.id) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): VersionCap {
        if (!isVersionCap(item.type)) {
            throw new Error("not a VersionCap type");
        }

        return VersionCap.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) });
    }

    static fromBcs(data: Uint8Array): VersionCap {
        return VersionCap.fromFields(VersionCap.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): VersionCap {
        return VersionCap.reified().new({ id: decodeFromJSONField(UID.reified(), field.id) });
    }

    static fromJSON(json: Record<string, any>): VersionCap {
        if (json.$typeName !== VersionCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return VersionCap.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): VersionCap {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isVersionCap(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a VersionCap object`);
        }
        return VersionCap.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<VersionCap> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching VersionCap object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isVersionCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VersionCap object`);
        }
        return VersionCap.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
