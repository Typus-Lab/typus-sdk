import * as reified from "../../../../_framework/reified";
import {
    PhantomReified,
    Reified,
    StructClass,
    ToField,
    ToTypeStr,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    fieldToJSON,
    phantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { Vector } from "../../../../_framework/vector";
import { Bag } from "../../0x2/bag/structs";
import { UID } from "../../0x2/object/structs";
import { PKG_V1 } from "../index";
import { SwitchboardDecimal } from "../math/structs";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== Aggregator =============================== */

export function isAggregator(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::aggregator::Aggregator`;
}

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

export class Aggregator implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::aggregator::Aggregator`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Aggregator.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::aggregator::Aggregator`;
    readonly $typeArgs: [];
    readonly $isPhantom = Aggregator.$isPhantom;

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

    private constructor(typeArgs: [], fields: AggregatorFields) {
        this.$fullTypeName = composeSuiType(Aggregator.$typeName, ...typeArgs) as `${typeof PKG_V1}::aggregator::Aggregator`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.authority = fields.authority;
        this.queueAddr = fields.queueAddr;
        this.tokenAddr = fields.tokenAddr;
        this.batchSize = fields.batchSize;
        this.minOracleResults = fields.minOracleResults;
        this.minUpdateDelaySeconds = fields.minUpdateDelaySeconds;
        this.name = fields.name;
        this.historyLimit = fields.historyLimit;
        this.varianceThreshold = fields.varianceThreshold;
        this.forceReportPeriod = fields.forceReportPeriod;
        this.minJobResults = fields.minJobResults;
        this.crankDisabled = fields.crankDisabled;
        this.crankRowCount = fields.crankRowCount;
        this.nextAllowedUpdateTime = fields.nextAllowedUpdateTime;
        this.createdAt = fields.createdAt;
        this.readCharge = fields.readCharge;
        this.rewardEscrow = fields.rewardEscrow;
        this.readWhitelist = fields.readWhitelist;
        this.limitReadsToWhitelist = fields.limitReadsToWhitelist;
        this.updateData = fields.updateData;
        this.intervalId = fields.intervalId;
        this.currIntervalPayouts = fields.currIntervalPayouts;
        this.nextIntervalRefreshTime = fields.nextIntervalRefreshTime;
        this.escrows = fields.escrows;
        this.friendKey = fields.friendKey;
        this.version = fields.version;
    }

    static reified(): AggregatorReified {
        return {
            typeName: Aggregator.$typeName,
            fullTypeName: composeSuiType(Aggregator.$typeName, ...[]) as `${typeof PKG_V1}::aggregator::Aggregator`,
            typeArgs: [] as [],
            isPhantom: Aggregator.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Aggregator.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Aggregator.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Aggregator.fromBcs(data),
            bcs: Aggregator.bcs,
            fromJSONField: (field: any) => Aggregator.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Aggregator.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Aggregator.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Aggregator.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Aggregator.fetch(client, id),
            new: (fields: AggregatorFields) => {
                return new Aggregator([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Aggregator.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Aggregator>> {
        return phantom(Aggregator.reified());
    }
    static get p() {
        return Aggregator.phantom();
    }

    static get bcs() {
        return bcs.struct("Aggregator", {
            id: UID.bcs,
            authority: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            queue_addr: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            token_addr: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            batch_size: bcs.u64(),
            min_oracle_results: bcs.u64(),
            min_update_delay_seconds: bcs.u64(),
            name: bcs.vector(bcs.u8()),
            history_limit: bcs.u64(),
            variance_threshold: SwitchboardDecimal.bcs,
            force_report_period: bcs.u64(),
            min_job_results: bcs.u64(),
            crank_disabled: bcs.bool(),
            crank_row_count: bcs.u8(),
            next_allowed_update_time: bcs.u64(),
            created_at: bcs.u64(),
            read_charge: bcs.u64(),
            reward_escrow: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            read_whitelist: Bag.bcs,
            limit_reads_to_whitelist: bcs.bool(),
            update_data: SlidingWindow.bcs,
            interval_id: bcs.u64(),
            curr_interval_payouts: bcs.u64(),
            next_interval_refresh_time: bcs.u64(),
            escrows: Bag.bcs,
            friend_key: bcs.vector(bcs.u8()),
            version: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Aggregator {
        return Aggregator.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            authority: decodeFromFields("address", fields.authority),
            queueAddr: decodeFromFields("address", fields.queue_addr),
            tokenAddr: decodeFromFields("address", fields.token_addr),
            batchSize: decodeFromFields("u64", fields.batch_size),
            minOracleResults: decodeFromFields("u64", fields.min_oracle_results),
            minUpdateDelaySeconds: decodeFromFields("u64", fields.min_update_delay_seconds),
            name: decodeFromFields(reified.vector("u8"), fields.name),
            historyLimit: decodeFromFields("u64", fields.history_limit),
            varianceThreshold: decodeFromFields(SwitchboardDecimal.reified(), fields.variance_threshold),
            forceReportPeriod: decodeFromFields("u64", fields.force_report_period),
            minJobResults: decodeFromFields("u64", fields.min_job_results),
            crankDisabled: decodeFromFields("bool", fields.crank_disabled),
            crankRowCount: decodeFromFields("u8", fields.crank_row_count),
            nextAllowedUpdateTime: decodeFromFields("u64", fields.next_allowed_update_time),
            createdAt: decodeFromFields("u64", fields.created_at),
            readCharge: decodeFromFields("u64", fields.read_charge),
            rewardEscrow: decodeFromFields("address", fields.reward_escrow),
            readWhitelist: decodeFromFields(Bag.reified(), fields.read_whitelist),
            limitReadsToWhitelist: decodeFromFields("bool", fields.limit_reads_to_whitelist),
            updateData: decodeFromFields(SlidingWindow.reified(), fields.update_data),
            intervalId: decodeFromFields("u64", fields.interval_id),
            currIntervalPayouts: decodeFromFields("u64", fields.curr_interval_payouts),
            nextIntervalRefreshTime: decodeFromFields("u64", fields.next_interval_refresh_time),
            escrows: decodeFromFields(Bag.reified(), fields.escrows),
            friendKey: decodeFromFields(reified.vector("u8"), fields.friend_key),
            version: decodeFromFields("u64", fields.version),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Aggregator {
        if (!isAggregator(item.type)) {
            throw new Error("not a Aggregator type");
        }

        return Aggregator.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            authority: decodeFromFieldsWithTypes("address", item.fields.authority),
            queueAddr: decodeFromFieldsWithTypes("address", item.fields.queue_addr),
            tokenAddr: decodeFromFieldsWithTypes("address", item.fields.token_addr),
            batchSize: decodeFromFieldsWithTypes("u64", item.fields.batch_size),
            minOracleResults: decodeFromFieldsWithTypes("u64", item.fields.min_oracle_results),
            minUpdateDelaySeconds: decodeFromFieldsWithTypes("u64", item.fields.min_update_delay_seconds),
            name: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.name),
            historyLimit: decodeFromFieldsWithTypes("u64", item.fields.history_limit),
            varianceThreshold: decodeFromFieldsWithTypes(SwitchboardDecimal.reified(), item.fields.variance_threshold),
            forceReportPeriod: decodeFromFieldsWithTypes("u64", item.fields.force_report_period),
            minJobResults: decodeFromFieldsWithTypes("u64", item.fields.min_job_results),
            crankDisabled: decodeFromFieldsWithTypes("bool", item.fields.crank_disabled),
            crankRowCount: decodeFromFieldsWithTypes("u8", item.fields.crank_row_count),
            nextAllowedUpdateTime: decodeFromFieldsWithTypes("u64", item.fields.next_allowed_update_time),
            createdAt: decodeFromFieldsWithTypes("u64", item.fields.created_at),
            readCharge: decodeFromFieldsWithTypes("u64", item.fields.read_charge),
            rewardEscrow: decodeFromFieldsWithTypes("address", item.fields.reward_escrow),
            readWhitelist: decodeFromFieldsWithTypes(Bag.reified(), item.fields.read_whitelist),
            limitReadsToWhitelist: decodeFromFieldsWithTypes("bool", item.fields.limit_reads_to_whitelist),
            updateData: decodeFromFieldsWithTypes(SlidingWindow.reified(), item.fields.update_data),
            intervalId: decodeFromFieldsWithTypes("u64", item.fields.interval_id),
            currIntervalPayouts: decodeFromFieldsWithTypes("u64", item.fields.curr_interval_payouts),
            nextIntervalRefreshTime: decodeFromFieldsWithTypes("u64", item.fields.next_interval_refresh_time),
            escrows: decodeFromFieldsWithTypes(Bag.reified(), item.fields.escrows),
            friendKey: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.friend_key),
            version: decodeFromFieldsWithTypes("u64", item.fields.version),
        });
    }

    static fromBcs(data: Uint8Array): Aggregator {
        return Aggregator.fromFields(Aggregator.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            authority: this.authority,
            queueAddr: this.queueAddr,
            tokenAddr: this.tokenAddr,
            batchSize: this.batchSize.toString(),
            minOracleResults: this.minOracleResults.toString(),
            minUpdateDelaySeconds: this.minUpdateDelaySeconds.toString(),
            name: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.name),
            historyLimit: this.historyLimit.toString(),
            varianceThreshold: this.varianceThreshold.toJSONField(),
            forceReportPeriod: this.forceReportPeriod.toString(),
            minJobResults: this.minJobResults.toString(),
            crankDisabled: this.crankDisabled,
            crankRowCount: this.crankRowCount,
            nextAllowedUpdateTime: this.nextAllowedUpdateTime.toString(),
            createdAt: this.createdAt.toString(),
            readCharge: this.readCharge.toString(),
            rewardEscrow: this.rewardEscrow,
            readWhitelist: this.readWhitelist.toJSONField(),
            limitReadsToWhitelist: this.limitReadsToWhitelist,
            updateData: this.updateData.toJSONField(),
            intervalId: this.intervalId.toString(),
            currIntervalPayouts: this.currIntervalPayouts.toString(),
            nextIntervalRefreshTime: this.nextIntervalRefreshTime.toString(),
            escrows: this.escrows.toJSONField(),
            friendKey: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.friendKey),
            version: this.version.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Aggregator {
        return Aggregator.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            authority: decodeFromJSONField("address", field.authority),
            queueAddr: decodeFromJSONField("address", field.queueAddr),
            tokenAddr: decodeFromJSONField("address", field.tokenAddr),
            batchSize: decodeFromJSONField("u64", field.batchSize),
            minOracleResults: decodeFromJSONField("u64", field.minOracleResults),
            minUpdateDelaySeconds: decodeFromJSONField("u64", field.minUpdateDelaySeconds),
            name: decodeFromJSONField(reified.vector("u8"), field.name),
            historyLimit: decodeFromJSONField("u64", field.historyLimit),
            varianceThreshold: decodeFromJSONField(SwitchboardDecimal.reified(), field.varianceThreshold),
            forceReportPeriod: decodeFromJSONField("u64", field.forceReportPeriod),
            minJobResults: decodeFromJSONField("u64", field.minJobResults),
            crankDisabled: decodeFromJSONField("bool", field.crankDisabled),
            crankRowCount: decodeFromJSONField("u8", field.crankRowCount),
            nextAllowedUpdateTime: decodeFromJSONField("u64", field.nextAllowedUpdateTime),
            createdAt: decodeFromJSONField("u64", field.createdAt),
            readCharge: decodeFromJSONField("u64", field.readCharge),
            rewardEscrow: decodeFromJSONField("address", field.rewardEscrow),
            readWhitelist: decodeFromJSONField(Bag.reified(), field.readWhitelist),
            limitReadsToWhitelist: decodeFromJSONField("bool", field.limitReadsToWhitelist),
            updateData: decodeFromJSONField(SlidingWindow.reified(), field.updateData),
            intervalId: decodeFromJSONField("u64", field.intervalId),
            currIntervalPayouts: decodeFromJSONField("u64", field.currIntervalPayouts),
            nextIntervalRefreshTime: decodeFromJSONField("u64", field.nextIntervalRefreshTime),
            escrows: decodeFromJSONField(Bag.reified(), field.escrows),
            friendKey: decodeFromJSONField(reified.vector("u8"), field.friendKey),
            version: decodeFromJSONField("u64", field.version),
        });
    }

    static fromJSON(json: Record<string, any>): Aggregator {
        if (json.$typeName !== Aggregator.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Aggregator.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Aggregator {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAggregator(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Aggregator object`);
        }
        return Aggregator.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Aggregator {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAggregator(data.bcs.type)) {
                throw new Error(`object at is not a Aggregator object`);
            }

            return Aggregator.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Aggregator.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Aggregator> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Aggregator object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAggregator(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Aggregator object`);
        }

        return Aggregator.fromSuiObjectData(res.data);
    }
}

/* ============================== AggregatorHistoryData =============================== */

export function isAggregatorHistoryData(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::aggregator::AggregatorHistoryData`;
}

