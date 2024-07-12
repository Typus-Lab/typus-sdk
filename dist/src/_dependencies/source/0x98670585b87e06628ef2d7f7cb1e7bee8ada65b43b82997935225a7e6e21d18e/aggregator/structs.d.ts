import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Bag } from "../../0x2/bag/structs";
import { UID } from "../../0x2/object/structs";
import { SwitchboardDecimal } from "../math/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isAggregator(type: string): boolean;
export interface AggregatorFields {
    id: ToField<UID>;
    authority: ToField<"address">;
    queueAddr: ToField<"address">;
    tokenAddr: ToField<"address">;
    batchSize: ToField<"u64">;
    minOracleResults: ToField<"u64">;
    minUpdateDelaySeconds: ToField<"u64">;
    name: ToField<Vector<"u8">>;
    historyLimit: ToField<"u64">;
    varianceThreshold: ToField<SwitchboardDecimal>;
    forceReportPeriod: ToField<"u64">;
    minJobResults: ToField<"u64">;
    crankDisabled: ToField<"bool">;
    crankRowCount: ToField<"u8">;
    nextAllowedUpdateTime: ToField<"u64">;
    createdAt: ToField<"u64">;
    readCharge: ToField<"u64">;
    rewardEscrow: ToField<"address">;
    readWhitelist: ToField<Bag>;
    limitReadsToWhitelist: ToField<"bool">;
    updateData: ToField<SlidingWindow>;
    intervalId: ToField<"u64">;
    currIntervalPayouts: ToField<"u64">;
    nextIntervalRefreshTime: ToField<"u64">;
    escrows: ToField<Bag>;
    friendKey: ToField<Vector<"u8">>;
    version: ToField<"u64">;
}
export type AggregatorReified = Reified<Aggregator, AggregatorFields>;
export declare class Aggregator implements StructClass {
    static readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::Aggregator";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::Aggregator";
    readonly $fullTypeName: "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::Aggregator";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly authority: ToField<"address">;
    readonly queueAddr: ToField<"address">;
    readonly tokenAddr: ToField<"address">;
    readonly batchSize: ToField<"u64">;
    readonly minOracleResults: ToField<"u64">;
    readonly minUpdateDelaySeconds: ToField<"u64">;
    readonly name: ToField<Vector<"u8">>;
    readonly historyLimit: ToField<"u64">;
    readonly varianceThreshold: ToField<SwitchboardDecimal>;
    readonly forceReportPeriod: ToField<"u64">;
    readonly minJobResults: ToField<"u64">;
    readonly crankDisabled: ToField<"bool">;
    readonly crankRowCount: ToField<"u8">;
    readonly nextAllowedUpdateTime: ToField<"u64">;
    readonly createdAt: ToField<"u64">;
    readonly readCharge: ToField<"u64">;
    readonly rewardEscrow: ToField<"address">;
    readonly readWhitelist: ToField<Bag>;
    readonly limitReadsToWhitelist: ToField<"bool">;
    readonly updateData: ToField<SlidingWindow>;
    readonly intervalId: ToField<"u64">;
    readonly currIntervalPayouts: ToField<"u64">;
    readonly nextIntervalRefreshTime: ToField<"u64">;
    readonly escrows: ToField<Bag>;
    readonly friendKey: ToField<Vector<"u8">>;
    readonly version: ToField<"u64">;
    private constructor();
    static reified(): AggregatorReified;
    static get r(): reified.StructClassReified<Aggregator, AggregatorFields>;
    static phantom(): PhantomReified<ToTypeStr<Aggregator>>;
    static get p(): reified.PhantomReified<"0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::Aggregator">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        authority: string;
        queue_addr: string;
        token_addr: string;
        batch_size: string;
        min_oracle_results: string;
        min_update_delay_seconds: string;
        name: number[];
        history_limit: string;
        variance_threshold: {
            value: string;
            dec: number;
            neg: boolean;
        };
        force_report_period: string;
        min_job_results: string;
        crank_disabled: boolean;
        crank_row_count: number;
        next_allowed_update_time: string;
        created_at: string;
        read_charge: string;
        reward_escrow: string;
        read_whitelist: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
        limit_reads_to_whitelist: boolean;
        update_data: {
            data: {
                oracle_addr: string;
                value: {
                    value: string;
                    dec: number;
                    neg: boolean;
                };
                timestamp: string;
            }[];
            latest_result: {
                value: string;
                dec: number;
                neg: boolean;
            };
            latest_timestamp: string;
        };
        interval_id: string;
        curr_interval_payouts: string;
        next_interval_refresh_time: string;
        escrows: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
        friend_key: number[];
        version: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        authority: string;
        queue_addr: string;
        token_addr: string;
        batch_size: string | number | bigint;
        min_oracle_results: string | number | bigint;
        min_update_delay_seconds: string | number | bigint;
        name: Iterable<number> & {
            length: number;
        };
        history_limit: string | number | bigint;
        variance_threshold: {
            value: string | number | bigint;
            dec: number;
            neg: boolean;
        };
        force_report_period: string | number | bigint;
        min_job_results: string | number | bigint;
        crank_disabled: boolean;
        crank_row_count: number;
        next_allowed_update_time: string | number | bigint;
        created_at: string | number | bigint;
        read_charge: string | number | bigint;
        reward_escrow: string;
        read_whitelist: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
        limit_reads_to_whitelist: boolean;
        update_data: {
            data: Iterable<{
                oracle_addr: string;
                value: {
                    value: string | number | bigint;
                    dec: number;
                    neg: boolean;
                };
                timestamp: string | number | bigint;
            }> & {
                length: number;
            };
            latest_result: {
                value: string | number | bigint;
                dec: number;
                neg: boolean;
            };
            latest_timestamp: string | number | bigint;
        };
        interval_id: string | number | bigint;
        curr_interval_payouts: string | number | bigint;
        next_interval_refresh_time: string | number | bigint;
        escrows: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
        friend_key: Iterable<number> & {
            length: number;
        };
        version: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Aggregator;
    static fromFieldsWithTypes(item: FieldsWithTypes): Aggregator;
    static fromBcs(data: Uint8Array): Aggregator;
    toJSONField(): {
        id: string;
        authority: string;
        queueAddr: string;
        tokenAddr: string;
        batchSize: string;
        minOracleResults: string;
        minUpdateDelaySeconds: string;
        name: number[];
        historyLimit: string;
        varianceThreshold: {
            value: string;
            dec: number;
            neg: boolean;
        };
        forceReportPeriod: string;
        minJobResults: string;
        crankDisabled: boolean;
        crankRowCount: number;
        nextAllowedUpdateTime: string;
        createdAt: string;
        readCharge: string;
        rewardEscrow: string;
        readWhitelist: {
            id: string;
            size: string;
        };
        limitReadsToWhitelist: boolean;
        updateData: {
            data: {
                oracleAddr: string;
                value: {
                    value: string;
                    dec: number;
                    neg: boolean;
                };
                timestamp: string;
            }[];
            latestResult: {
                value: string;
                dec: number;
                neg: boolean;
            };
            latestTimestamp: string;
        };
        intervalId: string;
        currIntervalPayouts: string;
        nextIntervalRefreshTime: string;
        escrows: {
            id: string;
            size: string;
        };
        friendKey: number[];
        version: string;
    };
    toJSON(): {
        id: string;
        authority: string;
        queueAddr: string;
        tokenAddr: string;
        batchSize: string;
        minOracleResults: string;
        minUpdateDelaySeconds: string;
        name: number[];
        historyLimit: string;
        varianceThreshold: {
            value: string;
            dec: number;
            neg: boolean;
        };
        forceReportPeriod: string;
        minJobResults: string;
        crankDisabled: boolean;
        crankRowCount: number;
        nextAllowedUpdateTime: string;
        createdAt: string;
        readCharge: string;
        rewardEscrow: string;
        readWhitelist: {
            id: string;
            size: string;
        };
        limitReadsToWhitelist: boolean;
        updateData: {
            data: {
                oracleAddr: string;
                value: {
                    value: string;
                    dec: number;
                    neg: boolean;
                };
                timestamp: string;
            }[];
            latestResult: {
                value: string;
                dec: number;
                neg: boolean;
            };
            latestTimestamp: string;
        };
        intervalId: string;
        currIntervalPayouts: string;
        nextIntervalRefreshTime: string;
        escrows: {
            id: string;
            size: string;
        };
        friendKey: number[];
        version: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Aggregator;
    static fromJSON(json: Record<string, any>): Aggregator;
    static fromSuiParsedData(content: SuiParsedData): Aggregator;
    static fetch(client: SuiClient, id: string): Promise<Aggregator>;
}
export declare function isAggregatorHistoryData(type: string): boolean;
export interface AggregatorHistoryDataFields {
    id: ToField<UID>;
    data: ToField<Vector<AggregatorHistoryRow>>;
    historyWriteIdx: ToField<"u64">;
}
export type AggregatorHistoryDataReified = Reified<AggregatorHistoryData, AggregatorHistoryDataFields>;
export declare class AggregatorHistoryData implements StructClass {
    static readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorHistoryData";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorHistoryData";
    readonly $fullTypeName: "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorHistoryData";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly data: ToField<Vector<AggregatorHistoryRow>>;
    readonly historyWriteIdx: ToField<"u64">;
    private constructor();
    static reified(): AggregatorHistoryDataReified;
    static get r(): reified.StructClassReified<AggregatorHistoryData, AggregatorHistoryDataFields>;
    static phantom(): PhantomReified<ToTypeStr<AggregatorHistoryData>>;
    static get p(): reified.PhantomReified<"0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorHistoryData">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        data: {
            value: {
                value: string;
                dec: number;
                neg: boolean;
            };
            timestamp: string;
        }[];
        history_write_idx: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        data: Iterable<{
            value: {
                value: string | number | bigint;
                dec: number;
                neg: boolean;
            };
            timestamp: string | number | bigint;
        }> & {
            length: number;
        };
        history_write_idx: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): AggregatorHistoryData;
    static fromFieldsWithTypes(item: FieldsWithTypes): AggregatorHistoryData;
    static fromBcs(data: Uint8Array): AggregatorHistoryData;
    toJSONField(): {
        id: string;
        data: {
            value: {
                value: string;
                dec: number;
                neg: boolean;
            };
            timestamp: string;
        }[];
        historyWriteIdx: string;
    };
    toJSON(): {
        id: string;
        data: {
            value: {
                value: string;
                dec: number;
                neg: boolean;
            };
            timestamp: string;
        }[];
        historyWriteIdx: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AggregatorHistoryData;
    static fromJSON(json: Record<string, any>): AggregatorHistoryData;
    static fromSuiParsedData(content: SuiParsedData): AggregatorHistoryData;
    static fetch(client: SuiClient, id: string): Promise<AggregatorHistoryData>;
}
export declare function isAggregatorHistoryRow(type: string): boolean;
export interface AggregatorHistoryRowFields {
    value: ToField<SwitchboardDecimal>;
    timestamp: ToField<"u64">;
}
export type AggregatorHistoryRowReified = Reified<AggregatorHistoryRow, AggregatorHistoryRowFields>;
export declare class AggregatorHistoryRow implements StructClass {
    static readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorHistoryRow";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorHistoryRow";
    readonly $fullTypeName: "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorHistoryRow";
    readonly $typeArgs: [];
    readonly value: ToField<SwitchboardDecimal>;
    readonly timestamp: ToField<"u64">;
    private constructor();
    static reified(): AggregatorHistoryRowReified;
    static get r(): reified.StructClassReified<AggregatorHistoryRow, AggregatorHistoryRowFields>;
    static phantom(): PhantomReified<ToTypeStr<AggregatorHistoryRow>>;
    static get p(): reified.PhantomReified<"0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorHistoryRow">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        value: {
            value: string;
            dec: number;
            neg: boolean;
        };
        timestamp: string;
    }, {
        value: {
            value: string | number | bigint;
            dec: number;
            neg: boolean;
        };
        timestamp: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): AggregatorHistoryRow;
    static fromFieldsWithTypes(item: FieldsWithTypes): AggregatorHistoryRow;
    static fromBcs(data: Uint8Array): AggregatorHistoryRow;
    toJSONField(): {
        value: {
            value: string;
            dec: number;
            neg: boolean;
        };
        timestamp: string;
    };
    toJSON(): {
        value: {
            value: string;
            dec: number;
            neg: boolean;
        };
        timestamp: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AggregatorHistoryRow;
    static fromJSON(json: Record<string, any>): AggregatorHistoryRow;
    static fromSuiParsedData(content: SuiParsedData): AggregatorHistoryRow;
    static fetch(client: SuiClient, id: string): Promise<AggregatorHistoryRow>;
}
export declare function isAggregatorJobData(type: string): boolean;
export interface AggregatorJobDataFields {
    id: ToField<UID>;
    jobKeys: ToField<Vector<"address">>;
    jobWeights: ToField<Vector<"u8">>;
    jobsChecksum: ToField<Vector<"u8">>;
}
export type AggregatorJobDataReified = Reified<AggregatorJobData, AggregatorJobDataFields>;
export declare class AggregatorJobData implements StructClass {
    static readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorJobData";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorJobData";
    readonly $fullTypeName: "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorJobData";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly jobKeys: ToField<Vector<"address">>;
    readonly jobWeights: ToField<Vector<"u8">>;
    readonly jobsChecksum: ToField<Vector<"u8">>;
    private constructor();
    static reified(): AggregatorJobDataReified;
    static get r(): reified.StructClassReified<AggregatorJobData, AggregatorJobDataFields>;
    static phantom(): PhantomReified<ToTypeStr<AggregatorJobData>>;
    static get p(): reified.PhantomReified<"0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::AggregatorJobData">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        job_keys: string[];
        job_weights: number[];
        jobs_checksum: number[];
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        job_keys: Iterable<string> & {
            length: number;
        };
        job_weights: Iterable<number> & {
            length: number;
        };
        jobs_checksum: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): AggregatorJobData;
    static fromFieldsWithTypes(item: FieldsWithTypes): AggregatorJobData;
    static fromBcs(data: Uint8Array): AggregatorJobData;
    toJSONField(): {
        id: string;
        jobKeys: string[];
        jobWeights: number[];
        jobsChecksum: number[];
    };
    toJSON(): {
        id: string;
        jobKeys: string[];
        jobWeights: number[];
        jobsChecksum: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): AggregatorJobData;
    static fromJSON(json: Record<string, any>): AggregatorJobData;
    static fromSuiParsedData(content: SuiParsedData): AggregatorJobData;
    static fetch(client: SuiClient, id: string): Promise<AggregatorJobData>;
}
export declare function isSlidingWindow(type: string): boolean;
export interface SlidingWindowFields {
    data: ToField<Vector<SlidingWindowElement>>;
    latestResult: ToField<SwitchboardDecimal>;
    latestTimestamp: ToField<"u64">;
}
export type SlidingWindowReified = Reified<SlidingWindow, SlidingWindowFields>;
export declare class SlidingWindow implements StructClass {
    static readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::SlidingWindow";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::SlidingWindow";
    readonly $fullTypeName: "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::SlidingWindow";
    readonly $typeArgs: [];
    readonly data: ToField<Vector<SlidingWindowElement>>;
    readonly latestResult: ToField<SwitchboardDecimal>;
    readonly latestTimestamp: ToField<"u64">;
    private constructor();
    static reified(): SlidingWindowReified;
    static get r(): reified.StructClassReified<SlidingWindow, SlidingWindowFields>;
    static phantom(): PhantomReified<ToTypeStr<SlidingWindow>>;
    static get p(): reified.PhantomReified<"0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::SlidingWindow">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        data: {
            oracle_addr: string;
            value: {
                value: string;
                dec: number;
                neg: boolean;
            };
            timestamp: string;
        }[];
        latest_result: {
            value: string;
            dec: number;
            neg: boolean;
        };
        latest_timestamp: string;
    }, {
        data: Iterable<{
            oracle_addr: string;
            value: {
                value: string | number | bigint;
                dec: number;
                neg: boolean;
            };
            timestamp: string | number | bigint;
        }> & {
            length: number;
        };
        latest_result: {
            value: string | number | bigint;
            dec: number;
            neg: boolean;
        };
        latest_timestamp: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): SlidingWindow;
    static fromFieldsWithTypes(item: FieldsWithTypes): SlidingWindow;
    static fromBcs(data: Uint8Array): SlidingWindow;
    toJSONField(): {
        data: {
            oracleAddr: string;
            value: {
                value: string;
                dec: number;
                neg: boolean;
            };
            timestamp: string;
        }[];
        latestResult: {
            value: string;
            dec: number;
            neg: boolean;
        };
        latestTimestamp: string;
    };
    toJSON(): {
        data: {
            oracleAddr: string;
            value: {
                value: string;
                dec: number;
                neg: boolean;
            };
            timestamp: string;
        }[];
        latestResult: {
            value: string;
            dec: number;
            neg: boolean;
        };
        latestTimestamp: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SlidingWindow;
    static fromJSON(json: Record<string, any>): SlidingWindow;
    static fromSuiParsedData(content: SuiParsedData): SlidingWindow;
    static fetch(client: SuiClient, id: string): Promise<SlidingWindow>;
}
export declare function isSlidingWindowElement(type: string): boolean;
export interface SlidingWindowElementFields {
    oracleAddr: ToField<"address">;
    value: ToField<SwitchboardDecimal>;
    timestamp: ToField<"u64">;
}
export type SlidingWindowElementReified = Reified<SlidingWindowElement, SlidingWindowElementFields>;
export declare class SlidingWindowElement implements StructClass {
    static readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::SlidingWindowElement";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::SlidingWindowElement";
    readonly $fullTypeName: "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::SlidingWindowElement";
    readonly $typeArgs: [];
    readonly oracleAddr: ToField<"address">;
    readonly value: ToField<SwitchboardDecimal>;
    readonly timestamp: ToField<"u64">;
    private constructor();
    static reified(): SlidingWindowElementReified;
    static get r(): reified.StructClassReified<SlidingWindowElement, SlidingWindowElementFields>;
    static phantom(): PhantomReified<ToTypeStr<SlidingWindowElement>>;
    static get p(): reified.PhantomReified<"0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::aggregator::SlidingWindowElement">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        oracle_addr: string;
        value: {
            value: string;
            dec: number;
            neg: boolean;
        };
        timestamp: string;
    }, {
        oracle_addr: string;
        value: {
            value: string | number | bigint;
            dec: number;
            neg: boolean;
        };
        timestamp: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): SlidingWindowElement;
    static fromFieldsWithTypes(item: FieldsWithTypes): SlidingWindowElement;
    static fromBcs(data: Uint8Array): SlidingWindowElement;
    toJSONField(): {
        oracleAddr: string;
        value: {
            value: string;
            dec: number;
            neg: boolean;
        };
        timestamp: string;
    };
    toJSON(): {
        oracleAddr: string;
        value: {
            value: string;
            dec: number;
            neg: boolean;
        };
        timestamp: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): SlidingWindowElement;
    static fromJSON(json: Record<string, any>): SlidingWindowElement;
    static fromSuiParsedData(content: SuiParsedData): SlidingWindowElement;
    static fetch(client: SuiClient, id: string): Promise<SlidingWindowElement>;
}
