import { UID } from "../../_dependencies/source/0x2/object/structs";
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

/* ============================== LpRegistry =============================== */

export function isLpRegistry(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tlp::LpRegistry`;
}

export interface LpRegistryFields {
    id: ToField<UID>;
}

export type LpRegistryReified = Reified<LpRegistry, LpRegistryFields>;

export class LpRegistry implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tlp::LpRegistry`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = LpRegistry.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tlp::LpRegistry`;
    readonly $typeArgs: [];
    readonly $isPhantom = LpRegistry.$isPhantom;

    readonly id: ToField<UID>;

    private constructor(typeArgs: [], fields: LpRegistryFields) {
        this.$fullTypeName = composeSuiType(LpRegistry.$typeName, ...typeArgs) as `${typeof PKG_V1}::tlp::LpRegistry`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): LpRegistryReified {
        return {
            typeName: LpRegistry.$typeName,
            fullTypeName: composeSuiType(LpRegistry.$typeName, ...[]) as `${typeof PKG_V1}::tlp::LpRegistry`,
            typeArgs: [] as [],
            isPhantom: LpRegistry.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LpRegistry.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LpRegistry.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LpRegistry.fromBcs(data),
            bcs: LpRegistry.bcs,
            fromJSONField: (field: any) => LpRegistry.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LpRegistry.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LpRegistry.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => LpRegistry.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => LpRegistry.fetch(client, id),
            new: (fields: LpRegistryFields) => {
                return new LpRegistry([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LpRegistry.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LpRegistry>> {
        return phantom(LpRegistry.reified());
    }
    static get p() {
        return LpRegistry.phantom();
    }

    static get bcs() {
        return bcs.struct("LpRegistry", {
            id: UID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): LpRegistry {
        return LpRegistry.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LpRegistry {
        if (!isLpRegistry(item.type)) {
            throw new Error("not a LpRegistry type");
        }

        return LpRegistry.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
        });
    }

    static fromBcs(data: Uint8Array): LpRegistry {
        return LpRegistry.fromFields(LpRegistry.bcs.parse(data));
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

    static fromJSONField(field: any): LpRegistry {
        return LpRegistry.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
        });
    }

    static fromJSON(json: Record<string, any>): LpRegistry {
        if (json.$typeName !== LpRegistry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LpRegistry.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LpRegistry {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLpRegistry(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LpRegistry object`);
        }
        return LpRegistry.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): LpRegistry {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLpRegistry(data.bcs.type)) {
                throw new Error(`object at is not a LpRegistry object`);
            }

            return LpRegistry.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LpRegistry.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<LpRegistry> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LpRegistry object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLpRegistry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LpRegistry object`);
        }

        return LpRegistry.fromSuiObjectData(res.data);
    }
}

/* ============================== TLP =============================== */

export function isTLP(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tlp::TLP`;
}

export interface TLPFields {
    dummyField: ToField<"bool">;
}

export type TLPReified = Reified<TLP, TLPFields>;

export class TLP implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tlp::TLP`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = TLP.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tlp::TLP`;
    readonly $typeArgs: [];
    readonly $isPhantom = TLP.$isPhantom;

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: TLPFields) {
        this.$fullTypeName = composeSuiType(TLP.$typeName, ...typeArgs) as `${typeof PKG_V1}::tlp::TLP`;
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): TLPReified {
        return {
            typeName: TLP.$typeName,
            fullTypeName: composeSuiType(TLP.$typeName, ...[]) as `${typeof PKG_V1}::tlp::TLP`,
            typeArgs: [] as [],
            isPhantom: TLP.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TLP.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TLP.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TLP.fromBcs(data),
            bcs: TLP.bcs,
            fromJSONField: (field: any) => TLP.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TLP.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TLP.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => TLP.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => TLP.fetch(client, id),
            new: (fields: TLPFields) => {
                return new TLP([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TLP.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TLP>> {
        return phantom(TLP.reified());
    }
    static get p() {
        return TLP.phantom();
    }

    static get bcs() {
        return bcs.struct("TLP", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): TLP {
        return TLP.reified().new({
            dummyField: decodeFromFields("bool", fields.dummy_field),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TLP {
        if (!isTLP(item.type)) {
            throw new Error("not a TLP type");
        }

        return TLP.reified().new({
            dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
        });
    }

    static fromBcs(data: Uint8Array): TLP {
        return TLP.fromFields(TLP.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): TLP {
        return TLP.reified().new({
            dummyField: decodeFromJSONField("bool", field.dummyField),
        });
    }

    static fromJSON(json: Record<string, any>): TLP {
        if (json.$typeName !== TLP.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TLP.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TLP {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTLP(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TLP object`);
        }
        return TLP.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): TLP {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTLP(data.bcs.type)) {
                throw new Error(`object at is not a TLP object`);
            }

            return TLP.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TLP.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TLP> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TLP object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTLP(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TLP object`);
        }

        return TLP.fromSuiObjectData(res.data);
    }
}
