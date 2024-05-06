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

/* ============================== CollateralStat =============================== */

export function isCollateralStat(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::collateral_stats::CollateralStat";
}

export interface CollateralStatFields {
    amount: ToField<"u64">;
}

export type CollateralStatReified = Reified<CollateralStat, CollateralStatFields>;

export class CollateralStat implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::collateral_stats::CollateralStat";
    static readonly $numTypeParams = 0;

    readonly $typeName = CollateralStat.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::collateral_stats::CollateralStat";

    readonly $typeArgs: [];

    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: CollateralStatFields) {
        this.$fullTypeName = composeSuiType(
            CollateralStat.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::collateral_stats::CollateralStat";
        this.$typeArgs = typeArgs;

        this.amount = fields.amount;
    }

    static reified(): CollateralStatReified {
        return {
            typeName: CollateralStat.$typeName,
            fullTypeName: composeSuiType(
                CollateralStat.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::collateral_stats::CollateralStat",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CollateralStat.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CollateralStat.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CollateralStat.fromBcs(data),
            bcs: CollateralStat.bcs,
            fromJSONField: (field: any) => CollateralStat.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CollateralStat.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CollateralStat.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => CollateralStat.fetch(client, id),
            new: (fields: CollateralStatFields) => {
                return new CollateralStat([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return CollateralStat.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<CollateralStat>> {
        return phantom(CollateralStat.reified());
    }
    static get p() {
        return CollateralStat.phantom();
    }

    static get bcs() {
        return bcs.struct("CollateralStat", {
            amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): CollateralStat {
        return CollateralStat.reified().new({ amount: decodeFromFields("u64", fields.amount) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): CollateralStat {
        if (!isCollateralStat(item.type)) {
            throw new Error("not a CollateralStat type");
        }

        return CollateralStat.reified().new({ amount: decodeFromFieldsWithTypes("u64", item.fields.amount) });
    }

    static fromBcs(data: Uint8Array): CollateralStat {
        return CollateralStat.fromFields(CollateralStat.bcs.parse(data));
    }

    toJSONField() {
        return {
            amount: this.amount.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): CollateralStat {
        return CollateralStat.reified().new({ amount: decodeFromJSONField("u64", field.amount) });
    }

    static fromJSON(json: Record<string, any>): CollateralStat {
        if (json.$typeName !== CollateralStat.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return CollateralStat.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): CollateralStat {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCollateralStat(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CollateralStat object`);
        }
        return CollateralStat.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<CollateralStat> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CollateralStat object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCollateralStat(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CollateralStat object`);
        }
        return CollateralStat.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== CollateralStats =============================== */

export function isCollateralStats(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::collateral_stats::CollateralStats";
}

export interface CollateralStatsFields {
    dummyField: ToField<"bool">;
}

export type CollateralStatsReified = Reified<CollateralStats, CollateralStatsFields>;

export class CollateralStats implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::collateral_stats::CollateralStats";
    static readonly $numTypeParams = 0;

    readonly $typeName = CollateralStats.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::collateral_stats::CollateralStats";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: CollateralStatsFields) {
        this.$fullTypeName = composeSuiType(
            CollateralStats.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::collateral_stats::CollateralStats";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): CollateralStatsReified {
        return {
            typeName: CollateralStats.$typeName,
            fullTypeName: composeSuiType(
                CollateralStats.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::collateral_stats::CollateralStats",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CollateralStats.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CollateralStats.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CollateralStats.fromBcs(data),
            bcs: CollateralStats.bcs,
            fromJSONField: (field: any) => CollateralStats.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CollateralStats.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CollateralStats.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => CollateralStats.fetch(client, id),
            new: (fields: CollateralStatsFields) => {
                return new CollateralStats([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return CollateralStats.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<CollateralStats>> {
        return phantom(CollateralStats.reified());
    }
    static get p() {
        return CollateralStats.phantom();
    }

    static get bcs() {
        return bcs.struct("CollateralStats", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): CollateralStats {
        return CollateralStats.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): CollateralStats {
        if (!isCollateralStats(item.type)) {
            throw new Error("not a CollateralStats type");
        }

        return CollateralStats.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): CollateralStats {
        return CollateralStats.fromFields(CollateralStats.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): CollateralStats {
        return CollateralStats.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): CollateralStats {
        if (json.$typeName !== CollateralStats.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return CollateralStats.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): CollateralStats {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCollateralStats(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CollateralStats object`);
        }
        return CollateralStats.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<CollateralStats> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CollateralStats object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCollateralStats(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CollateralStats object`);
        }
        return CollateralStats.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
