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

/* ============================== DkgState =============================== */

export function isDkgState(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698::validator::DkgState";
}

export interface DkgStateFields {
    id: ToField<UID>;
}

export type DkgStateReified = Reified<DkgState, DkgStateFields>;

export class DkgState implements StructClass {
    static readonly $typeName = "0x277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698::validator::DkgState";
    static readonly $numTypeParams = 0;

    readonly $typeName = DkgState.$typeName;

    readonly $fullTypeName: "0x277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698::validator::DkgState";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;

    private constructor(typeArgs: [], fields: DkgStateFields) {
        this.$fullTypeName = composeSuiType(
            DkgState.$typeName,
            ...typeArgs
        ) as "0x277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698::validator::DkgState";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): DkgStateReified {
        return {
            typeName: DkgState.$typeName,
            fullTypeName: composeSuiType(
                DkgState.$typeName,
                ...[]
            ) as "0x277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698::validator::DkgState",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DkgState.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DkgState.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DkgState.fromBcs(data),
            bcs: DkgState.bcs,
            fromJSONField: (field: any) => DkgState.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DkgState.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DkgState.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => DkgState.fetch(client, id),
            new: (fields: DkgStateFields) => {
                return new DkgState([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DkgState.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DkgState>> {
        return phantom(DkgState.reified());
    }
    static get p() {
        return DkgState.phantom();
    }

    static get bcs() {
        return bcs.struct("DkgState", {
            id: UID.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): DkgState {
        return DkgState.reified().new({ id: decodeFromFields(UID.reified(), fields.id) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DkgState {
        if (!isDkgState(item.type)) {
            throw new Error("not a DkgState type");
        }

        return DkgState.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) });
    }

    static fromBcs(data: Uint8Array): DkgState {
        return DkgState.fromFields(DkgState.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): DkgState {
        return DkgState.reified().new({ id: decodeFromJSONField(UID.reified(), field.id) });
    }

    static fromJSON(json: Record<string, any>): DkgState {
        if (json.$typeName !== DkgState.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DkgState.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DkgState {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDkgState(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DkgState object`);
        }
        return DkgState.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<DkgState> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DkgState object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDkgState(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DkgState object`);
        }
        return DkgState.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
