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

/* ============================== MintEvent =============================== */

export function isMintEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::mint::MintEvent";
}

export interface MintEventFields {
    minter: ToField<"address">;
    depositAsset: ToField<TypeName>;
    depositAmount: ToField<"u64">;
    mintAsset: ToField<TypeName>;
    mintAmount: ToField<"u64">;
    time: ToField<"u64">;
}

export type MintEventReified = Reified<MintEvent, MintEventFields>;

export class MintEvent implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::mint::MintEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = MintEvent.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::mint::MintEvent";

    readonly $typeArgs: [];

    readonly minter: ToField<"address">;
    readonly depositAsset: ToField<TypeName>;
    readonly depositAmount: ToField<"u64">;
    readonly mintAsset: ToField<TypeName>;
    readonly mintAmount: ToField<"u64">;
    readonly time: ToField<"u64">;

    private constructor(typeArgs: [], fields: MintEventFields) {
        this.$fullTypeName = composeSuiType(
            MintEvent.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::mint::MintEvent";
        this.$typeArgs = typeArgs;

        this.minter = fields.minter;
        this.depositAsset = fields.depositAsset;
        this.depositAmount = fields.depositAmount;
        this.mintAsset = fields.mintAsset;
        this.mintAmount = fields.mintAmount;
        this.time = fields.time;
    }

    static reified(): MintEventReified {
        return {
            typeName: MintEvent.$typeName,
            fullTypeName: composeSuiType(
                MintEvent.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::mint::MintEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => MintEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => MintEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => MintEvent.fromBcs(data),
            bcs: MintEvent.bcs,
            fromJSONField: (field: any) => MintEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => MintEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => MintEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => MintEvent.fetch(client, id),
            new: (fields: MintEventFields) => {
                return new MintEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return MintEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<MintEvent>> {
        return phantom(MintEvent.reified());
    }
    static get p() {
        return MintEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("MintEvent", {
            minter: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            deposit_asset: TypeName.bcs,
            deposit_amount: bcs.u64(),
            mint_asset: TypeName.bcs,
            mint_amount: bcs.u64(),
            time: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): MintEvent {
        return MintEvent.reified().new({
            minter: decodeFromFields("address", fields.minter),
            depositAsset: decodeFromFields(TypeName.reified(), fields.deposit_asset),
            depositAmount: decodeFromFields("u64", fields.deposit_amount),
            mintAsset: decodeFromFields(TypeName.reified(), fields.mint_asset),
            mintAmount: decodeFromFields("u64", fields.mint_amount),
            time: decodeFromFields("u64", fields.time),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): MintEvent {
        if (!isMintEvent(item.type)) {
            throw new Error("not a MintEvent type");
        }

        return MintEvent.reified().new({
            minter: decodeFromFieldsWithTypes("address", item.fields.minter),
            depositAsset: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.deposit_asset),
            depositAmount: decodeFromFieldsWithTypes("u64", item.fields.deposit_amount),
            mintAsset: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.mint_asset),
            mintAmount: decodeFromFieldsWithTypes("u64", item.fields.mint_amount),
            time: decodeFromFieldsWithTypes("u64", item.fields.time),
        });
    }

    static fromBcs(data: Uint8Array): MintEvent {
        return MintEvent.fromFields(MintEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            minter: this.minter,
            depositAsset: this.depositAsset.toJSONField(),
            depositAmount: this.depositAmount.toString(),
            mintAsset: this.mintAsset.toJSONField(),
            mintAmount: this.mintAmount.toString(),
            time: this.time.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): MintEvent {
        return MintEvent.reified().new({
            minter: decodeFromJSONField("address", field.minter),
            depositAsset: decodeFromJSONField(TypeName.reified(), field.depositAsset),
            depositAmount: decodeFromJSONField("u64", field.depositAmount),
            mintAsset: decodeFromJSONField(TypeName.reified(), field.mintAsset),
            mintAmount: decodeFromJSONField("u64", field.mintAmount),
            time: decodeFromJSONField("u64", field.time),
        });
    }

    static fromJSON(json: Record<string, any>): MintEvent {
        if (json.$typeName !== MintEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return MintEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): MintEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMintEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a MintEvent object`);
        }
        return MintEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<MintEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching MintEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMintEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MintEvent object`);
        }
        return MintEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
