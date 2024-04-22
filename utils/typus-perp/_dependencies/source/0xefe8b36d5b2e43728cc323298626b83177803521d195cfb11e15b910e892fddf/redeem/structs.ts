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
import { bcs, fromB64, fromHEX, toHEX } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== RedeemEvent =============================== */

export function isRedeemEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::redeem::RedeemEvent";
}

export interface RedeemEventFields {
    redeemer: ToField<"address">;
    withdrawAsset: ToField<TypeName>;
    withdrawAmount: ToField<"u64">;
    burnAsset: ToField<TypeName>;
    burnAmount: ToField<"u64">;
    time: ToField<"u64">;
}

export type RedeemEventReified = Reified<RedeemEvent, RedeemEventFields>;

export class RedeemEvent implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::redeem::RedeemEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = RedeemEvent.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::redeem::RedeemEvent";

    readonly $typeArgs: [];

    readonly redeemer: ToField<"address">;
    readonly withdrawAsset: ToField<TypeName>;
    readonly withdrawAmount: ToField<"u64">;
    readonly burnAsset: ToField<TypeName>;
    readonly burnAmount: ToField<"u64">;
    readonly time: ToField<"u64">;

    private constructor(typeArgs: [], fields: RedeemEventFields) {
        this.$fullTypeName = composeSuiType(
            RedeemEvent.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::redeem::RedeemEvent";
        this.$typeArgs = typeArgs;

        this.redeemer = fields.redeemer;
        this.withdrawAsset = fields.withdrawAsset;
        this.withdrawAmount = fields.withdrawAmount;
        this.burnAsset = fields.burnAsset;
        this.burnAmount = fields.burnAmount;
        this.time = fields.time;
    }

    static reified(): RedeemEventReified {
        return {
            typeName: RedeemEvent.$typeName,
            fullTypeName: composeSuiType(
                RedeemEvent.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::redeem::RedeemEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RedeemEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RedeemEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RedeemEvent.fromBcs(data),
            bcs: RedeemEvent.bcs,
            fromJSONField: (field: any) => RedeemEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RedeemEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RedeemEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => RedeemEvent.fetch(client, id),
            new: (fields: RedeemEventFields) => {
                return new RedeemEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RedeemEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RedeemEvent>> {
        return phantom(RedeemEvent.reified());
    }
    static get p() {
        return RedeemEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RedeemEvent", {
            redeemer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            withdraw_asset: TypeName.bcs,
            withdraw_amount: bcs.u64(),
            burn_asset: TypeName.bcs,
            burn_amount: bcs.u64(),
            time: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): RedeemEvent {
        return RedeemEvent.reified().new({
            redeemer: decodeFromFields("address", fields.redeemer),
            withdrawAsset: decodeFromFields(TypeName.reified(), fields.withdraw_asset),
            withdrawAmount: decodeFromFields("u64", fields.withdraw_amount),
            burnAsset: decodeFromFields(TypeName.reified(), fields.burn_asset),
            burnAmount: decodeFromFields("u64", fields.burn_amount),
            time: decodeFromFields("u64", fields.time),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RedeemEvent {
        if (!isRedeemEvent(item.type)) {
            throw new Error("not a RedeemEvent type");
        }

        return RedeemEvent.reified().new({
            redeemer: decodeFromFieldsWithTypes("address", item.fields.redeemer),
            withdrawAsset: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.withdraw_asset),
            withdrawAmount: decodeFromFieldsWithTypes("u64", item.fields.withdraw_amount),
            burnAsset: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.burn_asset),
            burnAmount: decodeFromFieldsWithTypes("u64", item.fields.burn_amount),
            time: decodeFromFieldsWithTypes("u64", item.fields.time),
        });
    }

    static fromBcs(data: Uint8Array): RedeemEvent {
        return RedeemEvent.fromFields(RedeemEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            redeemer: this.redeemer,
            withdrawAsset: this.withdrawAsset.toJSONField(),
            withdrawAmount: this.withdrawAmount.toString(),
            burnAsset: this.burnAsset.toJSONField(),
            burnAmount: this.burnAmount.toString(),
            time: this.time.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): RedeemEvent {
        return RedeemEvent.reified().new({
            redeemer: decodeFromJSONField("address", field.redeemer),
            withdrawAsset: decodeFromJSONField(TypeName.reified(), field.withdrawAsset),
            withdrawAmount: decodeFromJSONField("u64", field.withdrawAmount),
            burnAsset: decodeFromJSONField(TypeName.reified(), field.burnAsset),
            burnAmount: decodeFromJSONField("u64", field.burnAmount),
            time: decodeFromJSONField("u64", field.time),
        });
    }

    static fromJSON(json: Record<string, any>): RedeemEvent {
        if (json.$typeName !== RedeemEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RedeemEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RedeemEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRedeemEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RedeemEvent object`);
        }
        return RedeemEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<RedeemEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RedeemEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRedeemEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RedeemEvent object`);
        }
        return RedeemEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
