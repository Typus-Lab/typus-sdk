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

/* ============================== TreasuryCaps =============================== */

export function isTreasuryCaps(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::treasury_caps::TreasuryCaps";
}

export interface TreasuryCapsFields {
    id: ToField<UID>;
}

export type TreasuryCapsReified = Reified<TreasuryCaps, TreasuryCapsFields>;

export class TreasuryCaps implements StructClass {
    static readonly $typeName = "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::treasury_caps::TreasuryCaps";
    static readonly $numTypeParams = 0;

    readonly $typeName = TreasuryCaps.$typeName;

    readonly $fullTypeName: "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::treasury_caps::TreasuryCaps";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;

    private constructor(typeArgs: [], fields: TreasuryCapsFields) {
        this.$fullTypeName = composeSuiType(
            TreasuryCaps.$typeName,
            ...typeArgs
        ) as "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::treasury_caps::TreasuryCaps";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): TreasuryCapsReified {
        return {
            typeName: TreasuryCaps.$typeName,
            fullTypeName: composeSuiType(
                TreasuryCaps.$typeName,
                ...[]
            ) as "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::treasury_caps::TreasuryCaps",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => TreasuryCaps.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => TreasuryCaps.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => TreasuryCaps.fromBcs(data),
            bcs: TreasuryCaps.bcs,
            fromJSONField: (field: any) => TreasuryCaps.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => TreasuryCaps.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => TreasuryCaps.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => TreasuryCaps.fetch(client, id),
            new: (fields: TreasuryCapsFields) => {
                return new TreasuryCaps([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return TreasuryCaps.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<TreasuryCaps>> {
        return phantom(TreasuryCaps.reified());
    }
    static get p() {
        return TreasuryCaps.phantom();
    }

    static get bcs() {
        return bcs.struct("TreasuryCaps", {
            id: UID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): TreasuryCaps {
        return TreasuryCaps.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): TreasuryCaps {
        if (!isTreasuryCaps(item.type)) {
            throw new Error("not a TreasuryCaps type");
        }

        return TreasuryCaps.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
        });
    }

    static fromBcs(data: Uint8Array): TreasuryCaps {
        return TreasuryCaps.fromFields(TreasuryCaps.bcs.parse(data));
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

    static fromJSONField(field: any): TreasuryCaps {
        return TreasuryCaps.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
        });
    }

    static fromJSON(json: Record<string, any>): TreasuryCaps {
        if (json.$typeName !== TreasuryCaps.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return TreasuryCaps.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): TreasuryCaps {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTreasuryCaps(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TreasuryCaps object`);
        }
        return TreasuryCaps.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<TreasuryCaps> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching TreasuryCaps object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTreasuryCaps(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TreasuryCaps object`);
        }
        return TreasuryCaps.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
