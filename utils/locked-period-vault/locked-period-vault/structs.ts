import * as reified from "../../_framework/reified";
import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import { UID } from "../../_dependencies/source/0x2/object/structs";
import { VecMap } from "../../_dependencies/source/0x2/vec-map/structs";
import { BigVector } from "../../_dependencies/source/0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded/big-vector/structs";
import { TypusDepositReceipt } from "../../_dependencies/source/0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded/vault/structs";
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
    ToTypeStr as ToPhantom,
} from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../_framework/util";
import { bcs, fromB64, fromHEX, toHEX } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== AddIncentiveEvent =============================== */

export function isAddIncentiveEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::locked_period_vault::AddIncentiveEvent";
}

export interface AddIncentiveEventFields {
    index: ToField<"u64">;
    value: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type AddIncentiveEventReified = Reified<AddIncentiveEvent, AddIncentiveEventFields>;

export class AddIncentiveEvent implements StructClass {
    static readonly $typeName = "0x0::locked_period_vault::AddIncentiveEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = AddIncentiveEvent.$typeName;

    readonly $fullTypeName: "0x0::locked_period_vault::AddIncentiveEvent";

    readonly $typeArgs: [];

    readonly index: ToField<"u64">;
    readonly value: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: AddIncentiveEventFields) {
        this.$fullTypeName = composeSuiType(AddIncentiveEvent.$typeName, ...typeArgs) as "0x0::locked_period_vault::AddIncentiveEvent";
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.value = fields.value;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): AddIncentiveEventReified {
        return {
            typeName: AddIncentiveEvent.$typeName,
            fullTypeName: composeSuiType(AddIncentiveEvent.$typeName, ...[]) as "0x0::locked_period_vault::AddIncentiveEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AddIncentiveEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AddIncentiveEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AddIncentiveEvent.fromBcs(data),
            bcs: AddIncentiveEvent.bcs,
            fromJSONField: (field: any) => AddIncentiveEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AddIncentiveEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AddIncentiveEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => AddIncentiveEvent.fetch(client, id),
            new: (fields: AddIncentiveEventFields) => {
                return new AddIncentiveEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AddIncentiveEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AddIncentiveEvent>> {
        return phantom(AddIncentiveEvent.reified());
    }
    static get p() {
        return AddIncentiveEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("AddIncentiveEvent", {
            index: bcs.u64(),
            value: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): AddIncentiveEvent {
        return AddIncentiveEvent.reified().new({
            index: decodeFromFields("u64", fields.index),
            value: decodeFromFields("u64", fields.value),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AddIncentiveEvent {
        if (!isAddIncentiveEvent(item.type)) {
            throw new Error("not a AddIncentiveEvent type");
        }

        return AddIncentiveEvent.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            value: decodeFromFieldsWithTypes("u64", item.fields.value),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): AddIncentiveEvent {
        return AddIncentiveEvent.fromFields(AddIncentiveEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            value: this.value.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): AddIncentiveEvent {
        return AddIncentiveEvent.reified().new({
            index: decodeFromJSONField("u64", field.index),
            value: decodeFromJSONField("u64", field.value),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): AddIncentiveEvent {
        if (json.$typeName !== AddIncentiveEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AddIncentiveEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AddIncentiveEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddIncentiveEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AddIncentiveEvent object`);
        }
        return AddIncentiveEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<AddIncentiveEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AddIncentiveEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddIncentiveEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddIncentiveEvent object`);
        }
        return AddIncentiveEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== CrankLeaveEvent =============================== */

export function isCrankLeaveEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::locked_period_vault::CrankLeaveEvent";
}

export interface CrankLeaveEventFields {
    index: ToField<"u64">;
    unlockTsMs: ToField<"u64">;
    tsMs: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type CrankLeaveEventReified = Reified<CrankLeaveEvent, CrankLeaveEventFields>;

export class CrankLeaveEvent implements StructClass {
    static readonly $typeName = "0x0::locked_period_vault::CrankLeaveEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = CrankLeaveEvent.$typeName;

    readonly $fullTypeName: "0x0::locked_period_vault::CrankLeaveEvent";

    readonly $typeArgs: [];

    readonly index: ToField<"u64">;
    readonly unlockTsMs: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: CrankLeaveEventFields) {
        this.$fullTypeName = composeSuiType(CrankLeaveEvent.$typeName, ...typeArgs) as "0x0::locked_period_vault::CrankLeaveEvent";
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.unlockTsMs = fields.unlockTsMs;
        this.tsMs = fields.tsMs;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): CrankLeaveEventReified {
        return {
            typeName: CrankLeaveEvent.$typeName,
            fullTypeName: composeSuiType(CrankLeaveEvent.$typeName, ...[]) as "0x0::locked_period_vault::CrankLeaveEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => CrankLeaveEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => CrankLeaveEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => CrankLeaveEvent.fromBcs(data),
            bcs: CrankLeaveEvent.bcs,
            fromJSONField: (field: any) => CrankLeaveEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => CrankLeaveEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => CrankLeaveEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => CrankLeaveEvent.fetch(client, id),
            new: (fields: CrankLeaveEventFields) => {
                return new CrankLeaveEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return CrankLeaveEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<CrankLeaveEvent>> {
        return phantom(CrankLeaveEvent.reified());
    }
    static get p() {
        return CrankLeaveEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("CrankLeaveEvent", {
            index: bcs.u64(),
            unlock_ts_ms: bcs.u64(),
            ts_ms: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): CrankLeaveEvent {
        return CrankLeaveEvent.reified().new({
            index: decodeFromFields("u64", fields.index),
            unlockTsMs: decodeFromFields("u64", fields.unlock_ts_ms),
            tsMs: decodeFromFields("u64", fields.ts_ms),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): CrankLeaveEvent {
        if (!isCrankLeaveEvent(item.type)) {
            throw new Error("not a CrankLeaveEvent type");
        }

        return CrankLeaveEvent.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            unlockTsMs: decodeFromFieldsWithTypes("u64", item.fields.unlock_ts_ms),
            tsMs: decodeFromFieldsWithTypes("u64", item.fields.ts_ms),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): CrankLeaveEvent {
        return CrankLeaveEvent.fromFields(CrankLeaveEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            unlockTsMs: this.unlockTsMs.toString(),
            tsMs: this.tsMs.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): CrankLeaveEvent {
        return CrankLeaveEvent.reified().new({
            index: decodeFromJSONField("u64", field.index),
            unlockTsMs: decodeFromJSONField("u64", field.unlockTsMs),
            tsMs: decodeFromJSONField("u64", field.tsMs),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): CrankLeaveEvent {
        if (json.$typeName !== CrankLeaveEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return CrankLeaveEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): CrankLeaveEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCrankLeaveEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CrankLeaveEvent object`);
        }
        return CrankLeaveEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<CrankLeaveEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching CrankLeaveEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCrankLeaveEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CrankLeaveEvent object`);
        }
        return CrankLeaveEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== HotPotato =============================== */

export function isHotPotato(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::HotPotato";
}

export interface HotPotatoFields {
    dummyField: ToField<"bool">;
}

export type HotPotatoReified = Reified<HotPotato, HotPotatoFields>;

export class HotPotato implements StructClass {
    static readonly $typeName = "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::HotPotato";
    static readonly $numTypeParams = 0;

    readonly $typeName = HotPotato.$typeName;

    readonly $fullTypeName: "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::HotPotato";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: HotPotatoFields) {
        this.$fullTypeName = composeSuiType(
            HotPotato.$typeName,
            ...typeArgs
        ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::HotPotato";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): HotPotatoReified {
        return {
            typeName: HotPotato.$typeName,
            fullTypeName: composeSuiType(
                HotPotato.$typeName,
                ...[]
            ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::HotPotato",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => HotPotato.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => HotPotato.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => HotPotato.fromBcs(data),
            bcs: HotPotato.bcs,
            fromJSONField: (field: any) => HotPotato.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => HotPotato.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => HotPotato.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => HotPotato.fetch(client, id),
            new: (fields: HotPotatoFields) => {
                return new HotPotato([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return HotPotato.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<HotPotato>> {
        return phantom(HotPotato.reified());
    }
    static get p() {
        return HotPotato.phantom();
    }

    static get bcs() {
        return bcs.struct("HotPotato", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): HotPotato {
        return HotPotato.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): HotPotato {
        if (!isHotPotato(item.type)) {
            throw new Error("not a HotPotato type");
        }

        return HotPotato.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): HotPotato {
        return HotPotato.fromFields(HotPotato.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): HotPotato {
        return HotPotato.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): HotPotato {
        if (json.$typeName !== HotPotato.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return HotPotato.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): HotPotato {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isHotPotato(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a HotPotato object`);
        }
        return HotPotato.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<HotPotato> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching HotPotato object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isHotPotato(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HotPotato object`);
        }
        return HotPotato.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== IncentiviseEvent =============================== */

export function isIncentiviseEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::locked_period_vault::IncentiviseEvent";
}

export interface IncentiviseEventFields {
    index: ToField<"u64">;
    incentiveTsMs: ToField<"u64">;
    tsMs: ToField<"u64">;
    incentivePpm: ToField<"u64">;
    ppmAdjustment: ToField<"u64">;
    totalLocked: ToField<"u64">;
    totalIncentive: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type IncentiviseEventReified = Reified<IncentiviseEvent, IncentiviseEventFields>;

export class IncentiviseEvent implements StructClass {
    static readonly $typeName = "0x0::locked_period_vault::IncentiviseEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = IncentiviseEvent.$typeName;

    readonly $fullTypeName: "0x0::locked_period_vault::IncentiviseEvent";

    readonly $typeArgs: [];

    readonly index: ToField<"u64">;
    readonly incentiveTsMs: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    readonly incentivePpm: ToField<"u64">;
    readonly ppmAdjustment: ToField<"u64">;
    readonly totalLocked: ToField<"u64">;
    readonly totalIncentive: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: IncentiviseEventFields) {
        this.$fullTypeName = composeSuiType(IncentiviseEvent.$typeName, ...typeArgs) as "0x0::locked_period_vault::IncentiviseEvent";
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.incentiveTsMs = fields.incentiveTsMs;
        this.tsMs = fields.tsMs;
        this.incentivePpm = fields.incentivePpm;
        this.ppmAdjustment = fields.ppmAdjustment;
        this.totalLocked = fields.totalLocked;
        this.totalIncentive = fields.totalIncentive;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): IncentiviseEventReified {
        return {
            typeName: IncentiviseEvent.$typeName,
            fullTypeName: composeSuiType(IncentiviseEvent.$typeName, ...[]) as "0x0::locked_period_vault::IncentiviseEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => IncentiviseEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => IncentiviseEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => IncentiviseEvent.fromBcs(data),
            bcs: IncentiviseEvent.bcs,
            fromJSONField: (field: any) => IncentiviseEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => IncentiviseEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => IncentiviseEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => IncentiviseEvent.fetch(client, id),
            new: (fields: IncentiviseEventFields) => {
                return new IncentiviseEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return IncentiviseEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<IncentiviseEvent>> {
        return phantom(IncentiviseEvent.reified());
    }
    static get p() {
        return IncentiviseEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("IncentiviseEvent", {
            index: bcs.u64(),
            incentive_ts_ms: bcs.u64(),
            ts_ms: bcs.u64(),
            incentive_ppm: bcs.u64(),
            ppm_adjustment: bcs.u64(),
            total_locked: bcs.u64(),
            total_incentive: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): IncentiviseEvent {
        return IncentiviseEvent.reified().new({
            index: decodeFromFields("u64", fields.index),
            incentiveTsMs: decodeFromFields("u64", fields.incentive_ts_ms),
            tsMs: decodeFromFields("u64", fields.ts_ms),
            incentivePpm: decodeFromFields("u64", fields.incentive_ppm),
            ppmAdjustment: decodeFromFields("u64", fields.ppm_adjustment),
            totalLocked: decodeFromFields("u64", fields.total_locked),
            totalIncentive: decodeFromFields("u64", fields.total_incentive),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): IncentiviseEvent {
        if (!isIncentiviseEvent(item.type)) {
            throw new Error("not a IncentiviseEvent type");
        }

        return IncentiviseEvent.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            incentiveTsMs: decodeFromFieldsWithTypes("u64", item.fields.incentive_ts_ms),
            tsMs: decodeFromFieldsWithTypes("u64", item.fields.ts_ms),
            incentivePpm: decodeFromFieldsWithTypes("u64", item.fields.incentive_ppm),
            ppmAdjustment: decodeFromFieldsWithTypes("u64", item.fields.ppm_adjustment),
            totalLocked: decodeFromFieldsWithTypes("u64", item.fields.total_locked),
            totalIncentive: decodeFromFieldsWithTypes("u64", item.fields.total_incentive),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): IncentiviseEvent {
        return IncentiviseEvent.fromFields(IncentiviseEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            incentiveTsMs: this.incentiveTsMs.toString(),
            tsMs: this.tsMs.toString(),
            incentivePpm: this.incentivePpm.toString(),
            ppmAdjustment: this.ppmAdjustment.toString(),
            totalLocked: this.totalLocked.toString(),
            totalIncentive: this.totalIncentive.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): IncentiviseEvent {
        return IncentiviseEvent.reified().new({
            index: decodeFromJSONField("u64", field.index),
            incentiveTsMs: decodeFromJSONField("u64", field.incentiveTsMs),
            tsMs: decodeFromJSONField("u64", field.tsMs),
            incentivePpm: decodeFromJSONField("u64", field.incentivePpm),
            ppmAdjustment: decodeFromJSONField("u64", field.ppmAdjustment),
            totalLocked: decodeFromJSONField("u64", field.totalLocked),
            totalIncentive: decodeFromJSONField("u64", field.totalIncentive),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): IncentiviseEvent {
        if (json.$typeName !== IncentiviseEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return IncentiviseEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): IncentiviseEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isIncentiviseEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a IncentiviseEvent object`);
        }
        return IncentiviseEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<IncentiviseEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching IncentiviseEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isIncentiviseEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a IncentiviseEvent object`);
        }
        return IncentiviseEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== LeaveEvent =============================== */

export function isLeaveEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LeaveEvent";
}

export interface LeaveEventFields {
    index: ToField<"u64">;
    user: ToField<"address">;
    u64Padding: ToField<Vector<"u64">>;
}

export type LeaveEventReified = Reified<LeaveEvent, LeaveEventFields>;

export class LeaveEvent implements StructClass {
    static readonly $typeName = "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LeaveEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = LeaveEvent.$typeName;

    readonly $fullTypeName: "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LeaveEvent";

    readonly $typeArgs: [];

    readonly index: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: LeaveEventFields) {
        this.$fullTypeName = composeSuiType(
            LeaveEvent.$typeName,
            ...typeArgs
        ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LeaveEvent";
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.user = fields.user;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): LeaveEventReified {
        return {
            typeName: LeaveEvent.$typeName,
            fullTypeName: composeSuiType(
                LeaveEvent.$typeName,
                ...[]
            ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LeaveEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LeaveEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LeaveEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LeaveEvent.fromBcs(data),
            bcs: LeaveEvent.bcs,
            fromJSONField: (field: any) => LeaveEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LeaveEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LeaveEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => LeaveEvent.fetch(client, id),
            new: (fields: LeaveEventFields) => {
                return new LeaveEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LeaveEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LeaveEvent>> {
        return phantom(LeaveEvent.reified());
    }
    static get p() {
        return LeaveEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("LeaveEvent", {
            index: bcs.u64(),
            user: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): LeaveEvent {
        return LeaveEvent.reified().new({
            index: decodeFromFields("u64", fields.index),
            user: decodeFromFields("address", fields.user),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LeaveEvent {
        if (!isLeaveEvent(item.type)) {
            throw new Error("not a LeaveEvent type");
        }

        return LeaveEvent.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): LeaveEvent {
        return LeaveEvent.fromFields(LeaveEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            user: this.user,
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): LeaveEvent {
        return LeaveEvent.reified().new({
            index: decodeFromJSONField("u64", field.index),
            user: decodeFromJSONField("address", field.user),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): LeaveEvent {
        if (json.$typeName !== LeaveEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LeaveEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LeaveEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLeaveEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LeaveEvent object`);
        }
        return LeaveEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<LeaveEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LeaveEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLeaveEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LeaveEvent object`);
        }
        return LeaveEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== LockReceiptEvent =============================== */

export function isLockReceiptEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockReceiptEvent";
}

export interface LockReceiptEventFields {
    index: ToField<"u64">;
    splitActiveShare: ToField<"u64">;
    splitWarmupShare: ToField<"u64">;
    netDeposit: ToField<"u64">;
    user: ToField<"address">;
    u64Padding: ToField<Vector<"u64">>;
}

export type LockReceiptEventReified = Reified<LockReceiptEvent, LockReceiptEventFields>;

export class LockReceiptEvent implements StructClass {
    static readonly $typeName = "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockReceiptEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = LockReceiptEvent.$typeName;

    readonly $fullTypeName: "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockReceiptEvent";

    readonly $typeArgs: [];

    readonly index: ToField<"u64">;
    readonly splitActiveShare: ToField<"u64">;
    readonly splitWarmupShare: ToField<"u64">;
    readonly netDeposit: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: LockReceiptEventFields) {
        this.$fullTypeName = composeSuiType(
            LockReceiptEvent.$typeName,
            ...typeArgs
        ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockReceiptEvent";
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.splitActiveShare = fields.splitActiveShare;
        this.splitWarmupShare = fields.splitWarmupShare;
        this.netDeposit = fields.netDeposit;
        this.user = fields.user;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): LockReceiptEventReified {
        return {
            typeName: LockReceiptEvent.$typeName,
            fullTypeName: composeSuiType(
                LockReceiptEvent.$typeName,
                ...[]
            ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockReceiptEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LockReceiptEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LockReceiptEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LockReceiptEvent.fromBcs(data),
            bcs: LockReceiptEvent.bcs,
            fromJSONField: (field: any) => LockReceiptEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LockReceiptEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LockReceiptEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => LockReceiptEvent.fetch(client, id),
            new: (fields: LockReceiptEventFields) => {
                return new LockReceiptEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LockReceiptEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LockReceiptEvent>> {
        return phantom(LockReceiptEvent.reified());
    }
    static get p() {
        return LockReceiptEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("LockReceiptEvent", {
            index: bcs.u64(),
            split_active_share: bcs.u64(),
            split_warmup_share: bcs.u64(),
            net_deposit: bcs.u64(),
            user: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): LockReceiptEvent {
        return LockReceiptEvent.reified().new({
            index: decodeFromFields("u64", fields.index),
            splitActiveShare: decodeFromFields("u64", fields.split_active_share),
            splitWarmupShare: decodeFromFields("u64", fields.split_warmup_share),
            netDeposit: decodeFromFields("u64", fields.net_deposit),
            user: decodeFromFields("address", fields.user),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LockReceiptEvent {
        if (!isLockReceiptEvent(item.type)) {
            throw new Error("not a LockReceiptEvent type");
        }

        return LockReceiptEvent.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            splitActiveShare: decodeFromFieldsWithTypes("u64", item.fields.split_active_share),
            splitWarmupShare: decodeFromFieldsWithTypes("u64", item.fields.split_warmup_share),
            netDeposit: decodeFromFieldsWithTypes("u64", item.fields.net_deposit),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): LockReceiptEvent {
        return LockReceiptEvent.fromFields(LockReceiptEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            splitActiveShare: this.splitActiveShare.toString(),
            splitWarmupShare: this.splitWarmupShare.toString(),
            netDeposit: this.netDeposit.toString(),
            user: this.user,
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): LockReceiptEvent {
        return LockReceiptEvent.reified().new({
            index: decodeFromJSONField("u64", field.index),
            splitActiveShare: decodeFromJSONField("u64", field.splitActiveShare),
            splitWarmupShare: decodeFromJSONField("u64", field.splitWarmupShare),
            netDeposit: decodeFromJSONField("u64", field.netDeposit),
            user: decodeFromJSONField("address", field.user),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): LockReceiptEvent {
        if (json.$typeName !== LockReceiptEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LockReceiptEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LockReceiptEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLockReceiptEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LockReceiptEvent object`);
        }
        return LockReceiptEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<LockReceiptEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LockReceiptEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLockReceiptEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LockReceiptEvent object`);
        }
        return LockReceiptEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== LockedReceipt =============================== */

export function isLockedReceipt(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockedReceipt";
}

export interface LockedReceiptFields {
    id: ToField<UID>;
    index: ToField<"u64">;
    user: ToField<"address">;
    receipts: ToField<Vector<TypusDepositReceipt>>;
    leave: ToField<"bool">;
    unsubscribe: ToField<"bool">;
    tsMs: ToField<"u64">;
    incentiveBalance: ToField<"u64">;
    netDeposit: ToField<"u64">;
    totalIncentive: ToField<"u64">;
    totalPremium: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type LockedReceiptReified = Reified<LockedReceipt, LockedReceiptFields>;

export class LockedReceipt implements StructClass {
    static readonly $typeName = "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockedReceipt";
    static readonly $numTypeParams = 0;

    readonly $typeName = LockedReceipt.$typeName;

    readonly $fullTypeName: "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockedReceipt";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly index: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly receipts: ToField<Vector<TypusDepositReceipt>>;
    readonly leave: ToField<"bool">;
    readonly unsubscribe: ToField<"bool">;
    readonly tsMs: ToField<"u64">;
    readonly incentiveBalance: ToField<"u64">;
    readonly netDeposit: ToField<"u64">;
    readonly totalIncentive: ToField<"u64">;
    readonly totalPremium: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: LockedReceiptFields) {
        this.$fullTypeName = composeSuiType(
            LockedReceipt.$typeName,
            ...typeArgs
        ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockedReceipt";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.index = fields.index;
        this.user = fields.user;
        this.receipts = fields.receipts;
        this.leave = fields.leave;
        this.unsubscribe = fields.unsubscribe;
        this.tsMs = fields.tsMs;
        this.incentiveBalance = fields.incentiveBalance;
        this.netDeposit = fields.netDeposit;
        this.totalIncentive = fields.totalIncentive;
        this.totalPremium = fields.totalPremium;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): LockedReceiptReified {
        return {
            typeName: LockedReceipt.$typeName,
            fullTypeName: composeSuiType(
                LockedReceipt.$typeName,
                ...[]
            ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockedReceipt",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LockedReceipt.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LockedReceipt.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LockedReceipt.fromBcs(data),
            bcs: LockedReceipt.bcs,
            fromJSONField: (field: any) => LockedReceipt.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LockedReceipt.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LockedReceipt.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => LockedReceipt.fetch(client, id),
            new: (fields: LockedReceiptFields) => {
                return new LockedReceipt([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LockedReceipt.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LockedReceipt>> {
        return phantom(LockedReceipt.reified());
    }
    static get p() {
        return LockedReceipt.phantom();
    }

    static get bcs() {
        return bcs.struct("LockedReceipt", {
            id: UID.bcs,
            index: bcs.u64(),
            user: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            receipts: bcs.vector(TypusDepositReceipt.bcs),
            leave: bcs.bool(),
            unsubscribe: bcs.bool(),
            ts_ms: bcs.u64(),
            incentive_balance: bcs.u64(),
            net_deposit: bcs.u64(),
            total_incentive: bcs.u64(),
            total_premium: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): LockedReceipt {
        return LockedReceipt.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            index: decodeFromFields("u64", fields.index),
            user: decodeFromFields("address", fields.user),
            receipts: decodeFromFields(reified.vector(TypusDepositReceipt.reified()), fields.receipts),
            leave: decodeFromFields("bool", fields.leave),
            unsubscribe: decodeFromFields("bool", fields.unsubscribe),
            tsMs: decodeFromFields("u64", fields.ts_ms),
            incentiveBalance: decodeFromFields("u64", fields.incentive_balance),
            netDeposit: decodeFromFields("u64", fields.net_deposit),
            totalIncentive: decodeFromFields("u64", fields.total_incentive),
            totalPremium: decodeFromFields("u64", fields.total_premium),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LockedReceipt {
        if (!isLockedReceipt(item.type)) {
            throw new Error("not a LockedReceipt type");
        }

        return LockedReceipt.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            receipts: decodeFromFieldsWithTypes(reified.vector(TypusDepositReceipt.reified()), item.fields.receipts),
            leave: decodeFromFieldsWithTypes("bool", item.fields.leave),
            unsubscribe: decodeFromFieldsWithTypes("bool", item.fields.unsubscribe),
            tsMs: decodeFromFieldsWithTypes("u64", item.fields.ts_ms),
            incentiveBalance: decodeFromFieldsWithTypes("u64", item.fields.incentive_balance),
            netDeposit: decodeFromFieldsWithTypes("u64", item.fields.net_deposit),
            totalIncentive: decodeFromFieldsWithTypes("u64", item.fields.total_incentive),
            totalPremium: decodeFromFieldsWithTypes("u64", item.fields.total_premium),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): LockedReceipt {
        return LockedReceipt.fromFields(LockedReceipt.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            index: this.index.toString(),
            user: this.user,
            receipts: fieldToJSON<Vector<TypusDepositReceipt>>(
                `vector<0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::vault::TypusDepositReceipt>`,
                this.receipts
            ),
            leave: this.leave,
            unsubscribe: this.unsubscribe,
            tsMs: this.tsMs.toString(),
            incentiveBalance: this.incentiveBalance.toString(),
            netDeposit: this.netDeposit.toString(),
            totalIncentive: this.totalIncentive.toString(),
            totalPremium: this.totalPremium.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): LockedReceipt {
        return LockedReceipt.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            index: decodeFromJSONField("u64", field.index),
            user: decodeFromJSONField("address", field.user),
            receipts: decodeFromJSONField(reified.vector(TypusDepositReceipt.reified()), field.receipts),
            leave: decodeFromJSONField("bool", field.leave),
            unsubscribe: decodeFromJSONField("bool", field.unsubscribe),
            tsMs: decodeFromJSONField("u64", field.tsMs),
            incentiveBalance: decodeFromJSONField("u64", field.incentiveBalance),
            netDeposit: decodeFromJSONField("u64", field.netDeposit),
            totalIncentive: decodeFromJSONField("u64", field.totalIncentive),
            totalPremium: decodeFromJSONField("u64", field.totalPremium),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): LockedReceipt {
        if (json.$typeName !== LockedReceipt.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LockedReceipt.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LockedReceipt {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLockedReceipt(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LockedReceipt object`);
        }
        return LockedReceipt.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<LockedReceipt> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LockedReceipt object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLockedReceipt(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LockedReceipt object`);
        }
        return LockedReceipt.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== LockedVault =============================== */

export function isLockedVault(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockedVault";
}

export interface LockedVaultFields {
    id: ToField<UID>;
    index: ToField<"u64">;
    lockedReceipts: ToField<BigVector<ToPhantom<LockedReceipt>>>;
    unlockTsMs: ToField<"u64">;
    lockPeriodMs: ToField<"u64">;
    incentiveToken: ToField<TypeName>;
    incentiveBalance: ToField<"u64">;
    distributedBalance: ToField<"u64">;
    incentivePpm: ToField<"u64">;
    incentivePeriodMs: ToField<"u64">;
    tsMs: ToField<"u64">;
    capacity: ToField<"u64">;
    totalLocked: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type LockedVaultReified = Reified<LockedVault, LockedVaultFields>;

export class LockedVault implements StructClass {
    static readonly $typeName = "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockedVault";
    static readonly $numTypeParams = 0;

    readonly $typeName = LockedVault.$typeName;

    readonly $fullTypeName: "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockedVault";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly index: ToField<"u64">;
    readonly lockedReceipts: ToField<BigVector<ToPhantom<LockedReceipt>>>;
    readonly unlockTsMs: ToField<"u64">;
    readonly lockPeriodMs: ToField<"u64">;
    readonly incentiveToken: ToField<TypeName>;
    readonly incentiveBalance: ToField<"u64">;
    readonly distributedBalance: ToField<"u64">;
    readonly incentivePpm: ToField<"u64">;
    readonly incentivePeriodMs: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    readonly capacity: ToField<"u64">;
    readonly totalLocked: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: LockedVaultFields) {
        this.$fullTypeName = composeSuiType(
            LockedVault.$typeName,
            ...typeArgs
        ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockedVault";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.index = fields.index;
        this.lockedReceipts = fields.lockedReceipts;
        this.unlockTsMs = fields.unlockTsMs;
        this.lockPeriodMs = fields.lockPeriodMs;
        this.incentiveToken = fields.incentiveToken;
        this.incentiveBalance = fields.incentiveBalance;
        this.distributedBalance = fields.distributedBalance;
        this.incentivePpm = fields.incentivePpm;
        this.incentivePeriodMs = fields.incentivePeriodMs;
        this.tsMs = fields.tsMs;
        this.capacity = fields.capacity;
        this.totalLocked = fields.totalLocked;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): LockedVaultReified {
        return {
            typeName: LockedVault.$typeName,
            fullTypeName: composeSuiType(
                LockedVault.$typeName,
                ...[]
            ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockedVault",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LockedVault.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LockedVault.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LockedVault.fromBcs(data),
            bcs: LockedVault.bcs,
            fromJSONField: (field: any) => LockedVault.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LockedVault.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LockedVault.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => LockedVault.fetch(client, id),
            new: (fields: LockedVaultFields) => {
                return new LockedVault([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LockedVault.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LockedVault>> {
        return phantom(LockedVault.reified());
    }
    static get p() {
        return LockedVault.phantom();
    }

    static get bcs() {
        return bcs.struct("LockedVault", {
            id: UID.bcs,
            index: bcs.u64(),
            locked_receipts: BigVector.bcs,
            unlock_ts_ms: bcs.u64(),
            lock_period_ms: bcs.u64(),
            incentive_token: TypeName.bcs,
            incentive_balance: bcs.u64(),
            distributed_balance: bcs.u64(),
            incentive_ppm: bcs.u64(),
            incentive_period_ms: bcs.u64(),
            ts_ms: bcs.u64(),
            capacity: bcs.u64(),
            total_locked: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): LockedVault {
        return LockedVault.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            index: decodeFromFields("u64", fields.index),
            lockedReceipts: decodeFromFields(BigVector.reified(reified.phantom(LockedReceipt.reified())), fields.locked_receipts),
            unlockTsMs: decodeFromFields("u64", fields.unlock_ts_ms),
            lockPeriodMs: decodeFromFields("u64", fields.lock_period_ms),
            incentiveToken: decodeFromFields(TypeName.reified(), fields.incentive_token),
            incentiveBalance: decodeFromFields("u64", fields.incentive_balance),
            distributedBalance: decodeFromFields("u64", fields.distributed_balance),
            incentivePpm: decodeFromFields("u64", fields.incentive_ppm),
            incentivePeriodMs: decodeFromFields("u64", fields.incentive_period_ms),
            tsMs: decodeFromFields("u64", fields.ts_ms),
            capacity: decodeFromFields("u64", fields.capacity),
            totalLocked: decodeFromFields("u64", fields.total_locked),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LockedVault {
        if (!isLockedVault(item.type)) {
            throw new Error("not a LockedVault type");
        }

        return LockedVault.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            lockedReceipts: decodeFromFieldsWithTypes(
                BigVector.reified(reified.phantom(LockedReceipt.reified())),
                item.fields.locked_receipts
            ),
            unlockTsMs: decodeFromFieldsWithTypes("u64", item.fields.unlock_ts_ms),
            lockPeriodMs: decodeFromFieldsWithTypes("u64", item.fields.lock_period_ms),
            incentiveToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.incentive_token),
            incentiveBalance: decodeFromFieldsWithTypes("u64", item.fields.incentive_balance),
            distributedBalance: decodeFromFieldsWithTypes("u64", item.fields.distributed_balance),
            incentivePpm: decodeFromFieldsWithTypes("u64", item.fields.incentive_ppm),
            incentivePeriodMs: decodeFromFieldsWithTypes("u64", item.fields.incentive_period_ms),
            tsMs: decodeFromFieldsWithTypes("u64", item.fields.ts_ms),
            capacity: decodeFromFieldsWithTypes("u64", item.fields.capacity),
            totalLocked: decodeFromFieldsWithTypes("u64", item.fields.total_locked),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): LockedVault {
        return LockedVault.fromFields(LockedVault.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            index: this.index.toString(),
            lockedReceipts: this.lockedReceipts.toJSONField(),
            unlockTsMs: this.unlockTsMs.toString(),
            lockPeriodMs: this.lockPeriodMs.toString(),
            incentiveToken: this.incentiveToken.toJSONField(),
            incentiveBalance: this.incentiveBalance.toString(),
            distributedBalance: this.distributedBalance.toString(),
            incentivePpm: this.incentivePpm.toString(),
            incentivePeriodMs: this.incentivePeriodMs.toString(),
            tsMs: this.tsMs.toString(),
            capacity: this.capacity.toString(),
            totalLocked: this.totalLocked.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): LockedVault {
        return LockedVault.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            index: decodeFromJSONField("u64", field.index),
            lockedReceipts: decodeFromJSONField(BigVector.reified(reified.phantom(LockedReceipt.reified())), field.lockedReceipts),
            unlockTsMs: decodeFromJSONField("u64", field.unlockTsMs),
            lockPeriodMs: decodeFromJSONField("u64", field.lockPeriodMs),
            incentiveToken: decodeFromJSONField(TypeName.reified(), field.incentiveToken),
            incentiveBalance: decodeFromJSONField("u64", field.incentiveBalance),
            distributedBalance: decodeFromJSONField("u64", field.distributedBalance),
            incentivePpm: decodeFromJSONField("u64", field.incentivePpm),
            incentivePeriodMs: decodeFromJSONField("u64", field.incentivePeriodMs),
            tsMs: decodeFromJSONField("u64", field.tsMs),
            capacity: decodeFromJSONField("u64", field.capacity),
            totalLocked: decodeFromJSONField("u64", field.totalLocked),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): LockedVault {
        if (json.$typeName !== LockedVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LockedVault.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LockedVault {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLockedVault(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LockedVault object`);
        }
        return LockedVault.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<LockedVault> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LockedVault object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLockedVault(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LockedVault object`);
        }
        return LockedVault.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== LockedVaultRegistry =============================== */

export function isLockedVaultRegistry(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockedVaultRegistry";
}

export interface LockedVaultRegistryFields {
    id: ToField<UID>;
    vaults: ToField<VecMap<"u64", LockedVault>>;
    authority: ToField<Vector<"address">>;
    version: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type LockedVaultRegistryReified = Reified<LockedVaultRegistry, LockedVaultRegistryFields>;

export class LockedVaultRegistry implements StructClass {
    static readonly $typeName =
        "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockedVaultRegistry";
    static readonly $numTypeParams = 0;

    readonly $typeName = LockedVaultRegistry.$typeName;

    readonly $fullTypeName: "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockedVaultRegistry";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly vaults: ToField<VecMap<"u64", LockedVault>>;
    readonly authority: ToField<Vector<"address">>;
    readonly version: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: LockedVaultRegistryFields) {
        this.$fullTypeName = composeSuiType(
            LockedVaultRegistry.$typeName,
            ...typeArgs
        ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockedVaultRegistry";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.vaults = fields.vaults;
        this.authority = fields.authority;
        this.version = fields.version;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): LockedVaultRegistryReified {
        return {
            typeName: LockedVaultRegistry.$typeName,
            fullTypeName: composeSuiType(
                LockedVaultRegistry.$typeName,
                ...[]
            ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::LockedVaultRegistry",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LockedVaultRegistry.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LockedVaultRegistry.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LockedVaultRegistry.fromBcs(data),
            bcs: LockedVaultRegistry.bcs,
            fromJSONField: (field: any) => LockedVaultRegistry.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LockedVaultRegistry.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LockedVaultRegistry.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => LockedVaultRegistry.fetch(client, id),
            new: (fields: LockedVaultRegistryFields) => {
                return new LockedVaultRegistry([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LockedVaultRegistry.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LockedVaultRegistry>> {
        return phantom(LockedVaultRegistry.reified());
    }
    static get p() {
        return LockedVaultRegistry.phantom();
    }

    static get bcs() {
        return bcs.struct("LockedVaultRegistry", {
            id: UID.bcs,
            vaults: VecMap.bcs(bcs.u64(), LockedVault.bcs),
            authority: bcs.vector(
                bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) })
            ),
            version: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): LockedVaultRegistry {
        return LockedVaultRegistry.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            vaults: decodeFromFields(VecMap.reified("u64", LockedVault.reified()), fields.vaults),
            authority: decodeFromFields(reified.vector("address"), fields.authority),
            version: decodeFromFields("u64", fields.version),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LockedVaultRegistry {
        if (!isLockedVaultRegistry(item.type)) {
            throw new Error("not a LockedVaultRegistry type");
        }

        return LockedVaultRegistry.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            vaults: decodeFromFieldsWithTypes(VecMap.reified("u64", LockedVault.reified()), item.fields.vaults),
            authority: decodeFromFieldsWithTypes(reified.vector("address"), item.fields.authority),
            version: decodeFromFieldsWithTypes("u64", item.fields.version),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): LockedVaultRegistry {
        return LockedVaultRegistry.fromFields(LockedVaultRegistry.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            vaults: this.vaults.toJSONField(),
            authority: fieldToJSON<Vector<"address">>(`vector<address>`, this.authority),
            version: this.version.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): LockedVaultRegistry {
        return LockedVaultRegistry.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            vaults: decodeFromJSONField(VecMap.reified("u64", LockedVault.reified()), field.vaults),
            authority: decodeFromJSONField(reified.vector("address"), field.authority),
            version: decodeFromJSONField("u64", field.version),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): LockedVaultRegistry {
        if (json.$typeName !== LockedVaultRegistry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LockedVaultRegistry.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LockedVaultRegistry {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLockedVaultRegistry(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LockedVaultRegistry object`);
        }
        return LockedVaultRegistry.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<LockedVaultRegistry> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LockedVaultRegistry object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLockedVaultRegistry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LockedVaultRegistry object`);
        }
        return LockedVaultRegistry.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== NewLockedVaultEvent =============================== */

export function isNewLockedVaultEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::locked_period_vault::NewLockedVaultEvent";
}

export interface NewLockedVaultEventFields {
    index: ToField<"u64">;
    unlockTsMs: ToField<"u64">;
    lockPeriodMs: ToField<"u64">;
    incentivePpm: ToField<"u64">;
    incentivePeriodMs: ToField<"u64">;
    tsMs: ToField<"u64">;
    capacity: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type NewLockedVaultEventReified = Reified<NewLockedVaultEvent, NewLockedVaultEventFields>;

export class NewLockedVaultEvent implements StructClass {
    static readonly $typeName = "0x0::locked_period_vault::NewLockedVaultEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = NewLockedVaultEvent.$typeName;

    readonly $fullTypeName: "0x0::locked_period_vault::NewLockedVaultEvent";

    readonly $typeArgs: [];

    readonly index: ToField<"u64">;
    readonly unlockTsMs: ToField<"u64">;
    readonly lockPeriodMs: ToField<"u64">;
    readonly incentivePpm: ToField<"u64">;
    readonly incentivePeriodMs: ToField<"u64">;
    readonly tsMs: ToField<"u64">;
    readonly capacity: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: NewLockedVaultEventFields) {
        this.$fullTypeName = composeSuiType(NewLockedVaultEvent.$typeName, ...typeArgs) as "0x0::locked_period_vault::NewLockedVaultEvent";
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.unlockTsMs = fields.unlockTsMs;
        this.lockPeriodMs = fields.lockPeriodMs;
        this.incentivePpm = fields.incentivePpm;
        this.incentivePeriodMs = fields.incentivePeriodMs;
        this.tsMs = fields.tsMs;
        this.capacity = fields.capacity;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): NewLockedVaultEventReified {
        return {
            typeName: NewLockedVaultEvent.$typeName,
            fullTypeName: composeSuiType(NewLockedVaultEvent.$typeName, ...[]) as "0x0::locked_period_vault::NewLockedVaultEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewLockedVaultEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewLockedVaultEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewLockedVaultEvent.fromBcs(data),
            bcs: NewLockedVaultEvent.bcs,
            fromJSONField: (field: any) => NewLockedVaultEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewLockedVaultEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewLockedVaultEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => NewLockedVaultEvent.fetch(client, id),
            new: (fields: NewLockedVaultEventFields) => {
                return new NewLockedVaultEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NewLockedVaultEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NewLockedVaultEvent>> {
        return phantom(NewLockedVaultEvent.reified());
    }
    static get p() {
        return NewLockedVaultEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("NewLockedVaultEvent", {
            index: bcs.u64(),
            unlock_ts_ms: bcs.u64(),
            lock_period_ms: bcs.u64(),
            incentive_ppm: bcs.u64(),
            incentive_period_ms: bcs.u64(),
            ts_ms: bcs.u64(),
            capacity: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): NewLockedVaultEvent {
        return NewLockedVaultEvent.reified().new({
            index: decodeFromFields("u64", fields.index),
            unlockTsMs: decodeFromFields("u64", fields.unlock_ts_ms),
            lockPeriodMs: decodeFromFields("u64", fields.lock_period_ms),
            incentivePpm: decodeFromFields("u64", fields.incentive_ppm),
            incentivePeriodMs: decodeFromFields("u64", fields.incentive_period_ms),
            tsMs: decodeFromFields("u64", fields.ts_ms),
            capacity: decodeFromFields("u64", fields.capacity),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewLockedVaultEvent {
        if (!isNewLockedVaultEvent(item.type)) {
            throw new Error("not a NewLockedVaultEvent type");
        }

        return NewLockedVaultEvent.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            unlockTsMs: decodeFromFieldsWithTypes("u64", item.fields.unlock_ts_ms),
            lockPeriodMs: decodeFromFieldsWithTypes("u64", item.fields.lock_period_ms),
            incentivePpm: decodeFromFieldsWithTypes("u64", item.fields.incentive_ppm),
            incentivePeriodMs: decodeFromFieldsWithTypes("u64", item.fields.incentive_period_ms),
            tsMs: decodeFromFieldsWithTypes("u64", item.fields.ts_ms),
            capacity: decodeFromFieldsWithTypes("u64", item.fields.capacity),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): NewLockedVaultEvent {
        return NewLockedVaultEvent.fromFields(NewLockedVaultEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            unlockTsMs: this.unlockTsMs.toString(),
            lockPeriodMs: this.lockPeriodMs.toString(),
            incentivePpm: this.incentivePpm.toString(),
            incentivePeriodMs: this.incentivePeriodMs.toString(),
            tsMs: this.tsMs.toString(),
            capacity: this.capacity.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): NewLockedVaultEvent {
        return NewLockedVaultEvent.reified().new({
            index: decodeFromJSONField("u64", field.index),
            unlockTsMs: decodeFromJSONField("u64", field.unlockTsMs),
            lockPeriodMs: decodeFromJSONField("u64", field.lockPeriodMs),
            incentivePpm: decodeFromJSONField("u64", field.incentivePpm),
            incentivePeriodMs: decodeFromJSONField("u64", field.incentivePeriodMs),
            tsMs: decodeFromJSONField("u64", field.tsMs),
            capacity: decodeFromJSONField("u64", field.capacity),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): NewLockedVaultEvent {
        if (json.$typeName !== NewLockedVaultEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NewLockedVaultEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NewLockedVaultEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewLockedVaultEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NewLockedVaultEvent object`);
        }
        return NewLockedVaultEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<NewLockedVaultEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewLockedVaultEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewLockedVaultEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewLockedVaultEvent object`);
        }
        return NewLockedVaultEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== RemoveIncentiveEvent =============================== */

export function isRemoveIncentiveEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::locked_period_vault::RemoveIncentiveEvent";
}

export interface RemoveIncentiveEventFields {
    index: ToField<"u64">;
    value: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type RemoveIncentiveEventReified = Reified<RemoveIncentiveEvent, RemoveIncentiveEventFields>;

export class RemoveIncentiveEvent implements StructClass {
    static readonly $typeName = "0x0::locked_period_vault::RemoveIncentiveEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = RemoveIncentiveEvent.$typeName;

    readonly $fullTypeName: "0x0::locked_period_vault::RemoveIncentiveEvent";

    readonly $typeArgs: [];

    readonly index: ToField<"u64">;
    readonly value: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: RemoveIncentiveEventFields) {
        this.$fullTypeName = composeSuiType(
            RemoveIncentiveEvent.$typeName,
            ...typeArgs
        ) as "0x0::locked_period_vault::RemoveIncentiveEvent";
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.value = fields.value;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): RemoveIncentiveEventReified {
        return {
            typeName: RemoveIncentiveEvent.$typeName,
            fullTypeName: composeSuiType(RemoveIncentiveEvent.$typeName, ...[]) as "0x0::locked_period_vault::RemoveIncentiveEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RemoveIncentiveEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RemoveIncentiveEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RemoveIncentiveEvent.fromBcs(data),
            bcs: RemoveIncentiveEvent.bcs,
            fromJSONField: (field: any) => RemoveIncentiveEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RemoveIncentiveEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RemoveIncentiveEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => RemoveIncentiveEvent.fetch(client, id),
            new: (fields: RemoveIncentiveEventFields) => {
                return new RemoveIncentiveEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RemoveIncentiveEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RemoveIncentiveEvent>> {
        return phantom(RemoveIncentiveEvent.reified());
    }
    static get p() {
        return RemoveIncentiveEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RemoveIncentiveEvent", {
            index: bcs.u64(),
            value: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): RemoveIncentiveEvent {
        return RemoveIncentiveEvent.reified().new({
            index: decodeFromFields("u64", fields.index),
            value: decodeFromFields("u64", fields.value),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveIncentiveEvent {
        if (!isRemoveIncentiveEvent(item.type)) {
            throw new Error("not a RemoveIncentiveEvent type");
        }

        return RemoveIncentiveEvent.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            value: decodeFromFieldsWithTypes("u64", item.fields.value),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): RemoveIncentiveEvent {
        return RemoveIncentiveEvent.fromFields(RemoveIncentiveEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            value: this.value.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): RemoveIncentiveEvent {
        return RemoveIncentiveEvent.reified().new({
            index: decodeFromJSONField("u64", field.index),
            value: decodeFromJSONField("u64", field.value),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): RemoveIncentiveEvent {
        if (json.$typeName !== RemoveIncentiveEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RemoveIncentiveEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RemoveIncentiveEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemoveIncentiveEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RemoveIncentiveEvent object`);
        }
        return RemoveIncentiveEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<RemoveIncentiveEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RemoveIncentiveEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemoveIncentiveEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemoveIncentiveEvent object`);
        }
        return RemoveIncentiveEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UnlockReceiptEvent =============================== */

export function isUnlockReceiptEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::UnlockReceiptEvent";
}

export interface UnlockReceiptEventFields {
    index: ToField<"u64">;
    user: ToField<"address">;
    leave: ToField<"bool">;
    unsubscribe: ToField<"bool">;
    tsMs: ToField<"u64">;
    incentiveBalance: ToField<"u64">;
    netDeposit: ToField<"u64">;
    totalIncentive: ToField<"u64">;
    totalPremium: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type UnlockReceiptEventReified = Reified<UnlockReceiptEvent, UnlockReceiptEventFields>;

export class UnlockReceiptEvent implements StructClass {
    static readonly $typeName =
        "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::UnlockReceiptEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UnlockReceiptEvent.$typeName;

    readonly $fullTypeName: "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::UnlockReceiptEvent";

    readonly $typeArgs: [];

    readonly index: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly leave: ToField<"bool">;
    readonly unsubscribe: ToField<"bool">;
    readonly tsMs: ToField<"u64">;
    readonly incentiveBalance: ToField<"u64">;
    readonly netDeposit: ToField<"u64">;
    readonly totalIncentive: ToField<"u64">;
    readonly totalPremium: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: UnlockReceiptEventFields) {
        this.$fullTypeName = composeSuiType(
            UnlockReceiptEvent.$typeName,
            ...typeArgs
        ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::UnlockReceiptEvent";
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.user = fields.user;
        this.leave = fields.leave;
        this.unsubscribe = fields.unsubscribe;
        this.tsMs = fields.tsMs;
        this.incentiveBalance = fields.incentiveBalance;
        this.netDeposit = fields.netDeposit;
        this.totalIncentive = fields.totalIncentive;
        this.totalPremium = fields.totalPremium;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): UnlockReceiptEventReified {
        return {
            typeName: UnlockReceiptEvent.$typeName,
            fullTypeName: composeSuiType(
                UnlockReceiptEvent.$typeName,
                ...[]
            ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::UnlockReceiptEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UnlockReceiptEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UnlockReceiptEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UnlockReceiptEvent.fromBcs(data),
            bcs: UnlockReceiptEvent.bcs,
            fromJSONField: (field: any) => UnlockReceiptEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UnlockReceiptEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UnlockReceiptEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => UnlockReceiptEvent.fetch(client, id),
            new: (fields: UnlockReceiptEventFields) => {
                return new UnlockReceiptEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UnlockReceiptEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UnlockReceiptEvent>> {
        return phantom(UnlockReceiptEvent.reified());
    }
    static get p() {
        return UnlockReceiptEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UnlockReceiptEvent", {
            index: bcs.u64(),
            user: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            leave: bcs.bool(),
            unsubscribe: bcs.bool(),
            ts_ms: bcs.u64(),
            incentive_balance: bcs.u64(),
            net_deposit: bcs.u64(),
            total_incentive: bcs.u64(),
            total_premium: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): UnlockReceiptEvent {
        return UnlockReceiptEvent.reified().new({
            index: decodeFromFields("u64", fields.index),
            user: decodeFromFields("address", fields.user),
            leave: decodeFromFields("bool", fields.leave),
            unsubscribe: decodeFromFields("bool", fields.unsubscribe),
            tsMs: decodeFromFields("u64", fields.ts_ms),
            incentiveBalance: decodeFromFields("u64", fields.incentive_balance),
            netDeposit: decodeFromFields("u64", fields.net_deposit),
            totalIncentive: decodeFromFields("u64", fields.total_incentive),
            totalPremium: decodeFromFields("u64", fields.total_premium),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UnlockReceiptEvent {
        if (!isUnlockReceiptEvent(item.type)) {
            throw new Error("not a UnlockReceiptEvent type");
        }

        return UnlockReceiptEvent.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            leave: decodeFromFieldsWithTypes("bool", item.fields.leave),
            unsubscribe: decodeFromFieldsWithTypes("bool", item.fields.unsubscribe),
            tsMs: decodeFromFieldsWithTypes("u64", item.fields.ts_ms),
            incentiveBalance: decodeFromFieldsWithTypes("u64", item.fields.incentive_balance),
            netDeposit: decodeFromFieldsWithTypes("u64", item.fields.net_deposit),
            totalIncentive: decodeFromFieldsWithTypes("u64", item.fields.total_incentive),
            totalPremium: decodeFromFieldsWithTypes("u64", item.fields.total_premium),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): UnlockReceiptEvent {
        return UnlockReceiptEvent.fromFields(UnlockReceiptEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            user: this.user,
            leave: this.leave,
            unsubscribe: this.unsubscribe,
            tsMs: this.tsMs.toString(),
            incentiveBalance: this.incentiveBalance.toString(),
            netDeposit: this.netDeposit.toString(),
            totalIncentive: this.totalIncentive.toString(),
            totalPremium: this.totalPremium.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): UnlockReceiptEvent {
        return UnlockReceiptEvent.reified().new({
            index: decodeFromJSONField("u64", field.index),
            user: decodeFromJSONField("address", field.user),
            leave: decodeFromJSONField("bool", field.leave),
            unsubscribe: decodeFromJSONField("bool", field.unsubscribe),
            tsMs: decodeFromJSONField("u64", field.tsMs),
            incentiveBalance: decodeFromJSONField("u64", field.incentiveBalance),
            netDeposit: decodeFromJSONField("u64", field.netDeposit),
            totalIncentive: decodeFromJSONField("u64", field.totalIncentive),
            totalPremium: decodeFromJSONField("u64", field.totalPremium),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): UnlockReceiptEvent {
        if (json.$typeName !== UnlockReceiptEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UnlockReceiptEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UnlockReceiptEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUnlockReceiptEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UnlockReceiptEvent object`);
        }
        return UnlockReceiptEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<UnlockReceiptEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UnlockReceiptEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUnlockReceiptEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UnlockReceiptEvent object`);
        }
        return UnlockReceiptEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== WithdrawIncentiveEvent =============================== */

export function isWithdrawIncentiveEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::WithdrawIncentiveEvent";
}

export interface WithdrawIncentiveEventFields {
    index: ToField<"u64">;
    user: ToField<"address">;
    incentiveValue: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type WithdrawIncentiveEventReified = Reified<WithdrawIncentiveEvent, WithdrawIncentiveEventFields>;

export class WithdrawIncentiveEvent implements StructClass {
    static readonly $typeName =
        "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::WithdrawIncentiveEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = WithdrawIncentiveEvent.$typeName;

    readonly $fullTypeName: "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::WithdrawIncentiveEvent";

    readonly $typeArgs: [];

    readonly index: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly incentiveValue: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: WithdrawIncentiveEventFields) {
        this.$fullTypeName = composeSuiType(
            WithdrawIncentiveEvent.$typeName,
            ...typeArgs
        ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::WithdrawIncentiveEvent";
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.user = fields.user;
        this.incentiveValue = fields.incentiveValue;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): WithdrawIncentiveEventReified {
        return {
            typeName: WithdrawIncentiveEvent.$typeName,
            fullTypeName: composeSuiType(
                WithdrawIncentiveEvent.$typeName,
                ...[]
            ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::WithdrawIncentiveEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => WithdrawIncentiveEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawIncentiveEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => WithdrawIncentiveEvent.fromBcs(data),
            bcs: WithdrawIncentiveEvent.bcs,
            fromJSONField: (field: any) => WithdrawIncentiveEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => WithdrawIncentiveEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => WithdrawIncentiveEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => WithdrawIncentiveEvent.fetch(client, id),
            new: (fields: WithdrawIncentiveEventFields) => {
                return new WithdrawIncentiveEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return WithdrawIncentiveEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<WithdrawIncentiveEvent>> {
        return phantom(WithdrawIncentiveEvent.reified());
    }
    static get p() {
        return WithdrawIncentiveEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("WithdrawIncentiveEvent", {
            index: bcs.u64(),
            user: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            incentive_value: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): WithdrawIncentiveEvent {
        return WithdrawIncentiveEvent.reified().new({
            index: decodeFromFields("u64", fields.index),
            user: decodeFromFields("address", fields.user),
            incentiveValue: decodeFromFields("u64", fields.incentive_value),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): WithdrawIncentiveEvent {
        if (!isWithdrawIncentiveEvent(item.type)) {
            throw new Error("not a WithdrawIncentiveEvent type");
        }

        return WithdrawIncentiveEvent.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            incentiveValue: decodeFromFieldsWithTypes("u64", item.fields.incentive_value),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): WithdrawIncentiveEvent {
        return WithdrawIncentiveEvent.fromFields(WithdrawIncentiveEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            user: this.user,
            incentiveValue: this.incentiveValue.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): WithdrawIncentiveEvent {
        return WithdrawIncentiveEvent.reified().new({
            index: decodeFromJSONField("u64", field.index),
            user: decodeFromJSONField("address", field.user),
            incentiveValue: decodeFromJSONField("u64", field.incentiveValue),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): WithdrawIncentiveEvent {
        if (json.$typeName !== WithdrawIncentiveEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return WithdrawIncentiveEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): WithdrawIncentiveEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isWithdrawIncentiveEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a WithdrawIncentiveEvent object`);
        }
        return WithdrawIncentiveEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<WithdrawIncentiveEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching WithdrawIncentiveEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawIncentiveEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a WithdrawIncentiveEvent object`);
        }
        return WithdrawIncentiveEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== WithdrawPremiumEvent =============================== */

export function isWithdrawPremiumEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::WithdrawPremiumEvent";
}

export interface WithdrawPremiumEventFields {
    index: ToField<"u64">;
    user: ToField<"address">;
    u64Padding: ToField<Vector<"u64">>;
}

export type WithdrawPremiumEventReified = Reified<WithdrawPremiumEvent, WithdrawPremiumEventFields>;

export class WithdrawPremiumEvent implements StructClass {
    static readonly $typeName =
        "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::WithdrawPremiumEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = WithdrawPremiumEvent.$typeName;

    readonly $fullTypeName: "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::WithdrawPremiumEvent";

    readonly $typeArgs: [];

    readonly index: ToField<"u64">;
    readonly user: ToField<"address">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: WithdrawPremiumEventFields) {
        this.$fullTypeName = composeSuiType(
            WithdrawPremiumEvent.$typeName,
            ...typeArgs
        ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::WithdrawPremiumEvent";
        this.$typeArgs = typeArgs;

        this.index = fields.index;
        this.user = fields.user;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): WithdrawPremiumEventReified {
        return {
            typeName: WithdrawPremiumEvent.$typeName,
            fullTypeName: composeSuiType(
                WithdrawPremiumEvent.$typeName,
                ...[]
            ) as "0xc1feadc8cfc768915b9871037d31b5b03f0dceb4418423a128edd12a134b6d22::locked_period_vault::WithdrawPremiumEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => WithdrawPremiumEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawPremiumEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => WithdrawPremiumEvent.fromBcs(data),
            bcs: WithdrawPremiumEvent.bcs,
            fromJSONField: (field: any) => WithdrawPremiumEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => WithdrawPremiumEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => WithdrawPremiumEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => WithdrawPremiumEvent.fetch(client, id),
            new: (fields: WithdrawPremiumEventFields) => {
                return new WithdrawPremiumEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return WithdrawPremiumEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<WithdrawPremiumEvent>> {
        return phantom(WithdrawPremiumEvent.reified());
    }
    static get p() {
        return WithdrawPremiumEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("WithdrawPremiumEvent", {
            index: bcs.u64(),
            user: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): WithdrawPremiumEvent {
        return WithdrawPremiumEvent.reified().new({
            index: decodeFromFields("u64", fields.index),
            user: decodeFromFields("address", fields.user),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): WithdrawPremiumEvent {
        if (!isWithdrawPremiumEvent(item.type)) {
            throw new Error("not a WithdrawPremiumEvent type");
        }

        return WithdrawPremiumEvent.reified().new({
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): WithdrawPremiumEvent {
        return WithdrawPremiumEvent.fromFields(WithdrawPremiumEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            index: this.index.toString(),
            user: this.user,
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): WithdrawPremiumEvent {
        return WithdrawPremiumEvent.reified().new({
            index: decodeFromJSONField("u64", field.index),
            user: decodeFromJSONField("address", field.user),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): WithdrawPremiumEvent {
        if (json.$typeName !== WithdrawPremiumEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return WithdrawPremiumEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): WithdrawPremiumEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isWithdrawPremiumEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a WithdrawPremiumEvent object`);
        }
        return WithdrawPremiumEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<WithdrawPremiumEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching WithdrawPremiumEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawPremiumEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a WithdrawPremiumEvent object`);
        }
        return WithdrawPremiumEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