export interface AggregatorHistoryDataFields {
    id: ToField<UID>;
    data: ToField<Vector<AggregatorHistoryRow>>;
    historyWriteIdx: ToField<"u64">;
}

export type AggregatorHistoryDataReified = Reified<AggregatorHistoryData, AggregatorHistoryDataFields>;

export class AggregatorHistoryData implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::aggregator::AggregatorHistoryData`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = AggregatorHistoryData.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::aggregator::AggregatorHistoryData`;
    readonly $typeArgs: [];
    readonly $isPhantom = AggregatorHistoryData.$isPhantom;

    readonly id: ToField<UID>;
    readonly data: ToField<Vector<AggregatorHistoryRow>>;
    readonly historyWriteIdx: ToField<"u64">;

    private constructor(typeArgs: [], fields: AggregatorHistoryDataFields) {
        this.$fullTypeName = composeSuiType(
            AggregatorHistoryData.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::aggregator::AggregatorHistoryData`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.data = fields.data;
        this.historyWriteIdx = fields.historyWriteIdx;
    }

    static reified(): AggregatorHistoryDataReified {
        return {
            typeName: AggregatorHistoryData.$typeName,
            fullTypeName: composeSuiType(AggregatorHistoryData.$typeName, ...[]) as `${typeof PKG_V1}::aggregator::AggregatorHistoryData`,
            typeArgs: [] as [],
            isPhantom: AggregatorHistoryData.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AggregatorHistoryData.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AggregatorHistoryData.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AggregatorHistoryData.fromBcs(data),
            bcs: AggregatorHistoryData.bcs,
            fromJSONField: (field: any) => AggregatorHistoryData.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AggregatorHistoryData.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AggregatorHistoryData.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => AggregatorHistoryData.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => AggregatorHistoryData.fetch(client, id),
            new: (fields: AggregatorHistoryDataFields) => {
                return new AggregatorHistoryData([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AggregatorHistoryData.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AggregatorHistoryData>> {
        return phantom(AggregatorHistoryData.reified());
    }
    static get p() {
        return AggregatorHistoryData.phantom();
    }

    static get bcs() {
        return bcs.struct("AggregatorHistoryData", {
            id: UID.bcs,
            data: bcs.vector(AggregatorHistoryRow.bcs),
            history_write_idx: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): AggregatorHistoryData {
        return AggregatorHistoryData.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            data: decodeFromFields(reified.vector(AggregatorHistoryRow.reified()), fields.data),
            historyWriteIdx: decodeFromFields("u64", fields.history_write_idx),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AggregatorHistoryData {
        if (!isAggregatorHistoryData(item.type)) {
            throw new Error("not a AggregatorHistoryData type");
        }

        return AggregatorHistoryData.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            data: decodeFromFieldsWithTypes(reified.vector(AggregatorHistoryRow.reified()), item.fields.data),
            historyWriteIdx: decodeFromFieldsWithTypes("u64", item.fields.history_write_idx),
        });
    }

    static fromBcs(data: Uint8Array): AggregatorHistoryData {
        return AggregatorHistoryData.fromFields(AggregatorHistoryData.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            data: fieldToJSON<Vector<AggregatorHistoryRow>>(`vector<${AggregatorHistoryRow.$typeName}>`, this.data),
            historyWriteIdx: this.historyWriteIdx.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): AggregatorHistoryData {
        return AggregatorHistoryData.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            data: decodeFromJSONField(reified.vector(AggregatorHistoryRow.reified()), field.data),
            historyWriteIdx: decodeFromJSONField("u64", field.historyWriteIdx),
        });
    }

    static fromJSON(json: Record<string, any>): AggregatorHistoryData {
        if (json.$typeName !== AggregatorHistoryData.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AggregatorHistoryData.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AggregatorHistoryData {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAggregatorHistoryData(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AggregatorHistoryData object`);
        }
        return AggregatorHistoryData.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): AggregatorHistoryData {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAggregatorHistoryData(data.bcs.type)) {
                throw new Error(`object at is not a AggregatorHistoryData object`);
            }

            return AggregatorHistoryData.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AggregatorHistoryData.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<AggregatorHistoryData> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AggregatorHistoryData object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAggregatorHistoryData(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AggregatorHistoryData object`);
        }

        return AggregatorHistoryData.fromSuiObjectData(res.data);
    }
}

/* ============================== AggregatorHistoryRow =============================== */

export function isAggregatorHistoryRow(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::aggregator::AggregatorHistoryRow`;
}

