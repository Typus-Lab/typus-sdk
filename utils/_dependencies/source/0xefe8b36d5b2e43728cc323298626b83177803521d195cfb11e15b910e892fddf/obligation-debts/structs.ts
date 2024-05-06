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

/* ============================== Debt =============================== */

export function isDebt(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_debts::Debt";
}

export interface DebtFields {
    amount: ToField<"u64">;
    borrowIndex: ToField<"u64">;
}

export type DebtReified = Reified<Debt, DebtFields>;

export class Debt implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_debts::Debt";
    static readonly $numTypeParams = 0;

    readonly $typeName = Debt.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_debts::Debt";

    readonly $typeArgs: [];

    readonly amount: ToField<"u64">;
    readonly borrowIndex: ToField<"u64">;

    private constructor(typeArgs: [], fields: DebtFields) {
        this.$fullTypeName = composeSuiType(
            Debt.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_debts::Debt";
        this.$typeArgs = typeArgs;

        this.amount = fields.amount;
        this.borrowIndex = fields.borrowIndex;
    }

    static reified(): DebtReified {
        return {
            typeName: Debt.$typeName,
            fullTypeName: composeSuiType(
                Debt.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_debts::Debt",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Debt.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Debt.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Debt.fromBcs(data),
            bcs: Debt.bcs,
            fromJSONField: (field: any) => Debt.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Debt.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Debt.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => Debt.fetch(client, id),
            new: (fields: DebtFields) => {
                return new Debt([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Debt.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Debt>> {
        return phantom(Debt.reified());
    }
    static get p() {
        return Debt.phantom();
    }

    static get bcs() {
        return bcs.struct("Debt", {
            amount: bcs.u64(),
            borrow_index: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Debt {
        return Debt.reified().new({
            amount: decodeFromFields("u64", fields.amount),
            borrowIndex: decodeFromFields("u64", fields.borrow_index),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Debt {
        if (!isDebt(item.type)) {
            throw new Error("not a Debt type");
        }

        return Debt.reified().new({
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
            borrowIndex: decodeFromFieldsWithTypes("u64", item.fields.borrow_index),
        });
    }

    static fromBcs(data: Uint8Array): Debt {
        return Debt.fromFields(Debt.bcs.parse(data));
    }

    toJSONField() {
        return {
            amount: this.amount.toString(),
            borrowIndex: this.borrowIndex.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): Debt {
        return Debt.reified().new({
            amount: decodeFromJSONField("u64", field.amount),
            borrowIndex: decodeFromJSONField("u64", field.borrowIndex),
        });
    }

    static fromJSON(json: Record<string, any>): Debt {
        if (json.$typeName !== Debt.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Debt.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Debt {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDebt(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Debt object`);
        }
        return Debt.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<Debt> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Debt object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDebt(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Debt object`);
        }
        return Debt.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== ObligationDebts =============================== */

export function isObligationDebts(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_debts::ObligationDebts";
}

export interface ObligationDebtsFields {
    dummyField: ToField<"bool">;
}

export type ObligationDebtsReified = Reified<ObligationDebts, ObligationDebtsFields>;

export class ObligationDebts implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_debts::ObligationDebts";
    static readonly $numTypeParams = 0;

    readonly $typeName = ObligationDebts.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_debts::ObligationDebts";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: ObligationDebtsFields) {
        this.$fullTypeName = composeSuiType(
            ObligationDebts.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_debts::ObligationDebts";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): ObligationDebtsReified {
        return {
            typeName: ObligationDebts.$typeName,
            fullTypeName: composeSuiType(
                ObligationDebts.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::obligation_debts::ObligationDebts",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ObligationDebts.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ObligationDebts.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ObligationDebts.fromBcs(data),
            bcs: ObligationDebts.bcs,
            fromJSONField: (field: any) => ObligationDebts.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ObligationDebts.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ObligationDebts.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => ObligationDebts.fetch(client, id),
            new: (fields: ObligationDebtsFields) => {
                return new ObligationDebts([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ObligationDebts.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ObligationDebts>> {
        return phantom(ObligationDebts.reified());
    }
    static get p() {
        return ObligationDebts.phantom();
    }

    static get bcs() {
        return bcs.struct("ObligationDebts", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): ObligationDebts {
        return ObligationDebts.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ObligationDebts {
        if (!isObligationDebts(item.type)) {
            throw new Error("not a ObligationDebts type");
        }

        return ObligationDebts.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): ObligationDebts {
        return ObligationDebts.fromFields(ObligationDebts.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): ObligationDebts {
        return ObligationDebts.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): ObligationDebts {
        if (json.$typeName !== ObligationDebts.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ObligationDebts.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ObligationDebts {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isObligationDebts(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ObligationDebts object`);
        }
        return ObligationDebts.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<ObligationDebts> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ObligationDebts object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isObligationDebts(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ObligationDebts object`);
        }
        return ObligationDebts.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
