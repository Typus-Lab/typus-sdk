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
import { TypeName } from "../../0x1/type-name/structs";
import { ID } from "../../0x2/object/structs";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== ObligationUnhealthyUnlocked =============================== */

export function isObligationUnhealthyUnlocked(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::lock_obligation::ObligationUnhealthyUnlocked";
}

export interface ObligationUnhealthyUnlockedFields {
    obligation: ToField<ID>;
    witness: ToField<TypeName>;
}

export type ObligationUnhealthyUnlockedReified = Reified<ObligationUnhealthyUnlocked, ObligationUnhealthyUnlockedFields>;

export class ObligationUnhealthyUnlocked implements StructClass {
    static readonly $typeName =
        "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::lock_obligation::ObligationUnhealthyUnlocked";
    static readonly $numTypeParams = 0;

    readonly $typeName = ObligationUnhealthyUnlocked.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::lock_obligation::ObligationUnhealthyUnlocked";

    readonly $typeArgs: [];

    readonly obligation: ToField<ID>;
    readonly witness: ToField<TypeName>;

    private constructor(typeArgs: [], fields: ObligationUnhealthyUnlockedFields) {
        this.$fullTypeName = composeSuiType(
            ObligationUnhealthyUnlocked.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::lock_obligation::ObligationUnhealthyUnlocked";
        this.$typeArgs = typeArgs;

        this.obligation = fields.obligation;
        this.witness = fields.witness;
    }

    static reified(): ObligationUnhealthyUnlockedReified {
        return {
            typeName: ObligationUnhealthyUnlocked.$typeName,
            fullTypeName: composeSuiType(
                ObligationUnhealthyUnlocked.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::lock_obligation::ObligationUnhealthyUnlocked",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ObligationUnhealthyUnlocked.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ObligationUnhealthyUnlocked.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ObligationUnhealthyUnlocked.fromBcs(data),
            bcs: ObligationUnhealthyUnlocked.bcs,
            fromJSONField: (field: any) => ObligationUnhealthyUnlocked.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ObligationUnhealthyUnlocked.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ObligationUnhealthyUnlocked.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => ObligationUnhealthyUnlocked.fetch(client, id),
            new: (fields: ObligationUnhealthyUnlockedFields) => {
                return new ObligationUnhealthyUnlocked([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ObligationUnhealthyUnlocked.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ObligationUnhealthyUnlocked>> {
        return phantom(ObligationUnhealthyUnlocked.reified());
    }
    static get p() {
        return ObligationUnhealthyUnlocked.phantom();
    }

    static get bcs() {
        return bcs.struct("ObligationUnhealthyUnlocked", {
            obligation: ID.bcs,
            witness: TypeName.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): ObligationUnhealthyUnlocked {
        return ObligationUnhealthyUnlocked.reified().new({
            obligation: decodeFromFields(ID.reified(), fields.obligation),
            witness: decodeFromFields(TypeName.reified(), fields.witness),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ObligationUnhealthyUnlocked {
        if (!isObligationUnhealthyUnlocked(item.type)) {
            throw new Error("not a ObligationUnhealthyUnlocked type");
        }

        return ObligationUnhealthyUnlocked.reified().new({
            obligation: decodeFromFieldsWithTypes(ID.reified(), item.fields.obligation),
            witness: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.witness),
        });
    }

    static fromBcs(data: Uint8Array): ObligationUnhealthyUnlocked {
        return ObligationUnhealthyUnlocked.fromFields(ObligationUnhealthyUnlocked.bcs.parse(data));
    }

    toJSONField() {
        return {
            obligation: this.obligation,
            witness: this.witness.toJSONField(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): ObligationUnhealthyUnlocked {
        return ObligationUnhealthyUnlocked.reified().new({
            obligation: decodeFromJSONField(ID.reified(), field.obligation),
            witness: decodeFromJSONField(TypeName.reified(), field.witness),
        });
    }

    static fromJSON(json: Record<string, any>): ObligationUnhealthyUnlocked {
        if (json.$typeName !== ObligationUnhealthyUnlocked.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ObligationUnhealthyUnlocked.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ObligationUnhealthyUnlocked {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isObligationUnhealthyUnlocked(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ObligationUnhealthyUnlocked object`);
        }
        return ObligationUnhealthyUnlocked.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<ObligationUnhealthyUnlocked> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ObligationUnhealthyUnlocked object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isObligationUnhealthyUnlocked(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ObligationUnhealthyUnlocked object`);
        }
        return ObligationUnhealthyUnlocked.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