export interface AggregatorHistoryRowFields {
    value: ToField<SwitchboardDecimal>;
    timestamp: ToField<"u64">;
}

export type AggregatorHistoryRowReified = Reified<AggregatorHistoryRow, AggregatorHistoryRowFields>;

export class AggregatorHistoryRow implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::aggregator::AggregatorHistoryRow`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = AggregatorHistoryRow.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::aggregator::AggregatorHistoryRow`;
    readonly $typeArgs: [];
    readonly $isPhantom = AggregatorHistoryRow.$isPhantom;

    readonly value: ToField<SwitchboardDecimal>;
    readonly timestamp: ToField<"u64">;

    private constructor(typeArgs: [], fields: AggregatorHistoryRowFields) {
        this.$fullTypeName = composeSuiType(
            AggregatorHistoryRow.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::aggregator::AggregatorHistoryRow`;
        this.$typeArgs = typeArgs;

        this.value = fields.value;
        this.timestamp = fields.timestamp;
    }

    static reified(): AggregatorHistoryRowReified {
        return {
            typeName: AggregatorHistoryRow.$typeName,
            fullTypeName: composeSuiType(AggregatorHistoryRow.$typeName, ...[]) as `${typeof PKG_V1}::aggregator::AggregatorHistoryRow`,
            typeArgs: [] as [],
            isPhantom: AggregatorHistoryRow.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AggregatorHistoryRow.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AggregatorHistoryRow.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AggregatorHistoryRow.fromBcs(data),
            bcs: AggregatorHistoryRow.bcs,
            fromJSONField: (field: any) => AggregatorHistoryRow.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AggregatorHistoryRow.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AggregatorHistoryRow.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => AggregatorHistoryRow.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => AggregatorHistoryRow.fetch(client, id),
            new: (fields: AggregatorHistoryRowFields) => {
                return new AggregatorHistoryRow([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AggregatorHistoryRow.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AggregatorHistoryRow>> {
        return phantom(AggregatorHistoryRow.reified());
    }
    static get p() {
        return AggregatorHistoryRow.phantom();
    }

    static get bcs() {
        return bcs.struct("AggregatorHistoryRow", {
            value: SwitchboardDecimal.bcs,
            timestamp: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): AggregatorHistoryRow {
        return AggregatorHistoryRow.reified().new({
            value: decodeFromFields(SwitchboardDecimal.reified(), fields.value),
            timestamp: decodeFromFields("u64", fields.timestamp),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AggregatorHistoryRow {
        if (!isAggregatorHistoryRow(item.type)) {
            throw new Error("not a AggregatorHistoryRow type");
        }

        return AggregatorHistoryRow.reified().new({
            value: decodeFromFieldsWithTypes(SwitchboardDecimal.reified(), item.fields.value),
            timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp),
        });
    }

    static fromBcs(data: Uint8Array): AggregatorHistoryRow {
        return AggregatorHistoryRow.fromFields(AggregatorHistoryRow.bcs.parse(data));
    }

    toJSONField() {
        return {
            value: this.value.toJSONField(),
            timestamp: this.timestamp.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): AggregatorHistoryRow {
        return AggregatorHistoryRow.reified().new({
            value: decodeFromJSONField(SwitchboardDecimal.reified(), field.value),
            timestamp: decodeFromJSONField("u64", field.timestamp),
        });
    }

    static fromJSON(json: Record<string, any>): AggregatorHistoryRow {
        if (json.$typeName !== AggregatorHistoryRow.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AggregatorHistoryRow.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AggregatorHistoryRow {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAggregatorHistoryRow(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AggregatorHistoryRow object`);
        }
        return AggregatorHistoryRow.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): AggregatorHistoryRow {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAggregatorHistoryRow(data.bcs.type)) {
                throw new Error(`object at is not a AggregatorHistoryRow object`);
            }

            return AggregatorHistoryRow.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AggregatorHistoryRow.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<AggregatorHistoryRow> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AggregatorHistoryRow object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAggregatorHistoryRow(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AggregatorHistoryRow object`);
        }

        return AggregatorHistoryRow.fromSuiObjectData(res.data);
    }
}

/* ============================== AggregatorJobData =============================== */

export function isAggregatorJobData(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::aggregator::AggregatorJobData`;
}

