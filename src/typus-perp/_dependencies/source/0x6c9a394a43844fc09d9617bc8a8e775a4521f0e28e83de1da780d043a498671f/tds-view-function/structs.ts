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
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== DepositShare =============================== */

export function isDepositShare(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::tds_view_function::DepositShare`;
}

export interface DepositShareFields {
    index: ToField<"u64">;
    activeShare: ToField<"u64">;
    deactivatingShare: ToField<"u64">;
    inactiveShare: ToField<"u64">;
    warmupShare: ToField<"u64">;
    premiumShare: ToField<"u64">;
    incentiveShare: ToField<"u64">;
}

export type DepositShareReified = Reified<DepositShare, DepositShareFields>;

export class DepositShare implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::tds_view_function::DepositShare`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = DepositShare.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::tds_view_function::DepositShare`;
    readonly $typeArgs: [];
    readonly $isPhantom = DepositShare.$isPhantom;

    readonly index: ToField<"u64">;
    readonly activeShare: ToField<"u64">;
    readonly deactivatingShare: ToField<"u64">;
    readonly inactiveShare: ToField<"u64">;
    readonly warmupShare: ToField<"u64">;
    readonly premiumShare: ToField<"u64">;
    readonly incentiveShare: ToField<"u64">;

    private constructor(typeArgs: [], fields: DepositShareFields) {
        this.$fullTypeName = composeSuiType(DepositShare.$typeName, ...typeArgs) as `${typeof PKG_V1}::tds_view_function::DepositShare`;
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.activeShare = fields.activeShare;
        this.deactivatingShare = fields.deactivatingShare;
        this.inactiveShare = fields.inactiveShare;
        this.warmupShare = fields.warmupShare;
        this.premiumShare = fields.premiumShare;
        this.incentiveShare = fields.incentiveShare;
    }

    static reified(): DepositShareReified {
        return {
            typeName: DepositShare.$typeName,
            fullTypeName: composeSuiType(DepositShare.$typeName, ...[]) as `${typeof PKG_V1}::tds_view_function::DepositShare`,
            typeArgs: [] as [],
            isPhantom: DepositShare.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DepositShare.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DepositShare.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DepositShare.fromBcs(data),
            bcs: DepositShare.bcs,
            fromJSONField: (field: any) => DepositShare.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DepositShare.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DepositShare.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => DepositShare.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => DepositShare.fetch(client, id),
            new: (fields: DepositShareFields) => {
                return new DepositShare([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DepositShare.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DepositShare>> {
        return phantom(DepositShare.reified());
    }
    static get p() {
        return DepositShare.phantom();
    }

    static get bcs() {
        return bcs.struct("DepositShare", {
            index: bcs.u64(),
            active_share: bcs.u64(),
            deactivating_share: bcs.u64(),
            inactive_share: bcs.u64(),
            warmup_share: bcs.u64(),
            premium_share: bcs.u64(),
            incentive_share: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): DepositShare {
        return DepositShare.reified().new({
            index: decodeFromFields("u64", fields.index),
            activeShare: decodeFromFields("u64", fields.active_share),
            deactivatingShare: decodeFromFields("u64", fields.deactivating_share),
            inactiveShare: decodeFromFields("u64", fields.inactive_share),
            warmupShare: decodeFromFields("u64", fields.warmup_share),
            premiumShare: decodeFromFields("u64", fields.premium_share),
            incentiveShare: decodeFromFields("u64", fields.incentive_share),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DepositShare {
        if (!isDepositShare(item.type)) {
            throw new Error("not a DepositShare type");
        }

        return DepositShare.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            activeShare: decodeFromFieldsWithTypes("u64", item.fields.active_share),
            deactivatingShare: decodeFromFieldsWithTypes("u64", item.fields.deactivating_share),
            inactiveShare: decodeFromFieldsWithTypes("u64", item.fields.inactive_share),
            warmupShare: decodeFromFieldsWithTypes("u64", item.fields.warmup_share),
            premiumShare: decodeFromFieldsWithTypes("u64", item.fields.premium_share),
            incentiveShare: decodeFromFieldsWithTypes("u64", item.fields.incentive_share),
        });
    }

    static fromBcs(data: Uint8Array): DepositShare {
        return DepositShare.fromFields(DepositShare.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            activeShare: this.activeShare.toString(),
            deactivatingShare: this.deactivatingShare.toString(),
            inactiveShare: this.inactiveShare.toString(),
            warmupShare: this.warmupShare.toString(),
            premiumShare: this.premiumShare.toString(),
            incentiveShare: this.incentiveShare.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): DepositShare {
        return DepositShare.reified().new({
            index: decodeFromJSONField("u64", field.index),
            activeShare: decodeFromJSONField("u64", field.activeShare),
            deactivatingShare: decodeFromJSONField("u64", field.deactivatingShare),
            inactiveShare: decodeFromJSONField("u64", field.inactiveShare),
            warmupShare: decodeFromJSONField("u64", field.warmupShare),
            premiumShare: decodeFromJSONField("u64", field.premiumShare),
            incentiveShare: decodeFromJSONField("u64", field.incentiveShare),
        });
    }

    static fromJSON(json: Record<string, any>): DepositShare {
        if (json.$typeName !== DepositShare.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DepositShare.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DepositShare {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDepositShare(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DepositShare object`);
        }
        return DepositShare.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): DepositShare {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDepositShare(data.bcs.type)) {
                throw new Error(`object at is not a DepositShare object`);
            }

            return DepositShare.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DepositShare.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DepositShare> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DepositShare object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDepositShare(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DepositShare object`);
        }

        return DepositShare.fromSuiObjectData(res.data);
    }
}
