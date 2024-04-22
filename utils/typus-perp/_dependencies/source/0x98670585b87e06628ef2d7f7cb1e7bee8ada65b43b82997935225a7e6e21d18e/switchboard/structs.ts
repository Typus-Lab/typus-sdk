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

/* ============================== AdminCap =============================== */

export function isAdminCap(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::switchboard::AdminCap";
}

export interface AdminCapFields {
    id: ToField<UID>;
}

export type AdminCapReified = Reified<AdminCap, AdminCapFields>;

export class AdminCap implements StructClass {
    static readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::switchboard::AdminCap";
    static readonly $numTypeParams = 0;

    readonly $typeName = AdminCap.$typeName;

    readonly $fullTypeName: "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::switchboard::AdminCap";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;

    private constructor(typeArgs: [], fields: AdminCapFields) {
        this.$fullTypeName = composeSuiType(
            AdminCap.$typeName,
            ...typeArgs
        ) as "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::switchboard::AdminCap";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): AdminCapReified {
        return {
            typeName: AdminCap.$typeName,
            fullTypeName: composeSuiType(
                AdminCap.$typeName,
                ...[]
            ) as "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::switchboard::AdminCap",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AdminCap.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AdminCap.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AdminCap.fromBcs(data),
            bcs: AdminCap.bcs,
            fromJSONField: (field: any) => AdminCap.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AdminCap.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AdminCap.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => AdminCap.fetch(client, id),
            new: (fields: AdminCapFields) => {
                return new AdminCap([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AdminCap.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AdminCap>> {
        return phantom(AdminCap.reified());
    }
    static get p() {
        return AdminCap.phantom();
    }

    static get bcs() {
        return bcs.struct("AdminCap", {
            id: UID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): AdminCap {
        return AdminCap.reified().new({ id: decodeFromFields(UID.reified(), fields.id) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AdminCap {
        if (!isAdminCap(item.type)) {
            throw new Error("not a AdminCap type");
        }

        return AdminCap.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) });
    }

    static fromBcs(data: Uint8Array): AdminCap {
        return AdminCap.fromFields(AdminCap.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): AdminCap {
        return AdminCap.reified().new({ id: decodeFromJSONField(UID.reified(), field.id) });
    }

    static fromJSON(json: Record<string, any>): AdminCap {
        if (json.$typeName !== AdminCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AdminCap.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AdminCap {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAdminCap(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AdminCap object`);
        }
        return AdminCap.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<AdminCap> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AdminCap object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAdminCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AdminCap object`);
        }
        return AdminCap.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