export interface AggregatorJobDataFields {
    id: ToField<UID>;
    jobKeys: ToField<Vector<"address">>;
    jobWeights: ToField<Vector<"u8">>;
    jobsChecksum: ToField<Vector<"u8">>;
}

export type AggregatorJobDataReified = Reified<AggregatorJobData, AggregatorJobDataFields>;

export class AggregatorJobData implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::aggregator::AggregatorJobData`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = AggregatorJobData.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::aggregator::AggregatorJobData`;
    readonly $typeArgs: [];
    readonly $isPhantom = AggregatorJobData.$isPhantom;

    readonly id: ToField<UID>;
    readonly jobKeys: ToField<Vector<"address">>;
    readonly jobWeights: ToField<Vector<"u8">>;
    readonly jobsChecksum: ToField<Vector<"u8">>;

    private constructor(typeArgs: [], fields: AggregatorJobDataFields) {
        this.$fullTypeName = composeSuiType(AggregatorJobData.$typeName, ...typeArgs) as `${typeof PKG_V1}::aggregator::AggregatorJobData`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.jobKeys = fields.jobKeys;
        this.jobWeights = fields.jobWeights;
        this.jobsChecksum = fields.jobsChecksum;
    }

    static reified(): AggregatorJobDataReified {
        return {
            typeName: AggregatorJobData.$typeName,
            fullTypeName: composeSuiType(AggregatorJobData.$typeName, ...[]) as `${typeof PKG_V1}::aggregator::AggregatorJobData`,
            typeArgs: [] as [],
            isPhantom: AggregatorJobData.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AggregatorJobData.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AggregatorJobData.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AggregatorJobData.fromBcs(data),
            bcs: AggregatorJobData.bcs,
            fromJSONField: (field: any) => AggregatorJobData.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AggregatorJobData.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AggregatorJobData.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => AggregatorJobData.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => AggregatorJobData.fetch(client, id),
            new: (fields: AggregatorJobDataFields) => {
                return new AggregatorJobData([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AggregatorJobData.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AggregatorJobData>> {
        return phantom(AggregatorJobData.reified());
    }
    static get p() {
        return AggregatorJobData.phantom();
    }

    static get bcs() {
        return bcs.struct("AggregatorJobData", {
            id: UID.bcs,
            job_keys: bcs.vector(
                bcs.bytes(32).transform({
                    input: (val: string) => fromHEX(val),
                    output: (val: Uint8Array) => toHEX(val),
                })
            ),
            job_weights: bcs.vector(bcs.u8()),
            jobs_checksum: bcs.vector(bcs.u8()),
        });
    }

    static fromFields(fields: Record<string, any>): AggregatorJobData {
        return AggregatorJobData.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            jobKeys: decodeFromFields(reified.vector("address"), fields.job_keys),
            jobWeights: decodeFromFields(reified.vector("u8"), fields.job_weights),
            jobsChecksum: decodeFromFields(reified.vector("u8"), fields.jobs_checksum),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AggregatorJobData {
        if (!isAggregatorJobData(item.type)) {
            throw new Error("not a AggregatorJobData type");
        }

        return AggregatorJobData.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            jobKeys: decodeFromFieldsWithTypes(reified.vector("address"), item.fields.job_keys),
            jobWeights: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.job_weights),
            jobsChecksum: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.jobs_checksum),
        });
    }

    static fromBcs(data: Uint8Array): AggregatorJobData {
        return AggregatorJobData.fromFields(AggregatorJobData.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            jobKeys: fieldToJSON<Vector<"address">>(`vector<address>`, this.jobKeys),
            jobWeights: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.jobWeights),
            jobsChecksum: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.jobsChecksum),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): AggregatorJobData {
        return AggregatorJobData.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            jobKeys: decodeFromJSONField(reified.vector("address"), field.jobKeys),
            jobWeights: decodeFromJSONField(reified.vector("u8"), field.jobWeights),
            jobsChecksum: decodeFromJSONField(reified.vector("u8"), field.jobsChecksum),
        });
    }

    static fromJSON(json: Record<string, any>): AggregatorJobData {
        if (json.$typeName !== AggregatorJobData.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AggregatorJobData.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AggregatorJobData {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAggregatorJobData(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AggregatorJobData object`);
        }
        return AggregatorJobData.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): AggregatorJobData {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAggregatorJobData(data.bcs.type)) {
                throw new Error(`object at is not a AggregatorJobData object`);
            }

            return AggregatorJobData.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AggregatorJobData.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<AggregatorJobData> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AggregatorJobData object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAggregatorJobData(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AggregatorJobData object`);
        }

        return AggregatorJobData.fromSuiObjectData(res.data);
    }
}

