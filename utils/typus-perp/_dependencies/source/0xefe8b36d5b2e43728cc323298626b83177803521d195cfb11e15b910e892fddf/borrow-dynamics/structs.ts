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
import { FixedPoint32 } from "../../0x1/fixed-point32/structs";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== BorrowDynamic =============================== */

export function isBorrowDynamic(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::borrow_dynamics::BorrowDynamic";
}

export interface BorrowDynamicFields {
    interestRate: ToField<FixedPoint32>;
    interestRateScale: ToField<"u64">;
    borrowIndex: ToField<"u64">;
    lastUpdated: ToField<"u64">;
}

export type BorrowDynamicReified = Reified<BorrowDynamic, BorrowDynamicFields>;

export class BorrowDynamic implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::borrow_dynamics::BorrowDynamic";
    static readonly $numTypeParams = 0;

    readonly $typeName = BorrowDynamic.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::borrow_dynamics::BorrowDynamic";

    readonly $typeArgs: [];

    readonly interestRate: ToField<FixedPoint32>;
    readonly interestRateScale: ToField<"u64">;
    readonly borrowIndex: ToField<"u64">;
    readonly lastUpdated: ToField<"u64">;

    private constructor(typeArgs: [], fields: BorrowDynamicFields) {
        this.$fullTypeName = composeSuiType(
            BorrowDynamic.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::borrow_dynamics::BorrowDynamic";
        this.$typeArgs = typeArgs;

        this.interestRate = fields.interestRate;
        this.interestRateScale = fields.interestRateScale;
        this.borrowIndex = fields.borrowIndex;
        this.lastUpdated = fields.lastUpdated;
    }

    static reified(): BorrowDynamicReified {
        return {
            typeName: BorrowDynamic.$typeName,
            fullTypeName: composeSuiType(
                BorrowDynamic.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::borrow_dynamics::BorrowDynamic",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => BorrowDynamic.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => BorrowDynamic.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => BorrowDynamic.fromBcs(data),
            bcs: BorrowDynamic.bcs,
            fromJSONField: (field: any) => BorrowDynamic.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => BorrowDynamic.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => BorrowDynamic.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => BorrowDynamic.fetch(client, id),
            new: (fields: BorrowDynamicFields) => {
                return new BorrowDynamic([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return BorrowDynamic.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<BorrowDynamic>> {
        return phantom(BorrowDynamic.reified());
    }
    static get p() {
        return BorrowDynamic.phantom();
    }

    static get bcs() {
        return bcs.struct("BorrowDynamic", {
            interest_rate: FixedPoint32.bcs,
            interest_rate_scale: bcs.u64(),
            borrow_index: bcs.u64(),
            last_updated: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): BorrowDynamic {
        return BorrowDynamic.reified().new({
            interestRate: decodeFromFields(FixedPoint32.reified(), fields.interest_rate),
            interestRateScale: decodeFromFields("u64", fields.interest_rate_scale),
            borrowIndex: decodeFromFields("u64", fields.borrow_index),
            lastUpdated: decodeFromFields("u64", fields.last_updated),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): BorrowDynamic {
        if (!isBorrowDynamic(item.type)) {
            throw new Error("not a BorrowDynamic type");
        }

        return BorrowDynamic.reified().new({
            interestRate: decodeFromFieldsWithTypes(FixedPoint32.reified(), item.fields.interest_rate),
            interestRateScale: decodeFromFieldsWithTypes("u64", item.fields.interest_rate_scale),
            borrowIndex: decodeFromFieldsWithTypes("u64", item.fields.borrow_index),
            lastUpdated: decodeFromFieldsWithTypes("u64", item.fields.last_updated),
        });
    }

    static fromBcs(data: Uint8Array): BorrowDynamic {
        return BorrowDynamic.fromFields(BorrowDynamic.bcs.parse(data));
    }

    toJSONField() {
        return {
            interestRate: this.interestRate.toJSONField(),
            interestRateScale: this.interestRateScale.toString(),
            borrowIndex: this.borrowIndex.toString(),
            lastUpdated: this.lastUpdated.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): BorrowDynamic {
        return BorrowDynamic.reified().new({
            interestRate: decodeFromJSONField(FixedPoint32.reified(), field.interestRate),
            interestRateScale: decodeFromJSONField("u64", field.interestRateScale),
            borrowIndex: decodeFromJSONField("u64", field.borrowIndex),
            lastUpdated: decodeFromJSONField("u64", field.lastUpdated),
        });
    }

    static fromJSON(json: Record<string, any>): BorrowDynamic {
        if (json.$typeName !== BorrowDynamic.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return BorrowDynamic.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): BorrowDynamic {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBorrowDynamic(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a BorrowDynamic object`);
        }
        return BorrowDynamic.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<BorrowDynamic> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching BorrowDynamic object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isBorrowDynamic(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BorrowDynamic object`);
        }
        return BorrowDynamic.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== BorrowDynamics =============================== */

export function isBorrowDynamics(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::borrow_dynamics::BorrowDynamics";
}

export interface BorrowDynamicsFields {
    dummyField: ToField<"bool">;
}

export type BorrowDynamicsReified = Reified<BorrowDynamics, BorrowDynamicsFields>;

export class BorrowDynamics implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::borrow_dynamics::BorrowDynamics";
    static readonly $numTypeParams = 0;

    readonly $typeName = BorrowDynamics.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::borrow_dynamics::BorrowDynamics";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: BorrowDynamicsFields) {
        this.$fullTypeName = composeSuiType(
            BorrowDynamics.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::borrow_dynamics::BorrowDynamics";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): BorrowDynamicsReified {
        return {
            typeName: BorrowDynamics.$typeName,
            fullTypeName: composeSuiType(
                BorrowDynamics.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::borrow_dynamics::BorrowDynamics",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => BorrowDynamics.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => BorrowDynamics.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => BorrowDynamics.fromBcs(data),
            bcs: BorrowDynamics.bcs,
            fromJSONField: (field: any) => BorrowDynamics.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => BorrowDynamics.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => BorrowDynamics.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => BorrowDynamics.fetch(client, id),
            new: (fields: BorrowDynamicsFields) => {
                return new BorrowDynamics([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return BorrowDynamics.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<BorrowDynamics>> {
        return phantom(BorrowDynamics.reified());
    }
    static get p() {
        return BorrowDynamics.phantom();
    }

    static get bcs() {
        return bcs.struct("BorrowDynamics", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): BorrowDynamics {
        return BorrowDynamics.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): BorrowDynamics {
        if (!isBorrowDynamics(item.type)) {
            throw new Error("not a BorrowDynamics type");
        }

        return BorrowDynamics.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): BorrowDynamics {
        return BorrowDynamics.fromFields(BorrowDynamics.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): BorrowDynamics {
        return BorrowDynamics.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): BorrowDynamics {
        if (json.$typeName !== BorrowDynamics.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return BorrowDynamics.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): BorrowDynamics {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBorrowDynamics(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a BorrowDynamics object`);
        }
        return BorrowDynamics.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<BorrowDynamics> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching BorrowDynamics object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isBorrowDynamics(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BorrowDynamics object`);
        }
        return BorrowDynamics.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
