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
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== Collateral =============================== */

export function isCollateral(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_collaterals::Collateral";
}

export interface CollateralFields {
    amount: ToField<"u64">;
}

export type CollateralReified = Reified<Collateral, CollateralFields>;

export class Collateral implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_collaterals::Collateral";
    static readonly $numTypeParams = 0;

    readonly $typeName = Collateral.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_collaterals::Collateral";

    readonly $typeArgs: [];

    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: CollateralFields) {
        this.$fullTypeName = composeSuiType(
            Collateral.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_collaterals::Collateral";
        this.$typeArgs = typeArgs;

        this.amount = fields.amount;
    }

    static reified(): CollateralReified {
        return {
            typeName: Collateral.$typeName,
            fullTypeName: composeSuiType(
                Collateral.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_collaterals::Collateral",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Collateral.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Collateral.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Collateral.fromBcs(data),
            bcs: Collateral.bcs,
            fromJSONField: (field: any) => Collateral.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Collateral.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Collateral.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => Collateral.fetch(client, id),
            new: (fields: CollateralFields) => {
                return new Collateral([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Collateral.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Collateral>> {
        return phantom(Collateral.reified());
    }
    static get p() {
        return Collateral.phantom();
    }

    static get bcs() {
        return bcs.struct("Collateral", {
            amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Collateral {
        return Collateral.reified().new({ amount: decodeFromFields("u64", fields.amount) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Collateral {
        if (!isCollateral(item.type)) {
            throw new Error("not a Collateral type");
        }

        return Collateral.reified().new({ amount: decodeFromFieldsWithTypes("u64", item.fields.amount) });
    }

    static fromBcs(data: Uint8Array): Collateral {
        return Collateral.fromFields(Collateral.bcs.parse(data));
    }

    toJSONField() {
        return {
            amount: this.amount.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): Collateral {
        return Collateral.reified().new({ amount: decodeFromJSONField("u64", field.amount) });
    }

    static fromJSON(json: Record<string, any>): Collateral {
        if (json.$typeName !== Collateral.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Collateral.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Collateral {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCollateral(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Collateral object`);
        }
        return Collateral.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<Collateral> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Collateral object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCollateral(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Collateral object`);
        }
        return Collateral.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== ObligationCollaterals =============================== */

export function isObligationCollaterals(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_collaterals::ObligationCollaterals";
}

export interface ObligationCollateralsFields {
    dummyField: ToField<"bool">;
}

export type ObligationCollateralsReified = Reified<ObligationCollaterals, ObligationCollateralsFields>;

export class ObligationCollaterals implements StructClass {
    static readonly $typeName =
        "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_collaterals::ObligationCollaterals";
    static readonly $numTypeParams = 0;

    readonly $typeName = ObligationCollaterals.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_collaterals::ObligationCollaterals";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: ObligationCollateralsFields) {
        this.$fullTypeName = composeSuiType(
            ObligationCollaterals.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_collaterals::ObligationCollaterals";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): ObligationCollateralsReified {
        return {
            typeName: ObligationCollaterals.$typeName,
            fullTypeName: composeSuiType(
                ObligationCollaterals.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_collaterals::ObligationCollaterals",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ObligationCollaterals.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ObligationCollaterals.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ObligationCollaterals.fromBcs(data),
            bcs: ObligationCollaterals.bcs,
            fromJSONField: (field: any) => ObligationCollaterals.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ObligationCollaterals.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ObligationCollaterals.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => ObligationCollaterals.fetch(client, id),
            new: (fields: ObligationCollateralsFields) => {
                return new ObligationCollaterals([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ObligationCollaterals.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ObligationCollaterals>> {
        return phantom(ObligationCollaterals.reified());
    }
    static get p() {
        return ObligationCollaterals.phantom();
    }

    static get bcs() {
        return bcs.struct("ObligationCollaterals", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): ObligationCollaterals {
        return ObligationCollaterals.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ObligationCollaterals {
        if (!isObligationCollaterals(item.type)) {
            throw new Error("not a ObligationCollaterals type");
        }

        return ObligationCollaterals.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): ObligationCollaterals {
        return ObligationCollaterals.fromFields(ObligationCollaterals.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): ObligationCollaterals {
        return ObligationCollaterals.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): ObligationCollaterals {
        if (json.$typeName !== ObligationCollaterals.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ObligationCollaterals.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ObligationCollaterals {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isObligationCollaterals(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ObligationCollaterals object`);
        }
        return ObligationCollaterals.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<ObligationCollaterals> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ObligationCollaterals object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isObligationCollaterals(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ObligationCollaterals object`);
        }
        return ObligationCollaterals.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
