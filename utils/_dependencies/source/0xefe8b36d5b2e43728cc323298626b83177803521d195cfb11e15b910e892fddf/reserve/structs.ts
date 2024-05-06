import * as reified from "../../../../_framework/reified";
import {
    PhantomReified,
    PhantomToTypeStr,
    PhantomTypeArgument,
    Reified,
    StructClass,
    ToField,
    ToPhantomTypeArgument,
    ToTypeStr,
    assertFieldsWithTypesArgsMatch,
    assertReifiedTypeArgsMatch,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    extractType,
    phantom,
    ToTypeStr as ToPhantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { TypeName } from "../../0x1/type-name/structs";
import { UID } from "../../0x2/object/structs";
import { BalanceBag } from "../../0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162/balance-bag/structs";
import { SupplyBag } from "../../0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162/supply-bag/structs";
import { WitTable } from "../../0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162/wit-table/structs";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== BalanceSheet =============================== */

export function isBalanceSheet(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::BalanceSheet";
}

export interface BalanceSheetFields {
    cash: ToField<"u64">;
    debt: ToField<"u64">;
    revenue: ToField<"u64">;
    marketCoinSupply: ToField<"u64">;
}

export type BalanceSheetReified = Reified<BalanceSheet, BalanceSheetFields>;

export class BalanceSheet implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::BalanceSheet";
    static readonly $numTypeParams = 0;

    readonly $typeName = BalanceSheet.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::BalanceSheet";

    readonly $typeArgs: [];

    readonly cash: ToField<"u64">;
    readonly debt: ToField<"u64">;
    readonly revenue: ToField<"u64">;
    readonly marketCoinSupply: ToField<"u64">;

    private constructor(typeArgs: [], fields: BalanceSheetFields) {
        this.$fullTypeName = composeSuiType(
            BalanceSheet.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::BalanceSheet";
        this.$typeArgs = typeArgs;

        this.cash = fields.cash;
        this.debt = fields.debt;
        this.revenue = fields.revenue;
        this.marketCoinSupply = fields.marketCoinSupply;
    }

    static reified(): BalanceSheetReified {
        return {
            typeName: BalanceSheet.$typeName,
            fullTypeName: composeSuiType(
                BalanceSheet.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::BalanceSheet",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => BalanceSheet.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => BalanceSheet.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => BalanceSheet.fromBcs(data),
            bcs: BalanceSheet.bcs,
            fromJSONField: (field: any) => BalanceSheet.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => BalanceSheet.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => BalanceSheet.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => BalanceSheet.fetch(client, id),
            new: (fields: BalanceSheetFields) => {
                return new BalanceSheet([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return BalanceSheet.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<BalanceSheet>> {
        return phantom(BalanceSheet.reified());
    }
    static get p() {
        return BalanceSheet.phantom();
    }

    static get bcs() {
        return bcs.struct("BalanceSheet", {
            cash: bcs.u64(),
            debt: bcs.u64(),
            revenue: bcs.u64(),
            market_coin_supply: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): BalanceSheet {
        return BalanceSheet.reified().new({
            cash: decodeFromFields("u64", fields.cash),
            debt: decodeFromFields("u64", fields.debt),
            revenue: decodeFromFields("u64", fields.revenue),
            marketCoinSupply: decodeFromFields("u64", fields.market_coin_supply),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): BalanceSheet {
        if (!isBalanceSheet(item.type)) {
            throw new Error("not a BalanceSheet type");
        }

        return BalanceSheet.reified().new({
            cash: decodeFromFieldsWithTypes("u64", item.fields.cash),
            debt: decodeFromFieldsWithTypes("u64", item.fields.debt),
            revenue: decodeFromFieldsWithTypes("u64", item.fields.revenue),
            marketCoinSupply: decodeFromFieldsWithTypes("u64", item.fields.market_coin_supply),
        });
    }

    static fromBcs(data: Uint8Array): BalanceSheet {
        return BalanceSheet.fromFields(BalanceSheet.bcs.parse(data));
    }

    toJSONField() {
        return {
            cash: this.cash.toString(),
            debt: this.debt.toString(),
            revenue: this.revenue.toString(),
            marketCoinSupply: this.marketCoinSupply.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): BalanceSheet {
        return BalanceSheet.reified().new({
            cash: decodeFromJSONField("u64", field.cash),
            debt: decodeFromJSONField("u64", field.debt),
            revenue: decodeFromJSONField("u64", field.revenue),
            marketCoinSupply: decodeFromJSONField("u64", field.marketCoinSupply),
        });
    }

    static fromJSON(json: Record<string, any>): BalanceSheet {
        if (json.$typeName !== BalanceSheet.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return BalanceSheet.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): BalanceSheet {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBalanceSheet(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a BalanceSheet object`);
        }
        return BalanceSheet.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<BalanceSheet> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching BalanceSheet object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isBalanceSheet(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BalanceSheet object`);
        }
        return BalanceSheet.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== BalanceSheets =============================== */

export function isBalanceSheets(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::BalanceSheets";
}

export interface BalanceSheetsFields {
    dummyField: ToField<"bool">;
}

export type BalanceSheetsReified = Reified<BalanceSheets, BalanceSheetsFields>;

export class BalanceSheets implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::BalanceSheets";
    static readonly $numTypeParams = 0;

    readonly $typeName = BalanceSheets.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::BalanceSheets";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: BalanceSheetsFields) {
        this.$fullTypeName = composeSuiType(
            BalanceSheets.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::BalanceSheets";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): BalanceSheetsReified {
        return {
            typeName: BalanceSheets.$typeName,
            fullTypeName: composeSuiType(
                BalanceSheets.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::BalanceSheets",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => BalanceSheets.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => BalanceSheets.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => BalanceSheets.fromBcs(data),
            bcs: BalanceSheets.bcs,
            fromJSONField: (field: any) => BalanceSheets.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => BalanceSheets.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => BalanceSheets.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => BalanceSheets.fetch(client, id),
            new: (fields: BalanceSheetsFields) => {
                return new BalanceSheets([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return BalanceSheets.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<BalanceSheets>> {
        return phantom(BalanceSheets.reified());
    }
    static get p() {
        return BalanceSheets.phantom();
    }

    static get bcs() {
        return bcs.struct("BalanceSheets", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): BalanceSheets {
        return BalanceSheets.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): BalanceSheets {
        if (!isBalanceSheets(item.type)) {
            throw new Error("not a BalanceSheets type");
        }

        return BalanceSheets.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): BalanceSheets {
        return BalanceSheets.fromFields(BalanceSheets.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): BalanceSheets {
        return BalanceSheets.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): BalanceSheets {
        if (json.$typeName !== BalanceSheets.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return BalanceSheets.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): BalanceSheets {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBalanceSheets(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a BalanceSheets object`);
        }
        return BalanceSheets.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<BalanceSheets> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching BalanceSheets object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isBalanceSheets(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BalanceSheets object`);
        }
        return BalanceSheets.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== FlashLoan =============================== */

export function isFlashLoan(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::FlashLoan<");
}

export interface FlashLoanFields<T extends PhantomTypeArgument> {
    loanAmount: ToField<"u64">;
    fee: ToField<"u64">;
}

export type FlashLoanReified<T extends PhantomTypeArgument> = Reified<FlashLoan<T>, FlashLoanFields<T>>;

export class FlashLoan<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::FlashLoan";
    static readonly $numTypeParams = 1;

    readonly $typeName = FlashLoan.$typeName;

    readonly $fullTypeName: `0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::FlashLoan<${PhantomToTypeStr<T>}>`;

    readonly $typeArgs: [PhantomToTypeStr<T>];

    readonly loanAmount: ToField<"u64">;
    readonly fee: ToField<"u64">;

    private constructor(typeArgs: [PhantomToTypeStr<T>], fields: FlashLoanFields<T>) {
        this.$fullTypeName = composeSuiType(
            FlashLoan.$typeName,
            ...typeArgs
        ) as `0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::FlashLoan<${PhantomToTypeStr<T>}>`;
        this.$typeArgs = typeArgs;

        this.loanAmount = fields.loanAmount;
        this.fee = fields.fee;
    }

    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): FlashLoanReified<ToPhantomTypeArgument<T>> {
        return {
            typeName: FlashLoan.$typeName,
            fullTypeName: composeSuiType(
                FlashLoan.$typeName,
                ...[extractType(T)]
            ) as `0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::FlashLoan<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
            typeArgs: [extractType(T)] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>],
            reifiedTypeArgs: [T],
            fromFields: (fields: Record<string, any>) => FlashLoan.fromFields(T, fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => FlashLoan.fromFieldsWithTypes(T, item),
            fromBcs: (data: Uint8Array) => FlashLoan.fromBcs(T, data),
            bcs: FlashLoan.bcs,
            fromJSONField: (field: any) => FlashLoan.fromJSONField(T, field),
            fromJSON: (json: Record<string, any>) => FlashLoan.fromJSON(T, json),
            fromSuiParsedData: (content: SuiParsedData) => FlashLoan.fromSuiParsedData(T, content),
            fetch: async (client: SuiClient, id: string) => FlashLoan.fetch(client, T, id),
            new: (fields: FlashLoanFields<ToPhantomTypeArgument<T>>) => {
                return new FlashLoan([extractType(T)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return FlashLoan.reified;
    }

    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<FlashLoan<ToPhantomTypeArgument<T>>>> {
        return phantom(FlashLoan.reified(T));
    }
    static get p() {
        return FlashLoan.phantom;
    }

    static get bcs() {
        return bcs.struct("FlashLoan", {
            loan_amount: bcs.u64(),
            fee: bcs.u64(),
        });
    }

    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        fields: Record<string, any>
    ): FlashLoan<ToPhantomTypeArgument<T>> {
        return FlashLoan.reified(typeArg).new({
            loanAmount: decodeFromFields("u64", fields.loan_amount),
            fee: decodeFromFields("u64", fields.fee),
        });
    }

    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        item: FieldsWithTypes
    ): FlashLoan<ToPhantomTypeArgument<T>> {
        if (!isFlashLoan(item.type)) {
            throw new Error("not a FlashLoan type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return FlashLoan.reified(typeArg).new({
            loanAmount: decodeFromFieldsWithTypes("u64", item.fields.loan_amount),
            fee: decodeFromFieldsWithTypes("u64", item.fields.fee),
        });
    }

    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): FlashLoan<ToPhantomTypeArgument<T>> {
        return FlashLoan.fromFields(typeArg, FlashLoan.bcs.parse(data));
    }

    toJSONField() {
        return {
            loanAmount: this.loanAmount.toString(),
            fee: this.fee.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): FlashLoan<ToPhantomTypeArgument<T>> {
        return FlashLoan.reified(typeArg).new({
            loanAmount: decodeFromJSONField("u64", field.loanAmount),
            fee: decodeFromJSONField("u64", field.fee),
        });
    }

    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        json: Record<string, any>
    ): FlashLoan<ToPhantomTypeArgument<T>> {
        if (json.$typeName !== FlashLoan.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(FlashLoan.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg]);

        return FlashLoan.fromJSONField(typeArg, json);
    }

    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        content: SuiParsedData
    ): FlashLoan<ToPhantomTypeArgument<T>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isFlashLoan(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a FlashLoan object`);
        }
        return FlashLoan.fromFieldsWithTypes(typeArg, content);
    }

    static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient,
        typeArg: T,
        id: string
    ): Promise<FlashLoan<ToPhantomTypeArgument<T>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching FlashLoan object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFlashLoan(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FlashLoan object`);
        }
        return FlashLoan.fromBcs(typeArg, fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== FlashLoanFees =============================== */

export function isFlashLoanFees(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::FlashLoanFees";
}

export interface FlashLoanFeesFields {
    dummyField: ToField<"bool">;
}

export type FlashLoanFeesReified = Reified<FlashLoanFees, FlashLoanFeesFields>;

export class FlashLoanFees implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::FlashLoanFees";
    static readonly $numTypeParams = 0;

    readonly $typeName = FlashLoanFees.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::FlashLoanFees";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: FlashLoanFeesFields) {
        this.$fullTypeName = composeSuiType(
            FlashLoanFees.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::FlashLoanFees";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): FlashLoanFeesReified {
        return {
            typeName: FlashLoanFees.$typeName,
            fullTypeName: composeSuiType(
                FlashLoanFees.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::FlashLoanFees",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => FlashLoanFees.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => FlashLoanFees.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => FlashLoanFees.fromBcs(data),
            bcs: FlashLoanFees.bcs,
            fromJSONField: (field: any) => FlashLoanFees.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => FlashLoanFees.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => FlashLoanFees.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => FlashLoanFees.fetch(client, id),
            new: (fields: FlashLoanFeesFields) => {
                return new FlashLoanFees([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return FlashLoanFees.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<FlashLoanFees>> {
        return phantom(FlashLoanFees.reified());
    }
    static get p() {
        return FlashLoanFees.phantom();
    }

    static get bcs() {
        return bcs.struct("FlashLoanFees", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): FlashLoanFees {
        return FlashLoanFees.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): FlashLoanFees {
        if (!isFlashLoanFees(item.type)) {
            throw new Error("not a FlashLoanFees type");
        }

        return FlashLoanFees.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): FlashLoanFees {
        return FlashLoanFees.fromFields(FlashLoanFees.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): FlashLoanFees {
        return FlashLoanFees.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): FlashLoanFees {
        if (json.$typeName !== FlashLoanFees.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return FlashLoanFees.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): FlashLoanFees {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isFlashLoanFees(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a FlashLoanFees object`);
        }
        return FlashLoanFees.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<FlashLoanFees> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching FlashLoanFees object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFlashLoanFees(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FlashLoanFees object`);
        }
        return FlashLoanFees.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== MarketCoin =============================== */

export function isMarketCoin(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::MarketCoin<");
}

export interface MarketCoinFields<T extends PhantomTypeArgument> {
    dummyField: ToField<"bool">;
}

export type MarketCoinReified<T extends PhantomTypeArgument> = Reified<MarketCoin<T>, MarketCoinFields<T>>;

export class MarketCoin<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::MarketCoin";
    static readonly $numTypeParams = 1;

    readonly $typeName = MarketCoin.$typeName;

    readonly $fullTypeName: `0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::MarketCoin<${PhantomToTypeStr<T>}>`;

    readonly $typeArgs: [PhantomToTypeStr<T>];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [PhantomToTypeStr<T>], fields: MarketCoinFields<T>) {
        this.$fullTypeName = composeSuiType(
            MarketCoin.$typeName,
            ...typeArgs
        ) as `0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::MarketCoin<${PhantomToTypeStr<T>}>`;
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): MarketCoinReified<ToPhantomTypeArgument<T>> {
        return {
            typeName: MarketCoin.$typeName,
            fullTypeName: composeSuiType(
                MarketCoin.$typeName,
                ...[extractType(T)]
            ) as `0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::MarketCoin<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
            typeArgs: [extractType(T)] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>],
            reifiedTypeArgs: [T],
            fromFields: (fields: Record<string, any>) => MarketCoin.fromFields(T, fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => MarketCoin.fromFieldsWithTypes(T, item),
            fromBcs: (data: Uint8Array) => MarketCoin.fromBcs(T, data),
            bcs: MarketCoin.bcs,
            fromJSONField: (field: any) => MarketCoin.fromJSONField(T, field),
            fromJSON: (json: Record<string, any>) => MarketCoin.fromJSON(T, json),
            fromSuiParsedData: (content: SuiParsedData) => MarketCoin.fromSuiParsedData(T, content),
            fetch: async (client: SuiClient, id: string) => MarketCoin.fetch(client, T, id),
            new: (fields: MarketCoinFields<ToPhantomTypeArgument<T>>) => {
                return new MarketCoin([extractType(T)], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return MarketCoin.reified;
    }

    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<MarketCoin<ToPhantomTypeArgument<T>>>> {
        return phantom(MarketCoin.reified(T));
    }
    static get p() {
        return MarketCoin.phantom;
    }

    static get bcs() {
        return bcs.struct("MarketCoin", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        fields: Record<string, any>
    ): MarketCoin<ToPhantomTypeArgument<T>> {
        return MarketCoin.reified(typeArg).new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        item: FieldsWithTypes
    ): MarketCoin<ToPhantomTypeArgument<T>> {
        if (!isMarketCoin(item.type)) {
            throw new Error("not a MarketCoin type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return MarketCoin.reified(typeArg).new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): MarketCoin<ToPhantomTypeArgument<T>> {
        return MarketCoin.fromFields(typeArg, MarketCoin.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): MarketCoin<ToPhantomTypeArgument<T>> {
        return MarketCoin.reified(typeArg).new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        json: Record<string, any>
    ): MarketCoin<ToPhantomTypeArgument<T>> {
        if (json.$typeName !== MarketCoin.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        assertReifiedTypeArgsMatch(composeSuiType(MarketCoin.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg]);

        return MarketCoin.fromJSONField(typeArg, json);
    }

    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T,
        content: SuiParsedData
    ): MarketCoin<ToPhantomTypeArgument<T>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMarketCoin(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a MarketCoin object`);
        }
        return MarketCoin.fromFieldsWithTypes(typeArg, content);
    }

    static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient,
        typeArg: T,
        id: string
    ): Promise<MarketCoin<ToPhantomTypeArgument<T>>> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching MarketCoin object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMarketCoin(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MarketCoin object`);
        }
        return MarketCoin.fromBcs(typeArg, fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== Reserve =============================== */

export function isReserve(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::Reserve";
}

export interface ReserveFields {
    id: ToField<UID>;
    marketCoinSupplies: ToField<SupplyBag>;
    underlyingBalances: ToField<BalanceBag>;
    balanceSheets: ToField<WitTable<ToPhantom<BalanceSheets>, TypeName, ToPhantom<BalanceSheet>>>;
    flashLoanFees: ToField<WitTable<ToPhantom<FlashLoanFees>, TypeName, "u64">>;
}

export type ReserveReified = Reified<Reserve, ReserveFields>;

export class Reserve implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::Reserve";
    static readonly $numTypeParams = 0;

    readonly $typeName = Reserve.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::Reserve";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly marketCoinSupplies: ToField<SupplyBag>;
    readonly underlyingBalances: ToField<BalanceBag>;
    readonly balanceSheets: ToField<WitTable<ToPhantom<BalanceSheets>, TypeName, ToPhantom<BalanceSheet>>>;
    readonly flashLoanFees: ToField<WitTable<ToPhantom<FlashLoanFees>, TypeName, "u64">>;

    private constructor(typeArgs: [], fields: ReserveFields) {
        this.$fullTypeName = composeSuiType(
            Reserve.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::Reserve";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.marketCoinSupplies = fields.marketCoinSupplies;
        this.underlyingBalances = fields.underlyingBalances;
        this.balanceSheets = fields.balanceSheets;
        this.flashLoanFees = fields.flashLoanFees;
    }

    static reified(): ReserveReified {
        return {
            typeName: Reserve.$typeName,
            fullTypeName: composeSuiType(
                Reserve.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::Reserve",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Reserve.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Reserve.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Reserve.fromBcs(data),
            bcs: Reserve.bcs,
            fromJSONField: (field: any) => Reserve.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Reserve.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Reserve.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => Reserve.fetch(client, id),
            new: (fields: ReserveFields) => {
                return new Reserve([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Reserve.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Reserve>> {
        return phantom(Reserve.reified());
    }
    static get p() {
        return Reserve.phantom();
    }

    static get bcs() {
        return bcs.struct("Reserve", {
            id: UID.bcs,
            market_coin_supplies: SupplyBag.bcs,
            underlying_balances: BalanceBag.bcs,
            balance_sheets: WitTable.bcs(TypeName.bcs),
            flash_loan_fees: WitTable.bcs(TypeName.bcs),
        });
    }

    static fromFields(fields: Record<string, any>): Reserve {
        return Reserve.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            marketCoinSupplies: decodeFromFields(SupplyBag.reified(), fields.market_coin_supplies),
            underlyingBalances: decodeFromFields(BalanceBag.reified(), fields.underlying_balances),
            balanceSheets: decodeFromFields(
                WitTable.reified(reified.phantom(BalanceSheets.reified()), TypeName.reified(), reified.phantom(BalanceSheet.reified())),
                fields.balance_sheets
            ),
            flashLoanFees: decodeFromFields(
                WitTable.reified(reified.phantom(FlashLoanFees.reified()), TypeName.reified(), reified.phantom("u64")),
                fields.flash_loan_fees
            ),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Reserve {
        if (!isReserve(item.type)) {
            throw new Error("not a Reserve type");
        }

        return Reserve.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            marketCoinSupplies: decodeFromFieldsWithTypes(SupplyBag.reified(), item.fields.market_coin_supplies),
            underlyingBalances: decodeFromFieldsWithTypes(BalanceBag.reified(), item.fields.underlying_balances),
            balanceSheets: decodeFromFieldsWithTypes(
                WitTable.reified(reified.phantom(BalanceSheets.reified()), TypeName.reified(), reified.phantom(BalanceSheet.reified())),
                item.fields.balance_sheets
            ),
            flashLoanFees: decodeFromFieldsWithTypes(
                WitTable.reified(reified.phantom(FlashLoanFees.reified()), TypeName.reified(), reified.phantom("u64")),
                item.fields.flash_loan_fees
            ),
        });
    }

    static fromBcs(data: Uint8Array): Reserve {
        return Reserve.fromFields(Reserve.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            marketCoinSupplies: this.marketCoinSupplies.toJSONField(),
            underlyingBalances: this.underlyingBalances.toJSONField(),
            balanceSheets: this.balanceSheets.toJSONField(),
            flashLoanFees: this.flashLoanFees.toJSONField(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): Reserve {
        return Reserve.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            marketCoinSupplies: decodeFromJSONField(SupplyBag.reified(), field.marketCoinSupplies),
            underlyingBalances: decodeFromJSONField(BalanceBag.reified(), field.underlyingBalances),
            balanceSheets: decodeFromJSONField(
                WitTable.reified(reified.phantom(BalanceSheets.reified()), TypeName.reified(), reified.phantom(BalanceSheet.reified())),
                field.balanceSheets
            ),
            flashLoanFees: decodeFromJSONField(
                WitTable.reified(reified.phantom(FlashLoanFees.reified()), TypeName.reified(), reified.phantom("u64")),
                field.flashLoanFees
            ),
        });
    }

    static fromJSON(json: Record<string, any>): Reserve {
        if (json.$typeName !== Reserve.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Reserve.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Reserve {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isReserve(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Reserve object`);
        }
        return Reserve.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<Reserve> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Reserve object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isReserve(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Reserve object`);
        }
        return Reserve.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
