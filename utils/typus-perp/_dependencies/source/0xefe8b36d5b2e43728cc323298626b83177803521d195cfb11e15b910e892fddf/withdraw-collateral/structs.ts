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

/* ============================== CollateralWithdrawEvent =============================== */

export function isCollateralWithdrawEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::withdraw_collateral::CollateralWithdrawEvent";
}

export interface CollateralWithdrawEventFields {
    taker: ToField<"address">;
    obligation: ToField<ID>;
    withdrawAsset: ToField<TypeName>;
    withdrawAmount: ToField<"u64">;
}

export type CollateralWithdrawEventReified = Reified<CollateralWithdrawEvent, CollateralWithdrawEventFields>;

export class CollateralWithdrawEvent implements StructClass {
    static readonly $typeName =
        "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::withdraw_collateral::CollateralWithdrawEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = CollateralWithdrawEvent.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::withdraw_collateral::CollateralWithdrawEvent";

    readonly $typeArgs: [];

    readonly taker: ToField<"address">;
    readonly obligation: ToField<ID>;
    readonly withdrawAsset: ToField<TypeName>;
    readonly withdrawAmount: ToField<"u64">;

    private constructor(typeArgs: [], fields: CollateralWithdrawEventFields) {
        this.$fullTypeName = composeSuiType(
            CollateralWithdrawEvent.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::withdraw_collateral::CollateralWithdrawEvent";
        this.$typeArgs = typeArgs;

        this.taker = fields.taker;
        this.obligation = fields.obligation;
        this.withdrawAsset = fields.withdrawAsset;
        this.withdrawAmount = fields.withdrawAmount;
    }

    static reified(): CollateralWithdrawEventReified {
        return {
            typeName: CollateralWithdrawEvent.$typeName,
            fullTypeName: composeSuiType(
                CollateralWithdrawEvent.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::withdraw_collateral::CollateralWithdrawEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CollateralWithdrawEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CollateralWithdrawEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CollateralWithdrawEvent.fromBcs(data),
            bcs: CollateralWithdrawEvent.bcs,
            fromJSONField: (field: any) => CollateralWithdrawEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CollateralWithdrawEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CollateralWithdrawEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => CollateralWithdrawEvent.fetch(client, id),
            new: (fields: CollateralWithdrawEventFields) => {
                return new CollateralWithdrawEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return CollateralWithdrawEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<CollateralWithdrawEvent>> {
        return phantom(CollateralWithdrawEvent.reified());
    }
    static get p() {
        return CollateralWithdrawEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("CollateralWithdrawEvent", {
            taker: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            obligation: ID.bcs,
            withdraw_asset: TypeName.bcs,
            withdraw_amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): CollateralWithdrawEvent {
        return CollateralWithdrawEvent.reified().new({
            taker: decodeFromFields("address", fields.taker),
            obligation: decodeFromFields(ID.reified(), fields.obligation),
            withdrawAsset: decodeFromFields(TypeName.reified(), fields.withdraw_asset),
            withdrawAmount: decodeFromFields("u64", fields.withdraw_amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): CollateralWithdrawEvent {
        if (!isCollateralWithdrawEvent(item.type)) {
            throw new Error("not a CollateralWithdrawEvent type");
        }

        return CollateralWithdrawEvent.reified().new({
            taker: decodeFromFieldsWithTypes("address", item.fields.taker),
            obligation: decodeFromFieldsWithTypes(ID.reified(), item.fields.obligation),
            withdrawAsset: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.withdraw_asset),
            withdrawAmount: decodeFromFieldsWithTypes("u64", item.fields.withdraw_amount),
        });
    }

    static fromBcs(data: Uint8Array): CollateralWithdrawEvent {
        return CollateralWithdrawEvent.fromFields(CollateralWithdrawEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            taker: this.taker,
            obligation: this.obligation,
            withdrawAsset: this.withdrawAsset.toJSONField(),
            withdrawAmount: this.withdrawAmount.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): CollateralWithdrawEvent {
        return CollateralWithdrawEvent.reified().new({
            taker: decodeFromJSONField("address", field.taker),
            obligation: decodeFromJSONField(ID.reified(), field.obligation),
            withdrawAsset: decodeFromJSONField(TypeName.reified(), field.withdrawAsset),
            withdrawAmount: decodeFromJSONField("u64", field.withdrawAmount),
        });
    }

    static fromJSON(json: Record<string, any>): CollateralWithdrawEvent {
        if (json.$typeName !== CollateralWithdrawEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return CollateralWithdrawEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): CollateralWithdrawEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCollateralWithdrawEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CollateralWithdrawEvent object`);
        }
        return CollateralWithdrawEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<CollateralWithdrawEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CollateralWithdrawEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCollateralWithdrawEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CollateralWithdrawEvent object`);
        }
        return CollateralWithdrawEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
