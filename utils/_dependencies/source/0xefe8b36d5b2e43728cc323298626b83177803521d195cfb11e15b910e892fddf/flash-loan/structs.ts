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

/* ============================== BorrowFlashLoanEvent =============================== */

export function isBorrowFlashLoanEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::flash_loan::BorrowFlashLoanEvent";
}

export interface BorrowFlashLoanEventFields {
    borrower: ToField<"address">;
    asset: ToField<TypeName>;
    amount: ToField<"u64">;
}

export type BorrowFlashLoanEventReified = Reified<BorrowFlashLoanEvent, BorrowFlashLoanEventFields>;

export class BorrowFlashLoanEvent implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::flash_loan::BorrowFlashLoanEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = BorrowFlashLoanEvent.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::flash_loan::BorrowFlashLoanEvent";

    readonly $typeArgs: [];

    readonly borrower: ToField<"address">;
    readonly asset: ToField<TypeName>;
    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: BorrowFlashLoanEventFields) {
        this.$fullTypeName = composeSuiType(
            BorrowFlashLoanEvent.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::flash_loan::BorrowFlashLoanEvent";
        this.$typeArgs = typeArgs;

        this.borrower = fields.borrower;
        this.asset = fields.asset;
        this.amount = fields.amount;
    }

    static reified(): BorrowFlashLoanEventReified {
        return {
            typeName: BorrowFlashLoanEvent.$typeName,
            fullTypeName: composeSuiType(
                BorrowFlashLoanEvent.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::flash_loan::BorrowFlashLoanEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => BorrowFlashLoanEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => BorrowFlashLoanEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => BorrowFlashLoanEvent.fromBcs(data),
            bcs: BorrowFlashLoanEvent.bcs,
            fromJSONField: (field: any) => BorrowFlashLoanEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => BorrowFlashLoanEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => BorrowFlashLoanEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => BorrowFlashLoanEvent.fetch(client, id),
            new: (fields: BorrowFlashLoanEventFields) => {
                return new BorrowFlashLoanEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return BorrowFlashLoanEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<BorrowFlashLoanEvent>> {
        return phantom(BorrowFlashLoanEvent.reified());
    }
    static get p() {
        return BorrowFlashLoanEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("BorrowFlashLoanEvent", {
            borrower: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            asset: TypeName.bcs,
            amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): BorrowFlashLoanEvent {
        return BorrowFlashLoanEvent.reified().new({
            borrower: decodeFromFields("address", fields.borrower),
            asset: decodeFromFields(TypeName.reified(), fields.asset),
            amount: decodeFromFields("u64", fields.amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): BorrowFlashLoanEvent {
        if (!isBorrowFlashLoanEvent(item.type)) {
            throw new Error("not a BorrowFlashLoanEvent type");
        }

        return BorrowFlashLoanEvent.reified().new({
            borrower: decodeFromFieldsWithTypes("address", item.fields.borrower),
            asset: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.asset),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
        });
    }

    static fromBcs(data: Uint8Array): BorrowFlashLoanEvent {
        return BorrowFlashLoanEvent.fromFields(BorrowFlashLoanEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            borrower: this.borrower,
            asset: this.asset.toJSONField(),
            amount: this.amount.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): BorrowFlashLoanEvent {
        return BorrowFlashLoanEvent.reified().new({
            borrower: decodeFromJSONField("address", field.borrower),
            asset: decodeFromJSONField(TypeName.reified(), field.asset),
            amount: decodeFromJSONField("u64", field.amount),
        });
    }

    static fromJSON(json: Record<string, any>): BorrowFlashLoanEvent {
        if (json.$typeName !== BorrowFlashLoanEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return BorrowFlashLoanEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): BorrowFlashLoanEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBorrowFlashLoanEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a BorrowFlashLoanEvent object`);
        }
        return BorrowFlashLoanEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<BorrowFlashLoanEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching BorrowFlashLoanEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isBorrowFlashLoanEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BorrowFlashLoanEvent object`);
        }
        return BorrowFlashLoanEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== RepayFlashLoanEvent =============================== */

export function isRepayFlashLoanEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::flash_loan::RepayFlashLoanEvent";
}

export interface RepayFlashLoanEventFields {
    borrower: ToField<"address">;
    asset: ToField<TypeName>;
    amount: ToField<"u64">;
}

export type RepayFlashLoanEventReified = Reified<RepayFlashLoanEvent, RepayFlashLoanEventFields>;

export class RepayFlashLoanEvent implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::flash_loan::RepayFlashLoanEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = RepayFlashLoanEvent.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::flash_loan::RepayFlashLoanEvent";

    readonly $typeArgs: [];

    readonly borrower: ToField<"address">;
    readonly asset: ToField<TypeName>;
    readonly amount: ToField<"u64">;

    private constructor(typeArgs: [], fields: RepayFlashLoanEventFields) {
        this.$fullTypeName = composeSuiType(
            RepayFlashLoanEvent.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::flash_loan::RepayFlashLoanEvent";
        this.$typeArgs = typeArgs;

        this.borrower = fields.borrower;
        this.asset = fields.asset;
        this.amount = fields.amount;
    }

    static reified(): RepayFlashLoanEventReified {
        return {
            typeName: RepayFlashLoanEvent.$typeName,
            fullTypeName: composeSuiType(
                RepayFlashLoanEvent.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::flash_loan::RepayFlashLoanEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RepayFlashLoanEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RepayFlashLoanEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RepayFlashLoanEvent.fromBcs(data),
            bcs: RepayFlashLoanEvent.bcs,
            fromJSONField: (field: any) => RepayFlashLoanEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RepayFlashLoanEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RepayFlashLoanEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => RepayFlashLoanEvent.fetch(client, id),
            new: (fields: RepayFlashLoanEventFields) => {
                return new RepayFlashLoanEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RepayFlashLoanEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RepayFlashLoanEvent>> {
        return phantom(RepayFlashLoanEvent.reified());
    }
    static get p() {
        return RepayFlashLoanEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RepayFlashLoanEvent", {
            borrower: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            asset: TypeName.bcs,
            amount: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): RepayFlashLoanEvent {
        return RepayFlashLoanEvent.reified().new({
            borrower: decodeFromFields("address", fields.borrower),
            asset: decodeFromFields(TypeName.reified(), fields.asset),
            amount: decodeFromFields("u64", fields.amount),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RepayFlashLoanEvent {
        if (!isRepayFlashLoanEvent(item.type)) {
            throw new Error("not a RepayFlashLoanEvent type");
        }

        return RepayFlashLoanEvent.reified().new({
            borrower: decodeFromFieldsWithTypes("address", item.fields.borrower),
            asset: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.asset),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
        });
    }

    static fromBcs(data: Uint8Array): RepayFlashLoanEvent {
        return RepayFlashLoanEvent.fromFields(RepayFlashLoanEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            borrower: this.borrower,
            asset: this.asset.toJSONField(),
            amount: this.amount.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): RepayFlashLoanEvent {
        return RepayFlashLoanEvent.reified().new({
            borrower: decodeFromJSONField("address", field.borrower),
            asset: decodeFromJSONField(TypeName.reified(), field.asset),
            amount: decodeFromJSONField("u64", field.amount),
        });
    }

    static fromJSON(json: Record<string, any>): RepayFlashLoanEvent {
        if (json.$typeName !== RepayFlashLoanEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RepayFlashLoanEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RepayFlashLoanEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRepayFlashLoanEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RepayFlashLoanEvent object`);
        }
        return RepayFlashLoanEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<RepayFlashLoanEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RepayFlashLoanEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRepayFlashLoanEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RepayFlashLoanEvent object`);
        }
        return RepayFlashLoanEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
