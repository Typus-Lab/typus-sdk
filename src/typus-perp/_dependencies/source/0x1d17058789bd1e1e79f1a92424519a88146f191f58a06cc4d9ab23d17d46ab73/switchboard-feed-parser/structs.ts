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
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== AggregatorInfo =============================== */

export function isAggregatorInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::switchboard_feed_parser::AggregatorInfo`;
}

export interface AggregatorInfoFields {
    aggregatorAddr: ToField<"address">;
    latestResult: ToField<"u128">;
    latestResultScalingFactor: ToField<"u8">;
    latestTimestamp: ToField<"u64">;
    negative: ToField<"bool">;
}

export type AggregatorInfoReified = Reified<AggregatorInfo, AggregatorInfoFields>;

export class AggregatorInfo implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::switchboard_feed_parser::AggregatorInfo`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = AggregatorInfo.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::switchboard_feed_parser::AggregatorInfo`;
    readonly $typeArgs: [];
    readonly $isPhantom = AggregatorInfo.$isPhantom;

    readonly aggregatorAddr: ToField<"address">;
    readonly latestResult: ToField<"u128">;
    readonly latestResultScalingFactor: ToField<"u8">;
    readonly latestTimestamp: ToField<"u64">;
    readonly negative: ToField<"bool">;

    private constructor(typeArgs: [], fields: AggregatorInfoFields) {
        this.$fullTypeName = composeSuiType(
            AggregatorInfo.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::switchboard_feed_parser::AggregatorInfo`;
        this.$typeArgs = typeArgs;

        this.aggregatorAddr = fields.aggregatorAddr;
        this.latestResult = fields.latestResult;
        this.latestResultScalingFactor = fields.latestResultScalingFactor;
        this.latestTimestamp = fields.latestTimestamp;
        this.negative = fields.negative;
    }

    static reified(): AggregatorInfoReified {
        return {
            typeName: AggregatorInfo.$typeName,
            fullTypeName: composeSuiType(AggregatorInfo.$typeName, ...[]) as `${typeof PKG_V1}::switchboard_feed_parser::AggregatorInfo`,
            typeArgs: [] as [],
            isPhantom: AggregatorInfo.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AggregatorInfo.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AggregatorInfo.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AggregatorInfo.fromBcs(data),
            bcs: AggregatorInfo.bcs,
            fromJSONField: (field: any) => AggregatorInfo.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AggregatorInfo.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AggregatorInfo.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => AggregatorInfo.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => AggregatorInfo.fetch(client, id),
            new: (fields: AggregatorInfoFields) => {
                return new AggregatorInfo([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AggregatorInfo.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AggregatorInfo>> {
        return phantom(AggregatorInfo.reified());
    }
    static get p() {
        return AggregatorInfo.phantom();
    }

    static get bcs() {
        return bcs.struct("AggregatorInfo", {
            aggregator_addr: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            latest_result: bcs.u128(),
            latest_result_scaling_factor: bcs.u8(),
            latest_timestamp: bcs.u64(),
            negative: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): AggregatorInfo {
        return AggregatorInfo.reified().new({
            aggregatorAddr: decodeFromFields("address", fields.aggregator_addr),
            latestResult: decodeFromFields("u128", fields.latest_result),
            latestResultScalingFactor: decodeFromFields("u8", fields.latest_result_scaling_factor),
            latestTimestamp: decodeFromFields("u64", fields.latest_timestamp),
            negative: decodeFromFields("bool", fields.negative),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AggregatorInfo {
        if (!isAggregatorInfo(item.type)) {
            throw new Error("not a AggregatorInfo type");
        }

        return AggregatorInfo.reified().new({
            aggregatorAddr: decodeFromFieldsWithTypes("address", item.fields.aggregator_addr),
            latestResult: decodeFromFieldsWithTypes("u128", item.fields.latest_result),
            latestResultScalingFactor: decodeFromFieldsWithTypes("u8", item.fields.latest_result_scaling_factor),
            latestTimestamp: decodeFromFieldsWithTypes("u64", item.fields.latest_timestamp),
            negative: decodeFromFieldsWithTypes("bool", item.fields.negative),
        });
    }

    static fromBcs(data: Uint8Array): AggregatorInfo {
        return AggregatorInfo.fromFields(AggregatorInfo.bcs.parse(data));
    }

    toJSONField() {
        return {
            aggregatorAddr: this.aggregatorAddr,
            latestResult: this.latestResult.toString(),
            latestResultScalingFactor: this.latestResultScalingFactor,
            latestTimestamp: this.latestTimestamp.toString(),
            negative: this.negative,
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): AggregatorInfo {
        return AggregatorInfo.reified().new({
            aggregatorAddr: decodeFromJSONField("address", field.aggregatorAddr),
            latestResult: decodeFromJSONField("u128", field.latestResult),
            latestResultScalingFactor: decodeFromJSONField("u8", field.latestResultScalingFactor),
            latestTimestamp: decodeFromJSONField("u64", field.latestTimestamp),
            negative: decodeFromJSONField("bool", field.negative),
        });
    }

    static fromJSON(json: Record<string, any>): AggregatorInfo {
        if (json.$typeName !== AggregatorInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AggregatorInfo.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AggregatorInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAggregatorInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AggregatorInfo object`);
        }
        return AggregatorInfo.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): AggregatorInfo {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAggregatorInfo(data.bcs.type)) {
                throw new Error(`object at is not a AggregatorInfo object`);
            }

            return AggregatorInfo.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AggregatorInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<AggregatorInfo> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AggregatorInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAggregatorInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AggregatorInfo object`);
        }

        return AggregatorInfo.fromSuiObjectData(res.data);
    }
}
