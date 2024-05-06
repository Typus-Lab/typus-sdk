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

/* ============================== BorrowEvent =============================== */

export function isBorrowEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::borrow::BorrowEvent";
}

export interface BorrowEventFields {
    borrower: ToField<"address">;
    obligation: ToField<ID>;
    asset: ToField<TypeName>;
    amount: ToField<"u64">;
    time: ToField<"u64">;
}

export type BorrowEventReified = Reified<BorrowEvent, BorrowEventFields>;

export class BorrowEvent implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::borrow::BorrowEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = BorrowEvent.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::borrow::BorrowEvent";

    readonly $typeArgs: [];

    readonly borrower: ToField<"address">;
    readonly obligation: ToField<ID>;
    readonly asset: ToField<TypeName>;
    readonly amount: ToField<"u64">;
    readonly time: ToField<"u64">;

    private constructor(typeArgs: [], fields: BorrowEventFields) {
        this.$fullTypeName = composeSuiType(
            BorrowEvent.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::borrow::BorrowEvent";
        this.$typeArgs = typeArgs;

        this.borrower = fields.borrower;
        this.obligation = fields.obligation;
        this.asset = fields.asset;
        this.amount = fields.amount;
        this.time = fields.time;
    }

    static reified(): BorrowEventReified {
        return {
            typeName: BorrowEvent.$typeName,
            fullTypeName: composeSuiType(
                BorrowEvent.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::borrow::BorrowEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => BorrowEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => BorrowEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => BorrowEvent.fromBcs(data),
            bcs: BorrowEvent.bcs,
            fromJSONField: (field: any) => BorrowEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => BorrowEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => BorrowEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => BorrowEvent.fetch(client, id),
            new: (fields: BorrowEventFields) => {
                return new BorrowEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return BorrowEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<BorrowEvent>> {
        return phantom(BorrowEvent.reified());
    }
    static get p() {
        return BorrowEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("BorrowEvent", {
            borrower: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            obligation: ID.bcs,
            asset: TypeName.bcs,
            amount: bcs.u64(),
            time: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): BorrowEvent {
        return BorrowEvent.reified().new({
            borrower: decodeFromFields("address", fields.borrower),
            obligation: decodeFromFields(ID.reified(), fields.obligation),
            asset: decodeFromFields(TypeName.reified(), fields.asset),
            amount: decodeFromFields("u64", fields.amount),
            time: decodeFromFields("u64", fields.time),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): BorrowEvent {
        if (!isBorrowEvent(item.type)) {
            throw new Error("not a BorrowEvent type");
        }

        return BorrowEvent.reified().new({
            borrower: decodeFromFieldsWithTypes("address", item.fields.borrower),
            obligation: decodeFromFieldsWithTypes(ID.reified(), item.fields.obligation),
            asset: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.asset),
            amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
            time: decodeFromFieldsWithTypes("u64", item.fields.time),
        });
    }

    static fromBcs(data: Uint8Array): BorrowEvent {
        return BorrowEvent.fromFields(BorrowEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            borrower: this.borrower,
            obligation: this.obligation,
            asset: this.asset.toJSONField(),
            amount: this.amount.toString(),
            time: this.time.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): BorrowEvent {
        return BorrowEvent.reified().new({
            borrower: decodeFromJSONField("address", field.borrower),
            obligation: decodeFromJSONField(ID.reified(), field.obligation),
            asset: decodeFromJSONField(TypeName.reified(), field.asset),
            amount: decodeFromJSONField("u64", field.amount),
            time: decodeFromJSONField("u64", field.time),
        });
    }

    static fromJSON(json: Record<string, any>): BorrowEvent {
        if (json.$typeName !== BorrowEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return BorrowEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): BorrowEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBorrowEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a BorrowEvent object`);
        }
        return BorrowEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<BorrowEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching BorrowEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isBorrowEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BorrowEvent object`);
        }
        return BorrowEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
