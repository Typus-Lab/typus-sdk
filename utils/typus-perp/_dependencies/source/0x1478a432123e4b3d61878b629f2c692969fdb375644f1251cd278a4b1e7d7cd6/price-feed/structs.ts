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

/* ============================== PriceFeed =============================== */

export function isPriceFeed(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_feed::PriceFeed";
}

export interface PriceFeedFields {
    value: ToField<"u64">;
    lastUpdated: ToField<"u64">;
}

export type PriceFeedReified = Reified<PriceFeed, PriceFeedFields>;

export class PriceFeed implements StructClass {
    static readonly $typeName = "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_feed::PriceFeed";
    static readonly $numTypeParams = 0;

    readonly $typeName = PriceFeed.$typeName;

    readonly $fullTypeName: "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_feed::PriceFeed";

    readonly $typeArgs: [];

    readonly value: ToField<"u64">;
    readonly lastUpdated: ToField<"u64">;

    private constructor(typeArgs: [], fields: PriceFeedFields) {
        this.$fullTypeName = composeSuiType(
            PriceFeed.$typeName,
            ...typeArgs
        ) as "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_feed::PriceFeed";
        this.$typeArgs = typeArgs;

        this.value = fields.value;
        this.lastUpdated = fields.lastUpdated;
    }

    static reified(): PriceFeedReified {
        return {
            typeName: PriceFeed.$typeName,
            fullTypeName: composeSuiType(
                PriceFeed.$typeName,
                ...[]
            ) as "0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6::price_feed::PriceFeed",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => PriceFeed.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => PriceFeed.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => PriceFeed.fromBcs(data),
            bcs: PriceFeed.bcs,
            fromJSONField: (field: any) => PriceFeed.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => PriceFeed.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => PriceFeed.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => PriceFeed.fetch(client, id),
            new: (fields: PriceFeedFields) => {
                return new PriceFeed([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return PriceFeed.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<PriceFeed>> {
        return phantom(PriceFeed.reified());
    }
    static get p() {
        return PriceFeed.phantom();
    }

    static get bcs() {
        return bcs.struct("PriceFeed", {
            value: bcs.u64(),
            last_updated: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): PriceFeed {
        return PriceFeed.reified().new({
            value: decodeFromFields("u64", fields.value),
            lastUpdated: decodeFromFields("u64", fields.last_updated),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): PriceFeed {
        if (!isPriceFeed(item.type)) {
            throw new Error("not a PriceFeed type");
        }

        return PriceFeed.reified().new({
            value: decodeFromFieldsWithTypes("u64", item.fields.value),
            lastUpdated: decodeFromFieldsWithTypes("u64", item.fields.last_updated),
        });
    }

    static fromBcs(data: Uint8Array): PriceFeed {
        return PriceFeed.fromFields(PriceFeed.bcs.parse(data));
    }

    toJSONField() {
        return {
            value: this.value.toString(),
            lastUpdated: this.lastUpdated.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): PriceFeed {
        return PriceFeed.reified().new({
            value: decodeFromJSONField("u64", field.value),
            lastUpdated: decodeFromJSONField("u64", field.lastUpdated),
        });
    }

    static fromJSON(json: Record<string, any>): PriceFeed {
        if (json.$typeName !== PriceFeed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return PriceFeed.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): PriceFeed {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPriceFeed(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PriceFeed object`);
        }
        return PriceFeed.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<PriceFeed> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching PriceFeed object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPriceFeed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PriceFeed object`);
        }
        return PriceFeed.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
