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
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== LpRegistry =============================== */

export function isLpRegistry(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::tlp::LpRegistry";
}

export interface LpRegistryFields {
    id: ToField<UID>;
}

export type LpRegistryReified = Reified<LpRegistry, LpRegistryFields>;

export class LpRegistry implements StructClass {
    static readonly $typeName = "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::tlp::LpRegistry";
    static readonly $numTypeParams = 0;

    readonly $typeName = LpRegistry.$typeName;

    readonly $fullTypeName: "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::tlp::LpRegistry";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;

    private constructor(typeArgs: [], fields: LpRegistryFields) {
        this.$fullTypeName = composeSuiType(
            LpRegistry.$typeName,
            ...typeArgs
        ) as "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::tlp::LpRegistry";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): LpRegistryReified {
        return {
            typeName: LpRegistry.$typeName,
            fullTypeName: composeSuiType(
                LpRegistry.$typeName,
                ...[]
            ) as "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::tlp::LpRegistry",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LpRegistry.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LpRegistry.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LpRegistry.fromBcs(data),
            bcs: LpRegistry.bcs,
            fromJSONField: (field: any) => LpRegistry.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LpRegistry.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LpRegistry.fromSuiParsedData(content),
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
        return LpRegistry.reified().new({ id: decodeFromFields(UID.reified(), fields.id) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LpRegistry {
        if (!isLpRegistry(item.type)) {
            throw new Error("not a LpRegistry type");
        }

        return LpRegistry.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) });
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
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): LpRegistry {
        return LpRegistry.reified().new({ id: decodeFromJSONField(UID.reified(), field.id) });
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

    static async fetch(client: SuiClient, id: string): Promise<LpRegistry> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LpRegistry object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLpRegistry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LpRegistry object`);
        }
        return LpRegistry.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== TLP =============================== */

export function isTLP(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::tlp::TLP";
}

export interface TLPFields {
    dummyField: ToField<"bool">;
}

export type TLPReified = Reified<TLP, TLPFields>;

export class TLP implements StructClass {
    static readonly $typeName = "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::tlp::TLP";
    static readonly $numTypeParams = 0;

    readonly $typeName = TLP.$typeName;

    readonly $fullTypeName: "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::tlp::TLP";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: TLPFields) {
        this.$fullTypeName = composeSuiType(
            TLP.$typeName,
            ...typeArgs
        ) as "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::tlp::TLP";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): TLPReified {
        return {
            typeName: TLP.$typeName,
            fullTypeName: composeSuiType(
                TLP.$typeName,
                ...[]
            ) as "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::tlp::TLP",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TLP.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TLP.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TLP.fromBcs(data),
            bcs: TLP.bcs,
            fromJSONField: (field: any) => TLP.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TLP.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TLP.fromSuiParsedData(content),
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
        return TLP.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TLP {
        if (!isTLP(item.type)) {
            throw new Error("not a TLP type");
        }

        return TLP.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
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
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): TLP {
        return TLP.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
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

    static async fetch(client: SuiClient, id: string): Promise<TLP> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TLP object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTLP(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TLP object`);
        }
        return TLP.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
