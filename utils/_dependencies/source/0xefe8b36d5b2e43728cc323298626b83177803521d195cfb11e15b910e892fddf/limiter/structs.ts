import * as reified from "../../../../_framework/reified";
import {
    PhantomReified,
    Reified,
    StructClass,
    ToField,
    ToTypeStr,
    Vector,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    fieldToJSON,
    phantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { TypeName } from "../../0x1/type-name/structs";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== Limiter =============================== */

export function isLimiter(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::Limiter";
}

export interface LimiterFields {
    outflowLimit: ToField<"u64">;
    outflowCycleDuration: ToField<"u32">;
    outflowSegmentDuration: ToField<"u32">;
    outflowSegments: ToField<Vector<Segment>>;
}

export type LimiterReified = Reified<Limiter, LimiterFields>;

export class Limiter implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::Limiter";
    static readonly $numTypeParams = 0;

    readonly $typeName = Limiter.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::Limiter";

    readonly $typeArgs: [];

    readonly outflowLimit: ToField<"u64">;
    readonly outflowCycleDuration: ToField<"u32">;
    readonly outflowSegmentDuration: ToField<"u32">;
    readonly outflowSegments: ToField<Vector<Segment>>;

    private constructor(typeArgs: [], fields: LimiterFields) {
        this.$fullTypeName = composeSuiType(
            Limiter.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::Limiter";
        this.$typeArgs = typeArgs;

        this.outflowLimit = fields.outflowLimit;
        this.outflowCycleDuration = fields.outflowCycleDuration;
        this.outflowSegmentDuration = fields.outflowSegmentDuration;
        this.outflowSegments = fields.outflowSegments;
    }

    static reified(): LimiterReified {
        return {
            typeName: Limiter.$typeName,
            fullTypeName: composeSuiType(
                Limiter.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::Limiter",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Limiter.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Limiter.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Limiter.fromBcs(data),
            bcs: Limiter.bcs,
            fromJSONField: (field: any) => Limiter.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Limiter.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Limiter.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => Limiter.fetch(client, id),
            new: (fields: LimiterFields) => {
                return new Limiter([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Limiter.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Limiter>> {
        return phantom(Limiter.reified());
    }
    static get p() {
        return Limiter.phantom();
    }

    static get bcs() {
        return bcs.struct("Limiter", {
            outflow_limit: bcs.u64(),
            outflow_cycle_duration: bcs.u32(),
            outflow_segment_duration: bcs.u32(),
            outflow_segments: bcs.vector(Segment.bcs),
        });
    }

    static fromFields(fields: Record<string, any>): Limiter {
        return Limiter.reified().new({
            outflowLimit: decodeFromFields("u64", fields.outflow_limit),
            outflowCycleDuration: decodeFromFields("u32", fields.outflow_cycle_duration),
            outflowSegmentDuration: decodeFromFields("u32", fields.outflow_segment_duration),
            outflowSegments: decodeFromFields(reified.vector(Segment.reified()), fields.outflow_segments),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Limiter {
        if (!isLimiter(item.type)) {
            throw new Error("not a Limiter type");
        }

        return Limiter.reified().new({
            outflowLimit: decodeFromFieldsWithTypes("u64", item.fields.outflow_limit),
            outflowCycleDuration: decodeFromFieldsWithTypes("u32", item.fields.outflow_cycle_duration),
            outflowSegmentDuration: decodeFromFieldsWithTypes("u32", item.fields.outflow_segment_duration),
            outflowSegments: decodeFromFieldsWithTypes(reified.vector(Segment.reified()), item.fields.outflow_segments),
        });
    }

    static fromBcs(data: Uint8Array): Limiter {
        return Limiter.fromFields(Limiter.bcs.parse(data));
    }

    toJSONField() {
        return {
            outflowLimit: this.outflowLimit.toString(),
            outflowCycleDuration: this.outflowCycleDuration,
            outflowSegmentDuration: this.outflowSegmentDuration,
            outflowSegments: fieldToJSON<Vector<Segment>>(
                `vector<0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::Segment>`,
                this.outflowSegments
            ),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): Limiter {
        return Limiter.reified().new({
            outflowLimit: decodeFromJSONField("u64", field.outflowLimit),
            outflowCycleDuration: decodeFromJSONField("u32", field.outflowCycleDuration),
            outflowSegmentDuration: decodeFromJSONField("u32", field.outflowSegmentDuration),
            outflowSegments: decodeFromJSONField(reified.vector(Segment.reified()), field.outflowSegments),
        });
    }

    static fromJSON(json: Record<string, any>): Limiter {
        if (json.$typeName !== Limiter.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Limiter.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Limiter {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLimiter(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Limiter object`);
        }
        return Limiter.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<Limiter> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Limiter object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLimiter(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Limiter object`);
        }
        return Limiter.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== LimiterLimitChangeAppliedEvent =============================== */

export function isLimiterLimitChangeAppliedEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterLimitChangeAppliedEvent";
}

export interface LimiterLimitChangeAppliedEventFields {
    changes: ToField<LimiterUpdateLimitChange>;
    currentEpoch: ToField<"u64">;
}

export type LimiterLimitChangeAppliedEventReified = Reified<LimiterLimitChangeAppliedEvent, LimiterLimitChangeAppliedEventFields>;

export class LimiterLimitChangeAppliedEvent implements StructClass {
    static readonly $typeName =
        "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterLimitChangeAppliedEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = LimiterLimitChangeAppliedEvent.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterLimitChangeAppliedEvent";

    readonly $typeArgs: [];

    readonly changes: ToField<LimiterUpdateLimitChange>;
    readonly currentEpoch: ToField<"u64">;

    private constructor(typeArgs: [], fields: LimiterLimitChangeAppliedEventFields) {
        this.$fullTypeName = composeSuiType(
            LimiterLimitChangeAppliedEvent.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterLimitChangeAppliedEvent";
        this.$typeArgs = typeArgs;

        this.changes = fields.changes;
        this.currentEpoch = fields.currentEpoch;
    }

    static reified(): LimiterLimitChangeAppliedEventReified {
        return {
            typeName: LimiterLimitChangeAppliedEvent.$typeName,
            fullTypeName: composeSuiType(
                LimiterLimitChangeAppliedEvent.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterLimitChangeAppliedEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LimiterLimitChangeAppliedEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LimiterLimitChangeAppliedEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LimiterLimitChangeAppliedEvent.fromBcs(data),
            bcs: LimiterLimitChangeAppliedEvent.bcs,
            fromJSONField: (field: any) => LimiterLimitChangeAppliedEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LimiterLimitChangeAppliedEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LimiterLimitChangeAppliedEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => LimiterLimitChangeAppliedEvent.fetch(client, id),
            new: (fields: LimiterLimitChangeAppliedEventFields) => {
                return new LimiterLimitChangeAppliedEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LimiterLimitChangeAppliedEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LimiterLimitChangeAppliedEvent>> {
        return phantom(LimiterLimitChangeAppliedEvent.reified());
    }
    static get p() {
        return LimiterLimitChangeAppliedEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("LimiterLimitChangeAppliedEvent", {
            changes: LimiterUpdateLimitChange.bcs,
            current_epoch: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): LimiterLimitChangeAppliedEvent {
        return LimiterLimitChangeAppliedEvent.reified().new({
            changes: decodeFromFields(LimiterUpdateLimitChange.reified(), fields.changes),
            currentEpoch: decodeFromFields("u64", fields.current_epoch),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LimiterLimitChangeAppliedEvent {
        if (!isLimiterLimitChangeAppliedEvent(item.type)) {
            throw new Error("not a LimiterLimitChangeAppliedEvent type");
        }

        return LimiterLimitChangeAppliedEvent.reified().new({
            changes: decodeFromFieldsWithTypes(LimiterUpdateLimitChange.reified(), item.fields.changes),
            currentEpoch: decodeFromFieldsWithTypes("u64", item.fields.current_epoch),
        });
    }

    static fromBcs(data: Uint8Array): LimiterLimitChangeAppliedEvent {
        return LimiterLimitChangeAppliedEvent.fromFields(LimiterLimitChangeAppliedEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            changes: this.changes.toJSONField(),
            currentEpoch: this.currentEpoch.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): LimiterLimitChangeAppliedEvent {
        return LimiterLimitChangeAppliedEvent.reified().new({
            changes: decodeFromJSONField(LimiterUpdateLimitChange.reified(), field.changes),
            currentEpoch: decodeFromJSONField("u64", field.currentEpoch),
        });
    }

    static fromJSON(json: Record<string, any>): LimiterLimitChangeAppliedEvent {
        if (json.$typeName !== LimiterLimitChangeAppliedEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LimiterLimitChangeAppliedEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LimiterLimitChangeAppliedEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLimiterLimitChangeAppliedEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LimiterLimitChangeAppliedEvent object`);
        }
        return LimiterLimitChangeAppliedEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<LimiterLimitChangeAppliedEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LimiterLimitChangeAppliedEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLimiterLimitChangeAppliedEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LimiterLimitChangeAppliedEvent object`);
        }
        return LimiterLimitChangeAppliedEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== LimiterParamsChangeAppliedEvent =============================== */

export function isLimiterParamsChangeAppliedEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterParamsChangeAppliedEvent";
}

export interface LimiterParamsChangeAppliedEventFields {
    changes: ToField<LimiterUpdateParamsChange>;
    currentEpoch: ToField<"u64">;
}

export type LimiterParamsChangeAppliedEventReified = Reified<LimiterParamsChangeAppliedEvent, LimiterParamsChangeAppliedEventFields>;

export class LimiterParamsChangeAppliedEvent implements StructClass {
    static readonly $typeName =
        "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterParamsChangeAppliedEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = LimiterParamsChangeAppliedEvent.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterParamsChangeAppliedEvent";

    readonly $typeArgs: [];

    readonly changes: ToField<LimiterUpdateParamsChange>;
    readonly currentEpoch: ToField<"u64">;

    private constructor(typeArgs: [], fields: LimiterParamsChangeAppliedEventFields) {
        this.$fullTypeName = composeSuiType(
            LimiterParamsChangeAppliedEvent.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterParamsChangeAppliedEvent";
        this.$typeArgs = typeArgs;

        this.changes = fields.changes;
        this.currentEpoch = fields.currentEpoch;
    }

    static reified(): LimiterParamsChangeAppliedEventReified {
        return {
            typeName: LimiterParamsChangeAppliedEvent.$typeName,
            fullTypeName: composeSuiType(
                LimiterParamsChangeAppliedEvent.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterParamsChangeAppliedEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LimiterParamsChangeAppliedEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LimiterParamsChangeAppliedEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LimiterParamsChangeAppliedEvent.fromBcs(data),
            bcs: LimiterParamsChangeAppliedEvent.bcs,
            fromJSONField: (field: any) => LimiterParamsChangeAppliedEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LimiterParamsChangeAppliedEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LimiterParamsChangeAppliedEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => LimiterParamsChangeAppliedEvent.fetch(client, id),
            new: (fields: LimiterParamsChangeAppliedEventFields) => {
                return new LimiterParamsChangeAppliedEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LimiterParamsChangeAppliedEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LimiterParamsChangeAppliedEvent>> {
        return phantom(LimiterParamsChangeAppliedEvent.reified());
    }
    static get p() {
        return LimiterParamsChangeAppliedEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("LimiterParamsChangeAppliedEvent", {
            changes: LimiterUpdateParamsChange.bcs,
            current_epoch: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): LimiterParamsChangeAppliedEvent {
        return LimiterParamsChangeAppliedEvent.reified().new({
            changes: decodeFromFields(LimiterUpdateParamsChange.reified(), fields.changes),
            currentEpoch: decodeFromFields("u64", fields.current_epoch),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LimiterParamsChangeAppliedEvent {
        if (!isLimiterParamsChangeAppliedEvent(item.type)) {
            throw new Error("not a LimiterParamsChangeAppliedEvent type");
        }

        return LimiterParamsChangeAppliedEvent.reified().new({
            changes: decodeFromFieldsWithTypes(LimiterUpdateParamsChange.reified(), item.fields.changes),
            currentEpoch: decodeFromFieldsWithTypes("u64", item.fields.current_epoch),
        });
    }

    static fromBcs(data: Uint8Array): LimiterParamsChangeAppliedEvent {
        return LimiterParamsChangeAppliedEvent.fromFields(LimiterParamsChangeAppliedEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            changes: this.changes.toJSONField(),
            currentEpoch: this.currentEpoch.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): LimiterParamsChangeAppliedEvent {
        return LimiterParamsChangeAppliedEvent.reified().new({
            changes: decodeFromJSONField(LimiterUpdateParamsChange.reified(), field.changes),
            currentEpoch: decodeFromJSONField("u64", field.currentEpoch),
        });
    }

    static fromJSON(json: Record<string, any>): LimiterParamsChangeAppliedEvent {
        if (json.$typeName !== LimiterParamsChangeAppliedEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LimiterParamsChangeAppliedEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LimiterParamsChangeAppliedEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLimiterParamsChangeAppliedEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LimiterParamsChangeAppliedEvent object`);
        }
        return LimiterParamsChangeAppliedEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<LimiterParamsChangeAppliedEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LimiterParamsChangeAppliedEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLimiterParamsChangeAppliedEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LimiterParamsChangeAppliedEvent object`);
        }
        return LimiterParamsChangeAppliedEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== LimiterUpdateLimitChange =============================== */

export function isLimiterUpdateLimitChange(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateLimitChange";
}

export interface LimiterUpdateLimitChangeFields {
    coinType: ToField<TypeName>;
    outflowLimit: ToField<"u64">;
}

export type LimiterUpdateLimitChangeReified = Reified<LimiterUpdateLimitChange, LimiterUpdateLimitChangeFields>;

export class LimiterUpdateLimitChange implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateLimitChange";
    static readonly $numTypeParams = 0;

    readonly $typeName = LimiterUpdateLimitChange.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateLimitChange";

    readonly $typeArgs: [];

    readonly coinType: ToField<TypeName>;
    readonly outflowLimit: ToField<"u64">;

    private constructor(typeArgs: [], fields: LimiterUpdateLimitChangeFields) {
        this.$fullTypeName = composeSuiType(
            LimiterUpdateLimitChange.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateLimitChange";
        this.$typeArgs = typeArgs;

        this.coinType = fields.coinType;
        this.outflowLimit = fields.outflowLimit;
    }

    static reified(): LimiterUpdateLimitChangeReified {
        return {
            typeName: LimiterUpdateLimitChange.$typeName,
            fullTypeName: composeSuiType(
                LimiterUpdateLimitChange.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateLimitChange",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LimiterUpdateLimitChange.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LimiterUpdateLimitChange.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LimiterUpdateLimitChange.fromBcs(data),
            bcs: LimiterUpdateLimitChange.bcs,
            fromJSONField: (field: any) => LimiterUpdateLimitChange.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LimiterUpdateLimitChange.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LimiterUpdateLimitChange.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => LimiterUpdateLimitChange.fetch(client, id),
            new: (fields: LimiterUpdateLimitChangeFields) => {
                return new LimiterUpdateLimitChange([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LimiterUpdateLimitChange.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LimiterUpdateLimitChange>> {
        return phantom(LimiterUpdateLimitChange.reified());
    }
    static get p() {
        return LimiterUpdateLimitChange.phantom();
    }

    static get bcs() {
        return bcs.struct("LimiterUpdateLimitChange", {
            coin_type: TypeName.bcs,
            outflow_limit: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): LimiterUpdateLimitChange {
        return LimiterUpdateLimitChange.reified().new({
            coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
            outflowLimit: decodeFromFields("u64", fields.outflow_limit),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LimiterUpdateLimitChange {
        if (!isLimiterUpdateLimitChange(item.type)) {
            throw new Error("not a LimiterUpdateLimitChange type");
        }

        return LimiterUpdateLimitChange.reified().new({
            coinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type),
            outflowLimit: decodeFromFieldsWithTypes("u64", item.fields.outflow_limit),
        });
    }

    static fromBcs(data: Uint8Array): LimiterUpdateLimitChange {
        return LimiterUpdateLimitChange.fromFields(LimiterUpdateLimitChange.bcs.parse(data));
    }

    toJSONField() {
        return {
            coinType: this.coinType.toJSONField(),
            outflowLimit: this.outflowLimit.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): LimiterUpdateLimitChange {
        return LimiterUpdateLimitChange.reified().new({
            coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
            outflowLimit: decodeFromJSONField("u64", field.outflowLimit),
        });
    }

    static fromJSON(json: Record<string, any>): LimiterUpdateLimitChange {
        if (json.$typeName !== LimiterUpdateLimitChange.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LimiterUpdateLimitChange.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LimiterUpdateLimitChange {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLimiterUpdateLimitChange(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LimiterUpdateLimitChange object`);
        }
        return LimiterUpdateLimitChange.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<LimiterUpdateLimitChange> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LimiterUpdateLimitChange object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLimiterUpdateLimitChange(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LimiterUpdateLimitChange object`);
        }
        return LimiterUpdateLimitChange.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== LimiterUpdateLimitChangeCreatedEvent =============================== */

export function isLimiterUpdateLimitChangeCreatedEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateLimitChangeCreatedEvent";
}

export interface LimiterUpdateLimitChangeCreatedEventFields {
    changes: ToField<LimiterUpdateLimitChange>;
    currentEpoch: ToField<"u64">;
    delayEpoches: ToField<"u64">;
    effectiveEpoches: ToField<"u64">;
}

export type LimiterUpdateLimitChangeCreatedEventReified = Reified<
    LimiterUpdateLimitChangeCreatedEvent,
    LimiterUpdateLimitChangeCreatedEventFields
>;

export class LimiterUpdateLimitChangeCreatedEvent implements StructClass {
    static readonly $typeName =
        "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateLimitChangeCreatedEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = LimiterUpdateLimitChangeCreatedEvent.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateLimitChangeCreatedEvent";

    readonly $typeArgs: [];

    readonly changes: ToField<LimiterUpdateLimitChange>;
    readonly currentEpoch: ToField<"u64">;
    readonly delayEpoches: ToField<"u64">;
    readonly effectiveEpoches: ToField<"u64">;

    private constructor(typeArgs: [], fields: LimiterUpdateLimitChangeCreatedEventFields) {
        this.$fullTypeName = composeSuiType(
            LimiterUpdateLimitChangeCreatedEvent.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateLimitChangeCreatedEvent";
        this.$typeArgs = typeArgs;

        this.changes = fields.changes;
        this.currentEpoch = fields.currentEpoch;
        this.delayEpoches = fields.delayEpoches;
        this.effectiveEpoches = fields.effectiveEpoches;
    }

    static reified(): LimiterUpdateLimitChangeCreatedEventReified {
        return {
            typeName: LimiterUpdateLimitChangeCreatedEvent.$typeName,
            fullTypeName: composeSuiType(
                LimiterUpdateLimitChangeCreatedEvent.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateLimitChangeCreatedEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LimiterUpdateLimitChangeCreatedEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LimiterUpdateLimitChangeCreatedEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LimiterUpdateLimitChangeCreatedEvent.fromBcs(data),
            bcs: LimiterUpdateLimitChangeCreatedEvent.bcs,
            fromJSONField: (field: any) => LimiterUpdateLimitChangeCreatedEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LimiterUpdateLimitChangeCreatedEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LimiterUpdateLimitChangeCreatedEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => LimiterUpdateLimitChangeCreatedEvent.fetch(client, id),
            new: (fields: LimiterUpdateLimitChangeCreatedEventFields) => {
                return new LimiterUpdateLimitChangeCreatedEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LimiterUpdateLimitChangeCreatedEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LimiterUpdateLimitChangeCreatedEvent>> {
        return phantom(LimiterUpdateLimitChangeCreatedEvent.reified());
    }
    static get p() {
        return LimiterUpdateLimitChangeCreatedEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("LimiterUpdateLimitChangeCreatedEvent", {
            changes: LimiterUpdateLimitChange.bcs,
            current_epoch: bcs.u64(),
            delay_epoches: bcs.u64(),
            effective_epoches: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): LimiterUpdateLimitChangeCreatedEvent {
        return LimiterUpdateLimitChangeCreatedEvent.reified().new({
            changes: decodeFromFields(LimiterUpdateLimitChange.reified(), fields.changes),
            currentEpoch: decodeFromFields("u64", fields.current_epoch),
            delayEpoches: decodeFromFields("u64", fields.delay_epoches),
            effectiveEpoches: decodeFromFields("u64", fields.effective_epoches),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LimiterUpdateLimitChangeCreatedEvent {
        if (!isLimiterUpdateLimitChangeCreatedEvent(item.type)) {
            throw new Error("not a LimiterUpdateLimitChangeCreatedEvent type");
        }

        return LimiterUpdateLimitChangeCreatedEvent.reified().new({
            changes: decodeFromFieldsWithTypes(LimiterUpdateLimitChange.reified(), item.fields.changes),
            currentEpoch: decodeFromFieldsWithTypes("u64", item.fields.current_epoch),
            delayEpoches: decodeFromFieldsWithTypes("u64", item.fields.delay_epoches),
            effectiveEpoches: decodeFromFieldsWithTypes("u64", item.fields.effective_epoches),
        });
    }

    static fromBcs(data: Uint8Array): LimiterUpdateLimitChangeCreatedEvent {
        return LimiterUpdateLimitChangeCreatedEvent.fromFields(LimiterUpdateLimitChangeCreatedEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            changes: this.changes.toJSONField(),
            currentEpoch: this.currentEpoch.toString(),
            delayEpoches: this.delayEpoches.toString(),
            effectiveEpoches: this.effectiveEpoches.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): LimiterUpdateLimitChangeCreatedEvent {
        return LimiterUpdateLimitChangeCreatedEvent.reified().new({
            changes: decodeFromJSONField(LimiterUpdateLimitChange.reified(), field.changes),
            currentEpoch: decodeFromJSONField("u64", field.currentEpoch),
            delayEpoches: decodeFromJSONField("u64", field.delayEpoches),
            effectiveEpoches: decodeFromJSONField("u64", field.effectiveEpoches),
        });
    }

    static fromJSON(json: Record<string, any>): LimiterUpdateLimitChangeCreatedEvent {
        if (json.$typeName !== LimiterUpdateLimitChangeCreatedEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LimiterUpdateLimitChangeCreatedEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LimiterUpdateLimitChangeCreatedEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLimiterUpdateLimitChangeCreatedEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LimiterUpdateLimitChangeCreatedEvent object`);
        }
        return LimiterUpdateLimitChangeCreatedEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<LimiterUpdateLimitChangeCreatedEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LimiterUpdateLimitChangeCreatedEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLimiterUpdateLimitChangeCreatedEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LimiterUpdateLimitChangeCreatedEvent object`);
        }
        return LimiterUpdateLimitChangeCreatedEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== LimiterUpdateParamsChange =============================== */

export function isLimiterUpdateParamsChange(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateParamsChange";
}

export interface LimiterUpdateParamsChangeFields {
    coinType: ToField<TypeName>;
    outflowCycleDuration: ToField<"u32">;
    outflowSegmentDuration: ToField<"u32">;
}

export type LimiterUpdateParamsChangeReified = Reified<LimiterUpdateParamsChange, LimiterUpdateParamsChangeFields>;

export class LimiterUpdateParamsChange implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateParamsChange";
    static readonly $numTypeParams = 0;

    readonly $typeName = LimiterUpdateParamsChange.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateParamsChange";

    readonly $typeArgs: [];

    readonly coinType: ToField<TypeName>;
    readonly outflowCycleDuration: ToField<"u32">;
    readonly outflowSegmentDuration: ToField<"u32">;

    private constructor(typeArgs: [], fields: LimiterUpdateParamsChangeFields) {
        this.$fullTypeName = composeSuiType(
            LimiterUpdateParamsChange.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateParamsChange";
        this.$typeArgs = typeArgs;

        this.coinType = fields.coinType;
        this.outflowCycleDuration = fields.outflowCycleDuration;
        this.outflowSegmentDuration = fields.outflowSegmentDuration;
    }

    static reified(): LimiterUpdateParamsChangeReified {
        return {
            typeName: LimiterUpdateParamsChange.$typeName,
            fullTypeName: composeSuiType(
                LimiterUpdateParamsChange.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateParamsChange",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LimiterUpdateParamsChange.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LimiterUpdateParamsChange.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LimiterUpdateParamsChange.fromBcs(data),
            bcs: LimiterUpdateParamsChange.bcs,
            fromJSONField: (field: any) => LimiterUpdateParamsChange.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LimiterUpdateParamsChange.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LimiterUpdateParamsChange.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => LimiterUpdateParamsChange.fetch(client, id),
            new: (fields: LimiterUpdateParamsChangeFields) => {
                return new LimiterUpdateParamsChange([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LimiterUpdateParamsChange.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LimiterUpdateParamsChange>> {
        return phantom(LimiterUpdateParamsChange.reified());
    }
    static get p() {
        return LimiterUpdateParamsChange.phantom();
    }

    static get bcs() {
        return bcs.struct("LimiterUpdateParamsChange", {
            coin_type: TypeName.bcs,
            outflow_cycle_duration: bcs.u32(),
            outflow_segment_duration: bcs.u32(),
        });
    }

    static fromFields(fields: Record<string, any>): LimiterUpdateParamsChange {
        return LimiterUpdateParamsChange.reified().new({
            coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
            outflowCycleDuration: decodeFromFields("u32", fields.outflow_cycle_duration),
            outflowSegmentDuration: decodeFromFields("u32", fields.outflow_segment_duration),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LimiterUpdateParamsChange {
        if (!isLimiterUpdateParamsChange(item.type)) {
            throw new Error("not a LimiterUpdateParamsChange type");
        }

        return LimiterUpdateParamsChange.reified().new({
            coinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type),
            outflowCycleDuration: decodeFromFieldsWithTypes("u32", item.fields.outflow_cycle_duration),
            outflowSegmentDuration: decodeFromFieldsWithTypes("u32", item.fields.outflow_segment_duration),
        });
    }

    static fromBcs(data: Uint8Array): LimiterUpdateParamsChange {
        return LimiterUpdateParamsChange.fromFields(LimiterUpdateParamsChange.bcs.parse(data));
    }

    toJSONField() {
        return {
            coinType: this.coinType.toJSONField(),
            outflowCycleDuration: this.outflowCycleDuration,
            outflowSegmentDuration: this.outflowSegmentDuration,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): LimiterUpdateParamsChange {
        return LimiterUpdateParamsChange.reified().new({
            coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
            outflowCycleDuration: decodeFromJSONField("u32", field.outflowCycleDuration),
            outflowSegmentDuration: decodeFromJSONField("u32", field.outflowSegmentDuration),
        });
    }

    static fromJSON(json: Record<string, any>): LimiterUpdateParamsChange {
        if (json.$typeName !== LimiterUpdateParamsChange.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LimiterUpdateParamsChange.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LimiterUpdateParamsChange {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLimiterUpdateParamsChange(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LimiterUpdateParamsChange object`);
        }
        return LimiterUpdateParamsChange.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<LimiterUpdateParamsChange> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LimiterUpdateParamsChange object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLimiterUpdateParamsChange(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LimiterUpdateParamsChange object`);
        }
        return LimiterUpdateParamsChange.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== LimiterUpdateParamsChangeCreatedEvent =============================== */

export function isLimiterUpdateParamsChangeCreatedEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateParamsChangeCreatedEvent";
}

export interface LimiterUpdateParamsChangeCreatedEventFields {
    changes: ToField<LimiterUpdateParamsChange>;
    currentEpoch: ToField<"u64">;
    delayEpoches: ToField<"u64">;
    effectiveEpoches: ToField<"u64">;
}

export type LimiterUpdateParamsChangeCreatedEventReified = Reified<
    LimiterUpdateParamsChangeCreatedEvent,
    LimiterUpdateParamsChangeCreatedEventFields
>;

export class LimiterUpdateParamsChangeCreatedEvent implements StructClass {
    static readonly $typeName =
        "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateParamsChangeCreatedEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = LimiterUpdateParamsChangeCreatedEvent.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateParamsChangeCreatedEvent";

    readonly $typeArgs: [];

    readonly changes: ToField<LimiterUpdateParamsChange>;
    readonly currentEpoch: ToField<"u64">;
    readonly delayEpoches: ToField<"u64">;
    readonly effectiveEpoches: ToField<"u64">;

    private constructor(typeArgs: [], fields: LimiterUpdateParamsChangeCreatedEventFields) {
        this.$fullTypeName = composeSuiType(
            LimiterUpdateParamsChangeCreatedEvent.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateParamsChangeCreatedEvent";
        this.$typeArgs = typeArgs;

        this.changes = fields.changes;
        this.currentEpoch = fields.currentEpoch;
        this.delayEpoches = fields.delayEpoches;
        this.effectiveEpoches = fields.effectiveEpoches;
    }

    static reified(): LimiterUpdateParamsChangeCreatedEventReified {
        return {
            typeName: LimiterUpdateParamsChangeCreatedEvent.$typeName,
            fullTypeName: composeSuiType(
                LimiterUpdateParamsChangeCreatedEvent.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::LimiterUpdateParamsChangeCreatedEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LimiterUpdateParamsChangeCreatedEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LimiterUpdateParamsChangeCreatedEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LimiterUpdateParamsChangeCreatedEvent.fromBcs(data),
            bcs: LimiterUpdateParamsChangeCreatedEvent.bcs,
            fromJSONField: (field: any) => LimiterUpdateParamsChangeCreatedEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LimiterUpdateParamsChangeCreatedEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LimiterUpdateParamsChangeCreatedEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => LimiterUpdateParamsChangeCreatedEvent.fetch(client, id),
            new: (fields: LimiterUpdateParamsChangeCreatedEventFields) => {
                return new LimiterUpdateParamsChangeCreatedEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LimiterUpdateParamsChangeCreatedEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LimiterUpdateParamsChangeCreatedEvent>> {
        return phantom(LimiterUpdateParamsChangeCreatedEvent.reified());
    }
    static get p() {
        return LimiterUpdateParamsChangeCreatedEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("LimiterUpdateParamsChangeCreatedEvent", {
            changes: LimiterUpdateParamsChange.bcs,
            current_epoch: bcs.u64(),
            delay_epoches: bcs.u64(),
            effective_epoches: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): LimiterUpdateParamsChangeCreatedEvent {
        return LimiterUpdateParamsChangeCreatedEvent.reified().new({
            changes: decodeFromFields(LimiterUpdateParamsChange.reified(), fields.changes),
            currentEpoch: decodeFromFields("u64", fields.current_epoch),
            delayEpoches: decodeFromFields("u64", fields.delay_epoches),
            effectiveEpoches: decodeFromFields("u64", fields.effective_epoches),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LimiterUpdateParamsChangeCreatedEvent {
        if (!isLimiterUpdateParamsChangeCreatedEvent(item.type)) {
            throw new Error("not a LimiterUpdateParamsChangeCreatedEvent type");
        }

        return LimiterUpdateParamsChangeCreatedEvent.reified().new({
            changes: decodeFromFieldsWithTypes(LimiterUpdateParamsChange.reified(), item.fields.changes),
            currentEpoch: decodeFromFieldsWithTypes("u64", item.fields.current_epoch),
            delayEpoches: decodeFromFieldsWithTypes("u64", item.fields.delay_epoches),
            effectiveEpoches: decodeFromFieldsWithTypes("u64", item.fields.effective_epoches),
        });
    }

    static fromBcs(data: Uint8Array): LimiterUpdateParamsChangeCreatedEvent {
        return LimiterUpdateParamsChangeCreatedEvent.fromFields(LimiterUpdateParamsChangeCreatedEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            changes: this.changes.toJSONField(),
            currentEpoch: this.currentEpoch.toString(),
            delayEpoches: this.delayEpoches.toString(),
            effectiveEpoches: this.effectiveEpoches.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): LimiterUpdateParamsChangeCreatedEvent {
        return LimiterUpdateParamsChangeCreatedEvent.reified().new({
            changes: decodeFromJSONField(LimiterUpdateParamsChange.reified(), field.changes),
            currentEpoch: decodeFromJSONField("u64", field.currentEpoch),
            delayEpoches: decodeFromJSONField("u64", field.delayEpoches),
            effectiveEpoches: decodeFromJSONField("u64", field.effectiveEpoches),
        });
    }

    static fromJSON(json: Record<string, any>): LimiterUpdateParamsChangeCreatedEvent {
        if (json.$typeName !== LimiterUpdateParamsChangeCreatedEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LimiterUpdateParamsChangeCreatedEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LimiterUpdateParamsChangeCreatedEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLimiterUpdateParamsChangeCreatedEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LimiterUpdateParamsChangeCreatedEvent object`);
        }
        return LimiterUpdateParamsChangeCreatedEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<LimiterUpdateParamsChangeCreatedEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LimiterUpdateParamsChangeCreatedEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLimiterUpdateParamsChangeCreatedEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LimiterUpdateParamsChangeCreatedEvent object`);
        }
        return LimiterUpdateParamsChangeCreatedEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== Limiters =============================== */

export function isLimiters(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::Limiters";
}

export interface LimitersFields {
    dummyField: ToField<"bool">;
}

export type LimitersReified = Reified<Limiters, LimitersFields>;

export class Limiters implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::Limiters";
    static readonly $numTypeParams = 0;

    readonly $typeName = Limiters.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::Limiters";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: LimitersFields) {
        this.$fullTypeName = composeSuiType(
            Limiters.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::Limiters";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): LimitersReified {
        return {
            typeName: Limiters.$typeName,
            fullTypeName: composeSuiType(
                Limiters.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::Limiters",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Limiters.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Limiters.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Limiters.fromBcs(data),
            bcs: Limiters.bcs,
            fromJSONField: (field: any) => Limiters.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Limiters.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Limiters.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => Limiters.fetch(client, id),
            new: (fields: LimitersFields) => {
                return new Limiters([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Limiters.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Limiters>> {
        return phantom(Limiters.reified());
    }
    static get p() {
        return Limiters.phantom();
    }

    static get bcs() {
        return bcs.struct("Limiters", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): Limiters {
        return Limiters.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Limiters {
        if (!isLimiters(item.type)) {
            throw new Error("not a Limiters type");
        }

        return Limiters.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): Limiters {
        return Limiters.fromFields(Limiters.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): Limiters {
        return Limiters.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): Limiters {
        if (json.$typeName !== Limiters.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Limiters.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Limiters {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLimiters(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Limiters object`);
        }
        return Limiters.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<Limiters> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Limiters object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLimiters(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Limiters object`);
        }
        return Limiters.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== Segment =============================== */

export function isSegment(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::Segment";
}

export interface SegmentFields {
    index: ToField<"u64">;
    value: ToField<"u64">;
}

export type SegmentReified = Reified<Segment, SegmentFields>;

export class Segment implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::Segment";
    static readonly $numTypeParams = 0;

    readonly $typeName = Segment.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::Segment";

    readonly $typeArgs: [];

    readonly index: ToField<"u64">;
    readonly value: ToField<"u64">;

    private constructor(typeArgs: [], fields: SegmentFields) {
        this.$fullTypeName = composeSuiType(
            Segment.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::Segment";
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.value = fields.value;
    }

    static reified(): SegmentReified {
        return {
            typeName: Segment.$typeName,
            fullTypeName: composeSuiType(
                Segment.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::limiter::Segment",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Segment.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Segment.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Segment.fromBcs(data),
            bcs: Segment.bcs,
            fromJSONField: (field: any) => Segment.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Segment.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Segment.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => Segment.fetch(client, id),
            new: (fields: SegmentFields) => {
                return new Segment([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Segment.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Segment>> {
        return phantom(Segment.reified());
    }
    static get p() {
        return Segment.phantom();
    }

    static get bcs() {
        return bcs.struct("Segment", {
            index: bcs.u64(),
            value: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Segment {
        return Segment.reified().new({ index: decodeFromFields("u64", fields.index), value: decodeFromFields("u64", fields.value) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Segment {
        if (!isSegment(item.type)) {
            throw new Error("not a Segment type");
        }

        return Segment.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            value: decodeFromFieldsWithTypes("u64", item.fields.value),
        });
    }

    static fromBcs(data: Uint8Array): Segment {
        return Segment.fromFields(Segment.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            value: this.value.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): Segment {
        return Segment.reified().new({ index: decodeFromJSONField("u64", field.index), value: decodeFromJSONField("u64", field.value) });
    }

    static fromJSON(json: Record<string, any>): Segment {
        if (json.$typeName !== Segment.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Segment.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Segment {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSegment(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Segment object`);
        }
        return Segment.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<Segment> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Segment object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSegment(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Segment object`);
        }
        return Segment.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
