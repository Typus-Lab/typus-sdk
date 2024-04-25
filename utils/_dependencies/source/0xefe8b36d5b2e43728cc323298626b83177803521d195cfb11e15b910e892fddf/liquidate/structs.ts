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

/* ============================== LiquidateEvent =============================== */

export function isLiquidateEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::liquidate::LiquidateEvent";
}

export interface LiquidateEventFields {
    liquidator: ToField<"address">;
    obligation: ToField<ID>;
    debtType: ToField<TypeName>;
    collateralType: ToField<TypeName>;
    repayOnBehalf: ToField<"u64">;
    repayRevenue: ToField<"u64">;
    liqAmount: ToField<"u64">;
}

export type LiquidateEventReified = Reified<LiquidateEvent, LiquidateEventFields>;

export class LiquidateEvent implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::liquidate::LiquidateEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = LiquidateEvent.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::liquidate::LiquidateEvent";

    readonly $typeArgs: [];

    readonly liquidator: ToField<"address">;
    readonly obligation: ToField<ID>;
    readonly debtType: ToField<TypeName>;
    readonly collateralType: ToField<TypeName>;
    readonly repayOnBehalf: ToField<"u64">;
    readonly repayRevenue: ToField<"u64">;
    readonly liqAmount: ToField<"u64">;

    private constructor(typeArgs: [], fields: LiquidateEventFields) {
        this.$fullTypeName = composeSuiType(
            LiquidateEvent.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::liquidate::LiquidateEvent";
        this.$typeArgs = typeArgs;

        this.liquidator = fields.liquidator;
        this.obligation = fields.obligation;
        this.debtType = fields.debtType;
        this.collateralType = fields.collateralType;
        this.repayOnBehalf = fields.repayOnBehalf;
        this.repayRevenue = fields.repayRevenue;
        this.liqAmount = fields.liqAmount;
    }

    static reified(): LiquidateEventReified {
        return {
            typeName: LiquidateEvent.$typeName,
            fullTypeName: composeSuiType(
                LiquidateEvent.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::liquidate::LiquidateEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LiquidateEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LiquidateEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LiquidateEvent.fromBcs(data),
            bcs: LiquidateEvent.bcs,
            fromJSONField: (field: any) => LiquidateEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LiquidateEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LiquidateEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => LiquidateEvent.fetch(client, id),
            new: (fields: LiquidateEventFields) => {
                return new LiquidateEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LiquidateEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LiquidateEvent>> {
        return phantom(LiquidateEvent.reified());
    }
    static get p() {
        return LiquidateEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("LiquidateEvent", {
            liquidator: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            obligation: ID.bcs,
            debt_type: TypeName.bcs,
            collateral_type: TypeName.bcs,
            repay_on_behalf: bcs.u64(),
            repay_revenue: bcs.u64(),
            liq_amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): LiquidateEvent {
        return LiquidateEvent.reified().new({
            liquidator: decodeFromFields("address", fields.liquidator),
            obligation: decodeFromFields(ID.reified(), fields.obligation),
            debtType: decodeFromFields(TypeName.reified(), fields.debt_type),
            collateralType: decodeFromFields(TypeName.reified(), fields.collateral_type),
            repayOnBehalf: decodeFromFields("u64", fields.repay_on_behalf),
            repayRevenue: decodeFromFields("u64", fields.repay_revenue),
            liqAmount: decodeFromFields("u64", fields.liq_amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LiquidateEvent {
        if (!isLiquidateEvent(item.type)) {
            throw new Error("not a LiquidateEvent type");
        }

        return LiquidateEvent.reified().new({
            liquidator: decodeFromFieldsWithTypes("address", item.fields.liquidator),
            obligation: decodeFromFieldsWithTypes(ID.reified(), item.fields.obligation),
            debtType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.debt_type),
            collateralType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.collateral_type),
            repayOnBehalf: decodeFromFieldsWithTypes("u64", item.fields.repay_on_behalf),
            repayRevenue: decodeFromFieldsWithTypes("u64", item.fields.repay_revenue),
            liqAmount: decodeFromFieldsWithTypes("u64", item.fields.liq_amount),
        });
    }

    static fromBcs(data: Uint8Array): LiquidateEvent {
        return LiquidateEvent.fromFields(LiquidateEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            liquidator: this.liquidator,
            obligation: this.obligation,
            debtType: this.debtType.toJSONField(),
            collateralType: this.collateralType.toJSONField(),
            repayOnBehalf: this.repayOnBehalf.toString(),
            repayRevenue: this.repayRevenue.toString(),
            liqAmount: this.liqAmount.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): LiquidateEvent {
        return LiquidateEvent.reified().new({
            liquidator: decodeFromJSONField("address", field.liquidator),
            obligation: decodeFromJSONField(ID.reified(), field.obligation),
            debtType: decodeFromJSONField(TypeName.reified(), field.debtType),
            collateralType: decodeFromJSONField(TypeName.reified(), field.collateralType),
            repayOnBehalf: decodeFromJSONField("u64", field.repayOnBehalf),
            repayRevenue: decodeFromJSONField("u64", field.repayRevenue),
            liqAmount: decodeFromJSONField("u64", field.liqAmount),
        });
    }

    static fromJSON(json: Record<string, any>): LiquidateEvent {
        if (json.$typeName !== LiquidateEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LiquidateEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LiquidateEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLiquidateEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LiquidateEvent object`);
        }
        return LiquidateEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<LiquidateEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LiquidateEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLiquidateEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LiquidateEvent object`);
        }
        return LiquidateEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
