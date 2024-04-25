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
import { UID } from "../../0x2/object/structs";
import { VecSet } from "../../0x2/vec-set/structs";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== ObligationAccessStore =============================== */

export function isObligationAccessStore(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_access::ObligationAccessStore";
}

export interface ObligationAccessStoreFields {
    id: ToField<UID>;
    lockKeys: ToField<VecSet<TypeName>>;
    rewardKeys: ToField<VecSet<TypeName>>;
}

export type ObligationAccessStoreReified = Reified<ObligationAccessStore, ObligationAccessStoreFields>;

export class ObligationAccessStore implements StructClass {
    static readonly $typeName =
        "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_access::ObligationAccessStore";
    static readonly $numTypeParams = 0;

    readonly $typeName = ObligationAccessStore.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_access::ObligationAccessStore";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly lockKeys: ToField<VecSet<TypeName>>;
    readonly rewardKeys: ToField<VecSet<TypeName>>;

    private constructor(typeArgs: [], fields: ObligationAccessStoreFields) {
        this.$fullTypeName = composeSuiType(
            ObligationAccessStore.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_access::ObligationAccessStore";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.lockKeys = fields.lockKeys;
        this.rewardKeys = fields.rewardKeys;
    }

    static reified(): ObligationAccessStoreReified {
        return {
            typeName: ObligationAccessStore.$typeName,
            fullTypeName: composeSuiType(
                ObligationAccessStore.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_access::ObligationAccessStore",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ObligationAccessStore.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ObligationAccessStore.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ObligationAccessStore.fromBcs(data),
            bcs: ObligationAccessStore.bcs,
            fromJSONField: (field: any) => ObligationAccessStore.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ObligationAccessStore.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ObligationAccessStore.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => ObligationAccessStore.fetch(client, id),
            new: (fields: ObligationAccessStoreFields) => {
                return new ObligationAccessStore([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ObligationAccessStore.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ObligationAccessStore>> {
        return phantom(ObligationAccessStore.reified());
    }
    static get p() {
        return ObligationAccessStore.phantom();
    }

    static get bcs() {
        return bcs.struct("ObligationAccessStore", {
            id: UID.bcs,
            lock_keys: VecSet.bcs(TypeName.bcs),
            reward_keys: VecSet.bcs(TypeName.bcs),
        });
    }

    static fromFields(fields: Record<string, any>): ObligationAccessStore {
        return ObligationAccessStore.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            lockKeys: decodeFromFields(VecSet.reified(TypeName.reified()), fields.lock_keys),
            rewardKeys: decodeFromFields(VecSet.reified(TypeName.reified()), fields.reward_keys),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ObligationAccessStore {
        if (!isObligationAccessStore(item.type)) {
            throw new Error("not a ObligationAccessStore type");
        }

        return ObligationAccessStore.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            lockKeys: decodeFromFieldsWithTypes(VecSet.reified(TypeName.reified()), item.fields.lock_keys),
            rewardKeys: decodeFromFieldsWithTypes(VecSet.reified(TypeName.reified()), item.fields.reward_keys),
        });
    }

    static fromBcs(data: Uint8Array): ObligationAccessStore {
        return ObligationAccessStore.fromFields(ObligationAccessStore.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            lockKeys: this.lockKeys.toJSONField(),
            rewardKeys: this.rewardKeys.toJSONField(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): ObligationAccessStore {
        return ObligationAccessStore.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            lockKeys: decodeFromJSONField(VecSet.reified(TypeName.reified()), field.lockKeys),
            rewardKeys: decodeFromJSONField(VecSet.reified(TypeName.reified()), field.rewardKeys),
        });
    }

    static fromJSON(json: Record<string, any>): ObligationAccessStore {
        if (json.$typeName !== ObligationAccessStore.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ObligationAccessStore.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ObligationAccessStore {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isObligationAccessStore(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ObligationAccessStore object`);
        }
        return ObligationAccessStore.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<ObligationAccessStore> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ObligationAccessStore object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isObligationAccessStore(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ObligationAccessStore object`);
        }
        return ObligationAccessStore.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