/* ============================== SlidingWindow =============================== */

export function isSlidingWindow(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::aggregator::SlidingWindow`;
}

export interface SlidingWindowFields {
    data: ToField<Vector<SlidingWindowElement>>;
    latestResult: ToField<SwitchboardDecimal>;
    latestTimestamp: ToField<"u64">;
}

export type SlidingWindowReified = Reified<SlidingWindow, SlidingWindowFields>;

export class SlidingWindow implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::aggregator::SlidingWindow`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = SlidingWindow.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::aggregator::SlidingWindow`;
    readonly $typeArgs: [];
    readonly $isPhantom = SlidingWindow.$isPhantom;

    readonly data: ToField<Vector<SlidingWindowElement>>;
    readonly latestResult: ToField<SwitchboardDecimal>;
    readonly latestTimestamp: ToField<"u64">;

    private constructor(typeArgs: [], fields: SlidingWindowFields) {
        this.$fullTypeName = composeSuiType(SlidingWindow.$typeName, ...typeArgs) as `${typeof PKG_V1}::aggregator::SlidingWindow`;
        this.$typeArgs = typeArgs;

        this.data = fields.data;
        this.latestResult = fields.latestResult;
        this.latestTimestamp = fields.latestTimestamp;
    }

    static reified(): SlidingWindowReified {
        return {
            typeName: SlidingWindow.$typeName,
            fullTypeName: composeSuiType(SlidingWindow.$typeName, ...[]) as `${typeof PKG_V1}::aggregator::SlidingWindow`,
            typeArgs: [] as [],
            isPhantom: SlidingWindow.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SlidingWindow.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SlidingWindow.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SlidingWindow.fromBcs(data),
            bcs: SlidingWindow.bcs,
            fromJSONField: (field: any) => SlidingWindow.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SlidingWindow.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SlidingWindow.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => SlidingWindow.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => SlidingWindow.fetch(client, id),
            new: (fields: SlidingWindowFields) => {
                return new SlidingWindow([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SlidingWindow.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SlidingWindow>> {
        return phantom(SlidingWindow.reified());
    }
    static get p() {
        return SlidingWindow.phantom();
    }

    static get bcs() {
        return bcs.struct("SlidingWindow", {
            data: bcs.vector(SlidingWindowElement.bcs),
            latest_result: SwitchboardDecimal.bcs,
            latest_timestamp: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): SlidingWindow {
        return SlidingWindow.reified().new({
            data: decodeFromFields(reified.vector(SlidingWindowElement.reified()), fields.data),
            latestResult: decodeFromFields(SwitchboardDecimal.reified(), fields.latest_result),
            latestTimestamp: decodeFromFields("u64", fields.latest_timestamp),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SlidingWindow {
        if (!isSlidingWindow(item.type)) {
            throw new Error("not a SlidingWindow type");
        }

        return SlidingWindow.reified().new({
            data: decodeFromFieldsWithTypes(reified.vector(SlidingWindowElement.reified()), item.fields.data),
            latestResult: decodeFromFieldsWithTypes(SwitchboardDecimal.reified(), item.fields.latest_result),
            latestTimestamp: decodeFromFieldsWithTypes("u64", item.fields.latest_timestamp),
        });
    }

    static fromBcs(data: Uint8Array): SlidingWindow {
        return SlidingWindow.fromFields(SlidingWindow.bcs.parse(data));
    }

    toJSONField() {
        return {
            data: fieldToJSON<Vector<SlidingWindowElement>>(`vector<${SlidingWindowElement.$typeName}>`, this.data),
            latestResult: this.latestResult.toJSONField(),
            latestTimestamp: this.latestTimestamp.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): SlidingWindow {
        return SlidingWindow.reified().new({
            data: decodeFromJSONField(reified.vector(SlidingWindowElement.reified()), field.data),
            latestResult: decodeFromJSONField(SwitchboardDecimal.reified(), field.latestResult),
            latestTimestamp: decodeFromJSONField("u64", field.latestTimestamp),
        });
    }

    static fromJSON(json: Record<string, any>): SlidingWindow {
        if (json.$typeName !== SlidingWindow.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SlidingWindow.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SlidingWindow {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSlidingWindow(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SlidingWindow object`);
        }
        return SlidingWindow.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): SlidingWindow {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSlidingWindow(data.bcs.type)) {
                throw new Error(`object at is not a SlidingWindow object`);
            }

            return SlidingWindow.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SlidingWindow.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<SlidingWindow> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SlidingWindow object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSlidingWindow(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SlidingWindow object`);
        }

        return SlidingWindow.fromSuiObjectData(res.data);
    }
}

/* ============================== SlidingWindowElement =============================== */

export function isSlidingWindowElement(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::aggregator::SlidingWindowElement`;
}

