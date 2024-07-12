import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isAggregatorInfo(type: string): boolean;
export interface AggregatorInfoFields {
    aggregatorAddr: ToField<"address">;
    latestResult: ToField<"u128">;
    latestResultScalingFactor: ToField<"u8">;
    latestTimestamp: ToField<"u64">;
    negative: ToField<"bool">;
}
export type AggregatorInfoReified = Reified<AggregatorInfo, AggregatorInfoFields>;
export declare class AggregatorInfo implements StructClass {
    static readonly $typeName = "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::switchboard_feed_parser::AggregatorInfo";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::switchboard_feed_parser::AggregatorInfo";
    readonly $fullTypeName: "0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::switchboard_feed_parser::AggregatorInfo";
    readonly $typeArgs: [];
    readonly aggregatorAddr: ToField<"address">;
    readonly latestResult: ToField<"u128">;
    readonly latestResultScalingFactor: ToField<"u8">;
    readonly latestTimestamp: ToField<"u64">;
    readonly negative: ToField<"bool">;
    private constructor();
    static reified(): AggregatorInfoReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<AggregatorInfo, AggregatorInfoFields>;
    static phantom(): PhantomReified<ToTypeStr<AggregatorInfo>>;
    static get p(): PhantomReified<"0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73::switchboard_feed_parser::AggregatorInfo">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        aggregator_addr: string;
        latest_result: string;
        latest_result_scaling_factor: number;
        latest_timestamp: string;
        negative: boolean;
    }, {
        aggregator_addr: string;
        latest_result: string | number | bigint;
        latest_result_scaling_factor: number;
        latest_timestamp: string | number | bigint;
        negative: boolean;
    }>;
    static fromFields(fields: Record<string, any>): AggregatorInfo;
    static fromFieldsWithTypes(item: FieldsWithTypes): AggregatorInfo;
    static fromBcs(data: Uint8Array): AggregatorInfo;
    toJSONField(): {
        aggregatorAddr: string;
        latestResult: string;
        latestResultScalingFactor: number;
        latestTimestamp: string;
        negative: boolean;
    };
    toJSON(): {
        aggregatorAddr: string;
        latestResult: string;
        latestResultScalingFactor: number;
        latestTimestamp: string;
        negative: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AggregatorInfo;
    static fromJSON(json: Record<string, any>): AggregatorInfo;
    static fromSuiParsedData(content: SuiParsedData): AggregatorInfo;
    static fetch(client: SuiClient, id: string): Promise<AggregatorInfo>;
}
