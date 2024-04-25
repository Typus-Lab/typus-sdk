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
import { bcs, fromB64, fromHEX, toHEX } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== CollateralDepositEvent =============================== */

export function isCollateralDepositEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::deposit_collateral::CollateralDepositEvent";
}

export interface CollateralDepositEventFields {
    provider: ToField<"address">;
    obligation: ToField<ID>;
    depositAsset: ToField<TypeName>;
    depositAmount: ToField<"u64">;
}

export type CollateralDepositEventReified = Reified<CollateralDepositEvent, CollateralDepositEventFields>;

export class CollateralDepositEvent implements StructClass {
    static readonly $typeName =
        "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::deposit_collateral::CollateralDepositEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = CollateralDepositEvent.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::deposit_collateral::CollateralDepositEvent";

    readonly $typeArgs: [];

    readonly provider: ToField<"address">;
    readonly obligation: ToField<ID>;
    readonly depositAsset: ToField<TypeName>;
    readonly depositAmount: ToField<"u64">;

    private constructor(typeArgs: [], fields: CollateralDepositEventFields) {
        this.$fullTypeName = composeSuiType(
            CollateralDepositEvent.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::deposit_collateral::CollateralDepositEvent";
        this.$typeArgs = typeArgs;

        this.provider = fields.provider;
        this.obligation = fields.obligation;
        this.depositAsset = fields.depositAsset;
        this.depositAmount = fields.depositAmount;
    }

    static reified(): CollateralDepositEventReified {
        return {
            typeName: CollateralDepositEvent.$typeName,
            fullTypeName: composeSuiType(
                CollateralDepositEvent.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::deposit_collateral::CollateralDepositEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CollateralDepositEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CollateralDepositEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CollateralDepositEvent.fromBcs(data),
            bcs: CollateralDepositEvent.bcs,
            fromJSONField: (field: any) => CollateralDepositEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CollateralDepositEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CollateralDepositEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => CollateralDepositEvent.fetch(client, id),
            new: (fields: CollateralDepositEventFields) => {
                return new CollateralDepositEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return CollateralDepositEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<CollateralDepositEvent>> {
        return phantom(CollateralDepositEvent.reified());
    }
    static get p() {
        return CollateralDepositEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("CollateralDepositEvent", {
            provider: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            obligation: ID.bcs,
            deposit_asset: TypeName.bcs,
            deposit_amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): CollateralDepositEvent {
        return CollateralDepositEvent.reified().new({
            provider: decodeFromFields("address", fields.provider),
            obligation: decodeFromFields(ID.reified(), fields.obligation),
            depositAsset: decodeFromFields(TypeName.reified(), fields.deposit_asset),
            depositAmount: decodeFromFields("u64", fields.deposit_amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): CollateralDepositEvent {
        if (!isCollateralDepositEvent(item.type)) {
            throw new Error("not a CollateralDepositEvent type");
        }

        return CollateralDepositEvent.reified().new({
            provider: decodeFromFieldsWithTypes("address", item.fields.provider),
            obligation: decodeFromFieldsWithTypes(ID.reified(), item.fields.obligation),
            depositAsset: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.deposit_asset),
            depositAmount: decodeFromFieldsWithTypes("u64", item.fields.deposit_amount),
        });
    }

    static fromBcs(data: Uint8Array): CollateralDepositEvent {
        return CollateralDepositEvent.fromFields(CollateralDepositEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            provider: this.provider,
            obligation: this.obligation,
            depositAsset: this.depositAsset.toJSONField(),
            depositAmount: this.depositAmount.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): CollateralDepositEvent {
        return CollateralDepositEvent.reified().new({
            provider: decodeFromJSONField("address", field.provider),
            obligation: decodeFromJSONField(ID.reified(), field.obligation),
            depositAsset: decodeFromJSONField(TypeName.reified(), field.depositAsset),
            depositAmount: decodeFromJSONField("u64", field.depositAmount),
        });
    }

    static fromJSON(json: Record<string, any>): CollateralDepositEvent {
        if (json.$typeName !== CollateralDepositEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return CollateralDepositEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): CollateralDepositEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCollateralDepositEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CollateralDepositEvent object`);
        }
        return CollateralDepositEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<CollateralDepositEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CollateralDepositEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCollateralDepositEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CollateralDepositEvent object`);
        }
        return CollateralDepositEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