export interface SlidingWindowElementFields {
    oracleAddr: ToField<"address">;
    value: ToField<SwitchboardDecimal>;
    timestamp: ToField<"u64">;
}

export type SlidingWindowElementReified = Reified<SlidingWindowElement, SlidingWindowElementFields>;

export class SlidingWindowElement implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::aggregator::SlidingWindowElement`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = SlidingWindowElement.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::aggregator::SlidingWindowElement`;
    readonly $typeArgs: [];
    readonly $isPhantom = SlidingWindowElement.$isPhantom;

    readonly oracleAddr: ToField<"address">;
    readonly value: ToField<SwitchboardDecimal>;
    readonly timestamp: ToField<"u64">;

    private constructor(typeArgs: [], fields: SlidingWindowElementFields) {
        this.$fullTypeName = composeSuiType(
            SlidingWindowElement.$typeName,
            ...typeArgs
        ) as `${typeof PKG_V1}::aggregator::SlidingWindowElement`;
        this.$typeArgs = typeArgs;

        this.oracleAddr = fields.oracleAddr;
        this.value = fields.value;
        this.timestamp = fields.timestamp;
    }

    static reified(): SlidingWindowElementReified {
        return {
            typeName: SlidingWindowElement.$typeName,
            fullTypeName: composeSuiType(SlidingWindowElement.$typeName, ...[]) as `${typeof PKG_V1}::aggregator::SlidingWindowElement`,
            typeArgs: [] as [],
            isPhantom: SlidingWindowElement.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SlidingWindowElement.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SlidingWindowElement.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SlidingWindowElement.fromBcs(data),
            bcs: SlidingWindowElement.bcs,
            fromJSONField: (field: any) => SlidingWindowElement.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SlidingWindowElement.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SlidingWindowElement.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => SlidingWindowElement.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => SlidingWindowElement.fetch(client, id),
            new: (fields: SlidingWindowElementFields) => {
                return new SlidingWindowElement([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SlidingWindowElement.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SlidingWindowElement>> {
        return phantom(SlidingWindowElement.reified());
    }
    static get p() {
        return SlidingWindowElement.phantom();
    }

    static get bcs() {
        return bcs.struct("SlidingWindowElement", {
            oracle_addr: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            value: SwitchboardDecimal.bcs,
            timestamp: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): SlidingWindowElement {
        return SlidingWindowElement.reified().new({
            oracleAddr: decodeFromFields("address", fields.oracle_addr),
            value: decodeFromFields(SwitchboardDecimal.reified(), fields.value),
            timestamp: decodeFromFields("u64", fields.timestamp),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SlidingWindowElement {
        if (!isSlidingWindowElement(item.type)) {
            throw new Error("not a SlidingWindowElement type");
        }

        return SlidingWindowElement.reified().new({
            oracleAddr: decodeFromFieldsWithTypes("address", item.fields.oracle_addr),
            value: decodeFromFieldsWithTypes(SwitchboardDecimal.reified(), item.fields.value),
            timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp),
        });
    }

    static fromBcs(data: Uint8Array): SlidingWindowElement {
        return SlidingWindowElement.fromFields(SlidingWindowElement.bcs.parse(data));
    }

    toJSONField() {
        return {
            oracleAddr: this.oracleAddr,
            value: this.value.toJSONField(),
            timestamp: this.timestamp.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): SlidingWindowElement {
        return SlidingWindowElement.reified().new({
            oracleAddr: decodeFromJSONField("address", field.oracleAddr),
            value: decodeFromJSONField(SwitchboardDecimal.reified(), field.value),
            timestamp: decodeFromJSONField("u64", field.timestamp),
        });
    }

    static fromJSON(json: Record<string, any>): SlidingWindowElement {
        if (json.$typeName !== SlidingWindowElement.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SlidingWindowElement.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SlidingWindowElement {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSlidingWindowElement(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SlidingWindowElement object`);
        }
        return SlidingWindowElement.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): SlidingWindowElement {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSlidingWindowElement(data.bcs.type)) {
                throw new Error(`object at is not a SlidingWindowElement object`);
            }

            return SlidingWindowElement.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SlidingWindowElement.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<SlidingWindowElement> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SlidingWindowElement object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSlidingWindowElement(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SlidingWindowElement object`);
        }

        return SlidingWindowElement.fromSuiObjectData(res.data);
    }
}
